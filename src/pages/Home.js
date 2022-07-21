import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../BG1.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CITY } from "./utils/constants";
export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (!data) {
      navigate("/login");
      return;
    }
    setUser({ ...data });
  }, []);
  return (
    <div className="row justify-content-center">
      <div
        className="bg-mobile col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-12"
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "clip",
          position: "relative",
          minHeight: "1008px",
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
              onClick={() => navigate("/")}
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
        <div className="container-fluid">
          <div className="row justify-content-center mt-2">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
              <img
                src="assets/img/general/KV.png"
                className="img-fluid"
                style={{ width: "100%", position: "relative" }}
                alt=""
              />
            </div>
            <div className="row justify-content-center mt-2">
              <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-3 mb-2">
                <div className="card" style={{ borderRadius: "8px" }}>
                  <div className="mx-4 my-2">
                    <a
                      onClick={() => navigate("/profile")}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <div>
                        <span
                          style={{ float: "right", textAlign: "right" }}
                          className="mt-3"
                        >
                          <i
                            className="fa fa-angle-right "
                            style={{ fontSize: "20px" }}
                          ></i>
                        </span>
                        <p
                          className="mb-0"
                          style={{
                            fontWeight: "bold",
                            fontSize: "13px",
                          }}
                        >
                          Hai, {user.name}
                        </p>

                        <p
                          className="mb-1"
                          style={{
                            fontWeight: "bold",
                            fontSize: "13px",
                            color: "#010040",
                            textTransform: "uppercase",
                          }}
                        >
                          Lihat profile
                        </p>
                      </div>
                    </a>
                    <div className="text-center">
                      <a
                        href="https://bit.ly/3aSl8Xq"
                        target="_blank"
                        // data-bs-toggle="modal"
                        // data-bs-target="#doModal"
                        className="btn btn-lg"
                        style={{
                          paddingTop: "7px",
                          paddingBottom: "7px",
                          background: "#f9af02",
                          textTransform: "uppercase",
                          fontSize: "13px",
                          fontWeight: "800",
                        }}
                      >
                        Do<small>s</small> & DONT'<small>s</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-1">
            {user?.branches === Number(CITY.Jakarta) && (
              <div
                onClick={() => navigate("/maps")}
                className="col-5 col-xs-5 col-sm-5 col-md-5 col-lg-2 col-xl-2"
                style={{ marginRight: 3, padding: 0 }}
              >
                <div
                  className="card p-1"
                  style={{
                    borderRadius: "8px",
                    maxWidth: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className="text-center">
                    <img
                      src="assets/img/home/grid1.png"
                      alt=""
                      width={150}
                      height={100}
                    />
                  </div>
                  <div className="mx-2 my-1">
                    <a style={{ textDecoration: "none", color: "#000" }}>
                      <p
                        className="mb-0"
                        style={{ fontWeight: "bold", fontSize: "11px" }}
                      >
                        Denah Acara
                        <span
                          style={{ float: "right", textAlign: "right" }}
                          className="mr-5"
                        >
                          <i
                            className="fa fa-angle-right "
                            style={{ fontSize: "20px" }}
                          ></i>
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            )}
            <div
              className="col-5 col-xs-5 col-sm-5 col-md-5 col-lg-2 col-xl-2"
              style={{ marginLeft: 3, padding: 0 }}
            >
              <div
                onClick={() => navigate("/event-schedule")}
                className="card p-1"
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <div className="text-center">
                  <img
                    src="assets/img/home/grid2.png"
                    alt=""
                    width={150}
                    height={100}
                  />
                </div>
                <div className="mx-2 my-1">
                  <a style={{ textDecoration: "none", color: "#000" }}>
                    <p
                      className="mb-0"
                      style={{ fontWeight: "bold", fontSize: "11px" }}
                    >
                      Jadwal Acara
                      <span
                        style={{ float: "right", textAlign: "right" }}
                        className="mr-5"
                      >
                        <i
                          className="fa fa-angle-right "
                          style={{ fontSize: "20px" }}
                        ></i>
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            {user?.branches === Number(CITY.Jakarta) && (
              <div
                className="col-5 col-xs-5 col-sm-5 col-md-5 col-lg-2 col-xl-2"
                style={{ marginRight: 3, padding: 0 }}
              >
                <div
                  onClick={() => navigate("/contest-register")}
                  className="card p-1"
                  style={{
                    borderRadius: "8px",
                    maxWidth: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className="text-center">
                    <img
                      src="assets/img/home/grid3.png"
                      alt=""
                      width={150}
                      height={100}
                    />
                  </div>
                  <div className="mx-2 my-1">
                    <a style={{ textDecoration: "none", color: "#000" }}>
                      <p
                        className="mb-0"
                        style={{ fontWeight: "bold", fontSize: "11px" }}
                      >
                        Daftar Lomba
                        <span
                          style={{ float: "right", textAlign: "right" }}
                          className="mr-5"
                        >
                          <i
                            className="fa fa-angle-right "
                            style={{ fontSize: "20px" }}
                          ></i>
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            )}
            <div
              className="col-5 col-xs-5 col-sm-5 col-md-5 col-lg-2 col-xl-2"
              style={{ marginLeft: 3, padding: 0 }}
            >
              <div
                onClick={() => navigate("/doorprize")}
                className="card p-1"
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <div className="text-center">
                  <img
                    src="assets/img/home/grid4.png"
                    alt=""
                    width={150}
                    height={100}
                  />
                </div>
                <div className="mx-2 my-1">
                  <p
                    className="mb-0"
                    style={{ fontWeight: "bold", fontSize: "10.5px" }}
                  >
                    Pemenang Undian
                    <span
                      style={{ float: "right", textAlign: "right" }}
                      className="mr-5"
                    >
                      <i
                        className="fa fa-angle-right "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal"
        id="doModal"
        tabindex="-1"
        aria-labelledby="doModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ top: "100px" }}>
          <div className="modal-content">
            <div className="modal-body p-0 px-0">
              <button
                type="button"
                className="btn-close px-3 py-3"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ float: "right", textAlign: "right" }}
              ></button>
              <img src="/assets/img/general/do.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
