import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {  
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (!data) {
      navigate('/login');
      return
    }
    setUser({ ...data });
  }, []);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
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
        <div className="row mt-2">
          <div className="col-12">
            <img
              src="assets/img/general/KV.svg"
              className="img-fluid"
              style={{ width: "100%", position: "relative" }}
              alt=""
            />
          </div>
          <div className="col-12 mt-4 mb-2">
            <div className="card mx-2" style={{ borderRadius: "8px" }}>
              <div className="card-body">
                <span
                  style={{ float: "right", textAlign: "right" }}
                  className="mt-3"
                >
                  <i
                    className="fa fa-angle-right "
                    style={{ fontSize: "20px" }}
                  ></i>
                </span>
                <p
                  className="mb-1"
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Hai, {user.name}
                </p>

                <p
                  className="mb-0"
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "#010040",
                    textTransform: "uppercase",
                  }}
                >
                  Lihat profile
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center mb-1">
            <div className="col-6" style={{ marginRight: 3, padding: 0 }}>
              <div className="card" style={{ borderRadius: "8px" }}>
                <div style={{ padding: 5 }}>
                  <img
                    src="assets/img/home/grid1.svg"
                    className="img-fluid"
                    alt=""
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <div className="mx-3 my-1">
                  <p
                    className="mb-1"
                    style={{ fontWeight: "bold", fontSize: "13px" }}
                  >
                    Denah Acara
                    <span
                      style={{ float: "right", textAlign: "right" }}
                      className="mr-5"
                    >
                      <i
                        className="fa fa-angle-right "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6" style={{ marginLeft: 3, padding: 0 }}>
              <div className="card" style={{ borderRadius: "8px" }}>
                <div style={{ padding: 5 }}>
                  <img
                    src="assets/img/home/grid2.svg"
                    className="img-fluid"
                    alt=""
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <div className="mx-3 my-1">
                  <p
                    className="mb-1"
                    style={{ fontWeight: "bold", fontSize: "13px" }}
                  >
                    Jadwal Acara
                    <span
                      style={{ float: "right", textAlign: "right" }}
                      className="mr-5"
                    >
                      <i
                        className="fa fa-angle-right "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-6" style={{ marginRight: 3, padding: 0 }}>
              <div className="card" style={{ borderRadius: "8px" }}>
                <div style={{ padding: 5 }}>
                  <img
                    src="assets/img/home/grid3.svg"
                    className="img-fluid"
                    alt=""
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <div className="mx-3 my-1">
                  <p
                    className="mb-1"
                    style={{ fontWeight: "bold", fontSize: "13px" }}
                  >
                    Daftar Lomba
                    <span
                      style={{ float: "right", textAlign: "right" }}
                      className="mr-5"
                    >
                      <i
                        className="fa fa-angle-right "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6" style={{ marginLeft: 3, padding: 0 }}>
              <div className="card" style={{ borderRadius: "8px" }}>
                <div style={{ padding: 5 }}>
                  <img
                    src="assets/img/home/grid4.svg"
                    className="img-fluid"
                    alt=""
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <div className="mx-3 my-1">
                  <p
                    className="mb-1"
                    style={{ fontWeight: "bold", fontSize: "13px" }}
                  >
                    Doorprize
                    <span
                      style={{ float: "right", textAlign: "right" }}
                      className="mr-5"
                    >
                      <i
                        className="fa fa-angle-right "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
