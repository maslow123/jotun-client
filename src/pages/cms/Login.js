import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "../../services";
import { showToast } from "../utils/helper";
export default function Login() {
  const user = new Users();
  const [payload, setPayload] = useState({
    phone_number: '',
    password: ''
  });
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {    
    e.preventDefault();

    try {
      setLoading(true);
      const resp = await user.loginHelpdesk(payload);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('helpdesk-data', JSON.stringify(resp.data));

      window.location.href = '/dashboard';
      setLoading(false);
    } catch(err) {
      console.log(err);
      if(err.code === 401) {
        showToast('error', 'Username atau password yang Anda masukkan salah.')
        setLoading(false);
        return
      }
      showToast('error', JSON.stringify(err));
      setLoading(false);
    }
  }
  return (
    <>
      <div className="login-page bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <h3 className="mb-3">Login</h3>
                      <form onSubmit={handleSubmit} className="row g-4">
                        <div className="col-12">
                          <label className="mb-1">Username</label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="fa fa-user"></i>
                            </div>
                            <input
                              required
                              type="text"
                              name="phone_number"
                              value={payload.phone_number}
                              onChange={(e) =>
                                setPayload({
                                  ...payload,
                                  phone_number: e.target.value,
                                })
                              }
                              className="form-control"
                              placeholder="Enter Username"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label className="mb-1">Password</label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="fa fa-lock"></i>
                            </div>
                            <input
                              required
                              type="password"
                              name="password"
                              value={payload.password}
                              onChange={(e) =>
                                setPayload({
                                  ...payload,
                                  password: e.target.value,
                                })
                              }
                              className="form-control"
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            disabled={loading}
                            type="submit"
                            className="btn btn-primary px-5 float-end"
                          >
                            login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                      <i className="fa fa-info mt-5 mb-3"></i>
                      <h4 className="fs-1">Help desk</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
