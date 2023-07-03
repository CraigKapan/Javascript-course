'use strict';

/*
/////////////////////////////
// Selecting and Manipulating Elements

console.log(document.querySelector(".message").innerHTML);
document.querySelector(".message").innerHTML = "🎉 Correct Number!"

document.querySelector(".number").innerHTML = 13;
document.querySelector(".score").innerHTML = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
/////////////////////////////
// Project: Guess my number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').innerHTML = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').innerHTML = '🎉 Correct Number!';

    document.querySelector('.number').innerHTML = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = '📈 Too High!';
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      document.querySelector('.message').innerHTML = '💥 You lost the game!';
      document.querySelector('.score').innerHTML = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = '📉 Too Low!';
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      document.querySelector('.message').innerHTML = '💥 You lost the game!';
      document.querySelector('.score').innerHTML = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').innerHTML = score;
    document.querySelector(".number").style.width = "15rem"
    document.querySelector('.number').innerHTML = "?";
    document.querySelector(".message").innerHTML = "Start guessing..."
    document.querySelector(".guess").value = " ";
    document.querySelector("body").style.backgroundColor = "#222";
})