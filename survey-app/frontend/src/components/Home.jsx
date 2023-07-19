import React, { useState } from "react";
import SEO from "./SEO";

import "./styles/home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const [surveyToken, setSurveyToken] = useState("");

  return (
    <section className="home">
      <SEO />
      <div className="container">
        <h1 className="typed-out">Create polls at the click of a button</h1>
        <p>
          Welcome to our survey website, where your opinions count! Start
          sharing your perspectives today and make a meaningful impact with us.
        </p>
        <Link to={"/register"} className="btn">
          Get started
        </Link>
        <p className="token-title">Do you have a token?</p>
        <form
          action={`http://localhost:3000/survey/${surveyToken}`}
          method="get"
        >
          <input
            className="input-text"
            onChange={(event) => {
              setSurveyToken(event.target.value);
            }}
            type="text"
            value={surveyToken}
            placeholder="Enter your token here..."
          />
          <button className="btn" type="submit">
            Go
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
