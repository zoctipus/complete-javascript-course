'use strict';

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  let guessNum = Number(document.querySelector('.guess').value);
  let score = document.querySelector('.score').textContent;
  let highScore = document.querySelector('.highscore').textContent;
  if (!guessNum) {
    displayMessage('no value');
  } else if (guessNum !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNum > secretNumber ? 'Too High!!' : 'Too Low!!');
      document.querySelector('.score').textContent = score - 1;
    } else {
      displayMessage('You lose the game');
      document.querySelector('.score').textContent = 0;
    }
  } else {
    displayMessage('You got it!!');
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = guessNum;
    document.querySelector('.number').style.width = '30rem';
  }
});

document.querySelector('.btn').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
