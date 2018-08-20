window.addEventListener('load', init)
// Globals

// Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

// To change level
let currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;
let hScore = 0;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const difficulty = document.getElementsByTagName('select');
const highscore = document.querySelector('#highscore');
const dhayang = document.querySelector('#dhayang');

const words = [
    'family',
    'fatima',
    'dhayang',
    'kanadjaan',
    'liuk',
    'jhivran',
    'tulawie',
    'kalasahan',
    'iloveyou',
    'crush',
    'heart',
    'forever',
    'lissome',
    'dearest',
    'mahal',
    'love',
    'cute',
    'beautiful',
    'handsome',
    'wedding',
    'wonderdhayang',
    'angel',
    'magic',
    'grace',
    'smile',
    'ryukku'
  ];

  // Initialize Game

  function init(){
      //Show number of seconds in UI
      seconds.innerHTML = currentLevel;
      // Load word from array
      showWord(words);
      //Start matchin on word input
      wordInput.addEventListener('input', startMatch)
      // Call countdown every second
      setInterval(countdown, 1000);
      //check geame status
      setInterval(checkStatus, 50)

    }

      // Start Match

      function startMatch(){
          if(matchwords()){
            isPlaying = true;
            time = currentLevel + 1;
            showWord(words);
            wordInput.value = '';
            score ++;
          }

          if(score === -1){
            scoreDisplay.innerHTML = 0;
          }else{
            scoreDisplay.innerHTML = score;
            if(score > hScore){
                hScore = score;
            }

            

          }
      }

      //Match currentWord to wordInput
      function matchwords(){
        if(wordInput.value === currentWord.innerHTML){
            message.innerHTML = 'Correct!';
            return true;
        }else{
            message.innerHTML = '';
            return false;
        }
      }
      // Pick & show random word
      function showWord(words){
        const randIndex = Math.floor(Math.random() * words.length);

        currentWord.innerHTML = words[randIndex];
      }

      //countdown timer
      function countdown(){
          // Make sure time is not run out
          if(time > 0){
            // Decrement
            time--;
          }else if( time === 0){
              // Game is over
              isPlaying = false
          }

          timeDisplay.innerHTML = time;
      }
  
      //check game status
      function checkStatus(){
          if(!isPlaying && time === 0){
              message.innerHTML = 'Game Over!';
              score = -1;
              highscore.innerHTML = hScore;
              dhayang.innerHTML = 'I LOVE YOU DHAYANG!';
              dhayang.className += "card-body bg-secondary text-white";
          }
      }

      function setDifficulty(){
        let dif = difficulty.level.value;

        if(dif === 'easy'){
            currentLevel = levels.easy;
        }else if(dif === 'medium'){
            currentLevel = levels.medium;
        }else if(dif === 'hard'){
            currentLevel = levels.hard;
        }

        seconds.innerHTML = currentLevel;

      }

     

