
// And now send the account/subweb specific request (if enabled).
$(document).ready(function() {
	var _cdcGoogleAnalytics = CDC.Metrics.GoogleAnalytics.Registration();
	if (_cdcGoogleAnalytics.Enabled) {
		_gaq.push(
			['_setAccount', _cdcGoogleAnalytics.AccountNumber],
			['_setDomainName', _cdcGoogleAnalytics.Domain],
			['_trackPageview'],
			['_trackPageLoadTime']
		);
	}
});

// Write out the GA script reference that actually fires the metrics requests.
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Add the click handlers to track specific events in GA.
$(document).ready(function() {
	$('a').not('a[href^="#"]').click(function() {
		var href = $(this).attr('href');
		if ($(this).hasClass('external') && !$(this).hasClass('skip')) {
			_gaq.push(['_trackEvent', 'Outbound Links', href, href, undefined, false]);
			setTimeout(function() { }, 100);
		} else if ($(this).find('span.plugIns').length > 0) {
			var fileType = href;
			if (fileType.indexOf('?') > -1) {
				fileType = fileType.substring(0, fileType.indexOf('?'));
			}
			if (fileType.indexOf('#') > -1) {
				fileType = fileType.substring(0, fileType.indexOf('#'));
			}
			fileType = fileType.substring(fileType.lastIndexOf('.') + 1).toUpperCase();
			_gaq.push(['_trackEvent', 'Download', fileType, href, undefined, true]);
		} else if ($(this).parent().attr('id') == 'facebookBlock') {
			_gaq.push(['_trackSocial', 'Facebook', 'Recommend', href]);
		} else if ($(this).parent().attr('id') == 'twitterBlock') {
			_gaq.push(['_trackSocial', 'Twitter', 'Tweet', href]);
		} else {
			// Determine the type of button clicked by the CSS class of the parent <li> element.
			var network = $(this).parents('li').attr('class');
			if (network && network.length > 0) {
				network = network.charAt(0).toUpperCase() + network.slice(1).toLowerCase();
			}
			var socialAction = "Share"; // Default for non-Facebook/Twitter actions.
			// For Facebook/Twitter we want to differentiate the actions for right-rail and bottom buttons.
			if ($(this).parent().hasClass('facebook')) {
				socialAction = "Like";
			} else if ($(this).parent().hasClass('twitter')) {
				socialAction = "Follow";
			}
			if (network == 'Facebook' ||
				network == 'Twitter' ||
				network == 'Favorites' ||
				network == 'Delicious' ||
				network == 'Google' ||
				network == 'Digg') {
				_gaq.push(['_trackSocial', network, socialAction, href]);
			}
		}
	});

	// Add the click handlers to track specific events in general
       if ($.fn.on !== undefined) {

		//A-Z Expand and Collapse
		$('.a2z-button, #vp1-a2z-button').on('click', function(){

			var eventName = '';

			if (!$('.a2z-bar').is(":hidden")) {
				eventName = 'A-Z Index Opened';
			} else {
				eventName = 'A-Z Index Closed';
			}

			s.linkTrackVars='prop50,prop49,prop46,prop2,prop31,channel';
			s.prop50 = s.pageName;
			s.tl(true, 'o', eventName);
		});

		//Accordion Expand/Collaspe in new Template
		$('.ui-accordion-header').on('click', function(){

			var pageName = s.pageName + ' | ' + $(this).clone().children().remove().end().text() + ' Accordion';
			var eventName = "Accordion expanded";
			s.linkTrackVars='prop50,prop49,prop46,prop2,prop31,channel';
			s.prop50 = pageName;
			s.tl(true, 'o', eventName);

		});

		//Tabs
		$('.ui-tabs-nav li').on('click', function(){ //Track opening and closing of accordions in old Template
			var pageName = s.pageName + ' | ' + $(this).text() + ' Tab';
			var eventName = "Tab clicked";
			s.linkTrackVars='prop50,prop49,prop46,prop2,prop31,channel';
			s.prop50 = pageName;
			s.tl(true, 'o', eventName);
		});

	} else if ($.fn.live !== undefined) {

		//Accordion Expand/Collaspe in old Template
		$('.accordion h4.ui-accordion-header').live('click', function(){ //Track opening and closing of accordions in old Template

			var pageName = s.pageName + ' | ' + $(this).clone().children().remove().end().text() + ' Accordion';
			var eventName = "Accordion ";

			if ($(this).children('.ui-accordion-textualIndicator').text().trim() === 'expanded') {
				eventName += 'expanded';
			} else {
				eventName += 'collapsed';
			}

			s.linkTrackVars='prop50,prop49,prop46,prop2,prop31,channel';
			s.prop50 = pageName;
			s.tl(true, 'o', eventName);
		});
	}

	// form styles associated with ALL TEMPLATE VERSIONS, appended to the head
	var formStyle = '<style>.search-form-checkbox { display: none; } .searchRadio { display: none; } div[id^="searchForm"] #query{float: left; margin:0; padding:0; border:1px solid #525967; font-size:1.2em; color:#036; height:19px; width:230px; } div[id^="searchForm"] #query.small{margin:0; padding:0; border:1px solid #525967; font-size:1.2em; color:#036; height:19px; width:120px;} div[id^="searchForm"] #query:focus, div[id^="searchForm"] textarea:focus {background-color:yellow;}</style>';
	$('head').append(formStyle);


	// ***************************************************************
	// Search form update for DigitalGov Search
	// ***************************************************************
	var aryPathsToIgnore = [
			// No ignores at current, this was for pilot testing
			//'/vhf/ebola/',
			//'/enes/vhf/ebola/'
		],
		// Local Search Exception Sites (Use All Lower Case Urls!)
		aryLocalSearchWhiteList = [
			{
				site: "atsdr_prod",
				localDisplayLabel: "ATSDR",
				locationMatch : "atsdr.cdc.gov",
				siteLimit: ["www.atsdr.cdc.gov"]
			}
			,{
				site: "atsdr_dev",
				localDisplayLabel: "ATSDR",
				locationMatch : "atsdr-dev.cdc.gov",
				siteLimit: ["www.atsdr.cdc.gov"]
			}
			,{
				site: "pcd",
				localDisplayLabel: "PCD",
				locationMatch : ".cdc.gov/pcd",
				siteLimit: ["www.cdc.gov/pcd/"]
			},
			,{
				site: "mmwr",
				localDisplayLabel: "MMWR",
				locationMatch : ".cdc.gov/mmwr",
				siteLimit: ["www.cdc.gov/mmwr/"]
			}
			,{
				site: "travelers_health",
				localDisplayLabel: "Traveler's Health",
				locationMatch : ".cdc.gov/travel",
				siteLimit: ["wwwnc.cdc.gov/travel/"]
			}
			,{
				site: "nhsn",
				localDisplayLabel: "NHSN",
				locationMatch : ".cdc.gov/nhsn",
				siteLimit: ["www.cdc.gov/nhsn/"]
			}
			,{
				site: "vaccines",
				localDisplayLabel: "Vaccines and Immunizations",
				locationMatch : ".cdc.gov/vaccines",
				siteLimit: ["www.cdc.gov/vaccines/"]
			}
			,{
				site: "niosh",
				localDisplayLabel: "NIOSH",
				locationMatch : ".cdc.gov/niosh",
				siteLimit: ["www.cdc.gov/niosh","blogs.cdc.gov/niosh-science-blog"]
			}
			,{
				site: "eid",
				localDisplayLabel: "EID Only",
				locationMatch : ".cdc.gov/eid",
				siteLimit: ["wwwnc.cdc.gov/eid/"]
			}
		],
		// The search form
		jqSearchForm = $('form[id^="searchCDC"], form[id^="searchForm"], form.searchForm'),
		// The search input field
		jqSearchInput = jqSearchForm.find('input[type="text"]'),
		// Selector for the local/global search options
		strLocalSearchOptSelector = '.searchRadio,.search-form-checkbox,table.hidden-two.hidden-four,td.hidden-three.hidden-one',
		// Selector for local search skipNav Link
		strLocalSearchSkipNavSelector = '.skippy[href="#searchBoxLocal"]',
		// 2.x small search box
		strSmallClass = jqSearchInput.is('#searchBoxSmall') ? 'small' : '',
		// Does the page have an esp class in the html or body tag?
		blnSpanishPage = $('html.esp, body.esp').length,
		// The DigitalGov site handle used for search results
		strAffiliate = blnSpanishPage ? 'cdc-es' : 'cdc-main',
		// The DigitialGov site key
		strUtf8 = '&#x2713;';
		// The DigitialGov form action
		strFormAction = 'http://search.cdc.gov/search';
		// Label (watermark) that appears in the search box
		strSearchLabel = blnSpanishPage ? 'BUSCAR' : 'SEARCH',
		// Clear anyCheck for utf8 input
		jqInputUtf8 = $('input[name="utf8"]'),
		// Check for affiliate input
		jqInputAffiliate = $('input[name="affiliate"]'),
		strHost = window.location.host,
		strPath = window.location.pathname,
		strHref =  window.location.href.toLowerCase(),
		blnWhiteListedDomain = false,
		arySiteLimit = [];

	// don't continue if the host & path match in the sites to ignore
	for (var i = 0, len = aryPathsToIgnore.length; i < len; i++) {
		if(strPath.indexOf(aryPathsToIgnore[i]) === 0) {
			return;
		}
	}
	//DEBUG: console.log('No Ignore Path Found');

	// Check for local search exceptions (LSE) via locationMatch
	for (var i = aryLocalSearchWhiteList.length - 1; i >= 0; i--) {

		var objCurrLse = aryLocalSearchWhiteList[i];

		// Did we find a match?
		if (objCurrLse && objCurrLse.locationMatch && strHref.indexOf(objCurrLse.locationMatch) > -1) {
			// Flag & exit loop
			blnWhiteListedDomain = true;
			arySiteLimit = objCurrLse.siteLimit;
			break;
		}
	};
	//DEBUG: console.log('White List Site?:' + blnWhiteListedDomain);

	// change the id and name of the search input, and add the "small" class if it's needed
	jqSearchInput.attr({
		id: 'query',
		name: 'query'
	}).addClass(strSmallClass);

	// if the watermark library is available, set the watermark or change it's text
	if ($.watermark) {
		jqSearchInput.watermark({html:strSearchLabel});
		$('.wm-label').text(strSearchLabel);	// If the watermark is already set, override the text
	}

	// change the attributes on the search form
	jqSearchForm.attr({
		'accept-charset': 'UTF-8',
		action: strFormAction,
		method: 'get'
	});

	// Clear Existing and Append Formatted UTF8 Field
	$('input[name="utf8"]', jqSearchForm).remove();
	jqSearchForm.append('<input type="hidden" name="utf8" id="utf8" value="' + strUtf8 + '" />');

	// Clear Existing and Append Formatted Affiliate Field
	$('input[name="affiliate"]', jqSearchForm).remove();
	jqSearchForm.append('<input type="hidden" name="affiliate" id="affiliate" value="'+strAffiliate+'" />');

	// Update Submit Function to Add SiteLimit if selected option is local
	jqSearchForm.submit(function(e) {

		var jqLocalSearchInput = $('input[name="subset"]:checked, input[name="sitelimit"]:checked', $(this)),
			strSearchSelect = (jqLocalSearchInput.length === 1) ? jqLocalSearchInput.val() : "";

		if (blnWhiteListedDomain === true && jqLocalSearchInput.length > 0) {

			// IS THIS SELECTION FIELD THE SITELIMIT FIELD?
			if (jqLocalSearchInput.attr('name') === "sitelimit") {

				// UPDATE THE VALUE
				jqLocalSearchInput.val(arySiteLimit.join(' | '));

			} else {

				// SITELIMIT IS NOT THE RADIO OR CHECKBOX
				// CLEAR ANY PRE-EXISTING FIELD
				$('input[name="sitelimit"]', jqSearchForm).remove();

				// APPEND A FRESH COPY
				jqSearchForm.append('<input type="hidden" name="sitelimit" id="sitelimit" value="' + arySiteLimit.join(' | ') + '" />');
			}

		}
		return true;
	});

	// Is this a whitelisted domain?
	if (blnWhiteListedDomain) {
		// Show the search options
		$(strLocalSearchOptSelector).show();
		//DEBUG:console.log('Show Local Search Options');
	} else {
		// FIND LOCAL SEARCH ELEMENTS
		var jqLocalSearchElements = $(strLocalSearchOptSelector, jqSearchForm);
		// Remove the search options from search form
		jqLocalSearchElements.remove();
		// Remove the skipNav Link to Local Search
		$(strLocalSearchSkipNavSelector).remove();
		//DEBUG:console.log('Remove Local Search Options');
	}

	// DigitalGov metrics code
	//<![CDATA[
		var usasearch_config = { siteHandle:strAffiliate }, script;
		// Create Script Tag
		script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "//search.usa.gov/javascripts/remote.loader.js";
		// Append to Head
		document.getElementsByTagName("head")[0].appendChild(script);
	//]]>

});
