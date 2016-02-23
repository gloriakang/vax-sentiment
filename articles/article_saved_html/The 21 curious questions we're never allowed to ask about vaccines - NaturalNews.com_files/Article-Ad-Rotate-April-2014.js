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

KeywordCheck('xyz','Organic-Chia-Peas-10-Off-260x360.jpg','http://store.naturalnews.com/Organic-Chia-seeds-Freeze-Dried-peas-10-off-_c_169.html');
KeywordCheck('Cumin','Black-Cumin-Seed-Oil-260x360-v2.jpg','http://store.naturalnews.com/Health-Rangers-Black-Cumin-Seed-Oil-4oz-_p_691.html');
KeywordCheck('hemp','HR-Hemp-Protein-260x360.jpg','http://store.naturalnews.com/Organic-Hemp-Protein-Powder--13oz-369g-3-Pack_p_701.html');
KeywordCheck('vegetable','Veggie-Gos-260x360.jpg','http://store.naturalnews.com/Veggie-Gos_c_160.html');
KeywordCheck('acne','AcneLXR-260x360.jpg','http://store.naturalnews.com/Acne_c_164.html');
KeywordCheck('shampoo','Store-HR-Natural-Shampoo.jpg','http://store.naturalnews.com/Shampoo_c_163.html');
KeywordCheck('turmeric','Turmeric-Gold-Bundle-260x360.jpg','http://store.naturalnews.com/Health-Rangers-Organic-Turmeric-Gold-liquid-extract-2-fl-oz-3-Pack-_p_667.html');
KeywordCheck('chlorella','Organic-Chlorella-Tablets-SL-Bundle-260x360.jpg','http://store.naturalnews.com/Organic-Clean-Chlorella-SL-200mg-400-Tablets-3-Pack_p_669.html');
KeywordCheck('coconut','O3-Coconut-Oil-Pulling-Mouth-Rinse-Bundle-260X360.jpg','http://store.naturalnews.com/O3-Ozone-Infused-Oil-Pulling-Solution-8oz-with-Coconut-Oil-3-Pack_p_675.html');
KeywordCheck('astaxanthin','Hawaiian-Astaxanthin-Bundle-260X360.jpg','http://store.naturalnews.com/Health-Rangers-Hawaiian-Astaxanthin-12mg-50-gelcaps-3-Pack_p_668.html');
KeywordCheck('schizandra','NNStore-Schizandra-Caps.jpg','http://store.naturalnews.com/Organic-Schizandra-capsules-100-caps-500mg-each_p_630.html');

}
