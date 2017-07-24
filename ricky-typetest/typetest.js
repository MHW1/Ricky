/*
function setup(){
  createCanvas(800,500);
  background(255);
}

function draw(){
  fill(100);
}

function keyTyped(){
  if(key  === '')
}

*//

////////////////////
var sentence= " Everything the light touches is my kingdomy";
var alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var newSent= sentence.split(" ");
var newAlph= alphabet.split("");

var userInput = "";
var count = 0;
var class = 0;

console.log(newSent);
console.log(newAlph);



////////////////////
window.TypingGame = function(callbacks) {
   this.callbacks = callbacks;
   this.playableWords = [];
   this.emitWords();
 }
 TypingGame.prototype = {
   keyDown: function(char) {
     char = char.toLowerCase();
     var targetWord = this.playableWords[this.playableWords.length-1] || "";
     if(targetWord[0] === char) {
       targetWord = targetWord.slice(1, targetWord.length)
       if(targetWord === "")
         this.playableWords.pop();
       else
         this.playableWords[this.playableWords.length-1] = targetWord;
     }
     this.emitWords();
   },
   emitWords: function() {
     this.callbacks.listWords(this.playableWords);
   },
   addWord: function(word) {
     this.playableWords.unshift(word);
     this.emitWords();
   }
 }
 var wordList = document.getElementById('wordlist');
 var game = new TypingGame({
   listWords: function(words) {
     var items = "";
     words.forEach(function(word) {
       items = '<li class="word">'+word+'</li>' + items;
     });
     wordList.innerHTML = items;
   }
 });
 function keyDown(event) {
   var code    = event.charCode || event.keyCode || event.which;
   var keychar = String.fromCharCode(code);
   game.keyDown(keychar);
 }
 var toAdd = [
   "for", "each", "character", "the", "user", "presses", "if", "there", "is", "not",
   "an", "existing", "list", "of", "potential", "attacks", "set", "the", "list", "of",
   "potential", "attacks", "to", "the", "entire", "list", "scope", "by", "the", "existing",
   "list", "of", "potential", "attacks", "if", "the", "entry", "is", "unique", "apply",
   "it", "to", "the", "unique", "entry", "track", "this", "as", "the", "last",
   "attack", "otherwise", "if", "it", "is", "the", "next", "character", "in", "the",
   "users", "previous", "attack", "apply", "it", "to", "that", "attack", "track", "this",
 ];
 function addNext() {
   if(toAdd.length == 0) return; // done
   game.addWord(toAdd.shift());
   setTimeout(addNext, Math.round(Math.random()*1200));
 }
 addNext();

 */
