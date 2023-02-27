import { verifyToken } from "@/middleware/utils";
import { app, database } from "../../../firebaseConfig";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
const tasks = collection(database, "tasks");

export default async function createTask(req, res) {
  const data = req.body;
  const { id } = verifyToken(data.token);
  const q = query(tasks, where("userId", "==", id), orderBy("createdAt"));
  const response = [];
  const results = await getDocs(q);
  results.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    response.push({ data: doc.data(), id: doc.id });
  });

  res.status(200).json({ data: response });
}
