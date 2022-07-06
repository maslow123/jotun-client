import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import ConfirmRegister from "./pages/ConfirmRegister";
import ContestRegister from "./pages/ContestRegister";
import Maps from "./pages/Maps";
import EventSchedule from "./pages/eventSchedule";
import Verif from "./pages/Verif";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";

import "react-activity/dist/library.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./custom.scss";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Topbar /> */}

      <ToastContainer hideProgressBar autoClose={3000} />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/confirm-register" element={<ConfirmRegister />} />
        <Route exact path="/verif" element={<Verif />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contest-register" element={<ContestRegister />} />
        <Route exact path="/maps" element={<Maps />} />
        <Route exact path="/event-schedule" element={<EventSchedule />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
