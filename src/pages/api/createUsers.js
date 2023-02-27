import { app, database } from "../../../firebaseConfig";
import { collection, setDoc, doc } from "firebase/firestore";
const dbInstance = collection(database, "users");

export default async function createTask(req, res) {
  const data = req.body;
  await setDoc(doc(database, "users", data.email), {
    id: data.email,
    password: data.password,
  });
  res.status(200).json({ okay: "okay" });
}
