(function(){function e() {
  return function() {
  }
}
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function l(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var m, n = this;
function ca(a) {
  a = a.split(".");
  for(var b = n, c;c = a.shift();) {
    if(null != b[c]) {
      b = b[c]
    }else {
      return null
    }
  }
  return b
}
function da(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function ea(a) {
  return"array" == da(a)
}
function fa(a) {
  var b = da(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function p(a) {
  return"string" == typeof a
}
function ga(a) {
  var b = typeof a;
  return"object" == b && null != a || "function" == b
}
var ha = "closure_uid_" + (1E9 * Math.random() >>> 0), ia = 0;
function ja(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ka(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function q(a, b, c) {
  q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
  return q.apply(null, arguments)
}
function la(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b)
  }
}
var ma = Date.now || function() {
  return+new Date
}, na = null;
function oa(a) {
  var b = {}, c;
  for(c in b) {
    var d = ("" + b[c]).replace(/\$/g, "$$$$");
    a = a.replace(RegExp("\\{\\$" + c + "\\}", "gi"), d)
  }
  return a
}
function r(a, b) {
  var c = a.split("."), d = n;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    c.length || void 0 === b ? d = d[f] ? d[f] : d[f] = {} : d[f] = b
  }
}
function s(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.c = b.prototype;
  a.prototype = new c
}
;function pa() {
  for(var a = window.self, b = 0, c = "";a !== window.top && a.parent;) {
    try {
      if(a.parent && a.parent.location && !a.parent.location.href) {
        throw"HandleSafari";
      }
    }catch(d) {
      if(c = c || a, 2 > b) {
        b++
      }else {
        break
      }
    }
    a = a.parent
  }
  c = c || a;
  a = (a = c.document.referrer.match(/[^?]+/)) ? a[0] : "";
  a = a.slice(0, 128);
  this.Ld = b;
  this.df = a;
  this.ef = c.location.href
}
pa.prototype.Ma = l("ef");
function qa(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, qa) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
s(qa, Error);
qa.prototype.name = "CustomError";
var ra;
function ta(a, b) {
  for(var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < c.length;) {
    d += c.shift() + f.shift()
  }
  return d + c.join("%s")
}
function ua(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function va(a) {
  if(!wa.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(xa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ya, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(za, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Aa, "\x26quot;"));
  return a
}
var xa = /&/g, ya = /</g, za = />/g, Aa = /\"/g, wa = /[&<>\"]/;
function Ba(a, b) {
  for(var c = 0, d = ua(String(a)).split("."), f = ua(String(b)).split("."), g = Math.max(d.length, f.length), h = 0;0 == c && h < g;h++) {
    var k = d[h] || "", F = f[h] || "", sa = RegExp("(\\d*)(\\D*)", "g"), W = RegExp("(\\d*)(\\D*)", "g");
    do {
      var X = sa.exec(k) || ["", "", ""], Y = W.exec(F) || ["", "", ""];
      if(0 == X[0].length && 0 == Y[0].length) {
        break
      }
      c = ((0 == X[1].length ? 0 : parseInt(X[1], 10)) < (0 == Y[1].length ? 0 : parseInt(Y[1], 10)) ? -1 : (0 == X[1].length ? 0 : parseInt(X[1], 10)) > (0 == Y[1].length ? 0 : parseInt(Y[1], 10)) ? 1 : 0) || ((0 == X[2].length) < (0 == Y[2].length) ? -1 : (0 == X[2].length) > (0 == Y[2].length) ? 1 : 0) || (X[2] < Y[2] ? -1 : X[2] > Y[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
function Ca(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}
function Da(a) {
  var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, f) {
    return b + f.toUpperCase()
  })
}
;function Ea(a, b) {
  b.unshift(a);
  qa.call(this, ta.apply(null, b));
  b.shift();
  this.Ri = a
}
s(Ea, qa);
Ea.prototype.name = "AssertionError";
function Fa(a, b) {
  throw new Ea("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var t = Array.prototype, Ga = t.indexOf ? function(a, b, c) {
  return t.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(p(a)) {
    return p(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, u = t.forEach ? function(a, b, c) {
  t.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = p(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Ha = t.filter ? function(a, b, c) {
  return t.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, h = p(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var F = h[k];
      b.call(c, F, k, a) && (f[g++] = F)
    }
  }
  return f
}, Ia = t.some ? function(a, b, c) {
  return t.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = p(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return!0
    }
  }
  return!1
};
function Ja(a) {
  var b = Ka;
  a: {
    for(var c = b.length, d = p(b) ? b.split("") : b, f = 0;f < c;f++) {
      if(f in d && a.call(void 0, d[f], f, b)) {
        break a
      }
    }
  }
}
function La(a, b) {
  var c = Ga(a, b), d;
  (d = 0 <= c) && t.splice.call(a, c, 1);
  return d
}
function Ma(a) {
  return t.concat.apply(t, arguments)
}
function Na(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function Oa(a, b, c) {
  return 2 >= arguments.length ? t.slice.call(a, b) : t.slice.call(a, b, c)
}
;var Pa, Qa, Ra, Sa, Ta;
function Ua() {
  return n.navigator ? n.navigator.userAgent : null
}
function Va() {
  return n.navigator
}
Sa = Ra = Qa = Pa = !1;
var Wa;
if(Wa = Ua()) {
  var Xa = Va();
  Pa = 0 == Wa.lastIndexOf("Opera", 0);
  Qa = !Pa && (-1 != Wa.indexOf("MSIE") || -1 != Wa.indexOf("Trident"));
  Ra = !Pa && -1 != Wa.indexOf("WebKit");
  Sa = !Pa && !Ra && !Qa && "Gecko" == Xa.product
}
var Ya = Pa, v = Qa, w = Sa, x = Ra, Za = Va();
Ta = -1 != (Za && Za.platform || "").indexOf("Mac");
var $a = !!Va() && -1 != (Va().appVersion || "").indexOf("X11");
function ab() {
  var a = n.document;
  return a ? a.documentMode : void 0
}
var bb;
a: {
  var cb = "", db;
  if(Ya && n.opera) {
    var eb = n.opera.version, cb = "function" == typeof eb ? eb() : eb
  }else {
    if(w ? db = /rv\:([^\);]+)(\)|;)/ : v ? db = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : x && (db = /WebKit\/(\S+)/), db) {
      var fb = db.exec(Ua()), cb = fb ? fb[1] : ""
    }
  }
  if(v) {
    var gb = ab();
    if(gb > parseFloat(cb)) {
      bb = String(gb);
      break a
    }
  }
  bb = cb
}
var hb = {};
function y(a) {
  return hb[a] || (hb[a] = 0 <= Ba(bb, a))
}
var ib = n.document, jb = ib && v ? ab() || ("CSS1Compat" == ib.compatMode ? parseInt(bb, 10) : 5) : void 0;
var kb = !v || v && 9 <= jb, lb = !w && !v || v && v && 9 <= jb || w && y("1.9.1"), mb = v && !y("9");
function nb(a, b) {
  var c;
  c = a.className;
  c = p(c) && c.match(/\S+/g) || [];
  for(var d = Oa(arguments, 1), f = c.length + d.length, g = c, h = 0;h < d.length;h++) {
    0 <= Ga(g, d[h]) || g.push(d[h])
  }
  a.className = c.join(" ");
  return c.length == f
}
;function ob(a, b) {
  this.x = void 0 !== a ? a : 0;
  this.y = void 0 !== b ? b : 0
}
m = ob.prototype;
m.ja = function() {
  return new ob(this.x, this.y)
};
m.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
m.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this
};
m.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this
};
m.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};
function pb(a, b) {
  this.width = a;
  this.height = b
}
m = pb.prototype;
m.ja = function() {
  return new pb(this.width, this.height)
};
m.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
m.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
m.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
m.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function qb(a, b, c) {
  for(var d in a) {
    b.call(c, a[d], d, a)
  }
}
function rb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function sb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var tb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ub(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < tb.length;g++) {
      c = tb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function vb(a) {
  return a ? new wb(xb(a)) : ra || (ra = new wb)
}
function yb(a, b, c) {
  var d = document;
  c = c || d;
  a = a && "*" != a ? a.toUpperCase() : "";
  if(c.querySelectorAll && c.querySelector && (a || b)) {
    return c.querySelectorAll(a + (b ? "." + b : ""))
  }
  if(b && c.getElementsByClassName) {
    c = c.getElementsByClassName(b);
    if(a) {
      for(var d = {}, f = 0, g = 0, h;h = c[g];g++) {
        a == h.nodeName && (d[f++] = h)
      }
      d.length = f;
      return d
    }
    return c
  }
  c = c.getElementsByTagName(a || "*");
  if(b) {
    d = {};
    for(g = f = 0;h = c[g];g++) {
      a = h.className, "function" == typeof a.split && 0 <= Ga(a.split(/\s+/), b) && (d[f++] = h)
    }
    d.length = f;
    return d
  }
  return c
}
function zb(a, b) {
  qb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Ab ? a.setAttribute(Ab[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var Ab = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Bb(a) {
  a = a.document;
  a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new pb(a.clientWidth, a.clientHeight)
}
function Cb(a) {
  return a ? a.parentWindow || a.defaultView : window
}
function Db(a, b, c) {
  return Eb(document, arguments)
}
function Eb(a, b) {
  var c = b[0], d = b[1];
  if(!kb && d && (d.name || d.type)) {
    c = ["\x3c", c];
    d.name && c.push(' name\x3d"', va(d.name), '"');
    if(d.type) {
      c.push(' type\x3d"', va(d.type), '"');
      var f = {};
      ub(f, d);
      delete f.type;
      d = f
    }
    c.push("\x3e");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (p(d) ? c.className = d : ea(d) ? nb.apply(null, [c].concat(d)) : zb(c, d));
  2 < b.length && Fb(a, c, b, 2);
  return c
}
function Fb(a, b, c, d) {
  function f(c) {
    c && b.appendChild(p(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    !fa(g) || ga(g) && 0 < g.nodeType ? f(g) : u(Gb(g) ? Na(g) : g, f)
  }
}
function Hb(a, b) {
  a.appendChild(b)
}
function Ib(a, b) {
  Fb(xb(a), a, arguments, 1)
}
function Jb(a, b) {
  a.insertBefore(b, a.childNodes[0] || null)
}
function z(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null
}
function Kb(a) {
  return lb && void 0 != a.children ? a.children : Ha(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
}
function xb(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Lb(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(3 == a.nodeType) {
      a.data = b
    }else {
      if(a.firstChild && 3 == a.firstChild.nodeType) {
        for(;a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild)
        }
        a.firstChild.data = b
      }else {
        for(var c;c = a.firstChild;) {
          a.removeChild(c)
        }
        a.appendChild(xb(a).createTextNode(String(b)))
      }
    }
  }
}
var Mb = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Nb = {IMG:" ", BR:"\n"};
function Ob(a) {
  if(mb && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    Pb(a, b, !0);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  mb || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a
}
function Pb(a, b, c) {
  if(!(a.nodeName in Mb)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Nb) {
        b.push(Nb[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Pb(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Gb(a) {
  if(a && "number" == typeof a.length) {
    if(ga(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if("function" == da(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
}
function wb(a) {
  this.F = a || n.document || document
}
m = wb.prototype;
m.m = vb;
function A(a) {
  return a.F
}
m.h = function(a) {
  return p(a) ? this.F.getElementById(a) : a
};
m.r = function(a, b, c) {
  return Eb(this.F, arguments)
};
m.createElement = function(a) {
  return this.F.createElement(a)
};
m.createTextNode = function(a) {
  return this.F.createTextNode(String(a))
};
function Qb(a) {
  return a.F.parentWindow || a.F.defaultView
}
function Rb(a) {
  var b = a.F;
  a = x || "CSS1Compat" != b.compatMode ? b.body || b.documentElement : b.documentElement;
  b = b.parentWindow || b.defaultView;
  return v && y("10") && b.pageYOffset != a.scrollTop ? new ob(a.scrollLeft, a.scrollTop) : new ob(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
m.appendChild = Hb;
m.removeNode = z;
m.ae = Kb;
m.contains = function(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
};
v && y(8);
var Sb = {Si:!0}, Tb = {Ti:!0};
function B(a, b) {
  var c = vb().createElement("DIV"), d = Ub(a(b || Vb, void 0, void 0));
  d.match(Wb);
  c.innerHTML = d;
  return 1 == c.childNodes.length && (d = c.firstChild, 1 == d.nodeType) ? d : c
}
function Ub(a) {
  if(!ga(a)) {
    return String(a)
  }
  Fa("Soy template output is unsafe for use as HTML: " + a);
  return"zSoyz"
}
var Wb = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i, Vb = {};
function C(a) {
  return a && a.Rc && a.Rc === Sb ? a.content : String(a).replace(Xb, Yb)
}
var Zb = {"\x00":"\x26#0;", '"':"\x26quot;", "\x26":"\x26amp;", "'":"\x26#39;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", "\t":"\x26#9;", "\n":"\x26#10;", "\x0B":"\x26#11;", "\f":"\x26#12;", "\r":"\x26#13;", " ":"\x26#32;", "-":"\x26#45;", "/":"\x26#47;", "\x3d":"\x26#61;", "`":"\x26#96;", "\u0085":"\x26#133;", "\u00a0":"\x26#160;", "\u2028":"\x26#8232;", "\u2029":"\x26#8233;"};
function Yb(a) {
  return Zb[a]
}
var Xb = /[\x00\x22\x26\x27\x3c\x3e]/g;
function $b(a) {
  return'\x3cimg src\x3d"' + C(a.url) + '" alt\x3d"" width\x3d0 height\x3d0 style\x3d"border:0px none; display: none;" /\x3e'
}
function ac(a) {
  return'\x3cvideo id\x3d"adaptv-video" width\x3d"' + C(a.width) + '" height\x3d"' + C(a.height) + '" controls\x3e\x3c/video\x3e'
}
function bc() {
  return'\x3cdiv id\x3d"adaptv-companion" style\x3d"height:60px; width:300px; z-index:9999; left: 50%; margin-left: -150px; position: fixed; display:none;"\x3e\x3c/div\x3e'
}
function cc(a) {
  return"\x3cscript type\x3d\"text/javascript\"\x3ebk_allow_multiple_calls\x3dtrue; bk_use_multiple_iframes\x3dtrue; bk_send_statid_payload\x3dtrue; bk_addPageCtx('id', '" + C(a.hf) + "'); bk_doJSTag(15885, 0);\x3c/script\x3e"
}
function dc(a) {
  return'\x3ciframe id\x3d"ADAPTV_HTML5_IFRAME" frameborder\x3d"0" marginheight\x3d"0" marginwidth\x3d"0" scrolling\x3d"no" height\x3d"' + C(a.height) + '" width\x3d"' + C(a.width) + '" style\x3d"allowtransparency: true; border: 0; frameborder: 0; top: 0; left: 0; hspace: 0; vpsace: 0; overflow: hidden; position: absolute;"\x3e\x3c/iframe\x3e'
}
function ec() {
  return'\x3cdiv id\x3d"ADAPTV_HTML5_IFRAME_BODY" style\x3d"position: relative;"\x3e\x3c/div\x3e'
}
function fc(a) {
  return'\x3cvideo id\x3d"ADAPTV_HTML5_MOBILEWEB_VIDEO" height\x3d"' + C(a.height) + '" width\x3d"' + C(a.width) + '" src\x3d"' + C(a.url) + '"' + (a.control ? C(a.control) : "") + 'style\x3d"position: absolute; top: 0; left: 0; background: #000;"\x3eHTML5 video is not supported!\x3c/video\x3e'
}
function gc(a) {
  return'\x3cdiv style\x3d"position: absolute; width: ' + C(a.width) + "px; height: " + C(a.height) + "px; z-index: " + C(a.zIndex) + "; " + (a.hidden ? " display: none;" : "") + '"\x3e\x3cdiv style\x3d"position: absolute; top: ' + C(a.height / 2 - 50) + "px; left: " + C(a.width / 2 - 50) + 'px; background-color: rgba(224, 224, 224, 0.9); -webkit-border-radius: 100%; -moz-border-radius: 100%; border-radius: 100%; width: 100px; height: 100px; cursor: pointer;"\x3e\x3cdiv style\x3d"position:relative; top: 30px; left: 37%; width: 0; height: 0; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-left: 35px solid rgba(64, 64, 64, 0.8);"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'
}
function hc(a) {
  return'\x3cdiv style\x3d" background-color:   rgba(0, 0, 0, 0.8); border:             1px solid rgba(100, 100, 100, 0.8); border-radius:      1px; color:              rgba(255, 255, 255, 1.0); font-family:        Helvetica, sans-serif; font-size:          ' + C(a.fontSize) + "px; height:             " + C(a.height) + "px; line-height:        " + C(a.height) + "px; position:           absolute; right:              0; text-align:         center; top:                " + C(a.top) + "px; width:              " + 
  C(a.width) + 'px; "\x3eSkip ad\x3c/div\x3e'
}
function ic(a) {
  return'\x3cdiv style\x3d" background-color:   rgba(0, 0, 0, 0.8); border:             1px solid rgba(0, 0, 0, 0.8); border-radius:      1px; color:              rgba(255, 255, 255, 1.0); font-family:        Helvetica, sans-serif; font-size:          ' + C(a.fontSize) + "px; height:             " + C(a.height) + "px; line-height:        " + C(a.height) + "px; position:           absolute; right:              0; text-align:         center; top:                " + C(a.top) + "px; width:              " + 
  C(a.width) + 'px; "\x3e\x3c/div\x3e'
}
function jc(a) {
  return'\x3cdiv style\x3d"display: none; position: absolute; top: ' + C(a.height - 25) + "px; right: 5px; background-image: url(" + C(a.Gf) + '); width: 20px; height: 20px; overflow: hidden; cursor: pointer;"\x3e\x3c/div\x3e'
}
function kc() {
  return'\x3cdiv style\x3d"display: none; position: absolute; top: 0px; left: 0px; background-color: rgba(0, 0, 0, 0.6); font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #fff; width: 100%; padding: 4px 8px; box-sizing: border-box; height: 22px;"\x3e\x3c/div\x3e'
}
function lc(a) {
  return'\x3cdiv style\x3d"position: absolute; width: ' + C(a.width) + "px; height: 0px; z-index: " + C(a.zIndex) + ';"\x3e\x3c/div\x3e'
}
;function mc(a) {
  if("function" == typeof a.R) {
    return a.R()
  }
  if(p(a)) {
    return a.split("")
  }
  if(fa(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return rb(a)
}
function nc(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(fa(a) || p(a)) {
      u(a, b, c)
    }else {
      var d;
      if("function" == typeof a.na) {
        d = a.na()
      }else {
        if("function" != typeof a.R) {
          if(fa(a) || p(a)) {
            d = [];
            for(var f = a.length, g = 0;g < f;g++) {
              d.push(g)
            }
          }else {
            d = sb(a)
          }
        }else {
          d = void 0
        }
      }
      for(var f = mc(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], d && d[h], a)
      }
    }
  }
}
;function oc(a, b) {
  this.pa = {};
  this.q = [];
  this.He = this.w = 0;
  var c = arguments.length;
  if(1 < c) {
    if(c % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof oc ? (c = a.na(), d = a.R()) : (c = sb(a), d = rb(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], d[f])
      }
    }
  }
}
m = oc.prototype;
m.R = function() {
  pc(this);
  for(var a = [], b = 0;b < this.q.length;b++) {
    a.push(this.pa[this.q[b]])
  }
  return a
};
m.na = function() {
  pc(this);
  return this.q.concat()
};
m.tb = function(a) {
  return qc(this.pa, a)
};
m.remove = function(a) {
  return qc(this.pa, a) ? (delete this.pa[a], this.w--, this.He++, this.q.length > 2 * this.w && pc(this), !0) : !1
};
function pc(a) {
  if(a.w != a.q.length) {
    for(var b = 0, c = 0;b < a.q.length;) {
      var d = a.q[b];
      qc(a.pa, d) && (a.q[c++] = d);
      b++
    }
    a.q.length = c
  }
  if(a.w != a.q.length) {
    for(var f = {}, c = b = 0;b < a.q.length;) {
      d = a.q[b], qc(f, d) || (a.q[c++] = d, f[d] = 1), b++
    }
    a.q.length = c
  }
}
m.get = function(a, b) {
  return qc(this.pa, a) ? this.pa[a] : b
};
m.set = function(a, b) {
  qc(this.pa, a) || (this.w++, this.q.push(a), this.He++);
  this.pa[a] = b
};
m.ja = function() {
  return new oc(this)
};
function qc(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function rc(a) {
  return sc(a || arguments.callee.caller, [])
}
function sc(a, b) {
  var c = [];
  if(0 <= Ga(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(tc(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var g;
        g = d[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = tc(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(sc(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function tc(a) {
  if(uc[a]) {
    return uc[a]
  }
  a = String(a);
  if(!uc[a]) {
    var b = /function ([^\(]+)/.exec(a);
    uc[a] = b ? b[1] : "[Anonymous]"
  }
  return uc[a]
}
var uc = {};
function vc() {
  0 != wc && (this.Mi = Error().stack, xc[this[ha] || (this[ha] = ++ia)] = this)
}
var wc = 0, xc = {};
vc.prototype.ka = !1;
vc.prototype.a = function() {
  if(!this.ka && (this.ka = !0, this.o(), 0 != wc)) {
    var a = this[ha] || (this[ha] = ++ia);
    delete xc[a]
  }
};
vc.prototype.o = function() {
  if(this.Eb) {
    for(;this.Eb.length;) {
      this.Eb.shift()()
    }
  }
};
function yc(a) {
  a && "function" == typeof a.a && a.a()
}
;var zc = !v || v && 9 <= jb, Ac = !v || v && 9 <= jb, Bc = v && !y("9");
!x || y("528");
w && y("1.9b") || v && y("8") || Ya && y("9.5") || x && y("528");
w && !y("8") || v && y("9");
function D(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
m = D.prototype;
m.o = e();
m.a = e();
m.Ca = !1;
m.defaultPrevented = !1;
m.xe = !0;
m.stopPropagation = function() {
  this.Ca = !0
};
m.preventDefault = function() {
  this.defaultPrevented = !0;
  this.xe = !1
};
function Cc(a) {
  a.stopPropagation()
}
function Dc(a) {
  a.preventDefault()
}
;function Ec(a) {
  return x ? "webkit" + a : Ya ? "o" + a.toLowerCase() : a.toLowerCase()
}
var Fc = {Fd:"click", Ng:"dblclick", wh:"mousedown", Ch:"mouseup", Bh:"mouseover", Ah:"mouseout", zh:"mousemove", xh:"mouseenter", yh:"mouseleave", qi:"selectstart", gh:"keypress", fh:"keydown", hh:"keyup", Dg:"blur", Yg:"focus", Og:"deactivate", Zg:v ? "focusin" : "DOMFocusIn", $g:v ? "focusout" : "DOMFocusOut", Eg:"change", pi:"select", yi:"submit", eh:"input", ki:"propertychange", Vg:"dragstart", Qg:"drag", Sg:"dragenter", Ug:"dragover", Tg:"dragleave", Wg:"drop", Rg:"dragend", bf:"touchstart", 
Ci:"touchmove", Bi:"touchend", Ai:"touchcancel", Cg:"beforeunload", Jg:"consolemessage", Kg:"contextmenu", Pg:"DOMContentLoaded", Nb:"error", dh:"help", ih:"load", qh:"losecapture", Wh:"orientationchange", li:"readystatechange", mi:"resize", oi:"scroll", Ei:"unload", bh:"hashchange", Xh:"pagehide", Yh:"pageshow", ii:"popstate", Lg:"copy", Zh:"paste", Mg:"cut", zg:"beforecopy", Ag:"beforecut", Bg:"beforepaste", Vh:"online", Uh:"offline", vh:"message", Ig:"connect", yg:Ec("AnimationStart"), wg:Ec("AnimationEnd"), 
xg:Ec("AnimationIteration"), Di:Ec("TransitionEnd"), bi:"pointerdown", hi:"pointerup", ai:"pointercancel", ei:"pointermove", gi:"pointerover", fi:"pointerout", ci:"pointerenter", di:"pointerleave", ah:"gotpointercapture", rh:"lostpointercapture", Dh:"MSGestureChange", Eh:"MSGestureEnd", Fh:"MSGestureHold", Gh:"MSGestureStart", Hh:"MSGestureTap", Ih:"MSGotPointerCapture", Jh:"MSInertiaStart", Kh:"MSLostPointerCapture", Lh:"MSPointerCancel", Mh:"MSPointerDown", Nh:"MSPointerEnter", Oh:"MSPointerHover", 
Ph:"MSPointerLeave", Qh:"MSPointerMove", Rh:"MSPointerOut", Sh:"MSPointerOver", Th:"MSPointerUp", zi:"textinput", Gg:"compositionstart", Hg:"compositionupdate", Fg:"compositionend", Xg:"exit", jh:"loadabort", kh:"loadcommit", nh:"loadredirect", oh:"loadstart", ph:"loadstop", ni:"responsive", ri:"sizechanged", Fi:"unresponsive", Gi:"visibilitychange"};
function Gc(a) {
  Gc[" "](a);
  return a
}
Gc[" "] = e();
function Hc(a, b) {
  a && this.init(a, b)
}
s(Hc, D);
var Ic = [1, 4, 2];
m = Hc.prototype;
m.target = null;
m.relatedTarget = null;
m.offsetX = 0;
m.offsetY = 0;
m.clientX = 0;
m.clientY = 0;
m.screenX = 0;
m.screenY = 0;
m.button = 0;
m.keyCode = 0;
m.charCode = 0;
m.ctrlKey = !1;
m.altKey = !1;
m.shiftKey = !1;
m.metaKey = !1;
m.cg = !1;
m.$ = null;
m.init = function(a, b) {
  var c = this.type = a.type;
  D.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(w) {
      var f;
      a: {
        try {
          Gc(d.nodeName);
          f = !0;
          break a
        }catch(g) {
        }
        f = !1
      }
      f || (d = null)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = x || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = x || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.cg = Ta ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.$ = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ca
};
m.stopPropagation = function() {
  Hc.c.stopPropagation.call(this);
  this.$.stopPropagation ? this.$.stopPropagation() : this.$.cancelBubble = !0
};
m.preventDefault = function() {
  Hc.c.preventDefault.call(this);
  var a = this.$;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Bc) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
m.o = e();
var Jc = "closure_listenable_" + (1E6 * Math.random() | 0);
function Kc(a) {
  try {
    return!(!a || !a[Jc])
  }catch(b) {
    return!1
  }
}
var Lc = 0;
function Mc(a, b, c, d, f) {
  this.Ra = a;
  this.vc = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.jc = f;
  this.key = ++Lc;
  this.ib = this.Tb = !1
}
function Nc(a) {
  a.ib = !0;
  a.Ra = null;
  a.vc = null;
  a.src = null;
  a.jc = null
}
;function Oc(a) {
  this.src = a;
  this.A = {};
  this.Jb = 0
}
Oc.prototype.add = function(a, b, c, d, f) {
  var g = this.A[a];
  g || (g = this.A[a] = [], this.Jb++);
  var h = Pc(g, b, d, f);
  -1 < h ? (a = g[h], c || (a.Tb = !1)) : (a = new Mc(b, this.src, a, !!d, f), a.Tb = c, g.push(a));
  return a
};
Oc.prototype.remove = function(a, b, c, d) {
  if(!(a in this.A)) {
    return!1
  }
  var f = this.A[a];
  b = Pc(f, b, c, d);
  return-1 < b ? (Nc(f[b]), t.splice.call(f, b, 1), 0 == f.length && (delete this.A[a], this.Jb--), !0) : !1
};
function Qc(a, b) {
  var c = b.type;
  if(!(c in a.A)) {
    return!1
  }
  var d = La(a.A[c], b);
  d && (Nc(b), 0 == a.A[c].length && (delete a.A[c], a.Jb--));
  return d
}
Oc.prototype.Ta = function(a) {
  var b = 0, c;
  for(c in this.A) {
    if(!a || c == a) {
      for(var d = this.A[c], f = 0;f < d.length;f++) {
        ++b, Nc(d[f])
      }
      delete this.A[c];
      this.Jb--
    }
  }
  return b
};
Oc.prototype.Cb = function(a, b, c, d) {
  a = this.A[a];
  var f = -1;
  a && (f = Pc(a, b, c, d));
  return-1 < f ? a[f] : null
};
function Pc(a, b, c, d) {
  for(var f = 0;f < a.length;++f) {
    var g = a[f];
    if(!g.ib && g.Ra == b && g.capture == !!c && g.jc == d) {
      return f
    }
  }
  return-1
}
;var Rc = "closure_lm_" + (1E6 * Math.random() | 0), Sc = {}, Tc = 0;
function E(a, b, c, d, f) {
  if(ea(b)) {
    for(var g = 0;g < b.length;g++) {
      E(a, b[g], c, d, f)
    }
    return null
  }
  c = Uc(c);
  return Kc(a) ? a.t(b, c, d, f) : Vc(a, b, c, !1, d, f)
}
function Vc(a, b, c, d, f, g) {
  if(!b) {
    throw Error("Invalid event type");
  }
  var h = !!f, k = Wc(a);
  k || (a[Rc] = k = new Oc(a));
  c = k.add(b, c, d, f, g);
  if(c.vc) {
    return c
  }
  d = Xc();
  c.vc = d;
  d.src = a;
  d.Ra = c;
  a.addEventListener ? a.addEventListener(b, d, h) : a.attachEvent(b in Sc ? Sc[b] : Sc[b] = "on" + b, d);
  Tc++;
  return c
}
function Xc() {
  var a = Yc, b = Ac ? function(c) {
    return a.call(b.src, b.Ra, c)
  } : function(c) {
    c = a.call(b.src, b.Ra, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Zc(a, b, c, d, f) {
  if(ea(b)) {
    for(var g = 0;g < b.length;g++) {
      Zc(a, b[g], c, d, f)
    }
    return null
  }
  c = Uc(c);
  return Kc(a) ? a.md(b, c, d, f) : Vc(a, b, c, !0, d, f)
}
function G(a, b, c, d, f) {
  if(ea(b)) {
    for(var g = 0;g < b.length;g++) {
      G(a, b[g], c, d, f)
    }
  }else {
    c = Uc(c), Kc(a) ? a.Kb(b, c, d, f) : a && (a = Wc(a)) && (b = a.Cb(b, c, !!d, f)) && $c(b)
  }
}
function $c(a) {
  if("number" == typeof a || !a || a.ib) {
    return!1
  }
  var b = a.src;
  if(Kc(b)) {
    return Qc(b.Y, a)
  }
  var c = a.type, d = a.vc;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in Sc ? Sc[c] : Sc[c] = "on" + c, d);
  Tc--;
  (c = Wc(b)) ? (Qc(c, a), 0 == c.Jb && (c.src = null, b[Rc] = null)) : Nc(a);
  return!0
}
function ad(a, b) {
  if(a) {
    if(Kc(a)) {
      a.Y && a.Y.Ta(b)
    }else {
      var c = Wc(a);
      if(c) {
        var d = 0, f;
        for(f in c.A) {
          if(!b || f == b) {
            for(var g = Na(c.A[f]), h = 0;h < g.length;++h) {
              $c(g[h]) && ++d
            }
          }
        }
      }
    }
  }
}
function bd(a, b, c, d) {
  var f = 1;
  if(a = Wc(a)) {
    if(b = a.A[b]) {
      for(b = Na(b), a = 0;a < b.length;a++) {
        var g = b[a];
        g && (g.capture == c && !g.ib) && (f &= !1 !== cd(g, d))
      }
    }
  }
  return Boolean(f)
}
function cd(a, b) {
  var c = a.Ra, d = a.jc || a.src;
  a.Tb && $c(a);
  return c.call(d, b)
}
function Yc(a, b) {
  if(a.ib) {
    return!0
  }
  if(!Ac) {
    var c = b || ca("window.event"), d = new Hc(c, this), f = !0;
    if(!(0 > c.keyCode || void 0 != c.returnValue)) {
      a: {
        var g = !1;
        if(0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break a
          }catch(h) {
            g = !0
          }
        }
        if(g || void 0 == c.returnValue) {
          c.returnValue = !0
        }
      }
      c = [];
      for(g = d.currentTarget;g;g = g.parentNode) {
        c.push(g)
      }
      for(var g = a.type, k = c.length - 1;!d.Ca && 0 <= k;k--) {
        d.currentTarget = c[k], f &= bd(c[k], g, !0, d)
      }
      for(k = 0;!d.Ca && k < c.length;k++) {
        d.currentTarget = c[k], f &= bd(c[k], g, !1, d)
      }
    }
    return f
  }
  return cd(a, new Hc(b, this))
}
function Wc(a) {
  a = a[Rc];
  return a instanceof Oc ? a : null
}
var dd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Uc(a) {
  return"function" == da(a) ? a : a[dd] || (a[dd] = function(b) {
    return a.handleEvent(b)
  })
}
;function H() {
  vc.call(this);
  this.Y = new Oc(this);
  this.ff = this
}
s(H, vc);
H.prototype[Jc] = !0;
m = H.prototype;
m.sc = null;
m.wd = aa("sc");
m.addEventListener = function(a, b, c, d) {
  E(this, a, b, c, d)
};
m.removeEventListener = function(a, b, c, d) {
  G(this, a, b, c, d)
};
m.dispatchEvent = function(a) {
  var b, c = this.sc;
  if(c) {
    for(b = [];c;c = c.sc) {
      b.push(c)
    }
  }
  var c = this.ff, d = a.type || a;
  if(p(a)) {
    a = new D(a, c)
  }else {
    if(a instanceof D) {
      a.target = a.target || c
    }else {
      var f = a;
      a = new D(d, c);
      ub(a, f)
    }
  }
  var f = !0, g;
  if(b) {
    for(var h = b.length - 1;!a.Ca && 0 <= h;h--) {
      g = a.currentTarget = b[h], f = ed(g, d, !0, a) && f
    }
  }
  a.Ca || (g = a.currentTarget = c, f = ed(g, d, !0, a) && f, a.Ca || (f = ed(g, d, !1, a) && f));
  if(b) {
    for(h = 0;!a.Ca && h < b.length;h++) {
      g = a.currentTarget = b[h], f = ed(g, d, !1, a) && f
    }
  }
  return f
};
m.o = function() {
  H.c.o.call(this);
  this.Y && this.Y.Ta(void 0);
  this.sc = null
};
m.t = function(a, b, c, d) {
  return this.Y.add(String(a), b, !1, c, d)
};
m.md = function(a, b, c, d) {
  return this.Y.add(String(a), b, !0, c, d)
};
m.Kb = function(a, b, c, d) {
  return this.Y.remove(String(a), b, c, d)
};
function ed(a, b, c, d) {
  b = a.Y.A[String(b)];
  if(!b) {
    return!0
  }
  b = Na(b);
  for(var f = !0, g = 0;g < b.length;++g) {
    var h = b[g];
    if(h && !h.ib && h.capture == c) {
      var k = h.Ra, F = h.jc || h.src;
      h.Tb && Qc(a.Y, h);
      f = !1 !== k.call(F, d) && f
    }
  }
  return f && !1 != d.xe
}
m.Cb = function(a, b, c, d) {
  return this.Y.Cb(String(a), b, c, d)
};
function fd(a, b) {
  H.call(this);
  this.lc = a || 1;
  this.lb = b || n;
  this.Nc = q(this.ug, this);
  this.ld = ma()
}
s(fd, H);
m = fd.prototype;
m.enabled = !1;
m.b = null;
m.ug = function() {
  if(this.enabled) {
    var a = ma() - this.ld;
    0 < a && a < 0.8 * this.lc ? this.b = this.lb.setTimeout(this.Nc, this.lc - a) : (this.b && (this.lb.clearTimeout(this.b), this.b = null), this.dispatchEvent(gd), this.enabled && (this.b = this.lb.setTimeout(this.Nc, this.lc), this.ld = ma()))
  }
};
m.start = function() {
  this.enabled = !0;
  this.b || (this.b = this.lb.setTimeout(this.Nc, this.lc), this.ld = ma())
};
m.stop = function() {
  this.enabled = !1;
  this.b && (this.lb.clearTimeout(this.b), this.b = null)
};
m.o = function() {
  fd.c.o.call(this);
  this.stop();
  delete this.lb
};
var gd = "tick";
function hd(a, b, c) {
  if("function" == da(a)) {
    c && (a = q(a, c))
  }else {
    if(a && "function" == typeof a.handleEvent) {
      a = q(a.handleEvent, a)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : n.setTimeout(a, b || 0)
}
function I(a) {
  n.clearTimeout(a)
}
;var id = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function jd(a) {
  if(kd) {
    kd = !1;
    var b = n.location;
    if(b) {
      var c = b.href;
      if(c && (c = (c = jd(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {
        throw kd = !0, Error();
      }
    }
  }
  return a.match(id)
}
var kd = x;
function ld(a, b) {
  var c;
  if(a instanceof ld) {
    this.S = void 0 !== b ? b : a.S, md(this, a.Ua), c = a.Dc, J(this), this.Dc = c, c = a.Ja, J(this), this.Ja = c, nd(this, a.uc), c = a.tc, J(this), this.tc = c, od(this, a.C.ja()), c = a.gc, J(this), this.gc = c
  }else {
    if(a && (c = jd(String(a)))) {
      this.S = !!b;
      md(this, c[1] || "", !0);
      var d = c[2] || "";
      J(this);
      this.Dc = pd(d);
      d = c[3] || "";
      J(this);
      this.Ja = pd(d);
      nd(this, c[4]);
      d = c[5] || "";
      J(this);
      this.tc = pd(d);
      od(this, c[6] || "", !0);
      c = c[7] || "";
      J(this);
      this.gc = pd(c)
    }else {
      this.S = !!b, this.C = new qd(null, 0, this.S)
    }
  }
}
m = ld.prototype;
m.Ua = "";
m.Dc = "";
m.Ja = "";
m.uc = null;
m.tc = "";
m.gc = "";
m.If = !1;
m.S = !1;
m.toString = function() {
  var a = [], b = this.Ua;
  b && a.push(rd(b, sd), ":");
  if(b = this.Ja) {
    a.push("//");
    var c = this.Dc;
    c && a.push(rd(c, sd), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.uc;
    null != b && a.push(":", String(b))
  }
  if(b = this.tc) {
    this.Ja && "/" != b.charAt(0) && a.push("/"), a.push(rd(b, "/" == b.charAt(0) ? td : ud))
  }
  (b = this.C.toString()) && a.push("?", b);
  (b = this.gc) && a.push("#", rd(b, vd));
  return a.join("")
};
m.ja = function() {
  return new ld(this)
};
function md(a, b, c) {
  J(a);
  a.Ua = c ? pd(b) : b;
  a.Ua && (a.Ua = a.Ua.replace(/:$/, ""))
}
function nd(a, b) {
  J(a);
  if(b) {
    b = Number(b);
    if(isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.uc = b
  }else {
    a.uc = null
  }
}
function od(a, b, c) {
  J(a);
  b instanceof qd ? (a.C = b, a.C.ud(a.S)) : (c || (b = rd(b, wd)), a.C = new qd(b, 0, a.S))
}
function K(a, b, c) {
  J(a);
  a.C.set(b, c);
  return a
}
function J(a) {
  if(a.If) {
    throw Error("Tried to modify a read-only Uri");
  }
}
m.ud = function(a) {
  this.S = a;
  this.C && this.C.ud(a);
  return this
};
function xd(a) {
  return a instanceof ld ? a.ja() : new ld(a, void 0)
}
function pd(a) {
  return a ? decodeURIComponent(a) : ""
}
function rd(a, b) {
  return p(a) ? encodeURI(a).replace(b, yd) : null
}
function yd(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var sd = /[#\/\?@]/g, ud = /[\#\?:]/g, td = /[\#\?]/g, wd = /[\#\?@]/g, vd = /#/g;
function qd(a, b, c) {
  this.P = a || null;
  this.S = !!c
}
function zd(a) {
  if(!a.p && (a.p = new oc, a.w = 0, a.P)) {
    for(var b = a.P.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), f = null, g = null;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Ad(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
m = qd.prototype;
m.p = null;
m.w = null;
m.add = function(a, b) {
  zd(this);
  this.P = null;
  a = Ad(this, a);
  var c = this.p.get(a);
  c || this.p.set(a, c = []);
  c.push(b);
  this.w++;
  return this
};
m.remove = function(a) {
  zd(this);
  a = Ad(this, a);
  return this.p.tb(a) ? (this.P = null, this.w -= this.p.get(a).length, this.p.remove(a)) : !1
};
m.tb = function(a) {
  zd(this);
  a = Ad(this, a);
  return this.p.tb(a)
};
m.na = function() {
  zd(this);
  for(var a = this.p.R(), b = this.p.na(), c = [], d = 0;d < b.length;d++) {
    for(var f = a[d], g = 0;g < f.length;g++) {
      c.push(b[d])
    }
  }
  return c
};
m.R = function(a) {
  zd(this);
  var b = [];
  if(p(a)) {
    this.tb(a) && (b = Ma(b, this.p.get(Ad(this, a))))
  }else {
    a = this.p.R();
    for(var c = 0;c < a.length;c++) {
      b = Ma(b, a[c])
    }
  }
  return b
};
m.set = function(a, b) {
  zd(this);
  this.P = null;
  a = Ad(this, a);
  this.tb(a) && (this.w -= this.p.get(a).length);
  this.p.set(a, [b]);
  this.w++;
  return this
};
m.get = function(a, b) {
  var c = a ? this.R(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
m.toString = function() {
  if(this.P) {
    return this.P
  }
  if(!this.p) {
    return""
  }
  for(var a = [], b = this.p.na(), c = 0;c < b.length;c++) {
    for(var d = b[c], f = encodeURIComponent(String(d)), d = this.R(d), g = 0;g < d.length;g++) {
      var h = f;
      "" !== d[g] && (h += "\x3d" + encodeURIComponent(String(d[g])));
      a.push(h)
    }
  }
  return this.P = a.join("\x26")
};
m.ja = function() {
  var a = new qd;
  a.P = this.P;
  this.p && (a.p = this.p.ja(), a.w = this.w);
  return a
};
function Ad(a, b) {
  var c = String(b);
  a.S && (c = c.toLowerCase());
  return c
}
m.ud = function(a) {
  a && !this.S && (zd(this), this.P = null, nc(this.p, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.P = null, this.p.set(Ad(this, d), Na(a)), this.w += a.length))
  }, this));
  this.S = a
};
m.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    nc(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var Bd = ["adap.tv", "effec.tv", "adaptv.advertising.com"], Ka = ["adaptv", "tearsheet"];
function Cd(a, b, c) {
  this.Ad = a;
  this.Ia = b;
  this.Hf = c;
  this.hd = this.fe = !1;
  this.Vb = [];
  this.error = !1;
  this.window = window
}
s(Cd, vc);
Cd.prototype.Pa = function(a) {
  this.Vb.push(a || e());
  if(!this.hd) {
    if(this.hd = !0, this.b = new fd(20), this.Va = hd(function() {
      this.fb();
      this.error = !0;
      Dd(this)
    }, 2E3, this), E(this.b, gd, function() {
      this.window && this.window[this.Ia] && (this.fb(), Dd(this))
    }, !1, this), this.fe) {
      this.fb(), Dd(this)
    }else {
      if(this.Hf) {
        a = Db("iframe", {id:"adaptv-script-" + this.Ia, height:0, width:0, scrolling:"no"});
        a.style.display = "none";
        document.body.appendChild(a);
        this.window = a.contentWindow;
        try {
          this.window.document.write('\x3cscript src\x3d"' + this.Ad + '"\x3e\x3c/script\x3e'), this.window.document.close()
        }catch(b) {
          Hb(this.window.document.body, Db("script", {type:"text/javascript", src:this.Ad}))
        }
      }else {
        this.window && this.window[this.Ia] || (Hb(yb("head", void 0, void 0)[0], Db("script", {type:"text/javascript", src:this.Ad})), this.window = window)
      }
      this.fe = !0;
      this.b.start()
    }
  }
};
Cd.prototype.fb = function() {
  try {
    this.b && (this.b.stop(), this.b.a(), this.b = null), this.Va && I(this.Va), this.Va = null
  }catch(a) {
  }
};
function Dd(a) {
  for(var b = 0;b < a.Vb.length;b++) {
    a.Vb[b](a)
  }
  a.Vb = [];
  a.hd = !1
}
function Ed() {
  return!!Ua().toLowerCase().match(/(ipod|iphone|ipad)/) || -1 < Ua().toLowerCase().indexOf("android")
}
function Fd() {
  return Ua().toLowerCase().match(/(iphone|ipod)/g) ? !0 : !1
}
function Gd(a) {
  var b = yb("head", void 0, void 0)[0];
  a = Db("script", {type:"text/javascript", src:a});
  b.appendChild(a)
}
function Hd(a) {
  var b = !1;
  u(Bd, function(c) {
    0 < xd(a).Ja.indexOf(c) && (b = !0)
  });
  return b
}
function Id() {
  var a;
  a = (new ld((new pa).Ma())).Ua;
  0 !== a.indexOf("http") && (a = "https");
  return a
}
function Jd(a, b) {
  if(a && b) {
    var c = b.C;
    u(c.na(), function(b) {
      Ja(function(f) {
        if(0 === b.indexOf(f)) {
          var g = c.R(b);
          g.length && K(a, b.slice(f.length), g[g.length - 1])
        }
      })
    })
  }
}
;var Kd = new Cd(Id() + "://redir.adap.tv/redir/javascript/adaptvInfo.js", "adaptvInfo", !1), Ld = ["adap.tv", "effec.tv", "adaptv.advertising.com"];
function Md(a, b) {
  this.f = a;
  this.Rd = b;
  this.Ub = "__adaptv__viewabilityInfo" + b;
  this.Da = 0;
  this.ia = {active:-1, framerate:-1, geometric:-1, psize:-1, viewable:-1, viewableOpportunity:-1, domId:-1, area:-1}
}
Md.prototype.Je = function(a) {
  a = a || {};
  this.Da && I(this.Da);
  this.Da = 0;
  delete this.f[this.Ub];
  for(var b in this.ia) {
    a.hasOwnProperty(b) && null !== a[b] && (this.ia[b] = a[b])
  }
  if(this.O && this.O.width && this.O.height && a.pWidth && a.pHeight) {
    b = Math.min(this.O.width, a.pWidth);
    a = Math.min(this.O.height, a.pHeight);
    var c = Math.max(b, a);
    350 > c ? this.ia.psize = 1 : 350 <= c && 500 > c ? this.ia.psize = 2 : 500 <= c && (this.ia.psize = 3);
    this.ia.area = b * a
  }else {
    this.ia.psize = -1
  }
  this.Yd(this.ia)
};
Md.prototype.hc = function(a, b) {
  this.O = a;
  this.Yd = b;
  var c = a.pubkey || a.orgId || "";
  Kd.Pa(q(function(a) {
    a.error ? b(this.ia) : (this.Da = this.Da || hd(function() {
      this.Da && I(this.Da);
      this.Da = 0;
      this.Je()
    }, 3E3, this), this.f[this.Ub] = q(this.Je, this), window.adaptvInfo.getInfo(this.f, this.Rd, this.Ub, c))
  }, this))
};
Md.prototype.a = function() {
  this.Yd = this.O = null;
  delete this.f[this.Ub];
  window.adaptvInfo.removePlacement(this.Rd)
};
var Nd = {Re:"ended", cf:"volumechange", Ye:"playing", $h:"play", Ec:"pause", Fd:"click", Nb:"error", xi:"stalled", lh:"loadeddata", mh:"loadedmetadata", bf:"touchstart"}, Od = {AdLoaded:"AdLoaded", AdStarted:"AdStarted", AdStopped:"AdStopped", AdImpression:"AdImpression", AdLinearChange:"AdLinearChange", AdLog:"AdLog", AdCompanionDisplay:"AdCompanionDisplay", AdVideoStart:"AdVideoStart", AdVideoFirstQuartile:"AdVideoFirstQuartile", AdVideoMidpoint:"AdVideoMidpoint", AdVideoThirdQuartile:"AdVideoThirdQuartile", 
AdVideoComplete:"AdVideoComplete", AdVolumeChange:"AdVolumeChange", AdClickThru:"AdClickThru", AdPaused:"AdPaused", AdPlaying:"AdPlaying", AdSkippableStateChange:"AdSkippableStateChange", AdSkipped:"AdSkipped", AdError:"AdError"}, Pd = {cf:"volumechange", Hd:"mute", Kd:"unmute", Gd:"loaded", Ye:"playing", Id:"resume", Ec:"pause", Fd:"click", Re:"ended", Jd:"stopped", Nb:"error"};
function Qd(a, b) {
  this.type = a;
  this.data = b || {}
}
;function Rd(a, b, c, d, f) {
  H.call(this);
  this.Lb = new Md(a, b);
  this.l = c;
  this.k = d;
  this.re = f;
  this.zb = this.ac = this.Zb = !1;
  this.Cd = 0;
  this.Mb = this.cd = this.dd = this.Gc = -1
}
s(Rd, H);
m = Rd.prototype;
m.hc = function(a) {
  this.Lb && this.Lb.hc({width:this.l, height:this.k}, a)
};
m.init = function() {
  this.b = new fd(200);
  this.b.start();
  E(this.b, gd, this.Fb, !1, this);
  this.Fb();
  E(this.re, ["AdStopped", "AdSkipped", "AdImpression", "AdVideoComplete"], this.B, !1, this)
};
m.B = function(a) {
  switch(a.type) {
    case "AdStopped":
      this.a();
      break;
    case "AdImpression":
      this.Zb = !0;
      this.Va = hd(function() {
        this.ac || this.zb || (this.zb = !0, this.dispatchEvent("IABDetectionFailed"))
      }, 2E3, this);
      break;
    case "AdVideoComplete":
    ;
    case "AdSkipped":
      !this.Zb || (this.ac || this.zb) || (this.zb = !0, this.dispatchEvent("IABDetectionFailed")), this.a()
  }
};
m.Fb = function() {
  this.hc(q(function(a) {
    null === a ? (this.Mb = this.dd = this.cd = this.Gc = -1, this.fb()) : (this.Gc = a.active, this.cd = a.framerate, this.dd = a.geometric, this.Mb = a.viewable, this.Zb && !this.zb && (-1 === this.Mb || this.ac || (this.dispatchEvent("IABDetectionStarted"), this.ac = !0), 1 === this.Mb ? (this.Cd++, 2E3 <= 200 * this.Cd && (this.dispatchEvent("IABViewable"), this.Zb = !1)) : this.Cd = 0))
  }, this))
};
m.fb = function() {
  this.b && (this.b.stop(), this.b.a(), this.b = null);
  this.Va && I(this.Va);
  this.Va = null
};
m.a = function() {
  G(this.re, ["AdStopped", "AdSkipped", "AdImpression", "AdVideoComplete"], this.B, !1, this);
  this.Lb && this.Lb.a();
  this.Lb = null;
  this.fb()
};
var Sd = /{([\w.]*)}|(<([^<>]*)>)/g;
function Td(a, b) {
  ld.call(this, a, b)
}
s(Td, ld);
Td.prototype.Ma = function() {
  var a = pd(this.C.toString()), a = a.replace(Sd, "");
  od(this, a, void 0);
  return this.toString()
};
function Ud(a) {
  return Ia(Ld, function(a) {
    return 0 <= this.Ja.indexOf(a)
  }, a)
}
function Vd(a, b) {
  if(b) {
    var c = pd(a.C.toString());
    u(pd(a.C.toString()).match(Sd) || [], function(a) {
      null != b[a.slice(1, -1)] && (c = c.replace(a, b[a.slice(1, -1)]))
    });
    od(a, c, void 0)
  }
}
;function Wd(a) {
  a = a || {};
  this.adListIndex = 0;
  this.adListSize = 1;
  this.adParameters = "";
  this.beacons = a.beacons || [];
  this.clickThrough = a.clickThrough || "";
  this.companions = a.companions || [];
  this.companionString = a.companionString || "";
  this.data = {AdParameters:a.adParameters};
  this.duration = a.duration || "";
  this.error = a.error ? new L(a.error.errorCode, a.error.errorMessage) : new L(0, "");
  this.isVPAID = a.isVPAID || !1;
  this.hasAdaptvParams = a.hasAdaptvParams || !1;
  this.mediaFile = null;
  this.mediaFiles = a.mediaFiles || [];
  this.scripts = a.scripts || [];
  this.skipoffset = a.skipoffset || "";
  this.surveyURL = a.surveyURL || ""
}
var M = {Me:"attempt", Ne:"clickThru", Oe:"companionDisplay", Pe:"complete", Qe:"creativeView", Nb:"error", Se:"firstQuartile", Te:"iab_detection_failed", Ue:"iab_detection_started", Ve:"iab_viewable", We:"impression", Gd:"loaded", Xe:"midpoint", Hd:"mute", Ec:"pause", ji:"progress", Id:"resume", $e:"start", Jd:"stopped", Ze:"skip", af:"thirdQuartile", Kd:"unmute"};
function Xd(a) {
  this.Fc = a
}
function Yd(a, b) {
  var c;
  if(-1 < a.Fc.indexOf("%")) {
    c = b * parseInt(a.Fc.split("%")[0], 10) / 100
  }else {
    c = a.Fc.split(":");
    for(var d = 0, f = 0;f < c.length;f++) {
      d += 1E3 * parseFloat(c[f]) * Math.pow(60, 2 - f)
    }
    c = d
  }
  return c
}
;function Zd(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Zd.prototype.jg = 0;
Zd.prototype.Yc = null;
Zd.prototype.Xc = null;
var $d = 0;
Zd.prototype.reset = function(a, b, c, d, f) {
  this.jg = "number" == typeof f ? f : $d++;
  this.Ge = d || ma();
  this.Qa = a;
  this.oc = b;
  this.je = c;
  delete this.Yc;
  delete this.Xc
};
Zd.prototype.vd = aa("Qa");
function ae(a) {
  this.Tf = a
}
ae.prototype.W = null;
ae.prototype.Qa = null;
ae.prototype.va = null;
ae.prototype.eb = null;
function be(a, b) {
  this.name = a;
  this.value = b
}
be.prototype.toString = l("name");
var ce = new be("SHOUT", 1200), de = new be("SEVERE", 1E3), ee = new be("WARNING", 900), fe = new be("INFO", 800), ge = new be("CONFIG", 700), he = new be("FINE", 500), ie = new be("ALL", 0);
m = ae.prototype;
m.Kc = function(a) {
  this.eb || (this.eb = []);
  this.eb.push(a)
};
m.ve = function(a) {
  var b = this.eb;
  return!!b && La(b, a)
};
m.getParent = l("W");
m.ae = function() {
  this.va || (this.va = {});
  return this.va
};
m.vd = aa("Qa");
function je(a) {
  if(a.Qa) {
    return a.Qa
  }
  if(a.W) {
    return je(a.W)
  }
  Fa("Root logger has no level set.");
  return null
}
m.log = function(a, b, c) {
  if(a.value >= je(this).value) {
    for(a = this.Cf(a, b, c), b = "log:" + a.oc, n.console && (n.console.timeStamp ? n.console.timeStamp(b) : n.console.markTimeline && n.console.markTimeline(b)), n.msWriteProfilerMark && n.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if(c.eb) {
        for(var f = 0, g = void 0;g = c.eb[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
m.Cf = function(a, b, c) {
  var d = new Zd(a, String(b), this.Tf);
  if(c) {
    d.Yc = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var h;
      var k = ca("window.location.href");
      if(p(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"}
      }else {
        var F, sa, W = !1;
        try {
          F = c.lineNumber || c.Qi || "Not available"
        }catch(X) {
          F = "Not available", W = !0
        }
        try {
          sa = c.fileName || c.filename || c.sourceURL || n.$googDebugFname || k
        }catch(Y) {
          sa = "Not available", W = !0
        }
        h = !W && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {message:c.message || "Not available", name:c.name || "UnknownError", lineNumber:F, fileName:sa, stack:c.stack || "Not available"}
      }
      f = "Message: " + va(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + va(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + va(rc(g) + "-\x3e ")
    }catch(pg) {
      f = "Exception trying to expose exception! You win, we lose. " + pg
    }
    d.Xc = f
  }
  return d
};
m.Dd = function(a, b) {
  this.log(ee, a, b)
};
m.info = function(a, b) {
  this.log(fe, a, b)
};
m.Wd = function(a, b) {
  this.log(he, a, b)
};
var ke = {}, le = null;
function me() {
  le || (le = new ae(""), ke[""] = le, le.vd(ge))
}
function N(a) {
  me();
  var b;
  if(!(b = ke[a])) {
    b = new ae(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = N(a.substr(0, c));
    c.ae()[d] = b;
    b.W = c;
    ke[a] = b
  }
  return b
}
;var O = {};
O.IABDetectionFailed = M.Te;
O.IABDetectionStarted = M.Ue;
O.IABViewable = M.Ve;
O.AdImpression = M.We;
O.AdCompanionDisplay = M.Oe;
O.AdLoaded = M.Gd;
O.AdVideoStart = M.$e;
O.AdVideoFirstQuartile = M.Se;
O.AdVideoMidpoint = M.Xe;
O.AdVideoThirdQuartile = M.af;
O.AdVideoComplete = M.Pe;
O.AdPaused = M.Ec;
O.AdPlaying = M.Id;
O.AdClickThru = M.Ne;
O.AdSkipped = M.Ze;
O.AdStopped = M.Jd;
O.attempt = M.Me;
O.error = M.Nb;
O.mute = M.Hd;
O.unmute = M.Kd;
O.creativeView = M.Qe;
function ne(a, b) {
  this.Ba = N("adaptv.vpaid.BeaconPlugin");
  this.sf = b || function() {
    return{}
  };
  E(a, sb(O), function(b) {
    if("AdVideoStart" === b.type) {
      var d = Yd(new Xd(a.e.duration)), f = Ha(a.e.beacons, function(a) {
        return"progress" === a.beaconType ? (a.pd = Yd(new Xd(a.offset), d), !isNaN(a.pd) && a.pd <= d) : !1
      }), g = new fd(200);
      g.start();
      E(g, gd, function() {
        0 >= a.getAdRemainingTime() ? (g.stop(), g.a(), g = null) : oe(this, Ha(f, function(b) {
          return b.pd <= d - 1E3 * a.getAdRemainingTime()
        }, this))
      }, !1, this);
      E(a, sb(O), function(a) {
        "AdVideoComplete" === a.type && oe(this, f)
      }, !1, this)
    }
    oe(this, Ha(a.e.beacons, function(a) {
      return a.beaconType === O[b.type]
    }, this))
  }, !1, this)
}
s(ne, vc);
function oe(a, b) {
  for(var c = a.sf(), d = 0;d < b.length;d++) {
    if(!b[d].fired) {
      var f = b[d].url, g = new Td(f);
      Ud(g) && (Vd(g, c), f = g.Ma());
      f = B($b, {url:f});
      document.body.appendChild(f);
      b[d].fired = !0
    }
  }
}
;function L(a, b) {
  this.errorCode = a;
  this.errorMessage = b || ""
}
;function pe(a, b) {
  this.width = a;
  this.height = b;
  this.label = a + "x" + b
}
var qe = {wi:new pe(728, 90), ti:new pe(300, 250), ui:new pe(300, 60), si:new pe(300, 100), vi:new pe(468, 60)};
function re(a) {
  this.Yb = [];
  a ? u(a, function(a) {
    this.Yb.push(new se({id:a.id, width:a.width, height:a.height}))
  }, this) : qb(qe, function(a) {
    this.Yb.push(new se({id:"adaptvCompanion" + a.label, width:a.width, height:a.height}))
  }, this)
}
re.prototype.gd = function(a) {
  for(var b = 0;b < this.Yb.length;b++) {
    var c = this.Yb[b];
    if(c.width == a.companionSize.width && c.height == a.companionSize.height) {
      c.Pa(a);
      break
    }
  }
};
function se(a) {
  this.kc = a.id;
  this.f = a.element;
  this.width = a.width;
  this.height = a.height
}
se.prototype.Pa = function(a) {
  a.resourceType = a.resourceType || "html";
  Kd.Pa(q(function(b) {
    b.error || (new window.__adaptv__.adPlayer.AdCompanionDiv(this.f || this.kc, {replaceChildren:!0})).insertCompanion(a)
  }, this))
};
function te(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function ue(a) {
  return eval("(" + a + ")")
}
function ve(a) {
  var b = [];
  we(new xe, a, b);
  return b.join("")
}
function xe() {
  this.wc = void 0
}
function we(a, b, c) {
  switch(typeof b) {
    case "string":
      ye(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(null == b) {
        c.push("null");
        break
      }
      if(ea(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], we(a, a.wc ? a.wc.call(b, String(g), f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), ye(g, c), c.push(":"), we(a, a.wc ? a.wc.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);
  }
}
var ze = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Ae = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function ye(a, b) {
  b.push('"', a.replace(Ae, function(a) {
    if(a in ze) {
      return ze[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return ze[a] = f + b.toString(16)
  }), '"')
}
;var P = {ta:!0};
P.uh = ae;
P.sh = be;
P.th = Zd;
P.be = function(a) {
  return P.ta ? N(a) : null
};
P.Kc = function(a, b) {
  P.ta && a && a.Kc(b)
};
P.ve = function(a, b) {
  return P.ta && a ? a.ve(b) : !1
};
P.log = function(a, b, c, d) {
  P.ta && a && a.log(b, c, d)
};
P.error = function(a, b, c) {
  P.ta && a && a.log(de, b, c)
};
P.Dd = function(a, b, c) {
  P.ta && a && a.Dd(b, c)
};
P.info = function(a, b, c) {
  P.ta && a && a.info(b, c)
};
P.Wd = function(a, b, c) {
  P.ta && a && a.Wd(b, c)
};
P.be("goog.net.XhrIo");
function Be(a) {
  this.M = a.slot || a.videoSlot
}
function Ce() {
  var a = Db("iframe", {src:Id() + "://redir.adap.tv/redir/mobile/mobile-ad-source.html", id:"some-id", height:0, width:0, scrolling:"no"});
  a.style.display = "none";
  document.body.appendChild(a);
  return a
}
function De(a, b) {
  var c = Db("iframe", {src:"javascript:void(0)", name:"__bkframe", height:0, width:0, Pi:0});
  c.style.display = "none";
  a.M.appendChild(c);
  (new Cd(Id() + "://tags.bkrtx.com/js/bk-coretag.js", "bk_addPageCtx", !1)).Pa(q(function(a) {
    if(!a.error && (a = B(cc, {hf:b}).innerHTML)) {
      if(n.execScript) {
        n.execScript(a, "JavaScript")
      }else {
        if(n.eval) {
          if(null == na && (n.eval("var _et_ \x3d 1;"), "undefined" != typeof n._et_ ? (delete n._et_, na = !0) : na = !1), na) {
            n.eval(a)
          }else {
            var c = n.document, g = c.createElement("script");
            g.type = "text/javascript";
            g.defer = !1;
            g.appendChild(c.createTextNode(a));
            c.body.appendChild(g);
            c.body.removeChild(g)
          }
        }else {
          throw Error("goog.globalEval not available");
        }
      }
    }
  }, a))
}
Be.prototype.a = function() {
  this.M = null
};
function Ee(a, b, c, d) {
  this.yb = a;
  this.fc = b;
  this.Aa = c;
  this.jb = d
}
Ee.prototype.ma = l("Aa");
Ee.prototype.subscribe = function() {
  u(this.fc, function(a) {
    E(this.yb, a, this.Aa, !1, this.jb)
  }, this);
  return this
};
Ee.prototype.unsubscribe = function() {
  u(this.fc, function(a) {
    G(this.yb, a, this.Aa, !1, this.jb)
  }, this);
  return this
};
Ee.prototype.a = function() {
  this.jb = this.Aa = this.fc = this.yb = null;
  return this
};
function Fe(a) {
  this.U = N("adaptv.events.EventManager");
  this.Nf = a;
  this.ua = [];
  this.ka = !1;
  this.jb = a;
  this.Wc = !1
}
Fe.prototype.t = function(a, b, c, d) {
  if(null == a || null == b || null == c) {
    this.U.info("Error listening to object - one or more arguments are missing"), this.Wc = !0
  }
  this.ka && (this.U.info("Error: EventManager has already been disposed."), this.Wc = !0);
  this.Wc || this.ua.push((new Ee(a, b, c, d || this.jb)).subscribe())
};
Fe.prototype.Kb = function(a) {
  this.ka ? this.U.info("Error: EventManager has already been disposed.") : this.ua = Ha(this.ua, function(b) {
    return a && b.yb !== a ? !0 : (b.unsubscribe().a(), !1)
  })
};
function Ge(a, b, c, d) {
  a.ka ? a.U.info("Error: EventManager has already been disposed.") : a.ua = Ha(a.ua, function(a) {
    var g;
    if(g = a.yb === b) {
      if(g = a.ma() === d) {
        a: {
          if(g = a.fc, fa(g) && fa(c) && g.length == c.length) {
            for(var h = g.length, k = 0;k < h;k++) {
              if(g[k] !== c[k]) {
                g = !1;
                break a
              }
            }
            g = !0
          }else {
            g = !1
          }
        }
      }
    }
    return g ? (a.unsubscribe().a(), !1) : !0
  })
}
Fe.prototype.a = function() {
  if(!this.ka) {
    for(var a = 0;a < this.ua.length;a++) {
      this.ua[a].unsubscribe().a()
    }
    this.jb = this.ua = this.Nf = null;
    this.ka = !0
  }
};
function He(a, b) {
  return(b || window).__adaptv__.jsproxy[a]
}
;function Ie(a) {
  D.call(this, a)
}
s(Ie, D);
function Je(a) {
  vc.call(this);
  this.Aa = a;
  this.q = {}
}
s(Je, vc);
var Ke = [];
m = Je.prototype;
m.t = function(a, b, c, d, f) {
  ea(b) || (Ke[0] = b, b = Ke);
  for(var g = 0;g < b.length;g++) {
    var h = E(a, b[g], c || this.handleEvent, d || !1, f || this.Aa || this);
    if(!h) {
      break
    }
    this.q[h.key] = h
  }
  return this
};
m.md = function(a, b, c, d, f) {
  a: {
    if(ea(b)) {
      for(var g = 0;g < b.length;g++) {
        this.md(a, b[g], c, d, f)
      }
    }else {
      a = Zc(a, b, c || this.handleEvent, d, f || this.Aa || this);
      if(!a) {
        a = this;
        break a
      }
      this.q[a.key] = a
    }
    a = this
  }
  return a
};
m.Kb = function(a, b, c, d, f) {
  if(ea(b)) {
    for(var g = 0;g < b.length;g++) {
      this.Kb(a, b[g], c, d, f)
    }
  }else {
    c = c || this.handleEvent, f = f || this.Aa || this, c = Uc(c), d = !!d, b = Kc(a) ? a.Cb(b, c, d, f) : a ? (a = Wc(a)) ? a.Cb(b, c, d, f) : null : null, b && ($c(b), delete this.q[b.key])
  }
  return this
};
m.Ta = function() {
  qb(this.q, $c);
  this.q = {}
};
m.o = function() {
  Je.c.o.call(this);
  this.Ta()
};
m.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Le(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
m = Le.prototype;
m.ja = function() {
  return new Le(this.top, this.right, this.bottom, this.left)
};
m.toString = function() {
  return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
m.contains = function(a) {
  return this && a ? a instanceof Le ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
m.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this
};
m.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};
m.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};
function Me(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
m = Me.prototype;
m.ja = function() {
  return new Me(this.left, this.top, this.width, this.height)
};
m.toString = function() {
  return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
m.contains = function(a) {
  return a instanceof Me ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
m.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
m.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
m.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function Ne(a, b, c) {
  p(b) ? Oe(a, c, b) : qb(b, la(Oe, a))
}
function Oe(a, b, c) {
  (c = Pe(a, c)) && (a.style[c] = b)
}
function Pe(a, b) {
  var c = Ca(b);
  if(void 0 === a.style[c]) {
    var d = (x ? "Webkit" : w ? "Moz" : v ? "ms" : Ya ? "O" : null) + Da(b);
    if(void 0 !== a.style[d]) {
      return d
    }
  }
  return c
}
function Qe(a) {
  var b = a.style[Ca("zIndex")];
  return"undefined" !== typeof b ? b : a.style[Pe(a, "zIndex")] || ""
}
function Re(a, b) {
  var c = xb(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Se(a, b) {
  return Re(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}
function Te(a, b, c) {
  var d, f = w && (Ta || $a) && y("1.9");
  b instanceof ob ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = Ue(d, f);
  a.style.top = Ue(b, f)
}
function Ve(a, b, c) {
  if(b instanceof pb) {
    c = b.height, b = b.width
  }else {
    if(void 0 == c) {
      throw Error("missing height argument");
    }
  }
  a.style.width = Ue(b, !0);
  a.style.height = Ue(c, !0)
}
function Ue(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function We(a) {
  var b = Xe;
  if("none" != Se(a, "display")) {
    return b(a)
  }
  var c = a.style, d = c.display, f = c.visibility, g = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = d;
  c.position = g;
  c.visibility = f;
  return a
}
function Xe(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = x && !b && !c;
  if((void 0 === b || d) && a.getBoundingClientRect) {
    var f;
    a: {
      try {
        f = a.getBoundingClientRect()
      }catch(g) {
        f = {left:0, top:0, right:0, bottom:0};
        break a
      }
      v && a.ownerDocument.body && (a = a.ownerDocument, f.left -= a.documentElement.clientLeft + a.body.clientLeft, f.top -= a.documentElement.clientTop + a.body.clientTop)
    }
    return new pb(f.right - f.left, f.bottom - f.top)
  }
  return new pb(b, c)
}
function Ye(a, b) {
  var c = a.style;
  "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity\x3d" + 100 * b + ")")
}
function Q(a, b) {
  a.style.display = b ? "" : "none"
}
var Ze = {thin:2, medium:4, thick:6};
function $e(a, b) {
  if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null, d;
  if(c in Ze) {
    d = Ze[c]
  }else {
    if(/^\d+px?$/.test(c)) {
      d = parseInt(c, 10)
    }else {
      d = a.style.left;
      var f = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = c;
      c = a.style.pixelLeft;
      a.style.left = d;
      a.runtimeStyle.left = f;
      d = c
    }
  }
  return d
}
function af(a) {
  if(v && !(v && 9 <= jb)) {
    var b = $e(a, "borderLeft"), c = $e(a, "borderRight"), d = $e(a, "borderTop");
    a = $e(a, "borderBottom");
    return new Le(d, c, a, b)
  }
  b = Re(a, "borderLeftWidth");
  c = Re(a, "borderRightWidth");
  d = Re(a, "borderTopWidth");
  a = Re(a, "borderBottomWidth");
  return new Le(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
;function bf() {
}
bf.Bf = function() {
  return bf.ge ? bf.ge : bf.ge = new bf
};
bf.prototype.Uf = 0;
bf.prototype.ce = function() {
  return":" + (this.Uf++).toString(36)
};
function cf(a) {
  H.call(this);
  this.wa = a || vb();
  this.xc = df
}
s(cf, H);
cf.prototype.Ef = bf.Bf();
var df = null;
m = cf.prototype;
m.kc = null;
m.T = !1;
m.f = null;
m.xc = null;
m.Pf = null;
m.W = null;
m.va = null;
m.Wb = null;
m.Le = !1;
function ef(a) {
  return a.kc || (a.kc = a.Ef.ce())
}
m.h = l("f");
m.ma = function() {
  return this.bb || (this.bb = new Je(this))
};
m.getParent = l("W");
m.wd = function(a) {
  if(this.W && this.W != a) {
    throw Error("Method not supported");
  }
  cf.c.wd.call(this, a)
};
m.m = l("wa");
m.r = function() {
  this.f = this.wa.createElement("div")
};
m.ca = function(a) {
  if(this.T) {
    throw Error("Component already rendered");
  }
  this.f || this.r();
  a ? a.insertBefore(this.f, null) : this.wa.F.body.appendChild(this.f);
  this.W && !this.W.T || this.la()
};
m.Za = function(a) {
  if(this.T) {
    throw Error("Component already rendered");
  }
  if(a && this.Sd(a)) {
    this.Le = !0;
    var b = xb(a);
    this.wa && this.wa.F == b || (this.wa = vb(a));
    this.xb(a);
    this.la()
  }else {
    throw Error("Invalid element to decorate");
  }
};
m.Sd = ba(!0);
m.xb = aa("f");
m.la = function() {
  this.T = !0;
  ff(this, function(a) {
    !a.T && a.h() && a.la()
  })
};
m.La = function() {
  ff(this, function(a) {
    a.T && a.La()
  });
  this.bb && this.bb.Ta();
  this.T = !1
};
m.o = function() {
  this.T && this.La();
  this.bb && (this.bb.a(), delete this.bb);
  ff(this, function(a) {
    a.a()
  });
  !this.Le && this.f && z(this.f);
  this.W = this.Pf = this.f = this.Wb = this.va = null;
  cf.c.o.call(this)
};
function ff(a, b) {
  a.va && u(a.va, b, void 0)
}
m.removeChild = function(a, b) {
  if(a) {
    var c = p(a) ? a : ef(a), d;
    this.Wb && c ? (d = this.Wb, d = (c in d ? d[c] : void 0) || null) : d = null;
    a = d;
    if(c && a) {
      d = this.Wb;
      c in d && delete d[c];
      La(this.va, a);
      b && (a.La(), a.f && z(a.f));
      c = a;
      if(null == c) {
        throw Error("Unable to set parent component");
      }
      c.W = null;
      cf.c.wd.call(c, null)
    }
  }
  if(!a) {
    throw Error("Child is not in parent component");
  }
  return a
};
var gf = !1, hf = "";
function jf(a) {
  a = a.match(/[\d]+/g);
  if(!a) {
    return""
  }
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var kf = navigator.plugins["Shockwave Flash"];
  kf && (gf = !0, kf.description && (hf = jf(kf.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (gf = !0, hf = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var lf = navigator.mimeTypes["application/x-shockwave-flash"];
    (gf = lf && lf.enabledPlugin) && (hf = jf(lf.enabledPlugin.description))
  }else {
    try {
      var mf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), gf = !0, hf = jf(mf.GetVariable("$version"))
    }catch(nf) {
      try {
        mf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), gf = !0, hf = "6.0.21"
      }catch(of) {
        try {
          mf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), gf = !0, hf = jf(mf.GetVariable("$version"))
        }catch(pf) {
        }
      }
    }
  }
}
var qf = hf;
function rf(a, b) {
  cf.call(this, b);
  this.Xd = a;
  this.J = new Je(this);
  this.Ab = new oc
}
s(rf, cf);
m = rf.prototype;
m.Ba = P.be("goog.ui.media.FlashObject");
m.Ed = "window";
m.Od = "#000000";
m.Lc = "sameDomain";
function sf(a, b, c) {
  a.l = p(b) ? b : Math.round(b) + "px";
  a.k = p(c) ? c : Math.round(c) + "px";
  a.h() && Ve(tf(a), a.l, a.k)
}
m.la = function() {
  rf.c.la.call(this);
  this.h().innerHTML = this.$d();
  this.l && this.k && sf(this, this.l, this.k);
  this.J.t(this.h(), rb(Fc), Cc)
};
m.r = function() {
  if(null != this.rd && !(0 <= Ba(qf, this.rd))) {
    throw P.Dd(this.Ba, "Required flash version not found:" + this.rd), Error("Method not supported");
  }
  var a = this.m().createElement("div");
  a.className = "goog-ui-media-flash";
  this.f = a
};
m.$d = function() {
  for(var a = v ? '\x3cobject classid\x3d"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id\x3d"%s" name\x3d"%s" class\x3d"%s"\x3e\x3cparam name\x3d"movie" value\x3d"%s"/\x3e\x3cparam name\x3d"quality" value\x3d"high"/\x3e\x3cparam name\x3d"FlashVars" value\x3d"%s"/\x3e\x3cparam name\x3d"bgcolor" value\x3d"%s"/\x3e\x3cparam name\x3d"AllowScriptAccess" value\x3d"%s"/\x3e\x3cparam name\x3d"allowFullScreen" value\x3d"true"/\x3e\x3cparam name\x3d"SeamlessTabbing" value\x3d"false"/\x3e%s\x3c/object\x3e' : 
  '\x3cembed quality\x3d"high" id\x3d"%s" name\x3d"%s" class\x3d"%s" src\x3d"%s" FlashVars\x3d"%s" bgcolor\x3d"%s" AllowScriptAccess\x3d"%s" allowFullScreen\x3d"true" SeamlessTabbing\x3d"false" type\x3d"application/x-shockwave-flash" pluginspage\x3d"http://www.macromedia.com/go/getflashplayer" %s\x3e\x3c/embed\x3e', b = v ? '\x3cparam name\x3d"wmode" value\x3d"%s"/\x3e' : "wmode\x3d%s", b = ta(b, this.Ed), c = this.Ab.na(), d = this.Ab.R(), f = [], g = 0;g < c.length;g++) {
    f.push(encodeURIComponent(String(c[g])) + "\x3d" + encodeURIComponent(String(d[g])))
  }
  return ta(a, ef(this), ef(this), "goog-ui-media-flash-object", va(this.Xd), va(f.join("\x26")), this.Od, this.Lc, b)
};
function tf(a) {
  return a.h() ? a.h().firstChild : null
}
m.o = function() {
  rf.c.o.call(this);
  this.Ab = null;
  this.J.a();
  this.J = null
};
m.kd = function() {
  return this.T && this.h() ? tf(this).readyState && 4 == tf(this).readyState || tf(this).PercentLoaded && 100 == tf(this).PercentLoaded() ? !0 : !1 : !1
};
bf.prototype.ce = function(a) {
  "number" != typeof window[a] && (window[a] = 0);
  return function() {
    return":" + (window[a]++).toString(36)
  }
}("__adaptv__last_unique_id__");
function uf(a, b, c) {
  this.Ia = b;
  this.Gb = window;
  rf.call(this, a, c)
}
s(uf, rf);
uf.prototype.ca = function(a) {
  uf.c.ca.call(this, a);
  a && (this.Gb = Cb(xb(a)));
  this.b = new fd(50);
  this.b.start();
  E(this.b, gd, function() {
    !this.kd() || null == (this.Gb || window).__adaptv__.jsproxy || this.Ia && !He(ef(this), this.Gb)[this.Ia] || (this.b.stop(), this.b.a(), this.b = null, this.dispatchEvent(new Ie("ready")))
  }, !1, this)
};
uf.prototype.$d = function() {
  for(var a = !v || v && 11 <= jb ? '\x3cembed quality\x3d"high" id\x3d"%s" name\x3d"%s" class\x3d"%s" src\x3d"%s" FlashVars\x3d"%s" bgcolor\x3d"%s" AllowScriptAccess\x3d"%s" allowFullScreen\x3d"true" SeamlessTabbing\x3d"false" type\x3d"application/x-shockwave-flash" pluginspage\x3d"http://www.macromedia.com/go/getflashplayer" %s\x3e\x3c/embed\x3e' : '\x3cobject classid\x3d"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id\x3d"%s" name\x3d"%s" class\x3d"%s"\x3e\x3cparam name\x3d"movie" value\x3d"%s"/\x3e\x3cparam name\x3d"quality" value\x3d"high"/\x3e\x3cparam name\x3d"FlashVars" value\x3d"%s"/\x3e\x3cparam name\x3d"bgcolor" value\x3d"%s"/\x3e\x3cparam name\x3d"AllowScriptAccess" value\x3d"%s"/\x3e\x3cparam name\x3d"allowFullScreen" value\x3d"true"/\x3e\x3cparam name\x3d"SeamlessTabbing" value\x3d"false"/\x3e%s\x3c/object\x3e', 
  b = !v || v && 11 <= jb ? "wmode\x3d%s" : '\x3cparam name\x3d"wmode" value\x3d"%s"/\x3e', b = ta(b, this.Ed), c = this.Ab.na(), d = this.Ab.R(), f = [], g = 0;g < c.length;g++) {
    f.push(encodeURIComponent(String(c[g])) + "\x3d" + encodeURIComponent(String(d[g])))
  }
  return ta(a, ef(this), ef(this), "goog-ui-media-flash-object", va(this.Xd), va(f.join("\x26")), this.Od, this.Lc, b)
};
uf.prototype.kd = function() {
  var a = !1;
  try {
    a = uf.c.kd.call(this)
  }catch(b) {
  }
  return a || "PercentLoaded" in tf(this) && 100 == tf(this).PercentLoaded()
};
uf.prototype.a = function() {
  this.b && this.b.stop();
  this.b && this.b.a();
  this.Gb = this.Ia = this.b = null;
  var a = tf(this);
  a && (ad(a), z(a));
  uf.c.a.call(this)
};
function R(a) {
  H.call(this);
  this.error = {Hi:new L(523, "Invalid ad container!")};
  this.U = N("adaptv.vpaid.FlashVPAIDLoader");
  this.aa = new Fe(this);
  this.yc = a
}
s(R, H);
R.prototype.initAd = function(a, b, c, d, f, g) {
  c = Id() + "://redir.adap.tv/redir/client/VPAIDLoader.swf";
  this.Q = new uf(c, "vpaidloader");
  sf(this.Q, a, b);
  this.Q.Ed = "opaque";
  this.Q.rd = "9.0.124";
  this.Q.Lc = "always";
  this.Q.ca(p(this.yc) ? document.getElementById(this.yc) : this.yc);
  this.aa.t(this.Q, ["ready"], function() {
    this.j = He(ef(this.Q), this.Q.Gb).vpaidloader;
    this.za = tf(this.Q);
    this.za.addEventListener ? (this.za.addEventListener("mouseover", q(this.mouseover, this), !1), this.za.addEventListener("mouseout", q(this.mouseout, this), !1)) : (this.za.attachEvent("mouseover", q(this.mouseover, this)), this.za.attachEvent("mouseout", q(this.mouseout, this)));
    this.za.style.width = a + "px";
    this.za.style.height = b + "px";
    qb(Od, function(a) {
      this.j.__on(a, this.B, this)
    }, this);
    this.j.initAd(a, b, -1, 500, f, g)
  })
};
R.prototype.collapseAd = function() {
  this.j && this.j.collapseAd()
};
R.prototype.expandAd = function() {
  this.j && this.j.expandAd()
};
R.prototype.startAd = function() {
  this.j && this.j.startAd()
};
R.prototype.stopAd = function() {
  this.j && this.j.stopAd()
};
R.prototype.pauseAd = function() {
  this.j && this.j.pauseAd()
};
R.prototype.resizeAd = function(a, b, c) {
  this.j && this.j.resizeAd(a, b, c)
};
R.prototype.resumeAd = function() {
  this.j && this.j.resumeAd()
};
R.prototype.skipAd = function() {
  this.j && this.j.skipAd()
};
R.prototype.subscribe = e();
R.prototype.unsubscribe = e();
R.prototype.getAdCompanions = function() {
  return this.j ? this.j.__get_adCompanions() : ""
};
R.prototype.getAdExpanded = function() {
  return this.j ? this.j.__get_adExpanded() : !1
};
R.prototype.getAdVolume = function() {
  return this.j ? this.j.__get_adVolume() : -2
};
R.prototype.setAdVolume = function(a) {
  this.j && this.j.__set_adVolume(a)
};
R.prototype.getAdDuration = function() {
  return this.j ? this.j.__get_adDuration() : -2
};
R.prototype.getAdRemainingTime = function() {
  return this.j ? this.j.__get_adRemainingTime() : -2
};
R.prototype.B = function(a) {
  this.U.info(a.type);
  switch(a.type) {
    case "AdError":
      this.dispatchEvent(new Qd("AdError", new L(a.data.errNo, a.data.message)));
      this.a();
      break;
    case "AdSkipped":
      this.dispatchEvent(a);
      this.a();
      break;
    case "AdStopped":
      this.dispatchEvent(a);
      this.a();
      break;
    default:
      this.dispatchEvent(a)
  }
};
R.prototype.mouseover = function() {
  this.dispatchEvent("mouseover")
};
R.prototype.mouseout = function() {
  this.dispatchEvent("mouseout")
};
R.prototype.a = function() {
  this.aa && this.aa.a();
  this.za = this.aa = null;
  this.Q && this.Q.a();
  this.yc = this.j = this.Q = null;
  R.c.a.call(this)
};
function vf(a) {
  this.k = a.height;
  this.K = a.Na;
  this.n = a.ha;
  this.l = a.width;
  this.ub = a.rf || "";
  this.init()
}
s(vf, H);
vf.prototype.init = function() {
  this.Ya = B(kc);
  this.K.appendChild(this.Ya);
  this.b = new fd(300);
  E(this.n, ["AdVideoStart", "AdVideoComplete"], this.V, !1, this);
  E(this.b, gd, this.Fb, !1, this)
};
vf.prototype.V = function(a) {
  switch(a.type) {
    case "AdVideoStart":
      Ne(this.Ya, {display:"block"});
      this.b && this.b.start();
      break;
    case "AdVideoComplete":
      this.a()
  }
};
vf.prototype.Fb = function() {
  this.vb = this.n.getAdRemainingTime && Math.round(this.n.getAdRemainingTime());
  if(this.Ya) {
    var a = this.Ya, b;
    if(isNaN(this.vb) || 0 > this.vb) {
      this.b && this.b.stop(), b = "This ad will conclude shortly"
    }else {
      if("Ad will end in __SECONDS__ seconds" === this.ub) {
        b = Math.floor(this.vb / 60);
        var c = Math.floor(this.vb % 60);
        b = "\x3cb\x3eAD\x3c/b\x3e | " + ((10 > b ? "0" : "") + b + ":" + (10 > c ? "0" : "") + c)
      }else {
        b = this.ub.replace("__SECONDS__", this.vb.toString())
      }
    }
    zb(a, {innerHTML:b})
  }
};
vf.prototype.a = function() {
  G(this.n, ["AdVideoStart", "AdVideoComplete"], this.V, !1, this);
  G(this.b, gd, this.Fb, !1, this);
  z(this.Ya);
  this.Ya = null;
  this.b && this.b.stop();
  this.b && this.b.a();
  this.b = null;
  vf.c.a.call(this)
};
function wf(a) {
  this.k = a.height;
  this.K = a.Na;
  this.n = a.ha;
  this.l = a.width;
  this.init()
}
s(wf, H);
wf.prototype.init = function() {
  this.da = B(jc, {height:this.k, Gf:Id() + "://redir.adap.tv/redir/assets/mute_20x20.png"});
  this.K.appendChild(this.da);
  E(this.n, ["AdStarted", "AdVolumeChange", "AdStopped"], this.V, !1, this);
  E(this.da, ["click"], this.V, !1, this)
};
wf.prototype.V = function(a) {
  switch(a.type) {
    case "click":
      this.n.setAdVolume(0 == this.Uc ? this.gg || 1 : 0);
      break;
    case "AdStarted":
    ;
    case "AdVolumeChange":
      this.gg = this.Uc || null;
      this.Uc = this.n.getAdVolume();
      Ne(this.da, {display:"block", "background-position":0 == this.Uc ? "left" : "right"});
      break;
    case "AdStopped":
      this.a()
  }
};
wf.prototype.a = function() {
  G(this.n, ["AdStarted", "AdVolumeChange", "AdStopped"], this.V, !1, this);
  G(this.da, ["click"], this.V, !1, this);
  z(this.da);
  this.da = null;
  wf.c.a.call(this)
};
function xf(a) {
  this.k = a.height;
  this.K = a.Na;
  this.n = a.ha;
  this.l = a.width;
  this.rg = a.qg;
  this.init()
}
s(xf, H);
xf.prototype.init = function() {
  var a = Kb(this.K), b = 0;
  u(a, function(a) {
    a = Qe(a);
    b = a > b ? a : b
  });
  this.ba = B(gc, {height:this.k, width:this.l, hidden:this.rg, zIndex:b + 1});
  Jb(this.K, this.ba);
  E(this.n, ["AdStarted", "AdPaused", "AdPlaying", "AdStopped"], this.V, !1, this);
  E(this.ba, ["click"], this.V, !1, this)
};
xf.prototype.V = function(a) {
  switch(a.type) {
    case "click":
      this.n.zc ? this.n.resumeAd() : this.n.startAd();
      break;
    case "AdStarted":
    ;
    case "AdPlaying":
      this.ba.style.display = "none";
      break;
    case "AdPaused":
      this.ba.style.display = "block";
      break;
    case "AdStopped":
      this.a()
  }
};
xf.prototype.a = function() {
  G(this.n, ["AdStarted", "AdPaused", "AdPlaying", "AdStopped"], this.V, !1, this);
  G(this.ba, ["click"], this.V, !1, this);
  z(this.ba);
  xf.c.a.call(this)
};
var yf = ["click", "mouseout", "mouseover"], zf = ["AdPaused", "AdPlaying", "AdSkippableStateChange", "AdStopped", "AdVideoStart"];
function Af(a) {
  this.k = a.height;
  this.K = a.Na;
  this.oc = a.Rf || "SKIP in __SECONDS__s";
  this.Tc = Bf(a.ha);
  this.n = a.ha;
  this.l = a.width;
  this.Ic = !1;
  this.init()
}
s(Af, H);
m = Af.prototype;
m.a = function() {
  G(this.qa, yf, this.ne, !1, this);
  G(this.n, zf, this.B, !1, this);
  z(this.Ib);
  z(this.qa);
  this.qa = null;
  this.b.o();
  this.b = null;
  Af.c.a.call(this)
};
m.init = function() {
  var a = {height:Math.floor(this.k / 10), top:Math.floor(0.75 * this.k), width:Math.floor(this.l / 3)};
  this.qa = B(hc, {height:a.height, fontSize:Math.floor(Math.min(this.k / 19, this.l / 15)), top:a.top, width:a.width});
  this.Ib = B(ic, {height:a.height, fontSize:Math.floor(Math.min(this.k / 30, this.l / 45)), top:a.top, width:a.width});
  this.b = new fd(200);
  this.K.appendChild(this.Ib);
  E(this.b, gd, this.Fe, !1, this);
  E(this.n, zf, this.B, !1, this)
};
m.ne = function(a) {
  switch(a.type) {
    case "click":
      this.n.skipAd();
      break;
    case "mouseout":
      Ne(this.qa, "border", "1px solid rgba(100, 100, 100, 0.8)");
      Ne(this.qa, "background-color", "rgba(0, 0, 0, 0.8)");
      break;
    case "mouseover":
      Ne(this.qa, "border", "1px solid rgba(227, 227, 227, 0.9)"), Ne(this.qa, "background-color", "rgba(0, 0, 0, 0.9)")
  }
};
m.B = function(a) {
  switch(a.type) {
    case "AdPaused":
      this.Ic = !1;
      break;
    case "AdPlaying":
      this.Ic = !0;
      break;
    case "AdSkippableStateChange":
      this.n.qb && (G(this.b, gd, this.Fe, !1, this), this.b.o(), z(this.Ib), this.Ib = null, this.K.appendChild(this.qa), E(this.qa, yf, this.ne, !1, this));
      break;
    case "AdStopped":
      this.a();
      break;
    case "AdVideoStart":
      this.b.start()
  }
};
m.Fe = function() {
  this.Ic && (this.Tc -= 200);
  Lb(this.Ib, this.oc.replace("__SECONDS__", Math.ceil(this.Tc / 1E3).toString()))
};
function Cf(a) {
  this.k = a.height;
  this.qe = a.parentNode;
  this.n = a.ha;
  this.l = a.width;
  a = a.pluginProps || {};
  this.ub = a.countdownText || "";
  this.Sf = a.muteButtonEnabled || !1;
  this.mg = !1 !== a.showPlayButtonOnPause;
  this.pg = a.skipAdEnabled || !1
}
Cf.prototype.init = function() {
  if(!Fd()) {
    var a = Kb(this.qe), b = 0;
    u(a, function(a) {
      a = Qe(a);
      b = a > b ? a : b
    });
    this.Wa = B(lc, {width:this.l, zIndex:b + 1});
    Jb(this.qe, this.Wa);
    this.pg && (this.xd = new Af({height:this.k, Na:this.Wa, Rf:"", ha:this.n, width:this.l}));
    this.Sf && (this.da = new wf({height:this.k, Na:this.Wa, ha:this.n, width:this.l}));
    this.ub && (this.Li = new vf({height:this.k, Na:this.Wa, ha:this.n, width:this.l, rf:this.ub}));
    if(this.mg || Ed()) {
      this.ba = new xf({height:this.k, Na:this.Wa, ha:this.n, width:this.l, qg:!Ed()})
    }
  }
};
Cf.prototype.a = function() {
  this.xd && this.xd.a();
  this.xd = null;
  this.da && this.da.a();
  this.da = null;
  this.Td && this.Td.a();
  this.Td = null;
  this.ba && this.ba.a();
  this.ba = null;
  z(this.Wa)
};
var Df = new L(521, "Failed to play media files"), Ef = new L(523, "Invalid ad container!"), Ff = new L(524, "HTML5 Video tag not supported");
function Gf(a, b) {
  this.height = b || window.innerHeight;
  this.width = a || window.innerWidth;
  this.muted = !1
}
function Hf(a, b, c, d) {
  H.call(this);
  this.Ba = N("adaptv.vpaid.VideoControl");
  c.videoSlot && c.slot || (window.console && window.console.log("Warning: This ADAPTV integration is deprecated and no longer supported.  Please update the integration."), this.Wf = !0);
  this.M = c.slot;
  this.ga = c.videoSlot;
  this.qf = new re(c.companionSlots);
  this.Pc = c.clickSlot;
  this.ye = !0;
  this.zd = !1;
  this.td = c.videoSlot && ((Ua().toLowerCase().match(/(ipad|iphone|ipod)/g) ? !0 : !1) || !c.slot);
  this.ra = new Gf(a, b);
  a = Ua().toLowerCase();
  Fd() ? (this.Vc = "IOS", this.ye = !1) : -1 < a.search("ipad") ? this.Vc = "IOS" : Ua().toLowerCase().match(/(android)/g) ? (this.Vc = "android", this.kf = 0 <= Ba(a.substr(a.indexOf("android"), 13).split(" ")[1], "4.1.0")) : this.Vc = "web";
  this.Ac = this.kb = this.nd = this.Sc = !1;
  this.n = d;
  this.Jf = this.td && this.ga && (!this.ga.tagName || "video" !== this.ga.tagName.toLowerCase())
}
s(Hf, H);
function If(a, b) {
  document.createElement("video").play ? (a.nc = b.mediaFiles, a.wb = 0, a.Qc = b.clickThrough, a.eg = b.dg, a.td ? (a.M && a.M.removeAttribute("style"), a.g = a.ga, a.Nd = {}, qb(a.g.attributes, function(a) {
    this.Nd[a.name] = a.value
  }, a), a.K = a.M, zb(a.g, {preload:"auto", loop:!1, src:a.nc[a.wb].url}), a.g.hasAttribute && a.g.hasAttribute("controls") && a.g.removeAttribute("controls"), Jf(a)) : (a.M && a.M.nodeName && "div" === a.M.nodeName.toLowerCase() || a.dispatchEvent(new Qd("error", Ef)), a.oa = B(dc, {width:a.ra.width, height:a.ra.height}), "static" === Re(a.M, "position") && Ne(a.M, {position:"relative"}), a.M.appendChild(a.oa), hd(function() {
    this.K = B(ec);
    null == (this.oa.contentDocument || this.oa.contentWindow.document).body && (this.oa.contentDocument || this.oa.contentWindow.document).write("\x3cbody\x3e\x3c/body\x3e");
    (this.oa.contentDocument || this.oa.contentWindow.document).body.appendChild(this.K);
    this.g = B(fc, {width:this.ra.width, height:this.ra.height, url:this.nc[this.wb].url});
    this.K.appendChild(this.g);
    E(this.g, ["mouseover", "mouseout"], this.$f, !1, this);
    Jf(this)
  }, 0, a))) : a.dispatchEvent(new Qd("error", Ff))
}
function Jf(a) {
  a.Wf || (a.Xb = new Cf({height:a.ra.height, parentNode:a.K, ha:a.n, width:a.ra.width, pluginProps:a.eg}), a.Xb.init());
  a.Pc && E(a.Pc, "click", function() {
    this.pause();
    this.dispatchEvent("click");
    this.Qc && this.kb && window.open(this.Qc, "_blank")
  }, !1, a);
  a.ec = {};
  qb(Nd, function(a) {
    this.ec[a.toString()] = q(this.Xf, this);
    E(this.g, a, this.ec[a.toString()], !1, this)
  }, a);
  a.Jf && (a.nd = !0, a.dispatchEvent("loaded"))
}
m = Hf.prototype;
m.Xf = function(a) {
  this.Ba.info("VideoControl received event " + a.type);
  switch(a.type) {
    case "stalled":
      if(this.kf) {
        break
      }
    ;
    case "error":
      if(this.kb) {
        break
      }else {
        this.wb++, this.wb < this.nc.length ? (zb(this.g, {src:this.nc[this.wb].url}), this.g.play()) : this.dispatchEvent(new Qd("error", Df))
      }
      break;
    case "ended":
      this.dispatchEvent("ended");
      this.stop();
      break;
    case "volumechange":
      this.dispatchEvent("volumechange");
      this.g.muted ? (this.dispatchEvent("mute"), this.ra.muted = !0) : this.ra.muted && (this.dispatchEvent("unmute"), this.ra.muted = !1);
      break;
    case "play":
    ;
    case "playing":
      this.kb ? this.dispatchEvent("resume") : (this.kb = !0, this.dispatchEvent("playing"), Fd() && setTimeout(q(function() {
        this.g.play()
      }, this), 500));
      break;
    case "pause":
      this.kb && !this.Ac && this.dispatchEvent("pause");
      break;
    case "touchstart":
      Kf(this);
      this.zd = !0;
      break;
    case "click":
      this.zd || Kf(this);
      this.zd = !1;
      break;
    case "loadeddata":
    ;
    case "loadedmetadata":
      this.nd || (this.nd = !0, this.dispatchEvent("loaded"))
  }
};
function Kf(a) {
  a.g.paused ? a.resume() : a.kb && (!a.Ac && a.ye && !a.Pc) && (a.pause(), a.dispatchEvent("click"), window.open(a.Qc, "_blank"))
}
m.$f = function(a) {
  this.dispatchEvent(a)
};
m.volume = function() {
  if(this.g) {
    return this.g.volume
  }
};
m.setVolume = function(a) {
  this.g && (this.g.volume = a)
};
m.elapsedTime = function() {
  if(this.g) {
    return this.g.currentTime
  }
};
Hf.prototype.duration = function() {
  return this.g ? this.g.duration : -2
};
Hf.prototype.pause = function() {
  this.g && this.g.pause()
};
Hf.prototype.resume = function() {
  Ua().toLowerCase().match(/(android)/g) && !this.Sc && (this.ga.play(), this.ga.pause(), this.Sc = !0);
  this.g && this.g.play()
};
Hf.prototype.stop = function() {
  if(!this.Ac) {
    this.Ac = !0;
    if(this.td) {
      try {
        this.g.removeAttribute("id"), this.g.removeAttribute("preload"), this.g.removeAttribute("loop"), this.g.removeAttribute("src"), zb(this.g, this.Nd), this.g.play()
      }catch(a) {
      }
    }else {
      z(this.g), z(this.oa), this.M.removeAttribute("style"), this.oa = this.g = null
    }
    this.setVolume(1);
    this.g && this.ec && qb(Nd, function(a) {
      this.g.removeEventListener(a, this.ec[a.toString()], !0)
    }, this);
    this.Xb && this.Xb.a();
    this.Xb = null;
    this.dispatchEvent("stopped");
    this.Sc || this.ga && this.ga.load();
    this.ga && this.ga.play()
  }
};
Hf.prototype.gd = function(a) {
  this.qf.gd(a)
};
Hf.prototype.mouseover = function() {
  this.dispatchEvent("mouseover")
};
Hf.prototype.mouseout = function() {
  this.dispatchEvent("mouseout")
};
function S() {
  H.call(this);
  this.qb = !1;
  this.Ha = 1;
  this.uf = !1;
  this.Kf = !0;
  this.aa = new Fe(this);
  (new ld((new pa).Ma())).C.get("adaptvLog") && Lf()
}
s(S, H);
S.prototype.yf = l("Kf");
S.prototype.Af = l("l");
S.prototype.wf = l("k");
S.prototype.getAdExpanded = l("uf");
S.prototype.zf = l("qb");
S.prototype.getAdRemainingTime = l("Ii");
S.prototype.getAdDuration = ba(-2);
S.prototype.getAdVolume = l("Ha");
S.prototype.getAdCompanions = ba("");
S.prototype.xf = ba(!1);
S.prototype.setAdVolume = function(a) {
  this.Ha != a && (0 > a ? a = 0 : 1 < a && (a = 1), this.Ha = a)
};
S.prototype.handshakeVersion = ba("2.0");
S.prototype.initAd = function(a, b, c, d, f, g) {
  this.l = a;
  this.k = b;
  a = c;
  a = "string" === typeof a ? a.toLowerCase() : "";
  this.Ie = "thumbnail" === a || "fullscreen" === a ? a : "normal";
  this.mf = d;
  this.O = Mf(f);
  this.ya = g;
  document.body || document.close()
};
function Mf(a) {
  if(!a || !a.AdParameters || "string" !== typeof a.AdParameters) {
    return a
  }
  var b = {}, c = {};
  a = ua(a.AdParameters).split("\x26");
  u(a, function(a) {
    a = a.split("\x3d");
    if("cd" === a[0]) {
      c = te(decodeURIComponent(a[1].replace(/\+/g, " ")))
    }else {
      var f = "adXML" === a[0] ? "xml" : a[0].replace("pp.", "");
      b[f] = decodeURIComponent(a[1])
    }
  });
  ub(c, b);
  return c
}
S.prototype.resizeAd = function(a, b) {
  this.l = a;
  this.k = b
};
S.prototype.startAd = e();
S.prototype.stopAd = e();
S.prototype.pauseAd = e();
S.prototype.resumeAd = e();
S.prototype.expandAd = e();
S.prototype.collapseAd = e();
S.prototype.skipAd = e();
S.prototype.subscribe = function(a, b, c) {
  var d;
  "function" === typeof a ? (d = a, a = b) : d = b;
  this.aa.t(this, [a], d, c)
};
S.prototype.unsubscribe = function(a, b) {
  var c, d;
  "function" === typeof a ? (c = a, d = b) : (c = b, d = a);
  Ge(this.aa, this, [d], c)
};
S.prototype.ed = e();
S.prototype.a = function() {
  this.aa && this.aa.a();
  this.aa = null;
  ad(this)
};
var Nf = new L(412, "The video format is not playable!"), Of = new L(416, "VPAID error!"), Pf = new L(417, "Ad slot required in order to play VPAID Flash"), Qf = new L(514, "Ad slots are defined incorrectly!"), Rf = new L(515, "Ad-tag url or the publisherId is not passed in params!"), Sf = new L(522, "The video ad did not start before timing out"), Tf = new L(525, "The ad(s) did not load before the ad break timed out"), Uf = new L(526, "The video ad did not load before timing out"), Vf = new L(560, 
"No more ads or no failover!"), Wf = new L(570, "Failed to inject Dependencies");
function T() {
  S.call(this);
  this.U = N("adaptv.vpaid.VASTPlayer");
  this.ob = [];
  this.yd = this.zc = this.Md = this.Ob = !1
}
s(T, S);
function U(a, b) {
  a.dispatchEvent("error");
  a.U.info(b.errorMessage);
  500 > b.errorCode && !a.Md ? (I(a.pb), I(a.Pb), a.Ob = !1, a.zc = !1, Xf(a)) : (a.dispatchEvent(new Qd("AdError", {errorCode:b.errorCode, errorMessage:b.errorMessage, message:b.errorMessage})), a.stopAd())
}
T.prototype.rc = function(a) {
  this.U.info(a.type);
  switch(a.type) {
    case "playing":
      this.dispatchEvent("AdStarted");
      this.dispatchEvent("AdVideoStart");
      this.dispatchEvent("AdPlaying");
      this.dispatchEvent("AdImpression");
      this.dispatchEvent("creativeView");
      I(this.Pb);
      this.setAdVolume(this.Ha);
      Yf(this);
      for(a = 0;a < this.ob.length;a++) {
        this.ob[a] && this.ob[a].valid && this.i.gd(this.ob[a])
      }
      var b = ["AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile"], c = 1, d = new fd(500);
      d.start();
      E(d, gd, function() {
        null === this.i || this.i.duration() && this.i.duration() == this.i.elapsedTime() ? (d.stop(), d.a(), d = null) : (this.i.elapsedTime() >= Bf(this) / 1E3 && !this.qb && (this.qb = !0, this.dispatchEvent("AdSkippableStateChange")), 4 * (this.i.elapsedTime() / this.i.duration()) > c && (this.dispatchEvent(b[c - 1]), c++))
      }, !1, this);
      break;
    case "pause":
      this.dispatchEvent("AdPaused");
      break;
    case "resume":
      this.dispatchEvent("AdPlaying");
      break;
    case "click":
      this.dispatchEvent(new Qd("AdClickThru", {playerHandles:!1}));
      break;
    case "volumechange":
      this.dispatchEvent("AdVolumeChange");
      break;
    case "ended":
      this.dispatchEvent("AdVideoComplete");
      break;
    case "stopped":
      ad(this.i);
      this.dispatchEvent("AdStopped");
      this.reset();
      break;
    case "error":
      U(this, a.data);
      break;
    case "loaded":
      this.Ob = !0;
      I(this.pb);
      this.dispatchEvent("AdLoaded");
      this.yd && this.startAd();
      break;
    default:
      this.dispatchEvent(a)
  }
};
T.prototype.reset = function() {
  this.d && this.e.isVPAID || (this.i && this.i.a(), this.Qd && this.Qd.a(), this.a())
};
T.prototype.ed = function() {
  return new T
};
T.prototype.getAdCompanions = function() {
  var a = this.e.companionString;
  !a && (this.d && this.e.isVPAID) && (a = this.d.getAdCompanions && "function" == typeof this.d.getAdCompanions ? this.d.getAdCompanions() : "");
  return a
};
T.prototype.getAdDuration = function() {
  return this.d && this.e.isVPAID ? this.d.getAdDuration && "function" == typeof this.d.getAdDuration ? this.d.getAdDuration() : -2 : this.i ? this.i.duration() : -2
};
T.prototype.getAdVolume = function() {
  return this.d && this.e.isVPAID ? this.d.getAdVolume() : this.i && this.i.volume()
};
T.prototype.setAdVolume = function(a) {
  T.c.setAdVolume.call(this, a);
  this.d && this.e.isVPAID ? this.d.setAdVolume(this.Ha) : this.i && this.i.setVolume(this.Ha)
};
T.prototype.getAdRemainingTime = function() {
  return this.d && this.e.isVPAID ? this.d.getAdRemainingTime() : this.i ? this.i.duration() - this.i.elapsedTime() : -2
};
function Bf(a) {
  void 0 === a.Be && (a.Be = Yd(new Xd(a.e.skipoffset), Yd(new Xd(a.e.duration))));
  return a.Be
}
m = T.prototype;
m.initAd = function(a, b, c, d, f, g) {
  T.c.initAd.call(this, a, b, c, d, f, g);
  this.jd = parseInt(Math.random().toString().substr(2, 16), 10);
  g.slot || g.videoSlot ? (this.cc = new Be(g), this.Ji = 1E3 * parseInt(g.adTagTimeout, 10) || 1E4, this.Hc = 1E3 * parseInt(g.adLoadedTimeout, 10), this.gf = 1E3 * parseInt(g.videoTimeout, 10) || 7E3, this.Of = parseInt(g.maxWrapperLevels, 10) || 5, this.ee()) : U(this, Qf)
};
m.ee = function() {
  this.Oa = Ce();
  this.O.xml ? this.Oa.onload = q(function() {
    return Zf(this, "xml")
  }, this) : (this.Qb = this.O.adTagUrl) ? this.Oa.onload = q(function() {
    return Zf(this, "adTag")
  }, this) : U(this, Rf)
};
function Zf(a, b) {
  window.addEventListener ? window.addEventListener("message", q(a.me, a), !1) : window.attachEvent("onmessage", q(a.me, a));
  var c = {instanceId:a.jd, maxWrapperLevels:a.Of};
  "xml" === b ? (c.type = "initXML", c.xml = a.O.xml) : (c.type = "init", c.adTagUrl = a.Qb);
  a.Oa.contentWindow.postMessage(ve(c), "*")
}
m.me = function(a) {
  if(-1 < a.origin.indexOf("adap.tv")) {
    try {
      var b = ue(a.data), c = b.ad;
      this.jd === b.instanceId && (this.e = new Wd(c), "" !== this.e.skipoffset && isNaN(Bf(this)) && this.U.info("Invalid duration or skipoffset"), this.load())
    }catch(d) {
    }
  }
};
m.load = function() {
  $f(this);
  this.i = new Hf(this.l, this.k, this.ya, this);
  if(0 === this.e.error.errorCode) {
    this.Qd = new ne(this, q(this.Pd, this));
    var a = this.e.mediaFiles;
    if(a && a.length) {
      var b = Mf(this.e.data);
      b && !0 === b.startMuted && this.setAdVolume(0);
      ag(this);
      this.e.isVPAID && "application/x-shockwave-flash" === this.e.mediaFiles[0].type ? this.ya.slot ? (this.d = new R(this.ya.slot), this.d.name = "FLASH_VPAID_LOADER", E(this.d, rb(Od), q(this.B, this)), E(this.d, ["mouseover", "mouseout"], q(this.B, this)), a = {vpaidUrl:a[0].url}, this.e.hasAdaptvParams && (a.videoProperties = {}, a.pluginProperties = b), this.d.initAd(this.l, this.k, this.Ie, 500, this.e.data && this.e.data.AdParameters, a)) : U(this, Pf) : this.e.isVPAID ? (new Cd(a[0].url, 
      "getVPAIDAd", !0)).Pa(q(function(a) {
        a.error ? U(this, Wf) : (this.d = a.window.getVPAIDAd(), this.d.name = "getVPAIDAd", u(rb(Od), function(a) {
          this.d.subscribe(q(this.B, this, {type:a}), a)
        }, this), this.d.initAd(this.l, this.k, this.Ie, this.mf, this.e.data, this.ya))
      }, this)) : (E(this.i, rb(Pd), this.rc, !1, this), E(this.i, ["mouseover", "mouseout"], q(this.rc, this)), If(this.i, {clickThrough:this.e.clickThrough, mediaFiles:this.e.mediaFiles, dg:b}), this.ob = this.e.companions)
    }else {
      U(this, Nf)
    }
  }else {
    500 > this.e.error.errorCode ? Xf(this) : U(this, Vf)
  }
};
function ag(a) {
  I(a.pb);
  a.Hc && 0 < a.Hc && (a.pb = hd(function() {
    U(this, Uf)
  }, a.Hc, a))
}
m.Pd = function() {
  return{playerRev:"4526631"}
};
function Xf(a) {
  a.Oa.contentWindow.postMessage(ve({type:"next"}), "*")
}
function $f(a) {
  a.i && (ad(a.i), a.i.a(), a.i = null)
}
m.B = function(a) {
  this.U.info("AdPlayer received event " + a.type + " from " + (this.d ? this.d.name : "unknown"));
  switch(a.type) {
    case "AdError":
      U(this, new L(Of.errorCode, Of.errorMessage + " " + (a.data ? a.data.errorMessage : "")));
      break;
    case "AdLoaded":
      this.Ob = !0;
      I(this.pb);
      this.yd && this.startAd();
      this.dispatchEvent(a);
      break;
    case "AdImpression":
      Yf(this);
      this.dispatchEvent(a);
      break;
    case "AdStarted":
      this.Md = !0;
      I(this.Pb);
      this.setAdVolume(this.Ha);
      this.dispatchEvent(a);
      break;
    default:
      this.dispatchEvent(a)
  }
};
function Yf(a) {
  a.e.scripts && u(a.e.scripts, function(a) {
    if("url" === a.type) {
      (new Cd(a.src)).Pa()
    }else {
      a = a.src;
      var c = Db("script", {type:"text/javascript"});
      c.appendChild(document.createTextNode(a));
      yb("head", void 0, void 0)[0].appendChild(c)
    }
  })
}
T.prototype.resizeAd = function(a, b, c) {
  T.c.resizeAd.call(this, a, b, c);
  this.d && this.e.isVPAID && this.d.resizeAd(a, b, c)
};
T.prototype.startAd = function() {
  if(!this.Ob) {
    this.yd = !0
  }else {
    if(!this.zc) {
      this.zc = !0;
      var a = this.e.surveyURL;
      a && 0 <= a.indexOf(".js") && Gd(a);
      this.Pb = hd(function() {
        U(this, Sf)
      }, this.gf, this);
      this.d && this.e.isVPAID ? this.d.startAd() : this.resumeAd()
    }
  }
};
T.prototype.pauseAd = function() {
  this.d && this.e.isVPAID ? this.d.pauseAd() : this.i && this.i.pause()
};
T.prototype.resumeAd = function() {
  this.d && this.e.isVPAID ? this.d.resumeAd() : this.i && this.i.resume()
};
T.prototype.skipAd = function() {
  this.qb && (this.d && this.d.skipAd ? (this.d.skipAd(), this.d = null) : (this.dispatchEvent("AdSkipped"), this.i && this.i.stop(), this.reset()))
};
T.prototype.stopAd = function() {
  this.d && this.e.isVPAID ? ("function" === typeof this.d.stopAd && this.d.stopAd(), u(rb(Od), function(a) {
    this.d.unsubscribe && this.d.unsubscribe(q(this.B, this, {type:a}), a)
  }, this), this.d = null) : (this.i && this.i.stop(), this.reset())
};
T.prototype.a = function() {
  I(this.pb);
  I(this.Pb);
  this.cc && this.cc.a();
  this.cc = null;
  $f(this);
  T.c.a.call(this)
};
function V() {
  T.call(this);
  this.U = N("adaptv.vpaid.VPAIDClient");
  this.Ke = this.te = -1;
  window.addEventListener && Gd(Id() + "://dtm.advertising.com/411f1e96-3bde-4d85-b17e-63749e5f0695.js")
}
s(V, T);
m = V.prototype;
m.rc = function(a) {
  switch(a.type) {
    case "playing":
      bg(this);
      break;
    case "loaded":
      I(this.Sb)
  }
  V.c.rc.call(this, a)
};
m.ed = function() {
  return new V
};
m.initAd = function(a, b, c, d, f, g) {
  this.pf = 1E3 * parseInt(g.breakLoadedTimeout, 10) || 3E4;
  V.c.initAd.call(this, a, b, c, d, f, g)
};
m.ee = function() {
  this.ya.slot && ("undefined" != typeof navigator.plugins && "object" == typeof navigator.plugins["Shockwave Flash"] || window.ActiveXObject && "object" == typeof new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) ? (this.ya.slot.style.width = Ue(this.l, !0), this.ya.slot.style.height = Ue(this.k, !0), this.G = new Rd(this.ya.slot, this.jd, this.l, this.k, this), E(this.G, ["IABViewable", "IABDetectionFailed", "IABDetectionStarted"], this.oe, !1, this), this.G.hc(q(this.pe, this))) : this.pe()
};
m.pe = function(a) {
  a = a || {};
  this.te = "number" === typeof a.psize ? a.psize : -1;
  this.Ke = "number" === typeof a.viewableOpportunity ? a.viewableOpportunity : -1;
  this.Oa = Ce();
  this.Sa = new pa;
  I(this.Sb);
  this.Sb = hd(function() {
    U(this, Tf)
  }, this.pf, this);
  if(this.O.xml) {
    this.Oa.onload = q(function() {
      return Zf(this, "xml")
    }, this)
  }else {
    var b = xd(this.O.adTagUrl);
    if(Hd(b.toString())) {
      b.C.get("cb") || K(b, "cb", Math.floor(100 * Math.random()));
      b.C.get("width") || K(b, "width", this.l);
      b.C.get("height") || K(b, "height", this.k);
      K(K(K(K(K(b, "a.sdk", "adaptv"), "a.sdkType", "js"), "a.d.pageUrl", this.Sa.Ma()), "referrerUrl", this.Sa.df), "depth", this.Sa.Ld);
      for(var c in a) {
        K(b, "p.vw." + c, a[c])
      }
      this.Sa && Jd(b, xd(this.Sa.Ma()))
    }
    (this.Qb = b.toString()) ? this.Oa.onload = q(function() {
      return Zf(this, "adTag")
    }, this) : U(this, Rf)
  }
};
m.load = function() {
  !this.nf && (this.e.adaptvUUID && this.e.adaptvUUID.length) && (De(this.cc, this.e.adaptvUUID), this.nf = !0);
  0 === this.e.error.errorCode && this.G && this.G.init();
  V.c.load.call(this)
};
m.Pd = function() {
  return{"a.active":this.G ? this.G.Gc : -1, "a.framerate":this.G ? this.G.cd : -1, "a.geometric":this.G ? this.G.dd : -1, "a.psize":this.te, "a.viewable":this.G ? this.G.Mb : -1, "a.viewableOpportunity":this.Ke, playerRev:"4526631"}
};
m.B = function(a) {
  switch(a.type) {
    case "AdLoaded":
      I(this.Sb);
      break;
    case "AdImpression":
      bg(this)
  }
  V.c.B.call(this, a)
};
m.oe = function(a) {
  this.dispatchEvent(a)
};
function bg(a) {
  a = K(K(K(K(K(xd(Id() + "://log.adaptv.advertising.com/log?event\x3dclientstats"), "playerRev", "4526631"), "pageUrl", a.Sa.Ma()), "sdkType", "js"), "depth", a.Sa.Ld), "eov", Math.floor(1E6 * Math.random()));
  a = B($b, {url:a.toString()});
  document.body.appendChild(a)
}
m.a = function() {
  this.G && (G(this.G, ["IABViewable", "IABDetectionFailed", "IABDetectionStarted"], this.oe, !1, this), this.G.a(), this.G = null);
  I(this.Sb);
  V.c.a.call(this)
};
var cg;
function dg(a, b, c) {
  fa(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || void 0 == c ? (cg || (cg = {atomic:!1, autocomplete:"none", dropeffect:"none", haspopup:!1, live:"off", multiline:!1, multiselectable:!1, orientation:"vertical", readonly:!1, relevant:"additions text", required:!1, sort:"none", busy:!1, disabled:!1, hidden:!1, invalid:"false"}), c = cg, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}
;var eg = !!n.DOMTokenList, fg = eg ? function(a) {
  return a.classList
} : function(a) {
  a = a.className;
  return p(a) && a.match(/\S+/g) || []
}, gg = eg ? function(a, b) {
  return a.classList.contains(b)
} : function(a, b) {
  var c = fg(a);
  return 0 <= Ga(c, b)
}, hg = eg ? function(a, b) {
  a.classList.add(b)
} : function(a, b) {
  gg(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}, ig = eg ? function(a, b) {
  u(b, function(b) {
    hg(a, b)
  })
} : function(a, b) {
  var c = {};
  u(fg(a), function(a) {
    c[a] = !0
  });
  u(b, function(a) {
    c[a] = !0
  });
  a.className = "";
  for(var d in c) {
    a.className += 0 < a.className.length ? " " + d : d
  }
}, jg = eg ? function(a, b) {
  a.classList.remove(b)
} : function(a, b) {
  gg(a, b) && (a.className = Ha(fg(a), function(a) {
    return a != b
  }).join(" "))
}, kg = eg ? function(a, b) {
  u(b, function(b) {
    jg(a, b)
  })
} : function(a, b) {
  a.className = Ha(fg(a), function(a) {
    return!(0 <= Ga(b, a))
  }).join(" ")
};
function lg(a, b, c) {
  H.call(this);
  this.target = a;
  this.handle = b || a;
  this.mc = c || new Me(NaN, NaN, NaN, NaN);
  this.F = xb(a);
  this.J = new Je(this);
  a = la(yc, this.J);
  this.Eb || (this.Eb = []);
  this.Eb.push(q(a, void 0));
  E(this.handle, ["touchstart", "mousedown"], this.Ce, !1, this)
}
s(lg, H);
var mg = v || w && y("1.9.3");
m = lg.prototype;
m.clientX = 0;
m.clientY = 0;
m.screenX = 0;
m.screenY = 0;
m.De = 0;
m.Ee = 0;
m.$a = 0;
m.ab = 0;
m.Vd = !0;
m.Ka = !1;
m.de = 0;
m.Qf = 0;
m.Ff = !1;
m.Bd = !1;
m.ma = l("J");
m.o = function() {
  lg.c.o.call(this);
  G(this.handle, ["touchstart", "mousedown"], this.Ce, !1, this);
  this.J.Ta();
  mg && this.F.releaseCapture();
  this.handle = this.target = null
};
function ng(a) {
  void 0 === a.xc && (a.xc = "rtl" == Se(a.target, "direction"));
  return a.xc
}
m.Ce = function(a) {
  var b = "mousedown" == a.type;
  if(!this.Vd || this.Ka || b && (!(zc ? 0 == a.$.button : "click" == a.type || a.$.button & Ic[0]) || x && Ta && a.ctrlKey)) {
    this.dispatchEvent("earlycancel")
  }else {
    og(a);
    if(0 == this.de) {
      if(this.dispatchEvent(new qg("start", this, a.clientX, a.clientY, a))) {
        this.Ka = !0, a.preventDefault()
      }else {
        return
      }
    }else {
      a.preventDefault()
    }
    var b = this.F, c = b.documentElement, d = !mg;
    this.J.t(b, ["touchmove", "mousemove"], this.Df, d);
    this.J.t(b, ["touchend", "mouseup"], this.dc, d);
    mg ? (c.setCapture(!1), this.J.t(c, "losecapture", this.dc)) : this.J.t(Cb(b), "blur", this.dc);
    v && this.Ff && this.J.t(b, "dragstart", Dc);
    this.ig && this.J.t(this.ig, "scroll", this.ag, d);
    this.clientX = this.De = a.clientX;
    this.clientY = this.Ee = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.Bd ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != Se(a, "position") || (c = xb(a).documentElement), c ? (w ? (d = af(c), b += d.left) : v && 8 <= jb && (d = af(c), b -= d.left), a = "rtl" == Se(c, "direction") ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
    this.$a = a;
    this.ab = this.target.offsetTop;
    this.qd = Rb(vb(this.F));
    this.Qf = ma()
  }
};
m.dc = function(a, b) {
  this.J.Ta();
  mg && this.F.releaseCapture();
  if(this.Ka) {
    og(a);
    this.Ka = !1;
    var c = rg(this, this.$a), d = sg(this, this.ab);
    this.dispatchEvent(new qg("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
  }else {
    this.dispatchEvent("earlycancel")
  }
};
function og(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? a.init(a.$.targetTouches[0], a.currentTarget) : "touchend" != b && "touchcancel" != b || a.init(a.$.changedTouches[0], a.currentTarget)
}
m.Df = function(a) {
  if(this.Vd) {
    og(a);
    var b = (this.Bd && ng(this) ? -1 : 1) * (a.clientX - this.clientX), c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if(!this.Ka) {
      var d = this.De - this.clientX, f = this.Ee - this.clientY;
      if(d * d + f * f > this.de) {
        if(this.dispatchEvent(new qg("start", this, a.clientX, a.clientY, a))) {
          this.Ka = !0
        }else {
          this.ka || this.dc(a);
          return
        }
      }
    }
    c = tg(this, b, c);
    b = c.x;
    c = c.y;
    this.Ka && this.dispatchEvent(new qg("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (ug(this, a, b, c), a.preventDefault())
  }
};
function tg(a, b, c) {
  var d = Rb(vb(a.F));
  b += d.x - a.qd.x;
  c += d.y - a.qd.y;
  a.qd = d;
  a.$a += b;
  a.ab += c;
  b = rg(a, a.$a);
  a = sg(a, a.ab);
  return new ob(b, a)
}
m.ag = function(a) {
  var b = tg(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  ug(this, a, b.x, b.y)
};
function ug(a, b, c, d) {
  a.Bd && ng(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
  a.target.style.top = d + "px";
  a.dispatchEvent(new qg("drag", a, b.clientX, b.clientY, b, c, d))
}
function rg(a, b) {
  var c = a.mc, d = isNaN(c.left) ? null : c.left, c = isNaN(c.width) ? 0 : c.width;
  return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
}
function sg(a, b) {
  var c = a.mc, d = isNaN(c.top) ? null : c.top, c = isNaN(c.height) ? 0 : c.height;
  return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
}
function qg(a, b, c, d, f, g, h, k) {
  D.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.Ki = f;
  this.left = void 0 !== g ? g : b.$a;
  this.top = void 0 !== h ? h : b.ab;
  this.Oi = b;
  this.Ni = !!k
}
s(qg, D);
function vg(a) {
  H.call(this);
  this.f = a;
  a = v ? "focusout" : "blur";
  this.Lf = E(this.f, v ? "focusin" : "focus", this, !v);
  this.Mf = E(this.f, a, this, !v)
}
s(vg, H);
vg.prototype.handleEvent = function(a) {
  var b = new Hc(a.$);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.dispatchEvent(b)
};
vg.prototype.o = function() {
  vg.c.o.call(this);
  $c(this.Lf);
  $c(this.Mf);
  delete this.f
};
function wg(a, b) {
  cf.call(this, b);
  this.vg = !!a;
  this.Db = null
}
s(wg, cf);
m = wg.prototype;
m.$c = null;
m.nb = !1;
m.N = null;
m.D = null;
m.Z = null;
m.Mc = !1;
m.Bb = ba("goog-modalpopup");
m.ic = l("N");
m.r = function() {
  wg.c.r.call(this);
  var a = this.h(), b = ua(this.Bb()).split(" ");
  ig(a, b);
  a.tabIndex = 0;
  Q(a, !1);
  xg(this);
  yg(this)
};
function xg(a) {
  if(a.vg && !a.D) {
    var b;
    b = a.m().r("iframe", {frameborder:0, style:"border:0;vertical-align:bottom;", src:'javascript:""'});
    a.D = b;
    a.D.className = a.Bb() + "-bg";
    Q(a.D, !1);
    Ye(a.D, 0)
  }
  a.N || (a.N = a.m().r("div", a.Bb() + "-bg"), Q(a.N, !1))
}
function yg(a) {
  a.Z || (a.Z = a.m().createElement("span"), Q(a.Z, !1), a.Z.tabIndex = 0, a.Z.style.position = "absolute")
}
m.we = function() {
  this.Mc = !1
};
m.Sd = function(a) {
  return!!a && "DIV" == a.tagName
};
m.xb = function(a) {
  wg.c.xb.call(this, a);
  a = ua(this.Bb()).split(" ");
  ig(this.h(), a);
  xg(this);
  yg(this);
  Q(this.h(), !1)
};
m.la = function() {
  if(this.D) {
    var a = this.h();
    a.parentNode && a.parentNode.insertBefore(this.D, a)
  }
  a = this.h();
  a.parentNode && a.parentNode.insertBefore(this.N, a);
  wg.c.la.call(this);
  a = this.h();
  a.parentNode && a.parentNode.insertBefore(this.Z, a.nextSibling);
  this.$c = new vg(A(this.m()));
  this.ma().t(this.$c, "focusin", this.Zf);
  zg(this, !1)
};
m.La = function() {
  this.nb && this.L(!1);
  yc(this.$c);
  wg.c.La.call(this);
  z(this.D);
  z(this.N);
  z(this.Z)
};
m.L = function(a) {
  if(a != this.nb) {
    if(this.hb && this.hb.stop(), this.sb && this.sb.stop(), this.gb && this.gb.stop(), this.rb && this.rb.stop(), this.T && zg(this, a), a) {
      if(this.dispatchEvent("beforeshow")) {
        try {
          this.Db = A(this.m()).activeElement
        }catch(b) {
        }
        this.sd();
        this.Hb();
        this.ma().t(Qb(this.m()), "resize", this.sd);
        Ag(this, !0);
        this.focus();
        this.nb = !0;
        this.hb && this.sb ? (Zc(this.hb, "end", this.qc, !1, this), this.sb.play(), this.hb.play()) : this.qc()
      }
    }else {
      if(this.dispatchEvent("beforehide")) {
        this.ma().Kb(Qb(this.m()), "resize", this.sd);
        this.nb = !1;
        this.gb && this.rb ? (Zc(this.gb, "end", this.pc, !1, this), this.rb.play(), this.gb.play()) : this.pc();
        try {
          var c = A(this.m()).body, d = A(this.m()).activeElement || c;
          this.Db && (d == c && this.Db != c) && this.Db.focus()
        }catch(f) {
        }
        this.Db = null
      }
    }
  }
};
function zg(a, b) {
  for(var c = A(a.m()).body.firstChild;c;c = c.nextSibling) {
    if(1 == c.nodeType) {
      var d = c;
      b ? dg(d, "hidden", b) : d.removeAttribute("aria-hidden")
    }
  }
  c = a.f;
  (d = !b) ? dg(c, "hidden", d) : c.removeAttribute("aria-hidden")
}
function Ag(a, b) {
  a.D && Q(a.D, b);
  a.N && Q(a.N, b);
  Q(a.h(), b);
  Q(a.Z, b)
}
m.qc = function() {
  this.dispatchEvent("show")
};
m.pc = function() {
  Ag(this, !1);
  this.dispatchEvent("hide")
};
m.focus = function() {
  this.Zd()
};
m.sd = function() {
  this.D && Q(this.D, !1);
  this.N && Q(this.N, !1);
  var a = A(this.m()), b = Bb(Cb(a) || window || window), c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)), a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
  this.D && (Q(this.D, !0), Ve(this.D, c, a));
  this.N && (Q(this.N, !0), Ve(this.N, c, a))
};
m.Hb = function() {
  var a = A(this.m()), b = Cb(a) || window;
  if("fixed" == Se(this.h(), "position")) {
    var c = a = 0
  }else {
    c = Rb(this.m()), a = c.x, c = c.y
  }
  var d = We(this.h()), b = Bb(b || window), a = Math.max(a + b.width / 2 - d.width / 2, 0), c = Math.max(c + b.height / 2 - d.height / 2, 0);
  Te(this.h(), a, c);
  Te(this.Z, a, c)
};
m.Zf = function(a) {
  this.Mc ? this.we() : a.target == this.Z && hd(this.Zd, 0, this)
};
m.Zd = function() {
  try {
    v && A(this.m()).body.focus(), this.h().focus()
  }catch(a) {
  }
};
m.o = function() {
  yc(this.hb);
  this.hb = null;
  yc(this.gb);
  this.gb = null;
  yc(this.sb);
  this.sb = null;
  yc(this.rb);
  this.rb = null;
  wg.c.o.call(this)
};
function Z(a, b, c) {
  wg.call(this, b, c);
  this.H = a || "modal-dialog";
  this.v = $($(new Bg, Cg, !0), Dg, !1, !0)
}
s(Z, wg);
m = Z.prototype;
m.tf = !0;
m.fd = !0;
m.ke = !0;
m.Ud = !0;
m.Rb = 0.5;
m.Cc = "";
m.Xa = "";
m.xa = null;
m.bc = !1;
m.u = null;
m.fa = null;
m.Bc = null;
m.ea = null;
m.X = null;
m.s = null;
m.se = "dialog";
m.Bb = l("H");
function Eg(a, b) {
  a.Cc = b;
  a.fa && Lb(a.fa, b)
}
function Fg(a, b) {
  a.Xa = b;
  a.X && (a.X.innerHTML = b)
}
function Gg(a) {
  a.h() || a.ca();
  return a.ea
}
m.ic = function() {
  this.h() || this.ca();
  return Z.c.ic.call(this)
};
function Hg(a, b) {
  a.Rb = b;
  if(a.h()) {
    var c = a.ic();
    c && Ye(c, a.Rb)
  }
}
function Ig(a) {
  a.Ud = !1;
  Jg(a, !1)
}
function Jg(a, b) {
  var c = ua(a.H + "-title-draggable").split(" ");
  a.h() && (b ? ig(a.u, c) : kg(a.u, c));
  b && !a.xa ? (a.xa = new lg(a.h(), a.u), ig(a.u, c), E(a.xa, "start", a.kg, !1, a)) : !b && a.xa && (a.xa.a(), a.xa = null)
}
m.r = function() {
  Z.c.r.call(this);
  var a = this.h(), b = this.m();
  this.u = b.r("div", {className:this.H + "-title", id:ef(this)}, this.fa = b.r("span", this.H + "-title-text", this.Cc), this.ea = b.r("span", this.H + "-title-close"));
  Ib(a, this.u, this.X = b.r("div", this.H + "-content"), this.s = b.r("div", this.H + "-buttons"));
  this.Bc = this.u.id;
  (b = this.se) ? a.setAttribute("role", b) : a.removeAttribute("role");
  dg(a, "labelledby", this.Bc || "");
  this.Xa && (this.X.innerHTML = this.Xa);
  Q(this.ea, this.fd);
  this.v && (a = this.v, a.f = this.s, a.ca());
  Q(this.s, !!this.v);
  Hg(this, this.Rb)
};
m.xb = function(a) {
  Z.c.xb.call(this, a);
  a = this.h();
  var b = this.H + "-content";
  (this.X = yb(null, b, a)[0]) ? this.Xa = this.X.innerHTML : (this.X = this.m().r("div", b), this.Xa && (this.X.innerHTML = this.Xa), a.appendChild(this.X));
  var b = this.H + "-title", c = this.H + "-title-text", d = this.H + "-title-close";
  (this.u = yb(null, b, a)[0]) ? (this.fa = yb(null, c, this.u)[0], this.ea = yb(null, d, this.u)[0], this.u.id || (this.u.id = ef(this))) : (this.u = this.m().r("div", {className:b, id:ef(this)}), a.insertBefore(this.u, this.X));
  this.Bc = this.u.id;
  this.fa ? this.Cc = Ob(this.fa) : (this.fa = this.m().r("span", c, this.Cc), this.u.appendChild(this.fa));
  dg(a, "labelledby", this.Bc || "");
  this.ea || (this.ea = this.m().r("span", d), this.u.appendChild(this.ea));
  Q(this.ea, this.fd);
  b = this.H + "-buttons";
  (this.s = yb(null, b, a)[0]) ? (this.v = new Bg(this.m()), this.v.Za(this.s)) : (this.s = this.m().r("div", b), a.appendChild(this.s), this.v && (a = this.v, a.f = this.s, a.ca()), Q(this.s, !!this.v));
  Hg(this, this.Rb)
};
m.la = function() {
  Z.c.la.call(this);
  this.ma().t(this.h(), "keydown", this.le).t(this.h(), "keypress", this.le);
  this.ma().t(this.s, "click", this.Yf);
  Jg(this, this.Ud);
  this.ma().t(this.ea, "click", this.bg);
  var a = this.h(), b = this.se;
  b ? a.setAttribute("role", b) : a.removeAttribute("role");
  "" !== this.fa.id && dg(a, "labelledby", this.fa.id);
  this.ke || (this.ke = !1, this.T && (a = this.m(), b = this.ic(), a.removeNode(this.D), a.removeNode(b)))
};
m.La = function() {
  this.nb && this.L(!1);
  Jg(this, !1);
  Z.c.La.call(this)
};
m.L = function(a) {
  a != this.nb && (this.T || this.ca(), Z.c.L.call(this, a))
};
m.qc = function() {
  Z.c.qc.call(this);
  this.dispatchEvent(Kg)
};
m.pc = function() {
  Z.c.pc.call(this);
  this.dispatchEvent(Lg);
  this.bc && this.a()
};
m.focus = function() {
  Z.c.focus.call(this);
  if(this.v) {
    var a = this.v.$b;
    if(a) {
      for(var b = A(this.m()), c = this.s.getElementsByTagName("button"), d = 0, f;f = c[d];d++) {
        if(f.name == a && !f.disabled) {
          try {
            if(x || Ya) {
              var g = b.createElement("input");
              g.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;";
              this.h().appendChild(g);
              g.focus();
              this.h().removeChild(g)
            }
            f.focus()
          }catch(h) {
          }
          break
        }
      }
    }
  }
};
m.kg = function() {
  var a = A(this.m()), b = Bb(Cb(a) || window || window), c = Math.max(a.body.scrollWidth, b.width), a = Math.max(a.body.scrollHeight, b.height), d = We(this.h());
  "fixed" == Se(this.h(), "position") ? (b = new Me(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)), this.xa.mc = b || new Me(NaN, NaN, NaN, NaN)) : this.xa.mc = new Me(0, 0, c - d.width, a - d.height) || new Me(NaN, NaN, NaN, NaN)
};
m.bg = function() {
  if(this.fd) {
    var a = this.v, b = a && a.Oc;
    b ? (a = a.get(b), this.dispatchEvent(new Mg(b, a)) && this.L(!1)) : this.L(!1)
  }
};
m.o = function() {
  this.s = this.ea = null;
  Z.c.o.call(this)
};
function Ng(a) {
  a.v = null;
  if(a.s) {
    if(a.v) {
      var b = a.v;
      b.f = a.s;
      b.ca()
    }else {
      a.s.innerHTML = ""
    }
    Q(a.s, !!a.v)
  }
}
m.Yf = function(a) {
  a: {
    for(a = a.target;null != a && a != this.s;) {
      if("BUTTON" == a.tagName) {
        break a
      }
      a = a.parentNode
    }
    a = null
  }
  if(a && !a.disabled) {
    a = a.name;
    var b = this.v.get(a);
    this.dispatchEvent(new Mg(a, b)) && this.L(!1)
  }
};
m.le = function(a) {
  var b = !1, c = !1, d = this.v, f = a.target;
  if("keydown" == a.type) {
    if(this.tf && 27 == a.keyCode) {
      var g = d && d.Oc, f = "SELECT" == f.tagName && !f.disabled;
      g && !f ? (c = !0, b = d.get(g), b = this.dispatchEvent(new Mg(g, b))) : f || (b = !0)
    }else {
      if(9 == a.keyCode && a.shiftKey && f == this.h()) {
        this.Mc = !0;
        try {
          this.Z.focus()
        }catch(h) {
        }
        hd(this.we, 0, this)
      }
    }
  }else {
    if(13 == a.keyCode) {
      if("BUTTON" == f.tagName && !f.disabled) {
        g = f.name
      }else {
        if(d) {
          var k = d.$b, F;
          if(F = k) {
            a: {
              F = d.f.getElementsByTagName("BUTTON");
              for(var sa = 0, W;W = F[sa];sa++) {
                if(W.name == k || W.id == k) {
                  F = W;
                  break a
                }
              }
              F = null
            }
          }
          f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName || "A" == f.tagName) && !f.disabled;
          !F || (F.disabled || f) || (g = k)
        }
      }
      g && d && (c = !0, b = this.dispatchEvent(new Mg(g, String(d.get(g)))))
    }
  }
  if(b || c) {
    a.stopPropagation(), a.preventDefault()
  }
  b && this.L(!1)
};
function Mg(a, b) {
  this.type = Og;
  this.key = a;
  this.caption = b
}
s(Mg, D);
var Og = "dialogselect", Lg = "afterhide", Kg = "aftershow";
function Bg(a) {
  this.wa = a || vb();
  oc.call(this)
}
s(Bg, oc);
m = Bg.prototype;
m.H = "goog-buttonset";
m.$b = null;
m.f = null;
m.Oc = null;
m.set = function(a, b, c, d) {
  oc.prototype.set.call(this, a, b);
  c && (this.$b = a);
  d && (this.Oc = a);
  return this
};
function $(a, b, c, d) {
  return a.set(b.key, b.caption, c, d)
}
m.ca = function() {
  if(this.f) {
    this.f.innerHTML = "";
    var a = vb(this.f);
    nc(this, function(b, c) {
      var d = a.r("button", {name:c}, b);
      c == this.$b && (d.className = this.H + "-default");
      this.f.appendChild(d)
    }, this)
  }
};
m.Za = function(a) {
  if(a && 1 == a.nodeType) {
    this.f = a;
    a = this.f.getElementsByTagName("button");
    for(var b = 0, c, d, f;c = a[b];b++) {
      if(d = c.name || c.id, f = Ob(c) || c.value, d) {
        var g = 0 == b;
        this.set(d, f, g, c.name == Pg);
        g && hg(c, this.H + "-default")
      }
    }
  }
};
m.h = l("f");
m.m = l("wa");
var Pg = "cancel", Qg = oa("OK"), Rg = oa("Cancel"), Sg = oa("Yes"), Tg = oa("No"), Ug = oa("Save"), Vg = oa("Continue"), Cg = {key:"ok", caption:Qg}, Dg = {key:Pg, caption:Rg}, Wg = {key:"yes", caption:Sg}, Xg = {key:"no", caption:Tg}, Yg = {key:"save", caption:Ug}, Zg = {key:"continue", caption:Vg};
"undefined" != typeof document && ($(new Bg, Cg, !0, !0), $($(new Bg, Cg, !0), Dg, !1, !0), $($(new Bg, Wg, !0), Xg, !1, !0), $($($(new Bg, Wg), Xg, !0), Dg, !1, !0), $($($(new Bg, Zg), Yg), Dg, !0, !0));
function $g(a) {
  this.Ga = Cb();
  this.Fa = a.width;
  this.Ea = a.height;
  this.Jc = a.adTagUrl;
  this.od = a.message || "Your content will be resumed after this message";
  this.Ba = N("adaptv.vpaid.InterstitialAd")
}
s($g, vc);
$g.prototype.Za = function(a, b) {
  E(a, "click", function(c) {
    this.tg = b || a.getAttribute("href");
    c.preventDefault();
    ah(this)
  }, !1, this)
};
function bh(a) {
  var b = a.Fa / (a.Ga.innerWidth - 30), c = a.Ea / (a.Ga.innerHeight - 30);
  if(1 < b || 1 < c) {
    b = b > c ? b : c, a.Fa /= b, a.Ea /= b, zb(a.mb, {width:a.Fa, height:a.Ea})
  }
}
function ah(a) {
  a.I = new Z("adaptv-interstitial", !0);
  Fg(a.I, ac({height:a.Ea, width:a.Fa, message:a.od}));
  Ng(a.I);
  Ig(a.I);
  a.I.bc = !1;
  Eg(a.I, a.od);
  a.I.L(!0);
  a.mb = p("adaptv-video") ? document.getElementById("adaptv-video") : "adaptv-video";
  a.sa = new V;
  E(a.sa, ["AdLoaded", "AdVideoStart", "AdError", "AdStopped"], a.B, !1, a);
  E(a.Ga, ["resize", "scroll"], function() {
    bh(this);
    this.I.Hb()
  }, !1, a);
  a.mb.addEventListener("webkitendfullscreen", q(function() {
    this.sa.stopAd()
  }, a), !0);
  E(Gg(a.I), "click", function() {
    this.sa.stopAd()
  }, !0, a);
  a.initAd();
  bh(a);
  a.mb.play();
  a.I.L(!1)
}
$g.prototype.initAd = function() {
  this.sa.initAd(this.Fa, this.Ea, -1, -1, {adTagUrl:this.Jc}, {maxWrapperLevels:5, videoSlot:this.mb})
};
$g.prototype.B = function(a) {
  this.Ba.info("InterstitialAd on " + a.type + ".");
  switch(a.type) {
    case "AdLoaded":
      this.sa.startAd();
      break;
    case "AdVideoStart":
      this.I.L(!0);
      this.I.bc = !0;
      this.mb.play();
      break;
    case "AdError":
      this.sa.stopAd();
      break;
    case "AdStopped":
      this.I.L(!1), this.Ga.location = this.tg
  }
};
function ch(a) {
  this.Fa = a.width;
  this.Ea = a.height;
  this.Jc = a.adTagUrl;
  this.od = a.message || "Your content will be resumed after this message";
  this.Vf = a.bannerOffset || 30;
  this.Ga = Cb();
  this.of = document.body;
  this.Ba = N("adaptv.vpaid.AutoBannerAd")
}
s(ch, $g);
ch.prototype.Za = function() {
  ah(this)
};
ch.prototype.initAd = function() {
  this.Zc = B(bc);
  Jb(this.of, this.Zc);
  this.sa.initAd(this.Fa, this.Ea, -1, -1, {adTagUrl:this.Jc}, {maxWrapperLevels:5, videoSlot:this.mb, companionSlots:[{id:"adaptv-companion", width:300, height:60}]})
};
ch.prototype.B = function(a) {
  this.Ba.info("AutoBannerAd on " + a.type + ".");
  switch(a.type) {
    case "AdLoaded":
      this.sa.startAd();
      break;
    case "AdVideoStart":
      this.I.L(!0);
      this.I.bc = !0;
      break;
    case "AdError":
      this.sa.stopAd();
      break;
    case "AdStopped":
      this.I.L(!1), Q(this.Zc, !0), this.Hb(), E(this.Ga, "resize", function() {
        this.Hb()
      }, !0, this), ad(this.Ga, "scroll")
  }
};
ch.prototype.Hb = function() {
  this.Zc.style.top = this.Ga.innerHeight - this.Vf - 60 + "px"
};
function dh() {
  this.ue = ma()
}
var eh = new dh;
dh.prototype.set = aa("ue");
dh.prototype.reset = function() {
  this.set(ma())
};
dh.prototype.get = l("ue");
function fh(a) {
  this.fg = a || "";
  this.sg = eh
}
m = fh.prototype;
m.lf = !0;
m.ze = !0;
m.ng = !0;
m.lg = !0;
m.Ae = !1;
m.og = !1;
function gh(a) {
  return 10 > a ? "0" + a : String(a)
}
function hh(a, b) {
  var c = (a.Ge - b) / 1E3, d = c.toFixed(3), f = 0;
  if(1 > c) {
    f = 2
  }else {
    for(;100 > c;) {
      f++, c *= 10
    }
  }
  for(;0 < f--;) {
    d = " " + d
  }
  return d
}
function ih(a) {
  fh.call(this, a)
}
s(ih, fh);
function jh() {
  this.hg = q(this.jf, this);
  this.bd = new ih;
  this.bd.ze = !1;
  this.he = this.bd.Ae = !1;
  this.ie = "";
  this.vf = {}
}
function Lf() {
  var a = new jh;
  !0 != a.he && (me(), le.Kc(a.hg), a.he = !0)
}
jh.prototype.jf = function(a) {
  if(!this.vf[a.je]) {
    var b;
    b = this.bd;
    var c = [];
    c.push(b.fg, " ");
    if(b.ze) {
      var d = new Date(a.Ge);
      c.push("[", gh(d.getFullYear() - 2E3) + gh(d.getMonth() + 1) + gh(d.getDate()) + " " + gh(d.getHours()) + ":" + gh(d.getMinutes()) + ":" + gh(d.getSeconds()) + "." + gh(Math.floor(d.getMilliseconds() / 10)), "] ")
    }
    b.ng && c.push("[", hh(a, b.sg.get()), "s] ");
    b.lg && c.push("[", a.je, "] ");
    b.og && c.push("[", a.Qa.name, "] ");
    c.push(a.oc);
    b.Ae && a.Yc && c.push("\n", a.Xc);
    b.lf && c.push("\n");
    b = c.join("");
    if(c = kh) {
      switch(a.Qa) {
        case ce:
          lh(c, "info", b);
          break;
        case de:
          lh(c, "error", b);
          break;
        case ee:
          lh(c, "warn", b);
          break;
        default:
          lh(c, "debug", b)
      }
    }else {
      window.opera ? window.opera.postError(b) : this.ie += b
    }
  }
};
var kh = window.console;
function lh(a, b, c) {
  if(a[b]) {
    a[b](c)
  }else {
    a.log(c)
  }
}
;r("__adaptv__.debug.configure", function(a, b) {
  N(a).vd(b || ie);
  Lf()
});
r("__adaptv__.debug.log", function(a) {
  N("adaptv.page").info(a)
});
r("__adaptv__.vpaid.VPAIDEvent", Od);
r("__adaptv__.vpaid.constructAdTag", function(a, b, c) {
  var d = null;
  if(a && a.length) {
    var d = xd(a), f;
    for(f in c) {
      b["ctx." + f] = c[f]
    }
    b.pet = b.pet || "preroll";
    b.creativeType = b.creativeType || "vast_video";
    b.cb = b.cb || Math.floor(100 * Math.random());
    b["a.sdk"] = "adaptv";
    b["a.sdkType"] = "js";
    b["a.vpaid"] = 0;
    d.C.extend(b)
  }
  return d ? d.toString() : d
});
r("__adaptv__.vpaid.VPAIDAd", V);
r("__adaptv__.vpaid.VPAIDAd.prototype.handshakeVersion", V.prototype.handshakeVersion);
r("__adaptv__.vpaid.VPAIDAd.prototype.subscribe", V.prototype.subscribe);
r("__adaptv__.vpaid.VPAIDAd.prototype.unsubscribe", V.prototype.unsubscribe);
r("__adaptv__.vpaid.VPAIDAd.prototype.initAd", V.prototype.initAd);
r("__adaptv__.vpaid.VPAIDAd.prototype.startAd", V.prototype.startAd);
r("__adaptv__.vpaid.VPAIDAd.prototype.pauseAd", V.prototype.pauseAd);
r("__adaptv__.vpaid.VPAIDAd.prototype.resumeAd", V.prototype.resumeAd);
r("__adaptv__.vpaid.VPAIDAd.prototype.skipAd", V.prototype.skipAd);
r("__adaptv__.vpaid.VPAIDAd.prototype.stopAd", V.prototype.stopAd);
r("__adaptv__.vpaid.VPAIDAd.prototype.resizeAd", V.prototype.resizeAd);
r("__adaptv__.vpaid.VPAIDAd.prototype.expandAd", V.prototype.expandAd);
r("__adaptv__.vpaid.VPAIDAd.prototype.collapseAd", V.prototype.collapseAd);
r("__adaptv__.vpaid.VPAIDAd.prototype.getAdLinear", V.prototype.yf);
r("__adaptv__.vpaid.VPAIDAd.prototype.getAdWidth", V.prototype.Af);
r("__adaptv__.vpaid.VPAIDAd.prototype.getAdHeight", V.prototype.wf);
r("__adaptv__.vpaid.VPAIDAd.prototype.getAdExpanded", V.prototype.getAdExpanded);
r("__adaptv__.vpaid.VPAIDAd.prototype.getAdSkippableState", V.prototype.zf);
r("__adaptv__.vpaid.VPAIDAd.prototype.getAdRemainingTime", V.prototype.getAdRemainingTime);
r("__adaptv__.vpaid.VPAIDAd.prototype.getAdDuration", V.prototype.getAdDuration);
r("__adaptv__.vpaid.VPAIDAd.prototype.getAdCompanions", V.prototype.getAdCompanions);
r("__adaptv__.vpaid.VPAIDAd.prototype.getAdIcons", V.prototype.xf);
r("__adaptv__.vpaid.VPAIDAd.prototype.getAdVolume", V.prototype.getAdVolume);
r("__adaptv__.vpaid.VPAIDAd.prototype.setAdVolume", V.prototype.setAdVolume);
r("getVPAIDAd", V.prototype.ed);
r("__adaptv__.vpaid.InterstitialAd", $g);
r("__adaptv__.vpaid.InterstitialAd.prototype.decorate", $g.prototype.Za);
window.adaptv_autobanner_adTagUrl && (new ch({width:window.adaptv_autobanner_width || 600, height:window.adaptv_autobanner_height || 450, adTagUrl:window.adaptv_autobanner_adTagUrl, bannerOffset:window.adaptv_autobanner_offset, message:window.adaptv_autobanner_message})).Za();
})();