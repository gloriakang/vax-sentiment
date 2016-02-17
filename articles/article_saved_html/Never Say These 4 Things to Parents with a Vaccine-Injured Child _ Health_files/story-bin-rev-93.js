var adTags;
var httpObject = null;
var animate = null;
var startLoc = 0;
var stopLoc = 900;
var speed = 50;
var _gaq = _gaq || [];
var yahoo_profile_cached;
var yahoo_email_list_cached;
var google_profile_cached;
var google_email_list_cached;
var _sf_async_config;
var story_description, story_thumbnail;
var blogpath = '';
var url_extract = window.location.pathname.split( '/' );
if (url_extract.length == 6)
	blogpath = url_extract[1];

/*begin comment reply*/
addComment={moveForm:function(d,f,i,c){var m=this,a,h=m.I(d),b=m.I(i),l=m.I("cancel-comment-reply-link"),j=m.I("comment_parent"),k=m.I("comment_post_ID");if(!h||!b||!l||!j){return}m.respondId=i;c=c||false;if(!m.I("wp-temp-form-div")){a=document.createElement("div");a.id="wp-temp-form-div";a.style.display="none";b.parentNode.insertBefore(a,b)}h.parentNode.insertBefore(b,h.nextSibling);if(k&&c){k.value=c}j.value=f;l.style.display="";l.onclick=function(){var n=addComment,e=n.I("wp-temp-form-div"),o=n.I(n.respondId);if(!e||!o){return}n.I("comment_parent").value="0";e.parentNode.insertBefore(o,e);e.parentNode.removeChild(e);this.style.display="none";this.onclick=null;return false};try{m.I("comment").focus()}catch(g){}return false},I:function(a){return document.getElementById(a)}};
/*end comment reply*/
var Spry;
if (!Spry) {
    Spry = {};
}
if (!Spry.Widget) {
    Spry.Widget = {};
}
Spry.Widget.BrowserSniff = function () {
    var b = navigator.appName.toString();
    var up = navigator.platform.toString();
    var ua = navigator.userAgent.toString();
    this.mozilla = this.ie = this.opera = this.safari = false;
    var re_opera = /Opera.([0-9\.]*)/i;
    var re_msie = /MSIE.([0-9\.]*)/i;
    var re_gecko = /gecko/i;
    var re_safari = /(applewebkit|safari)\/([\d\.]*)/i;
    var r = false;
    if ((r = ua.match(re_opera))) {
        this.opera = true;
        this.version = parseFloat(r[1]);
    } else if ((r = ua.match(re_msie))) {
        this.ie = true;
        this.version = parseFloat(r[1]);
    } else if ((r = ua.match(re_safari))) {
        this.safari = true;
        if (parseFloat(r[2]) < 420) {
            this.version = 2;
        } else {
            this.version = 3;
        }
    } else if (ua.match(re_gecko)) {
        var re_gecko_version = /rv:\s*([0-9\.]+)/i;
        r = ua.match(re_gecko_version);
        this.mozilla = true;
        this.version = parseFloat(r[1]);
    }
    this.windows = this.mac = this.linux = false;
    this.Platform = ua.match(/windows/i) ? "windows" : (ua.match(/linux/i) ? "linux" : (ua.match(/mac/i) ? "mac" : ua.match(/unix/i) ? "unix" : "unknown"));
    this[this.Platform] = true;
    this.v = this.version;
    if (this.safari && this.mac && this.mozilla) {
        this.mozilla = false;
    }
};
Spry.is = new Spry.Widget.BrowserSniff();
Spry.Widget.Tooltip = function (tooltip_element, trigger_selector, options) {
    options = Spry.Widget.Utils.firstValid(options, {});
    this.init(trigger_selector, tooltip_element, options);
    if (Spry.Widget.Tooltip.onloadDidFire) {
        this.attachBehaviors();
    }
    Spry.Widget.Tooltip.loadQueue.push(this);
};
Spry.Widget.Tooltip.prototype.init = function (trigger_element, tooltip_element, options) {
    var Utils = Spry.Widget.Utils;
    this.triggerElements = Utils.getElementsByClassName(trigger_element);
    this.tooltipElement = Utils.getElement(tooltip_element);
    options.showDelay = parseInt(Utils.firstValid(options.showDelay, 0), 10);
    options.hideDelay = parseInt(Utils.firstValid(options.hideDelay, 0), 10);
    if (typeof this.triggerElements == 'undefined' || this.triggerElements.length <= 0) {
        this.showError('The element(s) "' + trigger_element + '" do not exist in the page');
        return false;
    }
    if (typeof this.tooltipElement == 'undefined' || !this.tooltipElement) {
        this.showError('The element "' + tooltip_element + '" do not exists in the page');
        return false;
    }
    this.listenersAttached = false;
    this.hoverClass = "";
    this.followMouse = false;
    this.offsetX = 15;
    this.offsetY = 15;
    this.closeOnTooltipLeave = false;
    this.useEffect = false;
    Utils.setOptions(this, options);
    this.animator = null;
    for (var i = 0; i < this.triggerElements.length; i++) {
        if (!this.triggerElements[i].className) {
            this.triggerElements[i].className = '';
        }
    }
    if (this.useEffect) {
        switch (this.useEffect.toString().toLowerCase()) {
        case 'blind':
            this.useEffect = 'Blind';
            break;
        case 'fade':
            this.useEffect = 'Fade';
            break;
        default:
            this.useEffect = false;
        }
    }
    this.visibleTooltip = false;
    this.tooltipElement.offsetHeight;
    if (Spry.Widget.Utils.getStyleProperty(this.tooltipElement, 'display') != 'none') {
        this.tooltipElement.style.display = 'none';
    }
    if (typeof this.offsetX != 'numeric') {
        this.offsetX = parseInt(this.offsetX, 10);
    }
    if (isNaN(this.offsetX)) {
        this.offsetX = 0;
    }
    if (typeof this.offsetY != 'numeric') {
        this.offsetY = parseInt(this.offsetY, 10);
    }
    if (isNaN(this.offsetY)) {
        this.offsetY = 0;
    }
    this.tooltipElement.style.position = 'absolute';
    this.tooltipElement.style.top = '0px';
    this.tooltipElement.style.left = '0px';
};
Spry.Widget.Tooltip.onloadDidFire = false;
Spry.Widget.Tooltip.loadQueue = [];
Spry.Widget.Tooltip.addLoadListener = function (handler) {
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('load', handler, false);
    } else if (typeof document.addEventListener != 'undefined') {
        document.addEventListener('load', handler, false);
    } else if (typeof window.attachEvent != 'undefined') {
        window.attachEvent('onload', handler);
    }
};
Spry.Widget.Tooltip.processLoadQueue = function (handler) {
    Spry.Widget.Tooltip.onloadDidFire = true;
    var q = Spry.Widget.Tooltip.loadQueue;
    var qlen = q.length;
    for (var i = 0; i < qlen; i++) {
        if (!q[i].listenersAttached) {
            q[i].attachBehaviors();
        }
    }
};
Spry.Widget.Tooltip.addLoadListener(Spry.Widget.Tooltip.processLoadQueue);
Spry.Widget.Tooltip.prototype.addClassName = function (ele, className) {
    if (!ele || !className) {
        return;
    }
    if (ele.className.indexOf(className) == -1) {
        ele.className += (ele.className ? " " : "") + className;
    }
};
Spry.Widget.Tooltip.prototype.removeClassName = function (ele, className) {
    if (!ele || !className) {
        return;
    }
    ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};
Spry.Widget.Tooltip.prototype.showTooltip = function () {
    if (!this.visibleTooltip) {
        this.tooltipElement.style.visibility = 'hidden';
        this.tooltipElement.style.zIndex = '9999';
        this.tooltipElement.style.display = 'block';
    }
    Spry.Widget.Utils.putElementAt(this.tooltipElement, this.pos, {
        x: this.offsetX,
        y: this.offsetY
    }, true);
    if (Spry.is.ie && Spry.is.version == '6') {
        this.createIframeLayer(this.tooltipElement);
    }
    if (!this.visibleTooltip) {
        if (this.useEffect) {
            if (typeof this.showEffect == 'undefined') {
                this.showEffect = new Spry.Widget.Tooltip[this.useEffect](this.tooltipElement, {
                    from: 0,
                    to: 1
                });
            }
            this.showEffect.start();
        } else {
            this.tooltipElement.style.visibility = 'visible';
        }
    }
    this.visibleTooltip = true;
};
Spry.Widget.Tooltip.prototype.hideTooltip = function (quick) {
    if (this.useEffect && !quick) {
        if (typeof this.hideEffect == 'undefined') {
            this.hideEffect = new Spry.Widget.Tooltip[this.useEffect](this.tooltipElement, {
                from: 1,
                to: 0
            });
        }
        this.hideEffect.start();
    } else {
        if (typeof this.showEffect != 'undefined') {
            this.showEffect.stop();
        }
        this.tooltipElement.style.display = 'none';
    }
    if (Spry.is.ie && Spry.is.version == '6') {
        this.removeIframeLayer(this.tooltipElement);
    }
    if (this.hoverClass && !this.hideTimer) {
        for (var i = 0; i < this.triggerElements.length; i++) {
            this.removeClassName(this.triggerElements[i], this.hoverClass);
        }
    }
    this.visibleTooltip = false;
};
Spry.Widget.Tooltip.prototype.displayTooltip = function (show) {
    var self;
    if (this.tooltipElement) {
        if (this.hoverClass) {
            for (var i = 0; i < this.triggerElements.length; i++) {
                this.removeClassName(this.triggerElements[i], this.hoverClass);
            }
        }
        if (show) {
            if (this.hideTimer) {
                clearInterval(this.hideTimer);
                delete(this.hideTimer);
            }
            if (this.hoverClass) {
                if (typeof this.triggerHighlight != 'undefined') {
                    this.addClassName(this.triggerHighlight, this.hoverClass);
                }
            }
            self = this;
            this.showTimer = setTimeout(function () {
                self.showTooltip();
            }, this.showDelay);
        } else {
            if (this.showTimer) {
                clearInterval(this.showTimer);
                delete(this.showTimer);
            }
            self = this;
            this.hideTimer = setTimeout(function () {
                self.hideTooltip();
            }, this.hideDelay);
        }
    }
    this.refreshTimeout();
};
Spry.Widget.Tooltip.prototype.onMouseOverTrigger = function (e) {
    var target = '';
    if (Spry.is.ie) {
        target = e.srcElement;
    } else {
        target = e.target;
    }
    var contains = Spry.Widget.Utils.contains;
    for (var i = 0; i < this.triggerElements.length; i++) {
        if (contains(this.triggerElements[i], target)) {
            target = this.triggerElements[i];
            break;
        }
    }
    if (i == this.triggerElements.length) {
        return;
    }
    if (this.visibleTooltip && this.triggerHighlight && this.triggerHighlight == target) {
        if (this.hideTimer) {
            clearInterval(this.hideTimer);
            delete(this.hideTimer);
        }
        if (this.hoverClass) {
            if (typeof this.triggerHighlight != 'undefined') {
                this.addClassName(this.triggerHighlight, this.hoverClass);
            }
        }
        return;
    }
    var pos = Spry.Widget.Utils.getAbsoluteMousePosition(e);
    this.pos = {
        x: pos.x + this.offsetX,
        y: pos.y + this.offsetY
    };
    this.triggerHighlight = target;
    Spry.Widget.Tooltip.closeAll();
    this.displayTooltip(true);
};
Spry.Widget.Tooltip.prototype.onMouseMoveTrigger = function (e) {
    var pos = Spry.Widget.Utils.getAbsoluteMousePosition(e);
    this.pos = {
        x: pos.x + this.offsetX,
        y: pos.y + this.offsetY
    };
    if (this.visibleTooltip) {
        this.showTooltip();
    }
};
Spry.Widget.Tooltip.prototype.onMouseOutTrigger = function (e) {
    var target = '';
    if (Spry.is.ie) {
        target = e.toElement;
    } else {
        target = e.relatedTarget;
    }
    var contains = Spry.Widget.Utils.contains;
    for (var i = 0; i < this.triggerElements.length; i++) {
        if (contains(this.triggerElements[i], target)) {
            return;
        }
    }
    this.displayTooltip(false);
};
Spry.Widget.Tooltip.prototype.onMouseOutTooltip = function (e) {
    var target = '';
    if (Spry.is.ie) {
        target = e.toElement;
    } else {
        target = e.relatedTarget;
    }
    var contains = Spry.Widget.Utils.contains;
    if (contains(this.tooltipElement, target)) {
        return;
    }
    this.displayTooltip(false);
};
Spry.Widget.Tooltip.prototype.onMouseOverTooltip = function (e) {
    if (this.hideTimer) {
        clearInterval(this.hideTimer);
        delete(this.hideTimer);
    }
    if (this.hoverClass) {
        if (typeof this.triggerHighlight != 'undefined') {
            this.addClassName(this.triggerHighlight, this.hoverClass);
        }
    }
};
Spry.Widget.Tooltip.prototype.refreshTimeout = function () {
    if (Spry.Widget.Tooltip.refreshTimeout !== null) {
        clearTimeout(Spry.Widget.Tooltip.refreshTimeout);
        Spry.Widget.Tooltip.refreshTimeout = null;
    }
    Spry.Widget.Tooltip.refreshTimeout = setTimeout(Spry.Widget.Tooltip.refreshAll, 100);
};
Spry.Widget.Tooltip.prototype.destroy = function () {
    for (var k in this) {
        try {
            if (typeof this.k == 'object' && typeof this.k.destroy == 'function') {
                this.k.destroy();
            }
            delete this.k;
        } catch (err) {}
    }
};
Spry.Widget.Tooltip.prototype.checkDestroyed = function () {
    if (!this.tooltipElement || this.tooltipElement.parentNode === null) {
        return true;
    }
    return false;
};
Spry.Widget.Tooltip.prototype.attachBehaviors = function () {
    var self = this;
    var ev = Spry.Widget.Utils.addEventListener;
    for (var i = 0; i < this.triggerElements.length; i++) {
        ev(this.triggerElements[i], 'mouseover', function (e) {
            self.onMouseOverTrigger(e || event);
            return true;
        }, false);
        ev(this.triggerElements[i], 'mouseout', function (e) {
            self.onMouseOutTrigger(e || event);
            return true;
        }, false);
        if (this.followMouse) {
            ev(this.triggerElements[i], 'mousemove', function (e) {
                self.onMouseMoveTrigger(e || event);
                return true;
            }, false);
        }
    }
    if (this.closeOnTooltipLeave) {
        ev(this.tooltipElement, 'mouseover', function (e) {
            self.onMouseOverTooltip(e || event);
            return true;
        }, false);
        ev(this.tooltipElement, 'mouseout', function (e) {
            self.onMouseOutTooltip(e || event);
            return true;
        }, false);
    }
    this.listenersAttached = true;
};
Spry.Widget.Tooltip.prototype.createIframeLayer = function (tooltip) {
    if (typeof this.iframeLayer == 'undefined') {
        var layer = document.createElement('iframe');
        layer.tabIndex = '-1';
        layer.src = 'javascript:"";';
        layer.scrolling = 'no';
        layer.frameBorder = '0';
        layer.className = 'iframeTooltip';
        tooltip.parentNode.appendChild(layer);
        this.iframeLayer = layer;
    }
    this.iframeLayer.style.left = tooltip.offsetLeft + 'px';
    this.iframeLayer.style.top = tooltip.offsetTop + 'px';
    this.iframeLayer.style.width = tooltip.offsetWidth + 'px';
    this.iframeLayer.style.height = tooltip.offsetHeight + 'px';
    this.iframeLayer.style.display = 'block';
};
Spry.Widget.Tooltip.prototype.removeIframeLayer = function (tooltip) {
    if (this.iframeLayer) {
        this.iframeLayer.style.display = 'none';
    }
};
Spry.Widget.Tooltip.prototype.showError = function (msg) {
    alert('Spry.Widget.Tooltip ERR: ' + msg);
};
Spry.Widget.Tooltip.refreshAll = function () {
    var q = Spry.Widget.Tooltip.loadQueue;
    var qlen = q.length;
    for (var i = 0; i < qlen; i++) {
        if (q[i].checkDestroyed()) {
            q[i].destroy();
            q.splice(i, 1);
            i--;
            qlen = q.length;
        }
    }
};
Spry.Widget.Tooltip.closeAll = function () {
    var q = Spry.Widget.Tooltip.loadQueue;
    var qlen = q.length;
    for (var i = 0; i < qlen; i++) {
        if (q[i].visibleTooltip) {
            q[i].hideTooltip(true);
        }
        if (q[i].showTimer) {
            clearTimeout(q[i].showTimer);
        }
        if (q[i].hideTimer) {
            clearTimeout(q[i].hideTimer);
        }
    }
};
Spry.Widget.Tooltip.Animator = function (element, opts) {
    this.timer = null;
    this.fps = 60;
    this.duration = 600;
    this.startTime = 0;
    this.transition = Spry.Widget.Tooltip.Animator.defaultTransition;
    this.onComplete = null;
    if (typeof element == 'undefined') {
        return;
    }
    this.element = Spry.Widget.Utils.getElement(element);
    Spry.Widget.Utils.setOptions(this, opts, true);
    this.interval = this.duration / this.fps;
};
Spry.Widget.Tooltip.Animator.defaultTransition = function (time, begin, finish, duration) {
    time /= duration;
    return begin + ((2 - time) * time * finish);
};
Spry.Widget.Tooltip.Animator.prototype.start = function () {
    var self = this;
    this.startTime = (new Date()).getTime();
    this.beforeStart();
    this.timer = setInterval(function () {
        self.stepAnimation();
    }, this.interval);
};
Spry.Widget.Tooltip.Animator.prototype.stop = function () {
    if (this.timer) {
        clearTimeout(this.timer);
    }
    this.timer = null;
};
Spry.Widget.Tooltip.Animator.prototype.stepAnimation = function () {};
Spry.Widget.Tooltip.Animator.prototype.beforeStart = function () {};
Spry.Widget.Tooltip.Animator.prototype.destroy = function () {
    for (var k in this) {
        try {
            delete this.k;
        } catch (err) {}
    }
};
Spry.Widget.Tooltip.Fade = function (element, opts) {
    Spry.Widget.Tooltip.Animator.call(this, element, opts);
    if (Spry.is.ie) {
        this.origOpacity = this.element.style.filter;
    } else {
        this.origOpacity = this.element.style.opacity;
    }
};
Spry.Widget.Tooltip.Fade.prototype = new Spry.Widget.Tooltip.Animator();
Spry.Widget.Tooltip.Fade.prototype.constructor = Spry.Widget.Tooltip.Fade;
Spry.Widget.Tooltip.Fade.prototype.stepAnimation = function () {
    var curTime = (new Date()).getTime();
    var elapsedTime = curTime - this.startTime;
    var i, obj;
    if (elapsedTime >= this.duration) {
        this.beforeStop();
        this.stop();
        return;
    }
    var ht = this.transition(elapsedTime, this.from, this.to - this.from, this.duration);
    if (Spry.is.ie) {
        var filter = this.element.style.filter.replace(/alpha\s*\(\s*opacity\s*=\s*[0-9\.]{1,3}\)/, '');
        this.element.style.filter = filter + 'alpha(opacity=' + parseInt(ht * 100, 10) + ')';
    } else {
        this.element.style.opacity = ht;
    }
    this.element.style.visibility = 'visible';
    this.element.style.display = 'block';
};
Spry.Widget.Tooltip.Fade.prototype.beforeStop = function () {
    if (this.from > this.to) {
        this.element.style.display = 'none';
    }
    if (Spry.is.mozilla) {
        this.element.style.filter = this.origOpacity;
    } else {
        this.element.style.opacity = this.origOpacity;
    }
};
Spry.Widget.Tooltip.Blind = function (element, opts) {
    this.from = 0;
    this.to = 100;
    Spry.Widget.Tooltip.Animator.call(this, element, opts);
    this.element.style.visibility = 'hidden';
    this.element.style.display = 'block';
    this.origHeight = parseInt(Spry.Widget.Utils.getStyleProperty(this.element, 'height'), 10);
    if (isNaN(this.origHeight)) {
        this.origHeight = this.element.offsetHeight;
    }
    if (this.to === 0) {
        this.from = this.origHeight;
    } else {
        this.to = this.origHeight;
    }
};
Spry.Widget.Tooltip.Blind.prototype = new Spry.Widget.Tooltip.Animator();
Spry.Widget.Tooltip.Blind.prototype.constructor = Spry.Widget.Tooltip.Blind;
Spry.Widget.Tooltip.Blind.prototype.beforeStart = function () {
    this.origOverflow = Spry.Widget.Utils.getStyleProperty(this.element, 'overflow');
    this.element.style.overflow = 'hidden';
};
Spry.Widget.Tooltip.Blind.prototype.stepAnimation = function () {
    var curTime = (new Date()).getTime();
    var elapsedTime = curTime - this.startTime;
    var i, obj;
    if (elapsedTime >= this.duration) {
        this.beforeStop();
        this.stop();
        return;
    }
    var ht = this.transition(elapsedTime, this.from, this.to - this.from, this.duration);
    this.element.style.height = Math.floor(ht) + 'px';
    this.element.style.visibility = 'visible';
    this.element.style.display = 'block';
};
Spry.Widget.Tooltip.Blind.prototype.beforeStop = function () {
    this.element.style.overflow = this.origOverflow;
    if (this.from > this.to) {
        this.element.style.display = 'none';
    }
    this.element.style.height = this.origHeight + 'px';
};
//////////////////////////////////////////////////////////////////////
//
// Spry.Widget.Util
//
//////////////////////////////////////////////////////////////////////
if (!Spry.Widget.Utils) {
    Spry.Widget.Utils = {};
}
Spry.Widget.Utils.setOptions = function (obj, optionsObj, ignoreUndefinedProps) {
    if (!optionsObj) {
        return;
    }
    for (var optionName in optionsObj) {
        if (ignoreUndefinedProps && optionsObj[optionName] === undefined) {
            continue;
        }
        obj[optionName] = optionsObj[optionName];
    }
};
Spry.Widget.Utils.getElement = function (ele) {
    if (ele && typeof ele == "string") {
        return document.getElementById(ele);
    }
    return ele;
};
Spry.Widget.Utils.getElementsByClassName = function (sel) {
    if (sel.length <= 0) {
        return null;
    }
    var selectors = sel.split(',');
    var el = [];
    for (var i = 0; i < selectors.length; i++) {
        var cs = selectors[i];
        var chunk = cs.split(' ');
        var parents = [];
        parents[0] = [];
        parents[0][0] = document.body;
        for (var j = 0; j < chunk.length; j++) {
            var tokens = Spry.Widget.Utils.getSelectorTokens(chunk[j]);
            for (var k = 0; k < parents[j].length; k++) {
                var childs = parents[j][k].getElementsByTagName('*');
                parents[j + 1] = [];
                for (var l = 0; l < childs.length; l++) {
                    if (Spry.Widget.Utils.hasSelector(childs[l], tokens)) {
                        parents[j + 1].push(childs[l]);
                    }
                }
            }
        }
        if (parents[j]) {
            for (var k = 0; k < parents[j].length; k++) {
                el.push(parents[j][k]);
            }
        }
    }
    return el;
};
Spry.Widget.Utils.firstValid = function () {
    var ret = null;
    var a = Spry.Widget.Utils.firstValid;
    for (var i = 0; i < a.arguments.length; i++) {
        if (typeof (a.arguments[i]) != 'undefined') {
            ret = a.arguments[i];
            break;
        }
    }
    return ret;
};
Spry.Widget.Utils.getSelectorTokens = function (str) {
    str = str.replace(/\./g, ' .');
    str = str.replace(/\#/g, ' #');
    str = str.replace(/^\s+|\s+$/g, "");
    return str.split(' ');
};
Spry.Widget.Utils.hasSelector = function (el, tokens) {
    for (var i = 0; i < tokens.length; i++) {
        switch (tokens[i].charAt(0)) {
        case '.':
            if (!el.className || el.className.indexOf(tokens[i].substr(1)) == -1) {
                return false;
            }
            break;
        case '#':
            if (!el.id || el.id != tokens[i].substr(1)) {
                return false;
            }
            break;
        default:
            if (el.nodeName.toLowerCase != tokens[i]) {
                return false;
            }
            break;
        }
    }
    return true;
};
Spry.Widget.Utils.addEventListener = function (element, eventType, handler, capture) {
    try {
        if (element.addEventListener) {
            element.addEventListener(eventType, handler, capture);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventType, handler);
        }
    } catch (e) {}
};
Spry.Widget.Utils.getStyleProperty = function (element, prop) {
    var value;
    var camelized = Spry.Widget.Utils.camelize(prop);
    try {
        if (element.style) {
            value = element.style[camelized];
        }
        if (!value) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var css = document.defaultView.getComputedStyle(element, null);
                value = css ? css.getPropertyValue(prop) : null;
            } else if (element.currentStyle) {
                value = element.currentStyle[camelized];
            }
        }
    } catch (e) {}
    return value == 'auto' ? null : value;
};
Spry.Widget.Utils.camelize = function (str) {
    if (str.indexOf('-') == -1) {
        return str;
    }
    var oStringList = str.split('-');
    var isFirstEntry = true;
    var camelizedString = '';
    for (var i = 0; i < oStringList.length; i++) {
        if (oStringList[i].length > 0) {
            if (isFirstEntry) {
                camelizedString = oStringList[i];
                isFirstEntry = false;
            } else {
                var s = oStringList[i];
                camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
            }
        }
    }
    return camelizedString;
};
Spry.Widget.Utils.getPixels = function (m, s) {
    var v = Spry.Widget.Utils.getStyleProperty(m, s);
    if (v == "medium") {
        v = 2;
    } else {
        v = parseInt(v, 10);
    }
    v = isNaN(v) ? 0 : v;
    return v;
};
Spry.Widget.Utils.getAbsoluteMousePosition = function (ev) {
    var pos = {
        x: 0,
        y: 0
    };
    if (ev.pageX) {
        pos.x = ev.pageX;
    } else if (ev.clientX) {
        pos.x = ev.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    }
    if (isNaN(pos.x)) {
        pos.x = 0;
    }
    if (ev.pageY) {
        pos.y = ev.pageY;
    } else if (ev.clientY) {
        pos.y = ev.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    }
    if (isNaN(pos.y)) {
        pos.y = 0;
    }
    return pos;
};
Spry.Widget.Utils.getBorderBox = function (el, doc) {
    doc = doc || document;
    if (typeof el == 'string') {
        el = doc.getElementById(el);
    }
    if (!el) {
        return false;
    }
    if (el.parentNode === null || Spry.Widget.Utils.getStyleProperty(el, 'display') == 'none') {
        return false;
    }
    var ret = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var parent = null;
    var box;
    if (el.getBoundingClientRect) {
        box = el.getBoundingClientRect();
        var scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
        var scrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;
        ret.x = box.left + scrollLeft;
        ret.y = box.top + scrollTop;
        ret.width = box.right - box.left;
        ret.height = box.bottom - box.top;
    } else if (doc.getBoxObjectFor) {
        box = doc.getBoxObjectFor(el);
        ret.x = box.x;
        ret.y = box.y;
        ret.width = box.width;
        ret.height = box.height;
        var btw = Spry.Widget.Utils.getPixels(el, "border-top-width");
        var blw = Spry.Widget.Utils.getPixels(el, "border-left-width");
        ret.x -= blw;
        ret.y -= btw;
    } else {
        ret.x = el.offsetLeft;
        ret.y = el.offsetTop;
        ret.width = el.offsetWidth;
        ret.height = el.offsetHeight;
        parent = el.offsetParent;
        if (parent != el) {
            while (parent) {
                ret.x += parent.offsetLeft;
                ret.y += parent.offsetTop;
                parent = parent.offsetParent;
            }
        }
        var blw = Spry.Widget.Utils.getPixels(el, "border-left-width");
        var btw = Spry.Widget.Utils.getPixels(el, "border-top-width");
        ret.x -= blw;
        ret.y -= btw;
        var ua = navigator.userAgent.toLowerCase();
        if (Spry.is.opera || Spry.is.safari && Spry.Widget.Utils.getStyleProperty(el, 'position') == 'absolute') {
            ret.y -= doc.body.offsetTop;
        }
    }
    if (el.parentNode) {
        parent = el.parentNode;
    } else {
        parent = null;
    }
    while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML') {
        ret.x -= parent.scrollLeft;
        ret.y -= parent.scrollTop;
        if (parent.parentNode) {
            parent = parent.parentNode;
        } else {
            parent = null;
        }
    }
    return ret;
};
Spry.Widget.Utils.setBorderBox = function (el, box) {
    var pos = Spry.Widget.Utils.getBorderBox(el, el.ownerDocument);
    if (pos === false) {
        return false;
    }
    var delta = {
        x: Spry.Widget.Utils.getPixels(el, 'left'),
        y: Spry.Widget.Utils.getPixels(el, 'top')
    };
    var new_pos = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };
    if (typeof box.x == 'number') {
        new_pos.x = box.x - pos.x + delta.x;
    }
    if (typeof box.y == 'number') {
        new_pos.y = box.y - pos.y + delta.y;
    }
    if (typeof box.x == 'number') {
        el.style.left = new_pos.x + 'px';
    }
    if (typeof box.y == 'number') {
        el.style.top = new_pos.y + 'px';
    }
    return true;
};
Spry.Widget.Utils.putElementAt = function (source, target, offset, biv) {
    biv = Spry.Widget.Utils.firstValid(biv, true);
    var source_box = Spry.Widget.Utils.getBorderBox(source, source.ownerDocument);
    Spry.Widget.Utils.setBorderBox(source, target);
    if (biv) {
        Spry.Widget.Utils.bringIntoView(source);
    }
    return true;
};
Spry.Widget.Utils.bringIntoView = function (source) {
    var box = Spry.Widget.Utils.getBorderBox(source, source.ownerDocument);
    if (box === false) {
        return false;
    }
    var current = {
        x: Spry.Widget.Utils.getPixels(source, 'left'),
        y: Spry.Widget.Utils.getPixels(source, 'top')
    };
    var delta = {
        x: 0,
        y: 0
    };
    var offset_fix = {
        x: 0,
        y: 0
    };
    var strictm = source.ownerDocument.compatMode == "CSS1Compat";
    var doc = (Spry.is.ie && strictm || Spry.is.mozilla) ? source.ownerDocument.documentElement : source.ownerDocument.body;
    offset_fix.x = Spry.Widget.Utils.getPixels(doc, 'border-left-width');
    offset_fix.y = Spry.Widget.Utils.getPixels(doc, 'border-top-width');
    var st = doc.scrollTop;
    var ch = self.innerHeight ? self.innerHeight : doc.clientHeight;
    var t = box.y + (Spry.is.ie ? -offset_fix.y : offset_fix.y);
    var b = box.y + box.height + (Spry.is.ie ? -offset_fix.y : offset_fix.y);
    if (b - st > ch) {
        delta.y = ch - (b - st);
        if (t + delta.y < st) {
            delta.y = st - t;
        }
    } else if (t < st) {
        delta.y = st - t;
    }
    if (delta.y != 0) {
        source.style.top = (current.y + delta.y) + 'px';
    }
    var sl = doc.scrollLeft;
    var cw = doc.clientWidth;
    var l = box.x + (Spry.is.ie ? -offset_fix.x : offset_fix.x);
    var r = box.x + box.width + (Spry.is.ie ? -offset_fix.x : offset_fix.x);
    if (r - sl > cw) {
        delta.x = cw - (r - sl);
        if (l + delta.x < sl) {
            delta.x = sl - l;
        }
    } else if (l < sl) {
        delta.x = sl - l;
    }
    if (delta.x != 0) {
        source.style.left = (current.x + delta.x) + 'px';
    }
};
Spry.Widget.Utils.contains = function (who, what) {
    if (typeof who.contains == 'object') {
        return what && who && (who == what || who.contains(what));
    } else {
        var el = what;
        while (el) {
            try {
                if (el == who) {
                    return true;
                }
                el = el.parentNode;
            } catch (a) {
                return false;
            }
        }
        return false;
    }
};

function isArray(obj) {
    "use strict";
    if (obj.constructor.toString().indexOf("Array") === -1) {
        return false;
    } else {
        return true;
    }
}

function validateForm() {
    "use strict";
    var err;
    err = "";
    if (document.register.email.value === "") {
        err = "\nEMAIL";
    }
    if (document.register.password.value === "") {
        err = err + "\nPASSWORD";
    }
    if (document.register.password.value !== document.register.confirm.value) {
        window.alert('ERROR: passwords don\'t match');
        return false;
    }
    if (document.register.terms.checked === false) {
        err = err + "\nACCEPT TERMS";
    }
    if (err !== "") {
        err = "Information missing: " + err;
        window.alert(err);
        return false;
    } else {
        document.forms.register.submit();
    }
}
 function grin(tag) {
      var myField;
      tag = ' ' + tag + ' ';
        if (document.getElementById('comment_text') && document.getElementById('comment_text').type == 'textarea') {
        myField = document.getElementById('comment_text');
      } else { alert("false");
        return false;
      }
      if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = tag;
        myField.focus();
      }
      else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        var cursorPos = startPos;
        myField.value = myField.value.substring(0, startPos)
                + tag
                + myField.value.substring(endPos, myField.value.length);
        cursorPos += tag.length;
        myField.focus();
        myField.selectionStart = cursorPos;
        myField.selectionEnd = cursorPos;
      }
      else {
        myField.value += tag;
        myField.focus();
      }
    }

function handleSearchBadges(story) {
    "use strict";
    var i, myhtml;
    myhtml = '';
    for (i = 0; i < story.crawls.length; i++) {
        if (story.crawls[i] === 'Microsoft') {
            myhtml += '<img src="http://image.b4in.net/on_bing.png" alt="Microsoft" width="14" height="14" hspace="0" vspace="1" align="top" title="This story has been crawled by Microsoft" /> ';
        } else if (story.crawls[i] === 'Google') {
            myhtml += '<img src="http://image.b4in.net/on_google.png" alt="Google" width="14" height="14" hspace="0" vspace="1" align="top" title="This story has been crawled by Google" /> ';
        } else if (story.crawls[i] === 'Yahoo!') {
            myhtml += '<img src="http://image.b4in.net/on_yahoo.png" alt="Yahoo!" width="14" height="14" hspace="0" vspace="1" align="top" title="This story has been crawled by Yahoo!" /> ';
        } else if (story.crawls[i] === 'Ask') {
            myhtml += '<img src="http://image.b4in.net/on_ask.png" alt="Ask" width="14" height="14" hspace="0" vspace="1" align="top" title="This story has been crawled by Ask" /> ';
        } else if (story.crawls[i] === 'Google News') {
            myhtml += '<img src="http://image.b4in.net/on_google_news.png" alt="Google News" width="14" height="14" hspace="0" vspace="1" align="top" title="This story has been crawled by Google News" /> ';
        }
    }
    if (myhtml !== '') {
        $('#search_badges').html('<div class="search_badges"><a href="/crawled/' + story.id + '" rel="nofollow">' + myhtml + '</a></div>');
    }
}

function updateStats() {
	"use strict";

	$.getJSON("/top_stories.php?section=all_100",
		{ "noCache": new Date().getTime() },
		function (top_stories) {
            if (!top_stories) {
                return;
            }
			var path = window.location.pathname;
			var visits = 1;
			var i;
			for (i = 0; i < top_stories.length; i++) {
				if (path === top_stories[i].path) {
					if (top_stories[i].visits > 1)
						visits = top_stories[i].visits;
					if (visits > story_counter_hour)
						visits = story_counter_hour;
					$('#chartbeat_count').html(add_commas(visits));
					return;
				}
			}

			// If story not in top 100 then get stats from chartbeat
			$.post('/core/ajax/story/chartbeat.php',
				function(data) {
					if (data !== null && typeof data.people != 'undefined' && data.people > 0) {
						if (data.people > story_counter_hour)
							data.people = story_counter_hour;
						$('#chartbeat_count').html(add_commas(data.people));
					} else {
						$('#chartbeat_count').html('1');
					}
				},
				'json'
			);
		}
	);
}



function setupTooltips() {
	"use strict";
	var sprytooltip;
	sprytooltip = new Spry.Widget.Tooltip("likeContributorMessage", "#like_contributor");
	sprytooltip = new Spry.Widget.Tooltip("likeStoryMessage", "#like_story");
	if ($('#pen_name').text() !== '') {
		$('#authorMessage').html($('#pen_name').text());
		sprytooltip = new Spry.Widget.Tooltip("authorMessage", "#profile_image");
	}
	sprytooltip = new Spry.Widget.Tooltip("subscribenewsletterMessage", "#subscribenewsletter");
}

function handleStory() {
	"use strict";
	splitStory(300, 1700, 'body');
	var adCode = '<div style="float: left; margin: 0 10px 10px 0;"><iframe id="5125e7a33c8bf" name="5125e7a33c8bf" src="http://ox-d.beforeitsnews.com/w/1.0/afr?auid=326914&cb=INSERT_RANDOM_NUMBER_HERE" frameborder="0" scrolling="no" width="300" height="250"><a href="http://ox-d.beforeitsnews.com/w/1.0/rc?cs=5125e7a33c8bf&cb=INSERT_RANDOM_NUMBER_HERE" ><img src="http://ox-d.beforeitsnews.com/w/1.0/ai?auid=326914&cs=5125e7a33c8bf&cb=INSERT_RANDOM_NUMBER_HERE" border="0" alt=""></a></iframe></div>';
    setupTooltips();
	updateRecommendCounter();
//	updateNewsletterLink();
	handleBottomFloatBar();

	//fixMediaSize();

    // Disable embed ads for clarifying the truth story
    if (!$('#clarifying_the_truth').length) {
        embedAd('body', adCode);
    }

    fixVideoOverDiv();
    
	var story_id = $('#story_id').val();
	if (isAdmin()) {
		$.get('/core/ajax/admin-tab/admin/index.php', {
			url: window.location.href
		}, function (data) {
            if (data == "") {
                $("#user_status").hide();
                $("#user_status").html('<div id="login"><form id="loginform" name="loginform" method="post" action="/login/index.php"><table border="0" cellpadding="0" cellspacing="0" width="345"><tbody><tr><td align="right" width="256"><label>Email <input name="log" id="user_login" size="16" type="text" style="width:130px;"></label><br><label>Password <input name="pwd" id="user_pass" size="16" type="password" style="width:130px;"></label></td><td align="left"><input name="submit" id="submit" value="LOGIN" class="grayButton1" type="submit"></td></tr><tr><td colspan="2" align="center"><p id="joinnowtext"><a href="/login/new/">Not a Member Yet? Join Now!</a></p></td></tr></tbody></table></form></div>');
                $("#user_status").fadeIn('slow');
            } else {
                $('#admin_tab').html(data);
                document.getElementById('admin_drawer').style.position = 'absolute';
                document.getElementById('admin_drawer').style.left = '0px';
                $('#unperson').hover(function () {
                    $(this).css('cursor', 'active');
                }, function () {
                    $(this).css('cursor', 'pointer');
                });
                $('#unperson').click(function () {
                    moveLeft();
                    $('#block_reason').dialog('open');
                });
//                get_bottom_stories_list_admin();
            }
		});
	} else if (isEditor()) {
		$.get('/core/ajax/admin-tab/editor/index.php', {
			url: window.location.href
		}, function (data) {
            if (data == "") {
                $("#user_status").hide();
                $("#user_status").html('<div id="login"><form id="loginform" name="loginform" method="post" action="/login/index.php"><table border="0" cellpadding="0" cellspacing="0" width="345"><tbody><tr><td align="right" width="256"><label>Email <input name="log" id="user_login" size="16" type="text" style="width:130px;"></label><br><label>Password <input name="pwd" id="user_pass" size="16" type="password" style="width:130px;"></label></td><td align="left"><input name="submit" id="submit" value="LOGIN" class="grayButton1" type="submit"></td></tr><tr><td colspan="2" align="center"><p id="joinnowtext"><a href="/login/new/">Not a Member Yet? Join Now!</a></p></td></tr></tbody></table></form></div>');
                $("#user_status").fadeIn('slow');
            } else {
                $('#admin_tab').html(data);
                document.getElementById('admin_drawer').style.position = 'absolute';
                document.getElementById('admin_drawer').style.left = '0px';
//                get_bottom_stories_list_admin();
            }
		});
	}

	// Add Edit/Delete buttons
	var html = '';
	var author_id = $('#author_id').val();
	var blog_id = $('#category_id').val();
	if (getCookie('b4in_new_user_id') == author_id || getCookie('b4in_new_story_editor') == 1 || isAdmin() || isEditor()) {
		html += '<a id="edit_link" href="/dashboard/?page=postnews&blogid=' + blog_id + '&postid=' + story_id + '"><img id="edit_button" src="/img/dashboard/post-edit.png" alt="Edit" width="21" height="21" title="Edit this story" /><span id="edit_text">Edit</span></a>';
	}
	if (getCookie('b4in_new_user_id') == author_id) {
		html += '<div id="delete_form"><form id="deleteForm" method="GET" action="/core/ajax/story/delete_story.php" onsubmit="delete_story(); return false;">';
		html += '<input type="hidden" name="story_id" value="' + story_id + '">';
		html += '<input type="hidden" name="blog_id" value="' + blog_id + '">';
		html += '<input type="hidden" name="reason" value="By Author">';
		html += '<input type="image" src="http://image.b4in.net/RoundDeleteButton.png" alt="Delete" class="inline" />';
		html += '</form></div>';
	}	else if (isAdmin()) {
		html += '<div id="delete_form"><form id="deleteForm" method="GET" action="/core/ajax/story/delete_story.php" onsubmit="delete_story(); return false;">';
		html += '<input type="hidden" name="story_id" value="' + story_id + '">';
		html += '<input type="hidden" name="blog_id" value="' + blog_id + '">';
		html += '<input type="image" src="http://image.b4in.net/RoundDeleteButton.png" alt="Delete" class="inline" />';
		html += '<select name="reason" style="border: 0pt none; width: 130px; vertical-align: middle;">';
		html += '<option value="Delete">Delete</option>';
		html += '<option value="Copyright">Copyrighted</option>';
		html += '<option value="TOS">TOS Violation</option>';
		html += '<option value="Duplicate">Duplicate</option>';
		html += '</select></form></div>';
	} else if (isEditor()) {
		html += '<div id="delete_form"><form id="deleteForm" method="GET" action="/core/ajax/story/delete_story.php" onsubmit="delete_story(); return false;">';
		html += '<input type="hidden" name="story_id" value="' + story_id + '">';
		html += '<input type="hidden" name="blog_id" value="' + blog_id + '">';
		html += '<input type="image" src="/images/story/exclamation.png" alt="TOS Violation" class="inline" style="height: 24px; width: 24px; margin-top: 4px; margin-right: 6px;" />';
		html += '<select name="reason" style="border: 0pt none; width: 130px; vertical-align: middle;">';
		html += '<option value="Delete">Delete</option>';
		html += '<option value="Copyright">Copyrighted</option>';
		html += '<option value="TOS">TOS Violation</option>';
		html += '<option value="Duplicate">Duplicate</option>';
		html += '</select></form></div>';
	}
	$('#edit_delete').html(html);
	
	// Join active views
	var current_date_time = new Date();
	var current_timestamp = Math.floor( current_date_time.getTime() / 1000 );
	if (current_timestamp - 24 * 60 * 60 < parseInt($('#story_tsp').val())) {
		var img = new Image();
		img.src='/core/ajax/story/ping.php?sid=' + $('#story_id').val() + '&bid=' + $('#category_id').val() + '&stime=' + $('#story_tsp').val();

		setInterval(function () {
			var img = new Image();
			img.src='/core/ajax/story/ping.php?sid=' + $('#story_id').val() + '&bid=' + $('#category_id').val() + '&stime=' + $('#story_tsp').val();
		}, 15000);
	}
}

function delete_story() {
	if (confirm('Really DELETE this story?\n\nThere is NO UNDO!')) {
		var data = $('#deleteForm').serialize();
		$('#deleteForm').html('<img id="edit_button" src="/images/misc/loading.gif" alt="Processing..." width="21" height="21" title="Processing... Please wait." />');
		$.get(
			'/core/ajax/story/delete_story.php',
			data,
			function (data) {
				if (data != null) {
					alert(data.message);
					if (data.status) {
						var categoryPattern = /\/[^/]+\//;
						var categoryArray = categoryPattern.exec(window.location.pathname)
						window.document.location = categoryArray[0];
					}
				}
				$('#deleteForm').html('');
			},
			'json'
		);
	}
}

function myStripHTML(oldString) {
    "use strict";
    var newString, inTag, i, max;
    newString = "";
    inTag = false;
    for (i = 0, max = oldString.length; i < max; i++) {
        if (oldString.charAt(i) === '<') {
            inTag = true;
        }
        if (oldString.charAt(i) === '>') {
            if (oldString.charAt(i + 1) !== '<') {
                inTag = false;
                i++;
            }
        }
        if (!inTag) {
            newString += oldString.charAt(i);
        }
    }
    return newString;
}

function getStoryUrl() {
    "use strict";
    var url = window.location.href;
    return encodeURI(url);
}

function selectOne(chk) {
    "use strict";
    var first, addr;
    first = true;
    addr = "";
    $("input[name=es_check_name]").each(function () {
        if (this.checked) {
            if (first) {
                first = false;
                addr = this.value;
            } else {
                addr += "," + this.value;
            }
        }
    });
    $("#email_address").val(addr);
}

function fadeEmailResponse() {
    "use strict";
    $("#bf_email_response").fadeOut("slow");
}

function email_share_get_response(datastr) {
    "use strict";
    $.ajax({
        type: "POST",
        url: "/bottom_float/sendmail.php",
        data: datastr,
        cache: false,
        success: function (html) {
            $("#bf_email_response").fadeIn("slow");
            $("#bf_email_response").html(html);
            setTimeout(fadeEmailResponse, 5000);
        }
    });
}

function emailShareCutText(text) {
    "use strict";
    if (text.length <= 21) {
        return text;
    }
    return text.substr(0, 19) + "..";
}

function loadEmailList(yourname, youremail, listname, listemail, prov) {
    "use strict";
	showContactList(prov);
    var html, i, mail, name;
    document.getElementById('your_name').value = yourname;
    document.getElementById('your_email').value = youremail;
    html = '';
    for (i = 0; i < listemail.length; i++) {
        mail = listemail[i];
        if (!mail) {
            continue;
        }
        name = listname[i];
        html += '<div class="es_single_contact">' + '<div class="es_contact_names float_left">' + '<span class="es_username" title="' + name + '">' + name + '</span>&nbsp;' + '<span class="es_email" title="' + mail + '">' + emailShareCutText(mail) + '</span></div>' + '<div class="es_contact_cbox float_right">' + '<input name="es_check_name" value="' + mail + '" onclick="selectOne(this)" type="checkbox">' + '</div></div>';
    }
    document.getElementById('mail_list_id').innerHTML = html;
    if (prov === 'yahoo') {
        yahoo_profile_cached = [];
        yahoo_profile_cached[0] = yourname;
        yahoo_profile_cached[1] = youremail;
        yahoo_email_list_cached = html;
    } else {
        google_profile_cached = [];
        google_profile_cached[0] = yourname;
        google_profile_cached[1] = youremail;
        google_email_list_cached = html;
    }
}

function showContactList(prov) {
    "use strict";
    document.getElementById('fancybox-wrap').style.width = '662px';
    document.getElementById('fancybox-content').style.width = '642px';
    document.getElementById('share_this_story_form').style.width = '642px';
    document.getElementById('email_share_form_id').style.width = '280px';
    document.getElementById('bf_social_gmail').style.width = '130px';
    document.getElementById('bf_social_yahoo').style.width = '130px';
    document.getElementById('email_address').value = "";
    document.getElementById('mail_list_id').style.display = "block";
    document.getElementById('select_all_box').style.display = "block";
    if (prov === 'google') {
        document.getElementById("email_share_radio_gmail").checked = true;
    } else {
        document.getElementById("email_share_radio_yahoo").checked = true;
    }
/*
  $("#email_share_radio_gmail").attr("checked","checked");
 else
  $("#email_share_radio_yahoo").attr("checked","checked");  */
}

function trimText(txt) {
    "use strict";
    return txt.replace(/^\s+|\s+$/, '');
}

function addslashes(str) {
    "use strict";
    return str.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

function stripHTML(strHTML) {
    "use strict";
    if (!strHTML) {
        return '';
    }
    var text = strHTML.replace(/<.*?>/g, '');
    text = text.replace(/\t/g, ' ');
    text = text.replace(/\n/g, ' ');
    text = text.replace(/\r/g, ' ');
    text = text.replace(/&nbsp;/g, ' ');
    text = text.replace(/\s\s+/ig, ' ');
    text = trimText(addslashes(text));
    return text;
}

function get_desc_from_content(strContent) {
    "use strict";
    if (!strContent) {
        return '';
    }
    var str = strContent.replace(/<.*?>/g, '');
    str = str.substring(0, 250) + '...';
    str = str.replace(/\t/g, ' ');
    str = str.replace(/\n/g, ' ');
    str = str.replace(/\r/g, ' ');
    str = str.replace(/&nbsp;/g, ' ');
    str = str.replace(/\s\s+/ig, ' ');
    str = trimText(addslashes(str));
    return str;
}

function getStoryPageUrl() {
    "use strict";
    var url, test;
    url = window.location.href;
    test = url.substr(url.indexOf('beforeitsnews'), url.length);
    return encodeURI("http://" + test);
}

function handleEmail() {
    "use strict";
    var story, social, suri, stitle, sdesc;
    suri = getStoryPageUrl();
    sdesc = get_desc_from_content($("#body").html());
    $('#bf_email_share_title').html($("#headline").text() );
    $('#page_url').val(suri);
    $('#page_title').val($("#headline").text());
    $('#page_desc').val(sdesc);
}

function emailShareClick() {
    "use strict";
    $("#lightbox_email").click();
}

function printStory() {
    "use strict";
    window.open('/bottom_float/print_story.html', 'PrintStory', 'menubar=no,resizable=yes,scrollbars=yes,width=680,height=450');
}

function handleBottomFloatBar() {
	"use strict";
	var  stitle, sdesc, sdesc_tumblr;
	stitle = encodeURIComponent(addslashes($('#headline').text()));
	sdesc = encodeURIComponent(story_description);
	if (typeof story_thumbnail !== "undefined")
		sdesc_tumblr = encodeURIComponent('<img align="middle" src="' + story_thumbnail + '" /><br />' + story_description);
	else
		sdesc_tumblr = sdesc;

	var awesm_api_key = encodeURIComponent('f16374303e18090baba90a39e7ae0c5ebf3bb4caf4b787ae1720bcb78f17662f');
	var awesm_tool = 'UsCqDC';

	var story_url = 'http://' + window.location.hostname + window.location.pathname;
	var awesm_original_url = encodeURIComponent(story_url);

	var awesm_tag = (blogpath === '') ? '' : ('&tag=' + blogpath);
    
	var awesm_channel = "facebook-share";
	var bf_social_fbshare_href = "http://api.awe.sm/url/share?v=3&url=" + awesm_original_url + awesm_tag + "&key=" + awesm_api_key + "&tool=" + awesm_tool + "&channel=" + awesm_channel + "&destination=" + encodeURIComponent('http://facebook.com/sharer.php?u=AWESM_URL' );
        var bf_social_fbshare_button = '<a title="Share on Facebook" href="' + bf_social_fbshare_href + '" onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\');return false;"> <img class="bf_icon" width="20" height="20" src="//image.b4in.net/facebook_sm.png" alt="Share on Facebook"/></a>';
        $('#bf_social_fbshare').html(bf_social_fbshare_button);

	var awesm_channel = "twitter";
	var bf_social_twitter_href = "http://api.awe.sm/url/share?v=3&url=" + awesm_original_url + awesm_tag + "&key=" + awesm_api_key + "&tool=" + awesm_tool + "&channel=" + awesm_channel + "&destination=" + encodeURIComponent('http://twitter.com/intent/tweet?url=AWESM_URL&text=' + stitle );
        var bf_social_twitter_button = '<a title="Share on Twitter" href="' + bf_social_twitter_href + '" onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\');return false;"> <img class="bf_icon" width="20" height="20" src="//image.b4in.net/twitter_sm.png" alt="Share on Twitter"/></a>';
	$('#bf_social_twitter').html(bf_social_twitter_button);

	var awesm_channel = "tumblr-link";
	var tumblr_button_href = "http://api.awe.sm/url/share?v=3&url=" + awesm_original_url + awesm_tag + "&key=" + awesm_api_key + "&tool=" + awesm_tool + "&channel=" + awesm_channel + "&destination=" + encodeURIComponent('http://www.tumblr.com/share/link?url=AWESM_URL&name=' + stitle + '&description=' + sdesc_tumblr );
        var tumblr_button_button = '<a title="Share on Tumblr" href="' + tumblr_button_href + '" onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\');return false;"><img class="bf_icon" width="20" height="20" src="http://image.b4in.net/tumblr0.png" alt="Share on Tumblr" /></a>';
	$('#bf_social_tumblr').html(tumblr_button_button);

	awesm_channel = "digg-share";
	var digg_button_href = "http://api.awe.sm/url/share?v=3&url=" + awesm_original_url + awesm_tag + "&key=" + awesm_api_key + "&tool=" + awesm_tool + "&channel=" + awesm_channel + "&destination=" + encodeURIComponent('http://digg.com/submit?url=AWESM_URL&title=' + stitle + '&bodytext=' + sdesc );
        var digg_button_button = '<a title="Share on Digg" href="' + digg_button_href + '"  onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\');return false;"><img class="bf_icon" width="20" height="20" src="http://image.b4in.net/digg.png" alt="Digg" /></a>';
	$('#bf_social_digg').html(digg_button_button);

	awesm_channel = "reddit-share";
	var reddit_button_href = "http://api.awe.sm/url/share?v=3&url=" + awesm_original_url + awesm_tag + "&key=" + awesm_api_key + "&tool=" + awesm_tool + "&channel=" + awesm_channel + "&destination=" + encodeURIComponent('http://www.reddit.com/submit?url=AWESM_URL&title=' + stitle );
        var reddit_button_button = '<a title="Share on Reddit" href="' + reddit_button_href + '" onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\');return false;"><img class="bf_icon" width="20" height="20" src="http://image.b4in.net/reddit.png" alt="Reddit" /></a>';
	$('#bf_social_reddit').html(reddit_button_button);

	awesm_channel = "stumbleupon-share";
	var stumbleupon_button_href = 'http://www.stumbleupon.com/submit?url=' + encodeURIComponent( window.location.protocol + "//" + window.location.host + window.location.pathname ) + '&title=' + stitle + '&newcomment=' + sdesc;
        var stumbleupon_button_button = '<a title="Share on StumbleUpon" href="' + stumbleupon_button_href + '"  onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=800,width=570\');return false;"><img class="bf_icon" width="20" height="20" src="http://image.b4in.net/stumbleupon.png" alt="StumbleUpon" /></a>';
	$('#bf_social_stumbleupon').html(stumbleupon_button_button);

	$('#bf_social_print_icon').click(function () {
		printStory();
	});
	$('#bf_social_email_icon').click(function () {
		emailShareClick();
	});
}

function removeNodesBelow(position, paths, storyNodeId) {
    "use strict";
    var story_body, path, i, j, childNode, removedNodes;
    story_body = document.getElementById(storyNodeId);
    path = paths[position];
    removedNodes = [];
    for (i = 2; i < path.length; i++) {
        position = path[i];
        for (j = position + 1; j < story_body.childNodes.length; j++) {
            childNode = story_body.childNodes[j];
            if (childNode.nodeName === '#text' || childNode.nodeType === 1) {
                removedNodes.push(childNode);
            }
        }
        while (removedNodes.length > 0) {
            story_body.removeChild(removedNodes.pop());
        }
        story_body = story_body.childNodes[position];
    }
}

function removeNodesBackToFirst(position, paths, storyNodeId) {
    "use strict";
    var story_body, path, i, j, childNode, removedNodes;
    story_body = document.getElementById(storyNodeId);
    path = paths[position];
    removedNodes = [];
    for (i = 2; i < path.length - 1; i++) {
        position = path[i];
        story_body = story_body.childNodes[position];
    }
    removedNodes.push(story_body.childNodes[path[i]]);
    for (i = path.length - 1; i >= 2; i--) {
        position = path[i];
        for (j = 0; j < position; j++) {
            childNode = story_body.childNodes[j];
            if (childNode.nodeName === '#text' || childNode.nodeType === 1) {
                removedNodes.push(childNode);
            }
        }
        while (removedNodes.length > 0) {
            story_body.removeChild(removedNodes.pop());
        }
        story_body = story_body.parentNode;
    }
}

function countWords(text) {
    "use strict";
    var delimiter, count;
    delimiter = /\s+/g;
    text = text.split(delimiter);
    count = text.length;
    if (text[0] === '') {
        count--;
    }
    if (text[text.length - 1] === '') {
        count--;
    }
    return count < 0 ? 0 : count;
}

function traverseStoryBody(nodeOfBody, position, current_path, paths) {
    "use strict";
    var i, text, count, tmp;
    i = 0;
    current_path.push(position);
    if (nodeOfBody.nodeName === '#text' || nodeOfBody.nodeName === 'TABLE' || nodeOfBody.nodeName === 'P' || nodeOfBody.nodeName === 'OL' || nodeOfBody.nodeName === 'LI' || nodeOfBody.nodeName === 'A') {
        text = nodeOfBody.textContent || nodeOfBody.innerText || nodeOfBody.nodeValue || ' ';
        count = countWords(text);
        if (count > 0) {
            tmp = [];
            tmp.push(count);
            tmp.push(text);
            for (i = 0; i < current_path.length; i++) {
                tmp.push(current_path[i]);
            }
            paths.push(tmp);
        }
    } else if (nodeOfBody.nodeType === 1) {
        for (i = 0; i < nodeOfBody.childNodes.length; i++) {
            if (nodeOfBody.childNodes[i].nodeName === '#text' || nodeOfBody.childNodes[i].nodeType === 1) {
                traverseStoryBody(nodeOfBody.childNodes[i], i, current_path, paths);
            }
        }
    }
    current_path.pop();
}

function embedAdDeep(node, adNode) {
    "use strict";
    var i, childNode, headNode, adNode, max, text, words, textCount, pattern;
    textCount = 0;
    headNode = null;
    pattern = /[\s\S]*<(img|li|table|ol|iframe)/mi;
    max = node.childNodes.length;
    while (max === 1) {
        node = node.firstChild;
        node.normalize;
        max = node.childNodes.length;
    }
    for (i = 0; i < max; i++) {
        childNode = node.childNodes[i];
        text = childNode.textContent || childNode.innerText || childNode.nodeValue || ' ';
        if (countWords(text) === 0) {
            continue;
        }
        if (headNode === null) {
            headNode = childNode;
        }
        text = $(childNode).html();
        if (pattern.test(text)) {
            headNode = null;
            textCount = 0;
            continue;
        }
        textCount++;
        if (textCount > 4) {
            node.insertBefore(adNode, headNode);
            return true;
        }
    }
    return false;
}

function embedAd(storyNodeId, adCode) {
    "use strict";
    var adNode, node;
    node = document.getElementById(storyNodeId);
    adNode = $(adCode)[0];
    embedAdDeep(node, adNode);
}

function splitStory(minWords, maxWords, storyNodeId) {
    "use strict";
    var story_body, count, currentSplittedPage, SinglePage, pattern, current_path, paths, i, wordsCount, Pages, lastParagraph, page, continuePage, nextPage, prevPage, pagenavi, halfRange, firstSplittedPage, lastSplittedPage;
    story_body =  document.getElementById(storyNodeId);
    count = countWords(story_body.textContent || story_body.innerText || story_body.nodeValue || ' ');
    if (count <= minWords + maxWords) {
        $('#body').css('visibility', 'visible');
        return;
    }
    currentSplittedPage = 1;
    SinglePage = 0;
    pattern = /currentSplittedPage=(\d+)/;
    if (pattern.test(location.search)) {
        currentSplittedPage = parseInt(location.search.match(pattern)[1], 10);
    }
    if (currentSplittedPage === SinglePage) {
        $('#body').css('visibility', 'visible');
        return;
    }
    current_path = [];
    paths = [];
    i = 0;
    for (i = 0; i < story_body.childNodes.length; i++) {
        if (story_body.childNodes[i].nodeName === '#text' || story_body.childNodes[i].nodeType === 1) {
            traverseStoryBody(story_body.childNodes[i], i, current_path, paths);
        }
    }
    wordsCount = 0;
    Pages = [];
    for (lastParagraph = 0; lastParagraph < paths.length; lastParagraph++) {
        wordsCount += paths[lastParagraph][0];
        if ((lastParagraph === paths.length - 1) || (wordsCount >= maxWords) || ((wordsCount >= minWords) && (wordsCount + paths[lastParagraph + 1][0] > maxWords))) {
            page = [];
            page[0] = wordsCount;
            page[1] = lastParagraph;
            Pages.push(page);
            wordsCount = 0;
        }
    }
    if (Pages.length === 1) {
        $('#body').css('visibility', 'visible');
        return;
    } else if (Pages[Pages.length - 1][0] < minWords) {
        Pages[Pages.length - 2][0] += Pages[Pages.length - 1][0];
        Pages[Pages.length - 2][1] = Pages[Pages.length - 1][1];
        Pages.pop();
    }
    if (currentSplittedPage > Pages.length) {
        currentSplittedPage = 1;
    }
    if (currentSplittedPage < Pages.length) {
        removeNodesBelow(Pages[currentSplittedPage - 1][1], paths, storyNodeId);
    }
    if (currentSplittedPage > 1) {
        removeNodesBackToFirst(Pages[currentSplittedPage - 2][1], paths, storyNodeId);
    }
    continuePage = '';
    nextPage = '';
    prevPage = '';
    if (currentSplittedPage < Pages.length) {
        continuePage = '<div id="continue-page">' + '<a href="' + location.pathname + '?currentSplittedPage=' + (currentSplittedPage + 1) + '">Continued on Next Page</a>' + '</div>';
        nextPage = '<a href="' + location.pathname + '?currentSplittedPage=' + (currentSplittedPage + 1) + '">Next</a>';
    }
    if (currentSplittedPage > 1) {
        prevPage = '<a href="' + location.pathname + '?currentSplittedPage=' + (currentSplittedPage - 1) + '">Prev</a>';
    }
    pagenavi = '';
    halfRange = 2;
    firstSplittedPage = currentSplittedPage - halfRange;
    lastSplittedPage = currentSplittedPage + halfRange;
    if (firstSplittedPage < 1) {
        lastSplittedPage = lastSplittedPage + 1 - firstSplittedPage;
    }
    if (lastSplittedPage > Pages.length) {
        firstSplittedPage = firstSplittedPage + Pages.length - lastSplittedPage;
    }
    if (firstSplittedPage < 1) {
        firstSplittedPage = 1;
    }
    if (lastSplittedPage > Pages.length) {
        lastSplittedPage = Pages.length;
    }
    for (i = firstSplittedPage; i <= lastSplittedPage; i++) {
        if (i !== currentSplittedPage) {
            pagenavi += '<a href="' + location.pathname + '?currentSplittedPage=' + i + '">' + i + '</a>';
        } else {
            pagenavi += '<span class="current">' + i + '</span>';
        }
    }
    pagenavi = '<div id="story-pagenavi">' + prevPage + pagenavi + nextPage + '<a href="' + location.pathname + '?currentSplittedPage=0">View as Single Page</a>' + '</div>' + continuePage;
    $('#story-pagenavi-bar').html(pagenavi);
    $('#story-pagenavi-bar').css('display', 'block');
    $('#body').css('visibility', 'visible');
    count = 0;
    for (i = 0; i < paths.length; i++) {
        count += paths[i][0];
    }
}

function freeze() {
    "use strict";
    var googleTop, storyHeight;
    googleTop = $('#floating_ad').offset().top - parseFloat($('#floating_ad').css('margin-top').replace(/auto/, 0));
    $(window).scroll(function (event) {
        var y;
        y = $(this).scrollTop();

        var dh = $(document).height();
        if(y + 600 < dh - 250)
        {
            if (y >= googleTop) {
                $('#floating_ad').css('margin-top', y - googleTop);
            } else
            {
                $('#floating_ad').css('margin-top', 0);
            }
        }
    });
    storyHeight = $('#story').height();
    $('#story_right_col').height(storyHeight);
}

function notshowsubscribleClick(tick) {
    "use strict";
    if (tick.value) {
        setCookie('b4in_new_subscribe_notshow', Date.parse(new Date()), '0', '/', '', '');
    } else {
        deleteCookie('b4in_new_subscribe_notshow', '', '');
    }
}

function fixVideoOverDiv() {
    "use strict";
    $('embed').each(function () {
        $(this).attr('wmode', 'transparent');
    });
    $('object').each(function () {
        $(this).html('<param name="wmode" value="transparent" />' + $(this).html().replace('src=', 'wmode="transparent" src='));
    });
    $('iframe').each(function () {
        var wmode, src;
        wmode = 'wmode=transparent';
        src = $(this).attr("src");
        if (src && src.indexOf("youtube.com") > 0) {
            if (src.indexOf("?") > 0) {
                $(this).attr("src", src + '&' + wmode);
            } else {
                $(this).attr("src", src + '?' + wmode);
            }
        }
    });
}

function processNextAd() {
    "use strict";
    var _match, span, tag;
    if (adTags.length === 0) {
        return;
    }
    span = adTags.shift();
    tag = $(span).attr('id');
    adTags.unshift(span);
    document.write = function (text) {
        $('#' + tag).html(text);
    };
    _match = /(\d*)x(\d*)$/.exec(tag);
    GA_googleFillSlotWithSize('ca-pub-7268876088039072', tag, _match[1], _match[2]);
    waitToProcessNextAd();
}

function waitToProcessNextAd() {
    "use strict";
    var span, tag, ad;
    span = adTags.shift();
    tag = $(span).attr('id');
    ad = '#google_ads_iframe_' + tag;
    if ($(ad).length === 0) {
        adTags.unshift(span);
        setTimeout(waitToProcessNextAd, 100);
    } else {
        processNextAd();
    }
}

function houseAds(adTags) {
    "use strict";
    $(adTags).each(function () {
        var tag, match;
        tag = $(this).attr('id');
        match = /(\d*x\d*)$/.exec(tag);
        if (match[1] === '728x90') {
            $(this).html('<a href="http://www.nationalmssociety.org/raceMap.aspx"><img src="http://bikenyh.nationalmssociety.org/digitaldownloads/Bike-MS-2010-Leaderboard-Banner-728x90_Final.gif" width="728" height="90" alt="MS ad" /></a>');
        } else if (match[1] === '300x250') {
            $(this).html('<a href="http://www.nationalmssociety.org/raceMap.aspx"><img src="http://bikenyh.nationalmssociety.org/images/content/pagebuilder/848054.gif" width="300" height="250" alt="MS ad" /></a>');
        } else if (match[1] === '300x100') {
            $(this).html('<a href="http://www.nationalmssociety.org/raceMap.aspx"><img src="http://walkksg.nationalmssociety.org/images/content/pagebuilder/477939.gif" width="300" height="100" alt="MS ad" /></a>');
        } else if (match[1] === '160x600') {
            $(this).html('<a href="http://www.nationalmssociety.org/raceMap.aspx"><img src="http://www.nationalmssociety.org/get-involved/events/bike-ms/digital-downloads-bike-ms/image.aspx?id=8173&width=160&height=600" width="160" height="600" alt="MS ad" /></a>');
        }
    });
}

function updateAds(story) {
    "use strict";
    adTags = $('.google_ad').toArray();
    if (typeof GA_googleAddAttr === 'undefined') {
        houseAds(adTags);
        return;
    }
    processNextAd();
}

function disabledSearchClick() {
    "use strict";
    $('#q').click(function () {
        $('#q').attr('disabled', 'disabled');
        $('#searchDisabled').click();
    });
}

function casalePopunder() {
    "use strict";
    var casaleD, casaleR, casaleU, casaleHost;
    if (document.cookie.indexOf('b4in_new=') !== -1) {
        return;
    }
    casaleD = new Date();
    casaleR = (casaleD.getTime() % 8673806982) + Math.random();
    casaleU = encodeURIComponent(window.location.href);
    casaleHost = ' type="text/javascript" src="http://as.casalemedia.com/s?s=';
    document.write('<scr' + 'ipt' + casaleHost + '117586&amp;u=');
    document.write(casaleU + '&amp;f=1&amp;id=' + casaleR + '"><\/scr' + 'ipt>');
}

function setupReportAbuse() {
    "use strict";
    $('#report_abuse').hover(function() {
        $('#report_abuse').attr('src', 'http://image.b4in.net/report_abuse-over.png');
    }, function() {
        $('#report_abuse').attr('src', 'http://image.b4in.net/report_abuse.png');
    });
    $('#report_abuse').click(function() {
        window.location.href = '/copyright/#abuse_web_form';
    });
}

function googleTranslateElementInit() {
    "use strict";
    new google.translate.TranslateElement({
        pageLanguage: 'auto',
        autoDisplay: false,
        gaId: 'UA-16055024-1',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },'google_translate_element');
}

function loadDeferredScripts() {
    "use strict";

    $.getScript('http://www.google.com/recaptcha/api/js/recaptcha_ajax.js');
}
function checkMobile(){
	if (!/android|iphone|ipod|ipad|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
		 return false;
	}
	return true;
}
function fixVideoSize(text){
	var searchString = text.match(/<iframe(.*)>/g);
 	if(searchString){
		for(i=0;i<searchString.length;i++) {
				var iframe=searchString[i];
				var widths = iframe.match(/width\s*=\s*["|']([^"|']*)"/g);
				if(!widths) continue ;
					 width=widths[0];
				width=width.replace('width','').replace('=','').replace('"','').replace('"','');
				width=trimText(width);
				if(width>660) {
					var newiframe=iframe.replace(widths[0],'width="660"');

					var heights = iframe.match(/height\s*=\s*["|']([^"|']*)"/g);
					if(heights) {
						var high=heights[0];
						high=high.replace('height','').replace('=','').replace('"','').replace('"','');
						high=trimText(high);
						var newHigh=660*high/width;
						newiframe=newiframe.replace(heights[0],'height="'+newHigh+'"');
					 }
					 text=text.replace(iframe,newiframe);
				}

			}
		}
	return text;
	}
function checkVideoObject(){
	var text= $('#body').html();
	var searchString = text.match(/<object(.*)>/g);
 	if(searchString){
		return true;
	}
	 searchString = text.match(/<iframe(.*)youtube(.*)>/g);
 	if(searchString){
		return true;
	}
	 searchString = text.match(/<iframe(.*)vimeo(.*)>/g);
 	if(searchString){
		return true;
	}
	 searchString = text.match(/<iframe(.*)klewtv(.*)>/g);
 	if(searchString){
		return true;
	}
	return false;
}
function fixEmbedObjectSize(text){
	var searchString = text.match(/<embed(.*)>/g);
 	if(searchString){
		for(i=0;i<searchString.length;i++) {
				var object=searchString[i];
				var widths = object.match(/width\s*=\s*["|']([^"|']*)"/g);

				if(!widths) continue ;
					 width=widths[0];
				width=width.replace('width','').replace('=','').replace('"','').replace('"','');
				width=trimText(width);
				if(width>660) {
					var newobject=object.replace(widths[0],'width="660"');

					var heights = object.match(/height\s*=\s*["|']([^"|']*)"/g);
					if(heights) {
						var high=heights[0];
						high=high.replace('height','').replace('=','').replace('"','').replace('"','');
						high=trimText(high);
						var newHigh=660*high/width;
						newobject=newobject.replace(heights[0],'height="'+newHigh+'"');
					 }
					 text=text.replace(object,newobject);
				}

			}
		}
	return text;
	}
function fixImageSize(text){
	var searchString = text.match(/<img(.*)>/g);
 	if(searchString){
		for(i=0;i<searchString.length;i++) {
				var image=searchString[i];
				var widths = image.match(/width\s*=\s*["|']([^"|']*)"/g);
				if(!widths) continue ;
					 width=widths[0];
				width=width.replace('width','').replace('=','').replace('"','').replace('"','');
				width=trimText(width);
				if(width>660) {
					var newimage=image.replace(widths[0],'width="660"');
					var heights = image.match(/height\s*=\s*["|']([^"|']*)"/g);
					if(heights) {
						var high=heights[0];
						high=high.replace('height','').replace('=','').replace('"','').replace('"','');
						high=trimText(high);
						var newHigh=660*high/width;
						newimage=newimage.replace(heights[0],'height="'+newHigh+'"');
					 }
					 	text=text.replace(image,newimage);
				}


			}
		}
	return text;
	}
function fixMediaSize(){
	var text= $('#body').html();
	text=fixVideoSize(text);
	text=fixEmbedObjectSize(text);
	text=fixImageSize(text);
	$('#body').html(text);
}

function createCommentCaptcha() {
	"use strict";
    var html = '<div style="margin-top: 10px;"><label>Enter the text in the image <font color="#FF3300">(*)</font>:</label><div style="font-size:11px;"><em>Click on the image to refresh!</em></div><div id="captchaStatus" style="color:red;font-size:12px"></div><div style="text-align: left;"><img id="imgCaptcha" src="/captcha/img.captcha.php" onclick="setTimeout(\'refreshCaptcha()\', 300); return false;" alt="Click on me to change image" align="left" style="margin-top:5px;border:1px solid #CCC;" /><input id="txtCaptcha" type="text" name="txtCaptcha" value="" maxlength="10" size="10" style="width:100px; height:22px;" /></div></div>';
    html += '<script type="text/javascript">setTimeout(\'refreshCaptcha()\', 300);</script>';
    $('#comment_captcha').html(html);
}

function refreshCaptcha() {
	"use strict";
	var imgCaptcha = document.getElementById('imgCaptcha');
	imgCaptcha.src = '/captcha/img.captcha.php?' + Math.random();
}

function showCommentSubmit() {
	"use strict";
	var ct;
	if(hasCookie('b4in_new_user_id')) {
		$('#user_pen_name').html(getCookie('b4in_new_pen_name'));
		$('#comment_submiting').data('processing', false);
		$('#comment_submit').click(function () {
			if ($.trim($('#comment_text').val()) === '') return false;
			if ($('#comment_submiting').data('processing') === false) {
				$('#comment_submiting').data('processing', true);
				$('#comment_submiting').show();
                $('#comment_submit').hide();

				$('#comment_category_id').val($('#category_id').val());
				$.post('/core/ajax/comment/add_comment.php',
					$('#commentform').serialize(),
					function(data) {
						$('#comment_submiting').hide();
						$('#comment_submiting').data('processing', false);

						if (data !== null && typeof data.result != 'undefined' && data.result == true) {
							$('#commentform').fadeOut('slow', function () {
								ct = document.getElementById('comment_text').value;
								ct = ct.replace(/[\r\n]/g, '<br />');
								$('#respond').html('<div class="b4in_comment"><div class="b4in_comment_header"><span class="b4in_comment_byline" id="new_comment_byline"></span><span class="b4in_comment_tools"></span></div><div id="new_comment_text" class="b4in_comment_text"></div></div>');
								$('#new_comment_text').html(ct + '<div class="alert">Notice: Your comment has been accepted.<br />Please allow a few moments before it is visible to others.</div>');
								$('#new_comment_byline').html('Posted by <strong>' + getCookie('b4in_new_pen_name').replace(/\+/g, ' ') + '</strong>');
							});
						} else if (data !== null && typeof data.spam != 'undefined') {
							$('#commentform').fadeOut('slow', function () {
								$('#respond').html('<div class="b4in_comment"><div class="b4in_comment_header"><span class="b4in_comment_byline" id="new_comment_byline"></span><span class="b4in_comment_tools"></span></div><div id="new_comment_text" class="b4in_comment_text"></div></div>');
								$('#new_comment_text').html('<div class="alert">' + data.spam + '</div>');
							});
						} else if (data !== null && typeof data.newcomer != 'undefined') {
							$('#commentform').fadeOut('slow', function () {
								$('#respond').html('<div class="b4in_comment"><div class="b4in_comment_header"><span class="b4in_comment_byline" id="new_comment_byline"></span><span class="b4in_comment_tools"></span></div><div id="new_comment_text" class="b4in_comment_text"></div></div>');
								$('#new_comment_text').html('<div class="alert">' + data.newcomer + '</div>');
							});
						}

						$('.comment-reply-link').hide();
					},
					'json'
				);
			} else {
				alert('Another action is processing. Please wait...')
			}
		});
	}else {
		$('#comment_text').click(function () {
			$('#lightbox').click();
		});
		$('#comment_submit').click(function () {
			$('#lightbox').click();
		});
	}
}

function buildSubcategories(cats) {
    "use strict";
    var newCats, i, cat, soption, subcategory, tempCat;
    newCats = cats.split('|');
    cats = [];
    for (i = 0; i < newCats.length - 1; i++) {
        tempCat = newCats[i].split(',');
        cat.id = tempCat[0];
        cat.name = tempCat[1];
        cats[i] = cat;
    }
    subcategory = document.createElement("select");
    subcategory.id = "subcategory";
    subcategory.name = "subcategory";
    soption = document.createElement("option");
    soption.innerHTML = "Please select a subcategory";
    soption.value = "";
    subcategory.appendChild(soption);
    for (i = 0; i < cats.length; i++) {
        cat = cats[i];
        soption = document.createElement("option");
        soption.innerHTML = cat.name;
        soption.value = cat.id;
        subcategory.appendChild(soption);
    }
    document.getElementById('subcategoryselect').appendChild(subcategory);
}

function setOutput() {
    "use strict";
    var result;
    if (httpObject.readyState === 4) {
        result = httpObject.responseText;
        if (result.length > 0) {
            buildSubcategories(result);
        }
    }
}

function getHTTPObject() {
    "use strict";
    if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        window.alert("Your browser does not support AJAX.");
        return null;
    }
}

function checkSubcategories(category) {
    "use strict";
    httpObject = getHTTPObject();
    if (httpObject !== null) {
        httpObject.open("GET", "/checksubs.php?category=" + category, true);
        httpObject.send(null);
        httpObject.onreadystatechange = setOutput;
    }
}

function getSubcategory(category) {
    "use strict";
    var node = document.getElementById('subcategoryselect');
    if (node.childNodes.length > 0) {
        node.removeChild(node.firstChild);
    }
    if (category !== "") {
        checkSubcategories(category);
    }
}

function findPos(obj) {
    "use strict";
    var curleft, curtop;
    curleft = 0;
    curtop = 0;
    if (obj.offsetParent) {
        curleft = obj.offsetLeft;
        curtop = obj.offsetTop;
        while (obj.offsetParent !== null) {
            obj = obj.offsetParent;
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        }
    }
    return [curleft, curtop];
}

function stop() {
    "use strict";
    clearTimeout(animate);
}

function moveRight() {
    "use strict";
    document.getElementById('admin_drawer').style.left = parseInt(document.getElementById('admin_drawer').style.left, 10) + speed + 'px';
    animate = setTimeout(moveRight, 20);
    if (parseInt(document.getElementById('admin_drawer').style.left, 10) >= stopLoc) {
        stop();
    }
}

function moveLeft() {
    "use strict";
    document.getElementById('admin_drawer').style.left = parseInt(document.getElementById('admin_drawer').style.left, 10) - speed + 'px';
    animate = setTimeout(moveLeft, 20);
    if (parseInt(document.getElementById('admin_drawer').style.left, 10) <= startLoc) {
        stop();
    }
}

function animateTab() {
    "use strict";
    var loc, x, y;
    loc = findPos(document.getElementById('admin_drawer'));
    x = loc[0];
    y = loc[1];
    if (x > 10) {
        moveLeft();
    } else {
        moveRight();
    }
    var h_s = $(window).height();
    var h_bar= $("#admin_box").height();
    var h = h_bar - h_s - 50;
    $("#admin_box").css("height", h_s-70).css("overflow", "auto");
}


function unlikeContributor(story_id) {
	"use strict";
	$.get('/core/ajax/recommend/like_contributor.php', {
		'author_id': $('#author_id').val(),
		'state': 'unlike'
	}, function (data) {
		$('#like_contributor_count').html(data.like_contributor);
	}, 'json');
	$('#like_contributor').css('background', 'url("http://image.b4in.net/recommend_contributor_lg4.png")');
	$('#likeContributorMessage').html('Click here to recommend this contributor');
	readyLikeContributor(story_id);
}

function readyUnlikeContributor(story_id) {
	"use strict";
	$('#like_contributor').unbind();
	$('#like_contributor').click(function () {
		unlikeContributor(story_id);
	});
}

function likeContributor(story_id) {
	"use strict";
	$.get('/core/ajax/recommend/like_contributor.php', {
		'author_id': $('#author_id').val(),
		'state': 'like'
	}, function (data) {
		$('#like_contributor_count').html(data.like_contributor);
	}, 'json');
	$('#like_contributor').css('background', 'url("http://image.b4in.net/recommend_contributor_lg-over4.png")');
	$('#likeContributorMessage').html('You recommend this contributor');
	readyUnlikeContributor(story_id);
}

function readyLikeContributor(story_id) {
	"use strict";
	$('#like_contributor').unbind();
	$('#like_contributor').click(function () {
		likeContributor(story_id);
	});
	$('#like_contributor').hover(function () {
		$('#like_contributor').css('background', 'url("http://image.b4in.net/recommend_contributor_lg-over4.png")');
	}, function () {
		$('#like_contributor').css('background', 'url("http://image.b4in.net/recommend_contributor_lg4.png")');
	});
}

function unlikeStory(story_id) {
	"use strict";
	$.get('/core/ajax/recommend/like_story.php', {
		'story_id': story_id,
		'category_id': $('#category_id').val(),
		'state': 'unlike'
	}, function (data) {
		$('#like_story_count').html(data.like_story);
	}, 'json');
	$('#like_story').css('background', 'url("http://image.b4in.net/recommend_story_lg4.png")');
	$('#likeStoryMessage').html('Click here to recommend this story');
	readyLikeStory(story_id);
}

function readyUnlikeStory(story_id) {
	"use strict";
	$('#like_story').unbind();
	$('#like_story').click(function () {
		unlikeStory(story_id);
	});
}

function likeStory(story_id) {
	"use strict";
	$.get('/core/ajax/recommend/like_story.php', {
		'story_id': story_id,
		'category_id': $('#category_id').val(),
		'state': 'like'
	}, function (data) {
		$('#like_story_count').html(data.like_story);
	}, 'json');
	//    $('#button_like').addClass('story_liked');
	//    $('#button_like').removeClass('story_unliked');
	$('#like_story').css('background', 'url("http://image.b4in.net/recommend_story_lg-over4.png")');
	$('#likeStoryMessage').html('You recommend this story');
	readyUnlikeStory(story_id);
}

function readyLikeStory(story_id) {
	"use strict";
	$('#like_story').unbind();
	$('#like_story').click(function () {
		likeStory(story_id);
	});
	$('#like_story').hover(function () {
		$('#like_story').css('background', 'url("http://image.b4in.net/recommend_story_lg-over4.png")');
	}, function () {
		$('#like_story').css('background', 'url("http://image.b4in.net/recommend_story_lg4.png")');
	});
}

function changeCategory(cat) {
    "use strict";
    $.post('/core/ajax/admin-tab/change_category.php', {
        'url': window.location.href,
        'category_id': cat
    },
   function(data) {
     if(data)
	 	window.location.href=data;
   });
}

function setStoryAttribute(attribute, value) {
	"use strict";
	if (value == true) {
		switch (attribute) {
			case 'allow_popular':
                        case 'allow_hometop25':
                            $('#allow_category_story_checkbox:not(:checked)').click();
			case 'allow_recent':
                            $('#allow_category_story_checkbox:not(:checked)').click();
			case 'allow_category':
			case 'top_china':
			case 'top_alternative':
			case 'top_space':
			case 'top_self_sufficiency':
			case 'top_sci_tech':
			case 'top_unexplained':
			case 'top_spirituality':
			case 'top_money':
			case 'top_politics':
			case 'top_lifestyle':
			case 'top_health':
			case 'top_global':
			case 'top_books':
			case 'top_watercooler':
			case 'featured':
				$('#demote_story_checkbox:checked').click();
				break;
			case 'demote':
				$('input.top_list:checked').click();
				$('#featured_story_checkbox:checked').click();
		}
	}

	$.post('/core/ajax/admin-tab/set_story_attribute.php',
		{
			'url': window.location.href,
			'attribute': attribute,
			'value': value
		},
		function (data) {
		}
	);
}

function setContributorExtraAttribute(attribute, value) {
	$.post('/core/ajax/admin-tab/admin/set_contributor_extra_attribute.php',
		{
			'story_id': $('#story_id').val(),
			'category_id': $('#category_id').val(),
			'author_id': $('#author_id').val(),
			'attribute': attribute,
			'value': value
		},
		function (data) {
			if (typeof data.result != 'undefined' && data.result == false)
				alert(data.message);
		}
	);
}

function setStoryExtraAttribute(attribute, value) {
	$.post('/core/ajax/admin-tab/admin/set_story_extra_attribute.php',
		{
			'story_id': $('#story_id').val(),
			'category_id': $('#category_id').val(),
			'attribute': attribute,
			'value': value
		},
		function (data) {
			if (typeof data.result != 'undefined' && data.result == false)
				alert(data.message);
		}
	);
}

function setBadge(badge, value) {
    "use strict";
    $.post('/set_badge.php', {
        'user_id': $('#author_id').val(),
        'badge': badge,
        'value': value
    });
}

function setProfileAttribute(attribute, value, grantable) {
    "use strict";

    if (value === true) {
        $('#grant_' + attribute + '_profile_checkbox').attr('disabled', false);
    } else {
        $('#grant_' + attribute + '_profile_checkbox').attr('checked', false);
        $('#grant_' + attribute + '_profile_checkbox').attr('disabled', true);
    }
    $.post('/core/ajax/admin-tab/set_profile_attribute.php', {
        'url': window.location.href,
		'user_id': $('#author_id').val(),
        'attribute': attribute,
        'value': value,
        'grantable': grantable
    }, function (data) {

	});
}
var reload_timeout=null;
function myReload(){
	return false;
	if(!checkVideoObject()){
		reload_timeout=setTimeout( function(){
			window.location.reload( true );
		}, 20*60*1000 );
		$('#comment_text').keypress(function () {
			clearTimeout(reload_timeout);
			reload_timeout= setTimeout( function(){
				window.location.reload( true );
			}, 20*60*1000 );
		});
	}
}

var ban_comment_id = 0;
var ban_comment_processing = false;
function handleComments() {
	"use strict";
	if(!hasCookie('b4in_new_user_id')) {
		$('.comment-reply-link').removeAttr("onclick").unbind("click").click(function () {$('#lightbox').click();return false;});
	}

	$('.comment_id').each(function(index) {
		var comment_id = $(this).val();
		$('#comment_processing_' + comment_id).data('processing', false);

		if(hasCookie('b4in_new_user_id')) {
			$('#upvote_comment_' + comment_id).click(function () {
				if ($('#comment_processing_' + comment_id).data('processing') === false) {
					$('#comment_processing_' + comment_id).data('processing', true);
					$('#comment_processing_' + comment_id).show();
					$.post('/core/ajax/comment/vote_comment.php',
						{
							'category_id': $('#category_id').val(),
							'comment_id' : comment_id,
							'state': 'like'
						},
						function(data) {
							$('#comment_processing_' + comment_id).hide();
							$('#comment_processing_' + comment_id).data('processing', false);

							if (data !== null && typeof data.result != 'undefined') {
								if (data.result == true) {
									$('#li-comment-' + comment_id).css('background-color', '#aaffaa');
								} else {
									alert(data.reason)
								}
							}
						},
						'json'
					);
				} else {
					alert('Another action is processing. Please wait...')
				}
			});
			$('#upvote_comment_' + comment_id).mouseover(function () {
				$('#upvote_comment_' + comment_id).attr('src', 'http://image.b4in.net/upvote_active.png');
			});
			$('#upvote_comment_' + comment_id).mouseout(function () {
				$('#upvote_comment_' + comment_id).attr('src', 'http://image.b4in.net/upvote.png');
			});
			$('#downvote_comment_' + comment_id).click(function () {
				if ($('#comment_processing_' + comment_id).data('processing') === false) {
					$('#comment_processing_' + comment_id).data('processing', true);
					$('#comment_processing_' + comment_id).show();
					$.post('/core/ajax/comment/vote_comment.php',
						{
							'category_id': $('#category_id').val(),
							'comment_id' : comment_id,
							'state': 'dislike'
						},
						function(data) {
							$('#comment_processing_' + comment_id).hide();
							$('#comment_processing_' + comment_id).data('processing', false);

							if (data !== null && typeof data.result != 'undefined') {
								if (data.result == true) {
									$('#li-comment-' + comment_id).css('background-color', '#ffaaaa');
								} else {
									alert(data.reason)
								}
							}
						},
						'json'
					);
				} else {
					alert('Another action is processing. Please wait...')
				}
			});
			$('#downvote_comment_' + comment_id).mouseover(function () {
				$('#downvote_comment_' + comment_id).attr('src', 'http://image.b4in.net/downvote_active.png');
			});
			$('#downvote_comment_' + comment_id).mouseout(function () {
				$('#downvote_comment_' + comment_id).attr('src', 'http://image.b4in.net/downvote.png');
			});
			if (isAdmin() || isEditor()) {
				$('#delete_comment_' + comment_id).html('<img id="delete_comment_' + comment_id + '" src="http://image.b4in.net/RoundDeleteButton.png" width="32" height="32" alt="Delete comment" title="Delete comment" class="clickable" />');
				$('#delete_comment_' + comment_id).click(function () {
					if ($('#comment_processing_' + comment_id).data('processing') === false) {
						$('#comment_processing_' + comment_id).data('processing', true);
						$('#comment_processing_' + comment_id).show();
						$.post('/core/ajax/comment/delete_comment.php',
							{
								'category_id': $('#category_id').val(),
								'comment_id' : comment_id
							},
							function(data) {
								$('#comment_processing_' + comment_id).hide();
								$('#comment_processing_' + comment_id).data('processing', false);

								if (data !== null && typeof data.result != 'undefined' && data.result == true) {
									$('#li-comment-' + comment_id).fadeOut('slow');
								}
							},
							'json'
						);
					} else {
						alert('Another action is processing. Please wait...')
					}
				});
			}

			$('#report_spam_comment_' + comment_id).click(function () {
				if ($('#ban_reason').data('processing') === false) {
					$('#ban_reason').data('processing', true);
					$('#comment_processing_' + comment_id).show();
					$.post('/core/ajax/comment/report_spam_comment.php',
						{
							'category_id': $('#category_id').val(),
							'story_url': window.location.href,
							'comment_id' : comment_id,
							'comment_author': $('#comment-' + comment_id + '-author').val(),
							'comment_text': $.trim($('#comment-' + comment_id + ' .comment_content_wrapper').text())
						},
						function(data) {
							if (data !== null && typeof data.result !== 'undefined' && data.result === true) {
								$('#comment_processing_' + comment_id).hide();
								$('#ban_reason').data('processing', false);

								$('#li-comment-' + comment_id).fadeTo('slow', 0.33);
								bin_alert('This comment has been reported to Before It\'s News editors as a spam comment. Thank you!', 'Report spam result');
							} else if (data !== null && typeof data.need_reason != 'undefined' && data.need_reason == true) {
								ban_comment_id = comment_id;
								if ( parseInt ( $ ('#admin_drawer').css('left') ) > 0)
									moveLeft();
								$("#ban_reason").dialog('open');
							}
						},
						'json'
					);
				} else {
					bin_alert('Another action is processing. Please wait...', 'Please wait...')
				}
			});
		}else {
			$('#report_spam_comment_' + comment_id).click(function () {
				$('#lightbox').click();
			});
			$('#upvote_comment_' + comment_id).click(function () {
				$('#lightbox').click();
			});
			$('#upvote_comment_' + comment_id).mouseover(function () {
				$('#upvote_comment_' + comment_id).attr('src', 'http://image.b4in.net/upvote_active.png');
			});
			$('#upvote_comment_' + comment_id).mouseout(function () {
				$('#upvote_comment_' + comment_id).attr('src', 'http://image.b4in.net/upvote.png');
			});
			$('#downvote_comment_' + comment_id).click(function () {
				$('#lightbox').click();
			});
			$('#downvote_comment_' + comment_id).mouseover(function () {
				$('#downvote_comment_' + comment_id).attr('src', 'http://image.b4in.net/downvote_active.png');
			});
			$('#downvote_comment_' + comment_id).mouseout(function () {
				$('#downvote_comment_' + comment_id).attr('src', 'http://image.b4in.net/downvote.png');
			});
		}
	});
}

function readyDisabledContributor() {
	"use strict";
	$('#like_contributor').unbind();
	$('#like_contributor').click(function () {
		$('#lightbox').click();
	});
	$('#like_contributor').hover(function () {
		$('#like_contributor').css('background', 'url("http://image.b4in.net/recommend_contributor_lg-over4.png")');
	}, function () {
		$('#like_contributor').css('background', 'url("http://image.b4in.net/recommend_contributor_lg4.png")');
	});
}

function readyDisabledStory() {
	"use strict";
	$('#like_story').unbind();
	$('#like_story').click(function () {
		$('#lightbox').click();
	});
	$('#like_story').hover(function () {
		$('#like_story').css('background', 'url("http://image.b4in.net/recommend_story_lg-over4.png")');
	}, function () {
		$('#like_story').css('background', 'url("http://image.b4in.net/recommend_story_lg4.png")');
	});
}

function updateRecommendCounter() {
	"use strict";
	var story_id = $('#story_id').val();
	$.post('/core/ajax/recommend/get_recommend_counter_json.php',
		{
			'author_id': $('#author_id').val(),
			'story_id': story_id,
			'category_id': $('#category_id').val()
		},
		function (data) {
			if (data !== null) {
				if (!isNaN(data.like_contributor) && !isNaN(parseInt(data.like_contributor))) {
					$('#like_contributor_count').html(data.like_contributor);
				}
				if (!isNaN(data.like_story) && !isNaN(parseInt(data.like_story))) {
					$('#like_story_count').html(data.like_story);
				}
				if(hasCookie('b4in_new_user_id')) {
						if (data.recommend_contributor) {
							$('#like_contributor').css('background', 'url("http://image.b4in.net/recommend_contributor_lg-over4.png")');
							$('#likeContributorMessage').html('You recommend this contributor');
							readyUnlikeContributor(story_id);
						} else {
							$('#like_contributor').css('background', 'url("http://image.b4in.net/recommend_contributor_lg4.png")');
							$('#likeContributorMessage').html('Click here to recommend this contributor');
							readyLikeContributor(story_id);
						}
						if (data.recommend_story) {
							$('#button_like').addClass('story_liked');
							$('#like_story').css('background', 'url("http://image.b4in.net/recommend_story_lg-over4.png")');
							$('#likeStoryMessage').html('You recommend this story');
							readyUnlikeStory(story_id);
						} else {
							$('#button_like').addClass('story_unliked');
							$('#like_story').css('background', 'url("http://image.b4in.net/recommend_story_lg4.png")');
							$('#likeStoryMessage').html('Click here to recommend this story');
							readyLikeStory(story_id);
						}
				}else {
					$('#likeContributorMessage').html('Join now to recommend this contributor');
					$('#likeStoryMessage').html('Join now to recommend this story');
					readyDisabledContributor();
					readyDisabledStory();
				}
			}
		},
		'json'
	);
}

function updateNewsletterLink() {
	"use strict";
	$.post('/core/ajax/contributor/newsletterpermission.php',
		{
			'author_id': $('#author_id').val()
		},
		function (data) {
			if (data !== null) {
				if (data == 1) {
					$('#subscribenewsletter').html('<a id="newsletter_href" style="cursor: pointer;">Get My BIN Email Newsletter</a>');
					$('#newsletter_href').click(function () {
						$('#lightbox_newsletter').click();
					});
					$('#subscribenewsletterMessage').html('Click here to subscribe to this contributor');
					var sprytooltipnews;
					sprytooltipnews = new Spry.Widget.Tooltip("subscribenewsletterMessage", "#subscribenewsletter");
				} else {
					$('#subscribenewsletter').html("");
				}
			}
		}
	);
}

function getUrlCategoryPage(category_id) {
	var catList = new Array();

	catList['0000000000000001'] = 'celebrities';
	catList['0000000000000002'] = 'china';
	catList['0000000000000003'] = 'funnews';
	catList['0000000000000033'] = 'movies';
	catList['0000000000000005'] = 'health';
	catList['0000000000000006'] = 'international';
	catList['0000000000000008'] = 'obama';
	catList['0000000000000010'] = 'resources';
	catList['0000000000000011'] = 'spirit';
	catList['0000000000000013'] = 'science-technology';
	catList['0000000000000015'] = 'economy';
	catList['0000000000000016'] = 'sports';
	catList['0000000000000017'] = 'environment';
	catList['0000000000000019'] = 'arts';
	catList['0000000000000020'] = 'thelaw';
	catList['0000000000000021'] = 'financial';
	catList['0000000000000023'] = 'gold';
	catList['0000000000000024'] = 'energy';
	catList['0000000000000025'] = 'business';
	catList['0000000000000026'] = 'alternative';
	catList['0000000000000027'] = 'entertainment';
	catList['0000000000000028'] = 'opinion-conservative';
	catList['0000000000000029'] = 'opinion-liberal';
	catList['0000000000000030'] = 'media';
	catList['0000000000000042'] = 'tv';
	catList['0000000000000053'] = 'economics-politics';
	catList['0000000000000057'] = 'politics';
	catList['0000000000000062'] = 'religion';
	catList['0000000000000071'] = 'crime-all-stars';
	catList['0000000000000074'] = 'military';
	catList['0000000000000076'] = 'survival';
	catList['0000000000000078'] = 'immigration';
	catList['0000000000000079'] = 'libertarian';
	catList['0000000000000080'] = 'banksters';
	catList['0000000000000084'] = 'animal-pets';
	catList['0000000000000085'] = 'india';
	catList['0000000000000087'] = 'fedgate';
	catList['0000000000000096'] = 'terrorism';
	catList['0000000000000098'] = 'scandals';
	catList['0000000000000099'] = 'uspolitics';
	catList['0000000000000100'] = 'iran';
	catList['0000000000000101'] = 'strange';
	catList['0000000000000104'] = 'teaparty';
	catList['0000000000000105'] = 'weather';
	catList['0000000000000106'] = 'earthquakes';
	catList['0000000000000107'] = 'pressreleases';
	catList['0000000000000108'] = 'healthcare';
	catList['0000000000000118'] = 'prophecy';
	catList['0000000000000121'] = 'israel';
	catList['0000000000000125'] = 'freeenergy';
	catList['0000000000000178'] = 'awesome-time-wasters';
	catList['0000000000000135'] = 'christiannews';
	catList['0000000000000136'] = 'gadgets';
	catList['0000000000000138'] = 'gulf-oil-spill';
	catList['0000000000000142'] = 'space';
	catList['0000000000000143'] = 'paranormal';
	catList['0000000000000144'] = '9-11-and-ground-zero';
	catList['0000000000000145'] = 'obama-birthplace-controversy';
	catList['0000000000000146'] = 'conspiracy-theories';
	catList['0000000000000147'] = 'war-and-conflict';
	catList['0000000000000148'] = 'education';
	catList['0000000000000150'] = 'power-elite';
	catList['0000000000000151'] = 'travel';
	catList['0000000000000153'] = 'green-living';
	catList['0000000000000154'] = 'opinion';
	catList['0000000000000156'] = 'spies-and-intelligence';
	catList['0000000000000158'] = 'election2012';
	catList['0000000000000159'] = 'marijuana-debate';
	catList['0000000000000162'] = 'comic-relief';
	catList['0000000000000164'] = 'foreclosure-gate';
	catList['0000000000000166'] = 'tsa-controversy';
	catList['0000000000000167'] = 'wikileaks';
	catList['0000000000000168'] = 'chemtrails';
	catList['0000000000000169'] = 'mass-animal-death';
	catList['0000000000000171'] = 'global-unrest';
	catList['0000000000000172'] = 'blogging';
	catList['0000000000000176'] = 'japan-earthquake';
	catList['0000000000000177'] = 'war-on-terror';
	catList['0000000000000180'] = 'self-sufficiency';
	catList['0000000000000181'] = 'outdoors';
	catList['0000000000000182'] = '2012';
	catList['0000000000000183'] = 'diy';
	catList['0000000000000184'] = 'middleeast';
	catList['0000000000000185'] = 'cooking-and-recipes';
	catList['0000000000000186'] = 'fantasy-sports';
	catList['0000000000000195'] = 'protests-demonstrations';
	catList['0000000000000194'] = 'metaphysics';
	catList['0000000000000193'] = 'motor-junkies';
	catList['0000000000000038'] = 'events';
	catList['0000000000000077'] = 'religion';
	catList['0000000000000179'] = 'awesome-time-wasters';
	catList['0000000000000123'] = 'forex';
	catList['0000000000000137'] = 'food-farming';
	catList['0000000000000140'] = 'afican-american';
	catList['0000000000000139'] = 'native-american';
	catList['0000000000000117'] = 'letters-to-the-editor';
	catList['0000000000000130'] = 'agriculture';
	catList['0000000000000127'] = 'astrology';
	catList['0000000000000196'] = 'books';
	catList['0000000000000198'] = 'eu';
	catList['0000000000000046'] = 'markets';
	catList['0000000000000155'] = 'personal-finance';
	catList['0000000000000044'] = 'pictures';
	catList['0000000000000092'] = 'republican';
	catList['0000000000000102'] = 'shen-yun';
	catList['0000000000000049'] = 'silver';
	catList['0000000000000111'] = 'arabic-news';
	catList['0000000000000059'] = 'relationship';
	catList['0000000000000197'] = 'family-parenting';
	catList['0000000000000199'] = 'beyond-science';

	return catList[category_id];
}



function updateSubscribe() {
    "use strict";
    $('#lightbox_subscribe').fancybox({
        'titleShow': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        onStart: function () {},
        onComplete: function () {},
        onCancel: function () {},
        onClosed: function () {
            setCookie('b4in_new_subscribe_new', Date.parse(new Date()), '1', '/', '', '');
            _gaq.push(['_trackEvent', 'story roadblock', 'closed']);
        }
    });
    if (!hasCookie('b4in_new_subscribe_notshow') && !hasCookie('b4in_new_subscribe_new')) {
        setCookie('b4in_new_subscribe_new', Date.parse(new Date()), '0', '/', '', '');
        $('#lightbox_subscribe').click();
        _gaq.push(['_trackEvent', 'story roadblock', 'opened']);
    }
}
var story_counter_hour = 0;
function storyTrack(){
	$.post('/core/ajax/counter/story.php', {
		story_id: $('#story_id').val(),
		category_id: $('#category_id').val(),
		author_id: $('#author_id').val()
	}, function (data) {
		if(data) {
			var list=data.split('|');
			story_counter_hour = parseInt(list[2]);
			$('#counter_hour').html(add_commas(story_counter_hour));
			$('#counter_day').html(add_commas(list[1]));
			$('#counter_total').html(add_commas(list[0]));
			updateStats();
		}
	} );

}
function getStoryId(){
    return  $('#story_id').val();
}
function getCategoryId(){
    return  $('#category_id').val();
}

function loadStripMall(){
    return; // Disable stripmall
    
    var mobile_device_detector = new MobileDetect(window.navigator.userAgent);
    if (!mobile_device_detector.mobile() && !$('#clarifying_the_truth').length) {
        $.get('/static/data/story-stripmall-new.html',
            function (list) {
                if(list) {
                    var ads_count = 0, index;
                    while(list.length > 0 && ads_count < 15){
    //					var imgHeight = document.getElementById("stripmall").clientHeight;
    //					if(imgHeight>2500) break;

                        index = Math.floor(Math.random() * list.length);
                        $('#stripmall').append(list[index]);
                        list.splice(index,1);
                        ads_count++;
                    }
                }
            },
            'json'
        );
    }
}

function updateMostPopularStories() {
	  $.get('/static/data/today-top-stories.html', {

      }, function (data) {
      	 if(data) {
		   $('#top_headlines').html(data);
		  }
  	  } );
	  $.get('/static/data/today-top-recent.html', {

      }, function (data) {
       if(data) {
		   $('#recent_stories').html(data);
		  }
  	  } );
}
function checkEmail(email) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(email)) {
		alert('Please provide a valid email address');
		email.focus;
		return false;
	}
	else
	{
		return true;
	}
}

function QuickSubscribeUser()
{
	var email = document.getElementById('subscribe_user_email').value;
	var story_id=$('#story_id').val();
	var cate_id=$('#category_id').val();

	email = trimText(email);
	if(checkEmail(email))
	{
		$("#loading").show();
		$.post('/bottom_send_mail/mail_get_alert.php', {mail:email, story_id:story_id, cate_id:cate_id}, function(data){
			$("#loading").hide();
			if(data > '0')
			{
				if(data == '2')
				{
					var r = confirm("This story already sent to your email. Do you really want to get again?");
					if(r == true)
					{
					    $("#loading").show();
					    $.post('/bottom_send_mail/mail_get_alert.php', {mail:email, story_id:story_id, cate_id:cate_id, confirm: true}, function(data)
						{
					        $("#loading").hide();
					        if(data == '1')
					        {
					            url = "/bottom_send_mail/email.php";
                				url +="?email="+email;
                				$("#lightbox_email_send").attr('href', url);
                				$("#lightbox_email_send").click();
					        }
					        else
					        {
					            alert("Fail! Try it again.");
					        }
					    });
					}
				}
				else
				{
    				url = "/bottom_send_mail/email.php";
    				url +="?email="+email;
    				$("#lightbox_email_send").attr('href', url);
    				$("#lightbox_email_send").click();
				}
			}
			else{
				alert("Fail! Try it again.");
			}
		});
	}
}

function checkAll()
{
	var check = $('#check_all').attr("checked");
	var check_value = false;
	if (check == true || check == 'checked')
		check_value = true;
	var forma1 = $('#unsub_form input');
	for (var i = 0; i < forma1.length; i++)
	{
		if (forma1[i].type == "checkbox")
		{
			forma1[i].checked = check_value;
		}
	}
}

function SubmitAlertEmailAjax()
{
	$("#fxbloading").show();
	var form = $('#unsub_form');
	$.ajax( {
		type: "POST",
		url: form.attr( 'action' ),
		data: form.serialize(),
		success: function() {
			$("#fxbloading").hide();
			$.fancybox.close();
		}
	} );
}

$(document).ready(function () {
	"use strict";
	story_description = $("meta[property='og:description']").attr("content");
	story_thumbnail = $("meta[property='og:image']").attr("content");
	var d;
	d = new Date();
	$('#date').html(d.toLocaleString().replace(/:\d\d[^:].*/, ''));
	$.ajaxSetup({
		cache: false
	});
	$('#lightbox_email').fancybox({
		titleShow: false,
		opacity: true,
		transitionIn: 'elastic',
		transitionOut: 'none'
	});
	$('#lightbox_email_send').fancybox({
		'titleShow':false,
		'transitionIn':'false',
		'transitionOut':'false'
	});
	$('#lightbox_newsletter').fancybox({
		'titleShow':false,
		'transitionIn':'none',
		'transitionOut':'none'
	});
	handleStory();
	handleComments();
	showCommentSubmit();
	freeze();
	setupReportAbuse();
	myReload();
	loadDeferredScripts();
	/*createCommentCaptcha();*/
	updateMostPopularStories();
	loadStripMall();
	storyTrack();
	
	// Update "Newsletter sign up" for old stories
	if ($('#bf_social_send_special_email').parent('#breadcrumbs').length == 0) {
		var bf_social_send_special_email = $('#bf_social_send_special_email').detach();
		$('#breadcrumbs').append(bf_social_send_special_email);
		bf_social_send_special_email.css('float', 'right');
		bf_social_send_special_email.css('margin-top', '-2px');
		bf_social_send_special_email.css('font', '14px "Scada", Helvetica, sans-serif');
		bf_social_send_special_email.css('margin-left', '50px');
		$('#bf_social_send_special_email>span').text('Free Newsletter: ');
	}

	if(checkMobile()) $('#social_bottom_float').hide();
	$("#subscribe_user_email").keyup(function(e){
		if(e.keyCode == 13) {
			QuickSubscribeUser();
		}
	});

//	setTimeout(showBottomFloatStory, 5000);

	$('#ban_reason').data('processing', false);
	$('#ban_reason').dialog({
		resizable: false,
		height: 400,
		width: 600,
		draggable: false,
		modal: true,
		autoOpen: false,
		title: 'Ban commenter confirmation',
		buttons: {
			OK: function() {
				if ($.trim($('#ban_reason_content').val()) !== '') {
					ban_comment_processing = true;
					$.post('/core/ajax/comment/report_spam_comment.php',
						{
							'category_id': $('#category_id').val(),
							'story_url': window.location.href,
							'comment_id' : ban_comment_id,
							'comment_author': $('#comment-' + ban_comment_id + '-author').val(),
							'comment_text': $.trim($('#comment-' + ban_comment_id + ' .comment_content_wrapper').text()),
							'ban_reason': $.trim($('#ban_reason_content').val())
						},
						function (return_data) {
							if (return_data !== null && typeof return_data.banned_count !== 'undefined' && typeof return_data.banned_days !== 'undefined') {
								$('#li-comment-' + ban_comment_id).fadeOut('slow');
								bin_alert('This comment has been deleted and the commenter has been banned total ' + return_data.banned_count + ' times. He can comment again after ' + return_data.banned_days + ' days.', 'Ban commenter result!');
							} else
								bin_alert('Something went wrong! Go take a well-deserved break and check again in a little while.', 'Failed!');

							$('#comment_processing_' + ban_comment_id).hide();
							$('#ban_reason').data('processing', false);
							ban_comment_processing = false;
						},
						'json'
					);
					$(this).dialog("close");
				}
			},
			Cancel: function() {
				$(this).dialog("close");
			}
		},
		open: function( event, ui ) {
			$('.ui-widget').css('font-size', '15px');
			$('#ban_reason_content').val('');
		},
		close: function( event, ui ) {
			if (ban_comment_processing === false) {
				$('#comment_processing_' + ban_comment_id).hide();
				$('#ban_reason').data('processing', false);
			}
		}
	});

	$('#bin_alert').dialog({
		resizable: false,
		draggable: false,
		modal: true,
		autoOpen: false,
		buttons: {
			OK: function() {
				$(this).dialog("close");
			},
		},
		open: function( event, ui ) {
			$('.ui-widget').css('font-size', '15px');
		}
	});
    
    handleSDMbuttons();
});

var enable_bottom_story = true;
var bottom_stories_list, bottom_stories_list_admin;
function showBottomFloatStory() {
	"use strict";
	if (hasCookie('b4in_new_user_option_disable_float_story'))
		return;
	
	var story = document.getElementById('bottom_float_story');
	if (story) {
		$(story).css('bottom', $('#social_bottom_float').height());
		$(window).scroll(function (event) {
			if (enable_bottom_story && ($('#related_stories').offset().top - $(window).scrollTop() - $(window).height() + $('#related_stories').height() + $('#social_bottom_float').height() < 0) && $('#bottom_float_story').css('visibility') == 'hidden') {
				$('#bottom_float_story').css('visibility', 'visible');
			} else {
				if (enable_bottom_story && ($('#related_stories').offset().top - $(window).scrollTop() - $(window).height() + $('#related_stories').height() + $('#social_bottom_float').height() >= 0) && $('#bottom_float_story').css('visibility') == 'visible') {
					$('#bottom_float_story').css('visibility', 'hidden');
				}
			}
		});
		toogle_disable_bottom_stories();
	} else {
		showRandomBottomFloatStory();
	}
}

function showRandomBottomFloatStory() {
	"use strict";
	$.get('/static/data/bottom_stories_list.json',
		function(data) {
			bottom_stories_list = data;
			$.get('/static/data/top_10_alternative_list.json',
				function(data) {
					var index = bottom_stories_list.count;
					var i;
					for (i = 0; i< data.count; i++) {
						bottom_stories_list.stories[index + i] = data.stories[i];
						bottom_stories_list.count++;
					}
					if (bottom_stories_list.count > 0) {
						index = Math.floor(Math.random() * (bottom_stories_list.count));
						var story = bottom_stories_list.stories[index];
						// Check duplicate with this story
						if ($('#category_id').val() == story.blog_id && $('#story_id').val() == story.story_id) {
							if (index > 0)
								index--;
							else {
								if (index < bottom_stories_list.count - 1)
									index++;
								else
									return;
							}
							story = bottom_stories_list.stories[index];
						}
						$('#social_bottom_float').after('<div id="bottom_float_story"><h4 style="float: left">Recommended story:</h4><div id="close_bottom_story" style="float: right; padding: 2px 1px; cursor: pointer;" onclick="close_bottom_story();"><img src="http://image.b4in.net/close_bottom_story.png" title="Hide this recommended story" alt="Hide this" /></div><div style="clear: both"></div><h5><a href="' + story.url + '">' + story.title + '</a></h5><div id="turn_off_float_story_link" style="float: right; margin: 0 5px 5px; font-size: 10px;"><a href="#" onclick="$(\'#turn_off_float_story\').dialog(\'open\'); return false;">Disable all recommended stories</a></div></div>');
						story = document.getElementById('bottom_float_story');
						$(story).css('bottom', $('#social_bottom_float').height());
						$(window).scroll(function (event) {
							if (enable_bottom_story && ($('#related_stories').offset().top - $(window).scrollTop() - $(window).height() + $('#related_stories').height() + $('#social_bottom_float').height() < 0) && $('#bottom_float_story').css('visibility') == 'hidden') {
								$('#bottom_float_story').css('visibility', 'visible');
							} else {
								if (enable_bottom_story && ($('#related_stories').offset().top - $(window).scrollTop() - $(window).height() + $('#related_stories').height() + $('#social_bottom_float').height() >= 0) && $('#bottom_float_story').css('visibility') == 'visible') {
									$('#bottom_float_story').css('visibility', 'hidden');
								}
							}
						});
						
						toogle_disable_bottom_stories();
					}
				},
				'json'
			);
		},
		'json'
	);
}

function set_bottom_story(checked) {
	"use strict";
	$.post('/core/ajax/admin-tab/put_story_to_bottom_list.php',
		{
			'category_id': $('#category_id').val(),
			'story_id' : $('#story_id').val(),
			'state': checked ? 1 : 0
		}
	);
}

function get_bottom_stories_list_admin() {
	"use strict";
	$.get('/static/data/bottom_stories_list.json',
		function(data) {
			bottom_stories_list_admin = data;
			$.get('/static/data/top_10_alternative_list.json',
				function(data) {
					var bottom_float_list_html = '<strong>Attach a story to bottom:</strong> <select style="width: 140px" onchange="attach_to_bottom(this.options[selectedIndex].value);">';
					bottom_float_list_html += '<option value=""></option>';
					var bottom_float_checkbox_html = '<input type="checkbox" onclick="set_bottom_story(this.checked)" name="set_bottom_story_checkbox" id="set_bottom_story_checkbox" style="float: left;"';
					var index = bottom_stories_list_admin.count;
					var i;
					for (i = 0; i < data.count; i++) {
						bottom_stories_list_admin.stories[index + i] = data.stories[i];
						bottom_stories_list_admin.count++;
					}
					if (bottom_stories_list_admin.count > 0) {
						var story;
						var category_id = $('#category_id').val();
						var story_id = $('#story_id').val();
						for ( i = 0; i < bottom_stories_list_admin.count; i++) {
							story = bottom_stories_list_admin.stories[i];
							if (story.blog_id == category_id && story.story_id == story_id) {
								bottom_float_checkbox_html += ' checked="checked"';
							}
							if (typeof bottom_float_category_id != 'undefined' && story.blog_id == bottom_float_category_id && story.story_id == bottom_float_story_id)
								bottom_float_list_html += '<option value="' + story.blog_id + '-' + story.story_id + '" selected="selected">' + story.title + '</option>';
							else
								bottom_float_list_html += '<option value="' + story.blog_id + '-' + story.story_id + '">' + story.title + '</option>';
						}
					}

					bottom_float_list_html += '</select>';
					bottom_float_checkbox_html += ' /> <label for="set_bottom_story_checkbox" style="margin-top: 4px; display: block; float: left;">Insert this story into bottom stories list</label>';

					$('#bottom_stories_list').html(bottom_float_list_html);
					$('#bottom_story_set').html(bottom_float_checkbox_html);
				},
				'json'
			);
		},
		'json'
	);
}

function attach_to_bottom(category_story) {
	"use strict";
	var category_id;
	var story_id;
	if (category_story == '') {
		category_id = 0;
		story_id = 0
	} else {
		category_story = category_story.split('-');
		category_id = category_story[0];
		story_id = category_story[1];
	}

	$.post('/core/ajax/admin-tab/attach_to_bottom.php',
		{
			'category_id': $('#category_id').val(),
			'story_id' : $('#story_id').val(),
			'attached_category_id': category_id,
			'attached_story_id': story_id
		}
	);
}

function close_bottom_story() {
	"use strict";
	enable_bottom_story = false;
	$('#bottom_float_story').fadeOut(2000);
}

function bin_alert (message, title) {
	$("#bin_alert").html(message);
	$("#bin_alert").dialog('option', {title: title});
	$("#bin_alert").dialog('open');
}

function toogle_disable_bottom_stories() {
	if (isLoggedIn())
		$('#turn_off_float_story').dialog({
			resizable: false,
			draggable: false,
			modal: true,
			autoOpen: false,
			title: 'Disable recommended stories',
			buttons: {
				OK: function() {
					$(this).dialog("close");
					window.location.href = '/dashboard/?page=user';
				},
			},
			open: function( event, ui ) {
				$('.ui-widget').css('font-size', '15px');
			}
		});
	else {
		$('#turn_off_float_story_link').html('');
	}
}

function close_bottom_story_ads() {
	$('#bottom_story_ads').hide();
}

function handleSDMbuttons() {
	"use strict";
	var sdesc, stitle, sdm_url, story_url, domain_parts, root_domain;
	sdesc = encodeURIComponent(story_description);
	stitle = encodeURIComponent(addslashes($('#headline').text()));

	// Create sdm
	domain_parts = window.location.hostname.split('.');
	root_domain = domain_parts[domain_parts.length - 2] + '.' + domain_parts[domain_parts.length - 1];
	story_url = 'http://' + root_domain + window.location.pathname;
	if (domain_parts.length > 2) {
		// Current sdm
		sdm_url = 'http://' + window.location.hostname + window.location.pathname;
	} else {
		// New sdm
		var path_parts = window.location.pathname.split('/');
		var path_tail = path_parts[path_parts.length - 1];
		var path_tail_parts = path_tail.split('-');
		if (path_tail_parts.length > 2) {
			sdm_url = 'http://' + path_tail_parts[path_tail_parts.length - 3] + '-' + path_tail_parts[path_tail_parts.length - 2] + '.' + root_domain + window.location.pathname;
		} else {
			sdm_url = 'http://' + path_tail_parts[0] + '.' + root_domain + window.location.pathname;
		}
	}

	// Create facebook share button
	var facebook_share_url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(sdm_url);
	var facebook_share_sdm_button = '<a href="' + facebook_share_url + '" onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=270,width=500\');return false;"> <img src="//image.b4in.net/social/facebook_inline_share.png" alt="Share on Facebook"/></a>';
	$('#top_clarifying_facebook_share_button').html(facebook_share_sdm_button);
	$('#bottom_clarifying_facebook_share_button').html(facebook_share_sdm_button);

	// Create twitter share button
	var tweet_share_url = 'https://twitter.com/share?url=' + encodeURIComponent(sdm_url) + '&text=' + stitle + '&counturl=' + encodeURIComponent(story_url);
	var tweet_share_sdm_button = '<a href="' + tweet_share_url + '" onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=270,width=500\');return false;"> <img src="//image.b4in.net/social/twitter_inline_share.png" alt="Share on Twitter"/></a>';
	$('#top_clarifying_tweet_share_button').html(tweet_share_sdm_button);
	$('#bottom_clarifying_tweet_share_button').html(tweet_share_sdm_button);

	// Create google plus share button
	var goolge_share_sdm_button = '<a href="https://plus.google.com/share?url=' + encodeURIComponent(sdm_url) + '" onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\');return false;"> <img src="//image.b4in.net/social/google_inline_share.png" alt="Share on Google+"/></a>';
	$('#top_clarifying_google_share_button').html(goolge_share_sdm_button);
	$('#bottom_clarifying_google_share_button').html(goolge_share_sdm_button);

	// Create Stumbleupon share button
	var sumbleupon_share_sdm_button = '<a href="https://www.stumbleupon.com/submit?url=' + encodeURIComponent(sdm_url) + '&title=' + stitle + '" onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=800,width=570\');return false;"> <img src="//image.b4in.net/social/stumbleupon_inline_share.png" alt="Share on Stumbleupon"/></a>';
	$('#top_clarifying_sumbleupon_share_button').html(sumbleupon_share_sdm_button);
	$('#bottom_clarifying_sumbleupon_share_button').html(sumbleupon_share_sdm_button);

	// Make inline email share buttons clickable
	$('#top_clarifying_email_share_button').click(function () {
		emailShareClick();
	});
	$('#bottom_clarifying_email_share_button').click(function () {
		emailShareClick();
	});
}

