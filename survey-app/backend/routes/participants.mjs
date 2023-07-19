import express from "express";
import pool from "../db.js";

const router = express.Router();

// GET all questions route for participant
router.get("/", async (req, res) => {
  try {
    const allQuestions = await pool.query("SELECT * FROM questions");
    res.json(allQuestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// POST all question responses route for participant
router.post("/", async (req, res) => {
  try {
    const answers = [...req.body];
    const insertedAnswers = [];

    for (const answerItem of answers) {
      const { survey_id, question_id, answer } = answerItem;

      const insertText =
        "INSERT INTO answers (survey_id, question_id, answer) VALUES($1, $2, $3) RETURNING *;";

      const { rows } = await pool.query(insertText, [
        survey_id,
        question_id,
        answer,
      ]);

      insertedAnswers.push(rows[0]);
    }

    res.status(201).json(insertedAnswers);
  } catch (err) {
    console.error(err.message);
  }
});

export const participantRouter = router;
