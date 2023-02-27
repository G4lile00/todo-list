import { app, database } from "../../../firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
const tasks = collection(database, "tasks");

export default async function updateTask(req, res) {
  const data = req.body;
  const docRef = doc(database, "tasks", data.id);
  const dataDoc = {
    value: data.value,
    checked: data.checked,
  };
  setDoc(docRef, dataDoc, { merge: true });

  res.status(200).json({ okay: "okay" });
}
