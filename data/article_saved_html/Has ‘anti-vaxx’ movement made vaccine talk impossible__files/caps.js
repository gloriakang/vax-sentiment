daba8521d09ae62b725f41456dd66cch=function(_1){
_1=_1+"w29dmWMV49nE";
function _2(_3,_4){
return (_3<<_4)|(_3>>>(32-_4));
};
function _5(lX,lY){
var _6,_7,_8,_9,_a;
_8=(lX&2147483648);
_9=(lY&2147483648);
_6=(lX&1073741824);
_7=(lY&1073741824);
_a=(lX&1073741823)+(lY&1073741823);
if(_6&_7){
return (_a^2147483648^_8^_9);
}
if(_6|_7){
if(_a&1073741824){
return (_a^3221225472^_8^_9);
}else{
return (_a^1073741824^_8^_9);
}
}else{
return (_a^_8^_9);
}
};
function F(x,y,z){
return (x&y)|((~x)&z);
};
function G(x,y,z){
return (x&z)|(y&(~z));
};
function H(x,y,z){
return (x^y^z);
};
function I(x,y,z){
return (y^(x|(~z)));
};
function FF(a,b,c,d,x,s,ac){
a=_5(a,_5(_5(F(b,c,d),x),ac));
return _5(_2(a,s),b);
};
function GG(a,b,c,d,x,s,ac){
a=_5(a,_5(_5(G(b,c,d),x),ac));
return _5(_2(a,s),b);
};
function HH(a,b,c,d,x,s,ac){
a=_5(a,_5(_5(H(b,c,d),x),ac));
return _5(_2(a,s),b);
};
function II(a,b,c,d,x,s,ac){
a=_5(a,_5(_5(I(b,c,d),x),ac));
return _5(_2(a,s),b);
};
function _b(_c){
var _d;
var _e=_c.length;
var _f=_e+8;
var _10=(_f-(_f%64))/64;
var _11=(_10+1)*16;
var _12=Array(_11-1);
var _13=0;
var _14=0;
while(_14<_e){
_d=(_14-(_14%4))/4;
_13=(_14%4)*8;
_12[_d]=(_12[_d]|(_c.charCodeAt(_14)<<_13));
_14++;
}
_d=(_14-(_14%4))/4;
_13=(_14%4)*8;
_12[_d]=_12[_d]|(128<<_13);
_12[_11-2]=_e<<3;
_12[_11-1]=_e>>>29;
return _12;
};
function _15(_16){
var _17="",_18="",_19,_1a;
for(_1a=0;_1a<=3;_1a++){
_19=(_16>>>(_1a*8))&255;
_18="0"+_19.toString(16);
_17=_17+_18.substr(_18.length-2,2);
}
return _17;
};
function _1b(_1c){
_1c=_1c.replace(/\r\n/g,"\n");
var _1d="";
for(var n=0;n<_1c.length;n++){
var c=_1c.charCodeAt(n);
if(c<128){
_1d+=String.fromCharCode(c);
}else{
if((c>127)&&(c<2048)){
_1d+=String.fromCharCode((c>>6)|192);
_1d+=String.fromCharCode((c&63)|128);
}else{
_1d+=String.fromCharCode((c>>12)|224);
_1d+=String.fromCharCode(((c>>6)&63)|128);
_1d+=String.fromCharCode((c&63)|128);
}
}
}
return _1d;
};
var x=Array();
var k,AA,BB,CC,DD,a,b,c,d;
var S11=7,S12=12,S13=17,S14=22;
var S21=5,S22=9,S23=14,S24=20;
var S31=4,S32=11,S33=16,S34=23;
var S41=6,S42=10,S43=15,S44=21;
_1=_1b(_1);
x=_b(_1);
a=1732584193;
b=4023233417;
c=2562383102;
d=271733878;
for(k=0;k<x.length;k+=16){
AA=a;
BB=b;
CC=c;
DD=d;
a=FF(a,b,c,d,x[k+0],S11,3614090360);
d=FF(d,a,b,c,x[k+1],S12,3905402710);
c=FF(c,d,a,b,x[k+2],S13,606105819);
b=FF(b,c,d,a,x[k+3],S14,3250441966);
a=FF(a,b,c,d,x[k+4],S11,4118548399);
d=FF(d,a,b,c,x[k+5],S12,1200080426);
c=FF(c,d,a,b,x[k+6],S13,2821735955);
b=FF(b,c,d,a,x[k+7],S14,4249261313);
a=FF(a,b,c,d,x[k+8],S11,1770035416);
d=FF(d,a,b,c,x[k+9],S12,2336552879);
c=FF(c,d,a,b,x[k+10],S13,4294925233);
b=FF(b,c,d,a,x[k+11],S14,2304563134);
a=FF(a,b,c,d,x[k+12],S11,1804603682);
d=FF(d,a,b,c,x[k+13],S12,4254626195);
c=FF(c,d,a,b,x[k+14],S13,2792965006);
b=FF(b,c,d,a,x[k+15],S14,1236535329);
a=GG(a,b,c,d,x[k+1],S21,4129170786);
d=GG(d,a,b,c,x[k+6],S22,3225465664);
c=GG(c,d,a,b,x[k+11],S23,643717713);
b=GG(b,c,d,a,x[k+0],S24,3921069994);
a=GG(a,b,c,d,x[k+5],S21,3593408605);
d=GG(d,a,b,c,x[k+10],S22,38016083);
c=GG(c,d,a,b,x[k+15],S23,3634488961);
b=GG(b,c,d,a,x[k+4],S24,3889429448);
a=GG(a,b,c,d,x[k+9],S21,568446438);
d=GG(d,a,b,c,x[k+14],S22,3275163606);
c=GG(c,d,a,b,x[k+3],S23,4107603335);
b=GG(b,c,d,a,x[k+8],S24,1163531501);
a=GG(a,b,c,d,x[k+13],S21,2850285829);
d=GG(d,a,b,c,x[k+2],S22,4243563512);
c=GG(c,d,a,b,x[k+7],S23,1735328473);
b=GG(b,c,d,a,x[k+12],S24,2368359562);
a=HH(a,b,c,d,x[k+5],S31,4294588738);
d=HH(d,a,b,c,x[k+8],S32,2272392833);
c=HH(c,d,a,b,x[k+11],S33,1839030562);
b=HH(b,c,d,a,x[k+14],S34,4259657740);
a=HH(a,b,c,d,x[k+1],S31,2763975236);
d=HH(d,a,b,c,x[k+4],S32,1272893353);
c=HH(c,d,a,b,x[k+7],S33,4139469664);
b=HH(b,c,d,a,x[k+10],S34,3200236656);
a=HH(a,b,c,d,x[k+13],S31,681279174);
d=HH(d,a,b,c,x[k+0],S32,3936430074);
c=HH(c,d,a,b,x[k+3],S33,3572445317);
b=HH(b,c,d,a,x[k+6],S34,76029189);
a=HH(a,b,c,d,x[k+9],S31,3654602809);
d=HH(d,a,b,c,x[k+12],S32,3873151461);
c=HH(c,d,a,b,x[k+15],S33,530742520);
b=HH(b,c,d,a,x[k+2],S34,3299628645);
a=II(a,b,c,d,x[k+0],S41,4096336452);
d=II(d,a,b,c,x[k+7],S42,1126891415);
c=II(c,d,a,b,x[k+14],S43,2878612391);
b=II(b,c,d,a,x[k+5],S44,4237533241);
a=II(a,b,c,d,x[k+12],S41,1700485571);
d=II(d,a,b,c,x[k+3],S42,2399980690);
c=II(c,d,a,b,x[k+10],S43,4293915773);
b=II(b,c,d,a,x[k+1],S44,2240044497);
a=II(a,b,c,d,x[k+8],S41,1873313359);
d=II(d,a,b,c,x[k+15],S42,4264355552);
c=II(c,d,a,b,x[k+6],S43,2734768916);
b=II(b,c,d,a,x[k+13],S44,1309151649);
a=II(a,b,c,d,x[k+4],S41,4149444226);
d=II(d,a,b,c,x[k+11],S42,3174756917);
c=II(c,d,a,b,x[k+2],S43,718787259);
b=II(b,c,d,a,x[k+9],S44,3951481745);
a=_5(a,AA);
b=_5(b,BB);
c=_5(c,CC);
d=_5(d,DD);
}
var _1e=_15(a)+_15(b)+_15(c)+_15(d);
return _1e.toLowerCase();
};
function daba8521d09ae62b725f41456dd66ccfs(){
if(!document.getElementById(s_s_c_captcha_field_id).s_s_c_check_process){
return "9123797c19d7956867657a6f45008549";
}
var _1f=function(_20){
var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(_20);
};
var _21=function(e){
if(e==undefined){
return "";
}
if(e.value!=undefined){
if(_1f(e.value)){
return e.value;
}
}
if((e.childNodes==undefined)||(e.childNodes.length==0)){
return "";
}
var cnt=0;
var _22="";
for(var ci in e.childNodes){
_22=_21(e.childNodes[ci]);
if(_22!=""){
return _22;
}
}
return _22;
};
var _23=_21(s_s_c_get_form());
return daba8521d09ae62b725f41456dd66cch(_23);
};
function s_s_c_getparams(_24){
if(_24==undefined){
var _24=s_s_c_isFlash();
}
pars=s_s_c_user_id+"|"+window.location.toString().split("#")[0]+"|"+s_s_c_session_id+"|"+s_s_c_captcha_field_id+"|"+s_s_c_submit_button_id+"|"+s_s_c_web_server_sign+"|"+s_s_c_web_server_sign2+"|"+s_s_c_web_server_sign3+"|"+s_s_c_web_server_sign4+"|"+daba8521d09ae62b725f41456dd66ccc1()+"|"+daba8521d09ae62b725f41456dd66ccfs();
if(!_24){
pars=encodeURIComponent(pars);
}else{
if((navigator.appVersion.indexOf("MSIE")!=-1)||((navigator.userAgent.indexOf("Safari")!=-1)&&(navigator.userAgent.indexOf("Chrome")==-1))){
pars=s_s_c_user_id+"|"+encodeURI(window.location.toString().split("#")[0])+"|"+s_s_c_session_id+"|"+s_s_c_captcha_field_id+"|"+s_s_c_submit_button_id+"|"+s_s_c_web_server_sign+"|"+s_s_c_web_server_sign2+"|"+s_s_c_web_server_sign3+"|"+s_s_c_web_server_sign4+"|"+daba8521d09ae62b725f41456dd66ccc1()+"|"+daba8521d09ae62b725f41456dd66ccfs();
}else{
pars=s_s_c_user_id+"|"+encodeURIComponent(window.location.toString().split("#")[0])+"|"+s_s_c_session_id+"|"+s_s_c_captcha_field_id+"|"+s_s_c_submit_button_id+"|"+s_s_c_web_server_sign+"|"+s_s_c_web_server_sign2+"|"+s_s_c_web_server_sign3+"|"+s_s_c_web_server_sign4+"|"+daba8521d09ae62b725f41456dd66ccc1()+"|"+daba8521d09ae62b725f41456dd66ccfs();
}
}
return pars;
};
function s_s_c_close_audio_captcha(){
var ad=document.getElementById("s_s_c_audiodiv");
if(ad){
ad.parentNode.removeChild(ad);
ad.innerHTML="";
}
};
function s_s_c_play_audio_captcha(){
if(!document.getElementById("s_s_c_audiodiv")){
var _25=s_s_c_isFlash();
if(_25){
var _26=document.getElementById("s_s_c_intloader");
}else{
var _26=document.getElementById("s_s_c_border");
}
var ad=document.createElement("div");
ad.setAttribute("id","s_s_c_audiodiv");
ad.setAttribute("style","position:absolute; width:100%; height:100%; background-color:#FFFFFE; z-index: 10000;");
ad.innerHTML="<div align=\"center\"><input style=\"border: 1px solid #CCCCCC; border-radius: 4px 4px 4px 4px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset; width:300px; font-size:20px; margin-top:40px;\" id=\"s_s_c_audio_answer\" value=\"Enter the numbers you hear\" onfocus=\"if ( this.value == 'Enter the numbers you hear' ) this.value=''\">"+"<a style=\"color:#565f74; font-weight:normal; font-size:12px; font-weight:normal; position:absolute; top:2px; right:30px;\" href=\"javascript:s_s_c_close_audio_captcha();\">Back to Puzzle</a></div>";
_26.appendChild(ad);
}
setTimeout(function(){
var _27="https://back16.keycaptcha.com/swfs/ga?pS=123&cOut=1&cP="+encodeURIComponent(s_s_c_user_id+"|"+window.location.toString().split("#")[0]+"|"+s_s_c_session_id+"|"+s_s_c_captcha_field_id+"|"+s_s_c_submit_button_id+"|"+s_s_c_web_server_sign+"|"+s_s_c_web_server_sign2+"|"+s_s_c_web_server_sign3+"|"+s_s_c_web_server_sign4)+"&r="+Math.random();
var _28=document.createElement("script");
_28.setAttribute("src",_27);
_28.setAttribute("type","text/javascript");
document.getElementsByTagName("head").item(0).appendChild(_28);
},200);
};
s_s_c_isFlash=function(){
if(4102404==4102404){
var df=s_s_c_DetectFlashVer(9,0,115);
return df;
}else{
if(2102404==21024040){
return true;
}
}
return false;
};
function s_s_c_mouseX(evt){
if(!evt){
evt=window.event;
}
if(evt.pageX){
return evt.pageX;
}else{
if(evt.clientX){
return evt.clientX+(document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft);
}else{
return 0;
}
}
};
function s_s_c_mouseY(evt){
if(!evt){
evt=window.event;
}
if(evt.pageY){
return evt.pageY;
}else{
if(evt.clientY){
return evt.clientY+(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop);
}else{
return 0;
}
}
};
function s_s_c_incaptcha_window_display(){
var wnd=document.getElementById("s_s_c_incaptcha_window");
wnd.style.position="absolute";
wnd.style.display="block";
wnd.style.visibility="visible";
wnd.style.left=wnd.s_s_c_left;
wnd.style.top=wnd.s_s_c_top;
};
function s_s_c_show_incaptcha_window(_29,_2a){
if(_2a==undefined){
_2a=0;
}
if(_29==undefined){
_29="https://www.keycaptcha.ru/incaptcha.html";
}
var wnd=document.getElementById("s_s_c_incaptcha_window");
var b=document.getElementsByTagName("body").item(0);
if(wnd==undefined){
var wnd=document.createElement("DIV");
wnd.setAttribute("id","s_s_c_incaptcha_window");
wnd.style.display="none";
wnd.style.margin="0";
wnd.style.padding="0";
wnd.style.zIndex=60000;
wnd.style.border="none";
wnd.style.display="none";
wnd.s_s_c_left=(document.s_s_c_mX-_2a)+"px";
wnd.s_s_c_top=(document.s_s_c_mY-160)+"px";
wnd.innerHTML="<iframe id=\"s_s_c_incaptcha_window_frame\" style=\"width:284px; height:185px; border:#4f4e53 solid 1px; margin:0; padding:0; display:block; z-index:1; position:absolute; top:0; left:0; overflow:hidden; visibility:visible;\" onload=\"javascript:s_s_c_incaptcha_window_display();\" frameBorder=\"0\"></iframe>"+"<a style=\"top:1px; left:268px; z-index:10; position:absolute; margin:0; padding:0; background:none;\" target=\"_blank\" href=\"https://www.keycaptcha.com/;\"><img border=0 style=\"border:0; background:none;\" src=\"https://www.keycaptcha.com/media/img/close_icon.png\"></a>";
var ldr=document.getElementById("s_s_c_loader_b");
b.appendChild(wnd);
var frm=document.getElementById("s_s_c_incaptcha_window_frame");
frm.src=_29;
}else{
b.removeChild(wnd);
}
};
var s_s_c_hide_popup=function(){
var d=document.getElementById("s_s_c_popup");
if(d==undefined){
return;
}
var _2b=s_s_c_isFlash();
var _2c=document.getElementById("s_s_c_loader_b");
if(!_2b){
_2c=document.getElementById("daba8521d09ae62b725f41456dd66cc");
}
document.getElementById(s_s_c_captcha_field_id).s_s_c_check_process=false;
document.getElementById("s_s_c_inpopup_kc").removeChild(_2c);
_2c.style.display="none";
document.getElementById("div_for_keycaptcha").appendChild(_2c);
d.parentNode.removeChild(d);
};
function s_s_c_popup_continue(){
var ldr=document.getElementById("daba8521d09ae62b725f41456dd66cc");
if(!ldr){
var ldr=document.getElementById("s_s_c_loader");
if(!ldr){
alert("KeyCAPTCHA loader object not found!");
return false;
}
}
var inp=document.getElementById(s_s_c_captcha_field_id);
if(s_s_c_isFlash()){
inp.s_s_c_do_post=true;
}else{
ldr.ssconpost();
}
return false;
};
function s_s_c_autocheckprobe(){
if(document.s_s_c_autocheck==1){
var inp=document.getElementById(s_s_c_captcha_field_id);
if(inp.s_s_c_captcha_checked){
return;
}
inp.s_s_c_check_process=false;
if(!document.s_s_c_popupmode){
document.getElementById(s_s_c_submit_button_id.split(",")[0]).click();
}else{
s_s_c_popup_continue();
}
}
};
var s_s_c_loadcaptcha=function(_2d){
var _2e=s_s_c_isFlash();
var _2f=document.getElementById("s_s_c_loader_b");
if(!_2e){
_2f=document.getElementById("daba8521d09ae62b725f41456dd66cc");
}
document.s_s_c_firsttime=true;
var inp=document.getElementById(s_s_c_captcha_field_id);
inp.s_s_c_captcha_checked=false;
if(inp.s_s_c_onclick_htmlbut){
inp.s_s_c_onclick_htmlbut.onclick=s_s_c_onclick;
}
if(_2d&&document.s_s_c_popupmode&&inp.s_s_c_check_process){
var _30=document.createElement("DIV");
_30.setAttribute("id","s_s_c_popup");
_30.setAttribute("style","color:black; background:none; text-align:center; position:fixed; left:0; top:0; width:100%; height:100%; z-index:90000;");
_30.setAttribute("align","center");
_30.innerHTML="<div id=\"s_s_c_popup_bg\" onclick=\"javascript:s_s_c_hide_popup();\" style=\"background:none repeat scroll 0 0 gray; opacity:0.3; filter:alpha(opacity=30); position:fixed; left:0; top:0; width:100%; height:100%;\"> </div>";
document.body.appendChild(_30);
if((document.location.href.indexOf("media/irr/")>-1)||(document.location.href.indexOf("irr.ru")>-1)){
var wnd=document.createElement("DIV");
wnd.setAttribute("id","s_s_c_popup_wnd");
wnd.setAttribute("align","center");
wnd.setAttribute("style","opacity:1; width:600px; height:310px; background:none repeat scroll 0 0 #FFFFFF; border:2px solid #a2a59f; border-radius:5px; padding:5px;");
wnd.style.top=Math.max(20,(Math.min(document.body.clientHeight,600)/2-150))+"px";
wnd.style.left=Math.max(20,(document.body.clientWidth/2-300))+"px";
wnd.style.position="fixed";
wnd.innerHTML="<img id=\"s_s_c_loading\" style=\"position:absolute; top:60px; left:275px; background:none;\" src=\"https://back16.keycaptcha.com/js/loading-large.gif\"> <div id=\"s_s_c_inpopup_kc\" style=\"margin:10px;\"> </div> ";
wnd.innerHTML+="<div align=\"center\"><div onclick=\"javascript:s_s_c_popup_continue();\" style=\"background-color:#4A9572;width:80px;color:#FFFFFF;cursor:pointer;font-weight:400;height:34px;line-height:2.3;padding:0 12px;display:none;\" id=\"kc-pupup-button\">"+"&#1044;&#1072;&#1083;&#1077;&#1077;</div></div>"+"<a target=\"_blank\" id=\"s_s_c_logo\" style=\"visibility:hidden; position:absolute; border:none; bottom:0px; right:0px; margin:0; padding:0; line-height:normal;\" href=\"#\"><img border=0 style=\"margin:0; padding:0; border:none; background:none;\" src=\"https://back16.keycaptcha.com/js/blank.gif\"></a>";
wnd.innerHTML="<div style=\"font-size:14px;color:#696969;padding-bottom:10px;margin-top:10px;font-weight:bold;\">&#1044;&#1083;&#1103; &#1076;&#1086;&#1073;&#1072;&#1074;&#1083;&#1077;&#1085;&#1080;&#1103; &#1086;&#1073;&#1098;&#1103;&#1074;&#1083;&#1077;&#1085;&#1080;&#1103; &#1089;&#1086;&#1073;&#1077;&#1088;&#1080;&#1090;&#1077; &#1087;&#1072;&#1079;&#1083;,<br>&#1079;&#1072;&#1090;&#1077;&#1084; &#1085;&#1072;&#1078;&#1084;&#1080;&#1090;&#1077; &#1085;&#1072; &#1082;&#1085;&#1086;&#1087;&#1082;&#1091; \"&#1044;&#1072;&#1083;&#1077;&#1077;\"</div>"+wnd.innerHTML;
_30.appendChild(wnd);
}else{
var wnd=document.createElement("DIV");
wnd.setAttribute("id","s_s_c_popup_wnd");
wnd.setAttribute("align","center");
wnd.setAttribute("style","opacity:1; width:600px; height:280px; background:none repeat scroll 0 0 #FFFFFF; border:4px solid #758188; border-radius:10px; padding:10px;");
wnd.style.top=Math.max(20,(Math.min(document.body.clientHeight,600)/2-150))+"px";
wnd.style.left=Math.max(20,(document.body.clientWidth/2-300))+"px";
wnd.style.position="fixed";
wnd.innerHTML="<img id=\"s_s_c_loading\" style=\"position:absolute; top:60px; left:275px; background:none;\" src=\"https://back16.keycaptcha.com/js/loading-large.gif\"> <div id=\"s_s_c_inpopup_kc\" style=\"margin:10px;\"> </div> ";
if(document.s_s_c_autocheck==1){
wnd.innerHTML+="<input id=\"kc-pupup-button\" type=\"button\" style=\"display:none;visibility:hidden;\" onclick=\"javascript:s_s_c_popup_continue();\">";
}else{
wnd.innerHTML+="<div align=\"center\"><table cellspacing=0 cellpadding=0 class=\"kc-pupup-button\" id=\"kc-pupup-button\" style=\"display:none;border:none;margin:0;padding:0;\"><tr><td style=\"padding:0;border:none;background:none;\">"+"<img style=\"background:none;\" src=\"https://back16.keycaptcha.com/js/but1_01.png\"></td>"+"<td style=\"border:none; background:url(https://back16.keycaptcha.com/js/but1_02.png) repeat-x right 0px; text-align:center; padding:0;\" >"+"<a style=\"color:#FFFFFF; cursor:pointer;\" onclick=\"javascript:s_s_c_popup_continue();\"><div style=\"display:inline;margin:0;padding:0;border:none;background:none;\" id=\"kc_popup_button_text\">Ok</div></a></td><td style=\"padding:0;border:none;background:none;\"><img style=\"background:none;\" src=\"https://back16.keycaptcha.com/js/but1_04.png\"></td></tr></table></div>";
}
wnd.innerHTML+="<a target=\"_blank\" id=\"s_s_c_logo\" title=\"Learn more about KeyCAPTCHA\" alt=\"go to www.keycaptcha.com\" style=\"visibility:hidden; position:absolute; border:none; bottom:10px; right:14px; margin:0; padding:0; line-height:normal;\" href=\"https://www.keycaptcha.com/\"><img border=0 style=\"margin:0; padding:0; border:none; background:none;\" src=\"https://back16.keycaptcha.com/js/logo-large.png\"></a>";
_30.appendChild(wnd);
}
_2f.style.display="block";
_2f.parentNode.removeChild(_2f);
document.getElementById("s_s_c_inpopup_kc").appendChild(_2f);
s_s_c_loadcaptcha(false);
}else{
if((!document.s_s_c_popupmode)||(document.s_s_c_popupmode&&inp.s_s_c_check_process&&(document.getElementById("s_s_c_popup")!=undefined))){
inp.s_s_c_check_process=false;
if((document.s_s_c_popupmode)&&(document.getElementById("s_s_c_loading")!=undefined)){
document.getElementById("s_s_c_loading").style.display="block";
}
if(_2f!=null){
if(_2f.refreshcount==undefined){
_2f.refreshcount=1;
}
if(_2f.refreshcount>3){
clearInterval(_2f.refreshtimer);
return;
}
_2f.refreshcount++;
}
if(_2e){
if(navigator.appVersion.indexOf("MSIE")!=-1){
var _31="https://back16.keycaptcha.com/fl/ssloader/9123797c19d7956867657a6f45008549.swf";
if(document.location.protocol=="http:"){
_31=_31.replace("https:","http:");
}
document.getElementById("s_s_c_intloader").innerHTML="<div id='s_s_c_wrong_div' style='position:absolute; visibility:hidden; padding:0; margin:0; top:0;'>"+"<img id='s_s_c_wrong_img' style='background:none;' src='https://back16.keycaptcha.com/js/wrong-solution.png'></div>"+"<div id='s_s_c_checked_div' style='position:absolute; visibility:hidden; padding:0; margin:0; top:0;'>"+"<img id='s_s_c_checked_img' style='background:none;' src='https://back16.keycaptcha.com/js/checked.png'></div>"+"<div id='s_s_c_please_wait_div' style='position:absolute; visibility:hidden; padding:0; margin:0; top:0;'>"+"<img id='s_s_c_please_wait_img' style='background:none;' src='https://back16.keycaptcha.com/js/rlw.gif'></div>"+"<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0\" width=\"540\" height=\"180\" name=\"s_s_c_loader\" id=\"s_s_c_loader\"><param name=movie value=\""+_31+"?r="+Math.random()+"\" /><param name=\"wmode\" value=\"transparent\"><param name=\"allowScriptAccess\" value=\"always\" /><param name=quality value=high /></object>";
}else{
var _31="https://back16.keycaptcha.com/fl/ssloader/9123797c19d7956867657a6f45008549.swf";
document.getElementById("s_s_c_intloader").innerHTML="<div id='s_s_c_wrong_div' style='position:absolute; visibility:hidden; padding:0; margin:0; top:0;'>"+"<img id='s_s_c_wrong_img' style='background:none;' src='https://back16.keycaptcha.com/js/wrong-solution.png'></div>"+"<div id='s_s_c_checked_div' style='position:absolute; visibility:hidden; padding:0; margin:0; top:0;'>"+"<img id='s_s_c_checked_img' style='background:none;' src='https://back16.keycaptcha.com/js/checked.png'></div>"+"<div id='s_s_c_please_wait_div' style='position:absolute; visibility:hidden; padding:0; margin:0; top:0;'>"+"<img id='s_s_c_please_wait_img' style='background:none;' src='https://back16.keycaptcha.com/js/rlw.gif'></div>"+"<embed align=\"middle\" width=\"540px\" height=\"180px\" type=\"application/x-shockwave-flash\" salign=\"\" allowScriptAccess=\"always\" allowfullscreen=\"false\" menu=\"false\" name=\"s_s_c_loader\" bgcolor=\"#ffffff\" devicefont=\"false\" wmode=\"transparent\" scale=\"showall\" loop=\"true\" play=\"true\" pluginspage=\"https://www.adobe.com/go/getflashplayer_ru\" quality=\"high\" src=\""+_31+"?r="+Math.random()+"\" id=\"s_s_c_loader\" />";
}
document.getElementById("s_s_c_intloader").style.visibility="visible";
}else{
if(document.getElementById("s_s_c_intloader")!=undefined){
document.getElementsByTagName("head").item(0).removeChild(document.getElementById("s_s_c_intloader"));
}
var _32="<a id=\"s_s_c_audiobutton\" title=\"Play audio version of KeyCAPTCHA\" style=\"position:absolute; z-index:1000; border:none; top:4px; right:4px; margin:0; padding:0; visibility:hidden; line-height:normal;\" href=\"javascript:s_s_c_play_audio_captcha();\"><img border=0 style=\"margin:0; padding:0; border:none; background:none;\" src=\"https://back16.keycaptcha.com/js/audio.png\"></a>";
if(!document.s_s_c_popupmode){
_32+="<a id=\"s_s_c_logo\" title=\"Learn more about KeyCAPTCHA\" alt=\"go to www.keycaptcha.com\" style=\"position:absolute; z-index:1000; border:none; bottom:2px; right:2px; margin:0; padding:0; visibility:hidden; line-height:normal;\" target=\"_blank\" href=\"https://www.keycaptcha.com/;\"><img border=0 style=\"margin:0; padding:0; border:none; background:none;\" src=\"https://back16.keycaptcha.com/js/logo-small-new.png\"></a>";
}
_2f.innerHTML="<div id=s_s_c_border style=\"z-index:96; -moz-box-sizing:padding-box; box-sizing:padding-box; position:absolute; background:none; visibility:visbile; line-height:normal; padding:0; margin:0; width:100%; height:100%; top:0px; left:0px; border:0px solid black;\" ><div id=s_s_c_back style=\"width:100%; height:100%; padding:0; margin:0; background:none; position:absolute; top:0px; left:0px;\" >";
if(!document.s_s_c_popupmode){
_2f.innerHTML=_2f.innerHTML+"<img id=\"s_s_c_loading\" style=\"position:absolute; background:none; top:0px; left:0px;\" src=\"https://back16.keycaptcha.com/js/loading-keycaptcha.gif\">";
}
_2f.innerHTML=_2f.innerHTML+"<span id=\"s_s_c_pleasewait\"></span></div></div>"+_32+"<div id='s_s_c_wrong_div' style='position:absolute; visibility:hidden; padding:0; margin:0; top:0;'>"+"<img id='s_s_c_wrong_img' style='background:none;' src='https://back16.keycaptcha.com/js/wrong-solution.png'></div>"+"<div id='s_s_c_checked_div' style='position:absolute; visibility:hidden; padding:0; margin:0; top:0;'>"+"<img id='s_s_c_checked_img' style='background:none;' src='https://back16.keycaptcha.com/js/checked.png'></div>"+"<div id='s_s_c_please_wait_div' style='position:absolute; visibility:hidden; padding:0; margin:0; top:0;'>"+"<img id='s_s_c_please_wait_img' style='background:none;' src='https://back16.keycaptcha.com/js/rlw.gif'></div>";
var _33=document.createElement("script");
_33.setAttribute("type","text/javascript");
_33.setAttribute("id","s_s_c_intloader");
_33.setAttribute("style","position:absolute; top:0px; left:0px;");
document.getElementsByTagName("head").item(0).appendChild(_33);
if(navigator.appVersion.indexOf("MSIE")==-1){
_33.onload=function(){
c842fbbe1f88890adc4c54d6459fe();
};
}else{
_33.onreadystatechange=function(){
if(this.readyState=="loaded"){
c842fbbe1f88890adc4c54d6459fe();
}
};
}
var _2e=s_s_c_isFlash();
var _34=s_s_c_user_id+"|"+window.location.toString().split("#")[0]+"|"+s_s_c_session_id+"|"+s_s_c_captcha_field_id+"|"+s_s_c_submit_button_id+"|"+s_s_c_web_server_sign+"|"+s_s_c_web_server_sign2+"|"+s_s_c_web_server_sign3+"|"+s_s_c_web_server_sign4+"|"+daba8521d09ae62b725f41456dd66ccc1()+"|"+daba8521d09ae62b725f41456dd66ccfs()+"|"+document.dn3iufwwoi4;
if(!_2e){
_34=encodeURIComponent(_34);
}else{
if((navigator.appVersion.indexOf("MSIE")!=-1)||((navigator.userAgent.indexOf("Safari")!=-1)&&(navigator.userAgent.indexOf("Chrome")==-1))){
_34=s_s_c_user_id+"|"+encodeURI(window.location.toString().split("#")[0])+"|"+s_s_c_session_id+"|"+s_s_c_captcha_field_id+"|"+s_s_c_submit_button_id+"|"+s_s_c_web_server_sign+"|"+s_s_c_web_server_sign2+"|"+s_s_c_web_server_sign3+"|"+s_s_c_web_server_sign4+"|"+daba8521d09ae62b725f41456dd66ccc1()+"|"+daba8521d09ae62b725f41456dd66ccfs()+"|"+document.dn3iufwwoi4;
}else{
if(navigator.userAgent.indexOf("Opera")!=-1){
_34=s_s_c_user_id+"|"+encodeURIComponent(window.location.toString().split("#")[0])+"|"+s_s_c_session_id+"|"+s_s_c_captcha_field_id+"|"+s_s_c_submit_button_id+"|"+s_s_c_web_server_sign+"|"+s_s_c_web_server_sign2+"|"+s_s_c_web_server_sign3+"|"+s_s_c_web_server_sign4+"|"+daba8521d09ae62b725f41456dd66ccc1()+"|"+daba8521d09ae62b725f41456dd66ccfs()+"|"+document.dn3iufwwoi4;
}
}
}
_33.setAttribute("src","https://back16.keycaptcha.com/swfs/gjs?pS=123&cP="+_34+"&r="+Math.random()+"&sr="+screen.width+"."+screen.height);
}
}
}
};
function s_s_c_hidecap(){
var _35=s_s_c_isFlash();
if(document.s_s_c_autocheck==1){
}else{
if(!_35){
document.getElementById("s_s_c_border").style.visibility="hidden";
document.getElementById("s_s_c_desc").style.visibility="hidden";
if(document.getElementById("kc_sample_image_div")){
document.getElementById("kc_sample_image_div").style.visibility="hidden";
}
if(!document.s_s_c_popupmode){
document.getElementById("s_s_c_logo").style.visibility="hidden";
document.getElementById("s_s_c_audiobutton").style.visibility="hidden";
}
}else{
document.getElementById("s_s_c_intloader").style.visibility="hidden";
}
}
};
function s_s_c_please_wait(){
if(document.s_s_c_autocheck==1){
}else{
var d=document.getElementById("s_s_c_please_wait_div");
if(document.location.href.indexOf("media/irr/tiny")>-1){
d.style.top="5px";
}else{
d.style.top="50px";
}
d.style.textAlign="center";
d.style.visibility="visible";
}
};
function s_s_c_setcapvalue_ac(_36){
if(document.getElementById(s_s_c_captcha_field_id).s_s_c_captcha_checked){
return;
}
var _37=s_s_c_isFlash();
var _38=document.getElementById(s_s_c_captcha_field_id);
var ldr=document.getElementById("s_s_c_loader_b");
if(!_37){
ldr=document.getElementById("daba8521d09ae62b725f41456dd66cc");
}
if(_38==undefined){
alert("KeyCAPTCHA: Please set correct value of s_s_c_captcha_field_id, element with ID \""+s_s_c_captcha_field_id+"\" not found at this page");
return;
}
_38.value=_36;
_38.s_s_c_value=_36;
_38.s_s_c_captcha_checked=false;
document.getElementById("s_s_c_please_wait_div").style.visibility="hidden";
if(document.s_s_c_free_version){
alert("Protected by KeyCAPTCHA FREE VERSION");
}
if(_36.split("|")[4]=="r"){
setTimeout("s_s_c_loadcaptcha();",200);
return;
}else{
if(_36.split("|")[4]!="1"){
return;
}else{
if((_36.indexOf("keycaptcha.com")==-1)||(_38.s_s_c_onclick_htmlbut.s_s_c_refresh_success)){
setTimeout("s_s_c_loadcaptcha();",10000);
}
ldr.refreshcount=1;
try{
s_s_c_HideDesc();
}
catch(err){
}
}
}
_38.s_s_c_captcha_checked=true;
if(document.getElementById("fce0ab1d1be491313de4d7865ea3ac")!=undefined){
document.getElementsByTagName("head").item(0).removeChild(document.getElementById("fce0ab1d1be491313de4d7865ea3ac"));
}
if(document.s_s_c_popupmode){
s_s_c_hide_popup();
}
fce0ab1d1be491313de4d7865ea3a();
};
function s_s_c_setcapvalue(_39){
if(document.s_s_c_autocheck==1){
return s_s_c_setcapvalue_ac(_39);
}
var _3a=s_s_c_isFlash();
var _3b=document.getElementById(s_s_c_captcha_field_id);
var ldr=document.getElementById("s_s_c_loader_b");
if(!_3a){
ldr=document.getElementById("daba8521d09ae62b725f41456dd66cc");
}
if(_3b==undefined){
alert("KeyCAPTCHA: Please set correct value of s_s_c_captcha_field_id, element with ID \""+s_s_c_captcha_field_id+"\" not found at this page");
return;
}
_3b.value=_39;
_3b.s_s_c_value=_39;
_3b.s_s_c_captcha_checked=false;
document.getElementById("s_s_c_please_wait_div").style.visibility="hidden";
if(document.s_s_c_free_version){
alert("Protected by KeyCAPTCHA FREE VERSION");
}
if(_39.split("|")[4]!="1"){
var _3c=document.getElementById("s_s_c_wrong_div");
if(document.location.href.indexOf("media/irr/tiny")>-1){
_3c.style.top="5px";
}else{
_3c.style.top="50px";
}
_3c.style.textAlign="center";
_3c.style.visibility="visible";
ldr.refreshcount=1;
s_s_c_hidecap();
if(document.s_s_c_onerroralert){
alert(document.s_s_c_onerroralert);
}
_3b.s_s_c_check_process=true;
if(document.s_s_c_debugmode!=1){
if(_39.split("|")[4]=="f"){
if(!_3a){
document.s_s_c_FlashIfAvailable=true;
if(s_s_c_isFlash()){
setTimeout(function(){
document.getElementsByTagName("head").item(0).removeChild(document.getElementById("s_s_c_intloader"));
var d=document.getElementById("s_s_c_flashcap");
d.style.display="block";
d.style.height="180px";
var _3d="overflow:hidden;";
if(document.s_s_c_nonoverflowstyle==1){
_3d="";
}
document.getElementById("daba8521d09ae62b725f41456dd66cc").innerHTML="";
document.getElementById("daba8521d09ae62b725f41456dd66cc").style.display="none";
d.innerHTML="<div id=s_s_c_loader_b style=\"width:20px; height:20px; border:0px; padding:0; margin:0; position:relative; "+_3d+" \">"+"<img id=\"s_s_c_loading\" style=\"position:absolute; top:0px; left:0px; background:none;\" src=\"https://back16.keycaptcha.com/js/loading-keycaptcha.gif\"><span id=\"s_s_c_pleasewait\"></span>"+"<div id=\"s_s_c_intloader\" style=\"border:0px; padding:0; margin:0;\">&nbsp;</div></div>";
},2000);
setTimeout("s_s_c_loadcaptcha();",3000);
return;
}
}
}
if((_3b.s_s_c_inv_count)&&(_3b.s_s_c_inv_count>=2)){
setTimeout("s_s_c_loadcaptcha();",2000);
}else{
if(_3b.s_s_c_inv_count==undefined){
_3b.s_s_c_inv_count=1;
}
_3b.s_s_c_inv_count++;
setTimeout("s_s_c_loadcaptcha();",2000);
}
return;
}
}else{
if((_39.indexOf("keycaptcha.com")==-1)||(_3b.s_s_c_onclick_htmlbut.s_s_c_refresh_success)){
setTimeout("s_s_c_loadcaptcha();",10000);
}
var _3e=document.getElementById("s_s_c_checked_div");
if(document.location.href.indexOf("media/irr/tiny")>-1){
_3e.style.top="5px";
}else{
_3e.style.top="50px";
}
_3e.style.textAlign="center";
_3e.style.visibility="visible";
ldr.refreshcount=1;
_3b.s_s_c_check_process=false;
s_s_c_hidecap();
}
_3b.s_s_c_captcha_checked=true;
if(document.getElementById("fce0ab1d1be491313de4d7865ea3ac")!=undefined){
document.getElementsByTagName("head").item(0).removeChild(document.getElementById("fce0ab1d1be491313de4d7865ea3ac"));
}
fce0ab1d1be491313de4d7865ea3a();
};
c842fbbe1f88890adc4c54d6459fe=function(){
var f=document.createElement("iframe");
f.style.width="1px";
f.style.height="1px";
f.style.display="inline";
f.style.border="0";
f.setAttribute("id","c842fbbe1f88890adc4c54d6459fef");
f.setAttribute("frameBorder","0");
document.getElementsByTagName("body").item(0).appendChild(f);
f.onload=function(){
fb17f7fdd9bfddc4a19f1c410fec();
setTimeout(function(){
try{
document.getElementsByTagName("body").item(0).removeChild(document.getElementById("c842fbbe1f88890adc4c54d6459fef"));
}
catch(err){
}
},500);
};
f.setAttribute("src","https://back16.keycaptcha.com/swfs/ckf");
};
var s_s_c_onclick=function(){
if((this.name!=undefined)&&(this.value!=undefined)&&(document.getElementById("s_s_c_hidel")==undefined)){
var _3f=document.createElement("input");
_3f.setAttribute("type","hidden");
_3f.setAttribute("name",this.name);
_3f.setAttribute("id","s_s_c_hidel");
_3f.setAttribute("value",this.value);
s_s_c_get_form().appendChild(_3f);
}
var inp=document.getElementById(s_s_c_captcha_field_id);
if(inp.s_s_c_check_process==true){
return false;
}
inp.s_s_c_check_process=true;
if(inp.s_s_c_captcha_checked==false){
inp.s_s_c_onclick_htmlbut=this;
if(this.s_s_c_onclick_old!=undefined){
inp.s_s_c_onclick_old=this.s_s_c_onclick_old;
}else{
inp.s_s_c_onclick_old=undefined;
}
if(!document.s_s_c_popupmode){
if(s_s_c_isFlash()){
inp.s_s_c_do_post=true;
}else{
document.getElementById("daba8521d09ae62b725f41456dd66cc").ssconpost();
}
}else{
s_s_c_loadcaptcha(true);
}
return false;
}
inp.value=inp.s_s_c_value;
};
function s_s_c_div(_40,aid,_41,_42){
var d=document.createElement("DIV");
d.setAttribute("id",aid);
d.setAttribute("style",_41);
d.innerHTML=_42?_42:"";
_40.appendChild(d);
return d;
};
document.s_s_c_loadprocess=function(){
var _43=setInterval(function(){
if((document.readyState!="loaded")&&(document.readyState!="complete")&&(document.readyState!="interactive")){
return;
}
if(s_s_c_load_counter>20){
alert("KeyCAPTCHA: Please set correct value of \"post button\" id or name, button with id or name \""+s_s_c_submit_button_id+"\" is not found!");
return;
}
var _44=s_s_c_isFlash();
var _45=document.getElementById("s_s_c_loader_b");
if(!_44){
_45=document.getElementById("daba8521d09ae62b725f41456dd66cc");
}
if((_45==undefined)||(_45==null)){
return;
}
clearInterval(_43);
if(document.s_s_c_already_loaded){
return;
}
document.s_s_c_already_loaded=true;
var _46=s_s_c_submit_button_id.split(",");
var cik=0;
var f=s_s_c_get_form();
var inp=document.getElementById(s_s_c_captcha_field_id);
inp.value="1|2|3|4|5";
for(cik=0;cik<_46.length;cik++){
var _47=_46[cik].split("-#-");
var _48=_47[0];
try{
if((f.elements[_48])&&(_47.length>1)){
var _49=f.elements[_48];
}else{
var _49=document.getElementById(_48);
if(_49==undefined){
continue;
}
}
}
catch(err){
var _49=document.getElementById(_48);
if(_49==undefined){
continue;
}
}
if(_49!=undefined){
try{
if(document.s_s_c_bl_buttons!=undefined){
if(document.s_s_c_bl_buttons.indexOf(","+_49.id+",")!=-1){
continue;
}
if(document.s_s_c_bl_buttons.indexOf(","+_49.name+",")!=-1){
continue;
}
}
}
catch(err){
}
}
if(_47.length>1){
if(_47[1].indexOf("r")>=0){
_49.s_s_c_refresh_success=true;
}
}
s_s_c_buts[s_s_c_buts.length]=_49;
}
try{
if(document.s_s_c_without_submit_search){
}else{
for(cik=0;cik<f.elements.length;cik++){
if((f.elements[cik].type=="submit")||(f.elements[cik].type=="SUBMIT")){
try{
if(document.s_s_c_bl_buttons!=undefined){
if(document.s_s_c_bl_buttons.indexOf(","+_49.id+",")!=-1){
continue;
}
if(document.s_s_c_bl_buttons.indexOf(","+_49.name+",")!=-1){
continue;
}
}
}
catch(err){
}
s_s_c_buts[s_s_c_buts.length]=f.elements[cik];
}
}
}
}
catch(err){
}
if(s_s_c_buts.length==0){
s_s_c_load_counter++;
return;
}
if(!s_s_c_isMobileBrowser){
s_s_c_set_events();
setInterval(s_s_c_set_events,2000);
_45.refreshtimer=setInterval(s_s_c_loadcaptcha,300000);
}
d9b823d6c2bffe324b4c2dfaa();
},500);
};
var s_s_c_onload=function(_4a,_4b,_4c){
document.s_s_c_prom=0;
if(_4b){
s_s_c_captcha_field_id=_4b;
}
if(_4c){
s_s_c_submit_button_id=_4c;
}
var _4d=s_s_c_isFlash();
for(var i=0;i<s_s_c_buts.length;i++){
if(s_s_c_buts[i].s_s_c_onclick_old){
s_s_c_buts[i].onclick=s_s_c_buts[i].s_s_c_onclick_old;
}
}
s_s_c_buts=Array();
var _4e=document.getElementById("div_for_keycaptcha");
if((_4e)&&(!document.kc_show_gad)){
if(_4e.innerHTML.length>300){
_4e.innerHTML="";
}
}
if(_4a){
document.s_s_c_already_loaded=false;
if(_4e){
_4e.parentNode.removeChild(_4e);
}
document.s_s_c_element=document.getElementById(_4a);
if(document.s_s_c_element.getElementsByClassName("keycaptcha-root").length==0){
alert("Element with keycaptcha-root class not found in parent DIV");
console.log("Element with keycaptcha-root class not found in parent DIV");
return;
}
document.s_s_c_element.getElementsByClassName("keycaptcha-root")[0].innerHTML="<div id=\"div_for_keycaptcha\"></div>";
}else{
if(!document.s_s_c_element){
document.s_s_c_element=document;
}else{
if((document.s_s_c_element!=document)&&(document.s_s_c_element.getElementsByClassName("keycaptcha-root").length>0)){
if(_4e){
_4e.parentNode.removeChild(_4e);
}
document.s_s_c_element.getElementsByClassName("keycaptcha-root")[0].innerHTML="<div id=\"div_for_keycaptcha\"></div>";
}else{
alert("Element with keycaptcha-root class not found in parent DIV");
console.log("Element with keycaptcha-root class not found in parent DIV");
return;
}
}
}
if(document.s_s_c_oldmm==undefined){
if(document.onmousemove!=undefined){
document.s_s_c_oldmm=document.onmousemove;
}else{
document.s_s_c_oldmm=function(e){
};
}
document.onmousemove=function(e){
document.s_s_c_mX=s_s_c_mouseX(e);
document.s_s_c_mY=s_s_c_mouseY(e);
if(document.s_s_c_oldmm){
document.s_s_c_oldmm(e);
}
};
}
var _4f=document.getElementById("div_for_keycaptcha");
var _50=(document.s_s_c_nonoverflowstyle==1)?"overflow:hidden;":"";
s_s_c_div(_4f,"s_s_c_flashcap","border:0px; padding:0; margin:0; display:none;","").s_s_c_fpid="#flash_params_id#";
if(_4d){
var _51=((navigator.userAgent.indexOf("Opera")!=-1)||(navigator.appVersion.indexOf("MSIE")!=-1))?"width:375px; height:180px;":"width:20px; height:20px;";
s_s_c_div(_4f,"s_s_c_loader_b","border:0px; padding:0; margin:0; position:relative;"+_51+_50,"<img id=\"s_s_c_loading\" style=\"position:absolute; top:0px; left:0px; background:none;\" src=\"https://back16.keycaptcha.com/js/blank.gif\"><span id=\"s_s_c_pleasewait\"></span><div id=\"s_s_c_intloader\" style=\"border:0px; padding:0; margin:0;\">&nbsp;</div>");
}else{
s_s_c_div(_4f,"daba8521d09ae62b725f41456dd66cc","width:20px; height:20px; border:0px; padding:0; margin:0; position:relative;"+_50,"");
}
var _52=document.createElement("EMBED");
_52.setAttribute("type","application/x-shockwave-flash");
_52.setAttribute("allowScriptAccess","always");
_52.setAttribute("allowfullscreen","false");
_52.setAttribute("menu","false");
_52.setAttribute("name","s_s_c_flogo");
_52.setAttribute("wmode","transparent");
_52.setAttribute("loop","true");
_52.setAttribute("play","true");
_52.setAttribute("width","1px");
_52.setAttribute("height","1px");
_52.setAttribute("bgcolor","#ffffff");
_52.setAttribute("scale","showall");
_52.setAttribute("pluginspage","https://www.adobe.com/go/getflashplayer");
_52.setAttribute("id","s_s_c_flogo");
_52.setAttribute("src","https://back16.keycaptcha.com/js/keycaptcha-logo?r="+Math.random());
var d=s_s_c_div(document.getElementById("div_for_keycaptcha"),"s_s_c_flogod","display:block;","");
d.appendChild(_52);
document.s_s_c_loadprocess();
};
function s_s_c_get_form(){
return document.getElementById(s_s_c_captcha_field_id).form;
};
d9b823d6c2bffe324b4c2dfaa=function(){
var f=document.createElement("iframe");
f.style.width="1px";
f.style.height="1px";
f.style.display="inline";
f.style.border="0";
f.setAttribute("id","c842fbbe1f88890adc4c54d6459fedf");
f.setAttribute("frameBorder","0");
document.getElementsByTagName("body").item(0).appendChild(f);
var _53=function(){
setTimeout(function(){
try{
document.getElementsByTagName("body").item(0).removeChild(document.getElementById("c842fbbe1f88890adc4c54d6459fedf"));
}
catch(err){
}
},500);
document.dn3iufwwoi4="287e7e22d22d87b196857a2eb402871848a7dde6";
setTimeout(function(){
if(document.s_s_c_needloadcap){
document.s_s_c_needloadcap=false;
s_s_c_loadcaptcha();
}
},500);
document.s_s_c_needloadcap=true;
};
if(f.addEventListener){
f.addEventListener("load",_53,false);
}else{
if(f.attachEvent){
f.attachEvent("onload",_53);
}
}
f.setAttribute("src","https://back16.keycaptcha.com/swfs/ckf");
};
var fce0ab1d1be491313de4d7865ea3a=function(){
if(document.s_s_c_refresh_after_post){
setTimeout(s_s_c_loadcaptcha,5000);
}
var inp=document.getElementById(s_s_c_captcha_field_id);
if(inp.s_s_c_onclick_old){
inp.s_s_c_onclick_htmlbut.onclick=inp.s_s_c_onclick_old;
}else{
inp.s_s_c_onclick_htmlbut.onclick=function(){
return;
};
}
setTimeout(s_s_c_submit_t2,100);
setTimeout(s_s_c_hide_popup,500);
};
var s_s_c_submit_t2=function(){
try{
if(document.s_s_c_additionalcheck){
return document.s_s_c_additionalcheck();
}
}
catch(err){
}
var b=document.getElementById(s_s_c_captcha_field_id).s_s_c_onclick_htmlbut;
try{
b.click();
}
catch(err){
if(b.onclick){
b.onclick();
}else{
alert("Error on clicking at "+b.id);
}
}
};
var s_s_c_set_events=function(){
var inp=document.getElementById(s_s_c_captcha_field_id);
if((inp==null)||(inp==undefined)){
return;
}
if((inp.s_s_c_captcha_checked)||(inp.s_s_c_check_process)){
return;
}
for(var cik=0;cik<s_s_c_buts.length;cik++){
if((s_s_c_buts[cik]==undefined)||(s_s_c_buts[cik]==null)){
continue;
}
try{
if((s_s_c_buts[cik].onclick!=undefined)&&(s_s_c_buts[cik].s_s_c_onclick_old==undefined)&&(s_s_c_buts[cik].onclick!=s_s_c_onclick)){
s_s_c_buts[cik].s_s_c_onclick_old=s_s_c_buts[cik].onclick;
}
}
catch(err){
continue;
}
s_s_c_buts[cik].onclick=s_s_c_onclick;
}
};
function s_s_c_setnewws(aWS,_54,_55){
s_s_c_web_server_sign3=aWS;
};
function s_s_c_setsize(aw,ah){
if(document.getElementById("s_s_c_loader_b")==undefined){
var _56=document.getElementById("daba8521d09ae62b725f41456dd66cc");
}else{
var _56=document.getElementById("s_s_c_loader_b");
}
_56.style.width=aw+"px";
_56.style.height=ah+"px";
document.getElementById("s_s_c_wrong_div").style.width=aw+"px";
document.getElementById("s_s_c_checked_div").style.width=aw+"px";
document.getElementById("s_s_c_please_wait_div").style.width=aw+"px";
if(document.getElementById("s_s_c_loading")!=undefined){
document.getElementById("s_s_c_loading").style.display="none";
}
};
var daba8521d09ae62b725f41456dd66ccf1=function(){
var _57=function(e){
if(e==undefined){
return 0;
}
if((e.childNodes==undefined)||(e.childNodes.length==0)){
return 1;
}
var cnt=0;
for(var ci in e.childNodes){
cnt=cnt+_57(e.childNodes[ci]);
}
return cnt;
};
return _57(document.body);
};
function s_s_c_onovercaptcha(){
var _58=s_s_c_isFlash();
var _59=document.getElementById("s_s_c_loader_b");
if(!_58){
_59=document.getElementById("daba8521d09ae62b725f41456dd66cc");
}
if((_59==null)||(_59==undefined)){
return;
}
if(_59.refreshcount>3){
_59.refreshcount=1;
s_s_c_loadcaptcha();
_59.refreshtimer=setInterval(s_s_c_loadcaptcha,300000);
}else{
clearInterval(_59.refreshtimer);
_59.refreshtimer=setInterval(s_s_c_loadcaptcha,300000);
}
_59.refreshcount=1;
};
var daba8521d09ae62b725f41456dd66ccc1=function(){
return 1;
};
function s_s_c_get_exec_function(){
var inp=document.getElementById(s_s_c_captcha_field_id);
if((inp!=undefined)&&(inp.s_s_c_do_post==true)){
inp.s_s_c_do_post=false;
return "dopost";
}
return "";
};
document.s_s_c_FlashIfAvailable=false;
s_s_c_web_server_sign4="de686aa47fd73fc00a3126604ade59c5";
document.dn3iufwwoi4=s_s_c_web_server_sign4;
if(!document.s_s_c_popupmode){
document.s_s_c_popupmode=false;
}
s_s_c_get_exec_function();
document.s_s_c_checkads= true;
document.kc_show_gad=true;
		if ( document.kc_show_gad ) {
			document.write( '<sc' + 'ript type="text/javascript">google_ad_client = "ca-pub-0509029689066994";google_ad_slot = "4061203050";google_ad_width = 468;google_ad_height = 60;</s'+'cript>' );
			document.write( '<div id="kc_ga_div" style="display:none;"><sc' + 'ript type="text/javascript" src="https://pagead2.googlesyndication.com/pagead/show_ads.js"> </s'+'cript></div>' );}
if(!document.s_s_c_do_not_auto_show){
s_s_c_onload();
}

