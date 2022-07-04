import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmInvitation, Users } from "../services";
import { showToast } from "./utils/helper";
import Background from "./../BG1.svg";
export default function Verif() {
  const navigate = useNavigate();

  const [phoneNumber, _] = useState(localStorage.getItem("phone-number"));
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const confirm_invitation = new ConfirmInvitation();
  const user = new Users();

  useEffect(() => {
    const data = localStorage.getItem("phone-number");
    if (!data) {
      navigate("/register");
    }
  }, []);

  const _handleResend = async () => {
    setLoading(true);
    const payload = {
      phone_number: phoneNumber,
    };

    const resp = await confirm_invitation.resend(payload);
    if (resp.code === 201) {
      _handleResendTimer();
    } else {
      showToast("error", resp.message);
    }

    setLoading(false);
  };
  const _handleResendTimer = () => {
    setCount(120);
    const timer = setInterval(() => {
      setCount((oldCount) => {
        const t = oldCount - 1;
        if (t < 0) {
          clearInterval(timer);
          return 0;
        }
        return t;
      });
    }, 1000);
  };

  const _goToLoginPage = async () => {
    try {
      localStorage.clear();
      setLoadingLogin(true);
      const resp = await user.login({ phone_number: phoneNumber });
      localStorage.setItem("user", JSON.stringify(resp.data));
      localStorage.setItem("token", resp.token);

      setLoadingLogin(false);

      navigate("/home");
    } catch (err) {
      if (err.code === 401) {
        showToast("error", "Nomor telepon tidak terdaftar.");
        setLoadingLogin(false);
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
          overflowY: "clip",
          position: "relative",
          paddingBottom: "50px",
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
                      disabled={loadingLogin}
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
                    <button
                      disabled={!(!loading && count === 0)}
                      onClick={_handleResend}
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
                      {count === 0
                        ? "Kirim Kembali"
                        : `Kirim lagi dalam ${count} detik.`}
                    </button>
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
    </div>
  );
}
