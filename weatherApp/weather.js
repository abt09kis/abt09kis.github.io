/* 
	Code By Kevin 14/5 -16

*/

var temp  = '';
var city = '';
var country = '';
var weatherAPI = '';

$(document).ready(function() {
	getLocationWeather();

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
			$.getJSON(url, function(wd){
				console.log(wd);
				temp = wd.main.temp;
			});
	}
});