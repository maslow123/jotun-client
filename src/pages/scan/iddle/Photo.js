import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../../../bgscan/background/photo.png";
import { QrReader } from "react-qr-reader";
import { Scan } from "../../../services";
import FadeIn from "react-fade-in";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function Photo() {
  const [data, setData] = useState("No result");
  const [show, setShow] = useState("show");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // const doScan = async () => {
    //   const payload = {
    //     code: 'FOTO',
    //     key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiI2MjgxNjgzNDYzMSIsIm5hbWUiOiJaZW5pdGhhIGZpdHJpYXRpIiwiaWF0IjoxNjU3MzMyNDI2LCJleHAiOjE2NTc0MTg4MjZ9.lTlrw7eyj5URWqOwU5pFYjAoPhcv5K9kp4evfnwqMGM'
    //   };

    //   try {
    //     if (!loading) {
    //       setLoading(true);
    //       const scan = new Scan();
    //       const resp = await scan.doScan(payload);

    //       if (resp.status === 200) {
    //         // save user data to localstorage
    //         localStorage.setItem('user-scan', JSON.stringify(resp.data))
    //         if (resp.state === 'new') {
    //           return navigate('/venue/photo/success');
    //         }

    //         localStorage.setItem('error', resp.message);
    //         localStorage.setItem('state', resp.state);
    //         // return navigate('/venue/photo/error');
    //       }
    //       setLoading(false);
    //     }
    //   } catch(e) {
    //     localStorage.setItem('error', e.message)
    //     if (e.status === 422) {
    //       localStorage.setItem('user-scan', JSON.stringify(e.data.user))
    //     }
    //     setLoading(false);
    //     // return navigate('/venue/photo/error');
    //   }
    // };

    // doScan();
    inputRef.current.focus();
    localStorage.clear();
  }, []);

  const _onResult = async (e, r) => {
    if (!!r) {
      const payload = {
        code: "FOTO",
        key: r.text,
      };

      try {
        if (!loading) {
          setLoading(true);
          const scan = new Scan();
          const resp = await scan.doScan(payload);

          if (resp.status === 200) {
            // save user data to localstorage
            localStorage.setItem("user-scan", JSON.stringify(resp.data));
            if (resp.state === "new") {
              return navigate("/venue/photo/success");
            }

            localStorage.setItem("error", resp.message);
            localStorage.setItem("state", resp.state);
            return navigate("/venue/photo/error");
          }
          setLoading(false);
        }
      } catch (e) {
        localStorage.setItem("error", e.message);
        if (e.status === 422) {
          localStorage.setItem("user-scan", JSON.stringify(e.data.user));
        }
        setLoading(false);
        return navigate("/venue/photo/error");
      }
    }
  };

  const onResult = async (value) => {
    const payload = {
      code: "FOTO",
      key: value,
    };

    try {
      if (!loading) {
        setLoading(true);
        const scan = new Scan();
        const resp = await scan.doScan(payload);

        if (resp.status === 200) {
          // save user data to localstorage
          localStorage.setItem("user-scan", JSON.stringify(resp.data));
          if (resp.state === "new") {
            return navigate("/venue/photo/success");
          }

          localStorage.setItem("error", resp.message);
          localStorage.setItem("state", resp.state);
          return navigate("/venue/photo/error");
        }
        setLoading(false);
      }
    } catch (e) {
      localStorage.setItem("error", e.message);
      if (e.status === 422) {
        localStorage.setItem("user-scan", JSON.stringify(e.data.user));
      }
      setLoading(false);
      return navigate("/venue/photo/error");
    }
  };
  const hide = () => {
    return setShow("hide");
  };
  const _show = () => {
    return setShow("show");
  };
  const inputRef = useRef(null);
  return (
    <div
      style={{ overflow: "hidden" }}
      className="row justify-content-center"
      onClick={() => inputRef.current.focus()}
    >
      <div
        className="bg-scan col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12"
        style={{
          background: `url(${Background}) top`,
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      >
        <FadeIn>
          <div className="container-fluid content-scan-iddle">
            <div className="row justify-content-center">
              <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mb-0">
                <div className="text-center">
                  <h2 className="mb-3 header">
                    <i>
                      Pengambilan <br />
                      <span style={{ fontSize: "50px", fontWeight: "normal" }}>
                        {" "}
                        Voucher photo booth 180
                      </span>
                    </i>
                  </h2>
                  <input
                    ref={inputRef}
                    type="text"
                    style={{
                      width: 0,
                      height: 0,
                      position: "relative",
                    }}
                    onKeyPress={(e) => {
                      if (e.key.trim() === "Enter") {
                        onResult(e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-3">
                {show === "hide" ? (
                  <>
                    <div className="bgqr2">
                      <BarcodeScannerComponent
                        className="qr2"
                        onUpdate={_onResult}
                        // onResult={_onResult}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="text-center mt-5">
                      <button
                        className="btn btn-md"
                        style={{
                          width: "140px",
                          background: "#feff00",
                          fontWeight: "bold",
                          color: "#000",
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 60,
                          margin: "auto",
                        }}
                        onClick={_show}
                      >
                        Camera
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bgqr">
                      <BarcodeScannerComponent
                        className="qr"
                        onUpdate={_onResult}
                        // onResult={_onResult}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="text-center mt-5">
                      {/* <h3
                        className="subheader mt-3"
                        style={{ fontWeight: "normal", fontSize: "30px" }}
                      >
                        SCAN DISINI
                      </h3> */}
                      <button
                        className="btn btn-md"
                        style={{
                          width: "140px",
                          background: "#feff00",
                          fontWeight: "bold",
                          color: "#000",
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 60,
                          margin: "auto",
                        }}
                        onClick={hide}
                      >
                        Camera
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
