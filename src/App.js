import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./templates/Topbar";
import Footer from "./templates/Footer";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import "./App.css";
import "./custom.scss";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Topbar /> */}
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
