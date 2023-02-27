import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBbS-3zgsAvz1iW-CG6teB1DMtAMPAGVMY",

  authDomain: "todo-list-2417c.firebaseapp.com",

  projectId: "todo-list-2417c",

  storageBucket: "todo-list-2417c.appspot.com",

  messagingSenderId: "117683632709",

  appId: "1:117683632709:web:d0d09a432b58ad9235012c",

  measurementId: "G-XJQX226VLT",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
