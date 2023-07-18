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
    const insertText =
      "INSERT INTO answers (survey_id, answer) VALUES($1, $2) RETURNING *;";
    const { rows } = await pool.query(insertText, response);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
