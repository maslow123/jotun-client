import React, { useEffect, useState } from "react";
import LoadingScreen from 'react-loading-screen';
import { Users } from "../services";
import { useNavigate } from "react-router-dom";
import { AGES } from "./utils/constants";
import { showToast } from "./utils/helper";
import Background from "./../BG1.svg";
export default function ConfirmRegister() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    family_list: [
      {
        name: "",
        age: 0,
      },
      {
        name: "",
        age: 0,
      },
      {
        name: "",
        age: 0,
      },
      {
        name: "",
        age: 0,
      },
      {
        name: "",
        age: 0,
      },
      {
        name: "",
        age: 0,
      },
    ],
  });

  useEffect(() => {
    const data = localStorage.getItem("register-payload");
    if (!data) {
      navigate("/register");
    }
  }, []);

  const _goToLoginPage = () => {
    navigate("/login");
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    const p1 = await JSON.parse(localStorage.getItem("register-payload"));
    const p2 = { family_list: [] };
    p2.family_list = payload.family_list.filter(item => item.name !== '');

    const data = {
      ...p1,
      ...p2,
    };

    // store to backend
    const user = new Users();
    setLoading(true);
    const resp = await user.register(data);
    setLoading(false);
    if (resp.code === 201) {
      localStorage.setItem("phone-number", data.phone_number);
      navigate("/verif");
      return;
    }
    if (resp.message === "phone-number-already-exists") {
      return showToast("error", "Nomor handphone telah terdaftar.");
    }
    showToast("error", JSON.stringify(resp));
  };

  const _handleChange = (index, evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    let p = [...payload.family_list];
    p[index][name] = value;

    setPayload({ family_list: [...p] });
  };

  return (
    <div className="row justify-content-center">
      <LoadingScreen
        loading={loading}
        bgColor="rgba(0,0,0,0.5)"
        spinnerColor="#9ee5f8"
        textColor="#FFF"
        text={
          <>
            Data sedang diproses...
            <br />
            Mohon tidak memuat ulang atau menutup halaman ini
          </>
        }
      />
      <div
        className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        style={{
          backgroundImage: `url(${Background})`,
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
              onClick={() => navigate('/')}
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
                        name={"name"}
                        value={payload.family_list[0].name}
                        onChange={(event) => {
                          if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
                            event.preventDefault();
                            return;
                          }
                          _handleChange(0, event);
                        }}
                      />
                    </div>
                    <div className="row">
                      <div className="col-7" style={{ paddingRight: 0 }}>
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
                            name={"name"}
                            value={payload.family_list[1].name}
                            onChange={(event) => {
                              if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
                                event.preventDefault();
                                return;
                              }
                              _handleChange(1, event);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-5" style={{ paddingLeft: 3 }}>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Usia
                          </label>
                          <select
                            required={payload.family_list[1].name !== ""}
                            name={"age"}
                            onChange={(e) => _handleChange(1, e)}
                            className="form-select form-select-lg"
                            style={{
                              fontSize: "12px",
                              border: "0px",
                              boxShadow: "0px 2px #e3e3e3",
                            }}
                          >
                            <option selected disabled value="">
                              {" "}
                              Pilih umur
                            </option>
                            {AGES.map((age) => (
                              <option value={age}>
                                {age === 0 ? "0-1" : age} tahun
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-7" style={{ paddingRight: 0 }}>
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
                            name={"name"}
                            // onChange={(e) => _handleChange(2, e)}
                            value={payload.family_list[2].name}
                            onChange={(event) => {
                              if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
                                event.preventDefault();
                                return;
                              }
                              _handleChange(2, event);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-5" style={{ paddingLeft: 3 }}>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Usia
                          </label>
                          <select
                            required={payload.family_list[2].name !== ""}
                            name={"age"}
                            onChange={(e) => _handleChange(2, e)}
                            className="form-select form-select-lg"
                            style={{
                              fontSize: "12px",
                              border: "0px",
                              boxShadow: "0px 2px #e3e3e3",
                            }}
                          >
                            <option selected disabled value="">
                              {" "}
                              Pilih umur
                            </option>
                            {AGES.map((age) => (
                              <option value={age}>
                                {age === 0 ? "0-1" : age} tahun
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-7" style={{ paddingRight: 0 }}>
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
                            name={"name"}
                            // onChange={(e) => _handleChange(3, e)}
                            value={payload.family_list[3].name}
                            onChange={(event) => {
                              if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
                                event.preventDefault();
                                return;
                              }
                              _handleChange(3, event);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-5" style={{ paddingLeft: 3 }}>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Usia
                          </label>
                          <select
                            required={payload.family_list[3].name !== ""}
                            name={"age"}
                            onChange={(e) => _handleChange(3, e)}
                            className="form-select form-select-lg"
                            style={{
                              fontSize: "12px",
                              border: "0px",
                              boxShadow: "0px 2px #e3e3e3",
                            }}
                          >
                            <option selected disabled value="">
                              {" "}
                              Pilih umur
                            </option>
                            {AGES.map((age) => (
                              <option value={age}>
                                {age === 0 ? "0-1" : age} tahun
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-7" style={{ paddingRight: 0 }}>
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
                            name={"name"}
                            // onChange={(e) => _handleChange(4, e)}
                            value={payload.family_list[4].name}
                            onChange={(event) => {
                              if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
                                event.preventDefault();
                                return;
                              }
                              _handleChange(4, event);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-5" style={{ paddingLeft: 3 }}>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Usia
                          </label>
                          <select
                            required={payload.family_list[4].name !== ""}
                            name={"age"}
                            onChange={(e) => _handleChange(4, e)}
                            className="form-select form-select-lg"
                            style={{
                              fontSize: "12px",
                              border: "0px",
                              boxShadow: "0px 2px #e3e3e3",
                            }}
                          >
                            <option selected disabled value="">
                              {" "}
                              Pilih umur
                            </option>
                            {AGES.map((age) => (
                              <option value={age}>
                                {age === 0 ? "0-1" : age} tahun
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-7" style={{ paddingRight: 0 }}>
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
                            name={"name"}
                            // onChange={(e) => _handleChange(5, e)}
                            value={payload.family_list[5].name}
                            onChange={(event) => {
                              if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
                                event.preventDefault();
                                return;
                              }
                              _handleChange(5, event);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-5" style={{ paddingLeft: 3 }}>
                        <div className="form-group">
                          <label
                            style={{
                              fontWeight: "bold",
                              color: "#010040",
                              fontSize: "11px",
                            }}
                          >
                            Usia
                          </label>
                          <select
                            required={payload.family_list[5].name !== ""}
                            name={"age"}
                            onChange={(e) => _handleChange(5, e)}
                            className="form-select form-select-lg"
                            style={{
                              fontSize: "12px",
                              border: "0px",
                              boxShadow: "0px 2px #e3e3e3",
                            }}
                          >
                            <option selected disabled value="">
                              {" "}
                              Pilih umur
                            </option>
                            {AGES.map((age) => (
                              <option value={age}>
                                {age === 0 ? "0-1" : age} tahun
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="text-center d-grid mt-2 actions">
                      <button
                        disabled={!(payload.family_list.filter(item => item.name !== '').length > 0)}
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
                      <button
                        disabled={!(payload.family_list.every(item => item.name === ''))}
                        type="submit"
                        className="btn btn-warning btn-lg btn-block mt-3"
                        style={{                        
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          background: "#f9af02",
                          textTransform: "uppercase",
                          fontSize: "13px",
                          fontWeight: "800",
                        }}
                      >
                        BELUM BERKELUARGA
                      </button>
                      <p
                        className="mt-3 mb-3"
                        style={{ fontSize: "10px", color: "grey" }}
                      >
                        Anda sudah mendaftar? Masuk sekarang
                      </p>
                      <button
                        className="btn btn-lg"
                        onClick={_goToLoginPage}
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
                      </button>
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
