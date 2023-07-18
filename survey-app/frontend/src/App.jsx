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

const App = () => {
  const [theme, setTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const receiveTheme = window.localStorage.getItem("theme");
    if (receiveTheme !== null) setTheme(JSON.parse(receiveTheme));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="website">
      <HelmetProvider>
        <Header
          theme={theme}
          setTheme={setTheme}
          isAuthenticated={isAuthenticated}
        />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/surveys" element={isAuthenticated && <Surveys />} />
            <Route path="/surveys/:id" element={<Survey />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </HelmetProvider>
    </div>
  );
};

export default App;
