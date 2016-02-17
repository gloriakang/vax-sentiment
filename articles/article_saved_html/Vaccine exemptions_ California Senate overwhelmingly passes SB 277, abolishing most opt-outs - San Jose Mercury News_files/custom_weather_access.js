<!-- Hide from older browsers
function loadXMLDoc(url, target){
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest();
		var processor = new Processor(target, req);
		req.onreadystatechange = processor.process;
		req.open("GET", url, true);
		req.send(null);
	// branch for IE/Windows ActiveX version
	} else if (window.ActiveXObject) {
		req = new ActiveXObject("Microsoft.XMLHTTP");
		if (req) {
			var processor = new Processor(target, req);
			req.onreadystatechange = processor.process;
			req.open("GET", url, true);
			req.send(null);
		}
	}
}

function Processor(target, req){
	this.process = function(){
		// only if req shows "complete"
		if (req.readyState == 4) {
			// only if "OK"
			if (req.status == 200) {
				if(document.getElementById(target))
					document.getElementById(target).innerHTML = req.responseText;
			}
		}
	};
}

function loadWeatherBox(target, zipcode, siteUrl, weatherSection){
	if(target == null || zipcode == null) return;
	var url = "/portlet/weather/html/process_mode.jsp?displayMode=weather_box&zipcode=" + zipcode;
	if(siteUrl != null){
		url += '&siteUrl=' + encodeURI(siteUrl);
		if(weatherSection != null) url += '&weatherSection=' + encodeURI(weatherSection);
	}
	loadXMLDoc(url, target);
}

function loadZipOnly(urlBase, zipcode, target){
	if(target == null || zipcode == null) return;
	loadXMLDoc(urlBase + zipcode, target);
}

function loadFiveDayForecast(target, zipcode){
	loadZipOnly("/portlet/weather/html/process_mode.jsp?displayMode=5day_forecast&zipcode=", zipcode, target);
}

function loadCurrentConditions(target, zipcode){
	loadZipOnly("/portlet/weather/html/process_mode.jsp?displayMode=current_conditions&zipcode=", zipcode, target);
}

function loadWeatherBoxHorizontal(target, zipcode, siteUrl, weatherSection){
	loadWeatherWithSectionLink(target, zipcode, siteUrl, weatherSection, "weather_box_horizontal", null);
}

function loadWeatherBoxVertical(target, zipcode, siteUrl, weatherSection, offset){
	loadWeatherWithSectionLink(target, zipcode, siteUrl, weatherSection, "weather_box_vertical", offset);
}

function loadWeatherWithSectionLink(target, zipcode, siteUrl, weatherSection, displayMode, offset){
	if(target == null || zipcode == null) return;
	var url = "/portlet/weather/html/process_mode.jsp?displayMode=" + displayMode + "&zipcode=" + zipcode;
	if(siteUrl != null){
		url += '&siteUrl=' + encodeURI(siteUrl);
		if(weatherSection != null) url += '&weatherSection=' + encodeURI(weatherSection);
	}
	if(offset != null){
		url += '&offset=' +offset;
	}
	loadXMLDoc(url, target);
}

// End Hide-->	