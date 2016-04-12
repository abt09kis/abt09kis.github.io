/*
	Coded by Kevin, april 11th 2016
*/
function inFrame() {
	try {
		return window.self !== window.top;
	} catch (e) {
		return true;
	}

}

var colors = ["#B03060", "#C1CC27", "#F68900", "#00F6E3", "#66ff33", "#009999", "#0099cc", "#339966", "#cc0052", "#ff5050"];

var currentQuote = '';
var currentAuthor = '';

function openURL(url) {
	window.open(url, 'Share', 'width=550, height = 400, toolbar=0, scrollbar=1, location=0, statusbar=0, menubar=0, resizeable=0');
}

function getQuote() {
	$.ajax({
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
		type: 'GET',
		data: {},
		dataType: 'json',
		success: function(data) {
			currentAuthor = data.author;
			currentQuote = data.quote;
			if (inFrame()) {
				$('#twitter-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
			}
			$(".quote-font").animate({
				opacity: 1
			}, 500,
			function () {
				$(this).animate({
					opacity: 1
				}, 500);
				$("#text").text(data.quote);
			});

			$(".quoteAuthor").animate({
				opacity: 1 
			}, 500, function() {
				$(this).animate({
					opacity: 1
				}, 500);
				$("#author").text(data.author);
			});			

			var color = Math.floor(Math.random()*colors.length);
			console.log(color);
			$("html body").animate({
				backgroundColor: colors[color]
			},800);
			$(".button").animate({
				backgroundColor: colors[color]
			}, 800);
		},
		error: function(err) {
			alert(err);
		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader("X-Mashape-Authorization", "EcL3AYO3GXmshk63GjyAH3DMuMwWp1QYKYojsnjqCjG6wJkkTU");
		}
	});

}
$(document).ready(function() {
	getQuote();
	$("#new-quote").on('click', getQuote);
	$("#twitter-quote").on('click', function() {
		if (!inFrame()) {
			openURL('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
		}
	});
});