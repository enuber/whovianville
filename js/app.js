/*jslint browser: true*/
/*global $, jQuery, alert*/

var prevNum = -1,
    num = ranNum(doctorQuotes.length - 1),
    counter,
    neverEndingQuote,
    createQuote = "";

function ranNum(upper) {
    "use strict";
    return (Math.floor(Math.random() * upper) + 1);
}

function generateQuote() {
    "use strict";
    
    while (prevNum === num) {
        num = ranNum(doctorQuotes.length - 1);
    }
    prevNum = num;
    createQuote = '<blockquote class="blockquote blockquote-reverse p-a-2">';
    createQuote += '<p class="m-b-0">' + doctorQuotes[num].quote + '</p>';
    createQuote += '<img class="pull-xs-left p-t-1 m-t-1" id="refresh" src="images/refresh_icon.png" alt="refresh icon">';
    createQuote += '<footer class="blockquote-footer m-t-1">' + doctorQuotes[num].speaker + '</footer>';
    createQuote += '</blockquote>';
    document.getElementById('quotes').innerHTML = createQuote;
}


neverEndingQuote = setInterval(function () {
    "use strict";
    if (document.body.classList.contains('doctorPage')) {
        generateQuote();
    }
}, 60 * 300);

if (document.body.classList.contains('doctorPage')) {
    generateQuote();
    var getQuote = document.getElementById('quotes');
    clearInterval(neverEndingQuote);
    getQuote.addEventListener('click', generateQuote);
    setInterval(function() {generateQuote()}, 60 * 300)
}


//Make tardis appear with animation in jumbotron

function tardisAppear() {
    "use strict";
    $('.tardisAnimate').hide().fadeIn(1700).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1200).fadeOut(1200).fadeIn(1500);
}

$('.tardisAnimate').on('click', tardisAppear);


function addTwinkles() {
    "use strict";
    $(".addTwinkle").addClass("twinkle");
    // $(".addClouds").addClass("clouds");

}


$(function () {
    "use strict";
    tardisAppear();
    $(".addClouds").addClass("clouds");
    setTimeout(function () {
        addTwinkles();
    }, 800);
});