/*

var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('How many more times? ');

*/
 
var promptSync = require('prompt-sync')();

var wallet = 1000;
var items = ["Sword", "Food"];
var prices = [50,100];
var inventory = [];



while(money>99){
  console.log("You have $"+ wallet +" left. Sword = $500, Food = $100");
  var answer = promptSync("Which item do you want to buy? ");
  if(answer == "Sword"){
    wallet = wallet - 500;
    items.push("Sword");
    console.log("You brought a Sword!");
  }else if(answer == "Food"){
    wallet = wallet - 100;
    items.push("Food");
    console.log("You brought Food!");
  }else{
    console.log("WE DON'T HAVE THAT BOI!!!! ");
  }
}



/*
var wallet = 1200;
var store = ['sword', "food"];
var proces = [500, 100];
var inventory = [];

while (wallet > 0){
    var purchaseChoice = prompt("What're you buyin'");
    if (purchaseChoice== store[0] && wallet >= prices[0]){
        wallet = wallet - prices[0];
        inventory.push("sword");
    
    }
    else if(purchaseChoice == store[1]&& wallet >= prices[1]){
        wallet = wallet - prices[1];
        inventory.push("food");
    }
    else if (purchaseChoice == "quit"){
        wallet = 0;
    }
}

*/




