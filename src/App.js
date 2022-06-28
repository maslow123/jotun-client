import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConfirmRegister from "./pages/ConfirmRegister";
import Verif from "./pages/Verif";
import Home from "./pages/Home";
import { ToastContainer, toast } from 'react-toastify';

import "react-activity/dist/library.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import "./custom.scss";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Topbar /> */}
      
      <ToastContainer hideProgressBar autoClose={3000}/>                 
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/confirm-register" element={<ConfirmRegister /> } />
          <Route exact path="/verif" element={<Verif />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
