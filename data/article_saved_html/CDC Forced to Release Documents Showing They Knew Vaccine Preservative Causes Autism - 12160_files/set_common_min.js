if(!dojo.hostenv.findModule("xg.shared.util",false)){
dojo.provide("xg.shared.util");
xg.append=function(_1){
return (document.getElementById("xj_baz17246")||document.body).appendChild(_1);
};
xg.listen=function(_2,_3,_4,_5){
dojo.event.connect("string"==_2?dojo.byId(_2):_2,_3,"function"==typeof _4?_4:function(){
_5.apply(_4,arguments);
});
};
xg.stop=function(_6){
dojo.event.browser.stopEvent(_6);
};
xg.qh=function(_7){
if(typeof (_7)==="undefined"){
xg.shared.util.consoleLog("undefined was passed to xg.qh() (BAZ-32577)");
if(window.console&&window.console.trace){
window.console.trace();
}
return "";
}
return _7.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;");
};
xg.toggle=function(_8,_9){
_8=dojo.byId(_8);
if(arguments.length==1){
_9=(_8.style.display=="none");
}
_8.style.display=_9?"":"none";
};
xg.$=function(_a,_b){
if(_a.substr(0,1)=="#"){
return dojo.byId(_a.substr(1));
}
return xg.$$(_a,_b)[0];
};
xg.$$=function(_c,_d){
if(_c.substr(0,1)=="#"){
return [dojo.byId(_c.substr(1))];
}
_c=_c.split(".",2);
if("string"==typeof _d){
_d=document.getElementById(_d);
}
if(!_c[1]){
return (_d||document.body).getElementsByTagName(_c[0]);
}
return dojo.html.getElementsByClass(_c[1],_d,_c[0]);
};
xg.parent=function(el,_f){
_f=(_f||"").split(".");
var tag=_f[0].toUpperCase();
var cls=_f[1]?new RegExp("(^|\\s+)"+_f[1]+"(\\s+|$)"):"";
while(el=el.parentNode){
if((!tag||el.tagName==tag)&&(!cls||el.className.match(cls))){
return el;
}
}
return null;
};
xg._xhr=function(_12,url,_14,cb1,cb2,_17){
cb1=cb1||function(){
};
var req={url:url,method:_12,encoding:"utf-8",mimetype:"text/plain",load:function(_19,ret,_1b){
"function"==typeof cb1?cb1(_1b,ret):cb2.call(cb1,_1b,ret);
},error:_17};
if(_14){
if(_14.constructor!=Object){
req.formNode=_14;
}else{
if("undefined"!=typeof _14["preventCache"]){
req.preventCache=_14["preventCache"];
delete _14["preventCache"];
}
if("undefined"!=typeof _14["formNode"]){
req.formNode=_14["formNode"];
delete _14["formNode"];
}
req.content=_14;
}
}
return dojo.io.bind(req);
};
xg.get=function(url,_1d,cb1,cb2,_20){
return xg._xhr("get",url,_1d,cb1,cb2,_20);
};
xg.post=function(url,_22,cb1,cb2,_25){
return xg._xhr("post",url,_22,cb1,cb2,_25);
};
xg.linkify=function(_26,_27){
if(!_26.match(/http|ftp|www|HTTP|FTP|WWW/)){
return _26;
}
var _28=(null==_27)?"":" target=\""+_27+"\"";
var _29="(http|ftp|https):\\/\\/";
var _2a="[\\w\\-]+(\\.[\\w\\-]+)+";
var _2b="([\\w\\-\\.;,@?^=%&:\\/~\\+#]*[\\w\\-\\@?^=%&\\/~\\+#])?";
var _2c="(^|\\W)("+_29+_2a+_2b+")";
var _2d=_26.replace(new RegExp(_2c,"gi"),"$1<a href=\"$2\""+_28+">$2</a>");
_2a="www(\\.[\\w]+)+";
_2c="(^|[^/\\w])("+_2a+_2b+")";
_2d=_2d.replace(new RegExp(_2c,"gi"),"$1<a href=\"http://$2\""+_28+">$2</a>");
return _2d;
};
xg.preventDefault=function(_2e,_2f){
return function(_30){
_30.preventDefault();
if(_2f){
_30.stopPropagation();
}
_2e();
};
};
xg.renderHtml=function(_31,_32){
for(var i in _32){
if(_32.hasOwnProperty(i)){
_31=_31.replace(new RegExp("{"+i+"}","g"),_32[i]);
}
}
return _31;
};
xg.shared.util={ignoreOverlayHide:false,chatAppletContainerVisible:undefined,createElement:function(_34){
var el=document.createElement("div");
el.innerHTML=_34.replace(/^\s+/,"").replace(/\s+$/,"");
return el.firstChild||undefined;
},getOffset:function(el,_37){
var x=0,y=0;
var _3a=[];
for(;_37;_37=_37.parentNode){
_3a.push(_37);
}
for(var cur=el;cur;cur=cur.offsetParent){
var p=dojo.style.getStyle(cur,"position");
if(p=="relative"||p=="absolute"){
var _3d=0;
for(var i=0;i<_3a.length;i++){
if(cur==_3a[i]){
_3d=1;
break;
}
}
if(_3d){
break;
}
}
x+=cur.offsetLeft||0;
y+=cur.offsetTop||0;
if(cur.tagName=="BODY"){
break;
}
}
return {x:x,y:y};
},getOffsetX:function(el,_40){
var e=x$(el).offset(),n=x$(_40).offset();
return {x:e.left-n.left,y:e.top-n.top};
},_widgetParsingStrategy:0,safeBindUrl:function(url){
return url.replace(/\[/g,"%5B").replace(/\]/g,"%5D");
},isValidUrl:function(str){
var _45=/^(ftp|https?):\/\/(\w+(:\w*)?@?)?([a-zA-Z0-9_.-]+)(:\d+)?(\/([\w#!:.?+=&%@!\/-]*)?)?$/;
return _45.test(str);
},parseUrlParameters:function(url){
url=url+"";
var _47=url.split("?");
var _48=new Object;
if(_47.length>1){
var _49=_47[1].split("&");
for(var idx=0;idx<_49.length;idx++){
var kv=_49[idx].split("=");
_48[kv[0]]=kv[1];
}
}
return _48;
},parseWidgets:function(_4c){
var _4c=_4c||document.getElementsByTagName("body")[0]||document.body;
var _4d=new dojo.xml.Parse();
var _4e=_4d.parseElement(_4c,null,true);
dojo.widget.getParser().createComponents(_4e);
},fixImagesInIE:function(_4f,_50,_51,_52){
if(!(dojo.render.html.ie50||dojo.render.html.ie55||dojo.render.html.ie60)){
return;
}
dojo.lang.forEach(_4f,function(img){
if(dojo.lang.inArray(xg.shared.util.fixedImageURLs,img.src)){
return;
}
var _54=function(){
var _55=new Image();
_55.onload=_55.onerror=_55.onabort=function(){
img.src=img.src;
xg.shared.util.fixTransparencyInIEProper(img,_51,_52);
xg.shared.util.fixedImageURLs.push(img.src);
};
_55.src=img.src;
};
if(_50){
_54();
}else{
window.setTimeout(_54,0);
}
});
},fixedImageURLs:[],fixTransparencyInIEProper:function(img,_57,_58){
if(img&&(dojo.render.html.ie50||dojo.render.html.ie55||dojo.render.html.ie60)&&img.src.match(/png/)&&dojo.style.isShowing(img)){
_57=_57?_57:img.width;
_58=_58?_58:img.height;
img.style.width=_57+"px";
img.style.height=_58+"px";
img.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+img.src+"', sizingMethod='scale')";
img.src=xg.shared.util.cdn("/xn_resources/widgets/index/gfx/x.gif");
}
if(img){
img.style.visibility="visible";
}
},fixTransparencyInIE:function(_59){
if(dojo.render.html.ie50||dojo.render.html.ie55||dojo.render.html.ie60){
dojo.lang.forEach(_59.getElementsByTagName("img"),function(img){
xg.shared.util.fixTransparencyInIEProper(img);
});
}
},fixDialogPosition:function(dlg){
var _5c=xg.$("div.xg_floating_container",dlg);
var vh=parseInt(dojo.html.getViewportHeight(),10);
_5c.style.height="auto";
_5c.style.overflow="visible";
var h=parseInt(_5c.offsetHeight,10);
if(h>vh*0.9){
_5c.style.height=parseInt(vh*0.9,10)+"px";
_5c.style.overflow="auto";
}
var drh=dojo.render.html;
_5c.style.marginTop=(drh.ie&&(drh.ie60||drh.ie55||drh.ie50)?0:-parseInt(_5c.offsetHeight/2,10))+"px";
},nl2br:function(s,_61){
s=s.replace(/\r\n/g,"\n");
result="";
dojo.lang.forEach(s.split("\n"),function(_62){
if(!_62.match(/<.?OBJECT\b|<.?EMBED\b|<.?PARAM\b|<.?APPLET\b|<.?IFRAME\b|<.?SCRIPT\b|<.?BR\b|<.?ADDRESS\b|<.?BLOCKQUOTE\b|<.?CENTER\b|<.?DIR\b|<.?DIV\b|<.?DL\b|<.?FIELDSET\b|<.?FORM\b|<.?H1\b|<.?H2\b|<.?H3\b|<.?H4\b|<.?H5\b|<.?H6\b|<.?HR\b|<.?ISINDEX\b|<.?MENU\b|<.?NOFRAMES\b|<.?NOSCRIPT\b|<.?OL\b|<.?P\b|<.?PRE\b|<.?TABLE\b|<.?UL\b|<.?DD\b|<.?DT\b|<.?FRAMESET\b|<.?LI\b|<.?TBODY\b|<.?TD\b|<.?TFOOT\b|<.?TH\b|<.?THEAD\b|<.?TR\b/i)){
if(_61){
result+="<p>"+_62+"</p>";
}else{
result+=_62+"<br />";
}
}else{
result+=_62;
}
result+="\n";
});
return dojo.string.trim(result).replace(/(<br \/>)+$/,"");
},showOverlay:function(){
var o=dojo.byId("xg_overlay");
if(o.style.display=="none"){
o.style.height=this.getPageHeight()+"px";
o.style.display="block";
}
xg.shared.util.chatAppletContainerVisible=x$("#appletContainer").css("visibility");
x$("#appletContainer").css("visibility","hidden");
},hideOverlay:function(){
if(xg.shared.util.ignoreOverlayHide==true){
return;
}
var o=dojo.byId("xg_overlay");
if(o.style.display!="none"){
o.style.display="none";
}
if(typeof xg.shared.util.chatAppletContainerVisible!="undefined"){
x$("#appletContainer").css("visibility",xg.shared.util.chatAppletContainerVisible);
}
},getPageHeight:function(){
var _65;
if(window.innerHeight&&window.scrollMaxY){
_65=window.innerHeight+window.scrollMaxY;
}else{
if(document.body.scrollHeight>document.body.offsetHeight){
_65=document.body.scrollHeight;
}else{
_65=document.body.offsetHeight;
}
}
var _66;
if(self.innerHeight){
_66=self.innerHeight;
}else{
if(document.documentElement&&document.documentElement.clientHeight){
_66=document.documentElement.clientHeight;
}else{
if(document.body){
_66=document.body.clientHeight;
}
}
}
if(_65<_66){
pageHeight=_66;
}else{
pageHeight=_65;
}
return pageHeight;
},setMaxLength:function(_67,_68){
x$(_67).bind("keypress",function(e){
var key=e.which||e.keyCode;
if(key!=8&&key!=46&&key!=37&&key!=39&&key!=38&&key!=40&&_67.value.length>=_68){
e.preventDefault();
}
});
},setAdvisableMaxLength:function(_6b,_6c,_6d,_6e,_6f,_70){
if(!_6e){
_6e=function(){
return _6b.value;
};
}
var _71=0,_72=_6b.parentNode,_73=function(){
if(_6e().length>_6c){
_6f.innerHTML=xg.shared.nls.text("messageIsTooLong",_6e().length,_6c);
dojo.html.addClass(_6f,"hint_textarea");
if(!_71){
dojo.html.addClass(_6b.parentNode,"error");
dojo.html.addClass(_6f,"error");
}
_71=1;
}else{
dojo.html.removeClass(_6f,"hint_textarea");
if(_71){
_6f.innerHTML=_6d||"";
dojo.html.removeClass(_6b.parentNode,"error");
dojo.html.removeClass(_6f,"error");
}
_71=0;
}
if(xg.shared.util.maxAdvisableLengthTimer!=null){
clearTimeout(xg.shared.util.maxAdvisableLengthTimer);
xg.shared.util.maxAdvisableLengthTimer=null;
}
};
if(!_6f){
_6f=document.createElement("small");
_6b.nextSibling?_72.insertBefore(_6f,_6b.nextSibling):_72.appendChild(_6f,_6b);
}
dojo.html.addClass(_6f,"maxlength_advisement");
_6f.innerHTML=_6d||"";
var _74=this.addOnChange(_6b,_73,_70);
return _74.trigger;
},maxAdvisableLengthTimer:null,setAdvisableMaxLengthWithCountdown:function(_75,_76,_77,_78){
var _79=0;
if("undefined"==typeof _77){
_77=dojo.dom.nextElement(_75,"span");
}
var _7a=_75.id+"_chars_left";
var _7b=dojo.byId(_7a);
var _7c=function(){
var n=_76-_75.value.replace(/\r\n/g,"\n").length;
if(!_78||n<0){
if(!_7b){
_7b=document.createElement("small");
x$(_7b).addClass("right");
_7b.id=_7a;
_77.appendChild(_7b);
}
}
if(_7b){
if(n>=0){
_7b.innerHTML="&nbsp;"+n;
}else{
_7b.innerHTML="&nbsp;-"+Math.abs(n);
}
}
if(_75.value.length>_76){
if(!_79){
dojo.html.addClass(_7b.parentNode,"simpleerrordesc");
}
_79=1;
}else{
if(_79){
dojo.html.removeClass(_7b.parentNode,"simpleerrordesc");
}
_79=0;
}
};
this.addOnChange(_75,_7c);
_7c();
return _7c;
},addOnChange:function(_7e,_7f,_80){
var _81=this.createQuiescenceTimer(_80||50,_7f);
dojo.event.connect(_7e,"onkeyup",_81.trigger);
dojo.event.connect(_7e,"onkeypress",_81.trigger);
dojo.event.connect(_7e,"onblur",_81.trigger);
dojo.event.connect(_7e,"oncut",_81.trigger);
dojo.event.connect(_7e,"onpaste",_81.trigger);
dojo.event.connect(_7e,"onchange",_81.trigger);
return _81;
},modalDialog:function(_82){
x$(".xg_floating_module").remove();
x$(".dy-modal").remove();
if((typeof _82)=="string"){
args={bodyHtml:_82};
}else{
args=_82;
}
var _83=args.wideDisplay?" dy-modal-wide":"";
var _84=args.title?"<h3>"+xg.qh(args.title)+"</h3>":"";
var _85=args.titleHtml?args.titleHtml:_84;
var _86=args.bodyHtml;
var _87=" <div> <div class=\"xg_floating_container dy-modal"+_83+"\">     <div class=\"dy-modal-close\">         <a class=\"xg_close xj_close\" href=\"#\">"+xg.shared.nls.text("close")+"</a>     </div>     <div class=\"module\"> "+_85+"         <div class=\"form\"> "+_86+"         </div>     </div> </div> </div>";
var _88=x$(_87)[0];
this.showOverlay();
xg.append(_88);
this.fixDialogPosition(_88);
if(args.noClose){
x$(".dy-modal-close",_88).hide();
}else{
x$(".xj_close",_88).click(function(_89){
_89.preventDefault();
if(x$(this).hasClass("disabled")){
return;
}
xg.shared.util.hideOverlay();
x$(_88).remove();
});
}
return _88;
},alert:function(_8a){
if(dojo.byId("xg_lightbox_alert")){
dojo.dom.removeNode(dojo.byId("xg_lightbox_alert"));
}
if((typeof _8a)=="string"){
args={bodyHtml:_8a};
}else{
args=_8a;
}
args.onOk=args.onOk?args.onOk:function(){
};
args.autoCloseTime=args.autoCloseTime?args.autoCloseTime:0;
if(!args.okButtonText){
args.okButtonText=xg.shared.nls.text("ok");
}
var _8b=args.wideDisplay?" xg_floating_container_wide":"";
var _8c=args.customDisplayClass?" "+args.customDisplayClass:"";
var _8d=args.title?"<h2>"+dojo.string.escape("html",args.title)+"</h2>":null;
var _8e=args.titleHtml?args.titleHtml:_8d;
var _8f=args.noHeader?args.noHeader:false;
var _90=dojo.string.trim("                 <div class=\"xg_floating_module\" id=\"xg_lightbox_alert\">                     <div class=\"xg_floating_container xg_lightborder xg_module"+_8b+_8c+"\">                         "+(_8f?"":"<div class=\"xg_module_head "+(_8e?"":"notitle")+"\">                             "+(_8e?_8e:"")+"                         </div>")+"                         <div class=\"xg_module_body\"> "+((args.bodyHtmlRaw)?(args.bodyHtmlRaw):("<p>"+args.bodyHtml+"</p>")));
if(args.autoCloseTime<1&&!args.noButtons){
_90+=dojo.string.trim("                             <p class=\"buttongroup\">                                 <input type=\"button\" class=\"button\" value=\""+dojo.string.escape("html",args.okButtonText)+"\" />                             </p>");
}
_90+=dojo.string.trim("                         </div>                     </div>                 </div>");
var _91=dojo.html.createNodesFromText(_90)[0];
this.showOverlay();
xg.append(_91);
this.fixDialogPosition(_91);
if(args.noClose||args.autoCloseTime<1){
if(!args.noButtons){
dojo.event.connect(dojo.html.getElementsByClass("button",_91)[0],"onclick",dojo.lang.hitch(this,function(_92){
dojo.event.browser.stopEvent(_92);
if(!args.noClose){
dojo.dom.removeNode(_91);
this.hideOverlay();
}
args.onOk(_91);
}));
}
}else{
setTimeout(dojo.lang.hitch(this,function(){
dojo.dom.removeNode(_91);
this.hideOverlay();
args.onOk(_91);
}),args.autoCloseTime);
}
return _91;
},progressDialog:function(_93){
if(dojo.byId("xg_lightbox_alert")){
dojo.dom.removeNode(dojo.byId("xg_lightbox_alert"));
}
var _94=dojo.string.trim("                 <div class=\"xg_floating_module\" id=\"xg_lightbox_alert\">                     <div class=\"xg_floating_container xg_lightborder\">                         <div class=\"xg_module_head "+(_93.title?"":"notitle")+"\">                             "+(_93.title?"<h2>"+dojo.string.escape("html",_93.title)+"</h2>":"")+"                         </div>                         <div class=\"xg_module_body\">                             <p class=\"spinner\">"+_93.bodyHtml+"</p>                         </div>                     </div>                 </div>");
var _95=dojo.html.createNodesFromText(_94)[0];
this.showOverlay();
xg.append(_95);
this.fixDialogPosition(_95);
return {hide:dojo.lang.hitch(this,function(){
dojo.dom.removeNode(_95);
this.hideOverlay();
})};
},showDialogAndRedirect:function(_96){
if(dojo.byId("xg_lightbox_alert")){
dojo.dom.removeNode(dojo.byId("xg_lightbox_alert"));
}
var _97=dojo.string.trim("                 <div class=\"xg_floating_module\" id=\"xg_lightbox_alert\">                     <div class=\"xg_floating_container xg_lightborder\">                         <div class=\"xg_module_head "+(_96.title?"":"notitle")+"\">                             "+(_96.title?"<h2>"+dojo.string.escape("html",_96.title)+"</h2>":"")+"                         </div>                         <div class=\"xg_module_body\">                             <p>"+_96.bodyHtml+"</p>                         </div>                     </div>                 </div>");
var _98=dojo.html.createNodesFromText(_97)[0];
this.showOverlay();
xg.append(_98);
window.location=_96.target;
},confirm:function(_99){
_99.title=_99.title?_99.title:xg.shared.nls.text("confirmation");
_99.okButtonText=_99.okButtonText?_99.okButtonText:xg.shared.nls.text("ok");
if(!_99.cancelButtonText){
_99.cancelButtonText=xg.shared.nls.html("cancel");
}
_99.onOk=_99.onOk?_99.onOk:function(){
};
_99.onCancel=_99.onCancel?_99.onCancel:function(){
};
if(_99.bodyText){
_99.bodyHtml="<p>"+dojo.string.escape("html",_99.bodyText)+"</p>";
}
var _9a=_99.wideDisplay?" xg_floating_container_wide":"";
var _9b=dojo.html.createNodesFromText(dojo.string.trim("                <div class=\"xg_floating_module\">                     <div class=\"xg_floating_container xg_lightborder"+_9a+"\">                         <div class=\"xg_module_head\">                             <h2>"+((_99.titleHtml)?(_99.titleHtml):(dojo.string.escape("html",_99.title)))+"</h2>                         </div>                         <div class=\"xg_module_body\">                             <form>                                 <input type=\"hidden\" name=\"xg_token\" value=\""+xg.token+"\" />                                  "+_99.bodyHtml+"                                  <p class=\"buttongroup\">                                      <input type=\"submit\" class=\"button action-primary\" value=\""+dojo.string.escape("html",_99.okButtonText)+"\"/> "+(_99.extraButton&&_99.extraButton.title?"<a class=\"xj_custom action-secondary\" href=\"#\">"+_99.extraButton.title+"</a> ":"")+("<a class=\"xj_cancel action-secondary\" href=\"#\">"+_99.cancelButtonText+"</a>")+"</p>                             </form>                         </div>                     </div>                 </div>"))[0];
if(!_99.noOverlay){
this.showOverlay();
}
xg.append(_9b);
this.fixDialogPosition(_9b);
var _9c="<iframe id=\"confirm_iframe\" src=\"about:blank\" scrolling=\"no\" frameborder=\"0\" />";
var _9d=this.getPositionedAndSizedIframe(_9c,_9b).appendTo("body");
var _9e=function(){
dojo.dom.removeNode(_9d[0]);
};
this.applyStyleArgsToDialog(_99,_9b);
this.applyStyleArgsToDialog(_99,_9d,_9b);
xg.listen(xg.$(".xj_cancel",_9b),"onclick",this,function(_9f){
xg.stop(_9f);
xg.shared.util.hideOverlay();
_9e();
dojo.dom.removeNode(_9b);
if(_99.onCancel){
_99.onCancel(_9b);
}
});
if(_99.extraButton&&_99.extraButton.title){
xg.listen(xg.$(".xj_custom",_9b),"onclick",this,function(){
xg.shared.util.hideOverlay();
_9e();
dojo.dom.removeNode(_9b);
if(_99.extraButton.onClick){
_99.extraButton.onClick(_9b);
}
});
}
xg.listen(xg.$("form",_9b),"onsubmit",this,function(_a0){
xg.stop(_a0);
if(_99.closeOnlyIfOnOk){
if(_99.onOk(_9b)){
xg.shared.util.hideOverlay();
_9e();
dojo.style.hide(_9b);
}
}else{
xg.shared.util.hideOverlay();
_9e();
dojo.style.hide(_9b);
_99.onOk(_9b);
}
});
return _9b;
},getPositionedAndSizedIframe:function(_a1,_a2){
var _a3=x$(".xg_floating_container",_a2);
var _a4=x$(_a1).css({"position":"fixed","top":"50%","left":"50%","filter":"progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)","width":_a3.outerWidth(),"height":_a3.outerHeight()-2,"margin-left":-(_a3.outerWidth()/2)+7,"margin-top":-(_a3.outerHeight()/2),"z-index":_a3.parent().css("z-index")-1});
return _a4;
},dropdownMenu:function(_a5){
var _a6=_a5.hideDelay?_a5.hideDelay:1000;
var _a7=x$(_a5.srcNode);
var _a8=x$(_a5.menuNode);
var _a9=_a5.srcActiveClass?_a5.srcActiveClass:"";
var _aa=_a5.offsetX?parseInt(_a5.offsetX,10):0;
var _ab=_a5.offsetY?parseInt(_a5.offsetY,10):0;
var _ac=_a5.zIndex?_a5.zIndex:"100";
if(_a5.removeExisting){
x$(".dropdown_menu").remove();
}
_a7.addClass("dropdown_link");
_a8.addClass("xg_floating_container dropdown_menu");
if(!_a7.find(".downarrow")[0]){
_a7.append("<span class=\"downarrow xg_sprite xg_sprite-caret-down xg_lightborder\">&#9660;</span>");
}
if(x$("#xg_themebody").length>0){
if(!_a8.parent().is("#xg_themebody")){
_a8.appendTo("#xg_themebody");
}
}else{
if(!_a8.parent().is("body")){
_a8.appendTo("body");
}
}
_a8.hide();
var _ad=function(){
_a8.hide();
_a7.removeClass(_a9);
};
var _ae=function(_af){
if(_a8[0].timer){
clearTimeout(_a8[0].timer);
_a8[0].timer=null;
}
if(_a8.is(":visible")){
return;
}
x$(".dropdown_menu").hide();
var o=_a7.offset();
_a7.addClass(_a9);
_a8.css({"z-index":_ac,"position":"absolute","top":(o.top+_a7.outerHeight())+"px"});
if(_a5.align=="right"){
_a8.css({"right":(o.left+_a7.width()-_aa)+"px"});
}else{
_a8.css({"left":(o.left+_aa)+"px"});
}
_a8.show();
if(_af=="hover"){
_a8.mouseout(function(_b1){
if(_b1.relatedTarget==_a7[0]){
return;
}
this.timer=setTimeout(function(){
_ad();
},_a5.hideDelay);
});
_a8.mouseover(function(_b2){
if(this.timer){
clearTimeout(this.timer);
this.timer=null;
}
});
}
if(_af=="click"){
var _b3=true;
var _b4=function(_b5){
if(_b3){
_b3=false;
return;
}
var _b6=x$(_b5.target);
if(_b6.hasClass("dropdown_menu")||_b6.parents(".dropdown_menu")[0]){
return;
}
x$("body").unbind("click",_b4);
_ad();
};
x$("body").click(_b4);
}
};
if(_a5.showOnClick){
_a7.click(function(_b7){
_b7.preventDefault();
_ae("click");
});
}
if(_a5.showOnHover){
_a7.mouseover(function(_b8){
_ae("hover");
});
}
},closeDropdownMenu:function(){
x$("body").click();
},applyStyleArgsToDialog:function(_b9,_ba,_bb){
var css=[];
var _bd=["position","top","left","bottom","right","margin-top","margin-left","margin-bottom","margin-right"];
if(_bb==null){
_bb=_ba;
}
var _be=x$(".xg_floating_container",_ba);
for(var i=0;i<_bd.length;i++){
var _c0=_bd[i];
if(_b9[_c0]){
css[_c0]=typeof (_b9[_c0])=="function"?_b9[_c0](_be):_b9[_c0];
}
}
x$(_ba).css(css);
},promptToJoin:function(_c1,_c2,_c3,_c4,_c5,_c6,_c7){
if(typeof _c2=="function"){
_c3=_c2;
_c2=false;
}
if(_c2){
this.promptIsPending();
return;
}
if(this.joined||!_c1){
_c3();
return;
}
var _c8="joinNow";
_c6=_c6||"signUp";
if(_c7===false&&_c6==="signUp"){
_c5=true;
_c3=_c4;
_c8="signIn";
_c6="signIn";
}else{
_c5=_c5||{title:xg.shared.nls.text("signIn"),onClick:dojo.lang.hitch(this,function(){
this.joined=true;
_c4();
})};
}
if(xg.shared.util.showPaywallIfPresent()){
return;
}
xg.shared.util.confirm({title:xg.shared.nls.text(_c8),bodyHtml:"<p>"+dojo.string.escape("html",_c1)+"</p>",okButtonText:xg.shared.nls.text(_c6),onOk:dojo.lang.hitch(this,function(){
this.joined=true;
_c3();
}),extraButton:_c5});
},showPaywallIfPresent:function(_c9){
var _ca=((_c9)&&(_c9.noClose));
var xep=x$("#xj_extra_paywall");
var xjp=x$("#xj_paywall");
var _cd=function(){
var _ce=xjp.html();
if(!_ce){
return;
}
var _cf="<h2>"+xjp.attr("data-title")+"</h2>";
if(!_ca){
_cf="<a class=\"xg_icon xg_icon-close xj_close\" href=\"#\">"+xg.shared.nls.html("close")+"</a>"+_cf;
}
var _d0={"bodyHtmlRaw":_ce,"titleHtml":_cf,"customDisplayClass":"xg_floating_paywall","noClose":_ca,"noButtons":true};
xjp.remove();
var dlg=xg.shared.util.alert(_d0);
if(!_ca){
x$(dlg).find(".xj_close").click(function(_d2){
_d2.preventDefault();
x$(dlg).remove();
xg.shared.util.hideOverlay();
x$("body").append(xjp);
});
}
return dlg;
};
var _d3=function(){
var _d4=xep.html();
if(!_d4){
return;
}
var _d5="<h2>"+xep.attr("data-title")+"</h2>";
var _d6=xep.attr("data-sign-in-url");
if(_d6){
_d5="<div class=\"dy-right sign-in\"><h2>"+xg.shared.nls.html("alreadyMemberSignIn"," href=\""+_d6+"\"")+"</h2></div>"+_d5;
}
var _d7={"bodyHtmlRaw":_d4,"titleHtml":_d5,"wideDisplay":true,"customDisplayClass":"xg_prepaywall","noClose":_ca,"noButtons":true};
xep.remove();
var dlg=xg.shared.util.alert(_d7);
x$(dlg).find(".xj_continue").click(function(_d9){
x$(dlg).remove();
x$("body").append(xep);
_cd();
});
if(_ca){
x$(dlg).find(".xj_close").remove();
}else{
x$(dlg).find(".xj_close").click(function(_da){
_da.preventDefault();
x$(dlg).remove();
xg.shared.util.hideOverlay();
x$("body").append(xep);
});
}
return dlg;
};
var _db=_d3();
if(_db){
return _db;
}
return _cd();
},promptIsPending:function(){
xg.shared.util.alert({title:xg.shared.nls.text("pendingPromptTitle"),bodyHtml:"<p>"+xg.shared.nls.html("youCanDoThis")+"</p>"});
},selectOnClick:function(_dc){
dojo.event.connect(_dc,"onfocus",function(_dd){
dojo.html.selectInputText(_dc);
});
dojo.event.connect(_dc,"onclick",function(_de){
dojo.html.selectInputText(_dc);
});
var _df=_dc.value;
dojo.event.connect(_dc,"onkeyup",function(_e0){
dojo.html.selectInputText(_dc);
_dc.value=_df;
});
},preventEnterFromSubmittingForm:function(_e1,_e2){
if(!_e2){
_e2=function(){
};
}
dojo.event.connect(_e1,"onkeydown",function(_e3){
if(_e3.keyCode==13){
dojo.event.browser.stopEvent(_e3);
_e2();
}
});
},setPlaceholder:function(_e4,_e5){
if(_e4.value!=""){
return;
}
_e4.value=_e5;
dojo.event.connect(_e4,"onfocus",function(_e6){
if(_e4.value==_e5){
_e4.value="";
}
});
dojo.event.connect(_e4,"onblur",function(_e7){
if(_e4.value==""){
_e4.value=_e5;
}
});
dojo.event.connect(_e4.form,"onsubmit",function(_e8){
if(_e4.value==_e5){
_e4.value="";
}
});
},createCsrfTokenHiddenInput:function(){
var _e9=document.createElement("input");
_e9.type="hidden";
_e9.name="xg_token";
_e9.value=xg.token;
return _e9;
},crc32:function(_ea){
var _eb="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
var n,x,crc=0;
crc=crc^(-1);
for(var i=0;i<_ea.length;i++){
n=(crc^_ea.charCodeAt(i))&255;
x="0x"+_eb.substr(n*9,8);
crc=(crc>>>8)^x;
}
crc=crc^(-1);
if(crc<0){
crc+=Math.pow(2,32);
}
return crc;
},cdn:function(url,_f1){
var _f2;
if(xg.useMultiCdn){
var _f3;
var _f4=url.match(/^https?:\/\/([^\/]+)([^?]+)?/);
if(_f4&&(_f4.length>1)){
fullHost=_f4[1];
var _f5=fullHost.split(".");
_f3=_f5[0];
}else{
_f3=xg.cdnDefaultPolicyHost;
}
var ext=false;
var _f7=_f4&&(_f4.length>2)?_f4[2]:url;
var _f8=_f7.match(/\.([^\/.]+)$/);
if(_f8&&(_f8.length>1)){
ext=_f8[1];
}
var _f9=[];
if(_f3 in xg.cdnPolicy){
for(var _fa in xg.cdnPolicy[_f3]){
var _fb=xg.cdnPolicy[_f3][_fa];
if(ext&&(_fa=="ext")&&dojo.lang.inArray(_fb[0],ext)){
_f9=_fb[1];
break;
}else{
if(_fa=="type"){
}else{
if(_fa=="default"){
_f9=_fb;
break;
}
}
}
}
}else{
_f9.push(xg.cdnHost);
}
var _fc=_f9.length;
var _fd;
if(_fc>1){
_fd=_f9[this.crc32(_f7)%_fc];
}else{
_fd=_f9[0];
}
_f2=url.match(/^https?:\/\//)?url.replace(/^https?:\/\/[^\/]+/,"http://"+_fd):"http://"+_fd+url;
_f2=_f2.replace(/\/xn_resources\/widgets/,"/"+xg.staticRoot+"/widgets");
_f2=_f2.replace(/\/xn_resources\//,"/"+ning.CurrentApp.id+"/");
}else{
_f2=url.replace(/.*\/xn_resources\/widgets(.*)/,(xg.cdnHost?("http://"+xg.cdnHost):xg.cdn)+"/"+xg.staticRoot+"/widgets"+"$1");
_f2=_f2.replace(/.*\/xn_resources(.*)/,(xg.cdnHost?("http://"+xg.cdnHost):xg.cdn)+"/"+ning.CurrentApp.id+"$1");
}
if(url!==_f2&&_f1!==false){
_f2=this.addParameter(_f2,"xn_version",xg.version);
}
return _f2;
},getParameter:function(url,_ff){
url=url+"";
var _100=url.split("?",2);
if(_100[1]){
var _101=_100[1].split("&");
for(var i=0;i<_101.length;i++){
var data=_101[i].split("=",2);
if(data[0]==_ff){
return data[1];
}
}
}
return null;
},removeParameter:function(url,name){
url=url+"";
var _106=url.split("?",2);
if(_106[1]){
var _107=_106[1].split("&");
var _108=[];
for(var i=0;i<_107.length;i++){
var data=_107[i].split("=",2);
if(data[0]!=name){
_108.push(_107[i]);
}
}
if(_108.length>0){
_106[1]=_108.join("&");
return _106.join("?");
}else{
return _106[0];
}
}else{
return url;
}
},addParameter:function(url,name,_10d){
url=xg.shared.util.removeParameter(url,name);
var _10e=url.indexOf("?")>-1?"&":"?";
return url+_10e+encodeURIComponent(name)+"="+encodeURIComponent(_10d);
},addParameterString:function(url,_110){
url=url+"";
var _111=url.indexOf("?")>-1?"&":"?";
return url+_111+_110;
},parseFormattedNumber:function(_112){
if(_112){
var _113=_112.replace(/\D+/g,"");
return parseInt(_113,10);
}
return NaN;
},parseFormattedFloat:function(_114,_115){
if(_114!==""){
if(!_115){
_115=xg.num_decimal_sep;
}
var re=new RegExp("[^0-9\\-\\"+_115+"]+","g");
var _117=_114.replace(re,"").replace(_115,".");
return parseFloat(_117);
}
return NaN;
},roundFloat:function(_118,_119){
if(parseFloat(_118)===NaN){
return NaN;
}
if(parseInt(_119,10)===NaN){
_119=0;
}
return Math.round(_118*Math.pow(10,_119))/Math.pow(10,_119);
},formatNumber:function(_11a,_11b){
var sep=_11b||xg.num_thousand_sep||",";
if((_11a<1000)&&(_11a>-1000)){
return _11a+"";
}
var _11d=_11a<0;
_11a=Math.abs(_11a)+"";
var _11e=_11a.length;
var _11f=(3-(_11e%3))%3;
var _120="";
for(i=0;i<_11e;i++){
_120+=_11a.charAt(i);
_11f=(_11f+1)%3;
if((_11f==0)&&(i<_11e-1)){
_120+=sep;
}
}
return _11d?"-"+_120:_120;
},formatFloat:function(_121,_122,_123,_124){
_122=_122||xg.num_decimal_sep||".";
_123=_123||xg.num_thousand_sep||",";
var _125=(""+_121).split(".",2);
var _126=parseInt(_125[0]);
var _127=_125.length>1?_125[1]:"0";
var num=xg.shared.util.formatNumber(_126,_123);
var dec;
if(_124===undefined){
dec=_122+_127;
}else{
if(_124===0){
dec="";
}else{
var rem=_124-_127.length;
if(rem>0){
_127=_127+(Array(rem+1).join("0"));
}
dec=_122+""+_127.substr(0,_124);
}
}
return num+""+dec;
},createQuiescenceTimer:function(_12b,_12c){
var _12d=0;
return {trigger:function(){
_12d++;
var _12e=_12d;
window.setTimeout(function(){
if(_12e==_12d){
_12c();
}
},_12b);
}};
},setCookie:function(name,_130,_131,_132){
var _133=null;
if(_131){
var now=new Date();
_133=new Date();
var _135=24*60*60*1000;
_133.setTime(now.getTime()+(_135*_131));
}
document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(_130)+"; path=/"+(_133?"; expires="+_133.toGMTString():"")+(_132?"; domain="+_132:"");
},getCookie:function(name){
var _137=document.cookie.indexOf(name+"=");
var len=_137+name.length+1;
if((!_137)&&(name!=document.cookie.substring(0,name.length))){
return null;
}
if(_137==-1){
return null;
}
var end=document.cookie.indexOf(";",len);
if(end==-1){
end=document.cookie.length;
}
return decodeURIComponent(document.cookie.substring(len,end));
},addHint:function(_13a,hint){
var _13c=x$(_13a);
if(_13c.attr("value")==""){
_13c.attr("value",hint).addClass("hint");
}
_13c.focus(function(){
if(this.value==hint){
x$(this).attr("value","").removeClass("hint");
}
}).blur(function(){
if(this.value==""){
x$(this).attr("value",hint).addClass("hint");
}
});
},addHints:function(_13d,_13e,hint){
_13e=_13e||false;
hint=hint||"";
x$(_13d).each(function(){
xg.shared.util.addHint(this,_13e?x$(this).attr("_hint"):hint);
});
},setMaxLengthWithCount:function(_140,_141,_142,args){
if(_140&&_141){
if(!args){
args={};
}
var _144="enforceMaxLength" in args?args.enforceMaxLength:false;
var _145="negativeCountClass" in args?args.negativeCountClass:"length-exceeded";
var _146=("onNegative" in args)&&(typeof args.onNegative=="function")?args.onNegative:false;
var _147=("onNonNegative" in args)&&(typeof args.onNonNegative=="function")?args.onNonNegative:false;
var _148=("neverHideCount" in args)&&args.neverHideCount;
var _149=function(_14a,_14b,_14c,_14d,_14e){
var _14f=x$(_14a).val().length;
if(_14d&&(_14f>_14c)){
x$(_14a).val(x$(_14a).val().substr(0,_14c));
_14f=_14c;
}
if(_14e.length>0){
if(_14f>_14c){
x$(_14b).addClass(_14e);
}else{
x$(_14b).removeClass(_14e);
}
}
var _150=parseInt(x$(_14b).html(),10);
var _151=_14c-_14f;
if((_150>=0)&&(_151<0)&&_146){
_146.call();
}else{
if((_150<0)&&(_151>=0)&&_147){
_147.call();
}
}
x$(_14b).text(args.showCharsLabel?xg.shared.nls.text("nChars",_151):_151);
};
x$(_140).bind("keyup keypress blur cut paste change",function(_152){
var key=_152.which||_152.keyCode;
if(_144&&(x$(_140).val().length>=_142)&&(key!=8)){
_152.preventDefault();
}
if(!x$(_141).attr("_noUpdate")){
_149(_140,_141,_142,_144,_145);
}
});
x$(_140).bind("focus",function(_154){
x$(_141).css("visibility","visible");
});
x$(_140).bind("blur",function(_155){
if((x$(_140).val().length<_142)&&!_148){
x$(_141).css("visibility","hidden");
}
});
}
},postSynchronously:function(url,_157,_158){
_157=_157||{};
_157.xg_token=xg.token;
var form=x$("<form method=\"post\"></form>").attr("action",url);
if(_158){
form.attr("target",_158);
}
for(name in _157){
form.append(x$("<input type=\"hidden\"/>").attr("name",name).attr("value",_157[name]));
}
xg.append(form[0]);
form[0].submit();
},track:function(_15a,page,_15c,_15d,_15e,_15f){
xn.track.pageView(10,_15a+"-"+page+"-"+_15c+(_15d?"-"+_15d:""),_15e,{},_15f);
},clickTrack:function(){
},redirectToUrl:function(url){
if(url!="#"){
window.location=url;
}
},closest:function(_161,_162){
while(_161.length>=1){
if(_161.is(_162)){
return _161;
}
_161=_161.parent();
}
return _161;
},consoleLog:function(msg){
if(window.console&&console.log){
console.log(msg);
}
},getModule:function(el){
return x$(el).parents(".xg_module")[0];
},extractModuleName:function(_165){
if(!_165||!x$(_165).attr("data-module_name")){
return "other";
}else{
return x$(_165).attr("data-module_name");
}
}};
}
if(!dojo.hostenv.findModule("xg.index.i18n",false)){
dojo.provide("xg.index.i18n");
dojo.lang.mixin(xg.index.i18n,{html:function(_1){
return this.text.apply(this,arguments).replace(/ & /g," &amp; ");
},text:function(_2){
var _3=this[_2]?this[_2]:_2,_4;
if("function"==typeof _3){
for(var i=1,_4=[];i<arguments.length;i++){
_4[i-1]=arguments[i];
}
return _3.apply(this,_4);
}else{
if("object"==typeof _3){
var _6="";
if(arguments.length>1&&_3[arguments[1]]){
_6=_3[arguments[1]];
}else{
var _7;
if(arguments.length>1){
_7=arguments[1];
}
var _8=xg.shared.nls.choosePluralizationForm.call(this,_7);
_6=_3[_8];
}
if(!_6){
if(window.console&&console.log){
console.log("Message not found for string \""+_2+"\" pluralization form \""+_8+"\"");
}
return "";
}
arguments[0]=_6;
return this.sprintf.apply(this,arguments);
}else{
arguments[0]=_3;
return this.sprintf.apply(this,arguments);
}
}
},sprintf:function(){
var _9=arguments[0];
for(var i=1;i<arguments.length;i++){
_9=_9.replace(/%s/,arguments[i]);
var _b=new RegExp("%"+i+"\\$s","g");
_9=_9.replace(_b,arguments[i]);
}
return _9;
}});
}
if(!dojo.hostenv.findModule("xg.shared.messagecatalogs.en_US",false)){
dojo.provide("xg.shared.messagecatalogs.en_US");
dojo.evalObjPath("xg.feed.nls",true);
dojo.lang.mixin(xg.feed.nls,xg.index.i18n,{edit:"Edit",title:"Title:",feedUrl:"URL:",show:"Show:",titles:"Titles Only",titlesAndDescriptions:"Detail View",display:"Display",cancel:"Cancel",save:"Save",loading:"Loading\u2026",items:"items"});
dojo.evalObjPath("xg.chat.nls",true);
dojo.lang.mixin(xg.chat.nls,xg.index.i18n,{clearMessages:"Clear Messages",thisWillClearAllMessages:"This will clear all of the messages from your view. %1$s will still see the messages.",clearMainRoomMessages:"Clear Main Room Messages",thisWillDeleteMainRoomMessages:"This will delete all Main Room messages for everyone.",clearChatHistory:"Clear chat history",me:"Me",connectedToChat:"Connected to chat",connecting:"Connecting\u2026",chooseLengthOfSuspension:"Choose the length of the suspension. Note that previous chat messages will not be removed.",youAreDisconnected:"You are disconnected from chat. <a %1$s>Go online</a>.",youWereSuspendedMinutes:{"f1":"You were suspended from chat. You can reconnect in 1 minute.","f2":"You were suspended from chat. You can reconnect in %1$s minutes."},youWereSuspendedHours:{"f1":"You were suspended from chat. You can reconnect in 1 hour.","f2":"You were suspended from chat. You can reconnect in %1$s hours."},youWereSuspendedByAdminMinutes:{"f1":"You were suspended from chat by an administrator. You may reconnect in 1 minute.","f2":"You were suspended from chat by an administrator. You may reconnect in %1$s minutes."},youWereSuspendedByAdminHours:{"f1":"You were suspended from chat by an administrator. You may reconnect in 1 hour.","f2":"You were suspended from chat by an administrator. You may reconnect in %1$s hours."},suspensionLength:"Suspension length:",fifteenMinutes:"15 minutes",oneHour:"1 hour",twoHours:"2 hours",fourHours:"4 hours",twentyFourHours:"24 hours",yesterday:"Yesterday",suspendFromChat:"Suspend from chat",suspendedFromChat:"Suspended from chat",suspend:"Suspend",viewProfile:"View Profile",startChat:"Start Chat",viewChat:"View Chat",suspendFromChatTitleCase:"Suspend From Chat",ignore:"Ignore",stopIgnoring:"Stop Ignoring",disconnected:"Disconnected (%1$s online)",disconnectedFull:"Disconnected (Full)",membersOnline:"Members Online (%1$s)",chatIsFullTitle:"Chat is full",chatIsFull:"The %1$s chat is full. Check back soon.",userHasDisconnected:"%1$s has disconnected and can't receive instant messages.",youAreIgnoringUser:"You are ignoring %1$s.<br/> <a href=\"#\">Stop ignoring them</a>?",ignoreLimitReached:"Ignore limit reached",youAreCurrentlyIgnoringMaxMembers:"You are currently ignoring messages from %1$s members. This member will be ignored in this session only. To add another member to your list of ignored members, you will need to first remove one.",deleteMessage:"Delete",deleteMessageAndSuspend:"Delete and suspend",postDeleted:"Post deleted",mainRoom:"Main Room",titlebarUserSays:"%1$s says\u2026"});
dojo.evalObjPath("xg.opensocial.nls",true);
dojo.lang.mixin(xg.opensocial.nls,xg.index.i18n,{edit:"Edit",title:"Title:",untitled:"Untitled",appUrl:"URL:",cancel:"Cancel",save:"Save",removeBox:"Remove Box",removeBoxText:function(_1){
return "<p>Are you sure you want to remove the \""+_1+"\" box from My Page?</p><p>You'll still be able to access this App from My Apps.</p>";
},removeApplication:"Remove App",removeApplicationText:"Are you sure you want to remove this App? It will no longer be accessible on your My Apps Page.",removeApplicationNetwork:"Remove Ning App",removeApplicationTextNetwork:"Are you sure you want to remove this Ning App? It will no longer be accessible on your Ning Network.",removeBoxAndRemoveApplication:"Remove Box / Remove App",removeBoxAndRemoveApplicationHelp:"<p>'Remove Box' will remove this App box from your profile page only.</p><p>'Remove App' will remove the App from your profile page and My Apps list.</p>",allowSendAlerts:"Send alerts to me and my friends",allowSendAlertsOnMain:"Send alerts to members",canAddActivities:"Add updates to Latest Activity",canAddActivitiesOnMain:"Add Updates to Latest Activity",applicationSettingsOnMain:"%1$s Settings",allowThisApplicationToOnMain:"Allow %1$s to:",addApplication:"Add App",addNingApp:"Add Ning App",yourApplicationIsBeingAdded:"Your App is being added.",yourNingAppIsBeingAdded:"Your Ning App is being added.",yourApplicationIsBeingRemoved:"Your App is being removed.",onlyEmailMsgSupported:"Only EMAIL message type is supported",msgExpectedToContain:"Message is expected to contain all fields: type, title and body",msgObjectExpected:"Message object expected",recipientsShdBeStringOrArray:"Recipients can only be a string (comma-separated list is ok) or an Array",recipientsShdBeSpecified:"Recipients should be specified and can not be empty",unauthorizedSender:"Unauthorized Sender: only logged-in members can send messages",unauthorizedRecipients:"Unauthorized recipients specified to send mail to",rateLimitExceeded:"Rate limit exceeded",operationCancelled:"Operation cancelled",youAreAboutToAdd:function(_2,_3){
return "<p>You are about to add <strong>"+_2+"</strong> to your My Page. This App was developed by a third party.</p><p>By clicking 'Add App' you agree to the <a "+_3+">Apps Terms of Use</a>.</p>";
},youAreAboutToAddNing:function(_4,_5){
return "<p>You are about to add <strong>"+_4+"</strong> to your My Page. This App was developed by Ning.</p><p>By clicking 'Add App' you agree to the <a "+_5+">Apps Terms of Use</a>.</p>";
},youAreAboutToAddNetwork:function(_6,_7){
return "<p>You are about to add <strong>"+_6+"</strong> to your Ning Network. This Ning App was developed by a third party.</p><p>By adding this Ning App to your Ning Network you are agreeing to share your information as well as the information of the members of your Ning Network with the third party who developed it.</p><p>By clicking 'Add Ning App' you agree to the <a "+_7+">Apps Terms of Use</a>.</p>";
},youAreAboutToAddNetworkNing:function(_8,_9){
return "<p>You are about to add <strong>"+_8+"</strong> to your Ning Network. This Ning App was developed by Ning.</p><p>By adding this Ning App to your Ning Network you are agreeing to share your information as well as the information of the members of your Ning Network with the third party who developed it.</p><p>By clicking 'Add Ning App' you agree to the <a "+_9+">Apps Terms of Use</a>.</p>";
},followingMessageWasSent:function(_a,_b,_c){
return "<p>Following message was sent to "+_a+". <blockquote><strong><em>"+_b+"</em></strong><br/>"+_c+"</blockquote></p>";
},reviewIsTooLong:function(_d,_e){
return "Your review is "+_d+" characters long.  The maximum is "+_e+".";
},mustSupplyRating:"Please supply a rating along with your review.",mustSupplyReview:"Your review must include some text.",messageWasNotSent:function(_f){
return "<p>Message was <strong>not</strong> sent because: <strong>"+_f+"</strong>.";
},settingIsDontSendMessage:"Message setting is set to \"Don't send messages\"",applicationSettings:"App Settings",messageSent:"Message Sent",messageNotSent:"Message Not Sent",allowThisApplicationTo:"Allow this App to:",updateSettings:"Save",isOnMyPage:"Add a box on My Apps Page",youNeedToAddEmailRecipient:"You need to add an email recipient.",yourMessageIsBeingSent:"Your message is being sent.",sendingLabel:"Sending...",deleteReview:"Delete Review",deleteReviewQ:"Delete review?",replaceReview:"Replace Review",replaceReviewQ:"You have already added a review.  Would you like to replace the existing review?","delete":"Delete",thereHasBeenAnError:"There has been an error",whatsThis:"What's This?",hideThisApp:"Hide App from Directory",blacklistConfirmation:"This App will be hidden from the directory, and will be removed from all member profile pages.",addToProfilePages:"Display on members' My Apps pages",visibleToMembers:"Be visible to members on the Main Page",searchNingApps:"Search Ning Apps",youveReachedMaxApps:"You've reached the maximum number of %1$s Apps you can add to your My Apps page.  Please <a %2$s>remove an App</a> to add a new one.",maxNingAppsReached:"You've reached the maximum number of Ning Apps you can add to your Ning Network. Remove a Ning App to add a new one, or browse the <a %1$s>Ning App Directory</a>."});
dojo.evalObjPath("xg.opensocialapps.nls",true);
dojo.lang.mixin(xg.opensocialapps.nls,xg.index.i18n,{change:"Change",save:"Save",deleteApplication:"Delete Application",deleteFeature:"Delete Feature",deleteApplicationText:"Are you sure you want to delete this application? It will automatically be removed for all users who added this application. Would you like to continue?",takeOffline:"Take Application Offline",takeOfflineText:"Are you sure you want to take this application offline? It will automatically be removed for all users who added this application. Would you like to continue?",dontRecommendApp:"Don't Recommend App",recommendApp:"Recommend App",staffPickApp:"Staff Pick App",dontStaffPick:"Don't Staff Pick App",areYouSure:"Are you sure?"});
dojo.evalObjPath("xg.forum.nls",true);
dojo.lang.mixin(xg.forum.nls,xg.index.i18n,{items:"items",numberOfCharactersExceedsMaximum:function(n,_11){
return "The number of characters ("+n+") exceeds the maximum ("+_11+")";
},pleaseEnterFirstPost:"Please write the first post for the discussion",pleaseEnterTitle:"Please enter a title for the discussion",warnLostChanges:"Any text you've added to your discussion will be lost.",save:"Save",cancel:"Cancel",yes:"Yes",no:"No",edit:"Edit",ok:"OK",deleteCategory:"Delete Category",discussionsWillBeDeleted:"The discussions in this category will be deleted.",whatDoWithDiscussions:"What would you like to do with the discussions in this category?",moveDiscussionsTo:"Move discussions to:",deleteDiscussions:"Delete discussions","delete":"Delete",deleteReply:"Delete Reply",deleteReplyQ:"Delete this reply?",deletingReplies:"Deleting Replies\u2026",doYouWantToRemoveReplies:"Do you also want to remove the replies to this comment?",pleaseKeepWindowOpen:"Please keep this browser window open while processing continues. It may take a few minutes.",contributorSaid:function(x){
return x+" said:";
},display:"Display",from:"From",show:"Show",htmlCharacters:"HTML Characters",view:"View",discussions:"discussions",discussionsFromACategory:"Discussions from a category\u2026",MaxCategoryNotificationTitle:"Maximum limit reached",MaxCategoryNotificationMsg:"Sorry, you can create up to %s categories only."});
dojo.evalObjPath("xg.groups.nls",true);
dojo.lang.mixin(xg.groups.nls,xg.index.i18n,{pleaseChooseAName:"Please choose a name for your group.",pleaseChooseAUrl:"Please choose a web address for your group.",urlCanContainOnlyLetters:"The web address can contain only letters and numbers (no spaces).",descriptionTooLong:function(n,_14){
return "The length of your group's description ("+n+") exceeds the maximum ("+_14+")";
},nameTaken:"Our apologies - that name has already been taken. Please choose another name.",urlTaken:"Our apologies - that web address has already been taken. Please choose another web address.",edit:"Edit",from:"From",show:"Show",groups:"groups",pleaseEnterName:"Please enter your name",pleaseEnterEmailAddress:"Please enter your email address",xIsNotValidEmailAddress:function(x){
return x+" is not a valid email address";
},save:"Save",cancel:"Cancel"});
dojo.evalObjPath("xg.html.nls",true);
dojo.lang.mixin(xg.html.nls,xg.index.i18n,{contentsTooLong:function(_16){
return "You've exceeded the maximum number of characters this Text Box can support. Please remove "+_16+" characters.";
},tooManyEmbeds:function(_17,_18,_19){
return "You can only place "+_17+" widget"+((_17>1)?("s"):(""))+" in a Text Box. Please remove "+_18+" widget"+((_18>1)?("s"):(""))+". <a "+_19+">Learn more</a>.";
},edit:"Edit",wereSorry:"We're Sorry",save:"Save",cancel:"Cancel",saving:"Saving\u2026"});
dojo.evalObjPath("xg.index.nls",true);
dojo.lang.mixin(xg.index.nls,xg.index.i18n,{customizeLikeButtonSettings:"Customize Like Button Settings",chooseWhichFeatures:"Choose which features members can Like below:",customizeByFeature:"Customize by Feature",chooseWhichFeaturesWill:"Choose which features will display the share links you\u2019ve chosen:",memberPreview:"Member Preview",peopleWhoLikedThis:"People who liked this",close:"Close",onlineProper:"Online",disable:"Disable",clickToEnlarge:"Click to enlarge",disableSignInSignUpWithX:function(_1a){
return "Disable Sign in/Sign up with "+_1a;
},NMembersHaveConnectedOnXWithY:function(_1b,_1c,_1d){
return _1b+" "+((_1b>1)?("members have connected their profiles on "):("member has connected their profile on "))+_1c+" to their "+_1d+" account, and may no longer be able to sign in.";
},thereWasAnErrorUpdatingFacebook:"There was an error saving your Facebook credentials. Please try again.",thereWasAnErrorUpdatingTwitter:"There was an error saving your Twitter credentials. Please try again.",thereWasAnErrorUpdatingWindowsLive:"There was an error saving your Windows Live credentials. Please try again.",thereWasAnErrorUpdatingGoogle:"There was an error saving your Google credentials. Please try again.",thereWasAnErrorUpdatingLinkedIn:"There was an error saving your LinkedIn credentials. Please try again.",linkedInThrottleReached:"Sorry, only %1$s LinkedIn invitations can be sent per day. The following connections did not receive invitations: %2$s",linkedInThrottleSelected:"Sorry, you can only send up to %1$s LinkedIn invitations per day.",pleaseEnterAnApplicationIDToContinue:"Please enter an Application ID to continue",pleaseEnterAnApplicationSecretToContinue:"Please enter an Application Secret to continue",pleaseEnterAnIDToContinue:"Please enter an ID to continue",pleaseEnterAKeyToContinue:"Please enter a Key to continue",pleaseEnterASecretToContinue:"Please enter a Secret to continue",enableSocialSignIn:"Enable Social Sign-In",makeItEvenEasier:"Make it even easier for your members to sign up and sign in by enabling Social Sign-In. Allow members to access your Ning network by using:",facebook:"Facebook",google:"Google",yahoo:"Yahoo",twitter:"Twitter",readMoreOrGet:"<a %1$s>Read more</a> or get started now.",getStarted:"Get Started",addMedia:"Add Media",pasteEmbedCodeFrom:"Paste embed code from Youtube, etc. below:",insertPlainText:"Insert Plain Text",pasteTextFromWord:"Paste text from Word, a website, etc. below to remove all formatting:",addLink:"Add Link",editLink:"Edit Link",linkText:"Link Text",linkUrl:"Link Url",openInColon:"Open in:",sameWindow:"Same Window",newWindow:"New Window",clickHereToDownload:"Click here to download",anErrorHasOccurred:"An error has occurred. Please try again.",exporting:"Exporting\u2026",exportingXofY:function(x,y){
return "Exporting "+x+" of "+y+"\u2026";
},onlyNCMayExport:"Only the network creator may export content.",contentExportIsEmpty:"No %1$s were downloaded because your Ning Network does not have any %1$s.",setUp:"Set Up",dismiss:"Dismiss",remindLater:"Remind me later",connectedAsName:"Connected as %1$s.",creatingFacebookApp:"Creating Facebook App\u2026",wereSorryExclamation:"We\u2019re Sorry!",enterLinkUrl:"Enter a link URL:",sent:"Sent",messageHasBeenSent:"The message has been sent to %1$s.",pleaseEnterYourFullName:"Please enter your full name.",pleaseEnterAValidEmailAddress:"Please enter a valid email address.",pleaseChooseACountry:"Please choose a country.",pleaseChooseACategoryForYourNetwork:"Please choose a category for your network.",richText:"Rich Text",source:"Source",htmlSource:"HTML",toggleBold:"Toggle Bold",toggleItalic:"Toggle Italic",toggleUnderline:"Toggle Underline",justifyLeft:"Justify Left",justifyCenter:"Justify Center",justifyRight:"Justify Right",toggleStrikethrough:"Toggle Strikethrough",indentLeft:"Indent Left",indentRight:"Indent Right",insertHorizontalRule:"Insert Horizontal Rule",insertOrderedList:"Insert Ordered List",insertUnorderedList:"Insert Unordered List",insertImage:"Insert Image",attachFile:"Attach File",createLink:"Create Link",removeLink:"Remove Link",removeFormatting:"Remove Formatting",warnLostChanges:"Any text you've added to your broadcast message will be lost.",warnLostTermsChanges:"Any text you've changed in your custom Terms of Service will be lost.",xxSmall:"XX-Small",xSmall:"X-Small",small:"Small",medium:"Medium",large:"Large",xLarge:"X-Large",xxLarge:"XX-Large",error:"Error",processingFailed:"Sorry, processing failed. Please try again later.",saveChanges:"Save Changes?",doYouWantToSaveChanges:"Do you want to save your changes?",discard:"Discard",onlyNWords:"Only %1$s words are allowed in the Keywords field.",youCannotEnter:"You cannot enter more than %1$s characters",messageCannotBeMore:"Your message cannot be more than %1$s characters.",pleaseEnterMessage:"Please enter a message body.",subjectCannotBeMore:"Your subject cannot be more than %1$s characters.",pleaseEnterSubject:"Please enter a subject.",warning:"Warning",customCssWarning:"Any CSS you've added on the Advanced tab will be removed if you change themes.",yes:"Yes",edit:"Edit",save:"Save",done:"Done",badgeSize:"Badge Size",size:"Size",changesSaved:"Your changes have been successfully saved.",tweetsFromThisNetwork:"Tweets from this network will now indicate they are from the Application Name you specified.",connectToTwitter:"Connect to Twitter",connect:"Connect",toPostUpdates:"To post updates on Twitter, you must connect your profile on %s to Twitter.",postToTwitter:"Post to Twitter",postHasBeenSent:"Your post has been sent!",postTooLong:"Your post cannot be over %1$s characters",postCannotBeEmpty:"You need to add text to post an update.",problemConnectingTwitter:"Our apologies - there was a problem connecting to Twitter. Please try again later.",post:"Post",overwriteSitemap:"Automatically updating your sitemap will overwrite your current one.",pleaseAddProfilePhoto:"Please add a profile photo.",yourMessageIsBeingSent:"Your message is being sent.",thankYouQuestionSent:"Thank you, your question has been sent to the administrator of %1$s.",youNeedToAddEmailRecipient:"You need to add an email recipient.",checkPageOut:function(_20){
return "Check out this page on "+_20;
},checkingOutTitle:function(_21,_22){
return "Check out \""+_21+"\" on "+_22;
},selectOrPaste:"You need to select a video or paste the 'embed' code",selectOrPasteMusic:"You need to select a song or paste the URL",cannotKeepFiles:"You will have to choose your files again if you wish to view more options. Would you like to continue?",pleaseSelectPhotoToUpload:"Please select a photo to upload.",addingLabel:"Adding...",sendingLabel:"Sending...",addingInstructions:"Please leave this window open while your content is being added.",looksLikeNotImage:"One or more files do not seem to be in .jpg, .gif, or .png format. Would you like to try uploading anyway?",looksLikeNotVideo:"The file you selected does not seem to be in .mov, .mpg, .mp4, .avi, .3gp, .3g2 or .wmv format. Would you like to try uploading anyway?",looksLikeNotMusic:"The file you selected does not seem to be in .mp3 format. Would you like to try uploading anyway?",showingNFriends:{"f1":"Showing 1 friend matching %2$s. <a href=\"#\">Show everyone</a>","f2":"Showing %1$s friends matching \"%2$s\". <a href=\"#\">Show everyone</a>"},showingNFollowers:{"f1":"Showing 1 follower matching %2$s. <a href=\"#\">Show everyone</a>","f2":"Showing %1$s followers matching \"%2$s\". <a href=\"#\">Show everyone</a>"},sendInvitation:"Send Invitation",sendMessage:"Send Message",latestActivityShowsAllTheActivityHappening:"Latest Activity shows all the activity happening on your Ning Network right now. Still want to remove it?",invite:"Invite",sendInvitationToNFriends:{"f1":"Send invitation to 1 friend?","f2":"Send invitation to %s friends?"},sendMessageToNFriends:{"f1":"Send message to 1 friend?","f2":"Send message to %s friends?"},nFriendsSelected:{"f1":"1 friend selected","f2":"%s friends selected"},nFollowersSelected:{"f1":"1 follower selected","f2":"%s followers selected"},nInvitesLeftToday:{"f1":"1 invite left today","f2":"%s invites left today"},nInvitesLeftThisMonth:{"f1":"1 invite left this month","f2":"%s invites left this month"},nSharesLeftToday:{"f1":"1 share left today","f2":"%s shares left today"},nSharesLeftThisMonth:{"f1":"1 share left this month","f2":"%s shares left this month"},yourMessageOptional:"<label>Your Message</label> (Optional)",subjectIsTooLong:function(n){
return "Your subject is too long. Please use "+n+" characters or less.";
},messageIsTooLong:function(n){
return "Your message is too long. Please use "+n+" characters or less.";
},tooManyInvites:"Too Many Invitations",onlyFirstNInvitesSent:{"f1":"You only have 1 invite remaining \u2014 this will send an invitation to the first recipient.","f2":"You only have %1$s invites remaining \u2014 this will send invitations to the first %1$s recipients."},tooManyPeopleSelected:"Too Many People Selected",invitedXButHaveYleft:"Sorry! You tried to send %1$s invites. That would put you over the limit of %2$s invitations for the month.",upgradeToMforNinvites:"<a %1$s><b>Upgrade to %2$s</b></a> to invite up to %3$s people every month.",pleaseChoosePeople:"Please choose some people to invite.",noPeopleSelected:"No People Selected",pleaseEnterEmailAddress:"Please enter your email address.",pleaseEnterPassword:function(_25){
return "Please enter your password for "+_25+".";
},sorryWeDoNotSupport:"Sorry, we don't support the web address book for your email address. Try clicking 'Address Book Application' below to use addresses from your computer.",pleaseSelectSecondPart:"Please select the second part of your email address, e.g., gmail.com.",atSymbolNotAllowed:"Please ensure that the @ symbol is not in the first part of the email address.",resetTextQ:"Reset Text?",resetTextToOriginalVersion:"Are you sure you wish to reset all of your text to the original version? All of your changes will be lost.",changeQuestionsToPublic:"Change questions to public?",changingPrivateQuestionsToPublic:"Changing private questions to public will expose all members' answers. Are you sure?",saveProfileQuestions:"Save Profile Questions?",areYouSureYouWantToDeleteQuestions:"Deleting profile questions or modifying answer types will remove the existing answers from member profiles. Do you want to continue?",pleaseEnterASiteName:"Please enter a name for the Ning Network, e.g. Paris Cyclists",pleaseEnterShorterSiteName:"Please enter a shorter name (max 64 characters)",thereIsAProblem:"There is a problem with your information",thisSiteIsOnline:"This Ning Network is Online",online:"<strong>Online</strong>",onlineSiteCanBeViewed:"<strong>Online</strong> - This Ning Network can be viewed with respect to your privacy settings. ",takeOffline:"Take Offline",thisSiteIsOffline:"This Ning Network is Offline",offline:"<strong>Offline</strong>",offlineOnlyYouCanView:"<strong>Offline</strong> - Only you can view this Ning Network.",takeOnline:"Take Online",basicTheme:"Basic Theme",allOptions:"All Options",addYourOwnCss:"Advanced",canBeSelectedOnlyOnce:function(_26){
return _26+" can be selected as an 'Answer Type' only once";
},pleaseEnterTheChoicesFor:function(_27){
return "Please enter the choices for \""+_27+"\" e.g. Hiking, Reading, Shopping";
},pleaseEnterTheChoices:"Please enter the choices e.g. Hiking, Reading, Shopping",bannedPasswordStrings:function(){
return ["password","passphrase","passwd","pass word","pass-word","pass phrase","pass-phrase"].join("|");
},wereSorry:"We're Sorry",youCantSendMessageUntilFriend:"You can't send a message until %s accepts your friend request.",pleaseRemoveQuestionsAskingForPasswords:"Please remove questions asking for passwords from your members.",upToTenProfileQuestions:"You can only select up to 10 profile questions for advanced search. Uncheck other questions to change which questions are added to advanced search.",upToNProfileQuestions:function(n){
return "You can only have up to "+n+" profile questions.";
},email:"email",subject:"Subject",message:"Message",send:"Send",cancel:"Cancel",areYouSureYouWant:"Are you sure you want to do this?",processing:"Processing\u2026",pleaseKeepWindowOpen:"Please keep this browser window open while processing continues. It may take a few minutes.",complete:"Complete!",processIsComplete:"Process is complete.",ok:"OK",body:"Body",pleaseEnterASubject:"Please enter a subject",pleaseEnterAMessage:"Please enter a message",pleaseChooseFriends:"Please select some friends before sending your message.",thereHasBeenAnError:"There has been an error",thereWasAProblem:"There was a problem adding your content. Please try again later.",fileNotFound:"File not found",pleaseProvideADescription:"Please provide a description",pleaseEnterSomeFeedback:"Please enter some feedback",title:"Title:",copyHtmlCode:"Copy HTML Code",change:"Change",changing:"Changing...",htmlNotAllowed:"HTML not allowed",noFriendsFound:"No friends found that match your search.",noFriends:"No friends found.",noFollowers:"No followers found.",yourSubject:"Your Subject",yourMessage:"Your Message",pleaseEnterFbApiKey:"Please enter your Facebook API key.",pleaseEnterValidFbApiKey:"Please enter a valid Facebook API key.",pleaseEnterFbApiSecret:"Please enter your Facebook API secret.",pleaseEnterValidFbApiSecret:"Please enter a valid Facebook API secret.",pleaseEnterFbTabName:"Please enter a name for your Facebook application tab.",pleaseEnterValidFbTabName:function(_29){
return "Please enter a shorter name for your Facebook application tab.  The maximum length is "+_29+" character"+(_29==1?"":"s")+".";
},newTab:"New Tab",resetToDefaults:"Reset to Defaults",youNaviWillbeRestored:"Your navigation tabs will be restored to the default setting.",hiddenWarningTop:"This tab has not been added to your Ning Network. There is a limit of %1$s top-level tabs. Please remove top-level tabs or make top-level tabs into sub-tabs. %2$s",hiddenWarningSub:function(n){
return "This sub-tab has not been added to your Ning Network. There is a limit of "+n+" sub-tabs per top-level tab. "+"Please remove sub-tabs or make sub-tabs into top-level tabs.";
},removeConfirm:"Removing this tab will remove its sub-tabs as well. Click OK to continue.",no:"No",youMustSpecifyTabName:"You must specify a tab name",networkPrivacyChangeTitle:"Change Privacy",confirmNetworkPrivacyChange:"Are you sure you want to change the privacy settings of your Ning Network?",orWriteYourOwnMessage:"\u2026or write your own message",youCanOnlyAddUpToNContentItems:"You can only add %1$s content items.",add:"Add",addAContentItem:"Add a Content Item",enterTheUrlOfASpecific:"Enter the URL of a specific discussion, forum category, video, photo, note, event, page or group for this role to administer:",unsupportedUrl:"Unsupported URL",removeUserFromRole:"Remove Member from Role?",areYouSureRemoveUser:"Are you sure you want to remove %1$s from this role?",areYouSureRemoveInvite:"Are you sure you want to cancel the invitations sent to the selected member(s)?",noContentItemFoundAtUrl:"No content item was found at that URL.",totalColonN:"Total: %1$s",fileIsTooLarge:"This file is too large.",fileIsZeroBytes:"This file is 0 bytes.",fileTypeIsInvalid:"This file type is invalid.",reachedUploadLimit:"You have reached the upload limit.",youHaveUnsavedChanges:"You have unsaved changes. Are you sure you want to navigate away?",selectedTooManyFiles:{"f1":"You have selected too many files. You may select up to 1 file to upload at once.","f2":"You have selected too many files. You may select up to %s files to upload at once."},didNotSelectAnyFiles:"You did not select any files to upload.",sorryUploadsFailed:"Sorry uploads failed",failedToUploadFiles:"We tried to upload the file(s) you selected, but encountered errors. Please try again.",uploadedFilesButErrors:"We have uploaded your files, but encountered errors with the following:",editDetailsForSuccessfulUploads:"You may want to go back and try these files again later. You will now be taken to a page to edit your successfully uploaded files.",overCustomCssSizeLimit:"Hey There! You are %1$s characters over the maximum number of CSS characters that this Ning Network can support and still be speedy. Reduce the size of your custom CSS or contact the <a %2$s>Ning Help Center</a> for assistance.",careful:"Careful!",youreGettingCloseToTheMaximum:"You're getting close to the maximum of %1$s features you can add to your Main Page.",youveReachedTheMaximumNumberOfFeatures:"You've reached the maximum of %1$s features you can add to your Main Page.",youveExceededTheMaximumNumberOfEmbeds:"You've exceeded the maximum of %1$s widgets on your Main Page. Please remove %2$s of your %3$s widgets.",learnMoreAboutEmbeds:"<a %1$s>Learn more about how widgets can slow down your Main Page.</a>",justRemoveAFeature:"Just remove a feature to add something new.",withXFeaturesYouveExceeded:"With %1$s features, you've exceeded the maximum of %2$s features you can add to your Main Page.",justRemoveXFeatures:"Just remove %1$s features to add something new.",youveReachedTheMaximumNumberOfNingApps:"You've reached the maximum number of Ning Apps you can add to your Ning Network.  Remove a Ning App to add a new one.",frameBustingMsg:"If you're trying to set up your own domain for your Ning Network, please <a %1$s>click here</a> for more information on how to set it up properly. Or, <strong><a %2$s>click here to go to the original site</a></strong>.",frameBustingMsgTitle:"We're sorry, this site can't be embedded in a frame.",memberPickerSearchSparseText:"There are no member with the name \"%1$s\".",memberPickerFriendsSparseText:"You haven't made any friends yet. Try viewing all members instead.",memberPickerSparseText:"There are no members to display",softBlockMessagingForComments:"You have exceeded the maximum number of posts allowed, and you cannot post a new comment right now. Please try again in a few hours.",softBlockMessagingForNewContent:"You have exceeded the maximum number of posts allowed, and you cannot post new content right now. Please try again in a few hours.",showMore:"Show More",showLess:"Show Less",invalidCustomURL:"A Custom URL may not contain \"?\" or \".\"",theFileCouldNotBeDeleted:"The file could not be deleted.",theSplashPageCouldNotBeSet:"The splash page could not be set.",theSplashPageCouldNotBeCleared:"The splash page could not be cleared.",customizeLink:"Customize Link",deleteThisFile:"Are you sure you want to delete this file?",newHomepageVisit:"This file is now your homepage. To check it out, go to <a %1$s>%2$s</a>",defaultHomepageRestored:"Your default homepage has been restored.",addConsumer:"Create Key",renameConsumer:"Edit Key",deleteConsumer:"Revoke Key",revoke:"Revoke",deleteConsumerConfirm:"Are you sure you want to revoke this API key? Any members who are currently using %1$s will lose access to it.",pleaseEnterAName:"Please enter a name",parensXPerMonth:"(%1$s per month)",priceIsRequired:"Please enter a price between $%1$s and $%2$s",priceMustBeAtLeast:"Price must be at least $%1$s",priceMustBeNoMoreThan:"Price cannot be more than $%1$s",ratePlanAndPriceRequired:"Please select a rate plan and enter a price",selectOneOrMoreMembers:"Please select one or more members",areYouSure:"Are you sure?",grantXFreeAccess:"Are you sure you want to grant %1$s free access to the selected users?",justAMoment:"Just a moment...",deleteImage:"Are you sure you want to delete this image?",lessErrorUnknown:"Unknown LESS compilation error. Please double check your LESS code and try again.",lessError:function(msg){
return "LESS compilation error: "+msg+".";
},lessErrorIndex:function(msg,idx){
return "LESS compilation error: "+msg+" at index "+idx+".";
},lessErrorLine:function(msg,_2f){
return "LESS compilation error: "+msg+" at line "+_2f+".";
},lessErrorIndexLine:function(msg,idx,_32){
return "LESS compilation error: "+msg+" at index "+idx+" at line "+_32+".";
},characterLimitExceeded:function(_33){
return "The character limit of "+_33+" has been exceeded.";
},lifetimeFreeMembership:"Lifetime free membership",willBeRequiredToPay:"Will be required to pay immediately",nMonthsFreeMembership:function(_34){
return _34==1?"1 month free membership":_34+" months free membership";
},importantPleaseConsider:"IMPORTANT: Please consider your selection carefully before you publish this paywall. This specific action is not reversible.",onceYouPublishPaywall:"Once you publish this paywall you will not be able to reduce the length of free access granted. You will be able to extend additional free access to any individual member from your Member Comp tab.",memberCompSelectionColon:"Member Comp Selection: ",confirmMemberComp:"Confirm Member Comp",confirm:"Confirm",pleaseChooseALogoImage:"Please choose a logo image.",choiceXColonHtml:"<strong>Choice %1$s:</strong> %2$s",noChange:"No Change",weveStartedChanges:"We've started making these changes. Where there's a large number of them, we'll continue processing in the background and it may take a few minutes before they're complete.",disableNativeSignIn:"Disable Native Sign In",disableSignIn:"Disable Sign In",leaveOneSignInOption:"You must leave at least one sign in option enabled so you can continue to access your network.",unblockEmailDomainFromSignUp:"Unblock email domain from sign up",deletingWillAllowSIgnUpUsingThoseEmailAddresses:"Deleting '%1$s' will allow members to sign up using those email addresses. Do you want to continue?",XIsNotAValidEmailDomainUseFollowingFormat:"'%1$s' is not a valid email domain. It should use the following format: @domain.com",unblockIpAddressFromSignUp:"Unblocking IP address from sign up",deletingWillAllowSIgnUpUsingThatIpAddress:"Deleting '%1$s' will allow members to sign up using from that IP address. Do you want to continue?",XIsNotAValidIpAddressUseFollowingFormat:"'%1$s' is not a valid IP address. It should use the following format: 111.222.333.444",XIsAReservedIpCannotBeBlocked:"'%1$s' is a reserved IP address and cannot be blocked."});
dojo.evalObjPath("xg.music.nls",true);
dojo.lang.mixin(xg.music.nls,xg.index.i18n,{play:"play",error:"Error",pleaseSelectTrackToUpload:"Please select a song to upload.",pleaseEnterTrackLink:"Please enter a song URL.",thereAreUnsavedChanges:"There are unsaved changes.",processingFailed:"Sorry, processing failed. Please try again later.",autoplay:"Autoplay",showPlaylist:"Show Playlist",playLabel:"Play",url:"URL",rssXspfOrM3u:"rss, xspf, or m3u",save:"Save",cancel:"Cancel",customizePlayerColors:"Customize Colors",edit:"Edit",shufflePlaylist:"Shuffle Playlist",fileIsNotAnMp3:"One of the files does not seem to be an MP3. Try uploading it anyway?",entryNotAUrl:"One of the entries does not appear to be a URL. Make sure all entries start with <kbd>http://</kbd>"});
dojo.evalObjPath("xg.page.nls",true);
dojo.lang.mixin(xg.page.nls,xg.index.i18n,{resetMetaTags:"Reset Meta Tags",resettingMetaTags:"Resetting your meta tags will erase any customizations you have made.",numberOfCharactersExceedsMaximum:function(n,_36){
return "The number of characters ("+n+") exceeds the maximum ("+_36+")";
},pleaseEnterContent:"Please enter the page content",pleaseEnterTitle:"Please enter a title for the page",pleaseEnterAComment:"Please enter a comment",pleaseEnterAUrl:"Please enter a url for the page",save:"Save",cancel:"Cancel",edit:"Edit",close:"Close",displayPagePosts:"Display Page Posts",directory:"Directory",displayTab:"Display tab",addAnotherPage:"Add Another Page",tabText:"Tab text",urlDirectory:"URL directory",displayTabForPage:"Whether to display a tab for the page",tabTitle:"Tab Title",remove:"Remove",thereIsAProblem:"There is a problem with your information"});
dojo.evalObjPath("xg.photo.nls",true);
dojo.lang.mixin(xg.photo.nls,xg.index.i18n,{random:"Random",loop:"Loop",untitled:"Untitled",photo:"Photo",photos:"Photos",edit:"Edit",photosFromAnAlbum:"Albums",show:"Show",rows:"rows",cancel:"Cancel",customizePlayerColors:"Customize Colors",save:"Save",numberOfCharactersExceedsMaximum:function(n,_38){
return "The number of characters ("+n+") exceeds the maximum ("+_38+")";
},pleaseSelectPhotoToUpload:"Please select a photo to upload.",importingNofMPhotos:function(n,m){
return "Importing <span id=\"currentP\">"+n+"</span> of "+m+" photos.";
},enterAlbumTitle:"Please enter a title for the album",enterPhotosTitle:"Please enter titles for the photos",starting:"Starting\u2026",done:"Done!",from:"From",display:"Display",takingYou:"Taking you to see your photos\u2026",anErrorOccurred:"Unfortunately an error occurred. Please report this issue using the link at the bottom of the page.",weCouldntFind:"We couldn't find any photos! Why don't you try one of the other options?",wereSorry:"We're Sorry",makeThisTheAlbumCover:"Make this the album cover",thisIsTheAlbumCover:"This is the album cover"});
dojo.evalObjPath("xg.activity.nls",true);
dojo.lang.mixin(xg.activity.nls,xg.index.i18n,{edit:"Edit",show:"Show",events:"events",setWhatActivityGetsDisplayed:"Set what activity gets displayed",save:"Save",cancel:"Cancel",newItems:{"f1":"1 new item","f2":"%s new items"},limitNewItems:"%1$s+ new items"});
dojo.evalObjPath("xg.profiles.nls",true);
dojo.lang.mixin(xg.profiles.nls,xg.index.i18n,{select:"Select:",uploadingElipsis:"Uploading\u2026",savingElipsis:"Saving\u2026",loadingElipsis:"Loading\u2026",errorUploadingPhotoColon:"There was an error uploading your photo: %1$s",uploadAProfilePhoto:"Upload A Profile Photo",selectVisiblePhoto:"Select the visible region of your photo.",wereSorryExclamation:"We\u2019re Sorry!",problemOccurred:"A problem occurred. Please try again.",close:"Close",connectToTwitter:"Connect to Twitter",toPostStatus:"To post your Status updates on Twitter, you must connect your profile on %s to Twitter.",addTwitterAccount:"Add Twitter Account",toConnectTwitterAccount:"To connect a new account to Twitter, sign out of Twitter, then click the \"Connect\" button below. Then, sign in with the credentials for the new account.",connect:"Connect",youAreConnectedAsX:"You are connected as %s",youAreConnectedAsFanPage:"You are connected as the %s Facebook Page",ageMustBeAtLeast0:"Age must be at least zero",wereSorryProper:"We're Sorry",pleaseEnterSubject:"Please enter a subject.",messageIsTooLong:function(n){
return "Your message is too long. Please use "+n+" characters or less.";
},comments:"comments",requestLimitExceeded:"Friend Request Limit Exceeded",removeFriendTitle:function(_3c){
return "Remove "+_3c+" As Friend?";
},removeFriendConfirm:function(_3d){
return "Are you sure you want to remove "+_3d+" as a friend?";
},pleaseEnterValueForPost:"Please add some text to the body of the post",postTooLong:"Please limit your blog post to %1$s characters",edit:"Edit",selectCredits:"Please select how many credits you would like.",recentlyAdded:"Recently Added",featured:"Featured",iHaveRecentlyAdded:"I've Recently Added",fromTheSite:"From the Ning Network",cancel:"Cancel",save:"Save",loading:"Loading\u2026",renewMembership:"Renew Membership",pleaseEnterPostBody:"Please enter something for the post body",pleaseEnterChatter:"Please enter something for your comment",warnLostChanges:"Any text you've added to your blog post will be lost.",letMeApproveChatters:"Let me approve comments before posting?",noPostChattersImmediately:"No \u2013 post comments immediately",yesApproveChattersFirst:"Yes \u2013 approve comments first",memberHasChosenToModerate:function(_3e){
return _3e+" has chosen to moderate comments.";
},reallyDeleteThisPost:"Really delete this post?",commentWall:"Comment Wall",commentWallNComments:{"f1":"Comment Wall (1 comment)","f2":"Comment Wall (%s comments)"},statusTooLong:function(_3f){
return "Your status cannot be over "+_3f+" characters.";
},statusCannotBeEmpty:"You need to add text to post an update.",errorUpdatingStatus:"An error occurred while updating your status. Please try again later.",statusHintTooLong:"Please limit your Status update prompt to be under %1$s characters.",youPostedY:"You posted '%1$s'",linkHasBeenPosted:"The link has been posted to Latest Activity",commentTooLong:"Your comment cannot be over %1$s characters.",display:"Display",from:"From",show:"Show",rows:"rows",posts:"posts",htmlCharacters:"HTML Characters",networkError:"Error",wereSorry:"We're sorry, but we are unable to save your new layout at this time. This is likely due to a lost Internet connection. Please check your connection and try again.",returnToDefaultWarning:"This will move all features on your My Page back to the default settings. Would you like to proceed?",returnToDefaultThemeWarning:"This will reset your My Page theme to the network theme. Would you like to proceed?",unableToCompleteAction:"Sorry, we were unable to complete your last action. Please try again later.",selectAtLeastOneMessage:"Sorry, you have to select at least one message to perform that action.",selectedSendersBlocked:{"f1":"The selected sender has been blocked.","f2":"The selected senders have been blocked."},bulkConfirm_blockSender:"This will block the senders of the checked messages.",bulkConfirm_delete:"This will delete the checked messages.",sendingHeader:"Sending message",sendingLabel:"Sending ...",messageSent:"Message Sent",yourMessageHasBeenSent:"Your message has been sent!",nameIsEmpty:"Please enter your name.",countryIsEmpty:"Please enter your country.",zipIsEmpty:"Please enter your zip code.",zipIsIncorrect:"Please enter a valid zip code.",locationIsEmpty:"Please enter your city/state.",birthdays:"birthdays",deleteMessage:"Are you sure you want to delete the selected message?",deleteMessages:function(n){
return "Are you sure you want to delete the "+n+" selected messages?";
},blockSender:"Are you sure you want to block the selected member?",blockSenders:function(n){
return "Are you sure you want to block the "+n+" selected members?";
}});
dojo.evalObjPath("xg.shared.nls",true);
dojo.lang.mixin(xg.shared.nls,xg.index.i18n,{time:function(_42,_43,_44,_45,_46){
return _42+":"+_46+" "+(_44<12?"AM":"PM");
},facebookWillOpen:"Facebook will open a popup window.",autoRecover:"AutoRecover",ifYouAccidentally:"If you accidentally lost your work recently, click this to recover it.",restoreContent:"Restore auto-saved content",noAutoSaveContent:"There is no auto-save content available to restore",ifRestoreSavedContent:"If you restore the saved content, you will lose all the content that is currently in the editor. Are you sure you want to restore the saved content?",fileDoesNotSeem:"The file does not seem to be in .jpg, .gif, or .png format. Would you like to try uploading it anyway?",alreadyMemberSignIn:"Already a member? <a %1$s>Sign in</a>",unsavedChanges:"You have unsaved changes.",areYouSure:"Are You Sure?",pasteText:"Paste as Plain Text",noFileAtUrl:"There is no file at that URL. Please try again.",edit:"Edit","delete":"Delete",uploadFileAnyType:"Upload a file of any type. The file will appear as a link.",linkUrl:"Link URL",title:"Title",uploadFile:"Upload File",media:"Media",file:"File",image:"Image",url:"URL",padding:"Padding",fromMyComputer:"From my computer",fromUrl:"From a URL",link:"Link",linkColon:"Link:",imageColon:"Image:",width:"Width",layout:"Layout",addImage:"Add Image",font:"Font",size:"Size",color:"Color",blockquote:"Blockquote",unorderedList:"Unordered list",orderedList:"Ordered list",removeFormatting:"Remove formatting",addColon:"Add:",visualMode:"Visual Mode",htmlEditor:"HTML Editor",fullscreen:"Fullscreen",returnToNormalSize:"Return to normal size",returnToVisualMode:"Return to Visual Mode",reasonColon:"Reason:",spam:"Spam",contentHasBeenFlagged:"This content has been flagged",contentHasBeenUnFlagged:"The content has been restored",porn:"Sexual Content",illegal:"Illegal",flag:"Flag",inappropriate:"Inappropriate",error:"Error",friendLimitExceeded:"Friend Limit Exceeded",requestLimitExceeded:"Friend Request Limit Exceeded",addNameAsFriend:function(_47){
return "Add "+_47+" as a friend?";
},nameMustBeFriendsToMessage:"You and %1$s must be friends before you can send messages.",nameMustConfirmFriendship:function(_48){
return _48+" will have to accept your friendship.";
},nameMustConfirmYourFriendship:"%1$s will have to confirm your friendship.",addPersonalMessage:"Add a personal message",includePersonalMessage:"Include personal message",typePersonalMessage:"Type your personal message\u2026",thereHasBeenAnError:"There has been an error",message:"Message",send:"Send",addAsFriend:"Add as Friend",friendRequestSent:"Friend Request Sent!",yourFriendRequestHasBeenSent:"Your friend request has been sent.",yourMessage:"Your Message",updateMessage:"Update Message",updateMessageQ:"Update Message?",removeWords:"To make sure your email is delivered successfully, we recommend going back to change or remove the following words:",warningMessage:"It looks like there are some words in this email that might send your email to a Spam folder.",errorMessage:"There are 6 or more words in this email that might send your email to a Spam folder.",goBack:"Go Back",sendAnyway:"Send Anyway",messageIsTooLong:function(n,m){
return "We're sorry. The maximum number of characters is "+m+".";
},yourMessageIsTooLong:function(n){
return "Your message is too long. Please use "+n+" characters or less.";
},locationNotFound:function(_4c){
return "<em>"+_4c+"</em> not found.";
},confirmation:"Confirmation",showMap:"Show Map",hideMap:"Hide Map",yourCommentMustBeApproved:"Your comment must be approved before everyone can see it.",nComments:{"f1":"1 Comment","f2":"%s Comments"},numberOfCharactersExceedsMaximum:"The number of characters (%1$s) exceeds the maximum (%2$s)",pleaseEnterAComment:"Please enter a comment",uploadAPhoto:"Upload a Photo",uploadAnImage:"Upload an image",gifJpgPngLimit:"(GIF, JPEG or PNG; limit %s)",uploadAPhotoEllipsis:"Upload a Photo\u2026",uploadAnImageEllipsis:"Upload an Image\u2026",useExistingImage:"Use existing image:",useExistingPhoto:"Use existing photo:",existingPhoto:"Existing photo",noPhoto:"No photo",uploadPhotoFromComputer:"Upload a photo from your computer",currentPhoto:"Current photo",existingImage:"Existing image",useThemeImage:"Use theme image:",themeImage:"Theme Image",noImage:"No image",uploadImageFromComputer:"Upload an image from your computer",tileThisImage:"Tile this image",done:"Done",currentImage:"Current image",pickAColor:"Select a Color",openColorPicker:"Open Color Picker",transparent:"Transparent",loading:"Loading\u2026",ok:"OK",save:"Save",cancel:"Cancel",saving:"Saving\u2026",addAnImage:"Add an Image",editImage:"Edit Image",uploadAFile:"Upload a File",fileSizeLimit:"Size limit: %1$sMB",pleaseEnterAWebsite:"Please enter a website address",bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"Strikethrough",addHyperink:"Add Hyperlink",options:"Options",wrapTextAroundImage:"Wrap text around image?",alignImage:"Align image on the...",left:"Left",center:"Center",right:"Right",full:"Full",close:"Close",createThumbnail:"Create thumbnail?",resizeImage:"Resize image?",pixels:"pixels",createSmallerVersion:"Create a smaller version of your image to display. Set the width in pixels.",createSmallerVersionSetLongestDimension:"Create a smaller version of your image to display. Set the longest dimension in pixels.",popupWindow:"Popup Window?",linkToOriginal:"Link to original?",linkToFullSize:"Link to the full-size version of the image in a popup window.",add:"Add",update:"Update",keepWindowOpen:"Please keep this browser window open while upload continues.",cancelUpload:"Cancel Upload",pleaseSelectAFile:"Please select an Image File",pleaseSpecifyAThumbnailSize:"Please specify a thumbnail size",thumbnailSizeMustBeNumber:"The thumbnail size must be a number",orUseExistingImage:"or use the existing image",addExistingImage:"or insert an existing image",addExistingFile:"or insert an existing file",clickToEdit:"Click to edit",requestSent:"Request Sent!",pleaseCorrectErrors:"Please correct these errors",noo:"NEW",none:"NONE",joinNow:"Join Now",join:"Join",signIn:"Sign In",signUp:"Sign Up",addToFavorites:"Favorite",removeFromFavorites:"Remove from Favorites",follow:"Follow",stopFollowing:"Stop Following",pendingPromptTitle:"Membership Pending Approval",youCanDoThis:"You can do this once your membership has been approved by the administrators.",editYourTags:"Edit Your Tags",addTags:"Add Tags",editLocation:"Edit Location",editTypes:"Edit Event Type",imageSizeLimit:"(Limit 10 MB)",nChars:{"f1":"1 character","f2":"%1$s characters"},youHaveUnsavedChanges:"You have unsaved changes. Are you sure you want to navigate away?",resetProfilePages:"Reset Profile Pages",thisWillResetProfilePages:"This will reset profile pages to match your new theme.",commentWall:"Comment Wall",commentWallNComments:{"f1":"Comment Wall (1 comment)","f2":"Comment Wall (%s comments)"},marketingParagraph:"Thank you for visiting! Because of the high-quality content found here, we charge for membership.",pricingModifier:"Best Value!",siteDescription:"This site is the #1 destination for learning and sharing about social media. Some of the leaders in the social media space are members.",share:"Share",showAllComments:"Show all <span class=\"xj_comment_count\">%1$s</span> comments",addAComment:"add a comment",fileNeedsToBeUnderX:"Sorry, files need to be under %1$sMB.",fileTooLarge:"Sorry, that file is too large, please try a smaller one.",choosePluralizationForm:function(n){
if(n==1){
return "f1";
}else{
return "f2";
}
},justNow:"just now",nSecondsAgo:{"f1":"1 second ago","f2":"%s seconds ago"},nMinutesAgo:{"f1":"1 minute ago","f2":"%s minutes ago"},nHoursAgo:{"f1":"1 hour ago","f2":"%s hours ago"},yesterday:"yesterday",onDay0:"on Sunday",onDay1:"on Monday",onDay2:"on Tuesday",onDay3:"on Wednesday",onDay4:"on Thursday",onDay5:"on Friday",onDay6:"on Saturday",month0Day:"Jan %1$s",month1Day:"Feb %1$s",month2Day:"Mar %1$s",month3Day:"Apr %1$s",month4Day:"May %1$s",month5Day:"Jun %1$s",month6Day:"Jul %1$s",month7Day:"Aug %1$s",month8Day:"Sep %1$s",month9Day:"Oct %1$s",month10Day:"Nov %1$s",month11Day:"Dec %1$s",month0DayYear:"Jan %1$s, %2$s",month1DayYear:"Feb %1$s, %2$s",month2DayYear:"Mar %1$s, %2$s",month3DayYear:"Apr %1$s, %2$s",month4DayYear:"May %1$s, %2$s",month5DayYear:"Jun %1$s, %2$s",month6DayYear:"Jul %1$s, %2$s",month7DayYear:"Aug %1$s, %2$s",month8DayYear:"Sep %1$s, %2$s",month9DayYear:"Oct %1$s, %2$s",month10DayYear:"Nov %1$s, %2$s",month11DayYear:"Dec %1$s, %2$s"});
dojo.evalObjPath("xg.video.nls",true);
dojo.lang.mixin(xg.video.nls,xg.index.i18n,{edit:"Edit",display:"Display",detail:"Detail",player:"Player",from:"From",show:"Show",videos:"videos",cancel:"Cancel",customizePlayerColors:"Customize Colors",save:"Save",numberOfCharactersExceedsMaximum:function(n,_4f){
return "The number of characters ("+n+") exceeds the maximum ("+_4f+")";
},approve:"Approve",approving:"Approving\u2026",keepWindowOpenWhileApproving:"Please keep this browser window open while videos are being approved. This process may take a few minutes.","delete":"Delete",deleting:"Deleting\u2026",keepWindowOpenWhileDeleting:"Please keep this browser window open while videos are being deleted. This process may take a few minutes.",pasteInEmbedCode:"Please enter embed code for a video below.",invalidUrlFormat:"The URL you entered appears to be an invalid URL format.",pleaseSelectVideoToUpload:"Please select a video to upload.",embedCodeContainsMoreThanOneVideo:"The embed code contains more than one video. Please make sure it has only one <object> and/or <embed> tag.",embedCodeMissingTag:"The embed code is missing an &lt;embed&gt; or &lt;object&gt; tag.",fileIsNotAMov:"This file does not seem to be a .mov, .mpg, .mp4, .avi, .3gp, .3g2 or .wmv. Try uploading it anyway?",embedHTMLCode:"HTML Embed Code:",directLink:"Direct Link",addToMyspace:"Add to MySpace",shareOnFacebook:"Share on Facebook",expand:"Expand",collapse:"Collapse"});
dojo.evalObjPath("xg.uploader.nls",true);
dojo.lang.mixin(xg.uploader.nls,xg.index.i18n,{fileBrowserHeader:"My Computer",fileRoot:"My Computer",fileInformationHeader:"Information",uploadHeader:"Files to Upload",dragOutInstructions:"Drag files out to remove them",dragInInstructions:"Drag Files Here",selectInstructions:"Select a File",files:"Files",totalSize:"Total Size",fileName:"Name",fileSize:"Size",nextButton:"Next >",okayButton:"OK",yesButton:"Yes",noButton:"No",uploadButton:"Upload",cancelButton:"Cancel",backButton:"Back",continueButton:"Continue",uploadingStatus:function(n,m){
return "Uploading "+n+" of "+m;
},uploadLimitWarning:function(n){
return "You can upload "+n+" files at a time.";
},uploadLimitCountdown:{"0":"You've added the maximum number of files.","f1":"You can upload 1 more file.","f2":"You can upload %s more files."},uploadingLabel:"Uploading...",uploadingInstructions:"Please leave this window open while your upload is in progress",iHaveTheRight:"I have the right to upload these files under the <a href=\"/main/authorization/termsOfService\">Terms of Service</a>",updateJavaTitle:"Update Java",updateJavaDescription:"The bulk uploader requires a more recent version of Java. Click \"Okay\" to get Java.",batchEditorLabel:"Edit Information for All Items",applyThisInfo:"Apply this info to the files below",titleProperty:"Title",descriptionProperty:"Description",tagsProperty:"Tags",viewableByProperty:"Can be viewed by",viewableByEveryone:"Anyone",viewableByFriends:"Just My Friends",viewableByMe:"Just Me",albumProperty:"Album",artistProperty:"Artist",enableDownloadLinkProperty:"Enable download link",enableProfileUsageProperty:"Allow people to put this song on their pages",licenseProperty:"License",creativeCommonsVersion:"3.0",selectLicense:"\u2014 Select license \u2014",copyright:"\xa9 All Rights Reserved",ccByX:function(n){
return "Creative Commons Attribution "+n;
},ccBySaX:function(n){
return "Creative Commons Attribution Share Alike "+n;
},ccByNdX:function(n){
return "Creative Commons Attribution No Derivatives "+n;
},ccByNcX:function(n){
return "Creative Commons Attribution Non-commercial "+n;
},ccByNcSaX:function(n){
return "Creative Commons Attribution Non-commercial Share Alike "+n;
},ccByNcNdX:function(n){
return "Creative Commons Attribution Non-commercial No Derivatives "+n;
},publicDomain:"Public Domain",other:"Other",errorUnexpectedTitle:"Oops!",errorUnexpectedDescription:"There's been an error. Please try again.",errorTooManyTitle:"Too Many Items",errorTooManyDescription:function(n){
return "We're sorry, but you can only upload "+n+" items at a time.";
},errorNotAMemberTitle:"Not Allowed",errorNotAMemberDescription:"We're sorry, but you need to be a member to upload.",errorContentTypeNotAllowedTitle:"Not Allowed",errorContentTypeNotAllowedDescription:"We're sorry, but you're not allowed to upload this type of content.",errorUnsupportedFormatTitle:"Oops!",errorUnsupportedFormatDescription:"We're sorry, but we don't support this type of file.",errorUnsupportedFileTitle:"Oops!",errorUnsupportedFileDescription:"foo.exe is in an unsupported format.",errorUploadUnexpectedTitle:"Oops!",errorUploadUnexpectedDescription:function(_5a){
return _5a?("There appears to be a problem with the "+_5a+" file. Please remove it from the list before uploading the rest of your files."):"There appears to be a problem with the file at the top of the list. Please remove it before uploading the rest of your files.";
},cancelUploadTitle:"Cancel Upload?",cancelUploadDescription:"Are you sure you want to cancel the remaining uploads?",uploadSuccessfulTitle:"Upload Completed",uploadSuccessfulDescription:"Please wait while we take you to your uploads...",uploadPendingDescription:"Your files were successfully uploaded and are awaiting approval.",photosUploadHeader:"Photos to Upload",photosDragOutInstructions:"Drag photos out to remove them",photosDragInInstructions:"Drag Photos Here",photosSelectInstructions:"Select a Photo",photosFiles:"Photos",photosUploadingStatus:function(n,m){
return "Uploading Photo "+n+" of "+m;
},photosErrorTooManyTitle:"Too Many Photos",photosErrorTooManyDescription:function(n){
return "We're sorry, but you can only upload "+n+" photos at a time.";
},photosErrorContentTypeNotAllowedDescription:"We're sorry, but photo uploading has been disabled.",photosErrorUnsupportedFormatDescription:"We're sorry, but you can only upload .jpg, .gif or .png format images.",photosErrorUnsupportedFileDescription:function(n){
return n+" is not a .jpg, .gif or .png file.";
},photosBatchEditorLabel:"Edit Information for All Photos",photosApplyThisInfo:"Apply this info to the photos below",photosErrorUploadUnexpectedDescription:function(_5f){
return _5f?("There appears to be a problem with the "+_5f+" file. Please remove it from the list before uploading the rest of your photos."):"There appears to be a problem with the photo at the top of the list. Please remove it before uploading the rest of your photos.";
},photosUploadSuccessfulDescription:"Please wait while we take you to your photos...",photosUploadPendingDescription:"Your photos were successfully uploaded and are awaiting approval.",photosUploadLimitWarning:function(n){
return "You can upload "+n+" photos at a time.";
},photosUploadLimitCountdown:{"0":"You've added the maximum number of photos.","f1":"You can upload 1 more photo.","f2":"You can upload %s more photos."},photosIHaveTheRight:"I have the right to upload these photos under the <a href=\"/main/authorization/termsOfService\">Terms of Service</a>",videosUploadHeader:"Videos to Upload",videosDragInInstructions:"Drag Videos Here",videosDragOutInstructions:"Drag videos out to remove them",videosSelectInstructions:"Select a Video",videosFiles:"Videos",videosUploadingStatus:function(n,m){
return "Uploading Video "+n+" of "+m;
},videosErrorTooManyTitle:"Too Many Videos",videosErrorTooManyDescription:function(n){
return "We're sorry, but you can only upload "+n+" videos at a time.";
},videosErrorContentTypeNotAllowedDescription:"We're sorry, but video uploading has been disabled.",videosErrorUnsupportedFormatDescription:"We're sorry, but you can only upload .avi, .mov, .mp4, .wmv or .mpg format videos.",videosErrorUnsupportedFileDescription:function(x){
return x+" is not a .avi, .mov, .mp4, .wmv or .mpg file.";
},videosBatchEditorLabel:"Edit Information for All Videos",videosApplyThisInfo:"Apply this info to the videos below",videosErrorUploadUnexpectedDescription:function(_65){
return _65?("There appears to be a problem with the "+_65+" file. Please remove it from the list before uploading the rest of your videos."):"There appears to be a problem with the video at the top of the list. Please remove it before uploading the rest of your videos.";
},videosUploadSuccessfulDescription:"Please wait while we take you to your videos...",videosUploadPendingDescription:"Your videos were successfully uploaded and are awaiting approval.",videosUploadLimitWarning:function(n){
return "You can upload "+n+" videos at a time.";
},videosUploadLimitCountdown:{"0":"You've added the maximum number of videos.","f1":"You can upload 1 more video.","f2":"You can upload %s more videos."},videosIHaveTheRight:"I have the right to upload these videos under the <a href=\"/main/authorization/termsOfService\">Terms of Service</a>",musicUploadHeader:"Songs to Upload",musicTitleProperty:"Song Title",musicDragOutInstructions:"Drag songs out to remove them",musicDragInInstructions:"Drag Songs Here",musicSelectInstructions:"Select a Song",musicFiles:"Songs",musicUploadingStatus:function(n,m){
return "Uploading Song "+n+" of "+m;
},musicErrorTooManyTitle:"Too Many Songs",musicErrorTooManyDescription:function(n){
return "We're sorry, but you can only upload "+n+" songs at a time.";
},musicErrorContentTypeNotAllowedDescription:"We're sorry, but song uploading has been disabled.",musicErrorUnsupportedFormatDescription:"We're sorry, but you can only upload .mp3 format songs.",musicErrorUnsupportedFileDescription:function(x){
return x+" is not a .mp3 file.";
},musicBatchEditorLabel:"Edit Information for All Songs",musicApplyThisInfo:"Apply this info to the songs below",musicErrorUploadUnexpectedDescription:function(_6b){
return _6b?("There appears to be a problem with the "+_6b+" file. Please remove it from the list before uploading the rest of your songs."):"There appears to be a problem with the song at the top of the list. Please remove it before uploading the rest of your songs.";
},musicUploadSuccessfulDescription:"Please wait while we take you to your songs...",musicUploadPendingDescription:"Your songs were successfully uploaded and are awaiting approval.",musicUploadLimitWarning:function(n){
return "You can upload "+n+" songs at a time.";
},musicUploadLimitCountdown:{"0":"You've added the maximum number of songs.","f1":"You can upload 1 more song.","f2":"You can upload %s more songs."},musicIHaveTheRight:"I have the right to upload these songs under the <a href=\"/main/authorization/termsOfService\">Terms of Service</a>"});
dojo.evalObjPath("xg.events.nls",true);
dojo.lang.mixin(xg.events.nls,xg.index.i18n,{pleaseEnterTitle:"Please enter a title for the event",pleaseEnterDescription:"Please enter a description for the event",messageIsTooLong:function(n){
return "Your message is too long. Please use "+n+" characters or less.";
},pleaseEnterLocation:"Please enter a location for the event",pleaseEnterType:"Please enter at least one type for the event",sendMessageToGuests:"Message Guests",sendMessageToGuestsThat:"Send message to guests that:",areAttending:"Are attending",mightAttend:"Might attend",haveNotYetRsvped:"Have not yet RSVPed",areNotAttending:"Are not attending",yourMessage:"Your Message",send:"Send",sending:"Sending\u2026",yourMessageIsBeingSent:"Your message is being sent.",messageSent:"Message Sent!",yourMessageHasBeenSent:"Your message has been sent.",chooseRecipient:"Please choose a recipient.",pleaseEnterAMessage:"Please enter a message",thereHasBeenAnError:"There has been an error",datePickerDateFormat:"mm/dd/yy",monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday",mondayAbbreviated:"Mon",tuesdayAbbreviated:"Tue",wednesdayAbbreviated:"Wed",thursdayAbbreviated:"Thu",fridayAbbreviated:"Fri",saturdayAbbreviated:"Sat",sundayAbbreviated:"Sun",mondayShort:"M",tuesdayShort:"T",wednesdayShort:"W",thursdayShort:"T",fridayShort:"F",saturdayShort:"S",sundayShort:"S",januaryShort:"J",februaryShort:"F",marchShort:"M",aprilShort:"A",mayShort:"M",juneShort:"J",julyShort:"J",augustShort:"A",septemberShort:"S",octoberShort:"O",novemberShort:"N",decemberShort:"D",januaryAbbreviated:"Jan",februaryAbbreviated:"Feb",marchAbbreviated:"Mar",aprilAbbreviated:"Apr",mayAbbreviated:"May",juneAbbreviated:"Jun",julyAbbreviated:"Jul",augustAbbreviated:"Aug",septemberAbbreviated:"Sep",octoberAbbreviated:"Oct",novemberAbbreviated:"Nov",decemberAbbreviated:"Dec",january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"});
dojo.evalObjPath("xg.notes.nls",true);
dojo.lang.mixin(xg.notes.nls,xg.index.i18n,{addNewNote:"Add New Note",pleaseEnterNoteTitle:"Please enter a note title!",noteTitleTooLong:"Note title is too long",pleaseEnterNoteEntry:"Please enter a note entry",noteHasBeenChanged:"Note has been changed."});
dojo.evalObjPath("xg.gifts.nls",true);
dojo.lang.mixin(xg.gifts.nls,xg.index.i18n,{thereHasBeenAnError:"There has been an error",pleaseSelectGift:"Please select a gift.",buyCredits:"Buy Credits",moreCreditsRequired:"More Credits Required",added:"Added!",creditsRequired:"Credits Required:",xCreditsForYUSD:"%1$s Credits \u2013 $%2$s USD",xCreditsForYUSDBonus:"%1$s Credits \u2013 $%2$s USD, <span %4$s>%3$s Bonus</span>",purchaseCreditsToSend:"Please purchase some credits to send this gift.",purchaseCredits:"Purchase Credits:",byMakingPurchase:"By making a purchase, you are agreeing to the <a %1$s>Virtual Gifts Terms</a>.",payPalCheckout:"PayPal Checkout",close:"Close",removeCategory:"Remove Category",thisWillRemoveThisCategory:"This will remove this category from the Gift Store as well as all gifts in that category. You can add this category back at any time, and the gifts will reappear in the Gift Store.",pleaseEnterMessage:"Please enter a message.",unableToCompleteAction:"We were unable to complete your last action. Please try again later.",messageHasToBeShorter:"Message has to be shorter than %1$s characters.",pleaseEnterAGiftName:"Please enter a gift name.",pleaseEnterAGiftImage:"Please select a gift image.",pleaseEnterName:"Please enter your name.",pleaseEnterPhone:"Please enter your phone number.",pleaseEnterPayPal:"Please enter your PayPal email address.",contactEmailInvalid:"The contact email does not seem to be valid.",pleaseEnterStreetAddress:"Please enter your street address.",pleaseEnterCity:"Please enter your city.",pleaseEnterStateOrProvince:"Please enter your state or province.",pleaseEnterPostalCode:"Please enter your postal code.",pleaseEnterDescription:"Please enter a description for your Ning Network.",credits:"Credits",xCredits:"%1$s Credits",totalCostXCredits:function(x){
if(x==1){
return "Total Cost: 1 Credit";
}else{
return "Total Cost: "+x+" Credits";
}
},oneCredit:"1 Credit",free:"Free",wereSorry:"We're Sorry",giftSent:"Gift Sent!",feature:"Feature",stopFeaturing:"Stop Featuring",yourGiftsHasBeenSentToXMembers:{"f1":"Your gift has been sent. You now have %2$s credits left.","f2":"Your gifts have been sent to %1$s members. You now have %2$s credits left."},yourGiftsHasBeenSentToXMembersModerate:{"f1":"Your gift has been sent but the recipient has chosen to moderate gifts, and will need to approve the gifts before they appear. You now have %2$s credits left.","f2":"Your gifts have been sent to %1$s members. Some recipients have chosen to moderate gifts, and will need to approve the gifts before they appear. You now have %2$s credits left."},unableToSendGiftsMsg:"There was some problem sending your gifts. Please try again.",cannotDeleteCategory:"You cannot remove this category because you must have a minimum of %1$s categories in the Gift Store. Please add another category before removing this one.",cannotDeleteGiftItem:"<p>You cannot remove this gift because there must be a minimum of %1$s gifts in the Gift Store. Please <a %2$s>add another gift</a> before removing this one. You can also <a %3$s>upload a custom gift</a>.</p>",searchGifts:"Search Gifts",removeACategory:"Remove a Category",clickToSelectTheCategoryYouWouldLikeToRemove:"Click to select a category you would like to remove, and then click the \"X\" icon that appears to the right side of the category name. You will be asked to confirm the removal. Please note that you cannot remove the All, Custom, Featured or Awards categories.",renameACategory:"Rename a Category",clickToSelectTheCategoryYouWouldLikeToRename:"Click to select a category you would like to rename, and then click the \"Edit\" link that appears to the right of the category name. Please note that you cannot rename the All, Custom, Featured or Awards categories.",pleaseSelectARecipient:"Please select a recipient",pleaseEnterKeywordToSearch:"Please enter a keyword to search",giftMessageHasHTMLConfirmTitle:"Please Check Your Gift Message",giftMessageHasHTMLConfirmBody:"HTML will be removed from your message. Do you still want to send your gift?",sendGift:"Send Gift",editMessage:"Edit Message",imagesMustBeUnder:"Please select a gift image that is under 10 KB. The image you selected is too large. <a href=\"http://www.ning.com/help/?p=4373\" target=\"_blank\">Need help?</a>",giftImageUnder:"Please select a gift image that is under 10 KB. The image you selected is too large. <a %1$s>Click here</a> to get help creating a custom gift image.",imageInInvalidFormat:"Please select an accepted image type (PNG, GIF, or JPEG).",enterAMessageFor:"Enter a Message for %1$s",enterAMessage:"Enter a Message",waitWhileRedirect:"Please wait while we redirect you to PayPal\u2026",yourGiftHasBeenAddedToYourProfilePage:"Your gift has been added to your profile page. You now have %1$s credits left.",ncOnly:"Network Creator Only",autoManageGiftStore:"Automatic Ning Gift Management",autoManageGiftStoreExpl:"Choose whether the Gift Store updates automatically.",autoManageGiftStoreOnExpl:"The Gift Store will automatically update with new and seasonal Ning Gifts. ",autoManageGiftStoreOffExpl:"All Ning Gifts will be removed from the Gift Store. You can pick and choose which Ning Gifts appear in the Gift Store by going to \"Add Ning Gifts\".",onCap:"On",offCap:"Off",unlimited:"Unlimited",nLeft:"%1$s Left",sellingOut:"Selling Out",awards:"Awards",notEnoughGiftsLeft:"Not enough gifts left. Please choose fewer recipients.",next:"Next &gt;",previous:"&lt; Previous",searchMembers:"Search Members",showFriendsOnly:"Show Friends Only",maxN:function(n){
return "max "+n;
},nSelected:function(_70,n){
return "<span "+_70+">"+n+"</span> Selected";
},addRecipients:"Add Recipients"});
dojo.evalObjPath("xg.appearance.nls",true);
dojo.lang.mixin(xg.appearance.nls,xg.index.i18n,{sorryYourImageIsGreaterThan1MB:"Sorry, your image is greater than 1MB",errorUploadingImage:"There was an unknown error uploading your image.  Please try again later.",uploadAccessDenied:"Upload access denied.  Please make sure you are still logged in.",unsupportedFormat:"File is not an image, or has an unsupported image format."});
dojo.evalObjPath("xg.spamfolder.nls",true);
dojo.lang.mixin(xg.spamfolder.nls,xg.index.i18n,{updatingEllipsis:"Updating\u2026"});
}
if(!dojo.hostenv.findModule("xg.shared.PostLink",false)){
dojo.provide("xg.shared.PostLink");
dojo.widget.defineWidget("xg.shared.PostLink",dojo.widget.HtmlWidget,{_url:"<required>",_confirmQuestion:"",_confirmTitle:"",_confirmOkButtonText:"",_reload:false,posting:false,_joinPromptText:"",_isPending:false,_checkPaywall:false,_doPromptJoin:1,fillInTemplate:function(_1,_2){
this._confirmOkButtonText=this._confirmOkButtonText||xg.index.nls.text("ok");
var a=this.getFragNodeRef(_2);
dojo.style.show(a);
dojo.event.connect(a,"onclick",dojo.lang.hitch(this,function(_4){
dojo.event.browser.stopEvent(_4);
if(this._checkPaywall&&xg.shared.util.showPaywallIfPresent()){
return;
}
if(this.posting){
return;
}
var f=dojo.lang.hitch(this,function(){
if(!this._confirmQuestion){
this.post();
}else{
xg.shared.util.confirm({title:this._confirmTitle,bodyHtml:"<p>"+dojo.string.escape("html",this._confirmQuestion)+"</p>",onOk:dojo.lang.hitch(this,this.post),okButtonText:this._confirmOkButtonText});
}
});
this._doPromptJoin?xg.shared.util.promptToJoin(this._joinPromptText,this._isPending,f):f();
}));
},post:function(){
this.posting=true;
if(this._reload!=false){
dojo.io.bind({url:this._url,method:"post",encoding:"utf-8",load:function(_6,_7,_8){
window.location.reload(true);
}});
}else{
xg.shared.util.postSynchronously(this._url);
}
}});
}
if(!dojo.hostenv.findModule("xg.shared.OptionBox",false)){
dojo.provide("xg.shared.OptionBox");
dojo.widget.defineWidget("xg.shared.OptionBox",dojo.widget.HtmlWidget,{fillInTemplate:function(_1,_2){
var _3=x$(this.getFragNodeRef(_2));
if(!_3.find("li")[0]){
return;
}
_3.addClass("optionbox");
_3.removeClass("adminbox").removeClass("adminbox-right").removeClass("actionpadding");
_3.find(".xg_module_head").remove();
var _4=_3.find(".xg_module");
if(_3.hasClass("xg_module")){
var _5=_3.find(".xg_module_body");
var _6=x$("<div class=\"xg_module\"></div>");
if(_3.hasClass("xg_span-4")){
_6.addClass("xg_span-4");
_3.removeClass("xg_span-4");
}
_3.removeClass("xg_module");
_3.append(_6);
_6.append(_5);
}else{
if(_4&&!_4[0]){
var _7=x$("<div class=\"xg_module\"><div class=\"xg_module_body\"></div></div>");
_3.append(_7);
_3.children().not(".xg_module").each(function(){
_7.find(".xg_module_body").append(this);
});
}
}
var _8=x$("ul.navigation").eq(0);
var _9=_8.find(".optionlink");
if(!_9[0]){
_9=x$("<a href=\"#\" id=\"xj_optionlink\" class=\"xg_sprite xg_sprite-setting optionlink\">"+xg.shared.nls.html("options")+"</a>");
var li=x$("<li class=\"right xg_lightborder navbutton\"></li>");
li.append(_9);
_8.append(li);
}
xg.shared.util.dropdownMenu({"srcNode":_9.parent(),"menuNode":_3,"showOnClick":true});
x$(".xj_pa_delete").click(function(_b){
_b.preventDefault();
xg.shared.util.alert({bodyHtml:x$(this).attr("data-text"),title:x$(this).attr("data-title")});
});
}});
}
if(!dojo.hostenv.findModule("xg.shared.FlagLink",false)){
dojo.provide("xg.shared.FlagLink");
dojo.widget.defineWidget("xg.shared.FlagLink",dojo.widget.HtmlWidget,{_url:"<required>",_action:"flag",_completeText:"",_completeTitle:"",_completeOkButtonText:"",_link:null,fillInTemplate:function(_1,_2){
this._completeOkButtonText=this._completeOkButtonText||xg.index.nls.text("ok");
xg.shared.FlagLink._type="unspecified";
var a=this.getFragNodeRef(_2);
dojo.style.show(a);
xg.shared.FlagLink._link=a;
dojo.event.connect(a,"onclick",dojo.lang.hitch(this,function(_4){
dojo.event.browser.stopEvent(_4);
if(this._action=="flag"){
xg.shared.FlagLink._type="inappropriate";
html="<p>";
html+="<table><tr><td valign=\"top\">"+xg.shared.nls.text("reasonColon")+" </td><td>";
html+="<input checked onclick=\"xg.shared.FlagLink._type=this.value\" type=\"radio\" id=\"a4\" name=\"abuseType\" value=\"inappropriate\"><label for=\"a4\"> "+xg.shared.nls.text("inappropriate")+"</label></input><br/>";
html+="<input onclick=\"xg.shared.FlagLink._type=this.value\" type=\"radio\" id=\"a1\" name=\"abuseType\" value=\"spam\"><label for=\"a1\"> "+xg.shared.nls.text("spam")+"</label></input><br/>";
html+="<input onclick=\"xg.shared.FlagLink._type=this.value\" type=\"radio\" id=\"a2\" name=\"abuseType\" value=\"porn\"><label for=\"a2\"> "+xg.shared.nls.text("porn")+"</label></input><br/>";
html+="<input onclick=\"xg.shared.FlagLink._type=this.value\" type=\"radio\" id=\"a3\" name=\"abuseType\" value=\"illegal\"><label for=\"a3\"> "+xg.shared.nls.text("illegal")+"</label></input>";
html+="</td></tr></table>";
html+="</p>";
xg.shared.util.confirm({title:xg.shared.nls.text("flag"),onOk:dojo.lang.hitch(this,this.post),bodyHtml:html});
}else{
xg.shared.FlagLink._type=null;
this.post();
}
}));
},post:function(){
url=this._url+((this._action=="flag")?"&flag="+xg.shared.FlagLink._type:"");
dojo.io.bind({url:url,method:"post",encoding:"utf-8",mimetype:"text/javascript",preventCache:true,load:dojo.lang.hitch(this,function(_5,_6,_7){
})});
x$(xg.shared.FlagLink._link).replaceWith((this._action=="flag")?xg.shared.nls.text("contentHasBeenFlagged"):xg.shared.nls.text("contentHasBeenUnFlagged"));
}});
}
if(!dojo.hostenv.findModule("xg.shared.PromptToJoinButton",false)){
dojo.provide("xg.shared.PromptToJoinButton");
dojo.widget.defineWidget("xg.shared.PromptToJoinButton",dojo.widget.HtmlWidget,{_joinPromptText:"",_url:"",_signInUrl:"",_isPending:false,fillInTemplate:function(_1,_2){
var _3=this.getFragNodeRef(_2);
dojo.event.connect(_3,"onclick",dojo.lang.hitch(this,function(_4){
dojo.event.browser.stopEvent(_4);
xg.shared.util.promptToJoin(this._joinPromptText,this._isPending,dojo.lang.hitch(this,function(){
window.location=this._url;
}),dojo.lang.hitch(this,function(){
window.location=this._signInUrl;
}));
}));
}});
}
if(!dojo.hostenv.findModule("xg.shared.PromptToJoinLink",false)){
dojo.provide("xg.shared.PromptToJoinLink");
dojo.widget.defineWidget("xg.shared.PromptToJoinLink",dojo.widget.HtmlWidget,{_joinPromptText:"",_signInUrl:"",_isPending:false,_extraButtonData:false,_signUpText:"signUp",_hasSignUp:true,fillInTemplate:function(_1,_2){
var a=this.getFragNodeRef(_2);
var _4=this._signInUrl;
dojo.event.connect(a,"onclick",dojo.lang.hitch(this,function(_5){
dojo.event.browser.stopEvent(_5);
xg.shared.util.promptToJoin(this._joinPromptText,this._isPending,function(){
window.location=a.href;
},function(){
window.location=_4;
},this._extraButtonData,this._signUpText,this._hasSignUp);
}));
}});
}
if(!dojo.hostenv.findModule("xg.shared.frameBusting",false)){
dojo.provide("xg.shared.frameBusting");
dojo.widget.defineWidget("xg.shared.frameBusting",dojo.widget.HtmlWidget,{_isAdminOrNC:"",_appUrl:"",fillInTemplate:function(_1,_2){
if(self!=top){
if(this._isAdminOrNC=="1"){
this.showBanner();
}else{
top.location.replace(this._appUrl);
}
}
},showBanner:function(){
var _3="<div class=\"framebusting-banner\" id=\"frame_error_overlay_content\"> \t\t\t\t    \t<div style=\"margin: 0pt auto; padding: 1.5em 0pt; width: 440px;\"> \t\t\t\t        \t<h3><strong>"+xg.index.nls.text("frameBustingMsgTitle")+"</strong></h3> \t\t\t\t\t        <p>"+xg.index.nls.text("frameBustingMsg","target=\"_top\" href=\"http://help.ning.com\"","target=\"_blank\"  href=\"/\"")+"</p><br/> \t\t\t\t\t    </div> \t\t\t\t\t</div>";
x$("#xj_msg").html(_3);
x$("#xj_msg").show();
x$("#xg").css("padding-top","150px");
xg.shared.util.showOverlay();
}});
}
if(!dojo.hostenv.findModule("xg.shared.SpamWarning",false)){
dojo.provide("xg.shared.SpamWarning");
dojo.widget.defineWidget("xg.shared.SpamWarning",dojo.widget.HtmlWidget,{_messageParts:"",_attachTo:"",_url:"",fillInTemplate:function(_1,_2){
this._attachTo=dojo.json.evalJson(this._attachTo);
for(var i=0;i<this._attachTo.length;i++){
this.installHandler(this._attachTo[i]);
}
},installHandler:function(id){
var el=dojo.byId(id),_6=this;
if(el){
dojo.event.connect(el,"onsubmit",function(_7){
_6.doCheck(_7,el,function(){
xg.shared.util.hideOverlay();
el.submit();
},function(){
xg.shared.util.hideOverlay();
},function(){
});
});
}
},doCheck:function(_8,_9,_a,_b,_c){
if(_8){
dojo.event.browser.stopEvent(_8);
}
var ta=_9.getElementsByTagName("textarea"),_e,_f=[],_10=this;
for(var i=0;i<ta.length;i++){
if(ta[i].name.match(/message/i)){
_f.push(ta[i].value);
}
}
if(_f.length>1){
return alert("Assertion failed: SpamWarning form cannot contain more than 1 TEXTAREA with name ~ /message/");
}else{
if(_f.length){
_e=dojo.json.evalJson(this._messageParts);
_e[xg.shared.nls.text("yourMessage")]=_f[0];
_e=dojo.json.serialize(_e);
}else{
_e=this._messageParts;
}
}
dojo.io.bind({url:this._url,mimetype:"text/javascript",method:"post",content:{xn_out:"json",messageParts:_e},encoding:"utf-8",preventCache:true,load:function(_12,_13,_14){
switch(_13.status){
default:
case "ok":
_a();
break;
case "warning":
_10.showDialog(xg.shared.nls.text("updateMessageQ"),xg.shared.nls.text("warningMessage"),_13.messageParts,_a,_b,_c);
break;
case "error":
_10.showDialog(xg.shared.nls.text("updateMessage"),xg.shared.nls.text("errorMessage"),_13.messageParts,undefined,_b,_c);
break;
}
}});
},showDialog:function(_15,_16,_17,_18,_19,_1a){
var _1b="";
for(var i in _17){
if(!_17[i].length){
continue;
}
for(var j=0,lst=[];j<_17[i].length;j++){
lst[j]="\""+_17[i][j].replace(/<\/?[\w-]+[^>]*>/g,"")+"\"";
}
_1b+="<p><strong>"+i+"</strong><br/>"+lst.join(", ")+"</p>";
}
var _1f=dojo.html.createNodesFromText("<div class=\"xg_floating_module\">"+"<div style=\"background-image: none;\" class=\"xg_floating_container xg_lightborder xg_module\">"+"<div class=\"xg_module_head\"><h2>"+_15+"</h2></div>"+"<div class=\"xg_module_body\">"+"<p>"+_16+"</p>"+"<p>"+xg.shared.nls.text("removeWords")+"</p>"+_1b+"<p class=\"buttongroup\">"+"<input class=\"button action-primary\" type=\"button\" value=\""+xg.shared.nls.text("goBack")+"\"> "+(_18?"<input class=\"button\" type=\"button\" value=\""+xg.shared.nls.text("sendAnyway")+"\">":"")+"</p>"+"</div>"+"</div>"+"</div>")[0];
if(_1a){
_1a();
}
xg.shared.util.showOverlay();
xg.append(_1f);
dojo.event.connect(dojo.html.getElementsByClass("button",_1f)[0],"onclick",dojo.lang.hitch(this,function(_20){
dojo.event.browser.stopEvent(_20);
dojo.dom.removeNode(_1f);
_19();
}));
if(_18){
dojo.event.connect(dojo.html.getElementsByClass("button",_1f)[1],"onclick",dojo.lang.hitch(this,function(_21){
dojo.event.browser.stopEvent(_21);
dojo.dom.removeNode(_1f);
_18();
}));
}
}});
xg.shared.SpamWarning.checkForSpam=function(_22){
var sw=new xg.shared.SpamWarning;
sw._url=_22.url;
sw._messageParts=_22.messageParts;
sw.doCheck(null,_22.form,_22.onContinue,_22.onBack,_22.onWarning);
};
}
if(!dojo.hostenv.findModule("xg.shared.IframeUpload",false)){
dojo.provide("xg.shared.IframeUpload");
(function(){
var _1=function(_2,_3){
if(window[_2]){
return window[_2];
}
if(window.frames[_2]){
return window.frames[_2];
}
var _4=null;
if(x$.browser.msie&&parseInt(x$.browser.version,10)<9){
_4=document.createElement("<iframe name=\""+_2+"\" src=\"about:blank\" onload=\""+_3+"\">");
}else{
_4=document.createElement("iframe");
_4.setAttribute("name",_2);
_4.setAttribute("id",_2);
_4.setAttribute("src","about:blank");
_4.onload=new Function(_3);
}
if(dojo.render.html.safari){
_4.style.position="absolute";
}
_4.style.left=_4.style.top=_4.style.height=_4.style.width="1px";
_4.style.visibility="hidden";
return xg.append(_4);
};
var _5=function(_6){
var _7=_6.contentDocument||(((_6.name)&&(_6.document)&&(document.getElementsByTagName("iframe")[_6.name].contentWindow)&&(document.getElementsByTagName("iframe")[_6.name].contentWindow.document)))||((_6.name)&&(document.frames[_6.name])&&(document.frames[_6.name].document))||null;
return _7;
};
var _8=undefined,_9="xg_shared_transport",_a=undefined,_b=undefined,_c=undefined,_d=undefined;
var _e=function(){
_a?_c.setAttribute("target",_a):_c.removeAttribute("target");
_c.setAttribute("action",_b);
_d=undefined;
};
xg.shared.IframeUpload={_onLoadTransport:function(){
if(!_8){
return;
}
if(_5(_8).location!="about:blank"&&_d){
var _f=undefined,_10=_d;
_e();
if(x$(_8).attr("_jsonContainsHtml")){
try{
_f=x$(_5(_8).body).text();
}
catch(e){
_f=null;
}
}else{
try{
_f=_5(_8).body.innerHTML;
}
catch(e){
_f=null;
}
}
if(_f.match(/^<pre[^>]*>([\s\S]*)<\/pre>/i)){
_f=RegExp.$1;
}
if(!x$(_8).attr("_jsonContainsHtml")){
_f=_f.replace(/&amp;/gm,"&").replace(/&quot;/gm,"\"").replace(/&#39;/gm,"'").replace(/&lt;/gm,"<").replace(/&gt;/gm,">");
}else{
_f=x$("<div/>").html(_f).text();
}
_10(_f);
}
},_fixUrlParamsForJsonContainingHtml:function(_11){
var url=_11.getAttribute("action");
url=xg.shared.util.addParameter(url,"escapeHtmlInResponse","1");
_11.setAttribute("action",xg.shared.util.removeParameter(url,"xn_out"));
},start:function(_13,_14,url,_16,_17){
if(typeof _16!="undefined"&&_16==true){
_a=undefined;
_c=undefined;
_b=undefined;
_d=undefined;
}
if(!_8){
_8=_1(_9,"xg.shared.IframeUpload._onLoadTransport()");
}
if(_17||_13.getAttribute("data-jsonContainsHtml")){
x$(_8).attr("_jsonContainsHtml","1");
}else{
x$(_8).removeAttr("_jsonContainsHtml");
}
if(_d){
}
_d=_14;
_c=_13;
_a=_13.getAttribute("target");
_b=_13.getAttribute("action");
_13.setAttribute("target",_9);
if(url){
_13.setAttribute("action",url);
}
if(_17||_13.getAttribute("data-jsonContainsHtml")){
xg.shared.IframeUpload._fixUrlParamsForJsonContainingHtml(_13);
}
_13.submit();
},stop:function(){
_e();
_8.src="about:blank";
}};
})();
}
if(!dojo.hostenv.findModule("xg.index.util.ScrollIntoView",false)){
dojo.provide("xg.index.util.ScrollIntoView");
xg.index.util.ScrollIntoView={scrollIntoView:function(_1){
var _2=x$(_1);
var _3=_2.css("padding-top");
var _4=_2.css("padding-bottom");
var _5=_3&&_3.indexOf("px")>-1?parseInt(_3,10):0;
var _6=_4&&_4.indexOf("px")>-1?parseInt(_4,10):0;
var _7={top:_2.offset().top+_5,bottom:_2.offset().top+_2.height()+_6};
var _8={top:x$(window).scrollTop(),bottom:x$(window).scrollTop()+x$(window).height()};
var _9;
if(_7.top<_8.top){
_9=_7.top;
}else{
if(_7.bottom>_8.bottom){
_9=Math.min(_7.top,_8.top+(_7.bottom-_8.bottom));
}
}
if(_9){
x$("html,body").animate({scrollTop:_9},100);
}
}};
}
if(!dojo.hostenv.findModule("xg.index.util.FormHelper",false)){
dojo.provide("xg.index.util.FormHelper");
xg.index.util.FormHelper={runValidation:function(_1,_2,_3,_4){
xg.index.util.FormHelper.hideErrorMessages(_1);
dojo.lang.forEach(dojo.html.getElementsByClass("success",dojo.byId("xg_body")),function(_5){
dojo.style.hide(_5);
});
xg.index.util.FormHelper.trimTextInputsAndTextAreas(_1);
var _6=_2(_1);
if(dojo.lang.isEmpty(_6)){
return true;
}
if(_4){
dojo.event.browser.stopEvent(_4);
}
xg.index.util.FormHelper.showErrorMessages(_1,_6,_3);
return false;
},configureValidation:function(_7,_8,_9){
var _a;
var _b;
if(_7.tagName=="FORM"){
_a="onsubmit";
_b=_7;
}else{
_a="onclick";
_b=dojo.dom.getFirstAncestorByTag(_7,"form");
}
dojo.event.connect(_b,_a,function(_c){
return xg.index.util.FormHelper.runValidation(_b,_8,_9,_c);
});
},validateAndProcess:function(_d,_e,_f,_10,_11){
var _12;
var _13;
if(_d.tagName=="FORM"){
_12="onsubmit";
_13=_d;
}else{
_12="onclick";
_13=dojo.dom.getFirstAncestorByTag(_d,"form");
}
dojo.event.connect(_d,_12,function(_14){
dojo.lang.forEach(dojo.html.getElementsByClass("error",_13),function(_15){
dojo.html.removeClass(_15,"error");
});
xg.index.util.FormHelper.trimTextInputsAndTextAreas(_13);
var _16=_e(_13);
xg.index.util.FormHelper.hideErrorMessages(_13);
dojo.event.browser.stopEvent(_14);
if(dojo.lang.isEmpty(_16)){
if(typeof (_11)!=="undefined"){
_11(_f,_13);
}else{
_f(_13);
}
}else{
xg.index.util.FormHelper.showErrorMessages(_13,_16,_10);
}
});
},validateAndSave:function(_17,_18,_19,_1a,_1b,_1c){
xg.index.util.FormHelper.validateAndProcess(_17,_18,function(_1d){
xg.index.util.FormHelper.save(_1d,_19,_1d.action,_1b);
},_1a,_1c);
},trimTextInputsAndTextAreas:function(_1e){
dojo.lang.forEach(_1e.getElementsByTagName("textarea"),function(_1f){
_1f.value=dojo.string.trim(_1f.value);
});
dojo.lang.forEach(_1e.getElementsByTagName("input"),function(_20){
if(_20.type=="text"){
_20.value=dojo.string.trim(_20.value);
}
});
},save:function(_21,_22,url,_24){
if(!xg.index.util.FormHelper.validateFileInputsSpeciallyForIE(_21)){
return;
}
var _25=function(_26){
if(typeof _26=="string"){
_26=dj_parseJSON(_26);
}
try{
if("errorMessages" in _26){
xg.index.util.FormHelper.showErrorMessages(_21,_26.errorMessages);
if(_24){
_24(_26);
}
return;
}
_22(_26);
}
catch(e){
xg.index.util.FormHelper.showErrorMessages(_21,{});
return;
}
};
var _27=xg.index.util.FormHelper.hasFileFields(_21);
if(_27){
xg.shared.IframeUpload.start(_21,_25,url);
}else{
dojo.io.bind({url:url,mimetype:"text/plain",formNode:_21,method:"post",encoding:"utf-8",preventCache:true,load:function(_28,_29,_2a){
_25(_29);
},error:function(_2b,_2c){
throw _2c.message;
}});
}
},hideErrorMessages:function(_2d){
var _2e=xg.index.util.FormHelper.notificationNode(_2d);
if(_2e){
_2e.innerHTML="";
dojo.html.hide(_2e);
}
dojo.lang.forEach(dojo.html.getElementsByClass("error",_2d),function(el){
dojo.html.removeClass(el,"error");
},true);
},showErrorMessages:function(_30,_31,_32){
var _33=xg.index.util.FormHelper.notificationNode(_30);
var _34="";
xg.index.util.FormHelper.hideErrorMessages(_30);
if(dojo.lang.isString(_31)){
var _35=null;
var _36=null;
var i=0;
while((_35==null)&&(_36=_30[i])){
if(_36.tagName!="FIELDSET"){
_35=_36.name;
}
i++;
}
if(_35){
var tmp={};
tmp[_35]=_31;
_31=tmp;
}
}
for(name in _31){
if(_30[name]){
var _39=(_30[name].tagName!="SELECT"&&_30[name].length)?_30[name][0]:_30[name];
xg.index.util.FormHelper.showErrorMessage(_39);
}
if(dojo.lang.isArray(_31[name])){
dojo.lang.forEach(_31[name],function(n){
_34+="<li>"+n+"</li>";
},true);
}else{
_34+="<li>"+_31[name]+"</li>";
}
}
if(_33&&_34.length&&_33.tagName=="DL"){
if(!(_32&&_32.length)){
_32=xg.index.nls.html("wereSorry");
}
if(x$(_33).attr("_fmt")=="std"){
_33.innerHTML="<h3>"+_32+"</h3><ul class=\"errors last-child\">"+_34+"</ul>";
}else{
_33.innerHTML="<dt>"+_32+"</dt><dd><ul>"+_34+"</ul></dd>";
dojo.html.setClass(_33,"errordesc msg clear");
}
}
if(_33&&_34.length&&_33.tagName=="DIV"&&!x$(_33).hasClass("dy-error-msg")){
if(!(_32&&_32.length)){
_32=xg.index.nls.html("wereSorry");
}
_33.innerHTML="<h3>"+_32+"</h3><ul class=\"errors last-child\">"+_34+"</ul>";
dojo.html.setClass(_33,"errordesc");
}
if(_33&&_34.length&&_33.tagName=="DIV"&&x$(_33).hasClass("dy-error-msg")){
if(!(_32&&_32.length)){
_32=xg.index.nls.html("wereSorry");
}
_33.innerHTML="<p>"+_32+"</p><ul class=\"errors last-child\">"+_34+"</ul>";
}
if(_33&&_34.length){
dojo.html.show(_33);
xg.index.util.ScrollIntoView.scrollIntoView(_33);
}
},notificationNode:function(_3b){
var id;
if(dojo.byId("form_notify")!=null){
return dojo.byId("form_notify");
}
if(dojo.lang.isString(_3b)){
id=_3b+"_notify";
}else{
id=_3b.id+"_notify";
}
return dojo.byId(id);
},showErrorMessage:function(_3d){
if(_3d.getAttribute("dojotype")=="Editor"){
return false;
}
var _3e=_3d.parentNode;
if(_3e.tagName=="LABEL"){
_3e=_3e.parentNode;
}
if(_3e.tagName=="DIV"&&dojo.html.hasClass("texteditor",_3e)){
_3e=_3e.parentNode;
}
if(_3e.tagName=="LI"){
if(dojo.dom.getFirstAncestorByTag(_3e,"UL")){
_3e=dojo.dom.getFirstAncestorByTag(_3e,"UL").parentNode;
}else{
if(dojo.dom.getFirstAncestorByTag(_3e,"OL")){
_3e=dojo.dom.getFirstAncestorByTag(_3e,"OL").parentNode;
}
}
}
dojo.html.addClass(_3e,"error");
if(_3e.tagName=="DD"){
var _3f=dojo.dom.prevElement(_3e);
if(_3f.tagName=="DT"){
dojo.html.addClass(_3f,"error");
}
}
},showMessage:function(_40,_41,_42,_43){
dojo.html.setClass(_40,_41+" msg");
_43=dojo.string.trim(_43);
if(_43.length&&(_43.charAt(0)!="<")){
_43="<p>"+_43+"</p>";
}
_40.innerHTML="<dt>"+_42+"</td><dd>"+_43+"</dd>";
dojo.html.show(_40);
},hasFileFields:function(_44){
var _45=_44.getElementsByTagName("input");
for(var i=0;i<_45.length;i++){
if(_45[i].type&&_45[i].type.toLowerCase()=="file"){
return true;
}
}
return false;
},indexOf:function(_47,_48){
for(var i=0;i<_48.length;i++){
if(_48.options[i].value===_47){
return i;
}
}
return null;
},select:function(_4a,_4b){
var i=xg.index.util.FormHelper.indexOf(_4a,_4b);
if(i!=null){
_4b.selectedIndex=i;
}else{
return false;
}
return true;
},selectedOption:function(_4d){
return _4d[_4d.selectedIndex];
},radioValue:function(_4e){
for(var i=0;i<_4e.length;i++){
if(_4e[i].checked){
return _4e[i].value;
}
}
return null;
},showOrHide:function(_50,_51){
if(_51){
dojo.html.show(_50);
}else{
dojo.html.hide(_50);
}
},iframeTransportSupportsBrowser:function(){
return dojo.render.html.ie||dojo.render.html.mozilla;
},replaceHashAnchors:function(_52){
var _53=_52.getElementsByTagName("a");
for(var i=0;i<_53.length;i++){
if(_53[i].href.match(/#$/)){
_53[i].href="javascript:void(0)";
}
}
},scrollIntoView:function(_55){
xg.index.util.ScrollIntoView.scrollIntoView(_55);
},validateFileInputsSpeciallyForIE:function(_56){
if(!(dojo.render.html.ie50||dojo.render.html.ie55||dojo.render.html.ie60)){
return true;
}
var _57={};
var _58=_56.getElementsByTagName("input");
for(var i=0;i<_58.length;i++){
if(_58[i].tagName!="INPUT"||_58[i].type!="file"){
continue;
}
if(_58[i].value.length===0){
continue;
}
if(!_58[i].value.match(/^[A-Za-z]:\\/)){
_57[_58[i].name]=xg.index.nls.html("fileNotFound");
}
}
xg.index.util.FormHelper.showErrorMessages(_56,_57);
return dojo.lang.isEmpty(_57);
},validateRequired:function(_5a,_5b,_5c,_5d){
if(_5b[_5c]){
if(x$(_5b[_5c]).is(":checkbox")){
if(xg.index.util.FormHelper.checkedCount(_5b[_5c])==0){
_5a=xg.index.util.FormHelper.addValidationError(_5a,_5c,_5d);
}
}else{
if(!_5b[_5c].value.length){
_5a=xg.index.util.FormHelper.addValidationError(_5a,_5c,_5d);
}
}
}
return _5a;
},parseDateFromForm:function(_5e,_5f){
var _60=_5e[_5f+"_month"];
var _61=_5e[_5f+"_day"];
var _62=_5e[_5f+"_year"];
if(_60&&_61&&_62){
var _63=parseInt(_60.value);
var day=(_61.value=="dd")?0:parseInt(_61.value.replace(/^0*/,""));
var _65=(_62.value=="yyyy")?0:parseInt(_62.value);
if((_63==0)||(day==0)||(_65==0)){
return false;
}else{
return {"month":_63,"day":day,"year":_65};
}
}else{
return null;
}
},isDateValid:function(_66,_67,day){
var d=new Date(_66,_67-1,day);
return ((d.getFullYear()==_66)&&(d.getMonth()==(_67-1))&&(d.getDate()==day));
},validateRequiredDate:function(_6a,_6b,_6c,_6d,_6e){
var res=xg.index.util.FormHelper.parseDateFromForm(_6b,_6c);
if(res===false){
_6a=xg.index.util.FormHelper.addValidationError(_6a,_6c+"_month",_6d);
}else{
if(res&&(!xg.index.util.FormHelper.isDateValid(res.year,res.month,res.day))){
_6a=xg.index.util.FormHelper.addValidationError(_6a,_6c+"_month",_6e);
}
}
return _6a;
},validateDate:function(_70,_71,_72,_73){
var res=xg.index.util.FormHelper.parseDateFromForm(_71,_72);
if(res&&(!xg.index.util.FormHelper.isDateValid(res.year,res.month,res.day))){
_70=xg.index.util.FormHelper.addValidationError(_70,_72+"_month",_73);
}
return _70;
},validateChoice:function(_75,_76,_77,_78,_79){
var _7a=xg.index.util.FormHelper.checkedCount(_76[_77]);
if(_76[_77]&&(_7a>0)){
_79=xg.index.util.FormHelper.buildValidationLabel(_77,_79);
if(_7a>1){
_75=xg.index.util.FormHelper.addValidationError(_75,_77,_79+" can only have one value ");
}
var _7b=null;
if(typeof (_76[_77].length)!=="undefined"){
for(var i=0;i<_76[_77].length;i++){
if(_76[_77][i].checked===true){
_7b=_76[_77][i].value;
}
}
}else{
_7b=_76[_77].value;
}
if(!dojo.lang.inArray(_78,_7b)){
_75=xg.index.util.FormHelper.addValidationError(_75,_77,_79+" has to be one of: "+_78.join(", "));
}
}
return _75;
},validateMultipleChoice:function(_7d,_7e,_7f,_80,_81){
if(_7e[_7f]&&(xg.index.util.FormHelper.checkedCount(_7e[_7f])>0)){
_81=xg.index.util.FormHelper.buildValidationLabel(_7f,_81);
var _82=[];
if(typeof (_7e[_7f].length)!=="undefined"){
for(var i in _7e[_7f]){
if(_7e[_7f][i].checked===true){
_82.push(_7e[_7f][i].value);
}
}
}else{
_82.push(_7e[_7f].value);
}
dojo.lang.forEach(_82,function(_84){
if(!dojo.lang.inArray(_80,_84)){
_7d=xg.index.util.FormHelper.addValidationError(_7d,_7f,_81+" has to be some of: "+_80.join(", "));
}
},true);
}
return _7d;
},capitalize:function(str){
var _86=str.split(" ");
for(var i=0;i<_86.length;i++){
_86[i]=_86[i].charAt(0).toUpperCase()+_86[i].substring(1);
}
return _86.join(" ");
},buildValidationLabel:function(_88,_89){
if(!_89){
_89=xg.index.util.FormHelper.capitalize(_88.replace(/_/," "));
}
return _89;
},addValidationError:function(_8a,_8b,_8c){
if(_8a[_8b]){
_8a[_8b].push(_8c);
}else{
_8a[_8b]=_8c;
}
return _8a;
},checkedCount:function(_8d){
var _8e=0;
if(_8d&&(typeof (_8d.length)!="undefined")){
for(var i=0;i<_8d.length;i++){
if(_8d[i].checked===true){
_8e++;
}
}
}
return _8e;
},fixPopupZIndexAfterShow:function(_90){
if(!dojo.render.html.ie){
return;
}
dojo.lang.forEach(xg.index.util.FormHelper.popupAncestorsForZIndexFix(_90),function(_91){
_91.style.zIndex=10;
});
},fixPopupZIndexBeforeHide:function(_92){
if(!dojo.render.html.ie){
return;
}
dojo.lang.forEach(xg.index.util.FormHelper.popupAncestorsForZIndexFix(_92),function(_93){
_93.style.zIndex=null;
});
},popupAncestorsForZIndexFix:function(_94){
return dojo.dom.getAncestors(_94,function(_95){
return dojo.html.hasClass(_95,"xg_module")||dojo.html.hasClass(_95,"xg_module_body");
});
},setTokenData:function(_96){
if(x$(".xj_stgnfst").length==0){
return;
}
var _97=x$(".xj_gnfst");
var ts=x$(".xj_gnfstTs");
if(typeof _96!="undefined"){
_97=x$(_96+" .xj_gnfst");
ts=x$(_96+" .xj_gnfstTs");
}
var url=_97.attr("_url");
xg.get(url,"",function(r,_9b){
if(typeof _9b!=="object"||_9b.part0===1){
return;
}
var _9c=_9b.part1;
var n=10;
var str=_9b.part1;
var _9f=str.replace(/[a-zA-Z]/g,function(c){
return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);
});
tp=_9f.substr(0,n);
tn=_9f.substr(n,_9c.length);
ts.val(tp);
_97.val(tn);
});
}};
}
if(!dojo.hostenv.findModule("xg.shared.AddAsFriendLink",false)){
dojo.provide("xg.shared.AddAsFriendLink");
dojo.widget.defineWidget("xg.shared.AddAsFriendLink",dojo.widget.HtmlWidget,{_screenName:"",_name:"",_maxMessageLength:0,_requestSentClasses:"",_xgSourceParam:undefined,_friendLimitExceededMessage:"",_sentFriendRequestLimitExceededMessage:"",_sendMessageAttempt:false,_checkFriendStatusAndLimitsUrl:"",_sendMessageUrl:"",fillInTemplate:function(_1,_2){
this.a=this.getFragNodeRef(_2);
var _3=this;
x$(this.a).click(function(_4){
_4.preventDefault();
var _5=_3._checkFriendStatusAndLimitsUrl;
if("undefined"!=typeof this._xgSourceParam){
_5=_5+"&xg_source="+this._xgSourceParam;
}
xg.get(_5,null,function(r,_7){
if(_7.friendLimitExceeded){
xg.shared.util.alert({title:xg.shared.nls.text("friendLimitExceeded"),bodyHtml:dojo.string.escape("html",_3._friendLimitExceededMessage)});
return false;
}
if(_7.sentFriendRequestLimitExceeded){
xg.shared.util.alert({title:xg.shared.nls.text("requestLimitExceeded"),bodyHtml:dojo.string.escape("html",_3._sentFriendRequestLimitExceededMessage)});
return false;
}
if(_7.friendStatus!=undefined){
if(_7.friendStatus=="pending"){
xg.shared.util.alert({title:xg.index.nls.text("wereSorry"),bodyHtml:xg.index.nls.html("youCantSendMessageUntilFriend",_3._name)});
return false;
}else{
if(_7.friendStatus=="friend"){
document.location.href=_3._sendMessageUrl;
return false;
}
}
}
_3.showDialog(_3.a);
});
});
},toggleDescIcon:function(a,_9){
if(_9){
if(_9=="working"){
dojo.html.removeClass(a,"xg_sprite");
dojo.html.removeClass(a,"xg_sprite-add");
dojo.html.addClass(a,"desc");
dojo.html.addClass(a,"working");
}else{
dojo.html.removeClass(a,"working");
dojo.html.removeClass(a,"desc");
dojo.html.addClass(a,"xg_sprite");
dojo.html.addClass(a,"xg_sprite-add");
}
}
},showDialog:function(a){
var _b=xg.shared.nls.html("typePersonalMessage");
var _c=xg.shared.util.confirm({title:xg.shared.nls.text("addNameAsFriend",this._name),bodyHtml:"                 <dl class=\"errordesc msg clear\" style=\"display: none\"></dl>                 <p>"+(this._sendMessageAttempt?xg.shared.nls.html("nameMustBeFriendsToMessage",dojo.string.escape("html",this._name))+" "+xg.shared.nls.html("nameMustConfirmYourFriendship",dojo.string.escape("html",this._name)):xg.shared.nls.html("nameMustConfirmFriendship",dojo.string.escape("html",this._name)))+"</p>                 <p><a href=\"#\">"+xg.shared.nls.html(this._sendMessageAttempt?"includePersonalMessage":"addPersonalMessage")+"</a></p>                 <p style=\"display:none\"><textarea class=\"add-friend-message\" name=\"message\" cols=\"20\" rows=\"3\"></textarea></p>",okButtonText:xg.shared.nls.text(this._sendMessageAttempt?"addAsFriend":"send"),closeOnlyIfOnOk:true,onOk:dojo.lang.hitch(this,function(_d){
var _e=_d.getElementsByTagName("form")[0];
if(!this.validate(_e)){
return false;
}
xg.shared.SpamWarning.checkForSpam({url:"/main/invitation/checkMessageForSpam",messageParts:"{}",form:_e,onContinue:dojo.lang.hitch(this,function(){
dojo.style.hide(_d);
if(_e.message.value==_b){
_e.message.value="";
}
this.send(_d,_e,a);
}),onBack:function(){
dojo.style.show(_d);
},onWarning:function(){
dojo.style.hide(_d);
}});
})});
var _f=_c.getElementsByTagName("form")[0];
xg.shared.util.setAdvisableMaxLength(_f.message,this._maxMessageLength);
var _10=_f.getElementsByTagName("a")[0];
dojo.event.connect(_10,"onclick",dojo.lang.hitch(this,function(_11){
dojo.event.browser.stopEvent(_11);
x$(_10.parentNode).remove();
x$(_f.message.parentNode).show();
_f.message.value=_b;
_f.message.focus();
dojo.html.selectInputText(_f.message);
}));
},send:function(_12,_13,a){
dojo.style.hide(_12);
dojo.io.bind({url:"/profiles/friendrequest/create?xn_out=json&screenName="+this._screenName,mimetype:"text/javascript",formNode:_13,method:"post",encoding:"utf-8",preventCache:true,load:dojo.lang.hitch(this,function(_15,_16,_17){
if(!_16.success){
return;
}
xg.shared.util.alert({title:xg.shared.nls.text("friendRequestSent"),bodyHtml:xg.shared.nls.html("yourFriendRequestHasBeenSent"),autoCloseTime:2000});
var _18=x$("#add-as-friend-link")[0];
var _19=x$("#send-message-link")[0];
var _1a=dojo.html.createNodesFromText("<a class=\""+this._requestSentClasses+"\">"+xg.shared.nls.html("requestSent")+"</a>")[0];
if(this._sendMessageAttempt&&a!=_18){
_18.parentNode.replaceChild(_1a,_18);
a.parentNode.removeChild(a);
}else{
if(_19){
_19.parentNode.removeChild(_19);
}
a.parentNode.replaceChild(_1a,a);
}
})});
},validate:function(_1b){
var _1c=[];
dojo.lang.forEach(dojo.html.getElementsByClass("error",_1b),function(_1d){
dojo.html.removeClass(_1d,"error");
});
if(dojo.string.trim(_1b.message.value).length>this._maxMessageLength){
_1c.push(xg.shared.nls.html("yourMessageIsTooLong",this._maxMessageLength));
xg.index.util.FormHelper.showErrorMessage(_1b.message);
}
var _1e=_1b.getElementsByTagName("dl")[0];
_1e.innerHTML="<dt>"+xg.shared.nls.html("thereHasBeenAnError")+"</dt><dd><ol><li>"+_1c.join("</li><li>")+"</li></ol></dd>";
dojo.style.setShowing(_1e,_1c.length>0);
return _1c.length==0;
}});
}
if(!dojo.hostenv.findModule("xg.shared.Pagination",false)){
dojo.provide("xg.shared.Pagination");
dojo.widget.defineWidget("xg.shared.Pagination",dojo.widget.HtmlWidget,{_gotoUrl:"",_maxPage:1,span:null,fillInTemplate:function(_1,_2){
this.span=x$(this.getFragNodeRef(_2));
this.span.show();
var _3=this.span.children(".goto_button:first");
if(_3){
_3.click(dojo.lang.hitch(this,function(_4){
dojo.event.browser.stopEvent(_4);
this.gotoUrl();
}));
}
},gotoUrl:function(){
var _5=this.span.children(".pagination_input:first");
if(_5){
var _6=new String(_5.val());
if(_6.search(/^[1-9][0-9]*$/)!=-1){
pageUrl=new String(this._gotoUrl).replace(/__PAGE___/,(_5.val()>this._maxPage)?this._maxPage:_5.val());
window.location.href=pageUrl;
}
}
}});
}
if(!dojo.hostenv.findModule("xg.shared.combobox",false)){
dojo.provide("xg.shared.combobox");
xg.shared.combobox={"showList":function(_1,_2){
var _3=_1.offset();
var h=_1.outerHeight();
var w=_1.outerWidth();
_2.attr("id","xj_combobox");
_2.addClass("xg_combobox");
_2.css({"position":"absolute","top":_3.top+h+2,"left":_3.left+1,"width":w});
x$("body").append(_2);
if(xg.shared.combobox.clickaway){
x$("body").unbind("click",xg.shared.combobox.clickaway);
}
var _6=function(_7){
x$("body").unbind(_7);
if(!xg.shared.combobox.isDescendent(_7.target,_1.parent()[0])&&!xg.shared.combobox.isDescendent(_7.target,_2[0])){
xg.shared.combobox.hideList(_2);
}else{
x$("body").click(function(_8){
_6(_8);
});
}
};
x$("body").click(function(_9){
_6(_9);
});
xg.shared.combobox.clickaway=_6;
_2.keydown(function(_a){
var _b=_2[0].selectedIndex;
switch(_a.keyCode){
case 38:
if(_b==0){
_a.preventDefault();
_2[0].selectedIndex=-1;
_1.focus();
}
break;
case 40:
if(_b==(_2[0].options.length-1)){
_a.preventDefault();
_2[0].selectedIndex=-1;
_1.focus();
}
break;
case 13:
_a.preventDefault();
_2.find("option:selected").click();
break;
}
});
_2.find("option").mouseover(function(_c){
_2.focus();
this.selected=true;
});
_2.find("option").click(function(_d){
_d.preventDefault();
_1.val(x$(this).val());
_1.change();
xg.shared.combobox.hideList(_2);
});
_2.click(function(_e){
_e.preventDefault();
var _f=_2.find("option:selected");
_1.val(_f.val());
xg.shared.combobox.hideList(_2);
});
_2[0].selectedIndex=-1;
_1.focus();
},"isDescendent":function(_10,_11){
var _12=false;
if(_11==_10){
return true;
}
x$(_11).find("*").each(function(i,_14){
if(_14==_10){
_12=true;
}
});
return _12;
},"hideList":function(_15){
if(!_15){
_15=x$("#xj_combobox");
}
if(!_15.length){
return false;
}
if(xg.shared.combobox.clickaway){
x$("body").unbind("click",xg.shared.combobox.clickaway);
}
_15.remove();
return true;
},"click":function(_16,_17){
if(xg.shared.combobox.hideList()){
return;
}
if(_17.prop("disabled")){
return;
}
var _18=xg.shared.combobox.getList(_17);
if(!_18){
return;
}
xg.shared.combobox.showList(_17,_18);
},"keydown":function(_19,_1a){
var _1b=x$("#xj_combobox");
if(_1b.length){
switch(_19.keyCode){
case 38:
_19.preventDefault();
_1b.focus();
window.setTimeout(function(){
_1b[0].selectedIndex=_1b[0].options.length-1;
},1);
xg.shared.combobox.cancelKey=true;
break;
case 40:
_19.preventDefault();
var _1b=x$("#xj_combobox");
_1b.focus();
window.setTimeout(function(){
_1b[0].selectedIndex=0;
},1);
xg.shared.combobox.cancelKey=true;
break;
}
}
},"keyup":function(_1c,_1d){
if(xg.shared.combobox.cancelKey){
xg.shared.combobox.cancelKey=false;
return;
}
var _1e=xg.shared.combobox.getList(_1d,true);
xg.shared.combobox.hideList();
if(!_1e){
return;
}
xg.shared.combobox.showList(_1d,_1e);
},"getList":function(_1f,_20){
var _21=_20?_1f.val().toLowerCase():"";
var _22=_1f.data("list");
var _23=[];
var _24=x$("<div/>");
_22.find("option").each(function(i,opt){
var _27=x$(opt).val();
_27=_24.text(_27).html();
if(!_21||_27.toLowerCase().indexOf(_21)!=-1){
_23.push("<option value=\""+_27+"\">"+_27+"</option>");
}
});
if(_23.length==0){
return;
}
var sel=x$("<select>"+_23.join("")+"</select>");
sel.attr("size",Math.min(_23.length+1,10));
return sel;
},"initialize":function(){
x$("input[list]").each(function(i,_2a){
var _2b=x$(_2a);
_2b.wrap("<span>");
var _2c=_2b.attr("list");
_2b.removeAttr("list");
_2b.attr("autocomplete","off");
if(typeof _2c=="string"){
var src=x$("#"+_2c);
if(src.find("option").length==0){
src=x$("#"+_2c+"-select");
}
_2c=src.remove();
}else{
_2c=x$(_2c);
}
_2b.data("list",_2c);
_2b.css({"padding-right":"1.5em"});
_2b.keydown(function(_2e){
xg.shared.combobox.keydown(_2e,_2b);
});
_2b.keyup(function(_2f){
xg.shared.combobox.keyup(_2f,_2b);
});
var _30=x$("<span class=\"xg_combobox_arrow\">\u25bc</span>");
var ih=_2b.outerHeight();
var _32=_2b.parents(":hidden").filter(function(){
return x$(this).css("display")=="none";
});
if(_32.length){
_32.show();
ih=_2b.outerHeight();
_32.hide();
}
_30.css({"color":_2b.css("color"),"font-size":ih*0.45});
if(x$.browser.safari){
_30.css({"line-height":"1.7em","text-indent":"-2px"});
}
_2b.focus(function(_33){
_30.css({"color":_2b.css("color")});
});
_2b.after(_30);
_30.click(function(_34){
xg.shared.combobox.click(_34,_2b);
});
});
}};
xg.addOnRequire(function(){
xg.shared.combobox.initialize();
});
}
if(!dojo.hostenv.findModule("xg.shared.SubTabHover",false)){
dojo.provide("xg.shared.SubTabHover");
dojo.widget.defineWidget("xg.shared.SubTabHover",dojo.widget.HtmlWidget,{a:null,subTabDiv:null,li:null,showTimeoutHandle:null,hideTimeoutHandle:null,showSubTabTime:150,hideSubTabTime:150,fillInTemplate:function(_1,_2){
this.li=this.getFragNodeRef(_2);
this.a=dojo.dom.firstElement(this.li);
this.subTabDiv=dojo.dom.nextElement(this.a);
var _3=!!("ontouchstart" in window);
if(_3){
this.initForTouchScreenDevice();
}else{
this.initForNonTouchScreenDevice();
}
},initForTouchScreenDevice:function(){
var $a=x$(this.a);
var _5=x$("<li style=\"list-style:none !important;display:block;text-align:left;\"></li>");
var _6=x$("<a style=\"float:none;\"><span></span></a>");
_6.prop("target",$a.attr("target"));
_6.attr("href",$a.attr("href"));
_6.find("span").html($a.find("span").html());
_5.append(_6);
var _7=this;
x$(this.subTabDiv).find("ul").prepend(_5);
$a.click(function(e){
e.preventDefault();
e.stopPropagation();
var _9=!$a.hasClass("hovered");
_7.hideAllSubTabs();
if(_9){
_7.showSubTab();
}
});
x$(document).click(function(e){
_7.hideAllSubTabs();
});
},initForNonTouchScreenDevice:function(){
xg.listen(this.a,"onmouseover",this,function(_b){
clearTimeout(this.hideTimeoutHandle);
this.showTimeoutHandle=setTimeout(dojo.lang.hitch(this,"showSubTab"),this.showSubTabTime);
});
xg.listen(this.a,"onmouseout",this,function(_c){
clearTimeout(this.showTimeoutHandle);
this.hideTimeoutHandle=setTimeout(dojo.lang.hitch(this,"hideSubTab"),this.hideSubTabTime);
});
xg.listen(this.subTabDiv,"onmouseover",this,function(_d){
clearTimeout(this.hideTimeoutHandle);
});
xg.listen(this.subTabDiv,"onmouseout",this,function(_e){
this.hideTimeoutHandle=setTimeout(dojo.lang.hitch(this,"hideSubTab"),this.hideSubTabTime);
});
},hideAllSubTabs:function(){
x$.each(dojo.widget.manager.getWidgetsByType("SubTabHover"),function(i,_10){
_10.hideSubTab();
});
},showSubTab:function(){
clearTimeout(this.hideTimeoutHandle);
var o=xg.shared.util.getOffset(this.li,this.subTabDiv);
dojo.html.addClass(this.a,"hovered");
dojo.style.setStyleAttributes(this.subTabDiv,"z-index:100;position:absolute;display:block;left: "+(o.x)+"px; top:"+(o.y+parseInt(this.li.offsetHeight))+"px;");
},hideSubTab:function(){
clearTimeout(this.showTimeoutHandle);
dojo.style.hide(this.subTabDiv);
if(this.ieiframe){
this.ieiframe.style.display="none";
}
dojo.html.removeClass(this.a,"hovered");
}});
}
if(!dojo.hostenv.findModule("xg.index.panel",false)){
dojo.provide("xg.index.panel");
xg.addOnRequire(function(){
var _1=dojo.byId("xg_sitename");
if(_1){
var _2=_1.getElementsByTagName("img");
if(_2){
xg.shared.util.fixImagesInIE(_2,true);
}
}
});
}
if(!dojo.hostenv.findModule("xg.index.embed.search",false)){
dojo.provide("xg.index.embed.search");
xg.addOnRequire(function(){
xg.shared.util.addHints(x$(".xj_search_hint"),true);
});
}
if(!dojo.hostenv.findModule("xg.shared.CookieStore",false)){
dojo.provide("xg.shared.CookieStore");
xg.shared.CookieStore=(function(){
var _1={};
var _={};
var _3="xg_sc";
var _4="xg_pc";
var _5=366;
var _6={};
var _7={};
_.initialize=function(){
_1.reloadSessionCookie();
_1.reloadPersistentCookie();
};
_1.reloadSessionCookie=function(){
var _8=xg.shared.util.getCookie(_3);
if(_8){
try{
_6=x$.evalJSON(_8);
}
catch(e){
try{
_6=x$.evalJSON(decodeURIComponent(_8.replace(/\+/g," ")));
}
catch(e){
}
}
}
if(_6 instanceof Array){
_6={};
}
};
_1.reloadPersistentCookie=function(){
var _9=xg.shared.util.getCookie(_4);
if(_9){
try{
_7=x$.evalJSON(_9);
}
catch(e){
try{
_7=x$.evalJSON(decodeURIComponent(_9.replace(/\+/g," ")));
}
catch(e){
}
}
}
if(_7 instanceof Array){
_7={};
}
};
_1.setSessionCookieValue=function(_a,_b){
if(_b===null||_b.length===0){
delete _6[_a];
}else{
_6[_a]=_b;
}
_.setCookieProper(_3,x$.toJSON(_6),0);
};
_1.getSessionCookieValue=function(_c){
return _6[_c];
};
_1.setPersistentCookieValue=function(_d,_e){
if(_e===null||_e.length===0){
delete _7[_d];
}else{
_7[_d]=_e;
}
_.setCookieProper(_4,x$.toJSON(_7),_5);
};
_1.getPersistentCookieValue=function(_f){
return _7[_f];
};
_.setCookieProper=function(_10,_11,_12){
xg.shared.util.setCookie(_10,_11,_12,"."+window.location.hostname);
};
xg.addOnRequire(function(){
_.initialize();
});
return _1;
})();
}
if(!dojo.hostenv.findModule("xg.index.embed.sidebarUserBox",false)){
dojo.provide("xg.index.embed.sidebarUserBox");
xg.index.embed.sidebarUserBox={isPopulated:function(_1){
return x$(_1).attr("_notCached")!="1";
},toggleFriendRequestCounts:function(_2){
var _3=new Array();
var _4="undefined"!=typeof _2||isNaN(_2);
_3["xj_no_friend_requests"]=!_4||_2<1;
_3["xj_multiple_friend_requests"]=_4&&_2>1;
_3["xj_one_friend_request"]=_4&&_2==1;
for(var _5 in _3){
if(_3[_5]){
x$("."+_5).show();
}else{
x$("."+_5).hide();
}
}
}};
xg.addOnRequire(function(){
var _6="auth-type";
var _7=xg.index.embed.sidebarUserBox;
var _8=x$(".xj_count_unreadMessages")[0];
var _9=x$(".xj_count_unreadAlerts")[0];
var _a=x$(".xj_count_friendRequestsReceived .xj_count")[0];
var _b=x$("#xj_approvalBox")[0];
var r={preventCache:true,getMessageCount:_7.isPopulated(_8)?0:1,getAlertCount:_7.isPopulated(_9)?0:1,getFriendRequestCount:_7.isPopulated(_a)?0:1,getApprovalLinks:_7.isPopulated(_b)?0:1};
if(r.getMessageCount||r.getAlertCount||r.getFriendRequestCount||r.getApprovalLinks){
xg.get("/main/embed/getSidebarCounts?xn_out=json",r,function(_d,_e){
if("undefined"==typeof _e){
return;
}
if(r.getMessageCount){
if(_e.messageCount>0){
x$(_8).html(_e.messageCount);
x$(".xj_messages_present").show();
}else{
x$(".xj_messages_present").hide();
}
}
if(r.getAlertCount){
if(_e.alertCount>0){
x$(_9).html(_e.alertCount);
x$(".xj_alerts_present").show();
}else{
x$(".xj_alerts_present").hide();
}
}
if(r.getFriendRequestCount){
if(_e.friendRequestCount>0){
x$(_a).html(_e.friendRequestCount);
}
_7.toggleFriendRequestCounts(_e.friendRequestCount);
}
if(r.getApprovalLinks&&_e.approvalLinksHtml){
x$(_b).html(_e.approvalLinksHtml).show();
}
});
}
});
}
if(!dojo.hostenv.findModule("xg.index.embed.footer",false)){
dojo.provide("xg.index.embed.footer");
xg.addOnRequire(function(){
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}
});
}
if(!dojo.hostenv.findModule("xg.index.embed.announcementBar",false)){
dojo.provide("xg.index.embed.announcementBar");
xg.addOnRequire(function(){
var _1=x$("#announcement_close_id");
if(_1.length>0){
_1.click(function(_2){
_2.preventDefault();
x$("#xj_announcement_bar").hide();
xg.get(x$(this).attr("_url"),{},function(_3,_4){
});
});
}
});
}
if(!dojo.hostenv.findModule("xg.shared.EventRegistry",false)){
dojo.provide("xg.shared.EventRegistry");
xg.shared.EventRegistry=(function(){
var _={};
var _2={};
_.eventListeners={};
_2.fire=function(_3,_4){
var _5=_.eventListeners[_3];
if(!_5){
return;
}
var _6=[];
x$.each(_5,function(_7,_8){
_6.push(_8(_4));
});
return _6;
};
_2.listen=function(_9,_a){
if(!_.eventListeners[_9]){
_.eventListeners[_9]=[];
}
_.eventListeners[_9].push(_a);
};
_2.listenMultiple=function(_b){
x$.each(_b,function(_c,_d){
_2.listen(_c,_d);
});
};
_2.unlisten=function(_e,_f){
var _10=_.eventListeners[_e];
if(!_10){
return;
}
_.eventListeners[_e]=x$.grep(_10,function(_11,_12){
return _11!==_f;
});
};
_2.listenOnce=function(_13,_14){
if(_.eventListeners[_13]){
for(var i=0;i<_.eventListeners[_13].length;i++){
if(_.eventListeners[_13][i]+""===_14+""){
return;
}
}
}
_2.listen(_13,_14);
};
return _2;
})();
}
if(!dojo.hostenv.findModule("xg.shared.EditUtil",false)){
dojo.provide("xg.shared.EditUtil");
xg.shared.EditUtil={showModuleForm:function(_1,_2,_3){
_1.style.height="0px";
dojo.html.show(_1);
dojo.lfx.html.wipeIn(_1,200).play();
},hideModuleForm:function(_4,_5,_6,_7){
dojo.html.removeClass(_6,"close");
dojo.lfx.html.wipeOut(_4,200,null,function(){
dojo.html.hide(_4);
if(_7){
_7();
}
}).play();
}};
}
if(!dojo.hostenv.findModule("xg.shared.Facebook",false)){
dojo.provide("xg.shared.Facebook");
xg.shared.Facebook=(function(){
var _1={};
var _={};
_1._=_;
_.initCalled=false;
_.initFinished=false;
_.onConnectedListeners=[];
_.onNotConnectedListeners=[];
_.callIfDefined=function(_3){
if(_3){
_3();
}
};
_1.parseXfbml=function(_4){
xg.addOnFacebookLoad(function(){
FB.XFBML.parse(_4);
});
};
_1.requirePublishStreamPermission=function(_5,_6,_7,_8){
xg.addOnFacebookLoad(function(){
_1.requireSession(function(){
if(_7){
_.isUserPageAdmin(_7,function(){
_.requirePublishStreamPermissionProper(_5,_6,_7);
},function(){
_.disconnectUserFromPage();
_.callIfDefined(_8);
_.requirePublishStreamPermissionProper(_5,_6);
},function(){
_.callIfDefined(_6);
});
}else{
_.requirePublishStreamPermissionProper(_5,_6);
}
},function(){
_.callIfDefined(_6);
});
});
};
_1.requireManagePagesPermission=function(_9,_a){
xg.addOnFacebookLoad(function(){
_1.requireSession(function(){
_.requireManagePagesPermissionProper(_9,_a);
},function(){
_.callIfDefined(_a);
});
});
};
_.requireManagePagesPermissionProper=function(_b,_c){
_.userHasManagePagesPermission(function(_d){
if(_d){
_.callIfDefined(_b);
return;
}else{
_.showPermissionDialog("publish_actions,manage_pages,publish_pages",function(_e){
if(_e.authResponse){
_.callIfDefined(_b);
}else{
_.callIfDefined(_c);
}
});
}
});
};
_1.getLoginStatus=function(_f){
FB.getLoginStatus(_f);
};
_1.requireSession=function(_10,_11){
_11=_11||function(){
};
FB.getLoginStatus(function(_12){
if(_12.authResponse){
_10();
}else{
FB.login(function(_13){
if(_13.authResponse){
_10();
}else{
_11();
}
});
}
});
};
_1.logout=function(_14){
FB.logout(_14);
};
_1.getCurrentUid=function(){
return FB.getAuthResponse().userID;
};
_1.getCurrentUserName=function(_15){
FB.api("/me",function(_16){
if(_16.error){
return;
}
_15(_16.name);
});
};
_1.getPagesAdministeredByCurrentUser=function(_17){
FB.api("/me/accounts","get",{},function(_18){
if(_18.error){
_17({error_code:_18.error.code});
return;
}
var _19=[];
for(var i=0;i<_18.data.length;i++){
if(x$.inArray("ADMINISTER",_18.data[i].perms)>-1){
_19.push({name:_18.data[i].name,page_id:_18.data[i].id});
}
}
_17(_19);
});
};
_1.streamPublish=function(_1b,_1c,_1d,_1e,_1f,_20){
FB.ui({method:"stream.publish",display:"iframe",user_message_prompt:_1e,message:_1b,attachment:_1c,action_links:_1d,from:_20},_1f);
};
_1.publishPost=function(_21,_22){
_1.requireSession(function(){
if(_22==null){
FB.api("/me/feed","post",_21,function(){
});
return;
}
FB.api("/me/accounts","get",{},function(_23){
for(var i=0;i<_23.data.length;i++){
if(_22==_23.data[i].id){
_21["access_token"]=_23.data[i].access_token;
break;
}
}
FB.api("/me/feed","post",_21,function(){
});
});
});
};
_.showPermissionDialog=function(_25,_26){
xg.shared.util.alert({bodyHtml:xg.shared.nls.html("facebookWillOpen"),onOk:function(){
FB.login(_26,{scope:_25});
}});
};
_.isUserPageAdmin=function(_27,_28,_29,_2a){
_1.requireManagePagesPermission(function(){
FB.api("/me/accounts","get",{},function(_2b){
if(_2b.error){
_2a();
return;
}
for(var i=0;i<_2b.data.length;i++){
if(_27==_2b.data[i].id){
if(x$.inArray("ADMINISTER",_2b.data[i].perms)>-1){
_28();
}else{
_29();
}
return;
}
}
_29();
});
},_2a);
};
_.disconnectUserFromPage=function(){
xg.post("/profiles/connections/update?xn_out=json",{pageId:"",pageName:"",userId:_1.getCurrentUid()},function(){
});
};
_.requirePublishStreamPermissionProper=function(_2d,_2e,_2f){
_.userHasPublishStreamPermission(function(_30){
if(_30){
_.callIfDefined(_2d);
return;
}else{
_.showPermissionDialog(_2f?"publish_actions,manage_pages,publish_pages":"publish_actions",function(_31){
if(_31.authResponse){
_.callIfDefined(_2d);
}else{
_.callIfDefined(_2e);
}
});
}
},_2f);
};
_.userHasPublishStreamPermission=function(_32,_33){
var _34=["publish_actions"];
if(_33){
_34.push("manage_pages");
_34.push("publish_pages");
}
_.userHasPermissions(_34,_32);
};
_.userHasManagePagesPermission=function(_35){
_.userHasPermissions(["manage_pages","publish_pages"],_35);
};
_.userHasPermissions=function(_36,_37){
FB.api("/me/permissions",function(_38){
for(var i=0;i<_36.length;i++){
var _3a=false;
for(var j=0;j<_38.data.length;j++){
if(_36[i]==_38.data[j].permission&&_38.data[j].status=="granted"){
_3a=true;
break;
}
}
if(!_3a){
_37(false);
return;
}
}
_37(true);
});
};
return _1;
})();
}
if(!dojo.hostenv.findModule("xg.shared.EngagementUtil",false)){
dojo.provide("xg.shared.EngagementUtil");
xg.shared.EngagementUtil={addEngagementContextToParams:function(_1,_2){
var _3=x$(_2).attr("data-page-type");
if(_3){
_1["pageType"]=_3;
if(_3=="main"||_3=="profile"||_3=="group"){
var _4=xg.shared.util.getModule(_2);
var _5=_4?xg.shared.util.extractModuleName(_4):"";
if(_5){
_1["moduleName"]=_5;
}
}
}
return _1;
}};
}
if(!dojo.hostenv.findModule("xg.profiles.embed.status",false)){
dojo.provide("xg.profiles.embed.status");
xg.profiles.embed.status={statusDiv:null,currentStatusSpan:null,currentUpdatedSpan:null,form:null,submitButton:null,clearStatusLink:null,statusInput:null,hintContainer:null,ownedByUser:false,activityModule:null,columnForAF:null,textEntered:false,defaultHeight:18,pageId:null,setStatusCount:1,clearStatusCount:1,requirePermissionsIsProcessing:false,facebookPermissionsGranted:false,pendingFacebookStatus:null,initialize:function(){
this.statusDiv=x$("div.xj_status");
if(this.statusDiv.length>0){
this.form=x$("form",this.statusDiv[0]);
if(this.form.attr("_twitterAuthenticationNeeded")){
x$("input[name=postToTwitter]",this.form).click(function(){
if(x$(this).is(":checked")){
xg.profiles.embed.status.showTwitterAuthenticationDialog();
}
});
}
var _1=this;
if(this.form.attr("_facebookEnabled")){
xg.profiles.embed.status.pageId=this.form.attr("_pageId");
onClickFacebookCheckbox=function(_2){
if(!_1.requirePermissionsIsProcessing&&x$("input[name=postToFacebook]",_1.form).prop("checked")){
_1.requirePermissionsIsProcessing=true;
xg.addOnFacebookLoad(function(){
xg.shared.Facebook.requirePublishStreamPermission(function(){
_1.facebookPermissionsGranted=true;
_1.requirePermissionsIsProcessing=false;
if(_1.pendingFacebookStatus){
_1.updateFacebookStatus(_1.pendingFacebookStatus);
_1.pendingFacebookStatus=null;
}
},function(){
if(x$("input[name=postToFacebook]",_1.form).prop("checked")){
x$("input[name=postToFacebook]",_1.form).prop("checked",false);
}
_1.facebookPermissionsGranted=false;
_1.requirePermissionsIsProcessing=false;
_1.pendingFacebookStatus=null;
_1.updateFacebookStatus("");
},xg.profiles.embed.status.pageId);
});
}else{
_1.facebookPermissionsGranted=false;
}
};
x$("input[name=postToFacebook]",this.form).click(onClickFacebookCheckbox);
if(x$("input[name=postToFacebook]",_1.form).prop("checked")){
onClickFacebookCheckbox();
}
}
this.submitButton=x$("button.xj_submit",this.statusDiv[0]);
this.clearStatusLink=x$("a.xj_clear_status",this.statusDiv[0]);
this.statusInput=x$("textarea.xj_status_input",this.statusDiv[0]);
this.hintContainer=x$("div.xj_hint_container",this.statusDiv[0]);
this.inputContainer=x$("div.xj_input_container",this.statusDiv[0]);
this.defaultHeight=this.statusInput.height();
if(this.submitButton.length>0){
this.ownedByUser=true;
this.setStatusCount=0;
this.clearStatusCount=0;
}
var _3=x$("span.xj_remaining_count",this.statusDiv[0]);
xg.shared.util.setMaxLengthWithCount(this.statusInput[0],_3[0],_3.attr("_maxLength"),{onNonNegative:dojo.lang.hitch(this,this.clearStatusInputErrors),showCharsLabel:false,neverHideCount:true});
this.statusInput.bind("keyup",dojo.lang.hitch(this,function(_4){
var _5=this.statusInput.val();
if(_5.length>0){
this.clearStatusInputErrors();
this.textEntered=true;
}else{
this.textEntered=false;
}
}));
var _6=this;
this.statusInput.blur(function(e){
var _8=x$(this).val();
if(_8.length==0){
x$(this).height(_6.defaultHeight);
}
});
this.activityModule=x$("div[data-module_name='activity']").filter(":first");
if(this.ownedByUser&&(this.activityModule.length>0)){
this.columnForAF=this.activityModule.attr("_columnCount");
}
xg.shared.util.addHints(x$(".xj_hint",this.statusDiv[0]),true);
this.statusInput.autoResize({extraSpace:10});
this.form.bind("submit",dojo.lang.hitch(this,this.onSubmit));
this.submitButton.bind("click",dojo.lang.hitch(this,this.onSubmit));
this.clearStatusLink.bind("click",dojo.lang.hitch(this,this.onClearStatus));
}
x$(".xj_status textarea").focus(function(){
x$(".xj_remaining_count",this.hintContainer).removeAttr("_noUpdate");
x$(".xj_status").addClass("xg_active");
});
x$(".xj_status textarea").blur(function(){
x$(".xj_status").removeClass("xg_active");
});
x$(".xj_status textarea").removeAttr("style");
},onSubmit:function(_9){
_9.preventDefault();
var _a=this;
x$(this.submitButton).add(this.statusInput).prop("disabled",true).css("opacity",".4");
var _b=x$.trim(this.statusInput.val());
if((_b===this.statusInput.attr("_hint"))&&!this.textEntered){
_b="";
}
if(_b.length==0){
this.setInputError(xg.profiles.nls.html("statusCannotBeEmpty"));
return;
}
this.setStatus(_b);
},onClearStatus:function(_c){
_c.preventDefault();
this.setStatus("");
},updateFacebookStatus:function(_d){
var _e={postStatus:_d};
xg.post("/profiles/profile/setPostFacebookStatusPreference",_e);
if(_d.length>0){
xg.shared.Facebook.publishPost({message:_d},xg.profiles.embed.status.pageId);
}
},setStatus:function(_f){
var _10=x$("[_maxLength]:first",this.hintContainer).attr("_maxLength");
var url=this.form.attr("_ajaxAction");
if(this.columnForAF){
url=xg.shared.util.addParameter(url,"columnForAF",this.columnForAF);
}
var _12={xg_token:xg.token,status:_f,source:"status"};
var _13=x$(this.form).closest(".xg_module_activity");
if(_13){
_12["parentAfOwner"]=_13.data("ownerName");
}
var _12=xg.shared.EngagementUtil.addEngagementContextToParams(_12,this.form);
if(_f.length>parseInt(_10)){
this.setInputError(xg.profiles.nls.html("statusTooLong",_10));
return;
}
xg.post(url,_12,dojo.lang.hitch(this,function(xhr,_15){
var _16=this;
var _17=function(){
_16.updateStatusInterface(xhr,_15,function(){
if(_16.form.attr("_facebookEnabled")){
if(_16.facebookPermissionsGranted){
_16.updateFacebookStatus(_f);
}else{
if(x$("input[name=postToFacebook]",_16.form).is(":checked")){
_16.pendingFacebookStatus=_f;
}else{
_16.updateFacebookStatus("");
}
}
}
if(_16.form.attr("_twitterEnabledForUser")){
if(x$("input[name=postToTwitter]",_16.form).is(":checked")){
if(_16.form.attr("_twitterAuthenticationNeeded")){
_16.showTwitterAuthenticationDialog();
return;
}
_12["tweetStatus"]=1;
}else{
delete _12["status"];
_12["tweetStatus"]=0;
}
xg.post("/profiles/profile/setTwitterStatus?xn_out=json",_12,function(xhr,_19){
if(_19.warning){
this.setInputError(_16.statusDiv,_19.warning);
_16.hintContainer.find("span:last-child").addClass("twitter-warning");
}
});
}
});
};
x$(_16.statusInput).fadeTo("fast",0,_17);
}));
},showTwitterAuthenticationDialog:function(){
xg.shared.util.confirm({title:xg.profiles.nls.html("connectToTwitter"),bodyText:xg.profiles.nls.html("toPostStatus",xg.qh(ning.CurrentApp.name)),okButtonText:xg.profiles.nls.html("connect"),onOk:function(){
window.location="/profiles/connections/authenticateWithTwitter?callback=p";
},onCancel:dojo.lang.hitch(this,function(){
x$("input[name=postToTwitter]",this.form).prop("checked",false);
})});
},updateStatusInterface:function(_1a,_1b,_1c){
if(!_1c){
_1c=function(){
};
}
if(_1b.success){
var _1d=_1b.status;
if(_1d.length>0){
this.clearStatusInputErrors();
this.resetCurrentStatusInput();
_1c();
if(this.setStatusCount==0){
if(window.xn&&xn.track&&xn.track.pageView){
xn.track.pageView(4556,"set-status",String(_1d.length));
}
}
this.setStatusCount++;
if(this.activityModule&&x$(".module-feed",this.activityModule).length>0&&_1b.newAFHtml){
xg.activity.embed.ActivityFeedUpdater.addItemsToFeed(this.activityModule.attr("id"),_1b.newAFHtml,function(){
xg.profiles.embed.status.enable();
});
}
}else{
this.hideCurrentStatus();
if(this.clearStatusCount==0){
if(window.xn&&xn.track&&xn.track.pageView){
xn.track.pageView(4556,"clear-status");
}
}
this.clearStatusCount++;
}
this.statusInput.blur();
}else{
if(_1b&&"errorMessage" in _1b){
this.setInputError(_1b.errorMessage);
}else{
this.setInputError(xg.profiles.nls.html("errorUpdatingStatus"));
}
}
},hideCurrentStatus:function(){
if(this.ownedByUser){
this.resetCurrentStatusInput();
}else{
this.statusDiv.hide("fast");
}
},resetCurrentStatusInput:function(){
var _1e=x$(".xj_remaining_count",this.hintContainer);
_1e.attr("_noUpdate","true");
this.statusInput.val(this.statusInput.attr("_hint"));
x$(this.statusInput).change();
this.textEntered=false;
this.clearStatusInputErrors();
_1e.html(_1e.attr("_maxLength")).removeClass("length-exceeded");
},clearStatusInputErrors:function(){
this.inputContainer.removeClass("error");
this.statusDiv.removeClass("form-error");
this.hintContainer.removeClass("form-error");
var _1f=this.hintContainer.find("span:last-child");
_1f.removeClass("form-validation-msg").text(_1f.attr("_hint"));
_1f.removeClass("twitter-warning");
},setInputError:function(_20){
this.inputContainer.addClass("error");
xg.profiles.embed.publisher.setInputError(this.statusDiv,_20);
this.enable();
},enable:function(){
x$(this.submitButton).add(this.statusInput).prop("disabled",false).css("opacity","1");
}};
}
if(!dojo.hostenv.findModule("xg.shared.DateFormatter",false)){
dojo.provide("xg.shared.DateFormatter");
xg.shared.DateFormatter=(function(){
var _1={};
var _={};
_1.elapsedTime=function(_3,_4){
_4=typeof _4==="undefined"?true:_4;
var _5=new Date();
var _6=0;
var _7=0;
if(_3){
_7=Date.parse(_3);
_6=_5.getTime()-_7;
_6=Math.floor(_6/1000);
}
if(_6<=0){
return xg.shared.nls.text("justNow");
}
if(_6<60){
return xg.shared.nls.text("nSecondsAgo",_6);
}
if(_6<3600){
var _8=Math.floor(_6/60);
return xg.shared.nls.text("nMinutesAgo",_8);
}
if(_6<86400){
var _9=Math.floor(_6/60/60);
var _8=Math.floor((_6-60*60*_9)/60);
return xg.shared.nls.text("nHoursAgo",_9);
}
if(_6<3600*48){
return xg.shared.nls.text("yesterday");
}
var _a=new Date(_7);
if(_6<6*24*60*60){
var _b=_a.getUTCDay();
return _4?xg.shared.nls.text("onDay"+_b):xg.events.nls.text(_c[_b]);
}
if(_5.getUTCFullYear()===_a.getUTCFullYear()){
return _1.monthDay(_a.getUTCMonth(),_a.getUTCDate());
}
return _1.monthDayYear(_a.getUTCMonth(),_a.getUTCDate(),_a.getUTCFullYear());
};
var _c=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
_1.monthDay=function(_d,_e){
return xg.shared.nls.text("month"+_d+"Day",_e);
};
_1.monthDayYear=function(_f,_10,_11){
return xg.shared.nls.text("month"+_f+"DayYear",_10,_11);
};
return _1;
})();
}
if(!dojo.hostenv.findModule("xg.shared.timeUpdater",false)){
dojo.provide("xg.shared.timeUpdater");
xg.addOnRequire(function(){
var _={};
_.initialize=function(){
xg.shared.EventRegistry.listenOnce("activity-feed-updated",_.updateTimes);
window.setInterval(_.updateTimes,60000);
};
_.updateTimes=function(){
var _2;
x$(".event-info-timestamp").each(function(){
if(x$(this).data("time")){
_2=xg.shared.DateFormatter.elapsedTime(x$(this).data("time"),false);
x$(this).html(xg.qh(_2));
}
});
};
_.initialize();
});
}
if(!dojo.hostenv.findModule("xg.activity.embed.ActivityModule",false)){
dojo.provide("xg.activity.embed.ActivityModule");
dojo.widget.defineWidget("xg.activity.embed.ActivityModule",dojo.widget.HtmlWidget,{_setValuesUrl:"",_displaySet:"",_displayOptionsJson:"",_activityNum:"",_excerptLengthOptionsJson:"",_excerptLengthSet:"",_numOptionsJson:"",_settingsUrl:"",_privacySettingsUrl:"",_isProfile:"",_isAdmin:"",_activityOptionsAvailable:"",isContainer:true,fillInTemplate:function(_1,_2){
this.module=this.getFragNodeRef(_2);
this.h2=this.module.getElementsByTagName("h2")[0];
if(this._setValuesUrl){
dojo.dom.insertAfter(dojo.html.createNodesFromText("<p class=\"edit\"><a class=\"button\" href=\"#\"><span>"+xg.activity.nls.html("edit")+"</span></a></p>")[0],this.h2);
dojo.event.connect(this.module.getElementsByTagName("a")[0],"onclick",dojo.lang.hitch(this,function(_3){
dojo.event.browser.stopEvent(_3);
if((!this.form)||(this.form.style.height=="0px")){
this.showForm();
}else{
this.hideForm();
}
}));
}
},showForm:function(){
var _4=this.module.getElementsByTagName("a")[0];
var _5="";
dojo.lang.forEach(dj_eval(this._displayOptionsJson),function(_6){
_5+="<option value=\""+dojo.string.escape("html",_6.value)+"\">"+dojo.string.escape("html",_6.label)+"</option>";
});
var _7="";
dojo.lang.forEach(dj_eval(this._numOptionsJson),function(_8){
_7+="<option value=\""+dojo.string.escape("html",_8.value)+"\">"+dojo.string.escape("html",_8.label)+"</option>";
});
var _9="";
dojo.lang.forEach(dj_eval(this._excerptLengthOptionsJson),function(_a){
_9+="<option value=\""+_a+"\">"+_a+"</option>";
});
this.head=dojo.html.getElementsByClass("xg_module_head",this.module)[0];
if(!this.form){
var _b="";
if(this._activityOptionsAvailable&&!this._isProfile){
_b+="                <dl>                     <dt></dt>                     <dd style=\"line-height:1.2em!important\">                         <a href=\""+this._settingsUrl+"\">"+xg.activity.nls.html("setWhatActivityGetsDisplayed")+"</a>                     </dd>                 </dl>";
}else{
if(this._isProfile){
_b+="                <dl>                     <dt></dt>                     <dd style=\"line-height:1.2em!important\">                         <a href=\""+this._privacySettingsUrl+"\">"+xg.activity.nls.html("setWhatActivityGetsDisplayed")+"</a>                     </dd>                 </dl>";
}
}
this.form=dojo.html.createNodesFromText(dojo.string.trim("             <form class=\"xg_module_options\">             <fieldset class=\"dy-form-2\">                 <dl class=\"setting_display\">                    <dt><label for=\""+this.widgetId+"_display\">"+xg.profiles.nls.html("display")+"</label></dt>                    <dd>                         <select id=\""+this.widgetId+"_display\">                             "+_5+"                         </select>                     </dd>                 </dl>                 <dl class=\"setting_num\">                     <dt><label for=\""+this.widgetId+"_num\">"+xg.activity.nls.html("show")+"</label></dt>                     <dd>                     <select id=\""+this.widgetId+"_num\" class=\"short\">                         "+_7+"                     </select> "+xg.activity.nls.html("events")+"                    </dd>                 </dl>                 <dl class=\"setting_excerptLength\">                     <dt class=\"excerptItem\"><label for=\""+this.widgetId+"_excerptLength\">"+xg.profiles.nls.html("show")+"</label></dt>                     <dd class=\"excerptItem\">                         <select id=\""+this.widgetId+"_excerptLength\">                             "+_9+"                        </select> "+xg.profiles.nls.html("htmlCharacters")+"                    </dd>                 </dl>                 "+_b+"                 <dl class=\"setting_sort\">                     <dt></dt>                     <dd><input type=\"submit\" value=\""+xg.activity.nls.html("save")+"\" class=\"button submit\"/>                     <a class=\"action-secondary\"  id=\""+this.widgetId+"_cancelbtn\" href=\"#\">"+xg.activity.nls.html("cancel")+"</a> </dd>                 </dl>             </fieldset>         </form>                 "))[0];
dojo.dom.insertAfter(this.form,this.head);
this.formHeight=this.form.offsetHeight;
this.form.style.height="0px";
xg.index.util.FormHelper.select(this._displaySet,dojo.byId(this.widgetId+"_display"));
xg.index.util.FormHelper.select(this._activityNum,dojo.byId(this.widgetId+"_num"));
xg.index.util.FormHelper.select(this._excerptLengthSet,dojo.byId(this.widgetId+"_excerptLength"));
dojo.event.connect(this.form,"onsubmit",dojo.lang.hitch(this,function(_c){
this.save(_c);
}));
dojo.event.connect(dojo.byId(this.widgetId+"_cancelbtn"),"onclick",dojo.lang.hitch(this,function(_d){
dojo.event.browser.stopEvent(_d);
this.hideForm();
}));
}else{
dojo.html.removeClass(this.form,"collapsed");
}
this.updateFieldDisplay();
var _e=this;
x$("#"+this.widgetId+"_display").change(function(){
_e.updateFieldDisplay();
});
xg.shared.EditUtil.showModuleForm(this.form,this.formHeight,_4);
},updateFieldDisplay:function(){
if(dojo.byId(this.widgetId+"_display").value=="detail"){
x$(".excerptItem",this.form).show();
}else{
x$(".excerptItem",this.form).hide();
}
},hideForm:function(){
var _f=this.module.getElementsByTagName("a")[0];
xg.shared.EditUtil.hideModuleForm(this.form,this.formHeight,_f);
},save:function(_10){
dojo.event.browser.stopEvent(_10);
this._displaySet=xg.index.util.FormHelper.selectedOption(dojo.byId(this.widgetId+"_display")).value;
this._activityNum=xg.index.util.FormHelper.selectedOption(dojo.byId(this.widgetId+"_num")).value;
if(this._excerptLengthOptionsJson){
this._excerptLengthSet=x$("#"+this.widgetId+"_excerptLength").val();
}
this.hideForm();
xg.activity.embed.main.startUpdate(x$(this.module));
var _11=xg.activity.embed.main.addWidthParameters(this._setValuesUrl,x$(this.module));
dojo.io.bind({url:_11,method:"post",content:{displaySet:this._displaySet,activityNum:this._activityNum,excerptLengthSet:this._excerptLengthSet},preventCache:true,mimetype:"text/javascript",encoding:"utf-8",load:dojo.lang.hitch(this,function(_12,_13,_14){
xg.activity.embed.main.handleLoad(x$(this.module),_13);
})});
},updateEmbed:function(ui){
xg.activity.embed.main.refresh(ui.item);
}});
xg.activity.embed.main=(function(){
var _={};
var _17={};
_.fadeOutTo=0.25;
_.initialize=function(){
x$(".xg_module_activity").delegate(".xj_activity_feed_view_option a","click",function(_18){
_18.preventDefault();
var _19=x$(this).parent();
if(_.updating||_19.hasClass("selected-activity-view")){
return;
}
$selected=_19.siblings(".selected-activity-view");
$selected.html("<a href=\"#\">"+$selected.html()+"</a>");
$selected.removeClass("selected-activity-view");
_19.addClass("selected-activity-view");
_19.html(_19.find("a").html());
_.activityFeedView=_19.data("id");
_17.refresh(_19.closest(".xg_module_activity"));
});
};
_17.refresh=function(_1a,_1b){
_17.startUpdate(_1a);
var _1c={activityFeedView:_.activityFeedView,timeToPreventCaching:new Date().getTime()};
var _1d=xg.activity.embed.main.addWidthParameters(_1a.attr("_refreshUrl"),_1a);
xg.get(_1d,_1c,function(xhr,_1f){
_1a.css("visibility","");
_17.handleLoad(_1a,_1f,_1b);
_1a.find("div.xg_handle").first().hide();
});
};
_17.addWidthParameters=function(_20,_21){
var url=_20;
var _23=_21.closest(".ui-sortable").attr("_maxembedwidth")||_21.attr("_maxEmbedWidth");
var _24=_21.closest(".ui-sortable").attr("_columncount")||_21.attr("_columnCount");
url=xg.shared.util.addParameter(url,"maxEmbedWidth",_23);
url=xg.shared.util.addParameter(url,"columnCount",_24);
return url;
};
_17.handleLoad=function(_25,_26,_27){
x$(".xg_module_body, .xg_module_foot",_25).remove();
$newFeed=x$(_26.moduleBodyAndFooterHtml);
x$(".module-feed",$newFeed).css("opacity",_.fadeOutTo);
_25.append($newFeed);
_17.stopUpdate(_25);
_.initializeJavascript(_25);
if(_27){
_27();
}
};
_17.startUpdate=function(_28){
if(_.updating){
return;
}
_.updating=true;
x$(".module-feed",_28).fadeTo("fast",_.fadeOutTo);
};
_17.stopUpdate=function(_29){
if(!_.updating){
return;
}
x$(".module-feed",_29).fadeTo("fast",1);
_.updating=false;
};
_.initializeJavascript=function(_2a){
xg.profiles.embed.status.initialize();
xg.shared.util.parseWidgets(x$("div[dojotype=\"quickAddBar\"]",_2a).get(0));
};
xg.addOnRequire(function(){
_.initialize();
});
return _17;
})();
}
if(!dojo.hostenv.findModule("xg.activity.embed.ActivityFeedUpdater",false)){
dojo.provide("xg.activity.embed.ActivityFeedUpdater");
xg.activity.embed.ActivityFeedUpdater=(function(){
var _1=this;
var _={uploadFeedEndpoint:"/activity/index/setSocialFeedData?xn_out=json",eventRegistry:xg.shared.EventRegistry};
_.$newFeedItems={};
_.addingItems={};
_.newItemLimit=30;
_.uploadSocialFeedData=function(_3,_4,_5,_6){
if(!_4||_4.length<=0){
return false;
}
var _7={"feedId":_3,"socialFeedData":_4,"socialFeedIdentifier":_5,"socialFeedProvider":_6};
xg.post(_.uploadFeedEndpoint,_7);
};
_.showNewFeedItemsIndicator=function(_8,_9){
var _a=x$("#"+_8);
var _b=_a.find(".xj-new-feed-items");
_.$newFeedItems[_8]=x$(_9);
if(!_9||_9.length<=0){
_b.parent().hide();
return false;
}
var _c=_.newItemText(x$(_9).length);
_b.find(".xj-new-item-text").html(_c);
_b.parent().fadeIn("fast");
};
_.newItemText=function(n){
if(n<_.newItemLimit){
return xg.activity.nls.html("newItems",n);
}
return xg.activity.nls.html("limitNewItems",_.newItemLimit);
};
_1.addItemsToFeed=function(_e,_f,_10){
_.addingItems[_e]=true;
$parentModule=x$("#"+_e);
var _11=_.$newFeedItems[_e]?x$(_f).add(_.$newFeedItems[_e]):x$(_f);
if(_11){
_11.hide();
if(_11.length>=_.newItemLimit){
xg.activity.embed.main.refresh($parentModule,_.doneAddingNewItems(_e,_10));
}else{
$parentModule.find(".module-feed").prepend(_11);
_11.fadeIn("slow",_.doneAddingNewItems(_e,_10));
}
_.$newFeedItems[_e]=null;
}
$parentModule.find(".xg_new_activity_items_container").hide();
};
_.doneAddingNewItems=function(_12,_13){
return function(){
_.addingItems[_12]=false;
_.eventRegistry.fire("activity-feed-updated");
if("function"===typeof _13){
_13();
}
};
};
_.eventRegistry.listenMultiple({"social-feed-retrieved":function(_14){
var _15=_14.feedId||"xg_network_activity";
_.uploadSocialFeedData(_15,_14.feedItems,_14.feedIdentifier,_14.feedProvider);
},"new-feed-items-retrieved":function(_16){
var _17=_16.feedId||"xg_network_activity";
_.showNewFeedItemsIndicator(_17,_16.feedHtml);
}});
_1.updateFeed=function(_18,_19,_1a){
_.addingItems[_18]=true;
if(!_19||x$.trim(_19)==""){
return false;
}
var _1b=x$("#"+_18);
var _1c="<div>"+_19.replace("\r\n","").replace("\n","").replace("\r","")+"</div>";
var _1d=x$(_1c);
var _1e=x$(_1d).find(".module-feed");
var _1f=x$(_1b).find(".module-feed");
x$(_1f).find(".xj_activity_item").addClass("removal-candidate");
var _20=[];
var _21=false;
x$(_1e).find(".xj_activity_item").each(function(){
var _22=x$(this).attr("id");
var _23=x$(_1f).find("#"+_22);
if(_23.size()==0){
x$(this).css("display","none");
x$(this).addClass("new-feed-item");
_20.push(this);
}else{
_23.removeClass("removal-candidate");
}
if(_21){
x$(this).attr("_lastId",_21);
}
_21=_22;
});
x$(_20).each(function(_24,_25){
var _26=x$(this).attr("_lastId");
if(_26){
x$(this).insertAfter(x$("#"+_26,_1f));
}else{
x$(_1f).prepend(x$(_25));
}
});
x$(".removal-candidate").remove();
if(typeof _1a=="function"){
_1a();
}
x$(".new-feed-item").fadeIn("slow",function(){
x$(this).removeClass("new-feed-item");
_.addingItems[_18]=false;
});
x$(_1e).remove();
_1b.find(".xg_new_activity_items_container").hide();
};
_1.addGetLatestFeedParams=function(url,_28){
var _29="#"+_28;
var _2a=x$(_29).attr("_columncount");
var _2b=x$(_29).attr("_maxembedwidth");
var _2c=x$(_29).attr("_embedlocatorid");
var _2d={"columnCount":_2a,"maxEmbedWidth":_2b,"activityEmbedId":_2c,"returnLatestFeed":"1"};
if(x$(".xj_activity_feed_view_option",_29)){
_2d["activityFeedView"]=x$(".selected-activity-view",_29).data("id");
}
x$.each(_2d,function(key,_2f){
url=xg.shared.util.addParameter(url,key,_2f);
});
return url;
};
_.checkForNewItems=function(){
x$(".xg_module_activity").each(function(_30,_31){
$elem=x$(_31);
var _32=$elem.attr("id");
if(_.addingItems[_32]){
return;
}
if(_.$newFeedItems[_32]&&_.$newFeedItems[_32].length>=_.newItemLimit){
return;
}
$newestEvent=$elem.find(".event-info-timestamp:first");
if(!$newestEvent){
return false;
}
var _33={"activityFeedView":$elem.find(".selected-activity-view").data("id"),"ownerName":$elem.data("ownerName"),"excerptLength":$elem.data("excerptLength"),"afterTime":$newestEvent.data("time")};
var url=$elem.data("getItemsUrl");
url=xg.activity.embed.main.addWidthParameters(url,$elem);
url=xg.shared.util.addParameter(url,"noCache",Math.floor(new Date().getTime()/60000));
x$.get(url,_33,_.feedItemsRetrievedCallback(_32));
if(_.blurred){
window.clearInterval(_.intervalId);
_.intervalId=null;
}
});
};
_.feedItemsRetrievedCallback=function(_35){
return function(_36){
_36=dj_parseJSON(_36);
if(_.addingItems[_35]){
return;
}
xg.shared.EventRegistry.fire("new-feed-items-retrieved",{"feedId":_35,"feedHtml":_36.html});
};
};
_.initializeLiveUpdate=function(){
_.pollingFrequency=60000;
x$(window).on("blur",function(){
_.blurred=true;
});
x$(window).on("focus",function(){
if(!_.intervalId){
if(_.blurred){
window.setTimeout(_.checkForNewItems,100);
}
_.startLiveUpdateInterval();
}
_.blurred=false;
});
x$(".xg_module_activity").on("click",".xj-new-feed-items",function(_37){
_37.preventDefault();
_1.addItemsToFeed(x$(this).closest(".xg_module_activity").attr("id"));
});
_.startLiveUpdateInterval();
};
_.startLiveUpdateInterval=function(){
_.intervalId=window.setInterval(_.checkForNewItems,_.pollingFrequency);
};
xg.addOnRequire(function(){
_.initializeLiveUpdate();
});
return _1;
})();
}
if(!dojo.hostenv.findModule("xg.shared.editors.PlainEditor",false)){
dojo.provide("xg.shared.editors.PlainEditor");
xg.shared.editors.PlainEditor=function(_1){
var _2={};
var _={};
_2.setMaxLength=function(_4){
xg.shared.util.setAdvisableMaxLength(_1[0],_4);
};
_2.updateBackgroundColor=function(){
};
_2.val=function(){
if(arguments.length){
_1.val(arguments[0]);
return;
}
return _1.val();
};
_2.valWithLineBreakAdjustments=function(){
return _2.val();
};
_2.adjustLineBreaks=function(){
};
_2.unadjustLineBreaks=function(){
};
_2.initializeAfterPageLoad=function(){
return _2;
};
_2.uninitialize=function(){
return _2;
};
_2.focus=function(){
_1[0].focus();
};
_2.moveCursorToStart=function(){
xg.shared.editors.Editor.moveCursorToStart(_1[0]);
};
_2.updateTextarea=function(){
};
_2.setEnabled=function(_5){
if(_5){
_1.removeClass("disabled").prop("disabled",false);
}else{
_1.addClass("disabled").prop("disabled",true);
}
};
_2.getTextarea=function(){
return _1;
};
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.WordpressLineBreakRules",false)){
dojo.provide("xg.shared.editors.tinymce.WordpressLineBreakRules");
xg.shared.editors.tinymce.WordpressLineBreakRules=(function($){
var _2={};
var _={};
var _4="<BR\\s*/?>";
var _5="</?P\\s*>";
var _6="OBJECT|EMBED|PARAM|APPLET|IFRAME|SCRIPT|BR|ADDRESS|BLOCKQUOTE|CENTER|DIR|DIV|DL|FIELDSET|FORM|H1|H2|H3|H4|H5|H6|HR|ISINDEX|MENU|NOFRAMES|NOSCRIPT|OL|P|PRE|TABLE|UL|DD|DT|FRAMESET|LI|TBODY|TD|TFOOT|TH|THEAD|TR";
var _7="(?:[^>\\n\"']|'([^'\\n]|\\\\')*'|\"([^\"\\n]|\\\\\")*\")*";
_2.adjustLineBreaksEnteredInHtmlMode=function(s){
if(s.match(/<script\b|<p\b|<br\b/i)){
return s;
}
var _9=[];
s=s.replace(/<form\b[\s\S]*?<\/form>/gi,function(_a){
_9.push(_a);
return "<form>"+(_9.length-1)+"</form>";
});
while(true){
var _b=s.replace(new RegExp("(<[^\\s]"+_7+")\\n+","g"),"$1 ");
if(s==_b){
break;
}
s=_b;
}
s=s.replace(/<p>\s*<\/p>/g,"<p>&nbsp;</p>");
s=s.replace(/<div>\s*<\/div>/g,"<div>&nbsp;</div>");
s=s.replace(/\r\n/g,"\n");
s=s.replace(new RegExp(_4+"\\n","gi"),"<br />");
s=s.replace(new RegExp(_5+"\\n?","gi"),"\n\n");
s=s.replace(/(^[\n\s]*)|([\n\s]*$)/g,"");
s=s.replace(new RegExp("[\\n\\s]*(</?(?:"+_6+")\\b)","gi"),"$1");
s=s.replace(/\n\s*(\n\s*)+/g,"<p>");
s=s.replace(/\n/g,"<br />");
s=s.replace(new RegExp("^\\s*(?!</?("+_6+")\\b)","i"),"<p>");
x$.each(_9,function(i,_d){
s=s.replace("<form>"+i+"</form>",_9[i]);
});
return s;
};
_2.adjustLineBreaksEnteredInVisualMode=function(s){
s=s.replace(new RegExp(_4+"(?!\\n)","gi"),"<br />\n");
return s;
};
return _2;
})(x$);
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.Utilities",false)){
dojo.provide("xg.shared.editors.tinymce.Utilities");
xg.shared.editors.tinymce.Utilities=(function($){
var _2={};
var _={};
var _4=27;
var _5=7;
var _6=1;
var _7;
var _8;
var _9=[["mce_code"],["mce_link"],["mce_image"],["mce_file"],["mce_bold"],["mce_italic"],["mce_underline"],["mce_bullist"],["mce_numlist"],["mce_media"],["mce_removeformat"],["mce_justifyleft","mce_justifycenter","mce_justifyright"],["mce_strikethrough"],["mce_pastetext"],["mce_blockquote"],["mce_tinyautosave"]];
var _a=0;
_.initialize=function(){
};
_2.addIdIfNecessary=function(_b){
if(!_b.attr("id")){
_b.attr("id","xj_mce_"+_a++);
}
};
_2.getEditor=function(_c){
if(!window.tinymce){
return null;
}
return tinymce.get("mce_fullscreen")||tinymce.get(_c.attr("id"));
};
_2.updateLiquidLayout=function(_d){
var _e=_2.getEditor(_d)?x$(".mceToolbar:first",_2.getEditor(_d).getContainer()):_d.data("xj_html_toolbar").getElement().find("table:first");
var _f=_e.find(".mceToolbarRow1:first").find("td");
if(!_d.parent().hasClass("ultracompact-editor")){
_f.removeClass("dy-displaynone");
_d.parent().removeClass("uninitialized-liquid-layout");
_d.data("xj_html_toolbar").updateWidth();
_d.data("xj_html_dragbar").updateWidth();
return;
}
_f.addClass("dy-displaynone");
_d.parent().removeClass("uninitialized-liquid-layout");
_d.data("xj_html_toolbar").updateWidth();
_d.data("xj_html_dragbar").updateWidth();
var _10=_e.width();
if(!_10){
_f.find(".mce_code, .mce_link, .mce_image, .mce_bold, .mce_italic").parent().removeClass("dy-displaynone");
_f.find(".mce_bold, .mce_code").parent().prev().removeClass("dy-displaynone");
return;
}
for(var i=0;i<_9.length;i++){
var _12=_9[i];
var _13=2*_6+_f.filter(":visible").find(".mceSeparator").length*_5+1*_5+_f.filter(":visible").find(".mceButton").length*_4+_12.length*_4;
if(_13>_10){
break;
}
for(var j=0;j<_12.length;j++){
var _15=_12[j];
_f.find("."+_15).parent().removeClass("dy-displaynone");
}
var _16=true;
_f.each(function(){
if(x$(this).find(".mceSeparator").length){
if(_16){
x$(this).addClass("dy-displaynone");
}else{
x$(this).removeClass("dy-displaynone");
}
_16=true;
}else{
if(x$(this).find(".mceButton").length&&x$(this).is(":visible")){
_16=false;
}
}
});
}
};
_2.updateBackgroundColor=function(_17,_18){
if(!_18.getDoc()){
return;
}
var _19=x$(_18.getDoc().body);
var _1a=xg.shared.util.closest(_17,".error").length>0;
if(_1a&&!_19.hasClass("error")){
_19.addClass("error").css("background-color","#FFF4F2");
}else{
if(!_1a&&_19.hasClass("error")){
_19.removeClass("error").css("background-color","#FFFFFF");
}
}
};
_2.saveSelection=function(_1b){
_7=undefined;
_8=undefined;
var _1c=_2.getEditor(_1b);
if(_1c){
contentWindow=_1c.getWin();
contentWindow.focus();
if(contentWindow.document.selection){
_7=contentWindow.document.selection.createRange();
}
return _1c.selection.getContent({format:"text"});
}else{
if(document.selection){
_1b.focus();
_7=document.selection.createRange();
return _7.text;
}else{
if(_1b[0].selectionStart||_1b[0].selectionStart=="0"){
_8={start:_1b[0].selectionStart,end:_1b[0].selectionEnd};
return _1b[0].value.substring(_8.start,_8.end);
}
}
}
return "";
};
_2.overwriteSelection=function(_1d,_1e,_1f){
_2.restoreSelection(_1d);
var _20=_2.getEditor(_1d);
if(_20){
if(_1f){
_20.selection.collapse(false);
}
tinyMCE.execInstanceCommand(_20.id,"mceInsertContent",false,_1e);
}else{
if(_7){
_7.text=_1e;
if(_1f){
_7.collapse();
}
}else{
if(_8){
var _21=_1d[0];
if(_8.end>_1d.val().length){
_8.end=_1d.val().length;
}
var _22=_21.scrollTop;
_1d.val(_1d.val().slice(0,_8.start)+_1e+_1d.val().slice(_8.end));
_21.scrollTop=_22;
_21.selectionStart=_8.start;
_21.selectionEnd=_8.end=_8.start+_1e.length;
if(_1f){
_21.selectionStart=_8.start=_8.end;
}
}else{
_1d[0].value+=_1e;
}
}
}
};
_2.restoreSelection=function(_23){
var _24=_2.getEditor(_23);
if(_24){
contentWindow=_24.getWin();
if(_7){
_7.select();
}
contentWindow.focus();
}else{
_23.focus();
}
};
_2.getDefaultTargetForUrl=function(url){
if(url.indexOf(ning.CurrentApp.url)===0){
return "_self";
}
for(var i=0;i<ning.CurrentApp.domains.length;i++){
if(url.indexOf("http://"+ning.CurrentApp.domains[i])===0){
return "_self";
}
}
if(url.indexOf("api.ning.com")!=-1){
return "_self";
}
return "_blank";
};
_2.isMaxFileUploadCountReached=function(_27){
var _28=parseInt(_27.attr("_maxFileLimit"),10);
return _28?_.countUploadedFiles(_27)>=_28:false;
};
_.countUploadedFiles=function(_29){
var val=_2.getEditor(_29)?_2.getEditor(_29).getContent():_29.val();
var _2b=val.match(/https?:\/\/api\.(xn.\.ningops\.net|ning\.com)(:[0-9]+)?\/[^"'\s?]+/gi)||[];
var _2c={};
var _2d=0;
x$.each(_2b,function(i,_2f){
if(!_2c[_2f]){
_2c[_2f]=_2f;
_2d++;
}
});
return _2d;
};
_2.adjustLineBreaksEnteredInHtmlMode=function(_30){
var _31=_30.parents(".texteditor:first").find(".html_editor_toolbar table").is(":visible");
if(!_31||_30.val().match(/<script/i)){
return _30.val();
}
return xg.shared.editors.tinymce.WordpressLineBreakRules.adjustLineBreaksEnteredInHtmlMode(_30.val());
};
_2.adjustLineBreaksEnteredInVisualMode=function(_32){
return xg.shared.editors.tinymce.WordpressLineBreakRules.adjustLineBreaksEnteredInVisualMode(_32.val());
};
_2.removeCdataTags=function(s){
return s.replace(/\/\/ ?<!\[CDATA\[\n?/g,"").replace(/\/\/ ?\]\]>\n?/g,"");
};
xg.addOnRequire(function(){
_.initialize();
});
return _2;
})(x$);
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.LinkDialog",false)){
dojo.provide("xg.shared.editors.tinymce.LinkDialog");
xg.shared.editors.tinymce.LinkDialog=function(_1,$a){
var _3={};
var _={};
var _5=xg.shared.editors.tinymce.Utilities.getEditor(_1);
var _6={heading:xg.index.nls.text("addLink"),targetSectionVisible:false,getTarget:function(_7,_8){
return xg.shared.editors.tinymce.Utilities.getDefaultTargetForUrl(_7);
},initializeForm:function(_9){
var _a=xg.shared.editors.tinymce.Utilities.saveSelection(_1);
_9.find("input[name=text]").val(_a);
_9.find("input[name=url]").val("http://");
},onOk:function(_b){
xg.shared.editors.tinymce.Utilities.overwriteSelection(_1,_b);
}};
var _c={heading:xg.index.nls.text("editLink"),targetSectionVisible:true,getTarget:function(_d,_e){
return _e.find("input[name=target]:checked").val();
},initializeForm:function(_f){
xg.shared.editors.tinymce.Utilities.saveSelection(_1);
_f.find("input[name=text]").val($a.text());
_f.find("input[name=url]").val($a.attr("href"));
if($a.attr("target")&&$a.attr("target").toLowerCase()==="_blank"){
_f.find("input[value=_blank]").prop("checked",true);
}else{
_f.find("input[value=_self]").prop("checked",true);
}
},onOk:function(_10){
var _11=_5?_5.getDoc():null;
_5.dom.replace(x$(_10,_11)[0],$a[0]);
_5.undoManager.add();
}};
var _12;
_.initialize=function(){
if(!$a){
$a=_.findLink();
}
_12=$a?_c:_6;
};
_.findLink=function(){
if(!_5){
return null;
}
if(!_5.selection.getNode()){
return null;
}
$node=x$(_5.selection.getNode());
if($node[0].nodeName==="A"){
return $node;
}
return null;
};
_3.show=function(){
var dlg=_.createDialog({onOk:function(_14){
var _15=x$("form",_14)[0];
var url=x$.trim(_15.url.value);
if(!url||url==="http://"){
xg.shared.editors.tinymce.Utilities.restoreSelection(_1);
return;
}
var _17=x$.trim(_15.text.value)||url;
if(url.indexOf(":")<0){
url="http://"+url;
}
var _18=_12.getTarget(url,x$(_15));
_12.onOk("<a href=\""+url+"\" target=\""+_18+"\">"+xg.qh(_17)+"</a>");
},onCancel:function(_19){
xg.shared.editors.tinymce.Utilities.restoreSelection(_1);
}});
xg.shared.util.showOverlay();
x$(dlg).show();
$form=x$("form",dlg);
_12.initializeForm($form);
$form.find("input[name=url]")[0].select();
$form.find("input[name=url]").focus();
};
_.createDialog=function(_1a){
var _1b=x$("             <div class=\"xg_theme xg_floating_module\" style=\"display:none; z-index: 300000\">     <div class=\"xg_floating_container xg_tinymce_dialog xg_floating_container_wide xg_module xg_lightborder\">         <div class=\"xg_module_head\">             <h2>"+xg.qh(_12.heading)+"</h2>             <a class=\"xg_icon xg_icon-close cancel5\" href=\"#\" >"+xg.index.nls.html("close")+"</a>         </div>         <div class=\"xg_module_body\">             <form>                 <fieldset class=\"dy-form-2\">                     <dl>                         <dt><label for=\"xj_link_text\" class=\"dy-label\">"+xg.index.nls.html("linkText")+"</label></dt>                         <dd><input type=\"text\" name=\"text\" id=\"xj_link_text\" class=\"dy-input-text dy-input-medium\"/></dd>                     </dl>                     <dl>                         <dt><label for=\"xj_link_url\" class=\"dy-label\">"+xg.shared.nls.html("linkUrl")+"</label></dt>                         <dd><input type=\"text\" name=\"url\" id=\"xj_link_url\" class=\"dy-input-text dy-input-medium\"/></dd>                     </dl>                     <dl class=\"target_section\">                         <dt><label class=\"dy-label\">"+xg.index.nls.html("openInColon")+"</label></dt>                         <dd><input type=\"radio\" name=\"target\" value=\"_self\" id=\"xg_link_self\" /> <label for=\"xg_link_self\">"+xg.index.nls.html("sameWindow")+"</label></dd>                         <dd><input type=\"radio\" name=\"target\" value=\"_blank\" id=\"xg_link_blank\" /> <label for=\"xg_link_blank\">"+xg.index.nls.html("newWindow")+"</label></dd>                     </dl>                 </fieldset>                     <fieldset class=\"dy-form-2\"><dl><dt></dt>                        <dd><input type=\"submit\" class=\"button\" value=\""+xg.index.nls.html("ok")+"\" />                         <a class=\"cancel5 dy-action-secondary\" href=\"#\" >"+xg.index.nls.html("cancel")+"</a></dd></dl></fieldset>             </form>         </div>     </div> </div>").appendTo("body")[0];
var _1c=x$("form",_1b);
_1c.submit(function(_1d){
_1d.preventDefault();
xg.shared.util.hideOverlay();
x$(_1b).remove();
_1a.onOk(_1b);
});
x$("a.cancel5",_1b).click(function(_1e){
_1e.preventDefault();
xg.shared.util.hideOverlay();
x$(_1b).remove();
_1a.onCancel(_1b);
});
x$(_1b).keydown(function(_1f){
if(_1f.keyCode==27){
_1f.preventDefault();
xg.shared.util.hideOverlay();
x$(_1b).remove();
_1a.onCancel(_1b);
}
});
if(!_12.targetSectionVisible){
x$(_1b).find(".target_section").hide();
}
return _1b;
};
_.initialize();
return _3;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.FilePanel",false)){
dojo.provide("xg.shared.editors.tinymce.FilePanel");
xg.shared.editors.tinymce.FilePanel=function(_1){
var _2={};
var _={};
var _4;
var _5=_1.url||"";
var _6="";
var _7;
var _8=false;
_.initialize=function(){
};
_2.getElements=function(_9){
if(!_4){
_4=x$(" <form method=\"post\" enctype=\"multipart/form-data\" data-jsonContainsHtml=\"1\">     <div class=\"dy-error-msg\" style=\"display:none\"><p></p></div>     <input type=\"hidden\" name=\"pageUrl\" value=\""+xg.qh(window.location.href)+"\" >     <fieldset class=\"dy-form-2\">         <dl>             <dt><label for=\"xj_upload_file\" class=\"dy-label\">"+xg.shared.nls.html("file")+"</label></dt>             <dd>                 <input type=\"file\" class=\"file\" name=\"file\" id=\"xj_upload_file\" />                 <img class=\"xj_spinner\" width=\"20\" height=\"20\" alt=\""+xg.shared.nls.html("loading")+"\" src=\""+xg.shared.util.cdn("/xn_resources/widgets/index/gfx/spinner.gif")+"\" style=\"position:relative;top:5px;display:none;\"/>                 <p class=\"xj_filename dy-small\" style=\"display:none\"></p>                 <p class=\"dy-small xj_limit\"></p>             </dd>         </dl>     </fieldset> </form>");
if(_1.maxFileUploadSize){
_4.find(".xj_limit").text(xg.shared.nls.html("fileSizeLimit",_1.maxFileUploadSize));
}else{
_4.find(".xj_limit").remove();
}
_4.append(xg.shared.util.createCsrfTokenHiddenInput());
_4.find("input[name=file]").change(function(_a){
_a.preventDefault();
_.onFileChanged();
});
_4.submit(function(_b){
_b.preventDefault();
_.onFileChanged();
});
if(_1.forImage){
_4.append("<input type=\"hidden\" name=\"image\" value=\"1\"/>");
}
}
return _4;
};
_.onFileChanged=function(){
if(_8||_4.find("input[name=file]").val().length===0||_4.find("input[name=file]").val()===_7){
return;
}
if(!_1.forImage){
_.onFileChangedProper();
}else{
if(_4.find("input[name=file]").val().match(/\.(jpeg|jpg|jpe|gif|png|bmp)$/i)){
_.onFileChangedProper();
}else{
if(confirm(xg.shared.nls.text("fileDoesNotSeem"))){
_.onFileChangedProper();
}else{
_4.find("input[name=file]").val("");
}
}
}
};
_.onFileChangedProper=function(){
_.setErrorMessageHtml(null);
_4.find(".xj_spinner").show();
_8=true;
_7=_4.find("input[name=file]").val();
xg.index.util.FormHelper.save(_4[0],function(_c){
if(typeof (_c)=="xml"&&_c.toXMLString&&(_c.toXMLString().indexOf("<h1>413:")!=-1)){
if(_1.maxFileUploadSize){
_.setErrorMessageHtml(xg.shared.nls.html("fileNeedsToBeUnderX",_1.maxFileUploadSize));
}else{
_.setErrorMessageHtml(xg.shared.nls.html("fileTooLarge"));
}
}else{
if(_c.error){
_.setErrorMessageHtml(_c.errorHtml);
}else{
if(!x$.browser.safari){
_4.find(".xj_filename").text(decodeURIComponent(_c.filename)).show();
}
_6=_c.filename||"";
_5=x$.trim(decodeURIComponent(_c.url));
_1.onChange(_c.imageWidth);
}
}
_4.find(".xj_spinner").hide();
_8=false;
},"/profiles/blog/upload/.txt?xn_out=json");
};
_.setErrorMessageHtml=function(_d){
if(_d===null){
_4.find(".dy-error-msg").hide();
}else{
_4.find(".dy-error-msg p").html(_d);
_4.find(".dy-error-msg").show();
}
};
_2.getUrl=function(){
return _5;
};
_2.getFilename=function(){
return _6;
};
_2.onSelect=function(){
_4.find("input[name=file]").focus();
};
_2.validate=function(_e,_f){
_e();
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.ImageUrlPanel",false)){
dojo.provide("xg.shared.editors.tinymce.ImageUrlPanel");
xg.shared.editors.tinymce.ImageUrlPanel=function(_1){
var _2={};
var _={};
var _4;
_.initialize=function(){
};
_2.getElements=function(_5){
if(!_4){
_4=x$(" <form>     <div class=\"dy-error-msg\" style=\"display:none\"><p></p></div>     <fieldset class=\"dy-form-2\">         <dl>             <dt><label for=\"xj_image_url\" class=\"dy-label\">"+xg.shared.nls.html("url")+"</label></dt>             <dd><input type=\"text\" name=\"url\" id=\"xj_image_url\" class=\"dy-input-text dy-input-medium\" maxlength=\"1000\"/></dd>         </dl>     </fieldset> </form>");
_4.submit(function(_6){
_6.preventDefault();
_1.onSubmit();
});
_4.find("input[name=url]").val(_1.url||"http://");
_4.find("input[name=url]").bind("keyup keypress blur cut paste change",function(_7){
_1.onChange(null);
});
}
return _4;
};
_2.getUrl=function(){
var _8=x$.trim(_4.find("input[name=url]").val());
if(_8==="http://"){
return "";
}
return _8;
};
_2.onSelect=function(){
_4.find("input[name=url]")[0].select();
_4.find("input[name=url]").focus();
};
_.setErrorMessageHtml=function(_9){
if(_9===null){
_4.find(".dy-error-msg").hide();
}else{
_4.find(".dy-error-msg p").html(_9);
_4.find(".dy-error-msg").show();
}
};
_2.validate=function(_a,_b){
_.setErrorMessageHtml(null);
var _c=new Image();
_c.onload=function(){
_a();
};
_c.onerror=_c.onabort=function(){
_.setErrorMessageHtml(xg.shared.nls.html("noFileAtUrl"));
_b();
};
_c.src=_2.getUrl();
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.ImagePropertiesPanel",false)){
dojo.provide("xg.shared.editors.tinymce.ImagePropertiesPanel");
xg.shared.editors.tinymce.ImagePropertiesPanel=function(_1){
var _2={};
var _={};
var _4;
var _5=null;
var _6=_1.link&&_1.link!=_1.imageUrl;
_.initialize=function(){
};
_2.getElements=function(_7){
if(!_4){
_4=x$(" <dl>     <dt><label class=\"dy-label\">"+xg.shared.nls.html("layout")+"</label></dt>     <dd>         <ul class=\"mce-image-layouts dy-clearfix\">             <li><span class=\"thumb thumb-left\"></span> <input type=\"radio\" name=\"layout\" value=\"left\" id=\"xj_layout_left\"/> <label class=\"name\" for=\"xj_layout_left\">"+xg.shared.nls.html("left")+"</label></li>             <li><span class=\"thumb thumb-center\"></span> <input type=\"radio\" name=\"layout\" value=\"center\" id=\"xj_layout_center\"/> <label class=\"name\" for=\"xj_layout_center\">"+xg.shared.nls.html("center")+"</label></li>             <li><span class=\"thumb thumb-right\"></span> <input type=\"radio\" name=\"layout\" value=\"right\" id=\"xj_layout_right\"/> <label class=\"name\" for=\"xj_layout_right\">"+xg.shared.nls.html("right")+"</label></li>             <li><span class=\"thumb thumb-full\"></span> <input type=\"radio\" name=\"layout\" value=\"full\" id=\"xj_layout_full\"/> <label class=\"name\" for=\"xj_layout_full\">"+xg.shared.nls.html("full")+"</label></li>         </ul>     </dd> </dl> <dl>     <dt><label for=\"xj_image_padding\" class=\"dy-label\">"+xg.shared.nls.html("padding")+"</label></dt>     <dd><input type=\"text\" name=\"padding\" id=\"xj_image_padding\" class=\"dy-input-text dy-input-single\" maxlength=\"3\"/> "+xg.shared.nls.html("pixels")+"</dd> </dl> <dl>     <dt><label for=\"xj_image_link\" class=\"dy-label\">"+xg.shared.nls.html("link")+"</label></dt>     <dd><input type=\"text\" name=\"link\" id=\"xj_image_link\" class=\"dy-input-text dy-input-medium\" maxlength=\"1000\"/></dd> </dl> <dl>     <dt><label for=\"xj_image_width\" class=\"dy-label\">"+xg.shared.nls.html("width")+"</label></dt>     <dd><input type=\"text\" name=\"width\" id=\"xj_image_width\" class=\"dy-input-text dy-input-narrow\" maxlength=\"4\"/> "+xg.shared.nls.html("pixels")+"</dd> </dl>");
if(!_1.allowCenterAlignment){
_4.find("#xj_layout_center").parents("li:first").hide();
}
if(_1.layout){
_4.find("input[value="+_1.layout+"]").prop("checked",true);
}
_4.find("input[name=padding]").val(_1.padding);
_4.find("input[name=link]").val(_1.link);
_4.find("input[name=width]").val(_1.width);
_4.find("span.thumb").click(function(_8){
x$(this).next("input[type=radio]").click();
});
_4.find("input[name=link]").bind("cut paste change",function(_9){
_6=true;
});
_.addInputValidation(_4);
}
return _4;
};
_2.setEnabled=function(_a){
_4.find("input").prop("disabled",!_a);
_4.toggleClass("dy-disabled",!_a);
};
_2.setLink=function(_b){
_4.find("input[name=link]").val(_b);
};
_2.didUserChangeLink=function(){
return _6;
};
_2.getProperties=function(){
var _c={layout:_4.find("input[name=layout]:checked").val(),padding:x$.trim(_4.find("input[name=padding]").val()),link:x$.trim(_4.find("input[name=link]").val()),width:x$.trim(_4.find("input[name=width]").val()),originalWidth:_5};
_c.padding=_c.padding?parseInt(_c.padding,10):0;
_c.width=_c.width&&parseInt(_c.width,10)>0?parseInt(_c.width,10):null;
if(!_c.link){
_c.link=null;
}else{
if(_c.link.indexOf(":")<0){
_c.link="http://"+_c.link;
}
}
return _c;
};
_2.setOriginalImageWidth=function(x){
_5=x;
if(_5){
_4.find("input[name=width]").val(Math.min(_5,_.getMaxWidth()));
}
};
_.addInputValidation=function(_e){
_e.find("input[name=padding], input[name=width]").keyup(function(_f){
var _10=this.value.replace(/[^0-9]/,"");
if(this.value!=_10){
this.value=_10;
}
});
_e.find("input[name=width]").keyup(function(_11){
var _12=parseInt(this.value,10);
if(_12>_.getMaxWidth()){
this.value=_.getMaxWidth();
}
});
};
_.getMaxWidth=function(){
var _13=_1.maxWidth;
if(_5){
_13=Math.min(_13,_5);
}
return _13;
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.ImageDialog",false)){
dojo.provide("xg.shared.editors.tinymce.ImageDialog");
xg.shared.editors.tinymce.ImageDialog=function(_1,_2,_3){
var _4={};
var _={};
var _6=xg.shared.editors.tinymce.Utilities.getEditor(_1);
var _7={heading:xg.shared.nls.text("addImage"),getInitialUrl:function(){
return "";
},getInitialProperties:function(){
return {layout:"full",padding:0,link:null,width:null,imageUrl:this.getInitialUrl()};
},selectInitialTab:function(_8,_9,_a){
if(_3){
_.selectTab(_8.find(".xj_from_url"),_a,_9);
}else{
_.selectTab(_8.find(".xj_from_computer"),_9,_a);
}
},onOk:function(_b){
xg.shared.editors.tinymce.Utilities.overwriteSelection(_1,_b);
}};
var _c={heading:xg.shared.nls.text("editImage"),getInitialUrl:function(){
return _2.attr("src");
},getInitialProperties:function(){
var _d={};
_d.layout=_1.data("htmlCapability").getAlignment(_2);
_d.padding=parseInt(_2.css("padding"),10)||0;
if(_2.parent("a").length){
_d.link=_2.parent("a").attr("href");
}
var _e=parseInt(_2.attr("width"),10);
if(_e){
_d.width=_e;
}
_d.imageUrl=this.getInitialUrl();
return _d;
},selectInitialTab:function(_f,_10,_11){
_.selectTab(_f.find(".xj_from_url"),_11,_10);
},onOk:function(_12){
var _13=_2.parent("a")[0];
if(!_13){
_13=_2[0];
}
var _14=_6?_6.getDoc():null;
_6.dom.replace(x$(_12,_14)[0],_13);
_6.undoManager.add();
}};
var _15;
var _16;
var _17;
var _18;
var _19;
var _1a;
var _1b=false;
_.initialize=function(){
if(!_2){
_2=_.findImage();
}
_15=_2?_c:_7;
_16=xg.shared.editors.tinymce.ImagePropertiesPanel(x$.extend({allowCenterAlignment:_1.data("htmlCapability").supportsCenterAlignment(),maxWidth:parseInt(_1.attr("_maxImageWidth"),10)},_15.getInitialProperties()));
_17=xg.shared.editors.tinymce.FilePanel({onChange:_.onChange,forImage:true,url:_15.getInitialUrl()});
_18=xg.shared.editors.tinymce.ImageUrlPanel({onChange:_.onChange,onSubmit:_.onSubmit,url:_15.getInitialUrl()});
};
_.findImage=function(){
if(!_6){
return null;
}
if(!_6.selection.getNode()){
return null;
}
$node=x$(_6.selection.getNode());
if($node[0].nodeName==="IMG"){
return $node;
}
if($node.filter("a:has(img)").length){
return $node.find("img:first");
}
return null;
};
_.onChange=function(_1c){
_.updateEnabledState();
_16.setOriginalImageWidth(_1c);
if(!_16.didUserChangeLink()&&_1.data("htmlCapability").shouldLinkImagesByDefault()){
_16.setLink(_19.getUrl());
}
};
_4.show=function(){
_.createDialog();
_.showDialog(_1a);
};
_.createDialog=function(_1d){
_1a=x$(" <div tabindex=\"0\" class=\"xg_theme xg_floating_module xg_tinymce_dialog xg_image_dialog\" style=\"display:none; z-index:300000; outline:0;\">     <div class=\"xg_floating_container xg_floating_container_wide xg_module xg_lightborder\">         <div class=\"xg_module_head\">             <h2>"+xg.qh(_15.heading)+"</h2>             <a class=\"xg_icon xg_icon-close cancel5\" href=\"#\" >"+xg.index.nls.html("close")+"</a>         </div>         <div class=\"xg_module_body\">             <ul class=\"page_tabs\">                 <li class=\"xj_from_computer this\">"+xg.shared.nls.html("fromMyComputer")+"</li>                 <li class=\"xj_from_url\">"+xg.shared.nls.html("fromUrl")+"</li>             </ul>             <div class=\"clear_no_height\"></div>             <form class=\"xj_main_form\">                 <fieldset class=\"dy-form-2\">                 </fieldset>                 <fieldset class=\"dy-form-2\">                     <dl>                         <dt></dt>                         <dd>                             <input type=\"submit\" class=\"button\" value=\""+xg.index.nls.html("ok")+"\" />                             <a class=\"cancel5 dy-action-secondary\" href=\"#\" >"+xg.index.nls.html("cancel")+"</a>                             <img class=\"xj_spinner\" width=\"20\" height=\"20\" alt=\""+xg.shared.nls.html("loading")+"\" src=\""+xg.shared.util.cdn("/xn_resources/widgets/index/gfx/spinner.gif")+"\" style=\"position:relative;top:5px;left:10px;display:none;\"/>                         </dd>                     </dl>                 </fieldset>            </form>         </div>     </div> </div>").appendTo("body");
xg.shared.editors.tinymce.Utilities.saveSelection(_1);
var _1e=x$("form.xj_main_form",_1a);
_1e.submit(function(_1f){
_1f.preventDefault();
_.onSubmit();
});
x$("a.cancel5",_1a).click(function(_20){
_20.preventDefault();
_.hideDialog(_1a);
xg.shared.editors.tinymce.Utilities.restoreSelection(_1);
});
_1a.keydown(function(_21){
if(_21.keyCode==27){
_21.preventDefault();
_.hideDialog(_1a);
xg.shared.editors.tinymce.Utilities.restoreSelection(_1);
}
});
_17.getElements().insertBefore(_1e);
_18.getElements().insertBefore(_1e);
_16.getElements().appendTo(_1e.find("fieldset:first"));
if(_3){
_1a.find(".page_tabs").css("display","none");
}
_15.selectInitialTab(_1a,_17,_18);
return _1a;
};
_.onSubmit=function(){
if(_1b){
return;
}
var _22=x$("form.xj_main_form",_1a);
if(_22.find("input[type=submit]").prop("disabled")){
return;
}
if(!_19.getUrl()){
_.hideDialog(_1a);
xg.shared.editors.tinymce.Utilities.restoreSelection(_1);
return;
}
_1b=true;
_22.find(".xj_spinner").show();
_19.validate(function(){
_1b=false;
_22.find(".xj_spinner").hide();
_.hideDialog(_1a);
var _23=x$("<div></div>").append(_.createLinkedImageElement());
_15.onOk(_23.html());
},function(){
_1b=false;
_22.find(".xj_spinner").hide();
});
};
_.createLinkedImageElement=function(){
var $a=x$("<a><img/></a>");
var _25=$a.find("img:first");
_25.attr("src",_19.getUrl());
_25.removeAttr("style");
var _26=_16.getProperties();
if(_26.width){
if(_26.width!=_26.originalWidth){
_25.attr("src",xg.shared.util.addParameter(_19.getUrl(),"width",_26.width));
}else{
_25.attr("src",_19.getUrl());
}
_25.attr("width",_26.width);
}
if(_26.padding){
_25.css("padding",_26.padding+"px");
}
if(!_26.link){
return _25;
}
$a.attr("href",_26.link);
$a.attr("target",xg.shared.editors.tinymce.Utilities.getDefaultTargetForUrl(_26.link));
_1.data("htmlCapability").setAlignment(_25,_26.layout);
return $a;
};
_.selectTab=function($li,_28,_29){
_28.getElements().show();
_29.getElements().css("display","none");
_19=_28;
_19.onSelect();
_.updateEnabledState();
if(!_16.didUserChangeLink()&&_1.data("htmlCapability").shouldLinkImagesByDefault()){
_16.setLink(_19.getUrl());
}
$ul=$li.parent();
$ul.find("li").removeClass("this");
$li.addClass("this");
$ul.find("li").each(function(i,li){
if(li===$li[0]){
x$(li).html("<span class=\"xg_tabs\">"+xg.qh(x$(li).text())+"</span>");
}else{
x$(li).html("<a href=\"#\">"+xg.qh(x$(li).text())+"</a>");
}
});
$ul.find(".xj_from_computer a").click(function(_2c){
_2c.preventDefault();
_.selectTab($ul.find(".xj_from_computer"),_17,_18);
});
$ul.find(".xj_from_url a").click(function(_2d){
_2d.preventDefault();
_.selectTab($ul.find(".xj_from_url"),_18,_17);
});
};
_.updateEnabledState=function(){
var _2e=_19.getUrl().length>0;
_16.setEnabled(_2e||_18===_19);
_1a.find("input[type=submit]").prop("disabled",!_2e).toggleClass("dy-disabled",!_2e);
};
_.showDialog=function(_2f){
xg.shared.util.showOverlay();
_2f.show();
_2f.focus();
};
_.hideDialog=function(_30){
xg.shared.util.hideOverlay();
_30.remove();
};
_.initialize();
return _4;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.MediaDialog",false)){
dojo.provide("xg.shared.editors.tinymce.MediaDialog");
xg.shared.editors.tinymce.MediaDialog=function(_1){
var _2={};
var _={};
_.initialize=function(){
};
_2.show=function(){
var _4=_.createDialog({onOk:function(_5){
var _6=x$("form",_5)[0];
var _7=x$.trim(_6.embedCode.value);
xg.shared.editors.tinymce.Utilities.overwriteSelection(_1,_7);
},onCancel:function(_8){
xg.shared.editors.tinymce.Utilities.restoreSelection(_1);
}});
xg.shared.util.showOverlay();
x$(_4).show();
$form=x$("form",_4);
xg.shared.editors.tinymce.Utilities.saveSelection(_1);
$form.find("[name=embedCode]").focus();
};
_.createDialog=function(_9){
var _a=x$(" <div class=\"xg_theme xg_floating_module\" style=\"display:none; z-index: 300000\">     <div class=\"xg_floating_container xg_tinymce_dialog xg_floating_container_wide xg_module xg_lightborder\">         <div class=\"xg_module_head\">             <h2>"+xg.index.nls.html("addMedia")+"</h2>             <a class=\"xg_icon xg_icon-close cancel5\" href=\"#\" >"+xg.index.nls.html("close")+"</a>         </div>         <div class=\"xg_module_body\">             <form>                 <fieldset class=\"dy-form-1\"> <dl><dt>                    <label for=\"embedCode\" class=\"dy-label\">"+xg.index.nls.html("pasteEmbedCodeFrom")+"</label>                         </dt>                         <dd><textarea name=\"embedCode\" id=\"embedCode\" rows=\"8\" cols=\"60\"></textarea></dd>                     </dl>                 </fieldset>                    <fieldset class=\"dy-form-1\"><dl><dt></dt>                         <dd><input type=\"submit\" class=\"button\" value=\""+xg.index.nls.html("ok")+"\" />                         <a class=\"cancel5 dy-action-secondary\" href=\"#\" >"+xg.index.nls.html("cancel")+"</a></dd></dl></fieldset>             </form>         </div>     </div> </div>").appendTo("body")[0];
var _b=x$("form",_a);
_b.submit(function(_c){
_c.preventDefault();
xg.shared.util.hideOverlay();
x$(_a).remove();
_9.onOk(_a);
});
x$("a.cancel5",_a).click(function(_d){
_d.preventDefault();
xg.shared.util.hideOverlay();
x$(_a).remove();
_9.onCancel(_a);
});
x$(_a).keydown(function(_e){
if(_e.keyCode==27){
_e.preventDefault();
xg.shared.util.hideOverlay();
x$(_a).remove();
_9.onCancel(_a);
}
});
return _a;
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.PasteTextDialog",false)){
dojo.provide("xg.shared.editors.tinymce.PasteTextDialog");
xg.shared.editors.tinymce.PasteTextDialog=function(_1){
var _2={};
var _={};
_.initialize=function(){
};
_2.show=function(){
var _4=_.createDialog({onOk:function(_5){
var _6=x$("form",_5)[0];
var _7=xg.qh(x$.trim(_6.embedCode.value));
_7=xg.shared.editors.tinymce.WordpressLineBreakRules.adjustLineBreaksEnteredInHtmlMode(_7);
_7=xg.shared.editors.tinymce.WordpressLineBreakRules.adjustLineBreaksEnteredInVisualMode(_7);
xg.shared.editors.tinymce.Utilities.overwriteSelection(_1,_7);
_.cleanMarkup(_1);
},onCancel:function(_8){
xg.shared.editors.tinymce.Utilities.restoreSelection(_1);
}});
xg.shared.util.showOverlay();
x$(_4).show();
$form=x$("form",_4);
xg.shared.editors.tinymce.Utilities.saveSelection(_1);
$form.find("[name=embedCode]").focus();
};
_.createDialog=function(_9){
var _a=x$(" <div class=\"xg_theme xg_floating_module\" style=\"display:none; z-index: 300000\">     <div class=\"xg_floating_container xg_tinymce_dialog xg_floating_container_wide xg_module xg_lightborder\">         <div class=\"xg_module_head\">             <h2>"+xg.index.nls.html("insertPlainText")+"</h2>             <a class=\"xg_icon xg_icon-close cancel5\" href=\"#\" >"+xg.index.nls.html("close")+"</a>         </div>         <div class=\"xg_module_body\">             <form>                 <fieldset class=\"dy-form-1\">                     <dl>                         <dt><label for=\"embedCode\" class=\"dy-label\">"+xg.index.nls.html("pasteTextFromWord")+"</label></dt>                         <dd><textarea name=\"embedCode\" id=\"embedCode\" rows=\"8\" cols=\"60\"></textarea></dd>                     </dl>                 </fieldset>                 <fieldset class=\"dy-form-1\">                     <dl>                         <dt></dt>                         <dd><input type=\"submit\" class=\"button\" value=\""+xg.index.nls.html("ok")+"\" />                         <a class=\"cancel5 dy-action-secondary\" href=\"#\" >"+xg.index.nls.html("cancel")+"</a></dd>                     </dl>                 </fieldset>             </form>         </div>     </div> </div>").appendTo("body")[0];
var _b=x$("form",_a);
_b.submit(function(_c){
_c.preventDefault();
xg.shared.util.hideOverlay();
x$(_a).remove();
_9.onOk(_a);
});
x$("a.cancel5",_a).click(function(_d){
_d.preventDefault();
xg.shared.util.hideOverlay();
x$(_a).remove();
_9.onCancel(_a);
});
x$(_a).keydown(function(_e){
if(_e.keyCode==27){
_e.preventDefault();
xg.shared.util.hideOverlay();
x$(_a).remove();
_9.onCancel(_a);
}
});
return _a;
};
_.cleanMarkup=function(_f){
var _10=xg.shared.editors.tinymce.Utilities.getEditor(_f);
if(_10){
_10.selection.select(_10.getBody(),true);
tinyMCE.execInstanceCommand(_10.id,"mceCleanup");
_10.selection.collapse(false);
}else{
_f[0].value=x$("<div></div>").append(_f[0].value).html();
}
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.FilePropertiesPanel",false)){
dojo.provide("xg.shared.editors.tinymce.FilePropertiesPanel");
xg.shared.editors.tinymce.FilePropertiesPanel=function(){
var _1={};
var _={};
var _3;
_.initialize=function(){
};
_1.getElements=function(_4){
if(!_3){
_3=x$(" <dl>     <dt><label for=\"xj_file_url\" class=\"dy-label\">"+xg.shared.nls.html("linkUrl")+"</label></dt>     <dd><input type=\"text\" name=\"url\" id=\"xj_file_url\" class=\"dy-input-text dy-input-medium\" maxlength=\"1000\"/></dd> </dl> <dl>     <dt><label for=\"xj_file_title\" class=\"dy-label\">"+xg.shared.nls.html("title")+"</label></dt>     <dd><input type=\"text\" name=\"title\" id=\"xj_file_title\" class=\"dy-input-text dy-input-medium\" maxlength=\"1000\"/></dd> </dl>");
}
return _3;
};
_1.setEnabled=function(_5){
_3.find("input").prop("disabled",!_5);
_3.toggleClass("dy-disabled",!_5);
};
_1.setUrl=function(_6){
_3.find("input[name=url]").val(_6);
};
_1.getUrl=function(){
var _7=_3.find("input[name=url]").val();
if(_7.indexOf(":")<0){
_7="http://"+_7;
}
return x$.trim(_7);
};
_1.setTitle=function(_8){
_3.find("input[name=title]").val(_8);
};
_1.getTitle=function(){
return x$.trim(_3.find("input[name=title]").val());
};
_.initialize();
return _1;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.FileDialog",false)){
dojo.provide("xg.shared.editors.tinymce.FileDialog");
xg.shared.editors.tinymce.FileDialog=function(_1,$a){
var _3={};
var _={};
var _5=xg.shared.editors.tinymce.Utilities.getEditor(_1);
var _6={heading:xg.shared.nls.text("uploadFile"),getInitialUrl:function(){
return "";
},initializeForm:function(_7){
var _8=xg.shared.editors.tinymce.Utilities.saveSelection(_1);
_7.setTitle(_8);
},onOk:function(_9){
xg.shared.editors.tinymce.Utilities.overwriteSelection(_1,_9);
}};
var _a={heading:xg.shared.nls.text("uploadFile"),getInitialUrl:function(){
return $a.attr("href");
},initializeForm:function(_b){
xg.shared.editors.tinymce.Utilities.saveSelection(_1);
_b.setTitle($a.text());
_b.setUrl($a.attr("href"));
},onOk:function(_c){
var _d=_5?_5.getDoc():null;
_5.dom.replace(x$(_c,_d)[0],$a[0]);
_5.undoManager.add();
}};
var _e;
var _f=xg.shared.editors.tinymce.FilePropertiesPanel();
var _10="";
var _11;
var _12;
_.initialize=function(){
if(!$a){
$a=_.findLink();
}
_e=$a?_a:_6;
_11=xg.shared.editors.tinymce.FilePanel({url:_e.getInitialUrl(),maxFileUploadSize:ning.maxFileUploadSize||null,forImage:false,onChange:function(){
_.updateEnabledState();
if(!_11.getUrl()){
return;
}
_f.setUrl(_11.getUrl());
if(!_f.getTitle()||_f.getTitle()===_10){
_f.setTitle(_11.getFilename()||_11.getUrl());
_10=_f.getTitle();
}
}});
};
_.findLink=function(){
if(!_5){
return null;
}
if(!_5.selection.getNode()){
return null;
}
$node=x$(_5.selection.getNode());
if($node[0].nodeName==="A"){
return $node;
}
return null;
};
_3.show=function(){
_.createDialog();
_.showDialog(_12);
};
_.createDialog=function(_13){
_12=x$(" <div class=\"xg_theme xg_floating_module xg_tinymce_dialog xg_file_dialog\" style=\"display:none; z-index:300000;\">     <div class=\"xg_floating_container xg_floating_container_wide xg_module xg_lightborder\">         <div class=\"xg_module_head\">             <h2>"+xg.qh(_e.heading)+"</h2>             <a class=\"xg_icon xg_icon-close cancel5\" href=\"#\" >"+xg.index.nls.html("close")+"</a>         </div>         <div class=\"xg_module_body\">             <p>"+xg.shared.nls.html("uploadFileAnyType")+"</p>             <form class=\"xj_main_form\">                 <fieldset class=\"dy-form-2\">                 </fieldset>                      <fieldset class=\"dy-form-2\">                     <dl><dt></dt>                        <dd><input type=\"submit\" class=\"button\" value=\""+xg.index.nls.html("ok")+"\" />                     <a class=\"cancel5 dy-action-secondary\" href=\"#\" >"+xg.index.nls.html("cancel")+"</a></dd></dl></fieldset>             </form>         </div>     </div> </div>").appendTo("body");
var _14=x$("form.xj_main_form",_12);
_14.submit(_.onSubmit);
x$("a.cancel5",_12).click(function(_15){
_15.preventDefault();
_.hideDialog(_12);
xg.shared.editors.tinymce.Utilities.restoreSelection(_1);
});
_12.keydown(function(_16){
if(_16.keyCode==27){
_16.preventDefault();
_.hideDialog(_12);
xg.shared.editors.tinymce.Utilities.restoreSelection(_1);
}
});
_11.getElements().insertBefore(_14);
_f.getElements().appendTo(_14.find("fieldset:first"));
_e.initializeForm(_f);
_10=_f.getTitle();
_.updateEnabledState();
return _12;
};
_.onSubmit=function(_17){
_17.preventDefault();
var _18=x$("form.xj_main_form",_12);
if(_18.find("input[type=submit]").prop("disabled")){
return;
}
var url=_f.getUrl()||_11.getUrl();
if(!url){
_.hideDialog(_12);
xg.shared.editors.tinymce.Utilities.restoreSelection(_1);
return;
}
var _1a=_f.getTitle();
if(!_1a){
_1a=_11.getFilename()||url;
}
$link=x$("<a></a>").attr("href",url).attr("target",xg.shared.editors.tinymce.Utilities.getDefaultTargetForUrl(url)).text(_1a);
var _1b=x$("<div></div>").append($link).html();
_.hideDialog(_12);
_e.onOk(_1b);
};
_.showError=function(_1c){
_12.find(".dy-error-msg p").text(_1c);
_12.find(".dy-error-msg").show();
};
_.updateEnabledState=function(){
var _1d=_11.getUrl().length>0;
_f.setEnabled(_1d);
_12.find("input[type=submit]").prop("disabled",!_1d).toggleClass("dy-disabled",!_1d);
};
_.showDialog=function(_1e){
xg.shared.util.showOverlay();
_1e.show();
_11.onSelect();
};
_.hideDialog=function(_1f){
xg.shared.util.hideOverlay();
_1f.remove();
};
_.initialize();
return _3;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.InlineToolbar",false)){
dojo.provide("xg.shared.editors.tinymce.InlineToolbar");
xg.shared.editors.tinymce.InlineToolbar=function(_1){
var _2={};
var _={};
var _4=undefined;
var _5=-1;
_.initialize=function(){
};
_2.addTo=function(_6){
x$(_6.getDoc()).delegate(_1.selector,"click",function(){
$element=x$(this);
_.removeToolbar();
_4=x$(" <div class=\"dy-tooltip dy-tooltip-plain\" style=\"position:absolute; z-index: 300000\">     <div class=\"dy-arrow\"></div>     <div class=\"dy-content\">     </div> </div>").appendTo("body");
$dyContent=_4.find(".dy-content");
x$.each(_1.links,function(i,_8){
if(i>0){
$dyContent.append(" | ");
}
$dyContent.append(x$("<a href=\"#\"></a>").text(_8.text).click(function(_9){
_9.preventDefault();
_.removeToolbar();
_8.onClick($element);
}));
});
_4.bind("mouseenter",function(_a){
clearTimeout(_5);
});
_4.bind("mouseleave",function(_b){
_.removeToolbar();
});
var _c=_.getToolbarCoordinates(_6,$element);
_4.css("left",_c.left+"px");
_4.css("top",_c.top+"px");
if(_1.onShow){
_1.onShow($element,_4);
}
});
x$(_6.getDoc()).delegate(_1.selector,"mouseleave",function(){
_5=setTimeout(_.removeToolbar,500);
});
_6.onKeyUp.add(_.removeToolbar);
_6.onPaste.add(_.removeToolbar);
_6.onChange.add(_.removeToolbar);
};
_.getToolbarCoordinates=function(_d,_e){
var _f=_.getScrollCoordinates(_d);
$iframe=x$(_d.getContainer()).find("iframe");
var _10=$iframe.offset().left+_e.offset().left-_f.left;
var top=$iframe.offset().top+_e.offset().top+_e.height()-_f.top;
return {left:Math.min($iframe.offset().left+$iframe.width(),Math.max($iframe.offset().left,_10)),top:Math.min($iframe.offset().top+$iframe.height(),Math.max($iframe.offset().top,top))};
};
_.getScrollCoordinates=function(_12){
return {left:_.getSmallestNonZeroValue([_12.getWin().pageXOffset?_12.getWin().pageXOffset:0,_12.getDoc().documentElement?_12.getDoc().documentElement.scrollLeft:0,_12.getDoc().body?_12.getDoc().body.scrollLeft:0]),top:_.getSmallestNonZeroValue([_12.getWin().pageYOffset?_12.getWin().pageYOffset:0,_12.getDoc().documentElement?_12.getDoc().documentElement.scrollTop:0,_12.getDoc().body?_12.getDoc().body.scrollTop:0])};
};
_.getSmallestNonZeroValue=function(_13){
var _14=0;
for(var i=0;i<_13.length;i++){
if(!_14||(_13[i]&&_13[i]<_14)){
_14=_13[i];
}
}
return _14;
};
_.removeToolbar=function(){
if(_5>=0){
clearTimeout(_5);
}
if(_4){
_4.remove();
_4=undefined;
}
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.WysiwygEditorConfig",false)){
dojo.provide("xg.shared.editors.tinymce.WysiwygEditorConfig");
xg.shared.editors.tinymce.WysiwygEditorConfig=function(_1,_2,_3,_4,$){
var _6={};
var _={};
var _8=20;
var _9=false;
var _a=xg.shared.editors.tinymce.Utilities;
_6.initializeTextareas=function(){
if(!window.tinyMCE){
return;
}
_.createTinyMCELabelClass();
_.initializeI18nStrings();
_.convertTextAreasToTinyMCEEditors();
};
_.initializeI18nStrings=function(){
tinyMCE.addI18n("en.advanced",{fontdefault:xg.shared.nls.text("font"),toolbar_focus:" ",font_size:xg.shared.nls.text("size"),forecolor_desc:xg.shared.nls.text("color"),bold_desc:xg.shared.nls.text("bold"),italic_desc:xg.shared.nls.text("italic"),striketrough_desc:xg.shared.nls.text("strikethrough"),underline_desc:xg.shared.nls.text("underline"),justifyleft_desc:xg.shared.nls.text("left"),justifycenter_desc:xg.shared.nls.text("center"),justifyright_desc:xg.shared.nls.text("right"),blockquote_desc:xg.shared.nls.text("blockquote"),bullist_desc:xg.shared.nls.text("unorderedList"),numlist_desc:xg.shared.nls.text("orderedList"),removeformat_desc:xg.shared.nls.text("removeFormatting")});
tinyMCE.addI18n("en.fullscreen",{desc:xg.shared.nls.text("fullscreen")});
tinyMCE.addI18n("en.tinyautosave",{restore_content:xg.shared.nls.text("restoreContent"),no_content:xg.shared.nls.text("noAutoSaveContent"),warning_message:xg.shared.nls.text("ifRestoreSavedContent")});
};
_.convertTextAreasToTinyMCEEditors=function(){
tinyMCE.init({editor_css:xg.shared.util.cdn("/xn_resources/widgets/shared/css/editors/tinymce/ui.css",true),content_css:xg.shared.util.cdn("/xn_resources/widgets/shared/css/editors/tinymce/content.css",true),entity_encoding:"named",entities:"160,nbsp",verify_html:false,fix_list_elements:true,mode:"specific_textareas",plugins:"media,paste",editor_selector:"wysiwyg-mce-editor",language:null,relative_urls:false,gecko_spellcheck:true,theme:"advanced",theme_advanced_buttons1:"",theme_advanced_buttons2:"",theme_advanced_buttons3:"",theme_advanced_toolbar_align:"left",theme_advanced_toolbar_location:"top",theme_advanced_statusbar_location:"bottom",theme_advanced_path:false,theme_advanced_resizing:true,theme_advanced_resize_horizontal:false,theme_advanced_resizing_use_cookie:false,theme_advanced_fonts:_1,onpageload:function(){
_9=true;
},setup:_.setup,convert_urls:false,cleanup_callback:function(_b,_c){
return typeof _c=="string"?xg.shared.editors.tinymce.Utilities.removeCdataTags(_c):_c;
},setupcontent_callback:_.afterSetup,extended_valid_elements:"*[*],script[charset|defer|language|src|type]",valid_children:"+body[style]",media_strict:false,forced_root_block:"p",cleanup_on_startup:false,trim_span_elements:false,remove_linebreaks:false,convert_fonts_to_spans:false,paste_preprocess:function(pl,o){
o.content=o.content.replace(/\r*\n/g," ");
if(x$.browser.msie){
o.content=o.content.replace(/<A href="[^"]+[<>][^"]+">(.*?)<\/A>/g,"$1").replace(/<A href='[^']+[<>][^']+'>(.*?)<\/A>/g,"$1");
}
},paste_auto_cleanup_on_paste:true});
};
_.setupRegularEditorOrFullScreenEditor=function(_f,_10){
_.setupDefaultFont(_f,_10);
_.setupTheme(_f,_10);
_.monitorFileUploadCount(_f,_10);
_.setupIndentAndOutdent(_f,_10);
_.handlePastingEmbedCode(_f,_10);
_.setupJustifyCommands(_f,_10);
_.setupTinyAutoSave(_f,_10);
_.addOnInitHandler(_10,function(){
_f.data("htmlCapability").configureAlignmentFormats(_10);
});
};
_.addOnInitHandler=function(_11,_12){
if(_11.initialized){
_12();
}else{
_11.onInit.add(_12);
}
};
_.setupJustifyCommands=function(_13,_14){
var _15=function(_16){
_13.data("htmlCapability").beforeAlign(_14);
x$.each(["left","center","right","full"],function(i,_18){
if(_16!=_18){
_14.formatter.remove("align"+_18);
}
});
_14.formatter.toggle("align"+_16);
};
_14.addCommand("JustifyLeft",function(){
_15("left");
});
_14.addCommand("JustifyCenter",function(){
_15("center");
});
_14.addCommand("JustifyRight",function(){
_15("right");
});
};
_.setup=function(_19){
if(_19.id==="mce_fullscreen"){
_19.settings.theme_advanced_resize_horizontal=true;
return;
}
var _1a=$(_19.getElement());
_1a.data("width",_1a.width());
_1a.data("height",_1a.height());
_1a.data("htmlCapability").setupFontSizes(_19.settings);
if(_1a.parent().hasClass("full-editor")){
_.addFullScreenPlugin(_1a,_19);
}
_19.settings.theme_advanced_buttons1=_1a.data("buttons");
_.preventSpuriousJqueryAttributes(_19);
_.setupRegularEditorOrFullScreenEditor(_1a,_19);
_.addControls(_19,{add:new xg.shared.editors.tinymce.TinyMCELabel("add",{"text":xg.shared.nls.text("addColon")})});
_19.addButton("customlink",{title:xg.shared.nls.text("link"),"class":"mce_link",onclick:function(){
xg.shared.editors.tinymce.LinkDialog(_1a).show();
}});
_19.addButton("customimage",{title:xg.shared.nls.text("image"),"class":"mce_image",onclick:function(){
xg.shared.editors.tinymce.ImageDialog(_1a,null,xg.uploadsDisabled||_a.isMaxFileUploadCountReached(_1a)).show();
}});
_19.addButton("custommedia",{title:xg.shared.nls.text("media"),"class":"mce_media",onclick:function(){
xg.shared.editors.tinymce.MediaDialog(_1a).show();
}});
_19.addButton("custompastetext",{title:xg.shared.nls.text("pasteText"),"class":"mce_pastetext",onclick:function(){
xg.shared.editors.tinymce.PasteTextDialog(_1a).show();
}});
_19.addButton("customfile",{title:xg.shared.nls.text("file"),"class":"mce_file",onclick:function(){
xg.shared.editors.tinymce.FileDialog(_1a).show();
}});
_19.addButton("customcode",{title:xg.shared.nls.text("htmlEditor"),"class":"mce_code",onclick:function(){
_2(_1a);
}});
_19.onPostRender.add(function(_1b,_1c){
_.addLinkToolbar(_1a,_1b);
_.addImageToolbar(_1a,_1b);
});
if(!_1a.data("resized")){
_19.onLoadContent.add(function(_1d,_1e){
var _1f=x$(_a.getEditor(_1a).getContainer()).find("iframe").contents().find("body").height();
_1f=Math.max(_1f,x$(_a.getEditor(_1a).getContainer()).find("iframe").height());
x$(_a.getEditor(_1a).getContainer()).find("iframe").height(Math.min(_1f,600));
});
_1a.data("resized",true);
}
};
_.setupTinyAutoSave=function(_20,_21){
var key=_20.attr("_tinyAutoSaveKey");
if(!key){
return;
}
if(x$.browser.msie&&parseInt(x$.browser.version,10)<=7){
return;
}
if(_21.id==="mce_fullscreen"){
return;
}
_21.settings.plugins+=",tinyautosave";
_21.settings.fullscreen_settings={plugins:_21.settings.plugins.replace(/,tinyautosave/g,"")};
_21.settings.tinyautosave_key=key;
_21.settings.tinyautosave_showsaveprogress=false;
_21.onPostRender.add(function(_23,_24){
if(_23.plugins.tinyautosave.hasSavedContent()){
var $a=x$("<a href=\"#\" class=\"autoRecover\" tabindex=\"99999\" title=\""+xg.shared.nls.html("ifYouAccidentally")+"\">"+xg.shared.nls.html("autoRecover")+"</a>").click(function(e){
e.preventDefault();
_23.execCommand("mceTinyAutoSaveRestore");
});
x$(_23.getContainer()).find(".mceStatusbar:first div:first").html($a);
}
});
};
_.preventSpuriousJqueryAttributes=function(_27){
_27.onGetContent.add(function(_28,o){
o.content=o.content.replace(/\s*jquery\d+="[^"]*"/g,"");
});
};
_.afterSetup=function(_2a){
if(_2a==="mce_fullscreen"){
return;
}
var _2b=tinymce.getInstanceById(_2a);
var _2c=x$(_2b.getElement());
setTimeout(function(){
_.fixIframeWidth(_2c,_2b);
_a.updateLiquidLayout(_2c);
_a.updateBackgroundColor(_2c,_2b);
_.updateTinyMCEEditorHeight(_2c,_2b);
},0);
};
_.updateTinyMCEEditorHeight=function(_2d,_2e){
x$(_2e.getContainer()).find("iframe").height(_2d.data("height"));
};
_.fixIframeWidth=function(_2f,_30){
var _31=x$("iframe",_30.getContainer());
if(_2f.data("width")&&(_31.width()>20+_2f.data("width"))){
_31.width(_2f.data("width"));
}
};
_.handlePastingEmbedCode=function(_32,_33){
_33.onPaste.add(function(_34,_35){
setTimeout(function(){
var _36=_34.getContent();
if(_36.match(/&lt;(object|embed)/)){
_36=_36.replace(/&lt;object.*?&lt;\/object&gt;/g,_.decodeHtmlEntitiesInEmbedCode).replace(/&lt;embed.*?&lt;\/embed&gt;/g,_.decodeHtmlEntitiesInEmbedCode);
_34.setContent(_36);
}
},0);
});
};
_.decodeHtmlEntitiesInEmbedCode=function(_37){
_37=_37.replace(/<.*?>/g,"");
return tinymce.DOM.decode(_37);
};
_.addFullScreenPlugin=function(_38,_39){
_39.settings.plugins+=",fullscreen";
_39.onExecCommand.add(function(ed,_3b){
if(_3b!=="mceFullScreen"){
return;
}
x$("#mce_fullscreen_parent a.mce_fullscreen").attr("title",xg.shared.nls.text("returnToNormalSize"));
x$("#mce_fullscreen_toolbar1 .mceToolbarStart.mceFirst").after(x$("<td/>").append(_4(_38)));
var _3c=tinymce.get("mce_fullscreen");
_.addLinkToolbar(_38,_3c);
_.addImageToolbar(_38,_3c);
_.setupRegularEditorOrFullScreenEditor(_38,_3c);
});
};
_.addLinkToolbar=function(_3d,_3e){
xg.shared.editors.tinymce.InlineToolbar({selector:"a:not(:has(img))",links:[{text:xg.shared.nls.text("edit"),onClick:function($a){
xg.shared.editors.tinymce.LinkDialog(_3d,$a).show();
}},{text:xg.shared.nls.text("delete"),onClick:function($a){
_3e.dom.remove($a[0]);
_3e.undoManager.add();
_3e.getWin().focus();
}}],onShow:function($a,_42){
var _43=xg.shared.nls.text("linkColon")+" "+_.excerpt($a.attr("href"),_8);
_42.find(".dy-content").prepend(xg.qh(_43));
}}).addTo(_3e);
};
_.addImageToolbar=function(_44,_45){
xg.shared.editors.tinymce.InlineToolbar({selector:"img:not(.mceItemFlash)",links:[{text:xg.shared.nls.text("edit"),onClick:function(_46){
xg.shared.editors.tinymce.ImageDialog(_44,_46,xg.uploadsDisabled||_a.isMaxFileUploadCountReached(_44)).show();
}},{text:xg.shared.nls.text("delete"),onClick:function(_47){
if(_47.parent("a").length){
_45.dom.remove(_47.parent("a")[0]);
}else{
_45.dom.remove(_47[0]);
}
_45.undoManager.add();
_45.getWin().focus();
}}],onShow:function($a,_49){
var _4a=xg.shared.nls.text("imageColon");
_49.find(".dy-content").prepend(xg.qh(_4a)+" ");
}}).addTo(_45);
};
_.excerpt=function(_4b,_4c){
if(_4b&&_4b.length>_4c){
return _4b.substring(0,_4c-1)+"\u2026";
}
return _4b;
};
_.addControls=function(_4d,_4e){
_4d.onBeforeRenderUI.add(function(_4f){
_4f.controlManager=new tinymce.ControlManager(_4f);
var _50=_4f.controlManager.createControl;
_4f.controlManager.createControl=function(_51){
return _4e[_51]?_4e[_51]:_50.call(_4f.controlManager,_51);
};
});
};
_.createTinyMCELabelClass=function(){
tinymce.create("xg.shared.editors.tinymce.TinyMCELabel:tinymce.ui.Control",{TinyMCELabel:function(id,s){
this.parent(id,s);
},renderHTML:function(){
return "<span class=\"xg_label\">"+xg.qh(this.settings.text)+"</span>";
}});
};
_.setupTheme=function(_54,_55){
_.addOnInitHandler(_55,function(){
x$(_55.getDoc()).find("body").addClass(_54.attr("_themeType"));
});
};
_.setupDefaultFont=function(_56,_57){
try{
var $p=x$("<p></p>").insertAfter(_56);
var _59="font-size: "+_56.attr("_fontSize")+" !important;";
if($p.css("font-family")){
_59+="font-family:"+$p.css("font-family")+" !important;";
}
$p.remove();
_.addOnInitHandler(_57,function(){
x$(_57.getDoc()).find("head").append("<style type=\"text/css\">body, td, pre {"+_59+"} "+"p, ol, ul, dl, blockquote, table, h1, h2, h3, h4, h5, h6 { margin-bottom: "+_56.attr("_pMarginBottom")+"; } "+"p { margin-top: 0; }"+"</style>");
});
_57.onPostRender.add(function(_5a,_5b){
x$(_5a.getContainer()).find(".mceColorPreview").css("background-color","#000000");
});
}
catch(e){
}
};
_.setupIndentAndOutdent=function(_5c,_5d){
_5d.onKeyDown.add(function(_5e,e){
$node=x$(_5d.selection.getNode());
if(!$node||xg.shared.util.closest($node,"li").length==0){
return;
}
if(e.keyCode){
code=e.keyCode;
}else{
if(e.which){
code=e.which;
}
}
if(code==9&&!e.altKey&&!e.ctrlKey){
if(e.shiftKey){
_5e.execCommand("Outdent");
}else{
_5e.execCommand("Indent");
}
if(e.preventDefault){
e.preventDefault();
}
return false;
}
});
};
_.monitorFileUploadCount=function(_60,_61){
var _62=xg.shared.util.createQuiescenceTimer(1000,function(){
_.checkFileUploadCount(_60);
});
_61.onKeyUp.add(_62.trigger);
_61.onPaste.add(_62.trigger);
_61.onChange.add(_62.trigger);
_.addOnInitHandler(_61,function(){
_.checkFileUploadCount(_60);
});
};
_.checkFileUploadCount=function(_63){
var _64=_a.isMaxFileUploadCountReached(_63);
var _65=_a.getEditor(_63);
if(_65){
_65.controlManager.setDisabled("customfile",_64);
if(_64){
x$(_65.getContainer()).find("a.icon-file").addClass("disabled");
}else{
x$(_65.getContainer()).find("a.icon-file").removeClass("disabled");
}
}
_3(!_64,_63);
};
return _6;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.HtmlToolbar",false)){
dojo.provide("xg.shared.editors.tinymce.HtmlToolbar");
xg.shared.editors.tinymce.HtmlToolbar=function(_1){
var _2={};
var _={};
var _4;
var _5=_1.textarea;
var _6;
_.initialize=function(){
if(window.tinyMCE){
tinyMCE.onAddEditor.add(function(_7,_8){
_.closeAllDropDowns();
});
}
};
_2.getElement=function(_9){
if(!_4){
_4=_.createElement();
_6=_4.find(".mceToolbarEnd");
_2.updateWidth();
_.addButtons(_1.buttons.split(","));
}
return _4;
};
_2.updateWidth=function(){
if(_5.is(":visible")&&_5.width()){
_4.find(".mceLayout").width(_5.css("width"));
}else{
_4.find(".mceLayout").css("width","100%");
}
};
_2.setColor=function(_a){
_4.find(".mceColorPreview").css("background-color",_a);
};
_2.setFileButtonEnabled=function(_b){
if(_b){
_4.find(".mce_file").addClass("mceButtonEnabled").removeClass("mceButtonDisabled");
}else{
_4.find(".mce_file").addClass("mceButtonDisabled").removeClass("mceButtonEnabled");
}
};
_.createElement=function(){
var _c=x$(" <span class=\"html_editor_toolbar defaultSkin\" style=\"display:none\">     <table cellspacing=\"0\" cellpadding=\"0\" class=\"mceLayout\">         <tbody>             <tr class=\"mceFirst mceLast\">                 <td class=\"mceToolbar mceLeft mceFirst mceLast\">                     <table cellspacing=\"0\" cellpadding=\"0\" align=\"\" class=\"mceToolbar mceToolbarRow1 Enabled\">                         <tbody>                             <tr>                                 <td class=\"mceToolbarStart mceToolbarStartListBox mceFirst\"><span><!-- IE --></span></td>                                 <td class=\"mceToolbarEnd mceToolbarEndButton mceLast\"><span><!-- IE --></span></td>                             </tr>                         </tbody>                     </table>                 </td>             </tr>         </tbody>     </table> </span>");
return _c;
};
_.addButton=function(_d){
var $a=x$("<a href=\"#\" class=\"mceButton mceButtonEnabled\"/>").attr("title",_d.tooltip).addClass(_d["class"]);
var _f=x$("<span class=\"mceIcon\"/>").addClass(_d["class"]);
$a.click(function(_10){
_10.preventDefault();
if($a.hasClass("mceButtonDisabled")){
return;
}
_d.onClick($a,xg.shared.editors.tinymce.Utilities.saveSelection(_5));
_5.focus();
});
_6.before(x$("<td/>").append($a.append(_f)));
};
_.addFontDropDown=function(){
_.addDropDown({tooltip:xg.shared.nls.text("font"),onSelect:function(_11,_12,_13){
_.overwriteSelection("<span style=\"font-family: "+xg.qh(_12)+";\">"+_11+"</span>");
_.excludeOuterTagsFromSelection();
},dropDownClass:"mceListBox mceListBoxEnabled mce_fontselect",dropDownFirstLink:x$("<a class=\"mceText mceTitle\" href=\"#\">"+xg.shared.nls.html("font")+"</a>"),dropDownSecondLink:x$("<a class=\"mceOpen\" href=\"#\"><span></span></a>"),dropDownSelectedClass:"mceListBoxSelected",listClass:"mceListBoxMenu mceNoIcons defaultSkin",listDivClass:"mceMenu mceListBoxMenu mceNoIcons defaultSkin",listTableClass:"",listTableRows:x$(x$.map(_1.fonts.split(";"),function(_14){
var _14=_14.split("=");
return x$("<tr class=\"mceMenuItem mceMenuItemEnabled\"><td><a href=\"#\" _value=\""+xg.qh(_14[1])+"\"><span class=\"mceIcon\"></span><span class=\"mceText\" title=\""+xg.qh(_14[0])+"\" style=\"font-family: "+xg.qh(_14[1])+";\">"+xg.qh(_14[0])+"</span></a></td></tr>")[0];
})),listWidth:120,listHeight:150});
};
_.addFontSizeDropDown=function(){
var _15=[["1 (8pt)","1"],["2 (10pt)","2"],["3 (12pt)","3"],["4 (14pt)","4"],["5 (16pt)","5"],["6 (20pt)","6"],["7 (24pt)","7"]];
_.addDropDown({tooltip:xg.shared.nls.text("size"),onSelect:function(_16,_17,_18){
var _19=_5.data("htmlCapability").getAttributeForFontSize(_17);
_.overwriteSelection("<span "+_19[0]+"=\""+_19[1]+"\">"+_16+"</span>");
_.excludeOuterTagsFromSelection();
},dropDownClass:"mceListBox mceListBoxEnabled mce_fontsizeselect",dropDownFirstLink:x$("<a class=\"mceText mceTitle\" href=\"#\">"+xg.shared.nls.html("size")+"</a>"),dropDownSecondLink:x$("<a class=\"mceOpen\" href=\"#\"><span></span></a>"),dropDownSelectedClass:"mceListBoxSelected",listClass:"mceListBoxMenu mceNoIcons defaultSkin",listDivClass:"mceMenu mceListBoxMenu mceNoIcons defaultSkin",listTableClass:"",listTableRows:x$(x$.map(_15,function(_1a){
return x$("<tr class=\"mceMenuItem mceMenuItemEnabled\"><td><a href=\"#\" _value=\""+xg.qh(_1a[1])+"\"><span class=\"mceIcon\"></span><span class=\"mceText font-size-"+_1a[1]+"\" title=\""+xg.qh(_1a[0])+"\">"+xg.qh(_1a[0])+"</span></a></td></tr>")[0];
})),listWidth:150,listHeight:150});
};
_.addFontColorDropDown=function(){
var _1b=[["000000","993300","333300","003300","003366","000080","333399","333333"],["800000","FF6600","808000","008000","008080","0000FF","666699","808080"],["FF0000","FF9900","99CC00","339966","33CCCC","3366FF","800080","999999"],["FF00FF","FFCC00","FFFF00","00FF00","00FFFF","00CCFF","993366","C0C0C0"],["FF99CC","FFCC99","FFFF99","CCFFCC","CCFFFF","99CCFF","CC99FF","FFFFFF"]];
_.addDropDown({tooltip:xg.shared.nls.text("color"),onSelect:function(_1c,_1d,_1e){
_.overwriteSelection("<span style=\"color: "+xg.qh(_1d)+";\">"+_1c+"</span>");
_.excludeOuterTagsFromSelection();
_1e.find(".mceColorPreview").css("background-color",_1d);
},dropDownClass:"mceSplitButton mceSplitButtonEnabled mce_forecolor",dropDownFirstLink:x$("<a class=\"mceAction mce_forecolor\" href=\"#\" title=\""+xg.shared.nls.html("color")+"\"><span class=\"mceAction mce_forecolor\"></span><div class=\"mceColorPreview\" style=\"background-color: #000000;\"></div></a>"),dropDownSecondLink:x$("<a class=\"mceOpen mce_forecolor\" href=\"#\" title=\""+xg.shared.nls.html("color")+"\"><span class=\"mceOpen mce_forecolor\"></span></a>"),dropDownSelectedClass:"mceSplitButtonSelected",listClass:"defaultSkin mce_forecolor",listDivClass:"mce_forecolor mceSplitButtonMenu mceColorSplitMenu",listTableClass:"mceColorSplitMenu",listTableRows:x$(x$.map(_1b,function(_1f){
return x$("<tr>"+x$.map(_1f,function(_20){
return "<td><a href=\"#\" style=\"background-color: #"+_20+";\" _value=\"#"+_20+"\"></a></td>";
}).join("")+"</tr>")[0];
}))});
};
_.addDropDown=function(_21){
var _22=x$(" <td>     <table cellspacing=\"0\" cellpadding=\"0\" class=\""+_21.dropDownClass+"\" title=\""+xg.qh(_21.tooltip)+"\">         <tbody>             <tr>                 <td class=\"mceFirst\"></td>                 <td class=\"mceLast\"></td>             </tr>         </tbody>     </table> </td>");
_22.find(".mceFirst").append(_21.dropDownFirstLink);
_22.find(".mceLast").append(_21.dropDownSecondLink);
var _23=x$(" <div class=\"xj_drop_down_list "+_21.listClass+"\" style=\"position: absolute; z-index: 200000;\">     <div class=\""+_21.listDivClass+"\">         <span class=\"mceMenuLine\"></span>         <table class=\""+_21.listTableClass+"\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">             <tbody>             </tbody>         </table>     </div> </div>");
if(_21.listWidth){
_23.add(_23.children()).css("width",_21.listWidth+"px");
}
if(_21.listHeight){
_23.add(_23.children()).css("height",_21.listHeight+"px");
}
_23.find("tbody").append(_21.listTableRows);
var _24=false;
_22.find("a").click(function(_25){
_25.preventDefault();
if(!_22.find("table").hasClass(_21.dropDownSelectedClass)){
_22.find("table").addClass(_21.dropDownSelectedClass);
if(!_24){
_23.appendTo(document.body);
_24=true;
}
_23.show();
var _26=_23.offset();
var _27=_22.offset();
var _28=_23.position();
_23.css("left",(_28.left+_27.left-_26.left)+"px");
_23.css("top",(_28.top+_27.top-_26.top+_22.height())+"px");
}else{
_.closeAllDropDowns();
}
});
_23.find("a").click(function(_29){
_29.preventDefault();
var _2a=xg.shared.editors.tinymce.Utilities.saveSelection(_5);
_21.onSelect(_2a,x$(this).attr("_value"),_22);
_.closeAllDropDowns();
_5.focus();
});
_5.click(function(_2b){
_.closeAllDropDowns();
});
_6.before(_22);
};
_.closeAllDropDowns=function(){
_4.find(".mceListBoxSelected").removeClass("mceListBoxSelected");
_4.find(".mceSplitButtonSelected").removeClass("mceSplitButtonSelected");
x$(".xj_drop_down_list").hide();
};
_.addSeparator=function(){
_6.before("<td><span class=\"mceSeparator\"></span></td>");
};
_.addButtons=function(_2c){
var _2d="|";
x$.each(_2c,function(i,_2f){
if(_2f===_2d){
return;
}
var _30=true;
switch(_2f){
case "|":
_.addSeparator();
break;
case "customlink":
_.addButton({tooltip:xg.shared.nls.text("link"),"class":"mce_link",onClick:function($a,_32){
xg.shared.editors.tinymce.LinkDialog(_5).show();
}});
break;
case "customimage":
_.addButton({tooltip:xg.shared.nls.text("image"),"class":"mce_image",onClick:function($a,_34){
xg.shared.editors.tinymce.ImageDialog(_5).show();
}});
break;
case "custommedia":
_.addButton({tooltip:xg.shared.nls.text("media"),"class":"mce_media",onClick:function($a,_36){
xg.shared.editors.tinymce.MediaDialog(_5).show();
}});
break;
case "custompastetext":
_.addButton({tooltip:xg.shared.nls.text("pasteText"),"class":"mce_pastetext",onClick:function($a,_38){
xg.shared.editors.tinymce.PasteTextDialog(_5).show();
}});
break;
case "customfile":
_.addButton({tooltip:xg.shared.nls.text("file"),"class":"mce_file",onClick:function($a,_3a){
xg.shared.editors.tinymce.FileDialog(_5).show();
}});
break;
case "fontselect":
_.addFontDropDown();
break;
case "fontsizeselect":
_.addFontSizeDropDown();
break;
case "forecolor":
_.addFontColorDropDown();
break;
case "bold":
_.addButton({tooltip:xg.shared.nls.text("bold"),"class":"mce_bold",onClick:function($a,_3c){
_.onClickTagButton($a,_3c,"<strong>","</strong>");
}});
break;
case "italic":
_.addButton({tooltip:xg.shared.nls.text("italic"),"class":"mce_italic",onClick:function($a,_3e){
_.onClickTagButton($a,_3e,"<em>","</em>");
}});
break;
case "strikethrough":
_.addButton({tooltip:xg.shared.nls.text("strikethrough"),"class":"mce_strikethrough",onClick:function($a,_40){
_.onClickTagButton($a,_40,"<span style=\"text-decoration: line-through;\">","</span>");
}});
break;
case "underline":
_.addButton({tooltip:xg.shared.nls.text("underline"),"class":"mce_underline",onClick:function($a,_42){
_.onClickTagButton($a,_42,"<span style=\"text-decoration: underline;\">","</span>");
}});
break;
case "justifyleft":
_.addButton({tooltip:xg.shared.nls.text("left"),"class":"mce_justifyleft",onClick:function($a,_44){
_.onClickTagButton($a,_44,_5.data("htmlCapability").startParagraph("left"),"</p>\n");
}});
break;
case "justifycenter":
_.addButton({tooltip:xg.shared.nls.text("center"),"class":"mce_justifycenter",onClick:function($a,_46){
_.onClickTagButton($a,_46,_5.data("htmlCapability").startParagraph("center"),"</p>\n");
}});
break;
case "justifyright":
_.addButton({tooltip:xg.shared.nls.text("right"),"class":"mce_justifyright",onClick:function($a,_48){
_.onClickTagButton($a,_48,_5.data("htmlCapability").startParagraph("right"),"</p>\n");
}});
break;
case "blockquote":
_.addButton({tooltip:xg.shared.nls.text("blockquote"),"class":"mce_blockquote",onClick:function($a,_4a){
_.onClickTagButton($a,_4a,"<blockquote>","</blockquote>\n");
}});
break;
case "bullist":
_.addButton({tooltip:xg.shared.nls.text("unorderedList"),"class":"mce_bullist",onClick:function($a,_4c){
_.onClickTagButton($a,_4c,"<ul>\n<li>","</li>\n</ul>\n");
}});
break;
case "numlist":
_.addButton({tooltip:xg.shared.nls.text("orderedList"),"class":"mce_numlist",onClick:function($a,_4e){
_.onClickTagButton($a,_4e,"<ol>\n<li>","</li>\n</ol>\n");
}});
break;
case "removeformat":
_.addButton({tooltip:xg.shared.nls.text("removeFormatting"),"class":"mce_removeformat",onClick:function($a,_50){
if(_50){
_.overwriteSelection(_50.replace(/<[^<]*>/g,""));
}
}});
break;
case "customcode":
_.addButton({tooltip:xg.shared.nls.text("returnToVisualMode"),"class":"mce_code mceButtonActive",onClick:function(){
_4.find(".mceButtonActive:not(.mce_code)").removeClass("mceButtonActive");
_1.onClickHtmlButton();
}});
break;
default:
_30=false;
}
if(_30){
_2d=_2f;
}
});
_4.find("a.mceButton").click(function(_51){
_51.preventDefault();
_.closeAllDropDowns();
});
};
_.onClickTagButton=function($a,_53,_54,_55){
_.overwriteSelection(_54+_53+_55);
_.excludeOuterTagsFromSelection();
};
_.overwriteSelection=function(_56,_57){
xg.shared.editors.tinymce.Utilities.overwriteSelection(_5,_56,_57);
};
_.excludeOuterTagsFromSelection=function(){
var _58=xg.shared.editors.tinymce.Utilities.saveSelection(_5);
if(document.selection){
_58=_58.replace(/\r/g,"");
}
var _59=_58.indexOf(">");
var _5a=_58.lastIndexOf("<");
if(_59===-1||_5a===-1||_59>_5a){
return;
}
try{
var _5b=_.getSelectionIndices();
if(document.selection){
var _5c=_5[0].value.substring(0,_5b.start).replace(/[^\r]/g,"").length;
_5b.start-=_5c;
}
_5b.end=_5b.start+_5a;
_5b.start=_5b.start+_59+1;
if(_5b.start>_5b.end){
return;
}
_.setSelectionIndices(_5b);
}
catch(e){
}
};
_.getSelectionIndices=function(){
if(document.selection){
var _5d=document.selection.createRange().duplicate();
var _5e=_5d.duplicate();
_5e.moveToElementText(_5[0]);
_5e.setEndPoint("EndToEnd",_5d);
return {start:_5e.text.length-_5d.text.length,end:_5e.text.length};
}else{
return {start:_5[0].selectionStart,end:_5[0].selectionEnd};
}
};
_.setSelectionIndices=function(_5f){
if(document.selection){
var _60=_5[0].createTextRange();
_60.collapse(true);
_60.moveStart("character",_5f.start);
_60.moveEnd("character",_5f.end-_5f.start);
_60.select();
}else{
_5[0].selectionStart=_5f.start;
_5[0].selectionEnd=_5f.end;
}
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.HtmlDragbar",false)){
dojo.provide("xg.shared.editors.tinymce.HtmlDragbar");
xg.shared.editors.tinymce.HtmlDragbar=function(_1){
var _2={};
var _={};
var _4;
var _5;
var _6=_1.textarea;
var _7=0;
var _8=100;
_2.getElement=function(_9){
if(!_4){
_4=_.createElement();
_2.updateWidth();
}
return _4;
};
_2.updateWidth=function(){
if(_6.is(":visible")&&_6.width()){
_4.find(".mceLayout").width(_6.width()+4);
}else{
_4.find(".mceLayout").css("width","100%");
}
};
_.createElement=function(){
var _a=x$(" <span class=\"html_editor_dragbar defaultSkin\" style=\"display:none\">     <table cellspacing=\"0\" cellpadding=\"0\" class=\"mceLayout\">         <tbody>             <tr class=\"mceLast\">                 <td class=\"mceStatusbar mceFirst mceLast\">                     <div>                         &nbsp;<a href=\"#\" accesskey=\"x\"></a>                     </div>                     <a href=\"javascript:;\" onclick=\"return false;\" class=\"mceResize\"></a>                 </td>             </tr>         </tbody>     </table> </span>");
_5=_a.find(".mceResize");
_5.bind("mousedown",function(_b){
_b.preventDefault();
_7=_b.pageY-_5.offset().top;
x$("body").bind("mousemove",_.drag);
x$("body").bind("mouseup",_.release);
});
return _a;
};
_.drag=function(_c){
var _d=_c.pageY-_5.offset().top-_7;
_6.height(Math.max(_8,_6.height()+_d));
};
_.release=function(_e){
x$("body").unbind("mousemove",_.drag);
x$("body").unbind("mouseup",_.release);
};
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.HtmlEditorConfig",false)){
dojo.provide("xg.shared.editors.tinymce.HtmlEditorConfig");
xg.shared.editors.tinymce.HtmlEditorConfig=function(_1,_2,_3,$){
var _5={};
var _={};
var _7=xg.shared.editors.tinymce.Utilities;
_5.initializeTextareas=function(){
x$("textarea.wysiwyg-mce-editor, textarea.html-mce-editor").each(function(i,_9){
_5.initializeTextareaIfNecessary($(_9));
});
if(window.tinyMCE){
tinyMCE.DOM.loadCSS(tinyMCE.baseURI.toAbsolute(xg.shared.util.cdn("/xn_resources/widgets/shared/css/editors/tinymce/ui.css",true)));
}
};
_5.initializeTextareaIfNecessary=function(_a){
if(!_a.data("xj_html_editor_config_initialized")){
_.addHtmlEditorToolbar(_a,_a.data("buttons"),_1);
_.addHtmlEditorDragbar(_a);
_.monitorFileUploadCount(_a);
_a.data("xj_html_editor_config_initialized",true);
}
};
_.addHtmlEditorToolbar=function(_b,_c,_d){
var _e=xg.shared.editors.tinymce.HtmlToolbar({textarea:_b,onClickHtmlButton:function(){
_2(_b);
},buttons:_c,fonts:_d});
_b.before(_e.getElement());
_b.data("xj_html_toolbar",_e);
};
_.addHtmlEditorDragbar=function(_f){
var _10=xg.shared.editors.tinymce.HtmlDragbar({textarea:_f});
_f.after(_10.getElement());
_f.data("xj_html_dragbar",_10);
};
_.monitorFileUploadCount=function(_11){
var _12=xg.shared.util.createQuiescenceTimer(1000,function(){
_.checkFileUploadCount(_11);
});
_11.bind("keypress cut paste change",_12.trigger);
};
_.checkFileUploadCount=function(_13){
var _14=_7.isMaxFileUploadCountReached(_13);
_13.data("xj_html_toolbar").setFileButtonEnabled(!_14);
_3(!_14,_13);
};
return _5;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.EmailHtmlCapability",false)){
dojo.provide("xg.shared.editors.tinymce.EmailHtmlCapability");
xg.shared.editors.tinymce.EmailHtmlCapability=(function(){
var _1={};
var _={};
_.initialize=function(){
};
_1.configureAlignmentFormats=function(_3){
_3.formatter.register({alignleft:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,img",attributes:{align:"left"}}],alignright:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,img",attributes:{align:"right"}}]});
};
_1.beforeAlign=function(_4){
};
_1.supportsCenterAlignment=function(){
return false;
};
_1.getAlignment=function(_5){
if(_5.attr("align").toLowerCase()==="left"){
return "left";
}else{
if(_5.attr("align").toLowerCase()==="right"){
return "right";
}else{
return "full";
}
}
};
_1.setAlignment=function(_6,_7){
switch(_7){
case "left":
_6.attr("align","left");
break;
case "right":
_6.attr("align","right");
break;
}
};
_1.startParagraph=function(_8){
switch(_8){
case "left":
return "<p align=\"left\">";
case "center":
return "<p align=\"center\">";
case "right":
return "<p align=\"right\">";
default:
return "<p>";
}
};
_1.setupFontSizes=function(_9){
_9.theme_advanced_font_sizes={"1 (8pt)":{fontSize:"8pt"},"2 (10pt)":{fontSize:"10pt"},"3 (12pt)":{fontSize:"12pt"},"4 (14pt)":{fontSize:"14pt"},"5 (16pt)":{fontSize:"16pt"},"6 (20pt)":{fontSize:"20pt"},"7 (24pt)":{fontSize:"24pt"}};
};
_1.getAttributeForFontSize=function(_a){
var _b={"1":"8pt","2":"10pt","3":"12pt","4":"14pt","5":"16pt","6":"20pt","7":"24pt"};
return ["style","font-size:"+_b[_a]];
};
_1.shouldLinkImagesByDefault=function(){
return false;
};
xg.addOnRequire(function(){
_.initialize();
});
return _1;
})();
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.StandardHtmlCapability",false)){
dojo.provide("xg.shared.editors.tinymce.StandardHtmlCapability");
xg.shared.editors.tinymce.StandardHtmlCapability=(function(){
var _1={};
var _={};
_.initialize=function(){
};
_1.configureAlignmentFormats=function(_3){
_3.formatter.register({alignleft:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"left"}},{selector:"img",classes:"align-full"},{selector:"table",styles:{"float":"left"}}],aligncenter:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"center"}},{selector:"img",classes:"align-center"},{selector:"table",styles:{marginLeft:"auto",marginRight:"auto"}}],alignright:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"right"}},{selector:"img",classes:"align-right"},{selector:"table",styles:{"float":"right"}}],alignleftproper:[{selector:"img",classes:"align-left"}]});
};
_1.beforeAlign=function(_4){
_4.formatter.remove("alignleftproper");
};
_1.supportsCenterAlignment=function(){
return true;
};
_1.getAlignment=function(_5){
if(_5.hasClass("align-left")){
return "left";
}else{
if(_5.hasClass("align-center")){
return "center";
}else{
if(_5.hasClass("align-right")){
return "right";
}else{
return "full";
}
}
}
};
_1.setAlignment=function(_6,_7){
switch(_7){
case "left":
_6.addClass("align-left");
break;
case "center":
_6.addClass("align-center");
break;
case "right":
_6.addClass("align-right");
break;
default:
_6.addClass("align-full");
break;
}
};
_1.startParagraph=function(_8){
switch(_8){
case "left":
return "<p style=\"text-align: left;\">";
case "center":
return "<p style=\"text-align: center;\">";
case "right":
return "<p style=\"text-align: right;\">";
default:
return "<p>";
}
};
_1.setupFontSizes=function(_9){
_9.theme_advanced_font_sizes={"1 (8pt)":{fontSize:"8pt","class":"font-size-1"},"2 (10pt)":{fontSize:"10pt","class":"font-size-2"},"3 (12pt)":{fontSize:"12pt","class":"font-size-3"},"4 (14pt)":{fontSize:"14pt","class":"font-size-4"},"5 (16pt)":{fontSize:"16pt","class":"font-size-5"},"6 (20pt)":{fontSize:"20pt","class":"font-size-6"},"7 (24pt)":{fontSize:"24pt","class":"font-size-7"}};
};
_1.getAttributeForFontSize=function(_a){
return ["class","font-size-"+_a];
};
_1.shouldLinkImagesByDefault=function(){
return true;
};
xg.addOnRequire(function(){
_.initialize();
});
return _1;
})();
}
if(!dojo.hostenv.findModule("xg.shared.editors.tinymce.TinyMCE",false)){
dojo.provide("xg.shared.editors.tinymce.TinyMCE");
xg.shared.editors.tinymce.TinyMCE=(function($){
var _2={};
var _={};
var _4="Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva";
var _5=xg.shared.editors.tinymce.Utilities;
var _6;
var _7;
_.initialize=function(){
$("head").append("<style type='text/css'>.mceToolbar {display: none}</style>");
_.cancelTinyMceIfTinyMceNotLoaded();
_6=xg.shared.editors.tinymce.HtmlEditorConfig(_4,_2.showWysiwygEditor,_.setFileButtonEnabled,$);
_7=xg.shared.editors.tinymce.WysiwygEditorConfig(_4,_2.showHtmlEditor,_.setFileButtonEnabled,_.createIconBar,$);
_.initializeTextareas();
_6.initializeTextareas();
_7.initializeTextareas();
x$("textarea.html-mce-editor").each(function(i,_9){
_2.showHtmlEditor($(_9));
});
};
_.cancelTinyMceIfTinyMceNotLoaded=function(){
if(window.tinymce){
return;
}
x$("textarea.wysiwyg-mce-editor").each(function(i,_b){
$(_b).removeClass("wysiwyg-mce-editor").addClass("html-mce-editor");
});
x$("textarea.wysiwyg-mce-editor").each(function(i,_d){
$(_d).removeClass("deferred-wysiwyg-mce-editor").addClass("deferred-html-mce-editor");
});
};
_2.reinitialize=function(){
$("textarea.wysiwyg-mce-editor, textarea.html-mce-editor").each(function(i,_f){
$textarea=$(_f);
parentDiv=$textarea.parent();
if(parentDiv.attr("backup")){
parentDiv.html(parentDiv.attr("backup"));
}
});
_.initialize();
};
_.initializeTextareas=function(){
x$("textarea.wysiwyg-mce-editor, textarea.html-mce-editor").each(function(i,_11){
var _12=$(_11);
var _13=_12.parent();
if(!_13.attr("backup")){
_13.attr("backup",_13.html());
}
_.initializeTextareaIfNecessary(_12);
});
};
_.initializeTextareaIfNecessary=function(_14){
if(!_14.data("xj_tinymce_prerequisites_initialized")){
_14.data("htmlCapability",_14.attr("_forEmail")?xg.shared.editors.tinymce.EmailHtmlCapability:xg.shared.editors.tinymce.StandardHtmlCapability);
_14.data("buttons",_.determineButtons(_14,_14.data("htmlCapability")));
_5.addIdIfNecessary(_14);
if(_14.parent().hasClass("full-editor")){
_.addUpperTabs(_14);
_.addUpperIconBar(_14);
}
_14.data("xj_tinymce_prerequisites_initialized",true);
}
};
_.addUpperTabs=function(_15){
var _16=x$("<ul class=\"mce-tabs\" style=\"display:none\"><li><a href=\"#\">"+xg.shared.nls.text("visualMode")+"</a></li><li><a href=\"#\">"+xg.shared.nls.text("htmlEditor")+"</a></li></ul>");
if(_15.hasClass("html-mce-editor")||_15.hasClass("deferred-html-mce-editor")){
_16.find("li:nth(1)").addClass("this");
}else{
_16.find("li:nth(0)").addClass("this");
}
_16.find("a:nth(0)").click(function(_17){
_17.preventDefault();
if(_15.parent().hasClass("disabled")){
return;
}
_16.find("li:nth(1)").removeClass("this");
_16.find("li:nth(0)").addClass("this");
_2.showWysiwygEditor(_15);
});
_16.find("a:nth(1)").click(function(_18){
_18.preventDefault();
if(_15.parent().hasClass("disabled")){
return;
}
_16.find("li:nth(0)").removeClass("this");
_16.find("li:nth(1)").addClass("this");
_2.showHtmlEditor(_15);
});
if(_15.attr("_wysiwygModeEnabled")==="0"){
_16.css("visibility","hidden");
}
_15.before(_16);
};
_2.showWysiwygEditor=function(_19){
_19.removeClass("deferred-wysiwyg-mce-editor html-mce-editor deferred-html-mce-editor").addClass("wysiwyg-mce-editor");
_.initializeTextareaIfNecessary(_19);
_6.initializeTextareaIfNecessary(_19);
if(!_5.getEditor(_19)){
_.hideToolbarIfLiquidLayout(_19);
_19.val(_5.adjustLineBreaksEnteredInHtmlMode(_19));
tinyMCE.execCommand("mceAddControl",false,_19.attr("id"));
}
_19.parents(".texteditor:first").find(".html_editor_toolbar").hide();
_19.parents(".texteditor:first").find(".html_editor_dragbar").hide();
xg.shared.EventRegistry.fire("xg.shared.editors.tinymce.TinyMCE.wysiwygEditorShown");
};
_2.showHtmlEditor=function(_1a){
_1a.removeClass("wysiwyg-mce-editor deferred-wysiwyg-mce-editor deferred-html-mce-editor").addClass("html-mce-editor");
_.initializeTextareaIfNecessary(_1a);
_6.initializeTextareaIfNecessary(_1a);
if(_5.getEditor(_1a)){
_.updateHtmlEditorHeight(_1a);
tinyMCE.execCommand("mceRemoveControl",false,_1a.attr("id"));
_1a.focus();
_1a.val(_5.adjustLineBreaksEnteredInVisualMode(_1a));
}
_1a.parents(".texteditor:first").find(".html_editor_toolbar").show();
_1a.parents(".texteditor:first").find(".html_editor_dragbar").show();
_5.updateLiquidLayout(_1a);
xg.shared.EventRegistry.fire("xg.shared.editors.tinymce.TinyMCE.htmlEditorShown");
};
_.hideToolbarIfLiquidLayout=function(_1b){
if(_1b.parent().hasClass("ultracompact-editor")){
_1b.parent().addClass("uninitialized-liquid-layout");
}
};
_.determineButtons=function(_1c,_1d){
var _1e;
if(_1c.parent().hasClass("full-editor")){
_1e=",fontselect,fontsizeselect,forecolor,|,bold,italic,strikethrough,underline,|,justifyleft,justifycenter,justifyright,|,blockquote,bullist,numlist,|,removeformat,|,fullscreen";
}else{
_1e=",customlink,customimage,custommedia,custompastetext,customfile,|,bold,italic,strikethrough,underline,|,justifyleft,justifycenter,justifyright,|,blockquote,bullist,numlist,|,customcode";
}
if(xg.uploadsDisabled||_1c.attr("_hideFileUploadButton")){
_1e=_1e.replace(/,customfile/,"");
}
if(!_1d.supportsCenterAlignment()){
_1e=_1e.replace(/,justifycenter/,"");
}
if(_1c.attr("_wysiwygModeEnabled")==="0"){
_1e=_1e.replace(/,customcode/,"");
}
if(_1c.attr("_showFormattingDropDowns")==="0"){
_1e=_1e.replace(/,(fontselect|fontsizeselect|forecolor)/g,"");
}
if(_1c.attr("_showFormattingButtons")==="0"){
_1e=_1e.replace(/,(bold|italic|strikethrough|underline|justifyleft|justifycenter|justifyright|blockquote|bullist|numlist|removeformat)/g,"");
}
_1e=_1e.replace(/(,\|)+/g,",|").replace(/^,|,$/g,"").replace(/^\||\|$/g,"");
return _1e;
};
_.addUpperIconBar=function(_1f){
$iconBar=_.createIconBar(_1f);
_1f.before($iconBar);
_1f.data("xj_upper_icon_bar",$iconBar);
};
_.createIconBar=function(_20){
var _21=$("<span class=\"mce-icon-row\" style=\"display:none\">"+xg.shared.nls.html("addColon")+" <a href=\"#\" class=\"icon-link\" title=\""+xg.shared.nls.html("link")+"\">"+xg.shared.nls.html("link")+"</a>"+" <a href=\"#\" class=\"icon-image\" title=\""+xg.shared.nls.html("image")+"\">"+xg.shared.nls.html("image")+"</a>"+" <a href=\"#\" class=\"icon-media\" title=\""+xg.shared.nls.html("media")+"\">"+xg.shared.nls.html("media")+"</a>"+" <a href=\"#\" class=\"icon-pastetext\" title=\""+xg.shared.nls.html("pasteText")+"\">"+xg.shared.nls.html("pasteText")+"</a>"+" <a href=\"#\" class=\"icon-file\" title=\""+xg.shared.nls.html("file")+"\">"+xg.shared.nls.html("file")+"</a>"+"</span>");
_21.find("a.icon-link").click(function(_22){
_22.preventDefault();
if(_20.parent().hasClass("disabled")){
return;
}
xg.shared.editors.tinymce.LinkDialog(_20).show();
});
_21.find("a.icon-image").click(function(_23){
_23.preventDefault();
if(_20.parent().hasClass("disabled")){
return;
}
xg.shared.editors.tinymce.ImageDialog(_20,null,xg.uploadsDisabled||_5.isMaxFileUploadCountReached(_20)).show();
});
_21.find("a.icon-media").click(function(_24){
_24.preventDefault();
if(_20.parent().hasClass("disabled")){
return;
}
xg.shared.editors.tinymce.MediaDialog(_20).show();
});
_21.find("a.icon-pastetext").click(function(_25){
_25.preventDefault();
if(_20.parent().hasClass("disabled")){
return;
}
xg.shared.editors.tinymce.PasteTextDialog(_20).show();
});
_21.find("a.icon-file").click(function(_26){
_26.preventDefault();
if(_20.parent().hasClass("disabled")){
return;
}
if(x$(this).hasClass("disabled")){
return;
}
xg.shared.editors.tinymce.FileDialog(_20).show();
});
if(xg.uploadsDisabled||_20.attr("_hideFileUploadButton")){
_21.find("a.icon-file").remove();
}
return _21;
};
_.updateHtmlEditorHeight=function(_27){
_27.height(x$(_5.getEditor(_27).getContainer()).find("iframe").height());
};
_.setFileButtonEnabled=function(_28,_29){
if(_29.data("xj_upper_icon_bar")){
if(_28){
_29.data("xj_upper_icon_bar").find("a.icon-file").removeClass("disabled");
}else{
_29.data("xj_upper_icon_bar").find("a.icon-file").addClass("disabled");
}
}
};
xg.addOnRequire(function(){
_.initialize();
});
return _2;
})(x$);
}
if(!dojo.hostenv.findModule("xg.shared.editors.TinyMCEEditor",false)){
dojo.provide("xg.shared.editors.TinyMCEEditor");
xg.shared.editors.TinyMCEEditor=function(_1){
var _2={};
var _={};
var _4=750;
var _5;
_.initialize=function(){
if(!window.tinymce){
return;
}
xg.shared.editors.tinymce.Utilities.addIdIfNecessary(_1);
var id=_1.attr("id");
_5=tinymce.get(id);
if(_5){
_.addEventHandlers();
}
tinyMCE.onAddEditor.add(function(_7,_8){
if(_8.id==id){
_5=_8;
_.addEventHandlers();
}
});
};
_.addEventHandlers=function(){
_5.onKeyUp.add(_.onChange);
_5.onPaste.add(_.onChange);
};
_.onChange=function(){
_.checkMaxLength();
_2.updateBackgroundColor();
};
_.checkMaxLength=function(){
};
_2.setMaxLength=function(_9){
var _a=_a=x$("<small></small>").insertAfter(_1.parents("div.texteditor:first"))[0];
_.checkMaxLength=xg.shared.util.setAdvisableMaxLength(_1[0],_9,null,_2.val,_a,_4);
};
_.isInHtmlMode=function(){
return !_5||!_5.getDoc();
};
_2.updateBackgroundColor=function(){
if(_.isInHtmlMode()){
return;
}
xg.shared.editors.tinymce.Utilities.updateBackgroundColor(_1,_5);
};
_2.val=function(){
if(_.isInHtmlMode()){
if(arguments.length){
_1.val(arguments[0]);
return;
}
return _1.val();
}
if(arguments.length){
_5.setContent(arguments[0]);
return;
}
return _5.getContent();
};
_2.valWithLineBreakAdjustments=function(){
if(_.isInHtmlMode()){
var _b=_2.val();
_b=xg.shared.editors.tinymce.WordpressLineBreakRules.adjustLineBreaksEnteredInHtmlMode(_b);
_b=xg.shared.editors.tinymce.WordpressLineBreakRules.adjustLineBreaksEnteredInVisualMode(_b);
return _.cleanHtml(_b);
}
return _2.val();
};
_.cleanHtml=function(_c){
if(_c.match(/<script\b/i)){
return _c;
}
return x$("<div></div>").append(_c).html();
};
_2.adjustLineBreaks=function(){
if(_.isInHtmlMode()){
var _d=_1.attr("name");
_1.data("xj_original_name",_d);
_1.attr("name",_d+"WithoutLineBreakAdjustments");
var _e=x$("<input type=\"hidden\" />").attr("name",_d).val(_2.valWithLineBreakAdjustments());
_1.after(_e);
_1.data("xj_hidden_input",_e);
}
};
_2.unadjustLineBreaks=function(){
if(_.isInHtmlMode()){
_1.data("xj_hidden_input").remove();
_1.attr("name",_1.data("xj_original_name"));
}
};
_2.initializeAfterPageLoad=function(){
if(_1.val().match(/<script|<object|<embed|<iframe/i)){
xg.shared.editors.tinymce.TinyMCE.showHtmlEditor(_1);
}else{
if(_1.hasClass("deferred-html-mce-editor")||_1.hasClass("html-mce-editor")){
xg.shared.editors.tinymce.TinyMCE.showHtmlEditor(_1);
}else{
xg.shared.editors.tinymce.TinyMCE.showWysiwygEditor(_1);
}
}
return _2;
};
_2.uninitialize=function(){
tinyMCE.execCommand("mceRemoveControl",false,_1.attr("id"));
return _2;
};
_2.focus=function(){
if(_.isInHtmlMode()){
_1.focus();
return;
}
_5.focus();
};
_2.moveCursorToStart=function(){
if(_.isInHtmlMode()){
xg.shared.editors.Editor.moveCursorToStart(_1[0]);
}else{
_2.focus();
}
};
_2.updateTextarea=function(){
if(!_.isInHtmlMode()){
_5.save();
}
};
_2.setEnabled=function(_f){
if(_f){
_1.parent().removeClass("disabled");
_1.prop("disabled",false);
}else{
_1.parent().addClass("disabled");
_1.prop("disabled",true);
}
};
_2.getTextarea=function(){
return _1;
};
xg.addOnRequire(function(){
_.initialize();
});
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.editors.Editor",false)){
dojo.provide("xg.shared.editors.Editor");
xg.shared.editors.Editor=(function($){
var _2={};
var _={};
var _4={};
var _5=1;
_.getID=function(_6){
var _7=$(_6);
if(!_7.data("xj_editor_id")){
_7.data("xj_editor_id",_5++);
}
return _7.data("xj_editor_id");
};
_2.get=function(_8){
var id=_.getID(_8);
if(!_4[id]){
var _a=$(_8);
if(_a.hasClass("wysiwyg-mce-editor")||_a.hasClass("deferred-wysiwyg-mce-editor")||_a.hasClass("html-mce-editor")||_a.hasClass("deferred-html-mce-editor")){
_4[id]=xg.shared.editors.TinyMCEEditor(_a);
}else{
_4[id]=xg.shared.editors.PlainEditor(_a);
}
}
return _4[id];
};
_2.moveCursorToStart=function(_b){
if(_b.setSelectionRange){
try{
_b.setSelectionRange(0,0);
}
catch(err){
}
}else{
if(_b.createTextRange){
var _c=_b.createTextRange();
_c.collapse(true);
_c.moveEnd("character",0);
_c.moveStart("character",0);
_c.select();
}
}
};
_2.warnOnLostChanges=function(_d,_e,_f){
var _10=_2.get(_d);
var _11=_10.val();
window.unloadaction=function(){
if(_f&&_f.isShowing()){
return;
}
if(_10.val().replace(/<.*?>|&nbsp;/g,"")!=_11.replace(/<.*?>|&nbsp;/g,"")){
return _e?_e:xg.shared.nls.text("unsavedChanges");
}
};
window.onbeforeunload=function(){
return window.unloadaction();
};
xg.shared.util.closest($(_d),"form").submit(function(){
if(window.onbeforeunload){
window.onbeforeunload=null;
}
});
var _12=dojo.event.browser.stopEvent;
dojo.event.browser.stopEvent=function(_13){
_12(_13);
if(_13.type=="submit"||_13.type=="onsubmit"){
window.onbeforeunload=function(){
return window.unloadaction();
};
}
};
};
return _2;
})(x$);
}
if(!dojo.hostenv.findModule("xg.index.quickadd.core",false)){
dojo.provide("xg.index.quickadd.core");
xg.addOnRequire(function(){
var _1=xg.index.quickadd,_2={};
_1.activeDialog=undefined;
var _3=false;
var _4=false;
var _5=undefined;
xg.index.quickadd.showSpinner=function(){
return xg.append(xg.shared.util.createElement("<div class=\"xg_floating_module quickadd-progress-spinner\">"+"<div style=\"top: -30px\">"+"<img src=\""+xg.shared.util.cdn("/xn_resources/widgets/index/gfx/spinner.gif")+"\" alt=\""+xg.shared.nls.html("loading")+"\" height=\"48\" width=\"48\">"+"</div>"+"</div>"));
};
xg.index.quickadd.hideSpinner=function(_6){
x$(".quickadd-progress-spinner").remove();
if(!_6){
x$("#xg_overlay").hide();
}
};
xg.index.quickadd.showSuccessDialog=function(_7){
var _8=xg.shared.util.createElement("<div class=\"xg_floating_module\" style=\"visibility:hidden\">"+"<div style=\"background-image: none;\" class=\"xg_floating_container xg_lightborder xg_module quickadd\">"+"<div class=\"xg_module_head\"><h2></h2></div>"+"<div class=\"xg_module_body\">"+"<p class=\"msg "+(_7.status=="ok"?"success":"notification")+"\">"+_7.message+"</p>"+(_7.viewUrl?"<p class=\"view_lnk align-right\"><a href=\""+xg.qh(_7.viewUrl)+"\">"+_7.viewText+"</a></p>":"")+"<p class=\"buttongroup\"><a href=\"#\" class=\"button\">OK</a></p>"+"</div>"+"</div>"+"</div>");
x$("h2",_8).html(x$("h2",_1._dialogs[_1.activeDialog]).html());
x$("a.button",_8).click(function(_9){
_9.preventDefault();
x$(_8).remove();
x$("#xg_overlay").hide();
return false;
});
xg.append(_8);
xg.shared.util.fixDialogPosition(_8);
_8.firstChild.style.visibility="visible";
};
xg.index.quickadd.onDefaultServerResponse=function(_a,_b){
var _c=false;
if("object"!=typeof _a){
_c=true;
if(typeof JSON=="undefined"){
try{
_a=eval("(function(){ return "+_a+"; })();")||{};
}
catch(e){
_a={};
}
}else{
try{
_a=JSON.parse(_a)||{};
}
catch(e){
_a={};
}
}
}
var _d=(_a.status!="ok"&&_a.status!="not_approved");
if(_d){
xg.index.util.FormHelper.showErrorMessages(xg.$("form",_1._dialogs[_1.activeDialog]),{x:_a.message||xg.index.nls.text("thereWasAProblem")});
_1.hideSpinner(true);
_1.showDialog();
return;
}
if(_4&&"undefined"!=typeof xg_quickadd_forceReload&&xg_quickadd_forceReload){
_3=true;
}
if(_a.newFeedHtml){
xg.activity.embed.ActivityFeedUpdater.updateFeed(_b,_a.newFeedHtml,_1.hideSpinner);
}else{
if(_a.viewUrl){
window.location.href=_a.viewUrl;
}else{
_1.hideSpinner(true);
_1.showSuccessDialog(_a);
}
}
_1.activeDialog=undefined;
};
xg.index.quickadd.listen=function(_e,_f,cb){
if(!_2[_e]){
_2[_e]={};
}
if(!_2[_e][_f]){
_2[_e][_f]=[];
}
_2[_e][_f].push(cb);
};
xg.index.quickadd.fire=function(dlg,evt,_13){
if(!_2[dlg]||!_2[dlg][evt]){
return;
}
for(var i=0,a=_2[dlg][evt];i<a.length;i++){
if(_13){
a[i](_13);
}else{
a[i]();
}
}
};
xg.index.quickadd.openDialog=function(v){
dojo.html.hide(_1._stub);
xg.shared.util.showOverlay();
_1.activeDialog=v;
_3=false;
_1.fire(_1.activeDialog,"open");
_1.showDialog(true);
};
xg.index.quickadd.cancelDialog=function(){
if(_1.removeIframe){
_1.removeIframe();
}
_1.hideProgress();
_1.hideDialog();
xg.shared.util.hideOverlay();
if(_3){
window.location.reload(true);
}
_1.activeDialog=undefined;
};
xg.index.quickadd.showDialog=function(_17){
var dlg=_1._dialogs[_1.activeDialog];
dlg.style.visibility="hidden";
dlg.style.display="";
xg.shared.util.fixDialogPosition(dlg);
if(_17){
var _19=dojo.dom.firstElement(dlg,"div");
dojo.style.setOpacity(_19,0);
dlg.style.visibility="visible";
var _1a=dojo.lfx.html.fadeIn(_19,250);
_1a.onEnd=function(){
var f=xg.$("form",dlg);
if(!f){
return;
}
for(var i=0;i<f.elements.length;i++){
if(f.elements[i].tagName!="FIELDSET"&&!f.elements[i].disabled&&(!f.elements[i].type||f.elements[i].type!="hidden")){
f.elements[i].focus();
break;
}
}
};
_1a.play();
}else{
dlg.style.visibility="visible";
}
var _1d="<iframe id=\"confirm_iframe\" src=\"about:blank\" scrolling=\"no\" frameborder=\"0\" />";
var _1e=xg.shared.util.getPositionedAndSizedIframe(_1d,dlg).appendTo("body");
_1.removeIframe=function(){
dojo.dom.removeNode(_1e[0]);
};
};
xg.index.quickadd.hideDialog=function(){
x$(_1._dialogs[_1.activeDialog]).hide();
if(_1.removeIframe){
_1.removeIframe();
}
};
var _1f=0;
xg.index.quickadd.showProgress=function(_20,_21,_22){
xg.index.quickadd.showSpinner();
};
xg.index.quickadd.hideProgress=function(){
dojo.html.hide(dojo.byId("xg_quickadd_spinner"));
};
xg.index.quickadd.gotoMoreOptions=function(_23,cb){
var _25=0;
for(var els=_23.elements,i=0;i<els.length;i++){
if(els[i].type&&els[i].type=="file"&&els[i].value!=""){
_25++;
}
}
if(_25&&!confirm(xg.index.nls.text("cannotKeepFiles"))){
return;
}
if(cb){
cb();
}
_23.setAttribute("target","");
_23.submit();
};
xg.index.quickadd.resetForm=function(_28){
xg.index.util.FormHelper.hideErrorMessages(_28);
_28.reset();
x$("textarea",_28).each(function(){
var _29=xg.shared.editors.Editor.get(this);
_29.val("");
_29.updateTextarea();
_29.updateBackgroundColor();
});
};
xg.index.quickadd.validateForm=function(_2a,_2b){
if(xg.index.util.FormHelper.runValidation(_2a,_2b)){
return true;
}
xg.shared.util.fixDialogPosition(xg.parent(_2a,"div.xg_floating_module"));
return false;
};
xg.index.quickadd.submitForm=function(_2c){
var _2d=_2c.cleanup||function(){
};
setTimeout(function(){
_4=_2c.isContent||false;
_2c.form.action=xg.activity.embed.ActivityFeedUpdater.addGetLatestFeedParams(_2c.form.action,_2c.feedId);
xg.shared.IframeUpload.start(_2c.form,function(_2e){
_1.hideProgress();
if(_2c.success){
_2c.success(_2e);
}else{
xg.index.quickadd.onDefaultServerResponse(_2e,_2c.feedId);
}
_2d();
},false,false,true);
_1.hideDialog();
_1.showProgress(_2c.title||xg.uploader.nls.text("uploadingLabel"),_2c.text||xg.uploader.nls.text("uploadingInstructions"),function(){
xg.shared.IframeUpload.stop();
_1.hideProgress();
(_2c.cancel||_1.cancelDialog)();
_2d();
});
});
};
xg.index.quickadd.submitFormXhr=function(_2f){
var _30=_2f.cleanup||function(){
};
setTimeout(function(){
var _31;
_4=_2f.isContent||false;
_2f.form.action=xg.activity.embed.ActivityFeedUpdater.addGetLatestFeedParams(_2f.form.action,_2f.feedId);
_5=_2f.form;
_1.hideDialog();
_1.showProgress(_2f.title||xg.uploader.nls.text("uploadingLabel"),_2f.text||xg.index.nls.text("addingInstructions"),function(){
_31.abort();
_1.hideProgress();
(_2f.cancel||_1.cancelDialog)();
_30();
});
_31=xg.post("",_2f.form,function(r,d){
_1.hideProgress();
if(_2f.success){
_2f.success(d);
}else{
xg.index.quickadd.onDefaultServerResponse(d,_2f.feedId);
}
_30();
});
});
};
});
}
if(!dojo.hostenv.findModule("xg.index.quickadd.loader",false)){
dojo.provide("xg.index.quickadd.loader");
xg.index.quickadd._dialogs={};
xg.index.quickadd._stub=undefined;
xg.addOnRequire(function(){
var _1=0;
xg.index.quickadd.loadModule=function(_2,_3,js,_5,_6){
if((_5===null)||("undefined"===typeof (_5))){
_5=false;
}
if(_1||xg.index.quickadd.activeDialog){
return;
}
if(!_3){
return;
}
_1=1;
xg.shared.util.showOverlay();
if(xg.index.quickadd._dialogs[_2]){
if(_5){
dojo.dom.removeNode(xg.index.quickadd._dialogs[_2]);
}else{
x$(".quickadd").attr("_feedId",_6);
xg.shared.util.hideOverlay();
xg.index.quickadd.openDialog(_2);
_1=0;
return;
}
}
if(!_5&&xg.index.quickadd._stub){
dojo.html.show(xg.index.quickadd._stub);
}else{
xg.index.quickadd._stub=xg.index.quickadd.showSpinner();
}
var _7,_8=function(){
_1=0;
var el=xg.append(xg.shared.util.createElement(_7));
dojo.html.hide(el);
xg.shared.util.parseWidgets(el);
x$(".quickadd").attr("_feedId",_6);
xg.index.quickadd.fire(_2,"load");
xg.index.quickadd._dialogs[_2]=el;
xg.shared.util.hideOverlay();
xg.index.quickadd.openDialog(_2);
};
var _a=2,_b=function(){
if(0==--_a){
_8();
}
};
var _c=["dojo.lfx.html","xg.index.util.FormHelper","xg.index.quickadd.core"];
if(js){
_c.push(js);
}
xg.get(_3,{},function(r,_e){
_7=_e;
_b();
});
_c.push(_b);
ning.loader.require.apply(ning.loader,_c);
};
});
}
if(!dojo.hostenv.findModule("xg.index.quickadd.bar",false)){
dojo.provide("xg.index.quickadd.bar");
dojo.widget.defineWidget("xg.index.quickAddBar",dojo.widget.HtmlWidget,{fillInTemplate:function(_1,_2){
var s=this.getFragNodeRef(_2);
var _4=x$(s).parents(".xg_module_activity");
var _5=x$(".quickadd-options-wrapper, .quickadd-options-links",_4);
var _6=x$(".quickadd-wrapper",_4);
var _7=x$(s).hasClass("quickadd-options-links");
if(!_7){
x$(".quickadd-button",s).click(function(_8){
var _9=_6.offset();
var _a=_9.left+_6.innerWidth()-_5.innerWidth()+(_5.outerWidth(true)-_5.outerWidth())/2;
var _b=_9.top+_6.innerHeight()-(_5.outerHeight(true)-_5.innerHeight())/2;
if(!_5.is(":visible")){
if(x$("#xg_themebody").length>0){
if(!_5.parent().is("#xg_themebody")){
_5.appendTo("#xg_themebody");
}
}else{
if(!_5.parent().is("body")){
_5.appendTo("body");
}
}
_5.css({"top":_b,"left":_a,"z-index":20000});
_5.show();
}else{
x$(_5).hide();
}
return false;
});
}
x$("html").click(function(_c){
if(!_7&&x$(_5).is(":visible")){
x$(_5).hide();
}
});
x$(".quickadd-options",_5).click(function(_d){
_d.stopPropagation();
});
x$(".quickadd-options a",_5).click(function(_e){
_e.preventDefault();
if(!_7){
x$(_5).hide();
}
var _f,url,js,_12,_13;
_13=x$(_4).attr("id");
_f=x$(this).attr("data-value");
_12=x$(this).attr("data-gotoPage");
url=x$(this).attr("data-url");
js=x$(this).attr("data-js");
if(_12){
window.location.href=url;
return false;
}
if(_f){
var _14=false;
if(_f=="photo"){
_14=true;
}
xg.index.quickadd.loadModule(_f,url,js,_14,_13);
}
});
}});
}
if(!dojo.hostenv.findModule("xg.index.bulk",false)){
dojo.provide("xg.index.bulk");
dojo.provide("xg.index.BulkActionLink");
dojo.widget.defineWidget("xg.index.BulkActionLink",dojo.widget.HtmlWidget,{title:"<required>",_url:"<required>",_successUrl:"",_successCallback:"",_displaySuccesDialog:"true",_couldNotProcessSomeEntitiesMessage:"",_couldNotProcessEntities:[],_joinPromptText:"",_ensureCheckboxClicked:false,_formId:"",_checkboxSelectMessage:"",_verb:"",_confirmMessage:"",_confirmMessageForMultipleSelection:"",_progressTitle:"",_progressMessage:"",_successTitle:"",_successMessage:"",_failureTitle:"",_failureMessage:"",_showCheckbox:false,_checkboxUrl:"",_checkboxSuccessUrl:"",_checkboxMessage:"",_checkboxLabelStyle:"",_checkboxChecked:false,_showTextarea:false,_textareaTitle:"",_textareaName:"textarea",_textareaContent:"",_nonEmptyTextareaVerb:"",_textareaToggles:false,_textareaHidden:false,_textareaIsTextInput:false,maxMsgLength:2000,ensureSelection:function(){
if(this._ensureCheckboxClicked){
var _1=false;
var _2=dojo.byId(this._formId);
checkboxes=[];
var _3=_2.getElementsByTagName("input");
for(a=0;a<_3.length;a++){
if(_3[a].type=="checkbox"){
checkboxes.push(_3[a]);
}
}
if(checkboxes.length){
for(i=0;i<checkboxes.length;i++){
if(checkboxes[i].checked){
_1=true;
}
}
}
if(!_1){
xg.shared.util.alert(this._checkboxSelectMessage);
}
return _1;
}else{
return true;
}
},fillInTemplate:function(_4,_5){
this._verb=this._verb||xg.index.nls.text("ok"),this._confirmMessage=this._confirmMessage||xg.index.nls.text("areYouSureYouWant"),this._progressTitle=this._progressTitle||xg.index.nls.text("processing"),this._progressMessage=this._progressMessage||xg.index.nls.text("pleaseKeepWindowOpen"),this._successTitle=this._successTitle||xg.index.nls.text("complete"),this._successMessage=this._successMessage||xg.index.nls.text("processIsComplete"),this._failureTitle=this._failureTitle||xg.index.nls.text("error"),this._failureMessage=this._failureMessage||xg.index.nls.text("processingFailed"),this.a=this.getFragNodeRef(_5);
dojo.style.show(this.a);
this.initDialog();
dojo.event.connect(this.a,"onclick",dojo.lang.hitch(this,function(_6){
dojo.event.browser.stopEvent(_6);
xg.shared.util.promptToJoin(this._joinPromptText,dojo.lang.hitch(this,function(){
if(this._confirmMessage){
this.confirm();
}else{
this.execute();
}
}));
}));
},initDialog:function(){
if(this.dialog){
return;
}
var _7=dojo.html.createNodesFromText(dojo.string.trim("            <div style=\"display: none\" class=\"xg_floating_module\">                <div class=\"xg_floating_container xg_lightborder xg_floating_container_wide xg_module\">                    <div class=\"xg_module_head\">                        <h2>"+dojo.string.escape("html",this.title)+"</h2>                    </div>                    <div class=\"xg_module_body\">                    </div>                </div>            </div>"))[0];
this.dialog=xg.append(_7);
this.h2=this.dialog.getElementsByTagName("h2")[0];
this.body=dojo.html.getElementsByClass("xg_module_body",_7,"div")[0];
},confirm:function(){
if(this.ensureSelection()){
this.h2.innerHTML=this.title;
var _8=this._confirmMessage;
if(this._confirmMessageForMultipleSelection&&x$("#"+this._formId).find("input[type=checkbox]:checked").length>1){
_8=this._confirmMessageForMultipleSelection;
}
var _9="<p>"+dojo.string.escape("html",_8)+"</p>                 <fieldset class=\"nolegend\">";
if(this._showCheckbox){
_9+="                    <p>                         <label style=\""+this._checkboxLabelStyle+"\"><input type=\"checkbox\"                             class=\"checkbox\" id=\"dialog_additional_checkbox\""+(this._checkboxChecked?" checked=\"checked\"":"")+">"+this._checkboxMessage+"</label>                     </p>";
}
if(this._showTextarea){
_9+="                    <p>"+(this._textareaTitle?"<label for=\"body\" id=\"textareaLabel\">"+(this._textareaToggles?"<span id=\"textareaArrow\">"+(this._textareaHidden?"\u25ba":"\u25bc")+"</span> ":"")+xg.qh(this._textareaTitle)+"</label>":"")+(this._textareaIsTextInput?"<input type=\"text\" size=\"30\" name=\"body\" id=\"body\" maxlength=\""+this.maxMsgLength+"\""+((this._textareaToggles&&this._textareaHidden)?" style=\"display: none;\"":"")+"value=\""+xg.qh(this._textareaContent)+"\">":"<textarea rows=\"4\" cols=\"30\" name=\"body\" id=\"body\""+((this._textareaToggles&&this._textareaHidden)?" style=\"display: none;\"":"")+">"+xg.qh(this._textareaContent)+"</textarea>")+"</p>";
}
_9+="                <p class=\"buttongroup\">                     <a href=\"#\" class=\"button action-primary\">"+this._verb+"</a>                     <a href=\"#\" class=\"action-secondary\">"+xg.index.nls.html("cancel")+"</a>                 </p>             </fieldset>";
this.body.innerHTML=_9;
var _a=this.body.getElementsByTagName("a");
if(this._showTextarea){
var _b=x$("#body")[0];
if(this._textareaToggles){
var _c=x$("#textareaLabel",this.body)[0];
var _d=x$("#textareaArrow",_c);
dojo.event.connect(_c,"onclick",dojo.lang.hitch(this,function(_e){
x$(_b).toggle(200);
_d.html(_d.html().indexOf("\u25ba")>-1?"\u25bc":"\u25ba");
}));
}
if(this._nonEmptyTextareaVerb){
dojo.event.connect(_b,"onkeyup",dojo.lang.hitch(this,function(_f){
var _10=dojo.string.trim(_b.value);
if(_10&&_10.length>0){
_a[0].innerHTML=xg.qh(this._nonEmptyTextareaVerb);
}else{
_a[0].innerHTML=xg.qh(this._verb);
}
}));
}
}
dojo.event.connect(_a[0],"onclick",dojo.lang.hitch(this,function(evt){
dojo.event.browser.stopEvent(evt);
if(this._showCheckbox&&dojo.byId("dialog_additional_checkbox").checked){
this._url=this._checkboxUrl;
if(this._checkboxSuccessUrl.length>0){
this._successUrl=this._checkboxSuccessUrl;
}
}
if(this._showTextarea){
var _12=x$("#body")[0];
this.messageBody=dojo.string.trim(_12.value);
if(this.messageBody.length>this.maxMsgLength){
this.failure(xg.index.nls.html("messageIsTooLong",this.maxMsgLength));
return;
}
}
this.execute();
}));
dojo.event.connect(_a[1],"onclick",dojo.lang.hitch(this,function(evt){
dojo.event.browser.stopEvent(evt);
this.hide();
}));
this.showDialog();
}
},execute:function(){
this.h2.innerHTML=this._progressTitle;
this.body.innerHTML="<img src=\""+xg.shared.util.cdn("/xn_resources/widgets/index/gfx/spinner.gif")+"\" alt=\""+xg.shared.nls.html("loading")+"\" class=\"left\" style=\"margin-right:5px\" width=\"20\" height=\"20\"/>             <p style=\"margin-left:25px\">"+this._progressMessage+"</p>";
this.showDialog();
this.doBulkAction(0);
},showDialog:function(){
xg.shared.util.showOverlay();
dojo.html.show(this.dialog);
window.scrollTo(0,0);
},doBulkAction:function(_14){
dojo.io.bind({url:this._url,method:"post",encoding:"utf-8",preventCache:true,content:dojo.lang.mixin({counter:_14},this.getPostContent(_14)),mimetype:"text/json",load:dojo.lang.hitch(this,function(t,_16,e){
if(!_16){
this.failure(this._failureMessage);
}else{
if("couldNotProcessEntities" in _16){
this._couldNotProcessEntities=this._couldNotProcessEntities.concat(_16.couldNotProcessEntities);
}
if(!("contentRemaining" in _16)){
if("errorMessage" in _16){
this.failure(_16.errorMessage);
}else{
this.failure(this._failureMessage);
}
}else{
if(this.isDone(_16.contentRemaining)){
this.success();
}else{
this.doBulkAction(_14+1);
}
}
}
})});
},getPostContent:function(_18){
var _19={};
if(this._showTextarea){
_19[this._textareaName]=this.messageBody;
}
return _19;
},isDone:function(_1a){
return _1a==0;
},success:function(){
if(this._successUrl.length&&this._couldNotProcessEntities.length==0){
window.location.replace(this._successUrl);
}else{
if(this._displaySuccesDialog=="true"||this._couldNotProcessEntities.length>0){
var _1b="";
if(this._couldNotProcessEntities.length>0){
this.h2.innerHTML=this.title;
_1b="<p>"+this._couldNotProcessSomeEntitiesMessage+"</p><ul>";
for(var i=0;i<this._couldNotProcessEntities.length;i++){
_1b+="<li>"+this._couldNotProcessEntities[i]+"</li>";
}
_1b+="</ul>";
}else{
this.h2.innerHTML=this._successTitle;
_1b="<p>"+this._successMessage+"</p>";
}
_1b+="<p class=\"buttongroup\"><a href=\"#\" class=\"button\">"+xg.index.nls.html("ok")+"</a></p>";
this.body.innerHTML=_1b;
var _1d=this.body.getElementsByTagName("a");
dojo.event.connect(this.body.getElementsByTagName("a")[_1d.length-1],"onclick",dojo.lang.hitch(this,function(evt){
dojo.event.browser.stopEvent(evt);
this.hide();
if(this._successUrl.length){
window.location.replace(this._successUrl);
}
}));
}else{
this.hide();
}
if(this._successCallback.length){
eval(this._successCallback+"(this.a)");
}
window.scrollTo(0,0);
}
},failure:function(_1f){
this.h2.innerHTML=this._failureTitle;
this.body.innerHTML="<p>"+_1f+"</p>                 <p class=\"buttongroup\">                     <a href=\"#\" class=\"button\">"+xg.index.nls.html("ok")+"</a>                 </p>";
var _20=this.body.getElementsByTagName("a");
dojo.event.connect(this.body.getElementsByTagName("a")[_20.length-1],"onclick",dojo.lang.hitch(this,function(evt){
dojo.event.browser.stopEvent(evt);
this.hide();
}));
window.scrollTo(0,0);
},hide:function(){
x$(this.dialog).hide();
xg.shared.util.hideOverlay();
}});
dojo.widget.defineWidget("xg.index.BroadcastMessageLink",xg.index.BulkActionLink,{_spamUrl:"",_spamMessageParts:"",maxMsgLength:10000,confirm:function(){
this.h2.innerHTML=this.title;
this.body.innerHTML="<dl style=\"display: none\"></dl>                <fieldset>                 <p><label for=\"subject\">"+xg.index.nls.html("subject")+"</label><br /><input type=\"text\" class=\"textfield dy-input-full\" name=\"subject\" id=\"subject\" size=\"51\" /></p>                 <p><label for=\"body\">"+xg.index.nls.html("body")+"</label>("+xg.index.nls.html("htmlNotAllowed")+")<br /><textarea rows=\"6\" cols=\"20\" class=\"dy-input-full\" name=\"body\" id=\"body\"></textarea></p>                 <p class=\"buttongroup\">                     <a href=\"#\" class=\"button action-primary\">"+xg.index.nls.html("send")+"</a>                     <a href=\"#\" class=\"action-secondary\">"+xg.index.nls.html("cancel")+"</a>                 </p>             </fieldset>";
var _22=this.body.getElementsByTagName("a");
var _23=this.body.getElementsByTagName("input")[0];
var _24=this.body.getElementsByTagName("textarea")[0];
var _25=this.body.getElementsByTagName("dl")[0];
dojo.event.connect(_22[0],"onclick",dojo.lang.hitch(this,function(evt){
dojo.event.browser.stopEvent(evt);
var _27=[];
dojo.lang.forEach(dojo.html.getElementsByClass("error",this.body),function(el){
dojo.html.removeClass(el,"error");
},true);
this.messageSubject=dojo.string.trim(_23.value);
if(this.messageSubject.length==0){
_27.push(xg.index.nls.html("pleaseEnterASubject"));
xg.index.util.FormHelper.showErrorMessage(_23);
}else{
if(this.messageSubject.length>this.maxMsgLength){
_27.push(xg.index.nls.html("subjectIsTooLong",this.maxMsgLength));
xg.index.util.FormHelper.showErrorMessage(_23);
}
}
this.messageBody=dojo.string.trim(_24.value);
if(this.messageBody.length==0){
_27.push(xg.index.nls.html("pleaseEnterAMessage"));
xg.index.util.FormHelper.showErrorMessage(_24);
}else{
if(this.messageBody.length>this.maxMsgLength){
_27.push(xg.index.nls.html("messageIsTooLong",this.maxMsgLength));
xg.index.util.FormHelper.showErrorMessage(_24);
}
}
if(_27.length==0){
dojo.html.hide(_25);
this._executeProper(_23,_24);
}else{
dojo.html.setClass(_25,"errordesc msg clear");
_25.innerHTML="<dt>"+xg.index.nls.html("thereHasBeenAnError")+"</dt><dd><ol><li>"+_27.join("</li><li>")+"</li></ol></dd>";
dojo.html.show(_25);
}
}));
dojo.event.connect(_22[1],"onclick",dojo.lang.hitch(this,function(evt){
dojo.event.browser.stopEvent(evt);
this.hide();
}));
xg.shared.util.setAdvisableMaxLength(_24,this.maxMsgLength);
this.showDialog();
},_executeProper:function(_2a,_2b){
var _2c=this;
this._spamMessageParts=dojo.json.evalJson(this._spamMessageParts);
this._spamMessageParts[xg.index.nls.text("yourSubject")]=_2a.value;
this._spamMessageParts[xg.index.nls.text("yourMessage")]=_2b.value;
this._spamMessageParts=dojo.json.serialize(this._spamMessageParts);
xg.shared.SpamWarning.checkForSpam({url:this._spamUrl,messageParts:this._spamMessageParts,form:_2c.body,onContinue:function(){
dojo.style.show(_2c.dialog);
_2c.execute();
},onBack:function(){
dojo.style.show(_2c.dialog);
},onWarning:function(){
dojo.style.hide(_2c.dialog);
}});
},getPostContent:function(_2d){
return {subject:this.messageSubject,body:this.messageBody};
}});
}
if(!dojo.hostenv.findModule("xg.chat.Flasher",false)){
dojo.provide("xg.chat.Flasher");
xg.chat.Flasher=function(){
var _1={};
var _={};
var _3=2000;
var _4=null;
var _5=false;
var _6=true;
var _7="";
var _8=window.document.title;
var _9=null;
_.initialize=function(){
x$(window).on("blur",_1.windowBlurred);
x$(window).on("focus",_1.windowFocused);
};
_.flashTitlebar=function(){
if(_6){
window.document.title=_7;
}else{
window.document.title=_8;
}
_6=!_6;
};
_1.startFlashing=function(_a){
if(_5){
return;
}
_7=_a;
if(_4||_9){
return;
}
_9=window.setTimeout(function(){
_9=null;
_4=window.setInterval(_.flashTitlebar,_3);
},_1.getMillisecondsUntilNextStartSecond(new Date().getTime()));
};
_1.getMillisecondsUntilNextStartSecond=function(_b){
var _c=_3*2;
return (_c-(_b%_c))%_c;
};
_1.stopFlashing=function(){
window.document.title=_8;
_6=true;
window.clearTimeout(_9);
_9=null;
window.clearInterval(_4);
_4=null;
};
_1.windowBlurred=function(){
_5=false;
};
_1.windowFocused=function(){
_5=true;
_1.stopFlashing();
};
_.initialize();
return _1;
};
}
if(!dojo.hostenv.findModule("xg.chat.SoundLock",false)){
dojo.provide("xg.chat.SoundLock");
xg.chat.SoundLock=function(){
var _1={};
var _={};
_.CHECK_INTERVAL=2000;
_.COOKIE_NAME="soundLockTimestamp";
_.myTimestamp=null;
_.soundEnabled=false;
_.initialize=function(){
_.check();
setInterval(_.check,_.CHECK_INTERVAL);
};
_.check=function(){
var _3=xg.shared.util.getCookie(_.COOKIE_NAME);
if(_3&&x$.now()-_3<(_.CHECK_INTERVAL*2)&&_.myTimestamp!=_3){
_.soundEnabled=false;
return;
}
_.myTimestamp=x$.now();
xg.shared.util.setCookie(_.COOKIE_NAME,_.myTimestamp);
_.soundEnabled=true;
};
_1.isSoundEnabled=function(){
return _.soundEnabled;
};
_.initialize();
return _1;
};
}
if(!dojo.hostenv.findModule("xg.chat.LocalStorageUpdater",false)){
dojo.provide("xg.chat.LocalStorageUpdater");
xg.chat.LocalStorageUpdater=function(_1){
var _2={};
var _={};
_.COOKIE_NAME="chatWriteTimestamp";
_.lastWriteTimestamp=0;
_2.shouldUpdateFromLocalStorage=function(){
var _4=xg.shared.util.getCookie(_.COOKIE_NAME);
return _4&&_4>_.lastWriteTimestamp;
};
_2.setClientIsUpdated=function(){
_.lastWriteTimestamp=x$.now();
};
_2.propagateChangesToOtherClients=function(){
_1.save();
_2.setClientIsUpdated();
xg.shared.util.setCookie(_.COOKIE_NAME,_.lastWriteTimestamp);
};
return _2;
};
}
if(!dojo.hostenv.findModule("xg.chat.LocalStorage",false)){
dojo.provide("xg.chat.LocalStorage");
xg.chat.LocalStorage=function(_1){
var _2={};
var _={};
_.VERSION=4;
_.data;
_.savePending=false;
_.HEARTBEAT_INTERVAL=2000;
_.updater=xg.chat.LocalStorageUpdater(_2);
_.initialize=function(){
_.load();
if(!_.data||_.data.version!==_.VERSION){
x$.jStorage.flush();
_.data={version:_.VERSION,users:{}};
_.savePending=true;
}
if(!_.data.users[_1]){
_.data.users[_1]={values:{},lastActivityTime:x$.now()};
}
setInterval(function(){
_.checkForUpdatesFromLocalStorage();
_2.save();
},_.HEARTBEAT_INTERVAL);
x$(window).unload(_2.save);
};
_2.set=function(_4,_5,_6,_7){
if(typeof _6==="undefined"){
throw "propagateChangeToOtherClients must be specified";
}
_.checkForUpdatesFromLocalStorage();
if(!_7){
var _8=_2.get(_4);
if(typeof _5!=="object"&&_5===_8){
return;
}
if(typeof _5==="object"&&_5!==_8&&x$.toJSON(_5)===x$.toJSON(_8)){
return;
}
}
var _9={value:_5};
var _a=_7?new Date().getTime()+_7*1000:null;
if(_a){
_9.expiry=_a;
}
_.data.users[_1].values[_4]=_9;
_.data.users[_1].lastActivityTime=x$.now();
_.savePending=true;
if(_6){
_2.save();
_2.getUpdater().propagateChangesToOtherClients();
}
};
_2.get=function(_b,_c){
_.checkForUpdatesFromLocalStorage();
var _d=_.data.users[_1].values[_b];
if(!_d){
return null;
}
if(_d.expiry&&new Date().getTime()>parseInt(_d.expiry)){
return null;
}
if(_c&&typeof _d.value==="object"){
return x$.parseJSON(x$.toJSON(_d.value));
}
return _d.value;
};
_.checkForUpdatesFromLocalStorage=function(){
if(_2.getUpdater().shouldUpdateFromLocalStorage()){
_.load();
}
};
_.load=function(){
var _e=false;
if(_.data){
x$.jStorage.reInit();
_e=true;
}
_.data=x$.jStorage.get("xg.chat.LocalStorage.data");
_2.getUpdater().setClientIsUpdated();
if(_e){
xg.shared.EventRegistry.fire("xg.chat.LocalStorage.updated");
}
};
_2.save=function(){
if(!_.savePending){
return;
}
x$.jStorage.set("xg.chat.LocalStorage.data",_.data);
_.savePending=false;
};
_2.getUpdater=function(){
return _.updater;
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.LanguageFilter",false)){
dojo.provide("xg.shared.LanguageFilter");
xg.shared.LanguageFilter=function(_1){
var _2="done";
var _3={};
var _={};
_3._=_;
var _5=[];
_3.addWord=function(_6){
_.addSequenceToNode(_5,_6.toLowerCase().split(""));
};
_.addSequenceToNode=function(_7,_8){
var _9=_8.shift();
_7[_9]=_7[_9]||[];
if(_8.length==0){
_7[_9][_2]=true;
return;
}
_.addSequenceToNode(_7[_9],_8);
};
_3.filter=function(_a){
var i=0;
while(i<_a.length){
var _c=_.findLongestMatchLength(_a,i);
if(_c>0){
var _d=Array(_c).join("*");
_a=_a.substring(0,i+1)+_d+_a.substring(i+_c,_a.length);
i=i+_c-1;
}
if(_1==true){
i=_.findBoundary(_a,i+1);
}else{
i++;
}
}
return _a;
};
_.findLongestMatchLength=function(_e,_f){
_e=_e.toLowerCase();
var _10=0;
var _11=_5;
var _12=0;
while(_f<_e.length){
_11=_11[_e.charAt(_f)];
_12++;
_f++;
if(_11==null){
break;
}
if(_11[_2]!=true){
continue;
}
if(_1==true&&_.findBoundary(_e,_f)!=_f){
continue;
}
_10=_12;
}
return _10;
};
_.findBoundary=function(_13,_14){
if(_14==0){
return 0;
}
if(_14==_13.length){
return _13.length;
}
var _15=_13.substring(_14-1,_13.length).search(/[\s\S]\b/);
if(_15==-1){
return _13.length;
}
return _14+_15;
};
return _3;
};
}
if(!dojo.hostenv.findModule("xg.chat.Model",false)){
dojo.provide("xg.chat.Model");
xg.chat.Model=function(_1,_2,_3,_4){
var _5={};
var _={};
_5.MAX_HEIGHT=300;
_5.PADDING=20;
_5.NETWORK_CHAT_MAX_MESSAGE_AGE=24*60*60*1000;
_5.LOCAL_STORAGE_NAME_FOR_PRIVATE_ROOMS_FOR_POPOUT_CHAT="popoutPrivateChatRooms_v2";
_5.LOCAL_STORAGE_NAME_FOR_PRIVATE_ROOMS_FOR_FOOTER_AND_MODULE_CHAT="privateChatRooms_v2";
_.PRIVATE_ROOM_LOCAL_STORAGE_MAX_AGE=300;
_5.appId="";
_5.appName="";
_5.user;
_5.userList;
_5.defaultAvatarUrl="";
_5.loginUrl="";
_5.countUrl="";
_5.chatServerDomain="";
_5.token="";
_5.roomId="";
_5.messageListHash=0;
_5.maxDisplayedMessageCountPerRoom;
_5.maxUserCount=500;
_5.languageFilter=null;
_5.isPopoutChat=false;
_5.clientId="";
_5.ignoredMembers={};
_.state=null;
_5.layout=null;
_.connected=_2;
_.mainRoomOpen=_3;
_.userListExpanded=_4;
_5.setState=function(_7){
if(_.state==_7){
return;
}
_.state=_7;
xg.shared.EventRegistry.fire("xg.chat.Model.stateChanged",_7);
};
_5.getState=function(){
return _.state;
};
_5.createLanguageFilter=function(_8,_9){
_5.languageFilter=xg.shared.LanguageFilter(_9);
for(var i=0;i<_8.length;i++){
_5.languageFilter.addWord(_8[i]);
}
};
_5.getCachedOnlineStatus=function(){
return _.connected;
};
_5.setCachedOnlineStatus=function(_b){
if(_.connected==_b){
return;
}
_.connected=_b;
_.updateUserPreferences();
_1.set("chatConnected",_b,true);
};
_5.readOnlineStatusFromLocalStorage=function(){
var _c=_1.get("chatConnected");
if(_c!==null){
_.connected=_c;
}
return _.connected;
};
_5.getChatServerDomain=function(){
return _5.chatServerDomain;
};
_5.setChatServerDomain=function(_d){
_5.chatServerDomain=_d;
};
_5.isMainRoomOpen=function(){
return _.mainRoomOpen;
};
_5.setMainRoomOpen=function(_e){
if(_.mainRoomOpen==_e){
return;
}
_.mainRoomOpen=_e;
_.updateUserPreferences();
};
_5.isUserListExpanded=function(){
return _.userListExpanded;
};
_5.setUserListExpanded=function(_f){
if(_.userListExpanded==_f){
return;
}
_.userListExpanded=_f;
_.updateUserPreferences();
};
_.updateUserPreferences=function(){
_5.layout.updateUserPreferences({connected:_.connected?"1":"0",mainRoomExpanded:_.mainRoomOpen?"1":"0",userListExpanded:_.userListExpanded?"1":"0"});
};
_5.getPrivateRooms=function(){
return _1.get(_5.layout.getLocalStorageNameForPrivateRooms())||[];
};
_5.setPrivateRooms=function(_10){
_1.set(_5.layout.getLocalStorageNameForPrivateRooms(),_10,true,_.PRIVATE_ROOM_LOCAL_STORAGE_MAX_AGE);
};
_5.setPrivateRoomsForPopoutChat=function(_11){
_1.set(_5.LOCAL_STORAGE_NAME_FOR_PRIVATE_ROOMS_FOR_POPOUT_CHAT,_11,true,_.PRIVATE_ROOM_LOCAL_STORAGE_MAX_AGE);
};
_5.getPublicMessageHistory=function(){
return _1.get("publicMessages_v2")||[];
};
_5.setPublicMessageHistory=function(_12){
_1.set("publicMessages_v2",_12,false);
};
_5.getPrivateMessageHistory=function(){
return _1.get("privateMessages_v2")||[];
};
_5.setPrivateMessageHistory=function(_13,_14){
_1.set("privateMessages_v2",_13,_14||false);
};
_5.getMessageListHash=function(){
if(!_5.messageListHash){
_5.messageListHash=_1.get("chatMessageListHash");
}
return _5.messageListHash?_5.messageListHash:0;
};
_5.setMessageListHash=function(_15){
_5.messageListHash=_15;
_1.set("chatMessageListHash",_15,false);
};
_5.isBanned=function(){
return false;
};
_5.setLoginData=function(_16){
_1.set("chatLoginData",_16,true);
};
_5.getLoginData=function(){
return _1.get("chatLoginData",true);
};
_5.isUserIgnored=function(id){
return _5.ignoredMembers[id]===true;
};
_5.setMainRoomHeight=function(_18){
_1.set("mainRoomHeight",_18,false);
};
_5.getMainRoomHeight=function(){
return _1.get("mainRoomHeight",false);
};
_5.setUserListHeight=function(_19){
_1.set("userListHeight",_19,false);
};
_5.getUserListHeight=function(){
return _1.get("userListHeight",false);
};
return _5;
};
}
if(!dojo.hostenv.findModule("xg.chat.LazyImageLoader",false)){
dojo.provide("xg.chat.LazyImageLoader");
xg.chat.LazyImageLoader=function(_1,_2){
var _3={};
var _={};
var _5=50;
var _6;
_.initialize=function(){
_6=xg.shared.util.createQuiescenceTimer(_5,_3.loadImagesInViewport);
};
_3.monitorScrolling=function(){
_1.scroll(function(){
_6.trigger();
});
};
_3.loadImagesInViewport=function(){
var _7=_1.find(_2);
var _8=Math.floor((_1.scrollTop()/_1[0].scrollHeight)*_7.length);
var _9=Math.ceil(((_1.scrollTop()+_1.outerHeight())/_1[0].scrollHeight)*_7.length);
for(var i=_8;i<=_9;i++){
if(_7[i]){
var _b=x$(_7[i]).find(".lazy-load");
if(_b[0]){
_b.replaceWith(_b.html().replace(/<!--(.*)-->/,"$1"));
}
}
}
};
_.initialize();
return _3;
};
}
if(!dojo.hostenv.findModule("xg.chat.models.User",false)){
dojo.provide("xg.chat.models.User");
xg.chat.models.User=function(){
var _1={};
var _={};
_.id;
_.name;
_.avatarUrl;
_.isAdmin;
_1.initialize=function(id,_4,_5,_6){
_.id=id;
_.name=_4;
_.avatarUrl=_5;
_.isAdmin=_6;
return _1;
};
_1.equals=function(_7){
return _7&&_1.getId()===_7.getId()&&_1.getName()===_7.getName()&&_1.getAvatarUrl()===_7.getAvatarUrl()&&_1.isAdmin()===_7.isAdmin();
};
_1.initializeFromServerObject=function(_8){
_.id=_8.ningId;
_.name=_8.name;
_.avatarUrl=_1.fixAvatarUrlSize(_8.iconUrl);
_.isAdmin=_8.isAdmin;
return _1;
};
_1.fixAvatarUrlSize=function(_9){
return _9.replace("width=16&height=16","width=32&height=32");
};
_1.getNormalizedUserObject=function(_a){
if(_a.getId){
return _a;
}
return _1.initializeFromServerObject(_a);
};
_1.getId=function(){
return _.id;
};
_1.getName=function(){
return _.name;
};
_1.getAvatarUrl=function(){
return _.avatarUrl;
};
_1.isAdmin=function(){
return _.isAdmin;
};
_1.getServerObject=function(){
return {ningId:_.id,name:_.name,iconUrl:_.avatarUrl,isAdmin:_.isAdmin};
};
return _1;
};
}
if(!dojo.hostenv.findModule("xg.chat.models.UserList",false)){
dojo.provide("xg.chat.models.UserList");
xg.chat.models.UserList=function(){
var _1={};
var _={};
_.users={};
_.userCount=0;
_.hash=0;
_.populated=false;
_1.addUser=function(_3,_4){
var id=_3.getId();
var _6;
if(_.users[id]){
_6=_1.updateUser(_3);
if(!_6){
return false;
}
}else{
_.users[id]=_3;
}
if(!_4){
xg.shared.EventRegistry.fire("xg.chat.models.UserList.usersUpdated");
}
return true;
};
_1.addUsers=function(_7){
var _8=false;
for(var i=0;i<_7.length;i++){
if(_1.addUser(_7[i],true)){
_8=true;
}
}
if(_8){
xg.shared.EventRegistry.fire("xg.chat.models.UserList.usersUpdated");
}
};
_1.addUsersFromServer=function(_a){
var _b=false;
for(var i=0;i<_a.length;i++){
if(_1.addUser(xg.chat.models.User().initializeFromServerObject(_a[i]),true)){
_b=true;
}
}
_.populated=true;
if(_b){
xg.shared.EventRegistry.fire("xg.chat.models.UserList.usersUpdated");
}
};
_1.removeUser=function(_d){
if(typeof (_d)==="object"){
_d=_d.getId();
}
if(!_.users[_d]){
return;
}
delete _.users[_d];
xg.shared.EventRegistry.fire("xg.chat.models.UserList.usersUpdated");
};
_1.removeUsers=function(_e){
x$(_e).each(function(i,_10){
_1.removeUser(_10);
});
xg.shared.EventRegistry.fire("xg.chat.models.UserList.usersUpdated");
};
_1.clearUsers=function(_11){
if(x$.isEmptyObject(_.users)){
return;
}
_.users={};
if(!_11){
xg.shared.EventRegistry.fire("xg.chat.models.UserList.usersUpdated");
}
};
_1.isUserConnected=function(_12){
if(typeof (_12)==="object"){
_12=_12.getId();
}
return _.users[_12]!=null;
};
_1.getUsers=function(){
return _.users;
};
_1.getUser=function(id){
return _.users[id];
};
_1.setUserCount=function(_14){
if(_.userCount===_14){
return;
}
_.userCount=_14;
xg.shared.EventRegistry.fire("xg.chat.models.UserList.userCountUpdated");
};
_1.getUserCount=function(){
return _.userCount;
};
_1.setHash=function(_15){
_.hash=_15;
};
_1.getHash=function(){
return _.hash;
};
_1.updateUser=function(_16){
var id=_16.getId();
if(_16.equals(_.users[id])){
return false;
}
_.users[id]=_16;
return true;
};
_1.isPopulated=function(){
return _.populated;
};
return _1;
};
}
if(!dojo.hostenv.findModule("xg.chat.AjaxService",false)){
dojo.provide("xg.chat.AjaxService");
xg.chat.AjaxService=function(){
var _1={};
var _={};
_.successMethod=null;
_.failureMethod=null;
_.TOKEN_EXPIRED="token expired";
_1.sendData=function(_3,_4,_5,_6,_7,_8,_9,_a){
_.debug("Calling sendData: "+_3);
_5=_.logExceptions(_5||function(){
});
_6=_.logExceptions(_6||function(){
});
if(!_1.isAvailable()){
_6({result:"service unavailable"});
return;
}
_.successMethod=function(_b){
if(xg.chat.AjaxService.testTokenExpired){
_b.result=_.TOKEN_EXPIRED;
xg.chat.AjaxService.testTokenExpired=false;
}
if(_b.result&&_b.result==_.TOKEN_EXPIRED&&_9){
_.debug("Call failed: "+_b.result+". Retrying. ("+_3+")");
xg.shared.EventRegistry.fire("xg.chat.AjaxService.tokenExpired",{ajaxService:_1,url:_3,parameters:_4,successMethod:_5,failureMethod:_6,internal:_7,timeout:_8});
}else{
if(_b.result&&_b.result!="ok"){
_.debug("Call failed: "+_b.result+". ("+_3+")");
_6(_b);
}else{
_.debug("Call succeeded. ("+_3+")");
_5(_b);
}
}
};
_.failureMethod=function(_c){
_6(_c);
};
_4=_4||{};
if(_7!=true&&x$.browser.msie&&x$.browser.version.match(/^9\b/)){
_a=true;
}
if(_a==true&&xg.chat.FlashPost.isAvailable()){
xg.chat.FlashPost.sendData(_3,_4,function(_d){
_.successCallback(x$.parseJSON(_d.replace(/\n+/g," ")));
},function(_e){
_.failureCallback(_e);
});
return;
}
if(_7==true){
_4.xg_token=xg.token;
x$.ajax({type:"POST",url:_3,data:_4,success:function(_f){
_.successCallback(eval(_f));
},error:function(_10,_11,_12){
_.failureCallback(_12+" : "+_11);
},timeout:_8||0});
return;
}
x$.jsonp({url:_3,type:"POST",callbackParameter:"c",data:_4,success:function(_13){
_.successCallback(_13);
},error:function(_14,_15){
_.failureCallback(_15);
},timeout:_8||0});
};
_.logExceptions=function(f){
return function(_17){
try{
f(_17);
}
catch(e){
xg.shared.util.consoleLog("Exception in AjaxService "+"callback: "+e);
throw e;
}
};
};
_.debug=function(_18){
if(xg.chat.AjaxService.debugging){
xg.shared.util.consoleLog(_18);
}
};
_.successCallback=function(_19){
var _1a=_19?_.successMethod:_.failureMethod;
_.resetService();
if(_1a!=null){
_1a(_19);
}
};
_.failureCallback=function(_1b){
xg.shared.util.consoleLog(_1b);
var _1c=_.failureMethod;
_.resetService();
if(_1c!=null){
_1c({result:"error"});
}
};
_1.isAvailable=function(){
return _.successMethod==null&&_.failureMethod==null;
};
_.resetService=function(){
_.successMethod=_.failureMethod=null;
};
_1.destroy=function(){
_.resetService();
};
return _1;
};
}
if(!dojo.hostenv.findModule("xg.chat.LoginService",false)){
dojo.provide("xg.chat.LoginService");
xg.chat.LoginService=function(_1){
var _2={};
var _={};
var _4=14400;
var _5=15;
_2.SESSION_REFRESH_TIME_IN_ADVANCE=300;
var _6=xg.chat.AjaxService();
var _7=xg.chat.AjaxService();
var _8;
var _9=null;
_.initialize=function(){
_.handleTokenExpiredErrors();
};
_2.getLastSuccessfulLoginTime=function(){
return _9;
};
_.handleTokenExpiredErrors=function(){
xg.shared.EventRegistry.listen("xg.chat.AjaxService.tokenExpired",function(_a){
_.refreshSession(function(_b){
_a.ajaxService.sendData(_a.url,_a.parameters,_a.successMethod,_a.failureMethod,_a.internal,_a.timeout,false);
},_a.failureMethod);
});
};
_.resolveHostForApp=function(_c,_d){
_6.sendData("/chat/index/getServer",null,_c,_d,true,_5*1000,false);
};
_.makeLoginCall=function(_e,_f){
var _10=function(_11){
_9=x$.now();
if(_e){
_e(_11);
}
};
_7.sendData("/chat/index/login",null,_10,_f,true,_5*1000,false);
};
_2.disconnect=function(){
_7.destroy();
_7=xg.chat.AjaxService();
_6.destroy();
_6=xg.chat.AjaxService();
_.clearRefreshTimer();
};
_.retrieveChatServerDomain=function(_12,_13){
if(_13!=true&&_1.getChatServerDomain()){
_12();
return;
}
_.resolveHostForApp(function(_14){
_1.setChatServerDomain(_14.domain);
_12();
});
};
_2.logIntoChat=function(_15,_16){
_.retrieveChatServerDomain(function(){
_.makeLoginCall(function(_17){
_1.token=_17.token;
if(_15){
_15(_17);
}
},_16);
});
};
_2.createRefreshTimer=function(_18){
if(!_18){
_18=_4;
}
_.clearRefreshTimer();
_8=setTimeout(_.refreshSession,(_18-_2.SESSION_REFRESH_TIME_IN_ADVANCE)*1000);
};
_.clearRefreshTimer=function(){
if(_8){
clearTimeout(_8);
_8=null;
}
};
_.refreshSession=function(_19,_1a){
_.clearRefreshTimer();
_.makeLoginCall(function(_1b){
_1.token=_1b.token;
_2.createRefreshTimer(_1b.sessionTTL);
if(_19){
_19(_1b);
}
},_1a);
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.chat.PresenceService",false)){
dojo.provide("xg.chat.PresenceService");
xg.chat.PresenceService=function(_1,_2,_3,_4,_5){
var _6=30;
var _7=15;
var _8=50;
var _9={};
var _={};
var _b=xg.chat.AjaxService();
var _c=xg.chat.AjaxService();
var _d=xg.chat.AjaxService();
var _e=xg.chat.AjaxService();
var _f;
_9.isUserConsideredAlive=function(){
return x$.now()-_5.get("lastSuccessfulPresenceListTime")<=_8*1000;
};
_.didUserLogInRecently=function(){
return x$.now()-_3.getLastSuccessfulLoginTime()<=_8*1000;
};
_.list=function(){
if(_.didUserLogInRecently()||_9.isUserConsideredAlive()){
_.listProper();
}else{
_3.logIntoChat(_.listProper);
}
};
_.listProper=function(){
if(_4.isBanned()){
return;
}
var _10={a:_4.appId,i:_4.user.getId(),r:_4.roomId,t:_4.token,h:_4.userList.getHash()};
_b.sendData("http://"+_4.getChatServerDomain()+"/xn/presence/list",_10,_.processServerResponse,_.processServerError,false,_7*1000,true);
};
_.count=function(){
_d.sendData("/chat/index/userCount",null,_.processServerResponse,_.processServerError,true,_7*1000,true);
};
_9.ban=function(_11,_12,_13,_14){
var _15={r:_4.roomId,t:_4.token,ti:_11,bts:_12};
_b.sendData("/chat/index/ban",_15,_13,_14,true,_7*1000,true);
};
_9.ignore=function(_16,_17){
_e.sendData("/chat/index/ignore",{id:_16},null,_17,true);
};
_9.stopIgnoring=function(_18){
_e.sendData("/chat/index/stopIgnoring",{id:_18},null,null,true);
};
_9.disconnect=function(){
_b.destroy();
_b=xg.chat.AjaxService();
_c.destroy();
_c=xg.chat.AjaxService();
_d.destroy();
_d=xg.chat.AjaxService();
_.stopUpdatingPresence();
};
_9.startUpdatingPresence=function(){
_.stopUpdatingPresence();
if(_4.getState().areOpenChatPanesAllowed()){
_.updatePresence();
}
_f=setInterval(_.updatePresence,_6*1000);
};
_.updatePresence=function(){
_4.getState().areOpenChatPanesAllowed()?_.list():_.count();
};
_.processServerResponse=function(_19){
if(_19.count){
_4.userList.setUserCount(_19.count);
}
if(_19.hash){
_4.userList.setHash(_19.hash);
}
if(_19.users){
_4.userList.clearUsers(true);
_.initializeNameUniquifierIfNeeded(_19.users);
_4.userList.addUsersFromServer(_19.users);
}
if(_19.expired){
_4.userList.removeUsers(_19.expired);
}
if(_19.command==="list"&&_19.result==="ok"){
_5.set("lastSuccessfulPresenceListTime",x$.now(),false);
}
};
window.insertTestUsers=function(n){
var _1b={users:[]};
for(i=0;i<100;i++){
_1b.users.push({ningId:""+i,name:"User"+i,iconUrl:"http://yubnub.org/images/maxthon.png"});
}
_.processServerResponse(_1b);
};
_.processServerError=function(_1c){
};
_.initializeNameUniquifierIfNeeded=function(_1d){
if(_2.isInitialized()){
return;
}
var _1e={};
for(var i=0;i<_1d.length;i++){
_1e[_1d[i].ningId]=_1d[i].name;
}
_2.initialize(_1e);
};
_.stopUpdatingPresence=function(){
if(_f){
clearInterval(_f);
_f=null;
}
};
return _9;
};
}
if(!dojo.hostenv.findModule("xg.chat.MessageService",false)){
dojo.provide("xg.chat.MessageService");
xg.chat.MessageService=function(_1,_2){
var _3={};
var _={};
_3.MESSAGE_TYPE_INVITE_PRIVATE_ROOM="invite";
_3.MESSAGE_TYPE_INVITE_ACCEPTED="accepted";
_3.MESSAGE_TYPE_INVITE_ACCEPTED_LOOP="acceptedLoop";
_3.MESSAGE_TYPE_INVITE_DECLINED="declined";
_3.MESSAGE_TYPE_INVITE_DECLINED_LOOP="declinedLoop";
_3.MESSAGE_TYPE_LEAVE_PRIVATE_ROOM="leave";
_3.MESSAGE_TYPE_PRIVATE_MESSAGE="private";
_3.MESSAGE_TYPE_LOCAL="local";
_3.MESSAGE_TYPE_PUBLIC_MESSAGE="message";
_3.MESSAGE_TYPE_DELETE_MESSAGE="delete";
_3.MESSAGE_TYPE_CLEAR_MESSAGE="clear";
_.POLLING_CHECK_INTERVAL=20;
_.POLLING_TIMEOUT=150;
_.REQUEST_TIMEOUT=15;
_.DELAY_AFTER_FAILED_POLL=5;
_.DELAY_BEFORE_POLLING=3;
var _5=xg.chat.AjaxService();
var _6=xg.chat.AjaxService();
var _7=xg.chat.AjaxService();
var _8=xg.chat.AjaxService();
var _9=xg.chat.AjaxService();
var _a=true;
var _b=[];
var _c=null;
var _d=false;
_.initialize=function(){
_.keepPollingAlive();
};
_.list=function(_e,_f){
if(_2.isBanned()){
return;
}
var _10={a:_2.appId,r:_2.roomId,t:_2.token,i:_2.user.getId(),h:_2.getMessageListHash()};
_5.sendData("http://"+_2.getChatServerDomain()+"/xn/groupchat/list",_10,_e,_.addBanCheck(_f),false,_.REQUEST_TIMEOUT*1000,true);
};
_.poll=function(){
if(!_6.isAvailable()){
return;
}
var _11={a:_2.appId,r:_2.roomId,t:_2.token,cid:_2.clientId,i:_2.user.getId()};
_c=x$.now();
var _12=!_d;
_6.sendData("http://"+_2.getChatServerDomain()+"/xn/groupchat/poll",_11,_.onPollSucess,_.addBanCheck(_.onPollError),false,0,true,_12);
setTimeout(_.sendQueuedMessages,500);
_d=true;
};
_.keepPollingAlive=function(){
setInterval(function(){
if(!_a){
return;
}
if(!_c){
return;
}
if(_c<x$.now()-_.POLLING_TIMEOUT*1000){
_6.destroy();
_6=xg.chat.AjaxService();
_.onReceiveMessages({},false);
}
},_.POLLING_CHECK_INTERVAL*1000);
};
_.addBanCheck=function(_13){
return function(_14){
if("banned"==_14.result){
xg.shared.EventRegistry.fire("xg.chat.suspensionDetected",_14.remainingBanTime);
}
if(_13){
_13(_14);
}
};
};
_3.publish=function(_15,_16,_17,_18,_19){
if(_2.isBanned()||!_a){
return;
}
if(!_.canPublish()){
var _1a={messageType:_15,messageBody:_16,targetId:_17,successCallback:_18,errorCallback:_19};
_b.push(_1a);
_.poll();
return;
}
var _1b={sender:_2.user.getServerObject(),type:_15,body:_16,roomId:_2.roomId,targetId:_17};
var _1c={a:_2.appId,r:_2.roomId,t:_2.token,i:_2.user.getId(),message:x$.toJSON(_1b)};
_7.sendData("http://"+_2.getChatServerDomain()+"/xn/groupchat/publish",_1c,function(_1d){
_.sendQueuedMessages();
if(_18){
_18(_1d);
}
},_.addBanCheck(function(){
_.sendQueuedMessages();
if(_19){
_19();
}
}),false,_.REQUEST_TIMEOUT*1000,true);
};
_.sendQueuedMessages=function(){
if(!_.canPublish()){
return;
}
if(_b.length==0){
return;
}
var _1e=_b.shift();
_3.publish(_1e.messageType,_1e.messageBody,_1e.targetId,_1e.successCallback,_1e.errorCallback);
};
_.canPublish=function(){
return _a&&!_6.isAvailable()&&_7.isAvailable();
};
_3.deleteMessage=function(_1f,_20,_21,_22){
var _23={sender:_2.user.getServerObject(),type:"",body:"",roomId:_2.roomId};
var _24={r:_2.roomId,t:_2.token,ti:_1f,tt:_20,message:x$.toJSON(_23)};
_8.sendData("/chat/index/deleteMessage",_24,_21,_22,true,_.REQUEST_TIMEOUT*1000,true);
};
_3.clearMessages=function(_25,_26){
var _27={sender:_2.user.getServerObject(),type:"",body:"",roomId:_2.roomId};
var _28={r:_2.roomId,t:_2.token,message:x$.toJSON(_27)};
_9.sendData("/chat/index/clearRoom",_28,_25,_26,true,_.REQUEST_TIMEOUT*1000,true);
};
_3.disconnect=function(){
_a=false;
_5.destroy();
_5=xg.chat.AjaxService();
_6.destroy();
_6=xg.chat.AjaxService();
_7.destroy();
_7=xg.chat.AjaxService();
_8.destroy();
_8=xg.chat.AjaxService();
_9.destroy();
_9=xg.chat.AjaxService();
};
_3.startPolling=function(_29){
var _2a=_29?_.DELAY_BEFORE_POLLING*1000:0;
_a=true;
_.list(function(_2b){
_.onReceiveMessages(_2b,true,_2a);
},function(_2c){
_.onReceiveMessages({},true,_2a);
});
};
_.onReceiveMessages=function(_2d,_2e,_2f){
if(!_a){
return;
}
if(_2d.hash){
_2.setMessageListHash(_2d.hash);
}
if(_2d.lastClearedOn>0){
_1.removeOldMessagesFromHistory(_2d.lastClearedOn);
}
_.processMessages(_2d.messages,_2e);
if(_2f>0){
setTimeout(_.poll,_2f);
}else{
_.poll();
}
};
_.onPollSucess=function(_30){
_.onReceiveMessages(_30,false,0);
};
_.onPollError=function(_31){
_.onReceiveMessages({},false,_.DELAY_AFTER_FAILED_POLL*1000);
};
_.processMessages=function(_32,_33){
if(_32==null||_32.length==0){
return;
}
var _34=[];
var _35=[];
for(var i=0;i<_32.length;i++){
var _37=(_32[i].type==_3.MESSAGE_TYPE_PRIVATE_MESSAGE)?_32[i].sender.ningId:null;
if(_32[i].type==_3.MESSAGE_TYPE_DELETE_MESSAGE){
var _38=_32[i].body.split(":");
_1.deleteMessage(_38[0],_38[1]);
continue;
}
if(_32[i].type==_3.MESSAGE_TYPE_CLEAR_MESSAGE){
_1.clearPublicMessageHistory();
continue;
}
var _39=xg.chat.models.User().initializeFromServerObject(_32[i].sender);
_34.push(_39);
_35.push({sender:_39,message:_32[i].body,timestamp:_32[i].date,targetRoomId:_37});
}
_1.addMessages(_35,false,_33);
if(!_33){
_2.userList.addUsers(_34);
}
};
_.initialize();
return _3;
};
}
if(!dojo.hostenv.findModule("xg.chat.UserListSorter",false)){
dojo.provide("xg.chat.UserListSorter");
xg.chat.UserListSorter=function(){
var _1={};
var _={};
_.initialize=function(){
};
_1.insert=function(_3,_4,_5){
var _6=false;
_4.children().each(function(i,li){
var _9=x$(li);
if(_3[0]===li){
return true;
}
if(_5(_3,_9)<=0){
_9.before(_3);
_6=true;
return false;
}
});
if(!_6){
_4.append(_3);
}
};
_1.compareAlphabetically=function($a,$b){
var a=$a.find("._username").text().toLowerCase();
var b=$b.find("._username").text().toLowerCase();
return a<b?-1:(a>b?1:0);
};
_.initialize();
return _1;
};
}
if(!dojo.hostenv.findModule("xg.chat.ChatPaneResizer",false)){
dojo.provide("xg.chat.ChatPaneResizer");
xg.chat.ChatPaneResizer=function(_1,_2,_3){
var _4={};
var _={};
_.selectedHeight=null;
_4.initialize=function(_6){
_.selectedHeight=_6;
_1.click(function(_7){
_7.preventDefault();
_7.stopPropagation();
});
_1.mousedown(_.startDragAndResize);
return _4;
};
_.startDragAndResize=function(_8){
_8.preventDefault();
x$("body").append(x$("<div class=\"dragCover\"></div>"));
x$(document).bind("mousemove",_.dragAndResize);
x$(document).mouseup(function(_9){
x$(document).unbind("mousemove",_.dragAndResize);
x$(".dragCover").remove();
_3();
});
};
_.dragAndResize=function(_a){
_.selectedHeight=x$(window).height()-(_a.pageY-x$(document).scrollTop());
_2();
};
_4.getSelectedHeight=function(){
return _.selectedHeight;
};
return _4;
};
}
if(!dojo.hostenv.findModule("xg.chat.UserListView",false)){
dojo.provide("xg.chat.UserListView");
xg.chat.UserListView=function(_1,_2,_3,_4,_5,_6){
var _7={};
var _={};
var _9;
var _a;
var _b;
var _c;
var _d;
var _e=false;
var _f=0;
var _10="<span class=\"lazy-load\"><!--";
var _11="--></span>";
var _12="<li><a href=\"#\" class=\"privateMessageLink\">"+_10+"<img class=\"_avatar\" src=\"{image}\" onerror=\"{onerror}\">"+_11+"<span class=\"_username\">{name}</span></a><span class=\"xg_close delete\" href=\"#\" title=\""+xg.index.nls.html("close")+"\"></span></li>";
var _13="<span class=\"conversation-marker xg_sprite xg_sprite-comment\" style=\"display:none\"></span>";
var _14="<a href=\"#\" class=\"arrow\">&#9660;</a>";
var _15="<div class=\"userOptions\"></div>";
var _16="<a href=\"#\" class= \"{jsClass}\">{label}</a>";
var _17=xg.chat.UserListSorter();
var _18;
_7.initialize=function(_19){
_18=xg.chat.ChatPaneResizer(x$(".resizeHandle",_1),_.onResize,_.saveSize).initialize(_19);
_9=x$(".xg_chatWindow",_1);
_a=x$(".xg_status",_1);
_b=x$(".chatUsers",_1);
_d=xg.chat.LazyImageLoader(_b,"li");
_d.monitorScrolling();
_6.layout.initializeUserListView(_1,_.hideUserDropDown);
x$(".xg_titleBar, .xg_expand, .xg_chatWindow .xg_info",_1).click(function(_1a){
_1a.preventDefault();
_1a.stopPropagation();
_7.toggleExpanded();
});
x$(".xg_bottomBar .xg_info",_1).click(function(_1b){
_1b.preventDefault();
_1b.stopPropagation();
_6.getState().onClickUserListBar(_7);
});
x$(document).click(function(_1c){
_.hideUserDropDown();
_.hideChatOptionBox();
});
_1.click(function(_1d){
_1d.stopPropagation();
_.hideChatOptionBox();
_.hideUserDropDown();
});
_a.click(function(_1e){
_1e.preventDefault();
_1e.stopPropagation();
_.hideUserDropDown();
_7.toggleChatOptionBox();
});
_c={};
xg.shared.EventRegistry.listen("xg.chat.Model.stateChanged",_.stateChanged);
xg.shared.EventRegistry.listen("xg.chat.models.UserList.usersUpdated",_.updateDisplay);
xg.shared.EventRegistry.listen("xg.chat.Controller.privateRoomAdded",_.updateConversationMarkers);
xg.shared.EventRegistry.listen("xg.chat.Controller.privateRoomRemoved",_.updateConversationMarkers);
xg.shared.EventRegistry.listen("xg.chat.models.UserList.userCountUpdated",_.updateUserListBarText);
xg.shared.EventRegistry.listen("xg.chat.ignoresUpdated",_.handleIgnoredUsersUpdate);
return _7;
};
_.onResize=function(){
_.updateSizes();
_d.loadImagesInViewport();
};
_.saveSize=function(){
_6.setUserListHeight(_18.getSelectedHeight());
};
_.handleIgnoredUsersUpdate=function(_1f){
var _20=(_1f&&_1f.id)?_1f.id:null;
_b.children("li").each(function(){
var $li=x$(this);
var id=$li.data("xj_screen_name");
if(_20&&id!==_20){
return true;
}
_17.insert($li,_b,_.compareAlphabeticallyPuttingIgnoredUsersLast);
_.updateIgnoredState($li,$li.find(".userOptions"),id);
return _20===null;
});
};
_.updateDisplay=function(){
var id;
var _24=_6.userList.getUsers();
var _25=0;
for(id in _24){
_.addUser(_24[id]);
_25++;
}
if(_25===0){
_b.html("");
_c={};
return;
}
for(id in _c){
if(_c.hasOwnProperty(id)&&!_24[id]){
_.removeUser(id);
}
}
_d.loadImagesInViewport();
_.updateConversationMarkers();
_.updateUserInformation();
_f=_25;
_6.userList.setUserCount(_25);
};
_.stateChanged=function(_26){
_a.toggleClass("xg_status-offline",!_26.isOnline());
_.updateUserListBarText();
_.hideUserDropDown();
_.hideChatOptionBox();
};
_.updateUserListBarText=function(){
x$(".chatTitle",_1).text(_6.getState().getUserListBarText());
};
_.updateSizes=function(){
_6.layout.updateUserListViewSizes(_b,_1,_9,_18.getSelectedHeight());
};
_7.toggleExpanded=function(){
if(_7.isExpanded()){
_7.contract(true);
}else{
_7.expand();
}
_.hideUserDropDown();
_.hideChatOptionBox();
};
_.hideUserDropDown=function(){
_b.children().removeClass("showingUserOptions");
};
_7.expand=function(){
_6.setUserListExpanded(true);
if(!_6.getState().isOnline()){
_3.toggleOnlineStatus();
return;
}
_9.show();
x$(".xg_bottomBar .xg_info.chatTitle").addClass("hidden");
_.updateSizes();
_d.loadImagesInViewport();
};
_7.contract=function(_27){
if(_27){
_6.setUserListExpanded(false);
}
_9.hide();
x$(".xg_bottomBar .xg_info.chatTitle").removeClass("hidden");
_.updateSizes();
};
_7.isExpanded=function(){
return _9.filter(":visible").length>0;
};
_.createListItem=function(_28,_29){
var id=_28.getId();
var _2b=_28.getName();
var url=_28.getAvatarUrl();
_2b=_4.ensureUnique(_2b,id,false);
var _2d=xg.renderHtml(_12,{image:xg.qh(url),name:xg.qh(_2b),onerror:xg.qh("this.onerror=null;this.src='"+_6.defaultAvatarUrl+"';")});
if(!_29){
_2d=_2d.replace(new RegExp(_10+"(.*)"+_11),"$1");
}
var _2e=x$(_2d);
_2e.data("xj_screen_name",id);
var _2f=function(_30){
_30.preventDefault();
_30.stopPropagation();
_.hideUserDropDown();
_3.addPrivateRoom(_28,true,true);
};
x$(".privateMessageLink",_2e).click(_2f);
_2e.click(_2f);
return _2e;
};
_.addUser=function(_31){
var id=_31.getId();
if(null!=_c[id]){
return false;
}
var _33=_.createListItem(_31,true);
if(id!=_6.user.getId()){
var _34=x$(_15);
_34.append(xg.renderHtml(_16,{jsClass:"viewProfileLink",label:xg.chat.nls.html("viewProfile")}));
_34.append(xg.renderHtml(_16,{jsClass:"privateMessageLink",label:xg.chat.nls.html("startChat")}));
if(_6.user.isAdmin()&&!_31.isAdmin()){
_34.append(xg.renderHtml(_16,{jsClass:"suspendLink",label:xg.chat.nls.html("suspendFromChatTitleCase")}));
}
if(!_31.isAdmin()){
_34.append(xg.renderHtml(_16,{jsClass:"ignoreLink",label:xg.chat.nls.html("ignore")}));
_34.append(xg.renderHtml(_16,{jsClass:"stopIgnoringLink",label:xg.chat.nls.html("stopIgnoring")}));
_.updateIgnoredState(_33,_34,id);
}
_33.append(_34);
_33.append(_14);
_33.append(_13);
x$(".viewProfileLink",_34).click(function(_35){
_35.preventDefault();
_35.stopPropagation();
_.hideUserDropDown();
_3.navigateToProfile(id);
});
x$(".suspendLink",_34).click(function(_36){
_36.preventDefault();
_36.stopPropagation();
_.hideUserDropDown();
_3.showBanDialog(id);
});
x$(".ignoreLink",_34).click(function(_37){
_37.preventDefault();
_37.stopPropagation();
_.hideUserDropDown();
_3.ignoreUser(id);
});
x$(".stopIgnoringLink",_34).click(function(_38){
_38.preventDefault();
_38.stopPropagation();
_.hideUserDropDown();
_3.stopIgnoringUser(id);
});
x$(".arrow",_33).click(function(_39){
_39.preventDefault();
_39.stopPropagation();
if(_34.is(":hidden")){
_.hideUserDropDown();
_33.addClass("showingUserOptions");
x$(".privateMessageLink",_34).text(_3.privateRooms[id]?xg.chat.nls.text("viewChat"):xg.chat.nls.text("startChat"));
_.adjustUserOptionsPosition(_34);
}else{
_33.removeClass("showingUserOptions");
}
});
}
_17.insert(_33,_b,_.compareAlphabeticallyPuttingIgnoredUsersLast);
_c[id]=_33;
_.updateSizes();
_f++;
return true;
};
_.adjustUserOptionsPosition=function(_3a){
var _3b=18;
_3a.css("top",_3b+"px");
_3a.removeClass("raised");
var _3c=x$(".xg_bottomBar",_1).offset().top;
var _3d=_3a.offset().top+_3a.height();
if(_3d>_3c){
var _3e=5;
_3a.css("top",_3b-(_3d-_3c+_3e)+"px");
_3a.addClass("raised");
}
};
_.compareAlphabeticallyPuttingIgnoredUsersLast=function($a,$b){
var _41=_6.isUserIgnored($a.data("xj_screen_name"));
var _42=_6.isUserIgnored($b.data("xj_screen_name"));
if(!_41&&_42){
return -1;
}
if(_41&&!_42){
return 1;
}
return _17.compareAlphabetically($a,$b);
};
_.updateIgnoredState=function($li,_44,id){
var _46=_6.isUserIgnored(id);
x$(".ignoreLink",_44).css("display",_46?"none":"block");
x$(".stopIgnoringLink",_44).css("display",_46?"block":"none");
$li.find(".privateMessageLink").toggleClass("disabled",_46);
};
_.removeUser=function(id){
if(!_c[id]){
return;
}
_b.find("li").each(function(){
var $li=x$(this);
if($li.data("xj_screen_name")===id){
$li.remove();
}
});
_6.userList.setUserCount(_b.children().length);
delete _c[id];
_.updateSizes();
_f--;
};
_.showChatOptionBox=function(){
var div=_6.getState().getChatOptionBoxDiv(_.hideChatOptionBox);
if(!div){
return;
}
_2.children().hide();
x$(div).show();
_2.append(div);
_2.show();
_e=true;
};
_.hideChatOptionBox=function(){
_2.hide();
_e=false;
};
_7.toggleChatOptionBox=function(){
if(_e){
_.hideChatOptionBox();
}else{
_.showChatOptionBox();
}
};
_.updateConversationMarkers=function(){
_6.layout.updateConversationMarkers(_b,_1,_.createListItem);
};
_.updateUserInformation=function(){
var _4a=_6.userList.getUsers();
_b.find("li").each(function(){
var $li=x$(this);
var _4c=$li.data("xj_screen_name");
var _4d=$li.find("._avatar")[0];
var _4e=$li.find("._username");
var _4f=_4a[_4c];
if(!_4f){
return;
}
if(_4d&&_4f.getAvatarUrl()!==_4d.src){
_4d.src=_4f.getAvatarUrl();
}
var _50=_4.ensureUnique(_4f.getName(),_4c,false);
if(_4e.length&&_50!==_4e.text()){
_4e.html(xg.qh(_50));
}
});
};
return _7;
};
}
if(!dojo.hostenv.findModule("xg.chat.Emoticons",false)){
dojo.provide("xg.chat.Emoticons");
xg.chat.Emoticons=function(_1){
var _2={};
var _={};
var _4=[[":-D",":-)",":-O",":-*"],[":-P",":-(",";-)",":-X"],["8-)",":-!","8-(",":'("]];
_2.EMOTICON_TO_CSS_CLASS_NAME_MAP={":-D":"biggrin",":D":"biggrin",":-)":"smile",":)":"smile",":-O":"surprise",":-o":"surprise",":O":"surprise",":o":"surprise",":-*":"biglips",":-P":"tongue",":-p":"tongue",":P":"tongue",":p":"tongue",":-(":"frown",":(":"frown",";-)":"wink",";)":"wink",":-X":"sick",":-x":"sick",":X":"sick",":x":"sick","8-)":"coolsmile","8)":"coolsmile",":-!":"ohmy","8-(":"sadeyes","8(":"sadeyes",":'(":"cry"};
_2.initialize=function(){
x$(".emoticon-button",_1).click(_2.handleEmoticonButtonClick);
return _2;
};
_2.handleEmoticonButtonClick=function(e){
e.preventDefault();
var _6=x$(".emoticon-panel",_1);
if("block"==_6.css("display")){
_2.hideEmoticons(_6);
}else{
_2.showEmoticons(_6);
}
};
_2.showEmoticons=function(_7){
_7.show();
_7.bind("click",_2.insertEmoticon);
};
_2.hideEmoticons=function(_8){
_8.hide();
_8.unbind("click",_2.insertEmoticon);
};
_2.insertEmoticon=function(e){
if("undefined"===typeof e.offsetX){
e.offsetX=e.originalEvent.layerX;
e.offsetY=e.originalEvent.layerY;
}
var x=_.getColumnFromOffset(e.offsetX);
var y=_.getRowFromOffset(e.offsetY);
if(null===x||null===y){
return;
}
var _c=_.getEmoticonForPosition(x,y);
var _d=x$(".xg_chatInput",_1);
_d.val(_d.val()+_c);
_2.hideEmoticons(x$(e.target));
_2.focusAtEnd(_d);
};
_2.focusAtEnd=function(_e){
_e.focus();
if(_e[0].setSelectionRange){
var _f=_e.val().length;
_e[0].setSelectionRange(_f,_f);
}else{
_e.val(_e.val());
}
_e[0].scrollTop=999999;
};
_.getEmoticonForPosition=function(x,y){
return _4[y][x];
};
_.getColumnFromOffset=function(x){
if(8<=x&&26>=x){
return 0;
}
if(38<=x&&56>=x){
return 1;
}
if(70<=x&&88>=x){
return 2;
}
if(100<=x&&118>=x){
return 3;
}
return null;
};
_.getRowFromOffset=function(y){
if(2<=y&&20>=y){
return 0;
}
if(32<=y&&46>=y){
return 1;
}
if(58<=y&&75>=y){
return 2;
}
return null;
};
return _2;
};
}
if(!dojo.hostenv.findModule("xg.chat.UnreadMessageCounter",false)){
dojo.provide("xg.chat.UnreadMessageCounter");
xg.chat.UnreadMessageCounter=function(_1,_2,_3){
var _4={};
var _={};
_.initialize=function(){
_1=_1||"";
};
_4.addUnreadMessage=function(_6){
if(_6<_2-24*60*60*1000){
return;
}
_.set("unreadMessageCount",_4.getCount()+1);
if(_6>_.getLastUnreadMessageTime()){
_.set("lastUnreadMessageTime",_6);
}
};
_4.getCount=function(){
var _7=_.get("unreadMessageCount")||0;
if(_.getLastUnreadMessageTime()<_2-24*60*60*1000){
return 0;
}
return _7;
};
_4.clear=function(){
_.set("unreadMessageCount",0);
};
_.getLastUnreadMessageTime=function(){
return _.get("lastUnreadMessageTime")||0;
};
_.set=function(_8,_9){
_3.set(_8+"-"+_1,_9,false);
};
_.get=function(_a){
return _3.get(_a+"-"+_1);
};
_.initialize();
return _4;
};
}
if(!dojo.hostenv.findModule("xg.chat.Room",false)){
dojo.provide("xg.chat.Room");
xg.chat.Room=function(_1,_2,_3,_4,_5,_6,_7,_8,_9){
var _a={};
var _={};
var _c;
var _d;
var _e=x$();
var _f=x$();
var _10;
var _11;
var _12;
var _13;
var _14;
var _15=[];
var _16;
var _17=new Date().getTime();
var _18=60*1000;
var _19=500;
var _1a="<li class=\"_timestamp\">{date}</li>";
var _1b=100;
var _1c=200;
var _1d=120;
var _1e;
var _1f;
var _20=0;
var _21="";
var _22;
var _23=false;
var _24=false;
var _25=false;
_a.initialize=function(_26){
_16=xg.chat.ChatPaneResizer(x$(".resizeHandle",_1),_a.updateSizes,_.saveSize).initialize(_26);
_5.layout.initializeRoomEarly(_a);
_1f=xg.chat.UnreadMessageCounter(_2?_2.getId():null,_6,_7);
_c=x$(".xg_chatWindow",_1);
if(_c.length==0){
_c=_1;
}
_d=x$("ul",_1);
_10=x$(".xg_chatInput",_1);
_11=x$(".textarea-container",_1);
_12=parseInt(_10.attr("maxlength"),10);
_13=xg.chat.Emoticons(_c).initialize();
xg.shared.util.setMaxLength(_10[0],_12);
_14=_.doesBrowserSupportInlineBlock();
_.setTitle(_2?_4.ensureUnique(_2.getName(),_2.getId(),true):xg.chat.nls.text("mainRoom"));
_10.keypress(function(_27){
if(_27.which==13){
_27.preventDefault();
_.sendMessage();
}
});
_10.autoResize({animate:false,maxHeight:100000,extraSpace:0,onAfterResize:_a.updateSizes});
var _28=0;
_10.bind("keyup change input paste resize blur",function(){
_17=new Date().getTime();
if(_28!=_10.outerHeight(true)){
_a.updateSizes();
_28=_10.outerHeight(true);
}
});
x$(window).resize(_a.updateSizes);
if(_a.isPrivate()){
xg.shared.EventRegistry.listen("xg.chat.models.UserList.usersUpdated",_.checkIfUserDisconnected);
xg.shared.EventRegistry.listen("xg.chat.ignoresUpdated",_.checkIfUserDisconnected);
}
xg.shared.EventRegistry.listen("xg.chat.models.UserList.usersUpdated",_.checkUserInfo);
x$(document).click(function(_29){
x$(".deleteOptions",_d).removeClass("active");
});
if(_4.isInitialized()){
_.ensureNamesUnique();
}else{
xg.shared.EventRegistry.listen("xg.chat.NameUniquifier.initialized",_.ensureNamesUnique);
}
return _a;
};
_.saveSize=function(){
if(_2){
_3.saveRoomStates();
}else{
_5.setMainRoomHeight(_a.getSelectedHeight());
}
};
_.setTitle=function(_2a){
_21=_2a;
x$(".xg_info",_1).text(_21);
_a.updateLabel();
};
_.ensureNamesUnique=function(){
if(_a.isPrivate()){
_.setTitle(_4.ensureUnique(_2.getName(),_2.getId(),true));
}
_d.find("li.message").each(function(i,_2c){
$messageLi=x$(_2c);
if($messageLi.data("senderId")==_5.user.getId()){
return;
}
$messageLi.find("._sender").text(_4.ensureUnique($messageLi.find("._sender").text(),$messageLi.data("senderId"),true));
});
};
_a.isPrivate=function(){
return _2!==null;
};
_.repositionWarnings=function(){
if(_c.hasClass("roomDisabled")){
var _2d=x$(".warning",_c);
_d.append(_2d);
_e=_2d;
}
};
_.checkIfUserDisconnected=function(){
if(!_5.userList.isPopulated()){
return;
}
if(!_a.isOpen()){
return;
}
var _2e=x$(".userDisconnectedWarning",_c);
var _2f=_a.isConnected();
if(_2e.length==0&&!_2f){
x$(".userIgnoredWarning",_c).remove();
_c.addClass("roomDisabled");
_2e=x$("<li class=\"warning userDisconnectedWarning\"></li>");
var _30=_4.ensureUnique(_2.getName(),_2.getId(),true);
_2e.html(xg.chat.nls.html("userHasDisconnected",xg.qh(_30)));
_d.append(_2e);
_e=_2e;
_10.prop("disabled",true);
if(_10.val().length==0){
x$(".textarea-container",_1).hide();
}
_a.updateSizes();
_a.scrollToBottom();
return;
}
if(_2e.length>0&&_2f){
_e=_2e.prev();
_2e.remove();
_c.removeClass("roomDisabled");
_10.prop("disabled",false);
x$(".textarea-container",_1).show();
_a.updateSizes();
}
_.checkIfUserIsIgnored();
};
_.checkIfUserIsIgnored=function(){
var _31=x$(".userIgnoredWarning",_c);
var _32=_5.isUserIgnored(_2.getId());
if(_31.length==0&&_32){
_c.addClass("roomDisabled");
_31=x$("<li class=\"warning userIgnoredWarning\"></li>");
var _33=_4.ensureUnique(_2.getName(),_2.getId(),true);
_31.html(xg.chat.nls.html("youAreIgnoringUser",xg.qh(_33)));
_d.append(_31);
_e=_31;
_10.prop("disabled",true);
if(_10.val().length==0){
x$(".textarea-container",_1).hide();
}
_a.updateSizes();
_a.scrollToBottom();
x$("a",_31).click(function(_34){
_34.preventDefault();
_34.stopPropagation();
_3.stopIgnoringUser(_2.getId());
});
return;
}
if(_31.length>0&&!_32){
_e=_31.prev();
_31.remove();
_c.removeClass("roomDisabled");
_10.prop("disabled",false);
x$(".textarea-container",_1).show();
_a.updateSizes();
}
};
_a.isConnected=function(){
return _5.userList.isUserConnected(_2.getId());
};
_.doesBrowserSupportInlineBlock=function(){
if(x$.browser.msie&&x$.browser.version.match(/^(5|6|7)\b/)){
return false;
}
var _35=x$("<div style=\"display: inline-block;\"></div>");
_35.appendTo(document.body);
var _36=_35.css("display")=="inline-block";
_35.remove();
return _36;
};
_a.getDistanceFromBottom=function(_37){
return _37[0].scrollHeight-_37.scrollTop()-_37.innerHeight();
};
_.removeFirstDisplayedMessage=function(){
var _38=_d.find("li.message:eq(1)");
_38.prevAll(".message, ._timestamp").remove();
_.updateMessageHeading(_38);
};
_a.beforeAddingMessages=function(){
_22=_a.getDistanceFromBottom(_d);
_23=false;
};
_a.addMessage=function(_39,_3a,_3b,_3c){
var _3d=_39.getId();
var _3e=_39.getAvatarUrl();
var _3f=_39.getName();
var _40=_39.isAdmin();
if(!_a.isOpen()&&!_3c&&_3d!==_5.user.getId()){
_1f.addUnreadMessage(_3b);
}
_17=Math.max(_17,_3b);
if(!_a.isOpen()){
_15.push({sender:_39,message:_3a,timestamp:_3b,isFromLocalStorage:_3c});
}else{
_.addMessageToDisplay(_39,_3a,_3b,_3c);
}
if(!_3c&&_8){
_8.startFlashing(xg.chat.nls.text("titlebarUserSays",_39.getName()));
}
};
_.addClearHistoryLi=function(){
var _41="<li class=\"clearHistory\"><a href=\"#\">"+xg.chat.nls.html("clearChatHistory")+"</a></li>";
x$(_41).prependTo(_d).find("a").click(function(_42){
_42.preventDefault();
if(_a.isPrivate()){
xg.shared.util.confirm({title:xg.chat.nls.text("clearMessages"),bodyText:xg.chat.nls.text("thisWillClearAllMessages",_21),onOk:function(){
_3.clearPrivateRoomHistory(_a.getUser().getId());
}});
}else{
xg.shared.util.confirm({title:xg.chat.nls.text("clearMainRoomMessages"),bodyText:xg.chat.nls.text("thisWillDeleteMainRoomMessages"),onOk:function(){
_9.clearMessages();
}});
}
});
};
_.addMessageToDisplay=function(_43,_44,_45,_46){
if(!_25&&(_a.isPrivate()||_5.user.isAdmin())){
_.addClearHistoryLi();
_25=true;
}
var _47=_43.getId();
var _48=_43.getAvatarUrl();
var _49=_43.getName();
var _4a=_43.isAdmin();
if(_47===_5.user.getId()){
_23=true;
}
_20++;
if(_20>_5.maxDisplayedMessageCountPerRoom){
_.removeFirstDisplayedMessage();
}
if(_44&&_5.languageFilter){
_44=_5.languageFilter.filter(_44);
}
var _4b=xg.linkify(xg.qh(_44),"_blank");
if(_14){
_4b=_a.insertEmoticonImages(_4b,_13);
}
_.insertTimestampProper(_d,_45);
var _4c=!_a.isPrivate()&&_5.user.isAdmin();
var _4d=x$(xg.renderHtml(_.createMessageTemplate(_4c,!_4a),{imageUrl:xg.qh(_48),onerror:xg.qh("this.onerror=null;this.src='"+_5.defaultAvatarUrl+"';"),name:_47==_5.user.getId()?xg.chat.nls.html("me"):xg.qh(_4.ensureUnique(_49,_47,_46)),message:_4b,deleteLabel:xg.chat.nls.html("deleteMessage"),deleteAndSuspendLabel:xg.chat.nls.html("deleteMessageAndSuspend")}));
_4d.data("timestamp",_45);
_4d.data("senderId",_47);
_d.append(_4d);
_e=_f=_4d;
_.updateMessageHeading(_4d);
if(_4c){
x$(".delete",_4d).click(function(_4e){
_4e.preventDefault();
_4e.stopPropagation();
if(x$(".deleteOptions.active",_4d).length>0){
x$(".deleteOptions",_4d).removeClass("active");
return;
}
x$(".deleteOptions",_d).removeClass("active");
x$(".deleteOptions",_4d).addClass("active");
});
x$(".deleteOption",_4d).click(function(_4f){
_4f.preventDefault();
_4f.stopPropagation();
x$(".deleteOptions",_d).removeClass("active");
_3.sendDeleteMessage(_47,_45);
});
if(!_4a){
x$(".deleteAndSuspendOption",_4d).click(function(_50){
_50.preventDefault();
_50.stopPropagation();
x$(".deleteOptions",_d).removeClass("active");
_3.showBanDialog(_47,function(){
_3.sendDeleteMessage(_47,_45);
});
});
}
}
if(_47!=_5.user.getId()){
x$("._avatar, ._sender",_4d).click(function(_51){
_51.preventDefault();
if(_2==null){
_3.addPrivateRoom(_43,true,true);
}else{
_3.navigateToProfile(_47);
}
});
}
};
_.createMessageTemplate=function(_52,_53){
var _54="<li class=\"message\">"+"<img class=\"_avatar\" src=\"{imageUrl}\" onerror=\"{onerror}\">"+"<span class=\"_sender\">{name}</span>"+"<p class=\"_message\">";
if(_52){
_54+="<span class=\"deleteOptions\">"+"<a href=\"#\" class=\"deleteOption\">{deleteLabel}</a>";
if(_53){
_54+="<a href=\"#\" class=\"deleteAndSuspendOption\">{deleteAndSuspendLabel}</a>";
}
_54+="</span>"+"<span class=\"delete\"></span>";
}
_54+="{message}</p>"+"</li>";
return _54;
};
_a.afterAddingMessages=function(_55){
_.repositionWarnings();
if(_a.isOpen()){
_a.updateSizes();
if(_22<20||_23){
_a.scrollToBottom();
}
}
_5.layout.afterAddingMessages(_a,_55);
if(!_55){
if(_1e){
window.clearTimeout(_1e);
}
_1e=window.setTimeout(_.finishTimestampTimer,_18);
if(!_a.isOpen()){
_.flash(_5.layout.getLabel(_a));
}
}
};
_.flash=function(_56){
_56.addClass("flash");
setTimeout(function(){
_56.removeClass("flash");
},_.FLASH_DURATION);
};
_.finishTimestampTimer=function(){
_.insertTimestamp(_d,new Date().getTime());
_1e=null;
};
_.updateMessageHeading=function(_57){
if(!_57||_57.length==0){
return;
}
var _58=_57.prev();
if(_58.length==0||_58.data("senderId")!=_57.data("senderId")){
_57.removeClass("brief");
return;
}
_57.addClass("brief");
};
_a.deleteMessage=function(_59,_5a){
x$("li",_d).each(function(_5b){
var _5c=x$(this);
if(_5c.data("senderId")!=_59||_5c.data("timestamp")!=_5a){
return;
}
_20--;
var _5d=_5c.next();
var _5e=_5c;
if(_5d.data("senderId")==_59||_5.user.getId()==_59){
_5e=x$("p",_5c);
}
_5e.hide("fast",function(){
if(_59==_5.user.getId()){
_5e.html(xg.chat.nls.html("postDeleted"));
_5e.addClass("_warning");
_5e.show("fast");
return;
}
var _5f=_5c.prev();
_5c.remove();
_.updateMessageHeading(_5d);
_.collapseTimestamps(_5f,_5d);
});
});
};
_.collapseTimestamps=function(_60,_61){
if(!_61.length){
return;
}
_61=x$(_61[0]);
if(!_61.hasClass("_timestamp")){
return;
}
if(!_60.length||x$(_60[0]).hasClass("_timestamp")){
_61.remove();
}
};
_.insertTimestamp=function(_62,_63){
var _64=_a.getDistanceFromBottom(_62);
var _65=_.insertTimestampProper(_62,_63);
if(!_65){
return;
}
_.repositionWarnings();
_a.updateSizes();
if(0===_64){
_a.scrollToBottom();
}
};
_.insertTimestampProper=function(_66,_67){
var _68;
if(_e.hasClass("_timestamp")||_e.hasClass("userDisconnectedWarning")||_e.hasClass("userIgnoredWarning")){
return;
}
if(!_f.length){
return false;
}
var _69=_f.data("timestamp");
if(_69+_18-_19>_67){
return false;
}
_68=_a.formatTime(_69);
if(""===_68){
return false;
}
var _6a=x$(xg.renderHtml(_1a,{date:xg.qh(_68)}));
_66.append(_6a);
_e=_6a;
return true;
};
_a.insertTimestamp=function(){
_.insertTimestamp(_d,new Date().getTime());
};
_a.scrollToBottom=function(){
var _6b=_d[0].scrollHeight;
_6b=_d[0].scrollHeight;
_d.scrollTop(_6b-_d.innerHeight());
};
_a.insertEmoticonImages=function(_6c,_6d){
x$.each(_6d.EMOTICON_TO_CSS_CLASS_NAME_MAP,function(_6e,_6f){
_6c=_6c.replace(new RegExp(_.escapeRegExp(_6e),"g"),"<span class=\"emoticon "+_6f+"\">"+_6e+"</span>");
});
return _6c;
};
_.escapeRegExp=function(_70){
return _70.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&");
};
_a.formatTime=function(_71){
var _72=new Date();
_72.setHours(0);
_72.setMinutes(0);
_72.setSeconds(0);
var _73=new Date(_71);
if(isNaN(_73.getTime())){
return "";
}
if(_72-(24*60*60*1000)>_73){
return xg.shared.DateFormatter.monthDay(_73.getMonth(),_73.getDate());
}
if(_72>_73){
return xg.chat.nls.text("yesterday");
}
var _74=_73.getHours();
var _75=_74<10?"0"+_74:_74;
var _76=_74>12?_74-12:_74;
var _77=_76<10?"0"+_76:_76;
return xg.shared.nls.text("time",_76,_77,_74,_75,_73.getMinutes()<10?"0"+_73.getMinutes():_73.getMinutes());
};
_a.clearMessages=function(){
_d.children().remove("._timestamp, .message, .clearHistory");
_25=false;
_e=x$();
_f=x$();
_15=[];
_20=0;
_1f.clear();
_a.updateLabel();
};
_a.clearOldMessages=function(_78){
x$(".message, ._timestamp",_d).each(function(_79){
var _7a=x$(this);
if(_7a.data("timestamp")>_78){
return false;
}
if(_7a.data("senderId")){
_20--;
}
_7a.remove();
});
if(_20==0){
x$(".clearHistory",_d).remove();
_25=false;
}
};
_.sendMessage=function(){
if(_10.filter(":visible").length==0||_10.prop("disabled")){
return;
}
var _7b=x$.trim(_10.val().substr(0,_12));
if(!_7b){
_10.val("");
return;
}
_3.sendMessage(_7b,_2?_2.getId():null);
_10.val("");
};
_a.focus=function(){
x$(".xg_chatInput",_1).focus();
};
_a.isSelected=function(){
return _5.layout.isRoomSelected(_a);
};
_a.updateSizes=function(){
var _7c=_d[0].scrollHeight-(_d.scrollTop()+_d.innerHeight());
var _7d=_a.getSelectedHeight();
var _7e=_7d?_7d:_5.layout.getExpandedHeight(_a,_d,_e,_11);
_7e=Math.min(x$(window).height()-_5.PADDING,Math.max(_1d,_7e));
var _7f=_10.outerHeight()>_11.height();
x$(".emoticonContainer",_1).toggleClass("withScrollbar",_7f);
var _80=_10.val().length;
if(_80>0&&_.getCursorPosition(_10)>=_80){
var _81=_11[0].scrollHeight;
_81=_11[0].scrollHeight;
_11.scrollTop(_81-_11.innerHeight());
}
_5.layout.setWindowHeight(_c,_7e);
_5.layout.updateMessageList(_d,_1,_7e);
if(_7c<20){
_a.scrollToBottom();
}
};
_.getCursorPosition=function(_82){
var pos=0;
var el=_82.get(0);
if(document.selection){
el.focus();
var Sel=document.selection.createRange();
var _86=document.selection.createRange().text.length;
Sel.moveStart("character",-el.value.length);
pos=Sel.text.length-_86;
}else{
if(el.selectionStart||el.selectionStart=="0"){
pos=el.selectionStart;
}
}
return pos;
};
_.displayPendingMessages=function(){
if(_15.length==0){
return false;
}
while(_15.length){
var _87=_15.shift();
_.addMessageToDisplay(_87.sender,_87.message,_87.timestamp,_87.isFromLocalStorage);
}
_a.insertTimestamp();
return true;
};
_a.open=function(){
_5.layout.beforeOpeningRoom(_a);
_a.setOpen(true);
_1f.clear();
_c.show();
_.displayPendingMessages();
_a.updateSizes();
_a.scrollToBottom();
_3.saveRoomStates();
if(_a.isPrivate()){
_.checkIfUserDisconnected();
}
_.checkUserInfo();
_5.layout.afterOpeningRoom(_a);
};
_a.setOpen=function(_88){
_24=_88;
};
_a.isOpen=function(){
return _24;
};
_a.getUser=function(){
return _2;
};
_a.isMainRoom=function(){
return !_2;
};
_a.getContainer=function(){
return _1;
};
_a.getLastActivityTime=function(){
return _17;
};
_a.updateLabel=function(){
var _89=_5.layout.getLabel(_a);
var _8a;
unreadMessageCount=_1f.getCount();
if(unreadMessageCount==0){
_8a="";
}else{
if(unreadMessageCount>_1b){
_8a="<span class=\"count\">"+_1b+"+</span>";
}else{
_8a="<span class=\"count\">"+unreadMessageCount+"</span>";
}
}
_89.empty();
$infoContents=x$("<span class=\"contents\"></span>").appendTo(_89);
var _8b=_21;
$infoContents.html(xg.qh(_8b)+_8a);
while($infoContents.width()>_5.layout.getMaxLabelWidth()){
_8b=_8b.substring(0,_8b.length-1);
$infoContents.html(xg.qh(_8b)+"\u2026"+_8a);
}
};
_.checkUserInfo=function(){
_d.find("li.message").each(function(){
_.updateMessageInfo(x$(this));
});
if(_a.isPrivate()){
if(_5.userList&&_5.userList.getUser(_2.getId())){
var _8c=_2;
_2=_5.userList.getUser(_2.getId());
if(_8c.getName()!==_2.getName()){
_1.data("user",_2.getServerObject());
_3.saveRoomStates();
}
}
_.setTitle(_4.ensureUnique(_2.getName(),_2.getId(),false));
}
};
_.updateMessageInfo=function(_8d){
var id=_8d.data("senderId");
var _8f=_8d.find("img")[0];
var _90=x$(_8d.find("._sender")[0]);
var _91=_5.userList.getUser(id);
if(!_91){
return;
}
if(_8f.src!==_91.getAvatarUrl()){
_8f.src=_91.getAvatarUrl();
}
var _92=_4.ensureUnique(_91.getName(),id,false);
if(_90.text()!==_92&&id!==_5.user.getId()){
_90.text(_92);
}
};
_a.getSelectedHeight=function(){
return _16.getSelectedHeight();
};
return _a;
};
}
if(!dojo.hostenv.findModule("xg.chat.NameUniquifier",false)){
dojo.provide("xg.chat.NameUniquifier");
xg.chat.NameUniquifier=function(){
var _1={};
var _={};
_.screenNameToNameMap={};
_.nameToScreenNameMap={};
_.initialized=false;
_1.initialize=function(_3){
var _4=x$.map(_3,function(_5,_6){
return _6;
});
_4.sort();
x$.each(_4,function(i,_8){
_.ensureUniqueProper(_3[_8],_8);
});
_.initialized=true;
xg.shared.EventRegistry.fire("xg.chat.NameUniquifier.initialized");
};
_1.isInitialized=function(){
return _.initialized;
};
_1.ensureUnique=function(_9,_a,_b){
if(!_.initialized){
return _9;
}
if(_b&&_1.getName(_a)){
return _1.getName(_a);
}
return _.ensureUniqueProper(_9,_a);
};
_1.getName=function(_c){
return _.screenNameToNameMap[_c];
};
_.ensureUniqueProper=function(_d,_e){
var _f=1;
var _10=_d;
while(_.nameToScreenNameMap[_10]&&_.nameToScreenNameMap[_10]!==_e){
_f++;
_10=_d+" "+_f;
}
_.screenNameToNameMap[_e]=_10;
_.nameToScreenNameMap[_10]=_e;
return _10;
};
return _1;
};
}
if(!dojo.hostenv.findModule("xg.chat.NotificationSound",false)){
dojo.provide("xg.chat.NotificationSound");
xg.chat.NotificationSound=function(_1,_2){
var _3={};
var _={};
var _5;
var _6;
_.initialize=function(){
if(window.Modernizr.audio.mp3=="probably"){
_5=new Audio(_1);
}else{
_6=document.getElementById("chat-sound-player");
}
};
_3.play=function(){
_.setVolume(_2.getVolumeSetting());
if(_5){
_5.play();
}else{
if(_.flashWorks(_6)){
if(xg.chat.NotificationSound.soundUri!==_1){
xg.chat.NotificationSound.soundUri=_1;
_6.SetVariable("method:setUrl",_1);
}
_6.SetVariable("method:stop","");
_6.SetVariable("method:play","");
}
}
};
_.flashWorks=function(_7){
if(!_7){
return false;
}
if("undefined"==typeof _7.SetVariable){
return false;
}
return true;
};
_.setVolume=function(_8){
if(0>_8){
_8=0;
}else{
if(10<_8){
_8=10;
}
}
if(_5){
_5.volume=_8/10;
}else{
if(_.flashWorks(_6)){
_6.SetVariable("method:setVolume",_8*10);
}
}
};
_.initialize();
return _3;
};
}
if(!dojo.hostenv.findModule("xg.chat.ChatOptionBox",false)){
dojo.provide("xg.chat.ChatOptionBox");
xg.chat.ChatOptionBox=function(_1,_2,_3){
var _4={};
var _={};
var _6=null;
var _7=[];
_.initialize=function(){
_6=x$("<div>             <div class=\"option xg_onlineOption\"><span class=\"checkmark\">&#x2713; </span><span class=\"label\">"+xg.chat.nls.html("connectedToChat")+"</span></div>         </div>");
x$(".xg_onlineOption",_6).click(function(_8){
var _9=x$(this);
_8.preventDefault();
_8.stopPropagation();
_1();
x$.each(_7,function(i,_b){
_b(_9);
});
});
};
_4.addClickHandler=function(_c){
_7.push(_c);
};
_4.getDiv=function(){
return _6[0];
};
_.initialize();
return _4;
};
}
if(!dojo.hostenv.findModule("xg.chat.VolumeLock",false)){
dojo.provide("xg.chat.VolumeLock");
xg.chat.VolumeLock=function(_1){
var _2={};
var _={};
_.CHECK_INTERVAL=2000;
_.COOKIE_NAME="volumeSetting";
_.timestamp=null;
_.volumeSetting=_1;
_.initialize=function(){
_.check();
window.setInterval(_.check,_.CHECK_INTERVAL);
};
_.check=function(){
var _4=xg.shared.util.getCookie(_.COOKIE_NAME);
if(!_4){
return;
}
_.volumeSetting=_4;
};
_2.getVolumeSetting=function(){
return _.volumeSetting;
};
_2.setVolumeSetting=function(_5){
xg.post("/chat/index/update",{volume:_5});
xg.shared.util.setCookie(_.COOKIE_NAME,_5);
_.volumeSetting=_5;
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.chat.WibiyaHacks",false)){
dojo.provide("xg.chat.WibiyaHacks");
(xg.chat.WibiyaHacks=function(){
var _={};
var _2=10;
var _3=500;
var _4;
var _5=0;
_.initialize=function(){
if(!x$("script[src*=\"wibiya\"]").length){
return;
}
_4=window.setInterval(_.watchForToolbar,_3);
};
_.watchForToolbar=function(){
var _6=x$("#wibiyaToolbar");
if(_6.length){
if(x$(".xg_chat").data("connected")){
_.setUpSignedInHacks(_6);
}else{
_.setUpSignedOutHacks(_6);
}
window.clearInterval(_4);
return;
}
_5++;
if(_2<=_5){
window.clearInterval(_4);
}
};
_.setUpSignedOutHacks=function(_7){
if("off"===_7.attr("state")){
x$("#userListContainer").addClass("xg_wibiyaMinimized");
}else{
x$("#userListContainer").addClass("xg_wibiyaMaximized");
}
x$(".minMaxBtnDiv_maximize").bind("click",_.handleWibiyaSignedOut);
x$(".minMaxBtnDiv_minimize").bind("click",_.handleWibiyaSignedOut);
};
_.setUpSignedInHacks=function(_8){
x$(".minMaxBtnDiv_maximize").bind("click",_.handleWibiyaSignedIn);
x$(".minMaxBtnDiv_minimize").bind("click",_.handleWibiyaSignedIn);
if("off"===_8.attr("state")){
return;
}
x$(".chatFooter").addClass("with-wibiya-toolbar");
};
_.handleWibiyaSignedOut=function(){
x$("#userListContainer").toggleClass("xg_wibiyaMinimized").toggleClass("xg_wibiyaMaximized");
};
_.handleWibiyaSignedIn=function(){
x$(".chatFooter").toggleClass("with-wibiya-toolbar");
};
_.initialize();
})();
}
if(!dojo.hostenv.findModule("xg.chat.states.ConnectingState",false)){
dojo.provide("xg.chat.states.ConnectingState");
xg.chat.states.ConnectingState=function(){
var _1={};
var _={};
_.initialize=function(){
};
_1.getName=function(){
return "Connecting";
};
_1.isOnline=function(){
return true;
};
_1.getUserListBarText=function(){
return xg.chat.nls.text("connecting");
};
_1.getChatOptionBoxDiv=function(_3){
return null;
};
_1.areOpenChatPanesAllowed=function(){
return false;
};
_1.isPollingPresence=function(){
return false;
};
_1.onClickUserListBar=function(_4){
};
_.initialize();
return _1;
};
}
if(!dojo.hostenv.findModule("xg.chat.states.OnlineState",false)){
dojo.provide("xg.chat.states.OnlineState");
xg.chat.states.OnlineState=function(_1,_2){
var _3={};
var _={};
var _5=false;
_.initialize=function(){
};
_3.getName=function(){
return "Online";
};
_3.isOnline=function(){
return true;
};
_3.getUserListBarText=function(){
return xg.chat.nls.text("membersOnline",_1.userList.getUserCount());
};
_3.getChatOptionBoxDiv=function(_6){
if(!_5){
_2.addClickHandler(function(_7){
if(_7.hasClass("xg_onlineOption")){
_6();
}
});
_5=true;
}
return _2.getDiv();
};
_3.areOpenChatPanesAllowed=function(){
return true;
};
_3.isPollingPresence=function(){
return true;
};
_3.onClickUserListBar=function(_8){
_8.toggleExpanded();
};
_.initialize();
return _3;
};
}
if(!dojo.hostenv.findModule("xg.chat.states.OfflineState",false)){
dojo.provide("xg.chat.states.OfflineState");
xg.chat.states.OfflineState=function(_1,_2){
var _3={};
var _={};
var _5;
_.initialize=function(){
_5=x$("<div>"+xg.chat.nls.html("youAreDisconnected","href=\"#\"")+"</div>");
_5.click(_.onClickPopupDiv);
_5.find("a").click(_.onClickPopupDiv);
};
_3.getName=function(){
return "Offline";
};
_.onClickPopupDiv=function(_6){
_6.preventDefault();
_6.stopPropagation();
_2();
_.hide();
};
_3.isOnline=function(){
return false;
};
_3.getUserListBarText=function(){
return xg.chat.nls.text("disconnected",_1.userList.getUserCount());
};
_3.getChatOptionBoxDiv=function(_7){
_.hide=_7;
return _5[0];
};
_3.areOpenChatPanesAllowed=function(){
return false;
};
_3.isPollingPresence=function(){
return true;
};
_3.onClickUserListBar=function(_8){
_2();
};
_.initialize();
return _3;
};
}
if(!dojo.hostenv.findModule("xg.chat.states.SuspendedState",false)){
dojo.provide("xg.chat.states.SuspendedState");
xg.chat.states.SuspendedState=function(_1){
var _2={};
var _={};
_.initialize=function(){
};
_2.getName=function(){
return "Suspended";
};
_2.isOnline=function(){
return false;
};
_2.getUserListBarText=function(){
return xg.chat.nls.text("suspendedFromChat");
};
_2.getChatOptionBoxDiv=function(_4){
var _5=Math.ceil(Math.max(0,_1.get("suspensionExpirationTime")-Date.now())/60000);
var _6=Math.ceil(_5/60);
var _7=_5<60?xg.chat.nls.html("youWereSuspendedMinutes",_5):xg.chat.nls.html("youWereSuspendedHours",_6);
$popupDiv=x$("<div>"+_7+"</div>");
$popupDiv.click(_4);
return $popupDiv[0];
};
_2.areOpenChatPanesAllowed=function(){
return false;
};
_2.isPollingPresence=function(){
return false;
};
_2.onClickUserListBar=function(_8){
_8.toggleChatOptionBox();
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.chat.states.RoomFullState",false)){
dojo.provide("xg.chat.states.RoomFullState");
xg.chat.states.RoomFullState=function(_1,_2){
var _3={};
var _={};
var _5;
_.initialize=function(){
_5=x$("<div>"+xg.chat.nls.html("youAreDisconnected","href=\"#\"")+"</div>");
_5.click(_.onClickPopupDiv);
_5.find("a").click(_.onClickPopupDiv);
};
_3.getName=function(){
return "Room Full";
};
_.onClickPopupDiv=function(_6){
_6.preventDefault();
_6.stopPropagation();
_2();
_.hide();
};
_3.isOnline=function(){
return false;
};
_3.getUserListBarText=function(){
var _7=_1.userList.getUserCount();
if(_7>=_1.maxUserCount){
return xg.chat.nls.text("disconnectedFull",_7);
}
return xg.chat.nls.text("disconnected",_7);
};
_3.getChatOptionBoxDiv=function(_8){
_.hide=_8;
return _5[0];
};
_3.areOpenChatPanesAllowed=function(){
return false;
};
_3.isPollingPresence=function(){
return true;
};
_3.onClickUserListBar=function(_9){
_2();
};
_.initialize();
return _3;
};
}
if(!dojo.hostenv.findModule("xg.chat.layouts.FooterLayout",false)){
dojo.provide("xg.chat.layouts.FooterLayout");
xg.chat.layouts.FooterLayout=function(_1,_2,_3){
var _4={};
var _={};
_.POPOUT_WIDTH=700;
_.POPOUT_HEIGHT=500;
_.popOutChatWindow=null;
_4.initializeEarly=function(){
};
_4.initializeLate=function(){
_.fixPositionForIOS4();
};
_.fixPositionForIOS4=function(){
if(!navigator.userAgent.match(/iPhone OS 4_|CPU OS 4_/)){
return;
}
$chatContainer=x$(".xg_chat");
var _6=function(){
if(_1.mainRoom.isSelected()){
return;
}
var _7=false;
x$.each(_1.privateRooms,function(i,_9){
if(_9&&_9.isSelected()){
_7=true;
}
});
if(_7){
return;
}
$chatContainer.css("top",(window.pageYOffset+window.innerHeight)+"px");
};
x$(document).bind("scroll",_6);
_6();
};
_4.onLoginSuccess=function(){
if(_2.isUserListExpanded()){
_1.userListView.expand();
}
};
_4.saveRoomStates=function(){
var _a=_1.mainRoom.isOpen();
if(_2.isMainRoomOpen()!=_a){
_2.setMainRoomOpen(_a);
}
};
_4.updateUserPreferences=function(_b){
xg.post("/chat/index/update",_b);
};
_4.getExpandedHeight=function(_c,_d,_e,_f){
var _10=Math.min(x$(window).height()-_2.PADDING,_2.MAX_HEIGHT);
var _11=50;
if(_e.length>0){
var _12=2;
var _13=_d.outerHeight(true)-_d.height()+_12;
var _14=_d.scrollTop()+_e.position().top+_e.outerHeight(true)-_d.position().top;
_11=Math.max(_14+_13,_11);
}
var _15=_11+_d.position().top;
if(_f.filter(":visible").length>0){
_15+=_f.outerHeight(true);
}
return Math.min(_10,_15);
};
_4.updateMessageList=function(_16,_17,_18){
var _19=_16.outerHeight(true)-_16.height();
var _1a=_16.position().top;
if(x$(".xg_chatInput:visible",_17).length>0){
_1a+=x$(".textarea-container",_17).outerHeight(true);
}
_16.height(_18-_19-_1a);
};
_4.setWindowHeight=function(_1b,_1c){
_1b.height(_1c);
};
_4.initializeRoomEarly=function(_1d){
_1d.getContainer().show();
x$(".xg_titleBar",_1d.getContainer()).click(xg.preventDefault(function(){
_4.minimizeRoom(_1d);
}));
x$(".xg_window",_1d.getContainer()).click(xg.preventDefault(function(){
_.openPopOutChat(_1d.isPrivate()?_1d.getUser().getId():null);
},true));
_1d.bottomBar=x$(".xg_bottomBar",_1d.getContainer());
_1d.bottomBarInfo=_1d.bottomBar.find(".xg_info");
_1d.bottomBar.click(xg.preventDefault(function(){
_1d.open();
_1d.focus();
}));
x$(".xj_close",_1d.getContainer()).click(function(_1e){
_1e.preventDefault();
_1.closePrivateRoom(_1d.getUser().getId(),true);
});
};
_.openPopOutChat=function(_1f){
if(!_.popOutChatWindow||_.popOutChatWindow.closed){
_2.setPrivateRoomsForPopoutChat(_2.getPrivateRooms());
_.popOutChatWindow=window.open("/chat/index/popOutWindowV4"+(_1f?"?openRoom="+_1f:""),"xg_chat","height="+_.POPOUT_HEIGHT+",width="+_.POPOUT_WIDTH+",location=no,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes");
}
_.popOutChatWindow.focus();
};
_4.beforeOpeningRoom=function(_20){
};
_4.afterOpeningRoom=function(_21){
_21.bottomBar.hide();
};
_4.minimizeRoom=function(_22){
_22.setOpen(false);
x$(".xg_chatWindow",_22.getContainer()).hide();
_22.bottomBar.show();
_22.updateLabel();
_1.saveRoomStates();
};
_4.afterAddingMessages=function(_23,_24){
if(_23.isOpen()||_24){
return;
}
_23.updateLabel();
};
_4.getLabel=function(_25){
return _25.bottomBarInfo||x$();
};
_4.getMaxLabelWidth=function(){
return 190;
};
_4.isAutoOpeningRooms=function(){
return true;
};
_4.initializeUserListView=function(_26,_27){
x$(".xg_window",_26).click(xg.preventDefault(_.openPopOutChat,true));
};
_4.updateUserListViewSizes=function(_28,_29,_2a,_2b){
var _2c=_2a.outerHeight()-_2a.height();
var _2d=_28.position().top;
var _2e=x$(".xg_bottomBar",_29).outerHeight(true);
var _2f=120+_2d+_2e;
var _30=x$(window).height()-_2.PADDING;
var _31;
if(_2b){
_31=_2b;
}else{
var _32=0;
var _33=_28.children().last();
if(_33.length>0){
_32=_33.outerHeight(true)*4;
var _34=_28.outerHeight(true)-_28.height();
var _35=_28.scrollTop()+_33.position().top+_33.outerHeight(true)-_28.position().top;
_32=Math.max(_35+_34,_32);
}
_31=_32+_2d+_2e;
_31=Math.min(_2.MAX_HEIGHT,_31);
}
var _36=Math.max(_2f,Math.min(_30,_31));
_2a.height(_36);
_28.height(_36+_2c-_2d-_2e);
};
_4.updateConversationMarkers=function(_37,_38,_39){
_37.find(".conversation-marker").hide();
_37.find("li").each(function(){
var $li=x$(this);
if(_1.privateRooms[$li.data("xj_screen_name")]){
$li.find(".conversation-marker").show();
}
});
};
_4.getLocalStorageNameForPrivateRooms=function(){
return _2.LOCAL_STORAGE_NAME_FOR_PRIVATE_ROOMS_FOR_FOOTER_AND_MODULE_CHAT;
};
_4.isRoomSelected=function(_3b){
return x$(".xg_chatInput:focus",_3b.getContainer()).length>0;
};
_4.closePrivateRoomIfTooMany=function(){
if(_1.mainRoom.getContainer().offset().left==0){
return;
}
var _3c=_1.getPrivateRoomsSortedByActivity();
if(_3c.length<=1){
return;
}
var _3d=_3c[_3c.length-1];
var _3e=false;
for(var i=0;i<_3c.length;i++){
var _40=_3c[i];
if(_1.mainRoom.getContainer().offset().left<_3d.getContainer().offset().left){
_1.closePrivateRoom(_40.getUser().getId(),false);
_3e=true;
}else{
break;
}
}
if(_3e){
_1.saveRoomStates();
}
};
_4.showSuspensionDialog=function(_41,_42){
if(_3.get("suspensionDialogShown")){
return;
}
_3.set("suspensionDialogShown",true,true,Math.ceil(_42/1000));
xg.shared.util.alert({title:xg.chat.nls.html("suspendedFromChat"),bodyHtml:_41,wideDisplay:true});
};
_4.signOutDetected=function(_43){
_2.setState(_43);
};
return _4;
};
}
if(!dojo.hostenv.findModule("xg.chat.layouts.WindowLayout",false)){
dojo.provide("xg.chat.layouts.WindowLayout");
xg.chat.layouts.WindowLayout=function(_1,_2,_3,_4){
var _5={};
var _={};
_.tabEntryTemplate="<li class=\"mainRoom\"><a href=\"#\" class=\"privateMessageLink\"><img class=\"_avatar\" src=\"{image}\"></span><span class=\"_username\">{name}</span></a></li>";
_.$tabList=x$();
_.$userList=x$();
_.currentRoom=null;
_.mainRoomIconUrl;
_.maxPrivateRoomCount;
_.dialogDisplayed=false;
_.suspendedDialogDisplayed=false;
_.userListSorter=xg.chat.UserListSorter();
_5.initializeEarly=function(){
_.mainRoomIconUrl=x$(".xg_chat").data("appIconUrl");
_.maxPrivateRoomCount=x$(".xg_chat").data("maxPrivateRoomCount");
};
_5.initializeLate=function(){
xg.shared.EventRegistry.listen("xg.chat.models.UserList.usersUpdated",_.updateHeading);
_.initializeDisconnectedDialog();
_.initializeSuspendedDialogClosing();
xg.shared.EventRegistry.listen("xg.chat.Controller.privateRoomRemoved",function(id){
if(_.currentRoom&&_.currentRoom.getUser()&&_.currentRoom.getUser().getId()===id){
_1.mainRoom.open();
}
});
};
_.initializeDisconnectedDialog=function(){
var _8=false;
var _9=false;
xg.shared.EventRegistry.listen("xg.chat.Model.stateChanged",function(){
if(_2.getState().isOnline()&&_8){
x$("#disconnected-dialog, .xg_chat .xg_overlay").hide();
_.dialogDisplayed=_8=false;
_9=false;
}else{
if(!_2.getState().isOnline()&&!_.dialogDisplayed){
x$("#disconnected-dialog, .xg_chat .xg_overlay").show();
_.dialogDisplayed=_8=true;
_9=false;
}
}
});
x$("#disconnected-dialog input[type=button]").click(function(){
if(_9){
return;
}
_1.toggleOnlineStatus();
_9=true;
});
};
_.updateHeading=function(){
if(!_.currentRoom){
return;
}
var _a=x$(".xg_messageListHeading",_.currentRoom.getContainer());
var i,_c,_d,_e,_f,_10;
_c=_a.parent()[0].id;
if(_a.prop("id")==="mainRoomHeading"){
_f=xg.chat.nls.text("mainRoom");
_10=_.mainRoomIconUrl;
}else{
_c=_c.replace("Room_","");
_d=_1.privateRooms[_c].getUser();
_f=_4.ensureUnique(_d.getName(),_d.getId(),true);
_10=_d.getAvatarUrl();
}
_a.html(xg.qh(_f));
_e=x$("<img />");
_e.addClass("_avatar");
_e.prop("src",_10);
_a.append(_e);
};
_5.onLoginSuccess=function(){
};
_5.saveRoomStates=function(){
};
_5.updateUserPreferences=function(_11){
delete _11.mainRoomExpanded;
delete _11.userListExpanded;
xg.post("/chat/index/update",_11);
};
_5.getExpandedHeight=function(_12,_13,_14,_15){
return _12.getContainer().height();
};
_5.updateMessageList=function(_16,_17,_18){
_16.css("bottom",(_17.height()-x$(".xg_messageListFooter",_17).position().top)+"px");
};
_5.setWindowHeight=function(_19,_1a){
};
_5.initializeRoomEarly=function(_1b){
};
_5.beforeOpeningRoom=function(_1c){
x$(".xg_chat .xg_chatRoom").hide();
_1.mainRoom.setOpen(false);
x$.each(_1.privateRooms,function(i,_1e){
_1e.setOpen(false);
});
};
_5.afterOpeningRoom=function(_1f){
_.currentRoom=_1f;
_.updateHeading();
_1f.updateLabel();
if(_1f.isMainRoom()){
_.highlightTab(_.$tabList.find(":first-child"));
}else{
_.$tabList.children().each(function(i,li){
var $li=x$(li);
if($li.data("xj_screen_name")===_1f.getUser().getId()){
_.highlightTab($li);
}
});
}
};
_5.minimizeRoom=function(_23){
};
_5.afterAddingMessages=function(_24,_25){
if(_25){
return;
}
_24.updateLabel();
if(_24.isMainRoom()){
return;
}
};
_5.getLabel=function(_26){
return _26.tabLabel||x$();
};
_5.getMaxLabelWidth=function(){
return 120;
};
_5.isAutoOpeningRooms=function(){
return false;
};
_5.initializeUserListView=function(_27,_28){
var _29=x$(xg.renderHtml(_.tabEntryTemplate,{image:xg.qh(_.mainRoomIconUrl),name:xg.chat.nls.text("mainRoom")}));
_.$userList=x$(".chatUsers",_27);
_.$tabList=x$(".chatTabs",_27);
_.$tabList.append(_29);
_1.mainRoom.tabLabel=_29.find("._username");
_1.mainRoom.updateLabel();
_.highlightTab(_29);
_29.click(function(_2a){
_2a.preventDefault();
_28();
_1.mainRoom.open();
_.highlightTab(_29);
});
};
_5.updateUserListViewSizes=function(_2b,_2c,_2d){
};
_5.updateConversationMarkers=function(_2e,_2f,_30){
var _31={};
_.$tabList.find("li").each(function(){
var $li=x$(this);
var id=$li.data("xj_screen_name");
if(!id){
return;
}
if(!_1.privateRooms[id]){
$li.remove();
return;
}
_31[id]=$li;
});
x$.each(_1.privateRooms,function(id,_35){
if(!_31[id]){
var $li=_30(_35.getUser(),false);
x$(".delete",$li).click(function(_37){
_37.preventDefault();
_37.stopPropagation();
_1.closePrivateRoom(id,true);
});
_.userListSorter.insert($li,_.$tabList,function($a,$b){
if($a.hasClass("mainRoom")){
return -1;
}
if($b.hasClass("mainRoom")){
return 1;
}
return _.userListSorter.compareAlphabetically($a,$b);
});
_35.tabLabel=$li.find("._username");
_35.updateLabel();
}
});
};
_.highlightTab=function($li){
_.$tabList.children(".active").removeClass("active");
$li.addClass("active");
};
_5.getLocalStorageNameForPrivateRooms=function(){
if(_2.isPopoutChat){
return _2.LOCAL_STORAGE_NAME_FOR_PRIVATE_ROOMS_FOR_POPOUT_CHAT;
}
return _2.LOCAL_STORAGE_NAME_FOR_PRIVATE_ROOMS_FOR_FOOTER_AND_MODULE_CHAT;
};
_5.isRoomSelected=function(_3b){
return _3b===_.currentRoom;
};
_5.closePrivateRoomIfTooMany=function(){
var _3c=_1.getPrivateRoomsSortedByActivity();
var _3d=_3c.length-_.maxPrivateRoomCount;
for(var i=0;i<_3d;i++){
var _3f=_3c[i];
_1.closePrivateRoom(_3f.getUser().getId(),false);
}
if(_3d>0){
_1.saveRoomStates();
}
};
_.initializeSuspendedDialogClosing=function(){
xg.shared.EventRegistry.listen("xg.chat.Model.stateChanged",function(){
if(!_.suspendedDialogDisplayed){
return;
}
if(_3.get("suspensionExpirationTime")&&_3.get("suspensionExpirationTime")>Date.now()){
return;
}
x$("#suspended-dialog, .xg_chat .xg_overlay").hide();
_.dialogDisplayed=_.suspendedDialogDisplayed=false;
});
};
_5.showSuspensionDialog=function(_40,_41){
if(_.dialogDisplayed){
return;
}
x$("#suspended-dialog p").html(_40);
x$("#suspended-dialog, .xg_chat .xg_overlay").show();
_.dialogDisplayed=_.suspendedDialogDisplayed=true;
};
_5.signOutDetected=function(_42){
if(_2.isPopoutChat){
window.close();
}else{
window.location.href="/main/authorization/signUp?target=/chat";
}
};
return _5;
};
}
if(!dojo.hostenv.findModule("xg.chat.FlashPost",false)){
dojo.provide("xg.chat.FlashPost");
xg.chat.FlashPost=(function(){
var _1={};
var _={};
_.$flashPost=null;
_1.callbacks={};
_.nextCallId=0;
_1.initialize=function(_3){
_.$flashPost=_3;
};
_1.isAvailable=function(){
return _.$flashPost&&_.$flashPost.length>0&&(typeof _.$flashPost[0].post)!="undefined";
};
_1.sendData=function(_4,_5,_6,_7){
if(!_1.isAvailable()){
return;
}
var _8=_.nextCallId++;
_1.callbacks["success"+_8]=function(_9){
delete _1.callbacks["success"+_8];
delete _1.callbacks["failure"+_8];
_9=_9.replace(/%22/g,"\"").replace(/%5c/g,"\\").replace(/%26/g,"&").replace(/%25/g,"%");
if(_6){
_6(_9);
}
};
_1.callbacks["failure"+_8]=function(_a){
delete _1.callbacks["success"+_8];
delete _1.callbacks["failure"+_8];
if(_7){
_7(_a);
}
};
_5=_5||{};
_.$flashPost[0].post(_4,_5,"xg.chat.FlashPost.callbacks.success"+_8,"xg.chat.FlashPost.callbacks.failure"+_8);
};
return _1;
})();
}
if(!dojo.hostenv.findModule("xg.chat.Controller",false)){
dojo.provide("xg.chat.Controller");
xg.chat.Controller=function(){
var _1={};
var _={};
_.flasher;
_.initialSound;
_.otherSound;
_.messageService;
_.localStorage;
_.model;
_.loginService;
_.presenceService;
_.updateRoomsTimerId=-1;
_.privateMessageHistory=[];
_.publicMessageHistory=[];
_.nameUniquifier;
_.chatOptionBox;
_.CONNECTING_STATE;
_.ONLINE_STATE;
_.OFFLINE_STATE;
_.SUSPENDED_STATE;
_.ROOM_FULL_STATE;
var _3=1000;
var _4=500;
var _5=40;
var _6=2000;
var _7=5000;
var _8=700;
var _9=500;
var _a;
_1.userListView;
_1.mainRoom;
_1.privateRooms;
_.roomStateSavingEnabled=true;
_.soundLock;
_.volumeLock;
_1.initialize=function(){
_.soundLock=xg.chat.SoundLock();
_.nameUniquifier=xg.chat.NameUniquifier();
_.localStorage=xg.chat.LocalStorage(ning.CurrentProfile?ning.CurrentProfile.id:"");
var _b=x$(".xg_chatOptions",_a);
_.setupVolumeControl(_b.data("soundEnabledByDefault")=="1");
_a=x$(".xg_chat");
_.model=xg.chat.Model(_.localStorage,!!_a.data("connected"),!!_a.data("mainRoomExpanded"),!!_a.data("userListExpanded"));
_.model.clientId=x$.now()+"_"+Math.random();
_.model.layout=x$(".chatFooter").length?xg.chat.layouts.FooterLayout(_1,_.model,_.localStorage):xg.chat.layouts.WindowLayout(_1,_.model,_.localStorage,_.nameUniquifier);
_.model.layout.initializeEarly();
_.model.isPopoutChat=x$(".chatPopout").length>0;
var _c=x$(".module_chat_v4");
if(_c.length>0){
_.addBordersIfNeeded(_c);
}
if(_.model.isPopoutChat){
_.flasher=null;
}else{
_.flasher=new xg.chat.Flasher();
}
_.model.user=xg.chat.models.User().initialize(ning.CurrentProfile?ning.CurrentProfile.id:"",_a.data("userName"),_a.data("avatarUrl"),_a.data("isAdmin"));
_.model.userList=xg.chat.models.UserList();
_.model.defaultAvatarUrl=_a.data("defaultAvatarUrl");
_.model.setChatServerDomain(_a.data("chatServer"));
_.model.userList.setUserCount(_a.data("userCount"));
_.model.maxDisplayedMessageCountPerRoom=_a.data("maxDisplayedMessageCountPerRoom");
var _d=_a.data("ignoredMembers");
if(_d){
var _e=_d.split(",");
for(var i=0;i<_e.length;i++){
_.model.ignoredMembers[_e[i]]=true;
}
}
_.localStorage.set("ignoreList",_.model.ignoredMembers,false);
_.loginService=xg.chat.LoginService(_.model);
_.presenceService=xg.chat.PresenceService(_1,_.nameUniquifier,_.loginService,_.model,_.localStorage);
if(_a.length==0){
return;
}
_.initialSound=xg.chat.NotificationSound(_a.data("initialSoundUri"),_.volumeLock);
_.otherSound=xg.chat.NotificationSound(_a.data("otherSoundUri"),_.volumeLock);
xg.chat.FlashPost.initialize(x$("#chatFlashPost"));
_.chatOptionBox=xg.chat.ChatOptionBox(_1.toggleOnlineStatus,_.localStorage,_.model);
_.messageService=xg.chat.MessageService(_1,_.model);
_1.mainRoom=xg.chat.Room(x$("#mainChatContainer",_a),null,_1,_.nameUniquifier,_.model,_a.data("pageGenerationTime"),_.localStorage,null,_.messageService);
_1.mainRoom.initialize(_.model.getMainRoomHeight());
_1.userListView=xg.chat.UserListView(x$("#userListContainer",_a),_b,_1,_.nameUniquifier,_.presenceService,_.model).initialize(_.model.getUserListHeight());
_1.privateRooms={};
xg.shared.EventRegistry.listen("xg.chat.Model.stateChanged",function(_10){
if(!_10.areOpenChatPanesAllowed()){
_.disable();
}
if(_10.isPollingPresence()){
_.presenceService.startUpdatingPresence();
}
_.flasher&&_.flasher.stopFlashing();
});
var _11=_a.data("blacklist");
if(_11){
var _12=Base64.decode(_11).split(" ");
var _13=_a.data("checkBoundaries");
_.model.createLanguageFilter(_12,_13);
}
_.model.appId=ning.CurrentApp.id;
_.model.appName=ning.CurrentApp.name.length>_5?ning.CurrentApp.name.substr(0,_5-1)+"\u2026":ning.CurrentApp.name;
_.CONNECTING_STATE=xg.chat.states.ConnectingState();
_.ONLINE_STATE=xg.chat.states.OnlineState(_.model,_.chatOptionBox);
_.OFFLINE_STATE=xg.chat.states.OfflineState(_.model,_1.toggleOnlineStatus);
_.SUSPENDED_STATE=xg.chat.states.SuspendedState(_.localStorage);
_.ROOM_FULL_STATE=xg.chat.states.RoomFullState(_.model,_1.toggleOnlineStatus);
if(_.localStorage.get("suspensionExpirationTime")&&_.localStorage.get("suspensionExpirationTime")>Date.now()){
var _14=_.localStorage.get("suspensionExpirationTime")-Date.now();
_.onDetectSuspension(_14);
}else{
if(_.model.getCachedOnlineStatus()){
_.model.setState(_.CONNECTING_STATE);
var _15=_.getLoginDataIfFresh();
if(_15){
_.onLoginSuccessAfterPageJustLoaded(_15);
}else{
_.loginService.logIntoChat(_.onLoginSuccessAfterPageJustLoaded,_.onLoginFailure);
}
}else{
_.model.setState(_.OFFLINE_STATE);
}
}
xg.shared.EventRegistry.listen("xg.chat.suspensionDetected",_.onDetectSuspension);
_.keepUserInfoUpToDateInMessageHistory();
x$(window).resize(_.model.layout.closePrivateRoomIfTooMany);
_.model.layout.initializeLate();
xg.shared.EventRegistry.listen("xg.chat.LocalStorage.updated",_.localStorageUpdated);
setInterval(_.checkIfSignedOutOfNetwork,_7);
};
_.setupVolumeControl=function(_16){
var _17=x$(".xg_volume",_a);
if(_17.data("volume")&&_17.data("volume")!=xg.shared.util.getCookie("volumeSetting")){
xg.shared.util.setCookie("volumeSetting",_17.data("volume"));
}
var _16=_.localStorage.get("chatSoundEnabled")===null?_16:_.localStorage.get("chatSoundEnabled");
_.volumeLock=xg.chat.VolumeLock(_16?10:0);
_17.on("click",_.openVolumeSlider);
};
_.openVolumeSlider=function(){
var _18=x$(".xg_volumeSliderContainer",_a);
_18.toggle();
var _19=x$(".xg_volumeSlider",_a);
if(_19.children().length){
_19.slider("value",_.volumeLock.getVolumeSetting());
return;
}
var _1a=_19.slider({animate:true,stop:function(){
var _1b=_1a.slider("option","value");
_.volumeLock.setVolumeSetting(_1b);
_18.hide();
x$(".xg_volume",_a).toggleClass("xg_muted",0==_1b);
_.initialSound.play();
},max:10,min:0,orientation:"vertical",range:"min",value:_.volumeLock.getVolumeSetting()});
x$(document).click(function(_1c){
_18.hide();
});
};
_.checkIfSignedOutOfNetwork=function(){
if(!_.model.getState().isOnline()){
return;
}
if(!xg.shared.util.getCookie("xn_id_"+_.model.appId.toLowerCase())){
_.model.layout.signOutDetected(_.OFFLINE_STATE);
}
};
_.keepUserInfoUpToDateInMessageHistory=function(){
xg.shared.EventRegistry.listen("xg.chat.models.UserList.usersUpdated",function(){
if(!_.model.userList){
return;
}
if(_1.updateUserInfoInMessageHistory(_.privateMessageHistory,_.model.userList)){
_.model.setPrivateMessageHistory(_.privateMessageHistory);
}
if(_1.updateUserInfoInMessageHistory(_.publicMessageHistory,_.model.userList)){
_.model.setPublicMessageHistory(_.publicMessageHistory);
}
});
};
_1.updateUserInfoInMessageHistory=function(_1d,_1e){
var _1f=false;
x$.each(_1d,function(i,_21){
var _22=_1e.getUser(_21.sender.ningId);
if(_22&&(_21.sender.name!==_22.getName()||_21.sender.iconUrl!==_22.getAvatarUrl())){
_21.sender.name=_22.getName();
_21.sender.iconUrl=_22.getAvatarUrl();
_1f=true;
}
});
return _1f;
};
_.onDetectSuspension=function(_23){
_.localStorage.set("suspensionExpirationTime",Date.now()+_23,true);
var _24=Math.ceil(_23/60000);
var _25=Math.ceil(_24/60);
var _26=_24<60?xg.chat.nls.html("youWereSuspendedByAdminMinutes",_24):xg.chat.nls.html("youWereSuspendedByAdminHours",_25);
_.model.layout.showSuspensionDialog(_26,_23);
_.model.setState(_.SUSPENDED_STATE);
_.reconnectAfterSuspensionExpirationTime();
};
_.addBordersIfNeeded=function(_27){
if(parseInt(_27.css("border-top-width"),10)===0||parseInt(_27.css("border-right-width"),10)===0||parseInt(_27.css("border-bottom-width"),10)===0||parseInt(_27.css("border-left-width"),10)===0){
_27.find(".xg_chat").addClass("bordered");
}
};
_.localStorageUpdated=function(){
_.model.ignoredMembers=_.localStorage.get("ignoreList",true);
xg.shared.EventRegistry.fire("xg.chat.ignoresUpdated");
var _28=_.model.getState().isOnline();
var _29=_.model.readOnlineStatusFromLocalStorage();
if(_28!=_29){
_1.toggleOnlineStatus();
}
var _2a=_.model.getPrivateMessageHistory();
var _2b=[];
var now=new Date().getTime();
var _2d={};
for(var i=_2a.length-1;i>=0;i--){
var _2f=_2a[i];
_2d[_2f.targetRoomId]=true;
if(_.isMessageNewerThanHistory(_2f.sender.ningId,_2f.timestamp,_.privateMessageHistory)){
_2b.unshift(_2f);
}
}
_.privateMessageHistory=_.privateMessageHistory.concat(_2b);
_1.addMessages(_2b,true,false);
_.setPrivateRoomStates(_.model.getPrivateRooms(),null);
x$.each(_1.privateRooms,function(_30,_31){
if(!_2d[_30]){
_31.clearMessages();
}
});
};
_.getLoginDataIfFresh=function(){
var _32=_.model.getLoginData();
if(!_32){
return null;
}
if(!_.presenceService.isUserConsideredAlive()){
return null;
}
var _33=(new Date().getTime()-_32.timestamp)/1000;
if(_32.sessionTTL-_33<=_.loginService.SESSION_REFRESH_TIME_IN_ADVANCE){
return null;
}
if(_32.userName!=_.model.user.getName()||_32.userThumbnailUrl!=_.model.user.getAvatarUrl()||_32.userIsAdmin!=_.model.user.isAdmin()){
return null;
}
return _32;
};
_1.showRoomFullDialog=function(){
xg.shared.util.alert({"title":xg.chat.nls.text("chatIsFullTitle"),"bodyHtml":xg.chat.nls.html("chatIsFull",xg.qh(ning.CurrentApp.name))});
};
_.onLoginSuccessAfterPageJustLoaded=function(_34){
_.onLoginSuccess(_34,true);
};
_.onLoginSuccess=function(_35,_36){
_.model.setCachedOnlineStatus(true);
if(_35.domain){
_.model.chatServerDomain=_35.domain;
}
_.model.roomId=_35.roomId;
_.model.token=_35.token;
_.model.user=xg.chat.models.User().initialize(_35.userId,_35.userName,_35.userThumbnailUrl,_35.userIsAdmin);
_.model.maxUserCount=_35.maxUserCount;
_.model.layout.onLoginSuccess();
try{
_.loadPublicMessagesFromLocalStorage();
_.privateMessageHistory=_.model.getPrivateMessageHistory();
}
catch(error){
_.publicMessageHistory=[];
_.privateMessageHistory=[];
}
_1.mainRoom.getContainer().show();
var _37=_a.data("openRoom");
_.setPrivateRoomStates(_.model.getPrivateRooms(),_37);
if(_.model.isMainRoomOpen()){
_1.mainRoom.open();
}
_.timestampRooms();
_.model.userList.setUserCount(_35.count);
if(x$.browser.msie&&x$.browser.version.match(/^9\b/)){
setTimeout(function(){
_.messageService.startPolling(_36);
},500);
}else{
_.messageService.startPolling(_36);
}
var now=new Date().getTime();
if(!_35.timestamp){
_35.timestamp=now;
}
var _39=(now-_35.timestamp)/1000;
_.loginService.createRefreshTimer(_35.sessionTTL-_39);
_.updateRoomsTimerId=setTimeout(_1.saveRoomStates,2*60*1000);
_.model.setState(_.ONLINE_STATE);
_.model.setLoginData(_35);
};
_.setPrivateRoomStates=function(_3a,_3b){
var _3c=x$.map(_3a,function(_3d){
return _3d.user.ningId;
});
_.roomStateSavingEnabled=false;
x$.each(_1.privateRooms,function(_3e,_3f){
if(x$.inArray(_3e,_3c)===-1){
_1.closePrivateRoom(_3e,false);
}
});
for(var i=0;i<_3a.length;i++){
_1.addPrivateRoom(xg.chat.models.User().initializeFromServerObject(_3a[i].user),false,false,_3a[i].selectedHeight);
var _41=_1.privateRooms[_3a[i].user.ningId];
if(_3a[i].expanded||_3b===_3a[i].user.ningId){
_41.open();
}else{
_.model.layout.minimizeRoom(_41);
}
}
_.roomStateSavingEnabled=true;
};
_.loadPublicMessagesFromLocalStorage=function(){
_.publicMessageHistory=_.model.getPublicMessageHistory();
_1.addMessages(_.publicMessageHistory,true,false);
};
_.timestampRooms=function(){
var _42=_.model.getPrivateRooms();
for(var i=_42.length;i;i-=1){
_1.privateRooms[_42[i-1].user.ningId].insertTimestamp();
}
_1.mainRoom.insertTimestamp();
};
_.onLoginFailure=function(_44){
if("roomFull"==_44.result){
_.model.maxUserCount=_44.maxUserCount;
_.model.setState(_.ROOM_FULL_STATE);
xn.track.event("ChatEvent",{"type":"ROOM_FULL"});
}else{
if("banned"==_44.result){
xg.shared.EventRegistry.fire("xg.chat.suspensionDetected",_44.remainingBanTime);
}else{
_.model.setState(_.OFFLINE_STATE);
}
}
};
_.reconnectAfterSuspensionExpirationTime=function(){
setTimeout(_1.toggleOnlineStatus,Math.max(0,_6+_.localStorage.get("suspensionExpirationTime")-Date.now()));
};
_.onLoginFailureWithLightbox=function(_45){
if("roomFull"==_45.result){
_1.showRoomFullDialog();
}
_.onLoginFailure(_45);
};
_1.toggleOnlineStatus=function(){
var _46=!_.model.getState().isOnline();
if(_46){
_.model.setState(_.CONNECTING_STATE);
_.loginService.logIntoChat(function(_47){
_.onLoginSuccess(_47);
},_.onLoginFailureWithLightbox);
}else{
_.model.setState(_.OFFLINE_STATE);
_.model.setCachedOnlineStatus(false);
var _48=Math.max(0,_.model.userList.getUserCount()-1);
_.model.userList.setUserCount(_48);
}
};
_.disable=function(){
_1.mainRoom.clearMessages();
_1.mainRoom.getContainer().hide();
for(var i in _1.privateRooms){
if(_1.privateRooms.hasOwnProperty(i)){
_1.closePrivateRoom(i,false);
}
}
_.model.userList.clearUsers();
_1.userListView.contract(false);
_.loginService.disconnect();
_.presenceService.disconnect();
_.messageService.disconnect();
_.model.userList.setHash(0);
clearInterval(_.updateRoomsTimerId);
_.updateRoomsTimerId=-1;
};
_1.sendMessage=function(_4a,_4b,_4c){
if(_4c==null){
if(_4b==null){
_4c=_.messageService.MESSAGE_TYPE_PUBLIC_MESSAGE;
}else{
_4c=_.messageService.MESSAGE_TYPE_PRIVATE_MESSAGE;
}
}
_.messageService.publish(_4c,_4a,_4b,function(_4d){
if(_4b!=null){
_1.addMessages([{sender:_.model.user,message:_4a,timestamp:_4d.date,targetRoomId:_4b}],false,false);
_.localStorage.getUpdater().propagateChangesToOtherClients();
}
});
};
_1.sendDeleteMessage=function(_4e,_4f){
_.messageService.deleteMessage(_4e,_4f);
};
_1.clearPublicMessageHistory=function(){
_1.mainRoom.clearMessages();
_.publicMessageHistory=[];
_.model.setPublicMessageHistory(_.publicMessageHistory);
};
_1.removeOldMessagesFromHistory=function(_50){
var _51=[];
for(var i=0;i<_.publicMessageHistory.length;i++){
var _53=_.publicMessageHistory[i];
if(_53.timestamp>_50){
_51.push(_53);
}
}
if(_51.length!=_.publicMessageHistory.length){
_.publicMessageHistory=_51;
_1.mainRoom.clearOldMessages(_50);
_.model.setPublicMessageHistory(_.publicMessageHistory);
}
};
_1.deleteMessage=function(_54,_55){
_1.mainRoom.deleteMessage(_54,_55);
for(var i=0;i<_.publicMessageHistory.length;i++){
var _57=_.publicMessageHistory[i];
if(_57.sender.ningId==_54&&_57.timestamp==_55){
_.publicMessageHistory.splice(i,1);
_.model.setPublicMessageHistory(_.publicMessageHistory);
return;
}
}
};
_1.getPrivateRoomsSortedByActivity=function(){
var _58=[];
x$.each(_1.privateRooms,function(id,_5a){
if(_5a){
_58.push(_5a);
}
});
_58.sort(function(a,b){
if(b.isSelected()){
return -1;
}
if(a.isSelected()){
return 1;
}
if(!a.isConnected()){
return -1;
}
if(!b.isConnected()){
return 1;
}
if(!a.isOpen()&&b.isOpen()){
return -1;
}
if(a.isOpen()&&!b.isOpen()){
return 1;
}
return a.getLastActivityTime()-b.getLastActivityTime();
});
return _58;
};
_1.addPrivateRoom=function(_5d,_5e,_5f,_60){
var id=_5d.getId();
if(id==_.model.user.getId()){
return;
}
if(!_1.privateRooms[id]){
$newRoom=x$("#privateMessageTemplate",_a).clone();
$newRoom.attr("id","Room_"+id);
$newRoom.data("user",_5d.getServerObject());
_a.append($newRoom);
_1.privateRooms[id]=xg.chat.Room($newRoom,_5d,_1,_.nameUniquifier,_.model,_a.data("pageGenerationTime"),_.localStorage,_.flasher,_.messageService);
_1.privateRooms[id].initialize(_60);
var _62=[];
for(var i=0;i<_.privateMessageHistory.length;i++){
var _64=_.privateMessageHistory[i];
if(_64.targetRoomId==id){
_62.push(_64);
}
}
_1.addMessages(_62,true,false);
_1.saveRoomStates();
xg.shared.EventRegistry.fire("xg.chat.Controller.privateRoomAdded");
}
if(_5e){
_1.privateRooms[id].open();
}
if(_5f){
_1.privateRooms[id].focus();
}
_.model.layout.closePrivateRoomIfTooMany();
_1.privateRooms[id].insertTimestamp();
};
_1.closePrivateRoom=function(id,_66){
if(_1.privateRooms[id]){
x$("#Room_"+id,_a).remove();
delete _1.privateRooms[id];
if(_66){
_1.saveRoomStates();
}
xg.shared.EventRegistry.fire("xg.chat.Controller.privateRoomRemoved",id);
}
};
_1.saveRoomStates=function(){
if(!_.roomStateSavingEnabled){
return;
}
if(_.updateRoomsTimerId<0){
return;
}
clearTimeout(_.updateRoomsTimerId);
_.model.layout.saveRoomStates();
var _67=[];
var _68=x$(".xg_privateChat",_a);
for(var i=0;i<_68.length;i++){
var _6a=x$(_68[i]).data("user");
if(_6a==null){
continue;
}
var _6b=_1.privateRooms[_6a.ningId];
_67.push({user:_6a,selectedHeight:_6b.getSelectedHeight(),expanded:_6b.isOpen()});
}
_.model.setPrivateRooms(_67);
_.updateRoomsTimerId=setTimeout(_1.saveRoomStates,2*60*1000);
};
_1.addMessages=function(_6c,_6d,_6e){
var _6f=[];
var _70=function(_71,_72,_73,_74){
if(x$.inArray(_71,_6f)===-1){
_71.beforeAddingMessages();
_6f.push(_71);
}
_71.addMessage(_72,_73,_74,_6d);
};
var _75=false;
var _76=false;
var _77=false;
var _78=false;
x$.each(_6c,function(i,_7a){
var _7b=xg.chat.models.User().getNormalizedUserObject(_7a.sender);
var _7c=_.model.isUserIgnored(_7b.getId())&&!_7b.isAdmin();
var _7d=_7a.message;
var _7e=_7a.timestamp;
var _7f=_7a.targetRoomId;
var _80=_7f?_.privateMessageHistory:_.publicMessageHistory;
var _81=_7f?_3:_4;
if(!_7c&&!_6d&&_7f&&!_1.privateRooms[_7f]){
_1.addPrivateRoom(_7b,_.model.layout.isAutoOpeningRooms());
_75=true;
}
var _82=_7f?_1.privateRooms[_7f]:_1.mainRoom;
if(!_7f){
var age=new Date().getTime()-_7e;
if(age>_.model.NETWORK_CHAT_MAX_MESSAGE_AGE){
return;
}
}
if(_6d){
if(!_82){
return;
}
_70(_82,_7b,_7d,_7e);
return;
}
if(!_.isMessageNewerThanHistory(_7b.getId(),_7e,_80)){
return;
}
if(_7c){
return;
}
_70(_82,_7b,_7d,_7e);
_80.push({sender:_7b.getServerObject(),message:_7d,timestamp:_7e,targetRoomId:_7f});
while(_80.length>_81){
_80.shift();
}
if(_7f){
_77=true;
}else{
_78=true;
}
if(_7b.getId()!=_.model.user.getId()&&!_6e){
_76=true;
}
});
x$.each(_6f,function(i,_85){
_85.afterAddingMessages(_6d);
});
if(_77){
_.model.setPrivateMessageHistory(_.privateMessageHistory);
}
if(_78){
_.model.setPublicMessageHistory(_.publicMessageHistory);
}
if(_.soundLock.isSoundEnabled()){
if(_75){
_.initialSound.play();
}else{
if(_76){
_.otherSound.play();
}
}
}
};
_1.clearPrivateRoomHistory=function(_86){
_1.privateRooms[_86].clearMessages();
var _87=[];
for(var i=0;i<_.privateMessageHistory.length;i++){
var _89=_.privateMessageHistory[i];
if(_89.targetRoomId!==_86){
_87.push(_89);
}
}
_.privateMessageHistory=_87;
_.model.setPrivateMessageHistory(_87,true);
};
_.isMessageNewerThanHistory=function(_8a,_8b,_8c){
for(var i=_8c.length-1;i>=0;i--){
var _8e=_8c[i];
if(_8e.timestamp!=_8b){
return _8e.timestamp<_8b;
}
if(_8e.sender.ningId==_8a){
return false;
}
}
return true;
};
_1.navigateToProfile=function(_8f){
if(_.model.isPopoutChat){
window.open("/xn/detail/u_"+_8f,"_blank","resizable=yes,height="+_9+",width="+_8);
}else{
window.open("/xn/detail/u_"+_8f,"_blank");
}
};
_1.showBanDialog=function(_90,_91){
var _92={fifteenMinutes:900,oneHour:3600,twoHours:7200,fourHours:14400,twentyFourHours:86400};
var _93="<select>"+x$.map(_92,function(_94,_95){
return "<option value=\""+_94+"\">"+xg.chat.nls.html(_95)+"</option>";
})+"</select>";
var _96="<p>"+xg.chat.nls.html("chooseLengthOfSuspension")+"</p>";
_96+="<p>"+xg.chat.nls.html("suspensionLength")+" "+_93+"</p>";
var _97=xg.shared.util.confirm({title:xg.chat.nls.text("suspendFromChat"),bodyHtml:_96,okButtonText:xg.chat.nls.text("suspend"),wideDisplay:true,onOk:function(){
var _98=parseInt(x$("select",_97).val(),10);
_.presenceService.ban(_90,_98,function(_99){
_.presenceService.startUpdatingPresence();
});
xn.track.event("ChatEvent",{"type":"USER_SUSPENDED"});
if(_91){
_91();
}
}});
};
_1.ignoreUser=function(id){
_.presenceService.ignore(id,_.showIgnoreLimitDialog);
_.model.ignoredMembers[id]=true;
xg.shared.EventRegistry.fire("xg.chat.ignoresUpdated",{id:id});
_.localStorage.set("ignoreList",_.model.ignoredMembers,true);
};
_1.stopIgnoringUser=function(id){
_.presenceService.stopIgnoring(id);
delete _.model.ignoredMembers[id];
xg.shared.EventRegistry.fire("xg.chat.ignoresUpdated",{id:id});
_.localStorage.set("ignoreList",_.model.ignoredMembers,true);
};
_.showIgnoreLimitDialog=function(_9c){
if(_9c.limit){
var _9d=xg.chat.nls.html("youAreCurrentlyIgnoringMaxMembers",_9c.limit);
xg.shared.util.alert({title:xg.chat.nls.html("ignoreLimitReached"),bodyHtml:_9d,wideDisplay:true});
}
};
return _1;
};
}
