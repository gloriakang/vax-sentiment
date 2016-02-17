_satellite.pushAsyncScript(function(event, target, $variables){
  (function(){
  'use strict';

  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
      }
      return "";
  }

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  

  var tempCookie = guid();
  var cookie_id;
  if (getCookie("wo") == ""){
    setCookie("wo",tempCookie,365);
    cookie_id = tempCookie;
  } else {
    cookie_id = getCookie("wo");
  }
  // recursively digs into an object path to validate its
  // defined state and type over time
  function whenPathReady(opts){
    var errMsg;
    var path = opts.path;
    var parts = opts.path.split('.');
    // to keep track of when to stop
    var pollTryCount = 1;
    var pollTimeCount = 0;
    // there must be a base object
    var base = (opts.obj) ? opts.obj : window;

    // required options check
    if (!opts.poll) {
      throw new Error('[ checkIfReady ] the \'poll\' is required but not defined');
    }
    if (!opts.poll.every) {
      throw new Error('[ checkIfReady ] the \'poll.every\' is required but not defined');
    }
    if (!opts.onPathReady || typeof opts.onPathReady !== 'function') {
      throw new Error('[ checkIfReady ] the \'onPathReady\' option is required but not defined or not a function');
    }
    if (!opts.onPathDeserted || typeof opts.onPathDeserted !== 'function') {
      throw new Error('[ checkIfReady ] the \'onPathDeserted\' option is required but not defined or not a function');
    }
    if (!opts.onFailure || typeof opts.onFailure !== 'function') {
      throw new Error('[ checkIfReady ] the \'onFailure\' option is required but not defined or not a function');
    }

    // checkIfReady
    // validates a paths defined state and type
    function checkIfReady(){
      var cursor = base;
      var depth = 0;
      var maxDepth = parts.length-1;

      // dig
      // recursively checks an object path
      // untill it fails or verifies entire path
      function dig(){
        // get cursor into the right depth
        cursor = cursor[parts[depth]];
        
        // bad, cursor is not defined at this depth
        if (typeof cursor === 'undefined') {
          // give up?
          
          // by time
          if (opts.poll.untill && pollTimeCount >= opts.poll.untill) {
            opts.onPathDeserted('polling time limit has been reached');
            return;
          }

          // by tries
          if (opts.poll.limit && pollTryCount >= opts.poll.limit) {
            opts.onPathDeserted('polling try limit has been reached');
            return;
          }

          // update polling state
          pollTryCount++;
          pollTimeCount += opts.poll.every;

          // try again later
          setTimeout(function(){
            checkIfReady(path);
          }, opts.poll.every);
          return;
        }

        // good, cursor its valid upto this depth

        // are we done?
        if (depth >= maxDepth) {
          // maybe...

          // do we need type check?
          if (opts.type && typeof cursor !== opts.type) {
            // we have a problem
            errMsg = '[ checkIfReady ] path is not type \'' + opts.type + '\'';
            opts.onFailure(errMsg);
            return;
          }

          // ok, its all good, let them know!
          opts.onPathReady(cursor);
          return;
        }

        // not done, onward!
        // go deeper
        depth++;
        dig();
      }

      // start digging
      dig();
    }

    // start ready check
    checkIfReady();
  }

  var traffic_source_name,section_name,page_url;
  


  // testing
  whenPathReady({
    poll: {
      every: 100, // how often?
      //limit: 1, // limit by poll count
      untill: 1000 // limit by time, or...
    },
    path: 's.eVar39', // full path into object
    //type: 'function', // optional, type check for end of path
    onPathReady: function(value){
      // do your thing
      console.log(value);
      traffic_source_name = s.eVar39.split('.')[0];
      injectTag();
    },
    onPathDeserted: function(reason){
      // we tried...
      console.log('Its all over!', reason);
      traffic_source_name = "unknown";
      injectTag();
    },
    onFailure: function(reason){
      // something is not right
      console.log('NooOoOOoo! we have failed!', reason);
    }
  });
  
  whenPathReady({
    poll: {
      every: 100, // how often?
      //limit: 1, // limit by poll count
      untill: 1000 // limit by time, or...
    },
    path: 's.eVar5', // full path into object
    //type: 'function', // optional, type check for end of path
    onPathReady: function(value){
      // do your thing
      console.log(value);
      section_name = s.eVar5;
      injectTag();
    },
    onPathDeserted: function(reason){
      // we tried...
      console.log('Its all over!', reason);
      section_name = "unknown";
      injectTag();
    },
    onFailure: function(reason){
      // something is not right
      console.log('NooOoOOoo! we have failed!', reason);
    }
  });

  whenPathReady({
    poll: {
      every: 100, // how often?
      //limit: 1, // limit by poll count
      untill: 1000 // limit by time, or...
    },
    path: 'window.location.href', // full path into object
    //type: 'function', // optional, type check for end of path
    onPathReady: function(value){
      // do your thing
      console.log(value);
      page_url = window.location.href;
      injectTag();
    },
    onPathDeserted: function(reason){
      // we tried...
      console.log('Its all over!', reason);
    },
    onFailure: function(reason){
      // something is not right
      console.log('NooOoOOoo! we have failed!', reason);
    }
  });

  function injectTag(){
    var protocol = window.location.protocol
    console.log('checking variables...',traffic_source_name,page_url,section_name);
    if (typeof traffic_source_name !== 'undefined' && typeof page_url !== 'undefined' && typeof section_name !== 'undefined'){
      console.log('variables filled');
      var whiteOpsScriptTag = document.createElement("script");
      whiteOpsScriptTag.async = true;
      whiteOpsScriptTag.type = "text/javascript";
      whiteOpsScriptTag.src = protocol+"//s.tagsrvcs.com/2/825542/analytics.js?pp=" + String(traffic_source_name) + "&sn=" + String(section_name) + "&c1="+encodeURIComponent(String(page_url))+"&ui="+String(cookie_id)+"&dt=8255421433350962451000";

      document.body.appendChild(whiteOpsScriptTag);
      console.log(whiteOpsScriptTag);
    }
    
  }


  

})()
});
