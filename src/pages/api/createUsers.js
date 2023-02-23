import { app, database } from "../../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
const dbInstance = collection(database, "users");

export default function createTask(req, res) {
  let data = req.body;
  addDoc(dbInstance, {
    email: data.email,
    password: data.password,
  });
  res.status(200);
}
