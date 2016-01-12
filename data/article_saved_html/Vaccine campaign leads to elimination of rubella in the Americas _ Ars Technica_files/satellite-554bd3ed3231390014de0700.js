_satellite.pushAsyncScript(function(event, target, $variables){
  /*
The MIT License (MIT)

Copyright (c) 2015 FuckAdBlock

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



(function(window) {
    if (window.sniffAdBlock !== undefined) {
        return;
    }

    var SniffAdBlock = function(options) {
        if (options !== undefined) {
            this.setOption(options);
        }

        var self = this;
        var eventCallback = function() {
            setTimeout(function() {
                if (self._options.checkOnLoad === true) {
                    if (self._var.bait === null) {
                        self._creatBait();
                    }
                    setTimeout(function() {
                        self.check();
                    }, 1);
                }
            }, 1);
        };
        if (window.addEventListener) {
            window.addEventListener('load', eventCallback, false);
        } else {
            window.attachEvent('onload', eventCallback);
        }
    };
    SniffAdBlock.prototype._options = {
        checkOnLoad: true,
        resetOnEnd: true,
        loopCheckTime: 50,
        loopMaxNumber: 5,
        baitClass: 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links',
        baitStyle: 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;'
    };
    SniffAdBlock.prototype._var = {
        version: '3.0.1',
        bait: null,
        checking: false,
        loop: null,
        loopNumber: 0,
        event: {
            detected: [],
            notDetected: []
        }
    };
    SniffAdBlock.prototype._bait = null;

    SniffAdBlock.prototype.setOption = function(options, value) {
        if (value !== undefined) {
            var key = options;
            options = {};
            options[key] = value;
        }
        for (option in options) {
            this._options[option] = options[option];
        }
        return this;
    };

    SniffAdBlock.prototype._creatBait = function() {
        var bait = document.createElement('div');
        bait.setAttribute('class', this._options.baitClass);
        bait.setAttribute('style', this._options.baitStyle);
        this._var.bait = window.document.body.appendChild(bait);

        this._var.bait.offsetParent;
        this._var.bait.offsetHeight;
        this._var.bait.offsetLeft;
        this._var.bait.offsetTop;
        this._var.bait.offsetWidth;
        this._var.bait.clientHeight;
        this._var.bait.clientWidth;
    };
    SniffAdBlock.prototype._destroyBait = function() {
        window.document.body.removeChild(this._var.bait);
        this._var.bait = null;
    };

    SniffAdBlock.prototype.check = function(loop) {
        if (loop === undefined) {
            loop = true;
        }

        if (this._var.checking === true) {
            return false;
        }
        this._var.checking = true;

        if (this._var.bait === null) {
            this._creatBait();
        }

        var self = this;
        this._var.loopNumber = 0;
        if (loop === true) {
            this._var.loop = setInterval(function() {
                self._checkBait(loop);
            }, this._options.loopCheckTime);
        }
        this._checkBait(loop);

        return true;
    };
    SniffAdBlock.prototype._checkBait = function(loop) {
        var detected = false;

        if (this._var.bait === null) {
            this._creatBait();
        }

        if (window.document.body.getAttribute('abp') !== null || this._var.bait.offsetParent === null || this._var.bait.offsetHeight == 0 || this._var.bait.offsetLeft == 0 || this._var.bait.offsetTop == 0 || this._var.bait.offsetWidth == 0 || this._var.bait.clientHeight == 0 || this._var.bait.clientWidth == 0) {
            detected = true;
        }
        if (window.getComputedStyle !== undefined) {
            var baitTemp = window.getComputedStyle(this._var.bait, null);
            if (baitTemp.getPropertyValue('display') == 'none' || baitTemp.getPropertyValue('visibility') == 'hidden') {
                detected = true;
            }
        }

        if (loop === true) {
            this._var.loopNumber++;
            if (this._var.loopNumber >= this._options.loopMaxNumber) {
                clearInterval(this._var.loop);
                this._var.loop = null;
                this._var.loopNumber = 0;
            }
        }

        if (detected === true) {
            if (loop === true) {
                this._var.checking = false;
            }
            this._destroyBait();
            this.emitEvent(true);
        } else if (this._var.loop === null || loop === false) {
            if (loop === true) {
                this._var.checking = false;
            }
            this._destroyBait();
            this.emitEvent(false);
        }
    };

    SniffAdBlock.prototype.emitEvent = function(detected) {
        var fns = this._var.event[(detected === true ? 'detected' : 'notDetected')];
        for (i in fns) {
            fns[i]();
        }
        if (this._options.resetOnEnd === true) {
            this.clearEvent();
        }
        return this;
    };
    SniffAdBlock.prototype.clearEvent = function() {
        this._var.event.detected = [];
        this._var.event.notDetected = [];
    };

    SniffAdBlock.prototype.on = function(detected, fn) {
        this._var.event[(detected === true ? 'detected' : 'notDetected')].push(fn);
        return this;
    };
    SniffAdBlock.prototype.onDetected = function(fn) {
        return this.on(true, fn);
    };
    SniffAdBlock.prototype.onNotDetected = function(fn) {
        return this.on(false, fn);
    };

    window.sniffAdBlock = new SniffAdBlock();
})(window);
});
