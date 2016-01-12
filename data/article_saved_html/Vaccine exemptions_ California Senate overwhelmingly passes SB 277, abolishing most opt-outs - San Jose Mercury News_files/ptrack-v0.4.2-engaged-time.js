/*! parsely-js-api - v0.4.1 - 2015-06-02
 * http://www.parsely.com/
 * 2015 Parsely, Inc. */
!function(){function f(a){return 10>a?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1)g[c]=str(c,i)||"null";return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;f>c;c+=1)d=rep[c],"string"==typeof d&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e}}this.PARSELY||(this.PARSELY={});var root=this.PARSELY;root.JSON||(root.JSON={}),"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof root.JSON.stringify&&(root.JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;c>d;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof root.JSON.parse&&(root.JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(){this.PARSELY||(this.PARSELY={});var a=this.PARSELY,b=!1,c=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;a.Class=function(){},a.Class.extend=function(a){function d(){!b&&this.init&&this.init.apply(this,arguments)}var e=this.prototype;b=!0;var f=new this;b=!1;for(var g in a)f[g]="function"==typeof a[g]&&"function"==typeof e[g]&&c.test(a[g])?function(a,b){return function(){var c=this._super;this._super=e[a];var d=b.apply(this,arguments);return this._super=c,d}}(g,a[g]):a[g];return d.prototype=f,d.constructor=d,d.extend=arguments.callee,d}}(),function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:("undefined"==typeof PARSELY&&(PARSELY={}),PARSELY.$=PARSELY.jQuery=b(a,!1))}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=r.type(a);return"function"===c||r.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a){var b;for(b in a)if(("data"!==b||!r.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function e(a,b,c,d){if(r.acceptData(a)){var e,f,g=r.expando,h=a.nodeType,i=h?r.cache:a,k=h?a[g]:a[g]&&g;if(k&&i[k]&&(d||i[k].data)||void 0!==c||"string"!=typeof b)return k||(k=h?a[g]=j.pop()||r.guid++:g),i[k]||(i[k]=h?{}:{toJSON:r.noop}),("object"==typeof b||"function"==typeof b)&&(d?i[k]=r.extend(i[k],b):i[k].data=r.extend(i[k].data,b)),f=i[k],d||(f.data||(f.data={}),f=f.data),void 0!==c&&(f[r.camelCase(b)]=c),"string"==typeof b?(e=f[b],null==e&&(e=f[r.camelCase(b)])):e=f,e}}function f(){return!0}function g(){return!1}function h(){try{return y.activeElement}catch(a){}}function i(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||J.test(a)?d(a,e):i(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)i(a+"["+e+"]",b[e],c,d)}var j=[],k=j.slice,l=(j.concat,j.push),m=(j.indexOf,{}),n=m.toString,o=m.hasOwnProperty,p={},q="1.11.1 -deprecated,-css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([\da-z])/gi,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,selector:"",length:0,toArray:function(){return k.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:k.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return r.each(this,a,b)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(k.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:l,sort:j.sort,splice:j.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(r.isPlainObject(c)||(b=r.isArray(c)))?(b?(b=!1,f=a&&r.isArray(a)?a:[]):f=a&&r.isPlainObject(a)?a:{},g[d]=r.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray||function(a){return"array"===r.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!r.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==r.type(a)||a.nodeType||r.isWindow(a))return!1;try{if(a.constructor&&!o.call(a,"constructor")&&!o.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(p.ownLast)for(b in a)return o.call(a,b);for(b in a);return void 0===b||o.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?m[n.call(a)]||"object":typeof a},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?r.merge(d,"string"==typeof a?[a]:a):l.call(d,a)),d},guid:1,now:function(){return+new Date},support:p}),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){m["[object "+b+"]"]=b.toLowerCase()});var w,x=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=r.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),c&&(c[1]||!b)){if(c[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),x.test(c[1])&&r.isPlainObject(b))for(c in b)r.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=y.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=y,this.selector=a,this}}else{if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(r.isFunction(a))return"undefined"!=typeof w.ready?w.ready(a):a(r)}return void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),r.makeArray(a,this)};A.prototype=r.fn,w=r(y);var B,C=/\S+/g,D="undefined";for(B in r(p))break;p.ownLast="0"!==B,r.acceptData=function(a){var b=r.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};r.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?r.cache[a[r.expando]]:a[r.expando],!!a&&!d(a)},data:function(a,b,c){return e(a,b,c)},_data:function(a,b,c){return e(a,b,c,!0)}});/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;!function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(p[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),p[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var E=/^key/,F=/^(?:mouse|pointer|contextmenu)|click/,G=/^(?:focusinfocus|focusoutblur)$/,H=/^([^.]*)(?:\.(.+)|)$/;r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=r._data(a);if(q){for(c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=r.guid++),(g=q.events)||(g=q.events={}),(k=q.handle)||(k=q.handle=function(a){return typeof r===D||a&&r.event.triggered===a.type?void 0:r.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(C)||[""],h=b.length;h--;)f=H.exec(b[h])||[],n=p=f[1],o=(f[2]||"").split(".").sort(),n&&(j=r.event.special[n]||{},n=(e?j.delegateType:j.bindType)||n,j=r.event.special[n]||{},l=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},i),(m=g[n])||(m=g[n]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,o,k)!==!1||(a.addEventListener?a.addEventListener(n,k,!1):a.attachEvent&&a.attachEvent("on"+n,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),r.event.global[n]=!0);a=null}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||y],n=o.call(b,"type")?b.type:b,p=o.call(b,"namespace")?b.namespace.split("."):[];if(h=k=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!G.test(n+r.event.triggered)&&(n.indexOf(".")>=0&&(p=n.split("."),n=p.shift(),p.sort()),g=n.indexOf(":")<0&&"on"+n,b=b[r.expando]?b:new r.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=p.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:r.makeArray(c,[b]),j=r.event.special[n]||{},e||!j.trigger||j.trigger.apply(d,c)!==!1)){if(!e&&!j.noBubble&&!r.isWindow(d)){for(i=j.delegateType||n,G.test(i+n)||(h=h.parentNode);h;h=h.parentNode)m.push(h),k=h;k===(d.ownerDocument||y)&&m.push(k.defaultView||k.parentWindow||a)}for(l=0;(h=m[l++])&&!b.isPropagationStopped();)b.type=l>1?i:j.bindType||n,f=(r._data(h,"events")||{})[b.type]&&r._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&r.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=n,!e&&!b.isDefaultPrevented()&&(!j._default||j._default.apply(m.pop(),c)===!1)&&r.acceptData(d)&&g&&d[n]&&!r.isWindow(d)){k=d[g],k&&(d[g]=null),r.event.triggered=n;try{d[n]()}catch(q){}r.event.triggered=void 0,k&&(d[g]=k)}return b.result}},dispatch:function(a){a=r.event.fix(a);var b,c,d,e,f,g=[],h=k.call(arguments),i=(r._data(this,"events")||{})[a.type]||[],j=r.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=r.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,f=0;(d=e.handlers[f++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(d.namespace))&&(a.handleObj=d,a.data=d.data,c=((r.event.special[d.origType]||{}).handle||d.handler).apply(e.elem,h),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?r(c,this).index(i)>=0:r.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[r.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=F.test(e)?this.mouseHooks:E.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new r.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==h()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"}}},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?f:g):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={isDefaultPrevented:g,isPropagationStopped:g,isImmediatePropagationStopped:g,stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=f,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=f,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},r.fn.extend({on:function(a,b,c,d,e){var f,h;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=g;else if(!d)return this;return 1===e&&(h=d,d=function(a){return r().off(a),h.apply(this,arguments)},d.guid=h.guid||(h.guid=r.guid++)),this.each(function(){r.event.add(this,a,d,c,b)})},trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?r.event.trigger(a,b,c,!0):void 0}});p.getSetAttribute,p.input;r.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}});var I=/%20/g,J=/\[\]$/;r.param=function(a,b){var c,d=[],e=function(a,b){b=r.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=r.ajaxSettings&&r.ajaxSettings.traditional),r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)i(c,a[c],b,e);return d.join("&").replace(I,"+")};var K=a.jQuery,L=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=L),b&&a.jQuery===r&&(a.jQuery=K),r},typeof b===D&&(a.jQuery=a.$=r),r}),function(a,b,c,d){for(var e,f,g=("onfocusin"in b&&"hasFocus"in b?"focusin focusout":"focus blur"),h=["webkit","o","ms","moz",""],i=c.support||{},j=c.event;(e=h.pop())!=d;)if(f=(e?e+"H":"h")+"idden",i.pageVisibility="boolean"==typeof b[f]){g=e+"visibilitychange";break}var k=/blur$/.test(g)?a:b;c(k).on(g,function(a){var c=a.type,e=a.originalEvent;if(e){var g=e.toElement;if(!/^focus./.test(c)||g==d&&e.fromElement==d&&e.relatedTarget==d){var h;h=f&&b[f]||/^(?:blur|focusout)$/.test(c)?"hide":"show",h+=".visibility",j.trigger(h)}}})}(this,document,PARSELY.jQuery),function(){this.PARSELY=this.PARSELY||{};var a,b=this.PARSELY,c=b.$;b.util={},a=b.util,a.reduce=function(a,b,d){return 2===arguments.length&&(d=a[0],a=a.splice(1,a.length-1)),c.each(a,function(a,c){d=b.apply(c,[d,c])}),d},a.arrayContains=function(a,b){var d=!1;return c.each(a,function(a,c){return c===b?(d=!0,!1):void 0}),d},a.objectValues=function(a){var b=[];for(var c in a)b.push(a[c]);return b},a.getWindow=function(){try{window.top.location.href;return window.top}catch(a){try{window.parent.location.href;return window.parent}catch(b){return window}}}}(),function(a){"use strict";var b=function(b){var c=function(a,b,d){return 1===arguments.length?c.get(a):c.set(a,b,d)};return c._document=b.document,c._cacheKeyPrefix="cookey.",c._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),c.defaults={path:"/",secure:!1},c.get=function(a){return c._renewCache(),c._cache[c._cacheKeyPrefix+a]},c.getAll=function(){c._renewCache();var a=[];for(var b in c._cache){var d=b.replace(c._cacheKeyPrefix,""),e=c._cache[b];a.push([d,e])}return a},c.getJSON=function(b){var d=c.get(b);return void 0===d?d:a.JSON.parse(d)},c.set=function(a,b,d){return d=c._getExtendedOptions(d),d.expires=c._getExpiresDate(void 0===b?-1:d.expires),c._document.cookie=c._generateCookieString(a,b,d),c},c.setJSON=function(b,d,e){return c.set(b,a.JSON.stringify(d),e),c},c.extendExpiry=function(a,b){var d=c.get(a);return void 0===d?!1:void c.set(a,d,b)},c.expire=function(a,b){if(a.constructor!==Array)return c.set(a,void 0,b);for(var d=0;d<a.length;d++)c.set(a[d],void 0,b)},c.remove=c.expire,c._getExtendedOptions=function(a){return{path:a&&a.path||c.defaults.path,domain:a&&a.domain||c.defaults.domain,expires:a&&a.expires||c.defaults.expires,secure:a&&void 0!==a.secure?a.secure:c.defaults.secure}},c._isValidDate=function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())},c._getExpiresDate=function(a,b){if(b=b||new Date,"number"==typeof a?a=a===1/0?c._maxExpireDate:new Date(b.getTime()+1e3*a):"string"==typeof a&&(a=new Date(a)),a&&!c._isValidDate(a))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return a},c._generateCookieString=function(b,d,e){b=b.replace(/[^#$&+\^`|]/g,encodeURIComponent),b=b.replace(/\(/g,"%28").replace(/\)/g,"%29"),d=(d+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent),e=e||{};var f=e.domain||a.cookieDomain||c._autoCookieDomain,g=b+"="+d;return g+=e.path?";path="+e.path:"",g+=f?";domain="+f:"",g+=e.expires?";expires="+e.expires.toUTCString():"",g+=e.secure?";secure":""},c._getCacheFromString=function(a){for(var b={},d=a?a.split("; "):[],e=0;e<d.length;e++){var f=c._getKeyValuePairFromCookieString(d[e]);void 0===b[c._cacheKeyPrefix+f.key]&&(b[c._cacheKeyPrefix+f.key]=f.value)}return b},c._getKeyValuePairFromCookieString=function(a){var b=a.indexOf("=");return b=0>b?a.length:b,{key:decodeURIComponent(a.substr(0,b)),value:decodeURIComponent(a.substr(b+1))}},c._renewCache=function(){c._cachedDocumentCookie!==c._document.cookie&&(c._cache=c._getCacheFromString(c._document.cookie),c._cachedDocumentCookie=c._document.cookie)},c._areEnabled=function(){var a="cookies.js",b="1"===c.set(a,1).get(a);return c.expire(a),b},c.enabled=c._areEnabled(),c._isValidDomain=function(a){var b="cookies.js_domain_test",d="1"===c.set(b,1,{domain:a}).get(b);return c.expire(b),d},c._getAutoCookieDomain=function(){var b=a.util.getWindow(),d=b.location.hostname;if(!isNaN(parseInt(d.replace(".",""),10)))return c._isValidDomain(d)?d:null;var e=d.split(".");if(1===e.length)return d;for(var f,g=2;g<=e.length;g++){var h=e.slice(-g).join(".");if(c._isValidDomain(h)){f=h;break}}return f||d},c._autoCookieDomain=c._getAutoCookieDomain(),c};a.Cookies=b(a.util.getWindow())}(this.PARSELY),function(){var a=this.PARSELY,b=a.Class,c=a.Cookies,d=a.console,e="_parsely_visitor",f=63072e3,g="parsely_uuid",h=["id"],i=b.extend({init:function(){this.visitorCookieName=a.visitorCookieName||e,this.visitorCookieTimeoutSecs=f},getVisitorInfo:function(b){b=b||!1;var e=c.getJSON(this.visitorCookieName);if("undefined"==typeof e){var f=c.get(g);"undefined"==typeof f?(d.log('No existing "'+g+'",using UUID from config server'),f=a.config.apikey_uuid||a.config.uuid):d.log('Using existing "'+g+'"value for visitor ID'),e={id:f,session_count:0,last_session_ts:0},c.setJSON(this.visitorCookieName,e,{expires:this.visitorCookieTimeoutSecs}),c.expire(g)}else b&&this.extendVisitorExpiry();return a.config.parsely_site_uuid=e.id,e},setVisitorInfo:function(a){for(var b=0;b<h.length;b++){var d=h[b];if("undefined"==typeof a[d]||null===a[d])return!1}c.setJSON(this.visitorCookieName,a,{expires:this.visitorCookieTimeoutSecs})},extendVisitorExpiry:function(){c.extendExpiry(this.visitorCookieName,{expires:this.visitorCookieTimeoutSecs})}});a.visitorManager=new i}(),function(){var a=this.PARSELY,b=a.util,c=a.Class,d=a.Cookies,e=a.console,f=a.visitorManager,g="_parsely_session",h=1800,i=c.extend({init:function(){this.windowAlias=b.getWindow(),this.documentAlias=this.windowAlias.document,this.sessionCookieName=a.sessionCookieName||g,this.sessionCookieTimeoutSecs=h,e.log("Initializing session."),this.getSession(!1)},getSession:function(b){b=b||!1;var c=f.getVisitorInfo(),g=d.getJSON(this.sessionCookieName);if("undefined"==typeof g){c.session_count++;var h=new Date,i=a.lastRequest?a.lastRequest.url:this.windowAlias.location.href,j=a.lastRequest?a.lastRequest.urlref:this.documentAlias.referrer;g={sid:c.session_count,surl:i,sref:j,sts:h.getTime(),slts:c.last_session_ts},e.log("Session expired/never existed, creating new session with "+this.sessionCookieTimeoutSecs+"s timeout: "+a.JSON.stringify(g)),d.setJSON(this.sessionCookieName,g,{expires:this.sessionCookieTimeoutSecs}),c.last_session_ts=g.sts,f.setVisitorInfo(c)}else b&&this.extendSessionExpiry();return g},extendSessionExpiry:function(){d.extendExpiry(this.sessionCookieName,{expires:this.sessionCookieTimeoutSecs})}});a.sessionManager=new i}(),function(){var a=this.PARSELY,b=a.$,c=a.util,d=a.console;if("boolean"!=typeof a.enableHeartbeats||a.enableHeartbeats){var e=1,f=15,g=1,h=60,i=.1,j=["focus","mousedown","mouseup","mousemove","scroll","touchstart","touchenter","keyup","keydown"],k=5.5;b.isNumeric(a.secondsBetweenHeartbeats)&&a.secondsBetweenHeartbeats>=e&&a.secondsBetweenHeartbeats<=f&&(k=a.secondsBetweenHeartbeats);var l=5;b.isNumeric(a.activeTimeout)&&a.activeTimeout>=g&&a.activeTimeout<=h&&(l=a.activeTimeout);var m=(new Date).getTime();a._lastEvent=m,a._lastSample=m,a._engagedMs=0,a.isEngaged=!0,a.isInteracting=!0,a.focused=!0,a.videoPlaying=!1,b(document).on("show.visibility",function(){a.focused=!0}),b(document).on("hide.visibility",function(){a.focused=!1});for(var n=function(a,b){window.addEventListener?window.addEventListener(a,b,!1):document.attachEvent("on"+a,b)},o=function(){a._lastEvent=(new Date).getTime()},p=0;p<j.length;p++)n(j[p],o);var q=1,r=-1,s=0,t=2;a.listenToYTVideoPlayer=function(c){return b.isFunction(c.addEventListener)?(d.log("Adding event listener to YT video player: "+c.getIframe().id),void c.addEventListener("onStateChange",function(b){b.data===r||b.data===s||b.data===t?a.videoPlaying=!1:b.data===q&&(a.videoPlaying=!0,o())})):!1};var u=function(){var b=(new Date).getTime();a.isInteracting=b-a._lastEvent<1e3*l,a.isEngaged=a.isInteracting&&a.focused||a.videoPlaying,a._engagedMs+=a.isEngaged?b-a._lastSample:0,a._lastSample=b};window.setInterval(u,1e3*i);var v=function(){var d=c.getWindow();if("undefined"==typeof a.enableHeartbeats||"boolean"==typeof a.enableHeartbeats&&a.enableHeartbeats){var e=Math.round(a._engagedMs/1e3);e>0&&e<=Math.round(k)&&(PARSELY.beacon.pixel.beacon({date:(new Date).toString(),action:"heartbeat",inc:e,url:a.lastRequest?a.lastRequest.url:d.location.href,urlref:a.lastRequest?a.lastRequest.urlref:d.document.referrer}),b.isFunction(a.onHeartbeat)&&a.onHeartbeat(e))}a._engagedMs=0};window.setInterval(v,1e3*k),n("beforeunload",v)}}(),function(){var a=this.PARSELY,b=a.$,c=a.Class,d=a.JSON,e=a.console,f=a.config,g=a.urls,h=a.visitorManager,i=a.sessionManager,j=a.util.getWindow(),k=j.document,l=j.screen;PARSELY.Pixel=c.extend({init:function(){var a=j.location.href,b=l.width+"x"+l.height,c=l.availWidth+"x"+l.availHeight,d=l.colorDepth,e=b+"|"+c+"|"+d;this.data={idsite:f.apikey,url:a,urlref:k.referrer,screen:e,data:{parsely_uuid:f.network_uuid||f.uuid,parsely_site_uuid:f.parsely_site_uuid}};var h,i=f.track_ip_addresses;h=i===!1?"/px/":"/plogger/",this.remoteEndpoint=g.pixel+h},addDefaults:function(a){b.extend(this.data,a)},beacon:function(c){var f=i.getSession(!0),g=new Image,j=(new Date).getTime(),k=b.extend({rand:j},this.data,f,c);h.extendVisitorExpiry(),k.data=d.stringify(k.data);var l=b.param(k),m=this.remoteEndpoint+"?"+l;e.log("beaconing to endpoint: "+this.remoteEndpoint),PARSELY.lastRequest=k,g.src=m,b.isFunction(a.onBeacon)&&a.onBeacon(k)}})}(),function(){var a=this.PARSELY,b=a.$,c=a.$LAB,d=a.console,e=a.Class,f=a.util.getWindow(),g=f.document;PARSELY.Beacon=e.extend({init:function(){this.pixel=new PARSELY.Pixel,this.autotrack="undefined"==typeof PARSELY.autotrack?!0:PARSELY.autotrack},trackPageView:function(a){var c={title:g.title,date:(new Date).toString(),action:"pageview"};a&&b.extend(c,a),this.pixel.beacon(c)},loadCustomizations:function(){if(a.config){var b=a.config.customizations;if(b){d.log("Found customizations; loading.");var e=a.urls["static"],f=this;c.script(e+b).wait(function(){"undefined"!=typeof PARSELY.pCustom&&(PARSELY.pCustom(f),d.log("pCustom function called"))})}}},start:function(){this.startTime=(new Date).getTime(),this.autotrack?(d.log("autotrack enabled; doing automatic pageview beacon"),this.trackPageView()):d.log("autotrack disabled; beacon loaded but no data sent"),this.loadCustomizations()}})}(),function(){var a=PARSELY.config,b=a.settings,c=PARSELY.console,d=PARSELY.$;if(b.tracker){c.log("tracker enabled, create Beacon");var e=new PARSELY.Beacon;PARSELY.beacon=e,e.start(),d.isFunction(PARSELY.onReady)&&PARSELY.onReady()}}();