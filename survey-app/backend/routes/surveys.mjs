import express from "express";
import pool from "../db.js";
// import authorize from "../middleware/auth.mjs";
// import {
//   getAllPolls,
//   updatePoll,
//   createPoll,
//   deletePoll,
// } from "../services/surveysService.mjs";

const router = express.Router();

// create survey route for administrator
router.post("/new-survey", async (req, res) => {
  try {
    const { title } = req.body;
    const insertText = await pool.query(
      "INSERT INTO surveys (title) VALUES($1) RETURNING *;",
      [title]
    );
    res.status(201).json(insertText.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// GET all surveys route for administrator
router.get("/", async (req, res) => {
  try {
    const allSurveys = await pool.query("SELECT * FROM surveys");
    res.json(allSurveys.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a survey by id route for administrator
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const survey = await pool.query("SELECT * FROM surveys WHERE id = $1", [
      id,
    ]);
    res.json(survey.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update survey route for administrator
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updateSurvey = await pool.query(
      "UPDATE surveys SET title = $1 WHERE id = $2 RETURNING *",
      [title, id]
    );
    res.json(updateSurvey.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// delete survey route for administrator
router.delete("/:id", async (req, res) => {
  try {
    const { title } = req.body;
    const { id } = req.params;
    const deleteSurvey = await pool.query(
      "DELETE FROM surveys WHERE title = $1 RETURNING *",
      [title]
    );

    res.json(`Survey ${title} was deleted!`);
  } catch (err) {
    console.error(err.message);
  }
});

export const surveyRouter = router;
