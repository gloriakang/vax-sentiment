//NFabrizio added patt[26] for Berkshire Eagle on 2015.05.05 so that Google form would not refresh
function noRefreshPage() {
	var fullUrl = document.location;
	var patt = [];
	patt[0] = /puzzles/i;
	patt[1] = /games/i;
	patt[2] = /video/i;
	patt[3] = /arcade/i;
	patt[4] = /liveblog/i;
	patt[5] = /livechat/i;
	patt[6] = /comics/i;
	patt[7] = /yorkrevstv/i;
	patt[8] = /ydr.com\/crime/i;
	patt[9] = /salaries\/bay-area/i;
	patt[10] = /test/i;
	patt[11] = /letter/i;
	patt[12] = /opinion/i;
	patt[13] = /factcheck/i;
	patt[14] = /gameoftheweek/i;
	patt[15] = /chambersburglive/i;
	patt[16] = /lebanonlive/i;
	patt[17] = /placeanobit/i;
	patt[18] = /desal/i;
	patt[19] = /live./i;
	patt[20] = /scoresubmit/i;
	patt[21] = /obitsinput/i;
	patt[22] = /delaware-live/i;
	patt[23] = /sponsored/i;
	patt[24] = /sponsor-content/i;	
	patt[25] = /custom/i;
	patt[26] = /berkshireeagle.com\/readerschoiceballot/i;
	var ci_ = /ci_/i;
	var x = ci_.exec(fullUrl);
	for (var i = 0; i < patt.length; i++) {
		var xx = patt[i].exec(fullUrl);
		if (xx !== null) {
			return false;
		}
	}
	//look for unique class that turns off metarefresh
	if ($('.dpRefreshBuster')[0]) window.console && console.log('page will not refresh');
	//refresh time for article
	//2013-12-23: Refresh removed for article pages.
	else if (x !== null) { /*setTimeout(function() {document.location.reload(true)},1200000); */
	}
	//refresh time for section
	else {
		setTimeout(function() {
			document.location.reload(true);
		}, 600000);
	}
} //end function
$('document').ready(function() {
	noRefreshPage();
});