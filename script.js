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



const startbtn = document.getElementById("startbtn");
if(startbtn != null){
  startbtn.addEventListener("click", startBtn) 
}


  const submitButton = document.getElementById("submit-btn");
  if (submitButton !=null) {
  submitButton.addEventListener("click", nextQuestion);
  }
// Sorry I had to move those ^ two lines inside a try...catch statement because they were causing 
// null errors in pages other than quizPage.html because "submit-btn" doesn't exist anywhere else 
// and the error was preventing the rest of the script from running
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


let index = 1;

async function nextQuestion() {
  for (let i = 1; i <= 4; i++) {
    if (document.getElementById(`A${index}-${i}`).checked) {
      if (correctAnswers[`Q${index}`] == i) {
        score += 5;
        console.log(score);
      }
      document.getElementById(`Q${index}`).classList.add("hideDiv");

      index += 1;

      if (document.getElementById(`Q${index}`) == null)
      {
        const input = localStorage.getItem("username");
        submitButton.setAttribute('disabled', true);
        submitButton.innerText ="Loading...";
        submitButton.classList.add("disabled");
        await submitScore(input,score);

        window.location.replace("result.html");
        return;
      }

      document.getElementById(`Q${index}`).classList.remove("hideDiv");
      return;
    }
  }
  alert("YOU NEED TO PICK AN ANSWER");
}
try {
const scoreboard = document.getElementById("scoreboard");
if (scoreboard != null) {
  scoreLoader();
}

} catch{}

async function scoreLoader() {
     const scores = await loadScores();
     const input = localStorage.getItem("username");
     let loadedscores = `<tr>
     <th>Name</th>
     <th>Score</th>
   </tr>`;
     scores.forEach((e)=>{
       loadedscores = loadedscores +
        `
       <tr class="${e.name == input ? "boldtext":""}">
         <td>${e.name}</td>
         <td>${e.score}</td>
       </tr>
     `
     })
     scoreboard.innerHTML = loadedscores
   }



