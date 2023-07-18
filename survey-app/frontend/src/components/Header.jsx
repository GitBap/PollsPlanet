import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import "./styles/header.scss";

const Header = ({ theme, setTheme, isAuthenticated }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="logo-block">
            <Link to={"/"}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                viewBox="0 0 547.000000 324.000000"
              >
                <g
                  transform="translate(0.000000,324.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path
                    className="circle"
                    d="M3610 3200 c-355 -47 -674 -203 -920 -450 -136 -136 -229 -264 -305
-415 -47 -95 -125 -302 -125 -333 0 -5 17 -14 39 -19 l38 -10 23 76 c121 398
405 736 768 916 445 220 939 216 1372 -12 238 -125 413 -283 567 -513 204
-305 286 -713 218 -1093 -19 -109 -84 -305 -132 -401 -176 -349 -487 -620
-861 -750 -383 -133 -791 -106 -1164 79 -362 179 -657 530 -768 916 l-22 76
-39 -10 c-22 -5 -39 -13 -39 -18 0 -30 80 -243 125 -334 77 -154 170 -281 305
-415 223 -221 469 -355 790 -427 104 -24 135 -27 320 -27 176 0 220 3 310 22
292 63 556 199 777 399 252 228 430 562 488 919 19 115 19 373 0 488 -109 666
-600 1177 -1265 1317 -108 23 -391 34 -500 19z"
                  />
                  <path
                    d="M1090 1673 c0 -126 5 -245 10 -265 14 -49 43 -68 102 -68 47 0 48 1
48 30 0 28 -2 30 -38 30 -21 0 -43 5 -50 12 -9 9 -12 78 -12 250 l0 238 -30 0
-30 0 0 -227z"
                  />
                  <path
                    d="M1312 1644 l3 -256 28 -24 c22 -18 40 -24 78 -24 48 0 49 1 49 30 0
29 -2 30 -44 30 -31 0 -46 5 -50 16 -3 9 -6 121 -6 250 l0 234 -31 0 -30 0 3
-256z"
                  />
                  <path
                    d="M2600 1673 c0 -126 5 -245 10 -265 14 -49 43 -68 102 -68 47 0 48 1
48 30 0 28 -2 30 -38 30 -21 0 -43 5 -50 12 -9 9 -12 78 -12 250 l0 238 -30 0
-30 0 0 -227z"
                  />
                  <path
                    d="M4320 1646 l0 -253 26 -27 c25 -24 33 -26 120 -26 l94 0 0 30 0 29
-87 3 -88 3 -3 148 -3 147 91 0 90 0 0 30 0 30 -90 0 -90 0 0 70 0 70 -30 0
-30 0 0 -254z"
                  />
                  <path
                    d="M40 1600 l0 -260 25 0 c24 0 24 1 27 98 l3 97 213 5 c196 5 215 7
228 24 20 28 27 75 22 167 -3 74 -6 83 -31 105 -28 24 -30 24 -258 24 l-229 0
0 -260z m458 103 c3 -85 1 -93 -18 -103 -14 -7 -80 -10 -196 -8 -142 2 -177 6
-184 18 -11 17 -13 149 -4 174 6 14 30 16 203 14 l196 -3 3 -92z"
                  />
                  <path
                    d="M2030 1600 l0 -260 30 0 30 0 0 100 0 100 208 0 209 0 24 26 c22 24
24 33 24 136 0 108 0 110 -28 134 -28 24 -29 24 -263 24 l-234 0 0 -260z m464
184 c3 -9 6 -51 6 -94 0 -68 -3 -81 -19 -90 -26 -13 -346 -13 -372 0 -17 9
-19 22 -19 99 0 48 3 91 7 94 3 4 93 7 199 7 166 0 193 -2 198 -16z"
                  />
                  <path
                    d="M636 1734 c-26 -27 -26 -27 -26 -186 l0 -159 26 -24 c26 -24 31 -25
183 -25 177 0 193 5 211 68 13 48 13 236 0 283 -17 62 -38 69 -213 69 -153 0
-154 0 -181 -26z m329 -184 l0 -145 -145 0 -145 0 -3 134 c-1 74 0 141 2 148
4 11 37 13 148 11 l143 -3 0 -145z"
                  />
                  <path
                    d="M1564 1736 c-24 -20 -28 -33 -32 -88 -4 -58 -1 -68 21 -94 l25 -29
153 -3 c104 -2 156 -7 161 -15 9 -14 10 -69 2 -91 -9 -23 -292 -24 -300 -1 -4
9 -19 15 -35 15 -38 0 -38 -23 0 -61 l29 -29 156 0 c149 0 156 1 183 24 26 22
28 30 28 95 0 60 -3 74 -23 93 -21 21 -33 23 -180 28 l-157 5 0 55 0 55 144 3
c122 2 146 0 153 -13 5 -8 22 -15 39 -15 27 0 30 3 24 23 -4 12 -18 32 -31 45
-24 21 -33 22 -179 22 -147 0 -155 -1 -181 -24z"
                  />
                  <path
                    d="M2820 1730 l0 -30 175 0 c197 0 195 1 195 -79 l0 -41 -185 0 -185 0
0 -95 c0 -91 1 -97 26 -120 27 -25 29 -25 215 -25 l189 0 0 158 c0 86 -5 174
-10 194 -18 64 -31 68 -237 68 l-183 0 0 -30z m258 -210 l112 0 0 -60 0 -61
-152 3 -153 3 -3 57 c-3 52 -1 57 20 61 13 3 32 3 43 1 11 -2 71 -4 133 -4z"
                  />
                  <path
                    d="M3310 1550 l0 -210 30 0 30 0 2 178 3 177 150 0 150 0 3 -177 2 -178
31 0 30 0 -3 186 -3 186 -28 24 c-28 23 -32 24 -213 24 l-184 0 0 -210z"
                  />
                  <path
                    d="M3845 1736 c-32 -32 -38 -72 -34 -221 4 -125 4 -127 32 -151 28 -23
32 -24 213 -24 l184 0 0 30 0 30 -179 0 c-200 0 -191 -4 -191 76 l0 44 185 0
185 0 0 86 c0 147 -8 153 -213 154 -153 0 -159 -1 -182 -24z m333 -98 l3 -58
-156 0 -155 0 0 44 c0 80 -6 77 159 74 l146 -3 3 -57z"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contactus">Contact us</Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link to="/surveys">Surveys</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="login-btns">
            <Link className="btn" to={"/register"}>
              Sign up
            </Link>
            <Link className="btn" to={"/login"}>
              Sign in
            </Link>
          </div>
          <div className="control-btns">
            <Hamburger mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
            <button className="toggle-mode" onClick={toggleTheme}>
              {theme === "light" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </button>
          </div>
          <div
            className="mobile-menu"
            style={{
              right: mobileMenu ? "0" : "-100%",
            }}
          >
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact us</Link>
                </li>
                {isAuthenticated && (
                  <li>
                    <Link to="/surveys">Surveys</Link>
                  </li>
                )}
              </ul>
            </nav>
            <div className="login-btns">
              <Link className="btn" to={"/register"}>
                Sign up
              </Link>
              <Link className="btn" to={"/login"}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
