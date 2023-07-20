import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RangeAnswer from "./RangeAnswer";
import ThanksModal from "./ThanksModal";
import { postAnswers } from "../utils/fetchDataFromDB";
import { getQuestions, getSurveys } from "../utils/fetchDataFromDB";

import "./styles/survey.scss";

const Survey = () => {
  const [isShowModal, isSetShowModal] = useState(false);
  const [answers, setAnswers] = useState([]);
  const { id } = useParams();

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // FIXME: create useContext
  const [surveys, setSurveys] = useState([]);

  const surveyWithID = surveys.find(
    (survey) => Number(survey.id) === Number(id)
  );

  useEffect(() => {
    getQuestions(setIsLoading, setQuestions);
    getSurveys(setSurveys);
  }, []);

  useEffect(() => {
    setAnswers(
      questions
        .map((question) => ({
          survey_id: question.survey_id,
          question_id: question.id,
          answer: 1,
        }))
        .filter((question) => question.survey_id === parseInt(id))
    );
  }, [questions, id]);

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
      {questions && (
        <form onSubmit={(event) => onSubmit(event)}>
          <h3 className="survey-title">{surveyWithID?.title}</h3>
          {questions
            .filter((question) => question.survey_id === parseInt(id))
            .map((question, index) => {
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
      )}
      {isShowModal && <ThanksModal isSetShowModal={isSetShowModal} />}
    </section>
  );
};

export default Survey;
