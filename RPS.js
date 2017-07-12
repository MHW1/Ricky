var playerChoice = "r";

//computer's random choice
var choices = ['r', 'p','s'];
var compChoices = choices[Math.floor(Math.random()*3)];

//if(choices[Math.floor(Math.random()*3)])

if(compChoices == playerChoice){
    console.log("It's a tie!");
}

if(/*playerChoice == 'r' && */ compChoices =='p' ){
    console.log("Player wins");
}
if(/*playerChoice == 'p' && */ compChoices == 's'){
    console.log("Player loses");
}
 
 /*
 if(playerChoice == 's' && compChoices == 'r'){
    console.log("Player loses");
}
*/

