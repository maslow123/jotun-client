import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../../../bgscan/background/iddle-welcome.png";
import { QrReader } from "react-qr-reader";
import { Scan } from "../../../services";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import FadeIn from "react-fade-in";
export default function Welcome() {
  const [data, setData] = useState("No result");
  const [show, setShow] = useState("show");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    inputRef.current.focus();
    localStorage.clear();
  }, []);

  const _onResult = async (e, r) => {
    // console.log({ e }, { r });
    if (!!r) {
      const payload = {
        code: "KEHADIRAN",
        key: r.text,
      };

      try {
        if (!loading) {
          setLoading(true);
          const scan = new Scan();
          const resp = await scan.doScan(payload);

          if (resp.status === 200) {
            // save user data to localstorage
            localStorage.setItem("user-scan", JSON.stringify(resp.data.user));
            if (resp.state === "update") {
              // welcome back
              return navigate("/venue/welcomeback/success");
            }
            // welcome
            return navigate("/venue/welcome/success");
          }
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        return navigate("/venue/welcome/error");
      }
    }
  };

  const onResult = async (val) => {
    // console.log({ e }, { r });
    const payload = {
      code: "KEHADIRAN",
      key: val,
    };

    try {
      if (!loading) {
        setLoading(true);
        const scan = new Scan();
        const resp = await scan.doScan(payload);

        if (resp.status === 200) {
          // save user data to localstorage
          localStorage.setItem("user-scan", JSON.stringify(resp.data.user));
          if (resp.state === "update") {
            // welcome back
            return navigate("/venue/welcomeback/success");
          }
          // welcome
          return navigate("/venue/welcome/success");
        }
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      return navigate("/venue/welcome/error");
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
      className="row justify-content-center"
      onClick={() => inputRef.current.focus()}
    >
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
        <FadeIn>
          <div className="container-fluid content-scan-iddle">
            <div className="row justify-content-center">
              <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mb-0">
                <div className="text-center">
                  <h2 className="mb-3 header">
                    <i>Daftar kehadiran</i>
                    <input
                      ref={inputRef}
                      type="text"
                      style={{ width: 0, height: 0, position: "absolute" }}
                      onKeyPress={(e) => {
                        if (e.key.trim() === "Enter") {
                          onResult(e.target.value);
                          e.target.value = "";
                        }
                      }}
                    />
                  </h2>
                </div>
              </div>
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
