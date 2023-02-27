import { app, database } from "../../../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export default async function updateTask(req, res) {
  const data = req.body;
  await deleteDoc(doc(database, "tasks", data.id));

  res.status(200).json({ okay: "okay" });
}
