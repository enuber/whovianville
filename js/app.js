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


if (document.body.classList.contains('doctorPage')) {
    generateQuote();
    var getQuote = document.getElementById('quotes');
    getQuote.addEventListener('click', generateQuote);
}


neverEndingQuote = setInterval(function () {
    "use strict";
    generateQuote();
}, 60 * 400);



//Make tardis appear with animation in jumbotron

function tardisAppear() {
    "use strict"; $('.tardisAnimate').fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1200).fadeOut(1200).fadeIn(1500);
}

$(tardisAppear);
$('.tardisAnimate').on('click', tardisAppear);