// other variables
var keyPress;
var displayGuess = [];
var correctWord = [];
var incorrectGuess = [];
var randomWord = [];
var lives = 7;
var winCounter = 0;
var lastArray = [];
var userGuess = document.getElementById('userGuess');
// heroes
var genji = new Hero('genji', 'swift_strike', 'deflect', 'dragonblade');
var mccree = new Hero('mccree', 'combat_roll', 'flashbang', 'deadeye');
var pharah = new Hero('pharah', 'jump_jet', 'concussive_blast', 'barrage');
var reaper = new Hero('reaper', 'wraith_form', 'shadow_step', 'death_blossom');
var soldier = new Hero('soldier: 76', 'sprint', 'biotic_field', 'tactical_visor');
var sombra = new Hero('sombra', 'thermoptic_camo', 'translocator', 'emp');
var tracer = new Hero('tracer', 'blink', 'recall', 'pulse_bomb');
var bastion = new Hero('bastion', 'reconfigure', 'self_repair', 'configuration_tank');
var hanzo = new Hero('hanzo', 'sonic_arrow', 'scatter_arrow', 'dragonstrike');
var junkrat = new Hero('junkrat', 'concussion_mine', 'steel_trap', 'rip_tire');
var mei = new Hero('mei', 'cryo_freeze', 'ice_wall', 'blizzard');
var torbjorn = new Hero('torbjorn', 'build_turret', 'armor_pack', 'molten_core');
var widowmaker = new Hero('widowmaker', 'grappling hook', 'venom mine', 'infra sight');
var orisa = new Hero('orisa', 'fortify', 'protective_barrier', 'supercharger');
var reinhardt = new Hero('reinhardt', 'charge', 'fire_strike', 'earthshatter');
var roadhog = new Hero('roadhog', 'take_a_breather', 'chain_hook', 'whole_hog');
var winston = new Hero('winston', 'jump pack', 'barrier projector', 'primal_rage');
var zarya = new Hero('zarya', 'partical_barrier', 'projected_barrier', 'graviton_surge');
var ana = new Hero('ana', 'sleep_dart', 'biotic_grenade', 'nano_boost');
var lucio = new Hero('lucio', 'crossfade', 'amp_it_up', 'sound_barrier');
var mercy = new Hero('mercy', 'guardian_angel', 'angelic_decentr', 'ressurect');
var symmetra = new Hero('symmetra', 'sentry_turret', 'photon_barrier', 'teleporter');
var zenyatta = new Hero('zenyatta', 'orb_of_harmony', 'orb_of_discord', 'transcendence');
var heroName = [genji, mccree, pharah, reaper, soldier, sombra, tracer, bastion, hanzo, junkrat, mei, torbjorn, widowmaker, orisa, reinhardt, roadhog, winston, zarya, ana, lucio, mercy, symmetra, zenyatta];
//calls random ability to start game with an random word
randomAbilityLoad();
//hero object constructor
function Hero(heroName, heroAbility1, heroAbility2, heroUlt) {
    this.name = heroName;
    this.ability1 = heroAbility1;
    this.ability2 = heroAbility2;
    this.ult = heroUlt;
}
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
    blankBox();
};
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

//creates boxes
function blankBox() {
    var main = document.getElementById('random-word');
    main.innerHTML = ""; //clears blank boxes
    for (j = 0; j < randomWord.length; j++) {
        if (randomWord[j].match(/[a-z]/)) {
            blank = document.createElement('span');
            blank.innerHTML = '*';
            blank.className = 'class_' + randomWord[j];
            main.appendChild(blank);
        } else {
            blank = document.createElement('span');
            blank.innerHTML = '&nbsp;';
            blank.className = 'class_' + randomWord[j];
            main.appendChild(blank);
        }
    }
};
//assign keyPress variable
document.onkeypress = function(event) {
        var keyPress = event.key.toLowerCase();
        gameLogic(keyPress);
    }
// incorrectGuess filter used to determine if keypress is incorrect
function filter(keyPress) {
  for (g = 0; g < incorrectGuess.length; g++) {
    if(correctWord.indexOf(incorrectGuess[g]) == -1 && lastArray.indexOf(incorrectGuess[g]) == -1) {
      lastArray.push(incorrectGuess[g]);
      lives --;
    }
  }  
}
// determines if the keypress is correct or incorrect
function gameLogic(keyPress) {
  for (i = 0; i < randomWord.length; i++) {
      if (randomWord[i] == keyPress && keyPress.match(/[a-z]/) && correctWord.indexOf(keyPress) == -1) {
          thatbox = document.getElementsByClassName('class_' + keyPress);
          for (p = 0; p < thatbox.length; p++) {
              thatbox[p].innerHTML = keyPress;
          }
          correctWord.push(keyPress);
          winCounter ++;
      } else if (keyPress.match(/[a-z]/) && incorrectGuess.indexOf(keyPress) == -1) {
          incorrectGuess.push(keyPress);
      }
  }
  filter();
  winCondition();
 userGuess.textContent = lastArray;
 console.log('counter: ' + winCounter);
 console.log('lives: ' + lives);
 //add textContent to show lives.
}
 console.log(randomWord);
 function winCondition(){
    if(lives < 1) {
     console.log('YOU LOSE');
    };
    if(winCounter == randomWord.length){
        console.log('YOU WIN');
    };
}

