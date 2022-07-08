import React from "react";
import { useNavigate } from "react-router-dom";
export default function Logout() {
  const navigate = useNavigate();

  const _goToLoginPage = () => {
    localStorage.clear();

    navigate('/login');
  };
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
        <div className="container-fluid" style={{ marginTop: "60px" }}>
        <div className="row justify-content-center">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
              <div className="card" style={{ borderRadius: "10px" }}>
                <img
                  src="assets/img/general/KV.png"
                  className="img-fluid"
                  style={{ position: "relative", marginTop: "-45px" }}
                  alt=""
                />
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-8 mt-3 mb-4">
                      <div className="text-center">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Apakah anda yakin ingin keluar ke menu utama
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center d-grip">
                        <a
                          onClick={() => navigate("/profile")}
                          className="btn btn-warning btn-lg btn-block"
                          style={{
                            paddingLeft: "40px",
                            paddingRight: "40px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            background: "#f9af02",
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#12349e",
                          }}
                        >
                          BATAL
                        </a>
                      </div>
                    </div>
                    <div className="col-6" style={{ paddingLeft: 0 }}>
                      <div className="text-center d-grip">
                        <button
                          onClick={_goToLoginPage}
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
                          KELUAR
                        </button>
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
  );
}
