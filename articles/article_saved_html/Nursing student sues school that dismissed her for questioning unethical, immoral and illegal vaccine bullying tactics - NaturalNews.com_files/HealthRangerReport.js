//Version 1.2
//Created 1/18/2016 8:27:35 AM
/////////////////////////////////////////////////////////////////////////////////////////////

function WriteHRRBlock() {

//Note: 00 is month i.e. January
var dateOne = new Date(); //Year, Month, Day

var vhtml = '<style>';
vhtml += '#HRRBlock { display: block; width: 100%; max-width: 300px; background-color: #000000; margin: 0px 0px 15px 0px; }';
vhtml += '.HRRInfo { display: block; width: 100%; margin: 0px auto 15px 0px; font-size: 14px; line-height: 16px; color: #FFFFFF; font-family: arial, helvetica, san-serif; }';
vhtml += '.HRRDay { display: table; width: 90%; margin: 0px auto 10px auto; padding: 0px 0px 10px 0px; border-bottom: solid 1px #454545; }';
vhtml += '.HRRDay div { display: table-cell; vertical-align: top; }';
vhtml += '.HRRDay div:nth-child(1) { width: 80px; padding: 0px 10px 0px 0px; }';
vhtml += '.HRRDay div:nth-child(1) img { max-width: 100%; max-height: 100%; border: 0px; }';
vhtml += '.HRRDay div:nth-child(2) { font-size: 12px; line-height: 14px; color: #CCCCCC; font-family: arial, helvetica, san-serif; }';
vhtml += '.HRRDay div:nth-child(2) a { color: #CCCCCC; text-decoration: none; }';
vhtml += '.HRRDay div:nth-child(2) b { color: #FFFFFF; }';
vhtml += '.HRRInfo img, .HRRDay div:nth-child(1) img { max-width: 100%; max-height: 100%; border: 0px; }';
vhtml += '</style>';
vhtml += '<div id="HRRBlock">';
vhtml += '<div class="HRRInfo"><a href="http://www.talknetwork.com" target="_blank"><img src="http://www.naturalnews.com/ExternalArticleBlock/HRR/Coming-Up-HRR-1.jpg"></a></div>';

//////////////////////////////////////////////////////////////////////////

if (dateOne < new Date(2016, 0, 19)) {
vhtml += '<div class="HRRDay">';
vhtml += '<div>&nbsp;</div>';
vhtml += '<div><a href="http://www.talknetwork.com" target="_blank">Monday, January 18<br>TBA</a></div>';
vhtml += '</div>';
}
if (dateOne < new Date(2016, 0, 20)) {
vhtml += '<div class="HRRDay">';
vhtml += '<div>&nbsp;</div>';
vhtml += '<div><a href="http://www.talknetwork.com" target="_blank">Tuesday, January 19<br>TBA</a></div>';
vhtml += '</div>';
}
if (dateOne < new Date(2016, 0, 21)) {
vhtml += '<div class="HRRDay">';
vhtml += '<div><a href="http://www.talknetwork.com" target="_blank"><img src="http://www.naturalnews.com/ExternalArticleBlock/HRR/Panera-Bread.jpg"></a></div>';
vhtml += '<div><a href="http://www.talknetwork.com" target="_blank">Wednesday, January 20<br><b>Clean food victory</b> as Panera announces the removal of chemical additives from its soups. Also: Why David Bowie and Alan Rickman are victims of the for-profit cancer industry.</a></div>';
vhtml += '</div>';
}
if (dateOne < new Date(2016, 0, 22)) {
vhtml += '<div class="HRRDay">';
vhtml += '<div>&nbsp;</div>';
vhtml += '<div><a href="http://www.talknetwork.com" target="_blank">Thursday, January 21<br>TBA</a></div>';
vhtml += '</div>';
}
if (dateOne < new Date(2016, 0, 23)) {
vhtml += '<div class="HRRDay">';
vhtml += '<div><a href="http://www.talknetwork.com" target="_blank"><img src="http://www.naturalnews.com/ExternalArticleBlock/HRR/Taiwan-Flag.jpg"></a></div>';
vhtml += '<div><a href="http://www.talknetwork.com" target="_blank">Friday, January 22<br><b>Taiwan bitch-slaps China with historic electoral landslide</b> - Listen why Taiwan just achieved an epic victory for sovereignty and liberty against communist China that bullies innocent children into denouncing their Taiwanese origins.</a></div>';
vhtml += '</div>';
}

//////////////////////////////////////////////////////////////////////////

vhtml += '<div class="HRRInfo"><a href="http://www.talknetwork.com" target="_blank"><img src="http://www.naturalnews.com/ExternalArticleBlock/HRR/Button-Click-to-Listen-1.jpg"></a></div>';
vhtml += '</div>';

document.write(vhtml);
};
