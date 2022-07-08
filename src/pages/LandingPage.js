import React, { useEffect } from "react";
// import "./../style.css";
// import "./styles/landing.css";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "react-lazy-load-image-component/src/effects/blur.css";

export default function LandingPage() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center" style={{ overflowX: "hidden" }}>
      <div
        className="bg-mobile col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12 y"
        style={{
          margin: 0,
          paddingBottom: "70px",
          width: "100%",
          height: "680px",
          minHeight: "auto",
          maxHeight: "700px",
          overflowY: "scroll",
          backgroundRepeat: "no-repeat",
          // paddingBottom:'100px'
        }}
      >
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
            color: "red",
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <LazyLoadImage
              className="img"
              src="assets/img/landing_page/landing_page3.png"
              style={{
                backgroundRepeat: "no-repeat",
                width: "100%",
                overflow: "hidden",
                margin: "auto",
              }}
              alt=""
              effect="blur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              className="img"
              src="assets/img/landing_page/landing_page2.png"
              style={{
                backgroundRepeat: "no-repeat",
                width: "100%",
                overflow: "hidden",
                margin: 0,
              }}
              alt=""
              effect="blur"
            />
          </SwiperSlide>
        </Swiper>

        <nav
          className="navbar fixed-bottom"
          style={{
            background: "#0117ae",
            position: "fixed",
            bottom: 0,
            right: 0,
            left: 0,
            margin: 0,
            paddingTop: "30px",
            paddingBottom: "30px",
            width: "100%",
            float: "none",
            height: "auto",
            overflow: "hidden",
            border: 0,
          }}
        >
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12"
            style={{
              position: "absolute",
              margin: "auto",
              width: "100%",
            }}
          >
            <div className="row justify-content-center">
              <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                <div className="text-center d-grid">
                  <a
                    onClick={() => navigate("/register")}
                    className="btn btn-warning btn-block"
                    style={{
                      paddingTop: "7px",
                      paddingBottom: "7px",
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

              <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                <div className="text-center d-grid">
                  <a
                    onClick={() => navigate("/login")}
                    className="btn btn-warning btn-block"
                    style={{
                      paddingTop: "7px",
                      paddingBottom: "7px",
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
        </nav>
      </div>
    </div>
  );
}
