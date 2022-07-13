import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../../BG1.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Snack() {
  const navigate = useNavigate();
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
          minHeight: "900px",
        }}
      >
        {/* <nav
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
              src="../assets/img/logo/logo.svg"
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
        </nav> */}
        <div>
          <div className="row justify-content-center mt-2">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="text-center">
                <img
                  src="../assets/img/general/KV.png"
                  className="img-fluid"
                  style={{
                    maxWidth: "350px",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-7 mt-5">
              <div className="card" style={{ borderRadius: "10px" }}>
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <div className="text-center">
                        <h3 style={{ fontWeight: "bold" }}>
                          Selamat menikmati Snack buat kamu <br /> Family Jotun
                        </h3>
                      </div>
                    </div>
                    <div
                      className="col-11 col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 mt-3"
                      style={{
                        background: "#f9af00",
                        padding: 10,
                        borderRadius: "10px",
                      }}
                    >
                      <div className="text-center">
                        <h3 clasName="mb-0" style={{ fontWeight: "bold" }}>
                          Galih
                        </h3>
                        <h3 clasName="mb-0" style={{ fontWeight: "bold" }}>
                          Finance & IT
                        </h3>
                        <h3 clasName="mb-0" style={{ fontWeight: "bold" }}>
                          Jakarta & Tanggerang
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-between"
            style={{ marginTop: "-160px" }}
          >
            <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-5">
              <div className="text-center">
                <img
                  src="../assets/img/scan/snack1.png"
                  className="img-fluid snack"
                  style={{
                    maxWidth: "400px",
                    position: "relative",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-5">
              <div className="text-center">
                <img
                  src="../assets/img/scan/snack2.png"
                  className="img-fluid snack"
                  style={{
                    maxWidth: "400px",
                    position: "relative",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
