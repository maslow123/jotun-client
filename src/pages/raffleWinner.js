import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../BG2.png";
export default function RaffleWinner() {
  const navigate = useNavigate();

  return (
    <div className="row justify-content-center">
      <div
        className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        style={{
          backgroundSize: "cover",
          margin: "auto",
          padding: 0,
          overflowX: "hidden",
          position: "relative",
          minHeight: "700px",
          backgroundRepeat: "no-repeat",
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
                src="assets/img/icon/doorprize.png"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="text-center" style={{ fontWeight: "bold" }}>
                Pemenang Undian
              </span>
            </li>
          </ol>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-10">
              <img src="/assets/img/general/nmax.jpeg" className="img-fluid" />
              <h2 className="mb-0" style={{ fontWeight: "bold" }}>
                Selamat!
              </h2>
              <p style={{ fontWeight: "bold" }}>
                Para pemenang undian hadiah Yamaha NMAX
              </p>
            </div>
            <div className="col-12">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="/assets/img/icon/gift.png"
                        height={30}
                        width={30}
                      />
                    </div>
                    <div className="col-10">
                      <p className="mb-0">Aditya galih wicaksono</p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="/assets/img/icon/gift.png"
                        height={30}
                        width={30}
                      />
                    </div>
                    <div className="col-10">
                      <p className="mb-0">Aditya galih wicaksono</p>
                    </div>
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
