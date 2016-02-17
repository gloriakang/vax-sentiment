 //Scripts to handle events when document resizes
       function listener(event){            
            //Parameter structure <iframeid>|<height>|<originurl of source of message>
            var param = event.data;
    		//console.log(event.data);
    		//Split parameter passed separated by |
    		if(param == "close")
    		{
    		    //Call close modal popup function
    		    closeAvatarviaMessage();
    		}
    		else
    		{
    		    var res = param.toString().split("|"); 
    		    //location.protocol + "//" + location.host
    		    //Get Origin URL from parameter passed
    		    var originURL = res[2];
        		
    		    //Event.origin must be the same as paremeter origin url or do nothing
	            if ( event.origin !== originURL )
		            return;
    		    //console.log(event.origin + ' - ' + originURL);
    		    var iframeID = res[0];
		        var height = res[1] + 'px';
    		    
		        $("#" + iframeID).height(height);    		
    		}
    		
            //console.log(height);
            
            //alert("received: " + event.data);
	        // document.getElementById("test").innerHTML = "received: " + event.data;
        }

        if (window.addEventListener){
	        window.addEventListener("message", listener, false);
	        //console.log("message listener added");
        } else {
	        window.attachEvent("onmessage", listener);
        }
        
function closeAvatarviaMessage()
    {        
        var urlTrim = window.parent.location;	   
        urlTrim = urlTrim.toString();
        if (urlTrim.indexOf('?') >= 0) {
		            urlTrim = urlTrim.substring(0, urlTrim.indexOf('?'));
        }
        if (urlTrim.indexOf('#') >= 0) {
		            urlTrim = urlTrim.substring(0, urlTrim.indexOf('#'));
        }
         
        window.parent.location = urlTrim;
     
        $("#AvatarModal").dialog('close');
       
        
    }