var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var score1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
var score2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

function checkScore(num1, num2) {
  if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
  } else if (num1 < num2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
  } else {
    document.querySelector("h1").innerHTML = "Draft"
  }
}

checkScore(randomNumber1,randomNumber2);
