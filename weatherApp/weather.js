/* 
	Code By Kevin 2016

*/

var temp  = '';
var city = '';
var country = '';
var weatherAPI = '';
var fullWeather = '';

//Using IPLOCATION API to get access to location data in order to retrieve weather info.
	function getLocationWeather() {
		var p1 = new Promise(
			function(resolve,reject) {
		   	$.getJSON('http://ipinfo.io', function(data){
			 		console.log(data);
			 		city = data.city+','+data.country;
			 		country = data.country;
			 		// In case the city data is empty, only country is passed on to the API call, resulting in capital!
			 		weatherAPI += 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=4d89068a0a59e956b2aab4c74b849776';
			 		// Making the API call here, because otherwise there is no access to the newly changed weatherAPI var.
			 		//resolve passes val to the function if the promise is resolved.
			 		resolve(weatherAPI);
			 		//getWeatherByLocation(weatherAPI);
	 			});
			});
		p1.then(
				function(val) {
					getWeatherByLocation(val);
				})
		.catch(
				function(reason) {
					console.log('Handle the rejected promies (' +reason +' ) here');
				}
			)
	}

	function getWeatherByLocation(url) {
		var prom = new Promise(
			function(resolve, reject) {
				$.getJSON(url, function(data){
					console.log(data);
					//temp = wd.main.temp;
					temp = data
					resolve(temp);
				});
			});
		prom.then(
			function(val) {
				//Tänk på att vädret returneras i Kelvin.
				console.log(val.main.temp);
				console.log(val.weather[0].description);
				var tmp = val.weather[0].icon;
				var dayOrNight = tmp.substring(tmp.length - 1);
				console.log(dayOrNight);
				generateGraphics(val.weather[0].description, dayOrNight);
			}
		).catch(
			function(reason) {
				consle.log(reason);
			}
		)		
	}
	
	//Note that not all the description
	function generateGraphics(description, timeOfDay) {
		var skycons = new Skycons({"color": "white"});
		switch(description) {
			case "clear sky":
				if(timeOfDay === "n"){
					skycons.add("icon1", Skycons.CLEAR_DAY);
				}else{
					skycons.add("icon1", Skycons.CLEAR_NIGHT);
				}
				skycons.play();
				break;
			case "few clouds":
				if(timeOfDay === "n"){
						skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
					}else{
						skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
					}
				skycons.play();
				break;
			case "scattered cluds":
				if(timeOfDay === "n"){
						skycons.add("icon1", Skycons.CLOUDY);
				}else{
						skycons.add("icon1", Skycons.CLOUDY);
				}
				skycons.play();
				break;
			case "broken clouds":
				if(timeOfDay === "n"){
						skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
				}else{
						skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
				}
				skycons.play();
				break;
			case "shower rain":
				if(timeOfDay === "n"){
					skycons.add("icon1", Skycons.RAIN);
				}else{
					skycons.add("icon1", Skycons.RAIN);
				}
				skycons.play();
				break;
			case "rain":
				if(timeOfDay === "n"){
					skycons.add("icon1", Skycons.RAIN);
				}else{
					skycons.add("icon1", Skycons.RAIN);
				}
				skycons.play();
				break;
			case "thunderstorm":
				if(timeOfDay === "n"){
					skycons.add("icon1", Skycons.RAIN);
				}else{
					skycons.add("icon1", Skycons.RAIN);
				}
				skycons.play();
				break;
			case "snow":
				if(timeOfDay === "n"){
					skycons.add("icon1", Skycons.SNOW);
				}else{
					skycons.add("icon1", Skycons.SNOW);
				}
				skycons.play();
				break;
			case "light snow":
				if(timeOfDay === "n"){
					skycons.add("icon1", Skycons.SNOW);
				}else{
					skycons.add("icon1", Skycons.SNOW);
				}
				skycons.play();
				break;	
			case "mist":
				if(timeOfDay === "n"){
					skycons.add("icon1", Skycons.FOG);
				}else{
					skycons.add("icon1", Skycons.FOG);
				}
				skycons.play();
				break;
			default:
		}
	}
	// Konverterings formel: T(°F) = 20°C × 9/5 + 32 = 68 °F
	// The function now works!
	function metricToImperial(system, temp) {
		//var system = $("#konvert").val;
		//var temp = $("#temp").innerHtml;
		var system1 = system;
		var temp = temp;
		if( system1 === "Fahrenheit" ) {
			temp = (temp-32) / 1.8;
		}
		else {
			temp = (temp*1.8) + 32;
		}
		console.log(temp);
	}

$(document).ready(function() {
	getLocationWeather();
});