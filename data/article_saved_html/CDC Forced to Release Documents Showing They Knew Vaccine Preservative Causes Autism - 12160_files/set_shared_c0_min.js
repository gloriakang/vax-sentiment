if(!dojo.hostenv.findModule("xg.index.actionicons",false)){
dojo.provide("xg.index.actionicons");
dojo.provide("xg.index.actionicons.PromotionLink");
dojo.widget.defineWidget("xg.index.actionicons.PromotionLink",dojo.widget.HtmlWidget,{_action:"<required>",_id:"<required>",_dialogClass:"dialog",_type:"item",_afterAction:"",_url:"",_xgSourceParam:undefined,fillInTemplate:function(_1,_2){
this.link=this.getFragNodeRef(_2);
if(this.link.promotionlink){
return;
}
this.link.promotionlink=true;
dojo.event.connect(this.link,"onclick",dojo.lang.hitch(this,function(_3){
dojo.event.browser.stopEvent(_3);
this.link.className="desc working disabled";
if(this._url==""){
this.url=xg.global.requestBase+"/main/promotion/"+this._action+"?src=link&xn_out=json";
}else{
this.url=this._url+"/"+this._action+"/?xn_out=json";
}
if("undefined"!=typeof this._xgSourceParam){
this.url=this.url+"&xg_source="+this._xgSourceParam;
}
dojo.io.bind({"url":this.url,"method":"post","mimetype":"text/json","content":{"id":this._id,"type":this._type},preventCache:true,encoding:"utf-8","load":dojo.lang.hitch(this,function(_4,_5,_6){
dojo.lfx.html.highlight(this.link,"#ffee7d",1000,null,dojo.lang.hitch(this,function(){
this.link.style.backgroundImage=this.link.style.backgroundColor="";
})).play();
this._action=(this._action=="promote")?"remove":"promote";
if(_5.linkText&&_5.linkClass){
dojo.html.setClass(this.link,"xg_sprite "+_5.linkClass);
this.link.title=_5.linkText;
this.link.innerHTML=_5.linkText;
}
if(this._afterAction.length){
eval(this._afterAction);
}
})});
}));
}});
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
if(!dojo.hostenv.findModule("xg.forum.topic.CommentEditor",false)){
dojo.provide("xg.forum.topic.CommentEditor");
xg.forum.topic.CommentEditor=function(_1){
var _2={};
var _={};
var _4=false;
var _5=x$("#link_"+_1.attr("id"));
var _6=_1.next("form");
var _7=_1.attr("_value");
var _8=true;
var _9;
_.initialize=function(){
_.setDisplayHtml(_7);
_5.click(function(_a){
_a.preventDefault();
_.showForm();
});
};
_.showForm=function(){
if(!_8){
return;
}
_5.hide();
_1.hide();
_6.show();
_.initializeIfNecessary();
_9.val(_7);
_9.focus();
xg.index.util.ScrollIntoView.scrollIntoView(_6[0]);
};
_.hideForm=function(){
_6.hide();
_1.show();
_5.show();
};
_.initializeIfNecessary=function(){
if(_4){
return;
}
_4=true;
_6.find(".cancellink").click(function(_b){
_b.preventDefault();
_.setDisplayHtml(_7);
_.clearErrors();
_.hideForm();
});
_9=xg.shared.editors.Editor.get(_6.find("textarea"));
_9.initializeAfterPageLoad();
_9.setMaxLength(_6.find("textarea").attr("_maxlength"));
_6.submit(function(_c){
_c.preventDefault();
if(!_8){
return;
}
var _d=_.validate();
_.clearErrors();
if(_d){
_6.prepend("<div class=\"dy-error-msg\">"+_d+"</div>");
_6.addClass("error");
_9.updateBackgroundColor();
return;
}
_8=false;
_1.html("<span class=\"instruction\">"+xg.shared.nls.html("saving")+"</span>");
_.hideForm();
xg.post(_1.attr("_setValueUrl"),{value:_9.valWithLineBreakAdjustments()},function(_e,_f){
_f=dj_eval(_f);
_.setDisplayHtml(_f.html);
_8=true;
});
});
};
_.clearErrors=function(){
_6.find(".dy-error-msg").remove();
_6.removeClass("error");
_9.updateBackgroundColor();
};
_.setDisplayHtml=function(_10){
_7=_10;
_10=x$.trim(_10);
_1.html(_10);
_1.find("a").click(function(_11){
_11.stopPropagation();
return true;
});
};
_.validate=function(){
var _12=dojo.string.trim(_9.valWithLineBreakAdjustments());
var _13=_6.find("textarea").attr("_maxlength");
if(_12.length>_13){
return xg.forum.nls.html("numberOfCharactersExceedsMaximum",_12.length,_13);
}
if(_12.length==0){
var _14=_1.attr("_emptyDescriptionErrorMessage");
if(!_14){
_14=xg.shared.nls.html("pleaseEnterAComment");
}
return dojo.string.escape("html",_14);
}
return null;
};
_.initialize();
return _2;
};
}
if(!dojo.hostenv.findModule("xg.shared.comment",false)){
dojo.provide("xg.shared.comment");
xg.shared.comment={numComments:null,commentContainer:null,initialize:function(){
var _1;
dojo.lang.forEach(xg.$$("div"),function(_2){
if(_2.id=="comments"){
_1=_2;
}
});
if(_1===undefined){
return;
}
this.initializeCommentEdit();
this.commentContainer=_1;
this.numComments=parseInt(this.commentContainer.getAttribute("_numComments"),10);
dojo.lang.forEach(dojo.html.getElementsByClass("comment",this.commentContainer,"dl"),dojo.lang.hitch(this,this.initializeDl));
var _3=this.commentContainer.getAttribute("_scrollTo");
if(_3){
var _4=document.getElementById(_3);
if(_4){
if(_4.scrollIntoView){
_4.scrollIntoView(true);
}else{
xg.index.util.ScrollIntoView.scrollIntoView(_4);
}
}
}
},initializeCommentEdit:function(){
x$(".xj_comment_editor").each(function(i,_6){
var _7=x$(_6);
if(!_7.data("xj_initialized")){
xg.forum.topic.CommentEditor(_7);
_7.data("xj_initialized",true);
}
});
},initializeDl:function(dl){
dojo.lang.forEach(dojo.html.getElementsByClass("delete_link",dl,"a"),dojo.lang.hitch(this,function(_9){
var _a=false;
dojo.event.connect(_9,"onclick",dojo.lang.hitch(this,function(_b){
dojo.event.browser.stopEvent(_b);
if(_a){
return;
}
_a=true;
dojo.io.bind({url:_9.getAttribute("_url"),method:"post",mimetype:"text/javascript",preventCache:true,encoding:"utf-8",content:{"id":dl.getAttribute("_id")},load:dojo.lang.hitch(this,function(_c,_d,_e){
if(!_d.success){
return;
}
dojo.lfx.html.fadeOut(dl,500,null,dojo.lang.hitch(this,function(){
var _f=dojo.html.hasClass(dl,"last-child")?dojo.dom.prevElement(dl,"dl"):null;
dl.parentNode.removeChild(dl);
if(_f){
dojo.html.addClass(_f,"last-child");
}
if(this.commentContainer.getElementsByTagName("dl").length==0){
var url=window.location.href;
var _11=url.split("#",2);
var _12=_11[1]?"#"+_11[1]:"";
url=_11[0];
var _13="page";
var _14=xg.shared.util.getParameter(url,"page");
if(!_14){
_14=xg.shared.util.getParameter(url,"commentPage");
_13="commentPage";
}
if(_14&&(_14>0)){
_14=parseInt(_14)-1;
if(_14>=0){
url=xg.shared.util.removeParameter(url,_13);
url=xg.shared.util.addParameter(url,_13,_14);
url+=_12;
window.location.href=url;
}
}else{
window.location.reload();
}
}
})).play();
})});
}));
}));
dojo.lang.forEach(dojo.html.getElementsByClass("approve_link",dl,"a"),dojo.lang.hitch(this,function(_15){
var _16=false;
dojo.event.connect(_15,"onclick",dojo.lang.hitch(this,function(_17){
dojo.event.browser.stopEvent(_17);
if(_16){
return;
}
_16=true;
dojo.io.bind({url:_15.getAttribute("_url"),method:"post",mimetype:"text/javascript",preventCache:true,encoding:"utf-8",content:{"id":dl.getAttribute("_id")},load:dojo.lang.hitch(this,function(_18,_19,_1a){
if(!_19.success){
return;
}
var _1b=dojo.dom.getAncestorsByTag(_15,"div",true);
dojo.lfx.html.fadeOut(_1b,500,null,dojo.lang.hitch(this,function(){
_1b.parentNode.removeChild(_1b);
})).play();
})});
}));
}));
},addDl:function(dl,_1d){
dojo.style.setOpacity(dl,0);
dojo.html.show(this.commentContainer);
if(_1d){
x$(this.commentContainer).prepend(dl);
}else{
this.commentContainer.appendChild(dl);
}
this.initializeCommentEdit();
this.initializeDl(dl);
dojo.lfx.fadeIn(dl,500,dojo.lfx.easeIn).play();
dojo.style.show(dojo.html.getElementsByClass("xg_module_foot",this.commentContainer.parentNode,"div")[0]);
this.styleComments();
},styleComments:function(){
dojo.lang.forEach(this.commentContainer.getElementsByTagName("dl"),dojo.lang.hitch(this,function(_1e){
dojo.html.removeClass(_1e,"last-child");
}));
var _1f=x$("dl:last",this.commentContainer);
if(_1f){
dojo.html.addClass(_1f,"last-child");
}
}};
xg.addOnRequire(function(){
xg.shared.comment.initialize();
});
}
if(!dojo.hostenv.findModule("xg.shared.FollowLink",false)){
dojo.provide("xg.shared.FollowLink");
dojo.widget.defineWidget("xg.shared.FollowLink",dojo.widget.HtmlWidget,{_addUrl:"",_removeUrl:"",_addLinkText:"",_removeLinkText:"",_addDescription:"",_removeDescription:"",_isFollowed:"",_joinPromptText:"",_signUpUrl:"",_isPending:false,fillInTemplate:function(_1,_2){
this._addLinkText=this._addLinkText?this._addLinkText:xg.shared.nls.text("follow");
this._removeLinkText=this._removeLinkText?this._removeLinkText:xg.shared.nls.text("stopFollowing");
this.a=this.getFragNodeRef(_2);
this.span=document.createElement("span");
this.span.className="xj_follow_description";
dojo.dom.insertAfter(this.span,this.a);
this.updateText(this.a);
dojo.event.connect(this.a,"onclick",dojo.lang.hitch(this,function(_3){
dojo.event.browser.stopEvent(_3);
if(this._joinPromptText.length||this._isPending){
xg.shared.util.promptToJoin(this._joinPromptText,this._isPending,dojo.lang.hitch(this,function(){
window.location=this._signUpUrl;
}));
}else{
this.a.className="desc working disabled";
if(this.posting){
return;
}
this.post();
}
}));
},post:function(){
this.posting=true;
if(this._isFollowed==0){
url=this._addUrl;
}else{
url=this._removeUrl;
}
dojo.io.bind({url:url,method:"post",encoding:"utf-8",preventCache:true,load:dojo.lang.hitch(this,function(_4,_5,_6){
this._isFollowed=this._isFollowed==0?1:0;
this.updateText(this.a);
dojo.lfx.html.highlight(this.a,"#ffee7d",1000).play();
this.posting=false;
})});
},updateText:function(){
if(this._isFollowed==0){
this.a.className="xg_sprite xg_sprite-follow-add";
this.a.innerHTML=dojo.string.escape("html",this._addLinkText);
if(this._addDescription.length){
dojo.dom.nextElement(this.a,"span").innerHTML=" &ndash; "+dojo.string.escape("html",this._addDescription);
}
}else{
this.a.className="xg_sprite xg_sprite-follow-remove";
this.a.innerHTML=dojo.string.escape("html",this._removeLinkText);
if(this._removeDescription.length){
dojo.dom.nextElement(this.a,"span").innerHTML=" &ndash; "+dojo.string.escape("html",this._removeDescription);
}
}
},showFollowing:function(){
this._isFollowed=1;
this.updateText();
},showNotFollowing:function(){
this._isFollowed=0;
this.updateText();
}});
}
if(!dojo.hostenv.findModule("xg.shared.FavoriteLink",false)){
dojo.provide("xg.shared.FavoriteLink");
dojo.widget.defineWidget("xg.shared.FavoriteLink",dojo.widget.HtmlWidget,{_addurl:"",_removeUrl:"",_hasFavorite:"",fillInTemplate:function(_1,_2){
var a=this.getFragNodeRef(_2);
if(this._hasFavorite==0){
a.className="xg_sprite xg_sprite-favorite-add";
a.innerHTML=xg.shared.nls.text("addToFavorites");
}else{
a.className="xg_sprite xg_sprite-favorite-remove";
a.innerHTML=xg.shared.nls.text("removeFromFavorites");
}
dojo.event.connect(a,"onclick",dojo.lang.hitch(this,function(_4){
dojo.event.browser.stopEvent(_4);
a.className="desc working disabled";
if(this.posting){
return;
}
this.post(a);
}));
},post:function(a){
this.posting=true;
if(this._hasFavorite==0){
url=this._addurl;
}else{
url=this._removeUrl;
}
dojo.io.bind({url:url,method:"post",encoding:"utf-8",mimetype:"text/javascript",preventCache:true,load:dojo.lang.hitch(this,function(_6,_7,_8){
if(this._hasFavorite==0){
a.className="xg_sprite xg_sprite-favorite-remove";
a.innerHTML=xg.shared.nls.text("removeFromFavorites");
this._hasFavorite=1;
}else{
a.className="xg_sprite xg_sprite-favorite-add";
a.innerHTML=xg.shared.nls.text("addToFavorites");
this._hasFavorite=0;
}
dojo.lfx.html.highlight(a,"#ffee7d",1000).play();
this.posting=false;
})});
}});
}
if(!dojo.hostenv.findModule("xg.shared.TagLink",false)){
dojo.provide("xg.shared.TagLink");
dojo.widget.defineWidget("xg.shared.TagLink",dojo.widget.HtmlWidget,{_actionUrl:"<required>",_tags:"",_allowEmptySubmission:true,_emptySubmissionMessage:"",_maxlength:0,_updateId:"tagsList",_addKey:"addTags",_editKey:"editYourTags",_popOver:false,killTagBox:function(_1){
dojo.event.browser.stopEvent(_1);
dojo.html.hide(formblock);
},fillInTemplate:function(_2,_3){
var li=this.getFragNodeRef(_3);
var _5=this._maxlength?"maxlength=\""+this._maxlength+"\"":"";
var _6=dojo.html.createNodesFromText(dojo.string.trim("         <div class=\"desc\" style=\"display: none;\">             <form>                 <input class=\"textfield\" type=\"text\" style=\"width: 95%;\" "+_5+" />                 <div class=\"align-right pad5\">                     <input class=\"button small\" type=\"submit\" value=\""+xg.shared.nls.html("save")+"\"/>                     <a id=\"cancelTags\" class=\"action-secondary small\" href=\"#\" >"+xg.shared.nls.html("cancel")+"</a>                 </div>             </form>         </div>"))[0];
if(this._popOver){
var _6=dojo.html.createNodesFromText(dojo.string.trim("             <small class=\"showembed\" style=\"display:none;\">                 <form>                     <input class=\"textfield\" type=\"text\" style=\"width: 160px;\" "+_5+" />                     <div class=\"align-right pad5\">                         <input class=\"button small\" type=\"submit\" value=\""+xg.shared.nls.html("save")+"\"/>                         <a id=\"cancelTags\" class=\"action-secondary small\" href=\"#\" >"+xg.shared.nls.html("cancel")+"</a>                     </div>                 </form>             </small>"))[0];
}
dojo.html.insertAfter(_6,li);
var _7=li.getElementsByTagName("a")[0];
dojo.event.connect(_7,"onclick",dojo.lang.hitch(this,function(_8){
dojo.event.browser.stopEvent(_8);
if(dojo.style.isShowing(_6)){
dojo.html.hide(_6);
}else{
dojo.html.show(_6);
}
}));
x$("#cancelTags",_6).click(dojo.lang.hitch(this,function(_9){
dojo.event.browser.stopEvent(_9);
dojo.html.hide(_6);
}));
var _a=_6.getElementsByTagName("input");
var _b=_a[0];
_b.value=this._tags;
dojo.event.connect(_6.getElementsByTagName("form")[0],"onsubmit",dojo.lang.hitch(this,function(_c){
dojo.event.browser.stopEvent(_c);
if(this._allowEmptySubmission==false&&_b.value.length==0){
xg.shared.util.alert(this._emptySubmissionMessage);
}else{
_7.className="desc working";
dojo.io.bind({url:this._actionUrl,method:"post",content:{tags:_b.value},encoding:"utf-8",preventCache:true,mimetype:"text/javascript",load:dojo.lang.hitch(this,function(_d,_e,_f){
if(_b.value.length){
_7.className="xg_sprite xg_sprite-edit";
_7.innerHTML=xg.shared.nls.html(this._editKey);
dojo.html.hide(_6);
}else{
_7.className="xg_sprite xg_sprite-add";
_7.innerHTML=xg.shared.nls.html(this._addKey);
dojo.html.hide(_6);
}
if("undefined"!=typeof _e["html"]){
var _10=dojo.byId(this._updateId);
if(_10){
_10.innerHTML=_e.html;
if(_e.html&&(_e.html!="")){
x$(_10).show();
xg.shared.util.parseWidgets(_10);
}else{
x$(_10).hide();
}
}
}
})});
}
}));
}});
}
if(!dojo.hostenv.findModule("xg.shared.StarRater",false)){
dojo.provide("xg.shared.StarRater");
xg.shared.StarRater=function(_1){
var _={};
var _3={};
var _4=0;
var _5="";
var _6=false;
var _7=false;
var _8="";
_3.initialize=function(){
_4=_1.attr("_rating");
_5=_1.attr("_setRatingUrl");
_7=(_1.attr("_isPending")=="true");
_6=(_1.attr("_isSignedIn")=="true");
_8=_1.attr("_setRatingId");
if(_6){
_1.find("a").click(function(e){
e.preventDefault();
if(_7){
xg.shared.util.promptIsPending();
}else{
_.updateRating(x$(this).attr("class").charAt(5));
}
});
_1.bind("mouseenter",function(){
_1.find(".current").hide();
});
_1.bind("mouseleave",function(){
_1.find(".current").show();
});
}
};
_.updateRating=function(_a){
_1.find(".current").removeClass("public").addClass("mine");
_1.find(".current").css("width",13*_a+"px");
if(_5){
xg.post(_5,{rating:_a});
}else{
if(_8){
$("#"+_8).value(_4);
}
}
};
_3.initialize();
};
xg.addOnRequire(function(){
x$(".star-rater").each(function(){
xg.shared.StarRater(x$(this));
});
});
}
if(!dojo.hostenv.findModule("xg.shared.MoreLink",false)){
dojo.provide("xg.shared.MoreLink");
dojo.widget.defineWidget("xg.shared.MoreLink",dojo.widget.HtmlWidget,{fillInTemplate:function(_1,_2){
var _3=this.getFragNodeRef(_2);
dojo.event.connect(_3,"onclick",dojo.lang.hitch(this,function(_4){
dojo.event.browser.stopEvent(_4);
dojo.style.show(dojo.dom.nextElement(_3));
dojo.style.hide(_3);
}));
}});
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
if(!dojo.hostenv.findModule("xg.shared.CommentForm",false)){
dojo.provide("xg.shared.CommentForm");
xg.shared.CommentForm={ajax:null,addAtTop:null,submitting:false,editor:null,captchaSolved:false,initialize:function(){
var _1=dojo.byId("comment_form");
if(!_1){
return;
}
this.editor=xg.shared.editors.Editor.get(x$(_1.comment));
this.editor.setMaxLength(x$(_1.comment).attr("_maxLength"));
var _2=x$("input.xj_submit",_1);
if(_2.length<1){
return;
}
var _3=x$(".xg_recaptcha_container",_1)[0];
if(_3){
var _4=xg.shared.Recaptcha(_3);
_4.setTrackingInfo("blog","comment");
}else{
var _4=null;
}
this.ajax=_1.getAttribute("_ajax")=="true";
this.addAtTop=_1.getAttribute("_addAtTop")=="true";
this.submitting=false;
var _5=dojo.html.createNodesFromText("<img src=\""+xg.shared.util.cdn("/xn_resources/widgets/index/gfx/spinner.gif")+"\" alt=\""+xg.shared.nls.html("loading")+"\" style=\"width:16px; height:16px; margin-right:3px; display: none;\" />")[0];
dojo.dom.insertBefore(_5,dojo.html.getElementsByClass("button",_1)[0]);
dojo.event.connect(_1,"onsubmit",dojo.lang.hitch(this,function(_6){
dojo.event.browser.stopEvent(_6);
if(this.submitting){
return;
}
if(!xg.index.util.FormHelper.runValidation(_1,dojo.lang.hitch(this,this.validate))){
return;
}
if(this.isBlockedFromCreatingComments()){
xg.index.util.FormHelper.showErrorMessages(_1,{error:xg.index.nls.html("softBlockMessagingForComments")});
xg.post("/main/index/logPostAttempt?xn_out=json",null,function(){
});
return;
}
if(_4&&!xg.shared.CommentForm.captchaSolved){
_4.showRecaptchaPopup(this.onVerify);
}else{
this.onVerify();
}
}));
xg.index.util.FormHelper.setTokenData();
},onVerify:function(){
var _7=dojo.byId("comment_form");
if(!_7){
return;
}
this.ajax=_7.getAttribute("_ajax")=="true";
this.addAtTop=_7.getAttribute("_addAtTop")=="true";
this.submitting=false;
if(!this.ajax){
this.editor.adjustLineBreaks();
return _7.submit();
}
this.submitting=true;
var _8=dojo.html.createNodesFromText("<img src=\""+xg.shared.util.cdn("/xn_resources/widgets/index/gfx/spinner.gif")+"\" alt=\""+xg.shared.nls.html("loading")+"\" style=\"width:16px; height:16px; margin-right:3px; display: none;\" />")[0];
dojo.style.show(_8);
dojo.dom.removeNode(dojo.html.getElementsByClass("notification",_7,"div")[0]);
var _9=dojo.byId("recaptcha_challenge_field")!==null?dojo.byId("recaptcha_challenge_field").value:"";
var _a=dojo.byId("recaptcha_response_field")!==null?dojo.byId("recaptcha_response_field").value:"";
var _b=x$("[name=xg_recaptcha_popup_attempt]",_7).length?x$("[name=xg_recaptcha_popup_attempt]",_7).val():"";
var _c=x$(".xj_gnfst").length>0?x$(".xj_gnfst").val():"";
var _d=x$(".xj_gnfstTs").length>0?x$(".xj_gnfstTs").val():"";
var _e=x$(".xj_gnfstId").length>0?x$(".xj_gnfstId").val():"";
var _f={comment:xg.shared.CommentForm.editor.valWithLineBreakAdjustments(),recaptcha_challenge_field:_9,recaptcha_response_field:_a,xg_recaptcha_popup_attempt:_b,gnfst:_c,gnfstTs:_d,gnfstId:_e};
_f=xg.shared.EngagementUtil.addEngagementContextToParams(_f,_7);
dojo.io.bind({url:_7.action+"&xn_out=json",method:"post",preventCache:true,encoding:"utf-8",mimetype:"text/javascript",content:_f,load:dojo.lang.hitch(this,function(_10,_11,_12){
dojo.style.hide(_8);
this.submitting=false;
xg.shared.CommentForm.onSuccess(_11);
})});
},isBlockedFromCreatingComments:function(){
var _13=x$("input#xj_canCreateContent");
if(_13.length>0&&_13.val()!="1"){
return true;
}
return false;
},validate:function(_14){
var _15={};
var _16=x$.trim(this.editor.valWithLineBreakAdjustments());
if(_16.length===0){
_15.comment=xg.shared.nls.html("pleaseEnterAComment");
}
var _17=x$(_14.comment).attr("_maxLength");
if(_16.length>_17){
_15.comment=xg.shared.nls.html("numberOfCharactersExceedsMaximum",_16.length,_17);
}
return _15;
},onSuccess:function(_18){
if(_18.error==true||typeof _18.errorMessages!=="undefined"){
xg.index.util.FormHelper.showErrorMessages(dojo.byId("comment_form"),{error:_18.errorMessages});
return;
}
xg.shared.CommentForm.captchaSolved=true;
if(!_18.html){
return;
}
if(_18.userIsNowFollowing){
dojo.lang.forEach(dojo.widget.manager.getWidgetsByType("FollowLink"),function(_19){
_19.showFollowing();
});
}
var _1a=document.createElement("div");
_1a.innerHTML=_18.html;
var dl=dojo.dom.firstElement(_1a);
var _1c=dojo.byId("comment_form");
this.editor.val("");
if(_18.approved===false){
var _1d=dojo.html.getElementsByClass("notification",_1c,"div")[0];
if(!_1d){
_1d=dojo.html.createNodesFromText("<div class=\"notification\" style=\"margin-bottom:1em\"><p class=\"last-child\">"+xg.shared.nls.html("yourCommentMustBeApproved")+"</p></div>")[0];
dojo.dom.insertAtPosition(_1d,_1c,"first");
}
xg.index.util.ScrollIntoView.scrollIntoView(_1c);
return;
}
xg.shared.comment.addDl(dl,this.addAtTop);
dojo.style.show("xj_comments_footer");
}};
xg.addOnRequire(function(){
xg.shared.CommentForm.initialize();
});
}
if(!dojo.hostenv.findModule("xg.shared.InPlaceEditor",false)){
dojo.provide("xg.shared.InPlaceEditor");
dojo.widget.defineWidget("xg.shared.InPlaceEditor",dojo.widget.HtmlWidget,{_instruction:"<required>",_maxLength:"<required>",_setValueUrl:"<required>",_getValueUrl:"",_value:"",_controlAttributes:"",_endRegexToIgnore:"",_allowEmpty:"",_html:false,_joinPromptText:"",disabled:false,initialized:false,showForm:function(){
this.showingEditor=true;
x$(".inplace_edit_content",this.displayNode).hide();
x$(this.displayNode).removeClass("editable_hover");
x$(this.form).show();
setTimeout(dojo.lang.hitch(this,function(){
this.textControl.value=this._value.replace(this.end,"").replace(/<span><\/span>/gi,"");
if(this.stripTags(this.textControl.value)==this.stripTags(this.instruction())){
this.textControl.value="";
}
if(!this._html){
this.textControl.value=this.stripTags(this.textControl.value);
}else{
this.textControl.value=this.textControl.value.replace(/<br ?.?>\r?\n/gi,"\n");
}
}),0);
this.textControl.focus();
xg.index.util.ScrollIntoView.scrollIntoView(this.form);
},hideForm:function(){
x$(this.form).hide();
x$(".inplace_edit_content",this.displayNode).show();
if(this.editLink){
x$(this.editLink).hide();
}
x$(this.displayNode).hover(function(e){
x$(self.displayNode).toggleClass("editable_hover",e.type==="mouseenter");
});
this.showingEditor=false;
},stripTags:function(x){
return dojo.html.renderedTextContent(dojo.html.createNodesFromText("<div>"+x+"</div>")[0]);
},fillInTemplate:function(_3,_4){
this.showingEditor=false;
this.displayNode=this.getFragNodeRef(_4);
this.displayNode.title=xg.shared.nls.text("clickToEdit");
this.editLink=dojo.byId("link_"+this.displayNode.id);
this._value=dojo.string.trim(this._value?this._value:this.displayNode.innerHTML);
var _5=new RegExp(this._endRegexToIgnore,"i").exec(this._value);
this.end=_5?_5[0]:"";
this.setDisplayHtml(this._value,this._value.length>0);
var _6=this;
x$(this.displayNode).hover(function(e){
if(!_6.showingEditor){
x$(_6.displayNode).toggleClass("editable_hover",e.type==="mouseenter");
}
});
x$(this.displayNode).on("click",function(){
_6.showEditor();
});
if(this.editLink){
x$(this.editLink).on("click",function(_8){
dojo.event.browser.stopEvent(_8);
_6.showEditor();
});
}
},showEditor:function(){
if(this.showingEditor){
return;
}
xg.shared.util.promptToJoin(this._joinPromptText,dojo.lang.hitch(this,function(){
this.initializeIfNecessary();
if(this.editLink){
dojo.html.hide(this.editLink);
}
if(this.disabled){
return;
}
if(!this._getValueUrl){
this.showForm();
}else{
this.disabled=true;
this.displayNode.innerHTML="<span class=\"instruction\">"+xg.shared.nls.html("loading")+"</span>";
dojo.io.bind({url:this._getValueUrl,preventCache:true,encoding:"utf-8",mimetype:"text/javascript",load:dojo.lang.hitch(this,function(_9,_a,_b){
this.setDisplayHtml(_a.html);
this.showForm();
this.disabled=false;
})});
}
}));
},initializeIfNecessary:function(){
if(this.initialized){
return;
}
this.initialized=true;
this.form=x$(dojo.string.trim("                 <form class=\"inplace_edit\" style=\"display:none;\">                     <div class=\"texteditor\">                         <input type=\"text\" "+this._controlAttributes+" maxLength=\""+this._maxLength+"\" />                     </div>                     <p class=\"buttongroup\">                         <input type=\"submit\" class=\"button action-primary submit\" value=\""+xg.shared.nls.html("save")+"\" />                         <a class=\"cancellink action-secondary\" href=\"javascript:void(0)\">"+xg.shared.nls.html("cancel")+"</a>                     </p>                 </form>")).get(0);
x$(this.displayNode).html("<div class=\"inplace_edit_content\">"+x$(this.displayNode).html()+"</div>");
x$(this.displayNode).append(this.form);
this.textControl=x$(".textfield",this.form).get(0);
this.cancelButton=x$(".cancellink",this.form).get(0);
var _c=this;
x$(this.cancelButton).on("click",function(_d){
dojo.event.browser.stopEvent(_d);
_c.hideForm();
});
if(!this._allowEmpty){
x$("input[type=\"text\"]",this.form).on("change keyup cut paste keypress",function(){
var _e=!x$.trim(x$(this).val());
x$(".submit",this.form).prop("disabled",_e).toggleClass("dy-disabled",_e);
});
}
x$(this.form).on("submit",function(_f){
dojo.event.browser.stopEvent(_f);
if(_c.disabled){
return;
}
_c.disabled=true;
_c.displayNode.innerHTML="<span class=\"instruction\">"+xg.shared.nls.html("saving")+"</a>";
_c.hideForm();
var _10=xg.shared.util.parseUrlParameters(_c._setValueUrl);
_10["value"]=_c.textControl.value;
dojo.io.bind({url:_c._setValueUrl,content:_10,method:"post",encoding:"utf-8",preventCache:true,mimetype:"text/javascript",encoding:"utf-8",load:dojo.lang.hitch(_c,function(_11,_12,_13){
_c.setDisplayHtml(_12.html);
_c.disabled=false;
_c._getValueUrl="";
})});
});
},setDisplayHtml:function(_14,_15){
this.showingEditor=false;
this.initialized=false;
this._value=_14;
_14=dojo.string.trim(_14.replace(this.end,""));
if(_14.length==0){
_14=this.instruction();
}
if(!_15){
this.displayNode.innerHTML="<span></span>"+xg.shared.util.nl2br(_14)+this.end;
}
dojo.lang.forEach(this.displayNode.getElementsByTagName("a"),dojo.lang.hitch(this,function(a){
a.onclick=dojo.lang.hitch(this,function(){
this.disabled=true;
window.setTimeout(dojo.lang.hitch(this,function(){
this.disabled=false;
}),1000);
});
}));
},instruction:function(){
if(dojo.string.trim(this._instruction).length>0){
return "<span class=\"instruction\">["+dojo.string.escape("html",this._instruction)+"] </span>";
}else{
return "<span class=\"instruction\"></span>";
}
}});
}
