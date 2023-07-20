import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { getSurveys } from "../utils/fetchDataFromDB";

import "./styles/surveys.scss";

const Surveys = () => {
  const [surveys, setSurvays] = useState([]);

  useEffect(() => {
    getSurveys(setSurvays);
  }, []);

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
                  <button className="btn edit">Edit</button>
                  <button className="btn delete">Delete</button>
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
