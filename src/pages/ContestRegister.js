import LoadingScreen from 'react-loading-screen';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Events, UserEvents } from "../services";
import Background from "./../BG1.svg";
import { showToast } from "./utils/helper";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./styles/register.css";
import "./styles/contest-register.css";

import $ from "jquery";
import { CITY, CONTEST_RULE } from './utils/constants';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
export default function ContestRegister() {
  const navigate = useNavigate();
  const events = new Events();
  const user_events = new UserEvents();

  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingGetChildrenRegistered, setLoadingGetChildrenRegistered] =
    useState(false);
  const [eventList, setEventList] = useState([]);
  const [eventDetail, setEventDetail] = useState(null);
  const [active, setActive] = useState(0);
  const [family, setFamily] = useState();
  const [children, setChildren] = useState(null);
  const [childrenRegistered, setChildrenRegistered] = useState(null);
  const [mode, setMode] = useState(0); // 0 is register, 1 is view
  const [childNonRegistered, setChildNonRegistered] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (!data) {
      navigate("/login");
      return;
    }

    if (data.branches !== Number(CITY.Jakarta)) {
      navigate('/home');
    }
    $("#addModal").modal({ backdrop: "static", keyboard: false });
    // get only children
    data.family.splice(0, 1);

    setFamily(data.family);
    const fetchEvents = async () => {
      const resp = await events.list();
      if (resp.code !== 200) {
        return showToast("error", resp.message);
      }
      const eventData = resp.results;
      setEventList([...eventData]);

      await getDetailEvent(eventData[0]);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  const getChildrenRegistered = async (event) => {
    setLoadingGetChildrenRegistered(true);
    try {
      const resp = await user_events.getBySubEventID(event.sub_events[0].id);
      setChildrenRegistered([...resp.results]);

      // set child non registered
      const data= JSON.parse(localStorage.getItem('user'));
      data.family.splice(0, 1);

      console.log(data.family);
      const f = family?.length > 0 ? family : data.family;
      var childNonRegisteredArr = []
      for (let i = 0; i < f.length; i++) {
        let found = false // flag
        for (let j = 0; j < resp.results.length && !found; j++) {
          found = f[i].id === resp.results[j].id
        }        
        if (!found) childNonRegisteredArr.push(f[i])
      }

      setChildNonRegistered([...childNonRegisteredArr])
      setLoadingGetChildrenRegistered(false);
    } catch (error) {
      console.error(error);
      let d = [];
      if (!family) {        
        const data= await JSON.parse(localStorage.getItem('user'));
        data.family.splice(0, 1);

        d = [...data.family];
      } else {
        d = [...family];
      }
      setChildNonRegistered([...d]);
      setLoadingGetChildrenRegistered(false);
    }
  };

  const getDetailEvent = async (event) => {
    setEventDetail({ ...event });
    await getChildrenRegistered(event);
  };

  const handleSubmitUserEvent = async () => {
    const payload = {
      family_id: children.id,
      sub_event_id: eventDetail.sub_events[0].id,
    };

    setLoadingSubmit(true);
    try {
      await user_events.create(payload);

      showToast("success", "Data berhasil disimpan.");
      setLoadingSubmit(false);
      await getDetailEvent(eventDetail);

      document.getElementById("openModal").click();
    } catch (err) {
      console.error(err);
      let error = err.message;

      if (err.message === "children-already-registered") {
        error = "Anak sudah terdaftar di lomba ini. 1 anak hanya bisa 1 lomba";
      } else if (err.message === "invalid-children-age") {
        error = "Usia anak melebih ketentuan persyaratan lomba.";
      } else if (err.message === "insufficient-slots") {
        error = "Maaf quota daftar lomba sudah habis";
      }

      showToast("error", error);
      setLoadingSubmit(false);
    }
  };

  const handleChangeSlide = (event, i) => {
    resetPayload(true);
    getDetailEvent(event);
    setActive(i);
  };

  const resetPayload = (changeSlide = false) => {    
    setEventDetail(null);
    setChildrenRegistered(null);
    setChildren(null);
  };
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
              <LazyLoadImage
                effect="blur"
                className="img-fluid mb-2 mx-3"
                src="assets/img/icon/lomba.png"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="text-center" style={{ fontWeight: "bold" }}>
                Daftar Lomba
              </span>
            </li>
          </ol>
        </div>
        <div className="container-fluid mt-1 mb-5">
          <div className="row justify-content-center">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
              <div className="carousel-wrapper">
                <Carousel
                  selectedItem={active}
                  infiniteLoop
                  useKeyboardArrows
                  swipeable={false}
                  showThumbs={false}
                  showArrows
                  showStatus={false}
                  onChange={(number) => {
                    handleChangeSlide(eventList[number], number);
                  }}
                >
                  {!loading &&
                    eventList?.length > 0 &&
                    eventList.map((event, i) => (
                      <div
                        style={{
                          padding: "20px",
                          background: "white",
                          borderRadius: "10px",
                          minHeight: "450px",
                          maxHeight: "650px",
                          textAlign: "left",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            marginBottom: "-8px",
                            color: "#10193a",
                          }}
                        >
                          {event.name}
                        </p>
                        <small
                          className="text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          Berlaku untuk usia {event.category_age} Tahun{" "}
                        </small>
                        <div className="row">
                          <div
                            className="col-12"
                            style={{ minHeight: "200px" }}
                          >
                            <LazyLoadImage
                              effect="blur"
                              src={event.banner}
                              className="img-fluid mt-3"
                              style={{
                                backgroundRepeat: "no-repeat",
                                borderRadius: "10px",
                              }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-9" style={{ paddingRight: "0" }}>
                            <div className="text-center d-grid">
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#addModal"
                                disabled={loadingGetChildrenRegistered}
                                onClick={() => {
                                  setMode(0);
                                }}
                                className="btn btn-warning btn-lg mt-3 btn-block"
                                style={{
                                  paddingTop: "10px",
                                  paddingBottom: "10px",
                                  background: "#f9af02",
                                  textTransform: "uppercase",
                                  fontSize: "13px",
                                  fontWeight: "800",
                                  display: "flex",
                                  justifyContent: "center",
                                  color: "#10193a",
                                }}
                              >
                                DAFTAR
                              </a>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="text-center d-grid">
                              <button
                                className="btn btn-lg mt-3 btn-block"
                                style={{
                                  paddingTop: "10px",
                                  paddingBottom: "10px",
                                  textTransform: "uppercase",
                                  fontSize: "13px",
                                  fontWeight: "800",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <a
                                  onClick={() => {
                                    setMode(1);
                                  }}
                                  id="openModal"
                                  data-bs-toggle="modal"
                                  data-bs-target="#addModal"
                                >
                                  <i
                                    className="fa fa-eye"
                                    style={{
                                      fontSize: "20px",
                                      color:
                                        childrenRegistered !== null
                                          ? "blue"
                                          : "#d8d8d8",
                                    }}
                                  ></i>
                                </a>
                              </button>
                            </div>
                          </div>
                          <div className="crd col-11 mt-3 mb-5">
                            <ul style={{ textAlign: "left" }}>
                              {CONTEST_RULE.find(
                                (item) => item.id === event.id
                              ).text.map((r, i) => (
                                <li
                                  key={i}
                                  className="mb-1"
                                  style={{ fontSize: "13px" }}
                                >
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EYE MODAL */}
      <div
        class="modal fade"
        id="addModal"
        tabindex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <button
                // onClick={() => resetPayload(false)}
                id="closeModal"
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ float: "right", color: "red" }}
              ></button>
              <div className="row justify-content-center">
                <div className="col-12">
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "-8px",
                      color: "#10193a",
                    }}
                  >
                    {eventDetail?.name}
                  </p>
                  <small className="text-muted" style={{ fontSize: "12px" }}>
                    Berlaku untuk usia {eventDetail?.category_age} Tahun
                  </small>
                </div>
                <div className="col-11">
                  <div className="text-center d-grid">
                    <button
                      disabled={mode === 1 || loadingSubmit || childNonRegistered?.length < 1}
                      onClick={() => mode === 0 ? handleSubmitUserEvent() : null}
                      
                      className="btn btn-warning btn-lg mt-3 btn-block"
                      style={{
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        background: "#f9af02",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        fontWeight: "800",
                        display: "flex",
                        justifyContent: "center",
                        color: "#10193a",
                      }}
                    >
                      SIMPAN
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="crd col-12 mb-5">
              <ul className="list-group list-group-flush">              
                {
                mode === 0
                ? childNonRegistered?.length > 0 &&
                  childNonRegistered.map((child, i) => (
                    <li className="list-group-item" key={i}>
                      <div
                        class="form-check"
                        onClick={() =>
                          setChildren({ ...child })
                        }
                      >

                        <input
                          checked={children?.id === child.id}
                          class="form-check-input ml-1"
                          type="radio"
                          name="flexRadioDefault"
                          id={`flexRadioDefault-${i}`}                          
                        />
                        <label
                          class="form-check-label mx-3"
                          for={`flexRadioDefault-${i}`}
                          style={{
                            fontSize: "14px",                            
                          }}
                        >
                          {child.name}
                        </label>
                        <span
                          className="mx-3"
                          style={{
                            float: "right",
                            fontSize: "14px",                           
                          }}
                        >
                          {child.age} Tahun
                        </span>
                      </div>
                    </li>
                  ))                                  
                : 
                childrenRegistered?.length > 0 &&
                  childrenRegistered.map((child, i) => (
                    <li className="list-group-item" key={i}>
                      <div class="form-check">

                        <input
                          class="form-check-input ml-1"
                          type="checkbox"
                          name="flexRadioDefault"
                          id={`flexRadioDefault-${i}`}
                          checked
                        />
                        <label
                          class="form-check-label mx-3"
                          for={`flexRadioDefault-${i}`}
                          style={{
                            fontSize: "14px",
                            color: 'red'
                          }}
                        >
                          {child.name}
                        </label>
                        <span
                          className="mx-3"
                          style={{
                            float: "right",
                            fontSize: "14px",
                            color: 'red'
                          }}
                        >
                          {child.age} Tahun
                        </span>
                      </div>
                    </li>
                  ))                                               
                }                
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
