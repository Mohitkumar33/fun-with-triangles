const angles = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#text-area");

output.style.display = "none";

function calculateSum(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    console.log(a + b + c);
    return a + b + c;
  } else {
    return 0;
  }
}

function checkTriangle() {
  var ans = calculateSum(
    Number(angles[0].value),
    Number(angles[1].value),
    Number(angles[2].value)
  );
  if (ans === 180) {
    output.style.display = "block";
    output.innerText = " Yes! this is a valid triangle 🎉";
  } else {
    output.style.display = "block";
    output.innerText = "Oh Oh! the angles doesn't form a triangle 😅";
  }
}

checkButton.addEventListener("click", checkTriangle);
