import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Register2() {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{
          background: "#010040",
          position: "relative",
          height: "50px",
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card m-3" style={{ borderRadius: "8px" }}>
              <div className="card-body">
                <h4
                  className="mb-0"
                  style={{
                    fontWeight: "bold",
                    color: "#010040",
                  }}
                >
                  Daftar Keluarga
                </h4>

                <div className="form-group">
                  <label
                    style={{
                      fontWeight: "bold",
                      color: "#010040",
                      fontSize: "11px",
                    }}
                  >
                    Nama Suami/Istri
                  </label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Tulis nama suami/istri"
                    aria-label="name"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div className="form-group">
                  <label
                    style={{
                      fontWeight: "bold",
                      color: "#010040",
                      fontSize: "11px",
                    }}
                  >
                    Nama Anak Pertama
                  </label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Tulis nama anak pertama anda"
                    aria-label="name"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div className="form-group">
                  <label
                    style={{
                      fontWeight: "bold",
                      color: "#010040",
                      fontSize: "11px",
                    }}
                  >
                    Nama Anak Kedua
                  </label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Tulis nama anak kedua anda"
                    aria-label="name"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div className="form-group">
                  <label
                    style={{
                      fontWeight: "bold",
                      color: "#010040",
                      fontSize: "11px",
                    }}
                  >
                    Nama Anak Ketiga
                  </label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Tulis nama anak ketiga anda"
                    aria-label="name"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div className="form-group">
                  <label
                    style={{
                      fontWeight: "bold",
                      color: "#010040",
                      fontSize: "11px",
                    }}
                  >
                    Nama Anak Keempat
                  </label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Tulis nama anak keempat anda"
                    aria-label="name"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div className="form-group">
                  <label
                    style={{
                      fontWeight: "bold",
                      color: "#010040",
                      fontSize: "11px",
                    }}
                  >
                    Nama Anak Kelima
                  </label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Tulis nama anak kelima anda"
                    aria-label="name"
                    style={{ fontSize: "12px" }}
                  />
                </div>

                <div className="text-center d-grid mt-2 actions">
                  <button
                    className="btn btn-warning btn-lg btn-block"
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      background: "#f9af02",
                      textTransform: "uppercase",
                      fontSize: "13px",
                      fontWeight: "800",
                    }}
                  >
                    Lanjut
                  </button>
                  <p
                    className="mt-3 mb-3"
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    Anda sudah mendaftar? Masuk sekarang
                  </p>
                  <a
                    href="/login"
                    className="btn btn-lg"
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      background: "transparent",
                      color: "#010040",
                      boxShadow: 0,
                      border: 0,
                      textTransform: "uppercase",
                      fontSize: "13px",
                      fontWeight: "800",
                    }}
                  >
                    Masuk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
