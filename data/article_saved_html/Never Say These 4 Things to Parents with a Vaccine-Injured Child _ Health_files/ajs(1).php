(function(){
var ifr = "<"+"iframe id=\"cto_iframe_cc3786626c\" frameBorder=\"0\" allowtransparency=\"true\" hspace=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" vspace=\"0\" width=\"160px\" height=\"600px\"><"+"/iframe>\n";
document.write(ifr);
var ifc = "\n";
ifc += "<"+"!DOCTYPE html>\n";
ifc += "<"+"html>\n";
ifc += "  <"+"head><"+"meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><"+"/head>\n";
ifc += "  <"+"body><"+"script type=\"text/javascript\" src=\"http://a472.casalemedia.com/pcreative?au=5&c=255FF2&pcid=B3C8200B0200&pr=55&r=B3C8200B&s=25014&t=55848C4B&u=VlhzWThNQW9KRVFBQUFpbVlXa0FBQUJh&m=018a30767267874f102cc89c15eb5ed9&wp=119&cp=1.13&aid=B7DE2160EC53DFF0&tid=0&dm=5F&n=BeforeItsNews.com&epr=cc3786626c\"><"+"/script>\n";
ifc += "<"+"div id=\'beacon_cc3786626c\' style=\'position: absolute; left: 0px; top: 0px; visibility: hidden;\'>\n";
ifc += "<"+"img width=\"0\" height=\"0\" src=\"http://cat.ny.us.criteo.com/delivery/lg.php?cppv=1&cpp=W%2FErOHxwMFd2UzFUVHc1RjI1OXlubUdlb0Y3Nk55S0dMem1iVnNLd0NqNktBeklsMVptMy8zVk00Ti9Dc2R2cEFuTWMweU1HUlBjYS93UDh0M3p4U3kvWHl4THgvamlhY1pTcWxGckJwZTk1ZGpQNGFoWVJJcVhucGRkTXFZdUxITHp3ZjJCV0pZSjB2NXYvTUp1Q3hvYzdlZGxqRU55bEkwTnRwV1I2d0x6ZW0rNnIvNG1obXJrUDZOMVpieTJoYUFaSEdnZ2d3WFUycE0rK1Z6MW5hNFMvcW5NUld2Um1lRExXQ2RBeGFyeFdoMW83Y3hNQTA0RnhxdFpEL29ucXNpVnRofA%3D%3D\"/>\n";
ifc += "<"+"/div>\n";
ifc += "<"+"/body>\n";
ifc += "<"+"/html>\n";

var fillIframe = function(ifrd) {
    var getDocument = function(iframe) {
        var result_document = iframe.contentWindow || iframe.contentDocument;
        if (result_document && result_document.document)
            result_document = result_document.document;
        return result_document;
    };
    var c = getDocument(ifrd);
    if (c) {
        c.open();
        c.write(ifc);
        c.close();
    }
};


var maxRetryAttempts = 100;
var pollIframe = function() {
    var ifrd = document.getElementById('cto_iframe_cc3786626c');
    if (ifrd) {
        fillIframe(ifrd);
    } else if (maxRetryAttempts-- > 0) {
        setTimeout(pollIframe, 10);
    }
};pollIframe();})();
