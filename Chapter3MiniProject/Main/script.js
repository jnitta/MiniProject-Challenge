var wins = 0;
var ties = 0;
var losses = 0;

//Array for computer's option
var options = ["R", "P", "S"];

var playGame = function() {

    //ask to user to chose.
    var userChoice = window.prompt("Enter R, P, or S.")

    //if user didn't pick anything, return
    if (!userChoice) {
        return;
    }

    //convert all the letters to uppercase
    userChoice = userChoice.toUpperCase();

    //Set the computer's random choice by index
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    //Notify the user Computer's choice
    window.alert("The computer chose " + computerChoice)

    //check if the game tied
    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!")
    }
    //check if game is won
    else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P") 
    ) {
        wins++;
        window.alert("You win!");
    } else {
        //check if you lost
        losses++;
        window.alert("You lost!");
    }
    //show stats
    window.alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " +ties);
    //Ask if the user want to play again
    var playAgain = window.confirm("Do you want to play again?");
    if (playAgain) {playGame()};
};

playGame();