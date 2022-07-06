import React from "react";
import Background from "./../BG1.svg";
export default function Profile() {
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
              <a href="/home">
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
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-touch="true"
                data-ride="carousel"
                data-interval="false"
                style={{
                  marginTop: "-15px",
                }}
              >
                <div
                  className="carousel-indicators"
                  style={{ marginBottom: "-30px" }}
                >
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
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                    }}
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div
                      className="card p-1"
                      style={{
                        borderRadius: "8px",
                        minHeight: "420px",
                        maxHeight: "550px",
                      }}
                    >
                      <div className="card-body">
                        <div className="row justify-content-center">
                          <div className="col-8">
                            <div className="text-center">
                              <p
                                className="mb-0"
                                style={{ fontWeight: "bold" }}
                              >
                                Tunjukan KODE QR pada saat kehadiran
                              </p>
                              <img
                                src="assets/img/general/qr.jpeg"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="text-center">
                              <p
                                className="p-0 m-0"
                                style={{ fontSize: "11px" }}
                              >
                                Kode QR juga dapat digunakan untuk pengambilan :
                              </p>
                            </div>
                          </div>
                          <div className="col-8 mt-3">
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
                                Voucher Photobooth 180
                              </p>
                              <p
                                className="p-0 m-0"
                                style={{ fontSize: "11px", fontWeight: "bold" }}
                              >
                                Video Booth 360
                              </p>
                              <p
                                className="p-0 m-0"
                                style={{ fontSize: "11px", fontWeight: "bold" }}
                              >
                                Souvenir
                              </p>
                              <p
                                className="p-0 m-0"
                                style={{ fontSize: "11px", fontWeight: "bold" }}
                              >
                                Paket anak sekolah
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div
                      className="card p-1"
                      style={{
                        borderRadius: "8px",
                        minHeight: "420px",
                        maxHeight: "550px",
                      }}
                    >
                      <div className="card-body">
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="contoh : Ahmad Taufik"
                                style={{ fontSize: "12px" }}
                                name="name"
                                value="blablaba"
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="08237128323"
                                style={{ fontSize: "12px" }}
                                name="no_whatsapp"
                                value="08237128323"
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="08237128323"
                                style={{ fontSize: "12px" }}
                                name="no_whatsapp"
                                value="08237128323"
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="Finance & IT"
                                style={{ fontSize: "12px" }}
                                name="departemen"
                                value="Finance & IT"
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="Jakarta & Tanggerang"
                                style={{ fontSize: "12px" }}
                                name="departemen"
                                value="Jakarta & Tanggerang"
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
                                Transportasi
                              </label>
                              <input
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="Kendaraan Pribadi (Mobil)"
                                style={{ fontSize: "12px" }}
                                name="departemen"
                                value="Kendaraan Pribadi (Mobil)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div
                      className="card p-1"
                      style={{
                        borderRadius: "8px",
                        minHeight: "420px",
                        maxHeight: "550px",
                      }}
                    >
                      <div className="card-body">
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="contoh : Ahmad Taufik"
                                style={{ fontSize: "12px" }}
                                name="name"
                                value="blablaba"
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="Anak pertama"
                                style={{ fontSize: "12px" }}
                                name="first_child"
                                value="Anak pertama"
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="Anak Kedua"
                                style={{ fontSize: "12px" }}
                                name="second_child"
                                value="Anak Kedua"
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="Anak Ketiga"
                                style={{ fontSize: "12px" }}
                                name="third_child"
                                value="Anak Ketiga"
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="Anak Keempat"
                                style={{ fontSize: "12px" }}
                                name="four_child"
                                value="Anak Keempat"
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
                                required
                                type="text"
                                className="form-control p-2"
                                placeholder="Anak Kelima"
                                style={{ fontSize: "12px" }}
                                name="five_child"
                                value="Anak Kelima"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  href="/logout"
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
