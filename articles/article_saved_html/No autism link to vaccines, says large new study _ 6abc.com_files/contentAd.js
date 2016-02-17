/**
*	Author: Maria Arbuzova
*	contentAd.js
*	Description: This js file sets up the ContentAd module by using station specific values from html attributes.
*/

(function($) {

	// Document Ready
	$(document).ready(function(e){
		
			if( $('.contentAdPropArray').length){
				var contentAdParam = $('.contentAdPropArray').attr('data-contentAdParam');
				var id = $('.contentAdPropArray').attr('data-id');
				var d = $('.contentAdPropArray').attr('data-d');
				var url = $('.contentAdPropArray').attr('data-url');
				var elementId = "contentad" + contentAdParam;

				var params =
				{ id: id, d: d, wid: contentAdParam, cb: (new Date()).getTime(), url: url };
				var qs="";
				for(var key in params){qs+=key+"="+params[key]+"&"}
				qs=qs.substring(0,qs.length-1);
				var s = document.createElement("script");
				s.type= 'text/javascript';
				s.src = "http://api.content.ad/Scripts/widget.aspx?" + qs;
				s.async = true;
				document.getElementById(elementId).appendChild(s);
			}
		
	});
	// END Document Ready
	
})(jQuery);
// END Anonymous Function