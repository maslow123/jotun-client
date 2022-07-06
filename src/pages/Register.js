import React, { useEffect, useState } from "react";
import { showToast, validate } from "./utils/helper";
import { useNavigate } from "react-router-dom";
import { Master } from "../services";
import Background from "./../BG1.svg";
export default function Register() {
  const navigate = useNavigate();
  const master_service = new Master();
  const [isLoad, setLoad] = useState(false);
  const [payload, setPayload] = useState({    
      name: "",
      phone_number: "",
      confirm_phone_number: "",
      department: "",
      branches: "",
      level: 0
  });

  const [master, setMaster] = useState(null);
  useEffect(() => {
    // 
    const data = JSON.parse(localStorage.getItem('register-payload'));
    if (data) {
      setPayload({ ...data });
    }

    const fetchDataMaster = async () => {
      const resp = await master_service.list();
      if (resp.code !== 200) {
        return showToast('error', resp.message);
      }

      const masterData = resp.results;
      setMaster({ ...masterData })
      setLoad(true);
    };
    if (!isLoad) {
      fetchDataMaster();
    }

  }, []);


  const _handleSubmit = e => {
    e.preventDefault();
    const errors = validate(payload);
    if (errors.length > 0) {
      const phoneNumberNotMatch = errors.find(err => err === 'phone-number-not-match');
      if (phoneNumberNotMatch) {
        return showToast('error', 'Nomor whatsapp tidak sama, harap periksa kembali');
      }
      return showToast('error', JSON.stringify(errors));
    }

    // save payload to localstorage
    const p = { ...payload };
    if ( Number(p.branches) !== 1) { delete p.transportation };
    localStorage.setItem('register-payload', JSON.stringify(payload));
    navigate('/confirm-register');
  };

  const _handleChange = evt => {
    
    const value = evt.target.value;
    const name = evt.target.name;

    setPayload({ ...payload, [name]: value });
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
                    Daftar Diri
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
                        Nama
                      </label>
                      <input
                        onChange={(event) => {
                          if (!/^[a-zA-Z ]*$/.test(event.target.value)) {
                            event.preventDefault();
                            return;
                          }
                          _handleChange(event);
                        }}
                        required
                        type="text"
                        className="form-control p-2"
                        placeholder="contoh : Ahmad Taufik"
                        aria-label="name"
                        style={{ fontSize: "12px" }}
                        name="name"
                        value={payload.name}
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
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        required
                        type="text"
                        className="form-control p-2"
                        placeholder="contoh : 08267492942"
                        aria-label="notelp"
                        style={{ fontSize: "12px" }}
                        name="phone_number"
                        onChange={_handleChange}
                        value={payload.phone_number}
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
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        required
                        type="text"
                        className="form-control p-2"
                        placeholder="contoh : 08267492942"
                        aria-label="notelp"
                        style={{ fontSize: "12px" }}
                        name="confirm_phone_number"
                        onChange={_handleChange}
                        value={payload.confirm_phone_number}
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
                      <select
                        required
                        name="department"
                        onChange={_handleChange}
                        className="form-select form-select-lg"
                        style={{
                          fontSize: "12px",
                          border: "0px",
                          boxShadow: "0px 2px #e3e3e3",
                        }}
                      >
                        <option selected disabled value="">
                          Pilih Departemen anda saat ini
                        </option>
                        {master?.master_departments?.length &&
                          master.master_departments.map((item) => (
                            <option
                              selected={payload.department === item.id}
                              value={item.id}
                            >
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label
                        style={{
                          fontWeight: "bold",
                          color: "#010040",
                          fontSize: "11px",
                        }}
                      >
                        Lokasi
                      </label>
                      <select
                        name="branches"
                        onChange={_handleChange}
                        required
                        className="form-select form-select-lg"
                        style={{
                          fontSize: "12px",
                          border: "0px",
                          boxShadow: "0px 2px #e3e3e3",
                        }}
                      >
                        <option selected disabled value="">
                          Pilih Kantor Cabang anda
                        </option>
                        {master?.master_branches?.length &&
                          master.master_branches.map((item) => (
                            <option
                              selected={payload.branches === item.id}
                              value={item.id}
                            >
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    {Number(payload.branches) === 1 && (
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
                        <select
                          name="transportation"
                          onChange={_handleChange}
                          required
                          className="form-select form-select-lg"
                          style={{
                            fontSize: "12px",
                            border: "0px",
                            boxShadow: "0px 2px #e3e3e3",
                          }}
                        >
                          <option selected disabled value="">
                            Pilih transportasi anda
                          </option>
                          {master?.master_transportations?.length &&
                            master.master_transportations.map((item) => (
                              <option
                                selected={payload.transportation === item.id}
                                value={item.id}
                              >
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    )}

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
                        onClick={() => navigate('/login')}
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
    </div>
  );
}
