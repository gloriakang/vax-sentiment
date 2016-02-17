    function OpenShareVideo(youtubeURL)
    {
        var pageURL = '';
        var s = 'articles.mercola.com';

        var popUpUrl = '';
        //check if url is from www or articles to use corresponding source urls for iframe
        //this is for responsive resizing of popups
        if(window.location.href.indexOf(s) >= 0) {
	        pageURL = 'http://' + window.location.hostname ;    
	        popUpUrl = pageURL + '/sites/aspartame/sharevideo.html?youtubeURL=' ;
	        }  
        else
        {
	        pageURL = 'http://' + window.location.hostname ;
	        popUpUrl = pageURL + '/cmstemplates/mercola/aspartame/sharevideo.html?youtubeURL=' ;
        }


        var pageTitle = $('meta[property="og\\:title"]').attr("content");
        var pageDesc = $('meta[property="og\\:description"]').attr("content");
        var fbAppID = $('meta[property="fb\\:app\\_id"]').attr("content");
        var ytURL = youtubeURL;

        //Replace single qoutes found on titles and description as this causes errors
        pageTitle = pageTitle.replace("'", "%27");
        pageDesc = pageDesc.replace("'", "%27");

         
        popUpUrl = popUpUrl + ytURL +  '&title=' + pageTitle  + '&description=' + pageDesc  + '&fbappid=' + fbAppID ;
        
        
        if ($("[aria-describedby='shareVideodialog']").length != 0)
           {       
                $("[aria-describedby='shareVideodialog']").remove();         
           }
            
        $("#shareVideodialog").html('<div class="closeBtn"><a href="javascript:closeSharevideo();"><div class="etafclose"></div>  </a></div> <iframe onload="rrShareVideoResize()" id="modalShareVideo" class="sharevidborder" width="100%" height="620px" marginWidth="0" marginHeight="0" frameBorder="0" scrolling="no" />');

        $("#modalShareVideo").attr("src", popUpUrl);       
        var rrShare = $("#shareVideodialog").dialog({          
	        modal: true,      
                width: 'auto', //changed to auto for responsive sizing
                height: 'auto',//changed to auto for responsive sizing
                draggable: false,
                resizable: false,
                autoResize: true,//changed to auto for responsive sizing
                fluid: true //add for responsive
                ,autoOpen: false
        }); 

        rrShare.dialog("open");     
        try
	    {    
	        if(getInternetExplorerVersion() == -1 )
		    {
		      if(!navigator.userAgent.match(/Windows Phone/i))
		      {
		            var uagent = navigator.userAgent.toLowerCase();
		            var safaribrowser = /applewebkit/.test(uagent) && /safari/.test(uagent) && !/chrome/.test(uagent);
		            if (!safaribrowser)
		            {
			            modalShareVideo.location.reload(1);
		            }
		      }
		    }
	    }
	    catch (e)
	    {
	    }
        $("#shareVideodialog").position({          
	        my: "center",          
	        at: "center",          
	        of: window      
        });  
    }

    function closeSharevideo() 
        {
            $("#shareVideodialog").dialog('close');
            $("#modalShareVideo").attr("src", "");
            $("#shareVideodialog").html('');
        }
        

    //Script to force rrpopupresize on iframe load
    function rrShareVideoResize()
        {
		    //Do not apply rrpopup resize when user is using IPAD
		    var isiPad = navigator.userAgent.match(/iPad/i) != null;

            //if ( !isiPad )
            //{
                var iFrameID = document.getElementById('modalShareVideo');
                  if(iFrameID)
                  {	
                    //Set iphone rrpopupdialog to 100%
                    var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
                    if(isiPhone)
                    {
		                $(' #modalShareVideo').height('100%');
                    } 
                      
                    // here you can make the height, delete it first, then I make it again
                    iFrameID.height = "";
                    iFrameID.height = (iFrameID.contentWindow.document.body.scrollHeight + 320) + "px";    	
                       
                    //Force position to center
	                if ($("#shareVideodialog").hasClass('ui-dialog-content')) 
	                    {
	                        $("#shareVideodialog").dialog("option", "position", "center");
 	                    } 
                  }   
                
           // }

        }
        
    $(window).resize(function() 
    {
         var iFrameID = document.getElementById('modalShareVideo');
         if(iFrameID)
         {     
               // here you can make the height, I delete it first, then I make it again  
               if(iFrameID.contentWindow.document.body !== null)//IE fix, check if body exist before accessing scroll height
               {
                   $('#modalShareVideo').height((iFrameID.contentWindow.document.body.scrollHeight + 320));
               }         
          }   

        
                if ($("#shareVideodialog").hasClass('ui-dialog-content')) {
	                $("#shareVideodialog").dialog("option", "position", "center");
	            }
    });