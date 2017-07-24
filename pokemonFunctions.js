

function randLetter(){
    var text = "";
    var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(var i=0; i<1; i++);
    text += letter.charAt(Math.floor(Math.random() * letter.length));

    return text;
}
 console.log(randLetter());
 // Alphabet



 function randWord(){
     var textspace = "";
     var word = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

     for(var w=0; w < 5; w++);
     textspace += word.charAt(Math.floor(Math.random() * word.length));

     return textspace;
 }
console.log(randWord());


function randSent(){
    var 
}



/* 
.function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());
