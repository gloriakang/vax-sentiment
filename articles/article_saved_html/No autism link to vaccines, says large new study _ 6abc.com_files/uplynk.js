var uplynk = (function($) {
    "use strict";
    var uplynk = (function() {
        return {
            MIN_FLASH_VERSION : '10.2.0',
            FLASH_PLAYER : 'flash',
            HTML5_PLAYER : 'html5',
            VERSION : '15070100'
        };
    })(), 

    param = function(name)
    {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if(results === null)
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    },
    
    inDev = function()
    {
        var parts = window.location.href.split(':');
        return parts.length === 3 && parts[2].substring(0,4) === '8000' && param('_inDev');
    },

    siteName = function()
    {
        try {
            var index = window.location.href.indexOf("downlynk") 
            if (index >= 0)
            {
                    return "downlynk"
            }
        } catch (e) {};
        return 'uplynk';
    },

    SWFURL = function()
    {
        if (inDev())
            return 'dev.swf';
        return '//storage.'+siteName()+'.com/client/latest_upLynkPlayer.swf';
    },

    S4 = function() { return (((1+Math.random())*0x10000)|0).toString(16).substring(1); },

    guid = function() { return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()); },

    events = { // all events are in the player.* domain
        PLAYER_READY : 'player.ready',
        PLAYER_MEDIA_ENDED : 'player.mediaended',
        PLAYER_STATE_CHANGED: 'player.statechanged',
        PLAYER_ERROR : 'player.error',
        PLAYER_VOLUME_CHANGED : 'player.volumechanged',
        PLAYER_ON_ASSET_INFO : 'player.assetInfoAvailable',
        PLAYER_ON_ID3 : 'player.onID3',
        PLAYER_AD_CLICKED : 'player.onAdClicked'
    },

    env = (function(win, doc, nav) {
        var browser = {
            detect: function(){
              var os = this.search(this.data.os);
              var useFlash = param("noFlash") ? false : ($.inArray(os, ['Windows', 'Mac', 'Linux']) != -1 || param('useFlash').length > 0);
              return {
                browser : this.search(this.data.browser),
                version : this.search(nav.userAgent) || this.search(nav.appVersion),
                os : this.search(this.data.os),

                // only allow flash on non mobile devices now
                useFlash : useFlash,
                hasFlash : useFlash && swfobject.hasFlashPlayerVersion(uplynk.MIN_FLASH_VERSION),
                iOS : $.inArray(os, ['iPhone/iPod', 'iPad']) != -1
            } },
            search: function(data) {
              if (typeof data === "object"){
                // search for string match
                for(var i = 0; i < data.length; i++) {
                  var dataString = data[i].string,
                      dataProp   = data[i].prop;
                  this.version_string = data[i].versionSearch || data[i].identity;
                  if (dataString){
                    if (dataString.indexOf(data[i].subString) != -1){
                      return data[i].identity;
                    }
                  } else if (dataProp){
                    return data[i].identity;
                  }
                }
              } else {
                // search for version number
                var index = data.indexOf(this.version_string);
                if (index == -1) return;
                return parseFloat(data.substr(index + this.version_string.length + 1));
              }
            },
            data: {
              browser: [
                { string: nav.userAgent, subString: "Chrome", identity: "Chrome" },
                { string: nav.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" },
                { string: nav.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version" },
                { prop:   win.opera, identity: "Opera", versionSearch: "Version" },
                { string: nav.vendor, subString: "iCab",identity: "iCab" },
                { string: nav.vendor, subString: "KDE", identity: "Konqueror" },
                { string: nav.userAgent, subString: "Firefox", identity: "Firefox" },
                { string: nav.vendor, subString: "Camino", identity: "Camino" },
                { string: nav.userAgent, subString: "Netscape", identity: "Netscape" },
                { string: nav.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" },
                { string: nav.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv" },
                { string: nav.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla" }
              ],
              os: [
                { string: nav.platform, subString: "Win", identity: "Windows" },
                { string: nav.platform, subString: "Mac", identity: "Mac" },
                { string: nav.userAgent, subString: "iPhone", identity: "iPhone/iPod" },
                { string: nav.userAgent, subString: "iPad", identity: "iPad" },
                { string: nav.userAgent, subString: "Android", identity: "Android" },
                { string: nav.userAgent, subString: "Silk/", identity: "Android"},
                { string: nav.platform, subString: "Linux", identity: "Linux" }
              ]}
          };

        return browser.detect();
    })(window, document, navigator),
    
    players = function() {
        var methods = 'init,destroy,player,loaded,ready,load,play,pause,stop,currentTime,muted,volume,duration'.split(','),
        
        flash = {},

        html5 = {};

        $.each(methods, function(i, method) {
            flash[method] = function() { };
            html5[method] = function() { };
        });

        $.extend(html5, {
            init : function() { 

                var options = {},

                cb = null,

                playerID = 'uplynk_' + guid(),
                
                video = document.createElement('video'),
                
                attrs = {
                    controls : true,
                    id : playerID,
                    width : "100%",
                    height : "100%",
                    uplynk_type : uplynk.HTML5_PLAYER,
                    uplynk_loaded : true
                };

                if (arguments.length === 1)
                {
                    if ($.isFunction(arguments[0]))
                    {
                        cb = arguments[0];
                    }
                    else
                    {
                        options = arguments[0];
                    }
                }
                // extend the options and params if they were given to us
                else if (arguments.length === 2)
                {
                    options = arguments[0];
                    cb = arguments[1];
                }

                delete options['swfURL'];
                delete options['expressInstall'];
                delete options['params'];

                if (options.attributes)
                {
                    $.extend(attrs, options.attributes);
                    delete options['attributes'];
                }

                $.extend(attrs, options);

                // keep original content for cases where video element is not supported
                $(video).attr(attrs);

                var nosupport = $(this).children('[error=nohls]').detach();
                if (nosupport.get(0))
                    this.data('error_nohls', nosupport);
                

                this.empty().append(video).attr('uplynk_loaded', 'true');
                $(video).bind('error', function(e) {
                    var p = $(e.srcElement).parent();
                    var target = e.target;
                    p.trigger(events.PLAYER_ERROR, [target.error.code]);

                    p.removeAttr('uplynk_loaded');
                    p.empty(); //clear out the player
                    var el = p.data('error_nohls');
                    el.empty();

                    if(target.error != null)
                    {
                        switch (target.error.code) 
                        {
                            case target.error.MEDIA_ERR_ABORTED:
                            case target.error.MEDIA_ERR_NETWORK:
                                break;
                            case target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                if (el)
                                {
                                    
                                    el.css('display', 'block');
                                    el.append('<p>Video playback is not supported on this device</p>');
                                    p.html(el);
                                }   
                                break;
                            case target.error.MEDIA_ERR_DECODE:
                            default:
                                if (el)
                                {
                                    el.css('display', 'block');
                                    el.append('<p>Video playback stopped. Refresh to try again.</p>');
                                    el.append('<a onclick="location.reload();"> Refresh </a>');
                                    p.html(el);
                                    
                                }                        
                                break;
                        }
                    }
                    else
                    {
                        if (el)
                        {
                            el.css('display', 'block');
                            el.append('<p>Video playback stopped. Refresh to try again.</p>');
                            el.append('<a onclick="location.reload();"> Refresh </a>');
                            p.html(el);
                            
                        }
                    }
                    


                });
                $(video).bind('pause', function(e) {
                    $(e.target).parent().trigger(events.PLAYER_STATE_CHANGED, ['pause']);
                });
                $(video).bind('play', function(e) {
                    $(e.target).parent().trigger(events.PLAYER_STATE_CHANGED, ['play']);
                });
                $(video).bind('ended', function(e) {
                    $(e.target).parent().trigger(events.PLAYER_MEDIA_ENDED);
                });
                $(video).bind('volumechange', function(e, v) {
                    $(e.target).parent().trigger(events.PLAYER_VOLUME_CHANGED, [e.target.volume]);
                });

                if (cb) { this.bind(events.PLAYER_READY, cb); }

                this.trigger(events.PLAYER_READY, [video]);
                this.unbind(events.PLAYER_READY);

                return this;
            },

            destroy : function() {
                $(this).unbind('pause');
                $(this).unbind('ended');
                $(this).unbind('play');
                return this;
            },

            player : function() {
                return this;
            },

            loaded : function() { // return true if there is a player and it has loaded successfully
                return $(this).parent().attr('uplynk_loaded') === 'true';
            },

            ready : function() {
                return $(this).parent().player('loaded');
            },

            /*** Player APIs ***/
            load : function(url) {
                this.src = url;
                this.load();
            },

            pause : function() {
                this.pause();
            },

            play : function(url) {
                if (arguments.length === 1)
                {
                    this.src = url;
                    if (env.iOS){// breaks Android
                        if( !( navigator.userAgent.indexOf("8_0_2") >= 0 || 
                               navigator.userAgent.indexOf("8_1") >= 0 ||
                               navigator.userAgent.indexOf("8_2") >= 0) )
                        {
                            this.load(); // According to Apple, this helps clear out prev content
                        }
                    }    
                        
                }
                this.play();
            },

            stop : function() {
                this.pause(); // html5 video does not have a stop API
            },

            currentTime : function(newTime) {
                if (arguments.length === 0)
                {
                    return this.currentTime;
                }
                
                this.currentTime = newTime;
            },

            muted : function(muted) {
                if (arguments.length === 0)
                {
                    return this.muted;
                }
                
                this.muted = muted;
            },

            volume : function(volume) {
                if (arguments.length === 0)
                {
                    return this.volume;
                }

                this.volume = volume;
            },

            duration : function() {
                return this.duration;
            }
        });

        $.extend(flash, {
            init : function() { // "this" should be a jQuery object
                var options = {}, 
                
                cb = null, 
                
                swfURL = SWFURL(),
                expressInstall = 'expressInstall.swf', 
                
                flashvars = {},

                // default options
                params = {
                    allowfullscreen: "true",
                    allowscriptaccess: "always",
                    wmode: "direct",
                    bgcolor: "#000000"
                },
               
                playerID = null, // the id of the actual embedded player
                replaceID = null; // id of container to replace


                // check and see if there is a replace element for this container 
                playerID = replaceID = 'uplynk_' + guid();
                this.html('<div id="' + replaceID + '"></div>');
                /*
                if (this.children().length === 0)
                {
                    // we actually dont want to replace the element given to us but
                    // we want to replace the child inside it so we create one here
                    // and insert it
                }
                else
                {
                    replaceID = this.children(':first').attr('id');
                    if (!replaceID)
                    { // if the first child does not have an id set it with replaceID
                        this.children(':first').attr('id', replaceID);
                    }
                }
                */

                var attributes = {
                    uplynk_type: uplynk.FLASH_PLAYER,
                    id : playerID
                };

                if (arguments.length === 1)
                {
                    if ($.isFunction(arguments[0]))
                    {
                        cb = arguments[0];
                    }
                    else
                    {
                        options = arguments[0];
                    }
                }
                // extend the options and params if they were given to us
                else if (arguments.length === 2)
                {
                    options = arguments[0];
                    cb = arguments[1];
                }
                

                if (options.swfURL)
                {
                    swfURL = options.swfURL;
                }
                if (options.expressInstall)
                {
                    expressInstall = options.expressInstall;
                }

                flashvars.playerID = playerID;
                if (env.os == 'Mac') { flashvars.useStageVideo = true; }

                $.extend(flashvars, options.flashvars);
                $.extend(params, options.params);
                $.extend(attributes, options.attributes);

                // loop and check when the player is ready. (Not really sure I want to do this)
                // todo: get events from flash player and dont loop
                if (cb) { this.bind(events.PLAYER_READY, cb); }

                // use swfobject with options to create player
                swfobject.embedSWF(swfURL, replaceID, "100%", "100%", uplynk.MIN_FLASH_VERSION, expressInstall, flashvars, params, attributes);
                
                return this;
            },

            loaded : function() { // return true if there is a player and it has loaded successfully
                return $(this).parent().attr('uplynk_loaded') === 'true';
            },

            ready : function() {
                return $(this).parent().player('loaded') && (typeof this.playURL !== "undefined");
            },

            load : function(url) {
                this.loadURL(url);
            },

            play : function(url) {
                if (arguments.length === 0)
                {
                    this.resume();
                }
                else
                {
                    this.playURL(url);
                }
            },

            pause : function(url) {
                this.pause();
            },

            isPaused : function() {
                return this.isPaused();
            },

            stop : function() {
                this.stop(); 
            },

            currentTime : function(newTime) {
                if (arguments.length === 0)
                {
                    return this.getPosition();

                }
                this.seek(newTime);
            },

            muted : function(muted) {
                if (arguments.length === 0)
                {
                    return this.getMute();
                }

                this.setMute(muted);
            },

            volume : function(volume) {
                if (arguments.length === 0)
                {
                    return this.getVolume();
                }

                this.setVolume(volume);
            },

            duration : function() {
                return this.getDuration();
            }
        });
        
        return {flash:flash, html5:html5};
    }();

    $.fn.player = function (method) {
        var player = $('[uplynk_type]', this);
        var type = player.attr('uplynk_type');
        if ($.inArray(method, ['loaded', 'ready']) != -1)
        {
            if (type) { return players[type][method].apply(player.get(0), Array.prototype.slice.call(arguments, 1)); }
            return false;
        }
        else if (method === 'destroy')
        {
            this.attr('uplynk_loaded', 'false');
            this.unbind('player'); // Unbind from all player.* events
            if (type && players[type]) { players[type][method].apply(player.get(0), Array.prototype.slice.call(arguments, 1)); }
            this.empty();
        }
        else if (players.flash[method]) 
        {   // first we need to see if the player has already been created
            // check to see if we have already loaded the player. If we have not create it
            var args = Array.prototype.slice.call(arguments, 1);
            if (this.player('loaded'))
            {
                // if the player is "ready" (meaning you can call an API on it, stupid stupid non IE browsers!)
                if (this.player('ready'))
                {
                    var ret = players[type][method].apply(player.get(0), Array.prototype.slice.call(arguments, 1));
                    if (typeof ret !== 'undefined')
                    {   // if the return value is not undefined
                        return ret;
                    }
                }
                else // if its not ready we listen for the PLAYER_READY event and then call the method
                {
                    // setup a callback function to be called when the player is ready
                    // this is a result of setting the player to diplay: none and then
                    // to display: block
                    this.bind(events.PLAYER_READY, function(ref) {
                        players[type][method].apply(player.get(0), args);
                    });
                }
            }
            else
            {
                if ($.inArray(method, ['play', 'load']) != -1)
                {
                    // only auto create on play or load
                    this.player(function(ref) {
                        if (ref)
                        {
                            // get the player type and call the method
                            player = $('[uplynk_type]', this);
                            type = player.attr('uplynk_type');

                            setTimeout(function() {
                                players[type][method].apply(player.get(0), args);
                            }, 1);
                        }
                    });
                }
            }

            return this;
        } 
        else if ( typeof method === 'object' || ! method || $.isFunction(method)) 
        {
            // for now we are not going to check and see if there is already an
            // existing player in this element
            if (this.player('loaded'))
            {
                var cb = null;
                if (arguments.length === 1)
                {
                    if ($.isFunction(arguments[0]))
                    {
                        cb = arguments[0];
                    }
                }
                // extend the options and params if they were given to us
                else if (arguments.length === 2) { cb = arguments[1]; }

                if (cb) { cb.apply(this, [this.player('player')]); }

                return this; // already gots a player
            }

            // we are not going to try both flash and html5 video players if one fails.
            // If its Windows, Mac, or Linux we will attempt flash
            // othwerwise we are going to attempt to use html5 video
            if (env.useFlash)
            {
                if (env.hasFlash) {  return players['flash'].init.apply(this, arguments); }
                else 
                { 
                    this.trigger(events.PLAYER_ERROR, 'noflash');
                    this.children('[error=noflash]').css('display', 'block');  
                } // show no flash container
            }
            else { return players['html5'].init.apply(this, arguments); }
                
            return this;
        } 
        else  { $.error( 'Method ' +  method + ' does not exist on jQuery.player' ); }    

    };

    $.extend(uplynk, {
        env: env,
        events: events,

        OnFlashPlayerEvent : function(playerID, eventName, newState) {
            var player = $('#' + playerID);
            if (eventName === events.PLAYER_READY)
            {
                var player = $('#' + playerID);
                player.parent().attr('uplynk_loaded', 'true'); // #1842
                player.parent().trigger(events.PLAYER_READY, [player.get(0)]);
            }
            else if (eventName === events.PLAYER_MEDIA_ENDED)
            {
                player.parent().trigger(events.PLAYER_MEDIA_ENDED, [player.get(0)]);
            }
            else if (eventName == events.PLAYER_STATE_CHANGED)
            {
                // only forward certain events
                if ($.inArray(newState, ['play', 'pause', 'loading', 'loaded', 'seeking', 'buffering']) != -1)
                    player.parent().trigger(events.PLAYER_STATE_CHANGED, [newState]);
            }
            else if (eventName == events.PLAYER_VOLUME_CHANGED)
            {
                player.parent().trigger(events.PLAYER_VOLUME_CHANGED, [newState]);
            }
            else if (eventName == events.PLAYER_ON_ASSET_INFO)
            {
                player.parent().trigger(events.PLAYER_ON_ASSET_INFO, [newState]); 
            }
            else if (eventName == events.PLAYER_ON_ID3)
            {
                player.parent().trigger(events.PLAYER_ON_ID3, [newState]); 
            }
            else if (eventName == events.PLAYER_AD_CLICKED)
            {
                if (newState && newState.click && newState.click.length > 0)
                {
                    var e = $.Event(events.PLAYER_AD_CLICKED)    
                    player.parent().trigger(e, [newState.click[0]]);
                    if (!e.isDefaultPrevented())
                        window.open(newState.click[0]);

                    // fire off the rest of the "tracking" clicks if there are any
                    for (var i=1; i < newState.click.length; i++)
                    {
                        $('<img src="'+ newState.click[i] +'">').load(function() {});
                    }
                }
            }
        }
    });

    return uplynk;

})(jQuery);
