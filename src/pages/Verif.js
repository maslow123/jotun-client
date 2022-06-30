import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Verif() {
  const navigate = useNavigate();
  
  const [phoneNumber, _] = useState(localStorage.getItem('phone-number'));
  useEffect(() => {
    const data = localStorage.getItem('phone-number');
    if (!data) {
      navigate('/register');
    }
  }, []);
  
  const _goToLoginPage = () => {
    navigate('/login');
    localStorage.clear();
  }

  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{
          background: "#010040",
          position: "relative",
          height: "50px",
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
        className="img-fluid"
        style={{ backgroundRepeat: "no-repeat", position: "absolute" }}
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card m-3" style={{ borderRadius: "8px" }}>
              <div className="card-body">
                <div
                  className="row justify-content-center"
                  style={{ marginTop: "100px", marginBottom: "50px" }}
                >
                  <div className="col-12">
                    <div className="text-center">
                      <img
                        src="assets/img/icon/success.svg"
                        alt=""
                        className="mb-3"
                        style={{
                          width: "100px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="text-center">
                      <p className="mb-0">
                        Undangan telah dikirim ke nomor Whatsapp
                      </p>
                      <p style={{ fontWeight: "bold" }}>{phoneNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="text-center d-grid mt-2 actions">
                  <button
                    onClick={_goToLoginPage}
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
                    MASUK
                  </button>
                  <p
                    className="mt-3 mb-3"
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    Tidak menerima undangan? Kirim lagi
                  </p>
                  <a
                    href
                    className="btn btn-lg"
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      background: "transparent",
                      color: "#010040",
                      boxShadow: 0,
                      border: "1px solid #010040",
                      textTransform: "uppercase",
                      fontSize: "13px",
                      fontWeight: "800",
                    }}
                  >
                    Kirim Kembali
                  </a>
                  {/* PAKE INI KALO MAU KIRIM NOTIF */}
                  {/* <a
                    href
                    className="btn btn-lg"
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      background: "#d9d9d9",
                      color: "#949494",
                      boxShadow: 0,
                      textTransform: "uppercase",
                      fontSize: "13px",
                      fontWeight: "800",
                      textAlign: "left",
                    }}
                  >
                    Kirim Kembali{" "}
                    <span style={{ textAlign: "right", float: "right" }}>
                      4:59
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
