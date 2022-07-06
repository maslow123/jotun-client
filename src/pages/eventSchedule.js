import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../BG1.svg";
export default function EventSchedule() {
  const navigate = useNavigate();

  return (
    <div className="row justify-content-center">
      <div
        className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          position: "relative",
          minHeight: "700px",
          background: `linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(0, 0, 0, 0.5)), url(${Background})`,
        }}
      >
        <nav
          className="navbar navbar-light"
          style={{
            background: "#010040",
            position: "relative",
            height: "50px",
            overflow: "hidden",
          }}
        >
          <div className="container-fluid">
            <img
              src="assets/img/logo/logo.svg"
              alt=""
              style={{
                position: "absolute",
                width: "100px",
                left: "50%",
                marginLeft: "-50px",
                display: "block",
              }}
            />
          </div>
        </nav>
        <div
          className="pt-1 px-4"
          aria-label="breadcrumb"
          style={{
            position: "relative",
            background: "white",
          }}
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item pt-2 mb-1 pb-0">
              <a onClick={() => navigate('/home')}>
                <i
                  className="fa fa-angle-left"
                  style={{ fontSize: "25px", color: "#ffc107" }}
                ></i>
              </a>
              <img
                className="img-fluid mb-2 mx-3"
                src="assets/img/icon/jadwal.png"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="text-center" style={{ fontWeight: "bold" }}>
                Jadwal Acara
              </span>
            </li>
          </ol>
        </div>
        <div className="container-fluid mt-5">
          <div
            className="text-center"
            style={{
              background: "#fff",
              borderRadius: "20px",
              marginTop: "250px",
            }}
          >
            <h4 style={{ fontWeight: "bold", color: "#000" }}>COMING SOON</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
