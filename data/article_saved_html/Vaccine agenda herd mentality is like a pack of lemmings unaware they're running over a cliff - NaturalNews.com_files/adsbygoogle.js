(function(){var p=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ca=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return r.apply(null,arguments)};var ea=(new Date).getTime();var fa={overlays:1,interstitials:2,vignettes:2,inserts:3,immersives:4};var t=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},y=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},ga=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ia=function(a,b){if(!a)return b;var c=a.match(ga);return c?c[0]:b};var ja=t("0.15"),ka=t("0.0"),la=t("0.01"),ma=t("0.001"),na=t("0.01"),oa=t("0.001"),pa=t("0.2"),qa=y("true",!0),ra=t("0.001");var sa=y("false",!1),ta=y("false",!1),ua=y("false",!1),va=ua||!ta;var wa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},xa=/&/g,ya=/</g,za=/>/g,Aa=/"/g,Ba=/'/g,Ca=/\x00/g,Da={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},z={"'":"\\'"},Ea=function(a,b){return a<b?-1:a>b?1:0};var D=function(a){D[" "](a);return a};D[" "]=function(){};var F=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{D(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(d){return!1}},G=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(e){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},Fa=/^(-?[0-9.]{1,30})$/,Ga=function(a){return Fa.test(a)&&(a=Number(a),!isNaN(a))?a:null};var Ha=document,J=window;var Ia=function(a){var b=arguments.length;if(1==b&&"array"==aa(arguments[0]))return Ia.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};Ia("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var K;a:{var Ja=p.navigator;if(Ja){var Ka=Ja.userAgent;if(Ka){K=Ka;break a}}K=""}var N=function(a){return-1!=K.indexOf(a)};var La=N("Opera")||N("OPR"),O=N("Trident")||N("MSIE"),Ma=N("Edge"),Na=N("Gecko")&&!(-1!=K.toLowerCase().indexOf("webkit")&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),Oa=-1!=K.toLowerCase().indexOf("webkit")&&!N("Edge"),Pa=function(){var a=K;if(Na)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ma)return/Edge\/([\d\.]+)/.exec(a);if(O)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Oa)return/WebKit\/(\S+)/.exec(a)},Qa=function(){var a=p.document;return a?a.documentMode:void 0},Ra=function(){if(La&&
p.opera){var a=p.opera.version;return"function"==aa(a)?a():a}var a="",b=Pa();b&&(a=b?b[1]:"");return O&&(b=Qa(),b>parseFloat(a))?String(b):a}(),Sa={},Ta=function(a){if(!Sa[a]){for(var b=0,c=wa(String(Ra)).split("."),d=wa(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var f=c[g]||"",h=d[g]||"",l=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var m=l.exec(f)||["","",""],n=k.exec(h)||["","",""];if(0==m[0].length&&0==n[0].length)break;b=Ea(0==m[1].length?0:parseInt(m[1],
10),0==n[1].length?0:parseInt(n[1],10))||Ea(0==m[2].length,0==n[2].length)||Ea(m[2],n[2])}while(0==b)}Sa[a]=0<=b}},Ua=p.document,Va=Ua&&O?Qa()||("CSS1Compat"==Ua.compatMode?parseInt(Ra,10):5):void 0;var Wa;if(!(Wa=!Na&&!O)){var Xa;if(Xa=O)Xa=9<=Va;Wa=Xa}Wa||Na&&Ta("1.9.1");O&&Ta("9");var Ya=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var P=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},Za=function(a){return!!a&&"function"==typeof a&&!!a.call},$a=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},Q=function(a,b){if(a.indexOf)return-1<a.indexOf(b);for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},ab=function(a){var b=document;b.addEventListener?b.addEventListener("DOMContentLoaded",a,!1):b.attachEvent&&b.attachEvent("onDOMContentLoaded",
a)},bb=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},cb=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},db=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},eb=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},fb=function(){var a=window;return F(a.top)?a.top:null},gb=/(^| )adsbygoogle($| )/;var hb=!!window.google_async_iframe_id,ib=function(a,b,c){var d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&$a(d,e+"="+a[e]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var jb=!0,kb=Math.random(),lb={},R=function(a,b,c,d,e){var g,f=jb;try{g=c()}catch(h){try{var l=Ya(h);c="";h.fileName&&(c=h.fileName);var k=-1;h.lineNumber&&(k=h.lineNumber);f=b(a,l,c,k,d)}catch(m){mb("pAR",m)}if(!f)throw h;}finally{if(e)try{e()}catch(n){}}return g},T=function(a,b,c,d,e,g){var f={};if(e)try{e(f)}catch(h){}f.context=a;f.msg=b.substring(0,512);c&&(f.file=c);0<d&&(f.line=d.toString());f.url=Ha.URL.substring(0,512);f.ref=Ha.referrer.substring(0,512);nb(f);ob("jserror",f,g);return jb},
ob=function(a,b,c){try{if(("jserror"==a?Math.random():kb)<(c||.01)){var d="/pagead/gen_204?id="+a+qb(b),e="http"+("http:"==J.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+d,e=e.substring(0,2E3);J.google_image_requests||(J.google_image_requests=[]);var g=J.document.createElement("img");g.src=e;J.google_image_requests.push(g)}}catch(f){}},mb=function(a,b){try{var c=Ya(b),d="";b.fileName&&(d=b.fileName);var e=-1;b.lineNumber&&(e=b.lineNumber);T(a,c,d,e,void 0,void 0)}catch(g){ob("jserror",
{context:"mRE",msg:g.toString()+"\n"+(g.stack||"")},void 0)}},nb=function(a){var b=a||{};P(lb,function(a,d){b[d]=J[a]})},rb=function(a,b){return function(){var c=arguments;return R(a,T,function(){return b.apply(void 0,c)},void 0,void 0)}},sb=function(a,b){return rb(a,b)},tb=function(a){return rb("aa:reactiveTag",a)},qb=function(a){var b="";P(a,function(a,d){if(0===a||a){var e=String(a);b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(e):escape(e))}});return b};var ub=null,vb=function(){if(!ub){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,F(a))b=a;else break;ub=b}return ub};var U={T:{j:"17415661",i:"17415662"},Ba:{j:"453848100",i:"453848101"},ma:{j:"828064124",i:"828064125"},la:{j:"828064127",i:"828064128"},na:{j:"828064170",i:"828064171"},W:{j:"453848130",i:"453848131",H:"453848132",I:"453848133"},X:{j:"453848120",i:"453848121",H:"453848122",I:"453848123"},Ca:{j:"20040030",i:"20040031"},oa:{j:"24819312",i:"24819313"},qa:{j:"24819310",i:"24819311"},ra:{j:"24819308",i:"24819309",V:"24819320"},Y:{ka:"828064119"},ua:{j:"10573501",i:"10573502"},w:{j:"10573591",i:"10573592"},
za:{j:"10573511",i:"10573512"},o:{j:"10573581",i:"10573582"},$:{j:"10573521",i:"10573522"},v:{j:"10573571",i:"10573572"},pa:{j:24819400,i:24819401}};var wb=function(){},yb=function(a,b,c){switch(typeof b){case "string":xb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var e="",g=0;g<d;g++)c.push(e),yb(a,b[g],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(g=b[e],"function"!=typeof g&&(c.push(d),xb(e,c),c.push(":"),yb(a,g,c),
d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},zb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ab=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,xb=function(a,b){b.push('"');b.push(a.replace(Ab,function(a){if(a in zb)return zb[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return zb[a]=e+b.toString(16)}));b.push('"')};var Bb=null,Cb=Na||Oa||La||"function"==typeof p.atob;var Db={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Eb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];P(a,function(a,d){if(null!=a){var e;try{var g=[];yb(new wb,a,g);e=g.join("")}catch(f){}e&&(e=e.replace(/\//g,"\\$&"),$a(b,d,"=",e,";"))}});return b.join("")};var Fb={U:"google_auto_instream_debug",Z:"google_anchor_debug",ba:"google_ifsl_debug",ca:"google_inflate_debug",da:"google_ia_debug",fa:"google_ia_debug_fi",aa:"google_scr_debug",ea:"google_ia_debug_allow_onclick",ga:"google_ia_debug_verify_onclick",ha:"google_ladder_rung_debug",ia:"google_lat_debug",ja:"google_lat_debug_all",sa:"googleads",ta:"google_resize_debug",Aa:"google_supersize_debug",Da:"google_visible_intentful_click",xa:"google_server_side_slot_resize",wa:"google_server_side_portal",ya:"google_server_side_split_slot",
va:"google_server_side_expand_anchor"};var V=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}},Hb=function(a){var b=!1;P(Fb,function(c){Gb(a,c)&&(b=!0)});return b},Gb=function(a,b){if(!a)return!1;var c=a.hash;if(!c||!c.indexOf)return!1;if(-1!=c.indexOf(b))return!0;var d=Ib(b);return"go"!=d&&-1!=c.indexOf(d)?!0:!1},Ib=function(a){var b="";P(a.split("_"),function(a){b+=a.substr(0,2)});return b};var W=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},Jb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var Kb=function(){return N("iPad")||N("Android")&&!N("Mobile")||N("Silk")};var Lb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Mb=/^([0-9.]+)px$/,Nb=/^([0-9.]+)$/,Ob=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var e="google_ad_"+c[d];if(!b.hasOwnProperty(e)){var g;g=(g=(g=Mb.exec(a[c[d]]))?Number(g[1]):null)?Math.round(g):null;null!=g&&(b[e]=g)}}},Pb=function(a,b){var c=b.document.documentElement;try{var d=c.getBoundingClientRect();return a.getBoundingClientRect().top-d.top}catch(e){return 0}};var Qb={rectangle:1,horizontal:2,vertical:4,autorelaxed:1},Rb=[{width:970,height:90,format:2},{width:728,height:90,format:2},{width:468,height:60,format:2},{width:336,height:280,format:1},{width:320,height:100,format:2},{width:320,height:50,format:2},{width:300,height:600,format:4},{width:300,height:250,format:1},{width:250,height:250,format:1},{width:234,height:60,format:2},{width:200,height:200,format:1},{width:180,height:150,format:1},{width:160,height:600,format:4},{width:125,height:125,format:1},
{width:120,height:600,format:4},{width:120,height:240,format:4}];var Sb=function(a,b){return b.width-a.width||b.height-a.height},Tb=function(a){return Q(W(a),U.w.i)};jb=!sa;lb={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var Ub=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:G([c,d],b)},Vb=function(a,b,c,d){a=a.google_active_plles=a.google_active_plles||[];Q(W(b),c)&&a.push(c);Q(W(b),d)&&a.push(d)};var Wb=function(a,b,c){R("files::getSrc",T,function(){if("https:"==J.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Xb=function(a,b,c){c||(c=va?"https":"http");return Wb(a,b,c)};var Yb=null;var Zb=function(a){this.m=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:r(this.R,this)});this.N=a.google_iframe_oncopy},$b;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(X)&&(-1!=X.indexOf("&")&&(X=X.replace(xa,"&amp;")),-1!=X.indexOf("<")&&(X=X.replace(ya,"&lt;")),-1!=X.indexOf(">")&&(X=X.replace(za,"&gt;")),-1!=X.indexOf('"')&&(X=X.replace(Aa,"&quot;")),-1!=X.indexOf("'")&&(X=X.replace(Ba,"&#39;")),-1!=X.indexOf("\x00")&&(X=X.replace(Ca,"&#0;")));$b=X;Zb.prototype.set=function(a,b){this.N.handlers[a]=b;this.m.addEventListener&&this.m.addEventListener("load",r(this.J,this,a),!1)};
Zb.prototype.J=function(a){a=this.m.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};Zb.prototype.R=function(a,b){var c=ac("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var ac=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var bc=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Y,Z=function(a){this.u=[];this.m=a||window;this.l=0;this.s=null;this.G=0},cc=function(a,b){this.K=a;this.S=b};Z.prototype.enqueue=function(a,b){0!=this.l||0!=this.u.length||b&&b!=window?this.B(a,b):(this.l=2,this.D(new cc(a,window)))};Z.prototype.B=function(a,b){this.u.push(new cc(a,b||this.m));dc(this)};Z.prototype.L=function(a){this.l=1;if(a){var b=sb("sjr::timeout",r(this.C,this,!0));this.s=this.m.setTimeout(b,a)}};
Z.prototype.C=function(a){a&&++this.G;1==this.l&&(null!=this.s&&(this.m.clearTimeout(this.s),this.s=null),this.l=0);dc(this)};Z.prototype.M=function(){return!(!window||!Array)};Z.prototype.O=function(){return this.G};Z.prototype.nq=Z.prototype.enqueue;Z.prototype.nqa=Z.prototype.B;Z.prototype.al=Z.prototype.L;Z.prototype.rl=Z.prototype.C;Z.prototype.sz=Z.prototype.M;Z.prototype.tc=Z.prototype.O;var dc=function(a){var b=sb("sjr::tryrun",r(a.P,a));a.m.setTimeout(b,0)};
Z.prototype.P=function(){if(0==this.l&&this.u.length){var a=this.u.shift();this.l=2;var b=sb("sjr::run",r(this.D,this,a));a.S.setTimeout(b,0);dc(this)}};Z.prototype.D=function(a){this.l=0;a.K()};
var ec=function(a){try{return a.sz()}catch(b){return!1}},fc=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&ec(a)&&Za(a.nq)&&Za(a.nqa)&&Za(a.al)&&Za(a.rl)},gc=function(){if(Y&&ec(Y))return Y;var a=vb(),b=a.google_jobrunner;return fc(b)?Y=b:a.google_jobrunner=Y=new Z(a)},hc=function(a,b){gc().nq(a,b)},ic=function(a,b){gc().nqa(a,b)};var jc=hb?1==cb(J):!cb(J),kc=function(){var a=ua?"https":"http",b=D("script"),c;c=ia("","pagead2.googlesyndication.com");return["<",b,' src="',Xb(c,"/pagead/js/r20150730/r20150720/show_ads_impl.js",a),'"></',b,">"].join("")},lc=function(a,b,c,d){return function(){var e=!1;d&&gc().al(3E4);var g=a.document.getElementById(b);g&&!F(g.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{var f=a.document.getElementById(b).contentWindow;if(F(f)){var h=a.document.getElementById(b).contentWindow,l=h.document;l.body&&l.body.firstChild||(l.open(),h.google_async_iframe_close=!0,l.write(c))}else{var k=a.document.getElementById(b).contentWindow,m;g=c;g=String(g);if(g.quote)m=g.quote();else{f=['"'];for(h=0;h<g.length;h++){var n=g.charAt(h),v=n.charCodeAt(0),l=h+1,L;if(!(L=Da[n])){var x;if(31<v&&127>v)x=n;else{var u=n;if(u in z)x=z[u];
else if(u in Da)x=z[u]=Da[u];else{var A=u,q=u.charCodeAt(0);if(31<q&&127>q)A=u;else{if(256>q){if(A="\\x",16>q||256<q)A+="0"}else A="\\u",4096>q&&(A+="0");A+=q.toString(16).toUpperCase()}x=z[u]=A}}L=x}f[l]=L}f.push('"');m=f.join("")}k.location.replace("javascript:"+m)}e=!0}catch(w){k=vb().google_jobrunner,fc(k)&&k.rl()}e&&(e=ac("google_async_rrc",c),(new Zb(a)).set(b,lc(a,b,e,!1)))}},mc=function(a){var b=["<iframe"];P(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},
oc=function(a,b,c){nc(a,b,c,function(a,b,g){a=a.document;for(var f=b.id,h=0;!f||a.getElementById(f);)f="aswift_"+h++;b.id=f;b.name=f;f=Number(g.google_ad_width);h=Number(g.google_ad_height);16==g.google_reactive_ad_format?(g=a.createElement("div"),g.innerHTML=ib(b,f,h),c.appendChild(g.firstChild)):c.innerHTML=ib(b,f,h);return b.id})},nc=function(a,b,c,d){var e=D("script"),g={},f=b.google_ad_height;g.width='"'+b.google_ad_width+'"';g.height='"'+f+'"';g.frameborder='"0"';g.marginwidth='"0"';g.marginheight=
'"0"';g.vspace='"0"';g.hspace='"0"';g.allowtransparency='"true"';g.scrolling='"no"';g.allowfullscreen='"true"';g.onload='"'+$b+'"';d=d(a,g,b);var g=pc(b)?G(["c","e"],pa):null,h=b.google_ad_output,f=b.google_ad_format;f||"html"!=h&&null!=h||(f=b.google_ad_width+"x"+b.google_ad_height,"e"==g&&(f+="_as"));h=!b.google_ad_slot||pc(b);f=f&&h?f.toLowerCase():"";b.google_ad_format=f;for(var f=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],h=[],l=0,k=c;k&&25>l;k=
k.parentNode,++l)h.push(9!=k.nodeType&&k.id||"");(h=h.join())&&f.push(h);b.google_ad_unit_key=db(f.join(":")).toString();f=a.google_adk2_experiment=a.google_adk2_experiment||G(["C","E"],oa)||"N";if("E"==f){f=[];for(h=0;c&&25>h;++h){l="";l=(l=9!=c.nodeType&&c.id)?"/"+l:"";a:{if(c&&c.nodeName&&c.parentElement)for(var k=c.nodeName.toString().toLowerCase(),m=c.parentElement.childNodes,n=0,v=0;v<m.length;++v){var L=m[v];if(L.nodeName&&L.nodeName.toString().toLowerCase()==k){if(c==L){k="."+n;break a}++n}}k=
""}f.push((c.nodeName&&c.nodeName.toString().toLowerCase())+l+k);c=c.parentElement}c=f.join()+":";f=a;h=[];if(f)try{for(var x=f.parent,l=0;x&&x!=f&&25>l;++l){for(var u=x.frames,k=0;k<u.length;++k)if(f==u[k]){h.push(k);break}f=x;x=f.parent}}catch(A){}b.google_ad_unit_key_2=db(c+h.join()).toString()}else"C"==f&&(b.google_ad_unit_key_2="ctrl");x=Eb(b);u=null;c=G(["C","E"],ra);if("E"==c){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var q=encodeURIComponent(window.JSON.stringify(b)),
w;if(Cb)w=p.btoa(q);else{f=[];for(l=h=0;l<q.length;l++){for(var H=q.charCodeAt(l);255<H;)f[h++]=H&255,H>>=8;f[h++]=H}var B=aa(f);if("array"!=B&&("object"!=B||"number"!=typeof f.length))throw Error("encodeByteArray takes an array as a parameter");if(!Bb)for(Bb={},q=0;65>q;q++)Bb[q]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(q);q=Bb;H=[];for(B=0;B<f.length;B+=3){var E=f[B],ha=B+1<f.length,M=ha?f[B+1]:0,S=B+2<f.length,pb=S?f[B+2]:0,h=E>>2,l=(E&3)<<4|M>>4,k=(M&15)<<2|pb>>
6,m=pb&63;S||(m=64,ha||(k=64));H.push(q[h],q[l],q[k],q[m])}w=H.join("")}u=w;break a}ob("sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0})}catch(Ac){mb("sblob",Ac)}u=""}u||(u="{X}")}else"C"==c&&(u="{C}");var C;b=b.google_ad_client;if(w=jc){if(!Yb)b:{E=[J.top];w=[];for(ha=0;M=E[ha++];){w.push(M);try{if(M.frames)for(var I=M.frames.length,S=0;S<I&&1024>E.length;++S)E.push(M.frames[S])}catch(Gc){}}for(I=0;I<w.length;I++)try{if(C=w[I].frames.google_esf){Yb=C;break b}}catch(Hc){}Yb=null}w=
!Yb}w?(C={style:"display:none"},C["data-ad-client"]=bc(b),C.id="google_esf",C.name="google_esf",C.src=Xb(ia("","googleads.g.doubleclick.net"),"/pagead/html/r20150730/r20150720/zrt_lookup.html"),C=mc(C)):C="";I=(new Date).getTime();b=a.google_top_experiment;if(w=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=void 0;E=a.google_always_use_delayed_impressions_experiment;g=["<!doctype html><html><body>",
C,"<",e,">",x,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',ea,";",c?'google_pub_vars = "'+u+'";':"",b?'google_top_experiment="'+b+'";':"",w?'google_async_for_oa_experiment="'+w+'";':"",E?'google_always_use_delayed_impressions_experiment="'+E+'";':"",g?'google_append_as_for_format_override="'+g+'";':"","google_bpp=",I>ea?I-ea:1,";google_async_rrc=0;</",e,">",kc(),"</body></html>"].join("");(a.document.getElementById(d)?hc:ic)(lc(a,
d,g,!0))},qc=Math.floor(1E6*Math.random()),rc=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var e=c[d].indexOf("=");-1!=e&&(b[c[d].substr(0,e)]=c[d].substr(e+1))}}catch(g){}c=b[3];if(b[1]==qc&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=
0}},pc=function(a){return a.google_override_format||!Lb[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used},sc=function(a,b){var c=navigator;if(qa&&a&&b&&c){var d=a.document,c=d.createElement("script"),e=bc(b);c.async=!0;c.type="text/javascript";c.src=Xb("pagead2.googlesyndication.com","/pub-config/"+e+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}};var tc=function(a){return gb.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},vc=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");uc(a,b,c)},uc=function(a,b,c){wc(a,b,c);if(!xc(a,b,c)){if(b.google_reactive_ads_config){if(yc)throw Error("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");yc=!0}bb(c);1==cb(c)&&sc(c,b.google_ad_client);P(Db,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;if(d&&
"html"!=d)throw Error("adsbygoogle.push() error: No support for google_ad_output="+d);R("aa::load",T,function(){oc(c,b,a)})}},xc=function(a,b,c){var d=b.google_reactive_ads_config;if(d)var e=d.page_level_pubvars,g=(ba(e)?e:{}).google_tag_origin;var f=b.google_ad_slot,e=c.google_ad_modifications;!e||Jb(e.ad_whitelist,f,g||b.google_tag_origin)?e=null:(g=e.space_collapsing||"none",e=(f=Jb(e.ad_blacklist,f))?{A:!0,F:f.space_collapsing||g}:e.remove_ads_by_default?{A:!0,F:g}:null);return e&&e.A&&"on"!=
b.google_adtest?("slot"==e.F&&(null!==Ga(a.getAttribute("width"))&&a.setAttribute("width",0),null!==Ga(a.getAttribute("height"))&&a.setAttribute("height",0),a.style.width="0px",a.style.height="0px"),!0):!(e=eb(a,c))||"none"!=e.display||"on"==b.google_adtest||0<b.google_reactive_ad_format||d?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),!0)},wc=function(a,b,c){for(var d=a.attributes,e=d.length,g=0;g<e;g++){var f=
d[g];if(/data-/.test(f.name)){var h=f.name.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(h)||(f=f.value,"google_reactive_ad_format"==h&&(f=+f,f=isNaN(f)?null:f),null===f||(b[h]=f))}}d=c.google_ad_modifications=c.google_ad_modifications||{};d.plle||(d.plle=!0,d=d.loeids=d.loeids||[],e=U.w,(e=Ub(c,la,e.j,e.i))&&d.push(e),e=U.o,(e=Ub(c,ma,e.j,e.i))&&d.push(e),e=U.v,(e=Ub(c,na,e.j,e.i))&&d.push(e));Hb(c.location)&&(b.google_adtest="on");if(b.google_enable_content_recommendations&&1==b.google_reactive_ad_format)b.google_ad_width=
V(c).clientWidth,b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=V(c).clientWidth||0,b.google_ad_height=V(c).clientHeight||0,a.style.display="none";else if(9==b.google_reactive_ad_format)b.google_ad_width=V(c).clientWidth||0,b.google_ad_height=V(c).clientHeight||0,a.style.display="none";else if(d=b.google_ad_format,"auto"==d||/^((^|,) *(horizontal|vertical|rectangle|autorelaxed) *)+$/.test(d)){d=
U.w;Vb(b,c,d.j,d.i);d=U.o;Vb(b,c,d.j,d.i);d=U.v;Vb(b,c,d.j,d.i);d=a.offsetWidth;if(Q(W(c),U.v.i)||Tb(c)||Q(W(c),U.o.i)){e=a;g=Infinity;do{a:{if(e&&e.style&&e.style.height&&(h=/^(\d+)px$/.exec(e.style.height))){h=+h[1];break a}h=null}h&&(g=Math.min(g,h))}while(e=e.parentNode);e=g}else e=void 0;var g=b.google_ad_format,l;if("auto"==g)l=V(c).clientWidth,l=Math.min(1200,l),l=d/l,h=Tb(c)&&!(488>V(c).clientWidth)&&.6<l?2:.25>=l?4:3;else for(l in h=0,Qb)-1!=g.indexOf(l)&&(h|=Qb[l]);b&&(b.google_responsive_formats=
h);a:{l="number"==typeof e?e:Infinity;if(Tb(c)){for(var f=1+cb(c),k=Pb(a,c)/V(c).clientHeight,f=!Kb()&&(N("iPod")||N("iPhone")||N("Android")||N("IEMobile"))?1==f?.22>k?[7,8,3,12,6,14,4,1,10,11,13,0,2,15,5,9]:.7>k?[3,7,8,14,12,4,6,1,10,2,0,13,15,11,5,9]:[3,7,8,4,6,14,12,2,1,0,10,13,5,9,11,15]:2==f?1.18>k?[3,7,8,14,12,4,1,0,6,2,10,9,5,15,11,13]:3.04>k?[3,7,8,14,4,2,1,6,0,12,10,5,9,11,15,13]:[3,7,8,4,6,1,2,14,12,0,5,10,11,9,15,13]:2.3>k?[3,7,14,8,1,12,0,2,6,4,10,5,13,11,9,15]:5.6>k?[3,7,8,14,1,2,12,
4,0,6,10,5,11,9,13,15]:[3,7,8,0,12,14,1,4,2,6,5,13,10,11,15,9]:Kb()?1==f?.18>k?[3,7,8,12,6,1,14,0,4,10,2,5,13,15,9,11]:.49>k?[3,8,6,7,12,1,0,14,2,10,4,5,13,9,11,15]:[3,8,7,6,1,12,0,2,14,4,10,5,9,13,15,11]:2==f?.7>k?[3,8,6,7,1,0,12,2,14,10,4,9,5,13,11,15]:1.58>k?[3,8,7,6,1,12,0,2,14,10,4,9,5,13,11,15]:[3,8,7,6,1,12,0,2,14,4,10,9,5,11,13,15]:1.03>k?[3,12,6,8,1,7,0,14,2,10,4,5,9,11,15,13]:2.55>k?[3,8,6,7,12,1,2,0,14,4,10,5,9,11,15,13]:[3,8,12,6,7,1,0,2,14,4,10,5,9,11,15,13]:1==f?.21>k?[3,12,7,6,1,8,
0,4,2,10,14,11,5,15,9,13]:.54>k?[3,7,6,1,12,8,2,0,4,10,14,9,5,11,15,13]:[3,7,1,6,12,2,0,8,4,10,14,5,9,11,15,13]:2==f?.6>k?[3,7,1,12,6,0,2,8,4,10,14,9,5,11,13,15]:1.53>k?[3,7,1,6,12,2,0,8,4,10,14,5,9,11,13,15]:[3,7,1,6,12,2,0,8,4,10,14,5,9,11,15,13]:.74>k?[3,7,12,6,1,2,8,0,4,14,10,9,13,5,11,15]:1.95>k?[3,7,6,12,1,2,8,0,4,10,14,5,9,11,13,15]:[3,7,6,12,1,2,8,0,4,14,10,5,9,11,15,13],k=[],m=0;m<f.length;++m)k.push(Rb[f[m]]);f=k}else f=Rb.slice(0).sort(Sb);if(Q(W(c),U.o.i)){for(var k=f.length,m=[],n=0;n<
k;++n){var v=Math.floor(Math.random()*(n+1));m[n]=m[v];m[v]=f[n]}f=m}if(m=k=488>V(c).clientWidth)m=Math.min(V(c).clientHeight,16*V(c).clientWidth/9),m=Pb(a,c)<m-100;for(n=0;n<f.length;n++)if(v=f[n],v.width<=d&&v.height<=l&&v.format&h&&!(320==v.width&&(k&&50==v.height||!k&&100==v.height)||m&&250<=v.height)){l=v;break a}l=null}if(!l)throw Error("Cannot find a responsive size for a container of width="+d+"px and height="+e+"px data-ad-format="+g);b.google_ad_width=300<d&&300<l.height?l.width:2!=l.format&&
Tb(c)?l.width:1200<d?1200:Math.round(d);b.google_ad_height=l.height;a.style.height=l.height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else if(!Nb.test(b.google_ad_width)&&!Mb.test(a.style.width)||!Nb.test(b.google_ad_height)&&!Mb.test(a.style.height)?(d=eb(a,c),a.style.width=d.width,a.style.height=d.height,Ob(d,b),b.google_loader_features_used=256):(Ob(a.style,b),b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height||
(d=a.style.width,a.style.width="100%",e=a.offsetWidth,a.style.width=d,b.google_available_width=e)),e=b.google_ad_width,d=b.google_ad_height,e&&d&&!Lb[e+"x"+d]&&(d=G("CD ED CA EA CW EW".split(" "),ka)))"CD"==d?b.google_overflowing_ads_experiment=d:((e=/W$/.test(d)&&728>e)||(e=/^E/.test(d),g=V(c),a&&a.getBoundingClientRect&&g&&g.getBoundingClientRect?(c=a.getBoundingClientRect(),g=g.getBoundingClientRect(),c=Math.min(c.right,g.right)-Math.max(c.left,g.left),c=Math.round(Math.max(0,c))):c=0,160>c||15>
b.google_ad_width-c?a=!1:(g=a.style.width||"",a.style.width="100%",l=a.offsetWidth,160>l||0>c-l?(a.style.width=g,a=!1):(e?(b.google_ad_width=c,a.style.width=c+"px"):a.style.width=g,a=!0)),e=!a&&"ED"!=d),e||(b.google_overflowing_ads_experiment=d));0<b.google_reactive_ad_format&&!b.google_pgb_reactive&&(b.google_pgb_reactive=3)},zc=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(tc(d)&&(!a||d.id==a))return d;return null},yc=!1,Bc=function(a){var b={};P(fa,
function(c,e){a.hasOwnProperty(e)&&(b[e]=a[e])});ba(a.enable_page_level_ads)&&(b.page_level_pubvars=a.enable_page_level_ads);var c=document.createElement("ins");c.className="adsbygoogle";c.style.display="none";document.body.appendChild(c);vc(c,{google_reactive_ads_config:b,google_ad_client:a.google_ad_client})},Cc=function(a){if(!fb())throw Error("adsbygoogle.push() error: Page-level tag must be placed in top window.");document.body?Bc(a):ab(tb(function(){Bc(a)}))},Dc=function(a,b,c,d,e,g){return-1<
b.indexOf("adsbygoogle.push() error: ")?!1:T(a,b,c,d,e,g)},Ec=function(a){R("aa::hqe",Dc,function(){var b;a:{if(a.enable_page_level_ads){if("string"==typeof a.google_ad_client){b=!0;break a}throw Error("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");}b=!1}if(b)Cc(a);else{b=a.element;var c=a.params||{};if(b){if(!tc(b)&&(b=b.id&&zc(b.id),!b))throw Error("adsbygoogle.push() error: 'element' has already been filled.");if(!("innerHTML"in b))throw Error("adsbygoogle.push() error: 'element' is not a good DOM element.");
}else if(b=zc(),!b)throw Error("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");vc(b,c)}})},Fc=function(){R("aa::main",Dc,function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:F(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=J.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=G(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],
ja),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",rc,!1):a.attachEvent&&a.attachEvent("onmessage",rc);window.google_top_js_status=3;a={0:"google_loc_request",1:qc};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{Ec(a)}catch(e){throw window.setTimeout(Fc,0),e;}d&&d.loaded||(window.adsbygoogle=
{push:Ec,loaded:!0})})};Fc();}).call(this);
