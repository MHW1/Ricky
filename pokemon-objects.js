/

var proteinArray = ["","","","","",""];
function pokeTeam (attack, defense, hp, legend, name, type){
  this.attack = atk;
  this.defense = def;
  this.hp = hp;
  this.legend = legend;
  this.name = name;
  this.type = type;
}
this.pokemonAttacked = function(){
//  Math.floor(Math.random())
  this.hp = this.hp - 10;
  console.log(printRoster)
}


var magikarp = new pokeTeam (100,988, 328, true, "Magikarp", "fish");
var arceus = new pokeTeam(384092, 4930, 3494, false, "Arceus", "thing");
var mew = new pokeTeam(78, 37, 32, true, "Mew", "cat");

console.log(pokeTeam)

function printRoster(){
  for(var i=0, i=hp,i++) name + "took" + i + "damage"
}

*/
//////////////////////////////////////////////////////////////

var teamStats = [
    {
            Name: "Arceus",
            Type: "Normal",
            Hp: 444,
            Attack: 372,
            Defense: 372,
            Legendary: true
        },
        {
            Name: "Mewtwo",
            Type: "Psychic",
            Hp: 416,
            Attack: 350,
            Defense: 306,
            Legendary: true
        },
        {
            Name: "Mew",
            Type: "Psychic",
            Hp: 404,
            Attack: 328,
            Defense: 328,
            Legendary: true
        },
        {
            Name: "Rayquaza",
            Type: "Dragon",
            Hp: 414,
            Attack: 438,
            Defense: 306,
            Legendary: true
        },
        {
            Name: "Lugia",
            Type: "Psychic",
            Hp:416,
            Attack: 306,
            Defense: 394,
            Legendary: true
        },
        {
            Name: "Giratina",
            Type: "Ghost",
            Hp: 504,
            Attack: 328,
            Defense: 372,
            Legendary: true
        }
];
function pokemonAttacked() {
    for (i=0; i<6; i++) {
        teamStats[i].Hp = teamStats[i].Hp - 10;
        var strung = JSON.stringify(teamStats[i]).replace(/\"/g, "");
        console.log(strung.substring(1,strung.length-1));
    //    Object.keys(person)[0] = Object.keys(person)[0] - 10;
    }
}

pokemonAttacked();
