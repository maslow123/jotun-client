import React, { useState } from "react";
import { Spinner } from "react-activity";
import { Users } from "../services";
import { showToast } from "./utils/helper";
import { useNavigate } from "react-router-dom";
import Background from "./../BG1.svg";
export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    phone_number: "",
  });

  const _handleSubmit = async (e) => {
    e.preventDefault();
    const user = new Users();

    try {
      setLoading(true);
      const resp = await user.login(payload);
      localStorage.setItem("user", JSON.stringify(resp.data));
      localStorage.setItem("token", resp.token);

      setLoading(false);

      navigate("/home");
    } catch (err) {
      if (err.code === 401) {
        showToast("error", "Nomor telepon tidak terdaftar.");
        setLoading(false);
        return;
      }

      showToast("error", JSON.stringify(err));
    }
  };

  return (
    <div className="row justify-content-center">
      <div
        className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        style={{
          backgroundImage: `url(${Background})`,
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          // overflowY: "clip",
          position: "relative",
          paddingBottom: "200px",
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
        <div className="container">
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-12">
              <div className="card m-3" style={{ borderRadius: "8px" }}>
                <div className="card-body">
                  <h1
                    style={{
                      fontWeight: "bold",
                      color: "#010040",
                    }}
                  >
                    Masuk
                  </h1>

                  <form onSubmit={_handleSubmit}>
                    <label
                      style={{
                        fontWeight: "bold",
                        color: "#010040",
                        fontSize: "11px",
                      }}
                    >
                      Nomor Whatsapp
                    </label>
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                        style={{ background: "white", borderRight: "0px" }}
                      >
                        <img
                          src="assets/img/icon/whatsapp.png"
                          alt=""
                          style={{
                            width: "18px",
                          }}
                        />
                      </span>
                      <input
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        type="text"
                        required
                        name="phone_number"
                        onChange={(e) =>
                          setPayload({ phone_number: e.target.value })
                        }
                        className="form-control p-2"
                        placeholder="contoh : 08267492942"
                        aria-label="notelp"
                        style={{ borderLeft: "0px", fontSize: "12px" }}
                      />
                    </div>
                    <div className="text-center d-grid mt-5">
                      <button
                        disabled={loading}
                        className="btn btn-warning btn-lg btn-block"
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          background: "#f9af02",
                          textTransform: "uppercase",
                          fontSize: "13px",
                          fontWeight: "800",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {!loading ? "Masuk" : <Spinner />}
                      </button>
                      <p
                        className="mt-3 mb-3"
                        style={{ fontSize: "10px", color: "grey" }}
                      >
                        Anda belum mendaftar? Daftar sekarang
                      </p>
                      <a
                        href="/register"
                        className="btn btn-lg"
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          background: "transparent",
                          color: "#010040",
                          boxShadow: 0,
                          border: 0,
                          border: "2px solid #010040",
                          textTransform: "uppercase",
                          fontSize: "13px",
                          fontWeight: "800",
                        }}
                      >
                        Daftar
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
