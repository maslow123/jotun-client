import React from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center">
      <div
        className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        style={{
          margin: 0,
          padding: 0,
          // overflow: "hidden",
          minHeight: "700px",
        }}
      >
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-touch="true"
          data-interval="false"
        >
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          <div class="carousel-indicators" style={{ marginTop: "-20px" }}>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                marginTop: "-60px",
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
                marginTop: "-60px",
              }}
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="text-center">
                <img
                  src="assets/img/landing_page/landing_page.svg"
                  className="img-fluid"
                  style={{ backgroundRepeat: "no-repeat" }}
                  alt=""
                />
              </div>
            </div>
            <div class="carousel-item">
              <div className="text-center">
                <img
                  src="assets/img/landing_page/landing_page.svg"
                  className="img-fluid"
                  style={{ backgroundRepeat: "no-repeat" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{ position: "relative", marginTop: "-35px" }}
        >
          <div className="col-5 col-sm-5 col-md-5 col-lg-5">
            <div className="text-center d-grid">
              <a
                onClick={() => navigate('/register')}
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
                Daftar
              </a>
            </div>
          </div>

          <div className="col-5 col-sm-5 col-md-5 col-lg-5">
            <div className="text-center d-grid">
              <a
                onClick={() => navigate('/login')}
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
