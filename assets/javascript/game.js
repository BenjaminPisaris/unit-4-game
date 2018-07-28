//Define a variable for your target score
var RandomTarget = Math.floor(Math.random() * 5000);

//generate values for the crystals
var crystal1 = Math.floor(Math.random() * 1000);
var crystal2 = Math.floor(Math.random() * 1000);
var crystal3 = Math.floor(Math.random() * 1000);
var crystal4 = Math.floor(Math.random() * 1000);

//define a variable for your score
var score = 0;

//define a variable to record wins
var wins = 0;
var losses = 0;

//set the game to not run
var isGameRunning = false;

//INITIALIZE
function init() {
    isGameRunning = true;
    //Define a variable for your target score
    var RandomTarget = Math.floor(Math.random * 500);
    //generate values for the crystals
    var crystal1 = Math.floor(Math.random() * 500);
    var crystal2 = Math.floor(Math.random() * 300);
    var crystal3 = Math.floor(Math.random() * 300);
    var crystal4 = Math.floor(Math.random() * 300);
    //define a variable for your score
    var score = 0;

}

//Listening
//had to change it to double click to init
document.ondblclick = function () {
    if (isGameRunning === false) {
        init();
    }


}
//these dont work on their own
$("#crystal1").click(function () {
    
    console.log(crystal1);
    var newScore = crystal1 + score;
    score = newScore;
    console.log(score);
    winHandler();
    newScore = 0;
    
});
$("#crystal2").click(function () {
    if (isGameRunning == true) {
    console.log(crystal2);
    var newScore = crystal2 + score;
    score = newScore;
    console.log(score);
    winHandler();
    newScore = 0;
    }
});
$("#crystal3").click(function () {
    console.log(crystal3);
    var newScore = crystal3 + score;
    score = newScore;
    console.log(score);
    winHandler();
    newScore = 0;
});
$("#crystal4").click(function () {
    console.log(crystal4);
    var newScore = crystal4 + score;
    score = newScore;
    console.log(score);
    winHandler();
    newScore = 0;
});

    //have a function to add the crystal value to the score
    //inside the function, call the winHandler





    //end the game if the score hits the randomtarget or passes it
    function winHandler() {
        if (score === RandomTarget) {
            wins++;
            alert("Congrats! You won!");
            isGameRunning = false;
        }
        else if (score > RandomTarget) {
            losses++;
            alert("Sorry, you lost :(")
            isGameRunning = false;
        }
    };