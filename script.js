const Q1 = document.getElementById("Q1");
const Q2 = document.getElementById("Q2");
const Q3 = document.getElementById("Q3");
const submitButton = document.getElementById("submit-btn");


const correctAnswers = {
  Q1: 1,
  Q2: 3,
  Q3: 2,
};

let score = 0;

submitButton.addEventListener("click", nextQuestion);

let index = 1;

function nextQuestion() {
  for (let i = 1; i <= 4; i++) {
    if (document.getElementById(`A${index}-${i}`).checked) {
    
        if (correctAnswers[`Q${index}`] == i  ) {
            score +=5;
            console.log(score);
        }
        document.getElementById(`Q${index}`).classList.add("hideDiv");

        index += 1;

        document.getElementById(`Q${index}`).classList.remove("hideDiv");
        return;
    }
  }
  alert("YOU NEED TO PICK AN ANSWER");
}
