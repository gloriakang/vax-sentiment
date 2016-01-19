//Reference URL : http://www.makeuseof.com/tag/ajaxify-wordpress-comments/

jQuery('document').ready(function($){
	var commentform=$('#commentform'); // find the comment form
	commentform.prepend('<div id="comment-status"><p class="ajax-success" style="font-size:12px;">Please note: All comments are moderated and are reviewed as quickly as possible.</br>When submitting a comment you are agreeing to our <a href="http://healthimpactnews.com/terms-of-use/" target="_blank"> Terms of Use agreement.</a></p></div>');  // add info panel before the form to provide feedback or errors
	$("#reply-title").css("height","33px");
	//var statusdiv=$('#comment-status'); // define the info panel

	/*commentform.submit(function(){
		//serialize and store form data in a variable
		var formdata=commentform.serialize();
		//Add a status message
		statusdiv.html('<p><code style="font-weight:bold;font-size:15px;">Processing...</code></p>');
		//Extract action URL from commentform
		var formurl=commentform.attr('action');
		//Post Form with data
		$.ajax({
			type: 'post',
			url: formurl,
			data: formdata,
			error: function(XMLHttpRequest, textStatus, errorThrown){
				statusdiv.html('<p class="wdpajax-error" ><code style="font-weight:bold;font-size:15px;">**You might have left one of the fields blank, or be posting too quickly**</code></p>');
			},
			success: function(data, textStatus){
				if(data=="success"){
					statusdiv.html('<p class="ajax-success"><code style="font-weight:bold;font-size:15px;">**Thanks for your comment. This is in subject to moderation and will be reviewed shortly.**</code></p>');
				} else {
					statusdiv.html('<p class="ajax-error" ><code style="font-weight:bold;font-size:15px;">**Please wait a while before posting your next comment.**</code></p>');
					console.log(data);
				}
				commentform.find('textarea[name=comment]').val('');
			}
		});
		return false;
	});*/
});