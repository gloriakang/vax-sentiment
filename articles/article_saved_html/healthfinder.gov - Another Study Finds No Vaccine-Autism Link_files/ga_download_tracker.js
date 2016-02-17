
/*******************************************************************
 *
 *  Google Analytics - Download Tracker (Synchronous Version)
 *
 *  Developed By:   David Hollender
 *  Creation Date:  July 22, 2011
 *
 *  This jquery function automatically tags webpage links for tracking in Google Analytics.
 *
 *  Instructions:
 *
 *   1) Download jquery from jquery.com (http://jquery.com/) and install on your website
 *
 *   2) Add script tag to page templates that references the jquery scripts.  If you save jquery 
 *      in your website's "/scripts" directory, the tag would look like this:
 *
 *         <script src="/scripts/jquery.js"></script>
 *
 *   3) Add script tag to page template that references this file.  If you save this file
 *      in your website's "/scripts" directory, the tage would look like this:
 *
 *         <script src="/scripts/ga_download_tracker.js"></script>
 *
 *   NOTE:  The code assumes that the Google Analytics tracking object variable is called pageTracker. If your code
 *          uses a different variable name, you will need to make a code change.
 *
 *   You will see the results in the Google Analytics event tracking section.  You will be able to view downloads
 *   by document name (minus the extension), or track the total number of PDF, DOC, XLS and PPT downloads.
 *
 *********************************************************************************************************/
    
	ga_track_debug = false;
 
	function strcmp (str1, str2) { return ((str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1)); }

    function url_parts(url)
	{
             pos = url.lastIndexOf('.'); 
         	 qpos = url.indexOf('?'); 

 			 if  (qpos == -1)
			      this.ext = url.substr(pos+1);
			          else this.ext = url.substr(pos+1,qpos-pos-1);

		      this.base =url.substr(0,pos);
		
	}

    function is_targeted_type(url, valid_ext){
	
	     pos  = url.lastIndexOf('.'); 
	     qpos = url.indexOf('?'); 
		 typ  = 0;
			 
		 if  (qpos == -1)
		      my_ext = url.substr(pos);
		 else my_ext = url.substr(pos,qpos-pos);
			 
		 for (i=0; i< valid_ext.length; i++)
		  if (!(strcmp(my_ext.toLowerCase(),valid_ext[i].toLowerCase()))) { typ=i; return true; }
	
	      return false;
		
	 }
	 
	function _trace_ga_event (p1, p2, p3) {
	    alert("TRACKING EVENT: "+p1+" ---> "+p2+" ---> "+p3);
	    }

	function _show_ga_event (p1, p2, p3) {
	    window.status = "TRACKING EVENT: "+p1+" ---> "+p2+" ---> "+p3;
	    }

    $(document).ready(function(){

          valid_ext = new Array(".pdf", ".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx", ".xlsm");
		  typ = 0;

       // Setup Event Tracking for Download Link
          $("a[href]").filter(function() { 
             return is_targeted_type($(this).attr("href"), valid_ext);
             }).click(function(event){ 
			 
			    url = new url_parts(this.href);

                if (ga_track_debug) 
				   _trace_ga_event('DOWNLOADS', url.ext, url.base);

                //pageTracker._trackEvent('DOWNLOADS', url.ext, url.base);
				ga('send', 'event', 'Downloads', 'download', {'page': this.href, 'nonInteraction': 1});
				});


            if (typeof(archiver_ready) != 'undefined') archiver_ready();
            if (typeof(ga_ready) != 'undefined') ga_ready();


});

