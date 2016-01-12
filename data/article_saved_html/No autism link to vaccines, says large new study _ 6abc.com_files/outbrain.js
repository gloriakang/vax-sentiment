<!-- Outbrain JS -->
(function($) {
	$(document).ready(function(e){

		//sidebar appendaround
		$( ".outbrainSidebar" ).appendAround();

		// Loop each Outbrain element
		$(".OUTBRAIN").each(function(index) {
			var newId = null;
			var widgetId = $(this).attr('data-widget-id');

			// Small/Mobile => Medium/Tablet => Large/Desktop
			// sidebar: MB_1 => SB_2 => SB_1
			// footer image unit: MB_2 => AR_3 => AR_2
			// footer text unit: MB_3 => AR_4 => AR_1
			
			// Large screens
			if (window_width > 1000) {
				switch(widgetId) {
					case "MB_1":
						newId = "SB_1";
						break;
					case "MB_2":
						newId = "AR_2";
						break;
					case "MB_3":
						newId = "AR_1";
						break;
				}
			}

			// Medium screens
			else if (window_width > 600) {
				switch(widgetId) {
					case "MB_1":
						newId = "SB_2";
						break;
					case "MB_2":
						newId = "AR_3";
						break;
					case "MB_3":
						newId = "AR_4";
						break;
				}
			}

			// Update widget id
			if (newId) {
				$(this).attr('data-widget-id',newId);
			}
		});
		// END loop each Outbrain element

		// Load Outbrain JS using async
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = "http://widgets.outbrain.com/outbrain.js";
		s.async = "async";
		$("body").append(s);
	});
})(jQuery);