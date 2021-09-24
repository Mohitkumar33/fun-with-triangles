const sides = document.querySelectorAll(".hypotenuse-calculate");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#text-area");

output.style.display = "none";

function calculation(a, b) {
  if (a > 0 && b > 0) {
    return Math.sqrt(a * a + b * b);
  } else {
    return 0;
  }
}

function checkHypotenuse() {
  var ans = calculation(Number(sides[0].value), Number(sides[1].value));
  if (ans > 0) {
    output.style.display = "block";
    output.innerText = "The length of hypotenuse is " + ans;
  } else {
    output.style.display = "block";
    output.innerText = "please enter the valid sides";
  }
}

checkButton.addEventListener("click", checkHypotenuse);
