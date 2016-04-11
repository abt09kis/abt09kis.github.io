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

// var colors = 

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
	console.log("bajs");
	getQuote();
	$("#new-quote").on('click', getQuote);
	$("#twitter-quote").on('click', function() {
		if (!inFrame()) {
			openURL('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
		}
	});
});