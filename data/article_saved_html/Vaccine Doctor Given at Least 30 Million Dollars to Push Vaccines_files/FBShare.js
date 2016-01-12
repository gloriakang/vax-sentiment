 //updated 02/17/2012 at 02:15pm by Jason

function file_get_contents(url,id,type, appID)
{
    $.ajax({
    url: url,
    type: "GET",
    //contentType: "application/jsonp; charset=utf-8",
    dataType: "jsonp",
    success: function(data) {
                 FBGetNumber2(data.data[0].total_count,url,id,type, appID);
                }
    });
}
//===========================================================================================================
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
//===========================================================================================================
function removeCommas(aNum) {
aNum=aNum.replace(/,/g,"");
aNum=aNum.replace(/\s/g,"");
return aNum;
}
//===========================================================================================================
function FormatNumber(num) {
    if (num >= 10000) {
    num =  (num / 1000).toFixed() + "K";
    }
    if (num >= 100000)
{      num =  (num / 1000).toFixed() + "K";
}
    return num;
}
//===========================================================================================================
function FBGetNumber(id,url,type, appID) {
  //idglobal = id;
  //alert("FbGEtN:" + idglobal);
var sAPPid;
 
var urlTrim = url;
 if (urlTrim.indexOf('?') >= 0) {
	urlTrim = urlTrim.substring(0, urlTrim.indexOf('?'));
    }
    if (urlTrim.indexOf('#') >= 0) {
        urlTrim = urlTrim.substring(0, urlTrim.indexOf('#'));
    }

sAPPid = $('meta[property="fb\\:app\\_id"]').attr("content");

if (sAPPid == "" || sAPPid == null)
    {
sAPPid = appID;
    }

var fGraph = "https://graph.facebook.com/fql?q=SELECT url, normalized_url, share_count, like_count, comment_count, total_count,commentsbox_count, comments_fbid, click_count FROM link_stat WHERE url=";

//setTimeout("", 3000);
file_get_contents( fGraph + "'" + urlTrim + "'",id,type, sAPPid);
}
//===========================================================================================================
function FBGetNumber2(number1,url,id,type, appID) {
var url = url.replace("https://graph.facebook.com/fql?q=SELECT url, normalized_url, share_count, like_count, comment_count, total_count,commentsbox_count, comments_fbid, click_count FROM link_stat WHERE url=","");
url = url.replace("'","");
url = url.replace("'","");

var changetext = number1;

var numdisplay= "";
if (typeof(changetext)=="undefined")
{
numdisplay =  0;
}
else
{
var num = FormatNumber(changetext);
if (num == number1)
{
numdisplay = addCommas(num);
}
else
{
var x = eval(num.split('K'));
if (x[1] == '')
{
numdisplay = num;
}
else
{
 numdisplay = addCommas(x[0]);
}
}
}

//var arr = getElementsByName_iefix("Span",id);
//var str = arr[0];

var FBCountNumber = numdisplay;
if (type=="vertical") {
var buttonstart = '<span class="FBShare-Vertical" onClick="FBShareWindow(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\''  + type + '\',\'' + FBCountNumber + '\',' + appID + ');" title="Click to Share this on Facebook">';
var buttonend = '</span>';
// This inserts the formatted number into the <div> tag
//for(var i = 0; i < arr.length; i++)
//    {
//        var str = arr[i];
//        str.innerHTML = buttonstart + FBCountNumber + buttonend;   
//    }

    $('span.fbshare').html(buttonstart + FBCountNumber + buttonend);
}
else {
var buttonstart = '<span class="FBShare-Horizontal-1" onClick="FBShareWindow(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\'' + type + '\',\'' + FBCountNumber + '\',' + appID + ');" title="Click to Share this on Facebook"></span><span class="FBShare-Horizontal-2">';
var buttonend = '</span><span class="FBShare-Horizontal-3"></span>';
// This inserts the formatted number into the <div> tag
//document.getElementsByName(id)[0].innerHTML = buttonstart + FBCountNumber + buttonend;

//for(var i = 0; i < arr.length; i++)
//    {
//        var str = arr[i];
//        str.innerHTML = buttonstart + FBCountNumber + buttonend;   
//    }
    $('span.fbshare').html(buttonstart + FBCountNumber + buttonend);
};

}
//===========================================================================================================
// Open up a pop-up window with the url being shared 

function FBShareWindow(id,url,type,fbcount, appID) {
var iMyWidth;
var iMyHeight;
//half the screen width minus half the new window width (plus 5 pixel borders).
var iMyWidth = (window.screen.width/2) - (300 + 10);
//half the screen height minus half the new window height (plus title and status bars).
var iMyHeight = (window.screen.height/2) - (400 + 50);
var temp = appID;
//alert(url + "&app_id=" + temp);
fbWindow = window.open(url + "&app_id=" + appID, 'fbWin', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=660,height=350,left=' + iMyWidth + ',top=200');
fbWindow.focus();
// Increase the number within the <div> by 1 when the button is clicked
var ch = fbcount;
var url = url.replace('//www.facebook.com/sharer/sharer.php?u=','');
var x = eval(ch.split('K'));
var numdis1 =  0;
if (x[1] == '')
{
numdis1 = Number(x[0])*1000;
numdis1 = FormatNumber(numdis1);
}
else
{
numdis = Number(removeCommas(ch));
numdis = numdis + 1;
numdis1 = addCommas(numdis);
}
if (type=="vertical") {
var buttonstart = '<span class="FBShare-Vertical" onClick="FBShareWindow(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\'' + type + '\',\'' + fbcount + '\',' + appID + ');" title="Click to Share this on Facebook">';
var buttonend = '</span>';
// This inserts the formatted number into the <div> tag
//document.getElementById(id).innerHTML = buttonstart + numdis1 + buttonend;
  $('span.FBShare-Vertical').html(buttonstart + numdis1 + buttonend);
 //$('span.fbshare').html(buttonstart + numdis1 + buttonend);
}
else {
var buttonstart = '<span class="FBShare-Horizontal-1" onClick="FBShareWindow(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\'' + type + '\',\'' + fbcount + '\',' + appID + ');" title="Click to Share this on Facebook"></span><span class="FBShare-Horizontal-2">';
var buttonend = '</span><span class="FBShare-Horizontal-3"></span>';
// This inserts the formatted number into the <div> tag
//document.getElementById(id).innerHTML = buttonstart + numdis1 + buttonend;
$('span.fbshare').html(buttonstart + numdis1 + buttonend);
 //$('span.fbshare').html(buttonstart + numdis1 + buttonend);
};
}

//*********************************************************************************
function file_get_contents2(url,id,type, appID)
{
    $.ajax({
    url: url,
    type: "GET",
    //contentType: "application/jsonp; charset=utf-8",
    dataType: "jsonp",
    success: function(data) {
                FBGetNumberCustom2(data.data[0].total_count,url,id,type, appID);
                }
    });
}

function FBGetNumberCustom(id,url,type, appID) {
  //idglobal = id;
  //alert("FbGEtN:" + idglobal);
var sAPPid;

var urlTrim = url;
 if (urlTrim.indexOf('?') >= 0) {
	urlTrim = urlTrim .substring(0, urlTrim .indexOf('?'));
    }
    if (urlTrim.indexOf('#') >= 0) {
        urlTrim = urlTrim.substring(0, urlTrim.indexOf('#'));
    }

sAPPid = $('meta[property="fb\\:app\\_id"]').attr("content");

if (sAPPid == "" || sAPPid == null)
    {
sAPPid = appID;
    }

var fGraph = "https://graph.facebook.com/fql?q=SELECT url, normalized_url, share_count, like_count, comment_count, total_count,commentsbox_count, comments_fbid, click_count FROM link_stat WHERE url=";

//setTimeout("", 3000);
file_get_contents2( fGraph + "'" + urlTrim + "'",id,type, sAPPid);
}



//===========================================================================================================
function FBGetNumberCustom2(number1,url,id,type, appID) {
var url = url.replace("https://graph.facebook.com/fql?q=SELECT url, normalized_url, share_count, like_count, comment_count, total_count,commentsbox_count, comments_fbid, click_count FROM link_stat WHERE url=","");
url = url.replace("'","");
url = url.replace("'","");

    var changetext = number1;

    var numdisplay= "";
    if (typeof(changetext)=="undefined")
    {
        numdisplay =  0;
    }
    else
    {
        var num = FormatNumber(changetext);
   
        if (num == number1)
        {
        numdisplay = addCommas(num);
        }
        else
        {
            var x = eval(num.split('K'));
            if (x[1] == '')
            {
            numdisplay = num;
            }
            else
            {
             numdisplay = addCommas(x[0]);
            }
        }
    }


var FBCountNumber = numdisplay;
if (type=="vertical") {
var buttonstart = '<span class="FBShare-Vertical" onClick="FBShareWindowCustom(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\''  + type + '\',\'' + FBCountNumber + '\',' + appID + ');" title="Click to Share this on Facebook">';
var buttonend = '</span>';
// This inserts the formatted number into the <div> tag
//for(var i = 0; i < arr.length; i++)
//    {
//        var str = arr[i];
//        str.innerHTML = buttonstart + FBCountNumber + buttonend;   
//    }
    var temp = 'span.' + id;
    $(temp).html(buttonstart + FBCountNumber + buttonend);
   
 
}
else {
var buttonstart = '<span class="FBShare-Horizontal-1" onClick="FBShareWindowCustom(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\'' + type + '\',\'' + FBCountNumber + '\',' + appID + ');" title="Click to Share this on Facebook"></span><span class="FBShare-Horizontal-2">';
var buttonend = '</span><span class="FBShare-Horizontal-3"></span>';

   var temp = 'span.' + id;
    $(temp).html(buttonstart + FBCountNumber + buttonend);
 
};

}
//===========================================================================================================
// Open up a pop-up window with the url being shared 

function FBShareWindowCustom(id,url,type,fbcount, appID) {
var iMyWidth;
var iMyHeight;
//half the screen width minus half the new window width (plus 5 pixel borders).
var iMyWidth = (window.screen.width/2) - (300 + 10);
//half the screen height minus half the new window height (plus title and status bars).
var iMyHeight = (window.screen.height/2) - (400 + 50);
var temp = appID;
//alert(url + "&app_id=" + temp);
fbWindow = window.open(url + "&app_id=" + appID, 'fbWin', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=600,height=350,left=' + iMyWidth + ',top=200');
fbWindow.focus();
// Increase the number within the <div> by 1 when the button is clicked
var ch = fbcount;
var url = url.replace('//www.facebook.com/sharer/sharer.php?u=','');
var x = eval(ch.split('K'));
var numdis1 =  0;
if (x[1] == '')
{
numdis1 = Number(x[0])*1000;
numdis1 = FormatNumber(numdis1);
}
else
{
numdis = Number(removeCommas(ch));
numdis = numdis + 1;
numdis1 = addCommas(numdis);
}
if (type=="vertical") {
var buttonstart = '<span class="FBShare-Vertical" onClick="FBShareWindowCustom(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\'' + type + '\',\'' + fbcount + '\',' + appID + ');" title="Click to Share this on Facebook">';
var buttonend = '</span>';

    var temp = 'span.' + id;
    $(temp).html(buttonstart + numdis1 + buttonend);
  
}
else {
var buttonstart = '<span class="FBShare-Horizontal-1" onClick="FBShareWindowCustom(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\'' + type + '\',\'' + fbcount + '\',' + appID + ');" title="Click to Share this on Facebook"></span><span class="FBShare-Horizontal-2">';
var buttonend = '</span><span class="FBShare-Horizontal-3"></span>';

    var temp = 'span.' + id;
    $(temp).html(buttonstart + numdis1 + buttonend);
    

};
}

function fbshareVideo(id,url,appID)
{

   
        var buttonstart = '<span class="FBShare-Video" onClick="fbVideoShareWindow(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',' + appID + ');" title="Click to Share this on Facebook">';
        var buttonend = '</span>';
          
        var temp = 'span.' + id;
        $(temp).html(buttonstart  + buttonend);
        

}

//===========================================================================================================
// Open up a pop-up window with the url being shared 

function fbVideoShareWindow(id,url, appID) {
var iMyWidth;
var iMyHeight;
//half the screen width minus half the new window width (plus 5 pixel borders).
var iMyWidth = (window.screen.width/2) - (300 + 10);
//half the screen height minus half the new window height (plus title and status bars).
var iMyHeight = (window.screen.height/2) - (400 + 50);
var temp = appID;
//alert(url + "&app_id=" + temp);
fbWindow = window.open(url + "&app_id=" + appID, 'fbWin', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=660,height=350,left=' + iMyWidth + ',top=200');
fbWindow.focus();
// Increase the number within the <div> by 1 when the button is clicked

var url = url.replace('//www.facebook.com/sharer/sharer.php?u=','');


        var buttonstart = '<span class="FBShare-Video" onClick="FBShareWindow(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url  + '\',' + appID + ');" title="Click to Share this on Facebook">';
        var buttonend = '</span>';
        $('span.FBShare-Video').html(buttonstart +  buttonend);         
   
}

// -->



//------------------
//Custom script for repeated FBShare buttons

function FBShareGenButtonRep(id, url, type, appID) {
  //id = Element ID;
  //alert("FbGEtN:" + idglobal);
var sAPPid;

var urlTrim = url;
 if (urlTrim.indexOf('?') >= 0) {
	urlTrim = urlTrim .substring(0, urlTrim .indexOf('?'));
    }
    if (urlTrim.indexOf('#') >= 0) {
        urlTrim = urlTrim.substring(0, urlTrim.indexOf('#'));
    }

sAPPid = $('meta[property="fb\\:app\\_id"]').attr("content");

if (sAPPid == "" || sAPPid == null)
    {
        sAPPid = appID;
    }

var fGraph = "https://graph.facebook.com/fql?q=SELECT url, normalized_url, share_count, like_count, comment_count, total_count,commentsbox_count, comments_fbid, click_count FROM link_stat WHERE url=";

//setTimeout("", 3000);
file_get_contents_rep( fGraph + "'" + urlTrim + "'", id,type, sAPPid);
}



//===========================================================================================================
function FBGetNumRep(number1,url,id,type, appID) {
var url = url.replace("https://graph.facebook.com/fql?q=SELECT url, normalized_url, share_count, like_count, comment_count, total_count,commentsbox_count, comments_fbid, click_count FROM link_stat WHERE url=","");
url = url.replace("'","");
url = url.replace("'","");

    var changetext = number1;

    var numdisplay= "";
    if (typeof(changetext)=="undefined")
    {
        numdisplay =  0;
    }
    else
    {
        var num = FormatNumber(changetext);
   
        if (num == number1)
        {
        numdisplay = addCommas(num);
        }
        else
        {
            var x = eval(num.split('K'));
            if (x[1] == '')
            {
            numdisplay = num;
            }
            else
            {
             numdisplay = addCommas(x[0]);
            }
        }
    }

var FBCountNumber = numdisplay;
if (type=="vertical") {
var buttonstart = '<span class="FBShare-Vertical" onClick="FBShowWindow_Rep(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\''  + type + '\',\'' + FBCountNumber + '\',' + appID + ');" title="Click to Share this on Facebook">';
var buttonend = '</span>';
    
    var temp = ('#' + id)//'span.' + id;
   
    $(temp).html(buttonstart + FBCountNumber + buttonend);

 
}
else {
var buttonstart = '<span class="FBShare-Horizontal-1" onClick="FBShowWindow_Rep(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\'' + type + '\',\'' + FBCountNumber + '\',' + appID + ');" title="Click to Share this on Facebook"></span><span class="FBShare-Horizontal-2">';
var buttonend = '</span><span class="FBShare-Horizontal-3"></span>';

   var temp = 'span.' + id;
    $(temp).html(buttonstart + FBCountNumber + buttonend);
 
};

}

function file_get_contents_rep(url, id, type, appID)
{
    $.ajax({
    url: url,
    type: "GET",
    //contentType: "application/jsonp; charset=utf-8",
    dataType: "jsonp",
    success: function(data) {
                FBGetNumRep(data.data[0].total_count, url, id,type, appID);
                }
    });
}



function FBShowWindow_Rep(id,url,type,fbcount, appID) {
var iMyWidth;
var iMyHeight;
//half the screen width minus half the new window width (plus 5 pixel borders).
var iMyWidth = (window.screen.width/2) - (300 + 10);
//half the screen height minus half the new window height (plus title and status bars).
var iMyHeight = (window.screen.height/2) - (400 + 50);
var temp = appID;
//alert(url + "&app_id=" + temp);
fbWindow = window.open(url + "&app_id=" + appID, 'fbWin', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=660,height=350,left=' + iMyWidth + ',top=200');
fbWindow.focus();
// Increase the number within the <div> by 1 when the button is clicked
var ch = fbcount;
var url = url.replace('//www.facebook.com/sharer/sharer.php?u=','');
var x = eval(ch.split('K'));
var numdis1 =  0;
if (x[1] == '')
{
numdis1 = Number(x[0])*1000;
numdis1 = FormatNumber(numdis1);
}
else
{
numdis = Number(removeCommas(ch));
numdis = numdis + 1;
numdis1 = addCommas(numdis);
}
if (type=="vertical") {
var buttonstart = '<span class="FBShare-Vertical" onClick="FBShowWindow_Rep(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\'' + type + '\',\'' + fbcount + '\',' + appID + ');" title="Click to Share this on Facebook">';
var buttonend = '</span>';
// This inserts the formatted number into the <div> tag
//document.getElementById(id).innerHTML = buttonstart + numdis1 + buttonend;
  //$('span.FBShare-Vertical').html(buttonstart + numdis1 + buttonend);
    var temp = ('#' + id)//'span.' + id;   
    $(temp).html(buttonstart + numdis1 + buttonend);
  
 //$('span.fbshare').html(buttonstart + numdis1 + buttonend);
}
else {
var buttonstart = '<span class="FBShare-Horizontal-1" onClick="FBShowWindow_Rep(\'' + id + '\',\'//www.facebook.com/sharer/sharer.php?u=' + url + '\',\'' + type + '\',\'' + fbcount + '\',' + appID + ');" title="Click to Share this on Facebook"></span><span class="FBShare-Horizontal-2">';
var buttonend = '</span><span class="FBShare-Horizontal-3"></span>';
// This inserts the formatted number into the <div> tag
//document.getElementById(id).innerHTML = buttonstart + numdis1 + buttonend;
$('span.fbshare').html(buttonstart + numdis1 + buttonend);
 //$('span.fbshare').html(buttonstart + numdis1 + buttonend);
};
}
