let wordsList = [];
let randomWord = null;
let spaces = null;
let attempts = 10;

function addWords() {
  let word = document.getElementById("userInput").value;
  wordsList.push(word);
  document.getElementById("userInput").value = "";
}

function mixWords(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function gameStart() {
  randomWord = mixWords(wordsList);
  spaces = '_';
  for (let letter = 0; letter < randomWord.length - 1; ++letter) {
    spaces += ' _';
  }
  output.innerHTML = spaces;
}

String.prototype.replaceAt = function(index, replacement) {
  if (index >= this.length) {
      return this.valueOf();
  }
  return this.substring(0, index) + replacement + this.substring(index + 1);
}

function checkLetter() {
  if (attempts != 0) {
    let chosenWord = randomWord.split('').join(' ');
    let flag = 0;
    let inputLetter = document.getElementById("letterInput").value;
    let pos = 0;
    for (let i = 0; i < chosenWord.length; ++i) {
      if (inputLetter === chosenWord[i]) {
        flag = 1;
        spaces = spaces.replaceAt(i, chosenWord[i]);
        output.innerHTML = spaces;
        pos += 2;
      }
    }
    if (flag === 0) {
      --attempts;
      attemptsMessage.innerHTML = 'GAME ATTEMPTS: ' + attempts;
    }
  } else {
    gameOverMessage.innerHTML = "GAME OVER";
    resetMessage.innerHTML = "IF YOU WANT" + "<br> TO TRY AGAIN" + "<br> PLEASE PRESS" + "<br> RESET BUTTON";
  }
}