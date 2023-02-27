import { verifyToken } from "@/middleware/utils";
import { app, database } from "../../../firebaseConfig";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
const dbInstance = collection(database, "tasks");
export default async function createTask(req, res) {
  const data = req.body;
  const { id } = verifyToken(data.token);
  await addDoc(dbInstance, {
    checked: false,
    value: data.value,
    userId: id,
    createdAt: new Date(),
  });
  res.status(200).json({ okay: "okay" });
}
