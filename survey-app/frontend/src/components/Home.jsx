import React from "react";

import "./styles/home.scss";

const Home = () => {
  return (
    <section className="home">
      <h1 className="typed-out">Create polls at the click of a button</h1>
      <p>
        Welcome to our survey website, where your opinions count! Start sharing
        your perspectives today and make a meaningful impact with us.
      </p>
      <button className="btn">Get started</button>
    </section>
  );
};

export default Home;
