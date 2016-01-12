if(typeof CDC=="undefined"){var CDC=new Object();}if(typeof CDC.Policy=="undefined"){CDC.Policy=new Object();}CDC.Policy.ExternalLinks=function(){function WhiteListEntry(domainPattern,isRegExp){this.DomainPattern=domainPattern;this.IsRegExp=isRegExp;}var whiteList=new Array(new WhiteListEntry("https?://[a-zA-Z0-9_-]*.cdc.gov(?:[\\?/](?:.*)?)?",true),new WhiteListEntry("https?://[a-zA-Z0-9_-]*.[a-zA-Z0-9_-]*.cdc.gov(?:[\\?/](?:.*)?)?",true));function IsExternal(href){var result=true;if(typeof href=="undefined"||href.length==0||(href.indexOf("http://")==-1&&href.indexOf("https://")==-1)){result=false;}else{for(var i=0;i<whiteList.length;i++){if(whiteList[i].IsRegExp){var exp=new RegExp(whiteList[i].DomainPattern,"mi");if(exp.test(href)){result=false;break;}}else{if(href.indexOf(whiteList[i].DomainPattern)>-1){result=false;break;}}}}return result;}function AddExternalImage(anchor){if(!anchor.hasClass("external")){var externalImageTitleSpanish="Aclaraci?n sobre los enlaces a sitios web externos";var externalImageAltTextSpanish="Aclaraci?n sobre los enlaces a sitios web externos";var disclaimerUrlSpanish="http://www.cdc.gov/spanish/CDC/descargos.html";var externalImageTitleEnglish="External Web Site Icon";var externalImageAltTextEnglish="External Web Site Icon";var disclaimerUrlEnglish="http://www.cdc.gov/Other/disclaimer.html";if(!anchor.hasClass("noLinking")&&anchor.hasClass("cdclistWImageLink")){var href=anchor.attr("href");if(IsExternal(href)){anchor.addClass("external");if(!anchor.hasClass("noDecoration")){var imgTag=anchor.find("img");var newSpan=$(document.createElement("span")).addClass("tp-label").append(anchor.text());anchor.html("").append(imgTag).append(newSpan);}var imageAnchor=$("<a />");imageAnchor.attr("class","external");if($("body.esp").length>0){imageAnchor.attr("href",disclaimerUrlSpanish);}else{imageAnchor.attr("href",disclaimerUrlEnglish);}imageAnchor.attr("target","_blank");var newImage=$("<img />");imageAnchor.append(newImage);newImage.attr("class","externalImg");if($("body.esp").length>0){newImage.attr("alt",externalImageAltTextSpanish);newImage.attr("title",externalImageTitleSpanish);}else{newImage.attr("alt",externalImageAltTextEnglish);newImage.attr("title",externalImageTitleEnglish);}newImage.attr("src","/TemplatePackage/images/icon_out.png");anchor.wrap("<span class='cdc-decorated' />").after(imageAnchor);}}else{if(!anchor.hasClass("noLinking")){var href=anchor.attr("href");if(IsExternal(href)){anchor.addClass("external");if(!anchor.hasClass("noDecoration")&&(!$("span").hasClass("tp-label"))){anchor.html('<span class="tp-label">'+anchor.html()+"</span>");}var imageAnchor=$("<a />");imageAnchor.attr("class","external");if($("body.esp").length>0){imageAnchor.attr("href",disclaimerUrlSpanish);}else{imageAnchor.attr("href",disclaimerUrlEnglish);}imageAnchor.attr("target","_blank");var newImage=$("<img />");imageAnchor.append(newImage);newImage.attr("class","externalImg");if($("body.esp").length>0){newImage.attr("alt",externalImageAltTextSpanish);newImage.attr("title",externalImageTitleSpanish);}else{newImage.attr("alt",externalImageAltTextEnglish);newImage.attr("title",externalImageTitleEnglish);}newImage.attr("src","/TemplatePackage/images/icon_out.png");anchor.wrap("<span class='cdc-decorated' />").after(imageAnchor);}}}}}return{addWhiteListEntry:function(pattern,isRegularExpression){whiteList[whiteList.length]=new WhiteListEntry(pattern,isRegularExpression);},fixLinks:function(){if(!$("body").hasClass("noLinking")&&$("#linkPolicy").length>0){$("#content div#nav,#content div#contact-info,#content div.rounders.email,#content div.pageOptions,#content div.pageOptions-inner,#content div.pageOptions-inner2,#content div.pageOptions-horizontal,#content div.cdc-listWImage").find("a").addClass("noLinking");$("#content .cdc-listWImage a").addClass("cdclistWImageLink");$('#content a:not([href^="mailto:"],[href^="/"],[href^="javascript:"],[href^="#"])').each(function(){AddExternalImage($(this));});if($("#content a.external").length>0){$("#linkPolicy").addClass("toggleOn");}}}};}();$(document).ready(function(){CDC.Policy.ExternalLinks.fixLinks();});