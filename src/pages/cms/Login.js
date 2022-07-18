import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
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
                      <form action="" className="row g-4">
                        <div className="col-12">
                          <label className="mb-1">Username</label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="fa fa-user"></i>
                            </div>
                            <input
                              type="text"
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
                              type="text"
                              className="form-control"
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            onClick={() => navigate("/dashboard")}
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
                      <i className="fa fa-circle-info mt-5 mb-3"></i>
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
