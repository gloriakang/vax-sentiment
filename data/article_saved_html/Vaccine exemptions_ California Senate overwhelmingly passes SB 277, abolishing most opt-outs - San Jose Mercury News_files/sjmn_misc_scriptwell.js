// load third-party scripts - 20140806EPB
$(function() {
  $.getScript("http://extras.mercurynews.com/scripts/chartbeat_load.js", function() {
    console.log('EPB - chartbeat loaded');
  });
});

// SJMN code
document.write('<link rel="shortcut icon" href="http://extras.mnginteractive.com/live/media/favIcon/mercury/favicon.ico" type="image/x-icon">');
document.write('<link rel="icon" href="http://extras.mnginteractive.com/live/media/favIcon/mercury/favicon.ico" type="image/x-icon">');

// --MISC GALLERIFIC CODE
// --iframe from http://extras.mnginteractive.com/live/js/galleriffic/SSPconsolidated2.js and other miscellaneous 
// document.write('<script type="text/javascript" src="http://extras.mnginteractive.com/live/js/galleriffic/SSPconsolidated2.js"></script>');
// document.write('<div id="analyticsIframe"><iframe frameborder=0 style="display:none" scrolling="no" src=""></iframe></div>');
// --end
// var analyticsIframeSrc = "http://extras.mnginteractive.com/live/js/galleriffic/countercode-SJMN.html";
// var overrideThumbsNum = "8";
// --END MISC GALLERIFIC CODE

// Jumptime Analytics pixel
/*$(document).ready(function() {
	var secKey = String(sectionKeywords).split(',',1);
	$.ajax({
		type: "GET",
		url: "http://beacon.jump-time.net/jt.js",
		dataType: "script",
		cache: true,
		success: function() {
			var auc = 0;
			if (typeof yld_mgr.slots != "undefined" ) { for (p in yld_mgr.slots) { auc++; } }
			var addtl = "mercnews";
			var sec = escape(s.prop6) || "";
			var tag = escape(s.prop7) || "";
			var ct = escape(s.prop6) || "";
			var caid = escape(s.pageName) || "";
			var auc = escape(auc) || "";
			var akv1 = (yld_mgr && yld_mgr.content_topic_id_list)?yld_mgr.content_topic_id_list[0] : "";
			var akv2 = (yld_mgr && secKey[0])?secKey[0] : "";
			var akv3 = (yld_mgr && yld_mgr.cstm_sctn_list)?yld_mgr.cstm_sctn_list : "";
			addtl += "&sec="+sec;
			addtl += "&tag="+tag;
			addtl += "&akv1="+akv1;
			addtl += "&akv2="+akv2;
			addtl += "&akv3="+akv3;
			addtl += "&ct="+ct;
			addtl += "&caid="+caid;
			addtl += "&auc="+auc;
			jt("http://digitalfirst.jump-time.net/mercnews", addtl, true);
			}
		});
	});
*/
