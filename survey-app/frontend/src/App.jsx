import React, { useState, useEffect } from "react";
import { Route, Routes, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import Surveys from "./components/Surveys";
import Survey from "./components/Survey";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="website">
      <Header theme={theme} setTheme={setTheme} />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/surveys" element={<Surveys />} />
          <Route path="/surveys/:id" element={<Survey />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
