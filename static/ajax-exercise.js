"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
	var randomFortune = evt;
	$('#fortune-text').html(randomFortune);
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', replaceFortune);

function replaceFortune(){
	$.get('/fortune', showFortune);
}


// PART 2: SHOW WEATHER

function showWeather(evt) {
    $('#weather-info.json').html(result['forecast']);
}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    $.get(url, successHelper);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


