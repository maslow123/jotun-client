import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./templates/Topbar";
import Footer from "./templates/Footer";

import LandingPage from "./pages/LandingPage";
import "./App.css";
import "./custom.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
