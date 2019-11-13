// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
function rps(inputs) {
    let choice = $("#input").val();
    $("#result").append(choice);
    let a = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random);
    let computer = a[index];


    if (computer == inputs) {
        return "It's a tie"
    }

    if (computer == "rock") {
        if (inputs == "paper") {   
            return "You win"
        }
    }
    if (computer == "rock") {
        if (inputs == "scissors") {
            return "You lose"
        }
    }
    if (computer == "paper") {
        if (inputs == "rock") {
            return "You lose"
        }
    }
    if (computer == "paper") {
        if (inputs == "scissors"){
            return "You win"
        }
    }
    if (computer == "rock") {
        if (inputs == "paper") {
            return "You win"
        }
    }
    if (computer == "rock") {
        if (inputs == "scissors") {
            return "You lose"
        }
    }
    


$("#result").html(rps(input));
}
