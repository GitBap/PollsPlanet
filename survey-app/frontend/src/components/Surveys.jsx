import React, { useState, useEffect } from "react";
import Survey from "./Survey";
import { Link } from "react-router-dom";

import { getQuestions, getSurveys } from "../utils/fetchDataFromDB";

import "./styles/surveys.scss";

const Surveys = () => {
  const [surveys, setSurvays] = useState([]);

  useEffect(() => {
    getSurveys(setSurvays);
  }, []);

  return (
    <section className="surveys">
      <div className="container">
        <h2>Our Surveys</h2>
        <div className="wrapper">
          {surveys.map((survey, index) => {
            return (
              <div key={`survay-${index}`}>
                <h3>
                  {survey.title} with id {survey.id}
                </h3>
                <Link to={`/surveys/${survey.id}`}>Open</Link>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Surveys;
