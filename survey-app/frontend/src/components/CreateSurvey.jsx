import React from "react";
import { useImmer } from "use-immer";
import { createSurvey } from "../utils/fetchDataFromDB";

const CreateSurvey = () => {
  const [question, setQuestion] = useImmer("");

  const [newSurvey, setNewSurvey] = useImmer({
    surveyName: "",
    user_id: 1,
    questions: [],
  });

  const addQuestion = () => {
    if (question.trim() !== "") {
      setNewSurvey((draft) => {
        draft.questions.push(question);
      });

      setQuestion("");
    }
  };

  return (
    <section>
      <div className="container">
        <h2>Create survey</h2>
        <div className="wrapper">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              createSurvey(newSurvey);
              setNewSurvey((draft) => {
                draft.surveyName = "";
                draft.questions = [];
              });
            }}
          >
            <div>
              <label htmlFor="title">Survay title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={newSurvey.surveyName}
                onChange={(event) => {
                  setNewSurvey((draft) => {
                    draft.surveyName = event.target.value;
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="question">Survay question #1</label>
              <input
                type="text"
                name="question"
                id="question"
                value={question}
                onChange={(event) => {
                  setQuestion(event.target.value);
                }}
              />
              <button type="button" onClick={addQuestion}>
                Add question
              </button>
            </div>
            <button type="submit">Add survey</button>
          </form>
          <div>
            <h3>Your questions: </h3>
            <ul>
              {newSurvey?.questions.map((item, index) => {
                return (
                  <li key={`question-${index}`}>{`${index + 1}. ${item}`}</li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateSurvey;
