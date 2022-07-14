import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../../../bgscan/success/playing.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Playing() {
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center">
      <div
        className="bg-scan col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12"
        style={{
          background: `url(${Background})`,
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        <div>
          <div
            className="row justify-content-center"
            style={{
              position: "absolute",
              bottom: 150,
              left: 0,
              right: 0,
              overflow: "hidden",
            }}
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
