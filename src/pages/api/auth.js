import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const KEY = process.env.JWT_KEY;

const USERS = [
  {
    id: 1,
    email: "example1@example.com",
    password: "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
    createdAt: "2020-06-14 18:23:45",
  },
  {
    id: 2,
    email: "example2@example.com",
    password: "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
    createdAt: "2020-06-14 18:23:45",
  },
  {
    id: 3,
    email: "example3@example.com",
    password: "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
    createdAt: "2020-06-14 18:23:45",
  },
  {
    id: 4,
    email: "example4@example.com",
    password: "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
    createdAt: "2020-06-14 18:23:45",
  },
];

export default (req, res) => {
  return new Promise((resolve) => {
    try {
      const data = req.body;

      if (!data.email || !data.password) {
        return res.status(400).json({
          status: "error",
          error: "Request missing username or password",
        });
      }

      const user = USERS.find((user) => {
        return user.email === data.email;
      });

      if (!user) {
        res.status(400).json({ status: "error", error: "User Not Found" });
      }

      const { id, email, password, createdAt } = user;

      bcrypt.compare(data.password, password).then((isMatch) => {
        if (!isMatch) {
          res
            .status(400)
            .json({ status: "error", error: "Password incorrect" });
        }

        const payload = {
          id: id,
          email: email,
          createdAt: createdAt,
        };

        jwt.sign(
          payload,
          KEY,
          {
            expiresIn: 60 * 60,
          },
          (err, token) => {
            res.status(200).json({
              success: true,
              token: "Bearer " + token,
            });
          },
        );
      });
    } catch (error) {
      throw error;
    }
    return resolve();
  });
};
