$(document).ready(function() {    

    var title = $("<h1>");
    title.text("Estou contando os segundos pra te ver...");
    var timer = $("<div>");
    timer.addClass("clock");
    $("#main").html(title).append(timer);

    // Grab the current date
    var currentDate = new Date().getTime();
    // Set some date in the future. In this case, it's always Jan 1
    var futureDate = new Date("Jul 23, 2021 08:30:00").getTime();
    // Calculate the difference in seconds between the future and current date
    var diff = futureDate / 1000 - currentDate / 1000;
    var clock = new FlipClock($('.clock'),diff, {
        clockFace: 'DailyCounter',
        countdown: true,
        callbacks: {
            stop: function() {
                // $('h1').html('The clock has stopped!');
                au.pause();
                var happy = new Audio("bensound-happyrock.mp3");
                happy.loop = true;
                happy.play();
                title.text("It's My 8th Birthday! YAY!").css({"margin-top" : "0", "padding-left" : "35%"});
                $("#main").html(title).css({"background-image" : "url('./happy_birthday.gif')", "background-position" : "bottom"});
            }
        }
    }); 

});
