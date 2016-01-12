/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"a":"418219","c":[".tk-liberation-serif","\"liberation-serif-1\",\"liberation-serif-2\",serif",".tk-ff-meta-web-pro","\"ff-meta-web-pro-1\",\"ff-meta-web-pro-2\",sans-serif"],"f":"//use.typekit.net/c/487204/1w;ff-meta-web-pro-1,2,gN2:V:i4,gN7:V:i7,gN1:V:n4,gN8:V:n7;liberation-serif-1,2,MyW:V:n4/{format}{/extras*}?3bb2a6e53c9684ffdc9a9bf41d5b2a62183a574751fd848f787439a977ba4c2031cf709d1f570ce88a4d3db689663c7efdef688733e5386eebdecca72b8b1cae4b4da25a74fd07ca7cf98848921836c74d3485cb41a46b38968caac0e164a374daae810ebc3bfb72dda3cd3f41bc4abdf81aa9502da13f1b3c54d7905e2b8a","fi":[9,4648,4649,4650,4651],"fn":["ff-meta-web-pro-1",["i4","i7","n4","n7"],"liberation-serif-1",["n4"]],"ht":"tk","js":"1.12.9","k":"//use.typekit.net/{id}.js","kt":"mtd3kan","p":"//p.typekit.net/p.gif?s=1&k=mtd3kan&ht=tk&h={host}&f=9.4648.4649.4650.4651&a=418219&_={_}","ps":1,"w":"mtd3kan"};
/*{"k":"1.12.9","auto_updating":true}*/
;(function(window,document,undefined){
function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return h.apply(null,arguments)}var ca=Date.now||function(){return+new Date};
function da(a,b){this.oa=a;this.X=b||a;this.F=this.X.document}da.prototype.createElement=function(a,b,c){a=this.F.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.F.createTextNode(c));return a};function ea(a,b,c){a=a.F.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function fa(a,b){function c(){a.F.body?b():setTimeout(c,0)}c()}
function l(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ga(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ha(a){if("string"===typeof a.ra)return a.ra;var b=a.X.location.protocol;"about:"==b&&(b=a.oa.location.protocol);return"https:"==b?"https:":"http:"}function ia(a,b){/^http(s)?:$/.test(b)&&(a.ra=b)}function ja(a){return a.X.location.hostname||a.oa.location.hostname}
function ka(a,b,c,d){function e(a){for(var c=0;c<g.length;c++)if(g[c].href&&-1!==g[c].href.indexOf(b)){a();return}setTimeout(function(){e(a)},0)}var f=a.createElement("link",{rel:"stylesheet",href:b,media:d?"only x":"all"}),g=a.F.styleSheets,k=!1;f.onload=function(){k||(k=!0,c&&c(null))};f.onerror=function(){k||(k=!0,c&&c(Error("Stylesheet failed to load")))};ea(a,"head",f);d&&e(function(){f.media="all"})}
function la(a,b,c){var d=a.F.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}}function ma(a){this.Ea=a||"-"}
ma.prototype.h=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Ea)};function na(a,b){this.e=a;this.u=a.X.document.documentElement;this.$=b;this.p="wf";this.o=new ma("-");this.za=!1!==b.events;this.I=!1!==b.classes}function oa(a){if(a.I){var b=ga(a.u,a.o.h(a.p,"active")),c=[],d=[a.o.h(a.p,"loading")];b||c.push(a.o.h(a.p,"inactive"));l(a.u,c,d)}m(a,"inactive")}
function m(a,b,c){if(a.za&&a.$[b])if(c)a.$[b](c.getName(),n(c));else a.$[b]()}function q(a,b){this.Y=a;this.ea=4;this.Z="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.Z=c[1],this.ea=parseInt(c[2],10))}q.prototype.getName=function(){return this.Y};function n(a){return a.Z+a.ea}function s(a,b){this.e=a;this.O=b;this.q=this.e.createElement("span",{"aria-hidden":"true"},this.O)}function pa(a){ea(a.e,"body",a.q)}
function t(a){var b;b=[];for(var c=a.Y.split(/,\s*/),d=0;d<c.length;d++){var e=c[d].replace(/['"]/g,"");-1==e.indexOf(" ")?b.push(e):b.push("'"+e+"'")}b=b.join(",");c="normal";"o"===a.Z?c="oblique":"i"===a.Z&&(c="italic");return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b+";"+("font-style:"+c+";font-weight:"+(a.ea+"00")+";")}
s.prototype.remove=function(){var a=this.q;a.parentNode&&a.parentNode.removeChild(a)};
function qa(a,b,c,d,e,f,g){this.fa=a;this.Da=b;this.e=c;this.t=d;this.O=g||"BESbswy";this.D={};this.da=e||3E3;this.pa=f||null;this.N=this.C=this.B=null;this.B=new s(this.e,this.O);this.C=new s(this.e,this.O);this.N=new s(this.e,this.O);a=new q("serif",n(this.t));a=t(a);this.B.q.style.cssText=a;a=new q("sans-serif",n(this.t));a=t(a);this.C.q.style.cssText=a;a=new q("monospace",n(this.t));a=t(a);this.N.q.style.cssText=a;pa(this.B);pa(this.C);pa(this.N)}
var u={Ra:"serif",Qa:"sans-serif",Na:"monospace"},ra=null;function sa(){if(null===ra){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);ra=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return ra}
qa.prototype.start=function(){this.D.serif=this.B.q.offsetWidth;this.D["sans-serif"]=this.C.q.offsetWidth;this.D.monospace=this.N.q.offsetWidth;this.Ia=ca();var a=new q(this.t.getName()+",serif",n(this.t)),a=t(a);this.B.q.style.cssText=a;a=new q(this.t.getName()+",sans-serif",n(this.t));a=t(a);this.C.q.style.cssText=a;ta(this)};function ua(a,b,c){for(var d in u)if(u.hasOwnProperty(d)&&b===a.D[u[d]]&&c===a.D[u[d]])return!0;return!1}
function ta(a){var b=a.B.q.offsetWidth,c=a.C.q.offsetWidth,d;(d=b===a.D.serif&&c===a.D["sans-serif"])||(d=sa()&&ua(a,b,c));d?ca()-a.Ia>=a.da?sa()&&ua(a,b,c)&&(null===a.pa||a.pa.hasOwnProperty(a.t.getName()))?va(a,a.fa):va(a,a.Da):wa(a):va(a,a.fa)}function wa(a){setTimeout(h(function(){ta(this)},a),50)}function va(a,b){a.B.remove();a.C.remove();a.N.remove();b(a.t)}function xa(a,b,c){this.e=a;this.G=b;this.ba=0;this.ua=this.na=!1;this.da=c}
xa.prototype.Aa=function(a){var b=this.G;b.I&&l(b.u,[b.o.h(b.p,a.getName(),n(a).toString(),"active")],[b.o.h(b.p,a.getName(),n(a).toString(),"loading"),b.o.h(b.p,a.getName(),n(a).toString(),"inactive")]);m(b,"fontactive",a);this.ua=!0;ya(this)};
xa.prototype.Ba=function(a){var b=this.G;if(b.I){var c=ga(b.u,b.o.h(b.p,a.getName(),n(a).toString(),"active")),d=[],e=[b.o.h(b.p,a.getName(),n(a).toString(),"loading")];c||d.push(b.o.h(b.p,a.getName(),n(a).toString(),"inactive"));l(b.u,d,e)}m(b,"fontinactive",a);ya(this)};function ya(a){0==--a.ba&&a.na&&(a.ua?(a=a.G,a.I&&l(a.u,[a.o.h(a.p,"active")],[a.o.h(a.p,"loading"),a.o.h(a.p,"inactive")]),m(a,"active")):oa(a.G))}function y(){this.J=this.Q=-1}y.prototype.now=function(){return(new Date).getTime()};
y.prototype.start=function(){this.Q=this.now();this.J=-1};y.prototype.stop=function(){this.J=this.now()};function za(){var a=[{name:"font-family",value:z.c[A+1]}];this.Ga=[z.c[A]];this.ia=a}function Aa(a){for(var b=a.Ga.join(","),c=[],d=0;d<a.ia.length;d++){var e=a.ia[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function B(a,b,c,d){this.m=null!=a?a:null;this.w=null!=b?b:null;this.P=null!=c?c:null;this.h=null!=d?d:null}var Ba=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
B.prototype.compare=function(a){return this.m>a.m||this.m===a.m&&this.w>a.w||this.m===a.m&&this.w===a.w&&this.P>a.P?1:this.m<a.m||this.m===a.m&&this.w<a.w||this.m===a.m&&this.w===a.w&&this.P<a.P?-1:0};function C(a,b){return-1===a.compare(b)}function D(a,b){return 0===a.compare(b)||1===a.compare(b)}function E(a,b){return 0===a.compare(b)}B.prototype.toString=function(){return[this.m,this.w||"",this.P||"",this.h||""].join("")};
function F(a){a=Ba.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new B(b,c,d,e)}function G(a,b,c,d,e,f,g){this.Y=a;this.A=b;this.L=c;this.T=d;this.n=e;this.g=f;this.ca=g}G.prototype.getName=function(){return this.Y};function Ca(a,b){this.b=a;this.S=b}
var Da=new G("Unknown",new B,"Unknown",new B,"Unknown",new B,void 0);
Ca.prototype.parse=function(){var a;if(-1!=this.b.indexOf("MSIE")||-1!=this.b.indexOf("Trident/")){a=H(this);var b=F(I(this)),c=null,d=null,e=null,e=J(this.b,/Trident\/([\d\w\.]+)/,1),f=K(this.S),c=-1!=this.b.indexOf("MSIE")?F(J(this.b,/MSIE ([\d\w\.]+)/,1)):F(J(this.b,/rv:([\d\w\.]+)/,1));""!=e?(d="Trident",e=F(e)):(d="Unknown",e=new B);a=new G("MSIE",c,d,e,a,b,f)}else if(-1!=this.b.indexOf("Opera"))a:if(a="Unknown",b=F(J(this.b,/Presto\/([\d\w\.]+)/,1)),c=F(I(this)),d=K(this.S),null!==b.m?a="Presto":
(-1!=this.b.indexOf("Gecko")&&(a="Gecko"),b=F(J(this.b,/rv:([^\)]+)/,1))),-1!=this.b.indexOf("Opera Mini/"))f=F(J(this.b,/Opera Mini\/([\d\.]+)/,1)),a=new G("OperaMini",f,a,b,H(this),c,d);else{if(-1!=this.b.indexOf("Version/")&&(f=F(J(this.b,/Version\/([\d\.]+)/,1)),null!==f.m)){a=new G("Opera",f,a,b,H(this),c,d);break a}f=F(J(this.b,/Opera[\/ ]([\d\.]+)/,1));a=null!==f.m?new G("Opera",f,a,b,H(this),c,d):new G("Opera",new B,a,b,H(this),c,d)}else/OPR\/[\d.]+/.test(this.b)?a=Ea(this):/AppleWeb(K|k)it/.test(this.b)?
a=Ea(this):-1!=this.b.indexOf("Gecko")?(a="Unknown",b=new B,c=F(I(this)),-1!=this.b.indexOf("Firefox")?(a="Firefox",b=F(J(this.b,/Firefox\/([\d\w\.]+)/,1))):-1!=this.b.indexOf("Mozilla")&&(a="Mozilla"),d=F(J(this.b,/rv:([^\)]+)/,1)),a=new G(a,b,"Gecko",d,H(this),c,K(this.S))):a=Da;return a};
function H(a){var b=J(a.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=J(a.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function I(a){var b=J(a.b,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=J(a.b,/Windows Phone( OS)? ([^;)]+)/,2))||(b=J(a.b,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=J(a.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=J(a.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function Ea(a){var b=H(a),c=F(I(a)),d=F(J(a.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new B,f="Unknown";/OPR\/[\d.]+/.test(a.b)?e="Opera":-1!=a.b.indexOf("Chrome")||-1!=a.b.indexOf("CrMo")||-1!=a.b.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.b)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.b.indexOf("PhantomJS")?e="PhantomJS":-1!=a.b.indexOf("Safari")?e="Safari":-1!=a.b.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.b.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=J(a.b,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=J(a.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.b.indexOf("Version/")?f=J(a.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=J(a.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=J(a.b,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=J(a.b,/PhantomJS\/([\d.]+)/,1));f=F(f);return new G(e,f,"AppleWebKit",d,b,c,K(a.S))}function J(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function K(a){if(a.documentMode)return a.documentMode}function Fa(a){this.e=a}
Fa.prototype.toString=function(){return encodeURIComponent(ja(this.e))};function Ga(a,b){this.r=a;this.s=b}Ga.prototype.toString=function(){for(var a=[],b=0;b<this.s.length;b++)for(var c=this.s[b],d=c.H(),c=c.H(this.r),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function M(a){this.Ka=a}
M.prototype.h=function(a,b){var c=b||{},d=this.Ka.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Ha(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}}function Ia(a,b){this.M=a;this.V=b;this.ka={};this.ja={}}Ia.prototype.H=function(a){return a?(this.ka[a]||this.V).slice(0):this.V.slice(0)};
function Ja(a,b,c){for(var d=[],e=a.M.split(",")[0].replace(/"|'/g,""),f=a.H(),g,k=[],r={},x=0;x<f.length;x++)g=f[x],0<g.length&&!r[g]&&(r[g]=!0,k.push(g));c=c.ta?c.ta(e,k,d):k;a.ka[b]=c;a.ja[b]=d}function Ka(a,b){for(var c=a.H(b),d=a.ja[b]||[],e=[],f=0;f<c.length;f++)e.push(new q(a.M,c[f]));for(f=0;f<d.length;f++)if(c=d[f].M,c!==a.M)for(var g=d[f].H(),k=0;k<g.length;k++)e.push(new q(c,g[k]));return e}function La(a,b){this.M=a;this.V=b}La.prototype.H=function(){return this.V};
function Na(a,b,c,d,e,f,g){this.Ha=a;this.Ca=b;this.U=c||[];this.wa=d||null;this.Ja=e||null;this.version=f||null;this.ya=g||null}
Na.prototype.send=function(a,b,c){var d=new M("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),e=encodeURIComponent((window.__adobewebfontsappname__||this.ya||"").toString().substr(0,20)),f=encodeURIComponent(ja(a)),g=[],k=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var k=window.Typekit.fonts,r=0;r<this.U.length;r++){for(var x=!1,w=0;w<k.length;w++)if(this.U[r]===k[w]){x=
!0;break}x||(g.push(this.U[r]),k.push(this.U[r]))}g.length&&Oa(d.h("https:"===ha(a),{service:this.Ha,token:this.Ja,app:e,hosting:this.Ca,host:f,variations:g.join("."),account:this.wa,stylesheetLoadTime:b,fontLoadTime:c,version:this.version,_:(+new Date).toString()}))};function Oa(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)}function Pa(){this.ga=this.va=this.K=this.W=this.ma=!0}
function N(a){return"Windows"===a.n}function O(a){return N(a)&&E(a.g,new B(5,1))||N(a)&&E(a.g,new B(5,2))||N(a)&&E(a.g,new B(6,0))||N(a)&&D(a.g,new B(6,1))}function P(a){return"Macintosh"===a.n&&(D(a.g,new B(10,4))||null===a.g.m)}function Qa(a,b){return b.ma&&("iPhone"===a.n||"iPod"===a.n)}function Ra(a,b){return Qa(a,b)&&D(a.g,new B(4,2))&&C(a.g,new B(5))}function Sa(a,b){return b.W&&"iPad"===a.n&&D(a.g,new B(4,2))&&C(a.g,new B(5))}function Q(a,b){return b.K&&"Android"===a.n}
function Ta(a,b){return Q(a,b)&&D(a.g,new B(2,2))&&C(a.g,new B(3,1))}function Ua(a,b){return Q(a,b)&&D(a.g,new B(3,1))&&C(a.g,new B(4,1))}function S(a){return"Linux"===a.n||"Ubuntu"===a.n}function Va(a){return"Safari"===a.getName()&&"AppleWebKit"===a.L||"Unknown"===a.getName()&&"AppleWebKit"===a.L&&("iPhone"===a.n||"iPad"===a.n||"iPod"===a.n)}function Wa(a){return"BuiltinBrowser"===a.getName()}function Xa(a){this.ta=a}function Ya(a,b){return b}
var T={Oa:"a",Sa:"d",Ma:"i",Pa:"j",La:"k",NONE:"x"},U={a:function(a,b){return"Safari"===a.getName()&&"AppleWebKit"===a.L&&D(a.T,new B(525,13))&&C(a.T,new B(534,50))&&(O(a)||P(a))||Wa(a)&&(Ta(a,b)||Q(a,b)&&D(a.g,new B(4,1)))||b.K&&"Silk"===a.getName()&&C(a.A,new B(2))&&(Ta(a,b)||P)||b.K&&"Silk"===a.getName()&&D(a.A,new B(2))&&Q(a,b)&&D(a.g,new B(4,1))||Va(a)&&(Sa(a,b)||Ra(a,b))||"Chrome"===a.getName()&&D(a.A,new B(6))&&(Sa(a,b)||Ra(a,b))||"AdobeAIR"===a.getName()&&D(a.A,new B(2,5))&&(N(a)&&null===
a.g.m||S(a)||P(a))},d:function(a,b){return"Chrome"===a.getName()&&D(a.A,new B(6))&&(O(a)||S(a)||P(a)||Q(a,b)||"CrOS"===a.n||"CrKey"===a.n||b.W&&"iPad"===a.n&&D(a.g,new B(5))||Qa(a,b)&&D(a.g,new B(5)))||"Gecko"===a.L&&1===a.T.compare(new B(1,9,1))&&(O(a)||S(a)||P(a)||Q(a,b))||"Safari"===a.getName()&&"AppleWebKit"===a.L&&D(a.T,new B(534,50))&&(O(a)||P(a))||Va(a)&&(b.W&&"iPad"===a.n&&D(a.g,new B(5))||Qa(a,b)&&D(a.g,new B(5)))||"Opera"===a.getName()&&D(a.A,new B(11,10))&&(O(a)||S(a)||P(a)||Q(a,b))||"MSIE"===
a.getName()&&9<=a.ca&&(N(a)&&D(a.g,new B(6,1))||N(a)&&E(a.g,new B(6,0)))||"MSIE"===a.getName()&&b.va&&"Windows Phone"===a.n&&D(a.g,new B(8))||Wa(a)&&(b.ga&&"BlackBerry"===a.n&&D(a.g,new B(10))||S(a))},j:function(a,b){return Wa(a)&&Ua(a,b)||b.K&&"Silk"===a.getName()&&D(a.A,new B(2))&&(Ua(a,b)||S(a))},i:function(a){return"MSIE"===a.getName()&&D(a.A,new B(6,0))&&(void 0===a.ca||9>a.ca)&&O(a)},x:function(){return!1}},Za={};
Za.i=new Xa(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new La(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var g=0;g<f.length;g++){var k=f[g];if(a[k]){d=d.concat(a[k]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)g=a[f],
g==e&&c.push(g);return c});var V={};V.a=V.d=V.j=function(){return[]};V.i=function(a,b,c){return[new Fa(a),new Ga(b,c)]};V.k=function(a){return[new Fa(a)]};function $a(a,b,c){return V[b](a,b,c)}function W(a){this.e=a;this.r="x";this.ha=this.b=null;this.s=[];this.R=[];this.la=this.aa=null}W.prototype.supportsConfiguredBrowser=function(){return"x"!==this.r};
W.prototype.init=function(){if(0<this.R.length){for(var a=[],b=0;b<this.R.length;b++)a.push(Aa(this.R[b]));var b=this.e,a=a.join(""),c=this.e.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));ea(b,"head",c)}};
W.prototype.load=function(a,b,c){function d(){}var e=this,f=c||{},g=f.contextPath||".",k=f.hostname||this.la;a=f.timeout;c=!!f.async;var r=!1!==f.events,x=null,w=new y,L=new y;f.active&&(d=f.active);f.active=function(){L.stop();e.qa&&e.qa.send(e.e,-1!==w.Q&&-1!==w.J?w.J-w.Q:-1,-1!==L.Q&&-1!==L.J?L.J-L.Q:-1);d()};x=new na(this.e,f);if(this.r){for(var f=Za[this.r]||new Xa(Ya),p=0;p<this.s.length;p++)Ja(this.s[p],this.r,f);this.aa&&(f=$a(this.e,this.r,this.s),f=Ha(this.r,f),f.contextPath=g,k&&(f.hostname=
k),g=this.aa.h("https:"===ha(this.e),f),w.start(),ka(this.e,g,function(){w.stop();L.start()},c));if(r){for(var R=[],Ma={},v=new xa(this.e,x,a),p=0;p<this.s.length;p++)R=R.concat(Ka(this.s[p],this.r));for(p=0;p<R.length;p++)Ma[R[p].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";fa(this.e,function(){var a=R,c={},d=Ma||{};if(0===a.length&&b)oa(v.G);else{v.ba+=a.length;b&&(v.na=b);var e,f=[];for(e=0;e<a.length;e++){var g=a[e],k=d[g.getName()],p=v.G,r=g;p.I&&l(p.u,[p.o.h(p.p,r.getName(),
n(r).toString(),"loading")]);m(p,"fontloading",r);p=null;p=new qa(h(v.Aa,v),h(v.Ba,v),v.e,g,v.da,c,k);f.push(p)}for(e=0;e<f.length;e++)f[e].start()}})}}};W.prototype.performOptionalActions=function(){};function ab(a,b,c,d){this.Fa=a;this.e=b;this.b=c;this.u=d;this.v=[]}ab.prototype.xa=function(a){this.v.push(a)};
ab.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);d.protocol&&ia(this.e,d.protocol);if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)bb(this,c[g],function(){0==--f&&cb(e,d)});else cb(this,d)};function bb(a,b,c){b=a.Fa.h("https:"===ha(a.e),{id:encodeURIComponent(b)});la(a.e,b,c)}
function cb(a,b){if(0!=a.v.length){for(var c=new na(a.e,b),d=!1,e=0;e<a.v.length;e++)a.v[e].init(),d=d||a.v[e].supportsConfiguredBrowser();if(d)for(c.I&&l(c.u,[c.o.h(c.p,"loading")]),m(c,"loading"),c=0;c<a.v.length;c++)d=a.v[c],d.supportsConfiguredBrowser()&&d.load(null,c==a.v.length-1,b);else oa(c);a.v=[]}}var db=(new Ca(navigator.userAgent,document)).parse(),eb=new da(window);window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var fb=window.Typekit.config||{},gb=null;fb.k&&(gb=new M(fb.k));var X=new ab(gb,eb,db,document.documentElement);window.Typekit.load=function(){X.load.apply(X,arguments)};window.Typekit.addKit=function(){X.xa.apply(X,arguments)}}var hb,Y,Z,z=window.Typekit.config||{};Z=new W(eb);Z.qa=new Na(z.ps,z.ht,z.fi,z.a,z.kt,z.js,z.l);Y=new Pa;Y.ma=!z.si;Y.W=!z.st;Y.K=!z.sa;Y.va=!z.sw;Y.ga=!z.sb;Z.ha=Y;z.f&&(hb=new M(z.f),Z.aa=hb);z.hn&&(Z.la=z.hn);var A;
if(z.fn)for(A=0;A<z.fn.length;A+=2)Z.s.push(new Ia(z.fn[A],z.fn[A+1]));if(z.c)for(A=0;A<z.c.length;A+=2)Z.R.push(new za);Z.b=db;var ib;a:{var jb=Z.b,kb=new Pa,lb=Z.ha||kb,mb;for(mb in T){var $=T[mb];if(U[$]&&U[$](jb,lb)){ib=$;break a}}for(mb in T)if($=T[mb],U[$]&&U[$](jb,kb)){ib="x";break a}ib="k"}Z.r=ib;window.Typekit.addKit(Z);if(window.WebFont)try{window.Typekit.load()}catch(nb){};
})(this,document);
