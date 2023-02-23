import bcrypt from "bcryptjs";
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
    const docRef = doc(database, "users", "3LzkhtZZdF3hcBTVntBx");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    // if (!user) {
    //   res.status(400).json({ status: "error", error: "User Not Found" });
    // }

    // const { id, email, password, createdAt } = user;
    // bcrypt.compare(data.password, password).then((isMatch) => {
    //   if (!isMatch) {
    //     res
    //       .status(400)
    //       .json({ status: "error", error: "Password incorrect" });
    //   }

    //   const payload = {
    //     id: id,
    //     email: email,
    //     createdAt: createdAt,
    //   };

    //   const token = jwt.sign(payload, KEY, {
    //     expiresIn: 60 * 60,
    //   });
    //   res.status(200).json({ token: token });
    // });
  } catch (error) {
    throw error;
  }
};
