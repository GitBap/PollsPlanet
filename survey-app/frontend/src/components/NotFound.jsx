import React from "react";
import { Link } from "react-router-dom";

import "./styles/notFound.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <p className="error-text">404</p>
        <h2>Seems like you have lost</h2>
        <p>
          You can <Link to={"/"}>go to the main page</Link> or try to{" "}
          <Link to={"/contactus"}> write to us</Link>.
        </p>
        <p className="extra-text">Don't panic!</p>
      </div>
    </section>
  );
};

export default NotFound;
