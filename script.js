// the starting links for social media
$(".link").mouseenter(function() {
    $(".link").css("color", "pink");
});

$(".git").mouseenter(function() {
    $(".git").css("color", "pink");
});

$(".insta").mouseenter(function() {
    $(".insta").css("color", "pink");
});

$(".face").mouseenter(function() {
    $(".face").css("color", "pink");
});

// the start for the game links
$(".goldMiner").mouseenter(function() {
    $(".goldMiner").css("color", "pink");
});

$(".poptropica").mouseenter(function() {
    $(".poptropica").css("color", "pink");
});

$(".chess").mouseenter(function() {
    $(".chess").css("color", "pink");
});

$(".sugarSugar").mouseenter(function() {
    $(".sugarSugar").css("color", "pink");
});

$(".appleShooter").mouseenter(function() {
    $(".appleShooter").css("color", "pink");
});

$(".littleAlchemy").mouseenter(function() {
    $(".littleAlchemy").css("color", "pink");
});

$(".lemonadeStand").mouseenter(function() {
    $(".lemonadeStand").css("color", "pink");
});

$(".bloxorz").mouseenter(function() {
    $(".bloxorz").css("color", "pink");
});

$(".2048").mouseenter(function() {
    $(".2048").css("color", "pink");
});

$(".checkers").mouseenter(function() {
    $(".checkers").css("color", "pink");
});

$(".hardGame").mouseenter(function() {
    $(".hardGame").css("color", "pink");
});

$(".parkingGame").mouseenter(function() {
    $(".parkingGame").css("color", "pink");
});

// after the mouse thingy is off any link it, will turn black bc of this one 
$("a").mouseleave(function() {
    $("a").css("color", "black");
});

// this is where the clicking to change pages starts also for the input if they dont wanna click

$(".knowMoreButton").click(function() {
    $(".mainPage").hide();
    $(".other").show();
    let option = $(".knowMoreInput").val().toLowerCase();
    choices (option);
    console.log(option);
});

function choices (option) {
    console.log(option);
    console.log("purr");
    if (option === "game" || option === "games") { 
    $(".mainPage").hide();
    $(".gameBox").show();
}}

// to hide the main page to click on games and go back to main
$(".game").click(function() {
    $(".mainPage").hide();
    $(".gameBox").show();
});
