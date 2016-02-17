// 
// updated 02-09-15 
//
// CSS KILLER
//
// Removes unnecessary CSS
(function(){
    var numCSS = dfm.$('link[rel="stylesheet"]').length, // Number of CSS links on the page
        reCSS = /^http:\/\/extras.mnginteractive.com\/live\/css\/site\d+\//i, // A Regex for site css to remove
        toRemove = [], // Array of css that needs to be removed.
        domain = dfm.env.domain, // Domain of page
        counter = 0, // Counter
        cssKillerInt, // Reference to Interval created below
        h; // hrefs of CSS 

    // Add hrefs of CSS files to be removed to array
    for (var i = 0; i < numCSS; i++){
            h = dfm.$('link[rel="stylesheet"]')[i].href;
            if (reCSS.test(h) && h.toLowerCase().indexOf('barter') === -1) {
                toRemove.push(h);
            }
            if (h.toLowerCase().indexOf('mngidefaultstyles') !== -1) { 
                toRemove.push(h);
            }
            if (h.toLowerCase().indexOf('mngi_section') !== -1) { 
                toRemove.push(h);
            }
    }
    // Remove all the stylesheets added to the array above
    for (i = 0; i < toRemove.length; i++){
        dfm.$('link[href="' + toRemove[i] + '"]').remove();
    }

    // Removes the standard section CSS, if it's there.
    dfm.$('link[href="http://extras.mnginteractive.com/live/css/MNGi_Section.css"]').remove();

    // This part removes the dfm-core.css. We don't know exactly when it will exist in the DOM
    cssKillerInt = setInterval(function(){
        if (dfm.$('link[href="http://local.' + domain  + '.com/common/dfm/dfm-core.css"]').length){
            dfm.$('link[href="http://local.' + domain +  '.com/common/dfm/dfm-core.css"]').remove();
            window.clearInterval(cssKillerInt);
        }
        else {
            if (counter >= 200){
                window.clearInterval(cssKillerInt);
            }
        }
        counter++;
    },100);
})();

(function(object){
	// We can determine if a page is section, home or article by looking at the URL
	// Could be some outliers for local dev that are not accounted for, particularly with determining if your test page is a home page
	var path = window.location.pathname,
		mode = '',
		regExp = {
		homeOnDev : /bartertown.*home|nngps|index.html/i, // For Dev
		article :  /ci_\d+/i
	};
	if (!path || path === '/' || path.match(regExp.homeOnDev)) {
		mode = 'home';
	}
	else if (path.match(regExp.article)) {
		mode = 'article';
	}
	else {
		mode = 'section';
	}
	object.theMode = mode;
})(dfm);

var in_bt_dev = window.location.pathname.match(/bartertown/);
if ( in_bt_dev != null ) dfm.$('head').append('<link rel="stylesheet" type="text/css" href="http://extras.mnginteractive.com/live/css/site67/bartertown.css" />');

if (dfm.theMode === 'home') {
	// This occurs when window.location.pathname is falsey or '/' or it includes some dev string (see exact regexp above)
	dfm.$('head').append('<link rel="stylesheet" type="text/css" href="http://extras.mnginteractive.com/live/css/site67/bartertown-home.css" />');
	dfm.$('head').append('<link rel="stylesheet" type="text/css" href="http://extras.mnginteractive.com/live/css/site67/bartertown-home-nav.css" />');
	dfm.$('link[href="http://extras.mnginteractive.com/live/css/site67/bartertown-section.css"]').remove();
	dfm.$('body').addClass('btHome');
}
else if (dfm.theMode === 'article' ) {
	// This occurs when window.location.pathname includes ci_
	dfm.$('body').addClass('btArticle');
}
else {
	dfm.$(document).ready(function() {
		// We want this code that adds styles in the head so that we can get all of the relevant stylesheets on the page as fast as possible (to improve the appearance of the page)
		// However, since we can only determine if a non-home page section is supposed to have a home page layout by the presence of #apocalypse-3up, we need a doc ready
		if (dfm.$('#apocalypse-3up').length) {
			dfm.$('head').append('<link rel="stylesheet" type="text/css" href="http://extras.mnginteractive.com/live/css/site67/bartertown-home.css" />');
			dfm.$('link[href="http://extras.mnginteractive.com/live/css/site67/bartertown-section.css"]').remove();
			dfm.$('body').addClass('btHome');
		}

		// This loads the section-specific CSS, which we don't want on the homepage layout.
		if (!dfm.$('#apocalypse-3up').length) {
			if ( in_bt_dev != null ) dfm.$('head').append('<link rel="stylesheet" type="text/css" href="http://extras.mnginteractive.com/live/css/site67/bartertown-section.css" />');
			dfm.$('#region3 .layout5FeatureItemBox:first').prepend(dfm.$('#region3 .layout5FeatureItemBox .listingItemTitle:first'));
			dfm.$('body').addClass('btSection');
		}
	});
}
if ( in_bt_dev != null && is_it_article() == true ) dfm.$('head').append('<link rel="stylesheet" type="text/css" href="http://extras.mnginteractive.com/live/css/site67/bartertown-article.css" />');
// Silicon Valley is the only site with a home page that is supposed to look like a section front
if (dfm.env.domain === 'siliconvalley' && dfm.theMode === 'home') {
	dfm.$('link[href="http://extras.mnginteractive.com/live/css/site67/bartertown-home.css"]').remove();
	dfm.$('head').append('<link rel="stylesheet" type="text/css" href="http://extras.mnginteractive.com/live/css/site67/bartertown-section.css" />');
	dfm.$('body').addClass('btSection');
	dfm.$('body').removeClass('btHome');
	dfm.$(document).ready(function() {
		dfm.$('#region3 .layout5FeatureItemBox:first').prepend(dfm.$('#region3 .layout5FeatureItemBox .listingItemTitle:first'));
	});
}
// marinij homepage headlines above centerpiece
if (dfm.env.domain === 'marinij' && dfm.theMode === 'home') {
   dfm.$(document).ready(function() {
       dfm.$('#region3 .layout5FeatureItemBox:first').prepend(dfm.$('#region3 .layout5FeatureItemBox .listingItemTitle:first'));
   });
}


// Property-specific JS
// Assuming we're on a .net or .com.
//TODO: Include whitelist of approved domains.
/*function get_the_domain(hostname)
{
	hostname = hostname.replace(/www\.|betalive\.|preview\.|origin\.|\.com|\.net/g, '', hostname);
	return hostname;
}*/

function is_it_home(pathname)
{
	if ( pathname == null || pathname == '' ) pathname = document.location.pathname;
	if ( pathname == '/' || pathname == '/index.html' || pathname == '/nngps' || pathname == '/bartertown_home'  || pathname == '/bartertown-home' ) return true;
	return false;
}
function is_it_article(pathname)
{
	if ( pathname == null || pathname == '' ) pathname = document.location.pathname;
	var ci_ = /ci_/i;
	var is_article = ci_.exec(pathname);
	if ( is_article == null ) return false;
	return true;
}

/*var the_domain = get_the_domain(document.domain);*/
/*var is_home = is_it_home();*/
/*if ( typeof the_domain == 'undefined' ) var the_domain = 'denverpost';*/


// Sometimes the top ad isn't 920px wide. This addresses that.
if ( dfm.$('#preHeader > table').width() > 700 && dfm.$('#preHeader > table').width() < 900 ) dfm.$('body div.preHeaderRegion').css('width', 728);
else
{
if ( dfm.$('#dfp-15_ad_container > a img').length && dfm.$('#dfp-15_ad_container > a img').width() < 920 ) dfm.$('body div.preHeaderRegion').css('width', 728);
if ( dfm.$('#dfp-15_ad_container > embed').length && dfm.$('#dfp-15_ad_container > embed').width() < 920 ) dfm.$('body div.preHeaderRegion').css('width', 728);
if ( dfm.$('#dfp-15_ad_container > ins').length && dfm.$('#dfp-15_ad_container > ins').width() < 920 ) dfm.$('body div.preHeaderRegion').css('width', 728);
if ( dfm.$('#dfp-15_ad_container > object').length && dfm.$('#dfp-15_ad_container > object').width() < 920 ) dfm.$('body div.preHeaderRegion').css('width', 728);
if ( dfm.$('#dfp-15_ad_container > iframe').length && dfm.$('#dfp-15_ad_container > iframe').width() < 920 )
{
var iframes_length = dfm.$('#dfp-15_ad_container > iframe').length;
for (var i = 0; i < iframes_length; i++)
{
if ( dfm.$('#dfp-15_ad_container > iframe')[i].width > 0 ) dfm.$('body div.preHeaderRegion').css('width', 728);
}
}

if ( dfm.$('#dfp-15_ad_container > div').length && dfm.$('#dfp-15_ad_container > div').width() < 920 ) dfm.$('body div.preHeaderRegion').css('width', 728);
if ( dfm.$('#dfp-15_ad_container > div > div').length && dfm.$('#dfp-15_ad_container > div > div').width() < 920 && dfm.$('#dfp-15_ad_container > div > div').width() > 400 ) dfm.$('body div.preHeaderRegion').css('width', 728);
if ( dfm.$('#dfp-15_ad_container > div > embed').length && dfm.$('#dfp-15_ad_container > div > embed').width() < 920 ) dfm.$('body div.preHeaderRegion').css('width', 728);
if ( dfm.$('#dfp-15_ad_container > .prWrap').length && dfm.$('#dfp-15_ad_container > .prWrap').width() < 920 ) dfm.$('body div.preHeaderRegion').css('width', 728);
}

// No ad? Hide the region.
// Ed 10-02-14 : added check for #dfp-15 to go along with existing check for #dfp-15_ad_container
if ( dfm.$('#dfp-15_ad_container').length === 0 && dfm.$('#dfp-15').length === 0 ) {
    dfm.$('body div.preHeaderRegion').css('height', '0');
} 



window.console = window.console || (function(){
    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
    return c;
})();

// Moved initial cobranding code because it's needed by the nav
var dfm_cobrand = false;
if ( document.location.hash != '' )
{
	(function(object) {
		object.the_old_domain = dfm.env.domain;
		var dfm_hash = document.location.hash.substring(1,document.location.hash.length);
		switch ( dfm_hash )
		{
		case 'contracostatimes':
		case 'insidebayarea':
			dfm.env.domain = dfm_hash;   
			object.dfm_cobrand = true;
			//console.log("COBRANDING WITH ", dfm_hash);
			break;
		}
	})(window);
}