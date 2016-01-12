var ppHref = document.location.href;
var splitThePathName = document.location.pathname.split('/');
var ppFullUrl = splitThePathName[1] + '/' + splitThePathName[2];
var ppHomepage = "http://www.mercurynews.com/";
var paywallEnabled = true;
var patt = new Array(); // url pattern to exclude

patt[0]=/alerts/i;
patt[1]=/archivesearch/i;
patt[2]=/autos/i;
patt[3]=/classifieds/i;
patt[4]=/contactus/i;
patt[5]=/estate/i;
patt[6]=/realestate/i;
patt[7]=/rss/i;
patt[8]=/sitemap/i;
patt[9]=/traffic/i;
patt[10]=/faq/i;
patt[11]=/portal/i;
patt[12]=/sponsor/i;
patt[13]=/sponsor-content/i;
patt[14]=/sponsored/i;
patt[15]=/sponsored-content/i;
patt[16]=/m-sponsor/i;

// facebook traffic
if (document.referrer.match(/^https?:\/\/([^\/]+\.)?facebook\.com(\/|$)/i)) {
  var paywallEnabled = false;
}
// twitter links
if (document.referrer.match(/^https?:\/\/([^\/]+\.)?t\.co(\/|$)/i)) {
  var paywallEnabled = false;
}
// twitter traffic
if (document.referrer.match(/^https?:\/\/([^\/]+\.)?twitter\.com(\/|$)/i)) {
  var paywallEnabled = false;
}
// social links
if (document.referrer.match(/^https?:\/\/([^\/]+\.)?bang\.ws(\/|$)/i)) {
  var paywallEnabled = false;
}
// reddit - shoutout to r/SanJose
if (document.referrer.match(/^https?:\/\/([^\/]+\.)?reddit\.com(\/|$)/i)) {
  var paywallEnabled = false;
}

for (var i=0; i<patt.length; i++) {
	var ppResult = patt[i].exec(ppFullUrl);
		if ((ppResult != null) || (ppHref == ppHomepage)) {break;}
	 	if (ppResult == null && i == patt.length-1 && paywallEnabled){
			 document.write("<scr"+"ipt src='http://s.ppjol.net/lightbox/pp4.js'><"+"/script>");
			 document.write("<scr"+"ipt>var pp = {client: {config: {'zone': 'De21ff3Uwn32fbBQoBnvRl','mode':'universal','cookieDomain':'mercurynews.com','debug': 0,'precheck': function () {return 1;}	} } };<"+"/script>");
			 break;
			 }
	}