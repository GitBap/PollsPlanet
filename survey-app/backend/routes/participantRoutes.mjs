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
    const { survey_id, question_id, answer } = req.body;
    const response = [survey_id, question_id, answer];
    const insertText =
      "INSERT INTO answers (survey_id, question_id, answer) VALUES($1, $2, $3) RETURNING *;";
    const { rows } = await pool.query(insertText, response);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

export const participantRouter = router;
