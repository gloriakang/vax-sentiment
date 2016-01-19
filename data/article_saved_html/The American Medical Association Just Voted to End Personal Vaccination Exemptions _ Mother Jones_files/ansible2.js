window.console = window.console || {};
window.console.log = window.console.log || function() {};
window.groupid = Math.floor(Math.random()*100000000);
window.section = window.location.pathname.split('/')[1];
var key_param = $('meta[property=keywords]').attr("content");
if (key_param) {
    key_param = [key_param];
} else {
    key_param = [];
}
if (window.section) {
    key_param.push(window.section);
}
key_param = key_param.join(',');
if (key_param) {
    key_param = key_param.replace('+', '_').split(',').join('+');
} else {
    key_param = '';
}
window.key_param = key_param;
window.iframe_reset_counter = 0;

var ansible_iframe = function(class_name, base_url) {
    if (document.location.protocol !== 'http:') { return }
    var listener = function(event){
        if (event.origin.match('^http://mj-tech.motherjones.net/')
        || event.origin.match('^http://mj-tech.motherjones.net')) {
            var iF = $('iframe#ad_' + event.data.iframe)[0];
            if(event.data.height > parseInt($(iF).attr('height')) && iF.getAttribute("data-nresizable") == "false"){
                iF.style.height = event.data.height + 'px';
            }
        }
    }
    if (window.addEventListener){
          window.addEventListener("message", listener, false);
    } else {
          window.attachEvent("onmessage", listener);
    }
    var iFs = $('iframe.'+class_name);
    iFs.each(function(i, iF){
        $(iF).attr('src', base_url + '#' + unescape($.param({
            'placement': iF.getAttribute("data-placement"), // for IE
            'groupid': window.groupid,
            'key':  window.key_param,
            'height': iF.getAttribute("data-height"),
            'uri': window.location.pathname
        })));
        var newIF = $(iF).clone(true);
        $(iF).replaceWith(newIF);
    });
}

var ad_code = function(placement, height) {
    var curDateTime = new Date(); 
    var offset = -(curDateTime.getTimezoneOffset()); 
    if (offset > 0) { offset = "+" + offset; }
    var uri = escape(window.location.pathname.replace('<SCRIPT>','').replace('<script>','').replace('-->', '').replace('<\/SCRIPT>','').replace('<\/script>',''));
    document.write('<scr'+'ipt language="javascript1.1" src="http://adserver.adtechus.com/addyn/3.0/5443.1/0/0/'+escape(height)+'/ADTECH;loc=100;target=_blank;alias='+escape(placement)+';key='+escape(window.key_param)+';grp='+escape(window.groupid)+';kvuri='+uri+';misc='+new Date().getTime()+';aduho='+offset+'"></scri'+'pt>'); 
}

