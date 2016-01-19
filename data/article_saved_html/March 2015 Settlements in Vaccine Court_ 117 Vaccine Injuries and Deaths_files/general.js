jQuery(document).ready(function($) {
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
});