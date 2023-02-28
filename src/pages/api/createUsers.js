import { app, database } from "../../../firebaseConfig";
import { collection, setDoc, doc } from "firebase/firestore";
const dbInstance = collection(database, "users");

export default async function createUser(req, res) {
  const data = req.body;
  await setDoc(doc(database, "users", data.email), {
    password: data.password,
  });
  res.status(200).json({ okay: "okay" });
}
