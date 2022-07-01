import React, { useEffect, useState } from "react";
export default function ContestRegister() {
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
          paddingBottom: "50px",
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
          style={{
            backgroundRepeat: "no-repeat",
            position: "absolute",
          }}
          alt=""
        />
        <nav
          className="pt-1 px-4"
          aria-label="breadcrumb"
          style={{
            position: "relative",
            background: "white",
          }}
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item pt-2 mb-1 pb-0">
              <i
                className="fa fa-angle-left"
                style={{ fontSize: "25px", color: "#ffc107" }}
              ></i>
              <img
                className="img-fluid mb-2 mx-3"
                src="assets/img/icon/gift.svg"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="text-center" style={{ fontWeight: "bold" }}>
                Daftar Lomba
              </span>
            </li>
          </ol>
        </nav>
        <div className="container-fluid mt-5">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-touch="true"
            data-interval="false"
            style={{
              // position: "absolute",

              marginTop: "-15px",
            }}
          >
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators" style={{ marginTop: "-20px" }}>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  marginBottom: "-100px",
                }}
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  marginBottom: "-100px",
                }}
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                style={{ marginRight: "50px" }}
              >
                <div className="card p-1" style={{ borderRadius: "8px" }}>
                  <div className="card-body">
                    <p style={{ fontWeight: "bold", marginBottom: "-8px" }}>
                      Lomba Mewarnai
                    </p>
                    <small className="text-muted" style={{ fontSize: "12px" }}>
                      Berlaku untuk usia 0 - 15 Tahun{" "}
                    </small>
                    <div className="row">
                      <div className="col-12">
                        <img
                          src="assets/img/general/painting.svg"
                          className="mt-3"
                          style={{
                            backgroundRepeat: "no-repeat",
                            borderRadius: "10px",
                            height: "150px",
                          }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-9" style={{ paddingRight: "0" }}>
                        <div className="text-center d-grid">
                          <button
                            className="btn btn-warning btn-lg mt-3 btn-block"
                            style={{
                              paddingTop: "10px",
                              paddingBottom: "10px",
                              background: "#f9af02",
                              textTransform: "uppercase",
                              fontSize: "13px",
                              fontWeight: "800",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            DAFTAR
                          </button>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="text-center d-grid">
                          <button
                            className="btn btn-lg mt-3 btn-block"
                            style={{
                              paddingTop: "10px",
                              paddingBottom: "10px",
                              textTransform: "uppercase",
                              fontSize: "13px",
                              fontWeight: "800",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <i
                              className="fa fa-eye"
                              style={{ fontSize: "20px", color: "#d8d8d8" }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card p-1" style={{ borderRadius: "8px" }}>
                  <div className="card-body">
                    <p style={{ fontWeight: "bold", marginBottom: "-8px" }}>
                      Lomba Mewarnai
                    </p>
                    <small className="text-muted" style={{ fontSize: "12px" }}>
                      Berlaku untuk usia 0 - 15 Tahun{" "}
                    </small>
                    <div className="row">
                      <div className="col-12">
                        <img
                          src="assets/img/general/painting.svg"
                          className="mt-3"
                          style={{
                            backgroundRepeat: "no-repeat",
                            borderRadius: "10px",
                            height: "150px",
                          }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-9" style={{ paddingRight: "0" }}>
                        <div className="text-center d-grid">
                          <button
                            className="btn btn-warning btn-lg mt-3 btn-block"
                            style={{
                              paddingTop: "10px",
                              paddingBottom: "10px",
                              background: "#f9af02",
                              textTransform: "uppercase",
                              fontSize: "13px",
                              fontWeight: "800",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            DAFTAR
                          </button>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="text-center d-grid">
                          <button
                            className="btn btn-lg mt-3 btn-block"
                            style={{
                              paddingTop: "10px",
                              paddingBottom: "10px",
                              textTransform: "uppercase",
                              fontSize: "13px",
                              fontWeight: "800",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <i
                              className="fa fa-eye"
                              style={{ fontSize: "20px", color: "#d8d8d8" }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
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
