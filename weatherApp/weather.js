/* 
	Code By Kevin 14/5 -16

*/

var temp  = "";
var city = "";
var country = "";
var weatherAPI = "";

$(document).ready(function() {
	getLocation();
	getWeatherByLocation();

	//Switching location API's now trying to use IPLOCATION
	function getLocation() {
	   	 $.getJSON('http://ipinfo.io', function(data){
	 		 console.log(data);
	 		 city = data.city+","+data.country;
	 		 country = data.country;
	 		 weatherAPI += "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4d89068a0a59e956b2aab4c74b849776";
		});
	}

	function getWeatherByLocation() {
			$.getJSON(weatherAPI, function(wd){
				temp = wd.main.temp;
			});
	}



	/*
	//Check if browser supports W3C Geolocation API
	if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
	} 
	*/
});