/* 
	Code By Kevin 14/5 -16

*/

var lat = "";
var long = "";
//Get latitude and longitude;
function successFunction(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
}

function errorFunction() {
	alert('WARNING! your browser appear to not be supporting geolocation');
} 

$(document).ready(function() {
	//Check if browser supports W3C Geolocation API
	if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
	} 
});