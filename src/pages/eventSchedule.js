import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../BG1.svg";
export default function EventSchedule() {
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
                className="img-fluid mb-2 mx-3"
                src="assets/img/icon/jadwal.png"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="text-center" style={{ fontWeight: "bold" }}>
                Jadwal Acara
              </span>
            </li>
          </ol>
        </div>
        <div className="container-fluid" style={{ marginTop: "200px" }}>
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
        </div>
        {/* <div className="px-2">
          <div className="row justify-content-center">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 mb-5">
              <div className="card">
                <div className="px-2 py-2">
                  <div className="row justify-content-center">
                    <div className="col-8">
                      <div className="d-grid">
                        <button
                          className="btn btn-warning btn-lg btn-block"
                          style={{
                            paddingLeft: "0px",
                            paddingRight: "20px",
                            paddingTop: "6px",
                            paddingBottom: "6px",
                            background: "transparent",
                            border: "1px solid #eaeaea",
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#12349e",
                          }}
                        >
                          <img
                            width={20}
                            height={20}
                            className="mx-2"
                            src="assets/img/icon/zoom.png"
                          />
                          <span
                            className="mb-0 p-0"
                            style={{
                              fontSize: "11px",
                              lineHeight: 2,
                            }}
                          >
                            Masuk ke Zoom
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card crd2"
                style={{ maxHeight: "520px", overflowY: "scroll" }}
              >
                <ul class="list-group px-1 py-1">
                  <li class="list-group-item my-1">
                    <div className="row">
                      <div className="col-2" style={{ paddingRight: 0 }}>
                        <div className="circle-orange mt-1"></div>
                      </div>
                      <div className="col-10" style={{ paddingLeft: 0 }}>
                        <p
                          className="p-0 m-0"
                          style={{ fontSize: "9px", color: "#12349e" }}
                        >
                          <i className="fa fa-clock mx-1"></i>8.00 09.00 (60m)
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "bold",
                          }}
                        >
                          Registrasi - Kedatangan Peserta di hotel
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "normal",
                          }}
                        >
                          PIC Team Registrasi
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item my-1">
                    <div className="row">
                      <div className="col-2" style={{ paddingRight: 0 }}>
                        <div className="circle-gray mt-1"></div>
                      </div>
                      <div className="col-10" style={{ paddingLeft: 0 }}>
                        <p
                          className="p-0 m-0"
                          style={{ fontSize: "9px", color: "#12349e" }}
                        >
                          <i className="fa fa-clock mx-1"></i>8.00 09.00 (60m)
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "bold",
                          }}
                        >
                          Registrasi - Kedatangan Peserta di hotel
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "normal",
                          }}
                        >
                          PIC Team Registrasi
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item my-1">
                    <div className="row">
                      <div className="col-2" style={{ paddingRight: 0 }}>
                        <div className="circle-gray mt-1"></div>
                      </div>
                      <div className="col-10" style={{ paddingLeft: 0 }}>
                        <p
                          className="p-0 m-0"
                          style={{ fontSize: "9px", color: "#12349e" }}
                        >
                          <i className="fa fa-clock mx-1"></i>8.00 09.00 (60m)
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "bold",
                          }}
                        >
                          Registrasi - Kedatangan Peserta di hotel
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "normal",
                          }}
                        >
                          PIC Team Registrasi
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item my-1">
                    <div className="row">
                      <div className="col-2" style={{ paddingRight: 0 }}>
                        <div className="circle-gray mt-1"></div>
                      </div>
                      <div className="col-10" style={{ paddingLeft: 0 }}>
                        <p
                          className="p-0 m-0"
                          style={{ fontSize: "9px", color: "#12349e" }}
                        >
                          <i className="fa fa-clock mx-1"></i>8.00 09.00 (60m)
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "bold",
                          }}
                        >
                          Registrasi - Kedatangan Peserta di hotel
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "normal",
                          }}
                        >
                          PIC Team Registrasi
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item my-1">
                    <div className="row">
                      <div className="col-2" style={{ paddingRight: 0 }}>
                        <div className="circle-gray mt-1"></div>
                      </div>
                      <div className="col-10" style={{ paddingLeft: 0 }}>
                        <p
                          className="p-0 m-0"
                          style={{ fontSize: "9px", color: "#12349e" }}
                        >
                          <i className="fa fa-clock mx-1"></i>8.00 09.00 (60m)
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "bold",
                          }}
                        >
                          Registrasi - Kedatangan Peserta di hotel
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "normal",
                          }}
                        >
                          PIC Team Registrasi
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item my-1">
                    <div className="row">
                      <div className="col-2" style={{ paddingRight: 0 }}>
                        <div className="circle-gray mt-1"></div>
                      </div>
                      <div className="col-10" style={{ paddingLeft: 0 }}>
                        <p
                          className="p-0 m-0"
                          style={{ fontSize: "9px", color: "#12349e" }}
                        >
                          <i className="fa fa-clock mx-1"></i>8.00 09.00 (60m)
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "bold",
                          }}
                        >
                          Registrasi - Kedatangan Peserta di hotel
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "normal",
                          }}
                        >
                          PIC Team Registrasi
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item my-1">
                    <div className="row">
                      <div className="col-2" style={{ paddingRight: 0 }}>
                        <div className="circle-gray mt-1"></div>
                      </div>
                      <div className="col-10" style={{ paddingLeft: 0 }}>
                        <p
                          className="p-0 m-0"
                          style={{ fontSize: "9px", color: "#12349e" }}
                        >
                          <i className="fa fa-clock mx-1"></i>8.00 09.00 (60m)
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "bold",
                          }}
                        >
                          Registrasi - Kedatangan Peserta di hotel
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "normal",
                          }}
                        >
                          PIC Team Registrasi
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item my-1">
                    <div className="row">
                      <div className="col-2" style={{ paddingRight: 0 }}>
                        <div className="circle-gray mt-1"></div>
                      </div>
                      <div className="col-10" style={{ paddingLeft: 0 }}>
                        <p
                          className="p-0 m-0"
                          style={{ fontSize: "9px", color: "#12349e" }}
                        >
                          <i className="fa fa-clock mx-1"></i>8.00 09.00 (60m)
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "bold",
                          }}
                        >
                          Registrasi - Kedatangan Peserta di hotel
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "normal",
                          }}
                        >
                          PIC Team Registrasi
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
