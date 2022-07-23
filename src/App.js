import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import ConfirmRegister from "./pages/ConfirmRegister";
import ContestRegister from "./pages/ContestRegister";
import Maps from "./pages/Maps";
import EventSchedule from "./pages/eventSchedule";
import Doorprize from "./pages/Doorprize";
import RaffleWinner from "./pages/raffleWinner";
import Verif from "./pages/Verif";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";

import "react-activity/dist/library.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./custom.scss";
import Test from "./pages/Test";
import SuccessPhoto from "./pages/scan/success/Photo";
import ErrorPhoto from "./pages/scan/error/Photo";
import IddlePhoto from "./pages/scan/iddle/Photo";

import SuccessSnack from "./pages/scan/success/Snack";
import ErrorSnack from "./pages/scan/error/Snack";
import IddleSnack from "./pages/scan/iddle/Snack";

import SuccessSchool from "./pages/scan/success/School";
import ErrorSchool from "./pages/scan/error/School";
import IddleSchool from "./pages/scan/iddle/School";

import SuccessPlaying from "./pages/scan/success/Playing";
import ErrorPlaying from "./pages/scan/error/Playing";
import IddlePlaying from "./pages/scan/iddle/Playing";

import SuccessSouvenir from "./pages/scan/success/Souvenir";
import ErrorSouvenir from "./pages/scan/error/Souvenir";
import IddleSouvenir from "./pages/scan/iddle/Souvenir";

import SuccessVideo from "./pages/scan/success/Video";
import ErrorVideo from "./pages/scan/error/Video";
import IddleVideo from "./pages/scan/iddle/Video";

import SuccessWelcome from "./pages/scan/success/Welcome";
import SuccessWelcomeBack from "./pages/scan/success/WelcomeBack";
import ErrorWelcome from "./pages/scan/error/Welcome";
import IddleWelcome from "./pages/scan/iddle/Welcome";
import Topbar from "./templates/Topbar";
import Sidebar from "./templates/Sidebar";
import Dashboard from "./pages/cms/Dashboard";
import LoginCMS from "./pages/cms/Login";

const App = () => {
  const [url, setUrl] = useState();
  useEffect(() => {
    setUrl(window.location.pathname);
    var menu_btn = document.querySelector("#menu-btn");
    var sidebar = document.querySelector("#sidebar");
    var container = document.querySelector(".my-container");
    if (menu_btn) {
      menu_btn.addEventListener("click", () => {
        sidebar.classList.toggle("active-nav");
        container.classList.toggle("active-cont");
      });
    }
  });
  return (
    <BrowserRouter>
      <ToastContainer hideProgressBar autoClose={3000} />
      {url === "/dashboard" ? (
        <>
          <Sidebar />
          <div className="p-1 my-container active-cont">
            <Topbar />
            <Routes>
              <Route exact path="/test" element={<Test />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/helpdesk" element={<LoginCMS />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/logout" element={<Logout />} />
            {/* <Route exact path="/register" element={<Register />} /> */}
            <Route
              exact
              path="/confirm-register"
              element={<ConfirmRegister />}
            />
            <Route exact path="/verif" element={<Verif />} />
            <Route exact path="/home" element={<Home />} />
            <Route
              exact
              path="/contest-register"
              element={<ContestRegister />}
            />
            <Route exact path="/maps" element={<Maps />} />
            <Route exact path="/event-schedule" element={<EventSchedule />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/doorprize" element={<Doorprize />} />
            <Route exact path="/raffle-winner" element={<RaffleWinner />} />

            <Route
              exact
              path="/venue/photo/success"
              element={<SuccessPhoto />}
            />
            <Route exact path="/venue/photo/error" element={<ErrorPhoto />} />
            <Route exact path="/venue/iddle-photo" element={<IddlePhoto />} />

            <Route
              exact
              path="/venue/snack/success"
              element={<SuccessSnack />}
            />
            <Route exact path="/venue/snack/error" element={<ErrorSnack />} />
            <Route exact path="/venue/iddle-snack" element={<IddleSnack />} />

            <Route
              exact
              path="/venue/school/success"
              element={<SuccessSchool />}
            />
            <Route exact path="/venue/school/error" element={<ErrorSchool />} />
            <Route exact path="/venue/iddle-school" element={<IddleSchool />} />

            <Route
              exact
              path="/venue/playing/success"
              element={<SuccessPlaying />}
            />
            <Route
              exact
              path="/venue/playing/error"
              element={<ErrorPlaying />}
            />
            <Route
              exact
              path="/venue/iddle-playing"
              element={<IddlePlaying />}
            />

            <Route
              exact
              path="/venue/souvenir/success"
              element={<SuccessSouvenir />}
            />
            <Route
              exact
              path="/venue/souvenir/error"
              element={<ErrorSouvenir />}
            />
            <Route
              exact
              path="/venue/iddle-souvenir"
              element={<IddleSouvenir />}
            />

            <Route
              exact
              path="/venue/video/success"
              element={<SuccessVideo />}
            />
            <Route exact path="/venue/video/error" element={<ErrorVideo />} />
            <Route exact path="/venue/iddle-video" element={<IddleVideo />} />

            <Route
              exact
              path="/venue/welcome/success"
              element={<SuccessWelcome />}
            />
            <Route
              exact
              path="/venue/welcomeback/success"
              element={<SuccessWelcomeBack />}
            />
            <Route
              exact
              path="/venue/welcome/error"
              element={<ErrorWelcome />}
            />
            <Route
              exact
              path="/venue/iddle-welcome"
              element={<IddleWelcome />}
            />
            <Route exact path="/test" element={<Test />} />
          </Routes>
        </>
      )}
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
