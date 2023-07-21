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
  const { surveyName, user_id, questions } = req.body;

  // Step 1: Insert the survey
  const insertSurveyQuery =
    "INSERT INTO surveys (user_id,title) VALUES ($1,$2) RETURNING id";
  pool.query(insertSurveyQuery, [user_id, surveyName], (err, surveyResult) => {
    if (err) {
      console.error("Error inserting survey:", err);
      return res.status(500).json({ error: "Error inserting survey" });
    }

    const surveyId = surveyResult.rows[0].id;

    // Step 2: Insert the questions associated with the survey
    const insertQuestionsQuery = `
      INSERT INTO questions (survey_id, question) 
      SELECT $1, unnest($2::text[]) 
    `;
    const values = questions.map((question) => [surveyId, question]);

    pool.query(
      insertQuestionsQuery,
      [surveyId, questions],
      (err, questionsResult) => {
        if (err) {
          console.error("Error inserting questions:", err);
          return res.status(500).json({ error: "Error inserting questions" });
        }

        res.json({
          surveyId,
          message: "Survey and questions inserted successfully",
        });
      }
    );
  });
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

// Get all surveys by user_id route for administrator
// param :id means user_id
router.get("/usersurveys/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const queryText = `SELECT
          surveys.id AS survey_id,
          surveys.title AS survey_title 
          FROM surveys
          inner JOIN users ON surveys.user_id = users.id
          WHERE users.id = $1;`;
    const userSurveys = await pool.query(queryText, [id]);
    res.json(userSurveys.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all surveys and questons and answers by user_id route for administrator
// param :id means user_id
router.get("/surverysanswers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const queryText = `SELECT
          surveys.id AS survey_id,
          surveys.title AS survey_title,
          questions.id AS question_id,
          questions.question,
          answers.id AS answer_id,
          answers.answer
          FROM surveys
          left JOIN questions ON surveys.id = questions.survey_id
          LEFT JOIN answers ON questions.id = answers.question_id
          left JOIN users ON surveys.user_id = users.id
          WHERE users.id = $1;`;
    const surveyResults = await pool.query(queryText, [id]);
    res.json(surveyResults.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// update survey and its questions route for administrator
router.put("/:id", async (req, res) => {
  const surveyId = req.params.id;
  const { surveyName, questions } = req.body;

  try {
    await pool.query("BEGIN");

    // Update the survey
    await pool.query("UPDATE SURVEYS SET title = $1 WHERE id = $2", [
      surveyName,
      surveyId,
    ]);

    // Update questions
    for (const question of questions) {
      if (question.id) {
        // If the question already exists, update it
        await pool.query("UPDATE QUESTIONS SET question = $1 WHERE id = $2", [
          question.question,
          question.id,
        ]);
      }
    }

    await pool.query("COMMIT");
    res.status(200).json({ message: "Survey updated successfully" });
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error during transaction", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// delete survey route for administrator
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("BEGIN");

    // Delete related records from the questions table
    await pool.query("DELETE FROM ANSWERS WHERE survey_id = $1", [id]);

    // Delete related records from the questions table
    await pool.query("DELETE FROM questions WHERE survey_id = $1", [id]);

    // Delete the survey record from the survey table
    await pool.query("DELETE FROM SURVEYS WHERE id = $1", [id]);

    await pool.query("COMMIT");
    res.json(`Survey ${id} was deleted!`);
    console.log("Survey and related questions deleted successfully.");
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error during transaction", error);
  }

  // try {
  //   // const { title } = req.body;
  //   const { id } = req.params;
  //   const deleteSurvey = await pool.query(
  //     "DELETE FROM surveys WHERE id = $1 RETURNING *",
  //     [id]
  //   );

  //   res.json(`Survey ${id} was deleted!`);
  // } catch (err) {
  //   console.error(err.message);
  // }
});

export const surveyRouter = router;
