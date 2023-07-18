import React, { useEffect, useState } from "react";
import RangeAnswer from "./RangeAnswer";
import ThanksModal from "./ThanksModal";

import "./styles/survey.scss";

const Survey = ({ questions }) => {
  const [isShowModal, isSetShowModal] = useState(false);

  // FIXME: after refresh modal state have to safe to local storage
  // useEffect(() => {
  //   const receiveIsModal = window.localStorage.getItem("modal");
  //   if (receiveIsModal !== null) isSetShowModal(receiveIsModal);
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("modal", isShowModal);
  // }, [isShowModal]);

  return (
    <section
      className="survey"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
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
