/* 
	Code By Kevin 14/5 -16

*/

var lat = "";
var long = "";
var temp  = "";
var city = "";
var country = "";
//Get latitude and longitude;
function successFunction(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
}

function errorFunction() {
	alert('WARNING! your browser appear to not be supporting geolocation');
} 

function getWeatherByLocation() {
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=4d89068a0a59e956b2aab4c74b849776',
		type: 'GET',
		data: {}, 
		dataType: 'JSON',
		success: function(data) {
			temp = data.main.temp;
			city = data.name;
			country = sys.country;
		},
		error: function(err) {
			alert(err);
		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader("openweathermap", "4d89068a0a59e956b2aab4c74b849776");
		}
	});
}


$(document).ready(function() {
	//Check if browser supports W3C Geolocation API
	if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
	} 
});