import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import Surveys from "./components/Surveys";
import Survey from "./components/Survey";
import Register from "./components/Register";
import Login from "./components/Login";

import Auth from "./components/Auth";
import Cookies from "js-cookie";
import CreateSurvey from "./components/CreateSurvey";
import EditSurvey from "./components/EditSurvey";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const readCookies = () => {
    const userCookies = Cookies.get("login-session");

    if (userCookies) {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    const receiveTheme = window.localStorage.getItem("theme");
    if (receiveTheme !== null) setTheme(JSON.parse(receiveTheme));

    readCookies();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="website">
      <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <HelmetProvider>
          <Header
            theme={theme}
            setTheme={setTheme}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route
                path="/register"
                element={!isAuthenticated && <Register />}
              />
              <Route
                path="/login"
                element={
                  !isAuthenticated && (
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  )
                }
              />
              <Route path="/surveys" element={isAuthenticated && <Surveys />} />
              <Route path="/surveys/:id" element={<Survey />} />
              <Route
                path="/edit-survey/:id"
                element={isAuthenticated && <EditSurvey />}
              />
              <Route
                path="/create-survey"
                element={isAuthenticated && <CreateSurvey />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </HelmetProvider>
      </Auth.Provider>
    </div>
  );
};

export default App;
