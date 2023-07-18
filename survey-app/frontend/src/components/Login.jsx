import React from "react";
import { useImmer } from "use-immer";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import * as EmailValidator from "email-validator";

import "./styles/login.scss";

const Login = () => {
  const [userInfo, setUserInfo] = useImmer({
    email: "",
    password: "",
  });

  const [isValidate, setIsValidate] = useImmer({
    showInvalidEmail: false,
    showInvalidPassword: false,
  });

  const validate =
    userInfo.email &&
    !isValidate.showInvalidEmail &&
    !isValidate.showInvalidPassword &&
    userInfo.password.length > 6;

  const handleInput = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <section className="login">
      <div className="container">
        <div className="wrapper">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(userInfo);
            }}
          >
            <h2 className="form-title">Create account</h2>
            <div className="input-box">
              <EmailOutlinedIcon />
              <input
                className="input-text"
                value={userInfo.email}
                onChange={handleInput}
                onBlur={() => {
                  setIsValidate((draft) => {
                    draft.showInvalidEmail = !EmailValidator.validate(
                      userInfo?.email
                    );
                  });
                }}
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              {isValidate.showInvalidEmail && (
                <p className="error">
                  <ErrorOutlineOutlinedIcon />
                  <span>Email is not valid</span>
                </p>
              )}
            </div>
            <div className="input-box">
              <HttpsOutlinedIcon />
              <input
                className="input-text"
                value={userInfo.password}
                name="password"
                onChange={handleInput}
                onBlur={() => {
                  setIsValidate((draft) => {
                    draft.showInvalidPassword = userInfo.password.length <= 6;
                  });
                }}
                type="password"
                placeholder="Password"
                required
              />
              {isValidate.showInvalidPassword && (
                <p className="error">
                  <ErrorOutlineOutlinedIcon />
                  <span>Password is not valid</span>
                </p>
              )}
            </div>
            <button disabled={!validate} className="btn" type="submit">
              Sign In
            </button>
          </form>
          <div className="greeting">
            <h3>Hello, friend!</h3>
            <p>Enter your personal details and start journey with us.</p>
            <Link className="btn" to="/register">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
