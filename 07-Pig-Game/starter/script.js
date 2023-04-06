'use strict';

const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const playersCurrentScore = document.querySelectorAll('.current-score');
const playersTotalScore = document.querySelectorAll('.score');
const players = document.querySelectorAll('.player');

let isPlayer1Turn = true;

let functionRoll = function (i) {
  let singleRoll = Math.trunc(Math.random() * 6) + 1;
  playersCurrentScore[i].textContent =
    Number(playersCurrentScore[i].textContent) + singleRoll;
  document.querySelector('.dice').src = `dice-${singleRoll}.png`;
  return singleRoll;
};

let functionSwitchPlayer = i => {
  players[i].classList.remove('player--active');
  players[1 - i].classList.add('player--active');
  isPlayer1Turn = !isPlayer1Turn;
};

let functionNewGame = () => {
  players[0].classList.remove('player--winner');
  players[1].classList.remove('player--winner');
  players[0].classList.add('player--active');
  playersCurrentScore[0].textContent = 0;
  playersCurrentScore[1].textContent = 0;
  playersTotalScore[0].textContent = 0;
  playersTotalScore[1].textContent = 0;
  isPlayer1Turn = true;
  document.querySelector('.dice').src = `dice-1.png`;
};

functionNewGame();

btnRollDice.addEventListener('click', () => {
  let rollResult = isPlayer1Turn ? functionRoll(0) : functionRoll(1);
  if (rollResult == 1) {
    let i = isPlayer1Turn ? 0 : 1;
    playersCurrentScore[i].textContent = 0;
    functionSwitchPlayer(i);
  }
});

btnHold.addEventListener('click', () => {
  let i = isPlayer1Turn ? 0 : 1;
  playersTotalScore[i].textContent =
    Number(playersTotalScore[i].textContent) +
    Number(playersCurrentScore[i].textContent);
  playersCurrentScore[i].textContent = 0;

  if (Number(playersTotalScore[i].textContent) >= 15) {
    players[i].classList.add('player--winner');
    players[i].classList.remove('player--active');
    document.querySelector('.dice').classList.add('hidden');
  } else {
    functionSwitchPlayer(i);
  }
});

btnNewGame.addEventListener('click', functionNewGame);
