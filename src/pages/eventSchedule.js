import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Schedules } from "../services";
import Background from "./../BG1.svg";
import LoadingScreen from 'react-loading-screen';

export default function EventSchedule() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [scheduleList, setScheduleList] = useState(null);

  useEffect(() => {
    const fetcSchedule = async () => {
      try {
        const schedules = new Schedules();

        const resp = await schedules.list();
        setScheduleList([...resp.results]);

        setLoading(false);
      } catch(err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetcSchedule();
    
  }, [])

  return (
    <div className="row justify-content-center">
      <LoadingScreen
        loading={loading}
        bgColor="rgba(0,0,0,0.5)"
        spinnerColor="#9ee5f8"
        textColor="#FFF"
        text={<>Sedang memuat data...</>}
      />
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
                src="assets/img/icon/jadwal.png"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="text-center" style={{ fontWeight: "bold" }}>
                Jadwal Acara
              </span>
            </li>
          </ol>
        </div>
        {/* <div className="container-fluid" style={{ marginTop: "200px" }}>
          <div
            className="text-center"
            style={{
              background: "white",
              padding: "5px",
              borderRadius: "50px",
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>AKAN DATANG</h2>
          </div>
        </div> */}
        <div className="px-2">
          <div className="row justify-content-center">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 mb-5">
              <div className="card">
                <div className="px-2 py-2">
                  <div className="row justify-content-center">
                    <div className="col-8">
                      <div className="d-grid">
                        <button
                          className="btn btn-warning btn-lg btn-block"
                          style={{
                            paddingLeft: "0px",
                            paddingRight: "20px",
                            paddingTop: "6px",
                            paddingBottom: "6px",
                            background: "transparent",
                            border: "1px solid #eaeaea",
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#12349e",
                          }}
                        >
                          <img
                            width={20}
                            height={20}
                            className="mx-2"
                            src="assets/img/icon/jadwal.png"
                          />
                          <span
                            className="mb-0 p-0"
                            style={{
                              fontSize: "11px",
                              lineHeight: 2,
                            }}
                          >
                            {/* Masuk ke Zoom */}
                            Jadwal Acara
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card crd2"
                style={{ maxHeight: "520px", overflowY: "scroll" }}
              >
                <ul class="list-group px-1 py-1">
                  {scheduleList?.length > 0 &&
                    scheduleList.map((schedule, key) => {
                      const date = "2022-07-23";
                      const fromDate = new Date(
                        `${date} ${schedule.time_start}`
                      ).getTime();
                      const toDate = new Date(
                        `${date} ${schedule.time_end}`
                      ).getTime();
                      const currentTime = new Date().getTime();

                      const isNow =
                        currentTime >= fromDate && currentTime <= toDate;
                      const color = isNow ? "orange" : "gray";

                      return (
                        <li class="list-group-item my-1" key={key}>
                          <div className="row">
                            <div className="col-4" style={{ paddingRight: 0 }}>
                              {/* <div className={`circle-${color} mt-1`}></div> */}
                              <p
                                className="p-0"
                                style={{
                                  fontSize: "10px",
                                  color: "#12349e",
                                  margin: 0,
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  // lineHeight: "14px",
                                }}
                              >
                                <i className="fa fa-clock mx-1"></i>
                                {schedule.time_start}-{schedule.time_end}
                              </p>
                            </div>
                            <div className="col-8" style={{ paddingLeft: 0 }}>
                              <p
                                className="p-0 m-0"
                                style={{
                                  fontSize: "10px",
                                  color: "#12349e",
                                  fontWeight: "bold",
                                }}
                              >
                                {schedule.description}
                              </p>
                              {/* <p
                              className="p-0 m-0"
                              style={{
                                fontSize: "9px",
                                color: "#12349e",
                                fontWeight: "normal",
                              }}
                            >
                              PIC Team Registrasi
                            </p> */}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  {/* <li class="list-group-item my-1">
                    <div className="row">
                      <div className="col-2" style={{ paddingRight: 0 }}>
                        <div className="circle-gray mt-1"></div>
                      </div>
                      <div className="col-10" style={{ paddingLeft: 0 }}>
                        <p
                          className="p-0 m-0"
                          style={{ fontSize: "9px", color: "#12349e" }}
                        >
                          <i className="fa fa-clock mx-1"></i>8.00 09.00 (60m)
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "bold",
                          }}
                        >
                          Registrasi - Kedatangan Peserta di hotel
                        </p>
                        <p
                          className="p-0 m-0"
                          style={{
                            fontSize: "9px",
                            color: "#12349e",
                            fontWeight: "normal",
                          }}
                        >
                          PIC Team Registrasi
                        </p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
