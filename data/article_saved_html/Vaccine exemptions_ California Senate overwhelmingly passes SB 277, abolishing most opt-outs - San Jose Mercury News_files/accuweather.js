var accuweatherNavWidget = new function() {
	var language = "en";            
	var apiUrl = "http://api.accuweather.com";
	var apiKey = "230548dfe5d54776aaaf5a1f2a19b3f5";   
	var isDayTime = false;
	var isMetric = false;
	var latitude = null;
	var longitude = null;
	
	
	var getWeather = function (zipcode, weatherMode) {
		var deferred = $.Deferred();
		
		var locationUrl = apiUrl + "/locations/v1/US/search?q=" + zipcode + "&apikey=" + apiKey;
		var locationKey = "";
		var locationRequest = $.ajax({
			type: "GET",
			url: locationUrl,
			dataType: "jsonp",
			cache: true,
			jsonpCallback: "awxCallback",
			success: function (data) {
				if(data && data.length > 0) {
					locationKey = data[0].Key;
					getCurrentConditions(locationKey,weatherMode);
					getForecasts(locationKey,weatherMode);
					city = data[0].LocalizedName+", "+data[0].AdministrativeArea.ID;
					latitude = data[0].GeoPosition.Latitude;
					longitude = data[0].GeoPosition.Longitude;
					$('.weather-city').html(city);
				} else {
					msg = "No locations found.";
					window.console&&console.log(msg);                
				}
				deferred.resolve();
			}
		}).fail(function() {
			deferred.reject("AJAX error: " + locationRequest.status);
		});
		
		return deferred.promise();
	};
	
	// Gets current conditions for the location.            
    var getCurrentConditions = function (locationKey, weatherMode) {
			 
		var isMetric = false;                        
		var current = new Array();
		weatherUrl = "";
	 
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

						//set global leaf page weather url and current condition here..
						if(weatherMode == "drawer"){
							$('.current-weather .current-temp h5').html(current['temp']+'&deg;');
							$('#topbar-wrapper .currImg').html('<img src="http://local.dailynews.com/common/dfm/assets/img/accuweather/'+current['icon']+'.png" alt="" class="weather-icon" />');
						}
						else{
							$('.current-temp .temp').html(current['temp']+'&deg;');
							$('.weatherBox .currImg').html('<img src="http://local.dailynews.com/common/dfm/assets/img/accuweather/'+current['icon']+'.png" alt="" class="weather-icon" />');
						}
					}
					else {
						msg = "No data returned for locaton key: "+locationKey;
						window.console&&console.log(msg);
					}                        
			}
		}).fail(function(jqXHR, textStatus) {
			window.console&&console.log("AJAX error: " + textStatus);
		});
	};
	
	var getForecasts = function(locationKey,weatherMode) {
			          
		var forecasts = new Array();
		//zipcode comes from localdata.ini
	
		var forcastUrl = apiUrl + "/forecasts/v1/daily/10day/" + locationKey + ".json?language=" + language + "&apikey=" + apiKey;
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
					
					//set forecast values here..
					
					if(weatherMode == "drawer"){ //drawer
						//Gets data for the next few days
						for(var day in forecast) {                                    
							if (day == 7) { break;} 
							var dateobj = new Date(forecast[day].Date);   
							if(day == 0) {
								$('#topbar-wrapper .todayshigh').html(forecast[day].Temperature.Maximum.Value + '&deg;');                                        
								$('#topbar-wrapper .todayslow') .html(forecast[day].Temperature.Minimum.Value  + '&deg;');
							} else {
								icon = (forecast[day].Day.Icon < 10) ? "0"+forecast[day].Day.Icon : forecast[day].Day.Icon;                                    
								$('#topbar-wrapper .day'+day+'Name')  .html(days[dateobj.getDay()]);
								$('#topbar-wrapper .day'+day+'High')  .html(forecast[day].Temperature.Maximum.Value + '&deg;');
								$('#topbar-wrapper .day'+day+'Img')   .html('<img src="http://local.dailynews.com/common/dfm/assets/img/accuweather/'+icon+'.png" alt="" class="weather-icon" />');
								$('#topbar-wrapper .day'+day+'Low')   .html(forecast[day].Temperature.Minimum.Value  + '&deg;').siblings('h6').html();
							}
						}
					}
					else{ //Weather widget
						//Just gets High/low values for today
						for(var day in forecast) {                                    
							if(forecast[day].Day!=undefined){
								var dateobj = new Date(forecast[day].Date);
								var icon = isDayTime ? forecast[day].Day.Icon : forecast[day].Night.Icon;
								forecasts[day] = new Array();
								forecasts[day]['day'] = days[dateobj.getDay()];
								forecasts[day]['icon'] = forecast[day].Day.Icon;
								forecasts[day]['max'] = forecast[day].Temperature.Maximum.Value;
								forecasts[day]['min'] = forecast[day].Temperature.Minimum.Value;  
							}							
						}
						$('.high_low .max').html(forecasts[0]['max']+'&deg;');
						$('.high_low .min').html(forecasts[0]['min']+'&deg;');
					}
				}
				else {
					msg = "No data returned for location key: "+locationKey;
					window.console&&console.log(msg);
				}                        
			}
		}).fail(function(jqXHR, textStatus) {
			window.console&&console.log("AJAX error: " + textStatus);
		});
	};
	
	
	this.loadAccuweatherShort = function(targetID, zipcode, weatherURL) {
		// Set the Template HTML
		this.weatherMode = "short";
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
		if(document.getElementById(targetID)){
			document.getElementById(targetID).innerHTML = templateHTML;
			getWeather(zipcode,'short');
			//getWeatherConvergence();
		}
	};
	
	
	this.loadAccuweatherDrawer = function (targetID, zipcode, weatherURL) {
		//Load template for the Weather/Traffic/Market drawer
		//Note: this will only work when loaded on the DFM nav
		
		this.weatherMode = "drawer";
		var weatherURL = self.dfmNav.pData.baseURL + self.dfmNav.pData.loc.weatherLink;
		var trafficURL = self.dfmNav.pData.baseURL + "/traffic";
		var marketURL = self.dfmNav.pData.baseURL + "/market";
		var DomainOnly = self.dfmNav.pData.localURL.replace('http://local.','').replace('.com','');
		var SigAlertPartner = self.dfmNav.pData.loc.SigAlertPartner; //For Traffic
		var topBarCssHref = self.dfmNav.pData.localURL + "/common/dfm/dfm-nav/dfm-nav-topbar.css";
		
		//Build the drawer/topNav
		
		//Load StyleSheet for the TopBar code
		$('head',dfmNav.targetFrame).append('<link type="text/css" href="'+topBarCssHref+'" rel="stylesheet">');
		
		var weatherBarHTML = '<div class="weather-bar zero-height">'
					+'					<div class="current-weather">'
					+'						<div class="current-temp">'
					+'							<a href="'+weatherURL+'">'
					+'								<span class="currImg"></span>'
					+'								<hgroup>'
					+'									<h6>Right now</h6>'
					+'									<h5></h5>'
					+'								</hgroup>'
					+'							</a>'
					+'						</div> <!-- .current-temp -->'
					+'						<div class="high-low">'
					+'							<div>'
					+'								<p><small>Today\'s high</small></p>'
					+'								<a href="'+weatherURL+'"><p class="temp todayshigh"></p></a>'
					+'							</div>'
					+'							<div>'
					+'								<p><small>Today\'s low</small></p>'
					+'								<a href="'+weatherURL+'"><p class="temp todayslow"></p></a>'
					+'						  </div>'
					+'						</div> <!-- .high-low -->'
					+'						<div class="forecast">'
					+'							<ul>'
					+'								<li>'
					+'									<h6 class="day1Name"></h6>'
					+'									<a href="'+weatherURL+'">'
					+'										<span class="day1Img"></span>'
					+'										<p class="high-temp day1High"></p>'
					+'										<p class="low-temp day1Low"></p>'
					+'									</a>'
					+'								</li>'
					+'								<li>'
					+'									<h6 class="day2Name"></h6>'
					+'									<a href="'+weatherURL+'">'
					+'										<span class="day2Img"></span>'
					+'										<p class="high-temp day2High"></p>'
					+'										<p class="low-temp day2Low"></p>'
					+'									</a>'
					+'								</li>'
					+'								<li>'
					+'									<h6 class="day3Name"></h6>'
					+'									<a href="'+weatherURL+'">'
					+'										<span class="day3Img"></span>'
					+'										<p class="high-temp day3High"></p>'
					+'										<p class="low-temp day3Low"></p>'
					+'									</a>'
					+'								</li>'
					+'								<li>'
					+'									<h6 class="day4Name"></h6>'
					+'									<a href="'+weatherURL+'">'
					+'										<span class="day4Img"></span>'
					+'										<p class="high-temp day4High"></p>'
					+'										<p class="low-temp day4Low"></p>'
					+'									</a>'
					+'								</li>'
					+'								<li>'
					+'									<h6 class="day5Name"></h6>'
					+'									<a href="'+weatherURL+'">'
					+'										<span class="day5Img"></span>'
					+'										<p class="high-temp day5High"></p>'
					+'										<p class="low-temp day5Low"></p>'
					+'									</a>'
					+'								</li>'
					+'							</ul>'
					+'						</div> <!-- .forecast -->'
					+'					</div> <!-- .current-weather -->'
					+'					<div id="weather-ad">'
					+'						<div id="DFM-adPos-weather"></div>'
					+'					   <h6><a href="'+weatherURL+'">Full weather report</a></h6>'
					+'					</div>'
					+'				</div> <!-- .weather-bar -->';
					
		var trafficBarHTML = '		<div class="traffic-bar">'
					+'					<div id="sigAlertClicker" onClick="window.location.assign(\''+trafficURL+'\')"></div>'
					+'					<iframe width="640" scrolling="auto" height="300" frameborder="0" name="saportal" style="border: 0px solid #000000;" allowtransparency="true" marginheight="0" marginwidth="0"></iframe>'
					+'					<div class="traffic-ad">'
					+'						<div id="DFM-adPos-traffic"></div>'
					+'						<h6><a href="'+trafficURL+'">Full traffic report</a></h6>'
					+'					</div>'
					+'				</div><!-- .traffic-bar -->';
		
		var topBarHTML = '<div id="topbar" class="hide-for-phone zero-height">'
					+'	<div class="container-fluid">'
					+'		<div id="topbar-viewport">'
					+'			<div id="topbar-wrapper">'
					+ weatherBarHTML
					+ trafficBarHTML
					+'			</div>  <!-- #topbar-wrapper -->'
					+'		</div> <!-- #topbar-viewport -->'
					+'	</div> <!-- .container-fluid -->'
					+'</div> <!-- #topbar -->';
					
		$("#dfmHeader").prepend(topBarHTML);
		
		//Start Loading Weather
		accuLocationPromise = getWeather(zipcode,'drawer');
		
		//Build the topNav menu
		var topBarMenuDeferred = $.Deferred();
		//wait for the nav to load
		var loadAttempts = 0;
		var divTester = self.setInterval(function () {
				loadAttempts++;
				if(loadAttempts > 200) { //Gives it 20 seconds.
					window.console&&console.log("Taking too long, self-destructing divTester");
					window.clearInterval(divTester);		//Kill the setInterval because it's taking too long.
				}
				if (document.getElementById(targetID)) {	
					window.clearInterval(divTester);		//Kill the setInterval.
					
					var marketHref = self.dfmNav.pData.baseURL+'/business';
					var topBarMenuHTML = '<nav id="topbar-menu">'
						+'	<ul class="inline-list">'
						+'		<li><a class="weather-toggle" >Weather</a></li>'
						+'		<li><a class="traffic-toggle" >Traffic</a></li>'
						+'		<li><a class="markets-toggle" href="'+marketHref+'">Markets</a></li>'
						+'	</ul> <!-- .nav -->'
						+'</nav> <!-- #topbar -->';
					
					var jqTarget = '#'+ targetID;
					$(jqTarget).html(topBarMenuHTML);
					
					//cleans up a conflicting piece of the DFM nav
					$('#dfmHeaderUpperLinks').remove();
					
					topBarMenuDeferred.resolve();
				}
		}, 100); //Check to see if the JS Array is loaded every 100 milliseconds.
		
		//Check to make sure that the top Bar menu and the weather location data have loaded.
		$.when(topBarMenuDeferred, accuLocationPromise).done(function() {
			//remove zero-height from top Nav drawers
			dfmNav_hideTopBar = function() {
				$('#topbar, .weather-bar, .traffic-bar, .markets-bar').removeClass('zero-height');
				$('#topbar, .weather-bar, .traffic-bar, .markets-bar').hide();
			};
			
			//Showing the #topbar because Traffic won't show while hidden and newCred is hiding it for some reason.
			$('#topbar, .weather-bar, .traffic-bar, .markets-bar').show();
			//Set onload attribute on the iframe to use dfmNav_hideTopBar() as a callback
			$("#topbar-wrapper iframe").attr("onload",'dfmNav_hideTopBar()');
			$("#topbar-wrapper iframe").attr("src",'http://www.sigalert.com/Portlet/Map.asp?partner='+SigAlertPartner+'&lat='+latitude+'&lon='+longitude+'&z=2&th=blue&urqs=1&url='+trafficURL);
			
					//Code to make the buttons clickable
					$('.weather-toggle').click(function(e){ e.preventDefault(); activateTopBar($(this), $('.weather-bar')); 
						$('.markets-toggle, .traffic-toggle').removeClass('active'); });
					$('.traffic-toggle').click(function(e){ 
						e.preventDefault(); activateTopBar($(this), $('.traffic-bar'));
						$('.weather-toggle, .markets-toggle').removeClass('active');
					});
					function activateTopBar($btn, $target) {
						if($('#topbar').is(':visible')) {
							if($btn.hasClass('active')) { $('#topbar').slideUp('fast', function(){ $('.weather-bar, .traffic-bar, .markets-bar').hide();});}
							else {
								$('#topbar').slideUp('fast', function(){
									$('.weather-bar, .traffic-bar, .markets-bar').hide();
									$target.show();
									$('#topbar').slideDown('fast');
								});
							}
						} else {
							$('.weather-bar, .traffic-bar, .markets-bar').hide();
							$target.addClass('visible').show();
							$('#topbar').slideDown('fast');
						}
						$btn.toggleClass('active');
					}
			});

		
    };
	
	
	this.loadWeather = function(target, zipcode){
		
		//Check to see if site is in the config
		var weatherStation = self.dfmNav.pData.loc.weatherStation;
		var cms = self.dfmNav.pData.CMS;
		
		var weatherURL = self.dfmNav.pData.baseURL + self.dfmNav.pData.loc.weatherLink;
		
		if(cms=='SAXO'){
			this.loadAccuweatherDrawer(target, zipcode, weatherURL);
		}
		else if(typeof $.Deferred() == 'object'){
			if(weatherStation == 'accuweather'){
				this.loadAccuweatherShort(target, zipcode, weatherURL);
			}
			else{
				if(typeof loadWeatherBoxHorizontal == 'function'){
					//load Custom Weather
					self.loadWeatherBoxHorizontal(target, zipcode, self.dfmNav.pData.loc.weatherLinkDomain, self.dfmNav.pData.loc.weatherLink);
				}
			}
		}
	};
};
