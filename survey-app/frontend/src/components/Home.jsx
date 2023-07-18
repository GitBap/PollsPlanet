import React, { useState } from "react";
import SEO from "./SEO";

import "./styles/home.scss";
import { Link } from "@mui/material";

const Home = () => {
  const [userToken, setUserToken] = useState("");

  return (
    <section className="home">
      <SEO />
      <div className="container">
        <h1 className="typed-out">Create polls at the click of a button</h1>
        <p>
          Welcome to our survey website, where your opinions count! Start
          sharing your perspectives today and make a meaningful impact with us.
        </p>
        <button className="btn">Get started</button>
        <p className="token-title">Do you have a token?</p>
        <form action={`http://localhost:3000/survey/${userToken}`} method="get">
          <input
            onChange={(event) => {
              setUserToken(event.target.value);
            }}
            type="text"
            value={userToken}
            placeholder="Your token here..."
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
