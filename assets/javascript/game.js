var wins = 0
var losses = 0
var userScore = 0
var targetNumber = 0 
var firstCrystal = 0
var secondCrystal = 0 
var thirdCrystal = 0
var fourthCrystal = 0 

$(document).ready(function(){
    
    function reset(){
        targetNumber=Math.floor((Math.random() * 100) + 19);
        userScore= 0;
        firstCrystal =  Math.floor((Math.random() * 12) + 1);
        secondCrystal =  Math.floor((Math.random() * 12) + 1);
        thirdCrystal =  Math.floor((Math.random() * 12) + 1);
        fourthCrystal =  Math.floor((Math.random() * 12) + 1);

        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#targetNumber").text(targetNumber);
        $("#userScore").text(userScore);

        console.log("firstCrystal: " + firstCrystal);
        console.log("secondCrystal: " + secondCrystal);
        console.log("thirdCrystal: " + thirdCrystal);
        console.log("fourthCrystal: " + fourthCrystal);

    }

    reset();

    function scoreCheck(userScore, targetNumber){
        if (userScore == targetNumber){
            wins++;
            alert("atta person, ya saved yer farmers!!!")
            reset();
        }
        else if (userScore > targetNumber){
            losses++;
            alert("ya blew it Larry, all the farmers are now dead..! I loved her man..")
            reset();
        }
    }

    $("#firstCrystal").click (function(){

        userScore = (firstCrystal + userScore);
        $("#userScore").text(userScore);
        scoreCheck(userScore, targetNumber);
    });

    $("#secondCrystal").click (function(){

        userScore = (secondCrystal + userScore);
        $("#userScore").text(userScore);
        scoreCheck(userScore, targetNumber);
    });

    $("#thirdCrystal").click (function(){

        userScore = (thirdCrystal + userScore);
        $("#userScore").text(userScore);
        scoreCheck(userScore, targetNumber);
    });

    $("#fourthCrystal").click (function(){

        userScore = (fourthCrystal + userScore);
        $("#userScore").text(userScore);
        scoreCheck(userScore, targetNumber);
    });

});
