import React, { useState, useEffect } from "react";
import Survey from "./Survey";

import { getQuestions } from "../utils/getQuestions";

import "./styles/surveys.scss";

const Surveys = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions(setIsLoading, setQuestions);
  }, []);

  console.log(questions);

  return (
    <section className="surveys">
      <div className="container">
        <h2>Our Surveys</h2>
        <div className="wrapper">
          {isLoading || questions.length === 0 ? (
            <h3 className="loading">Loading...</h3>
          ) : (
            <Survey questions={questions} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Surveys;
