function get_aamCookie(c_name) {
  var i,x,y,ARRcookies=document.cookie.split(";");
  for (i=0;i<ARRcookies.length;i++) {
    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x=x.replace(/^\s+|\s+$/g,"");
    if (x==c_name){
      return unescape(y);
    }
  }
}
function get_clean_path() {
  var result = '/';
  var parts = window.location.pathname.split('/');
  for (var i = 0; i <= parts.length - 1; i++) {
    if (parts[i] != '') {
      result += parts[i] + '/';
    }
  };
  return result;
}
function get_s_props(min, max, path) {
  var result = [];
  var parts = path.split('/');
  var inc = min;
  var prepend = '';
  s.hier1 = '';
  for (var i = 0; i <= parts.length - 1; i++) {
    if (inc <= max) {
      if (parts[i] != '') {
        result.push(parts[i]);
        if (inc > min) {
          prepend = s['prop' + (inc-1)] + '/';
        }
        else {
          s.prop3 = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
        }
        s['prop' + inc] = prepend + parts[i];
        inc ++;
      }
    }
  }
  s.hier1 = result.join(',');
  return;
}
var s_account = 'conde-arstechnica';
var s_linkInternalFilters = 'javascript:,arstechnica.com';
var s_trackingServer = 'stats2.arstechnica.com';
var s_trackingServerSecure = 'sstats.arstechnica.com';
var s_path = get_clean_path();
s.pageName = 'http://arstechnica.com' + s_path;
s.events = '';
s.prop1 = '';
s.prop2 = '';
s.prop5 = 'blog';
get_s_props(6, 9, s_path);
if (ars.MOBILE) {
  s.pageName = 'http://m.arstechnica.com' + get_clean_path();
  s.prop6 = 'sd_m';
  get_s_props(7, 9, s_path);
  if (s.hier1.length) {
    s.hier1 = 'sd_m,' + s.hier1;
  }
  else {
    s.hier1 = 'sd_m';
  }
}
var s_code=s.t();
if(s_code) document.write(s_code);
if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-');