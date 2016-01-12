_satellite.pushAsyncScript(function(event, target, $variables){
  // Cookie setter and getter functions
// We only want to count daily unique ad blocks
// Taken from www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

// Setup the tracking function to submit a GET request (i.e. fire the image pixel)
// Taken from cn.dart.js (author: Rob Sethi), with some modifications
function trackETF(blocked,new_visit){

	    if (blocked) {
	    	if (new_visit){
		    _blocked = 'blocked';
	    	} else{
	    	    _blocked = 'blocked_pageview';
	    	}
	    } else {
	    	if (new_visit){
		    _blocked = 'not_blocked';
	    	} else {
	    	    _blocked = 'not_blocked_pageview';
	    	}
	    }

            var track, buildParams;
	    
	    // Fire the event with the event params
            track = function(){
                jQuery.ajax({
                    type       : "GET",
                    url         : '//event.condenastdigital.com/images/event.gif?' + buildParams(),
                    cache       : false
                });
            };

	    // Function to build the parameters of the gif URL
            buildParams = function(){
                var params, markers;
                    
		    params = {
                        "e0_id"     : document.location.host + '/' + _blocked,
                        "e0_ec"     : "adblock",
                        "e0_env"    : "dart",
                        "e0_sc"     : document.location.host.split('.')[0].substring(0,3),
                        "e0_tit"    : browserCheck(),
                        "e0_url"    : document.location.href
                    };

                    function browserCheck(){
                        var N= navigator.appName, ua= navigator.userAgent, tem;
                        var M= ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\.?\d+(\.\d+)*)/i);

                        if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) {M[2]=tem[1];}
                        M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
                        return M.toString()
                    };


                return jQuery.param(params);
            };
	
	    //console.log(buildParams);

            track();

};

var new_visit;
// Set a BlockerSniffer cookie to ensure that we only count 1 detection event per user per day 
if (getCookie("BlockerSniffer_"+document.location.host.split('.')[1]) != 1) {
    setCookie("BlockerSniffer_"+document.location.host.split('.')[1],1,1);
    new_visit = true;
} else {
    new_visit = false;
}

// Apply SniffAdBlocker (must include SniffAdBlocker.js (https://github.com/veeracs/SniffAdBlock)
// Adapted from http://wiki.conde-dev.com/pages/viewpage.action?pageId=20188075
if (!sniffAdBlock) {    //  if the sniffer is blocked by AdBlock
    console.log('Adblocker detected');
    if (new_visit){
            trackETF(true,true);
            trackETF(true,false);
        } else {
            trackETF(true,false);
        }
} else {
    console.log('checking for ad blockers...');
    sniffAdBlock.onDetected(function() {
        console.log('Adblocker detected');
        if (new_visit){
            console.log('new visit');
            trackETF(true,true);
            trackETF(true,false);
        } else {
            trackETF(true,false);
        }
    });
  	sniffAdBlock.onNotDetected(function() {
        console.log("Adblocker not detected");
	if (new_visit){
            trackETF(false,true);
            trackETF(false,false);
        } else {
            trackETF(false,false);
        }
    });
}
 
//  Optionally, invoke a manual check if the onDetected callback never fires
setTimeout(function() {
    sniffAdBlock.check();
}, 10);
});
