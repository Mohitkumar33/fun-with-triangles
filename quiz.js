const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#check-button");
const output = document.querySelector("#text-area");
const ans = document.querySelectorAll(".ans-is");

const correctAns = [
  "Equilateral",
  "Equilateral",
  "Equilateral",
  "Equilateral",
  "Isosceles",
  "Isosceles",
  "Isosceles",
  "Isosceles",
  "Scalene",
  "Scalene",
];
const displayMessage = [
  "Answer: Equilateral, In an equilateral triangle, all sides are equal in length",
  "Answer: Equilateral, In an equilateral triangle, all sides are equal in length.",
  "Answer: Equilateral, An equilateral triangle has all angles equal and measuring 60°. An equilateral triangle is also referred to as an equiangular triangle. Equilateral means 'equal sides', whereas equiangular means 'equal angles'.",
  "Answer: Equilateral, An equilateral triangle has all angles equal and measuring 60°. An equilateral triangle is also referred to as an equiangular triangle. Equilateral means 'equal sides', whereas equiangular means 'equal angles'.",
  "Isosceles, In an isosceles triangle, two sides are equal in length.",
  "Answer: Isosceles, In an isosceles triangle, two sides are equal in length.",
  "Answer: Isosceles, In an isosceles triangle, two sides are equal in length. If two sides of a triangle are equal, then the angles opposite to them are equal (as per the isosceles triangle theorem in Euclidean geometry)",
  "Answer: Isosceles, In an isosceles triangle, two sides are equal in length. If two sides of a triangle are equal, then the angles opposite to them are equal (as per the isosceles triangle theorem in Euclidean geometry).",
  "Answer: Scalene, In a scalene triangle, all sides and internal angles are different from one another.",
  "Answer: Scalene, In a scalene triangle, all sides and internal angles are different from one another.",
];

output.style.display = "none";

function showMessageColor(color, msg, index) {
  ans[index].style.backgroundColor = color;
  ans[index].innerText = msg;
}

function calculateScore() {
  var score = 0;
  var index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAns[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  index = 0;
  output.style.display = "block";
  output.innerText = "Your Score is " + score + " 🎉";
  for (let value of formResults.values()) {
    if (value === correctAns[index]) {
      showMessageColor(
        "#6FD36B",
        "Correct ans 🎉" + displayMessage[index],
        index
      );
      //   ans[index].style.backgroundColor = "#6FD36B";
      //   ans[index].innerText = "Correct ans 🎉" + displayMessage[index];
    } else {
      showMessageColor(
        "#CF3F3F",
        "Wrong ans 😔" + displayMessage[index],
        index
      );
      //   ans[index].style.backgroundColor = "#CF3F3F";
      //   ans[index].innerText = "Wrong ans 😔" + displayMessage[index];
    }
    index = index + 1;
  }
}

submitButton.addEventListener("click", calculateScore);
