import React from "react";
import RangeAnswer from "./RangeAnswer";

import "./styles/survey.scss";

const Survey = ({ questions }) => {
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
