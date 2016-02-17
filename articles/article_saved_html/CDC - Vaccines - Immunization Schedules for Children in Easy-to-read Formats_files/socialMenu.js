/**
 * Social Menu
 * @fileOverview Builds the Social Sharing Menu, using
 * @requires Facebook App ID seems to be required to Like/Recommend
 * @version 1.0
 * @copyright 2015 Centers for Disease Control
 */

// just in case
if (!window.console) {
	var console = {
		log : function(){},
		warn : function(){},
		error : function(){},
		time : function(){},
		timeEnd : function(){}
	}
}

// try to detect a touch device (instead of a window size) - roughly how Modernizr does it
function isTouchDevice() {
	return('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
}

// TODO: revisit and wrap
CDC.SocialMenu = CDC.SocialMenu || {};

var allowClickTrack, encodeText, facebookAppID, esp, v_href, v_title, v_desc, v_img, v_via, socialMediaContainer, socialMediaShareContainer, socialShareButton;
	allowClickTrack = 0;
	encodeText = false;
	facebookAppID = 205691699516606;
	esp = $('html.esp, body.esp').length;
	v_href = encodeURIComponent(location.href);
	v_title = $('meta[property="og:title"]').attr('content') || encodeURIComponent(document.title);
	v_desc = $('meta[property="og:description"]').attr('content') || '';
	v_img = $('meta[property="og:image"]').attr('content') || '';
	v_hash = '';
	v_via = 'CDCgov';
	socialMediaContainer = $('#socialMediaContainer');
	socialMediaShareContainer = $('#socialMediaShareContainer');
	socialShareButton = $('a.share_button img');

var v_twitter, v_facebook, v_pinterest, v_linkedin, v_email, v_digg, v_addthistoyoursite;
	v_twitter = 'Twitter';
	v_facebook = 'Facebook';
	v_pinterest = 'Pinterest';
	v_linkedin = 'LinkedIn';
	v_email = esp ? 'Correo' : 'Email';
	v_digg = 'Digg';
	v_addthistoyoursite = esp ? 'Agregar ese sitio' : 'Add this to your site';

// encode them all
if (encodeText) {
	v_title = encodeURIComponent(v_title);
	v_desc = encodeURIComponent(v_desc);
	v_img = encodeURIComponent(v_img);
}

var is2x,
	is3x,
	idx = 0,
	max = 100,
	imagePath = "\/TemplatePackage\/3.0\/images\/social\/",
	syndicateImage = '<i class="sprite-24-syndicate"><\/i>',
	checkForShareMenu = window.setInterval(function() {
		is2x = socialMediaContainer.length;
		is3x = $('#socialMediaShareContainer').length;
		// in 2.3(?) the menu is created through script, so either way, wait for it to appear before proceeding
		if (is2x || is3x) {
			initShareMenu();
		}
		idx++;
		window.clearInterval(checkForShareMenu);
	}, 100);

function initShareMenu() {
	window.clearInterval(checkForShareMenu);

	var shareContainer;

	// the 2.x version of the template uses socialMediaContainer instead of socialMediaShareContainer
	if (is2x) {
		imagePath = "\/TemplatePackage\/images\/social\/";
		syndicateImage = '<img src="/TemplatePackage/images/social/add_to_site.png" alt="'+v_addthistoyoursite+'" />';
		shareContainer = socialMediaContainer;
	} else {
		shareContainer = socialMediaShareContainer;
	}

	socialShareButton.attr('src', '/TemplatePackage/3.0/images/social/addthis-32.png').show();	// Change the source of the Share +
	$('a.share_button span').remove(); // remove the hidden text

	//URL Override - used with things like infographics/images/widgets
	if ($(shareContainer).data('url') !== undefined) {
		v_href = $(shareContainer).data('url');
	}

	// if the image metadata doesn't exist, attempt to find one in the content area of the page
	var newimg, animg, match = false, ext;
	if (v_img === '') {
		// $('meta[property="og:image"]').remove();
		// $('meta[property="og:image:type"]').remove();
		// The URL of an image which is used in stories published about this object.
		// We suggest that you give us an image of at least 600×315 pixels.
		// However, bigger is better, so if you have a 1200×630 or larger image that you can use, please give it to us.
		// Also, we recommend that you keep images as close to a 1.91:1 aspect ratio as possible to avoid cropping.
		animg = $('#contentArea img');
		if (animg.length) {
			animg.each(function(){
				newimg = new Image();
				newimg.src = animg.attr('src');
				if (newimg.width >= 500 && newimg.height >= 300) {
					// ext = newimg.src.split('.')[newimg.src.split('.').length - 1];
					// match = true;
					v_img = newimg.src;
					return false;
				}
			});

			// if (match) {
			// 	$('head').append('<meta property="og:image" content="'+newimg.src+'"><meta property="og:image:type" content="image/'+ext+'">');
			// }
		}
	}

	// the dropdown menu
	var menu = '<ul class="dd-menu">';
		if ($(shareContainer).data('twitter') !== false) {
			menu += '<li><a href="#twitter" data-metrics-source="twitter-menu"><img class="twitter" src="'+ imagePath +'twitter-16.png" alt="' + v_twitter + '" \/>' + v_twitter + '<\/a><\/li>';
		}
		if ($(shareContainer).data('facebook') !== false) {
			menu += '<li><a href="#facebook" data-metrics-source="facebook-menu"><img class="facebook" src="'+ imagePath +'facebook-16.png" alt="' + v_facebook + '" \/>' + v_facebook + '<\/a><\/li>';
		}
		if ($(shareContainer).data('pinterest') !== false && v_img !== '') {
			menu += '<li><a href="#pinterest" data-metrics-source="pinterest-menu"><img class="pinterest" src="'+ imagePath +'pinterest-16.png" alt="' + v_pinterest + '" \/>' + v_pinterest + '<\/a><\/li>';
		}
		if ($(shareContainer).data('linkedin') !== false) {
			menu += '<li><a href="#linkedin" data-metrics-source="linkedin-menu"><img class="linkedin" src="'+ imagePath +'linkedin-16.png" alt="' + v_linkedin + '" \/>' + v_linkedin + '<\/a><\/li>';
		}
		if ($(shareContainer).data('email') !== false) {
			menu += '<li><a href="#email" data-metrics-source="email-menu"><img class="email" src="'+ imagePath +'email-16.png" alt="' + v_email + '" \/>' + v_email + '<\/a><\/li>';
		}
		if ($(shareContainer).data('digg') !== false) {
			menu += '<li><a href="#digg" data-metrics-source="digg-menu"><img class="digg" src="'+ imagePath +'digg-16.png" alt="' + v_digg + '" \/>' + v_digg + '<\/a><\/li>';
		}
		if ($(shareContainer).data('syndication') !== false) {
			menu += '<li><a href="https://tools.cdc.gov/medialibrary/index.aspx#/sharecontent/" data-metrics-source="syndication-menu">' + syndicateImage +  v_addthistoyoursite + '<\/a><\/li>';
		}
		menu += '<\/ul>';

	// update facebook recommend and twitter tweet button links
	$('a.share_button_facebook').attr('href', populateShareMenuLinkParams('facebook')).attr('rel','nofollow').attr('target', '_blank').data('metrics-source', 'facebook-button');
	$('a.share_button_twitter').attr('href', populateShareMenuLinkParams('twitter')).attr('rel','nofollow').attr('target', '_blank').data('metrics-source', 'twitter-button');
	// Bind an event handler to the buttons to capture metrics
	$('a.share_button_facebook, a.share_button_twitter').bind('click touchend', function(e) {
		var target;
		if (e.target.tagName.toUpperCase() === 'SPAN') {
			target = $(e.target).parent();
		} else {
			target = $(e.target);
		}
		recordMetrics(target.data('metrics-source'));
	});
	socialMediaShareContainer.addClass('dd');		// 3.0
	socialMediaContainer.addClass('dd');			// 2.x
	$('.share_button').addClass('dd-toggle').after($(menu));

	// loop over the menu items and update the href with settings from the current page
	$('.dd-menu a[href^="#"]').each(function(e, t) {
		var h = $(t).attr('href');
		$(t).attr('href', populateShareMenuLinkParams(h)
			.replace('#',''))
			.attr('rel','nofollow')
			.attr('target', '_blank');
	});

	$('.dd-menu a[href*="tools.cdc.gov"]').each(function() {
		this.href += v_href;
	}).attr('rel','nofollow').attr('target', '_blank');
}

function recordMetrics(buttonName) {
	// just in case
	if (typeof s === 'undefined') { return false; }

	// Write out a metrics image "beacon" to record the event.
	var url = location.href;
	var hash = url.indexOf("#");

	if (hash > 0) {
		url = url.substring(0, hash);
	}

//	$('#metrics').append($('<img height="1" width="1" border="0" alt="Web Analytics" class="analytics" />')
//		.attr('src', 'http://tools.cdc.gov/metrics.aspx?reportsuite=cdcsynd' +
//		'&c5=' +
//		($('html.esp').length > 0 ? "spa" : "eng") +
//		'&channel=' + s.channel +
//		'&c8=Social%20Media%20Buttons' +
//		'&c34=' + buttonName +
//		'&contenttitle=Social%20Media%20Button%20Page' +
//		'&c26=' + escape(s.pageName)));
}

// using AddThis Sharing EndPoints, the params are roughly the same
// http://support.addthis.com/customer/portal/articles/381265-addthis-sharing-endpoints
// TWITTER: text, via, related
function populateShareMenuLinkParams(h) {
	var offer = 'http://api.addthis.com/oexchange/0.8/forward/' + h +
		'/offer?url=' + v_href;

	if (h.indexOf('facebook') > -1) {
		/*
		return 'https://www.facebook.com/dialog/share?' +
			'app_id=' + facebookAppID +
			'&display=popup' +
			'&href=' + v_href +
			'&redirect_uri=' + v_href;
		*/
		/*
		return 'https://www.facebook.com/dialog/feed?' +
			'app_id=' + facebookAppID +
			'&display=popup' +
			// '&caption=An%20example%20caption' +
			'&link=' + v_href +
			'&redirect_uri=' + v_href +
			'&picture=' + v_img +
			'&description=' + v_desc;
		*/
		/*
		return 'https://www.facebook.com/sharer/sharer.php?u=' + v_href;
		*/
		return offer +
			'&title=' + v_title +
			'&description=' + v_desc +
			'&via=' + v_via +
			'&ct=' + allowClickTrack +
			'&media=' + v_img;
	} else {
		if (h.indexOf('pinterest') > -1) {
			if (v_img !== '') {
				return 'https://www.pinterest.com/pin/create/button/?url=' +
					v_href +
					'&media=' + v_img +
					'&description=' + v_desc +
					'&hashtags=' + v_hash;
			} else {
				return 'https://www.pinterest.com/pin/create/button/?url=' +
					v_href +
					'&description=' + v_desc +
					'&hashtags=' + v_hash;
			}
		} else {
			return offer +
				'&title=' + v_title +
				'&description=' + v_desc +
				'&via=' + v_via +
				'&ct=' + allowClickTrack +
				'&media=' + v_img;
		}
	}
}

// dropdown specific variables
var arr = [],
	config = {selector: '.dd', toggle: 'dd-toggle', open: 'dd-open', menu: '.dd-menu' },
	isTouch = isTouchDevice() || $('html.touch').length ? 1 : 0,
	link = '';

// using bind instead of on for 2.x (jquery 1.6.x)
$(document).bind('click touchend', function(e) {
	// if the menu is open
	if (arr.length) {
		// if we're clicking within the share menu
		if (arr[arr.length - 1].find(e.target).length) {
			link = $(e.target).attr('href');
			var metricsSource = $(e.target).data('metrics-source');
			// some touch devices were not firing the anchor before closing the menu
			if (isTouch) {
				// if what was tapped has an href
				if (link && link.indexOf('#') !== 0) {
					// close the menu
					arr.pop().removeClass(config.open);
					// record the metrics hit for the menu/button
					recordMetrics(metricsSource);
					// open to target link in a new window
					window.open(link,'_blank');
					return false;	// prevent default link action
				} else {
					// close the menu
					arr.pop().removeClass(config.open);
					// tapping on the share button shouldn't do anything else
					if (!link) {
						return false;
					}
				}
			} else {
				// close the menu
				arr.pop().removeClass(config.open);
				// tapping on the share button shouldn't do anything else
				if (!link) {
					return false;
				} else {
					// record the metrics hit for the menu/button
					recordMetrics(metricsSource);
				}
			}
		} else { // clicking somewhere else
			if (arr.length) {
				arr.pop().removeClass(config.open);
			}
		}
	} else { // open the menu
		var $this = $(e.target);
		if ($this.hasClass(config.toggle) || $this.parent().hasClass(config.toggle)) {
			e.preventDefault();

			// get the coords of the share button button
			var toggle = $this.hasClass(config.toggle) ? $this : $this.parent(),
				menu = $(config.menu);

			// position the menu just under it
			menu.css({position: 'absolute', left: toggle.position().left, top: toggle.position().top + 32});

			$this = $this.closest(config.selector);

			// open the menu
			if (!$this.hasClass(config.open)) {
				arr.push($this.addClass(config.open));
			} else {
				arr.pop().removeClass(config.open);
			}
		} else {
			// everything else
		}
	}
});

// close the share on resize/orientation change
$(window).resize(function() {
	if (arr.length) {
		arr.pop().removeClass(config.open);
	}
});
