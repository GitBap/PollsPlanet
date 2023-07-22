import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { getSurveys, deleteSurvey } from "../utils/fetchDataFromDB";

import "./styles/surveys.scss";

const Surveys = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    getSurveys(setSurveys);
  }, [surveys]);

  return (
    <section className="surveys">
      <div className="container">
        <div className="heading">
          <h2>Our Surveys</h2>
          <Link to={"/create-survey"} className="btn add">
            <span className="tooltip">Create survey</span>
            <AddOutlinedIcon />
          </Link>
        </div>
        <div className="wrapper">
          {surveys.length <= 0 && <p>Looks like you don't have surveys...</p>}
          {surveys.map((survey, index) => {
            return (
              <div className="survay-item" key={`survay-${index}`}>
                <h3>{survey.title}</h3>
                <div className="control-btns">
                  <Link className="btn open" to={`/surveys/${survey.id}`}>
                    Open
                  </Link>
                  <Link to={`/edit-survey/${survey.id}`} className="btn edit">
                    Edit
                  </Link>
                  <button
                    className="btn delete"
                    onClick={() => {
                      deleteSurvey(survey.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Surveys;
