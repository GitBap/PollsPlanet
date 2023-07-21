import express from "express";
import pool from "../db.js";
import cookieParser from "cookie-parser";
import bcrypt, { genSalt } from "bcrypt";
import { v4 as uuidv4 } from "uuid";
// import authorize from "../middleware/auth.mjs";
// // import {
// //   getAllUsers,
// //   login,
// //   deleteUser,
// //   updateUser,
// //   createUser,
// // } from "../services/usersService.mjs";

const app = express();
const router = express.Router();
app.use(cookieParser());

// user/admin sign up route
router.post("/register", async (req, res) => {
  const { name, password, email } = req.body;

  // check if user already exists
  const user = await pool.query("SELECT * FROM users WHERE email = $1;", [
    email,
  ]);
  if (user.rows.length !== 0) {
    return res
      .status(401)
      .json({ message: "User with that email already exists" });
  } else {
    // hash the password
    const saltRounds = 8;
    const password_hash = await bcrypt.hash(password, saltRounds);
    const newUser = await pool.query(
      "INSERT INTO users(name, password, email) VALUES($1, $2, $3) RETURNING *;",
      [name, password_hash, email]
    );
    res
      .status(201)
      .send(`new user ${name} with email: ${email} successfully created`);
  }
});

// user/admin login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const users = await pool.query("SELECT email, password FROM users;");
    const foundUser = users.rows.find((user) => user.email === email);

    // bcrypt compare password hashes
    const hash_compare = await bcrypt.compare(password, foundUser.password);
    // console.log(hash_compare);
    if (hash_compare === true) {
      // Send a response indicating successful login and assign the user a session id
      const sessionId = uuidv4();
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const expiryDate = new Date(Date.now() + oneDay);

      await pool.query(
        "INSERT INTO user_sessions (email, session_id, expires_at) VALUES ($1, $2, $3);",
        [email, sessionId, expiryDate]
      );
      res
        .cookie("session_id", sessionId, {
          expires: expiryDate,
          httpOnly: true,
          secure: true,
          sameSite: "Strict",
        })
        .status(200)
        .json({ message: "Successful Login" });
    }
  } catch (err) {
    res.json({ message: "user/email invalid or not found" });
    console.error(err.message);
  }
});

// get all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// edit user
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updateUser = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    res.json(updateUser.rows[0]);
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

// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await deleteUser(id);
//     res.json({ success: deleted });
//   } catch (err) {
//     console.error(err.message);
//     res.sendStatus(500);
//   }
// });

// route for user/admin to reset password (after clicking forgot password)
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1 RETURNING *;",
      [email]
    );
    if (user.rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    } else {
      // send email to user with link to reset password
      res.status(200).json({ message: "Email sent" });
    }
  } catch (err) {
    console.error(err.message);
  }
});

export const usersAdmin = router;
