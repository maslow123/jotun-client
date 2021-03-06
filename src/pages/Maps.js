import React, { useEffect, useState } from "react";
import Background from "./../BG1.svg";
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;
export default function Maps() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  const [session, setSession] = useState("session1");
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
    // Update the document title using the browser API
  });
  function click() {
    $("#session1Modal").modal({ backdrop: false, keyboard: false });
    // document.getElementById("btn").style.visibility = "hidden";
    $(".list").hide();
    setSession("session2");
    $("#session1Modal").modal("show");
  }
  function close() {
    $(".list").show();
    $("#session1Modal").modal({ backdrop: true, keyboard: true });
    setSession("session1");
    $("#session1Modal").modal("hide");
  }
  function change() {
    $("#session2Modal").modal({ backdrop: false, keyboard: false });
    setSession("session3");
    $("#session1Modal").modal("hide");
    $("#session2Modal").modal("show");
  }
  function change2() {
    $("#session1Modal").modal({ backdrop: true, keyboard: true });
    $("#session2Modal").modal("hide");
    $("#session1Modal").modal({ backdrop: false, keyboard: false });
    setSession("session2");
    $("#session1Modal").modal("show");
  }
  return (
    <>
      <div className="row justify-content-center">
        <div
          className="bg-mobile col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-12"
          style={{
            margin: 0,
            padding: 0,
            overflowX: "hidden",
            overflowY: "clip",
            position: "relative",
            minHeight: "1008px",
          }}
        >
          <nav
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
          <div
            className="pt-1 px-4"
            aria-label="breadcrumb"
            style={{
              position: "relative",
              background: "white",
            }}
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item pt-2 mb-1 pb-0">
                <a onClick={() => navigate("/home")}>
                  <i
                    className="fa fa-angle-left"
                    style={{ fontSize: "25px", color: "#ffc107" }}
                  ></i>
                </a>
                <img
                  className="img-fluid mb-2 mx-2 subtitle"
                  src="assets/img/icon/location.png"
                  style={{ width: "30px", height: "30px" }}
                />
                <span className="text-center" style={{ fontWeight: "bold" }}>
                  Denah Acara
                </span>
              </li>
            </ol>
          </div>
          {/* <div className="container-fluid" style={{ marginTop: "200px" }}>
            <div
              className="text-center"
              style={{
                background: "white",
                padding: "5px",
                borderRadius: "50px",
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>AKAN DATANG</h2>
            </div>
          </div> */}
          <div className="row justify-content-center">
            <div className="col-12">
              <TransformWrapper defaultScale={1}>
                <TransformComponent>
                  <div className="text-center">
                    <img
                      src="assets/img/maps/newmaps.jpg"
                      className={
                        width <= 768
                          ? "img-fluid maps-mobile"
                          : "img-fluid maps-desktop"
                      }
                      alt="test"
                    />
                  </div>
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
          {/* <div className={session}>
            <img src="assets/img/maps/maps.png" />
          </div>
          <div className="container-fluid mb">
            <button
              onClick={click}
              className={
                width >= 768
                  ? "btn btn-warning list-desktop"
                  : "btn btn-warning list"
              }
              data-backdrop="false"
            >
              <i className="fa fa-list"></i>
            </button>
          </div> */}
        </div>
      </div>
      <div
        className="modal"
        id="session1Modal"
        tabindex="-1"
        aria-labelledby="session1ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div class="modal-header">
              <div className="col-12">
                <button
                  onClick={close}
                  className="btn btn-warning"
                  style={{
                    // position: "relative",
                    float: "right",
                    width: "50px",
                  }}
                  data-bs-dismiss="modal"
                >
                  <img
                    src="assets/img/icon/fullscreen.png"
                    width={20}
                    height={20}
                  />
                </button>
                <h5 className="mb-0 mx-0" style={{ fontWeight: "bold" }}>
                  Artpreneur
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{ paddingRight: 0 }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">A</span>
                    <span className="mx-2 subtitle">Registrasi</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">B</span>
                    <span className="mx-2 subtitle">Welcoming Landmark</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">C</span>
                    <span className="mx-2 subtitle">Information Desk</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">D</span>
                    <span className="mx-2 subtitle">Photobooth 180</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">E</span>
                    <span className="mx-2 subtitle">Photobooth 180</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">F</span>
                    <span className="mx-2 subtitle">Photobooth 360</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">G</span>
                    <span className="mx-2 subtitle">Claw Machine</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">H</span>
                    <span className="mx-2 subtitle">VR Game</span>
                  </li>
                </ul>
                <hr />
              </div>
              <div
                className="col-6"
                style={{ paddingLeft: 0, borderLeft: "1px solid #eaeaea" }}
              >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">I</span>
                    <span className="mx-2 subtitle">Coloring Competition</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">J</span>
                    <span className="mx-2 subtitle">Kiddie Rides</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">K</span>
                    <span className="mx-2 subtitle">Toddler Area</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">L</span>
                    <span className="mx-2 subtitle">F&B Area</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">M</span>
                    <span className="mx-2 subtitle">Mushola</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">N</span>
                    <span className="mx-2 subtitle">Storage & Souvenir</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">O</span>
                    <span className="mx-2 subtitle">R. Menyusui</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6" style={{ paddingRight: 0 }}>
                <div className="text-center d-grip mb-3">
                  <button
                    className="btn btn-warning btn-lg btn-block"
                    style={{
                      paddingLeft: "35px",
                      paddingRight: "35px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      background: "#f9af02",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#12349e",
                    }}
                  >
                    Artpreneur
                  </button>
                </div>
              </div>
              <div className="col-6" style={{ paddingLeft: 0 }}>
                <div className="text-center d-grip mb-3">
                  <button
                    onClick={change}
                    className="btn btn-warning btn-lg btn-block"
                    style={{
                      paddingLeft: "35px",
                      paddingRight: "35px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      background: "transparent",
                      border: "1px solid #12349e",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#12349e",
                    }}
                  >
                    Raffles Ballrom
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal"
        id="session2Modal"
        tabindex="-1"
        aria-labelledby="session2ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ overflow: "hidden" }}>
          <div className="modal-content">
            <div class="modal-header">
              <div className="col-12">
                <button
                  onClick={close}
                  className="btn btn-warning"
                  style={{
                    // position: "relative",
                    float: "right",
                    width: "50px",
                  }}
                  data-bs-dismiss="modal"
                >
                  <img
                    src="assets/img/icon/fullscreen.png"
                    width={20}
                    height={20}
                  />
                </button>
                <h5 className="mb-0 mx-0" style={{ fontWeight: "bold" }}>
                  Raffles Ballrom
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{ paddingRight: 0 }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">P</span>
                    <span className="mx-2 subtitle">Registration</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">Q</span>
                    <span className="mx-2 subtitle">Welcoming Landmark</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">R</span>
                    <span className="mx-2 subtitle">Photobooth</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">S</span>
                    <span className="mx-2 subtitle">F&B Area</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">T</span>
                    <span className="mx-2 subtitle">Main Stage</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">U</span>
                    <span className="mx-2 subtitle">FOH</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">V</span>
                    <span className="mx-2 subtitle">Jimmy Hip</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">W</span>
                    <span className="mx-2 subtitle">Seating Area</span>
                  </li>
                </ul>
                <hr />
              </div>
              <div
                className="col-6"
                style={{ paddingLeft: 0, borderLeft: "1px solid #eaeaea" }}
              >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">1</span>
                    <span className="mx-2 subtitle subtitle">R. Istirahat</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">2</span>
                    <span className="mx-2 subtitle subtitle">R. Artis 1</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">3</span>
                    <span className="mx-2 subtitle subtitle">R. Artis 2</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">4</span>
                    <span className="mx-2 subtitle subtitle">
                      R. VIP & Angklung
                    </span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">5</span>
                    <span className="mx-2 subtitle subtitle">R. EO</span>
                  </li>
                  <li className="list-group-item">
                    {/* <img
                      src="assets/img/alphabet/A.png"
                      width={15}
                      height={15}
                    /> */}
                    <span className="alpha">6</span>
                    <span className="mx-2 subtitle subtitle">R. JOTUN</span>
                  </li>
                </ul>
                {/* <hr /> */}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6" style={{ paddingRight: 0 }}>
                <div className="text-center d-grip mb-3">
                  <button
                    onClick={change2}
                    className="btn btn-warning btn-lg btn-block"
                    style={{
                      paddingLeft: "35px",
                      paddingRight: "35px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      background: "transparent",
                      border: "1px solid #12349e",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#12349e",
                    }}
                  >
                    Artpreneur
                  </button>
                </div>
              </div>
              <div className="col-6" style={{ paddingLeft: 0 }}>
                <div className="text-center d-grip mb-3">
                  <button
                    className="btn btn-warning btn-lg btn-block"
                    style={{
                      paddingLeft: "35px",
                      paddingRight: "35px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      background: "#f9af02",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#12349e",
                    }}
                  >
                    Raffles Ballrom
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
