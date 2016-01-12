function submitForm(s)  {
s.value = "Sending";
return true;
}

function changeBG(obj) {
	obj.style.backgroundColor = "#33474E";
	obj.style.borderWidth = "0 0 1px 0";
	obj.style.borderColor = "#597C87";
	return false;
}
function changeBGBack(obj) {
	obj.style.backgroundColor = "transparent";
	obj.style.borderWidth = "0 0 1px 0";
	obj.style.borderColor = "#26363B";
	return false;
}
function goForth(url) {
	document.location.href = url;
	return true;
}

function go() {
	url = document.getElementById("podcastSubscribe").selectedIndex;
	document.location.href = document.getElementsByTagName("option")[url].value;
	// document.location.href = url;
	return true;
}


// Topic flipper go-to menu goes here
	
// Show-hide the expanding menu

menu_status = new Array();

function showHide(theid){
    if (document.getElementById) {
    var switch_id = document.getElementById(theid);

        if(menu_status[theid] != 'show') {
           switch_id.className = 'show';
           menu_status[theid] = 'show';
        }else{
           switch_id.className = 'hide';
           menu_status[theid] = 'hide';
        }
    }
}

//********************* NEWS ******************** //
/*
ABC News common scripts
Created by: Andrew Kesper, October 2006
Modified by: Andrew Kesper, June 2007
*/

news = true; // News livery
if (!getQueryStringVariable('site').match(/^(news)?$/)) news = false; // one-story-many-views


/************* NEW FUNCTIONS ***************/

// Add new string functions
String.prototype.trim = function() { return this.replace(/^\s+|\s+$/, ''); };
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

// Andrew's version of getElementsByTagName that supports an XML namespace prefix (also works in IE)
// Example usage: getElementsByTagNameScope(document, 'media', 'content')
function getElementsByTagNameScope(xmlelement, scope, localname) {
	// IE version
	if (navigator.userAgent.indexOf('MSIE') != -1) { // can't use "if (document.all)" as it would also apply to Opera
		return xmlelement.getElementsByTagName(scope+':'+localname);
	}
	// Standards-compliant version
	var output = new Array();
	var temp = xmlelement.getElementsByTagName(localname);
	for (var i=0; i<temp.length; i++) {
		if (temp[i].prefix == scope) output[output.length] = temp[i];
	}
	return output;
}

function addLoadEvent(func) { // Source: http://simon.incutio.com/archive/2004/05/26/addLoadEvent
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

/************* MEDIA RSS ***************/

inpageplayer = 'inpageplayer'; // id of in-page player (Flash container)

function showVideo (mediaUrl, insertafter, width, autoplay, guid) {
	if (!mediaUrl) return true;
	if (!insertafter) return true;
	if (!width) var width = '100%';
	if (!autoplay) var autoplay = 'true';
	if (!guid) var guid = null;
	if (insertafter.nextSibling != null && insertafter.nextSibling.id == inpageplayer) { // collapse media player if already open
		if (temp = document.getElementById(inpageplayer)) {
			if (temp.previousSibling != null) classRemove(temp.previousSibling, 'active');
			temp.parentNode.removeChild(temp);
			delete temp;
		}
	}
	else if (mediaUrl.indexOf('.flv') != -1) { // already know the FLV file
		showVideo_play(mediaUrl, insertafter, width, autoplay);
	}
	else if (mediaUrl.indexOf('.xml') != -1 || mediaUrl.indexOf('.rss') != -1) { // need to read Media RSS file to determine FLV file
		var ajaxobj = new XMLHttpRequest();
		ajaxobj.onreadystatechange = function() {showVideo_ajax(ajaxobj, insertafter, width, autoplay, guid);};
		ajaxobj.open('GET', mediaUrl, true);
		ajaxobj.send('');
	}
	else { // assume we are directly linking to another type of media file (e.g. asx, ram)
		location = mediaUrl;
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
			var link = items[itemsIndex].getElementsByTagName('link');
			if (link.length > 0) if (typeof insertafter.href != 'undefined') if (insertafter.href.indexOf('.htm') != -1) if (link[0].firstChild.nodeValue != insertafter.href) var transcript = link[0].firstChild.nodeValue;
			if (url != '') {
				if (format == 'inpage') showVideo_play(url, insertafter, width, autoplay, transcript);
				else location = url;
			}
			else { // preferred format not available
				if (typeof insertafter.href != 'undefined') location = insertafter.href;
			}
		}
		else location = insertafter.href; // Media RSS file not available
	}
}

function showVideo_play (url, insertafter, width, autoplay, transcript) {
	if (temp = document.getElementById(inpageplayer)) {
		if (temp.previousSibling != null) classRemove(temp.previousSibling, 'active');
		temp.parentNode.removeChild(temp);
		delete temp;
	}
	if (width.indexOf('%') != -1) var height = Math.round((parseInt(width, 10)/100)*insertafter.parentNode.clientWidth/16*9); // width is a percentage
	else var height = Math.round(parseInt(width, 10)/16*9); // assume width is in pixels
	var div = document.createElement('DIV');
	div.id = inpageplayer;
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
	if (transcript) {
		if (!transcript.match(/news(_dev)?\/(audio|video)\//)) {
			var p = document.createElement('P');
			p.innerHTML = '<small><a href="'+transcript+'" onclick="return popup(this.href, 950, 500);">View Transcript</a></small>';
			div.insertBefore(p, null);
		}
	}
	classAdd(insertafter, 'active');
}

function showAudio (mediaUrl, insertafter, width, autoplay, guid) {
	if (!mediaUrl) return true;
	if (!insertafter) return true;
	if (!width) var width = '100%';
	if (!autoplay) var autoplay = 'true';
	if (!guid) var guid = null;
	if (insertafter.nextSibling != null && insertafter.nextSibling.id == inpageplayer) { // collapse media player if already open
		if (temp = document.getElementById(inpageplayer)) {
			if (temp.previousSibling != null) classRemove(temp.previousSibling, 'active');
			temp.parentNode.removeChild(temp);
			delete temp;
		}
	}
	else if (mediaUrl.indexOf('.mp3') != -1) { // already know the MP3 file
		showAudio_play(mediaUrl, insertafter, width, autoplay);
	}
	else if (mediaUrl.indexOf('.xml') != -1 || mediaUrl.indexOf('.rss') != -1) { // need to read Media RSS file to determine MP3 file
		var ajaxobj = new XMLHttpRequest();
		ajaxobj.onreadystatechange = function() {showAudio_ajax(ajaxobj, insertafter, width, autoplay, guid);};
		ajaxobj.open('GET', mediaUrl, true);
		ajaxobj.send('');
	}
	else { // assume we are directly linking to another type of media file (e.g. asx, ram)
		location = mediaUrl;
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
			var link = items[itemsIndex].getElementsByTagName('link');
			if (link.length > 0) if (typeof insertafter.href != 'undefined') if (insertafter.href.indexOf('.htm') != -1) if (link[0].firstChild.nodeValue != insertafter.href) var transcript = link[0].firstChild.nodeValue;
			if (url != '') {
				if (format == 'inpage') showAudio_play(url, insertafter, width, autoplay, transcript);
				else location = url;
			}
			else { // preferred format not available
				if (typeof insertafter.href != 'undefined') location = insertafter.href;
			}
		}
		else location = insertafter.href; // Media RSS file not available
	}
}

function showAudio_play (url, insertafter, width, autoplay, transcript) {
	if (temp = document.getElementById(inpageplayer)) {
		if (temp.previousSibling != null) classRemove(temp.previousSibling, 'active');
		temp.parentNode.removeChild(temp);
		delete temp;
	}
	var div = document.createElement('DIV');
	div.id = inpageplayer;
	insertafter.parentNode.insertBefore(div, insertafter.nextSibling);
	window.onresize = function () {};
	var swfurl = 'http://www.abc.net.au/news/swf/mp3player.swf';
	var so = new SWFObject(swfurl, inpageplayer+'Object', 285, 40, '8', '#FFFFFF', true); 
	so.addParam('allowFullScreen', 'true');
	so.addVariable('mediaURL', url);
	so.addVariable('autoPlay', autoplay);
	so.addParam("wmode", "transparent"); // Added by Dan
	so.write(inpageplayer);
	if (transcript) {
		if (!transcript.match(/news(_dev)?\/(audio|video)\//)) {
			var p = document.createElement('P');
			p.innerHTML = '<small><a href="'+transcript+'" onclick="return popup(this.href, 950, 500);">View Transcript</a></small>';
			div.insertBefore(p, null);
		}
	}
	classAdd(insertafter, 'active');
	document.getElementById('inpageplayer').innerHTML = "<!-- audio -->";
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
			var img;
			if (img = document.getElementById('storyPhotosImg')) {
				slideshow[slideshow.length] = new StoryPhoto(img.src, img.width, img.height, (document.getElementById('storyPhotosCaption') ? document.getElementById('storyPhotosCaption').innerHTML : img.alt));
			}
			delete img;
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
			p.innerHTML = '<span id="storyPhotosNavPrev"><a href="javascript:slideshowPrev();"><img src="/news/img/2007/btn_editorspick_prev_26x16.png" width="26" height="16" /></a></span> <span id="storyPhotosNavNext"><a href="javascript:slideshowNext();"><img src="/news/img/2007/btn_editorspick_next_26x16.png" width="26" height="16" /></a></span> <span id="storyPhotosNavText"></span>';
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
function StoryPhoto (src, width, height, caption, versions, alt) {
	this.src = src;
	this.width = width;
	this.height = height;
	this.caption = caption;
	this.alt = alt;
	if (versions) {
		this.versions = versions; // array of StoryPhotoVersion objects
		this.biggest = 0; // index of biggest version, compared by width*height
		this.best = 0; // index of version most suitable for this screen resolution
		for (var i=0; i<versions.length; i++) {
			if (versions[this.biggest].width*versions[this.biggest].height < versions[i].width*versions[i].height) this.biggest = i;
			if (versions[this.best].width*versions[this.best].height < versions[i].width*versions[i].height && versions[i].width < screen.width-170) this.best = i;
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
	if (!caption) var caption = title;
	var horz = width+120;
	var vert = Math.min(height+160, screen.height-120); // avoid popup displaying taller than the screen resolution
	var left = screen.width/2 - horz/2;
	var top = screen.height/2 - vert/2;
	var w = window.open('', windowname, 'width=' + horz + ',height=' + vert +',toolbar=0,resizable=1,scrollbars=1,left='+left+',top='+top);
	w.document.writeln('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');
	w.document.writeln('<html><head><title>' + title + '</title></head><body>');
	w.document.writeln('<style type="text/css">* {font-family:Verdana,Arial,Helvetica,sans-serif;font-size:100%;color:white;line-height:133%;} html, body {height:100%;margin:0;padding:0;background-color:#222;border:none;} body {font-size:75%;text-align:center;} div.image {max-width:100%;padding:40px 0 30px 0;x-border-bottom:2px solid white;} div.image img {border:3px solid white;} p {margin:0 25px;padding-bottom:8px;} div.caption {padding-top:8px;} a {color:#ccc;}</style>');
	w.document.writeln('<div class="image"><img src="'+imgurl+'" width="'+width+'" height="'+height+'" alt="'+title+'" title="'+title+'" /></div>');
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


/************* IMAGE TOOLTIPS ****************/

// For each image, if title attribute is empty, set it to equal the alt attribute
function processImages() {
	var images = document.getElementsByTagName('IMG');
	for (var i=0; i<images.length; i++) if ((typeof images[i].title == 'undefined' || (typeof images[i].title == 'string' && images[i].title == '')) && ((typeof images[i].alt == 'string'))) images[i].title = images[i].alt;
}
if (news) addLoadEvent(processImages);



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

function copyFitStateHeadlines () { // reduce number of state headlines to make its column similar in height to the top story
	//document.title='Copy fit';
	var minVisible = 3;
	if (document.getElementById('topstory') && document.getElementById('topstories') && document.getElementById('stateContent')) {
		var stateHeadlines = document.getElementById('stateContent').getElementsByTagName('LI');
		var numTotal = stateHeadlines.length;
		var numVisible = numTotal+0;
		var done = false;
		while (!done) {
			if (numVisible <= minVisible) done = true;
			else {
				var difference = document.getElementById('topstories').scrollHeight - document.getElementById('topstory').scrollHeight;
				var thisHeight = stateHeadlines[numVisible-1].scrollHeight;
				if (Math.abs(difference-thisHeight) > Math.abs(difference)) done = true; // if removing another headline makes the column closer in height to the other column
				else {
					stateHeadlines[numVisible-1].style.display = 'none';
					numVisible--;
				}
			}
		}
		for (var i=numVisible; i>0; i--) {
			stateHeadlines[numVisible-1].style.display = 'block';
		}
	}
}

/************ MISCELLANEOUS FUNCTIONS **************/


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
		aprevimg.src = '/science/css/blank.gif';
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
			aimg.src = '/science/css/blank.gif';
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
		anextimg.src = '/science/css/blank.gif';
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
		aprevimg.src = '/science/css/blank.gif';
		aprevimg.width = 26;
		aprevimg.height = 16;
		aprev.appendChild(aprevimg);
		if (divs.length > 3) controls.appendChild(aprev);
		for (var i=0; i<divs.length; i+=3) {
			var num = (i/3);
			highlightScroller[containerid+'_length'] = num+1;
			var columns = document.createElement('DIV');
			columns.className = 'columns';
			columns.id = containerid+'_'+num;
			var column3a = document.createElement('DIV');
			column3a.className = 'column3a';
			column3a.appendChild(divs[i]);
			columns.appendChild(column3a);
			if (divs[i+1]) {
				var column3b = document.createElement('DIV');
				column3b.className = 'column3b';
				column3b.appendChild(divs[i+1]);
				columns.appendChild(column3b);
			}
			if (divs[i+2]) {
				var column3c = document.createElement('DIV');
				column3c.className = 'column3c';
				column3c.appendChild(divs[i+2]);
				columns.appendChild(column3c);
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
			aimg.src = '/science/css/blank.gif';
			aimg.width = 16;
			aimg.height = 16;
			a.appendChild(aimg);
			if (divs.length > 3) controls.appendChild(a);
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
		anextimg.src = '/science/css/blank.gif';
		anextimg.width = 26;
		anextimg.height = 16;
		anext.appendChild(anextimg);
		if (divs.length > 3) controls.appendChild(anext);
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