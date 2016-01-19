jQuery(document).ready(function($) {
      jQuery(".fancybox").fancybox();
      removeHandlerForCommentsPagination();
      function removeHandlerForCommentsPagination() {
      if(jQuery(".comments-navigation a").length > 0) {
 	if(jQuery(".comments-navigation a").data("events") && jQuery(".comments-navigation a").data("events").click[0].handler) {
  	    jQuery(".comments-navigation a").unbind("click");
 	} else {
    	    setTimeout(removeHandlerForCommentsPagination, 100);
 	}
 	}
      }
       jQuery("#main-nav-search-link").on("click", function() {
	   setTimeout(function() {  jQuery("#main-nav-search-form #find").focus(); }, 50);
           return false;
      });
      jQuery("#sticky-nav-search-link").on("click", function() {
	   setTimeout(function() {  jQuery("#sticky-nav-search-form #find").focus(); }, 50);
           return false;
      });

	Date.prototype.getMonthName = function() {
    var monthNames = [ "January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December" ];
		return monthNames[this.getMonth()];
	};
	function getCurrentDate(){
		var currentTime = new Date();
		var month = currentTime.getMonthName();
		var day = currentTime.getDate();
		var year = currentTime.getFullYear();
		if($('.current-date').length > 0){
			$('.current-date').text(month + " " + day + ", " + year);
		}
	}
	getCurrentDate();
})

/***** Code to replace HTTPS by HTTP so that ShareThis Widget can display proper counts */
(function () {
var domElements = document.querySelectorAll(".no-break [st_url]");
for (var i= 0; i < domElements.length; i++) { 
	var url = domElements[i].getAttribute("st_url");
	domElements[i].setAttribute("st_url", url.replace("https", "http"));
}}());
