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
        paddingBottom: '70px',
        width:'100%',
        height:'680px',
        minHeight: "auto",
        maxHeight: "700px",
        overflowY: "scroll",
        backgroundRepeat:'no-repeat'
        // paddingBottom:'100px'
      }}
    >
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      grabCursor={true}
      pagination={{
        clickable: true,
        color: 'red'
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
                overflow:'hidden',
                margin:"auto"
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
                overflow:'hidden',
                margin:0,
               
              }}
              alt=""
              effect="blur"
            /></SwiperSlide>
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
            paddingTop:'30px',
            paddingBottom:'30px',
            width: "100%",
            float: "none",
            height: "auto",
            overflow: "hidden",
            border: 0
          }}
        >
          <div
             className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12"
            style={{
                position: "absolute",
                margin:'auto',
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
    // // <div className="row justify-content-center">
    // //   <div
    // //     className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-3"
    // //     style={{
    // //       margin: 0,
    // //       padding: 0,
    // //       //   paddingBottom: "100px",
    // //       overflowX: "hidden",
    // //       overflowY: "auto",
    // //       position: "relative",
    // //       background: "red",
    // //     }}
    // //   >
    // //     <nav
    // //       className="navbar fixed-bottom"
    // //       style={{
    // //         background: "#010040",
    // //         position: "fixed",
    // //         bottom: 0,
    // //         right: 0,
    // //         left: 0,
    // //         margin: "auto",
    // //         width: "400px",
    // //         float: "none",
    // //         height: "50px",
    // //         overflow: "hidden",
    // //       }}
    // //     >
    // //       <div
    // //         className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
    // //         style={{
    // //           position: "absolute",
    // //           width: "100%",
    // //         }}
    // //       >
    // //         <div className="row justify-content-center">
    // //           <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
    // //             <div className="text-center d-grid">
    // //               <a
    // //                 onClick={() => navigate("/register")}
    // //                 className="btn btn-warning btn-block"
    // //                 style={{
    // //                   paddingTop: "7px",
    // //                   paddingBottom: "7px",
    // //                   background: "#f9af02",
    // //                   textTransform: "uppercase",
    // //                   fontSize: "13px",
    // //                   fontWeight: "800",
    // //                 }}
    // //               >
    // //                 Daftar
    // //               </a>
    // //             </div>
    // //           </div>

    // //           <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
    // //             <div className="text-center d-grid">
    // //               <a
    // //                 onClick={() => navigate("/login")}
    // //                 className="btn btn-warning btn-block"
    // //                 style={{
    // //                   paddingTop: "7px",
    // //                   paddingBottom: "7px",
    // //                   background: "#f9af02",
    // //                   textTransform: "uppercase",
    // //                   fontSize: "13px",
    // //                   fontWeight: "800",
    // //                 }}
    // //               >
    // //                 Masuk
    // //               </a>
    // //             </div>
    // //           </div>
    // //         </div>
    // //       </div>
    // //     </nav>
    // //     <Carousel
    // //       infiniteLoop
    // //       useKeyboardArrows
    // //       swipeable
    // //       emulateTouch
    // //       showThumbs={false}
    // //       showArrows={false}
    // //       showStatus={false}
    // //     >
    // //       <div>
    // //         {" "}
    // //         <LazyLoadImage
    // //           className="bg"
    // //           src="assets/img/landing_page/landing_page3.png"
    // //           style={{
    // //             backgroundRepeat: "no-repeat",
    // //             width: "100%",
    // //           }}
    // //           alt=""
    // //           effect="blur"
    // //         />
    // //       </div>
    // //       <div>
    // //         {" "}
    // //         <LazyLoadImage
    // //           className="bg"
    // //           src="assets/img/landing_page/landing_page2.png"
    // //           style={{
    // //             backgroundRepeat: "no-repeat",
    // //             width: "100%",
    // //           }}
    // //           alt=""
    // //           effect="blur"
    // //         />
    // //       </div>
    // //     </Carousel>
    //     {/* <div
    //       id="carouselExampleIndicators"
    //       className="carousel slide"
    //       data-bs-touch="true"
    //       data-bs-ride="carousel"
    //       data-bs-interval="false"
    //       style={{ overflow: "hidden" }}
    //     >
    //       <button
    //         className="carousel-control-prev"
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide="prev"
    //       >
    //         <span
    //           className="carousel-control-prev-icon"
    //           aria-hidden="true"
    //         ></span>
    //         <span className="visually-hidden">Previous</span>
    //       </button>
    //       <button
    //         className="carousel-control-next"
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide="next"
    //       >
    //         <span
    //           className="carousel-control-next-icon"
    //           aria-hidden="true"
    //         ></span>
    //         <span className="visually-hidden">Next</span>
    //       </button>
    //       <div className="carousel-indicators" style={{ marginTop: "-20px" }}>
    //         <button
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide-to="0"
    //           className="active"
    //           aria-current="true"
    //           aria-label="Slide 1"
    //           style={{
    //             width: "10px",
    //             height: "10px",
    //             borderRadius: "50%",
    //             marginTop: "-45px",
    //           }}
    //         ></button>
    //         <button
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide-to="1"
    //           aria-label="Slide 2"
    //           style={{
    //             width: "10px",
    //             height: "10px",
    //             borderRadius: "50%",
    //             marginTop: "-45px",
    //           }}
    //         ></button>
    //       </div>
    //       <div className="carousel-inner" style={{ overflow: "hidden" }}>
    //         <div className="carousel-item active">
    //           <div className="text-center">
    //             <LazyLoadImage
    //               src="assets/img/landing_page/landing_page1.png"
    //               style={{
    //                 backgroundRepeat: "no-repeat",
    //                 maxWidth: "100%",
    //                 maxHeight: "700px",
    //                 marginTop: "-30px",
    //               }}
    //               alt=""
    //               effect="blur"
    //             />
    //           </div>
    //         </div>
    //         <div className="carousel-item">
    //           <div className="text-center">
    //             <LazyLoadImage
    //               src="assets/img/landing_page/landing_page2.png"
    //               style={{
    //                 backgroundRepeat: "no-repeat",
    //                 maxHeight: "700px",
    //                 maxWidth: "100%",
    //                 marginTop: "-30px",
    //               }}
    //               alt=""
    //               effect="blur"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div> */}
    //     {/* <nav
    //       class="navbar fixed-bottom "
    //       style={{
    //         background: "#010040",
    //         overflow: "hidden",
    //         width: "100%",
    //       }}
    //     >
    //       <div
    //         className="row justify-content-center"
    //         style={{
    //           position: "relative",
    //           marginTop: "-1px",
    //           overflowX: "hidden",
    //           border: 0,
    //           // marginBottom: "100px",
    //           // background: "#1616ab",
    //         }}
    //       >
    //         <div className="row justify-content-center">
    //           <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
    //             <div className="text-center d-grid">
    //               <a
    //                 onClick={() => navigate("/register")}
    //                 className="btn btn-warning btn-block"
    //                 style={{
    //                   paddingTop: "7px",
    //                   paddingBottom: "7px",
    //                   background: "#f9af02",
    //                   textTransform: "uppercase",
    //                   fontSize: "13px",
    //                   fontWeight: "800",
    //                 }}
    //               >
    //                 Daftar
    //               </a>
    //             </div>
    //           </div>

    //           <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
    //             <div className="text-center d-grid">
    //               <a
    //                 onClick={() => navigate("/login")}
    //                 className="btn btn-warning btn-block"
    //                 style={{
    //                   paddingTop: "7px",
    //                   paddingBottom: "7px",
    //                   background: "#f9af02",
    //                   textTransform: "uppercase",
    //                   fontSize: "13px",
    //                   fontWeight: "800",
    //                 }}
    //               >
    //                 Masuk
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </nav> */}
    // //   </div>
    // // </div>
  );
}
