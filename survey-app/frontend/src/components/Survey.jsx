import React, { useEffect, useState } from "react";
import RangeAnswer from "./RangeAnswer";
import ThanksModal from "./ThanksModal";
import { postAnswers } from "../utils/fetchDataFromDB";

import "./styles/survey.scss";

const Survey = ({ questions }) => {
  const [isShowModal, isSetShowModal] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers(
      questions.map((question) => ({
        survey_id: question.survey_id,
        question_id: question.id,
        answer: "",
      }))
    );
  }, [questions]);

  const getAnswerValue = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].answer = value;
    setAnswers(updatedAnswers);
  };

  // FIXME: after refresh modal state have to safe to local storage
  // useEffect(() => {
  //   const receiveIsModal = window.localStorage.getItem("modal");
  //   if (receiveIsModal !== null) isSetShowModal(receiveIsModal);
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("modal", isShowModal);
  // }, [isShowModal]);

  const onSubmit = (event) => {
    event.preventDefault();
    postAnswers(answers);
  };

  return (
    <section className="survey">
      <form onSubmit={(event) => onSubmit(event)}>
        <h3 className="survey-title">Standard of living</h3>
        {questions.map((question, index) => {
          return (
            <div key={`question-${index}`} className="survey-item">
              <p className="survey-question">{`${index + 1}. ${
                question.question
              }`}</p>
              <RangeAnswer
                onGetAnswerValue={(value) => getAnswerValue(index, value)}
              />
            </div>
          );
        })}
        <button
          className="btn"
          onClick={() => {
            document.body.style.overflowY = "hidden";
            isSetShowModal((prev) => !prev);
          }}
        >
          Submit
        </button>
      </form>
      {isShowModal && <ThanksModal isSetShowModal={isSetShowModal} />}
    </section>
  );
};

export default Survey;
