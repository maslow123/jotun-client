import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
export default function Register() {
  $(document).ready(function () {
    $(".form-group input").on("keyup", function () {
      let empty = false;

      $(".form-group input").each(function () {
        empty = $(this).val().length == 0;
      });

      if (empty) $(".actions button").attr("disabled", "disabled");
      else $(".actions button").attr("disabled", false);
    });
  });
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
                <h2
                  className="mb-0"
                  style={{
                    fontWeight: "bold",
                    color: "#010040",
                  }}
                >
                  Daftar Diri
                </h2>

                <div className="form-group">
                  <label
                    style={{
                      fontWeight: "bold",
                      color: "#010040",
                      fontSize: "11px",
                    }}
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="contoh : Ahmad Taufik"
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
                    Nomor Whatsapp anda
                  </label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="contoh : 08267492942"
                    aria-label="notelp"
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
                    Masukan kembali Nomor Whatsapp anda
                  </label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="contoh : 08267492942"
                    aria-label="notelp"
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
                    Departemen
                  </label>
                  <select
                    className="form-select form-select-lg"
                    style={{
                      fontSize: "12px",
                      border: "0px",
                      boxShadow: "0px 2px #e3e3e3",
                    }}
                  >
                    <option selected>Pilih Departemen anda saat ini</option>
                    <option>Data 1</option>
                    <option>Data 2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label
                    style={{
                      fontWeight: "bold",
                      color: "#010040",
                      fontSize: "11px",
                    }}
                  >
                    Kantor Cabang
                  </label>
                  <select
                    className="form-select form-select-lg"
                    style={{
                      fontSize: "12px",
                      border: "0px",
                      boxShadow: "0px 2px #e3e3e3",
                    }}
                  >
                    <option selected>Pilih Kantor Cabang anda</option>
                    <option>Data 1</option>
                    <option>Data 2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label
                    style={{
                      fontWeight: "bold",
                      color: "#010040",
                      fontSize: "11px",
                    }}
                  >
                    Transportasi
                  </label>
                  <select
                    className="form-select form-select-lg"
                    style={{
                      fontSize: "12px",
                      border: "0px",
                      boxShadow: "0px 2px #e3e3e3",
                    }}
                  >
                    <option selected>Pilih Transportasi Kendaraan</option>
                    <option>Data 1</option>
                    <option>Data 2</option>
                  </select>
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
                    disabled="disabled"
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
