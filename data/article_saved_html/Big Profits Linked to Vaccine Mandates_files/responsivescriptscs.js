        // Returns the version of Internet Explorer or a -1
        // (indicating the use of another browser).
function getInternetExplorerVersion()
        {
          var rv = -1; // Return value assumes failure.
          if (navigator.appName == 'Microsoft Internet Explorer')
          {
            var ua = navigator.userAgent;
            var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
              rv = parseFloat( RegExp.$1 );
          }
          else if (navigator.appName == 'Netscape')//to check if browser is IE11
          {
            var ua = navigator.userAgent;
            var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
              rv = parseFloat( RegExp.$1 );
          }
          return rv;
        }

//This closes the submenu opened
function closeSubmenu()
{
    $("#main").find('ul.mm-opened').removeClass('mm-subopened'); 
    $("#main").find('ul.mm-opened').removeClass('mm-hidden'); 
    $("#main").find('ul.mm-opened').removeClass('mm-current');
    $("#main").find('div.mm-opened').removeClass('mm-current');
    $("#main").find('div.mm-opened').removeClass('mm-opened');
}


(function($, window, document, undefined) {    
    $.fn.hasScroll = function(axis){
        var sX = this.css("overflow-x"),
            sY = this.css("overflow-y");
        
        //Compare client and scroll dimensions to see if a scrollbar is needed
        var bVertical = this[0].clientHeight < this[0].scrollHeight,
            bHorizontal = this[0].clientWidth < this[0].scrollWidth,
            bShouldScroll = bVertical || bHorizontal;
        
        if(typeof axis == "undefined"){
            //Check both x and y declarations
            if(
                (sX == "hidden" && sY == "hidden") ||
                (sX == "visible" && sY == "visible")
            ){
                return false;
            }
            
            if(sX == "scroll" || sY == "scroll"){
                return true;
            }
        }else{
            //Check individual axis declarations
            switch(axis){
                case "x":
                    if(sX == "hidden" || sX == "visible") return false;
                    if(sX == "scroll") return true;
                break;
                case "y":
                    if(sY == "hidden" || sY == "visible") return false;
                    if(sY == "scroll") return true;
                break;
            }
        }
        
        return bShouldScroll;
    };
}(jQuery, window, document, undefined));

function detectmob() { 
     if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     ){
        return true;
      }
     else {
        return false;
      }
}
function checkBreakPointMobile()
{
   if($('.mobile').css('display') == 'none')
   {    //return false for desktop view
        return false;
   }
   else
   {    //return true for mobile view
        return true;
   } 
   
}

function changePrevNextClass()
{//Applicable on article pages only
// function made public so it can be accessed via post.aspx files
            if(checkBreakPointMobile() !== true) 
            {              
                $('.arrowprev').addClass('red');
                $('.arrowprev').addClass('prv');
                $('.arrownext').addClass('red');
                $('.arrownext').addClass('nxt');
                
                $('nav#main').removeClass('mobile-nav');
                $('nav#main').addClass('desktop-nav');
                $('#subnav').addClass('subnav');
                     
            } 
            else 
            {   
	            $('.arrowprev').removeClass('red');
                $('.arrowprev').removeClass('prv');
                $('.arrownext').removeClass('red');
                $('.arrownext').removeClass('nxt');         
                
                $('nav#main').addClass('mobile-nav');
                $('nav#main').removeClass('desktop-nav');
                $('#subnav').removeClass('subnav');
            }
}

function AddMobileBanner()
{

    var strBanner = "" ;
    if($(window).width()<=640)
    {
//        if($(window).width()<=480)
//        {
//            strBanner = $("#hdnBPort").val();
//        }
//        else
//        {
//            strBanner = $("#hdnBLand").val();
//        }
        if (detectmob())
	    {
		    strBanner = $("#hdnBPortMobile").val();
	    }
	    else
	    {
		    strBanner = $("#hdnBPort").val();
	    }
        $("#promo-banner").html(strBanner);
    }
    else
    {
        $("#promo-banner").html("");
    }
}

function ie9fix()
{

   if(checkBreakPointMobile() == true) 
   {
        if(getInternetExplorerVersion() === 9)
                {
                    if($('#mainnav').hasScroll('y'))
                    {                   
                        $('nav#main').addClass('mmenu-iefix');
                    }
                    else
                    {
                        $('nav#main').removeClass('mmenu-iefix');   
                    }
                }
         
   }
   else
   {
     if(getInternetExplorerVersion() === 9)
          {
            $('nav#main').removeClass('mmenu-iefix');   
          }
   }
    
                

}

function IpadFixHeader() {
         if (navigator.userAgent.match(/iPad/i) != null || navigator.userAgent.match(/iPhone/i) != null || navigator.userAgent.match(/iPod/i) != null) 		{
            var iOSKeyboardFix = {
                targetElem: $('#headcontainer'),
                init: (function() {
                    $("input, textarea").on("focus", function() {
					if(checkBreakPointMobile())
					{		
                        iOSKeyboardFix.bind();
                        var offsetX = iOSKeyboardFix.targetElem.offset().top;
                        var scrollX = $(window).scrollTop();
                        var changeX = offsetX - scrollX;
                        iOSKeyboardFix.targetElem.css({ 'position': 'absolute', 'top': scrollX + 'px' });
						}

                    });
					$(window).on("resize",function(){
						if (!checkBreakPointMobile()){
							iOSKeyboardFix.targetElem.removeAttr('style');
							document.activeElement.blur();
							$(document).off('scroll', iOSKeyboardFix.react);
							$(document).off('touchstart', iOSKeyboardFix.undo);
							$('input, textarea').off('blur', iOSKeyboardFix.undo);
							$('input, textarea').off('focus', iOSKeyboardFix.undo);
							
						}
					});
                })(),

                bind: function() {
				if(checkBreakPointMobile())
					{	
                        $(document).on('scroll', iOSKeyboardFix.react);
                        iOSKeyboardFix.react();
					}
                },

                react: function() {
                    var test1 = window.innerHeight + window.pageYOffset + 45;
                    var offsetX = iOSKeyboardFix.targetElem.offset().top;
                    var scrollX = $(window).scrollTop();
                    var changeX = offsetX - scrollX;
                   // console.log(offsetX + " " + scrollX + " " + changeX);
                    iOSKeyboardFix.targetElem.css({ 'position': 'absolute', 'top': scrollX + 'px' });
                    $('input, textarea').on('blur', iOSKeyboardFix.undo);
                    $(document).on('touchstart', iOSKeyboardFix.undo);
                },

                undo: function() {

                    iOSKeyboardFix.targetElem.removeAttr('style');
                    document.activeElement.blur();
                    $(document).off('scroll', iOSKeyboardFix.react);
                    $(document).off('touchstart', iOSKeyboardFix.undo);
                    $('input, textarea').off('blur', iOSKeyboardFix.undo);
                }
            };
        
    
    }
   	}
$(function() {



                    
                //Initialization of MMENU script
				var $menu = $('#main');	
				$menu
				    .mmenu()			
				    .on(
                      "opened.mm",
                      function()
                      {
                        //Start on menu open changes
                            
		                    //Hide search
	                        if($('#search').css('display') === 'block')
	                        {		
	                            $('#search').hide();       
	                        }
	                        ie9fix();
                        //End on menu open changes
                      }
                   )
                   .on(
                      "closed.mm",
                      function()
                      {
                        //Start on menu close changes  
            	        //End on menu close changes
            	        ie9fix();
            	        closeSubmenu();
                      }
                   );
                //	Toggle menu 
				$('#responsive-menu-button').click(function( e ) {
					
					e.stopImmediatePropagation();
					e.preventDefault();
					$menu.trigger( $menu.hasClass( 'mm-opened' ) ? 'close.mm' : 'open.mm' );	
							
				});
			
				
			//Start code for moving NAV block of code when page is resized		
			//Call resizeNav on load
		    resizeNav();
		    
            //move navigation on page resize
            $(window).resize(function() {
                    resizeNav();                   
            });
            
            function resizeNav() {
		        
                   if (checkBreakPointMobile()) {
			            $('#main').detach().prependTo($("body"));
			            
			            $('#droparticles').detach().appendTo($("#main"));
			            $('#dropvideos').detach().appendTo($("#main"));
			            $('#dropguides').detach().appendTo($("#main"));
                   }
                   else
                   {
			            $('#main').detach().prependTo($("#navcontainer"));
			            $('#droparticles').detach().appendTo($("#healthartlinktag"));
			            $('#dropvideos').detach().appendTo($("#healthvidlinktag"));
			             $('#dropguides').detach().appendTo($("#healthguidelinktag"));
		            }
             }   	
			//End code for moving NAV block of code when page is resized
			
	    //Script for toggling search button for responsive pages    	
        $("#trigger-search").click(function (event) {	  
         event.preventDefault();         
	       $('#search').slideToggle();	       
         });  	
    
        //Script for toggling subscription button for responsive pages 	
        // hide subscription //	   
        $("#hide").click(function() {
              $("#header-subscribe").slideUp()
        });   


        
        //hide search button if search is displayed and user clicks on body
        $('body').on('click touchend',function(e){
            if ($(e.target).is('#trigger-search, #trigger-search *,#search, #search *')) {	
                return;
            } 
            else {               
                  if (checkBreakPointMobile()) {
		             if($('#search').css('display') === 'block')
	                 {			
		                //Fix for Ipad 3 IOS 6, use display none instead of .slideup to hide search bar	
		                if (navigator.userAgent.match(/iPad/i))
		                {
		                    $('#search').css('display','none');
		                }
		                else
		                {
		                    $('#search').slideUp();
		                }
	                 }	
                   }
              	                            
            }
         });  
        

        //IF browser is used on mobile get original height
        if(detectmob())
        {   //get original height of window and set to global variable
            var origHeight = $(window).height();
        }

       //Script to force show/hide of search button for specific page sizes
       // search //
       $(window).resize(function() {
            // This will fire each time the window is resized  
            if(checkBreakPointMobile() !== true) {              
                // if larger or equal    			
                $('#search').show();
            } 
            else 
            {
                // if smaller
	            var isMobile = detectmob() ;
	            //Check if original height is different from current height when page is resized
	            //due to keyboard display in mobile browsers
	            if((origHeight === $(window).height()) && isMobile)
	            {      //Do not hide search when keyboard is displayed for windows phone
		               if(navigator.userAgent.match(/Windows Phone/i) === null)
			           {
			             $('#search').hide();
			           }
		             
	            }
	            if(isMobile === false)
	            { 	                
		              $('#search').hide();
	            }	            
	          
          }
          
          //For changing U.I appearance of prev/next button on articles pages
          changePrevNextClass();
          AddMobileBanner();
          
      }).resize(); // This will simulate a resize to trigger the initial run.



//Scripts to handle events when document resizes
 $(window).resize(function() {
    //force close of side nav menu when window size larger than 900
    if(checkBreakPointMobile !== true)
    { 		  
        if($("#main").hasClass( 'mm-opened' ))
	    {
		   $menu.trigger('close.mm');	
	    }  
    } 

  
       //Script to put emailtoafriend dialog in center position when browser is resized
      var eMailFrameUrl =  $("#emailtoafriend").attr("src");	
      if (eMailFrameUrl != null)
      {	
	        if ($("#emailToFriend").hasClass('ui-dialog-content')) 
	        { 	
		        $("#emailToFriend").dialog("option","position","center");
	        }
      }


      //Script to resize Popup dialog popupsize on browser resize
      var iFrameID = document.getElementById('modalIframeId');
      if(iFrameID)
      {     // here you can make the height, I delete it first, then I make it again   
                   
           if(iFrameID.contentWindow.document.body !== null)//IE fix, check if body exist before accessing scroll height
           {    iFrameID.height = ""
                iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";     
                
                var addHeight = 50;
                if(getInternetExplorerVersion() == 8)
                { addHeight = 0; }
                iFrameID.height = (iFrameID.contentWindow.document.body.scrollHeight + addHeight) + "px";
                    
           }         
      }   

       //Script to put rrpopup dialog in center position when browser is resized
       if($("#modalIframeId").length > 0) {
      	    if ($("#rrpopupdialog").hasClass('ui-dialog-content')) 
	        {
 	            $("#rrpopupdialog").dialog("option","position","center");	
 	        }
       }
    
 	if ($("#ProfileCompleteness").hasClass('ui-dialog-content')) 
	    {
 	        $("#ProfileCompleteness").dialog("option","position","center");	
 	    }
 	if ($("#emailPreference").hasClass('ui-dialog-content')) 
	    {
 	        $("#emailPreference").dialog("option","position","center");	
 	    }
 	if ($("#SendmsgDiv").hasClass('ui-dialog-content')) 
	    {
 	        $("#SendmsgDiv").dialog("option","position","center");	
 	    }
 	
 	if ($("#shareVideodialog").hasClass('ui-dialog-content')) {
	            $("#shareVideodialog").dialog("option", "position", "center");
	        }
	        
	if ($("#layer1").hasClass('ui-dialog-content')) {
	        $("#layer1").dialog("option", "position", "center");
	        }    
	         
	 if ($("#OpenChangeEmail").hasClass('ui-dialog-content')) {
	        $("#OpenChangeEmail").dialog("option", "position", "center");
	        }          
	 
	 if ($("#changeEmailDialog").hasClass('ui-dialog-content')) {
	        $("#changeEmailDialog").dialog("option", "position", "center");
	        }          

	 if ($("#LoginDivShadowBox").hasClass('ui-dialog-content')) {
	        $("#LoginDivShadowBox").dialog("option", "position", "center");
	        }
    });

if( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))
{

	 $('#ctl00_bhcr_bbcr_CommentSectionControl_txtSubComment').attr('rows',3);
	 $('#ctl00_bhcr_bbcr_CommentSectionControl_txtEditComment').attr('rows',3);
	 $('#ctl00_bhcr_bbcr_CommentSectionControl_tbComment').attr('rows',3);
}

    IpadFixHeader();
	 	
			
			
			
				
});
