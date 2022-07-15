import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../../../bgscan/background/snack.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Snack() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem('user-scan');
    if (!user) {
      // return navigate('/venue/iddle-welcome');
    }

    setUser(JSON.parse(user));

  }, []);
  return (
    <div className="row justify-content-center">
      <div
        className="bg-scan col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12"
        style={{
          background: `url(${Background})`,
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        <div className="container-fluid" style={{ marginTop: "150px" }}>
          <div className="row justify-content-center">
            <div className="col"></div>
            <div className="col-2 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <img
                src="/assets/img/icon/success.png"
                className="mb-4"
                width={120}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
              <div className="text-center">
                <h2 className="mb-3 header2" style={{ fontSize: "48px" }}>
                  <i>Selamat menikmati snack buat kamu family jotun</i>
                </h2>
                <h2 className="mb-5 subheader2" style={{ fontSize: "30px" }}>
                  Firdawuz <br /> Powder Departemen <br />
                  Jakarta
                </h2>
                <h2 className="mb-0 subheader2" style={{ fontSize: "30px" }}>
                  Chelsea firdawuz - 12 tahun
                </h2>
                <h2 className="mb-0 subheader2" style={{ fontSize: "30px" }}>
                  Chelsea firdawuz - 12 tahun
                </h2>
                <h2 className="mb-0 subheader2" style={{ fontSize: "30px" }}>
                  Chelsea firdawuz - 12 tahun
                </h2>
                <h2 className="mb-0 subheader2" style={{ fontSize: "30px" }}>
                  Chelsea firdawuz - 12 tahun
                </h2>
                <h2 className="mb-0 subheader2" style={{ fontSize: "30px" }}>
                  Chelsea firdawuz - 12 tahun
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
