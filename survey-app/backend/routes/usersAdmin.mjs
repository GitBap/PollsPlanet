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

// user/admin sign up route
router.post("/register", async (req, res) => {
  const { name, password, email } = req.body;

  const newUser = await pool.query(
    "INSERT INTO users(name, password, email) VALUES($1, $2, $3) RETURNING *;",
    [name, password, email]
  );
  res.status(201).json(newUser.rows[0]);
});

// user/admin login route
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Fetch the user with the provided email
    const userResult = await pool.query(
      "SELECT email, password FROM users WHERE email = $1 AND password = $2;",
      [email, password]
    );

    const user = userResult.rows[0];

    // compare the password and email with the password & email stored in the database
    if (
      !user ||
      !(
        userResult.rows[0].password === password &&
        userResult.rows[0].email === email
      )
    ) {
      res.status(401).json({ message: "Invalid email or password" });
    } else {
      // Send a response indicating successful login
      res.status(200).json({ message: "Successful Login" });
    }
  } catch (err) {
    console.error(err.message);
  }
});

// delete route for user/admin to delete their account
router.delete("/delete", async (req, res) => {
  try {
    const { email } = req.body;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE email = $1 RETURNING *;",
      [email]
    );
    res
      .status(200)
      .json({ message: `User with email = ${email} has been deleted` });
  } catch (err) {
    console.error(err.message);
  }
});

export const usersAdmin = router;
