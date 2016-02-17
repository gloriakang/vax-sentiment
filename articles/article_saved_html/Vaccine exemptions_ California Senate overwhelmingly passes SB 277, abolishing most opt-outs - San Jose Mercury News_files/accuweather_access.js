//updated 7-1-2015 to use http://api.accuweather.com instead of http://apidev.accuweather.com
var accuweatherWidget = new function() {
	var language = "en";            
	var apiUrl = "http://api.accuweather.com";
	var apiKey = "230548dfe5d54776aaaf5a1f2a19b3f5";   
	var isDayTime = false;
	
	var siteConfigJson = {
		  "reporterherald.com": {
			"data": {
			  "city_state": "loveland-co",
			  "zip": "80537",
			  "data_locationkey": "332151",
			  "data_partner": "lovelandreporterherald"
			}
		  },
		  "redbluffdailynews.com": {
			"data": {
			  "city_state": "red-bluff-ca",
			  "zip": "96080",
			  "data_locationkey": "331997",
			  "data_partner": "redbluffdailynews"
			}
		  },
		  "elpasotimes.com": {
			"data": {
			  "city_state": "el-paso-tx",
			  "zip": "79901",
			  "data_locationkey": "351195",
			  "data_partner": "mngelpaso"
			}
		  },
		  "lcsun-news.com": {
			"data": {
			  "city_state": "las-cruces-nm",
			  "zip": "88001",
			  "data_locationkey": "329556",
			  "data_partner": "mngcruces2"
			}
		  },
		  "daily-times.com": {
			"data": {
			  "city_state": "farmington-nm",
			  "zip": "87401",
			  "data_locationkey": "329559",
			  "data_partner": "mngdailyt"
			}
		  },
		  "ruidosonews.com": {
			"data": {
			  "city_state": "ruidoso-nm",
			  "zip": "88345",
			  "data_locationkey": "339603",
			  "data_partner": "ruidosonews"
			}
		  },
		  "currentargus.com": {
			"data": {
			  "city_state": "carlsbad-nm",
			  "zip": "88220",
			  "data_locationkey": "329554",
			  "data_partner": "mngcarlsbad2"
			}
		  },
		  "alamogordonews.com": {
			"data": {
			  "city_state": "alamogordo-nm",
			  "zip": "88310",
			  "data_locationkey": "334576",
			  "data_partner": "mngalamago"
			}
		  },
		  "demingheadlight.com": {
			"data": {
			  "city_state": "deming-nm",
			  "zip": "88030",
			  "data_locationkey": "334560",
			  "data_partner": "demingheadlight"
			}
		  },
		  "ydr.com": {
			"data": {
			  "city_state": "york-pa",
			  "zip": "17401",
			  "data_locationkey": "330294",
			  "data_partner": "yorkdailyrecord"
			}
		  },
		  "lowellsun.com": {
			"data": {
			  "city_state": "lowell-ma",
			  "zip": "01851",
			  "data_locationkey": "333574",
			  "data_partner": "dfmlowellsunoap"
			}
		  },
		  "ldnews.com": {
			"data": {
			  "city_state": "lebanon-pa",
			  "zip": "17042",
			  "data_locationkey": "335349",
			  "data_partner": "lebanondailynews"
			}
		  },
		  "timesheraldonline.com": {
			"data": {
			  "city_state": "vallejo-ca",
			  "zip": "94590",
			  "data_locationkey": "331982",
			  "data_partner": "timesherald"
			}
		  },
		  "publicopiniononline.com": {
			"data": {
			  "city_state": "chambersburg-pa",
			  "zip": "17201",
			  "data_locationkey": "335320",
			  "data_partner": "publicopinion"
			}
		  },
		  "reformer.com": {
			"data": {
			  "city_state": "brattleboro-vt",
			  "zip": "05301",
			  "data_locationkey": "336183",
			  "data_partner": "brattlebororeformer"
			}
		  },
		  "dailydemocrat.com": {
			"data": {
			  "city_state": "woodland-ca",
			  "zip": "95695",
			  "data_locationkey": "327142",
			  "data_partner": "dailydemocrat"
			}
		  },
		  "parkrecord.com": {
			"data": {
			  "city_state": "park-city-ut",
			  "zip": "84060",
			  "data_locationkey": "341178",
			  "data_partner": "parkrecord"
			}
		  },
		  "ukiahdailyjournal.com": {
			"data": {
			  "city_state": "ukiah-ca",
			  "zip": "95482",
			  "data_locationkey": "332010",
			  "data_partner": "ukiahdailyjournal"
			}
		  },
		  "twincities.com": {
			"data": {
			  "city_state": "saint-paul-mn",
			  "zip": "55102",
			  "data_locationkey": "348795",
			  "data_partner": "stpaulpioneerpress"
			}
		  },
		  "yorkdispatch.com": {
			"data": {
			  "city_state": "york-pa",
			  "zip": "17401",
			  "data_locationkey": "330294",
			  "data_partner": "yorkdispatch"
			}
		  },
		  "marinij.com": {
			"data": {
			  "city_state": "novato-ca",
			  "zip": "94945",
			  "data_locationkey": "331969",
			  "data_partner": "marinindependentjournal"
			}
		  },
		  "dailycamera.com": {
			"data": {
			  "city_state": "boulder-co",
			  "zip": "80302",
			  "data_locationkey": "327347",
			  "data_partner": "dailycamera"
			}
		  },
		  "orovillemr.com": {
			"data": {
			  "city_state": "oroville-ca",
			  "zip": "95965",
			  "data_locationkey": "331994",
			  "data_partner": "orovillemercuryregister"
			}
		  },
		  "chicoer.com": {
			"data": {
			  "city_state": "chico-ca",
			  "zip": "95928",
			  "data_locationkey": "327153",
			  "data_partner": "chicoer"
			}
		  },
		  "berkshireeagle.com": {
			"data": {
			  "city_state": "pittsfield-ma",
			  "zip": "01201",
			  "data_locationkey": "329321",
			  "data_partner": "berkshireeagle"
			}
		  },
		  "santacruzsentinel.com": {
			"data": {
			  "city_state": "santa-cruz-ca",
			  "zip": "95060",
			  "data_locationkey": "327138",
			  "data_partner": "scrsentinel"
			}
		  },
		  "timescall.com": {
			"data": {
			  "city_state": "longmont-co",
			  "zip": "80501",
			  "data_locationkey": "332150",
			  "data_partner": "longmonttimescall"
			}
		  },
		  "eveningsun.com": {
			"data": {
			  "city_state": "hanover-pa",
			  "zip": "17331",
			  "data_locationkey": "335442",
			  "data_partner": "hanovereveningsun"
			}
		  },
		  "times-standard.com": {
			"data": {
			  "city_state": "eureka-ca",
			  "zip": "95501",
			  "data_locationkey": "327130",
			  "data_partner": "timesstandard"
			}
		  },
		  "sentinelandenterprise.com": {
			"data": {
			  "city_state": "fitchburg-ma",
			  "zip": "01420",
			  "data_locationkey": "329328",
			  "data_partner": "sentinelenterprise"
			}
		  },
		  "benningtonbanner.com": {
			"data": {
			  "city_state": "bennington-vt",
			  "zip": "05201",
			  "data_locationkey": "336180",
			  "data_partner": "benningtonbanner"
			}
		  },
		  "canoncitydailyrecord.com": {
			"data": {
			  "city_state": "canon-city-co",
			  "zip": "81212",
			  "data_locationkey": "332197",
			  "data_partner": "canoncitydailyrecord"
			}
		  },
		  "record-bee.com": {
			"data": {
			  "city_state": "lakeport-ca",
			  "zip": "95453",
			  "data_locationkey": "331992",
			  "data_partner": "lakecountyrecordbee"
			}
		  },
		  "fortmorgantimes.com": {
			"data": {
			  "city_state": "fort-morgan-co",
			  "zip": "80701",
			  "data_locationkey": "332168",
			  "data_partner": "fortmorgantimes"
			}
		  },
		  "thereporter.com": {
			"data": {
			  "city_state": "vacaville-ca",
			  "zip": "95688",
			  "data_locationkey": "331981",
			  "data_partner": "vacavillereporter"
			}
		  },
		  "charlestondailymail.com": {
			"data": {
			  "city_state": "charleston-wv",
			  "zip": "25301",
			  "data_locationkey": "331471",
			  "data_partner": "charlestondailymail"
			}
		  },
		  "montereyherald.com": {
			"data": {
			  "city_state": "monterey-ca",
			  "zip": "93940",
			  "data_locationkey": "331966",
			  "data_partner": "montereycountyherald"
			}
		  },
		  "sltrib.com": {
			"data": {
			  "city_state": "salt-lake-city-ut",
			  "zip": "84101",
			  "data_locationkey": "331216",
			  "data_partner": "saltlaketribune"
			}
		  },
		  "lamarledger.com": {
			"data": {
			  "city_state": "lamar-co",
			  "zip": "81052",
			  "data_locationkey": "332175",
			  "data_partner": "lamled"
			  }
		  },
		  "coloradodaily.com": {
			"data": {
			  "city_state": "boulder-co",
			  "zip": "80302",
			  "data_locationkey": "327347",
			  "data_partner": "coldail"
			}
		},
		"brushnewstribune.com": {
			"data": {
			  "city_state": "brush-co",
			  "zip": "80723",
			  "data_locationkey": "332217",
			  "data_partner": "brunew"
			}
		},
		"akronnewsreporter.com": {
			"data": {
			  "city_state": "akron-co",
			  "zip": "80720",
			  "data_locationkey": "332152",
			  "data_partner": "akrnew"
			}
		},
		"julesburgadvocate.com": {
			"data": {
			  "city_state": "julesburg-co",
			  "zip": "80737",
			  "data_locationkey": "332206",
			  "data_partner": "juladv"
			}
		},
		"burlington-record.com": {
			"data": {
			  "city_state": "burlington-co",
			  "zip": "80807",
			  "data_locationkey": "332156",
			  "data_partner": "burlrec"
			}
		},
		"journal-advocate.com": {
			"data": {
			  "city_state": "sterling-co",
			  "zip": "80751",
			  "data_locationkey": "332200",
			  "data_partner": "journaladvocate"
			}
		}
		};
	
	var getWeather = function (zipcode) {  	
		//zipcode comes from localdata.ini
		
		var locationUrl = apiUrl + "/locations/v1/US/search?q=" + zipcode + "&apikey=" + apiKey;
		var locationKey = "";
		$.ajax({
			type: "GET",
			url: locationUrl,
			dataType: "jsonp",
			cache: true,
			jsonpCallback: "awxCallback",
			success: function (data) {
				//more strict error checking required here..
				if(data && data.length > 0) {
					locationKey = data[0].Key;
					getCurrentConditions(locationKey);
					getForecasts(locationKey);
		city = data[0].LocalizedName+", "+data[0].AdministrativeArea.ID;
					//console.log(city);
		$('.weather-city').html(city);
				} else {
					msg = "No locations found.";
					//console.log(msg);                            
				}                                                   
			}
		});	
	};
	
	// Gets current conditions for the location.            
    var getCurrentConditions = function (locationKey) {
			 
		var isMetric = false;                        
		var current = new Array();
		weatherUrl = "";
		//zipcode comes from localdata.ini
	 
		var currentConditionsUrl = apiUrl + "/currentconditions/v1/" + locationKey + ".json?language=" + language + "&apikey=" + apiKey;
		$.ajax({
			type: "GET",
			url: currentConditionsUrl,
			dataType: "jsonp",
			cache: true,
			jsonpCallback: "awxCallback",
			success: function (data) {                            
					if(data && data.length > 0) {
						var conditions = data[0];                                
						var temp = isMetric ? conditions.Temperature.Metric.Value : conditions.Temperature.Imperial.Value;                                
						current['icon'] = (conditions.WeatherIcon < 10) ? "0"+conditions.WeatherIcon : conditions.WeatherIcon;
						current['temp'] = temp;
						current['isdaytime'] = conditions.IsDayTime;
						current['weatherurl'] = conditions.Link;
						//console.log("Current ");console.log(current);
						//set global leaf page weather url and current condition here..
						$('.current-temp .temp').html(current['temp']+'&deg;');
						$('.weatherBox .currImg').html('<img src="http://local.dailynews.com/common/dfm/assets/img/accuweather/'+current['icon']+'.png" alt="" class="weather-icon" />');
					}
					else {
						msg = "No data returned for locaton key: "+locationKey;
						//console.log(msg);
					}                        
			}
		});
		//console.log(current);
	};
	
	var getForecasts = function(locationKey) {
			          
		var forecasts = new Array();
		//zipcode comes from localdata.ini
	
		var forcastUrl = apiUrl + "/forecasts/v1/daily/10day/" + locationKey + ".json?language=" + language + "&apikey=" + apiKey;
		//console.log("forcastUrl");console.log(forcastUrl);
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		$.ajax({
			type: "GET",
			url: forcastUrl,
			dataType: "jsonp",
			cache: true,
			//jsonpCallback: "awxCallback",
			success: function (data) {
				var html;
				if(data) {                                                                
					var forecast = data.DailyForecasts;                                
					for(var day in forecast) {                                    
						var dateobj = new Date(forecast[day].Date);
						var icon = isDayTime ? forecast[day].Day.Icon : forecast[day].Night.Icon;
						forecasts[day] = new Array();
						forecasts[day]['day'] = days[dateobj.getDay()];
						forecasts[day]['icon'] = forecast[day].Day.Icon;
						forecasts[day]['max'] = forecast[day].Temperature.Maximum.Value;
						forecasts[day]['min'] = forecast[day].Temperature.Minimum.Value;                                    
					}   
					//console.log("Forecasts");console.log(forecasts);
					//set forecast values here..
					$('.high_low .max').html(forecasts[0]['max']+'&deg;');
					$('.high_low .min').html(forecasts[0]['min']+'&deg;');
	
				}
				else {
					msg = "No data returned for location key: "+locationKey;
					//console.log(msg);
				}                        
			}
		});
	};
	
	
	this.loadAccuweather = function(target, zipcode) {
		// Set the Template HTML
		//console.log("Loading Accuweather in Nav");
		var weatherURL = self.dfmNav.pData.loc.weatherLink;
		var templateHTML = "<table class=\"weatherBox\" border=\"0\">"
							+"<tbody>"
								+"<tr>"
									+"<td class=\"weatherHead\"><a class=\"weatherSectionLink\" href=\""+weatherURL+"\">Weather: </a> </td>"
										+"<td class=\"current-temp\">"
											+"<span class=\"currImg\"></span>"
										+"</td> 	"						
										+"<td class=\"current-temp weatherContent high_low\">"
											+"<span class=\"weather-city weatherHead\"></span>|"
												+"<a href=\""+weatherURL+"\" class=\"weatherN\">Now: <span class=\"temp\"></span></a>|"
												+"<a href=\""+weatherURL+"\" class=\"weatherH\">High: <span class=\"max\"></a> |"
											   +"<a href=\""+weatherURL+"\" class=\"weatherL\">Low: <span class=\"min\"></a> |"
												+"<!-- .high-low -->"
												+"<a href=\""+weatherURL+"\" class=\"weatherFiveDayLink\">5-Day Forecast</a>"
												+"</td> <!-- .high-low -->"
								+"</tr> <!-- .current-weather -->"
							+"</tbody> <!-- .weather-bar -->"
						+"</table>";
						
		//Write template to the target element
		if(document.getElementById(target)){
			document.getElementById(target).innerHTML = templateHTML;
					
			getWeather(zipcode);
			//getWeatherConvergence();
		}
	};

	this.loadWeather = function(target, zipcode, siteDomain){
			        
		//console.log("getConfigInfodata");console.log(siteConfigJson);
		
		//Check to see if site is in the config
		var siteConfig = siteConfigJson[siteDomain];
		//console.log("siteConfig");console.log(siteConfig);
		if(siteConfig!=undefined){
			//load Accuweather
			self.accuweatherWidget.loadAccuweather(target, zipcode);
		}
		else{
			//load Custom Weather
			self.loadWeatherBoxHorizontal(target, zipcode, self.dfmNav.pData.loc.weatherLinkDomain, self.dfmNav.pData.loc.weatherLink);
		}
	};
	
	this.load36HourWidget = function(urlTarget, widgetTarget,siteDomain){
		       
		//console.log("getConfigInfodata");console.log(siteConfigJson);
		
		//var siteDomain = self.dfmNav.pData.baseURL.replace('http://www.','');
		//var siteDomain = 'mercurynews.com';
		
		//Check to see if site is in the config
		siteConfig = siteConfigJson[siteDomain]['data'];
		//console.log("36siteConfig");console.log(siteConfig);
		
		if(siteConfig!=undefined){
			var city_state = siteConfig['city_state'];
			//console.log("city_state");console.log(city_state);
			var zip = siteConfig["zip"];
			//console.log("zip");console.log(zip);
			var data_locationkey = siteConfig['data_locationkey'];
			//console.log("data_locationkey");console.log(data_locationkey);
			var data_partner = siteConfig['data_partner'];
			//console.log("data_partner");console.log(data_partner);
		
		
			var weatherUrl = '<' + 'a href=http://www.accuweather.com/en/us/' + city_state + '/' + zip + '/current-weather/' + data_locationkey + '/" class="aw-widget-legal"' + '>' + '</a>';

			document.getElementById(urlTarget).innerHTML = weatherUrl;
	
			var weatherDiv = '<' + 'div id="awtd1389982855133" class="aw-widget-36hour"  data-locationkey="' + data_locationkey + '" data-unit="f" data-language="en-us" data-useip="false" data-partner="' + data_partner + '" data-uid="awtd1389982855133" data-editlocation="true"' + '>';
	
			document.getElementById(widgetTarget).innerHTML = weatherDiv;
		}
		else{
			msg = "Accuweather Leaf Page Widget: " +siteDomain+"was not found in " + siteConfigJson;
			//console.log(msg);
		}
	};
	
};
	
