import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../../../bgscan/background/photo.png";
import FadeIn from "react-fade-in";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BRANCHES, DEPARTMENTS } from "../../utils/constants";
export default function Video() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    let redirect = false;
    const interval = setInterval(() => {
      if (!redirect) {
        redirect = true;
      }
      if (redirect) {
        clearInterval(interval);
        return navigate("/venue/iddle-video");
      }
    }, 5000);
    const user = localStorage.getItem('user-scan');
    if (!user) {
      return navigate('/venue/iddle-video');
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
          overflow: "hidden",
        }}
      >
        <FadeIn>
          <div className="container-fluid content-scan">
            <div className="row justify-content-center">
              <div className="col"></div>
              <div className="col-2 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <img src="/assets/img/icon/success.png" width={100} />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <div className="text-center">
                  <h2 className="mb-3 header" style={{fontSize:'45px'}}>
                    <i>
                      Selamat bergaya 360 Family Jotun <br /> jangan lupa
                      posting di socmed kebahagiaan kamu
                    </i>
                  </h2>
                  <h2 className="mb-3 subheader">
                    {user?.user?.name} <br />{" "}
                    {DEPARTMENTS[user?.user?.department]} <br />
                    {BRANCHES[user?.user?.branches]}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
