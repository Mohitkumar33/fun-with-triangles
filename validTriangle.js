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

function msgDisplay(txt){
  output.style.display = "block";
  output.innerText = txt;
}

function checkTriangle() {
  var a = Number(angles[0].value)
  var b = Number(angles[1].value)
  var c = Number(angles[2].value)
  if(a<1 || b<1 || c<1){
    msgDisplay("enter a valid input")
  }
  else{
  var ans = calculateSum(a,b,c);
  if (ans === 180) {
    msgDisplay(" Yes! this is a valid triangle 🎉")
  } else {
    msgDisplay("Oh Oh! the angles doesn't form a triangle 😅")
  }}
}

checkButton.addEventListener("click", checkTriangle);
