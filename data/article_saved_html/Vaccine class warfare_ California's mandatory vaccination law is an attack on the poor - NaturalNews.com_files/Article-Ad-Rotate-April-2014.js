function KeywordCheck(key,ad,url) {
var display = false;
var c = document.getElementsByTagName('meta');
var keywords;
for (var x = 0, y = c.length; x < y; x++) {
if (c[x].name.toLowerCase() == "keywords") {
keywords = c[x];
}
}
var myString = keywords.content;
var mySplitResult = myString.split(",");
for(i = 0; i < mySplitResult.length; i++){
 if (mySplitResult[i] == key) {
 display = true;
}
}
if (display == false) {
document.write('<div><a href="' + url + '" target="_blank"><img src="http://www.naturalnews.com/ads/260x360/' + ad + '" border="0"></a></div>')
}
}
function ShowADs() {
//every ad needs a keyword, banner image and a url.
//if you want the image to always appear, make the keyword something that would never be used as a keyword... like "XYZ"

KeywordCheck('xyz','NNStore-Fathers-Day-Promo.jpg','http://store.naturalnews.com/Fathers-Day-Special_c_162.html');
KeywordCheck('turmeric','Turmeric-Gold-Bundle-260x360.jpg','http://store.naturalnews.com/Health-Rangers-Organic-Turmeric-Gold-liquid-extract-2-fl-oz-3-Pack-_p_667.html');
KeywordCheck('chlorella','Organic-Chlorella-Tablets-SL-Bundle-260x360.jpg','http://store.naturalnews.com/Organic-Clean-Chlorella-SL-200mg-400-Tablets-3-Pack_p_669.html');
KeywordCheck('coconut','O3-Coconut-Oil-Pulling-Mouth-Rinse-Bundle-260X360.jpg','http://store.naturalnews.com/O3-Ozone-Infused-Oil-Pulling-Solution-8oz-with-Coconut-Oil-3-Pack_p_675.html');
KeywordCheck('xyz','Nahaia-Organics-2-260x360.jpg','http://store.naturalnews.com/Pink-Anti-Aging-Starter-Travel-Pack-15ml-each_p_654.html');
KeywordCheck('xyz','Nahaia-Organics-260x360.jpg','http://store.naturalnews.com/NAHAIA-Active-Organics-_c_153.html');
KeywordCheck('astaxanthin','Hawaiian-Astaxanthin-Bundle-260X360.jpg','http://store.naturalnews.com/Health-Rangers-Hawaiian-Astaxanthin-12mg-50-gelcaps-3-Pack_p_668.html');
KeywordCheck('schizandra','NNStore-Schizandra-Caps.jpg','http://store.naturalnews.com/Organic-Schizandra-capsules-100-caps-500mg-each_p_630.html');
KeywordCheck('radiation','NNStore-Soeks-Radiation-Meter.jpg','http://store.naturalnews.com/Environmental-Testers_c_152.html');
KeywordCheck('Ultraclean','SupplySource-Ultraclean-Plant-Food.jpg','http://www.supplysource.com/Ultraclean-Plant-Food_c_50.html');
KeywordCheck('Mini-Farm','SupplySource-Mini-Farm-Grow-Box.jpg','http://www.supplysource.com/Mini-Farm-Grow-Box_c_52.html');

}

