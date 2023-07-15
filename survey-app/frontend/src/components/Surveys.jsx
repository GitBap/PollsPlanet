import React from "react";
import Survey from "./Survey";

import "./styles/surveys.scss";

const Surveys = () => {
  return (
    <section className="surveys">
      <h2>Our Surveys</h2>
      <div className="wrapper">
        <Survey />
      </div>
    </section>
  );
};

export default Surveys;
