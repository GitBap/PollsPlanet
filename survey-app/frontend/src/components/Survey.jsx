import React, { useEffect, useState } from "react";
import RangeAnswer from "./RangeAnswer";

import "./styles/survey.scss";

const Survey = () => {
  const [questions, setQuestions] = useState([]);

  // FIXME: After refresh waiting a data
  useEffect(() => {
    (async () => {
      const fetchQuestions = await fetch("http://localhost:3001/participant");

      const questions = await fetchQuestions.json();
      setQuestions(questions);
    })();
  }, []);

  return (
    <section className="survey">
      <form>
        <h3 className="survey-title">Standard of living</h3>
        {questions.map((question, index) => {
          return (
            <div key={`question-${index}`} className="survey-item">
              <p className="survey-question">{`${index + 1}. ${
                question.question
              }`}</p>
              <RangeAnswer />
            </div>
          );
        })}
        <button
          className="btn"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Survey;
