var snashArray= ["Solid Snake", "Starfox", ];
var firstQuestion = [5, 10];
var secondQuestion = ["Solid Snake", "Sonic"];

for(var i=0; i < 2; i++){
    firstQuestion.push(prompt("How many times will you strike?"));
    secondQuestion.push(prompt("Who will you choose to fight?"));

}

console.log("You fought" + secondQuestion[2]
                        + "in the"
                        + mashArray[Math.floor (Math.random()*3)])
                        + "and hit"
                        + secondQuestion [Math.floor(Math.random()*1)]
                        + firstQuestion[2] + "times";
                        