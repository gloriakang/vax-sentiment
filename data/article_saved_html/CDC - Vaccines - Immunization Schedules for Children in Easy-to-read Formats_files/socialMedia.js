//******************************************************************************************//
//******************************************************************************************//
// Bookmark and Share Scripts
//******************************************************************************************//
//******************************************************************************************//

function addBookmarkHover(id) {
	var elem = $("#" + id);
	if (elem.length > 0) {
		elem.addClass("sfhover");
	}
}

function removeBookmarkHover(id) {
	var elem = $("#" + id);
	if (elem.length > 0) {
		elem.removeClass("sfhover");
	}
}

//******************************************************************************************//
//******************************************************************************************//
// load social menu assets
//******************************************************************************************//
//******************************************************************************************//

function loadScript(url, callback) {
	// adding the script tag to the head as suggested before
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;

	if (!callback) {
		callback = function(){}; // Default Callback
	}

	// bind the event to the callback function
	if (script.addEventListener) {
		script.addEventListener("load", callback, false); // IE9+, Chrome, Firefox
	} else if (script.readyState) {
		script.onreadystatechange = callback; // IE8
	}

	// fire the loading
	head.appendChild(script);
}

function loadStyle(url) {
	// Adding the link tag to the head
	var head = document.getElementsByTagName('head')[0];
	var link = document.createElement('link');
	link.rel = 'stylesheet'
	link.type = 'text/css';
	link.href = url;

	// Fire the loading
	head.appendChild(link);
}

//******************************************************************************************//
//* The javascript class that handles showing and hiding the bookmark/share "window" by
//* applying and removing the "sfhover" CSS class to the LI element.
//******************************************************************************************//
if (typeof CDC == "undefined") var CDC = new Object();
if (typeof CDC.BookmarkShare == "undefined") CDC.BookmarkShare = new Object();
CDC.BookmarkShare = function () {
}
CDC.BookmarkShare.prototype = {
	timeout: null,
	showPopup: function () {
		clearTimeout(this.timeout);
		if (this.className.indexOf("sfhover") < 0) {
			var command = "addBookmarkHover('" + this.id + "')";
			this.timeout = setTimeout(command, 300);
		}
	},
	hidePopup: function () {
		if (this.className.indexOf("sfhover") < 0) {
			clearTimeout(this.timeout);
		} else {
			var command = "removeBookmarkHover('" + this.id + "')";
			this.timeout = setTimeout(command, 200);
		}
	}
}

//******************************************************************************************//
//* A function that iterates through the collection of LI items with a class of "share" and
//* sets the event handlers for the onmouseover and onmouseout events.
//******************************************************************************************//
shareHover = function () {
	$("div.bookmarkShare").each(function () {
		var shareNavLi = $(this);
		if (shareNavLi.length > 0) {
			var shareClass = new CDC.BookmarkShare(shareNavLi);
			shareNavLi.bind("mouseover", shareClass.showPopup);
			shareNavLi.bind("mouseout", shareClass.hidePopup);
		}
	});
}

//******************************************************************************************//
//* A function that iterates through the collection of LI items with a class of "share" and
//* sets the event handlers for the onfocus and onblur events.  These handlers are needed
//* to support keyboard-driven navigation of the bookmark/share functionality.
//******************************************************************************************//
mcAccessible = function () {

	$("div.bookmarkShare").bind("focus", function () {
		$(this).addClass("sfhover");
	});

	$("div.bookmarkShare").bind("blur", function () {
		$(this).removeClass("sfhover");
	});

	$("div.bookmarkShare").find("a").each(function () {
		var mcEl = $(this);
		mcEl.bind("focus", function () {
			var elem = $(this);
			elem.addClass("sffocus");
			var parentElem = elem.parent();
			while (parentElem.length > 0 && !parentElem.hasClass("bookmarkShare")) {
				parentElem = parentElem.parent();
			}
			parentElem.addClass("sfhover");
		});
		mcEl.bind("blur", function () {
			var elem = $(this);
			elem.removeClass("sffocus");
			var parentElem = elem.parent();
			while (parentElem.length > 0 && !parentElem.hasClass("bookmarkShare")) {
				parentElem = parentElem.parent();
			}
			if (parentElem.hasClass("sfhover")) {
				parentElem.removeClass("sfhover");
			}
		});
	});
}

function getShareUrl(sitename, urlOverride) {
	var title = encodeURIComponent(document.title);
	var url = encodeURIComponent(location.href);
	var hash = url.indexOf("#");
	if (hash > -1 && sitename.toLowerCase() != "twitter") {
		url = url.substring(0, hash);
	}
	var shareUrl;
	if (sitename.toLowerCase() == "facebook" && urlOverride != null && typeof urlOverride != 'undefined') {
		shareUrl = urlOverride;
	} else if (sitename.toLowerCase() == "twitter" && urlOverride != null && typeof urlOverride != 'undefined') {
		shareUrl = urlOverride;
	} else if (sitename.toLowerCase() == "pinterest" && urlOverride != null && typeof urlOverride != 'undefined') {
		shareUrl = urlOverride;
	} else if (sitename.toLowerCase() == "facebook") {
		shareUrl = "https://www.facebook.com/sharer.php?u=" + url + "&t=" + title;
	} else if (sitename.toLowerCase() == "twitter") {
		if (title.length > 119 - CDC.SocialMedia.twitterAccount.length) {
			title = title.substring(0, 116 - CDC.SocialMedia.twitterAccount.length) + "...";
		}
		shareUrl = "https://twitter.com/intent/tweet?text=" + title + " - @" + CDC.SocialMedia.twitterAccount + "&url=" + url;
	} else if (sitename.toLowerCase() == "delicious") {
		shareUrl = "http://delicious.com/save?url=" + url + "&title=" + title;
	} else if (sitename.toLowerCase() == "digg") {
		shareUrl = "http://digg.com/submit?url=" + url + "&title=" + title + "&media=news";
	} else if (sitename.toLowerCase() == "google") {
		shareUrl = "http://www.google.com/bookmarks/mark?op=add&bkmk=" + url + "&title=" + title;
	} else if (sitename.toLowerCase() == "technorati") {
		shareUrl = "http://technorati.com/faves?sub=favthis&add=" + url;
	} else if (sitename.toLowerCase() == "linkedin") {
		shareUrl = "https://www.linkedin.com/uas/connect/user-signin?session_redirect=" +
			encodeURIComponent("http://www.linkedin.com/wcs/share?isFramed=false&lang=en_US&url=") + url +
			encodeURIComponent("&original_referer=") + url;
	}
	return shareUrl;
}


// LOAD SOCIAL MENU ASSETS
$(function(){
	loadScript('/TemplatePackage/js/B/socialMenu.js');
	loadStyle('/TemplatePackage/css/B/socialMenu.css');
});

if (typeof CDC == "undefined") var CDC = new Object();
if (typeof CDC.SocialMedia == "undefined") CDC.SocialMedia = new Object();
CDC.SocialMedia = (function () {


	/*private variables and methods (not accessible directly through the  mySingleton namespace): */
	var cdcSocialMediaWindowObjectReference;
	var templateVersionLessThan260 = false;

	function GetTwitterProfileLinkText() {
		var linkText = CDC.SocialMedia.twitterProfileLinkText;
		if (linkText == '') {
			if ($('body.esp').length > 0) {
				linkText = 'CDC en Twitter';
			} else {
				linkText = 'Follow CDC on Twitter';
			}
		}

		return linkText;
	}

	function GetFacebookProfileLinkText() {
		var linkText = CDC.SocialMedia.facebookProfileLinkText;
		if (linkText == '') {
			if ($('body.esp').length > 0) {
				linkText = 'CDC en Facebook';
			} else {
				linkText = 'Like CDC on Facebook';
			}
		}

		return linkText;
	}

	function GetTwitterProfileUrl() {
		var link = CDC.SocialMedia.twitterProfileUrl;
		if (link == '') {
			if ($('body.esp').length > 0) {
				link = 'https://twitter.com/CDCespanol';
			} else {
				link = 'https://twitter.com/cdcgov';
			}
		}
		return link;
	}

	function GetFacebookProfileUrl() {
		var link = CDC.SocialMedia.facebookProfileUrl;
		if (link == '') {
			if ($('body.esp').length > 0) {
				link = 'https://www.facebook.com/CDCespanol';
			} else {
				link = 'https://www.facebook.com/CDC';
			}
		}
		return link;
	}

	// function GetSocialMediaBlockHtml() {
	// 	var socialMediaHtml = '<div id="socialMediaContainer is-this-being-injected">';
	// 	socialMediaHtml += '	<div class="addthis_container noLinking">';
	// 	socialMediaHtml += '		<a class="addthis_button_facebook" title="Facebook" href="#"><span id="addthis_facebook" class="facebookRecommend"></span></a>';
	// 	socialMediaHtml += '		<a class="addthis_button_twitter" title="Twitter" href="#"><span id="addthis_twitter" class="twitterTweet"></span></a>';
	// 	socialMediaHtml += '		<a class="addthis_button noLinking" href="http://www.addthis.com/bookmark.php"><img src="http://s7.addthis.com/static/btn/sm-plus.gif" width="16" height="16" border="0" alt="Share" /><span class="shareButtonEn">Share</span><span class="shareButtonEs">Compartir</span></a>';
	// 	socialMediaHtml += '	</div>';
	// 	socialMediaHtml += '</div>';
	// 	return socialMediaHtml;
	// }

	function GetSocialMediaBlockHtml() {
		var socialMediaHtml = '<div id="socialMediaContainer">';
		socialMediaHtml += '		<div class="share_container noLinking">';
		socialMediaHtml += '		 	<a class="share_button_facebook" title="Facebook" href="#"><span id="share_facebook" class="facebookRecommend"></span></a>';
		socialMediaHtml += '		 	<a class="share_button_twitter" title="Twitter" href="#"><span id="share_twitter" class="twitterTweet"></span></a>';
		socialMediaHtml += '			<a class="share_button" href="#socialMediaContainer" ><img src="/TemplatePackage/images/social/sm-plus.gif" alt="Share" /><span class="shareButtonEn" aria-label="Share">Share</span><span class="shareButtonEs" aria-label="Compartir">Compartir</span></a>';
		socialMediaHtml += '		</div>';
		socialMediaHtml += '	</div>';
		return socialMediaHtml;
	}

	function addCommas(nStr) {
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	}

	function Fix252Spacing() {
		if (templateVersionLessThan260) {
			if ($('body').hasClass('secondTier') && $('body').hasClass('optionalTwo')) {
				$('#breadBox').css('margin-bottom', '10px');
			} else if ($('body').hasClass('secondTier') && $('body').hasClass('topicHome')) {
				$('#breadBox').css('margin-bottom', '10px');
			} else if ($('body#applicationsPage').length > 0 && $('body').hasClass('widePage')) {
			} else if ($('body').hasClass('widePage')) {
				$('.main-inner').css('margin-top', '10px');
			} else {
				$('#socialMediaContainer').css('margin-bottom', '10px');
				$('#breadBox').css('margin-bottom', '10px');
			}
		}
	}


	/* public variables and methods (can access private vars and methods ) */
	return {
		socialMediaSharingEnabled: true,
		twitterProfileLinkEnabled: false,
		twitterProfileLinkText: '',
		twitterProfileUrl: '',
		twitterAccount: 'CDCgov',
		facebookProfileLinkEnabled: false,
		facebookProfileLinkText: '',
		facebookProfileUrl: '',
		linkedInButtonEnabled: false,
		pinterestButtonEnabled: false,
		pinterestImageUrl: '',
		pinterestImageDescription: '',

		//Write the social media and share block on each content page
		writeSocialMedia: function () {
			if (this.socialMediaSharingEnabled) {
				var socialMediaHtml = "";
				if ($('#socialMediaContainer').length == 0) {
					templateVersionLessThan260 = true;
					socialMediaHtml = GetSocialMediaBlockHtml();

					if ($('body#applicationsPage').length > 0 && $('body').hasClass('widePage')) {
						$('.pageOptions-horizontal:first').after(socialMediaHtml);
						if ($('#content .contactArea').length > 0) {
							$('#content .contactArea').first().appendTo('#socialMediaContainer');
						}
					} else if ($('body').hasClass('widePage')) {
						var smDiv = $(socialMediaHtml);
						var nextSib = $('.pageOptions-horizontal:first').next();
						if ($(nextSib).hasClass('contactArea')) {
							$(smDiv).append($(nextSib).clone());
						}
						$('.pageOptions-horizontal:first').after(smDiv);
						if ($(nextSib).hasClass('contactArea')) {
							$(nextSib).remove();
						}
					} else if ($('body').hasClass('secondTier') && $('body').hasClass('optionalTwo')) {
						$('#breadBox').after(socialMediaHtml);
					} else if ($('body').hasClass('secondTier') && $('body').attr('id') == 'blog') {
						$('#breadBox').after(socialMediaHtml);
						$('#breadBox').css('margin-bottom', '10px');
						$('#socialMediaContainer').css('margin-left', '12px');
					} else if ($('body').hasClass('secondTier')) {
						$('#breadBox').after(socialMediaHtml);
						$('#breadBox').css('margin-bottom', '10px');
					} else if ($('body').hasClass('homepage')) {
						$('.preFoot').prepend(socialMediaHtml);
					}
					// Added to attempt to get CSS to be applied to injected HTML.
					$('#socialMediaContainer').offset($('#socialMediaContainer').offset());
				} else {
					var socMedContDiv = $('#socialMediaContainer');
					if ($('body#applicationsPage').length > 0 && $('body').hasClass('widePage')) {
						if ($('#content .contactArea').length > 0) {
							$('#content .contactArea').first().appendTo(socMedContDiv);
						}
					} else if ($('body').hasClass('secondTier') && $('body').attr('id') == 'blog') {
						$('#breadBox').css('margin-bottom', '10px');
						$('#socialMediaContainer').css('margin-left', '12px');
					} else if ($('body').hasClass('secondTier')) {
						$('#breadBox').css('margin-bottom', '10px');
					} else if ($('body').hasClass('widePage')) {
						var nextSib = $(socMedContDiv).next();
						if ($(nextSib).hasClass('contactArea')) {
							$(socMedContDiv).append($(nextSib).clone());
						}
						$(nextSib).remove();
					} else if ($('body').hasClass('secondTier') && $('body').hasClass('optionalTwo')) {

					} else if ($('body').hasClass('secondTier')) {

					} else if ($('body').hasClass('homepage')) {

					}
				}
				$('.pageOptions-horizontal .share').each(function () { $(this).remove(); });

				/* Turned this off for now since using AddThis buttons */
				//shareHover();
				//mcAccessible();

			} else {
				var socMedContDiv = $('#socialMediaContainer');
				if ($(socMedContDiv).length > 0) {
					$(socMedContDiv).remove();
				} else {
					templateVersionLessThan260 = true;
					Fix252Spacing();
				}
			}

			/* Removed separate Pinterest and LinkedIn since it is in AddThis */
			/*
			if(CDC.SocialMedia.linkedInButtonEnabled){
				$("div#twitterBlock").after($('<div id="linkedinBlock"><script src="//platform.linkedin.com/in.js" type="text/javascript"></script><script type="IN/Share"></script></div>'));
			}
			else{
				$("#bookmarkShare li.google").after('<li class="linkedin"><a href="#" class="skip external" onclick="CDC.SocialMedia.openSocialMediaWindow(\'linkedin\', null, this); $(this).blur(); return false;">LinkedIn</a></li>');
			}
			var pinterestHref = 'http://pinterest.com/pin/create/button/?url=' + encodeURI(document.location);
			if (CDC.SocialMedia.pinterestImageUrl && CDC.SocialMedia.pinterestImageUrl.length > 0) {
				pinterestHref += '&media=' + encodeURI(CDC.SocialMedia.pinterestImageUrl);
			} else {
				$('#content-main img').each(function() {
					if ($(this).width() > 90) {
						if ($(this).attr('src') && $(this).attr('src').substring(0, 1) == '/') {
							var phost = location.protocol + '//' + location.hostname + ((location.port && location.port.length > 0) ? ':' + location.port : '');
							pinterestHref += '&media=' + encodeURI(phost + $(this).attr('src'));
						} else {
							pinterestHref += '&media=' + encodeURI($(this).attr('src'));
						}
						if ($(this).attr('alt').length > 0) {
							pinterestHref += '&description=' + encodeURI($(this).attr('alt'));
						}
						return false;
					}
				});
			}
			if (CDC.SocialMedia.pinterestImageDescription && CDC.SocialMedia.pinterestImageDescription.length > 0) {
				pinterestHref += '&description=' + encodeURI(CDC.SocialMedia.pinterestImageDescription);
			}

			pinterestHref = pinterestHref.replace(/\'/g, "\\\'");
			var pinItImage = '<img border="0" src="//assets.pinterest.com/images/pidgets/pin_it_button.png" title="Pin It" alt="Pin It" />';
			var pinItOnClick = 'CDC.SocialMedia.openSocialMediaWindow(\'pinterest\', \'' + pinterestHref + '\', this); $(this).blur(); return false;';
			if (CDC.SocialMedia.pinterestButtonEnabled) {

				var url = "//assets.pinterest.com/js/pinit.js";
				$.getScript(url, function() {
					var pinterestBlock = $('<div id="pinterestBlock" />');
					var pinterestAnchor = $('<a />');
					pinterestAnchor.appendTo(pinterestBlock);
					$(pinItImage).appendTo(pinterestAnchor);
					pinterestAnchor.attr('href', pinterestHref)
						.attr('data-pin-config', 'beside')
						.attr('onclick', pinItOnClick)
					pinterestAnchor.addClass('pin-it-button');
					pinterestBlock.insertBefore($('#bookmarkShareBlock'));
				});

			} else{
				var pinItListItem = '<li class="pinterest"><a class="external" href="#" onclick="' + pinItOnClick + '">' + pinItImage + '<span class="label">Pinterest</span></a></li>';
				if ($("#bookmarkShare li.linkedin").length == 0) {
					$("#bookmarkShare li.google").after(pinItListItem);
				} else {
					$("#bookmarkShare li.linkedin").after(pinItListItem);
				}
			}
			*/
		},
		//Write the social media profile like/follow buttons
		writeSocialMediaProfileLinks: function () {
			if (this.facebookProfileLinkEnabled) {
				var newFacebookItem = $('<a />')
				.attr('href', GetFacebookProfileUrl())
				.attr('target', '_blank')
				.attr('onclick', 'CDC.SocialMedia.openSocialMediaWindow(\'facebook\', \'' + GetFacebookProfileUrl() + '\', this); return false;');
				if ($("body.widePage").length > 0) {
					newFacebookItem.attr('title', GetFacebookProfileLinkText());
					newFacebookItem.html("&nbsp;");
				} else {
					newFacebookItem.html(GetFacebookProfileLinkText());
				}
				$('<li class="facebook" />').append(newFacebookItem).insertBefore('div.pageOptions-inner li.email');
			}
			if (this.twitterProfileLinkEnabled) {
				var newTwitterItem = $('<a />')
				.attr('href', GetTwitterProfileUrl())
				.attr('target', '_blank')
				.attr('onclick', 'CDC.SocialMedia.openSocialMediaWindow(\'twitter\', \'' + GetTwitterProfileUrl() + '\', this); return false;');
				if ($("body.widePage").length > 0) {
					newTwitterItem.attr('title', GetTwitterProfileLinkText());
					newTwitterItem.html("&nbsp;");
				} else {
					newTwitterItem.html(GetTwitterProfileLinkText());
				}
				$('<li class="twitter" />').append(newTwitterItem).insertBefore('div.pageOptions-inner li.email');
			}
		},
		//Write the social media profile like/follow buttons on the bottom options bar with shortened text.
		writeShortSocialMediaProfileLinks: function () {
			if ($('body.esp').length > 0) {
				CDC.SocialMedia.facebookProfileLinkText = 'Me gusta';
				CDC.SocialMedia.twitterProfileLinkText = 'Segui';
			} else {
				CDC.SocialMedia.facebookProfileLinkText = 'Like';
				CDC.SocialMedia.twitterProfileLinkText = 'Follow';
			}
			if (this.facebookProfileLinkEnabled) {
				var newFacebookItem = $('<a />')
				.attr('href', GetFacebookProfileUrl())
				.attr('title', GetFacebookProfileLinkText())
				.attr('onclick', 'CDC.SocialMedia.openSocialMediaWindow(\'facebook\', \'' + GetFacebookProfileUrl() + '\', this); return false;')
				.attr('target', '_blank');
				if ($("body.widePage").length > 0) {
					newFacebookItem.html(CDC.SocialMedia.facebookProfileLinkText);
				} else {
					newFacebookItem.html(GetFacebookProfileLinkText());
				}
				$('<li class="facebook" />').append(newFacebookItem).insertBefore('div.pageOptions-horizontal ul.services li.email');
			}
			if (this.twitterProfileLinkEnabled) {
				var newTwitterItem = $('<a />')
				.attr('href', GetTwitterProfileUrl())
				.attr('title', GetTwitterProfileLinkText())
				.attr('onclick', 'CDC.SocialMedia.openSocialMediaWindow(\'twitter\', \'' + GetTwitterProfileUrl() + '\', this); return false;')
				.attr('target','_blank');
				if ($("body.widePage").length > 0) {
					newTwitterItem.html(CDC.SocialMedia.twitterProfileLinkText);
				} else {
					newTwitterItem.html(GetTwitterProfileLinkText());
				}
				$('<li class="twitter" />').append(newTwitterItem).insertBefore('div.pageOptions-horizontal ul.services li.email');
			}
		},

		//Handle social media and sharing popup windows
		openSocialMediaWindow: function (sitename, urlOverride, e) {
			$('body').css('cursor', 'wait');
			var url = location.href;
			var hash = url.indexOf("#");
			if (hash > -1) {
				url = url.substring(0, hash);
			}
			var title = document.title;
			if (sitename.toLowerCase() == "favorites") {
				if (window.sidebar) { // firefox
					window.sidebar.addPanel(title, url, "");
				} else if (document.all) { // IE
					external.AddFavorite(url, title);
				} else if (window.opera && window.print) { // opera
					var elem = document.createElement('a');
					elem.setAttribute('href', url);
					elem.setAttribute('title', title);
					elem.setAttribute('rel', 'sidebar');
					elem.click();
				} else {
					alert('Your web browser does not support adding a bookmark with Javascript.  Please manually add one via your browser\'s bookmark menu.');
				}

			} else {
				var windowWidth = 780;
				var bookmarkURL = getShareUrl(sitename, urlOverride);
				if (sitename.toLowerCase() == "twitter" && typeof urlOverride != 'undefined') {
					windowWidth = 900;
				}
				// Display popup window with selected site URL.
				if (sitename.toLowerCase() == "__linkedin") {
					IN.UI.Share().params({
						url: urlOverride
					}).place();
				//	cdcSocialMediaWindowObjectReference = window.open(bookmarkURL,
				//		"_blank", "height=200,width=600,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
				} else {
					cdcSocialMediaWindowObjectReference = window.open(bookmarkURL,
						"_blank", "height=500,width=" + windowWidth + ",status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
				}
			}

			// Figure out which button was clicked for metrics reporting purposes.
			var buttonType = sitename;
			var anchorClicked = $(e);
			if (anchorClicked.parents('ul#services li').hasClass('facebook')) {
				buttonType = 'facebook-right';
			} else if (anchorClicked.parents('ul#services li').hasClass('twitter')) {
				buttonType = 'twitter-right';
			} else if (anchorClicked.parents('div.pageOptions-horizontal li').hasClass('facebook')) {
				buttonType = 'facebook-bottom';
			} else if (anchorClicked.parents('div.pageOptions-horizontal li').hasClass('twitter')) {
				buttonType = 'twitter-bottom';
			}
			// Record the metrics hit.
			this.recordMetrics(buttonType);

			// Remove the CSS class indicating focus on the bookmark/share item
			$('div#bookmarkShare').removeClass('sfhover');

			// Restore the cursor.
			$('body').css('cursor', 'auto');

			// If the popup did not work then return true so that the anchor href can still work (e.g., for iPad apps).
			if (cdcSocialMediaWindowObjectReference == null || typeof(cdcSocialMediaWindowObjectReference)=='undefined') {
				return true;
			} else {
				return false;
			}

		},
		recordMetrics : function(buttonName) {
			// Write out a metrics image "beacon" to record the event.
			var url = location.href;
			var hash = url.indexOf("#");
			if (hash > 0) {
				url = url.substring(0, hash);
			}
			$('#metrics').append($('<img height="1" width="1" border="0" alt="Web Analytics" class="analytics" />')
				.attr('src', 'http://tools.cdc.gov/metrics.aspx?reportsuite=cdcsynd' +
					'&c5=' +
					($('body.esp').length > 0 ? "spa" : "eng") +
					'&channel=' + s.channel +
					'&c8=Social%20Media%20Buttons' +
					'&c34=' + buttonName +
					'&contenttitle=Social%20Media%20Button%20Page' +
					'&c26=' + escape(s.pageName)));
		}
	}
})()

//Wait until the main-inner is loaded, then write the social media block. We do this to quicken the load so that we don't
//have to wait until the entire page loads.
var WriteSocialMediaTimeout;
var WriteSocialMediaAttempts = 0;
var handled = false;
function WriteSocialMediaWhenReady() {
	if (WriteSocialMediaAttempts < 30) {
		if ($('.main-inner').length > 0 && !handled) {
			clearTimeout(WriteSocialMediaTimeout);
			handled = true;
			CDC.SocialMedia.writeSocialMedia();
			CDC.SocialMedia.writeSocialMediaProfileLinks();
			CDC.SocialMedia.writeShortSocialMediaProfileLinks();
			$('#socialMedia').show();
			//***************
			// Re-write the URLs to Facebook/Twitter/Share buttons for failover in case popup windows are disabled.
			$('div#facebookBlock a.facebookRecommend')
				.attr('href', getShareUrl('facebook'))
				.attr('target', '_blank');
			$('div#twitterBlock a.twitterTweet')
				.attr('href', getShareUrl('twitter'))
				.attr('target', '_blank');
			$('div#bookmarkShareBlock li.delicious a')
				.attr('href', getShareUrl('delicious'))
				.attr('target', '_blank');
			$('div#bookmarkShareBlock li.digg a')
				.attr('href', getShareUrl('digg'))
				.attr('target', '_blank');
			$('div#bookmarkShareBlock li.google a')
				.attr('href', getShareUrl('google'))
				.attr('target', '_blank');
			$('div#bookmarkShareBlock li.linkedin a')
				.attr('href', getShareUrl('linkedin'))
				.attr('target', '_blank');
			//***************
		} else {
			WriteSocialMediaAttempts += 1;
			WriteSocialMediaTimeout = setTimeout('WriteSocialMediaWhenReady()', 100);
		}
	} else {
		clearTimeout(WriteSocialMediaTimeout);
	}
}

WriteSocialMediaWhenReady();
