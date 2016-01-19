var NCIAnalytics = {

    displayAlerts: false,
    stringDelimiter: '|',
    fieldDelimiter: '~',

    SelectedTextList: function(listId, delimiter) {
        var checked = $("#" + listId + " input:checked"); // get all checked inputs under the given id

        if (checked.length > 0) {
            return (
            checked.siblings("label")  // find all adjacent labels
                .map(function() {
                    return $(this).text();  // return the text of each label
                })
                .get()  // get as JS array
                .join(delimiter));  // join array with delimiter
        }

        return "";
    },

    SelectedOptionList: function(listId, delimiter) {
        var selected = $("#" + listId + " option:selected"); // get all selected options under the given id

        if (selected.length > 0) {
            return (
                selected.map(function() {
                    return this.text;  // return the text of each option
                })
                .get()  // get as JS array
                .join(delimiter));  // join array with delimiter
        }

        return "";
    },

    SelectedDeleteList: function(listId, delimiter) {
        var buttons = $("#" + listId + " li:visible button"); // find all visible buttons under the given id

        if (buttons.length > 0) {
            return (
                buttons.map(function() {
                    return this.nextSibling.nodeValue;  // the following node should be the text; return it
                })
                .get()  // get as JS array
                .join(delimiter));  // join array with delimiter
        }

        return "";
    },

    ClickParams: function(sender, reportSuites, linkType, linkName) {
        /* 
        The facility for defining report suites by the parameter reportSuites 
        has been discontinued - now report suites are defined in the s_account variable 
        set in the Omniture s_code.js file.  The supporting code for the parameter method 
        has been retained in case the requirements change. 
        */
        this.sender = sender;
        //this.ReportSuites = reportSuites;
        this.ReportSuites = s_account;
        this.LinkType = linkType;
        this.LinkName = linkName;
        this.Props = {};
        this.Evars = {};
        this.Events = {};

        this.LogToOmniture = function() {
            var local_s = s_gi(this.ReportSuites);
            local_s.linkTrackVars = '';

            // add language prop8 - Warning: adding prop8 to individual onclick functions will cause duplication
            local_s['prop8'] = s.prop8;
            local_s.linkTrackVars += 'channel,';
            local_s.linkTrackVars += 'prop8';

            for (var i in this.Props) {
                local_s['prop' + i] = this.Props[i];

                if (local_s.linkTrackVars.length > 0)
                    local_s.linkTrackVars += ',';

                local_s.linkTrackVars += 'prop' + i;
            }

            // add language eVar2 - Warning: adding eVar2 to individual onclick functions will cause duplication
            local_s['eVar2'] = s.eVar2;
            if (local_s.linkTrackVars.length > 0)
                local_s.linkTrackVars += ',';
            local_s.linkTrackVars += 'eVar2';

            for (var i in this.Evars) {
                local_s['eVar' + i] = this.Evars[i];

                if (local_s.linkTrackVars.length > 0)
                    local_s.linkTrackVars += ',';

                local_s.linkTrackVars += 'eVar' + i;
            }

            if (this.Events.length > 0) {
                var eventsString = '';
                if (local_s.linkTrackVars.length > 0)
                    local_s.linkTrackVars += ',';
                local_s.linkTrackVars += 'events';

                for (var i = 0; i < this.Events.length; i++) {
                    if (eventsString.length > 0)
                        eventsString += ',';

                    eventsString += 'event' + this.Events[i];
                }
                local_s.linkTrackEvents = eventsString;
                local_s.events = eventsString;
            }

            local_s.tl(sender, this.LinkType, this.LinkName);

            //Clear events and all props and eVars set in this click event image request
            local_s.events = '';
            for (var i in this.Props) {
                local_s['prop' + i] = '';
            }
            for (var i in this.Evars) {
                local_s['eVar' + i] = '';
            }

            if (NCIAnalytics.displayAlerts) {
                var alertString =
	                'ScriptBuilder:\n' +
                    'local_s.linkTrackVars=' + local_s.linkTrackVars;
                if (local_s.linkTrackEvents != 'None')
                    alertString += '\nlocal_s.linkTrackEvents=' + local_s.linkTrackEvents;

                if (local_s.linkTrackVars.length > 0) {
                    var linkTrackVarArray = local_s.linkTrackVars.split(',');
                    for (var i = 0; i < linkTrackVarArray.length; i++) {
                        if (linkTrackVarArray[i] != 'events') {
                            alertString += '\nlocal_s.' + linkTrackVarArray[i];
                            alertString += '=' + local_s[linkTrackVarArray[i]];
                        }
                    }
                }
                alertString += '\nReport Suites=' + this.ReportSuites;
                alertString += '\nLink Type=' + this.LinkType;
                alertString += '\nLink Name=' + this.LinkName;
                alert(alertString);
            }
        }
    },

    //*********************** onclick functions ************************************************************	
    SiteWideSearch: function(sender) {
        var searchType = 'sitewide';
        var keyword = ' ';
        if (document.getElementById('swKeyword') && document.getElementById('swKeyword').value)
        {
            keyword = document.getElementById('swKeyword').value;
        }
        if (document.getElementById('swKeywordQuery') && document.getElementById('swKeywordQuery').value)
        {
            keyword = document.getElementById('swKeywordQuery').value;
        }
        if (s.prop8.toLowerCase() == 'spanish')
            searchType += '_spanish';

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'SiteWideSearch');
        clickParams.Props = {
            11: searchType,
            14: keyword
        };
        clickParams.Evars = {
            11: searchType,
            13: '+1',
            14: keyword
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    SiteWideSearchResultsSearch: function(sender, keyWordTextBoxID, searchRadioButtonsID) {
        var keyword = document.getElementById(keyWordTextBoxID).value;
        var e = document.getElementsByName(searchRadioButtonsID);

        for (var i = 0; i < e.length; i++) {
            if (e[i].checked) {
                if (e[i].value == 2) {
                    var searchType = 'sitewide_bottom_withinresults';
                    break;
                }
                else {
                    var searchType = 'sitewide_bottom_new';
                    break;
                }
            }
        }

        if (s.prop8.toLowerCase() == 'spanish')
            searchType += '_spanish';

        // the Omniture s_code file generates 'class does not support Automation' errors on the 
        // dataSrc, dataFld, and dataFormatAs properties the 'SEARCH' Image button = therefore reference to
        // the control is being set to null instead of sender
        clickParams = new NCIAnalytics.ClickParams(this,
            'nciglobal', 'o', 'SiteWideSearchResultsSearch');
        clickParams.Props = {
            11: searchType,
            14: keyword
        };
        clickParams.Evars = {
            11: searchType,
            13: '+1',
            14: keyword
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    SiteWideSearchResults: function(sender, isBestBet, resultIndex) {
        var searchModule = (isBestBet) ? 'best_bets' : 'generic';

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'SiteWideSearchResults');
        clickParams.Props = {
            12: searchModule,
            13: resultIndex
        };
        clickParams.Evars = {
            12: searchModule
        };
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    CTSearch: function(webAnalyticsOptions) {
        var searchType = 'clinicaltrials';
        var location = '';
        var treatmentType = '';
        var statusPhase = '';
        var trialIdSponsor = '';
        var trialType = '';
        var phaseList = '';
        var sponsor = '';
        var keyword = '';

        var cancerTypeCondition = $('#' + ids.cancerType + " option:selected").text();

        //Location
        switch($("#" + ids.locationSelector).val()) {
            case "all": location = "all locations"; break;

            case "zip": location = "Near Zip Code"; break;

            case "city": location = "In City/State/Country"; break;

            case "hospital": location = "At Hospital/Institution"; break;

            case "nih": // - At NIH
                if ($("#" + ids.nihOnly)[0].checked)
                    location = 'At NIH Only Bethesda, Md';
                else
                    location = 'At NIH';
                break;
        }

        // Trial Phase
        // - Phase
        if ($("#" + ids.trialPhase_1)[0].checked || $("#" + ids.trialPhase_2)[0].checked || $("#" + ids.trialPhase_3)[0].checked || $("#" + ids.trialPhase_4)[0].checked) {
            phaseList = 'Trial Phase';
        }

        statusPhase += phaseList + NCIAnalytics.fieldDelimiter;
        // - New Trial
        if ($("#" + ids.newOnly)[0].checked) {
            item = $('trialStatusTable').select("label[for=newOnly]");
            statusPhase += 'New Trials';
        }

        // Trial / Treatment Type
        trialType = NCIAnalytics.SelectedTextList(
            webAnalyticsOptions.typeOfTrialControlID,
            NCIAnalytics.stringDelimiter);
        if ((trialType != '') && (trialType != 'All'))
            treatmentType += 'Type of Trial';
        treatmentType += NCIAnalytics.fieldDelimiter;
        if (NCIAnalytics.SelectedDeleteList(
                webAnalyticsOptions.drugControlID,
                NCIAnalytics.stringDelimiter) != '')
            treatmentType += 'Drug';
        treatmentType += NCIAnalytics.fieldDelimiter;
        if (NCIAnalytics.SelectedDeleteList(
                webAnalyticsOptions.treatnentInterventionControlID,
                NCIAnalytics.stringDelimiter) != '')
            treatmentType += 'Treatment/Intervention';

        // Trial ID
        if ($("#" + ids.protocolID).val() != '')
            trialIdSponsor += 'Protocol ID';
        trialIdSponsor += NCIAnalytics.fieldDelimiter;
        if (NCIAnalytics.SelectedDeleteList(
                webAnalyticsOptions.trialInvestigatorsControlID,
                NCIAnalytics.stringDelimiter) != '')
            trialIdSponsor += 'Trial Investigators';
        trialIdSponsor += NCIAnalytics.fieldDelimiter;
        if (NCIAnalytics.SelectedDeleteList(
                webAnalyticsOptions.leadOrganizationCooperativeGroupControlID,
                NCIAnalytics.stringDelimiter) != '')
            trialIdSponsor += 'Lead Organization';

        //if ($("#" + ids.txtKeywords_state).val() == 'valid')
        if ($("#" + ids.txtKeywords).val())
            keyword = $("#" + ids.txtKeywords).val();

        clickParams = new NCIAnalytics.ClickParams(this,
            'nciglobal,nciclinicaltrials', 'o', 'CTSearch');
        clickParams.Props = {
            11: searchType,
            17: cancerTypeCondition,
            18: location,
            19: treatmentType,
            20: statusPhase,
            21: trialIdSponsor,
            22: keyword
        };
        clickParams.Evars = {
            11: searchType,
            13: '+1',
            17: cancerTypeCondition,
            18: location,
            19: treatmentType,
            20: statusPhase,
            21: trialIdSponsor
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    CTSearchResults: function(sender, resultIndex) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal,nciclinicaltrials', 'o', 'CTSearchResults');
        clickParams.Props = {
            13: resultIndex
        };
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    TermsDictionarySearch: function(sender, isSpanish) {
        //var prop24Contents = (document.getElementById('radioStarts').checked) ? 'starts with' : 'contains';
        var prop24Contents = ($("#" + ids.radioStarts)[0].checked) ? 'starts with' : 'contains';
        NCIAnalytics.TermsDictionarySearchCore(sender,
            $("#" + ids.AutoComplete1).val(),
            prop24Contents,
            'TermsDictionarySearch',
            isSpanish);
    },
    
     //******************************************************************************************************	
     GeneticsDictionarySearch: function(sender, searchString, isStartsWith) {
        var prop24Contents = (isStartsWith) ? 'starts with' : 'contains';

        clickParams = new NCIAnalytics.ClickParams(sender,
            '', 'o', 'GeneticsDictionarySearch');
        clickParams.Props = {
            11: 'dictionary_genetics',
            22: searchString,
            24: prop24Contents
        };
        clickParams.Evars = {
            11: 'dictionary_genetics',
            13: '+1',
            26: prop24Contents
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },
    
    //Created this function to be consistent with the Term Dictionary search.
    //Since, we are not sure if the doc sites are using this function; Dion recommend I leave 
    //the original function GeneticsDictionarySearch alone.
    //******************************************************************************************************	
    GeneticsDictionarySearchNew: function(sender) {
   
     var prop24Contents = ($("#" + ids.radioStarts)[0].checked) ? 'starts with' : 'contains';

        clickParams = new NCIAnalytics.ClickParams(sender,
            '', 'o', 'GeneticsDictionarySearch');
        clickParams.Props = {
            11: 'dictionary_genetics',
            22: $("#" + ids.AutoComplete1).val(),
            24: prop24Contents
        };
        clickParams.Evars = {
            11: 'dictionary_genetics',
            13: '+1',
            26: prop24Contents
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    
    },
    
    //******************************************************************************************************	
    GeneticsDictionarySearchAlphaList: function(sender, value) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            '', 'o', 'GeneticsDictionarySearchAlphaList');
        clickParams.Props = {
            11: 'dictionary_genetics',
            22: value,
            24: 'starts with'
        };
        clickParams.Evars = {
            11: 'dictionary_genetics',
            13: '+1',
            26: 'starts with'
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    GeneticsDictionaryResults: function(sender, resultIndex) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            '', 'o', 'GeneticsDictionaryResults');
        clickParams.Props = {
            13: resultIndex
        };
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    TermsDictionarySearchAlphaList: function(sender, value) {

        NCIAnalytics.TermsDictionarySearchCore(sender,
            value,
            'starts with',
            'TermsDictionarySearchAlphaList',
            false);
    },

    //******************************************************************************************************	
    TermsDictionarySearchAlphaListSpanish: function(sender, value) {

        NCIAnalytics.TermsDictionarySearchCore(sender,
            value,
            'starts with',
            'TermsDictionarySearchAlphaList',
            true);
    },

    //******************************************************************************************************	
    TermsDictionarySearchCore: function(sender, value, prop24Contents, linkName, isSpanish) {

        if (isSpanish)
            var searchType = 'diccionario';
        else
            var searchType = 'dictionary_terms';

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', linkName);
        clickParams.Props = {
            11: searchType,
            22: value,
            24: prop24Contents
        };
        clickParams.Evars = {
            11: searchType,
            13: '+1',
            26: prop24Contents
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    TermsDictionaryResults: function(sender, resultIndex) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'TermsDictionaryResults');
        clickParams.Props = {
            13: resultIndex
        };
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    DrugDictionarySearch: function(sender) {
        var prop24Contents = ($("#" + ids.radioStarts)[0].checked) ? 'starts with' : 'contains';

        NCIAnalytics.DrugDictionarySearchCore(sender,
            $("#" + ids.AutoComplete1).val(),
            prop24Contents,
            'DrugDictionarySearch');
    },

    //******************************************************************************************************	
    DrugDictionarySearchAlphaList: function(sender, value) {

        NCIAnalytics.DrugDictionarySearchCore(sender,
            value,
            'starts with',
            'DrugDictionarySearchAlphaList');
    },

    //******************************************************************************************************	
    DrugDictionarySearchCore: function(sender, value, prop24Contents, linkName) {
        var searchType = 'dictionary_drugs';

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal,ncidrugdictionary', 'o', linkName);
        clickParams.Props = {
            11: searchType,
            22: value,
            24: prop24Contents
        };
        clickParams.Evars = {
            11: searchType,
            13: '+1',
            26: prop24Contents
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    DrugDictionaryResults: function(sender, resultIndex) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal,ncidrugdictionary', 'o', 'DrugDictionaryResults');
        clickParams.Props = {
            13: resultIndex
        };
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    FeaturedClinicalTrialSearch: function(sender) {
        var searchType = 'clinicaltrials_featured';
        var keyword = document.getElementById('keyword').value;

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'FeaturedClinicalTrialSearch');
        clickParams.Props = {
            11: searchType,
            22: keyword
        };
        clickParams.Evars = {
            11: searchType,
            13: '+1'
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    BulletinSearch: function(sender, bulletinSearchType) {
        var keyword = document.getElementById('cbkeyword').value;
        var searchType = 'bulletin';

        if (bulletinSearchType == 1) { // Search by keyword and date range 
            var startDate = document.getElementById('startMonth').options[document.getElementById('startMonth').selectedIndex].text.replace(/^\s+|\s+$/g, '') + ' '
                + document.getElementById('startYear').value;
            var endDate = document.getElementById('endMonth').options[document.getElementById('endMonth').selectedIndex].text + ' '
                + document.getElementById('endYear').value;
            NCIAnalytics.KeywordDateRangeSearch(sender, searchType, keyword, startDate, endDate);
        }
        else {  // Search by Keyword
            clickParams = new NCIAnalytics.ClickParams(sender,
                'nciglobal', 'o', 'KeywordSearch');
            clickParams.Props = {
                11: searchType,
                22: keyword
            };
            clickParams.Evars = {
                11: searchType,
                13: '+1'
            };
            clickParams.Events = [2];
            clickParams.LogToOmniture();
        }
    },

    //******************************************************************************************************	
    NewsSearch: function(sender, searchType) {
        var keyword = document.getElementById('keyword').value;
        var startDate = document.getElementById('startMonth').options[document.getElementById('startMonth').selectedIndex].text.replace(/^\s+|\s+$/g, '') + ' '
            + document.getElementById('startYear').value;
        var endDate = document.getElementById('endMonth').options[document.getElementById('endMonth').selectedIndex].text + ' '
            + document.getElementById('endYear').value;

        NCIAnalytics.KeywordDateRangeSearch(sender, searchType, keyword, startDate, endDate);
    },

    //******************************************************************************************************	
    GeneticServicesDirectorySearch: function(sender) {
        var searchType = 'genetics';
        var typeOfCancer = '';
        var familyCancerSyndrome = '';
        var city = $("#" + ids.txtCity).val();
        var state = '';
        var country = '';
        var lastName = $("#" + ids.txtLastName).val();
        var searchCriteria = '';
        var specialty = '';
        var selected = '';
        var list;

        //get Type(s) of Cancer
        typeOfCancer = NCIAnalytics.SelectedOptionList(ids.selCancerType, 
            NCIAnalytics.stringDelimiter);

        // get Family Cancer Syndrome
        familyCancerSyndrome = NCIAnalytics.SelectedOptionList(ids.selCancerFamily, 
            NCIAnalytics.stringDelimiter);

        //get State(s)
        state = NCIAnalytics.SelectedOptionList(ids.selState, 
            NCIAnalytics.stringDelimiter);

        //get Country(ies)
        country = NCIAnalytics.SelectedOptionList(ids.selCountry, 
            NCIAnalytics.stringDelimiter);

        searchCriteria =
            [typeOfCancer, familyCancerSyndrome, city, state, country, lastName]
                .join(NCIAnalytics.fieldDelimiter);
        specialty = [typeOfCancer, familyCancerSyndrome].join(NCIAnalytics.fieldDelimiter);

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'GeneticServicesDirectorySearch');
        clickParams.Props = {
            11: searchType,
            22: searchCriteria,
            23: specialty
        };
        clickParams.Evars = {
            11: searchType,
            13: '+1',
            25: specialty
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    KeywordDateRangeSearch: function(sender, searchType, keyword, startDate, endDate) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'KeywordDateRangeSearch');
        clickParams.Props = {
            11: searchType,
            22: keyword
        };
        clickParams.Evars = {
            11: searchType,
            23: startDate,
            24: endDate,
            13: '+1'
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    KeywordSearch: function(sender, searchType) {
        var keyword = document.getElementById('keyword').value;

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'KeywordSearch');
        clickParams.Props = {
            11: searchType,
            22: keyword
        };
        clickParams.Evars = {
            11: searchType,
            13: '+1'
        };
        clickParams.Events = [2];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    SearchResults: function(sender, resultIndex) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'SearchResults');
        clickParams.Props = {
            13: resultIndex
        };
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    PDFLink: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'd', 'PDFLink');
        clickParams.Evars = {
            30: '+1'
        };
        clickParams.Events = [6];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************

    DownloadKindleClick: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'd', 'DownloadKindleClick');
        clickParams.Evars = {
            30: '+1'
        };
        clickParams.Events = [22];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************

    DownloadOtherEReaderClick: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'd', 'DownloadOtherEReaderClick');
        clickParams.Evars = {
            30: '+1'
        };
        clickParams.Events = [23];
        clickParams.LogToOmniture();
    },


    //******************************************************************************************************	
    eMailLink: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'eMailLink');

        clickParams.Props = {
            43: 'Email'
        };

        clickParams.Events = [17];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    HelpLink: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'HelpLink');
        clickParams.Events = [5];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    PrintLink: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'PrintLink');

        clickParams.Props = {
            43: 'Print'
        };

        clickParams.Events = [17];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    SendToPrinterLink: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'SendToPrinterLink');
        clickParams.Events = [14];
        clickParams.LogToOmniture();
    },
    //******************************************************************************************************	
    HeaderLink: function(sender, headerName) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'HeaderLink-' + headerName);
        clickParams.Props = {
            36: headerName
        };
        clickParams.Evars = {
            36: headerName
        };
        clickParams.Events = [16];
        clickParams.LogToOmniture();
    },
    //******************************************************************************************************	
    FooterLink: function(sender, footerName) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'FooterLink-' + footerName);
        clickParams.Props = {
            36: footerName
        };
        clickParams.Evars = {
            36: footerName
        };
        clickParams.Events = [16];
        clickParams.LogToOmniture();
    },
    //******************************************************************************************************	
    RightNavLink: function(sender, label) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'RightNavLink-');
        clickParams.Props = {
            27: sender.innerHTML,
        };
		clickParams.Events = [8];
        clickParams.LogToOmniture();
    },
    //******************************************************************************************************	
    BulletinSubscription: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'BulletinSubscription');
        clickParams.Events = [9];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    GenericLinkTrack: function(sender, label) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'GenericLinkTrack');
        clickParams.Props = {
            4: sender.href,
            5: sender.innerHTML,
            28: label
        };
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    LinkTracking: function(toLink, fromLink, label) {

        clickParams = new NCIAnalytics.ClickParams(this,
            'nciglobal', 'o', 'LinkTracking');
        clickParams.Props = {
            4: toLink,
            5: fromLink + NCIAnalytics.stringDelimiter + toLink
        };
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    CustomLink: function(sender, linkName) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', linkName);
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    BookmarkShareClick: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'BookmarkShareClick');

        clickParams.Props = {
            43: sender.title
        };

        clickParams.Events = [17];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************
    MegaMenuClick: function(sender, tree) {
        clickParams = new NCIAnalytics.ClickParams(sender,
            'nciglobal', 'o', 'MegaMenuClick');

        var pageName = sender.ownerDocument.location.hostname + sender.ownerDocument.location.pathname; // this is the URL
        if (typeof pageNameOverride !== 'undefined')
            localPageName = pageNameOverride;

        /*
        * tree.length == 1 : section/tab level
        * tree.length == 2 : subsection level
        * tree.length == 3 : link level
        */

        if (typeof tree[1] === 'undefined') {
            clickParams.Props = {
                53: tree[0].text,
                54: tree[0].text,
                55: tree[0].text,
                56: pageName
            };
            clickParams.Evars = {
                53: tree[0].text
            };
        }

        if (typeof tree[1] !== 'undefined') {
            // click was sub-section or link-level
            clickParams.Props = {
                53: tree[1].text,
                54: tree[0].text,
                55: tree[0].text,
                56: pageName
            };
            clickParams.Evars = {
                53: tree[1].text
            };
        }

        if (typeof tree[2] !== 'undefined') {
            // click was link-level
            clickParams.Props = {
                53: tree[2].text,
                54: tree[1].text,
                55: tree[0].text,
                56: pageName
            };
            clickParams.Evars = {
                53: tree[2].text
            };
        }

        clickParams.Events = [26];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************
    LogoClick: function(sender) {
        clickParams = new NCIAnalytics.ClickParams(sender,
			'nciglobal', 'o', 'Logolick');

        var pageName = sender.ownerDocument.location.hostname + sender.ownerDocument.location.pathname; // this is the URL
        if (typeof pageNameOverride !== 'undefined')
            localPageName = pageNameOverride;

        clickParams.Props = {
            53: 'NCI Logo',
            56: pageName
        };

        clickParams.Evars = {
            53: 'NCI Logo'
        };

        clickParams.Events = [26];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************
    UtilityBarClick: function(sender, linkText) {
        clickParams = new NCIAnalytics.ClickParams(sender,
			'nciglobal', 'o', 'UtilityBarDictionaryClick');

        var pageName = sender.ownerDocument.location.hostname + sender.ownerDocument.location.pathname; // this is the URL
        if (typeof pageNameOverride !== 'undefined')
            localPageName = pageNameOverride;

        clickParams.Props = {
            36: linkText,
            53: linkText,
            56: pageName
        };

        clickParams.Evars = {
            36: linkText,
            53: linkText
        };

        clickParams.Events = [16];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    CardClick: function(sender, cardTitle, linkText, container, containerIndex) {
        clickParams = new NCIAnalytics.ClickParams(sender,
                'nciglobal', 'o', 'FeatureCardClick');

        var pageName = sender.ownerDocument.location.hostname + sender.ownerDocument.location.pathname; // this is the URL
        if (typeof pageNameOverride !== 'undefined')
            localPageName = pageNameOverride;

        var position = container + ":" + containerIndex;

        clickParams.Props = {
            57: cardTitle,
            58: linkText,
            59: position,
            60: pageName
        };

        clickParams.Events = [27];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    TimelyContentZoneTab: function(sender, tabTitle) {
        clickParams = new NCIAnalytics.ClickParams(sender,
                'nciglobal', 'o', 'TimelyContentZoneTab');
        clickParams.Props = {
            37: tabTitle
        };
        clickParams.Evars = {
            37: tabTitle
        };
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    TimelyContentZoneLink: function(e, panelTitle) {
        var targ;
        if (!e) var e = window.event;
        if (e.target) targ = e.target;
        else if (e.srcElement) targ = e.srcElement;
        if (targ.nodeType == 3) // defeat Safari bug
            targ = targ.parentNode;

        if (targ.nodeName == 'IMG')
            targ = targ.parentNode;

        if (targ.nodeName == 'EM')
            targ = targ.parentNode;

        if (targ.nodeName == 'A') {
            var linkText = "";
            var isTag = false;

            clickParams = new NCIAnalytics.ClickParams(this,
                'nciglobal', 'o', 'TimelyContentZoneLink');

            for (i = 0; i < targ.innerHTML.length; i++) {
                if (targ.innerHTML.charAt(i) == "<")
                    isTag = true;

                if (!isTag)
                    linkText = linkText + targ.innerHTML.charAt(i);

                if (targ.innerHTML.charAt(i) == ">")
                    isTag = false;

            }

            var prefixCheck = targ.innerHTML.toLowerCase();
            if (prefixCheck.search("video_icon.jpg") > -1)
                linkText = "Video: " + linkText;
            else if (prefixCheck.search("audio_icon.jpg") > -1)
                linkText = "Audio: " + linkText;

            clickParams.Props = {
                38: linkText,
                39: targ.href,
                40: panelTitle
            };
            clickParams.Evars = {
                38: linkText,
                39: targ.href,
                40: panelTitle
            };
            clickParams.LogToOmniture();
        }
    },

    //******************************************************************************************************	
    QuestionsAboutCancerFooter: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
                'nciglobal', 'o', 'QuestionsAboutCancerFooter');
        clickParams.Events = [5];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    QuestionsAboutCancerHeader: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
                'nciglobal', 'o', 'QuestionsAboutCancerHeader');
        clickParams.Events = [18];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    FindCancerTypeBox: function(sender) {

        clickParams = new NCIAnalytics.ClickParams(sender,
                'nciglobal', 'o', 'FindCancerTypeBox');
        clickParams.Events = [19];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    TileCarousel: function(sender, tileTitle, tileURL) {
        clickParams = new NCIAnalytics.ClickParams(sender,
                'nciglobal', 'o', 'TileCarousel');
        clickParams.Props = {
            41: tileTitle,
            42: tileURL
        };
        clickParams.Evars = {
            41: tileTitle,
            42: tileURL
        };
        clickParams.Events = [20];
        clickParams.LogToOmniture();
    },

    //******************************************************************************************************	
    LinkTrackTagBuilder: function(e) {

        if (e.button == 0) {  // Left mouse button pressed
            var linkElement = NCIAnalytics.GetElement(NCIAnalytics.GetEventTarget(e), 'A');

            if (linkElement != null &&
                    linkElement.href != null &&
                    linkElement.href != '' &&
                    (linkElement.onclick == null ||
                    linkElement.onclick.toString().indexOf('NCIAnalytics') == -1)) {

                NCIAnalytics.LinkTracking(NCIAnalytics.DissectLink(linkElement.href), location.pathname);
            }
        }
    },

    //******************************************************************************************************	
    DissectLink: function(theLink) {

        if (theLink.indexOf('clickpassthrough') != -1) {
            var theLinkBreakout = theLink.split('&');
            for (var i = 0; i < theLinkBreakout.length; i++) {
                if (theLinkBreakout[i].indexOf('redirectUrl') != -1) {
                    return unescape(theLinkBreakout[i].substring(12));
                    break;
                }
            }
        }
        else {
            var theLinkBreakout = theLink.split('//');
            if (theLinkBreakout.length > 1)
                return theLinkBreakout[1];
            else
                return theLink;
        }
    },

    //******************************************************************************************************	
    GetElement: function(startingNode, elementType) {

        try {

            var currentNode = startingNode;

            while (currentNode != null && currentNode.tagName != 'BODY') {
                if (currentNode.tagName == elementType) {
                    return currentNode;
                    break;
                }
                else {
                    currentNode = currentNode.parentNode;
                }
            }
        } catch (err) { }

    },

    //******************************************************************************************************	
    GetEventTarget: function(e) {
        var target = (e.target) ? e.target : e.srcElement;

        if (target != null) {
            if (target.nodeType == 3)
                target = target.parentNode;
        }
        return target;
    },

    //******************************************************************************************************	
    Resize: function(sender, viewPort) {
        var width = 'ResizedTo' + viewPort;
        clickParams = new NCIAnalytics.ClickParams(sender, 'nciglobal', 'o', width);
        clickParams.Evars = {
            5: viewPort
        };
        clickParams.Events = [7];
        clickParams.LogToOmniture();
    },
	
    //******************************************************************************************************	
    /* SPLF_Hier1: function() {
    // URL structure
    // element 0 = blank
    // element 1 = "Cancertopics"
    // element 2 = "types"
    // element 3 = type of cancer
    // element 4 = Patient/Health Professional
    // element 5 = topic
    // element 6 = sub-topic

        delimiter = "|";
    pathArray = window.location.pathname.split('/');
    out = "[" + pathArray.length.toString() + "] ";
    for (i = 0; i < pathArray.length; i++)
    out = out + " - (" + i.toString() + ") " + pathArray[i];
    //alert(out); 
    s.hier1 = s.channel;
    if (pathArray.length >= 4) {
    if (pathArray[1].toLowerCase() == "cancertopics") {
    if (pathArray[2].toLowerCase() == "types") {
    s.prop30 = pathArray[3];
    s.hier1 += delimiter + s.prop30;
    if (pathArray.length >= 5) {
    s.prop43 = pathArray[4];
    s.hier1 += delimiter + s.prop43;
    if (pathArray.length >= 6) {
    s.prop44 = pathArray[5];
    s.hier1 += delimiter + s.prop44;
    if (pathArray.length >= 7) {
    s.prop45 = pathArray[6];
    s.hier1 += delimiter + s.prop45;
    }
    }
    }
    }
    }
    }
    },
    */

    SPLF_Lang: function() {
        //alert('Lang');
    }
};