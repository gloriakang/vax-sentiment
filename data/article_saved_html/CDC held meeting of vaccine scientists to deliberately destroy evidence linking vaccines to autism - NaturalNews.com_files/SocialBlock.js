$(window).load(function(){
$(document).ready(function() {
var url = document.URL;
GetShares( url );
$('.BtnFacebook').click(function() { ShareWindow('http://www.facebook.com/sharer/sharer.php?u=' + url); });
$('.BtnTwitter').click(function() { ShareWindow('https://twitter.com/intent/tweet?text=' + document.title + '&url=' + url); });
$('.BtnGoogle').click(function() { ShareWindow('https://plus.google.com/share?url=' + url); });
$('.BtnAdd2Any').click(function() { ShareWindow('http://www.addtoany.com/share_save'); });
});
});
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function ShareWindow( url )
{
var iMyWidth = ( window.screen.width / 2 ) - ( 300 + 10 );
var iMyHeight = ( window.screen.height / 2 ) - ( 400 + 50 );
shareWindow = window.open( url, 'shareWin', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=700,height=450,left=' + iMyWidth + ',top=200' );
shareWindow.focus();
};
///////////////////////////////////////////////////////////////////////
function GetShares(url) {
var fburl = "http://graph.facebook.com/?id=" + url;
$.getJSON(fburl, function(data){
var fbshares = data["shares"];
if (isNaN(fbshares)) {
fbshares = 0;
} else {
fbshares = data["shares"];
}
var fbfinalshares  = fbshares .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");//add comma(s) to final number
$(".Facebook").html('Facebook (' + fbfinalshares + ')'); // add to class name so there can be multiple places on a page with this share number
// ------------------------------------------ //
var twitterurl='http://urls.api.twitter.com/1/urls/count.json?url=' + url + '&callback=?';
$.getJSON(twitterurl, function(data){
var twshares = data["count"];
var twfinalshares  = twshares .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");//add comma(s) to final number
$(".Twitter").html('Twitter (' + twfinalshares + ')'); // add to class name so there can be multiple places on a page with this share number
// ------------------------------------------ //
});
});
};
///////////////////////////////////////////////////////////////////////
function SocialBlock() {

vStart = '<svg width="30px" height="30px" viewBox="-5 -5 30 30">';
vEnd = '</svg>';

var vFacebook = vStart + '<path fill="#FFFFFF" d="M11.68,20v-9.124h3.315l0.493-3.555H11.68V5.053c0-1.032,0.307-1.732,1.905-1.732l2.04-0.001V0.141 C15.273,0.097,14.063,0,12.652,0C9.713,0,7.7,1.656,7.7,4.701v2.62H4.375v3.555H7.7V20H11.68z"/>'+ vEnd;
var vTwitter = vStart + '<path fill="#FFFFFF" d="M20,3.796c-0.736,0.327-1.527,0.548-2.355,0.646c0.847-0.506,1.496-1.311,1.804-2.269 c-0.791,0.47-1.671,0.811-2.605,0.996c-0.749-0.798-1.815-1.296-2.995-1.296c-2.268,0-4.104,1.837-4.104,4.104 c0,0.321,0.036,0.634,0.107,0.935C6.439,6.741,3.416,5.106,1.392,2.625c-0.354,0.604-0.556,1.31-0.556,2.062 c0,1.423,0.725,2.681,1.826,3.417C1.989,8.081,1.356,7.896,0.803,7.589c0,0.016,0,0.034,0,0.051c0,1.987,1.415,3.647,3.292,4.024 c-0.346,0.094-0.707,0.145-1.082,0.145c-0.264,0-0.521-0.027-0.771-0.074c0.522,1.629,2.036,2.816,3.833,2.851 c-1.405,1.103-3.173,1.758-5.096,1.758c-0.332,0-0.658-0.021-0.979-0.059c1.815,1.164,3.971,1.845,6.289,1.845 c7.547,0,11.676-6.254,11.676-11.676c0-0.179-0.004-0.354-0.014-0.53C18.754,5.343,19.45,4.619,20,3.796z"/>'+ vEnd;
var vGoogle = vStart + '<path fill="#FFFFFF" d="M11.452,1.948h-1.418c0.549,0.448,1.64,1.313,1.64,3.105c0,1.743-1.005,2.57-2.01,3.346  C9.353,8.706,8.995,9.037,8.995,9.555s0.358,0.801,0.621,1.013l0.863,0.658c1.052,0.873,2.007,1.676,2.007,3.301  c0,2.217-2.245,4.473-6.359,4.473c-3.469,0-5.075-1.643-5.075-3.389c0-0.85,0.429-2.049,1.843-2.875  c1.481-0.896,3.492-1.014,4.569-1.086c-0.336-0.424-0.718-0.871-0.718-1.602c0-0.4,0.12-0.637,0.239-0.919  C6.721,9.154,6.459,9.177,6.22,9.177c-2.536,0-3.971-1.863-3.971-3.7c0-1.084,0.337-2.365,1.365-3.236C4.978,1.133,6.721,1,8.013,1  l4.988,0.001L11.452,1.948L11.452,1.948z M5.212,12.689c-0.526,0.188-2.057,0.754-2.057,2.429c0,1.673,1.651,2.876,4.21,2.876  c2.296,0,3.517-1.087,3.517-2.546c0-1.204-0.789-1.839-2.608-3.112c-0.191-0.023-0.311-0.023-0.549-0.023  C7.509,12.313,6.217,12.359,5.212,12.689L5.212,12.689z M6.555,1.859c-0.623,0-1.292,0.247-1.676,0.719  c-0.406,0.496-0.525,1.19-0.525,1.804c0,1.579,0.933,4.195,2.991,4.195c0.598,0,1.242-0.342,1.626-0.719  c0.55-0.543,0.598-1.237,0.598-1.662C9.568,4.5,8.54,1.859,6.555,1.859L6.555,1.859z"/> <polygon fill="#FFFFFF" points="19,9.031 16.563,9.031 16.563,6.594 15.438,6.594 15.438,9.031 13,9.031 13,10.156 15.438,10.156 15.438,12.594 16.563,12.594 16.563,10.156 19,10.156  "/>'+ vEnd;
var vAdd2Any = vStart + '<polygon fill="#FFFFFF" points="16,8 12,8 12,4 8,4 8,8 4,8 4,12 8,12 8,16 12,16 12,12 16,12 "/>'+ vEnd;

var vSocialBlock = '<style> ';
vSocialBlock += '.Social { display: table; padding: 0px; margin: 0px 0px; clear: both; } ';
vSocialBlock += '.SocialButtons { display: table-cell; vertical-align: middle; text-align: left; }'; 
vSocialBlock += '.BtnFacebook, .BtnTwitter, .BtnGoogle, .BtnAdd2Any { display: inline-block; float: left; width: 30px; height: 30px; margin: 0px 7px 0px 0px; cursor: pointer; } ';
vSocialBlock += '.BtnFacebook { background-color: #29447E; } ';
vSocialBlock += '.BtnTwitter { background-color: #00ACEE; } ';
vSocialBlock += '.BtnGoogle { background-color: #cd3c28; }';
vSocialBlock += '.BtnAdd2Any { background-color: #F8694D; } ';
vSocialBlock += '.BtnFacebook div:nth-child(1), .BtnTwitter div:nth-child(1), .BtnGoogle div:nth-child(1), .BtnAdd2Any div:nth-child(1) { display: inline-block; float: left; width: 30px; height: 30px; background-repeat: no-repeat; background-position: center center; } ';
vSocialBlock += '.BtnAdd2Any div:nth-child(1) { background-image: url(../Images/Icon-Add2Any-White.svg); }';
vSocialBlock += '.BtnFacebook div:nth-child(2), .BtnTwitter div:nth-child(2), .BtnGoogle div:nth-child(2), .BtnAdd2Any div:nth-child(2) { display: none; float: left; padding: 9px 10px 0px 5px; width: auto; font-family: arial, helvetica, san-serif; font-weight: bold; color: #FFFFFF; font-size: 12px; line-height: 12px; } ';
// ------------------------------------------ //
vSocialBlock += '@media (min-width: 767px) { ';
vSocialBlock += '.BtnFacebook, .BtnTwitter, .BtnGoogle, .BtnAdd2Any { width: auto; margin: 0px 5px 5px 0px; } ';
vSocialBlock += '.BtnFacebook div:nth-child(2), .BtnTwitter div:nth-child(2), .BtnGoogle div:nth-child(2), .BtnAdd2Any div:nth-child(2) { display: inline-block; }';
vSocialBlock += '} ';
vSocialBlock += '</style>';
// ------------------------------------------ //
vSocialBlock += '<div class="Social">';
vSocialBlock += '<div class="SocialButtons">';
vSocialBlock += '<div class="BtnFacebook" title="Share on Facebook"><div>' + vFacebook + '</div><div class="Facebook"></div></div>';
vSocialBlock += '<div class="BtnTwitter" title="Share on Twitter"><div>' + vTwitter + '</div><div class="Twitter"></div></div>';
vSocialBlock += '<div class="BtnGoogle" title="Share on Google +"><div>' + vGoogle + '</div></div>';
vSocialBlock += '<div class="BtnAdd2Any a2a_dd"><div>' + vAdd2Any + '</div></div>';
vSocialBlock += '</div>';
vSocialBlock += '</div>';

document.write(vSocialBlock);
};