import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Rewards from "../services/rewards";
import Background from "./../BG1.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Doorprize() {
  const navigate = useNavigate();
  const reward_service = new Rewards();
  const [loading, setLoading] = useState(true);
  const [rewards, setRewards] = useState(null);
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    const disableButton = async () => {
      const activeButtonDate = new Date('2022-07-24 00:00:00').getTime();
      const date = new Date().getTime();

      if (date >= activeButtonDate) {
        setDisable(false);
      }
    };
    const fetchRewardList = async () => {
      try {
        const resp = await reward_service.list();
        console.log(resp);
        setRewards(resp.results);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchRewardList();
    disableButton();
  }, []);
  const assets = [
    {
      name: "Yamaha N-MAX",
      stock: 2,
      image: "nmax.png",
    },
    {
      name: "Honda Genio",
      stock: 3,
      image: "genio.png",
    },
    {
      name: "ASUS LAPTOP A416KA INTEL N4500 8GB 256GB FHD",
      stock: 15,
      image: "asus.png",
    },
    {
      name: "Sepeda Lipat PACIFIC Blitz 3.0",
      stock: 10,
      image: "sepeda.png",
    },
    {
      name: "Samsung Galaxy A13",
      stock: 35,
      image: "samsung.png",
    },
  ];

  return (
    <div className="row justify-content-center">
      <div
        className="bg-mobile col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-12"
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "clip",
          position: "relative",
          minHeight: "1008px",
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
        <div
          className="crd2 px-3"
          style={{ maxHeight: "600px", overflowY: "scroll" }}
        >
          <div className="row justify-content-center">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
              <img
                src="assets/img/general/700jt.png"
                className="img-fluid"
                style={{ width: "100%", position: "relative" }}
                alt=""
              />
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            {rewards?.length &&
              rewards.map((reward, i) => (
                <div
                  key={i}
                  className="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 col-5"
                  style={{ padding: 5 }}
                >
                  <div
                    className="card"
                    style={{
                      borderRadius: "8px",
                      maxWidth: "100%",
                      height: 240,
                      overflow: "hidden",
                    }}
                  >
                    <div className="text-center my-3">
                      <LazyLoadImage
                        src={reward.image_url}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="mx-2 my-1">
                      <div className="text-center">
                        <p
                          className="mb-2"
                          style={{ fontWeight: "normal", fontSize: "11px" }}
                        >
                          <b>{reward.total}</b> {reward.item}
                        </p>
                        {disable === true ? (
                          <>
                            <a
                              // href={reward.document_url}
                              // disabled={true}
                              // target="_blank"
                              className="btn btn-xs"
                              style={{
                                margin: "auto",
                                width: "90px",
                                paddingTop: "2px",
                                paddingBottom: "2px",
                                paddingleft: 0,
                                paddingRight: "10px",
                                background: "#f9af02",
                                fontSize: "10px",
                                fontWeight: "800",
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 10,
                              }}
                              disabled
                            >
                              Lihat daftar <br /> pemenang
                            </a>
                          </>
                        ) : (
                          <>
                            <a
                              href={reward.document_url}
                              target="_blank"
                              className="btn btn-xs"
                              style={{
                                margin: "auto",
                                width: "90px",
                                paddingTop: "2px",
                                paddingBottom: "2px",
                                paddingleft: 0,
                                paddingRight: "10px",
                                background: "#f9af02",
                                fontSize: "10px",
                                fontWeight: "800",
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 10,
                              }}
                            >
                              Lihat daftar <br /> pemenang
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
