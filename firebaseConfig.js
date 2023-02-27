import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = process.env.FIREBASE;

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
