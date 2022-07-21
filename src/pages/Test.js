import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../BG1.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Topbar from "../templates/Topbar";
export default function Test() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <button
          data-bs-toggle="modal"
          data-bs-target="#doModal"
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
        </button>
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
              {/* <button
                type="button"
                className="btn-close px-3 py-3"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ float: "right", textAlign: "right" }}
              ></button> */}
              <div className="row px-4 py-2 justify-content-between">
                <div className="col-6">
                  <h4 className="text-center">
                    DO<small>s</small>
                  </h4>
                </div>
                <div className="col-6">
                  <h4 className="text-center">
                    DONT'<small>s</small>
                  </h4>
                </div>
                <div
                  className="col-6"
                  style={{
                    background: "green",
                    overflow: "hidden",
                    marginRight: 10,
                  }}
                >
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                </div>
                <div
                  className="col-6"
                  style={{ background: "red", overflow: "hidden" }}
                >
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                  <p>01.Pastikan jsdjewjwfkwfkwfkwefjkewfjkwejwef</p>
                </div>
              </div>
              <img src="/assets/img/general/do.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
