import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB1m4__kO0GIwPM_AOK8ZzJfH-nH3VXs0s",

  authDomain: "tarefas-d6339.firebaseapp.com",

  projectId: "tarefas-d6339",

  storageBucket: "tarefas-d6339.appspot.com",

  messagingSenderId: "31651370939",

  appId: "1:31651370939:web:31e1280ef6e3598cad569e",

  measurementId: "G-F06LFBZGNR",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
