'use strict';

////////////////////////////////////
// PROJECT #3: Pig Game

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.innerHTML = 0;
score1El.innerHTML = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice
btnRoll.addEventListener('click', function () {
  // 1. generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true switch to next player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.querySelector(`current--${activePlayer}`).innerHTML = currentScore;
  } else {
    // switch to next player
    document.querySelector(`current--${activePlayer}`).innerHTML = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
