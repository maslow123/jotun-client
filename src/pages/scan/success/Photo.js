import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Background from "./../../BG1.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Photo() {
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center">
      <div
        className="bg-scan col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-12"
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "scroll",
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
          <div
            className="row justify-content-center"
            style={{ marginTop: "400px" }}
          >
            <div className="col-8 col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-7 mt-5">
              <div className="text-center">
                <h1 className="mb-0 fontscan">Firdawuz</h1>
                <h1 className="mb-0 fontscan">Powder Departemen</h1>
                <h1 className="mb-0 fontscan">Jakarta</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
