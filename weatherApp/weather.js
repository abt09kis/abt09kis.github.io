/* 
	Code By Kevin 14/5 -16

*/
var geo = navigator.geolocation
var long = "";
var lat = "";

function getPosition() {
	if(geo) {
		geo.getCurrentPosition(function(pos){
			long = pos.coords.longitude;
			lat = pos.coords.latitude;
		})
	}
}

$(document).ready(function() {
	getPosition();
})