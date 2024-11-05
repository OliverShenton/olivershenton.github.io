"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number ❤';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 23;

//Creating a Random number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

//Highscore starting number
let score = 20;
let highscore = 0;

//Event Listener when we click check!
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "Correct Number ❤";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});
