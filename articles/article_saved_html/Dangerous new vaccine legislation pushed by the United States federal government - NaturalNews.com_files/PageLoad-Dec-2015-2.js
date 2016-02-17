$(window).load(function(){
$("img").attr("data-pin-no-hover", true);  //add no over tag to all images
$("#ColB img").removeAttr("data-pin-no-hover");  //remove no over tag from the feature pic
$("#Article img").removeAttr("data-pin-no-hover");  //remove no over tag from the article pics
});																								
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {	

var menuwidth = 250;
var menuoffset = menuwidth * -1;
var menupos = "off";
window.addEventListener("resize", CheckSize);
GetFBNumberArticle();
SBAIH();

GetFBNumberHRIndex();
GetFBNumberAll(); 
GetFBNumberAllIndex();

////////////////////////////////////////////////////////////////////////////////////////////////////////

$("#Article iframe").wrap('<div class="Video"></div>'); //wrap this around youtube videos to scale on mobile devices
$(".AD300 iframe").unwrap('<div class="Video"></div>'); // remove it from the 300x250 ads inside the article

////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#DayLink").click(function() {
$("#DayTab").css("display","block");
$("#WeekTab").css("display","none");
$("#MonthTab").css("display","none");
$("#YearTab").css("display","none");
$("#DayLink").css("font-weight","bold");
$("#WeekLink").css("font-weight","normal");
$("#MonthLink").css("font-weight","normal");
$("#YearLink").css("font-weight","normal");
});
$("#WeekLink").click(function() {
$("#DayTab").css("display","none");
$("#WeekTab").css("display","block");
$("#MonthTab").css("display","none");
$("#YearTab").css("display","none");
$("#DayLink").css("font-weight","normal");
$("#WeekLink").css("font-weight","bold");
$("#MonthLink").css("font-weight","normal");
$("#YearLink").css("font-weight","normal");
});
$("#MonthLink").click(function() {
$("#DayTab").css("display","none");
$("#WeekTab").css("display","none");
$("#MonthTab").css("display","block");
$("#YearTab").css("display","none");
$("#DayLink").css("font-weight","normal");
$("#WeekLink").css("font-weight","normal");
$("#MonthLink").css("font-weight","bold");
$("#YearLink").css("font-weight","normal");
});
$("#YearLink").click(function() {
$("#DayTab").css("display","none");
$("#WeekTab").css("display","none");
$("#MonthTab").css("display","none");
$("#YearTab").css("display","block");
$("#DayLink").css("font-weight","normal");
$("#WeekLink").css("font-weight","normal");
$("#MonthLink").css("font-weight","normal");
$("#YearLink").css("font-weight","bold");
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#Email").focus(function() {
if ($('#Email').val() == "Enter your email address here...") {
$('#Email').val('')
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#Email").blur(function() {
if ($('#Email').val() == "") {
$('#Email').val('Enter your email address here...')
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
$('#Container').click(function() { TurnOff(); });
$('#Logo').click(function() { 
if (menupos == "off") {
window.location.href='http://www.naturalnews.com'; 
} else {
TurnOff();
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
$('#MenuButton').click(function() {
if (menupos == "left") {
TurnOff();
} else {
ShowLeft();
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
$('#SearchButton').click(function() {
if (menupos == "right") {
TurnOff();
} else {
ShowRight();
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckSize() {
if ($(window).width() > 600) {
TurnOff();
}
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function TurnOff() {
if ($(window).width() > 600) {
$('#Page').css("position","static");
} else {
$('#Page').css("position","absolute");
};

$('#Page').css("left",0);
$('#Menu').css("left",menuoffset);
$('#Search').css("right",menuoffset);
$('#MenuButton').removeClass("IconClose");
$('#MenuButton').addClass("IconMenu");
$('#SearchButton').removeClass("IconClose");
$('#SearchButton').addClass("IconSearch");
menupos = "off";
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function ShowLeft() {
$('#Page').css("position","fixed");
$('#Page').css("left",menuwidth);
$('#Menu').css("left",0);
$('#Search').css("right",menuoffset);
$('#MenuButton').removeClass("IconMenu");
$('#MenuButton').addClass("IconClose");
$('#SearchButton').removeClass("IconClose");
$('#SearchButton').addClass("IconSearch");
menupos = "left";
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function ShowRight() {
$('#Page').css("position","fixed");
$('#Page').css("left",menuoffset);
$('#Menu').css("left",menuoffset);
$('#Search').css("right",0);
$('#MenuButton').removeClass("IconClose");
$('#MenuButton').addClass("IconMenu");
$('#SearchButton').removeClass("IconSearch");
$('#SearchButton').addClass("IconClose");
menupos = "right";
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
$('#SearchSubmit').click(function() { 

if ($('#query').val() == "Search NaturalNews.com" || "") {
alert ("Please enter a keyword or phrase.");
$('#query').focus();
} else {
$('#GoodGopherSearch').submit();
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#query").focus(function() {
if ($('#query').val() == "Search NaturalNews.com") {
$('#query').val('')
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#query").blur(function() {
if ($('#query').val() == "") {
$('#query').val('Search NaturalNews.com')
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////
function SBAIH() {
$.get("./XML/SBA-IH-1.xml",{},function(xml){
var $items = shuffle($("item", xml));
var maxItems = 20;
var vCode = "";
var vCount = 100;
$items.filter(":lt(" + maxItems + ")").each(function(index, x) {
var keyword = $(x).find('keyword').text();
var banner = $(x).find('banner').text();
var url = $(x).find('url').text();
var display=KeywordCheck(keyword);
if (display == false) {
$("#SBAInHouse").append('<div style="position: absolute; top: 0px; left: 0px; z-index: ' + vCount + '; opacity: 100; display: block; visibility: visible;"><a href="' + url + '" target="_blank"><img src="SBA/' + banner + '" data-pin-no-hover="true"></a></div>');
vCount = vCount - 1;
};
});
});
$("#SBAInHouse > div:gt(0)").hide();
setInterval(function() {
$('#SBAInHouse > div:first')
.fadeOut(500)
.next()
.fadeIn(500)
.end()
.appendTo('#SBAInHouse');
},  8000);
$('#SBAInHouse').css("display","block");
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function shuffle(o){
for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
return o;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function KeywordCheck(key,ad,url) {
var keywordfound = false;
var c = document.getElementsByTagName('meta');
var keywords;
for (var x = 0, y = c.length; x < y; x++) {
if (c[x].name.toLowerCase() == "keywords") {
keywords = c[x];
}
}
var myString = keywords.content;
var mySplitResult = myString.split(",");
for(i = 0; i < mySplitResult.length; i++){
if (mySplitResult[i] == key) {
keywordfound = true; //don't show the ad
}
}
return keywordfound;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function GetFBNumberAll() {
$('.FBU').each(function(i) {
var id = "FBID" + i;
var url = this.innerHTML;
var shareurl = 'http://www.facebook.com/sharer/sharer.php?u=' + url;
var sharewindow = "ShareWindow('" + shareurl + "');";
var shareblock = '<div id="' + id + '" class="FBN" onClick="' + sharewindow + '" title="Share on Facebook"></div>';
$(this).html(shareblock);
GetFBNumber(id,url);
$(this).css("display","table-cell");
});
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function GetFBNumberAllIndex() {
$('.IFS').each(function(i) {
var id = "IFSID" + i;
var url = this.innerHTML;
var fbshareurl = 'http://www.facebook.com/sharer/sharer.php?u=' + url;
var twshareurl = 'https://twitter.com/intent/tweet?url=' + url;
var gpshareurl = 'https://plus.google.com/share?url=' + url;
var fbsharewindow = "ShareWindow('" + fbshareurl + "');";
var twsharewindow = "ShareWindow('" + twshareurl + "');";
var gpsharewindow = "ShareWindow('" + gpshareurl + "');";

var shareblock = '<div onClick="' + fbsharewindow + '" title="Share on Facebook"></div>'; //facebook
shareblock += '<div onClick="' + twsharewindow + '" title="Share on Twitter"></div>'; //twitter
shareblock += '<div onClick="' + gpsharewindow + '" title="Share on Google Plus"></div>'; //googleplus
shareblock += '<div id="' + id + '"></div>';

$(this).html(shareblock);
GetFBNumberIndex(id,url);
$(this).css("display","inline-block");
});
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function GetFBNumberHRIndex() {
$('.HRS').each(function(i) {
var id = "HRSID" + i;
var url = this.innerHTML;
var fbshareurl = 'http://www.facebook.com/sharer/sharer.php?u=' + url;
var twshareurl = 'https://twitter.com/intent/tweet?url=' + url;
var gpshareurl = 'https://plus.google.com/share?url=' + url;
var fbsharewindow = "ShareWindow('" + fbshareurl + "');";
var twsharewindow = "ShareWindow('" + twshareurl + "');";
var gpsharewindow = "ShareWindow('" + gpshareurl + "');";

var shareblock = '<div onClick="' + fbsharewindow + '" title="Share on Facebook"></div>'; //facebook
shareblock += '<div onClick="' + twsharewindow + '" title="Share on Twitter"></div>'; //twitter
shareblock += '<div onClick="' + gpsharewindow + '" title="Share on Google Plus"></div>'; //googleplus
shareblock += '<div id="' + id + '"></div>';

$(this).html(shareblock);
GetFBNumberIndex(id,url);
$(this).css("display","inline-block");
});
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function GetFBNumberArticle() {
var id = "FBA1";
var url = $('#FBA').html();
var shareurl = 'http://www.facebook.com/sharer/sharer.php?u=' + url;
var sharewindow = "ShareWindow('" + shareurl + "');";
var shareblock = '<div id="' + id + '" class="FBN" onClick="' + sharewindow + '" title="Share on Facebook"></div>';
$('#FBA').html(shareblock);
GetFBNumber(id,url);
$('#FBA').css("display","block");
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function GetFBNumber(id,url) {
var fburl = "http://graph.facebook.com/?id=" + url;
$.getJSON(fburl, function(data){
var fbshares = data["shares"];
if (isNaN(fbshares)) {
fbshares = 0;
} else {
fbshares = data["shares"];
}
if(fbshares >9999) {
fbshares = Math.floor(fbshares/1000);
fbshares = fbshares.toString();
fbshares = fbshares + "K"
} else {
fbshares = numberWithCommas(fbshares);
};
$('#' + id).html('<div>' + fbshares + '</div>');
});
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function GetFBNumberIndex(id,url) {
var fburl = "http://graph.facebook.com/?id=" + url;
$.getJSON(fburl, function(data){
var fbshares = data["shares"];
if (isNaN(fbshares)) {
fbshares = 0;
} else {
fbshares = data["shares"];
}
if(fbshares >9999) {
fbshares = Math.floor(fbshares/1000);
fbshares = fbshares.toString();
fbshares = fbshares + "K"
} else {
fbshares = numberWithCommas(fbshares);
};
$('#' + id).html('<b>' + fbshares + '</b> Shares');
});
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
function ShareWindow(url) {
var iMyWidth = ( window.screen.width / 2 ) - ( 300 + 10 );
var iMyHeight = ( window.screen.height / 2 ) - ( 400 + 50 );
shareWindow = window.open( url, 'shareWin', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=700,height=450,left=' + iMyWidth + ',top=200' );
shareWindow.focus();
};
////////////////////////////////////////////////////////////////////////////////////////////////////////function numberWithCommas(x) {
function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}