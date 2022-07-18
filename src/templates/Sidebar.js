import React from "react";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
        id="sidebar"
      >
        <ul className="nav flex-column text-white w-100">
          <a
            onClick={() => navigate("/dashboard")}
            className="nav-link h3 text-white my-2"
          >
            <div className="text-center">
              <img src="assets/img/logo/logo.svg" />
            </div>
          </a>
          <li className="nav-link" onClick={() => navigate("/dashboard")}>
            <i className="fa fa-dashboard"></i>
            <span className="mx-3">Dashboard</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
