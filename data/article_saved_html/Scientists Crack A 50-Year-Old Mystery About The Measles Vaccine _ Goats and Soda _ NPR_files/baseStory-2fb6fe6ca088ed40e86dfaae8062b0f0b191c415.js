
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});

/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);


AddNamespace('NPR.responsiveNav');NPR.responsiveNav.trackWidth=0;NPR.responsiveNav.trackWidth=$(window).width();NPR.responsiveNav.offcanvasTimeout=null;$(document).ready(function(){NPR.responsiveNav.initOffcanvasSubnavs=function(){var $body=$('body'),$offcanvasWrap=$('.global-navigation-wrap'),$offcanvas=$('.global-navigation');$body.addClass('has-offcanvas-nav');$('.has-subnav',$offcanvas).click(function(e){e.preventDefault();$parentNavEl=$(this);var classes=$parentNavEl.attr('class').split(" ");var subnavName='';for(var i=0;i<classes.length;i++){if(classes[i]!=='has-subnav'){subnavName=classes[i];break;}}
$offcanvasWrap.animate({scrollTop:0});$offcanvas.css('transform','translateX(-'+$offcanvasWrap.width()+'px)');$('.subnav').removeClass('chosen');$('.subnav-'+subnavName).addClass('chosen');});$('.back-to-top-level',$offcanvas).click(function(e){e.preventDefault();resetOffcanvasSubnavs();});var sizeOffcanvasNavs=function(){var viewportHeight=$(window).height();var topbarHeight=$('#globalheader').outerHeight();$offcanvasWrap.height(viewportHeight-topbarHeight);$offcanvas.width($offcanvasWrap.width()*3);$('.top-level, .subnav',$offcanvas).width($offcanvasWrap.width());};sizeOffcanvasNavs();var resetOffcanvasSubnavs=function(){$offcanvasWrap.animate({scrollTop:0});$offcanvas.css('transform','translateX('+0+'px)');};$(window).on('resize',function(){if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.MEDIUM)===true){resetOffcanvasSubnavs();sizeOffcanvasNavs();}});$(window).on('orientationchange',function(){if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.MEDIUM)===true&&Modernizr.touch){resetOffcanvasSubnavs();sizeOffcanvasNavs();}});};NPR.responsiveNav.removeOffcanvasSystem=function(){$('body').removeClass('has-offcanvas-nav');$('.global-navigation-wrap, .global-navigation, .global-navigation .subnav, .global-navigation .top-level').removeAttr('style');$('.global-navigation .subnav').removeClass('chosen');$('.has-subnav','.global-navigation').off('click');};NPR.responsiveNav.initOffCanvasEvents=function(){var $window=$(window),$html=$('html'),$body=$('body'),$globalNavigationWrap=$('.global-navigation-wrap'),$sidebarButton=$('.sidebar-button'),$wrapper=$('#wrapper');$sidebarButton.on('click',function(e){e.preventDefault();clearTimeout(NPR.responsiveNav.offcanvasTimeout);var justOpened=!$html.hasClass('active-offcanvas');$html.toggleClass('active-offcanvas');if(justOpened){if(!Modernizr.touch){$('body').height($(window).height());}
if(Modernizr.touch){$globalNavigationWrap.css('display','');$('#wrapper').on('touchmove',NPR.responsiveNav.disableTouchMove);}
if($('.global-navigation-three').length!==0){$('.global-navigation-three .has-subnav').removeClass('chosen');$('.global-navigation-three .subnav').removeClass('chosen').fadeOut();}
if($('body').hasClass('tmplHomePage')){$('.global-navigation-four .has-subnav').removeClass('chosen');$('.global-navigation-four .subnav').removeClass('chosen').slideUp();}
$('.social, #ad-88-wrap').fadeOut(500);if($body.hasClass('tmplHomePage')){$window.scrollTop(0);}
if($body.hasClass('tmplMusicHomepage')){$('.aux','#globalheader').fadeOut(500);}
$globalNavigationWrap.scrollTop(0);}else{if(!Modernizr.touch){$('body').removeAttr('style');}
if(Modernizr.touch){$('#wrapper').off('touchmove',NPR.responsiveNav.disableTouchMove);}
$('.social, #ad-88-wrap').fadeIn(500);if($body.hasClass('tmplMusicHomepage')){$('.aux','#globalheader').fadeIn(500);}
if(Modernizr.touch){NPR.responsiveNav.offcanvasTimeout=setTimeout(function(){$globalNavigationWrap.hide();},500);}}
if(Modernizr.touch){setTimeout(function(){$('html, body').css('overflow','hidden');setTimeout(function(){$('html, body').css('overflow','');},500);},500);}
e.stopPropagation();});$window.resize(function(){if($window.width()!==NPR.responsiveNav.trackWidth){if($html.hasClass('no-touch')){$html.removeClass('active-offcanvas');}
NPR.responsiveNav.trackWidth=$window.width();}});};NPR.responsiveNav.disableTouchMove=function(event){event.preventDefault();}
NPR.responsiveNav.initHeaderTopbarSubnavs=function(){$('body').addClass('has-topbar-nav');$('.global-navigation .has-subnav').on('click',function(e){e.preventDefault();var $parentNavEl=$(this);var classes=$parentNavEl.attr('class').split(" ");var subnavName='';for(var i=0;i<classes.length;i++){if(classes[i]!=='has-subnav'){subnavName=classes[i];break;}}
var $chosenSubnav=$('.global-navigation .subnav-'+subnavName);if(!$(this).hasClass('user-account')&&!$(this).hasClass('programs-podcasts')&&!$(this).hasClass('find-books')){var linkPaddingOffset=0;if($(this).children('a').length!==0){linkPaddingOffset=parseInt($(this).children('a').css('paddingLeft'));}
$(this).data('posLeft',$(this).position().left+linkPaddingOffset);}
if($('body').hasClass('tmplMusicHomepage')){$('.global-navigation .top-level-list.ecosystem-music .has-subnav').removeData('posLeft');}else if($('body').hasClass('id1032')){$('.global-navigation .top-level-list.ecosystem-books .has-subnav').removeData('posLeft');}else if($('body').hasClass('podcast')){$('.global-navigation .top-level-list.ecosystem-podcast .has-subnav').removeData('posLeft');}
$chosenSubnav.css({left:$parentNavEl.data('posLeft')});$('.subnav:not(.subnav-'+subnavName+')').fadeOut(function(){$(this).removeClass('chosen');});$('.has-subnav:not(.'+subnavName+')','#globalheader').removeClass('chosen');$chosenSubnav.fadeToggle(function(){$(this).toggleClass('chosen');});$parentNavEl.toggleClass('chosen');});};NPR.responsiveNav.initEcosystemHeaderTopbarSubnavsMediumBp=function(){$('.global-navigation-three .has-subnav').on('click',function(e){e.preventDefault();var $parentNavEl=$(this);var classes=$parentNavEl.attr('class').split(" ");var subnavName='';for(var i=0;i<classes.length;i++){if(classes[i]!=='has-subnav'){subnavName=classes[i];}}
var $chosenSubnav=$('.global-navigation-three .subnav-'+subnavName);$('.global-navigation-three .subnav:not(.subnav-'+subnavName+')').fadeOut(function(){$(this).removeClass('chosen');});$('.global-navigation-three .has-subnav:not(.'+subnavName+')').removeClass('chosen');$chosenSubnav.fadeToggle(function(){$(this).toggleClass('chosen')});$parentNavEl.toggleClass('chosen');});};NPR.responsiveNav.removeHeaderTopbarNav=function(){$('body').removeClass('has-topbar-nav');$('.subnav','.global-navigation').removeAttr('style').removeClass('chosen');$('.has-subnav','.global-navigation').off('click').removeClass('chosen');};NPR.responsiveNav.initMediumBpStationSubnav=function(){$('.global-navigation-two .has-subnav').on('click',function(e){e.preventDefault();$(this).toggleClass('chosen');$('.global-navigation-two .subnav-stations').fadeToggle(function(){$(this).toggleClass('chosen');});});};NPR.responsiveNav.initOffCanvasEvents();if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.MEDIUM)===true){NPR.responsiveNav.initOffcanvasSubnavs();}
NPR.responsiveNav.initMediumBpStationSubnav();if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.LARGE)===true){NPR.responsiveNav.initHeaderTopbarSubnavs();}
if($('body').hasClass('id1032')){$('<div class="global-navigation-three"></div>').appendTo('#globalheader');$('.top-level-list.ecosystem-books.primary, .subnav.ecosystem-books').clone().removeAttr('style').appendTo('.global-navigation-three');NPR.responsiveNav.initEcosystemHeaderTopbarSubnavsMediumBp();}else if($('body').hasClass('id1039')){$('<div class="global-navigation-three"></div>').appendTo('#globalheader');$('.top-level-list.ecosystem-music.primary, .subnav.ecosystem-music').clone().removeAttr('style').appendTo('.global-navigation-three');NPR.responsiveNav.initEcosystemHeaderTopbarSubnavsMediumBp();}else if($('body').hasClass('podcast')){$('<div class="global-navigation-three"></div>').appendTo('#globalheader');$('.top-level-list.ecosystem-podcast.primary, .subnav.ecosystem-podcast').clone().removeAttr('style').appendTo('.global-navigation-three');NPR.responsiveNav.initEcosystemHeaderTopbarSubnavsMediumBp();}
if($('body').hasClass('tmplHomePage')){var $body=$('body');var checkSticky=function(){if($(window).scrollTop()>=81){$body.addClass('has-sticky-header');}else{$body.removeClass('has-sticky-header');}};$(window).scroll(function(){if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.LARGE)){checkSticky();}});$(window).resize(function(){if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.LARGE)){checkSticky();}});}
$('#globalheader .lead-audio-newscast > a').on('click',function(e){e.preventDefault();NPR.Player.openPlayer(0,0,null,NPR.Player.Action.PLAY_NOW,NPR.Player.Type.NEWSCAST,NPR.Player.Mode.FROM_FILE);});$('#globalheader .lead-audio-music > a').on('click',function(e){e.preventDefault();NPR.Player.openPlayer(0,0,null,NPR.Player.Action.LIVE_STREAM,'live21',NPR.Player.Mode.LIVE);});$(window).on('resize',function(){var $body=$('body');if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.MEDIUM)===true&&$body.hasClass('has-topbar-nav')){NPR.responsiveNav.removeHeaderTopbarNav();NPR.responsiveNav.initOffcanvasSubnavs();}
if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.LARGE)===true&&$body.hasClass('has-offcanvas-nav')){NPR.responsiveNav.removeOffcanvasSystem();NPR.responsiveNav.initHeaderTopbarSubnavs();}});});


(function($){AddNamespace('NPR.util');var __filename='cookie.js';var at=undefined,_methods={init:function(){var _at,p,q,x;if(typeof at==='undefined'){try{_at=get_cookie('at');if(typeof _at!=='undefined'&&_at!==null){at={};p=_at.split('&');for(x in p){q=p[x].split('=');if(q.length>2){}else if(q.length===2){if(q[0]=='e'){at[q[0]]=decodeURIComponent(q[1]);}else{at[q[0]]=decodeURIComponent(q[1].replace(/\+/g," "));}}}}else{at=undefined;}}catch(e){NPR.messaging.exception(e,__filename,'cookie.init',NPR.messaging.constants.EVENT_JS_ERROR);}}}},methods={cookie:{getKey:function(key){if(methods.cookie.exists(key)){return at[key];}},exists:function(key){_methods.init();if(typeof at!=='undefined'&&key in at){return true;}
return false;},full:function(){_methods.init();return at;},reset:function(callback){at=undefined;_methods.init();callback();}}}
$.extend(true,NPR.util,methods);$.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!==''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=$.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}};$.removeCookie=function(key,options){if($.cookie(key)!==undefined){$.cookie(key,'',$.extend({},options,{expires:-1}));return true;}
return false;};$.newsletterscookie=function(){var cookie=$.cookie('nl');if(cookie===null){return null;}
return cookie.split(",");};$.stationscookie=function(){var cookie=$.cookie('st');if(cookie===null){return null;}
return cookie.split(",");};$.authcookie=function(){var obj={};var cookie=$.cookie('at');if(cookie===null){return obj;}
var items=cookie.split('&');for(var i=0;i<items.length;i++){var kv=items[i].split('=');var key=kv[0];var val=kv[1];switch(key){case'u':obj.userid=val;break;case'a':obj.username=val;break;case'e':obj.email=val;break;case'f':obj.fname=val;break;case'l':obj.lname=val;break;case'g':obj.gender=val;break;default:obj[key]=val;}}
if(obj.fname!=='undefined'){obj.fullname=obj.fname;}
if(obj.lname!=='undefined'){if(obj.fullname){obj.fullname+=' '+obj.lname;}else{obj.fullname=obj.lname;}}
return obj;};})(jQuery);

if(!this.JSON){JSON=function(){function f(n){return n<10?'0'+n:n;}
Date.prototype.toJSON=function(key){return this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z';};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapeable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapeable.lastIndex=0;return escapeable.test(string)?'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
return'\\u'+('0000'+
(+(a.charCodeAt(0))).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(typeof value.length==='number'&&!(value.propertyIsEnumerable('length'))){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
return{stringify:function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});},parse:function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+
(+(a.charCodeAt(0))).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');}};}();}


var sUserAgent=navigator.userAgent.toLowerCase();var isOp=(sUserAgent.indexOf('opera')!=-1)?true:false;if(typeof NPR==='undefined'){document.write("<script type='text/javascript' src='/templates/javascript/player/player.js'></script>\n");}
function popUp(oAnchor,sProps,sWindow){var sUrl='';if(typeof(oAnchor)=='string')sUrl=oAnchor;else{if(oAnchor.getAttribute)sUrl=oAnchor.getAttribute('href');if(sUrl=='')sUrl=oAnchor.href;}
if(sUrl=='')return true;var sWindowName=sWindow?sWindow:'nprPopup';if(!sProps)sProps=null;if(sUrl)var oPopup=window.open(sUrl,sWindowName,sProps);if(oPopup&&!isOp)oPopup.focus();return(oPopup)?false:true;}
function setUserVars()
{if(navigator.appName.indexOf('Internet Explorer')!=-1)
{window.isIE=true;}
window.userPlatform=navigator.platform;if((window.userPlatform.indexOf("mac")!=-1)||(window.userPlatform.indexOf("MAC")!=-1)||(window.userPlatform.indexOf("Mac")!=-1))
{window.userPlatform="mac";}}
setUserVars();function adCompatible(mediaPreference)
{if(navigator.userAgent.indexOf("Windows\ NT\ 5.1")!=-1)
{return true;}
else
{return true;}
return true;}
function doAd(newURL,mediaPreference)
{if(adCompatible(mediaPreference))
{location.href=newURL+"&getUnderwriting=1";}
else
{location.href=newURL;}}
function toNumericMonth(month)
{var monthArray=new Object();monthArray["jan"]=0;monthArray["feb"]=1;monthArray["mar"]=2;monthArray["apr"]=3;monthArray["may"]=4;monthArray["jun"]=5;monthArray["jul"]=6;monthArray["aug"]=7;monthArray["sep"]=8;monthArray["oct"]=9;monthArray["nov"]=10;monthArray["dec"]=11;return monthArray[month.toLowerCase()];}
function toFullMonth(num)
{var monthArray=new Object();monthArray[0]="January";monthArray[1]="February";monthArray[2]="March";monthArray[3]="April";monthArray[4]="May";monthArray[5]="June";monthArray[6]="July";monthArray[7]="August";monthArray[8]="September";monthArray[9]="October";monthArray[10]="November";monthArray[11]="December";return monthArray[num];}
function parseZero(valToUse)
{if(valToUse.length>1&&valToUse.charCodeAt(0)==0)
{valToUse=valToUse.substr(1,valToUse.length);}
return valToUse;}
function setDate(dateToUse)
{dateArray=dateToUse.split("-");dateToReturn=new Date();dateToReturn.setDate(parseZero(dateArray[0]));dateToReturn.setMonth(toNumericMonth(dateArray[1].toLowerCase()));dateToReturn.setYear(dateArray[2]);dateToReturn=Date.parse(dateToReturn);return dateToReturn;}
function compareDates(date1,date2)
{date1=setDate(date1);date2=setDate(date2);returnVal="after";if(date2<date1)
{returnVal="before";}
return returnVal;}
function checkMediaPrefs(mediaPrefVals,valToTest)
{match=false;for(i=0;i<mediaPrefVals.length;i++)
{if(mediaPrefVals[i]==valToTest)
{match=true;}}
return match;}
function trimString(sInString)
{sInString=sInString.replace(/^\s+/g,"");return sInString.replace(/\s+$/g,"");}
function makePrefArray(mediaPreference)
{numRetArray=0;retArray=new Array();temp=new Array();temp=mediaPreference.split(",");for(i=0;i<temp.length;i++)
{if(trimString(temp[i])!="")
{retArray[numRetArray]=temp[i].toUpperCase();numRetArray++;}}
return retArray;}
function goNewURL(newURL,saURL,winTarget)
{if(saURL=="")
{saURL=newURL;}
if(window.sa_onclick)
{sa_onclick(saURL);}
if(winTarget=="new")
{window.open(newURL,'',"width=540,height=360,toolbar=none,location=none,menubar=none,status=none,resizable=yes");}
else
{location.href=newURL;}}
function getMedia(prgCode,showDate,segNum,mediaAvailable)
{nprcookie=get_cookie('sauid');mediaAvailArray=makePrefArray(mediaAvailable);if((segNum=="all")||(segNum=="ALL"))
{segNum="";}
if(checkMediaPrefs(mediaAvailArray,"RAM")&&(!checkMediaPrefs(mediaAvailArray,"RM"))&&(!checkMediaPrefs(mediaAvailArray,"WM")))
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg.php?prgCode="+prgCode+"&showDate="+showDate+"&segNum="+segNum+"&mediaPref=RAM","","");}
else if(checkMediaPrefs(mediaAvailArray,"RM")&&!checkMediaPrefs(mediaAvailArray,"WM"))
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg.php?prgCode="+prgCode+"&showDate="+showDate+"&segNum="+segNum+"&mediaPref=RM","","");}
else if(checkMediaPrefs(mediaAvailArray,"WM")&&!checkMediaPrefs(mediaAvailArray,"RM"))
{if(nprcookie!=null&&nprcookie!="undefined")
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg_wmref.php?prgCode="+prgCode+"&showDate="+showDate+"&segNum="+segNum+"&mediaPref=WM&sauid="+nprcookie,"","");}
else
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg_wmref.php?prgCode="+prgCode+"&showDate="+showDate+"&segNum="+segNum+"&mediaPref=WM","","");}}
else if((checkMediaPrefs(mediaAvailArray,"WM")&&!checkMediaPrefs(mediaAvailArray,"RM"))||((checkMediaPrefs(mediaAvailArray,"RAM")||checkMediaPrefs(mediaAvailArray,"RM"))&&checkMediaPrefs(mediaAvailArray,"WM")))
{if(nprcookie!=null&&nprcookie!="undefined")
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg_wmref.php?prgCode="+prgCode+"&showDate="+showDate+"&segNum="+segNum+"&mediaPref=WM&sauid="+nprcookie,"","");}
else
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg_wmref.php?prgCode="+prgCode+"&showDate="+showDate+"&segNum="+segNum+"&mediaPref=WM","","");}}}
function getStaticMedia(URL,mediaPreference)
{sauid=checkCookie("sauid");referrer=document.referrer;mediaPrefVals=makePrefArray(mediaPreference);if(URL.indexOf("http://")!=-1)
{goNewURL(URL,'','');}
else if(URL.toUpperCase()=="NEWSCAST")
{getNewsCast();}
else if(URL.toUpperCase()=="PROGRAMSTREAM")
{getProgramStream();}
else if((checkMediaPrefs(mediaPrefVals,"WM"))&&(checkMediaPrefs(mediaPrefVals,"RM")))
{mediaPreference=checkCookie("NPRMediaPref");if((mediaPreference==false)||(mediaPreference=="RM"))
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg.php?mediaURL="+URL+"&mediaType=RM",URL,"");}
else if(mediaPreference=="WM")
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg.php?mediaURL="+URL+"&mediaType=WM",URL,"");}}
else if((checkMediaPrefs(mediaPrefVals,"RM"))&&(!checkMediaPrefs(mediaPrefVals,"WM")))
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg.php?mediaURL="+URL+"&mediaType=RM",URL,"");}
else if((checkMediaPrefs(mediaPrefVals,"WM"))&&(!checkMediaPrefs(mediaPrefVals,"RM")))
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg.php?mediaURL="+URL+"&mediaType=WM",URL,"");}}
function getTopicMedia(topicId,topicName,mediaPreference)
{topicName=escape(topicName);nprcookie=get_cookie('sauid');mediaPrefVals=makePrefArray(mediaPreference);if(checkCookie("NPRMediaPref"))
{mediaPreference=checkCookie("NPRMediaPref");newURL=NPR.ServerConstants.webHost+"/templates/dmg/dmg.php?topicId="+topicId+"&topicName="+topicName+"&mediaPref="+mediaPreference;if(mediaPreference=="WM")
{if(nprcookie!=null&&nprcookie!="undefined")
{newURL=NPR.ServerConstants.webHost+"/templates/dmg/dmg_wmref.php?topicId="+topicId+"&topicName="+topicName+"&mediaPref="+mediaPreference+"&sauid="+nprcookie;}
else
{newURL=NPR.ServerConstants.webHost+"/templates/dmg/dmg_wmref.php?topicId="+topicId+"&topicName="+topicName+"&mediaPref="+mediaPreference;}}
if(window.sa_onclick)
{sa_onclick(newURL);}
doAd(newURL,mediaPreference);}
else
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/audioplayer.php?topicId="+topicId+"&topicName="+topicName,"","new");}}
function getLatestShow(prgCode)
{if(checkCookie("NPRMediaPref"))
{mediaPreference=checkCookie("NPRMediaPref");goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg.php?getLatestShow=true&prgCode="+prgCode+"&NPRMediaPref="+mediaPreference,"","new");}
else
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/audioplayer.php?getLatestShow=true&prgCode="+prgCode,"","new");}}
function getFeaturedAudio(newURL)
{nprcookie=get_cookie('sauid');if(checkCookie("NPRMediaPref"))
{mediaPreference=checkCookie("NPRMediaPref");if(mediaPreference=="WM")
{newURL+="&NPRMediaPref=WM";newURL=replaceString(newURL,'dmg.php','dmg_wmref.php');if(nprcookie!=null&&nprcookie!="undefined")
{newURL+="&sauid="+nprcookie;}}
else
{newURL+="&NPRMediaPref=RM";}
if(window.sa_onclick)
{sa_onclick(newURL);}
doAd(newURL,mediaPreference);}
else
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/audioplayer.php?newURL="+newURL,'','new');}}
function getProgramStream()
{NPR.Player.openPlayer(0,0,null,NPR.Player.Action.LIVE_STREAM,NPR.Player.Type.PROGRAM_STREAM,NPR.Player.Mode.FROM_FILE);}
function getNewsCast()
{NPR.Player.openPlayer(0,0,null,NPR.Player.Action.PLAY_NOW,NPR.Player.Type.NEWSCAST,NPR.Player.Mode.FROM_FILE);}
function getMusicButton(songId,musicAudioFileName,prgCode)
{if(checkCookie("NPRMediaPref"))
{mediaPreference=checkCookie("NPRMediaPref");goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/dmg.php?getMusicButton=true&songId="+songId+"&musicAudioFileName="+musicAudioFileName+"&prgCode="+prgCode+"&NPRMediaPref="+mediaPreference,"","");}
else
{goNewURL(NPR.ServerConstants.webHost+"/templates/dmg/audioplayer.php?getMusicButton=true&songId="+songId+"&musicAudioFileName="+musicAudioFileName+"&prgCode="+prgCode,'',"new");}}
function setCookie(cookieToSet,daysToExpiration,cookieValue)
{var exp=new Date();exp.setTime(exp.getTime()+(1000*60*60*24*daysToExpiration));document.cookie=cookieToSet+"="+cookieValue+"; path=/; domain=npr.org; expires="+exp.toGMTString();}
function checkCookie(cookieToCheck)
{var allcookies=document.cookie;var pos=allcookies.indexOf(cookieToCheck+"=");if(pos!=-1)
{var start=pos+cookieToCheck.length+1;var end=allcookies.indexOf(";",start);if(end==-1)
{end=allcookies.length;}
return allcookies.substring(start,end);}
else
{return false;}}
function killCookie(cookieToKill)
{setCookie(cookieToKill,-1,'');if(cookieToKill=='station'){$('.ddstn').slideUp(250,function(){$('#header .headercontent, #musicHeader .headercontent').removeClass("dd_active");});$('#globalstationlocation').html("\n");$('#station_info').html("\n");$('#stationLocalizationWrap').removeClass('localized');}}
function replaceString(repStr,stringToFind,stringToRep)
{sFind=0;newStr=repStr;while(sFind!=-1)
{sFind=newStr.indexOf(stringToFind);if(sFind!=-1)
{startString=newStr.substring(0,sFind);endString=newStr.substring(sFind+stringToFind.length,newStr.length);newStr=startString+stringToRep+endString;}}
return newStr;}
function set_cookie(name,value,expires,path,domain,secure)
{var today=new Date();today.setTime(today.getTime());if(expires)
{expires=expires*1000*60*60*24;}
var expires_date=new Date(today.getTime()+(expires));document.cookie=name+"="+escape(value)+
((expires)?";expires="+expires_date.toGMTString():"")+
((path)?";path="+path:"")+
((domain)?";domain="+domain:"")+
((secure)?";secure":"");}
function get_cookie(name)
{var start=0;if(document.cookie.indexOf(name)!==0){start=document.cookie.indexOf('; '+name+"=");}
var len=start+name.length+3;if(!start&&name!==document.cookie.substring(0,name.length)){return null;}
if(start===-1){return null;}
var end=document.cookie.indexOf(";",len);if(end===-1){end=document.cookie.length;}
return unescape(document.cookie.substring(len,end));}
function get_source_code()
{var url=document.URL;var sc=url.match(/(&|\?)sc=(\w+)/);var sourceCode=url.match(/(&|\?)sourceCode=(\w+)/);var ft=url.match(/(&|\?)ft=(\w+)/);if(ft!=null&&ft[2]!=null)
{return'/sc='+ft[2];}
else if(sc!=null&&sc[2]!=null)
{return'/sc='+sc[2];}
else if(sourceCode!=null&&sourceCode[2]!=null)
{return'/sc='+sourceCode[2];}
else
{return'';}}
function get_target()
{if(window.target!=null)
{return window.target;}
else
{return'';}}
function getFinalPrefs(mediaPrefVals,valToTest)
{retPref="";for(i=0;i<mediaPrefVals.length;i++)
{if(valToTest=="WM"&&(mediaPrefVals[i]=="WM"||mediaPrefVals[i]=="WAX"||mediaPrefVals[i]=="ASX"))
{retPref=mediaPrefVals[i];}
else if(valToTest=="RM"&&(mediaPrefVals[i]=="RM"||mediaPrefVals[i]=="RAM"))
{retPref=mediaPrefVals[i];}}
return retPref;}
function choosePlayer(mediaAvailableVals,playerAvailableVals)
{countAvaPlayer=0;avaMatchPlayer="";for(i=0;i<mediaAvailableVals.length;i++)
{for(j=0;j<playerAvailableVals.length;j++)
{if(mediaAvailableVals[i]==playerAvailableVals[j])
{if(countAvaPlayer==0)
{avaMatchPlayer=mediaAvailableVals[i];countAvaPlayer++;}
else
{avaMatchPlayer+=","+mediaAvailableVals[i];}}}}
return avaMatchPlayer;}
function forceChoosePlayer(mediaAvailableVals)
{finalChoose="";for(i=0;i<mediaAvailableVals.length;i++)
{if(mediaAvailableVals[i]=="WM"||mediaAvailableVals[i]=="ASX"||mediaAvailableVals[i]=="WAX")
{finalChoose=mediaAvailableVals[i];break;}}
if(finalChoose=="")
{for(i=0;i<mediaAvailableVals.length;i++)
{if(mediaAvailableVals[i]=="RM"||mediaAvailableVals[i]=="RAM")
{finalChoose=mediaAvailableVals[i];break;}}}
if(window.userPlatform=="mac"&&finalChoose!="RM"&&finalChoose!="RAM")
{for(i=0;i<mediaAvailableVals.length;i++)
{if(mediaAvailableVals[i]=="RM"||mediaAvailableVals[i]=="RAM")
{finalChoose=mediaAvailableVals[i];break;}}}
return finalChoose;}
function getRandom(num)
{myRandomNum='';for(myRandomNum='';myRandomNum.length<num;myRandomNum+=Math.round(Math.random()*7));return myRandomNum;}
function getGUID()
{myGuid=get_cookie('GUID');if(myGuid==null||myGuid=="undefined")
{for(myGuid='';myGuid.length<32;myGuid+=Math.round(Math.random()*7));}
return myGuid;}
function popNewWindow(newURL)
{if(newURL)
{popUp(newURL,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=340,height=492','player');}}
function addExtraMediaType(availableMediaTypeArray)
{returnArray=new Array();mCounter=0;for(i=0;i<availableMediaTypeArray.length;i++)
{returnArray[mCounter]=availableMediaTypeArray[i];mCounter++;if(availableMediaTypeArray[i]=="RM")
{returnArray[mCounter]="RAM";mCounter++;returnArray[mCounter]="RA";mCounter++;returnArray[mCounter]="RMM";mCounter++;}
else if(availableMediaTypeArray[i]=="WM")
{returnArray[mCounter]="ASX";mCounter++;returnArray[mCounter]="WAX";mCounter++;}}
return returnArray;}
function checkFileMediaType(mediaAvailArray)
{for(i=0;i<mediaAvailArray.length;i++)
{if(mediaAvailArray[i]=='WM'||mediaAvailArray[i]=='ASX'||mediaAvailArray[i]=='WMA'||mediaAvailArray[i]=='RM'||mediaAvailArray[i]=='RAM'||mediaAvailArray[i]=='RA'||mediaAvailArray[i]=='RMM')
{return true;}}
return false;}
function launchPlayer(baseId,baseType,baseDate,accParameters,mediaAvailable)
{errorCode=0;pageId=getRandom(8);random10=getRandom(10);myGuid=getGUID();wAudioMediaType='WM,RM';mediaAvailArray=makePrefArray(mediaAvailable);if(!checkFileMediaType(mediaAvailArray))
{errorCode=1;}
audioMediaTypeArray=makePrefArray(wAudioMediaType);audioMediaTypeArray=addExtraMediaType(audioMediaTypeArray);if(audioMediaTypeArray.length==0)
{errorCode=2;}
avaMatchPlayer=choosePlayer(mediaAvailArray,audioMediaTypeArray);avaMatchPlayerArray=makePrefArray(avaMatchPlayer);userMediaPreference=checkCookie("NPRMediaPref");newURL=NPR.ServerConstants.webHost+"/templates/dmg/popup.php?id="+baseId+"&type="+baseType+"&date="+baseDate+"&au=1&pid="+pageId+"&random="+random10+"&guid="+myGuid+"&uaType="+wAudioMediaType+"&aaType="+mediaAvailable+"&upf="+window.userPlatform+accParameters;if(baseType==10)
{newURL=NPR.ServerConstants.webHost+"/templates/dmg/popup.php?id=100&type=10&staticUrl="+baseDate+"&au=1&pid="+pageId+"&random="+random10+"&guid="+myGuid+"&uaType="+wAudioMediaType+"&aaType="+mediaAvailable+"&upf="+window.userPlatform+accParameters;}
if(userMediaPreference)
{finalSelMediaType=getFinalPrefs(avaMatchPlayerArray,userMediaPreference);if(finalSelMediaType!="")
{newURL+="&mtype="+finalSelMediaType;popNewWindow(newURL);}
else
{if(avaMatchPlayerArray.length>0)
{forceChooseMedia=forceChoosePlayer(avaMatchPlayerArray);if(forceChooseMedia!="")
{newURL+="&mtype="+forceChooseMedia;popNewWindow(newURL);return;}}
if(avaMatchPlayerArray.length==0&&errorCode==0)
{errorCode=3;}
newURL+="&errorCode="+errorCode;popNewWindow(newURL);}}
else
{forceChooseMedia=forceChoosePlayer(avaMatchPlayerArray);if(forceChooseMedia!="")
{newURL+="&mtype="+forceChooseMedia;popNewWindow(newURL);}
else
{newURL+="&errorCode="+errorCode;popNewWindow(newURL);}}}
function launchPlayerError(baseId,baseType,baseDate,accParameters,mediaAvailable,error_id)
{pageId=getRandom(8);random10=getRandom(10);myGuid=getGUID();errorCode=0;mediaAvailable="";switch(error_id)
{case 1:mediaAvailable="DC";break;case 2:window.audioMediaType="";mediaAvailable="RM,WM";break;case 3:window.audioMediaType="WM";mediaAvailable="RM";break;case 4:window.audioMediaType="RM";mediaAvailable="WM";break;case 5:window.audioMediaType="RM,WM";mediaAvailable="WM";break;case 6:window.audioMediaType="RM,WM";mediaAvailable="RM";break;case 7:window.audioMediaType="WM";mediaAvailable="WM,RM";break;case 8:window.audioMediaType="RM";mediaAvailable="WM,RM";break;}
wAudioMediaType=window.audioMediaType;mediaAvailArray=makePrefArray(mediaAvailable);if(!checkFileMediaType(mediaAvailArray))
{errorCode=1;}
audioMediaTypeArray=makePrefArray(wAudioMediaType);audioMediaTypeArray=addExtraMediaType(audioMediaTypeArray);if(audioMediaTypeArray.length==0)
{errorCode=2;}
avaMatchPlayer=choosePlayer(mediaAvailArray,audioMediaTypeArray);avaMatchPlayerArray=makePrefArray(avaMatchPlayer);userMediaPreference=checkCookie("NPRMediaPref");newURL=NPR.ServerConstants.webHost+"/templates/dmg/popup.php?id="+baseId+"&type="+baseType+"&date="+baseDate+"&au=1&pid="+pageId+"&random="+random10+"&guid="+myGuid+"&uaType="+wAudioMediaType+"&aaType="+mediaAvailable+accParameters;if(userMediaPreference)
{finalSelMediaType=getFinalPrefs(avaMatchPlayerArray,userMediaPreference);if(finalSelMediaType!="")
{newURL+="&mtype="+finalSelMediaType;popNewWindow(newURL);}
else
{if(avaMatchPlayerArray.length>0)
{forceChooseMedia=forceChoosePlayer(avaMatchPlayerArray);if(forceChooseMedia!="")
{newURL+="&mtype="+forceChooseMedia;popNewWindow(newURL);return;}}
if(avaMatchPlayerArray.length==0&&errorCode==0)
{errorCode=3;}
newURL+="&errorCode="+errorCode;popNewWindow(newURL);}}
else
{forceChooseMedia=forceChoosePlayer(avaMatchPlayerArray);if(forceChooseMedia!="")
{newURL+="&mtype="+forceChooseMedia;popNewWindow(newURL);}
else
{newURL+="&errorCode="+errorCode;popNewWindow(newURL);}}}
function getURLParamArray()
{var aQueryString=new Array();var strHref=window.location.href;if(strHref.indexOf("?")>-1)
{var strQueryString=strHref.substr(strHref.indexOf("?"));var aQueryString=strQueryString.split("&");}
return aQueryString;}
function getURLParam(strParamName)
{var strReturn="";var strHref=window.location.href;if(strHref.indexOf("?")>-1)
{var strQueryString=strHref.substr(strHref.indexOf("?"));var aQueryString=strQueryString.split("&");for(var iParam=0;iParam<aQueryString.length;iParam++)
{if(aQueryString[iParam].indexOf(strParamName+"=")>-1)
{var aParam=aQueryString[iParam].split("=");strReturn=aParam[1];break;}}}
return strReturn;}
try
{document.execCommand("BackgroundImageCache",false,true);}
catch(err){}
function collectionToArray(col){a=new Array();for(i=0;i<col.length;i++)
a[a.length]=col[i];return a;}
function concatCollections(col1,col2)
{if(col1==null)
{return collectionToArray(col2);}
else if(col2==null)
{return collectionToArray(col1);}
else
{return collectionToArray(col1).concat(collectionToArray(col2));}}
function toggleDetails(num)
{if(document.getElementById)
{objRef=document.getElementById("descriptionTxt"+num);expanderRef=document.getElementById("expander"+num);if(objRef.className=="closeDiv")
{objRef.className="openDiv";expanderRef.setAttribute("src","http://media.npr.org/images/quiz_hide.gif");expanderRef.setAttribute("alt","Hide Answer");}
else if(objRef.className=="openDiv")
{objRef.className="closeDiv";expanderRef.setAttribute("src","http://media.npr.org/images/quiz_show.gif");expanderRef.setAttribute("alt","Show Answer");}}}
if(typeof $.fn.clicktoggle==="undefined"){$.fn.clicktoggle=function(a,b){return this.each(function(){var clicked=false;$(this).bind("click",function(){if(clicked){clicked=false;return b.apply(this,arguments);}
clicked=true;return a.apply(this,arguments);});});};}


function clearField()
{if(document.go_local&&document.go_local.txtSearchValue.value.toUpperCase().indexOf("LETTERS")>-1)
{document.go_local.txtSearchValue.value="";}}
function fillField()
{if(document.go_local.txtSearchValue.value=="")
{document.go_local.txtSearchValue.value="Call Letters";}}
function zipUcase()
{if(document.go_local.txtSearchValue.value!="Call Letters")
{document.go_local.txtSearchValue.value=document.go_local.txtSearchValue.value.toUpperCase();}}
function href()
{url=escape(window.location.href);andFind=url.indexOf("&");startPos=0;while(andFind>-1)
{url=url.substring(startPos,andFind)+"%26"+url.substring(andFind+1);andFind=url.indexOf("&");}
var re=new RegExp(' ','gi');window.location.href="/stations/?refUrl="+url;}
function removeHref(cookieValue)
{url=escape(window.location.href);andFind=url.indexOf("&");startPos=0;while(andFind>-1)
{url=url.substring(startPos,andFind)+"%26"+url.substring(andFind+1);andFind=url.indexOf("&");}
var re=new RegExp(' ','gi');window.location.href="/stations/cookies/stations_kill_cookie.php?cookieValue="+cookieValue+"&url="+url;}


AddNamespace('NPR.Devices');NPR.Devices.isMobileIE=function(){return navigator.userAgent.match(new RegExp("IEMobile","i"));}
if($('html').hasClass('touch')||NPR.Devices.isMobileIE()){if(NPR.Devices.isMobileIE()){$('html').removeClass('no-touch').addClass('touch');}
if(Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px)')){$('html').addClass('NPRtablet');}
if(Modernizr.mq('only screen and (max-device-width: 767px)')){$('html').addClass('NPRphone');}}
if(deconcept.SWFObjectUtil.getPlayerVersion().major<9){$('html').addClass('no-flash');}
if(NPR.PageInfo.getUrlParameter('device')=='tablet'){$('html').addClass('NPRtablet');}
if(NPR.PageInfo.getUrlParameter('device')=='phone'){$('html').addClass('NPRphone');}
NPR.Devices.isOnTablet=function(){if($('html').hasClass('NPRtablet')){return true;}
else{return false;}};NPR.Devices.isOnPhone=function(){if($('html').hasClass('NPRphone')){return true;}
else{return false;}};NPR.BREAKPOINT={SMALL:{NAME:'small',MIN:0,MAX:767},MEDIUM:{NAME:'medium',MIN:768,MAX:1024},LARGE:{NAME:'large',MIN:1025,MAX:1299},LARGEST:{NAME:'largest',MIN:1300,MAX:10000}};NPR.Devices.isScreenSmallerOrEqual=function(breakpoint){if(typeof(breakpoint)=="object"){return Modernizr.mq('only screen and (max-width: '+breakpoint.MAX+'px)');}
else if(typeof(breakpoint)=="number"){return Modernizr.mq('only screen and (max-width: '+breakpoint+'px)');}
else{return false;}};NPR.Devices.isScreenSmaller=function(breakpoint){if(typeof(breakpoint)=="object"){return Modernizr.mq('only screen and (max-width: '+(breakpoint.MIN-1)+'px)');}
else if(typeof(breakpoint)=="number"){return Modernizr.mq('only screen and (max-width: '+(breakpoint-1)+'px)');}
else{return false;}};NPR.Devices.isScreenLargerOrEqual=function(breakpoint){if(typeof(breakpoint)=="object"){return Modernizr.mq('only screen and (min-width: '+breakpoint.MIN+'px)');}
else if(typeof(breakpoint)=="number"){return Modernizr.mq('only screen and (min-width: '+breakpoint+'px)');}
else{return false;}};NPR.Devices.isScreenWithin=function(breakpoint){if(breakpoint){return Modernizr.mq('only screen and (min-width: '+breakpoint.MIN+'px) and (max-width: '+breakpoint.MAX+'px)');}
return false;};


$(document).ready(function(){try{var loginElm=$('a[href$="login.php"]');if(loginElm.length>0){var loginUrl=loginElm.attr('href');var returnUrl=encodeURIComponent(window.location);loginUrl=loginUrl+"?returnUrl="+returnUrl;loginElm.attr('href',loginUrl);}}
catch(e){}});


(function(){var d=new Image(1,1);d.onerror=d.onload=function(){d.onerror=d.onload=null;};d.src=["//secure-us.imrworldwide.com/cgi-bin/m?ci=us-803244h&cg=0&cc=1&si=",escape(window.location.href),"&rp=",escape(document.referrer),"&ts=compact&rnd=",(new Date()).getTime()].join('');})();


var _comscore=_comscore||[];_comscore.push({c1:"2",c2:"17691522"});(function(){var s=document.createElement("script"),el=document.getElementsByTagName("script")[0];s.async=true;s.src=(document.location.protocol=="https:"?"https://sb":"http://b")+".scorecardresearch.com/beacon.js";el.parentNode.insertBefore(s,el);})();


AddNamespace('NPR.Station');(function nprStationModule($,Cookie){NPR.Station=function nprStation(){this.id=null;this.abbr=null;this.callLetters=null;this.name=null;this.logoUrl='';this.streamGuid='';this.homepageUrl=null;this.donateUrl=null;this.isFavorite=null;this._loaded=false;return this;};NPR.Station.prototype.loadFromCookie=function loadFromCookie(){if(!this.isLocalized()){return this;}
this.abbr=Cookie('station');this.callLetters=Cookie('station').replace(/_.*/,'');this.name=Cookie('stationName');this.logoUrl=Cookie('stationLogo');this.streamGuid=Cookie('stationAudioStream');this.isFavorite=!!Cookie('stationExpires');this._loaded=true;if(this.isFavorite&&this.logoUrl!=this._filterStationLogo(this.logoUrl)){this.logoUrl=this._filterStationLogo(this.logoUrl);this.saveAsFavorite();}
return this;};NPR.Station.prototype.loadFromStationsApi=function loadFromStationsApi(call_letters){if(!call_letters){call_letters=this.callLetters;if(!call_letters){return null;}}
var self=this;var deferredLoad=new $.Deferred();this._doStationLookup(call_letters).done(function(data,status,jqXHR){var currentStationData=NPR.Station.extractCurrentStation(data);self._loadFromStationsApi(currentStationData);deferredLoad.resolve(self);});return deferredLoad.promise();};NPR.Station.prototype._loadFromStationsApi=function _loadFromStationsApi(data){this.id=data['org_id'];this.abbr=data['title'].toLowerCase().replace('-','_');this.callLetters=data['call'].toLowerCase();this.name=data['name'];this.logoUrl=this._filterStationLogo(data['logo']);this.streamGuid=this._choosePrimaryStreamGuid(data['urls']);this.homepageUrl=this._makeTrackableUrl(data['homepage']);this.donateUrl=this._makeTrackableUrl(data['donation_url']);this.isFavorite=(Cookie('station')==this.abbr&&!!Cookie('stationExpires'));this._loaded=true;return this;};NPR.Station.prototype._filterStationLogo=function _filterStationLogo(logoUrl){if(!logoUrl||typeof logoUrl!=='string'||logoUrl.indexOf('generic')!==-1){return'';}
return logoUrl;};NPR.Station.prototype._doStationLookup=function _doStationLookup(call_letters){var stationQueryUrl='//'+NPR.ServerConstants.apiHost+'/v2/stations/'+call_letters+'?apiKey='+NPR.ServerConstants.StationsKey;var validationDeferred=new $.Deferred();$.ajax({dataType:'json',url:stationQueryUrl,timeout:5000}).done(function(data,status,jqXHR){if(!data[0]||data[0]==='No results found'){validationDeferred.reject();}else{validationDeferred.resolve(data,status,jqXHR);}}).fail(function(){validationDeferred.reject();});return validationDeferred.promise();};NPR.Station.prototype.reloadStationAssets=function reloadStationAssets(){var deferred=new $.Deferred();this.loadFromStationsApi().done(function(station){station._saveAssetsToCookie();deferred.resolve(station);}).fail(function(){deferred.reject();});return deferred.promise();};NPR.Station.prototype.isLocalized=function isLocalized(){return!!Cookie('station');};NPR.Station.prototype.localize=function localize(){var self=this;var deferred=new $.Deferred();$.getJSON(NPR.ServerConstants.localizeURL).done(function processLocalizeData(data){if(data['error']===true||typeof data['data']==='undefined'){deferred.reject();return;}
self._loadFromLocalizeApi(data['data']);self._saveLocalizationToCookie();self.notifyLocalized();deferred.resolve(self);}).fail(function(){deferred.reject();});return deferred.promise();};NPR.Station.prototype._loadFromLocalizeApi=function _loadFromLocalizeApi(data){this.abbr=data['callletters'].toLowerCase();this.callLetters=data['callletters'].toLowerCase().replace(/_.*/,'');this.name=data['name'];this.logoUrl=this._filterStationLogo(data['logo']);this.streamGuid=data['streamGuid'];this._loaded=true;};NPR.Station.prototype._saveLocalizationToCookie=function _saveLocalizationToCookie(){var cookieOptions=$.extend({},this.DEFAULT_COOKIE_OPTIONS);Cookie('station',this.abbr,cookieOptions);Cookie('stationName',this.name,cookieOptions);Cookie('stationAudioStream',this.streamGuid,cookieOptions);Cookie('stationLogo',this.logoUrl,cookieOptions);};NPR.Station.prototype.notifyLocalized=function notifyAboutLocalization(){$(document).trigger('localized',this);};NPR.Station.prototype.saveAsFavorite=function setAsFavorite(){this.isFavorite=true;var now=new Date();var favoriteExpiry=new Date(now.getTime()+this.EXPIRY_FAVORITE_STATION);var favoriteCookieOptions=$.extend({},this.DEFAULT_COOKIE_OPTIONS);favoriteCookieOptions['expires']=favoriteExpiry;Cookie('station',this.abbr,favoriteCookieOptions);Cookie('stationExpires','-',favoriteCookieOptions);this._saveAssetsToCookie();this.notifyLocalized();};NPR.Station.prototype._saveAssetsToCookie=function _saveAssetsToCookie(){var cookieOptions=$.extend({},this.DEFAULT_COOKIE_OPTIONS);if(this.isFavorite){var now=(new Date()).getTime();cookieOptions['expires']=new Date(now+this.EXPIRY_STATION_ASSET);}
Cookie('stationName',this.name,cookieOptions);Cookie('stationLogo',this.logoUrl,cookieOptions);Cookie('stationAudioStream',this.streamGuid,cookieOptions);};NPR.Station.prototype.hasExpiredAssets=function hasExpiredAssets(){if(!this._loaded){this.loadFromCookie();}
return!(this.name&&this.logoUrl&&this.streamGuid);};NPR.Station.prototype._choosePrimaryStreamGuid=function _choosePrimaryStreamGuid(urls){var streamGuid='';if(!urls||!(urls.length>0)){return streamGuid;}
for(var i=0;i<urls.length;++i){var url=urls[i];if(url['stream_guid']&&url['primary_stream']===1){return url['stream_guid'];}}
return streamGuid;};NPR.Station.prototype._makeTrackableUrl=function _makeTrackableUrl(url){var tracking='utm_source=npr.org&utm_medium=referral&utm_campaign=Localization';if(url.indexOf('?')>0){tracking='&'+tracking;}else{tracking='?'+tracking;}
return url+tracking;};NPR.Station.extractCurrentStation=function extractCurrentStation(response_data){var currentStation=null;response_data.forEach(function(station_doc){if(station_doc['title'].toLowerCase().replace('-','_')==Cookie('station')){currentStation=station_doc;}});return currentStation;};NPR.Station.prototype.DEFAULT_COOKIE_OPTIONS={path:'/',domain:document.domain};NPR.Station.prototype.EXPIRY_FAVORITE_STATION=(24*60*60*1000*1000);NPR.Station.prototype.EXPIRY_STATION_ASSET=(24*60*60*1000);})(jQuery,$.cookie);


AddNamespace('NPR.Localize');(function nprLocalizeInit($){NPR.Localize.openedStationDropdown=false;NPR.Localize.checkLocalization=function checkLocalization(){var station=new NPR.Station().loadFromCookie();if(station.isLocalized()){if(station.hasExpiredAssets()){station.reloadStationAssets().done(function doneReloadingStationAssets(){station.notifyLocalized();});}else{station.notifyLocalized();}}else{station.localize().fail(NPR.Localize.onLocalizationFailure);}};NPR.Localize.onLocalizationFailure=function onLocalizationFailure(){var $stationNavs=$('li.stations.has-subnav');$stationNavs.removeClass('has-subnav').addClass('is-not-localized').off('click');$('a',$stationNavs).off('click');};NPR.Localize.onLocalized=function onLocalized(e,station){var $stationNavs=$('li.stations.has-subnav');$stationNavs.addClass('localized unpopulated');var stationNameToUse=station.name;if(!stationNameToUse){stationNameToUse=station.callLetters;}
stationNameToUse=NPR.Localize._truncateStationName(stationNameToUse);var hasLogo=station.logoUrl!=='';var stationLogoTag='<img src="'+station.logoUrl+'" alt="Station Logo"/>';if(!hasLogo){stationLogoTag='<b class="no-logo">'+station.callLetters+'</b>';}
if($('body').hasClass('tmplHomePage')){$stationNavs.html('<a href="/stations"><b>'+stationNameToUse+'</b>'+stationLogoTag+'</a>');}else{$stationNavs.html('<a href="/stations"><b>'+stationNameToUse+'</b></a>');}
$('a',$stationNavs).data('metrics-action','toggle station drawer').data('metrics-label',station.callLetters);};NPR.Localize.openStationNav=function openStationNav(){if(NPR.Localize.openedStationDropdown===true){return;}else{NPR.Localize.openedStationDropdown=true;}
var station=(new NPR.Station()).loadFromCookie();station.loadFromStationsApi().done(NPR.Localize.onStationNavOpeningSuccess).fail(NPR.Localize.onStationNavOpeningFailure);};NPR.Localize.onStationNavOpeningFailure=function onStationNavOpeningFailure(){console.error('Failed to open station nav');};NPR.Localize.onStationNavOpeningSuccess=function onStationNavOpeningSuccess(station){$('li.stations.unpopulated').removeClass('unpopulated');$('.subnav-stations.unpopulated').removeClass('unpopulated');NPR.Localize.renderStationDropdown(station);};NPR.Localize.renderStationDropdown=function renderStationDropdown(station){var $stationDropdownBucket=$('div.subnav-stations');if(!station.isFavorite){$stationDropdownBucket.append($('<p class="autolocalization-message">We picked '+station.name+' as a station you might enjoy. You can either save this as your favorite or <a href="/templates/stations/stations" data-metrics-action="click pick another station">pick another station</a>.</p>'));}
var $columns=$('<div class="columns"></div>').appendTo($stationDropdownBucket);$columns.append('<div class="col1"></div>');$columns.append('<div class="col2"><ul></ul></div>');var $col1=$stationDropdownBucket.find('.col1');var $col2=$stationDropdownBucket.find('.col2 > ul');var $stationLogoArea=$('<a href="'+station.homepageUrl+'" data-metrics-action="click station logo" class="station-logo">');if(station.logoUrl!==''){$stationLogoArea.append($('<b>'+station.name+'</b> <img src="'+station.logoUrl+'" alt="Station logo"/></a>'));}else{$stationLogoArea.addClass('no-logo').append($('<b>'+station.callLetters+'</b>'));}
$col1.append($stationLogoArea);$col2.append($('<li class="find-stations"><a href="/stations/" data-metrics-action="click find stations">Find stations</a></li>'));if(!station.isFavorite){$col2.append($('<li class="favorite"><a href="#" data-metrics-action="click save as favorite" data-metrics-label="'+station.callLetters+'">Save as favorite</a></li>'));}
$col2.append($('<li class="support"><a href="'+station.donateUrl+'" data-metrics-action="click support this station">Support this station</a></li>'));$col2.append($('<li class="station-site"><a href="'+station.homepageUrl+'" data-metrics-action="click station website">Station website</a></li>'));$stationDropdownBucket.on('click','.favorite',function(){NPR.Localize.clearStationDropdown();station.saveAsFavorite();NPR.Localize.renderStationDropdown(station);});return true;};NPR.Localize.clearStationDropdown=function clearStationDropdown(){var $stationDropdownBucket=$('div.subnav-stations');var $allStationData=$stationDropdownBucket.children(':not(a.back)');$stationDropdownBucket.off('click','.favorite');$allStationData.remove();};NPR.Localize._truncateStationName=function _truncateStationName(stationName){if(stationName.length>38){while(stationName.length>38){var lastSpace=stationName.lastIndexOf(' ');if(lastSpace===-1){stationName=stationName.substring(0,36);}else{stationName=stationName.substring(0,lastSpace);}}
return stationName+' &hellip;';}else{return stationName;}};$(document).on('localized',NPR.Localize.onLocalized);$(document).on('click','li.stations.unpopulated',NPR.Localize.openStationNav);$(document).ready(NPR.Localize.checkLocalization);})(jQuery);


AddNamespace('NPR.disqus');(function($){var DataModel,__filename='api.js',threads={},users={};DataModel=function(options){var type,_options={type:'GET',el:null,base_url:'https://disqus.com/api/3.0/',data_type:'jsonp',event:'',data:{api_key:'tIbSzEhGBE9NIptbnQWn4wy1gZ546CsQ2IHHtxJiYAceyyPoAkDkVnQfCifmCaQW'}};this.options=$.extend(true,{},_options,options);type=this.options.event.split('.');this.url=this.options.base_url+type[0]+'/'+type[1]+'.'+this.options.data_type;}
DataModel.prototype={getData:function(){$.ajax({type:this.options.type,cache:true,url:this.url,context:this,data:this.options.data,timeout:30000,success:this.onSuccess,error:this.onError,dataType:this.options.data_type});},onSuccess:function(data){$(this.options.el).trigger(this.options.event+'.success',data);},onError:function(jqXHR,textStatus,errorThrown){if(NPR.metrics){NPR.metrics.event({network:'NPR Site',category:'Disqus',action:'API Error',label:this.options.event});}
$(this.options.el).trigger(this.options.event+'.error');}};threads=NPR.disqus.threads={details:function(opts){if(typeof opts==='undefined'&&typeof opts!=='object')return{};var data={},model;this.event='threads.details';try{if(opts.id){data['thread:ident']=opts.id;data.forum=opts.forum;}
if(opts.el){model=new DataModel({event:'threads.details',el:opts.el,data:data,type:'GET'});model.getData();}}catch(e){NPR.messaging.exception(e,__filename,'threads.details',NPR.messaging.constants.EVENT_JS_ERROR);}},postCount:function(el,storyId,forum){var element=el;try{threads.details({el:el,id:storyId,forum:forum});$(el).bind('threads.details.success',function(e,data){$(el).trigger('threads.postCount.success',data.response.posts);});}catch(e){NPR.messaging.exception(e,__filename,this.event,NPR.messaging.constants.EVENT_JS_ERROR);}},vote:function(el,storyId){var data={},model;try{data.thread=storyId;if(typeof el!=='undefined'){model=new DataModel({event:'threads.vote',el:el,data:data,type:'POST'});model.getData();}}catch(e){NPR.messaging.exception(e,__filename,this.event,NPR.messaging.constants.EVENT_JS_ERROR);}}};users=NPR.disqus.users={listActivity:function(opts){try{var data={'user:remote':'npr-'+opts.id,'limit':10,'since':opts.since,'include':['user']},model;model=new DataModel({el:opts.el,data:data,event:'users.listActivity'});model.getData();}catch(e){NPR.messaging.exception(e,__filename,this.event,NPR.messaging.constants.EVENT_JS_ERROR);}},details:function(el,id){var data={'user:remote':'npr-'+id},model=new DataModel({el:el,data:data,event:'users.details'});model.getData();}};})(jQuery);


(function($){var defaults={comments:10};var since,activityElement;var methods={extend:function(options,element){methods.element=element;methods.options=$.extend(true,{},defaults,options);},init:function(options){methods.extend(options,this);return methods.element.each(function(){});},activity:function(options){methods.extend(options,this);return methods.element.each(function(){var curElem=this;var userId=methods.element.data('persona');methods._showLoadingComments();$(curElem).bind('users.listActivity.error',function(){methods._hideLoadingComments(false);});methods._bindOnSuccess(curElem,'users.listActivity',function(e,data){methods._displayActivity(curElem,data);});NPR.disqus.users.listActivity({el:curElem,id:userId,since:since});});},moreActivity:function(){return this.each(function(){$(this).on('click',function(){if(since&&activityElement){$(activityElement).disqus('activity');}})});},details:function(options){methods.extend(options,this);return methods.element.each(function(){var curElem=this,userId=$(curElem).data('persona');$(curElem).bind('users.details.success',function(e,data){$(curElem).attr('src',data.response.avatar.cache);});NPR.disqus.users.details(curElem,userId);});},comments:function(options){methods.extend(options,this);return methods.element.each(function(){var el=this,storyId=$(this).data('storyid'),forum=$(this).data('shortname');$(el).bind('threads.postCount.success',function(e,data){var pluralization="";if(data.toString()==="0"){pluralization="no-comments";}else if(data.toString()==="1"){pluralization="one-comment";}else{pluralization="multiple-comments";}
if(typeof data==="number"||typeof data==="string"){$(el).addClass(pluralization).find('span.count').text(data);}});NPR.disqus.threads.postCount(el,storyId,forum);});},reloadCookie:function(options){methods.extend(options,this);return methods.element.each(function(){var el=this;NPR.disqus.reset(function(){NPR.disqus.reload();NPR.util.cookie.reset(function(){$('.avatar-form img').disqus('setAvatar');});});});},setAvatar:function(options){methods.extend(options,this);return methods.element.each(function(){var el=this;$(el).attr('src',NPR.util.cookie.getKey('da'));})},_bindOnSuccess:function(el,eventType,callback){$(el).bind(eventType+'.success',callback);},_displayActivity:function(element,data){var posts=$(element).find('.posts').first(),showMoreLink=true;if(data.cursor.hasNext===true){since=parseISO8601(data.response[data.response.length-1].createdAt).getTime()/1000;}else{since=undefined;showMoreLink=false;}
methods._hideLoadingComments(showMoreLink);activityElement=element;$.each(data.response,function(k,v){var post=$('<div>').appendTo(posts);var title=$('<div>').addClass('title').append($('<span>').text('Comment on: ')).appendTo(post);$('<a>').addClass('storylink').attr('href',v.object.url).text(v.object.thread.title).appendTo(title);$('<div>').addClass('datetime').text('Posted ').append(v.createdAt).appendTo(post);$('<div>').addClass('message').html(v.object.message).appendTo(post);});},_showLoadingComments:function(){$('.comment-activity .show-more button').hide();$('.comment-activity .show-more .loading').show();},_hideLoadingComments:function(showMoreLink){if(showMoreLink!==false){$('.comment-activity .show-more button').show();}
$('.comment-activity .show-more .loading').hide();}};$.fn.disqus=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.infinite');}};function parseISO8601(a,l){var d=a.split("T"),b=d[0].split("-"),f=d[1].split(":"),d=Number(b[0]),g=Number(b[1]-1),b=Number(b[2]),h=Number(f[0]),i=Number(f[1]),f=Number(f[2])||0;return l?new Date(d,g,b,h,i,f):new Date(Date.UTC(d,g,b,h,i,f));}})(jQuery);


AddNamespace('NPR.disqus');var disqus_shortname,disqus_identifier,disqus_url,disqus_config;(function($){var _methods={init:function(){var disqusData=_methods.getDisqusData();if(typeof disqusData.timestamp!=='undefined'){var expiration=3600;var ts=new Date(disqusData.timestamp*1000);var now=new Date();var diff=Math.ceil((now-ts)/1000);if(diff>expiration){methods.reset(methods.renderIframe);return;}}
methods.renderIframe();},getDisqusData:function(){var disqusData={};disqusData.userId=NPR.util.cookie.getKey('u');disqusData.hmac=NPR.util.cookie.getKey('dh');disqusData.message=NPR.util.cookie.getKey('dm');disqusData.timestamp=NPR.util.cookie.getKey('dt');return disqusData;},setDisqusConfig:function(){var disqusData=_methods.getDisqusData();if(typeof disqusData.timestamp!=='undefined'){$('#login-overlay-link').hide();disqus_config=function(){this.page.remote_auth_s3=disqusData.message+' '+disqusData.hmac+' '+disqusData.timestamp;this.page.api_key='K5ANvxVxS7meX7au7vJpUpqIgFqQcDBEH8q39Z8N750SFmBhaOLTsShueMWid956';this.callbacks.onNewComment=[function(){NPR.metrics.newComment(disqus_shortname);}];methods.waypoints(this);}}else{disqus_config=function(){methods.waypoints(this);}}},setDisqusGlobals:function(){disqus_shortname=$('#disqus-npr').data('shortname');disqus_identifier=$('#disqus-npr').data('identifier');disqus_url=$('#disqus-npr').data('url');disqus_title=$('#disqus-npr').data('title');}},methods={renderIframe:function(){var lt_ie9=$('html').hasClass('lt-ie9');var lt_large_bp=NPR.Devices.isScreenSmaller(NPR.BREAKPOINT.LARGE);if(typeof NPR.responsivePage!=='undefined'){if(NPR.responsivePage.renderMobileDisqus===false&&(lt_ie9||lt_large_bp)){return;}
else{NPR.responsivePage.registerCommentsActive();NPR.responsivePage.renderMobileDisqus=true;}}
_methods.setDisqusGlobals();_methods.setDisqusConfig();if($('#disqus-npr').length){var dsq=document.createElement('script');dsq.type='text/javascript';dsq.async=true;dsq.src='http://'+disqus_shortname+'.disqus.com/embed.js';(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(dsq);}},reload:function(){_methods.setDisqusConfig();if(typeof DISQUS!=='undefined'){DISQUS.reset({reload:true,config:disqus_config})}},reset:function(callback){$.get('/templates/community/renewCookie.php',{t:(new Date()).getTime()},function(d){callback();});},waypoints:function(config){config.callbacks.onReady=[function(){$.waypoints('refresh');}];config.callbacks.onPaginate=[function(){setTimeout(function(){$.waypoints('refresh');},2000)}];}};$.extend(true,NPR.disqus,methods);$(document).ready(_methods.init);})(jQuery);


AddNamespace("NPR.community");NPR.community.userCookie='at';NPR.community.handleAccountBanner=function(pElm){try{var cookie=NPR.util.cookie.full();if(typeof cookie!=="undefined"){var showProfileLink=false;if('tier'in cookie){showProfileLink=true;}
var displayName;if('u'in cookie&&'a'in cookie){if(showProfileLink){displayName='<a href="/templates/community/persona.php?uid='+cookie.u+'" data-metrics=\'{action:"Click Profile Link",label:"Account",category:"Global Navigation"}\'>'+cookie.a+'</a>';}else{displayName='<a href="/templates/reg/manage-account.php?tab=your_account&uid='+cookie.u+'" data-metrics=\'{action:"Click Profile Link",label:"Account",category:"Global Navigation"}\'>'+cookie.a+'</a>';}
$('.user-options .user-name').html(displayName);$('.subnav-user-account').addClass('is-logged-in');}}}catch(e){NPR.messaging.exception(e,'no extra debug','NPR.community.handleAccountBanner for events',NPR.messaging.constants.EVENT_JS_ERROR);}};NPR.community.handleAccountBanner();


AddNamespace("NPR.community");NPR.community.getBaseUrl=function(){try{var strHref=window.location.href;if(strHref.indexOf("?")>-1){return strHref.slice(0,strHref.indexOf("?"));}
return strHref;}catch(e){NPR.messaging.exception(e,'no debug data','NPR.community.getBaseUrl',NPR.messaging.constants.COMMUNITY_JS_ERROR);}};NPR.community.redrawAccountBanner=function(){try{if(typeof NPR.community.drawAccountBanner==="function"){var pElm=document.getElementById('loginPElm');NPR.community.drawAccountBanner(pElm);}else if(typeof NPR.community.handleAccountBanner==="function"){NPR.community.handleAccountBanner();}}catch(e){NPR.messaging.exception(e,' in story.js','NPR.community.redrawAccountBanner',NPR.messaging.constants.COMMUNITY_JS_ERROR);}};


$(document).ready(function(){try{$('.comment-count').disqus('comments');}catch(e){NPR.messaging.exception(e,'NPR.serverVars.storyId = '+NPR.serverVars.storyId,'doc.ready in story.js',NPR.messaging.constants.COMMUNITY_JS_ERROR);}});


$(document).ready(function(){$(".bookedition a.purchase").click(function(){$(".ecommercepop").hide();renderAdCountHtmlForEcommerce();var $parent=$(this).parent();var $targetPopup=$parent.siblings('div.ecommercepop');showEcommercePopup($targetPopup,$(this));return false;});$(".ecommercepop a.close").click(function(){$(".ecommercepop").hide();return false;});$("a.buylink1").click(function(){return false;});$("a.buyLink3").click(function(){return false;});$(".playlistitem a.purchase").click(function(){$(".ecommercepop").hide();renderAdCountHtmlForEcommerce();var $targetPopup=$(this).parents(".bucketblock").children(".ecommercepop");showEcommercePopup($targetPopup,$(this));});$(".ecommerce a.purchase, .ecommerce a.purchasepl").click(function(){$(".ecommercepop").hide();renderAdCountHtmlForEcommerce();var $targetPopup=$(this).parents(".ecommerce").children(".ecommercepop");showEcommercePopup($targetPopup,$(this));});$(".primary a.purchase, .secondary a.purchase").click(function(){$(".ecommercepop").hide();renderAdCountHtmlForEcommerce();var $targetPopup=$(this).parents(".bucketwrap").find(".ecommercepop");showEcommercePopup($targetPopup,$(this));});$('body').on('click','.ecommercepop a.close',function(){$(".ecommercepop").hide();});});var currentOpenDiv=null;function toggleEcommerceDiv(uniqueId,index,title,type)
{var ecommerceDiv=document.getElementById("ecommerceDiv"+uniqueId+'_'+index);if(ecommerceDiv!=null)
{if(currentOpenDiv!=null&&currentOpenDiv!=ecommerceDiv)
{currentOpenDiv.className=currentOpenDiv.className.replace("openDiv","closeDiv");}
if(ecommerceDiv.className.indexOf("closeDiv")!=-1)
{ecommerceDiv.className=ecommerceDiv.className.replace("closeDiv","openDiv");currentOpenDiv=ecommerceDiv;}
else
{ecommerceDiv.className=ecommerceDiv.className.replace("openDiv","closeDiv");currentOpenDiv=null;}}}
function renderAdCountHtmlForEcommerce()
{try{var adCountHtml;var zone;var ecommerceId=$('#ecommerceId').val()
var anchorTarget;var imageSrc;var testServer="";var generateHtml=false;var ord=Math.random()*10000000000000000;if(NPR.ServerConstants.dfpUsetestserver=="1"){testServer=';testserver=true';}
if(ecommerceId=="3"||ecommerceId=="1"){if(ecommerceId=="3"){zone="bsg_bookbuyers";}else{zone="bsg_buymusic";}
anchorTarget='http://'+NPR.ServerConstants.dfpServer+'/jump/'+
NPR.ServerConstants.dfpNetwork+'.'+NPR.ServerConstants.dfpSite+'/'+zone+testServer+';sz=1x1;ord='+ord+'?';imageSrc='http://'+NPR.ServerConstants.dfpServer+'/ad/'+
NPR.ServerConstants.dfpNetwork+'.'+NPR.ServerConstants.dfpSite+'/'+zone+testServer+';sz=1x1;ord='+ord+'?';adCountHtml='<a href="'+anchorTarget+'" target="_blank"><img alt="" src="'+imageSrc+'" border="0" alt=""/></a>';$('body').append(adCountHtml);}}catch(e){NPR.messaging.exception(e,'renderAdCountHtmlForEcommerce',NPR.messaging.constants.SPONSORSHIP_ERROR);}}
function showEcommercePopup($targetPopup,$puchaseLink){var $offset=$puchaseLink.offset();var $ecommercePopupContainer=$('body').find('#ecommercePopupContainer');if($ecommercePopupContainer.length===0){$ecommercePopupContainer=$('<div id="ecommercePopupContainer"></div>').appendTo('body');}else{$ecommercePopupContainer.empty();}
$ecommercePopupContainer.append($targetPopup.clone().fadeIn('fast'));var top=$offset.top;var left=$offset.left;var right=$(window).width()-($offset.left+$puchaseLink.outerWidth());var coordinates;if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.SMALL)){coordinates={'top':top,'left':'auto','right':'50%','margin-right':'-140px'};}else{coordinates={'top':top,'left':'auto','right':right,'margin-right':0};}
$ecommercePopupContainer.css(coordinates);if(!NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.SMALL)&&$ecommercePopupContainer.position().left<30){coordinates={'top':top,'left':left,'right':'auto','margin-right':0};$ecommercePopupContainer.css(coordinates);}}


$(document).ready(function(){$('.podicon').click(function(){try{$('.podbox').hide();$('.feed ul li').css("z-index","0");$(this).parent('li').css("z-index","90");$(this).siblings('.podbox').show();return false;}
catch(e){NPR.messaging.exception(e,'podicon onclick','rsspodcast.js',NPR.messaging.constants.RSS_PODCAST_JS_ERROR);}});$('.closethis').click(function(){try{$('.podbox').hide();return false;}
catch(e){NPR.messaging.exception(e,'closethis onclick','rsspodcast.js',NPR.messaging.constants.RSS_PODCAST_JS_ERROR);}});$('.subitunes').click(function(){try{$('.podbox').hide();}
catch(e){NPR.messaging.exception(e,'subitunes onclick','rsspodcast.js',NPR.messaging.constants.RSS_PODCAST_JS_ERROR);}});$('.podurl').focus(function(){try{if(this.value==this.defaultValue){this.select();}}
catch(e){NPR.messaging.exception(e,'podurl focus','rsspodcast.js',NPR.messaging.constants.RSS_PODCAST_JS_ERROR);}});});


AddNamespace("NPR.twitter");NPR.twitter.updateList=function(twitters){var statusHTML=[];try{if(twitters.length>0){var divName="twitter_list_"+twitters[0].user.screen_name;for(var i=0;i<twitters.length;i++){var username=twitters[i].user.screen_name;var status=twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,function(url){return'<a href="'+url+'">'+url+'</a>';}).replace(/\B@([_a-z0-9]+)/ig,function(reply){return reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';});statusHTML.push('<li><span class="tweet">'+status+'</span> <a class="timestamp" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id+'">'+NPR.twitter.relative_time(twitters[i].created_at)+'</a></li>');}
document.getElementById(divName).innerHTML=statusHTML.join('');}}catch(e){NPR.messaging.exception(e,'updating: '+divName,'NPR.twitter.updateList',NPR.messaging.constants.JAVASCRIPT_GENERAL_ISSUE);}}
NPR.twitter.relative_time=function(time_value){try{var values=time_value.split(" ");time_value=values[1]+" "+values[2]+", "+values[5]+" "+values[3];var parsed_date=Date.parse(time_value);var relative_to=(arguments.length>1)?arguments[1]:new Date();var delta=parseInt((relative_to.getTime()-parsed_date)/1000);delta=delta+(relative_to.getTimezoneOffset()*60);if(delta<60){return'less than a minute ago';}else if(delta<120){return'about a minute ago';}else if(delta<(60*60)){return(parseInt(delta/60)).toString()+' minutes ago';}else if(delta<(120*60)){return'about an hour ago';}else if(delta<(24*60*60)){return'about '+(parseInt(delta/3600)).toString()+' hours ago';}else if(delta<(48*60*60)){return'1 day ago';}else{return(parseInt(delta/86400)).toString()+' days ago';}}catch(e){NPR.messaging.exception(e,'time_value: '+time_value,'NPR.twitter.relative_time',NPR.messaging.constants.JAVASCRIPT_GENERAL_ISSUE);}}


AddNamespace("NPR.more");$(document).ready(function(){try{if(typeof NPR.serverVars!=='undefined'&&typeof NPR.serverVars.storyId!=='undefined'){var $articles=$('#relatedstories article');var $article_same_as_page=$('#relatedstories article#story'+NPR.serverVars.storyId);if($articles.length>1){$article_same_as_page.hide();}
var $visible_articles=$articles.filter(":visible");if($visible_articles.length>3){$visible_articles.slice(3,$articles.length).hide();}}}catch(e){NPR.messaging.exception(e,' in more.js ','NPR.more.docReady',NPR.messaging.constants.JAVASCRIPT_GENERAL_ISSUE);}});


AddNamespace('NPR.socialMedia');$(document).ready(function(){NPR.socialMedia.initSocialShare();});NPR.socialMedia.initSocialShare=function(){$('.eaf_link').click(function(e){e.preventDefault();if(typeof $(this).data('story-id')!=='undefined'){var storyId=$(this).data('story-id');NPR.socialMedia.shareViaEmail(storyId);}
return false;});var po=document.createElement('script');po.type='text/javascript';po.async=true;po.src='https://apis.google.com/js/plusone.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s);};NPR.socialMedia.openTwitterLoginWindow=function(url){try{var newwindow=window.open(url,'twitterAuthentication','height=400,width=800,location=yes');if(!newwindow){alert('We have detected that you are using popup blocking software. Please add www.npr.org to your safe list to be able to authenticate with Twitter and tweet this story. Thank you.');}
if(window.focus){newwindow.focus()}}catch(e){NPR.messaging.exception(e,'shareOnSocialMedia.js (NPR.socialMedia.openTwitterLoginWindow)','NPR.socialMedia',NPR.messaging.constants.COMMUNITY_JS_ERROR);}};NPR.socialMedia.shareOnTwitter=function(storyId,useParen){try{var station='',pageUrl,url,twitterSource='';if(NPR.Event){station=NPR.Event.getQuerystring('station');}
pageUrl=(station)?station:$('#modelShortUrl'+storyId).attr('value');if(NPR.socialMedia.twitterSource===undefined||NPR.socialMedia.twitterSource===''){twitterSource='@npr'+$('body').attr('id');}
else{twitterSource=NPR.socialMedia.twitterSource;}
url='http://twitter.com/share?url='+encodeURIComponent(pageUrl)+'&text='+'Via '+twitterSource+': '
+encodeURIComponent($('#title'+storyId).attr('value'));NPR.socialMedia.openTwitterLoginWindow(url);NPR.socialMedia.updateShareCount('twitter',storyId,useParen);}catch(e){NPR.messaging.exception(e,'shareOnSocialMedia.js (NPR.socialMedia.shareOnTwitter)','NPR.socialMedia',NPR.messaging.constants.COMMUNITY_JS_ERROR);}};NPR.socialMedia.openFacebookLoginWindow=function(url){try{var newwindow=window.open(url,'sharer','toolbar=0,status=0,width=580,height=400');if(!newwindow){alert('We have detected that you are using popup blocking software. Please add www.npr.org to your safe list to be able to authenticate with Facebook and share this story. Thank you.');}
if(window.focus){newwindow.focus()}}catch(e){NPR.messaging.exception(e,'shareOnSocialMedia.js (NPR.socialMedia.openFacebookLoginWindow)','NPR.socialMedia',NPR.messaging.constants.COMMUNITY_JS_ERROR);}};NPR.socialMedia.shareOnFacebook=function(storyId,useParen){try{var station='',pageUrlStart,seperator,pageUrl,url;if(NPR.Event){station=NPR.Event.getQuerystring('station');}
pageUrlStart=(station)?station:$('#modelFullUrl'+storyId).attr('value');seperator=pageUrlStart.indexOf('?')!=-1?'&':'?';pageUrl=pageUrlStart+seperator+"utm_campaign=storyshare&utm_source=facebook.com&utm_medium=social";url='http://www.facebook.com/dialog/feed?link='
+encodeURIComponent(pageUrl)+'&display=popup&app_id='+NPR.serverVars.facebookAppId
+'&redirect_uri='+encodeURIComponent(NPR.serverVars.closeurl);if(NPR.socialMedia.fbShareImageUrl){url+='&picture='+encodeURIComponent(NPR.socialMedia.fbShareImageUrl);}
NPR.socialMedia.openFacebookLoginWindow(url);NPR.socialMedia.updateShareCount('facebook',storyId,useParen);}catch(e){NPR.messaging.exception(e,'shareOnSocialMedia.js (NPR.socialMedia.shareOnFacebook)','NPR.socialMedia',NPR.messaging.constants.COMMUNITY_JS_ERROR);}};NPR.socialMedia.updateShareCount=function(mediaName,storyId,useParen){try{var urlParams='media='+mediaName+'&id='+storyId;var postToFeedURL='/templates/socialmedia/count/updateSocialMediaShareCount.php';var rightParen='';var leftParen='';if(useParen===undefined||useParen===''||useParen===true){rightParen=' (';leftParen=')';}
$.ajax({data:urlParams,url:postToFeedURL,success:function(data){var count=parseInt(data,10);if(!isNaN(count)){$('.'+mediaName+'Count').html(rightParen+data+leftParen);}}});}catch(e){NPR.messaging.exception(e,'shareOnSocialMedia.js (NPR.socialMedia.updateShareCount)','NPR.socialMedia',NPR.messaging.constants.COMMUNITY_JS_ERROR);}};NPR.socialMedia.shareViaEmail=function(storyId){try{var url="/emailafriend?storyId="+storyId;var newwindow=window.open(url,'sharer','toolbar=0,status=0,width=580,height=800');if(!newwindow){alert('We have detected that you are using popup blocking software. Please add www.npr.org to your safe list to enable sharing via email. Thank you.');}
if(window.focus){newwindow.focus()}}catch(e){NPR.messaging.exception(e,'shareOnSocialMedia.js','NPR.socialMedia.shareViaEmail',NPR.messaging.constants.COMMUNITY_JS_ERROR);}};

// Generated by CoffeeScript 1.4.0
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);


AddNamespace("NPR.Util.DateTime");NPR.Util.DateTime.secondsAsMMSS=function(arg_seconds){var total_seconds=parseInt(arg_seconds,10);var minutes=Math.floor(total_seconds/60);var seconds=total_seconds-(minutes*60);if(seconds<10){seconds="0"+seconds;}
return minutes+":"+seconds;};NPR.Util.DateTime.secondsAsHMMSS=function(arg_seconds){var sec_num=parseInt(arg_seconds,10);var hours=Math.floor(sec_num/3600);var minutes=Math.floor((sec_num-(hours*3600))/60);var seconds=sec_num-(hours*3600)-(minutes*60);if(minutes<10&&hours>0){minutes="0"+minutes;}
if(seconds<10){seconds="0"+seconds;}
if(hours===0){return minutes+':'+seconds;}else{return hours+':'+minutes+':'+seconds;}};


AddNamespace('NPR.positioning');NPR.positioning.elementsOverlap=function(el1,el2){try{var rect1=el1.getBoundingClientRect(),rect2=el2.getBoundingClientRect();return!(rect1.right<rect2.left||rect1.left>rect2.right||rect1.bottom<rect2.top||rect1.top>rect2.bottom);}catch(e){NPR.messaging.exception(e,'positioning.js','NPR.positioning.elementsOverlap');}}


AddNamespace('NPR.responsivePage');NPR.responsivePage.renderMobileDisqus=false;$(document).ready(function(){var $body=$('body');NPR.responsivePage.initGlobalFooter();NPR.responsivePage.initializeContentFooter();NPR.responsivePage.initSearchToggle();NPR.responsivePage.initCommentToggle();NPR.responsivePage.initEcommercePop();NPR.responsivePage.positionShareToolsAnd88ad();NPR.responsivePage.initEmbedModal();if(NPR.Devices.isScreenSmaller(NPR.BREAKPOINT.LARGE)){$('body').addClass('loaded-lt-large-bp');}
if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.LARGE)===true&&(!$body.hasClass('agg')&&!$body.hasClass('multimedia')&&!$body.hasClass('program'))){NPR.responsivePage.positionEggCarton();}else if($body.hasClass('agg')){NPR.responsivePage.stickyEggCarton();}
if($body.hasClass('agg')||$body.hasClass('program')){NPR.responsivePage.initCarousel();}
if($body.hasClass('agg')){if(('.flex-location-wrap').length>0){NPR.responsivePage.initCarouselFlexLoc();}}
if($body.hasClass('tmplSearch')){$('#filter-results').click(function(e){$(this).toggleClass('open');$('.searchRefine').slideToggle('fast');e.preventDefault();});}
$('.enlargebtn').click(function(){try{var $this=$(this),$enlargementImg=$('div.enlarge_measure img',$this.parents('.bucketwrap'));if(typeof $enlargementImg.attr('src')==='undefined'){$enlargementImg.bind('load',function(){if(typeof $enlargementImg.attr('src')==='undefined'){$enlargementImg.attr('src',$enlargementImg.data('original'));}
NPR.responsivePage.openEnlargment($(this));}).attr('src',$enlargementImg.data('original'));}else{NPR.responsivePage.openEnlargment($this);}}catch(e){NPR.messaging.exception(e,'responsive_page.js','NPR.responsivePage. enlargebtn click');}
return false;});try{$('.bucketwrap.statichtml').fitVids();}catch(e){}
$('.contentheader .toggle','.agg,.bio').clicktoggle(function(){$(this).addClass('active');$('.agg-tools').slideDown();},function(){$(this).removeClass('active');$('.agg-tools').slideUp();});if(window.location.hash.indexOf('#comment')===0){NPR.responsivePage.openComments();}});$(window).resize(function(){var $body=$('body');NPR.responsivePage.checkContentFooter();NPR.responsivePage.positionShareToolsAnd88ad();if(!$body.hasClass('agg')&&!$body.hasClass('multimedia')&&!$body.hasClass('program')){NPR.responsivePage.positionEggCarton();}});NPR.responsivePage.initGlobalFooter=function(){try{var globalFooterHoverConfig={over:NPR.responsivePage.globalFooterSubnavShow,timeout:0,out:NPR.responsivePage.globalFooterSubnavHide,interval:50};var footerSelector=$('.primary > ul > li','#nprfooter');if((!Modernizr.touch)&&(!NPR.Devices.isOnPhone()&&!NPR.Devices.isOnTablet())){footerSelector.hoverIntent(globalFooterHoverConfig);}else{footerSelector.on('click',function(e){var _this=this;var others=jQuery.grep(footerSelector,function(value){return value!=_this;});if($(this).children('ul').is(':visible')){NPR.responsivePage.globalFooterSubnavHide.apply(this);}else{e.preventDefault();NPR.responsivePage.globalFooterSubnavShow.apply(this,[others]);}});}}catch(e){NPR.messaging.exception(e,'responsive_page.js','NPR.responsivePage.initGlobalFooter');}};NPR.responsivePage.globalFooterSubnavShow=function(others){$(this).children('ul').fadeIn(300);$(others).each(function(index,value){NPR.responsivePage.globalFooterSubnavHide.apply(value);});};NPR.responsivePage.globalFooterSubnavHide=function(){$(this).children('ul').fadeOut();};NPR.responsivePage.initializeContentFooter=function(){if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.SMALL)||$('body').hasClass('agg')){NPR.responsivePage.contentFooterToggled=true;$('#contentfooter .module > h3 a, .adwrapper.housead h3 a').clicktoggle(function(){var $this=$(this);$this.parent().next('div').slideDown();$this.addClass('active');return false;},function(){var $this=$(this);$this.parent().next('div').slideUp();$this.removeClass('active');return false;});}else{NPR.responsivePage.contentFooterToggled=false;$('#contentfooter .module div, .adwrapper.housead div').css({'display':'','overflow':'visible'});$('#contentfooter .module > h3 a, .adwrapper.housead h3 a').on('click',function(){return false;});}};NPR.responsivePage.checkContentFooter=function(){if($('body').hasClass('agg')){return;}
if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.SMALL)&&!NPR.responsivePage.contentFooterToggled){$('#contentfooter .module > h3 a, .adwrapper.housead h3 a').clicktoggle(function(){NPR.responsivePage.contentFooterToggled=true;$(this).parent().next('div').slideDown();return false;},function(){$(this).parent().next('div').slideUp();return false;});}else if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.MEDIUM)&&NPR.responsivePage.contentFooterToggled){NPR.responsivePage.contentFooterToggled=false;$('#contentfooter .module div, .adwrapper.housead div').css({'display':'','overflow':'visible'});$('#contentfooter .module > h3 a, .adwrapper.housead h3 a').on('click',function(){return false;});}};NPR.responsivePage.initCarousel=function(){var $carouselEl=$('.stories','.blog-featured-series, .programs-rotator.two-up, .programs-rotator.three-up');if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.SMALL)){$carouselEl.addClass('carousel').attr('data-transition','slide').attr('data-paginate','');}
$(window).resize(function(){if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.SMALL)){$carouselEl.addClass('carousel').attr('data-transition','slide').attr('data-paginate','');if($('.carousel-nav').length===0){if('carousel'in $){$carouselEl.carousel();}}}else{$carouselEl.removeClass('carousel');$('.carousel-nav').remove();}});};NPR.responsivePage.initCarouselFlexLoc=function(){if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.SMALL)){$('.agglocation','.flex-location-wrap').each(function(i){var $flexLocation=$(this);var minHeight=0;if($flexLocation.find('.bucketwrap').length>1){$flexLocation.find('.bucketwrap > div').each(function(){var height=$(this).outerHeight();if(minHeight<height){minHeight=height+37;}});$flexLocation.find('.bucketwrap > div').css('min-height',minHeight);$flexLocation.addClass('carousel').attr('data-transition','slide').attr('data-paginate','');}});}
$(window).resize(function(){var $flexLocWrap=$('.flex-location-wrap');if(!NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.SMALL)){$('.agglocation',$flexLocWrap).removeClass('carousel');$('.carousel-nav',$flexLocWrap).remove();$('.bucketwrap > div',$flexLocWrap).removeAttr('style');$('.bucketwrap',$flexLocWrap).removeClass('carousel-item');}});};NPR.responsivePage.registerCommentsActive=function(){$('.comment-head a').addClass('active');};NPR.responsivePage.openComments=function(){NPR.responsivePage.registerCommentsActive();$('#disqus-npr').slideDown('slow');if(NPR.responsivePage.renderMobileDisqus===false){NPR.responsivePage.renderMobileDisqus=true;NPR.disqus.renderIframe();}};NPR.responsivePage.initCommentToggle=function(){var $commentToggle=$('.comment-head a'),$disqusModuleDiv=$('#disqus-npr'),$socialToolsLink=$('.social a.comment-count'),$commentBlockDiv=$('#commentBlock');var closeComments=function(){$commentToggle.removeClass('active');$disqusModuleDiv.slideUp('fast');};$commentToggle.click(function(e){e.preventDefault();if($(this).hasClass('active')){closeComments();}else{NPR.responsivePage.openComments();}});$socialToolsLink.click(function(e){e.preventDefault();$('html, body').animate({scrollTop:$commentBlockDiv.offset().top},500);if(!$commentToggle.hasClass('active')){NPR.responsivePage.openComments();}});};NPR.responsivePage.initSearchToggle=function(){$('.search-toggle').clicktoggle(function(event){var $form=$(this).parent('form'),$input=$('input[type="search"]',$form);event.preventDefault();$form.addClass('is-active');$input.focus();},function(event){event.preventDefault();var $form=$(this).parent('form');$form.removeClass('is-active');});};NPR.responsivePage.openEnlargment=function(theImage){var $body=$('body'),$contentDiv=$(theImage).parents('.bucketwrap').children('.enlarge_html'),$measureDiv=$(theImage).parents('.bucketwrap').children('.enlarge_measure');if($('#mediaEnlargeOverlay').length===0){$body.append('<div id="mediaEnlargeOverlay"><div id="mediaEnlargeFrame"><a href="#" class="close">Close</a></div></div>');$('#mediaEnlargeFrame').append($measureDiv.html()+$contentDiv.html());}
$('html').addClass('mediaEnlarged');NPR.responsivePage.doPositionLightbox();$(window).resize(NPR.responsivePage.doPositionLightbox);$('#mediaEnlargeOverlay, #mediaEnlargeFrame img, #mediaEnlargeFrame .close').click(function(e){NPR.responsivePage.closeMediaEnlarge(e);});$(document).on('keyup.mediaEnlargement',function(e){if(e.keyCode===27){NPR.responsivePage.closeMediaEnlarge();}});};NPR.responsivePage.doPositionLightbox=function(){var $mediaEnlargeFrame=$('#mediaEnlargeFrame');var viewportWidth=$(window).width();var viewportHeight=$(window).height();var lightboxWidth=viewportWidth*.95;var lightboxHeight=viewportHeight*.95;if(lightboxHeight<350){lightboxHeight=350;}
var leftOffset=(viewportWidth-lightboxWidth)/2;var topOffset=((viewportHeight-lightboxHeight)/2)+$(window).scrollTop();if(viewportWidth>=1300){lightboxWidth=1300*.95;leftOffset=(1300-lightboxWidth)/2;}
$mediaEnlargeFrame.css({width:lightboxWidth,height:lightboxHeight,top:topOffset,left:leftOffset});var imagedataHeight=$('.image_data',$mediaEnlargeFrame).outerHeight()+parseInt($('.image_data',$mediaEnlargeFrame).css('bottom'));var imgWrapHeight=$mediaEnlargeFrame.height()-imagedataHeight;$('.img_wrap',$mediaEnlargeFrame).css({height:imgWrapHeight,lineHeight:imgWrapHeight+'px'});};NPR.responsivePage.closeMediaEnlarge=function(e){if(typeof e!=='undefined'){e.preventDefault();}
$('html').removeClass('mediaEnlarged');$('#mediaEnlargeOverlay').remove();$(document).off('keyup.mediaEnlargement');};NPR.responsivePage.initEcommercePop=function(){$('.purchase > a','#storyEcommerce').click(function(e){var $this=$(this);$('.purchase','#storyEcommerce').not($this.parent()).removeClass('selected');$this.parent().toggleClass('selected');e.preventDefault();});};NPR.responsivePage.positionEggCarton=function(){if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.LARGE)===true&&$('#resMore','.story').length>0){$('#resMore').appendTo('#main_sidebar');NPR.responsivePage.stickyEggCarton();}else if(NPR.Devices.isScreenSmallerOrEqual(NPR.BREAKPOINT.MEDIUM)===true&&$('#main_sidebar #resMore').length>0&&$('.story #resMore').length===0){$('#main_sidebar #resMore').detach().insertBefore('.story #commentBlock');NPR.responsivePage.removeECwaypoints();}};NPR.responsivePage.stickyEggCarton=function(){var $body=$('body'),$mainSidebar=$('#main_sidebar'),$relatedStoriesWrap=$('#relatedstorieswrap');if($body.hasClass('tmplSearch')){return;}
if($mainSidebar.length===0){return;}
if($('.corrections-header').length>0){return;}
if(!$body.hasClass('tmplAggNews')&&$('#resMore').length!==0){$('#resMore').waypoint(function(direction){if($('#resMore',$mainSidebar).length>0){if(direction==='down'){$relatedStoriesWrap.addClass('sticky');}else{$relatedStoriesWrap.removeClass('sticky');}}});}else if($('#egg-carton-wrap').length!==0){$('#egg-carton-wrap').waypoint(function(direction){if($('#resMore',$mainSidebar).length>0){if(direction==='down'){$('#egg-carton').addClass('sticky');}else{$('#egg-carton').removeClass('sticky');}}});}
if(!$body.hasClass('agg')){$('.adwrapper.housead').waypoint(function(direction){if($('#resMore',$mainSidebar).length>0){if(direction==='down'){$mainSidebar.css('height','100%');$relatedStoriesWrap.addClass('stopped');$relatedStoriesWrap.css({bottom:0});}else{$('#relatedstorieswrap, #main_sidebar').attr('style','');$relatedStoriesWrap.removeClass('stopped');}}},{offset:function(){return $relatedStoriesWrap.outerHeight();}});}};NPR.responsivePage.removeECwaypoints=function(){$('#resMore').waypoint('destroy');$('.adwrapper.housead').waypoint('destroy');$('#relatedstorieswrap, #main_sidebar').attr('style','');$('#relatedstorieswrap').removeClass('stopped sticky');};NPR.responsivePage.positionShareToolsAnd88ad=function(){var $body=$('body');if(!$body.hasClass('agg')&&!$body.hasClass('multimedia')&&!$body.hasClass('bio')&&!$body.hasClass('tmplEventMusicStory')&&!$body.hasClass('tmplEventMusicAgg')&&!$body.hasClass('podcast')){if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.MEDIUM)===true){$('.story .social').detach().appendTo('body');}else{$('body > .social').detach().appendTo('.story > .social-wrap');}
var $social=$('.social');var $ad88=$('#ad-88-wrap');var contentWidth=$('#wrapper').width();var viewportWidth=$(window).width();var nonContentSpace=viewportWidth-contentWidth;if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.LARGEST)===true&&($('body').hasClass('tmplBookLanding')||$('body').hasClass('tmplBookAuthor')||$('body').hasClass('program'))){var amountToOffset=(nonContentSpace/2)+342;$ad88.css('right',amountToOffset);$social.css('right',amountToOffset);}
else if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.LARGEST)===true){var amountToOffset=(nonContentSpace/2)+30;$ad88.css('left',amountToOffset);$social.css('left',amountToOffset);}else{$ad88.css({'right':'','left':''});$social.css({'right':'','left':''});}
$('body').addClass('share-and-88-positioned');}};NPR.responsivePage.initEmbedModal=function(){if(!Modernizr.touch){$('.audio-embed-modal .embed-url').on('click',function(e){$(this).select();});}
$('#wrapper').on('click','.bucketwrap.resaudio .embed, .listentools .embed, .audio-player .embed',function(e){e.preventDefault();var $audioModule=$(this).parents('.bucketwrap.resaudio');if($audioModule.length===0){$audioModule=$(this).parents('.audio-player');if($audioModule.length===0){$audioModule=$(this).parents('.playlistitem')}}
$audioModule.find('.audio-embed-modal').fadeIn('fast');})
$('#wrapper').on('click','.bucketwrap.resaudio .audio-embed-modal .embed-close, .listentools .audio-embed-modal .embed-close, .audio-player .audio-embed-modal .embed-close',function(e){e.preventDefault();e.stopPropagation();var $audioModule=$(this).parents('.bucketwrap.resaudio');if($audioModule.length===0){$audioModule=$(this).parents('.audio-player');if($audioModule.length===0){$audioModule=$(this).parents('.playlistitem')}}
$audioModule.find('.audio-embed-modal').fadeOut('fast');})};


AddNamespace('NPR.responsiveSharetools');$(document).ready(function(){if(!$('body').hasClass('seamus-preview')){try{if($('body').hasClass('tmplNewsStory')||$('body').hasClass('tmplMusicStory')||$('body').hasClass('tmplBlogNewsStory')||$('body').hasClass('tmplBlogMusicStory')||$('body').hasClass('tmplBlogAboutStory')||$('body').hasClass('tmplBookStory')){NPR.responsiveSharetools.calcAndApplySpecialPositioning();$(window).on('has-88-ad',function(){NPR.responsiveSharetools.handle88ad();});NPR.responsiveSharetools.setupWaypoints();}else if($('body').hasClass('tmplPodcastChannel')){NPR.responsiveSharetools.positionForPodcastChannelLayout();$(window).on('resize',function(){NPR.responsiveSharetools.positionForPodcastChannelLayout();});}}catch(e){NPR.messaging.exception(e,'responsive_sharetools.js','NPR.responsiveSharetools');}}});NPR.responsiveSharetools.setupWaypoints=function(){var $storyMeta=$('#story-meta');if($storyMeta.length>0){$storyMeta.waypoint(function(direction){if(direction=='up'){NPR.responsiveSharetools.calcAndApplySpecialPositioning('top');}else{NPR.responsiveSharetools.removeSpecialPositioning();}},{offset:function(){var offset=NPR.responsiveSharetools.calcShareToolWaypointOffset();return $(window).height()-$('#story-meta').outerHeight(true)-$('.social').height()-offset;}});}
var $commentBlock=$('#commentBlock');if($commentBlock.length>0){$commentBlock.waypoint(function(direction){if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.LARGE)){if(direction=='down'){NPR.responsiveSharetools.calcAndApplySpecialPositioning('bottom');}else{NPR.responsiveSharetools.removeSpecialPositioning();}}},{offset:function(){return $(window).height();}});}
var $relatedStoriesWrap=$('#relatedstorieswrap');if($relatedStoriesWrap.length>0){$relatedStoriesWrap.waypoint(function(direction){if(NPR.Devices.isScreenWithin(NPR.BREAKPOINT.MEDIUM)){if(direction=='down'){NPR.responsiveSharetools.calcAndApplySpecialPositioning('bottom');}else{NPR.responsiveSharetools.removeSpecialPositioning();}}},{offset:function(){return $(window).height();}});}};NPR.responsiveSharetools.destroyWaypoints=function(){var $storyMeta=$('#story-meta');if($storyMeta.length>0){$($storyMeta).waypoint('destroy');}
var $commentBlock=$('#commentBlock');if($commentBlock.length>0){$commentBlock.waypoint('destroy');}
var $relatedStoriesWrap=$('#relatedstorieswrap');if($relatedStoriesWrap.length>0){$relatedStoriesWrap.waypoint('destroy');}}
NPR.responsiveSharetools.checkShareToolsOverlap=function(){try{if(NPR.positioning.elementsOverlap($('.social').get(0),$('#story-meta').get(0))||NPR.positioning.elementsOverlap($('.social').get(0),$('.storytitle').get(0))||NPR.positioning.elementsOverlap($('.social').get(0),$('.contentheader').not('.reprise').get(0))){$('body').addClass('dock-sharetools');$('.social').css(NPR.responsiveSharetools.calcShareToolsDockPos('top'));}else{$('body').removeClass('dock-sharetools');}}catch(e){NPR.messaging.exception(e,'responsive_sharetools.js','NPR.responsiveSharetools.checkShareToolsOverlap');}}
NPR.responsiveSharetools.calcShareToolWaypointOffset=function(){if($('body').hasClass('has-88-ad')){return 115;}else{return 40;}};NPR.responsiveSharetools.calcShareToolsDockPos=function(area){if(area==='top'){var offset=$('#story-meta').offset().top+$('#story-meta').outerHeight(true)+15;}else if(area==='bottom'){var adPos=null;if($('body').hasClass('has-88-ad')){adPos=$('#ad-88-wrap').height()+15;}
if(NPR.Devices.isScreenWithin(NPR.BREAKPOINT.MEDIUM)){var offset=$('#resMore').offset().top-$('.social').height()-adPos-30;}else if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.LARGE)){var offset=$('#commentBlock').offset().top-$('.social').height()-adPos-30;}}
var offsetCSS={top:offset,bottom:'auto'};return offsetCSS;};NPR.responsiveSharetools.calc88AdDockPos=function(){var offset=parseInt($('.social').css('top'))+$('.social').height()+20;var offsetCSS={top:offset,bottom:'auto'};return offsetCSS;};NPR.responsiveSharetools.calcAndApplySpecialPositioning=function(direction){NPR.responsiveSharetools.checkShareToolsOverlap();if(direction==='top'||direction==='bottom'){$('body').addClass('dock-sharetools dock-sharetools-'+direction);$('.social').css(NPR.responsiveSharetools.calcShareToolsDockPos(direction));$('#ad-88-wrap').css(NPR.responsiveSharetools.calc88AdDockPos());}
$('body').addClass('social-is-ready');};NPR.responsiveSharetools.removeSpecialPositioning=function(){$('body').removeClass('dock-sharetools dock-sharetools-top dock-sharetools-bottom');$('.social, #ad-88-wrap').css({'top':'','bottom':''});};NPR.responsiveSharetools.handle88ad=function(){NPR.responsiveSharetools.destroyWaypoints();NPR.responsiveSharetools.calcAndApplySpecialPositioning();NPR.responsiveSharetools.setupWaypoints();};NPR.responsiveSharetools.positionForPodcastChannelLayout=function(){if(NPR.Devices.isScreenWithin(NPR.BREAKPOINT.SMALL)){if($('.detail-overview-content .social-wrap').length===0){$('.social-wrap').detach().appendTo('.detail-overview-content');}}else{if($('.channel-detail-overview .col1 .social-wrap').length===0){var $tools=$('.social-wrap').detach().appendTo('.channel-detail-overview .col1');}}
if(!$('body').hasClass('ready-sharetools')){$('body').addClass('ready-sharetools');}};


(function($){$.fn.fitVids=function(options){var settings={customSelector:null}
var div=document.createElement('div'),ref=document.getElementsByTagName('base')[0]||document.getElementsByTagName('script')[0];div.className='fit-vids-style';div.innerHTML='&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';ref.parentNode.insertBefore(div,ref);if(options){$.extend(settings,options);}
return this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];if(settings.customSelector){selectors.push(settings.customSelector);}
var $allVideos=$(this).find(selectors.join(','));$allVideos.each(function(){var $this=$(this);if(this.tagName.toLowerCase()=='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}
var height=(this.tagName.toLowerCase()=='object'||$this.attr('height'))?$this.attr('height'):$this.height(),width=$this.attr('width')?$this.attr('width'):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+Math.floor(Math.random()*999999);$this.attr('id',videoID);}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+"%");$this.removeAttr('height').removeAttr('width');});});}})(jQuery);


AddNamespace('NPR.enhancements');NPR.enhancements.testIE8OrLess=function(){if(navigator.appName=='Microsoft Internet Explorer')
{var rv=false;var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null){rv=parseFloat(RegExp.$1);}
if(rv!==false){if(rv<=8.0){return true;}}}
return false;};NPR.enhancements.testHtml5Audio=function(){var start=navigator.userAgent.indexOf("Android ");if(start>=0){var majorversion=parseInt(navigator.userAgent.substr(start+8,1));if(!isNaN(majorversion)&&parseInt(majorversion)<3){return true;}}
return!(Modernizr.audio.mp3);};NPR.enhancements.testHtml5Video=function(element){var start=navigator.userAgent.indexOf("Android ");if(start>=0){var majorversion=parseInt(navigator.userAgent.substr(start+8,1));if(!isNaN(majorversion)&&parseInt(majorversion)<3){return true;}}
var video=element.find('video').first();if(typeof video.get(0)==='undefined'){return true;}
video=video.attr('src').split('.').pop();if(video==='mp4'){video='h264';}
return!(Modernizr.video[video]);};NPR.enhancements.hideComments=function(){$('div.social ul li.comments').hide();};NPR.enhancements.showAudioPlaceholder=function($this){$this.html('<div class="enhance-replace audio resaudio">'+'<div class="listenicon">'+'<span class="disabled"></span>'+'</div>'+'<div class="avcontent listen">'+'<h3>Audio Unavailable</h3>'+'<p>Try one of our other <a href="/listen">listening options</a></p>'+'</div>'+'</div>').show();};NPR.enhancements.showInlineVideoPlaceholder=function($this){$this.html('<div class="enhance-replace video resvideo">'+'<div class="videoicon">'+'<span class="disabled"></span>'+'</div>'+'<div class="avcontent video">'+'<h3>Video Unavailable</h3>'+'</div>'+'</div>').show();};NPR.enhancements.bindEnhancements=function(){if(NPR.Devices.isOnPhone()===true||NPR.Devices.isOnTablet()===true){$('.resaudio').enhance({testMethod:NPR.enhancements.testHtml5Audio,resultMethod:NPR.enhancements.showAudioPlaceholder});$('.video-popup').enhance({testMethod:NPR.enhancements.testHtml5Video,resultMethod:NPR.enhancements.showInlineVideoPlaceholder});}};$(document).ready(NPR.enhancements.bindEnhancements);

;(function($){$(function(){if(NPR.Devices.isScreenLargerOrEqual(NPR.BREAKPOINT.MEDIUM)===true)
{var cachebust=(Math.random()+"").substr(2);var protocol="https:"==document.location.protocol?'https:':'http:';new Image().src=protocol+"//20501671p.rfihub.com/ca.gif?rb=3035&ca=20501671&ra="+cachebust;}});})(jQuery);jQuery(document).ready(function($){if(NPR.Devices.isScreenWithin(NPR.BREAKPOINT.SMALL))
{var breakpoint='mobile'}
else if(NPR.Devices.isScreenWithin(NPR.BREAKPOINT.MEDIUM))
{var breakpoint='tablet'}
else
{var breakpoint='desktop'}
$('script[data-centerstage]').each(function(){var settings=$(this).data(breakpoint);for(i in settings)
{$(this).attr('data-'+i,settings[i]);}
$(this).attr('src',$(this).data('src'));$(this).parents('.centerstage').attr('data-sizing',breakpoint);});$('script[data-music-special-sponsorship]').each(function(){var settings=$(this).data(breakpoint);for(i in settings)
{$(this).attr('data-'+i,settings[i]);}
$(this).attr('src',$(this).data('src'));$(this).parents('.music-special-sponsorship').attr('data-sizing',breakpoint);});});

;(function($){$.fn.drag=function(str,arg,opts){var type=typeof str=="string"?str:"",fn=$.isFunction(str)?str:$.isFunction(arg)?arg:null;if(type.indexOf("drag")!==0)
type="drag"+type;opts=(str==fn?arg:opts)||{};return fn?this.bind(type,opts,fn):this.trigger(type);};var $event=$.event,$special=$event.special,drag=$special.drag={defaults:{which:1,distance:0,not:':input',handle:null,relative:false,drop:true,click:false},datakey:"dragdata",noBubble:true,add:function(obj){var data=$.data(this,drag.datakey),opts=obj.data||{};data.related+=1;$.each(drag.defaults,function(key,def){if(opts[key]!==undefined)
data[key]=opts[key];});},remove:function(){$.data(this,drag.datakey).related-=1;},setup:function(){if($.data(this,drag.datakey))
return;var data=$.extend({related:0},drag.defaults);$.data(this,drag.datakey,data);$event.add(this,"touchstart mousedown",drag.init,data);if(this.attachEvent)
this.attachEvent("ondragstart",drag.dontstart);},teardown:function(){var data=$.data(this,drag.datakey)||{};if(data.related)
return;$.removeData(this,drag.datakey);$event.remove(this,"touchstart mousedown",drag.init);drag.textselect(true);if(this.detachEvent)
this.detachEvent("ondragstart",drag.dontstart);},init:function(event){if(drag.touched)
return;var dd=event.data,results;if(event.which!=0&&dd.which>0&&event.which!=dd.which)
return;if($(event.target).is(dd.not))
return;if(dd.handle&&!$(event.target).closest(dd.handle,event.currentTarget).length)
return;drag.touched=event.type=='touchstart'?this:null;dd.propagates=1;dd.mousedown=this;dd.interactions=[drag.interaction(this,dd)];dd.target=event.target;dd.pageX=event.pageX;dd.pageY=event.pageY;dd.dragging=null;results=drag.hijack(event,"draginit",dd);if(!dd.propagates)
return;results=drag.flatten(results);if(results&&results.length){dd.interactions=[];$.each(results,function(){dd.interactions.push(drag.interaction(this,dd));});}
dd.propagates=dd.interactions.length;if(dd.drop!==false&&$special.drop)
$special.drop.handler(event,dd);drag.textselect(false);if(drag.touched)
$event.add(drag.touched,"touchmove touchend",drag.handler,dd);else
$event.add(document,"mousemove mouseup",drag.handler,dd);if(!drag.touched||dd.live)
return false;},interaction:function(elem,dd){var offset=$(elem)[dd.relative?"position":"offset"]()||{top:0,left:0};return{drag:elem,callback:new drag.callback(),droppable:[],offset:offset};},handler:function(event){var dd=event.data;switch(event.type){case!dd.dragging&&'touchmove':event.preventDefault();case!dd.dragging&&'mousemove':if(Math.pow(event.pageX-dd.pageX,2)+Math.pow(event.pageY-dd.pageY,2)<Math.pow(dd.distance,2))
break;event.target=dd.target;drag.hijack(event,"dragstart",dd);if(dd.propagates)
dd.dragging=true;case'touchmove':event.preventDefault();case'mousemove':if(dd.dragging){drag.hijack(event,"drag",dd);if(dd.propagates){if(dd.drop!==false&&$special.drop)
$special.drop.handler(event,dd);break;}
event.type="mouseup";}
case'touchend':case'mouseup':default:if(drag.touched)
$event.remove(drag.touched,"touchmove touchend",drag.handler);else
$event.remove(document,"mousemove mouseup",drag.handler);if(dd.dragging){if(dd.drop!==false&&$special.drop)
$special.drop.handler(event,dd);drag.hijack(event,"dragend",dd);}
drag.textselect(true);if(dd.click===false&&dd.dragging)
$.data(dd.mousedown,"suppress.click",new Date().getTime()+5);dd.dragging=drag.touched=false;break;}},hijack:function(event,type,dd,x,elem){if(!dd)
return;var orig={event:event.originalEvent,type:event.type},mode=type.indexOf("drop")?"drag":"drop",result,i=x||0,ia,$elems,callback,len=!isNaN(x)?x:dd.interactions.length;event.type=type;event.originalEvent=null;dd.results=[];do if(ia=dd.interactions[i]){if(type!=="dragend"&&ia.cancelled)
continue;callback=drag.properties(event,dd,ia);ia.results=[];$(elem||ia[mode]||dd.droppable).each(function(p,subject){callback.target=subject;event.isPropagationStopped=function(){return false;};result=subject?$event.dispatch.call(subject,event,callback):null;if(result===false){if(mode=="drag"){ia.cancelled=true;dd.propagates-=1;}
if(type=="drop"){ia[mode][p]=null;}}
else if(type=="dropinit")
ia.droppable.push(drag.element(result)||subject);if(type=="dragstart")
ia.proxy=$(drag.element(result)||ia.drag)[0];ia.results.push(result);delete event.result;if(type!=="dropinit")
return result;});dd.results[i]=drag.flatten(ia.results);if(type=="dropinit")
ia.droppable=drag.flatten(ia.droppable);if(type=="dragstart"&&!ia.cancelled)
callback.update();}
while(++i<len)
event.type=orig.type;event.originalEvent=orig.event;return drag.flatten(dd.results);},properties:function(event,dd,ia){var obj=ia.callback;obj.drag=ia.drag;obj.proxy=ia.proxy||ia.drag;obj.startX=dd.pageX;obj.startY=dd.pageY;obj.deltaX=event.pageX-dd.pageX;obj.deltaY=event.pageY-dd.pageY;obj.originalX=ia.offset.left;obj.originalY=ia.offset.top;obj.offsetX=obj.originalX+obj.deltaX;obj.offsetY=obj.originalY+obj.deltaY;obj.drop=drag.flatten((ia.drop||[]).slice());obj.available=drag.flatten((ia.droppable||[]).slice());return obj;},element:function(arg){if(arg&&(arg.jquery||arg.nodeType==1))
return arg;},flatten:function(arr){return $.map(arr,function(member){return member&&member.jquery?$.makeArray(member):member&&member.length?drag.flatten(member):member;});},textselect:function(bool){$(document)[bool?"unbind":"bind"]("selectstart",drag.dontstart).css("MozUserSelect",bool?"":"none");document.unselectable=bool?"off":"on";},dontstart:function(){return false;},callback:function(){}};drag.callback.prototype={update:function(){if($special.drop&&this.available.length)
$.each(this.available,function(i){$special.drop.locate(this,i);});}};var $dispatch=$event.dispatch;$event.dispatch=function(event){if($.data(this,"suppress."+event.type)-new Date().getTime()>0){$.removeData(this,"suppress."+event.type);return;}
return $dispatch.apply(this,arguments);};var touchHooks=$event.fixHooks.touchstart=$event.fixHooks.touchmove=$event.fixHooks.touchend=$event.fixHooks.touchcancel={props:"clientX clientY pageX pageY screenX screenY".split(" "),filter:function(event,orig){if(orig){var touched=(orig.touches&&orig.touches[0])||(orig.changedTouches&&orig.changedTouches[0])||null;if(touched)
$.each(touchHooks.props,function(i,prop){event[prop]=touched[prop];});}
return event;}};$special.draginit=$special.dragstart=$special.dragend=drag;})(jQuery);