//hero object constructor
function Hero(heroName, heroAbility1, heroAbility2, heroUlt) {
    this.name = heroName;
    this.ability1 = heroAbility1;
    this.ability2 = heroAbility2;
    this.ult = heroUlt;
};
// heroes
var genji = new Hero('genji', 'swift strike', 'deflect', 'dragonblade');
var mccree = new Hero('mccree', 'combat roll', 'flashbang', 'deadeye');
var pharah = new Hero('pharah', 'jump jet', 'concussive blast', 'barrage');
var reaper = new Hero('reaper', 'wraith form', 'shadow step', 'death blossom');
var soldier = new Hero('soldier: 76', 'sprint', 'biotic field', 'tactical visor');
var sombra = new Hero('sombra', 'thermoptic camo', 'translocator', 'emp');
var tracer = new Hero('tracer', 'blink', 'recall', 'pulse bomb');
var bastion = new Hero('bastion', 'reconfigure', 'self repair', 'configuration: tank');
var hanzo = new Hero('hanzo', 'sonic arrow', 'scatter arrow', 'dragonstrike');
var junkrat = new Hero('junkrat', 'concussion mine', 'steel trap', 'rip tire');
var mei = new Hero('mei', 'cryo freeze', 'ice wall', 'blizzard');
var torbjorn = new Hero('torbjorn', 'build turret', 'armor pack', 'molten core');
var widowmaker = new Hero('widowmaker', 'grappling hook', 'venom mine', 'infra sight');
var orisa = new Hero('orisa', 'fortify', 'protective barrier', 'supercharger');
var reinhardt = new Hero('reinhardt', 'charge', 'fire strike', 'earthshatter');
var roadhog = new Hero('roadhog', 'take a breather', 'chain hook', 'whole hog');
var winston = new Hero('winston', 'jump pack', 'barrier projector', 'primal rage');
var zarya = new Hero('zarya', 'partical barrier', 'projected barrier', 'graviton surge');
var ana = new Hero('ana', 'sleep dart', 'biotic grenade', 'nano boost');
var lucio = new Hero('lucio', 'crossfade', 'amp it up', 'sound barrier');
var mercy = new Hero('mercy', 'guardian angel', 'angelic decentr', 'ressurect');
var symmetra = new Hero('symmetra', 'sentry turret', 'photon barrier', 'teleporter');
var zenyatta = new Hero('zenyatta', 'orb of harmony', 'orb of discord', 'transcendence');
var heroName = [genji, mccree, pharah, reaper, soldier, sombra, tracer, bastion, hanzo, junkrat, mei, torbjorn, widowmaker, orisa, reinhardt, roadhog, winston, zarya, ana, lucio, mercy, symmetra, zenyatta];
// other variables
var keyPress;
var guesses = [];
var correctWord = [];
var incorrectGuess = [];
var randomWord = [];
var userGuess = document.getElementById("userGuess");


//assign keyPress variable
document.onkeypress = function(event) {
    var keyPress = event.key.toLowerCase();
    console.log(keyPress);
    gameLogic(keyPress);
};
// determines if the keypress is correct or incorrect
function gameLogic(keyPress) {
    console.log(correctWord);
    for (i = 0; i > randomWord.length; i++) {
        if (randomWord[i] == keyPress) {
            correctWord.push(randomWord[i]);
            console.log(correctWord);
        } else {
            incorrectGuess.push(keyPress);
            console.log(incorrectGuess);
        }
    }
};
//creates boxes
function blankBox(){
    console.log('blankBox is being called');
    console.log(randomWord + ' is the random word')
    var main = document.getElementById('random-word');
  main.innerHTML = "";
    for(j=0; j < randomWord.length; j++){
        console.log('blankBox is looping ' + j + 'x');
        blank = document.createElement('span');
        blank.innerHTML = '_';
        blank.className=randomWord[j];
        main.appendChild(blank);
    }
};

//page loads with random word(ability)
function randomAbilityLoad() {
    var randomHeroCalc = Math.floor(Math.random() * heroName.length);
    var randomAbilityCalc = Math.floor(Math.random() * 2) + 1;
    var randomHero = heroName[randomHeroCalc];
    if (randomAbilityCalc === 1) {
        randomWord = (randomHero.ability1.split(''));
    } else {
        randomWord = randomHero.ability2.split('');
    };
};
randomAbilityLoad();
blankBox();

//generates a random word(ability) on click
document.getElementById('start').onclick = function randomAbility() {
    var randomHeroCalc = Math.floor(Math.random() * heroName.length);
    var randomAbilityCalc = Math.floor(Math.random() * 2) + 1;
    var randomHero = heroName[randomHeroCalc];
    if (randomAbilityCalc === 1) {
        randomWord = (randomHero.ability1.split(''));
    } else {
        randomWord = randomHero.ability2.split('');
    };
   blankBox();
};
