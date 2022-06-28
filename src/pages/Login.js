import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Login() {
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
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-12">
            <div className="card m-3" style={{ borderRadius: "8px" }}>
              <div className="card-body">
                <h1
                  style={{
                    fontWeight: "bold",
                    color: "#010040",
                  }}
                >
                  Masuk
                </h1>

                <label
                  style={{
                    fontWeight: "bold",
                    color: "#010040",
                    fontSize: "11px",
                  }}
                >
                  Nomor Whatsapp
                </label>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ background: "white", borderRight: "0px" }}
                  >
                    <img
                      src="assets/img/icon/whatsapp.png"
                      alt=""
                      style={{
                        width: "18px",
                      }}
                    />
                  </span>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="contoh : 08267492942"
                    aria-label="notelp"
                    style={{ borderLeft: "0px", fontSize: "12px" }}
                  />
                </div>
                <div className="text-center d-grid mt-5">
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
                    Masuk
                  </button>
                  <p
                    className="mt-3 mb-3"
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    Anda belum mendaftar? Daftar sekarang
                  </p>
                  <a
                    href="/register"
                    className="btn btn-lg"
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      background: "transparent",
                      color: "#010040",
                      boxShadow: 0,
                      border: 0,
                      border: "2px solid #010040",
                      textTransform: "uppercase",
                      fontSize: "13px",
                      fontWeight: "800",
                    }}
                  >
                    Daftar
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
