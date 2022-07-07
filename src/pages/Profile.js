import React, { useEffect, useState } from "react";
import Background from "./../BG1.svg";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BRANCHES, DEPARTMENTS, TRANSPORTATIONS } from "./utils/constants";
import "./styles/profile.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  //   useEffect(() => {
  //     const data = localStorage.getItem("token");
  //     if (!data) {
  //       navigate("/login");
  //     }

  //     const user = JSON.parse(localStorage.getItem("user"));
  //     setUser({ ...user });
  //   }, []);
  return (
    <div className="row justify-content-center">
      <div
        className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          position: "relative",
          minHeight: "700px",
          background: `url(${Background})`,
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
                src="assets/img/icon/profil.png"
                style={{ width: "18px", height: "30px" }}
              />
              <span className="text-center" style={{ fontWeight: "bold" }}>
                Profil
              </span>
            </li>
          </ol>
        </div>
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-12">
              <div className="carousel-wrapper">
                <Carousel
                  infiniteLoop
                  useKeyboardArrows
                  swipeable
                  showThumbs={false}
                  showArrows={false}
                  showStatus={false}
                >
                  <div
                    style={{
                      padding: "20px",
                      background: "white",
                      borderRadius: "10px",
                      minHeight: "450px",
                    }}
                  >
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <div className="text-center">
                          <p className="mb-0" style={{ fontWeight: "bold" }}>
                            Tunjukan KODE QR pada saat kehadiran
                          </p>
                          <LazyLoadImage
                            effect="blur"
                            src={user?.qr_code_url}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="text-center">
                          <p className="p-0 m-0" style={{ fontSize: "11px" }}>
                            Kode QR juga dapat digunakan untuk pengambilan :
                          </p>
                        </div>
                      </div>
                      <div className="col-10 mt-2">
                        <div className="text-center">
                          <p
                            className="p-0 m-0"
                            style={{ fontSize: "11px", fontWeight: "bold" }}
                          >
                            Snack anak 1-12 Tahun
                          </p>
                          <p
                            className="p-0 m-0"
                            style={{ fontSize: "11px", fontWeight: "bold" }}
                          >
                            Penukaran koin permainan
                          </p>
                          <p
                            className="p-0 m-0"
                            style={{ fontSize: "11px", fontWeight: "bold" }}
                          >
                            Voucher Photobooth 180 / Video Booth 360 (Pilih
                            salah satu)
                          </p>

                          <p
                            className="p-0 m-0"
                            style={{ fontSize: "11px", fontWeight: "bold" }}
                          >
                            Suvenir
                          </p>
                          <p
                            className="p-0 m-0"
                            style={{ fontSize: "11px", fontWeight: "bold" }}
                          >
                            Paket anak sekolah umur 3-18 tahun
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "20px",
                      background: "white",
                      borderRadius: "10px",
                      minHeight: "450px",
                      textAlign: "left",
                    }}
                  >
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Nama
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="name"
                            value={user?.name}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Nomor Whatsapp anda
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="no_whatsapp"
                            value={user?.phone_number}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Masukan kembali Nomor Whatsapp anda
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="no_whatsapp"
                            value={user?.phone_number}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Departemen
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="departemen"
                            value={DEPARTMENTS[user?.department || "1"]}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Kantor Cabang
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="departemen"
                            value={BRANCHES[user?.branches || "1"]}
                          />
                        </div>
                        {user?.branches === "1" && (
                          <div className="form-group">
                            <label
                              style={{
                                fontWeight: "bold",
                                color: "#010040",
                                fontSize: "11px",
                              }}
                            >
                              Transportasi
                            </label>
                            <input
                              disabled
                              required
                              type="text"
                              className="form-control p-2"
                              style={{ fontSize: "12px" }}
                              name="departemen"
                              value={TRANSPORTATIONS[user?.transportation]}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "20px",
                      background: "white",
                      borderRadius: "10px",
                      minHeight: "450px",
                      textAlign: "left",
                    }}
                  >
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Nama Suami/Istri
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="name"
                            value={user?.family[0]?.name}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Nama Anak Pertama
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="first_child"
                            value={user?.family[1]?.name}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Nama Anak Kedua
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="second_child"
                            value={user?.family[2]?.name}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Nama Anak Ketiga
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="third_child"
                            value={user?.family[3]?.name}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Nama Anak Keempat
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="four_child"
                            value={user?.family[4]?.name}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Nama Anak Kelima
                          </label>
                          <input
                            disabled
                            required
                            type="text"
                            className="form-control p-2"
                            style={{ fontSize: "12px" }}
                            name="five_child"
                            value={user?.family[5]?.name}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-6" style={{ paddingRight: 0 }}>
              <div className="text-center d-grip mb-3">
                <button
                  className="btn btn-lg btn-block"
                  style={{
                    paddingLeft: "5px",
                    paddingRight: "20px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    background: "#fff",
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  <i className="fa fa-rotate-right mx-1"></i> Kirim ulang kode
                </button>
              </div>
            </div>
            <div className="col-6" style={{ paddingLeft: 0 }}>
              <div className="text-center d-grip mb-3">
                <a
                  onClick={() => navigate("/logout")}
                  className="btn btn-lg btn-block"
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "30px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    background: "red",
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  <i className="fa fa-sign-out mx-2"></i> Keluar Akun
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
