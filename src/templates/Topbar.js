import React from "react";
import { useNavigate } from "react-router-dom";
export default function Topbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar top-navbar navbar-light bg-light px-5">
        <a className="btn border-0" id="menu-btn">
          <i className="fa fa-list"></i>
        </a>
        <a
          onClick={() => navigate("/helpdesk")}
          className="btn border-0"
          style={{ float: "right" }}
        >
          Logout <i className="fa fa-sign-out mx-2"></i>
        </a>
      </nav>
    </div>
  );
}
