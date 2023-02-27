import jwt from "jsonwebtoken";

const KEY = process.env.JWT_KEY;
import { app, database } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export default async (req, res) => {
  try {
    const data = req.body;

    if (!data.email || !data.password) {
      return res.status(400).json({
        status: "error",
        error: "Request missing username or password",
      });
    }
    const docRef = doc(database, "users", data.email);
    const user = await getDoc(docRef);
    if (!user) {
      res.status(400).json({ status: "error", error: "User Not Found" });
    }
    const { password } = user.data();
    if (password === data.password) {
      const payload = {
        id: user.id,
      };

      const token = jwt.sign(payload, KEY, {
        expiresIn: 60 * 60,
      });

      res.status(200).json({ token: token });
    }
  } catch (error) {
    throw error;
  }
};
