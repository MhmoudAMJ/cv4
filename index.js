var num1 = Math.floor(Math.random() * 6)+1;
var num2 = Math.floor(Math.random() * 6)+1;

var img1 = "images/dice" + num1 + ".png";
var img2 = "images/dice" + num2 + ".png";

document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

var title = document.querySelector("h1");

if (num1 > num2) {
  title.textContent = "🚩Player1 Wins";
} else if (num1 < num2) {
  title.textContent = "🚩Player2 Wins";
} else {
  title.textContent = "Draw!!";
}
