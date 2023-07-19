import express from "express";
import pool from "../db.js";
import authorize from "../middleware/auth.mjs";
// import {
//   getAllUsers,
//   login,
//   deleteUser,
//   updateUser,
//   createUser,
// } from "../services/usersService.mjs";

const router = express.Router();

// router.get("/", async (req, res) => {
//   const administrators = {
//     users: [
//       { id: 1, name: "json", email: "json@gmail.com" },
//       { id: 2, name: "David", email: "david@gmail.com" },
//     ],
//   };
//   // const administrators = await pool.query("SELECT * FROM users;");
//   res.json(administrators);
// });

// router.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   const { rows } = await db.query(
//     "UPDATE users SET name = $1, species = $2, age = $3, enclosure_id = $4 WHERE id = $5 RETURNING *;",
//     [name, email]
//   );

//   if (rows.length === 0) {
//     res.sendStatus(404);
//   } else {
//     res.json(rows[0]);
//   }
// });

router.post("/register", async (req, res) => {
  const { name, password, email } = req.body;

  const newUser = await pool.query(
    "INSERT INTO users(name, password, email) VALUES($1, $2, $3) RETURNING *;",
    [name, password, email]
  );
  res.status(201).json(newUser.rows[0]);
});

// router.post("/login", async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     // Fetch the user with the provided email
//     const userResult = await pool.query(
//       "SELECT * FROM users(email, password) WHERE email = $1 AND password = $2;",
//       [email, password]
//     );

//     const user = userResult.rows[0];

//     // If no such user exists, or the password is incorrect, send an error
//     if (!user || !(await bcrypt.compare(password, user.password_hash))) {
//       res.status(401).json({ message: "Invalid email or password" });
//       return;
//     }

//     // Send a response indicating successful login
//     res.status(200).json({ message: "User logged in successfully" });
//   } catch (err) {
//     next(err);
//   }
// });

export const usersAdmin = router;
