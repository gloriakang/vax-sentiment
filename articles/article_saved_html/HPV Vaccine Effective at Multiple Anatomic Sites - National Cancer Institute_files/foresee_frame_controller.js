var $$FSR = {
    'enabled': true,
    'frames': false,
    'sessionreplay': true,
    'auto': true,
    'encode': true,
    'version': '18.1.3',
    'files': '/foresee/',
    // The 'swf_files' attribute needs to be set when foresee_transport.swf is not located at 'files'
    //'swf_files': '/some/other/location/'
    'id': 'ZdykBhX9f5FYknEDsngaKg==',
    'definition': 'foresee_surveydef.js',
    'swf': {'fileName': 'foresee_transport.swf', 'scriptAccess': 'always'},
    'worker': 'foresee_worker.js',
    'embedded': false,
    'replay_id': 'cancer.gov',
    'site_id': 'cancer.gov',
    'attach': false,
    'renderer': 'W3C',	// or "ASRECORDED"
    'layout': 'CENTERFIXED',	// or "LEFTFIXED" or "LEFTSTRETCH" or "CENTERSTRETCH"
    'triggerDelay': 0,
    'heartbeat': true,
    'enableAMD': false,
    'pools': [
        {
            'path': '.',
            'sp': 100  // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
        }
    ],
    'sites': [
        {
            'path': /\w+-?\w+\.(com|org|edu|gov|net|co\.uk)/
        },
        {
            'path': '.',
            'domain': 'default'
        }
    ],
    'storageOption': 'cookie',
    'nameBackup': window.name,
	'iframeHrefs': [
		"frameWorker.html"
	],
    'acceptableorigins': [  ]
};

$$FSR.FSRCONFIG = {};

// ----------------------- DO NOT MODIFY ANYTHING BETWEEN THE DASHED LINES -----------------------
if (typeof(FSR) == 'undefined') {

(function(config) {
"undefined"==typeof FSR&&function(N,D){function I(a,d,c){"string"==typeof a&&(a=b.global.document.getElementById(a.replace("#","")));if(a)return"string"==typeof d&&(d={src:d}),new O(a,b.p(b.p({},J),d),c)}function P(a,b){var c=[],e;for(e in a)a.hasOwnProperty(e)&&(c[e]=b(a[e]));return c}function O(a,d,c){u.isSupported(d.version)&&(a.innerHTML=u.ac(d,c),b.G&&(b.global[d.id]=b.global.document.getElementById(d.id)),b.p(this,{Uc:function(){return a},Tc:function(){return d},Qc:function(){return c},Pc:function(){return a.firstChild}}))}
var b={},l=b.global=N;b.mb=864E5;b.G=!!b.global.document.attachEvent;var y=Object.prototype.hasOwnProperty,v=[],A=!1,w;b.j=function(a){return null!==a&&"undefined"!==typeof a};b.Hc=function(a){for(var b=a.length-1;0<=b;b--)for(var c=b-1;0<=c;c--)a[c]==a[b]&&a.splice(b,1);return a};b.Ic=function(a){for(var b=a.parentNode.childNodes,c,e=0,f=0;(c=b.item(e++))&&c!=a;)1==c.nodeType&&f++;return f};b.ta=function(a){return"[object Array]"==Object.prototype.toString.call(a)};b.Z=function(a){if(a){if(a.length)for(var b=
a.length-1;0<=b;b--)a[b]=null;for(var c in a)if(b=typeof a[c],"function"==b||"object"==b)a[c]=null}};b.Q=function(a){return"function"==typeof a};b.ec=function(a){return"object"==typeof a};b.trim=function(a){return a.toString().replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")};b.Rc=function(a){var d=a.getAttribute?a.getAttribute("id"):a.id;d&&!b.$c(d)&&(d=a.attributes.id.value);return d};b.Wb=function(a){return a.toString().replace(/([-.*+?^()|[\]\/\\])/g,"\\$1")};b.p=function(){var a=arguments,d=a[0]||
{},c=1,e=a.length,f,g,m;"object"===typeof d||b.Q(d)||(d={});e===c&&(d=this,--c);for(;c<e;c++)if(b.j(f=a[c]))for(g in f)m=f[g],d!==m&&void 0!==m&&(d[g]=m);return d};b.K=function(){};b.now=function(){return+new Date};b.shift=function(a){return a.splice(0,1)[0]};b.Pa=function(a,b){for(var c in b)if(b[c]===a)return c;return-1};b.Ub=function(){return b.global.document.location.protocol};b.Zc=function(a,d){return-1!=b.Pa(a,d)};b.Ra=function(){return b.global.document.getElementById("_fsr_swfContainerv2_")};
b.Gc=function(a,d,c){var e=a.split(".");d=d[b.shift(e)];for(var f=c,g;b.j(d)&&0<e.length;)d=d[b.shift(e)];if(d){for(e=a.split(".");e.length&&(g=b.shift(e));)f=f[g]?f[g]:f[g]={};e=a.split(".");for(f=c;e.length&&(g=b.shift(e));)0<e.length?f=f[g]:f[g]=d}};b.R=function(){return b.global.document.location.href};b.ea=function(a){return encodeURIComponent(a)};b.ra=function(a){return decodeURIComponent(a)};b.Sa=function(){return b.global.document.referrer};b.va={};b.cd=function(a,d,c){"undefined"!=typeof acs?
a=acs.makeURI(a):-1<a.indexOf("/")&&(a=a.substr(a.lastIndexOf("/")+1));c=c||b.K;var e=b.global.document.createElement(d);(d="script"===d)||(e.rel="stylesheet");e.type=d?"text/javascript":"text/css";d&&(b.G?e.onreadystatechange=function(){"loaded"!=this.readyState&&"complete"!=this.readyState||c("ok")}:e.onload=function(){c("ok")},e.onerror=function(){c("error")});e[d?"src":"href"]=0===b.Pa("//",a)?b.Ub()+a:a;a=b.global.document.getElementsByTagName("head")[0]||b.global.document.documentElement;d?
a.appendChild(e):d||(b.va[e.href]?e=b.va[e.href]:(b.va[e.href]=e,a.appendChild(e)));if(!d){var f,g;"sheet"in e?(f="sheet",g="cssRules"):(f="styleSheet",g="rules");var m=setInterval(function(){try{e[f]&&e[f][g].length&&(clearInterval(m),clearTimeout(s),c(!0,e))}catch(a){}finally{}},10),s=setTimeout(function(){clearInterval(m);clearTimeout(s);c(!1,e)},200)}};b.ready=function(a,d,c){c||(c=b.global);c=c.document;c=c.readyState;d=d||1;if(b.Q(a)&&(a=function(a,d){return function(){setTimeout(function(a){return function(){a.call(b.pa);
a=null}}(a),d);a=null}}(a,d),c&&("complete"==c||"loaded"==c))){A=!0;for(v.push(a);a=b.shift(v);)a&&a.call(b.pa);return}if(!A&&b.Q(a))v.push(a);else if(A&&b.Q(a))a.call(b.pa);else if(!b.Q(a))for(A=!0;0<v.length;)(a=b.shift(v))&&a.call(b.pa);a=c=c=c=null};b.global.document.addEventListener?w=function(){-1<"complete,loaded".indexOf(b.global.document.readyState)&&(b.global.document.removeEventListener("readystatechange",w,!1),b.ready(null))}:b.G&&(w=function(){-1<"complete,loaded".indexOf(b.global.document.readyState)&&
(b.global.document.detachEvent("onreadystatechange",w),b.ready(null))});b.global.document.addEventListener?(b.global.document.addEventListener("readystatechange",w,!1),b.global.document.addEventListener("DOMContentLoaded",b.ready,!1)):b.G&&b.global.document.attachEvent("onreadystatechange",w);b.match=function(a,d){function c(a,d){b.ta(d)||(d=[d]);for(var c=0,e=d.length;c<e;c++)if((a+"").match(d[c]))return!0;return!1}var e=[["urls",b.R()],["local",b.R()],["referrers",b.Sa()],["referrer",b.Sa()],["userAgents",
b.global.navigator.userAgent],["browsers",{name:BROWSER.Qa.name,version:BROWSER.Qa.Qb}]],f,g,m,s;for(m=0;m<e.length;m++){f=e[m];g=a[f[0]]||[];for(var h=0;h<g.length;h++){var k=g[h];if(!b.ec(f[1])){if(b.ra(f[1]).match(k))return!0}else if(b.ra(f[1].name.toLowerCase()).match(k.name.toLowerCase())&&(!k.version||f[1].version==k.version))return!0}}g=a.cookies||[];for(m=0;m<g.length;m++)if(f=g[m],e=b.a.c.f.L(f.name,{path:f.path,domain:f.domain}))if(!f.operator||"eq"==f.operator){if(e.match(f.value||"."))return!0}else if((f.operator||
"neq"==f.operator)&&!b.j(e.match(f.value)))return!0;if(m=a.variables)for(f=0,n=m.length;f<n;f++)if(g=m[f].name,e=m[f].value,g!=K.ipexclude||1!==d){b.ta(g)||(g=[g],e=[e]);for(var l,h=!0,k=0,p=g.length,q=e.length;k<p&&k<q;k++){try{l=(new [].constructor.constructor("return "+g[k]))(),b.j(l)||(l="")}catch(r){l=""}if(!c(l,e[k])){h=!1;break}}if(h)return!0}l=a.metas||[];e=g=null;if(0<l.length)for(g=document.getElementsByTagName("meta"),m=0;m<g.length;m++)for(e=g[m],f=0;f<l.length;f++)for(s in l[f])if(c(e.getAttribute(s),
l[f][s].key)&&("undefined"===typeof l[f][s].content||c(e.getAttribute("content"),l[f][s].content)))return!0;return!1};b.startTime=b.now();var K={},k=b.p({replay_id:"sitecom",site:{domain:"site.com"},renderer:"W3C",layout:""},D||{});b.gc=function(){for(var a={},d=arguments,c=0,e=d.length;c<e;c++){var f=d[c];if(b.fa(f))for(var g in f){var m=f[g],h=a[g];a[g]=h&&b.fa(m)&&b.fa(h)?b.gc(h,m):b.Aa(m)}}return a};b.Aa=function(a){var d;if(b.fa(a)){d={};for(var c in a)d[c]=b.Aa(a[c])}else if(b.ta(a)){d=[];c=
0;for(var e=a.length;c<e;c++)d[c]=b.Aa(a[c])}else d=a;return d};b.fa=function(a){if(!a||"[object Object]"!==Object.prototype.toString.call(a)||a.nodeType||a.setInterval||a.constructor&&!y.call(a,"constructor")&&!y.call(a.constructor.prototype,"isPrototypeOf"))return!1;for(var b in a);return void 0===b||y.call(a,b)||!y.call(a,b)&&y.call(Object.prototype,b)};b.r=function(){v=k=null;b.global.FSR=null;b=b.global=null};b.Wc=function(a){var d=b.now(),c;do c=b.now();while(c-d<a)};if(b.j(D.FSRCONFIG)){var q=
D.FSRCONFIG;q.surveydefs&&(b.surveydefs=q.surveydefs,q.surveydefs=null);q.properties&&(b.properties=q.properties,q.properties=null)}l.FSR=b;l.FSR.opts=k;l.FSR.prop=K;b.a={};b.a.b={};b.a.b.Oc=function(){for(var a=b.global.navigator.userAgent.replace(/[\s\\\/\.\(\);:]/gim,""),d="",c=b.now()+"",e=0;e<a.length-1;e+=a.length/7)d+=Number(a.charCodeAt(Math.round(e))%16).toString(16);7<d.length&&(d=d.substr(d.length-7));return d+"-"+a.length+c.substr(c.length-6)+"-xxxx-xxxx-xxxxx".replace(/[xy]/g,function(a){var b=
16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})};b.a.b.hd=function(a,b){return a+Math.random()*(b-a)};b.a.b.nc=function(a,d){var c=b.global.document.createElement("a");c.href=b.global.location.href;var e=c.hostname,f=c.protocol;c.href=a;var g=c.hostname||e,m=0===c.protocol.indexOf("http")?c.protocol:f;c.href=d;f=0===c.protocol.indexOf("http")?c.protocol:f;return g.toLowerCase()==(c.hostname||e).toLowerCase()&&m.toLowerCase()==f.toLowerCase()};b.a.b.Bc=function(a,b){return a+=(a.split("?")[1]?
"&":"?")+b};b.a.b.nd=function(a,d,c){var e="";if(a)for(var f in a)e+=(0!==e.length?"&":"")+(d?d+"["+f+"]":f)+"="+(c?a[f]:b.ea(a[f]));return e};b.a.b.hash=function(a){a=a.split("_");return 3*a[0]+1357+""+(9*a[1]+58)};b.a.b.Xc=function(a){var b=0,c="";if(0===a.length)return b;for(i=0;i<a.length;i++)c=a.charCodeAt(i),b=(b<<5)-b+c,b&=b;return b};b.a.b.fd=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=(new RegExp("[\\?&+]"+a+"=([^&#]*)")).exec(b.R());return b.j(a)?a[1]:!1};b.a.b.Vb=function(a,
b,c){return a[b]||a[c]};b.a.b.bd=function(a){a=a.replace(/[^0-9]/g,"");return 10==a.length||"1"==a[0]&&11==a.length};b.a.b.ad=function(a){return b.j(a.match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/))};b.a.b.preventDefault=function(a){a&&a.preventDefault?a.preventDefault():b.global.event&&b.global.event.returnValue?b.global.eventReturnValue=!1:a.returnValue=!1};b.a.b.bind=function(a,b){var c,e,f=Function.prototype.bind,g=Array.prototype.slice;if(f&&a.bind===f)return f.apply(a,
g.call(arguments,1));c=g.call(arguments,2);return e=function(){if(!(this instanceof e))return a.apply(b,c.concat(g.call(arguments)));ctor.prototype=a.prototype;var f=ctor();ctor.prototype=null;var h=a.apply(f,c.concat(g.call(arguments)));return Object(h)===h?h:f}};b.a.b.Vc=function(){var a=window.screen;return b.j(a)&&b.j(a.width)&&"number"==typeof a.width?{qc:a.width,cc:a.height}:{qc:0,cc:0}};b.a.e={};if(!b.G||b.j(b.global.JSON))b.stringify=b.global.JSON.stringify,b.parse=b.global.JSON.parse;else{b.stringify=
function(a,d,c){var e;b.global.Prototype&&(e=Array.prototype.toJSON,delete Array.prototype.toJSON);if(b.global.JSON&&"function"===typeof b.global.JSON.stringify)a=b.global.JSON.stringify(a,d,c);else{var f;z=p="";if("number"===typeof c)for(f=0;f<c;f+=1)z+=" ";else"string"===typeof c&&(z=c);if((r=d)&&"function"!==typeof d&&("object"!==typeof d||"number"!==typeof d.length))throw Error("_4c.stringify");a=B("",{"":a})}b.j(e)&&(Array.prototype.toJSON=e);return a};b.parse=function(a){if(b.global.JSON&&b.Q(b.global.JSON.parse))return b.global.JSON.parse(a);
a=String(a);E.lastIndex=0;E.test(a)&&(a=a.replace(E,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return(new Function("return "+a))();throw new SyntaxError("_4c.parse");};var B=function(a,b){var c,e,f,g,h=p,l,k=b[a];k&&"object"===typeof k&&"function"===typeof k.toJSON&&(k=k.toJSON(a));
"function"===typeof r&&(k=r.call(b,a,k));switch(typeof k){case "string":return F(k);case "number":return isFinite(k)?String(k):"null";case "boolean":case "null":return String(k);case "object":if(!k)return"null";p+=z;l=[];if("[object Array]"===Object.prototype.toString.apply(k)){g=k.length;for(c=0;c<g;c+=1)l[c]=B(c,k)||"null";f=0===l.length?"[]":p?"[\n"+p+l.join(",\n"+p)+"\n"+h+"]":"["+l.join(",")+"]";p=h;return f}if(r&&"object"===typeof r)for(g=r.length,c=0;c<g;c+=1)"string"===typeof r[c]&&(e=r[c],
(f=B(e,k))&&l.push(F(e)+(p?": ":":")+f));else for(e in k)Object.prototype.hasOwnProperty.call(k,e)&&(f=B(e,k))&&l.push(F(e)+(p?": ":":")+f);f=0===l.length?"{}":p?"{\n"+p+l.join(",\n"+p)+"\n"+h+"}":"{"+l.join(",")+"}";p=h;return f}},E=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,G=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,p,z,Q={"\b":"\\b","\t":"\\t","\n":"\\n",
"\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},r,F=function(a){G.lastIndex=0;return G.test(a)?'"'+a.replace(G,function(a){var b=Q[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}}b.a.n={};b.a.n.Ac=function(a,d){var c,e,f;b.j(a.length)||(a=[a]);c=0;for(e=a.length;c<e;c++){f=a[c];var g=f.className||"";(new RegExp("\\b"+d+"\\b")).test(g)||(f.className=(""===g?"":g+" ")+d)}};b.a.n.jd=function(a,d){var c,e,f;b.j(a.length)||(a=[a]);c=0;for(e=a.length;c<
e;c++)f=a[c],f.className&&(f.className=f.className.replace(new RegExp("(\\s|^)"+d+"(\\s|$)")," ").replace(/^\s+|\s+$/g,""))};b.a.n.qa=function(a,d){if(a){b.j(a.length)||(a=[a]);for(var c=0;c<a.length;c++)for(var e in d)e&&(-1=="zIndex".indexOf(e)&&"number"==typeof d[e]&&"opacity"!=e&&(d[e]+="px"),a[c].style[e]=d[e])}};b.a.n.Cc=function(a,d){if(a){b.j(a.length)||(a=[a]);for(var c=0;c<a.length;c++)for(var e in d)a[c].setAttribute(e,d[e])}return a};b.a.n.outerHTML=function(a){return a.outerHTML};b.a.n.kd=
function(a){function d(a){return function(b){if(9===b.keyCode)for(var d=0;d<a.length;d++)if(a[d]===b.target){b.preventDefault?b.preventDefault():b.returnValue=!1;var c=d;if(b.shiftKey){do c=0===c?a.length-1:c-1;while((0>=a[c].offsetLeft||0>a[c].tabIndex)&&c!=d)}else{do c=(c+1)%a.length;while((0>=a[c].offsetLeft||0>a[c].tabIndex)&&c!=d)}a[c].focus();break}}}a=b.a.n.pb.kc("a, input[type=text], textarea, button, input[type=radio], select, *[tabIndex]",a).sort(function(a,b){return parseInt(a.tabIndex)>
parseInt(b.tabIndex)});for(var c=0;c<a.length;c++){var e=a[c];b.a.b.k.Ja(e,"keydown");b.a.b.k.aa(e,"keydown",d(a))}};b.a.n.Yc=function(){for(var a=b.a.n.pb.kc("*",document.body),d=0;d<a.length;d++)b.a.n.qa(a[d],{display:"none"})};b.a.b.g=function(){this.ba=[];this.ca=[]};b.a.b.g.prototype.o=function(a){this.ga?a(this.jc):this.ba[this.ba.length]=a;return this};b.a.b.g.prototype.resolve=function(a){if(!this.ga){this.ga=!0;this.jc=a;for(var b=0;b<this.ba.length;b++)this.ba[b](a)}};b.a.b.g.prototype.C=
function(a){this.ua?a(this.reason):this.ca[this.ca.length]=a};b.a.b.g.prototype.reject=function(a){if(!this.ua&&!this.ga){this.ua=!0;this.reason=a;for(var b=0;b<this.ca.length;b++)this.ca[b](a)}};b.a.b.g.all=function(a){function d(a){return function(b){a.reject(b)}}function c(a,b){return function(d){a.O++;a.Oa[b]=d;a.O===a.Hb.length&&a.resolve(a.Oa)}}var e=new b.a.b.g;e.Oa=[];e.O=0;e.Hb=a;for(var f=0;f<a.length;f++)a[f].o(c(e,f)).C(d(e));return e};b.Ga={};b.a.c={};b.a.c.Xa=function(){return"fsr.s"+
(k.site.cookie?"."+k.site.cookie:"")};b.a.c.Mc=function(a,d){var c=b.a.c.$b(a,d);if(!this.vb&&!b.rb&&!b.ob){var e;e="undefined"!=typeof acs?acs.makeURI("/foresee/"+k.iframeHrefs[0]):k.iframeHrefs[0];var f=new b.a.c.U(e,"fsr.s");setInterval(function(){var a=b.a.c.f.L("fsr.s");f.setItem("fsr.s",a)},2E3);this.vb=!0}return c};b.a.c.$b=function(a,d){var c=new b.a.b.g,e,f=b.a.c.Xa();e=b.a.c.Ha(f,b.a.c.Ya(f));e.H();(function(){if(b.j(a)){if(b.j(d))return e.set(a,d);"object"==typeof a||a instanceof Array||
(a=[a]);var f=function(a,b,d,c){return function(e){d[a]=e;++c.O==b&&(1==c.O?c.resolve(e):c.resolve(d),c.O=void 0)}};c.O=0;for(var h={},k=0;k<a.length;k++)e.get(a[k],!0).o(f(a[k],a.length,h,c))}else c.resolve(e)})();return c};b.a.c.Nc=function(a,d){var c;c=b.a.c.Xa();c=b.a.c.Ha(c,b.a.c.Ya(c));if("undefined"===typeof d)return c.Za(a);c.set(a,d)};b.a.c.Ya=function(a){var d,c;c="undefined"!=typeof acs?acs.makeURI("/foresee/"+k.iframeHrefs[0]):"undefined"!==typeof acsMakeURI?acsMakeURI(k.iframeHrefs[0]):
k.iframeHrefs[0];d="window"==k.storageOption&&b.a.c.sb.isSupported()?function(){var a=arguments.callee;return new b.a.c.sb(a.ha,a.Va||{})}:function(){var a=arguments.callee;return b.rb||b.ob?new b.a.c.Fa({wa:a.ha,D:a.ha,sa:c}):new b.a.c.f(a.ha,b.p({path:"/",domain:a.xa.site.domain,secure:a.xa.site.secure,encode:a.xa.encode},a.Va||{}))};d.ha=a;d.xa=k;d.Va=void 0;return d};var L={};b.a.c.Ha=function(a,d){var c=L[a];return b.j(c)?c:c=L[a]=new d};var J={width:"1",height:"1",id:"_"+Math.random().toString().slice(9),
allowfullscreen:!0,allowscriptaccess:k.swf?k.swf.scriptAccess:"always",version:[3,0],hc:null,Xb:null,Ba:!1,Sb:!1};b.global.attachEvent&&b.global.attachEvent("onunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}});var u=b.p(b.Kc,{Fc:J,bc:function(){var a,b;try{b=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(c){try{b=(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"))&&a.GetVariable("$version")}catch(e){try{b=(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"))&&
a.GetVariable("$version")}catch(f){}}}return(b=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/.exec(b))?[b[1],b[3]]:[0,0]},na:function(a){if(null===a||void 0===a)return null;var b=typeof a;"object"==b&&a.push&&(b="array");switch(b){case "string":return a=a.replace(RegExp('(["\\\\])',"g"),"\\$1"),a=a.replace(/^\s?(\d+\.?\d*)%/,"$1pct"),'"'+a+'"';case "array":return"["+P(a,function(a){return u.na(a)}).join(",")+"]";case "function":return'"function()"';case "object":var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push('"'+
c+'":'+u.na(a[c]));return"{"+b.join(",")+"}"}return String(a).replace(/\s/g," ").replace(/\'/g,'"')},ac:function(a,d){a=b.p({},a);var c='<object width="'+a.width+'" height="'+a.height+'" id="'+a.id+'" name="'+a.id+'"';a.Sb&&(a.src+=(-1!=a.src.indexOf("?")?"&":"?")+Math.random());c=a.Ba||!b.G?c+(' data="'+a.src+'" type="application/x-shockwave-flash"'):c+' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';c+=">";if(a.Ba||b.G)c+='<param name="movie" value="'+a.src+'" />';a.width=a.height=a.id=a.Ba=
a.src=null;a.hc=a.version=a.Xb=null;for(var e in a)a[e]&&(c+='<param name="'+e+'" value="'+a[e]+'" />');e="";if(d){for(var f in d)if(d[f]){var g=d[f];e+=f+"="+(/function|object/.test(typeof g)?u.na(g):g)+"&"}e=e.slice(0,-1);c+='<param name="flashvars" value=\''+e+"' />"}return c+"</object>"},isSupported:function(a){return t[0]>a[0]||t[0]==a[0]&&t[1]>=a[1]}}),t=b.lb=u.bc();b.$a=b.j(t)&&0<t.length&&0<parseFloat(t[0]);b.$a||(t=b.lb=[0,0]);b.a.tc=I;b.a.s=function(){};q=(l=k.swf)?l.fileName:"foresee_transport.swf";
"undefined"!=typeof acs&&(q=acs.makeURI(l?"foresee/"+l.fileName:"foresee/foresee_transport.swf"));var R=q,x={};b.a.s.r=function(){if(this.t)try{this.t.parentNode.removeChild(flash_object),this.t.sendData=null,this.t.ping=null,this.t.isAlive=null}catch(a){}clearInterval(swftransport.Ka);b.Z(x)};b.a.s.isSupported=function(){return b.$a};b.a.s.v=function(a,d){if(this.t=b.Ra())return a.call(d,this);var c=b.global.document.createElement("div");c.id="_fsr_swfContainerv2";b.a.n.qa(c,{position:"absolute",
top:1,left:1,width:1,height:1,minWidth:1,minHeight:1,padding:0,margin:0,display:"block",visibility:"visible"});b.global.document.body.appendChild(c);var e=b.global.document.body;b.a.n.qa(c,{top:e.scrollTop+1,left:e.scrollLeft+1});I("_fsr_swfContainerv2",{src:R,id:"_fsr_swfContainerv2_"},{wmode:"transparent",allowScriptAccess:k.swf?k.swf.scriptAccess:"always",parentChild:b.global.top==b.global?"parent":"child"});this.Bb(a,d)};b.a.s.Bb=function(a,d){var c=b.a.s,e=this;c.Ka=setInterval(function(){var c=
b.a.s;e.t=b.Ra();e.t&&e.t.isAlive&&a&&(clearInterval(c.Ka),a.call(d,e),a=null)},500);c=null};b.Ga.uc="ac.uk co.uk gov.uk ltd.uk me.uk net.uk nhs.uk org.uk plc.uk police.uk sch.uk dni.us fed.us isa.us kids.us nsn.us ak.us al.us ar.us as.us az.us ca.us co.us ct.us dc.us de.us fl.us ga.us gu.us hi.us ia.us id.us il.us in.us ks.us ky.us la.us ma.us md.us me.us mi.us mn.us mo.us ms.us mt.us nc.us nd.us ne.us nh.us nj.us nm.us nv.us ny.us oh.us ok.us or.us pa.us pr.us ri.us sc.us sd.us tn.us tx.us ut.us vi.us vt.us va.us wa.us wi.us wv.us wy.us".split(" ");
b.a.e.l=function(a,d){b.la&&b.la.kb&&b.la.kb.Dc&&(d=!0);var c={method:"POST",url:b.R(),data:{},contentType:"application/x-www-form-urlencoded",ja:b.K,W:b.K};this.ib=!1;var e=b.a.b.Vb;if(b.global.Worker&&!d){var f=b.a.b.nc,g=e(k.site,"js_files","files")||"";if(f(g,b.global.location.href))f=g+(k.worker||"foresee_worker.js"),"undefined"!=typeof acs&&(f=acs.makeURI(f)),this.Ab(f);else{var e=e(k.site,"html_files","files"),h=document.createElement("a");h.href=e;(this.X=h.protocol+"//"+h.hostname+(h.port?
":"+h.port:""))&&f(e,g)&&(this.zb(e+"iframe_proxier.html"),g!=e&&this.Gb(g+"foresee_worker.js"))}}this.options=b.p(c,a)};b.a.e.l.prototype.r=function(){this.Ca&&this.Ca.terminate();this.F&&(this.F.parentNode.removeChild(ifr),ifr=null);b.Z(this.options)};b.a.e.l.isSupported=function(){return b.G&&10>BROWSER.Qa.Qb&&"https"!=b.R().substring(0,5)&&b.global==b.global.top?!1:!0};b.a.e.l.v=function(a){a.call(b.a.e.l)};b.a.e.l.prototype.zb=function(a){this.F=document.createElement("iframe");this.F.src=a;
this.F.onload=b.a.e.l.ub(this);this.F.style.display="none";document.body.appendChild(this.F);this.za=0;this.ia={};H(b.global,"message",function(a){return function(c){b.a.e.l.La(a,c)}}(this))};b.a.e.l.prototype.Ab=function(a){try{this.Ca=new Worker(a),this.ib=!0}catch(d){}this.ib&&(this.za=0,this.ia={},this.Ca.onmessage=function(a){return function(d){b.a.e.l.La(a,d)}}(this))};b.a.e.l.La=function(a,d){if(!a.X||a.X===d.origin){var c=a.ia[d.data.i];switch(d.data.status){case 200:c.ja&&c.ja.call(c,d.data.rt);
break;case -1:b.la.Ec();break;default:c&&c.W&&c.W.call(c,d.data.rt)}delete a.ia[d.data.i]}};b.a.e.l.ub=function(a){return function(){a.dc=!0;if(a.M)for(var b=0;b<a.M.length;b++)a.Jb(a.M[b]);a.M=null}};b.a.e.l.prototype.Jb=function(a){var d=b.p(this.options,a);this.dc?(this.ia[++this.za]=d,this.F.contentWindow.postMessage(b.a.e.l.xb(d,this.za),this.X)):this.M?this.M[this.M.length]=a:this.M=[a]};b.a.e.l.prototype.Gb=function(a){var b={m:"worker_url"};b.u=a;this.F.contentWindow.postMessage(b,this.X)};
b.a.e.l.xb=function(a,b){var c={i:b},e=["method","url","data","contentType"],f;for(f in e)c[e[f]]=a[e[f]];return{m:"CORS",d:c}};b.a.e.T=function(a){this.options=b.p({url:"",data:"",Lc:"",ld:"",domain:"",version:"",dd:"",md:"",ja:b.K,W:b.K,wc:1E4},a)};b.a.e.T.isSupported=function(){return b.a.s.isSupported()};b.a.e.T.v=function(a){b.a.s.v(a,b.a.e.T)};b.a.e.T.r=function(){b.a.s.r()};b.FlashTransportResponse=function(a,d){var c=b.parse(d);c.status&&0<c.status?x[a].zc.call(x[a].Mb,d):x[a].xc.call(x[a].Mb,
d);delete x[a]};var S=b.a.b.g;b.a.c.U=function(a,d){var c=this;b.ready(function(){c.I=c.tb(a);c.yb=c.wb();"true"==c.I.getAttribute("data-ready")&&c.Ma()});this.ma=d;this.A=[];this.P={};this.Nb=0;if(!this.ma)throw"FrameController requires a namespace";H(b.global,"message",b.a.b.bind(function(a){this.Cb(a)},this),"*")};var h=b.a.c.U;h.prototype.wb=function(){return/^(?:\/|[a-z]+:\/\/)/.test(this.I.src)?this.I.src:this.I.contentWindow.location.href};h.prototype.tb=function(a){var d=document.getElementById(a);
if(b.j(d))return d;d=document.createElement("iframe");d.src=a;d.id=a;d.className="ACS_";d.style.display="none";document.body.appendChild(d);return d};h.prototype.q=function(a,b){var c=new S,e=this.Nb++;this.P[e]=c;this.Fb(e,a,b);this.Kb(c);return c};h.prototype.Kb=function(a){setTimeout(function(){a.ga||a.ua||a.reject("TIMEOUT")},1E4)};h.prototype.Fb=function(a,d,c){var e=b.stringify({id:a,namespace:this.ma,method:d,params:c});a=b.a.b.bind(function(){this.I.contentWindow.postMessage(e,"*")},this);
this.Na?a():this.Db(a)};h.prototype.Cb=function(a){a=h.prototype.Ob(a.data);if(this.Pb(a.src,a.namespace)&&!1!==a){this.Na||this.Ma();var b=this.P[a.id];if(b)switch(a.status){case 1:b.resolve(a.result);break;case -1:b.reject(a.result)}this.P[a.id]=null}};h.prototype.Ob=function(a){var d;try{d=b.parse(a)}catch(c){return!1}return d};h.prototype.Pb=function(a,b){if(a){var c=!!a&&!!this.I&&a==this.yb,e=!b||b==this.ma;return!a||c&&e}return!1};h.prototype.Ma=function(){this.I.setAttribute("data-ready",
!0);this.Na=!0;for(var a=0;a<this.A.length;a++)this.A[a]();this.A=[]};h.prototype.Db=function(a){this.A[this.A.length]=a};h.yc=function(){for(var a in this.P)this.P[a]&&this.P[a].reject("TIMEOUT")};h.prototype.flush=function(a){return this.q("flush",a)};h.prototype.buffer=function(a){return this.q("buffer",{value:a})};h.prototype.Wa=function(a,b){return this.q("flushAndBuffer",{gd:a,value:b})};h.prototype.setItem=function(a,b){return this.q("setItem",{key:a,value:b})};h.prototype.getItem=function(a){return this.q("getItem",
{key:a})};h.prototype.gb=function(a,b){return this.q("setAlive",{value:a,Jc:b})};h.prototype.eb=function(){return this.q("readAlive")};h.prototype.hb=function(){return this.q("setOptout")};h.prototype.fb=function(){return this.q("readOptout")};h.prototype.removeItem=function(a){return this.q("removeItem",{key:a})};h.prototype.cb=function(){return this.q("nuke")};h.isSupported=function(){return!!b.global.postMessage};var l=(b.a.b.jb=function(){this.J=[]}).prototype,C=b.a.b.bind;l.Ua=function(a,b){this.J.push({Zb:a,
Tb:b,Rb:void 0});1===this.J.length&&a.apply(b||{},[]).o(C(function(){this.da()},this)).C(C(function(){this.da()},this))};l.da=function(){this.J.shift();var a=this.J[0];"undefined"!==typeof a&&a.Zb.apply(a.Tb||this,a.Rb||[]).o(C(function(){this.da()},this)).C(C(function(){this.da()},this))};b.a.b.k={};b.a.b.k.N={};b.a.b.k.aa=function(a,d,c,e){var f=b.a.b.k.N;if(a){f[d]||(f[d]=[]);f[d].push({Ta:a,oa:c});if("unload"==d){if(b.j(b.$)){b.$.push(c);return}b.$=[]}"propertychange"!=d&&a.addEventListener?a.addEventListener(d,
c,!e):a.attachEvent&&a.attachEvent("on"+d,c)}};b.a.b.k.rc=function(a,d,c,e,f){var g=b.a.b.k;if(f){if(a.getAttribute("_fsr"+d))return!1;a.setAttribute("_fsr"+d,"true")}else if(f=g.N[d])for(g=f.length-1;0<=g;g--)if(f[g].Ta==a&&(e||f[g].oa==c))return!1;b.a.b.k.aa(a,d,c)};b.a.b.k.sc=function(a,d,c){b.a.b.k.aa(a,d,c,!0)};b.a.b.k.Ja=function(a,b,c){try{"propertychange"!=b&&a.removeEventListener?a.removeEventListener(b,c,!0):a.detachEvent&&a.detachEvent("on"+b,c)}catch(e){}};var H=b.a.b.k.aa;b.a.b.k.nb=
function(){for(var a=b.$.length-1;0<=a;a--)try{b.$[a].call()}catch(d){}b.Z(b.$);b.a.b.k.qb();b.r()};H(b.global,"unload",b.a.b.k.nb);b.a.b.k.qb=function(){if(b){var a=b.a.b.k,d;for(d in a.N)if(a.N.hasOwnProperty(d)){for(var c=a.N[d],e=c.pop();e;)a.Ja(e.Ta,d,e.oa),b.Z(e),e=c.pop();delete a.N[d]}}};b.a.b.k.Ea=function(){this.ya=[]};b.a.b.k.Ea.prototype.Yb=function(){for(var a=0;a<this.ya.length;a++){var b=this.ya[a];b.oa.apply(this,arguments);b.ed&&(this.ya.splice(a,1),a--)}};var M=b.a.b.k.Ea;b.a.c.Fa=
function(a){this.sa=a.sa;this.wa=a.wa;this.D=a.D;this.Ia=new M;this.h={};this.J=new b.a.b.jb;this.v()};l=b.a.c.Fa;l.prototype.v=function(){this.ab=new b.a.c.U(this.sa,this.wa)};l.prototype.set=function(a,d){var c=new b.a.b.g,e=this;"undefined"===typeof d&&(d=a,a=void 0);this.J.Ua(function(){e.H().o(function(){"undefined"===typeof a?e.h=d:e.h[a]=d;e.B().o(function(){c.resolve()})});return c},this);return c};l.prototype.get=function(a){var d=new b.a.b.g,c=this;this.J.Ua(function(){c.H().o(function(){"undefined"!=
typeof a?d.resolve(c.h[a]):d.resolve(c.h)});return d},this);return d};l.prototype.Za=function(a){return"undefined"!==typeof a?this.h[a]:this.h};l.prototype.reset=function(a){this.h=a||{};this.B()};l.prototype.r=function(a){return this.set(a,void 0)};l.prototype.bb=function(){return this.reset()};l.prototype.Lb=function(){};l.prototype.H=function(a,d,c){var e=new b.a.b.g,f=this;this.L(this.D).o(function(b){f.Eb(e,b);"function"===typeof a&&a.apply(d||{},c)}).C(this.Lb);return e};l.prototype.Eb=function(a,
d){try{this.h=b.parse(d.value||"{}"),b.j(this.h)||(this.h={})}catch(c){this.h={}}a.resolve()};l.prototype.B=function(){var a=new b.a.b.g,d=b.stringify(this.h),c=b.a.b.bind(function(c){a.resolve(b.parse(c.value))},this),e=b.a.b.bind(function(){a.reject("Storage full")},this);this.write(this.D,d).o(c).C(e);return a};l.prototype.r=function(a){this.H();"undefined"!==typeof a?delete this.h[a]:this.h={};this.B()};l.prototype.write=function(a,b){return this.ab.setItem(a,b)};l.prototype.L=function(a){return this.ab.getItem(a)};
l.prototype.isSupported=function(){return b.a.c.U.isSupported()};b.a.c.f=function(a,d){a||(a="fsr.STORAGE");this.D=a.replace(/[- ]/g,"");b.a.c.f.h||b.a.c.f.v();this.Y=d||{};this.data={};this.Ia=new M;this.mc=4E3};b.a.c.f.prototype.set=function(a,d){this.H();this.h[a]=d;this.B();var c=new b.a.b.g;c.resolve(d);return c};b.a.c.f.prototype.reset=function(a){this.h=a;this.B()};b.a.c.f.prototype.get=function(a,d){var c=new b.a.b.g;this.H();var e;e=a?this.h[a]:this.h;return d?(c.resolve(e),c):e};b.a.c.f.prototype.Za=
function(a){return this.get(a,!1)};b.a.c.f.prototype.r=function(a){this.H();delete this.h[a];this.B()};b.a.c.f.prototype.bb=function(){this.h={};var a=this.Y.duration;this.Y.duration=-1;this.B();a?this.Y.duration=a:delete this.Y.duration};b.a.c.f.prototype.H=function(a,d,c){var e=new b.a.b.g;this.h={};try{var f=b.a.c.f.L(this.D);f&&0<f.length&&(this.h=b.parse(f),b.j(this.h)||(this.h={}),"function"===typeof a&&a.apply(d||{},c))}catch(g){this.h={}}e.resolve();return e};b.a.c.f.prototype.B=function(){var a=
b.stringify(this.h);this.D.length+b.ea(a).length>this.mc&&this.Ia.Yb(this);b.a.c.f.write(this.D,a,this.Y)};b.a.c.f.L=function(a){return(a=b.global.document.cookie.match("(?:^|;)\\s*"+b.Wb(a)+"=([^;]*)"))?b.ra(a[1]):null};b.a.c.f.write=function(a,d,c){d=c&&b.j(c.encode)&&!c.encode?d:b.ea(d);a=b.ea(a);for(var e in c)if(c[e]){var f=c[e];d+=";"+("duration"===e?"expires":e);switch(e){case "duration":d+="="+(new Date(b.now()+f*b.mb)).toGMTString();break;default:d+="="+f}}b.global.document.cookie=a+"="+
d;return a.length+d.length+2};b.a.c.f.bb=function(a,d){b.a.c.f.write(a,"",b.p(d,{duration:-1}))};b.a.c.f.v=function(a){a&&a.apply(b.a.c.f)};b.a.c.f.isSupported=function(){return!0};b.a.e.w={};b.a.e.w.A=[];b.a.e.w.ready=function(a){if(b.a.e.w.fc)a();else{var d=b.a.e.w.A;d[d.length]=a}};b.ready(function(){b.a.e.w.vc={XHR:b.a.e.S,SWF:b.a.e.T,CORS:b.a.e.l};for(var a=b.a.e.w.A,d=0;d<a.length;d++)a[d]();b.a.e.w.fc=!0});b.a.e.w.Sc=function(a){for(var d,c=null,e=0;e<a.oc.length;e++){c=a.oc[e];try{if(c.isSupported()){d=
c;break}}catch(f){}}b.j(d)?d.v(a.ready):a.W.call()};h=function(){this.ka="__FSR__BUFFER__";this.Da=window.Da||5E6;this.V=new b.a.c.f;this.lc();this.postMessage(-1,0,"","ready")};h.prototype.lc=function(){function a(a){b.ic(a)}var b=this;window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)};h.prototype.ic=function(a){try{var d=b.parse(a.data);d.namespace&&this.Ib(d)}catch(c){}};h.prototype.Ib=function(a){var d=a.params,c="_IFR_"+k.site_id+
"_"+a.namespace;switch(a.method){case "setItem":promise=this.setItem(c,d.key,d.value);break;case "getItem":promise=this.getItem(c,d.key);break;case "removeItem":promise=this.removeItem(c,d.key);break;case "nuke":promise=this.cb(c);break;case "buffer":promise=this.buffer(c,d.value);break;case "flush":promise=this.flush(c,d);break;case "flushAndBuffer":promise=this.Wa(c,d.params,d.value);break;case "setAlive":promise=this.gb(c,d.value,d.expires);break;case "readAlive":promise=this.eb(c);break;case "setOptout":promise=
this.hb(c);break;case "readOptout":promise=this.fb(c);break;default:promise=this.pc(a.method)}promise.o(b.a.b.bind(function(b){this.postMessage(a.id,1,a.namespace,b)},this));promise.C(b.a.b.bind(function(b){this.postMessage(a.id,-1,a.namespace,b)},this))};h.prototype.postMessage=function(a,d,c,e){window.parent.postMessage(b.stringify({id:a,result:e,namespace:c,status:d,src:b.global.location.href}),"*")};h.prototype.setItem=function(a,d,c){var e=new b.a.b.g;try{this.V.set(a+"."+d,c),e.resolve({key:d,
value:c})}catch(f){e.reject("STORAGE_FULL")}return e};h.prototype.getItem=function(a,d){var c=new b.a.b.g;c.resolve({value:this.V.get(a+"."+d)});return c};h.prototype.removeItem=function(a,d){var c=new b.a.b.g;this.V.r(a+"."+d);c.resolve({key:d});return c};h.prototype.flush=function(a){var d=new b.a.b.g,c=localStorage.getItem(a+"."+this.ka);this.V.set(a+"."+this.ka,"");d.resolve({data:c});return d};h.prototype.buffer=function(a,d){var c=new b.a.b.g,e=a+"."+this.ka,f=this.V.get(e)||"";if(f.length+
d.length<=this.Da)try{localStorage.setItem(e,f+d),c.resolve({data:d})}catch(g){c.reject("STORAGE_FULL")}else c.reject("STORAGE_FULL");return c};h.prototype.Wa=function(a,d){var c=new b.a.b.g,e=this.flush(a),f=this;e.o(function(){var b=f.buffer(a,d);b.o(c.resolve);b.C(c.reject)});e.C(c.reject);return c};h.prototype.cb=function(a){var d=new b.a.b.g,c;for(c in localStorage)0===c.indexOf(a+".")&&localStorage.removeItem(c);d.resolve();return d};h.prototype.gb=function(a,d,c){var e=new b.a.b.g;"undefined"===
typeof d&&(d=b.now());if(!b.j(k.heartbeat)||k.heartbeat){var f={path:"/",secure:k.site.secure};c&&(f.expires="-1");b.a.c.f.write(a,d,f);e.resolve();return e}};h.prototype.eb=function(a){var d=new b.a.b.g;a=b.a.c.f.L(a,{path:"/",domain:k.site.domain,secure:k.site.secure});d.resolve(a);return d};h.prototype.hb=function(a){var d=new b.a.b.g,c=new Date;c.setTime(c.getTime()+31536E6);b.a.c.f.write(a,"365",{path:"/",expires:c.toGMTString()});d.resolve();return d};h.prototype.fb=function(a){var d=new b.a.b.g;
a=b.a.c.f.L(a,{path:"/",domain:k.site.domain,secure:k.site.secure});d.resolve(a);return d};h.prototype.pc=function(a){var d=new b.a.b.g;d.reject("UNKNOWN METHOD: "+a);return d};setTimeout(function(){b.Ga.U=h=new h},1);b.a.e.S=function(a){this.options=b.p({method:"POST",url:b.R(),data:{},contentType:"application/x-www-form-urlencoded",ja:b.K,W:b.K},a)};b.a.e.S.prototype.r=function(){b.Z(this.options)};b.a.e.S.isSupported=function(){return!0};b.a.e.S.v=function(a){a.call(b.a.e.S)}}(self,$$FSR);

 })($$FSR);
}

// ----------------------- DO NOT MODIFY ANYTHING BETWEEN THE DASHED LINES -----------------------