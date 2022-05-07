// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuis2LCuhhr3wTsWyilFHo_MPCe-qV8iw",
  authDomain: "quizfield-3f580.firebaseapp.com",
  databaseURL:
    "https://quizfield-3f580-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quizfield-3f580",
  storageBucket: "quizfield-3f580.appspot.com",
  messagingSenderId: "347280940460",
  appId: "1:347280940460:web:2b0b0f71836b1e33d92e09",
};

// Initialize Firebase and database
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Submit scores to the database, returns the documents id (you probably don't need it) if succeeded, error otherwise (needs async/await or then for return values)
export const submitScore = async (name, score) => {
  if (
    typeof name === "string" &&
    name.length > 0 &&
    typeof score === "number" &&
    score >= 0
  ) {
    try {
      const docRef = await addDoc(collection(db, "leaderboards"), {
        name: name,
        score: score,
      });
      console.log("Score submitted!");
    } catch (e) {
      console.error("Error submitting score: ", e);
    }
  } else {
    throw "Invalid input, name must be string and at least 1 character long, score must be number and at least 0";
  }
};

// Returns an array of objects with the names and scores of the leaderboards in descending order
// THIS IS AN ASYNC FUNCTION, YOU NEED TO ASYNC/AWAIT OR THEN IT
export const loadScores = async () => {
  const querySnapshot = await getDocs(collection(db, "leaderboards"));
  const scores = [];
  querySnapshot.forEach((doc) => {
    scores.push({ name: doc.data().name, score: doc.data().score });
  });
  scores.sort(function (a, b) {
    return b.score - a.score;
  });
  return scores;
};
