var path, path2, domain = "";
var obj = new Object;
var height, width, ciSection = "";
jQuery.getScript("http://extras.mnginteractive.com/live/js/sharedCode/mngiShared.js").done(function () {
    path = getPath();
	path2 = getPath();
    domain = getDomain();
    if (jQuery("#toutVideoDiv").length) {
        var e = "http://extras.mnginteractive.com/live/js/jquery/toutVideo/json/" + u + ".js";
        jQuery.ajax({
            async: false,
            url: e,
            dataType: "jsonp",
            error: function (e, t, n) {
                return "Unloaded"
            }
        })
    }
    if (jQuery("#cNewsDiv").length) {
	    var t = "http://extras.mnginteractive.com/live/js/jquery/crowdyNews/json/" + u + ".js";
		 //window.console && console.log("***** vendorWidgets.js loaded *****");
	    jQuery.ajax({
	        async: false,
	        url: t,
	        dataType: "jsonp",
	        error: function (e, t, n) {
	            return "Unloaded"
	        }
	    });
    }
    //if (path == '' || path2 == '') path = "/homepage"; path2 = '/homepage';
}).fail(function () {
    //window.console && console.log('vendorWidgets.js getScript failed.')
});
if (jQuery("#toutVideoDiv")) {
    function toutVid(e) {
        path2 = path2.toLowerCase();
        for (i = 0; i < splitUrl.length; i++)
            if (splitUrl[i].indexOf("ci_") !== -1) {
                var t = path2.split("/ci_");
                path2 = t[0]
            }
        c = e[u][path2];
        if (typeof c != "undefined") {
            var n = !("width" in c) ? n = 300 : n = c["width"];
            var r = !("height" in c) ? r = 450 : r = c["height"];
            jQuery("#toutVideoDiv").append('<iframe class="tout-widget-iframe" frameborder="0" height="' + r + '" scrolling="no" src=http://www.tout.com/widgets/' + c["id"] + ' width="' + n + '"></iframe>')
        }
    }
}

if(jQuery('#cNewsDiv')) {
	function cNews(obj) {
		path = path.toLowerCase();
		// check to see if URL contains 'ci_'. used for article page. if found, make secName "article"
		var articlePage = ""; 
		for(i=0;i<splitUrl.length;i++)
			if(splitUrl[i].indexOf("ci_") !== -1){ 
				articlePage = splitUrl[i];
				path = "/article";
			}	
		// set 'c' to domain+path in json
		 c2 = obj[u][path];
		 //window.console && console.log(c2);
		 //window.console && console.log(path);
		 //window.console && console.log(typeof c2);
		if ( typeof c2 != 'undefined' ) {
			var width  = !( 'width' in c2 )  ? width=300  : width=c2['width'];   // set default width to 300
			var height = !( 'height' in c2 ) ? height=600 : height=c2['height']; // set default height to 600
			jQuery(document).ready(function() {	// new crowdy player
				if (path === '/socialwire') { // socialwire page still uses iframe. 
						//window.console && console.log("Calling IFRAME");
						jQuery("#cNewsDiv").html("<iframe height='"+height+"' width='"+width+"' id='"+c2["id"]+"' frameborder='"+c2["frameborder"]+"' scrolling'"+c2["scrolling"]+"' src='" + c2["url"]+"'></iframe>");
				} else {
					// populate crowdy news widget on page load
					if(u === 'denverpost.com' && path === '/rockies' || path === '/broncos' || path === '/nuggets' || path === '/avalanche' || path === '/preps'){
						//window.console && console.log('path in else is rockies');
						jQuery("#cNewsDiv").html("<div style='width:"+width+"px; height:"+height+"px;' breakingburner-widget="+c2["breakingBurnerWidget"]+"></div><scr"+"ipt src="+c2["url"]+"></scr"+"ipt><scr"+"ipt src="+obj[u].reqJS+"></scr"+"ipt>");
					} else {
						//window.console && console.log('calling undefined script version of fullpage');
						jQuery("#cNewsDiv").html("<iframe height='"+height+"' width='"+width+"' id='"+c2["id"]+"' frameborder='"+c2["frameborder"]+"' scrolling'"+c2["scrolling"]+"'></iframe><scr"+"ipt src='"+c2["url"]+"'></scr"+"ipt>");
					}
				}
			});
		} // end if ( typeof c2 != 'undefined' )
		else { window.console && console.log('Crowdy widget did not load because c2 is undefined in venderWidget.js'); }
	} // end function cNews(obj)
} // if(jQuery('#cNewsDiv'))