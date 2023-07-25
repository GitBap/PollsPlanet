import React, { useEffect } from "react";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { createSurvey } from "../utils/fetchDataFromDB";

import { getUsers } from "../utils/fetchDataFromDB";

import "./styles/createSurvey.scss";

const CreateSurvey = ({ userInfo }) => {
  const [question, setQuestion] = useImmer("");
  const [isExistQuestion, setIsExistQuestion] = useImmer(false);
  // TODO: add useContext
  const [users, setUsers] = useImmer([]);

  const connectUserId = users.find(
    (user) => user?.email === userInfo?.email
  )?.id;

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  const navigate = useNavigate();

  const [newSurvey, setNewSurvey] = useImmer({
    surveyName: "",
    user_id: 1,
    questions: [],
  });

  const addQuestion = () => {
    const isExistQuestion = newSurvey?.questions?.find(
      (item) => item.toLowerCase().trim() === question.toLowerCase().trim()
    );

    if (isExistQuestion) {
      setIsExistQuestion(true);
      return;
    }

    setIsExistQuestion(false);

    if (question.trim() !== "") {
      setNewSurvey((draft) => {
        draft.questions.push(question);
      });

      setQuestion("");
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!newSurvey.surveyName) {
      return;
    }

    if (newSurvey.questions.length <= 0) {
      return;
    }

    createSurvey(newSurvey);

    setNewSurvey((draft) => {
      draft.surveyName = "";
      draft.questions = [];
    });

    navigate("/surveys");
  };

  return (
    <section className="create-survey">
      <div className="container">
        <h2>Create survey</h2>
        <div className="wrapper">
          <form onSubmit={(event) => onSubmit(event)}>
            <div className="input-block">
              <label htmlFor="title">Survay title</label>
              <input
                className="input-text"
                type="text"
                name="title"
                id="title"
                value={newSurvey.surveyName}
                onChange={(event) => {
                  setNewSurvey((draft) => {
                    draft.surveyName = event.target.value;
                    draft.user_id = Number(connectUserId);
                  });
                }}
              />
              {!newSurvey.surveyName && (
                <p className="field-error">
                  <ErrorOutlineOutlinedIcon />
                  <span>Cannot be empty</span>
                </p>
              )}
            </div>
            <div className="question-block">
              <div className="input-block">
                <label htmlFor="question">Survay question</label>
                <div className="button-block">
                  <input
                    className="input-text"
                    type="text"
                    name="question"
                    id="question"
                    value={question}
                    onChange={(event) => {
                      setQuestion(event.target.value);
                    }}
                  />
                  <button className="btn" type="button" onClick={addQuestion}>
                    Add question
                  </button>
                  {newSurvey.questions.length === 0 && (
                    <p className="field-error">
                      <ErrorOutlineOutlinedIcon />
                      <span>Cannot be empty</span>
                    </p>
                  )}
                  {isExistQuestion && (
                    <p className="field-error">
                      <ErrorOutlineOutlinedIcon />
                      <span>Question exist</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <button className="btn" type="submit">
              Add survey
            </button>
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
