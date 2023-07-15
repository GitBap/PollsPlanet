import express from "express";
import pool from "./db.js";
import usersAdmin from "./routes/usersAdmin.mjs";
import polls from "./routes/polls.mjs";

const app = express();

app.use(express.json());
app.use(express.static("public"));

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
    const insertResponse = await pool.query(
      "INSERT INTO answers (survey_id, answer) VALUES($1, $2) RETURNING *",
      [response]
    );
    res.json(insertResponse.rows[0]);
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
