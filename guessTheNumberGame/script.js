"use strict";
// pick a secret number from 1 to 20
let secretNumber = Math.floor(Math.random() * 20) + 1;

//defining essential variables of the game
let score = 20;
let highscore = 0;

//function to display a message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// actions when the check button clicked
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //if there is no input
  if (!guess) {
    displayMessage("This Isn't A Number!");
  } else {
    displayMessage("Start guessing...");

    //if guess is correct
    if (guess === secretNumber) {
      displayMessage("Correct Number!");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "30rem";
      document.querySelector("body").style.backgroundColor = "#60b347";
      if (highscore < score) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }

    // if guess isn't correct
    else {
      if (score > 1) {
        if (guess > secretNumber) {
          score--;
          document.querySelector(".score").textContent = score;
          displayMessage("Too High");
        } else if (guess < secretNumber) {
          score--;
          document.querySelector(".score").textContent = score;
          displayMessage("Too Low");
        }
      } else {
        score = 0;
        displayMessage("You Lost!");
        document.querySelector(".score").textContent = score;
      }
    }
  }
});

// actions when again button clicked
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
});
