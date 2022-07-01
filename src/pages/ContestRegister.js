import React from "react";
export default function ContestRegister() {
  return (
    <div className="row justify-content-center">
      <div
        className="col-xs-12 col-sm-12 col-md-3 col-lg-3"
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          position: "relative",
          minHeight: "700px",
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
          style={{
            backgroundRepeat: "no-repeat",
            position: "absolute",
            height: "auto",
            // backgroundAttachment: "fixed",
          }}
          alt=""
        />
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
              <a href="/home">
                <i
                  className="fa fa-angle-left"
                  style={{ fontSize: "25px", color: "#ffc107" }}
                ></i>
              </a>
              <img
                className="img-fluid mb-2 mx-3"
                src="assets/img/icon/lomba.png"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="text-center" style={{ fontWeight: "bold" }}>
                Daftar Lomba
              </span>
            </li>
          </ol>
        </div>
        <div className="container-fluid mt-5">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-touch="true"
            data-ride="carousel"
            data-interval="false"
            style={{
              // position: "absolute",

              marginTop: "-15px",
            }}
          >
            {/* <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button> */}
            <div
              className="carousel-indicators"
              style={{ marginBottom: "-30px" }}
            >
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
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
                }}
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                style={{ marginRight: "50px" }}
              >
                <div
                  className="card p-1"
                  style={{ borderRadius: "8px", maxHeight: "550px" }}
                >
                  <div className="card-body">
                    <p
                      style={{
                        fontWeight: "bold",
                        marginBottom: "-8px",
                        color: "#10193a",
                      }}
                    >
                      Lomba Mewarnai
                    </p>
                    <small className="text-muted" style={{ fontSize: "12px" }}>
                      Berlaku untuk usia 0 - 15 Tahun{" "}
                    </small>
                    <div className="row">
                      <div className="col-12">
                        <img
                          src="assets/img/general/painting.svg"
                          className="img-fluid mt-3"
                          style={{
                            backgroundRepeat: "no-repeat",
                            borderRadius: "10px",
                          }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-9" style={{ paddingRight: "0" }}>
                        <div className="text-center d-grid">
                          <button
                            className="btn btn-warning btn-lg mt-3 btn-block"
                            style={{
                              paddingTop: "10px",
                              paddingBottom: "10px",
                              background: "#f9af02",
                              textTransform: "uppercase",
                              fontSize: "13px",
                              fontWeight: "800",
                              display: "flex",
                              justifyContent: "center",
                              color: "#10193a",
                            }}
                          >
                            DAFTAR
                          </button>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="text-center d-grid">
                          <button
                            className="btn btn-lg mt-3 btn-block"
                            style={{
                              paddingTop: "10px",
                              paddingBottom: "10px",
                              textTransform: "uppercase",
                              fontSize: "13px",
                              fontWeight: "800",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#addModal"
                            >
                              <i
                                className="fa fa-eye"
                                style={{ fontSize: "20px", color: "#d8d8d8" }}
                              ></i>
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="crd col-11 mt-3 mb-3">
                        <ul>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di tempat
                          </li>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di
                          </li>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di tempat
                          </li>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di tempat
                          </li>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di tempat
                          </li>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di tempat
                          </li>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di tempat
                          </li>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di tempat
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="card p-1"
                  style={{ borderRadius: "8px", maxHeight: "550px" }}
                >
                  <div className="card-body">
                    <p
                      style={{
                        fontWeight: "bold",
                        marginBottom: "-8px",
                        color: "#10193a",
                      }}
                    >
                      Lomba Mewarnai Tote Bag
                    </p>
                    <small className="text-muted" style={{ fontSize: "12px" }}>
                      Berlaku untuk usia 11 - 25 Tahun
                    </small>
                    <div className="row">
                      <div className="col-12">
                        <img
                          src="assets/img/general/painting.svg"
                          className="img-fluid mt-3"
                          style={{
                            backgroundRepeat: "no-repeat",
                            borderRadius: "10px",
                          }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-9" style={{ paddingRight: "0" }}>
                        <div className="text-center d-grid">
                          <button
                            className="btn btn-warning btn-lg mt-3 btn-block"
                            style={{
                              paddingTop: "10px",
                              paddingBottom: "10px",
                              background: "#f9af02",
                              textTransform: "uppercase",
                              fontSize: "13px",
                              fontWeight: "800",
                              display: "flex",
                              justifyContent: "center",
                              color: "#10193a",
                            }}
                          >
                            DAFTAR
                          </button>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="text-center d-grid">
                          <button
                            className="btn btn-lg mt-3 btn-block"
                            style={{
                              paddingTop: "10px",
                              paddingBottom: "10px",
                              textTransform: "uppercase",
                              fontSize: "13px",
                              fontWeight: "800",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <i
                              className="fa fa-eye"
                              style={{ fontSize: "20px", color: "#d8d8d8" }}
                            ></i>
                          </button>
                        </div>
                      </div>
                      <div className="crd col-11 mt-3 mb-3">
                        <ul>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di tempat
                          </li>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di
                          </li>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di tempat
                          </li>
                          <li className="mb-1" style={{ fontSize: "13px" }}>
                            Acara Lomba dimulai jam 5:30 WIB di tempat
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="addModal"
        tabindex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ float: "right", color: "red" }}
              ></button>
              <div className="row justify-content-center">
                <div className="col-12">
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "-8px",
                      color: "#10193a",
                    }}
                  >
                    Lomba Mewarnai
                  </p>
                  <small className="text-muted" style={{ fontSize: "12px" }}>
                    Berlaku untuk usia 0 - 15 Tahun
                  </small>
                </div>
                <div className="col-11">
                  <div className="text-center d-grid">
                    <button
                      className="btn btn-warning btn-lg mt-3 btn-block"
                      style={{
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        background: "#f9af02",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        fontWeight: "800",
                        display: "flex",
                        justifyContent: "center",
                        color: "#10193a",
                      }}
                    >
                      SIMPAN
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="crd col-12 mb-5">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div class="form-check">
                    <input
                      class="form-check-input ml-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label mx-3"
                      for="flexRadioDefault1"
                      style={{ fontSize: "14px" }}
                    >
                      Titania Wicaksono
                    </label>
                    <span
                      className="mx-3"
                      style={{ float: "right", fontSize: "14px" }}
                    >
                      22 Tahun
                    </span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div class="form-check">
                    <input
                      class="form-check-input ml-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label mx-3"
                      for="flexRadioDefault1"
                      style={{ fontSize: "14px" }}
                    >
                      Arvy Wicaksono
                    </label>
                    <span
                      className="mx-3"
                      style={{ float: "right", fontSize: "14px" }}
                    >
                      22 Tahun
                    </span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div class="form-check">
                    <input
                      class="form-check-input ml-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label mx-3"
                      for="flexRadioDefault1"
                      style={{ fontSize: "14px" }}
                    >
                      Navia Wicaksono
                    </label>
                    <span
                      className="mx-3"
                      style={{ float: "right", fontSize: "14px" }}
                    >
                      22 Tahun
                    </span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div class="form-check">
                    <input
                      class="form-check-input ml-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label mx-3"
                      for="flexRadioDefault1"
                      style={{ fontSize: "14px" }}
                    >
                      Gilang Wicaksono
                    </label>
                    <span
                      className="mx-3"
                      style={{ float: "right", fontSize: "14px" }}
                    >
                      22 Tahun
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
