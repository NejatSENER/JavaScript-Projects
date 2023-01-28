const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 and 3

  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color = colors[randomNumber];
});

function getRandomNumber(number) {
  return Math.floor(Math.random() * colors.length);
}
