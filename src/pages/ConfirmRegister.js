import React, { useEffect, useState } from "react";
import LoadingScreen from 'react-loading-screen';
import { Users } from "../services";
import { useNavigate } from "react-router-dom";

export default function ConfirmRegister() {  
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    family_list: ['', '', '', '', '', '']
  });

  useEffect(() => {
    const data = localStorage.getItem('register-payload');
    if (!data) {
      navigate('/register');
    }
  }, []);
  
  const _handleSubmit = async e => {
    e.preventDefault();    
    const p1 = await JSON.parse(localStorage.getItem('register-payload'));
    const p2 = { ...payload };

    const data = {
      ...p1,
      ...p2
    };

    // store to backend
    const user = new Users();
    setLoading(true);
    const resp = await user.register(data);
    setLoading(false);
    if (resp.code === 201) {
      localStorage.setItem('phone-number', data.phone_number);
      navigate('/verif');
    }

  };

  const _handleChange = evt => {
    
    const value = evt.target.value;
    const name = evt.target.name;

    let p = [...payload.family_list];
    p[name] = value;

    setPayload({ family_list: [...p] });
  };

  return (
    <div>
      <LoadingScreen 
        loading={loading} 
        bgColor='rgba(0,0,0,0.5)'
        spinnerColor='#9ee5f8'
        textColor='#FFF'
        text='Data sedang diproses'
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
        <div className="row">
          <div className="col-12">
            <div className="card m-3" style={{ borderRadius: "8px" }}>
              <div className="card-body">
                <h4
                  className="mb-0"
                  style={{
                    fontWeight: "bold",
                    color: "#010040",
                  }}
                >
                  Daftar Keluarga
                </h4>
                <form onSubmit={_handleSubmit}>
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
                      type="text"
                      className="form-control p-2"
                      placeholder="Tulis nama suami/istri"
                      aria-label="name"
                      style={{ fontSize: "12px" }}
                      name={0}
                      onChange={_handleChange}
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
                      type="text"
                      className="form-control p-2"
                      placeholder="Tulis nama anak pertama anda"
                      aria-label="name"
                      style={{ fontSize: "12px" }}
                      name={1}
                      onChange={_handleChange}
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
                      type="text"
                      className="form-control p-2"
                      placeholder="Tulis nama anak kedua anda"
                      aria-label="name"
                      style={{ fontSize: "12px" }}
                      name={2}
                      onChange={_handleChange}
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
                      type="text"
                      className="form-control p-2"
                      placeholder="Tulis nama anak ketiga anda"
                      aria-label="name"
                      style={{ fontSize: "12px" }}
                      name={3}
                      onChange={_handleChange}
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
                      type="text"
                      className="form-control p-2"
                      placeholder="Tulis nama anak keempat anda"
                      aria-label="name"
                      style={{ fontSize: "12px" }}
                      name={4}
                      onChange={_handleChange}
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
                      type="text"
                      className="form-control p-2"
                      placeholder="Tulis nama anak kelima anda"
                      aria-label="name"
                      style={{ fontSize: "12px" }}
                      name={5}
                      onChange={_handleChange}
                    />
                  </div>

                  <div className="text-center d-grid mt-2 actions">
                    <button
                      type="submit"
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
                      Lanjut
                    </button>
                    <p
                      className="mt-3 mb-3"
                      style={{ fontSize: "10px", color: "grey" }}
                    >
                      Anda sudah mendaftar? Masuk sekarang
                    </p>
                    <a
                      href="/login"
                      className="btn btn-lg"
                      style={{
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        background: "transparent",
                        color: "#010040",
                        boxShadow: 0,
                        border: 0,
                        textTransform: "uppercase",
                        fontSize: "13px",
                        fontWeight: "800",
                      }}
                    >
                      Masuk
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
