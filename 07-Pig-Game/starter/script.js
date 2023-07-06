'use strict';

////////////////////////////////////
// PROJECT #3: Pig Game

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector(".dice");

// Starting conditions
score0El.innerHTML = 0;
score1El.innerHTML = 0;
diceEl.classList.add("hidden");
