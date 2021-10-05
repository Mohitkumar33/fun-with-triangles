const sides = document.querySelectorAll(".side-input");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#text-area");

output.style.display = "none";

function calculateSum(a, b) {
  if (a > 0 && b > 0) {
    return (1 / 2) * a * b;
  } else {
    return 0;
  }
}

function checkTriangle() {
  var a = Number(sides[0].value);
  var b = Number(sides[1].value)
  var ans = calculateSum(a, b);
  if(a>0 && b>0){
  if (ans > 0) {
    output.style.display = "block";
    output.innerText = " The area of the Triangle is " + ans;
  } else {
    output.style.display = "block";
    output.innerText = "This is not a valid triangle";
  }}
  else{
    output.style.display = "block";
    output.innerText = "Enter the valid sides of triangle";
  }
}

checkButton.addEventListener("click", checkTriangle);
