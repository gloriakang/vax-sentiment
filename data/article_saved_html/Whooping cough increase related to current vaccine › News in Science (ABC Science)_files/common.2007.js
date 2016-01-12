/*
ABC News common scripts
Created by: Andrew Kesper, October 2006
Modified by: Andrew Kesper, 7 October 2010
*/

news = true; // News livery
if (!getQueryStringVariable('site').match(/(^$|^news)/)) news = false; // one-story-many-views


/************* NEW FUNCTIONS ***************/
// Add new string functions
String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ''); };
String.prototype.toTitleCase = function() { 
	var ls = this.toLowerCase();
	var la = ls.split(' ');
	for (var i=0; i<la.length; i++) la[i] = la[i].charAt(0).toUpperCase()+la[i].slice(1);
	return la.join(' ');
}

// Add encodeURIComponent and decodeURIComponent capability for old browsers (e.g. Win IE 5.0, Mac IE 5.x). Uses escape/unescape and converts '+' to/from '%2B'
if (!window.encodeURIComponent) encodeURIComponent = function (s) { return escape(s).replace(/\+/, '%2B'); };
if (!window.decodeURIComponent) decodeURIComponent = function (s) { return unescape(s.replace(/%2B/, '+')); };

// Native XMLHttpRequest (AJAX) object for IE
if (!window.XMLHttpRequest && window.ActiveXObject) {
	window.XMLHttpRequest = function() {
		try { return new ActiveXObject('Microsoft.XMLHTTP'); } 
		catch (e) { }
		return null;
	};
}

// Fix IE6 background flicker bug
try { document.execCommand("BackgroundImageCache", false, true); } catch(err) {}

// Andrew's version of getElementsByTagName that supports an XML namespace prefix
// Example usage: getElementsByTagNameScope(document, 'media', 'content')
function getElementsByTagNameScope (xmlelement, scope, localname) {
	// Works in IE and FF3:
	var output = xmlelement.getElementsByTagName(scope+':'+localname);
	if (output.length > 0) return output;
	// If no elements were found, try this alternative method instead...
	// Works in Firefox 2, Safari, Opera:
	output = new Array();
	var temp = xmlelement.getElementsByTagName(localname);
	for (var i=0; i<temp.length; i++) {
		if (temp[i].prefix == scope) output[output.length] = temp[i];
	}
	return output;
}

// Andrew's version of getElementsByClassName that supports older browsers
// Example usage: getElementsByClassNameAK(document, 'section')
function getElementsByClassNameAK (elem, theClass) {
	if (typeof document.getElementsByClassName != 'undefined') return elem.getElementsByClassName(theClass);
	var e = elem.getElementsByTagName('*');
	var e2 = new Array();
	for (var i=0; i<e.length; i++) {
		if (classExists(e[i], theClass)) e2[e2.length] = e[i];
	}
	return e2;
}

function addLoadEvent (func) { // Source: http://simon.incutio.com/archive/2004/05/26/addLoadEvent
	var oldonload = window.onload;
	if (typeof window.onload != 'function') window.onload = func;
	else {
		window.onload = function() {
			if (oldonload) oldonload();
			func();
		}
	}
}

// Run the onload event now instead of when the page has fully finished loading
function runLoadEvent () {
	window.onload();
	window.onload = function () {};
}

// Add a CSS class to the specified element (will not add the class if it already exists)
function classAdd (element, theclass) {
	if (!element) return;
	if (!element.className) element.className = '';
	var reg = new RegExp('(^| )'+theclass+'( |$)', 'g');
	if (element.className.search(reg) == -1) element.className = (element.className + ' ' + theclass).trim();
}

// Remove a CSS class from the specified element
function classRemove (element, theclass) {
	if (!element) return;
	if (!element.className) return;
	var reg = new RegExp('(^| )'+theclass+'( |$)', 'g');
	element.className = element.className.replace(reg, ' ').trim();
}

// Return true if a class name exists in the specified element
function classExists (element, theclass) {
	if (!element) return false;
	if (!element.className) return false;
	var reg = new RegExp('(^| )'+theclass+'( |$)', 'g');
	return reg.test(element.className);
}



// Return query string variable, or an empty string if it doesn't exist
// Example: getQueryStringVariable('latitude', 'lat') returns value of 'latitide', if that doesn't exist, returns value of 'lat', if that doesn't exist, returns an empty string
function getQueryStringVariable () {
	var query = window.location.search.substring(1);
	var vars = query.split('&');
	for (var i=0; i<getQueryStringVariable.arguments.length; i++) {
		for (var j=0; j<vars.length; j++) {
			var pair = vars[j].split('=');
			if (pair[0] == getQueryStringVariable.arguments[i]) return decodeURIComponent(pair[1]);
		}
	}
	return '';
}




/*************** PREFERENCES ****************/

// Set up out default preferences
preferences = new Array(); // An array of preference objects
preferences[preferences.length] = new Preference('connection', new Array('hi', 'lo'), 'hi');
preferences[preferences.length] = new Preference('video', new Array('inpage', 'wm', 'real'), 'inpage');
preferences[preferences.length] = new Preference('audio', new Array('inpage', 'wm', 'real', 'mp3'), 'inpage');
preferences[preferences.length] = new Preference('timestamp', new Array('relative', 'absolute', '24hour'), 'relative');
preferences[preferences.length] = new Preference('layout', new Array('fixed', 'liquid'), 'fixed');
preferences[preferences.length] = new Preference('state', new Array('nsw', 'vic', 'qld', 'wa', 'sa', 'tas', 'act', 'nt'), 'nsw');
preferences[preferences.length] = new Preference('homepagetab', new Array('topstories', 'justin', 'mostpopular'), 'topstories');
preferences[preferences.length] = new Preference('mapapi', new Array('google', 'yahoo', 'microsoft'), 'google');
preferences[preferences.length] = new Preference('glance', new Array('show', 'hide'), 'hide');
preferences[preferences.length] = new Preference('ticker', new Array('on', 'off'), 'on');


// Name of our preferences cookie
var preferencesCookie = 'newsPreferences';

// Definition of a preference object
function Preference (name, possibleValues, defaultValue) {
	this.name = name;
	this.possibleValues = possibleValues;
	this.defaultValue = defaultValue;
	this.value = preferenceGet(name); // The value stored in the cookie, or if there is none, the default value
}

// Set a preference, and store it in the cookie for later retrieval
function preferenceSet (name, value) {
	for (var i=0; i<preferences.length; i++) {
		if (preferences[i].name == name) {
			for (var j=0; j<preferences[i].possibleValues.length; j++) {
				if (preferences[i].possibleValues[j] == value) {
					// If we've got to this point, the value specified is valid
					var cookieData = getCookie(preferencesCookie);
					var p = new Array();
					if (cookieData != null && cookieData != 'undefined' && cookieData != '') {
						p = cookieData.split(';');
						for (var k=0; k<p.length; k++) {
							var x = p[k].split('~');
							if (x[0] == name) p.splice(k, 1); // remove existing value
						}
					}
					p[p.length] = name+'~'+value; // add new value
					cookieData = p.join(';');
					var exp = new Date().getTime();
					exp += 1000*60*60*24*31; // expire 1 month from now
					exp = new Date(exp);
					setCookie(preferencesCookie, cookieData, exp, '/', '.abc.net.au');
				}
			}
		}
	}
}

// Get a preference value
function preferenceGet (name) {
	// Look in cookie
	var cookieData = getCookie(preferencesCookie);
	if (cookieData != null && cookieData != 'undefined' && cookieData != '') {
		var p = cookieData.split(';');
		for (var i=0; i<p.length; i++) {
			var x = p[i].split('~');
			if (x[0] == name) return x[1];
		}
	}
	// Can't find preference in cookie - now look in default preferences
	for (var i=0; i<preferences.length; i++) {
		if (preferences[i].name == name) return preferences[i].defaultValue;
	}
	// Looks like a non-existant preference has been requested
	return null;
}

function preferenceReset() {
	deleteCookie(preferencesCookie, '/', '.abc.net.au');
}

/*************** PREFERENCES PANEL ****************/

function enablePreferences () {
	var n2;
	if (n2 = document.getElementById('nav_2nd')) {
		var pBtn = document.createElement('span');
		pBtn.id = 'preferencesButton';
		pBtn.innerHTML = '<a href="http://www.abc.net.au/news/preferences.htm" onclick="return prefOpen();"><img src="http://www.abc.net.au/science/js/abcNews/nav_preferences.gif" alt="Preferences" width="17" height="15" /></a>';
		n2.appendChild(pBtn);
	}
}
if (news) addLoadEvent(enablePreferences);

function prefOpen () {
	if (!document.domain.match(/^([-a-zA-Z0-9]+\.)?abc\.net\.au$/)) return true;
	if (document.domain.match(/^(search|upload|blogs|www2b)\.abc\.net\.au$/)) return true;
	var n2;
	if (n2 = document.getElementById('nav_2nd')) {
		var pPanel;
		if (pPanel = document.getElementById('preferencesPanel')) {
			prefClose();
		}
		else {
			pPanel = document.createElement('div');
			pPanel.id = 'preferencesPanel';
			pPanel.innerHTML = 'Loading, please wait...';
			n2.parentNode.insertBefore(pPanel, n2.nextSibling);
			simpleAjax('/news/includes/2007/preferences.htm', 'preferencesPanel', 'prefLoad();');
		}
	}
	return false;
}

function prefClose () {
	var pPanel;
	if (pPanel = document.getElementById('preferencesPanel')) {
		pPanel.parentNode.removeChild(pPanel);
	}
}

function prefLoad () {
	for (var e=0; e<document.forms['preferences'].elements.length; e++) {
		var r = document.forms['preferences'].elements[e];
		if (r.type == 'radio') {
			if (preferenceGet(r.name) == r.value) {
				r.checked = true;
			}
			else {
				r.checked = false;
			}
		}
	}
}
function prefSave () {
	for (var e=0; e<document.forms['preferences'].elements.length; e++) {
		var r = document.forms['preferences'].elements[e];
		if (r.type == 'radio') {
			if (r.checked) {
				preferenceSet(r.name, r.value); 
			}
		}
	}
	alert('Your preferences have been saved.');
	setLayout();
	relativeTimestamps();
	prefClose();
}
function prefReset () {
	if (confirm('Are you sure you want to clear your preferences and return to the default settings?')) {
		alert('Your preferences have been reset.');
		preferenceReset();
		prefLoad();
		setLayout();
		relativeTimestamps();
	}
}

/************* MEDIA RSS ***************/

inpageplayer = 'inpageplayer'; // id of in-page player (Flash container)

function showVideo (mediaUrl, insertafter, width, autoplay, guid) {
	if (!mediaUrl) return true;
	if (!insertafter) return true;
	if (typeof insertafter == 'string') insertafter = document.getElementById(insertafter);
	if (!width) var width = '100%';
	if (!autoplay) var autoplay = 'true';
	if (!guid) var guid = null;
	if (temp = document.getElementById(inpageplayer)) {
		if (temp.previousSibling != null) classRemove(temp.previousSibling, 'active');
		temp.parentNode.removeChild(temp);
		delete temp;
	}
	if (typeof nowPlaying != 'undefined' && nowPlaying == mediaUrl+'?'+guid) {
		// was already playing this item - don't want to play it again
		delete nowPlaying;
	}
	else {
		nowPlaying = mediaUrl+'?'+guid;
		if (mediaUrl.indexOf('.flv') != -1) { // already know the FLV file
			showVideo_play(mediaUrl, insertafter, width, autoplay);
		}
		else if (mediaUrl.indexOf('.xml') != -1 || mediaUrl.indexOf('.rss') != -1) { // need to read Media RSS file to determine FLV file
			mediaUrl += (mediaUrl.indexOf('?') == -1 ? '?' : '&') + Math.floor(new Date().getTime()/(1000*60*2));
			var ajaxobj = new XMLHttpRequest();
			ajaxobj.onreadystatechange = function() {showVideo_ajax(ajaxobj, insertafter, width, autoplay, guid);};
			ajaxobj.open('GET', mediaUrl, true);
			ajaxobj.send('');
		}
		else { // assume we are directly linking to another type of media file (e.g. asx, ram)
			delete nowPlaying;
			trackVideo(mediaUrl, (insertafter.innerHTML.replace(/<[^>]+>/g, '').trim() || document.title || ''));
			location = mediaUrl;
		}
	}
	if (insertafter.blur) insertafter.blur(); // removes dotted outline from link in Mozilla browsers
	return false;
}
function showVideo_ajax (ajaxobj, insertafter, width, autoplay, guid) {
	if (ajaxobj.readyState == 4) { // only if "loaded"
		if (ajaxobj.status == 200 || ajaxobj.status == 304) { // only if "OK"
			var mediarss = ajaxobj.responseXML; // this is a document node
			var items = mediarss.getElementsByTagName('item');
			if (items.length < 1) return true; // No <item> elements; abort
			var itemsIndex;
			if (guid != null) { // guid specified; use <item> with matching <guid>
				for (var i=0; i<items.length; i++) if (items[i].getElementsByTagName('guid')[0].firstChild.nodeValue == guid) itemsIndex = i;
				if (typeof itemsIndex == 'undefined') return true; // guid not found in Media RSS; abort
			}
			else itemsIndex = 0; // guid not specified; assume first <item>
			var url = '';
			var content = getElementsByTagNameScope(items[itemsIndex], 'media', 'content');
			var format = preferenceGet('video');
			var connection = preferenceGet('connection');
			if (connection == 'lo') var bestbitrate = 999999999; else var bestbitrate = 0;
			for (var j=0; j<content.length; j++) {
				if ((content[j].getAttribute('type') == 'video/x-flv' && format == 'inpage') || (content[j].getAttribute('type') == 'video/x-ms-wmv' && format == 'wm') || (content[j].getAttribute('type') == 'application/vnd.rn-realmedia' && format == 'real')) {
					if ((connection == 'lo' && parseInt(content[j].getAttribute('bitrate'), 10) < bestbitrate) || (connection != 'lo' && parseInt(content[j].getAttribute('bitrate'), 10) > bestbitrate)) {
						bestbitrate = content[j].getAttribute('bitrate');
						url = content[j].getAttribute('url');
					}
				}
			}
			var title = items[itemsIndex].getElementsByTagName('title');
			title = (title.length > 0 ? title[0].firstChild.nodeValue : (insertafter.innerHTML.replace(/<[^>]+>/g, '').trim() || document.title || ''));
			var link = items[itemsIndex].getElementsByTagName('link');
			if (link.length > 0) if (typeof insertafter.href != 'undefined') if (insertafter.href.indexOf('.htm') != -1) if (link[0].firstChild.nodeValue != insertafter.href) var transcript = link[0].firstChild.nodeValue;
			if (url != '') {
				trackVideo(url, title);
				if (format == 'inpage') showVideo_play(url, insertafter, width, autoplay, transcript, title);
				else location = url;
			}
			else { // preferred format not available
				if (typeof insertafter.href != 'undefined') {
					trackVideo(insertafter.href, title);
					location = insertafter.href;
				}
			}
		}
		else { // Media RSS file not available
			trackVideo(insertafter.href, (insertafter.innerHTML.replace(/<[^>]+>/g, '').trim() || document.title || ''));
			location = insertafter.href;
		}
	}
}

function showVideo_play (url, insertafter, width, autoplay, transcript) {
	classAdd(insertafter, 'active');
	if (width.indexOf('%') != -1) var height = Math.round((parseInt(width, 10)/100)*insertafter.parentNode.scrollWidth/16*9); // width is a percentage
	else var height = Math.round(parseInt(width, 10)/16*9); // assume width is in pixels
	var div = document.createElement('DIV');
	div.id = inpageplayer;
	div.className = 'videoplayer';
	insertafter.parentNode.insertBefore(div, insertafter.nextSibling);
	window.onresize = function () {
		resize16x9(inpageplayer+'Object');
	};
	swfurl = 'http://www.abc.net.au/science/js/abcNews/flvplayer.swf';
	var so = new SWFObject(swfurl, inpageplayer+'Object', width, height, '8', '#000000', true);
	so.addParam('allowFullScreen', 'true');
	so.addVariable('mediaURL', url);
	so.addVariable('autoPlay', autoplay);
	so.write(inpageplayer);
	resize16x9(inpageplayer+'Object');
	if (transcript) {
		if (!transcript.match(/news(_dev)?\/(audio|video)\//)) {
			var p = document.createElement('P');
			p.innerHTML = '<small><a href="'+transcript+'" onclick="return popup(this.href, 950, 500);">View Transcript</a></small>';
			div.insertBefore(p, null);
		}
	}
}

function showAudio (mediaUrl, insertafter, width, autoplay, guid) {
	if (!mediaUrl) return true;
	if (!insertafter) return true;
	if (typeof insertafter == 'string') insertafter = document.getElementById(insertafter);
	if (!width) var width = '100%';
	if (!autoplay) var autoplay = 'true';
	if (!guid) var guid = null;
	if (temp = document.getElementById(inpageplayer)) {
		if (temp.previousSibling != null) classRemove(temp.previousSibling, 'active');
		temp.parentNode.removeChild(temp);
		delete temp;
	}
	if (typeof nowPlaying != 'undefined' && nowPlaying == mediaUrl+'?'+guid) {
		// was already playing this item - don't want to play it again
		delete nowPlaying;
	}
	else {
		nowPlaying = mediaUrl+'?'+guid;
		if (mediaUrl.indexOf('.mp3') != -1) { // already know the MP3 file
			showAudio_play(mediaUrl, insertafter, width, autoplay);
		}
		else if (mediaUrl.indexOf('.xml') != -1 || mediaUrl.indexOf('.rss') != -1) { // need to read Media RSS file to determine MP3 file
			mediaUrl += (mediaUrl.indexOf('?') == -1 ? '?' : '&') + Math.floor(new Date().getTime()/(1000*60*2));
			var ajaxobj = new XMLHttpRequest();
			ajaxobj.onreadystatechange = function() {showAudio_ajax(ajaxobj, insertafter, width, autoplay, guid);};
			ajaxobj.open('GET', mediaUrl, true);
			ajaxobj.send('');
		}
		else { // assume we are directly linking to another type of media file (e.g. asx, ram)
			delete nowPlaying;
			trackAudio(mediaUrl, (insertafter.innerHTML.replace(/<[^>]+>/g, '').trim() || document.title || ''));
			location = mediaUrl;
		}
	}
	if (insertafter.blur) insertafter.blur(); // removes dotted outline from link in Mozilla browsers
	return false;
}
function showAudio_ajax (ajaxobj, insertafter, width, autoplay, guid) {
	if (ajaxobj.readyState == 4) { // only if "loaded"
		if (ajaxobj.status == 200 || ajaxobj.status == 304) { // only if "OK"
			var mediarss = ajaxobj.responseXML; // this is a document node
			var items = mediarss.getElementsByTagName('item');
			if (items.length < 1) return true; // No <item> elements; abort
			var itemsIndex;
			if (guid != null) { // guid specified; use <item> with matching <guid>
				for (var i=0; i<items.length; i++) if (items[i].getElementsByTagName('guid')[0].firstChild.nodeValue == guid) itemsIndex = i;
				if (typeof itemsIndex == 'undefined') return true; // guid not found in Media RSS; abort
			}
			else itemsIndex = 0; // guid not specified; assume first <item>
			var url = '';
			var content = getElementsByTagNameScope(items[itemsIndex], 'media', 'content');
			var format = preferenceGet('audio');
			for (var j=0; j<content.length; j++) {
				if ((content[j].getAttribute('type') == 'audio/mpeg' && (format == 'inpage' || format == 'mp3')) || (content[j].getAttribute('type') == 'audio/x-ms-wma' && format == 'wm') || (content[j].getAttribute('type') == 'application/vnd.rn-realmedia' && format == 'real')) {
					url = content[j].getAttribute('url');
				}
			}
			var title = items[itemsIndex].getElementsByTagName('title');
			title = (title.length > 0 ? title[0].firstChild.nodeValue : (insertafter.innerHTML.replace(/<[^>]+>/g, '').trim() || document.title || ''));
			var link = items[itemsIndex].getElementsByTagName('link');
			if (link.length > 0) if (typeof insertafter.href != 'undefined') if (insertafter.href.indexOf('.htm') != -1) if (link[0].firstChild.nodeValue != insertafter.href) var transcript = link[0].firstChild.nodeValue;
			if (url != '') {
				trackAudio(url, title);
				if (format == 'inpage') showAudio_play(url, insertafter, width, autoplay, transcript);
				else location = url;
			}
			else { // preferred format not available
				if (typeof insertafter.href != 'undefined') {
					trackAudio(insertafter.href, title);
					location = insertafter.href;
				}
			}
		}
		else { // Media RSS file not available
			trackAudio(insertafter.href, (insertafter.innerHTML.replace(/<[^>]+>/g, '').trim() || document.title || ''));
			location = insertafter.href;
		}
	}
}

function showAudio_play (url, insertafter, width, autoplay, transcript) {
	classAdd(insertafter, 'active');
	if (width.indexOf('%') != -1) width = Math.round((parseInt(width, 10)/100)*insertafter.parentNode.scrollWidth);
	// Standard size of audio player is 285x40 pixels. Should be no bigger than this
	if (width > 285) width = 285;
	var height = Math.round(width/285*40);
	var div = document.createElement('DIV');
	div.id = inpageplayer;
	div.className = 'audioplayer';
	insertafter.parentNode.insertBefore(div, insertafter.nextSibling);
	window.onresize = function () {};
	if(!swfobject.hasFlashPlayerVersion("1"))
	{
		div.innerHTML = '<a href=\"'+url+'\">Download audio</a>';
	}	
	var swfurl = 'http://www.abc.net.au/science/js/abcNews/mp3player.swf';
	var so = new SWFObject(swfurl, inpageplayer+'Object', width, height, '8', '#FFFFFF', true);
	so.addParam('allowFullScreen', 'true');
	so.addVariable('mediaURL', url);
	so.addVariable('autoPlay', autoplay);
	so.write(inpageplayer);
	if (transcript) {
		if (!transcript.match(/news(_dev)?\/(audio|video)\//)) {
			var p = document.createElement('P');
			p.innerHTML = '<small><a href="'+transcript+'" onclick="return popup(this.href, 950, 500);">View Transcript</a></small>';
			div.insertBefore(p, null);
		}
	}
}

function showPhotos (mediaUrl) {
	if (!mediaUrl) return true;
	if (mediaUrl.indexOf('.xml') != -1 || mediaUrl.indexOf('.rss') != -1) { // assume mediaUrl is a Media RSS file
		var ajaxobj = new XMLHttpRequest();
		ajaxobj.onreadystatechange = function() {showPhotos_ajax(ajaxobj);};
		ajaxobj.open('GET', mediaUrl, true);
		ajaxobj.send('');
	}
	else { // can't do anything with mediaUrl
		return true;
	}
	return false;
}

function showPhotos_ajax (ajaxobj) {
	if (ajaxobj.readyState == 4) { // only if "loaded"
		if (ajaxobj.status == 200 || ajaxobj.status == 304) { // only if "OK"
			slideshow = new Array();
			slideshowIndex = 0;
			// Load existing image into slideshow
			
			// fix for new 340w images inside old layout
			$('#storyPhotosImg').each(function() {
				$(this).css('width', 'auto'); // un-stretch image so I can read the natural width
				if ($(this).width() == 285) {
					// image is new UIG size
					slideshow[slideshow.length] = new StoryPhoto(
						$(this).get(0).src,
						$(this).get(0).width,
						$(this).get(0).height,
						($('#storyPhotosCaption').length > 0 ? $('#storyPhotosCaption').html() : $img.get(0).alt)
					);
				}
			});			
			
			
			// Load rest of items into slideshow
			var mediarss = ajaxobj.responseXML; // this is a document node
			var items = mediarss.getElementsByTagName('item');
			for (var i=0; i<items.length; i++) {
				var source = getElementsByTagNameScope(items[i], 'media', 'copyright')
				var content = getElementsByTagNameScope(items[i], 'media', 'content');
				// add to slideshow if not already present
				// otherwise just set the other versions of the photo
				var addToSlideshow = true;
				for (var j=0; j<content.length; j++) {
					if (content[j].getAttribute('width') == '285' && (content[j].getAttribute('url').match(/\.jpe?g$/i) || content[j].getAttribute('type').match(/^image\/jpe?g$/))) {
						var versions = new Array();
						var tallest = j; // tallest 285-pixel-wide version of this photo
						for (var m=0; m<content.length; m++) {
							if (content[m].getAttribute('width') == '285' && parseInt(content[m].getAttribute('height'), 10) > parseInt(content[tallest].getAttribute('height'), 10)) tallest = m;
							versions[versions.length] = new StoryPhotoVersion(content[m].getAttribute('url'), parseInt(content[m].getAttribute('width'), 10), parseInt(content[m].getAttribute('height'), 10));
						}
						for (var k=0; k<slideshow.length; k++) {
							if (slideshow[k].src == content[j].getAttribute('url') || slideshow[k].src == content[tallest].getAttribute('url')) {
								addToSlideshow = false;
								slideshow[k] = new StoryPhoto(slideshow[k].src, slideshow[k].width, slideshow[k].height, slideshow[k].caption, versions);
							}
						}
						if (addToSlideshow) {
							slideshow[slideshow.length] = new StoryPhoto(content[tallest].getAttribute('url'), parseInt(content[tallest].getAttribute('width'), 10), parseInt(content[tallest].getAttribute('height'), 10), items[i].getElementsByTagName('description')[0].firstChild.nodeValue+(source.length > 0 ? ' ('+source[0].firstChild.nodeValue+')' : ''), versions);
							addToSlideshow = false;
						}
					}
				}
			}
			slideshowInit();
		}
	}
}

function slideshowInit () {
	if (typeof slideshow == 'undefined') return;
	if (slideshow.length < 1) return;
	if (typeof slideshowIndex == 'undefined') slideshowIndex = 0;
	if (slideshow.length > 1) {
		var sp;
		if (sp = document.getElementById('storyPhotos')) {
			var p = document.createElement('P');
			p.id = 'storyPhotosNav';
			p.innerHTML = '<span id="storyPhotosNavPrev"><a href="javascript:slideshowPrev();"><img src="/science/js/abcNews/btn_editorspick_prev_26x16.png" width="26" height="16" /></a></span> <span id="storyPhotosNavNext"><a href="javascript:slideshowNext();"><img src="/science/js/abcNews/btn_editorspick_next_26x16.png" width="26" height="16" /></a></span> <span id="storyPhotosNavText"></span>';
			sp.insertBefore(p, sp.firstChild);
		}
	}
	slideshowUpdate();
}

function slideshowNext () {
	if (typeof slideshow == 'undefined') return;
	if (slideshow.length <= 1) return;
	if (typeof slideshowIndex == 'undefined') slideshowIndex = 0;
	if (slideshowIndex < slideshow.length-1) slideshowIndex++;
	else slideshowIndex = 0;
	if (slideshowIndex < slideshow.length-2) {
		var preload = new Image();
		preload.src = slideshow[slideshowIndex+1].src;
	}
	slideshowUpdate();
}

function slideshowPrev () {
	if (typeof slideshow == 'undefined') return;
	if (slideshow.length <= 1) return;
	if (typeof slideshowIndex == 'undefined') slideshowIndex = 0;
	if (slideshowIndex > 0) slideshowIndex--;
	else slideshowIndex = slideshow.length-1;
	slideshowUpdate();
}

function slideshowUpdate () {
	if (typeof slideshow == 'undefined') return;
	if (slideshow.length < 1) return;
	if (typeof slideshowIndex == 'undefined') slideshowIndex = 0;
	var img, caption, link, navtext;
	if (img = document.getElementById('storyPhotosImg')) {
		if (img.src != slideshow[slideshowIndex].src) {
			currentFade = new Date().getTime();
			opacitySet(img, 0, currentFade);
			img.style.visibility = 'hidden';
			doFade = function () {
				img.src = slideshow[slideshowIndex].src;
				img.width = slideshow[slideshowIndex].width;
				img.height = slideshow[slideshowIndex].height;
				img.title = slideshow[slideshowIndex].caption;
				img.alt = img.title;
				img.onload = function () {
					img.style.visibility = 'visible';
					setTimeout("opacityFade('storyPhotosImg', 0, 100, 150, "+currentFade+")", 100);
				};
			}
			setTimeout("doFade()", 100);
		}
	}
	if (caption = document.getElementById('storyPhotosCaption')) {
		caption.innerHTML = slideshow[slideshowIndex].caption;
	}
	if (link = document.getElementById('storyPhotosLink')) {
		link.href = slideshow[slideshowIndex].versions[slideshow[slideshowIndex].biggest].src;
		link.onclick = function () {
			var img = slideshow[slideshowIndex].versions[slideshow[slideshowIndex].best];
			imgWindow(img.src, null, img.width, img.height, slideshow[slideshowIndex].caption);
			return false;
		};
	}
	if (navtext = document.getElementById('storyPhotosNavText')) {
		navtext.innerHTML = 'Slideshow: Photo '+(slideshowIndex+1)+' of '+slideshow.length;
	}
}

// StoryPhoto object
function StoryPhoto (src, width, height, caption, versions) {
	this.src = src;
	this.width = width;
	this.height = height;
	this.caption = caption;
	if (versions) {
		this.versions = versions; // array of StoryPhotoVersion objects
		this.biggest = 0; // index of biggest version, compared by width*height
		this.best = 0; // index of version most suitable for this screen resolution
		for (var i=0; i<versions.length; i++) { // assign a 'score' to each version - the higher the score, the more suitable it is for displaying on the user's screen
			var score = 1;
			var width = versions[i].width;
			var ratio = width/versions[i].height;
			var idealWidth = screen.width-170;
			var idealRatio = 3/2; // width/height
			if (width > idealWidth) score *= 0.25; // penalise versions that are too wide
			else if (width < 500) score *= 0.25; // penalise versions that are too short
			else if (width > idealWidth*0.9) score *= 3;
			else if (width > idealWidth*0.8) score *= 2.5;
			else if (width > idealWidth*0.7) score *= 2.0;
			else if (width > idealWidth*0.6) score *= 1.5;
			if (Math.abs(ratio - idealRatio) < 0.05) score *= 2.5;
			else if (Math.abs(ratio - idealRatio) < 0.2) score *= 2;
			else if (Math.abs(ratio - idealRatio) < 0.4) score *= 1.5;
			versions[i].score = score;
		}
		for (var i=0; i<versions.length; i++) {
			if (versions[this.biggest].width * versions[this.biggest].height < versions[i].width * versions[i].height) {
				this.biggest = i;
			}
			if ((versions[this.best].score < versions[i].score) || (versions[this.best].score == versions[i].score && versions[this.best].width < versions[i].width)) {
				this.best = i;
			}
		}
	}
}

// StoryPhotoVersion object
function StoryPhotoVersion (src, width, height) {
	this.src = src;
	this.width = width;
	this.height = height;
}

// Open a popup window containing an image, title and caption
function imgWindow (imgurl, windowname, width, height, title, caption) {
	if (!windowname) var windowname = 'abcnewspopup'+new Date().getTime();
	if (!caption) var caption = description;
	var horz = width+120;
	var vert = Math.min(height+160, screen.height-120); // avoid popup displaying taller than the screen resolution
	var left = screen.width/2 - horz/2;
	var top = screen.height/2 - vert/2;
	var w = window.open('', windowname, 'width=' + horz + ',height=' + vert +',toolbar=0,resizable=1,scrollbars=1,left='+left+',top='+top);
	w.document.writeln('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');
	w.document.writeln('<html><head><title>' + title + '</title></head><body>');
	w.document.writeln('<style type="text/css">* {font-family:Verdana,Arial,Helvetica,sans-serif;font-size:100%;color:white;line-height:133%;} html, body {height:100%;margin:0;padding:0;background-color:#222;border:none;} body {font-size:75%;text-align:center;} div.image {max-width:100%;padding:40px 0 30px 0;x-border-bottom:2px solid white;} div.image img {border:3px solid white;} p {margin:0 25px;padding-bottom:8px;} div.caption {padding-top:8px;} a {color:#ccc;}</style>');
	w.document.writeln('<div class="image"><img src="'+imgurl+'" width="'+width+'" height="'+height+'" alt="'+description+'" title="'+description+'" /></div>');
	w.document.writeln('<div class="caption">');
	w.document.writeln('<p>'+caption+'</p>');
	w.document.writeln('<p style="font-size:smaller;"><a href="javascript:window.parent.close();">Close Image</a></p></div>');
	w.document.writeln('</body></html>');
	w.document.close();
	if (window.focus) w.focus();
	return false;
}

function resize16x9 (element) {
	if (typeof element == 'undefined') return;
	if (typeof element == 'string') {
		if (element = document.getElementById(element));
		else return;
	}
	width = element.clientWidth;
	height = Math.round((width/16)*9);
	element.style.height = height+'px';
}

/************* SLIDESHOWPRO PHOTO GALLERY *************/
function showGallery (mediaUrl, insertafter, openFirstAlbum) {
	if (typeof insertafter == 'undefined') return true;
	if (typeof insertafter == 'string') insertafter = document.getElementById(insertafter);
	if (typeof openFirstAlbum == 'undefined') var openFirstAlbum = false;
	var div = document.createElement('DIV');
	div.id = inpageplayer;
	div.className = 'galleryplayer';
	insertafter.parentNode.insertBefore(div, insertafter.nextSibling);
	mediaUrl += encodeURIComponent((mediaUrl.indexOf('?') == -1 ? '?' : '&') + Math.floor(new Date().getTime()/(1000*60*2))); // ensures fresh request every 2 minutes
	var so = new SWFObject('/science/js/abcNews/slideshowpro/slideshowpro.swf', 'slideshowpro', '100%', 510, '8', '#000000', true);
	so.addParam('allowFullScreen', 'true');
	so.addVariable('paramXMLPath', "/science/js/abcNews/slideshowpro/params.xml");
	// For the single album galleries we don't want to show the gallery 
	// selector, just the single album with links back to the selector hidden
	so.addVariable('galleryAppearance', 'Hidden');
	so.addVariable('startup', 'Load Album');
	so.addVariable('navButtonsAppearance', 'Hide Gallery Button');
	so.addVariable('captionElements', 'Caption Only');
	if (typeof mediaUrl != 'undefined') so.addVariable('xmlFilePath', mediaUrl);
	if (openFirstAlbum) so.addVariable('startMode', 'album');
	so.write(inpageplayer);
}


/************* MAPPING ***************/

function showMap (insertafter, width, latitude, longitude, caption) {
	if (!insertafter) return true;
	if (!width) var width = '100%';
	if (!latitude) return true;
	if (!longitude) return true;
	if (!caption) var caption = '';
	if (insertafter.nextSibling != null && classExists(insertafter.nextSibling, 'map')) { // collapse video player if already open
		if (insertafter != null) classRemove(insertafter, 'active');
		insertafter.nextSibling.parentNode.removeChild(insertafter.nextSibling);
	}
	else {
		classAdd(insertafter, 'active');
		var div = document.createElement('DIV');
		div.className = 'map';
		div.style.width = width;
		div.style.height = '1px';
		insertafter.parentNode.insertBefore(div, insertafter.nextSibling);
		resize16x9(div);
		div.innerHTML = ('<iframe src="http://www.abc.net.au/science/js/abcNews/maps/smallmap.htm?latitude='+encodeURIComponent(latitude)+'&amp;longitude='+encodeURIComponent(longitude)+'&amp;caption='+encodeURIComponent(caption)+'" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>');
	}
	if (insertafter.blur) insertafter.blur(); // removes dotted outline from link in Mozilla browsers
	return false;
}
	
/************* COOKIES ***************/

function setCookie(name, value, expires, path, domain, secure) {
    document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

function deleteCookie(name, path, domain) {
	if (getCookie(name)) document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
}


/************* OPACITY ***************/
// (adapted from: http://www.brainerror.net/scripts_js_blendtrans.php)

// Fade from one opacity setting to another
function opacityFade (object, opacStart, opacEnd, millisec, thisFade) {
	if (!thisFade) var thisFade = new Date().getTime();
	currentFade = thisFade;

    //speed for each frame
	var skip = 10;
    var speed = Math.round((millisec / 100) * skip);
    var timer = 0;

    //determine the direction for the blending, if start and end are the same nothing happens
	if (opacStart > opacEnd) {
		for (var i=opacStart; i>=opacEnd; i-=skip) {
			setTimeout("opacitySet('" + object + "', " + i + ", "+thisFade+")",(timer * speed));
			timer++;
		}
	} 
	else if (opacStart < opacEnd) {
		for (var i=opacStart; i<=opacEnd; i+=skip) {
			setTimeout("opacitySet('" + object + "', " + i + ", "+thisFade+")",(timer * speed));
			timer++;
		}
	}
}

// Change the opacity for different browsers
function opacitySet (object, opacity, thisFade) {
	if (thisFade && typeof currentFade != 'undefined') {
		if (thisFade != currentFade) {
			return;
		}
	}
	if (typeof object == 'string') object = document.getElementById(object);
    object = object.style;
    object.opacity = (opacity / 100);
    object.MozOpacity = (opacity / 100);
    object.KhtmlOpacity = (opacity / 100);
	object.filter = (opacity < 100 ? "alpha(opacity=" + opacity + ")" : "none");
}

/************* ENABLE WATCHLIST AND CLIPPINGS ***************/

if (news) addLoadEvent(enableMyStuff);

function enableMyStuff () {
	var x; // items will be inserted after this element
	if (document.body.id == 'newshome') x = document.getElementById('tools').lastChild;
	else x = document.getElementById('search');
	if (x) {
		// My Stories
		/*if (!document.getElementById('clippings')) {
			var cDiv = document.createElement('DIV');
			cDiv.className = 'section';
			cDiv.innerHTML = '<span class="help"><a href="http://www.abc.net.au/news/help/mystories.htm" onclick="return popup(this.href);">Help</a></span><h2>My Stories</h2><div id="clippings"></div>';
			x.parentNode.insertBefore(cDiv, x.nextSibling);
		}*/
		// My Tags
		if (!document.getElementById('watchlist')) {
			var wDiv = document.createElement('DIV');
			wDiv.className = 'section';
			wDiv.innerHTML = '<span class="help"><a href="http://www.abc.net.au/news/help/mytags.htm" onclick="return popup(this.href);">Help</a></span><h2>My Topics</h2><div id="watchlist"></div>';
			x.parentNode.insertBefore(wDiv, x.nextSibling);	
		}
	}
}


/************* WATCHLIST FUNCTIONALITY ***************/

if (news) addLoadEvent(populateWatchlist);

// Cookie format: tag1;tag2;tag3 etc.

var watchlistCookie = 'newsMyTags';

function watchlistAdd (title) {
	lbHide_do();
	if (watchlistExists(title)) return false;
	// If we have reached this point, we need to set the cookie
	var exp = new Date().getTime();
	exp += 1000*60*60*24*31; // expire 1 month from now
	exp = new Date(exp);
	var cookieData = getCookie(watchlistCookie);
	setCookie(watchlistCookie, (cookieData==null || cookieData.trim()=='' ? '' : cookieData+';')+title, exp, '/', '.abc.net.au');
	if (!watchlistExists(title)) {
		var cookieData = getCookie(watchlistCookie);
		if (cookieData == null || cookieData == '') alert('Sorry, this tag could not be added.\n\nPlease ensure that cookies are enabled in your web browser.');
		else alert('Sorry, this tag could not be added.\n\nYou may have too many items in My Tags.');
	}
	else populateWatchlist(title);
	return false;
}

function watchlistRemove (title) {
	lbHide_do();
	var cookieData = getCookie(watchlistCookie);
	if (cookieData == null) {
		return false;
	}
	var removed = false;
	var watchlist = cookieData.split(';');
	for (var i=0; i<watchlist.length; i++) {
		if (title==watchlist[i]) {
			watchlist.splice(i, 1); // remove this item from the array
			removed = true;
		}
	}
	cookieData = watchlist.join(';');
	if (cookieData == '') cookieData = ' ';
	var exp = new Date().getTime();
	exp += 1000*60*60*24*31; // expire 1 month from now
	exp = new Date(exp);
	setCookie(watchlistCookie, cookieData, exp, '/', '.abc.net.au');
	if (!removed) alert('Sorry, tag could not be removed.');
	else populateWatchlist();
	return false;
}

function watchlistExists (title) {
	var cookieData = getCookie(watchlistCookie);
	if (cookieData == null || cookieData == '') return false;
	var watchlist = cookieData.split(';');
	for (var i=0; i<watchlist.length; i++) {
		if (title==watchlist[i]) return true;
	}
	return false;
}

function populateWatchlist (newTitle) {
	var w;
	var defaultWatchlist = 'environment;government-and-politics;health;indigenous;offbeat;science-and-technology';
	if (w = document.getElementById('watchlist')) {
		w.innerHTML = '';
		var cookieData = getCookie(watchlistCookie);
		if (cookieData == null) {
			cookieData = defaultWatchlist;
			var exp = new Date().getTime();
			exp += 1000*60*60*24*31; // expire 1 month from now
			exp = new Date(exp);
			setCookie(watchlistCookie, cookieData, exp, '/', '.abc.net.au');
		}
		w.parentNode.style.display = 'block'; // show the container div
		var html = '';
		if (cookieData.trim() != '') {
			var watchlist = cookieData.trim().split(';');
			for (var i=0; i<watchlist.length; i++) {
				var highlight = false;
				var fadefrom = new Array(255,255,51); // rgb colour
				if (newTitle) if (newTitle==watchlist[i]) {
					highlight = true;
					for (var j=1; j<=10; j++) {
						setTimeout('if (wn = document.getElementById("myt'+i+'")) wn.style.backgroundColor="rgb('+Math.round(fadefrom[0]+(j/10)*(255-fadefrom[0]))+','+Math.round(fadefrom[1]+(j/10)*(255-fadefrom[1]))+','+Math.round(fadefrom[2]+(j/10)*(255-fadefrom[2]))+')";', ((j/10)*1000)+500);
					}
				}
				html += '<li><a href="http://www.abc.net.au/news/tag/'+watchlist[i]+'/" id="myt'+i+'"'+(highlight?' style="background-color:rgb('+fadefrom[0]+','+fadefrom[1]+','+fadefrom[2]+');"':'')+'>'+watchlist[i].replace(/-/g, '-<wbr></wbr>')+'</a></li>';
			}
			if (html!='') html = '<ul>'+html+'</ul>';
		}
		if (html=='' || cookieData==defaultWatchlist) html += '<p>Add Tag Page links here to follow news categories important to you.</p>';
		html += '<p id="tl"><a href="http://www.abc.net.au/news/tag/" class="more">View all tags</a> | <a href="http://www.abc.net.au/news/tag/cloud.htm" class="more">Tag cloud</a></p>';
		w.innerHTML = html;
		tagPageMyTags();
	}
	processLinks();
}

function tagPageMyTags () {
	if (document.URL.match(/\/tag\/[^\.]+\//)) { // if currently on a tag page
		tagname = document.URL;
		tagname = tagname.replace(/^.*\/tag\//, '');
		tagname = tagname.replace(/\/.*$/, '');
		var wla;
		var tl;
		if (wla = document.getElementById('watchlistAdd')) {
			if (watchlistExists(tagname)) {
				wla.onclick = function () { return watchlistRemove(tagname) };
				wla.innerHTML = 'Remove from My Tags';
			}
			else {
				wla.onclick = function () { return watchlistAdd(tagname) };
				wla.innerHTML = 'Add to My Tags';
			}
		}
		if (tl = document.getElementById('tl')) {
			var tp;
			if (tp = document.getElementById('tp')) tp.innerHTML = '';
			else {
				tp = document.createElement('P');
				tl.parentNode.insertBefore(tp, tl);
			}
			if (watchlistExists(tagname)) tp.innerHTML = '<a href="javascript:void(0);" onclick="watchlistRemove(tagname);">Remove \''+tagname.replace(/-/g, '-<wbr></wbr>')+'\' from My Tags</a>';
			else tp.innerHTML = '<a href="javascript:void(0);" onclick="watchlistAdd(tagname);">Add \''+tagname.replace(/-/g, '-<wbr></wbr>')+'\' to My Tags</a>';
		}
	}
}


/************* CLIPPINGS FUNCTIONALITY ***************/

if (news) addLoadEvent(populateClippings);

// Cookie format: url1~title1;url2~title2;url3~title3 etc.

var clippingsCookie = 'newsMyStories';

function clippingAdd (url, title) {
	lbHide_do();
	url = url.replace(/^[a-z]+:\/\/[^\/]+/, ''); // discard the domain name, we only need the path to the web page
	title = title.replace(/(<[^>]+>|Related Story:)/ig, '').trim(); // discard HTML tags and "Related Story:" in title
	if (clippingExists(url)) return false;
	// If we have reached this point, we need to set the cookie
	var exp = new Date().getTime();
	exp += 1000*60*60*12; // expire 12 hours from now
	exp = new Date(exp);
	var cookieData = getCookie(clippingsCookie);
	setCookie(clippingsCookie, (cookieData==null || cookieData.trim()=='' ? '' : cookieData+';')+url+'~'+title, exp, '/', '.abc.net.au');
	if (!clippingExists(url)) {
		var cookieData = getCookie(clippingsCookie);
		if (cookieData == null || cookieData == '') alert('Sorry, this story could not be added.\n\nPlease ensure that cookies are enabled in your web browser.');
		else alert('Sorry, this story could not be added.\n\nYou may have too many items in My Stories.');
	}
	else populateClippings(url);
	storytools();
	return false;
}

function clippingRemove (url) {
	lbHide_do();
	var cookieData = getCookie(clippingsCookie);
	if (cookieData == null) {
		return false;
	}
	var removed = false;
	var clippings = cookieData.split(';');
	for (var i=0; i<clippings.length; i++) {
		if (url.indexOf(clippings[i].split('~')[0]) != -1) {
			clippings.splice(i, 1); // remove this item from the array
			removed = true;
		}
	}
	cookieData = clippings.join(';');
	if (cookieData == '') cookieData = ' ';
	var exp = new Date().getTime();
	exp += 1000*60*60*12; // expire 12 hours from now
	exp = new Date(exp);
	setCookie(clippingsCookie, cookieData, exp, '/', '.abc.net.au');
	if (!removed) alert('Sorry, clipping could not be removed.');
	else populateClippings();
	storytools();
	return false;
}

function clippingExists (url) {
	var cookieData = getCookie(clippingsCookie);
	if (cookieData == null || cookieData == '') return false;
	var clippings = cookieData.split(';');
	for (var i=0; i<clippings.length; i++) {
		if (url.indexOf(clippings[i].split('~')[0]) != -1) return true;
	}
	return false;
}

function populateClippings (newURL) {
	var c;
	if (c = document.getElementById('clippings')) {
		c.innerHTML = '';
		var cookieData = getCookie(clippingsCookie);
		if (cookieData == null || (typeof cookieData == 'string' && cookieData.trim()=='')) c.innerHTML = 'Bookmark stories, video and audio clips you may want to access later.';
		else {
			var clippings = cookieData.split(';');
			var html = '';
			for (var i=0; i<clippings.length; i++) {
				var x = clippings[i].split('~');
				var highlight = false;
				var fadefrom = new Array(255,255,51); // rgb colour
				if (newURL) if (newURL.indexOf(x[0]) != -1) {
					highlight = true;
					for (var j=1; j<=10; j++) {
						setTimeout('if (cn = document.getElementById("myc'+i+'")) cn.style.backgroundColor="rgb('+Math.round(fadefrom[0]+(j/10)*(255-fadefrom[0]))+','+Math.round(fadefrom[1]+(j/10)*(255-fadefrom[1]))+','+Math.round(fadefrom[2]+(j/10)*(255-fadefrom[2]))+')";', ((j/10)*1000)+500);
					}
				}
				html += '<li><a href="'+x[0]+'" id="myc'+i+'"'+(highlight?' style="background-color:rgb('+fadefrom[0]+','+fadefrom[1]+','+fadefrom[2]+');"':'')+'>'+x[1]+'</a></li>';
			}
			c.innerHTML = '<ul>'+html+'</ul>';
		}
	}
	processLinks();
}

function lbHide () {
	lbTimeout = window.setTimeout('lbHide_do();', 1500);
}

function lbHide_do () {
	var lb;
	if (lb = document.getElementById('linkButton')) lb.parentNode.removeChild(lb);
}

function lbHide_abort () {
	if (window.lbTimeout) window.clearTimeout(lbTimeout);
}

function processLinks () {
	var links = document.getElementsByTagName('A');
	var storyPageRegex = /(news|news_dev)\/(items|newsitems|stories|video|audio|photos)\/[0-9]{4}.*/;
	var tagPageRegex = /(news|news_dev)\/tag\/[-'A-Za-z0-9]+\/?$/;
	for (var i=0; i<links.length; i++) {
		//if (storyPageRegex.test(links[i].href) && links[i].innerHTML.replace(/(<[^>]+>)/ig, '').trim() != '' && !classExists(links[i], 'more')) myStoriesLink(links[i]);
		if (tagPageRegex.test(links[i].href) && links[i].innerHTML.replace(/(<[^>]+>)/ig, '').trim() != '' && !classExists(links[i], 'more')) myTagsLink(links[i]);
	}
}

function myStoriesLink (link) {
	link.onmouseout = function (e) {
		if (typeof lbHide == 'function') lbHide();
	};
	link.onmouseover = function (e) {
		if (typeof lbHide_abort == 'function') lbHide_abort();
		if (typeof lbHide_do == 'function') lbHide_do();
		var side = 'right';
		if (link.parentNode.nodeName.match(/^(li|h[1-6])$/i)) {
			var parentText = link.parentNode.innerHTML.replace(/<[^>]+>/g, '').trim();
			var linkText = link.innerHTML.replace(/<[^>]+>/g, '').trim();
			if (parentText.indexOf(linkText) == 0) side = 'left';
		}
		if (link.parentNode.scrollWidth == link.scrollWidth) {
			side = 'left';
		}
		var lb = document.createElement('A');
		lb.id = 'linkButton';
		lb.appendChild(document.createTextNode(' '));
		lb.onmouseover = function (f) {
			if (typeof lbHide_abort == 'function') lbHide_abort();
		};
		lb.onmouseout = function (f) {
			if (typeof lbHide == 'function') lbHide();
		};
		/*
		if (typeof clippingExists == 'function' && clippingExists(this.href)) {
			lb.className = 'lb_'+side+'_remove_blue';
			lb.title = 'Remove from My Stories';
			lb.alt = lb.title;
			lb.href = 'javascript:void(clippingRemove("'+this.href.replace(/"/g, '\"')+'"));';
		}
		else {
			lb.className = 'lb_'+side+'_add_blue';
			lb.title = 'Add to My Stories';
			lb.alt = lb.title;
			lb.href = 'javascript:void(clippingAdd("'+this.href.replace(/"/g, '\"')+'","'+this.innerHTML.replace(/(<[^>]+>|Related Story:)/ig, '').trim().replace(/"/g, '\"')+'"));';
		}
		*/
		lb.onclick = function (f) {
			eval(unescape(this.href).replace(/^javascript:/, ''));
			return false;
		};
		this.parentNode.insertBefore(lb, (side=='left' ? this : this.nextSibling));
	}
}

function myTagsLink (link) {
	link.onmouseout = function (e) {
		if (typeof lbHide == 'function') lbHide();
	};
	link.onmouseover = function (e) {
		if (typeof lbHide_abort == 'function') lbHide_abort();
		if (typeof lbHide_do == 'function') lbHide_do();
		var side = 'right';
		if (link.parentNode.nodeName.match(/^(li|h[1-6])$/i)) {
			var parentText = link.parentNode.innerHTML.replace(/<[^>]+>/g, '').trim();
			var linkText = link.innerHTML.replace(/<[^>]+>/g, '').trim();
			if (parentText.indexOf(linkText) == 0) side = 'left';
		}
		if (link.parentNode.scrollWidth == link.scrollWidth) {
			side = 'left';
		}
		var tagname = this.href;
		tagname = tagname.replace(/^.*\/tag\//, '');
		tagname = tagname.replace(/\/.*$/, '');
		var lb = document.createElement('A');
		lb.id = 'linkButton';
		lb.appendChild(document.createTextNode(' '));
		lb.onmouseover = function (f) {
			if (typeof lbHide_abort == 'function') lbHide_abort();
		};
		lb.onmouseout = function (f) {
			if (typeof lbHide == 'function') lbHide();
		};
		if (typeof watchlistExists == 'function' && watchlistExists(tagname)) {
			lb.className = 'lb_'+side+'_remove_green';
			lb.title = "Remove '"+tagname+"' from My Tags";
			lb.alt = lb.title;
			lb.href = 'javascript:void(watchlistRemove("'+tagname.replace(/"/g, '\"')+'"));';
		}
		else {
			lb.className = 'lb_'+side+'_add_green';
			lb.title = "Add '"+tagname+"' to My Tags";
			lb.alt = lb.title;
			lb.href = 'javascript:void(watchlistAdd("'+tagname.replace(/"/g, '\"')+'"));';
		}
		lb.onclick = function (f) {
			eval(unescape(this.href).replace(/^javascript:/, ''));
			return false;
		};
		this.parentNode.insertBefore(lb, (side=='left' ? this : this.nextSibling));
	}
}

function storytools () {
	var st;
	if (st = document.getElementById('storytools')) {
		var html = '';
		html += '<span><a href="javascript:printStory();">Print</a></span> <span><a href="http://www.abc.net.au/cgi-bin/common/mailto/mailto-nojs_query.pl?'+encodeURIComponent(document.URL.indexOf('?') != -1 ? document.URL.substring(0, document.URL.indexOf('?')) : document.URL)+'">Email</a></span> <span><a href="javascript:shareStory();">Share</a></span>';
		if (document.URL.match(/(news|news_dev)\/(items|newsitems|stories|video|audio|photos)\/[0-9]{4}.*/)) {
			if (clippingExists(document.URL)) html += ' <span><a href="javascript:void(0);" onclick="clippingRemove(document.URL);">Remove from My Stories</a></span>';
			else html += ' <span><a href="javascript:void(0);" onclick="clippingAdd(document.URL, document.getElementById(\'article\').getElementsByTagName(\'H1\')[0].innerHTML);">Add to My Stories</a></span>';
		}
		var com;
		if (com = document.getElementById('comments')) {
			html += ' <span><a href="#comments">'+com.getElementsByTagName('H2')[0].innerHTML+'</a></span>';
		}
		st.innerHTML = html;
	}
}
if (news) addLoadEvent(storytools);


function printStory () {
	printStoryClose();
	var sp, sc, o;
	sp = document.getElementById('storyPhotos');
	sc = document.getElementById('comments');
	o = new Array();
	if (sp) {
		o[o.length] = '<input type="checkbox" '+(classExists(sp, 'noprint') ? '' : 'checked="checked"')+' class="checkbox" onclick="if (this.checked) classRemove(document.getElementById(\'storyPhotos\'), \'noprint\'); else classAdd(document.getElementById(\'storyPhotos\'), \'noprint\');" id="printsp" /> <label for="printsp">Include photo</label>';
	}
	if (sc) {
		o[o.length] = '<input type="checkbox" '+(classExists(sc, 'noprint') ? '' : 'checked="checked"')+' class="checkbox" onclick="if (this.checked) classRemove(document.getElementById(\'comments\'), \'noprint\'); else classAdd(document.getElementById(\'comments\'), \'noprint\');" id="printsc" /> <label for="printsc">Include comments</label>';
	}
	if (o.length > 0) {
		var html = '<p><strong>Print Options</strong></p><p>'+o.join('<br />')+'</p><p><input type="button" class="button" value="OK" onclick="printStoryClose();window.print();" /> <input type="button" class="button" value="Cancel" onclick="printStoryClose();" /></p>';
		var ps = document.createElement('DIV');
		ps.id = 'printStoryDialog';
		ps.className = 'dialog noprint';
		ps.innerHTML = html;
		var st = document.getElementById('storytools');
		st.parentNode.insertBefore(ps, st.nextSibling);
	}
	else {
		window.print();
	}
}

function printStoryClose() {
	var psd;
	if (psd = document.getElementById('printStoryDialog')) psd.parentNode.removeChild(psd);
}


function shareStory () {
	shareStoryClose();
	var u = encodeURIComponent(document.URL), t = '', d = '';
	var m = document.getElementsByTagName('HEAD')[0].getElementsByTagName('META');
	for (var i=0; i<m.length; i++) {
		if (m[i].getAttribute('name') != null) {
			var n = m[i].getAttribute('name').toLowerCase(), c = encodeURIComponent(m[i].getAttribute('content'));
			if (n == 'dc.title') t = c;
			else if (n == 'dc.description') d = c;
		}
	}
	var o = new Array();
	o[o.length] = '<a href="http://delicious.com/save?url='+u+'&amp;title='+t+'&amp;v=5&amp;notes='+d+'" onclick="return popup(this.href, 950, 600, \'deliciousuiv5\');">Delicious</a>';
	o[o.length] = '<a href="http://digg.com/remote-submit?url='+u+'&amp;title='+t+'&amp;bodytext='+d+'&amp;topic=world_news" onclick="return popup(this.href, 700, 500, \'digg\');">Digg</a>';
	o[o.length] = '<a href="http://www.facebook.com/sharer.php?u='+u+'&amp;t='+t+'" onclick="return popup(this.href, 700, 500, \'facebook\');">Facebook</a>';
	o[o.length] = '<a href="http://www.kwoff.com/submit.php?url='+u+'&amp;title='+t+'" onclick="return popup(this.href, 1020, 600, \'kwoff\');">Kwoff</a>';
	o[o.length] = '<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url='+u+'&amp;title='+t+'&amp;summary='+d+'&amp;source='+encodeURIComponent('ABC News')+'" onclick="return popup(this.href, 520, 570, \'linkedin\');">LinkedIn</a>';
	o[o.length] = '<a href="http://www.myspace.com/Modules/PostTo/Pages/?u='+u+'&amp;t='+t+'&amp;c='+d+'&amp;l=1" onclick="return popup(this.href, 850, 700, \'myspace\');">MySpace</a>';
	o[o.length] = '<a href="http://www.reddit.com/submit?url='+u+'&amp;title='+t+'" onclick="return popup(this.href, 800, 500, \'reddit\');">Reddit</a>';
	o[o.length] = '<a href="http://www.stumbleupon.com/submit?url='+u+'&amp;title='+t+'" onclick="return popup(this.href, 900, 500, \'stumbleupon\');">StumbleUpon</a>';
	o[o.length] = '<a href="http://twitter.com/home?status='+t+'%20'+u+'%20%40abcnews" onclick="return popup(this.href, 900, 600, \'twitter\');">Twitter</a>';
	var html = '<p><strong>Share this story</strong></p><p>Please select the social bookmarking site you wish to share this story on:</p><ul><li>'+o.join('</li><li>')+'</li></ul><p><input type="button" class="button" value="Cancel" onclick="shareStoryClose();" /></p>';
	var ps = document.createElement('DIV');
	ps.id = 'shareStoryDialog';
	ps.className = 'dialog noprint';
	ps.innerHTML = html;
	var st = document.getElementById('storytools');
	st.parentNode.insertBefore(ps, st.nextSibling);
}

function shareStoryClose() {
	var psd;
	if (psd = document.getElementById('shareStoryDialog')) psd.parentNode.removeChild(psd);
}


/************* IMAGE TOOLTIPS ****************/

// For each image, if title attribute is empty, set it to equal the alt attribute
function processImages() {
	var images = document.getElementsByTagName('IMG');
	for (var i=0; i<images.length; i++) if ((typeof images[i].title == 'undefined' || (typeof images[i].title == 'string' && images[i].title == '')) && ((typeof images[i].alt == 'string'))) images[i].title = images[i].alt;
}
if (news) addLoadEvent(processImages);


/************* LIQUID/FIXED LAYOUT ****************/
function setLayout () {
	if (location.search.indexOf('layout=popup') != -1) { // location.search is the query string
		document.getElementsByTagName('HTML')[0].className = 'popup';
	}
	else if (preferenceGet('layout') == 'liquid') {
		document.getElementsByTagName('HTML')[0].className = 'liquid';
	}
	else {
		document.getElementsByTagName('HTML')[0].className = '';
	}
}
setLayout();

function toggleLayout () {
	if (preferenceGet('layout') == 'liquid') {
		preferenceSet('layout', 'fixed');
	}
	else {
		preferenceSet('layout', 'liquid');
	}
	setLayout();
	if (window.onresize) window.onresize(); // trigger the onresize event if one exists
}

// Based on code from http://microformats.org/wiki/rest/ahah
function simpleAjax(url, target, onsuccess) {
	if (typeof target == 'string') target = document.getElementById(target);
	url += (url.indexOf('?') == -1 ? '?' : '&') + Math.floor(new Date().getTime()/(1000*60*2)); // ensures fresh request every 2 minutes
	req = new XMLHttpRequest();
	if (req) {
		classAdd(target, 'ajaxLoading');
		req.onreadystatechange = function() {
			if (req.readyState == 4) { // only if req is "loaded"
				if (req.status == 200 || req.status == 304) { // only if "OK"
					if (req.responseText != '') {
						classAdd(target, 'ajaxRendering');
						target.innerHTML = req.responseText;
						if (typeof onsuccess == 'function') onsuccess();
						else if (typeof onsuccess == 'string') eval(onsuccess);
						classRemove(target, 'ajaxRendering');
					}
				}
				else { // HTTP error
					target.innerHTML = '<!-- Error loading '+url+' -->';
				}
				processLinks();
				processImages();
				classRemove(target, 'ajaxLoading');
			}
		};
		req.open('GET', url, true);
		req.send('');
	}
}

// Load content into target container when tab is clicked
function tabLoad (tabLink, target, url, onsuccess) {
	if (typeof target == 'string') target = document.getElementById(target);
	setClassUnsetSiblings(tabLink.parentNode, 'active');
	simpleAjax(url, target, onsuccess);
	if (tabLink.blur) tabLink.blur(); // removes dotted outline from link in Mozilla browsers
	return false;
}

function stateTabLoad (state) { // for state headlines on news home page
	tabLoad(document.getElementById('t-'+state), 'stateContent', '/news/indexes/idx-'+state+'/top3.inc', copyFitStateHeadlines);
	preferenceSet('state', state);
	return false;
}

function copyFitStateHeadlines () {
	copyfit('topstory', 'topstories', document.getElementById('stateContent').getElementsByTagName('UL')[0], 3);
}

// copyfit: Get heights of 'columnA' and 'columnB' as close as possible by removing items from 'list' (however 'list' will always have at least 'stopAt' number of items)
// If 'noDupesFrom' is specified, items in 'list' that have the same link as an item in 'noDupesFrom' will be removed
function copyfit (columnA, columnB, list, stopAt, noDupesFrom) {
	if (typeof columnA == 'string') columnA = document.getElementById(columnA);
	if (typeof columnB == 'string') columnB = document.getElementById(columnB);
	if (typeof list == 'string') list = document.getElementById(list);
	if (typeof list == 'undefined') var list = columnA.parentNode.getElementsByTagName('UL')[0];
	if (typeof stopAt == 'undefined') var stopAt = 3;
	if (typeof noDupesFrom == 'string') noDupesFrom = document.getElementById(noDupesFrom);
	if (columnA && columnB && list) {
		if (contains(columnA, list)) {
			var listColumn = columnA;
			var otherColumn = columnB;
		}
		else if (contains(columnB, list)) {
			var listColumn = columnB;
			var otherColumn = columnA;
		}
		else return; // list sits outside both columns - abort
		var items = new Array();
		for (var i=0; i<list.childNodes.length; i++) if (list.childNodes[i].nodeType == 1) items[items.length] = list.childNodes[i];
		if (noDupesFrom) {
			var ndLinks = noDupesFrom.getElementsByTagName('A');
			for (var i=0; i<ndLinks.length; i++) {
				ndLinks[i].noDupesId = i;
				ndLinks[i].noDupesUrl = ndLinks[i].href.replace(/^https?:\/\/[^\/]+/, '').replace(/(\?.*)?^/, '');
			}
			var listLinks = list.getElementsByTagName('A');
			for (var i=0; i<listLinks.length; i++) {
				listLinks[i].noDupesUrl = listLinks[i].href.replace(/^https?:\/\/[^\/]+/, '').replace(/(\?.*)?^/, '');
			}
			itemCheck:
			for (var i=items.length-1; i>=0; i--) {
				var itemLinks = items[i].getElementsByTagName('A');
				for (var j=0; j<itemLinks.length; j++) {
					if (typeof itemLinks[j].noDupesUrl != 'undefined') {
						for (var k=0; k<ndLinks.length; k++) {
							if (itemLinks[j].noDupesUrl == ndLinks[k].noDupesUrl && (typeof itemLinks[j].noDupesId == 'undefined' || ndLinks[k].noDupesId != itemLinks[j].noDupesId)) {
								items[i].parentNode.removeChild(items[i]);
								continue itemCheck;
							}
						}
					}
				}
			}
		}
		var numTotal = items.length;
		var numVisible = numTotal+0;
		var done = false;
		while (!done) {
			if (numVisible <= stopAt) done = true;
			else {
				var lastVisibleItemHeight = items[numVisible-1].scrollHeight;
				var differenceNow = listColumn.scrollHeight-otherColumn.scrollHeight;
				var differenceNext = differenceNow-lastVisibleItemHeight;
				if (Math.abs(differenceNext) < Math.abs(differenceNow)) { // if removing another item makes listColumn closer in height to otherColumn
					items[numVisible-1].style.display = 'none';
					numVisible--;
				}
				else done = true;
			}
		}
		for (var i=numVisible; i>0; i--) items[numVisible-1].style.display = 'block';
	}
}

// Finds out if 'a' is an ancestor of 'b'
function contains (a, b) {
	// climb through 'b' parents till we find 'a'
 	while (b && (a != b) && (b != null)) b = b.parentNode;
	return a == b;
}

/************ MISCELLANEOUS FUNCTIONS **************/

// Give focus to the first text/textarea form element in the document
function formFocus () {
	var inputs = document.getElementsByTagName('INPUT');
	for (var i=0; i<inputs.length; i++) {
		if (inputs[i].type == 'text') {
			inputs[i].focus();
			return;
		}
	}
	inputs = document.getElementsByTagName('TEXTAREA');
	if (inputs.length > 0) inputs[0].focus();
}

function thumnbailScrollerGenerate (containerid) {
	var container;
	var colnames = new Array('column5a','column5b','column5c','column5d','column5e');
	if (container = document.getElementById(containerid)) {
		if (!window.highlightScroller) highlightScroller = new Object();
		var controls = document.createElement('DIV');
		controls.id = containerid+'_controls';
		controls.className = 'highlightscrollercontrols';
		var temp = container.childNodes;
		var divs = new Array();
		for (var i=0; i<temp.length; i++) {
			if (classExists(temp[i], 'headline') || classExists(temp[i], 'section')) { // check that class name is 'section' or 'headline'
				divs[divs.length] = temp[i];
			}
		}
		delete temp;
		var aprev = document.createElement('A');
		aprev.id = containerid+'_show_prev';
		aprev.className = 'prev';
		aprev.href = 'javascript:highlightScrollerMoveBy("'+containerid+'", -1);';
		aprev.onclick = function (f) {
			eval(this.href.replace(/^javascript:/, ''));
			return false;
		};
		var aprevimg = document.createElement('IMG');
		aprevimg.src = '/science/js/abcNews/blank.gif';
		aprevimg.width = 26;
		aprevimg.height = 16;
		aprev.appendChild(aprevimg);
		if (divs.length > 5) controls.appendChild(aprev);
		for (var i=0; i<divs.length; i+=5) {
			var num = (i/5);
			highlightScroller[containerid+'_length'] = num+1;
			var columns = document.createElement('DIV');
			columns.className = 'columns';
			columns.id = containerid+'_'+num;
			for (var j=0; j<5; j++) {
				if (divs[i+j]) {
					var newcolumn = document.createElement('DIV');
					newcolumn.className = colnames[j];
					newcolumn.appendChild(divs[i+j]);
					columns.appendChild(newcolumn);
				}
			}
			container.appendChild(columns);
			var a = document.createElement('A');
			a.id = containerid+'_show_'+num;
			a.href = 'javascript:highlightScrollerMoveTo("'+containerid+'", '+num+');';
			a.onclick = function (f) {
				eval(this.href.replace(/^javascript:/, ''));
				return false;
			};
			var aimg = document.createElement('IMG');
			aimg.src = '/science/js/abcNews/blank.gif';
			aimg.width = 16;
			aimg.height = 16;
			a.appendChild(aimg);
			if (divs.length > 5) controls.appendChild(a);
		}
		var anext = document.createElement('A');
		anext.id = containerid+'_show_next';
		anext.className = 'next';
		anext.href = 'javascript:highlightScrollerMoveBy("'+containerid+'", 1);';
		anext.onclick = function (f) {
			eval(this.href.replace(/^javascript:/, ''));
			return false;
		};
		var anextimg = document.createElement('IMG');
		anextimg.src = '/science/js/abcNews/blank.gif';
		anextimg.width = 26;
		anextimg.height = 16;
		anext.appendChild(anextimg);
		if (divs.length > 5) controls.appendChild(anext);
		container.parentNode.insertBefore(controls, container.nextSibling);
		highlightScrollerMoveTo(containerid, 0);
	}
}

// Generate a scrollable feature thingy
function highlightScrollerGenerate (containerid) {
	var container;
	if (container = document.getElementById(containerid)) {
		if (classExists(container, 'thumbnailscroller')) {
			thumnbailScrollerGenerate(containerid);
			return;
		}
		if (!window.highlightScroller) highlightScroller = new Object();
		var controls = document.createElement('DIV');
		controls.id = containerid+'_controls';
		controls.className = 'highlightscrollercontrols';
		var temp = container.childNodes;
		var divs = new Array();
		for (var i=0; i<temp.length; i++) {
			if (temp[i].tagName && temp[i].tagName.toLowerCase() == 'div' && (classExists(temp[i], 'headline') || classExists(temp[i], 'section'))) { // check that class name is 'section' or 'headline'
				divs[divs.length] = temp[i];
			}
		}
		delete temp;
		var aprev = document.createElement('A');
		aprev.id = containerid+'_show_prev';
		aprev.className = 'prev';
		aprev.href = 'javascript:highlightScrollerMoveBy("'+containerid+'", -1);';
		aprev.onclick = function (f) {
			eval(this.href.replace(/^javascript:/, ''));
			return false;
		};
		var aprevimg = document.createElement('IMG');
		aprevimg.src = '/science/js/abcNews/blank.gif';
		aprevimg.width = 26;
		aprevimg.height = 16;
		aprev.appendChild(aprevimg);
		if (divs.length > 2) controls.appendChild(aprev);
		for (var i=0; i<divs.length; i+=2) {
			var num = (i/2);
			highlightScroller[containerid+'_length'] = num+1;
			var columns = document.createElement('DIV');
			columns.className = 'columns';
			columns.id = containerid+'_'+num;
			var column2a = document.createElement('DIV');
			column2a.className = 'column2a';
			column2a.appendChild(divs[i]);
			columns.appendChild(column2a);
			if (divs[i+1]) {
				var column2b = document.createElement('DIV');
				column2b.className = 'column2b';
				column2b.appendChild(divs[i+1]);
				columns.appendChild(column2b);
			}
			container.appendChild(columns);
			var a = document.createElement('A');
			a.id = containerid+'_show_'+num;
			a.href = 'javascript:highlightScrollerMoveTo("'+containerid+'", '+num+');';
			a.onclick = function (f) {
				eval(this.href.replace(/^javascript:/, ''));
				return false;
			};
			var aimg = document.createElement('IMG');
			aimg.src = '/science/js/abcNews/blank.gif';
			aimg.width = 16;
			aimg.height = 16;
			a.appendChild(aimg);
			if (divs.length > 2) controls.appendChild(a);
		}
		var anext = document.createElement('A');
		anext.id = containerid+'_show_next';
		anext.className = 'next';
		anext.href = 'javascript:highlightScrollerMoveBy("'+containerid+'", 1);';
		anext.onclick = function (f) {
			eval(this.href.replace(/^javascript:/, ''));
			return false;
		};
		var anextimg = document.createElement('IMG');
		anextimg.src = '/science/js/abcNews/blank.gif';
		anextimg.width = 26;
		anextimg.height = 16;
		anext.appendChild(anextimg);
		if (divs.length > 2) controls.appendChild(anext);
		container.parentNode.insertBefore(controls, container.nextSibling);
		highlightScrollerMoveTo(containerid, 0);
	}
}

function highlightScrollerMoveTo (containerid, num) {
	highlightScroller[containerid+'_current'] = num;
	displayThisHideSiblings(containerid+'_'+highlightScroller[containerid+'_current']);
	setClassUnsetSiblings(containerid+'_show_'+highlightScroller[containerid+'_current'], 'active');
}

function highlightScrollerMoveBy (containerid, num) {
	highlightScroller[containerid+'_current'] += num;
	if (highlightScroller[containerid+'_current'] >= highlightScroller[containerid+'_length']) highlightScroller[containerid+'_current'] -= highlightScroller[containerid+'_length'];
	else if (highlightScroller[containerid+'_current'] < 0) highlightScroller[containerid+'_current'] += highlightScroller[containerid+'_length'];
	displayThisHideSiblings(containerid+'_'+highlightScroller[containerid+'_current']);
	setClassUnsetSiblings(containerid+'_show_'+highlightScroller[containerid+'_current'], 'active');
}

function displayThisHideSiblings (element) { // 'element' can be a DOM element or a string representing the ID of a DOM element
	if (typeof element == 'undefined') return;
	if (typeof element == 'string') element = document.getElementById(element);
	var x = element.previousSibling;
	while (x != null) {
		if (x.nodeType == 1) x.style.display = 'none';
		x = x.previousSibling;
	}
	x = element.nextSibling;
	while (x != null) {
		if (x.nodeType == 1) x.style.display = 'none';
		x = x.nextSibling;
	}
	element.style.display = 'block';
}

function setClassUnsetSiblings (element, theclass) { // 'element' can be a DOM element or a string representing the ID of a DOM element
	if (element == null) return;
	if (typeof element == 'undefined') return;
	if (typeof element == 'string') {
		if (document.getElementById(element)) element = document.getElementById(element);
		else return;
	}
	var x = element.previousSibling;
	while (x != null) {
		classRemove(x, theclass);
		x = x.previousSibling;
	}
	x = element.nextSibling;
	while (x != null) {
		classRemove(x, theclass);
		x = x.nextSibling;
	}
	classAdd(element, theclass);
}

// Open link in a popup window
function popup (url, width, height, windowname) {
	if (!width) var width = 600;
	if (!height) var height = 400;
	if (!windowname) var windowname = 'abcnewspopup'+new Date().getTime();
	if (url.indexOf('?') != -1) url += '&layout=popup';	else url += '?layout=popup';
	var left = screen.width/2 - width/2;
	var top = screen.height/2 - height/2;
	window.open(url, windowname, 'width='+width+',height='+height+',toolbar=0,resizable=1,scrollbars=1,left='+left+',top='+top);
	return false;
}

/************ NEWSRADIO WIDGET FUNCTIONS **************/
function nrInit () {
	if (nr = document.getElementById('newsradio-widget-nowplaying')) {
		nrText = nr.innerHTML.replace(/<[^>]+>/g, '').trim(); // original text, HTML tags removed
		nr.innerHTML = nrText;
		if (nr.scrollWidth > nr.clientWidth) { // if the text is longer than the space allocated for it
			nrOn = false; // ticker enabled?
			nrRev = false; // reverse direction?
			nrSubstr = 0; // character position to display text from
			nr.onmouseover = function () {
				if (!nrOn) {
					nrOn = true;
					nrGo();
				}
			};
			nr.onmouseout = function () {
				nrStop();
			};
		}
	}
}
function nrGo() {
	var nrChange = false; // change direction?
	if (nrRev) {
		if (nrSubstr == 0) nrChange = true; // if start of text is visible
		else nrSubstr--;
	}
	else {
		if (nr.scrollWidth <= nr.clientWidth) nrChange = true; // if end of text is visible
		else nrSubstr++;
	}
	if (nrChange) {
		nrRev = !nrRev;
		nrTimeout = setTimeout('nrGo();', 2000);
	}
	else {
		//nr.innerHTML = nrText.substr(nrSubstr).replace(/ +/, '&nbsp;');
		nr.style.textIndent = '-'+(nrSubstr)+'px';
		nrTimeout = setTimeout('nrGo();', 30);
	}
}
function nrStop() {
	clearTimeout(nrTimeout);
	//nr.innerHTML = nrText;
	nr.style.textIndent = '0';
	nrOn = false;
	nrRev = false;
	nrSubstr = 0;
}
if (news) addLoadEvent(nrInit);



/************ COUNTER FUNCTIONS **************/

function setCountersSourceHit() {
	if (document.getElementById('imgCounter')) {
		var blnEnabled = true; // enable/disable the hit counter
		var blnValidDomain = (document.URL.indexOf('http://www2b.abc.net.au/') != 0);
		var blnValidURL = (document.URL.indexOf('start_rank') == -1);
		if (blnEnabled && blnValidDomain && blnValidURL) {
			// set the image source to the counter URL + query string containing document URL
			document.getElementById('imgCounter').src = 'http://www2b.abc.net.au/Counters/Client/Hit.aspx?' + encodeURIComponent(document.URL);
		}
	}
}
addLoadEvent(setCountersSourceHit);

/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;

/************ DATE FUNCTIONS **************/

// Return true if dateObj falls within Australian Eastern Daylight Time (Sydney)
function daylightSavings (dateObj) {
	var aedt = new Array(
	/*'October 29, 1995','March 31, 1996',
	'October 27, 1996','March 30, 1997',
	'October 26, 1997','March 29, 1998',
	'October 25, 1998','March 28, 1999',
	'October 31, 1999','March 26, 2000',
	'August 27, 2000','March 25, 2001',*/
	'October 28, 2001','March 31, 2002',
	'October 27, 2002','March 30, 2003',
	'October 26, 2003','March 28, 2004',
	'October 31, 2004','March 27, 2005',
	'October 30, 2005','April 2, 2006',
	'October 29, 2006','March 25, 2007',
	'October 28, 2007','April 6, 2008',
	'October 5, 2008','April 5, 2009',
	'October 4, 2009','April 4, 2010',
	'October 3, 2010','April 3, 2011',
	'October 2, 2011','April 1, 2012',
	'October 7, 2012','April 7, 2013',
	'October 6, 2013','April 6, 2014',
	'October 5, 2014','April 5, 2015',
	'October 4, 2015','April 3, 2016',
	'October 2, 2016','April 2, 2017');
	var dateInt = dateObj.getTime();
	var ds;
	for (var i=0; i<aedt.length; i++) {
		if (Date.parse(aedt[i]+' 02:00:00') < dateInt) ds = (i%2==0);
		else return ds;
	}
	return false;
}


// Convert absolute timestamps to relative timestamps
function relativeTimestamps () {
	if (!window.servertimestamp) return;
	clientTimeNow = new Date().getTime();
	if (!window.clientTimeLoad) clientTimeLoad = clientTimeNow+0;
	var clientTimePadding = clientTimeNow-clientTimeLoad;
	var relative = true;
	if (preferenceGet('timestamp') != 'relative') {
		relative = false;
	}
	var weekdays = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
	var months = new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
	var spans = document.getElementsByTagName('SPAN');
	for (var i=0; i<spans.length; i++) {
		if (classExists(spans[i], 'cominguptimestamp') && (typeof spans[i].ts != 'undefined' || spans[i].innerHTML.match(/^[0-9]{1,2}:[0-9]{2}(am|pm)$/))) {
			if (typeof spans[i].ts == 'undefined') {
				var time, h, m;
				h = parseInt(spans[i].innerHTML.replace(/:.*$/, ''), 10);
				if (h<12 && spans[i].innerHTML.indexOf('pm')!=-1) h+=12;
				else if (h==12 && spans[i].innerHTML.indexOf('am')!=-1) h=0;
				m = parseInt(spans[i].innerHTML.replace(/^.*:/, '').replace(/(am|pm)$/, ''), 10);
				spans[i].ts = new Date();
				spans[i].ts.setHours(h,m,0);
			}
			var sec = (spans[i].ts.getTime()-servertimestamp.getTime()-clientTimePadding)/1000;	
			if (relative && sec < 60*31) {
				var minutes = Math.floor(sec/60);
				spans[i].innerHTML = (minutes < 1 ? 'Now' : minutes+(minutes==1 ? ' min' : ' mins'));
			}
			else {
				spans[i].innerHTML = (spans[i].ts.getHours()>12 ? spans[i].ts.getHours()-12 : (spans[i].ts.getHours()==0 ? 12 : spans[i].ts.getHours()))+':'+(spans[i].ts.getMinutes().toString().length==1 ? '0' : '')+spans[i].ts.getMinutes()+(spans[i].ts.getHours()>11 ? 'pm' : 'am');
			}
		}
		if (classExists(spans[i], 'timestamp') && (typeof spans[i].ts != 'undefined' || spans[i].innerHTML.match(/^[a-zA-Z]+ [0-9]+, [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2}$/))) {
			var time;
			if (typeof spans[i].ts == 'undefined') spans[i].ts = new Date(spans[i].innerHTML);
			var sec = (servertimestamp.getTime()-spans[i].ts.getTime()+clientTimePadding)/1000;
			if (relative && sec < 60*60*12) {
				if (sec < 0) {
					time = '';
				}
				else if (sec <= 60) {
					var seconds = Math.floor(sec);
					time = seconds+' second'+(seconds==1 ? '' : 's');
				}
				else if (sec <= 60*60) {
					var minutes = Math.floor(sec/60);
					time = minutes+' minute'+(minutes==1 ? '' : 's');
				}
				else if (sec <= 60*60*24) {
					var hours = Math.floor(sec/60/60);
					var minutes = Math.floor(sec/60)%60;
					time = hours+' hour'+(hours==1 ? '' : 's')+' '+minutes+' minute'+(minutes==1 ? '' : 's');
				}
				else {
					var days = Math.floor(sec/60/60/24);
					var hours = Math.floor(sec/60/60)%24;
					time = days+' day'+(hours==1 ? '' : 's')+' '+hours+' hour'+(hours==1 ? '' : 's');
				}
				if (time == '') spans[i].innerHTML = '';
				else spans[i].innerHTML = time+' ago';
			}
			else {
				spans[i].innerHTML = weekdays[spans[i].ts.getDay()]+' '+months[spans[i].ts.getMonth()]+' '+spans[i].ts.getDate()+', '+spans[i].ts.getFullYear()+' '+(spans[i].ts.getHours()>12 ? spans[i].ts.getHours()-12 : (spans[i].ts.getHours()==0 ? 12 : spans[i].ts.getHours()))+':'+(spans[i].ts.getMinutes().toString().length==1 ? '0' : '')+spans[i].ts.getMinutes()+(spans[i].ts.getHours()>11 ? 'pm' : 'am')+' '+(daylightSavings(spans[i].ts) ? 'AEDT' : 'AEST');
			}
		}
	}
	relativeTimestampsTimeout = window.setTimeout('relativeTimestamps()', 1000*60);
}
addLoadEvent(relativeTimestamps);


function setActiveNav () {
	if (document.getElementById('nav_1st') && document.getElementById('nav_2nd')) {
		if (typeof activenav == 'string') setClassUnsetSiblings(document.getElementById('n-'+activenav), 'active');
		else if (getQueryStringVariable('section') != '') {
			setClassUnsetSiblings(document.getElementById('n-'+getQueryStringVariable('section')), 'active');
		}
		else if (window.location.pathname == '/news/' || window.location.pathname == '/news/default.htm') setClassUnsetSiblings(document.getElementById('n-newshome'), 'active');
		else {
			var sections = new Array('justin','australia','world','business','sport','entertainment','weather','blogs','video','audio','photos','feeds','alerts');
			for (var i=0; i<sections.length; i++) {
				if (window.location.pathname.indexOf('/news/'+sections[i]+'/') == 0) {
					setClassUnsetSiblings(document.getElementById('n-'+sections[i]), 'active');
					return;
				}
			}
		}
	}
}
if (news) addLoadEvent(setActiveNav);


function textInputHint (theInput, theText, theClass) {
	if (typeof theInput == 'string') theInput = document.getElementById(theInput);
	if (typeof theClass == 'undefined') var theClass = 'hint';
	theInput.defaultText = theText;
	theInput.defaultClass = theClass;
	// Add hint if text field is empty
	theInput.onblur = function () {
		if (this.value == '' || this.value == this.defaultText) {
			classAdd(this, this.defaultClass);
			this.value = this.defaultText;
		}
	};
	theInput.onblur(); // force onblur event to run now
	// Remove hint if text field is empty
	theInput.onfocus = function () {
		if (this.value == this.defaultText) {
			classRemove(this, this.defaultClass);
			this.value = '';
		}
	};
	// Remove hint when form is submitted
	if (theInput.form) { // if the text field is inside a submittable form
		if (typeof theInput.form.textInputHints == 'undefined') theInput.form.textInputHints = new Array();
		theInput.form.textInputHints[theInput.form.textInputHints.length] = theInput;
		theInput.form.onsubmit = function () {
			for (var i=0; i<this.textInputHints.length; i++) {
				this.textInputHints[i].onfocus();
			}
		}
	}
}

function loadCSS (url, media) {
	var link = document.createElement('LINK');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = url;
	if (typeof media != 'undefined') link.media = media;
	document.getElementsByTagName('HEAD')[0].appendChild(link);
}

function loadJS (url) {
	var s = document.createElement('SCRIPT');
	s.type = 'text/javascript';
	s.src = url;
	document.getElementsByTagName('HEAD')[0].appendChild(s);
}


function rotatingHighlightInit () {
	var rh;
	if (rh = document.getElementById('rotatinghighlight')) {
		rHighlights = new Array();
		rHighlightCurrent = 0;
		rHighlightDelay = 7 * 1000; // in milliseconds
		rHighlightFade = 1 * 1000; // in milliseconds
		rHighlightAutomatic = true;
		rHighlightTimeout = new Object();
		rHighlights = rh.getElementsByTagName('LI');
		if (rHighlights.length > 1) {
			for (var i=0; i<rHighlights.length; i++) {
				rHighlights[i].style.zIndex = 1;
				opacitySet(rHighlights[i], 0);
			}
			rHighlights[rHighlightCurrent].style.zIndex = 2;
			opacitySet(rHighlights[rHighlightCurrent], 100);
			rh.innerHTML += '<div class="highlightcontrols"><a onclick="rHighlightGo((rHighlightCurrent-1), true);" href="javascript:void(0);"><img width="23" height="16" src="/science/js/abcNews/highlight_box_prev.gif" title="Previous"/></a><a onclick="rHighlightGo((rHighlightCurrent+1), true);" href="javascript:void(0);"><img width="23" height="16" src="/science/js/abcNews/highlight_box_next.gif" title="Next"/></a></div>';
			setTimeout('if (rHighlightAutomatic) rHighlightGo();', rHighlightDelay);
		}
	}
}

function rHighlightGo (num, now) {
	if (typeof num == 'undefined') var num = rHighlightCurrent+1;
	
	if (num < 0) num = rHighlights.length-1; // negative overflow
	else if (num > rHighlights.length-1) num = 0; // positive overflow
	
	if (typeof now == 'undefined') var now = false;
	if (now) rHighlightAutomatic = false;
	
	rHighlightNewObj = rHighlights[num];
	for (var i=0; i<rHighlights.length; i++) {
		if (i==num) {
			rHighlights[i].style.zIndex = 3;
			if (now) {
				opacitySet(rHighlights[i], 99);
			}
			else {
				opacitySet(rHighlights[i], 0);
				var opacSteps = 20;
				for (var j=1; j<=opacSteps; j++) {
					setTimeout("if (rHighlightAutomatic) opacitySet(rHighlightNewObj, "+Math.min(99, 100 * (j/opacSteps))+")", (rHighlightFade * (j/opacSteps)));
				}
			}
		}
		else if (i==rHighlightCurrent) {
			rHighlights[i].style.zIndex = 2;
			opacitySet(rHighlights[i], 99);
		}
		else {
			rHighlights[i].style.zIndex = 1;
			opacitySet(rHighlights[i], 0);
		}
	}
	setTimeout('rHighlightGoAfter('+num+');', (now ? 0 : rHighlightFade));
}

function rHighlightGoAfter (num) {
	rHighlightCurrent = num;
	for (var i=0; i<rHighlights.length; i++) {
		if (i==rHighlightCurrent) {
			rHighlights[i].style.zIndex = 2;
			opacitySet(rHighlights[i], 99);
		}
		else {
			rHighlights[i].style.zIndex = 1;
			opacitySet(rHighlights[i], 0);
		}
	}
	setTimeout('if (rHighlightAutomatic) rHighlightGo();', rHighlightDelay);
}

// Force the page to refresh (unless an in-page video/audio player is open)
function autoRefresh (minutes) {
	if (typeof minutes == 'undefined') var minutes = 10;
	setInterval('if (new Date().getTime() >= '+(new Date().getTime()+(1000*60*minutes))+') if (!document.getElementById(inpageplayer)) location.replace(document.URL)', 1000*20);
}


function watchnowboxInit (arr) {
	wnCurrent = 0;
	wnArray = arr;
	document.getElementById('watchnowbox').innerHTML += '<div class="watchnowboxControls"><a onclick="watchnowboxPrev(this);" href="javascript:void(0);"><img width="23" height="16" src="/science/js/abcNews/watchnow_box_prev.png" title="Previous" /></a><a onclick="watchnowboxNext(this);" href="javascript:void(0);"><img width="23" height="16" src="/science/js/abcNews/watchnow_box_next.png" title="Next" /></a></div>';
}

function watchnowboxPrev (link) {
	wnCurrent--;
	if (wnCurrent < 0) wnCurrent = wnArray.length-1;
	watchnowboxUpdate();
	link.blur();
}

function watchnowboxNext (link) {
	wnCurrent++;
	if (wnCurrent >= wnArray.length) wnCurrent = 0;
	watchnowboxUpdate();
	link.blur();
}

function watchnowboxUpdate () {
	document.getElementById('watchnowboxImage').alt = wnArray[wnCurrent][0];
	document.getElementById('watchnowboxLink').href = wnArray[wnCurrent][1];
	document.getElementById('watchnowboxImage').src = wnArray[wnCurrent][2];
}


/************ LIGHTBOX EFFECT **************/

function lightboxCreate (w, h, title) {
	if (typeof w == 'undefined') var w = 400;
	if (typeof h == 'undefined') var h = 224;
	if (typeof title == 'undefined') var title = '';
	var lb, html = '', pad = 5;
	lightboxClose();
	html += '<div id="lb-dimmer" onclick="lightboxClose();" style="background-color: #222; zoom: 1; opacity: 0.5; -moz-opacity: 0.5; -khtml-opacity: 0.5; filter: alpha(opacity=50); position: absolute; z-index: 9999998; left: 0; top: 0; width: '+document.body.scrollWidth+'px; height: '+document.body.scrollHeight+'px;"></div><div id="lb-dialog" style="background-color: #000; position: absolute; z-index: 9999999; left: 100px; top: 100px; width: '+w+'px; padding: '+pad+'px;"><p style="padding: 0 5px; margin: 0 0 5px 0; font-size: 8pt; color: #FFF;"><a href="javascript:void(lightboxClose());" style="float: right; color: #FFF; margin-left: 1em;"><b>Close</b></a>'+title+'&nbsp;</p><div id="lb-content"></div></div>';
	lb = document.createElement('DIV');
	lb.id = 'lightbox';
	lb.innerHTML = html;
	document.body.appendChild(lb);
	lightboxPos(w, h, pad);
	onscroll = function () { eval('lightboxPos('+w+', '+h+', '+pad+');') };
	return document.getElementById('lb-content');
}

function lightboxPos (w, h, pad) {
	var lbd, d;
	d = (typeof document.documentElement != 'undefined' ? document.documentElement : document.body);
	if (lbd = document.getElementById('lb-dialog')) {
		var x, y;
		x = (typeof d.scrollLeft != 'undefined' ? d.scrollLeft : window.pageXOffset) + (typeof d.clientWidth != 'undefined' ? d.clientWidth : window.innerWidth)/2 - w/2 - pad;
		y = (typeof d.scrollTop != 'undefined' ? d.scrollTop : window.pageYOffset) + (typeof d.clientHeight != 'undefined' ? d.clientHeight : window.innerHeight)/2 - h/2 - pad;
		lbd.style.left = x+'px';
		lbd.style.top = y+'px';
	}
}

function lightboxClose () {
	var lb;
	if (lb = document.getElementById('lightbox')) lb.parentNode.removeChild(lb);
	onscroll = function () {};
	if (typeof nowPlaying != 'undefined') delete nowPlaying;
}

/************ BEST OF ABC **************/

function bfbInit () {
	var bfb;
	if (bfb = document.getElementById('bestOfABC')) {
		var flvRegex = /^[^\?]+\.flv(\?.*)?$/;
		var mp3Regex = /^[^\?]+\.mp3(\?.*)?$/;
		var a = bfb.getElementsByTagName('A');
		for (var i=0; i<a.length; i++) {
			if (a[i].href.indexOf('iview') != -1) {
				// a[i].onclick = function(){return confirm('Warning: ABC iView uses large, high-quality video files.\n\nIt is recommended only for users with high-speed (ADSL2+) Internet connections.\n\nDo you wish to continue?');};
			}
			else if (flvRegex.test(a[i].href)) {
				a[i].flv = a[i].href;
				a[i].onclick = function(){var lb = lightboxCreate(400,224,'Best of abc.net.au');lb.innerHTML='<div id="lb-anchor"></div>';showVideo(this.flv,'lb-anchor');return false;};
				a[i].href = '/news/video/bestofabc.htm?file='+a[i].href;
			}
			else if (mp3Regex.test(a[i].href)) {
				a[i].mp3 = a[i].href;
				a[i].onclick = function(){var lb = lightboxCreate(325,50,'Best of abc.net.au');lb.innerHTML='<div style="width: 285px; height: 50px; padding: 5px 20px; background-color: #FFF;"><div id="lb-anchor" style="width:285px; height:1px; overflow:hidden;"></div></div>';showAudio(this.mp3,'lb-anchor');return false;};
				a[i].href = '/news/audio/bestofabc.htm?file='+a[i].href;
			}
		}
	}
}
if (news) addLoadEvent(bfbInit);

function pullquotes () {
	if (/news\/stories\/[0-9]{4}.*/.test(document.URL) && typeof jQuery != 'undefined') {
		$('#article span.pullquote').each(function () {
			var quote = $(this).html().replace(/(^[ "']+|[ "']+$)/g, '');
			var from = $(this).attr('from');
			var html = '<div class="pullquote"><p class="quote">'+quote+'</p>'+(typeof from == 'undefined' ? '' : '<p class="from">&ndash; '+from+'</p>')+'</div>';
			var after = $(this).attr('after');
			if (typeof after == 'undefined') after = 'media';
			if (after.match(/^[0-9]+$/)) { // insert after paragraph in story
				var index = parseInt($(this).attr('after'), 10) - 1;
				$p = $('#article p.first, #article p.first ~ p[class!=first][class!=tags]').filter(':eq('+index+')');
				if ($p.length > 0) $p.after(html);
				else after = 'media'; // paragraph doesn't exist
			}
			if (after == 'headline') $('#article h1').filter(':eq(0)').after(html);
			if (after == 'media') {
				if ($('#storyRelatedMedia').length == 0) $('#article p.first').filter(':eq(0)').before('<div id="storyRelatedMedia"></div>'); // need to create storyRelatedMedia first
				$('#storyRelatedMedia').append(html);
			}
		});
	}
}
if (news) addLoadEvent(pullquotes);


/************ WEBTRENDS MEDIA TRACKING **************/

var webtrendsQueue = '';

function webtrendsQueueAdd (url, title, media) {
	var type = '';
	if (/\.(flv)(\?.*)?$/i.test(url)) type = 'Flash_video';
	else if (/\.(mp3)(\?.*)?$/i.test(url)) type = 'Mp3';
	else if (/\.(asx|asf|wmv|wma|wmv|wpl)(\?.*)?$/i.test(url)) type = 'Windows_media';
	else if (/\.(rm|ra|ram)(\?.*)?$/i.test(url)) type = 'Real_media';
	var dl = '';
	if (media == 'video') dl = '110';
	else if (media == 'audio') dl = '115';
	var urlSplit = /^([^:]+):\/\/([^\/]+)([^\?]*)/.exec(url);
	webtrendsQueue += 'dcsMultiTrack("DCS.dcssip", "'+urlSplit[2].replace(/"/g, '\"')+'", "DCS.dcsuri", "'+urlSplit[3].replace(/"/g, '\"')+'", "WT.ti", "'+title.replace(/"/g, '\"')+'", "WT.clip_n", "'+title.replace(/"/g, '\"')+'", "WT.clip_t", "'+type+'", "WT.clip_ev", "V", "WT.dl", "'+dl+'", "WT.z_division", "News & Current Affairs");';
	webtrendsQueueInit();
}

function webtrendsQueueInit () {
	if (typeof dcsMultiTrack != 'undefined') {
		eval(webtrendsQueue);
		webtrendsQueue = '';
	}
	else { // WebTrends tag not yet ready; try again later
		setTimeout('webtrendsQueueInit()', 500);
	}
}

function trackVideo (url, title) {
	webtrendsQueueAdd(url, title, 'video');
}

function trackAudio (url, title) {
	webtrendsQueueAdd(url, title, 'audio');
}