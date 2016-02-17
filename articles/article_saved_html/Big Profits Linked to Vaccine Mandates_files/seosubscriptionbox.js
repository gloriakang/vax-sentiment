
var allowsubscribeemailsubmitcustom = true; //Variable that indicates if the form will be submitted or not
function SubscribeEmailCustomSpanish(subscribe, emailAddress, subSource)
{              
	
    var source = subSource;
	var pageURL = 'http://articulos.mercola.com/sitios/subscribirse/subscripcion-de-email.aspx?source=';
    if (emailCheck(emailAddress))
    {
                
                if (allowsubscribeemailsubmitcustom == true)
                                {
                                allowsubscribeemailsubmitcustom = false;
                                $("#" + subscribe ).hide();	
                                setTimeout('changeImageCustom("' + subscribe  + '")', 100);			
                                //setTimeout(function(){
                                var pageUrl = pageURL + subSource + '&SourceLocation=' + document.URL + '&EmailAddress=' + emailAddress;                
                                                window.open(pageUrl,"_self");
                                                return false;
                                //},500);
                                }
                                else
                                { return false;
} 
    
                }
    else 
    { 
                return false;           
    }          
}


function clickSubscribeEmailCustomSpanish(e,emailAddress, subscribeBtn)
{                              
                                
        var btnSub = document.getElementById(subscribeBtn);  
        
        if(navigator.appName.indexOf("Netscape")>(-1))
        { 
            if (e.keyCode == 13)
            { 
                 if (emailCheck(emailAddress))
                                {
                                    btnSub.click(); 
                                 }             
                         return false; 
                       
              
            } 
        } 
        if (navigator.appName.indexOf("Microsoft Internet Explorer")>(-1))
        { 
            if (event.keyCode == 13)
            { 
                                    if (emailCheck(emailAddress))
                                    {
                                                btnSub.click();  
                                    }
                                    return false;                   
            } 
        }
                
}


function SubscribeEmailCustomEnglish(subscribe,emailAddress, subSource)
{              
	
    var source = subSource;
	var pageURL = 'http://articles.mercola.com/sites/subscribe/SubscribeEmail.aspx?source=';
    if (emailCheck(emailAddress))
    {
                
                if (allowsubscribeemailsubmitcustom == true)
                                {
                                allowsubscribeemailsubmitcustom = false;
                                $("#" + subscribe ).hide();	
                                setTimeout('changeImageCustom("' + subscribe  + '")', 100);			
                                //setTimeout(function(){
                                var pageUrl = pageURL + subSource + '&SourceLocation=' + document.URL + '&EmailAddress=' + emailAddress;                
                                                window.open(pageUrl,"_self");
                                                return false;
                                //},500);
                                }
                                else
                                { return false;
} 
    
                }
    else 
    { 
                return false;           
    }          
}


function clickSubscribeEmailCustomEnglish(e,emailAddress, subscribeBtn)
{                              
                                
        var btnSub = document.getElementById(subscribeBtn);  
        
        if(navigator.appName.indexOf("Netscape")>(-1))
        { 
            if (e.keyCode == 13)
            { 
                 if (emailCheck(emailAddress))
                                {
                                    btnSub.click(); 
                                 }             
                         return false; 
                       
              
            } 
        } 
        if (navigator.appName.indexOf("Microsoft Internet Explorer")>(-1))
        { 
            if (event.keyCode == 13)
            { 
                                    if (emailCheck(emailAddress))
                                    {
                                                btnSub.click();  
                                    }
                                    return false;                   
            } 
        }

    }

    function SubscribeEmailCustomEnglishReturnUrl(subscribe, emailAddress,subSource, returnUrl) {
        if (emailCheck(emailAddress)) {
            if (allowsubscribeemailsubmit == true) {
                allowsubscribeemailsubmit = false;
                var source = subSource;
                var pageURL = 'http://articles.mercola.com/sites/subscribe/SubscribeEmail.aspx?source=';
                $("#" + subscribe).hide();	
	            setTimeout('changeImageCustom("' + subscribe + '")', 100);			
                //setTimeout(function(){
                var pageUrl = pageURL + subSource +'&FreeReportsReturnURL=' + returnUrl + '&SourceLocation=' + document.URL + '&EmailAddress=' + emailAddress;       
                window.open(pageUrl, "_self");
                return false;
                //},500);
            }
            else {
                return false;
            }

        }
        else {
            return false;
        }
    }

    function SubscribeEmailCustomHealthyPets(subscribe, emailAddress, subSource) {
       
        var source = subSource;
        
        if(subSource == "SpanishPetsBody"){
            var pageURL = 'http://mascotas.mercola.com/sitios/mascotas/subscribirse/subscripcion-de-email.aspx?source=';
        } else {
            var pageURL = 'http://healthypets.mercola.com/sites/healthypets/Subscribe/SubscribeEmail.aspx?NLType=Pet&source=';
        }
        
        if (emailCheck(emailAddress)) {

            if (allowsubscribeemailsubmitcustom == true) {
                allowsubscribeemailsubmitcustom = false;
                $("#" + subscribe).hide();
                setTimeout('changeImageCustom("' + subscribe + '")', 100);
                //setTimeout(function(){
                var pageUrl = pageURL + subSource + '&SourceLocation=' + document.URL + '&EmailAddress=' + emailAddress;
                window.open(pageUrl, "_self");
                return false;
                //},500);
            }
            else {
                return false;
            }

        }
        else {
            return false;
        }
    }



function SubscribeEmailSpanishEbook(subscribe, emailAddress, subSource)
{              
	
    var source = subSource;
    var sourceLocation = window.location.href;
	var pageURL = 'http://articles.mercola.com/sites/subscribe/subscribeEmail.aspx?Emailaddress=' + emailAddress +'&NLType=regular&Source='+ subSource +'&SourceLocation=' + sourceLocation;
    
    if (emailCheck(emailAddress))
    {
                
                if (allowsubscribeemailsubmitcustom == true)
                                {
                                allowsubscribeemailsubmitcustom = false;
                                $("#" + subscribe ).hide();	
                                setTimeout('changeImageCustom("' + subscribe  + '")', 100);			
                                //setTimeout(function(){
                                    window.open(pageURL,"_self");
                                    return false;
                                //},500);
                                }
                                else
                                { return false;
                                } 
    
    }
    else 
    { 
                return false;           
    }          
}

function clickSubscribeEmailSpanishEbook(e,emailAddress, subscribeBtn)
{                              
                                
        var btnSub = document.getElementById(subscribeBtn);  
        
        if(navigator.appName.indexOf("Netscape")>(-1))
        { 
            if (e.keyCode == 13)
            { 
                 if (emailCheck(emailAddress))
                                {
                                    btnSub.click(); 
                                 }             
                         return false; 
                       
              
            } 
        } 
        if (navigator.appName.indexOf("Microsoft Internet Explorer")>(-1))
        { 
            if (event.keyCode == 13)
            { 
                                    if (emailCheck(emailAddress))
                                    {
                                                btnSub.click();  
                                    }
                                    return false;                   
            } 
        }
                
}


function SubscribeEmailGeneric(subscribe, emailAddress, subSource, page)
{              
	
    var source = subSource;
    var sourceLocation = window.location.href;	
    var pageURL = 'http://articles.mercola.com/sites/subscribe/subscribeEmail.aspx?Emailaddress=' + emailAddress +'&NLType=regular&Source='+ subSource +'&SourceLocation=' + sourceLocation;
    if(page == 'HPebook')
    {
        pageURL = 'http://healthypets.mercola.com/sites/healthypets/subscribe/subscribeemail.aspx?Emailaddress=' + emailAddress +'&NLType=Pets&Source='+ subSource +'&SourceLocation=' + sourceLocation;
    }
    else if (page == 'MascotasEbook')
    {
        pageURL = 'http://mascotas.mercola.com/sitios/mascotas/subscribirse/subscripcion-de-email.aspx?Emailaddress=' + emailAddress +'&source='+ subSource +'&SourceLocation=' + sourceLocation + '&FreeReportsReturnURL=http://mascotas.mercola.com/ebook/alimentos-para-mascotas/descargar.aspx' ;
    }        
	
    if (emailCheck(emailAddress))
    {
                
                if (allowsubscribeemailsubmitcustom == true)
                                {
                                allowsubscribeemailsubmitcustom = false;
                                $("#" + subscribe ).hide();	
                                setTimeout('changeImageCustom("' + subscribe  + '")', 100);			
                                //setTimeout(function(){
                                    window.open(pageURL,"_self");
                                    return false;
                                //},500);
                                }
                                else
                                { return false;} 
    
                }
    else 
    { 
                return false;           
    }          
}


function clickSubscribeEmailGeneric(e, emailAddress, subscribeBtn)
{                              
                                
        var btnSub = document.getElementById(subscribeBtn);  
        
        if(navigator.appName.indexOf("Netscape")>(-1))
        { 
            if (e.keyCode == 13)
            { 
                 if (emailCheck(emailAddress))
                                {
                                    btnSub.click(); 
                                 }             
                         return false; 
                       
              
            } 
        } 
        if (navigator.appName.indexOf("Microsoft Internet Explorer")>(-1))
        { 
            if (event.keyCode == 13)
            { 
                                    if (emailCheck(emailAddress))
                                    {
                                                btnSub.click();  
                                    }
                                    return false;                   
            } 
        }                
}


//Change image function
function changeImageCustom(button)
{
  var imgSrc = '';   
  imgSrc = (('https:' == document.location.protocol) ? 'https://' : 'http://') + 'media.mercola.com/Assets/images/image.gif'; 
  $("<img class='subscribe-load' style='margin: 0px !important; vertical-align: middle !important; background-image:none !important;border:0px; height:auto;width:auto; float:none !important'  src='" + imgSrc + "' />").insertBefore($("#" + button));

}