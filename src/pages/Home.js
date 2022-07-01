import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("user"));
  //   if (!data) {
  //     navigate('/login');
  //     return
  //   }
  //   setUser({ ...data });
  // };, []);
  return (
    <div className="row justify-content-center">
      <div
        className="col-xs-12 col-sm-12 col-md-3 col-lg-3"
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "clip",
          position: "relative",
          minHeight: "700px",
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
        <img
          src="assets/img/BG1.svg"
          className="img-fluid"
          style={{ backgroundRepeat: "no-repeat", position: "absolute" }}
          alt=""
        />
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-12">
              <img
                src="assets/img/general/KV.svg"
                className="img-fluid"
                style={{ width: "100%", position: "relative" }}
                alt=""
              />
            </div>
            <div className="col-12 mt-3 mb-2">
              <div className="card mx-2" style={{ borderRadius: "8px" }}>
                <div className="mx-4 my-2">
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
                    className="mb-0"
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
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="d-flex justify-content-center mb-1">
              <div
                className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
                style={{ marginRight: 3, padding: 0 }}
              >
                <div
                  className="card"
                  style={{ borderRadius: "8px", minWidth: "100%" }}
                >
                  <div style={{ padding: 5 }}>
                    <img
                      src="assets/img/home/grid1.svg"
                      className="img-fluid"
                      alt=""
                      style={{ maxHeight: "100px" }}
                    />
                  </div>
                  <div className="mx-2 my-1">
                    <p
                      className="mb-1"
                      style={{ fontWeight: "bold", fontSize: "12px" }}
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
                  </div>
                </div>
              </div>
              <div
                className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
                style={{ marginLeft: 3, padding: 0 }}
              >
                <div
                  className="card"
                  style={{ borderRadius: "8px", minWidth: "100%" }}
                >
                  <div style={{ padding: 5 }}>
                    <img
                      src="assets/img/home/grid2.svg"
                      className="img-fluid"
                      alt=""
                      style={{ maxHeight: "100px" }}
                    />
                  </div>
                  <div className="mx-2 my-1">
                    <p
                      className="mb-1"
                      style={{ fontWeight: "bold", fontSize: "12px" }}
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
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div
                className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
                style={{ marginRight: 3, padding: 0 }}
              >
                <div
                  className="card"
                  style={{ borderRadius: "8px", minWidth: "100%" }}
                >
                  <div style={{ padding: 5 }}>
                    <img
                      src="assets/img/home/grid3.svg"
                      className="img-fluid"
                      alt=""
                      style={{ maxHeight: "100px" }}
                    />
                  </div>
                  <div className="mx-2 my-1">
                    <a
                      href="/contest-register"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p
                        className="mb-1"
                        style={{ fontWeight: "bold", fontSize: "12px" }}
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
              <div
                className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
                style={{ marginLeft: 3, padding: 0 }}
              >
                <div
                  className="card"
                  style={{ borderRadius: "8px", minWidth: "100%" }}
                >
                  <div style={{ padding: 5 }}>
                    <img
                      src="assets/img/home/grid4.svg"
                      className="img-fluid"
                      alt=""
                      style={{ maxHeight: "100px" }}
                    />
                  </div>
                  <div className="mx-2 my-1">
                    <p
                      className="mb-1"
                      style={{ fontWeight: "bold", fontSize: "12px" }}
                    >
                      Doorprize
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
      </div>
    </div>
  );
}
