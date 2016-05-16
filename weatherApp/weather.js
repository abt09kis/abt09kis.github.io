/* 
	Code By Kevin 14/5 -16

*/

var lat = "";
var long = "";
var temp  = "";
var city = "";
var country = "";
//Get latitude and longitude;
/*
function successFunction(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
}

function errorFunction() {
	alert('WARNING! your browser appear to not be supporting geolocation');
} */
//Switching location API's now trying to use IPLOCATION
function getLocation() {
    $.get("http://ipinfo.io", function(location) {
      console.log(location);
      
      $('.location')
        .append(location.city + ", ")
        .append(location.region);

      var units = getUnits(location.country);
      getWeather(location.loc, units);

      //return weather;
    }, "jsonp");
}

var weatherAPI ="";
function getRequestURL() {
	weatherAPI += "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=4d89068a0a59e956b2aab4c74b849776";
}

function getWeatherByLocation() {
	/*
	if(lat !=="" && long !==""){
		
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=4d89068a0a59e956b2aab4c74b849776',
			type: 'GET',
			data: {}, 
			dataType: 'JSON',
			success: function(data) {
				temp = data.main.temp;
				city = data.name;
				country = data.sys.country;
			},
			error: function(err) {
				alert(err);
			},
			
			beforeSend: function(xhr) {
				xhr.setRequestHeader("openweathermap", "4d89068a0a59e956b2aab4c74b849776");
			}
		});
		}
		*/
		$.getJSON(weatherAPI, function(wd){
			temp = wd.main.temp;
			country = wd.sys.country;
			city = wd.name;
		});
		
}


$(document).ready(function() {
	/*
	//Check if browser supports W3C Geolocation API
	if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
	} 
	*/
	getRequestURL();
	getWeatherByLocation();
});