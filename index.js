let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");
dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
  // its a draw
  document.querySelector("h1").innerHTML="Draw !";
} else if (randomNumber1 > randomNumber2) {
  //player 1 wins
  document.querySelector("h1").innerHTML="Player 1 Wins !";
} else {
  //player 2 wins
  document.querySelector("h1").innerHTML="Player 2 Wins !";
}

