var s_s_c_isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;
var s_s_c_isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;
var s_s_c_isOpera=((navigator.userAgent.indexOf("Opera")!=-1)||(navigator.userAgent.indexOf("Presto")!=-1))?true:false;
var s_s_c_isMobileBrowser=((navigator.userAgent.indexOf("Jasmine /")!=-1)||(navigator.userAgent.indexOf("Opera Mobi")!=-1)||(navigator.userAgent.indexOf("Opera Mini")!=-1))?true:false;
function s_s_c_AdobeControlVersion(){
var _1;
var _2;
var e;
try{
_2=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
_1=_2.GetVariable("$version");
}
catch(e){
}
if(!_1){
try{
_2=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
_1="WIN 6,0,21,0";
_2.AllowScriptAccess="always";
_1=_2.GetVariable("$version");
}
catch(e){
}
}
if(!_1){
try{
_2=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
_1=_2.GetVariable("$version");
}
catch(e){
}
}
if(!_1){
try{
_2=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
_1="WIN 3,0,18,0";
}
catch(e){
}
}
if(!_1){
try{
_2=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
_1="WIN 2,0,0,11";
}
catch(e){
_1=-1;
}
}
return _1;
};
function s_s_c_AdobeGetSwfVer(){
var _3=-1;
if(navigator.plugins!=null&&navigator.plugins.length>0){
if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){
var _4=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";
var _5=navigator.plugins["Shockwave Flash"+_4].description;
var _6=_5.split(" ");
var _7=_6[2].split(".");
var _8=_7[0];
var _9=_7[1];
if(_6[3]!=""){
tempArrayMinor=_6[3].split("r");
}else{
tempArrayMinor=_6[4].split("r");
}
var _a=tempArrayMinor[1]>0?tempArrayMinor[1]:0;
var _3=_8+"."+_9+"."+_a;
}
}else{
if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1){
_3=4;
}else{
if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1){
_3=3;
}else{
if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1){
_3=2;
}else{
if(s_s_c_isIE&&s_s_c_isWin&&!s_s_c_isOpera){
_3=s_s_c_AdobeControlVersion();
}
}
}
}
}
return _3;
};
s_s_c_DetectFlashVer=function(_b,_c,_d){
var _e=false;
try{
_e=(document.createElement("canvas").getContext("2d")==null)?false:true;
}
catch(err){
_e=false;
}
if(s_s_c_isMobileBrowser){
return false;
}
if(document.s_s_c_FlashIfAvailable){
}else{
if(_e){
return false;
}
}
versionStr=s_s_c_AdobeGetSwfVer();
if(versionStr==-1){
return false;
}else{
if(versionStr!=0){
if(s_s_c_isIE&&s_s_c_isWin&&!s_s_c_isOpera){
tempArray=versionStr.split(" ");
tempString=tempArray[1];
versionArray=tempString.split(",");
}else{
versionArray=versionStr.split(".");
}
var _f=versionArray[0];
var _10=versionArray[1];
var _11=versionArray[2];
if(_f>parseFloat(_b)){
return true;
}else{
if(_f==parseFloat(_b)){
if(_10>parseFloat(_c)){
return true;
}else{
if(_10==parseFloat(_c)){
if(_11>=parseFloat(_d)){
return true;
}
}
}
}
}
return false;
}
}
};
if(document.readyState==undefined){
document.readyState="loaded";
}
function s_s_c_get_caps(){
var _12="";
_12="<iframe style=\"width:0;height:0;border:none;\" src=\"https://back16.keycaptcha.com/swfs/session.html?r="+ +Math.random()+"\"></iframe>";
var _13="https://back16.keycaptcha.com/swfs/caps.js?uid="+s_s_c_user_id+"&u="+encodeURIComponent(document.location.toString().split("#")[0])+"&r="+Math.random();
if(document.getElementById("div_for_keycaptcha")!=undefined){
var s=document.createElement("script");
s.setAttribute("type","text/javascript");
document.getElementById("div_for_keycaptcha").appendChild(s);
s.setAttribute("src",_13);
}else{
document.write("<div id=\"div_for_keycaptcha\" style=\"border:none;background-color:none;background:none;display:box;padding:0;margin:0;\">"+_12+"<script id=\"s_s_c_caps_scr\" src=\""+_13+"\" type=\"text/javascript\"></script></div>");
}
};
if(!document.s_s_c_fload_flag){
document.s_s_c_fload_flag=true;
var s_s_c_web_server_sign3="";
var s_s_c_load_counter=0;
var s_s_c_buts=Array();
s_s_c_get_caps();
}

