
// Make sure the CDC and CDC.Metrics namespaces are defined.
if (typeof CDC == "undefined") var CDC = new Object();
if (typeof CDC.Metrics == "undefined") CDC.Metrics = new Object();

// Declare an object for handling Google Analytics methods/actions.
CDC.Metrics.GoogleAnalytics = function() {

	var accountNumberOverride = '';
	var domainOverride = 'www.cdc.gov';

	function setAccountNumber(number) {
		accountNumberOverride = number;
	};
	function getAccountNumber() {
		return accountNumberOverride;
	};
	function setDomain(name) {
		domainOverride = name;
	};
	function getDomain() {
		return domainOverride;
	};

	// A class used to define a mapping between a Google Analytics account number and a URL expression (either 
	//	RegExp or simple "indexOf" type match).
	function RegistrationEntry(accountNumber, domain, urlPattern, isRegExp, enabled) {
		this.AccountNumber = accountNumber;
		this.Domain = domain;
		this.UrlPattern = urlPattern;
		this.IsRegExp = isRegExp;
		this.Enabled = enabled;
	};

	// Holds the collection of mappings between Google Analytics accounts and URL patterns.
	var RegistrationList = new Array(
		// Begin OADC
		new RegistrationEntry('UA-31796593-1', 'www.cdc.gov', 'https?://www\.cdc\.gov/(.(?!/))*$', true, false),
		new RegistrationEntry('UA-31796593-1', 'www.cdc.gov', 'https?://www\.cdc\.gov$', true, true),
		new RegistrationEntry('UA-31796593-1', 'www.cdc.gov', 'https?://www\.cdc\.gov/$', true, true),
		new RegistrationEntry('UA-31796593-1', 'www.cdc.gov', 'https?://www\.cdc\.gov/index.htm$', true, true),
		new RegistrationEntry('UA-31796593-1', 'www.cdc.gov', 'https?://www\.cdc\.gov/404.html$', true, true),
		new RegistrationEntry('UA-31796593-1', 'www.cdc.gov', 'https?://www\.cdc\.gov/privacy.html$', true, true),
		new RegistrationEntry('UA-31796593-2', 'www.cdc.gov', 'https?://www\.cdc\.gov/vitalsigns/(?:[\\?/](?:.*)?)?', true, true),
		new RegistrationEntry('UA-31796593-3', 'www.cdc.gov', 'https?://www\.cdc\.gov/media/(?:[\\?/](?:.*)?)?', true, true),
		new RegistrationEntry('UA-31796593-4', 'www.cdc.gov', 'https?://www\.cdc\.gov/about/(?:[\\?/](?:.*)?)?', true, true),
		new RegistrationEntry('UA-31796593-5', 'www.cdc.gov', 'https?://www\.cdc\.gov/24-7/(?:[\\?/](?:.*)?)?', true, true),
		// Begin OADC DEV
		new RegistrationEntry('UA-31796593-7', 'wwwdev.cdc.gov', 'https?://wwwdev\.cdc\.gov/(.(?!/))*$', true, true),
		new RegistrationEntry('UA-31796593-8', 'wwwdev.cdc.gov', 'https?://wwwdev\.cdc\.gov/vitalsigns(?:[\\?/](?:.*)?)?', true, true),
		new RegistrationEntry('UA-31796593-9', 'wwwdev.cdc.gov', 'https?://wwwdev\.cdc\.gov/media/(?:[\\?/](?:.*)?)?', true, true),
		new RegistrationEntry('UA-31796593-10', 'wwwdev.cdc.gov', 'https?://wwwdev\.cdc\.gov/about/(?:[\\?/](?:.*)?)?', true, true),
		new RegistrationEntry('UA-31796593-11', 'wwwdev.cdc.gov', 'https?://wwwdev\.cdc\.gov/24-7/(?:[\\?/](?:.*)?)?', true, true)
	);

	return {

		SetAccountNumber: function(account, domain) {
			setAccountNumber(account);
			if (domain && (domain.length > 0)) {
				setDomain(domain);
			}
		},

		Registration : function () {
			var result = new RegistrationEntry('UA-NNNNNNNN-N', 'www.cdc.gov', '', false, false);
			if (getAccountNumber().length > 0) {
				result = new RegistrationEntry(getAccountNumber(), getDomain(), '', true, true);
			} else {
				var url = location.href;
				var hashLocation = url.indexOf("#");
				if (hashLocation > 0) {
					url = url.substring(0, hashLocation);
				}
				for (var i = 0; i < RegistrationList.length; i++) {
					if (RegistrationList[i].IsRegExp) {
						var exp = new RegExp(RegistrationList[i].UrlPattern, "mi");
						if (exp.test(url) && RegistrationList[i].Enabled) {
							result = RegistrationList[i];
							break;
						}
					} else {
						if (url.indexOf(RegistrationList[i].UrlPattern) == 0 && RegistrationList[i].Enabled) {
							result = RegistrationList[i];
							break;
						}
					}
				}
			}
			return result;
		}

	};
}();
// The core Google Analytics code with CDC modifications.
var _gaq = _gaq || [];
_gaq.push(function() {_gat._anonymizeIp();});
// Send the metrics request for the global account.
if (document.location.hostname == 'wwwdev.cdc.gov') {
	_gaq.push(
		['_setAccount', 'UA-32510962-2'],	// This should be the "global" account for cdc.gov.
		['_setDomainName', 'wwwdev.cdc.gov'],	// This should be the domain associated with the "global" account.
		['_trackPageview'],
		['_trackPageLoadTime']
	);
} else {
	_gaq.push(
		['_setAccount', 'UA-32510962-1'],	// This should be the "global" account for cdc.gov.
		['_setDomainName', 'www.cdc.gov'],	// This should be the domain associated with the "global" account.
		['_trackPageview'],
		['_trackPageLoadTime']
	);
}
