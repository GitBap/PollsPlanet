import express from "express";
import pool from "./db.js";
import usersAdmin from "./routes/usersAdmin.mjs";
import polls from "./routes/polls.mjs";

const app = express();

app.use(express.json());
app.use(express.static("public"));

// Create a proxy server to avoid the issues with access to fetch hasn't been blocked by cors policy
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//router entrance for administrators function
app.use("/api/users", usersAdmin);
//router entrance for polls
app.use("/api/polls", polls);

// GET all questions route for participant
app.get("/participant", async (req, res) => {
  try {
    const allQuestions = await pool.query("SELECT * FROM questions");
    res.json(allQuestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// POST all question responses route for participant
app.post("/participant/", async (req, res) => {
  try {
    const { survey_id, answer } = req.body;
    const response = [survey_id, answer];
    const insertText =  "INSERT INTO answers (survey_id, answer) VALUES($1, $2) RETURNING *;"
    const {rows} = await pool.query(insertText, response);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is started and listenning at port: ${PORT}`);
});

//db connection
// pool.connect()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Poll Management API listening on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Failed to establish connection with the database:", err);
//     process.exit(1); // Exit the process with 'failure' status code
//   });
