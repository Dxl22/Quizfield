const Q1 = document.getElementById("Q1");
const Q2 = document.getElementById("Q2");
const Q3 = document.getElementById("Q3");
// You don't need those btw ^

import { submitScore, loadScores } from "./database.js";
// Use these functions anywhere ^

// submitScore(name: string, score: number);
// You can call this function anywhere to add an entry to the database with the provided data

// loadScores();
// returns an array of objects with all the scores (sorted from highest to lowest score)
// e.g. [{name: "Dxl", score: 3}, {name: "Omar", score: 2},...]
// IMPORTANT: this function is asynchronous, meaning you need to tell the browser to wait
// for the response from the server, you can do this with either the "await" (preferred) or
// "then" keywords as follows:
// const scores = await loadScores();
// For this implementation you need to encase what you want to do in an async function like so:
// async function scoreLoader() {
//   const scores = await loadScores();
//   ...do something with the variable scores here...
// }
// Or:
// loadScores().then((scores) => { ...do something with the variable scores here... })
// They're essentially the same but "async/await" is preferred over "then"...

const correctAnswers = {
  Q1: 1,
  Q2: 3,
  Q3: 2,
};

let score = 0;

<<<<<<< HEAD

try {
  const startbtn = document.getElementById("startbtn");
  startbtn.addEventListener("click", startBtn);
} catch {}

=======
>>>>>>> 529daeba08e78a7f74f6896caed61986547dc81d
try {
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", nextQuestion);
} catch {}
// Sorry I had to move those ^ two lines inside a try...catch statement because they were causing 
// null errors in pages other than quizPage.html because "submit-btn" doesn't exist anywhere else 
// and the error was preventing the rest of the script from running
<<<<<<< HEAD
function startBtn() {
  const username = document.getElementById("inputfield").value;
  if (username.length < 3) {
    alert("username must be above 3 characters");
  }
  else {
    localStorage.setItem("username",username);
    window.location.replace("quizPage.html");
  }
}

=======
>>>>>>> 529daeba08e78a7f74f6896caed61986547dc81d

let index = 1;

function nextQuestion() {
  for (let i = 1; i <= 4; i++) {
    if (document.getElementById(`A${index}-${i}`).checked) {
      if (correctAnswers[`Q${index}`] == i) {
        score += 5;
        console.log(score);
      }
      document.getElementById(`Q${index}`).classList.add("hideDiv");

      index += 1;

<<<<<<< HEAD
      if (document.getElementById(`Q${index}`) == null)
      {
        const input = localStorage.getItem("username");
        submitScore(input,score);
        window.location.replace("result.html");
        return;
      }

=======
>>>>>>> 529daeba08e78a7f74f6896caed61986547dc81d
      document.getElementById(`Q${index}`).classList.remove("hideDiv");
      return;
    }
  }
  alert("YOU NEED TO PICK AN ANSWER");
}

<<<<<<< HEAD
// TODO: add color grade to right or wrong answer with a timer for next question
// work on result page
=======
// TODO: Make an onClick function for the anchor tag that starts the quiz at first,
// assuming you will have the name input right with the button, you'll need a way
// to save the name in JS because it will get lost on page transition... (You'll
// probably have to change the <a> into a <button> or something...)
>>>>>>> 529daeba08e78a7f74f6896caed61986547dc81d
