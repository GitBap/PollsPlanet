import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <p>Copyright © 2023</p>
          <p>
            <span>View </span>
            <Link
              target="_blank"
              to={"https://github.com/PaoloJr90/PollsPlanet"}
            >
              code
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
