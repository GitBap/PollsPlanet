import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { useParams } from "react-router-dom";
import RangeAnswer from "./RangeAnswer";
import ThanksModal from "./ThanksModal";
import { postAnswers } from "../utils/fetchDataFromDB";
import { getQuestions, getSurveys, editSurvey } from "../utils/fetchDataFromDB";

import "./styles/survey.scss";

const Survey = () => {
  const { id } = useParams();

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // FIXME: create useContext and cannot edit same questions
  const [surveys, setSurveys] = useState([]);

  const [isEditQuestion, setIsEditQuestion] = useImmer({
    surveyName: false,
    questions: [],
  });

  const [newEditedSurvey, setNewEditedSurvey] = useImmer([]);

  useEffect(() => {
    setIsEditQuestion({
      surveyName: false,
      questions: new Array(
        questions.filter(
          (question) => question?.survey_id === parseInt(id)
        ).length
      ).fill(false),
    });

    setNewEditedSurvey(
      new Array(
        questions.filter(
          (question) => question?.survey_id === parseInt(id)
        ).length
      ).fill({
        surveyName: "",
        questions: [
          {
            question: "",
            id: "",
          },
        ],
      })
    );
  }, [questions]);

  const surveyWithID = surveys.find(
    (survey) => Number(survey.id) === Number(id)
  );

  useEffect(() => {
    getQuestions(setIsLoading, setQuestions);
    getSurveys(setSurveys);
  }, []);

  return (
    <section className="survey">
      {questions && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {!isEditQuestion.surveyName ? (
            <h3
              className="survey-title"
              onDoubleClick={() => {
                setIsEditQuestion((draft) => {
                  draft.surveyName = true;
                });
              }}
            >
              {newEditedSurvey[0]?.surveyName
                ? newEditedSurvey[0]?.surveyName
                : surveyWithID?.title}
            </h3>
          ) : (
            <input
              type="text"
              value={newEditedSurvey.surveyName}
              onChange={(event) => {
                setNewEditedSurvey((draft) => {
                  for (let i = 0; i < newEditedSurvey.length; i++) {
                    draft[i].surveyName = event.target.value;
                  }
                });
              }}
              onBlur={() => {
                setIsEditQuestion((draft) => {
                  draft.surveyName = false;
                });
                editSurvey(id, newEditedSurvey[0]);
              }}
            />
          )}
          {questions
            .filter((question) => question.survey_id === parseInt(id))
            .map((question, index) => {
              return (
                <div key={`question-${index}`} className="survey-item">
                  <div>
                    <span>{index + 1}</span>
                    {!isEditQuestion.questions[index] ? (
                      <p
                        className="survey-question"
                        onDoubleClick={() => {
                          setIsEditQuestion((draft) => {
                            draft.questions[index] = true;
                          });
                        }}
                      >
                        {newEditedSurvey[index]?.questions[0]?.question
                          ? newEditedSurvey[index]?.questions[0]?.question
                          : question.question}
                      </p>
                    ) : (
                      <input
                        type="text"
                        value={newEditedSurvey[index]?.questions[0]?.question}
                        onBlur={() => {
                          setIsEditQuestion((draft) => {
                            draft.questions[index] = false;
                          });

                          const survey = newEditedSurvey.find(
                            (item) =>
                              Number(item.questions[0]?.id) ===
                              Number(question?.id)
                          );

                          console.log(survey);

                          editSurvey(id, survey);
                        }}
                        onChange={(event) => {
                          setNewEditedSurvey((draft) => {
                            draft[index].surveyName = surveyWithID?.title;
                            draft[index].questions[0].question =
                              event.target.value;
                            draft[index].questions[0].id = question.id;
                          });
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
        </form>
      )}
    </section>
  );
};

export default Survey;
