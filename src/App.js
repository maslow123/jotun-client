import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./templates/Topbar";
import Footer from "./templates/Footer";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Register2 from "./pages/Register2";
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
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register2" element={<Register2 />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
