const Q1 = document.getElementById("Q1");
const Q2 = document.getElementById("Q2");
const Q3 = document.getElementById("Q3");
// You don't need those btw ^
const submitButton = document.getElementById("submit-btn");
// this ^ returns null in index.html because there's no submitButton there

import { submitScore, loadScores } from "./database.js";
// Use these functions anywhere ^

// submitScore(<string>name, <number>score);

// loadScores();
// returns an array of objects with all the scores (sorted from highest to lowest score)
// e.g. [{name: "Psycho", score: 3}, {name: "Dxl", score: 4},...]
// IMPORTANT: this function is asynchronous, meaning you need to tell the browser to wait
// for the response from the server, you can do this with either the "await" or "then" keywords
// as follows:
// const leaderboards = await loadScores();
// then you can use the variable leaderboards as you wish
// Or:
// loadScores().then((scores) => ( ...do something with the variable scores here...))
// They're essentially the same...


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

// TODO: Make an onClick function for the anchor tag that starts the quiz at first,
// assuming you will have the name input right with the button, you'll need a way
// to save the name in JS because it will get lost on page transition... (You'll
// probably have to change the <a> into a <button> or something...)