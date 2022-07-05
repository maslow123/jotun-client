import LoadingScreen from 'react-loading-screen';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Events, UserEvents } from "../services";
import Background from "./../BG1.svg";
import { showToast } from "./utils/helper";
export default function ContestRegister() {
  const navigate = useNavigate();
  const events = new Events();
  const user_events = new UserEvents();

  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingGetChildrenRegistered, setLoadingGetChildrenRegistered] = useState(false);
  const [eventList, setEventList] = useState([]);
  const [eventDetail, setEventDetail] = useState(null);
  const [active, setActive] = useState(0);
  const [family, setFamily] = useState();
  const [children, setChildren] = useState(null);
  const [childrenRegistered, setChildrenRegistered] = useState(null);
  
  useEffect(() => {        
    const data = JSON.parse(localStorage.getItem("user"));
    if (!data) {
      navigate("/login");
      return;
    }

    // get only children
    data.family.splice(0, 1);

    setFamily(data.family);
    const fetchEvents = async () => {
      const resp = await events.list();
      if (resp.code !== 200) {
        return showToast('error', resp.message);
      }
      const eventData = resp.results;
      setEventList([...eventData]);

      setLoading(false);
    };

    fetchEvents();
  }, []);

  const getChildrenRegistered = async (event) => {
    setLoadingGetChildrenRegistered(true);
    try {
      
      const resp = await user_events.getBySubEventID(event.sub_events[0].id);
      setChildrenRegistered({ ...resp.results });
      setLoadingGetChildrenRegistered(false);
    } catch(error) {
      console.error(error);
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
      sub_event_id: eventDetail.sub_events[0].id
    };

    setLoadingSubmit(true);
    try {
      await user_events.create(payload);
      
      showToast('success', 'Data berhasil disimpan.')
      setLoadingSubmit(false);
      document.getElementById('closeModal').click();
    } catch(err) {
      console.error(err);
      showToast('error', err.message);
      setLoadingSubmit(false);
    }
  };

  const handleChangeSlide = (event, i) => {
    resetPayload();
    getDetailEvent(event)
    setActive(i);
  }

  const resetPayload = () => {
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
        className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        style={{
          backgroundImage: `url(${Background})`,
          margin: 0,
          padding: 0,
          overflowX: "hidden",
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
              <a href="/home">
                <i
                  className="fa fa-angle-left"
                  style={{ fontSize: "25px", color: "#ffc107" }}
                ></i>
              </a>
              <img
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
        <div className="container-fluid mt-5">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-touch="true"
            data-ride="carousel"
            data-interval="false"
            style={{
              marginTop: "-15px",
            }}
          >
            <div
              className="carousel-indicators"
              style={{ marginBottom: "-30px" }}
            >
              {eventList?.length > 0 && eventList.map((event, i) => (
                <button
                  onClick={() => handleChangeSlide(event, i)}
                  key={i}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={`${active}`}
                  className={`${active === i ? 'active' : ''} `}
                  aria-current="true"
                  aria-label={`Slide ${active}`}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                  }}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {/* start mapping data */}                              
              <>
              {!loading && eventList?.length > 0 && eventList.map((event, i) => (
                <div
                  key={i}
                  className={`carousel-item ${i === active ? 'active' : ''}`}
                  style={{ marginRight: "50px" }}
                >
                  <div
                    className="card p-1"
                    style={{ borderRadius: "8px", maxHeight: "550px" }}
                  >
                    <div className="card-body">
                      <p
                        style={{
                          fontWeight: "bold",
                          marginBottom: "-8px",
                          color: "#10193a",
                        }}
                      >
                        {event.name}
                      </p>
                      <small className="text-muted" style={{ fontSize: "12px" }}>
                        Berlaku untuk usia {event.category_age} Tahun{" "}
                      </small>
                      <div className="row">
                        <div className="col-12">
                          <img
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
                            <button                     
                              disabled={loadingGetChildrenRegistered}
                              onClick={() =>  document.getElementById('openModal').click()}                             
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
                            </button>
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
                                id="openModal"                                
                                href
                                data-bs-toggle="modal"
                                data-bs-target="#addModal"
                              >
                                <i
                                  className="fa fa-eye"
                                  style={{ fontSize: "20px", color: childrenRegistered ? 'blue' : "#d8d8d8" }}
                                ></i>
                              </a>
                            </button>
                          </div>
                        </div>
                        <div className="crd col-11 mt-3 mb-3">
                          <ul>
                            <li className="mb-1" style={{ fontSize: "13px" }}>
                              Acara Lomba dimulai jam 5:30 WIB di tempat
                            </li>
                            <li className="mb-1" style={{ fontSize: "13px" }}>
                              Acara Lomba dimulai jam 5:30 WIB di
                            </li>
                            <li className="mb-1" style={{ fontSize: "13px" }}>
                              Acara Lomba dimulai jam 5:30 WIB di tempat
                            </li>
                            <li className="mb-1" style={{ fontSize: "13px" }}>
                              Acara Lomba dimulai jam 5:30 WIB di tempat
                            </li>
                            <li className="mb-1" style={{ fontSize: "13px" }}>
                              Acara Lomba dimulai jam 5:30 WIB di tempat
                            </li>
                            <li className="mb-1" style={{ fontSize: "13px" }}>
                              Acara Lomba dimulai jam 5:30 WIB di tempat
                            </li>
                            <li className="mb-1" style={{ fontSize: "13px" }}>
                              Acara Lomba dimulai jam 5:30 WIB di tempat
                            </li>
                            <li className="mb-1" style={{ fontSize: "13px" }}>
                              Acara Lomba dimulai jam 5:30 WIB di tempat
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </> 
                
              
            </div>
          </div>
        </div>
      </div>
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
                onClick={resetPayload}
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
                      disabled={(childrenRegistered !== null || loadingSubmit) ? true : false}
                      onClick={() => childrenRegistered === null ? handleSubmitUserEvent() : {} }
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
                {family?.length > 0 && family.map((child, i) => (
                  <li className="list-group-item" key={i}>
                    <div 
                      class="form-check" 
                      onClick={() => childrenRegistered === null ? setChildren({ ...child }) : {} }>
                      <input
                        disabled={childrenRegistered !== null ? true : false}
                        class="form-check-input ml-1"
                        type="radio"
                        name="flexRadioDefault"
                        id={`flexRadioDefault-${i}`}
                        checked={
                          childrenRegistered !== null
                          ? childrenRegistered?.id === child.id
                          : child.id === children?.id
                        }
                      />
                      <label
                        class="form-check-label mx-3"
                        for={`flexRadioDefault-${i}`}
                        style={{ fontSize: "14px", color: childrenRegistered?.id === child.id ? 'red' : 'black' }}
                      >
                        {child.name}
                      </label>
                      <span
                        className="mx-3"
                        style={{ float: "right", fontSize: "14px", color: childrenRegistered?.id === child.id ? 'red' : 'black' }}
                      >
                        {child.age} Tahun
                      </span>
                    </div>
                  </li>
                ))}               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
