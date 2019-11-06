// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function()){
    let choice = $("#input").val();
    $("#result").append(choice);
    let a = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random);
    let compr = a[index];


}
