import React from "react";
// import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import * as EmailValidator from "email-validator";

import "./styles/register.scss";

const Register = () => {
  // const navigate = useNavigate();

  const [userInfo, setUserInfo] = useImmer({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isValidate, setIsValidate] = useImmer({
    showInvalidEmail: false,
    showInvalidPassword: false,
    showInvalidName: false,
    showInvalidComparePasswords: false,
  });

  const validate =
    userInfo.email &&
    !isValidate.showInvalidEmail &&
    !isValidate.showInvalidPassword &&
    userInfo.password === userInfo.confirmPassword &&
    userInfo.name.length >= 4 &&
    userInfo.password.length > 8;

  const handleInput = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <section className="register">
      <div className="container">
        <div className="wrapper">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setUserInfo({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
              console.log(userInfo);
            }}
          >
            <h2 className="form-title">Create an Account</h2>
            <div className="input-box">
              <PersonOutlineOutlinedIcon />
              <input
                className="input-text"
                value={userInfo.name}
                onChange={handleInput}
                onBlur={() => {
                  setIsValidate((draft) => {
                    draft.showInvalidName = userInfo.name.length < 2;
                  });
                }}
                name="name"
                type="text"
                placeholder="Name"
                required
              />
              {isValidate.showInvalidName && (
                <p className="error">
                  <ErrorOutlineOutlinedIcon />
                  <span>Name is not valid</span>
                </p>
              )}
            </div>
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
                  <span>Invalid email</span>
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
                  <span>Invalid password</span>
                </p>
              )}
            </div>
            <div className="input-box">
              <HttpsOutlinedIcon />
              <input
                className="input-text"
                value={userInfo.confirmPassword}
                name="confirmPassword"
                onChange={handleInput}
                onBlur={() => {
                  setIsValidate((draft) => {
                    draft.showInvalidComparePasswords =
                      userInfo.password !== userInfo.confirmPassword;
                  });
                }}
                type="password"
                placeholder="Confirm password"
                required
                disabled={isValidate.showInvalidPassword}
              />
              {isValidate.showInvalidComparePasswords && (
                <p className="error">
                  <ErrorOutlineOutlinedIcon />
                  <span>Passwords mismatch</span>
                </p>
              )}
            </div>
            <button
              disabled={!validate}
              className="btn"
              type="submit"
              onClick={() => {
                // navigate("/login");
              }}
            >
              Sign Up
            </button>
          </form>
          <div className="greeting">
            <h3>Welcome Back!</h3>
            <p>To keep connected with us please login with your credentials.</p>
            <Link className="btn" to="/login">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
