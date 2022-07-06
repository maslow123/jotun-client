import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../BG1.svg";
export default function Doorprize() {
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
          background: `url(${Background})`,
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
              <a onClick={() => navigate("/home")}>
                <i
                  className="fa fa-angle-left"
                  style={{ fontSize: "25px", color: "#ffc107" }}
                ></i>
              </a>
              <img
                className="img-fluid mb-2 mx-3"
                src="assets/img/icon/doorprize.png"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="text-center" style={{ fontWeight: "bold" }}>
                Pemenang Undian
              </span>
            </li>
          </ol>
        </div>
        <div
          className="crd2 px-3"
          style={{ maxHeight: "600px", overflowY: "scroll" }}
        >
          <div className="row mt-2 mb-2">
            <div className="col-12">
              <img
                src="assets/img/general/700jt.png"
                className="img-fluid"
                style={{ width: "100%", position: "relative" }}
                alt=""
              />
            </div>
          </div>
          <div className="row justify-content-center mb-1">
            <div
              className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-5"
              style={{ padding: 5 }}
            >
              <div
                className="card"
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <div className="text-center my-3">
                  <img
                    src="assets/img/general/nmax.jpeg"
                    alt=""
                    width={150}
                    height={100}
                  />
                </div>
                <div className="mx-2 my-1">
                  <div className="text-center">
                    <p
                      className="mb-2"
                      style={{ fontWeight: "normal", fontSize: "11px" }}
                    >
                      <b>2</b> Yamaha N-MAX
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-5"
              style={{ padding: 5 }}
            >
              <div
                className="card"
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <div className="text-center my-3">
                  <img
                    src="assets/img/general/nmax.jpeg"
                    alt=""
                    width={150}
                    height={100}
                  />
                </div>
                <div className="mx-2 my-1">
                  <div className="text-center">
                    <p
                      className="mb-2"
                      style={{ fontWeight: "normal", fontSize: "11px" }}
                    >
                      <b>2</b> Yamaha N-MAX
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-5"
              style={{ padding: 5 }}
            >
              <div
                className="card"
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <div className="text-center my-3">
                  <img
                    src="assets/img/general/nmax.jpeg"
                    alt=""
                    width={150}
                    height={100}
                  />
                </div>
                <div className="mx-2 my-1">
                  <div className="text-center">
                    <p
                      className="mb-2"
                      style={{ fontWeight: "normal", fontSize: "11px" }}
                    >
                      <b>2</b> Yamaha N-MAX
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-5"
              style={{ padding: 5 }}
            >
              <div
                className="card"
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <div className="text-center my-3">
                  <img
                    src="assets/img/general/nmax.jpeg"
                    alt=""
                    width={150}
                    height={100}
                  />
                </div>
                <div className="mx-2 my-1">
                  <div className="text-center">
                    <p
                      className="mb-2"
                      style={{ fontWeight: "normal", fontSize: "11px" }}
                    >
                      <b>2</b> Yamaha N-MAX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
