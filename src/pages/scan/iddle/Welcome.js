import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../../../bgscan/background/iddle-welcome.png";
import { QrReader } from "react-qr-reader";
import { Scan } from "../../../services";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function Welcome() {
  const [data, setData] = useState("No result");
  const [show, setShow] = useState("show");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);

  const _onResult = async (e, r) => {
    console.log({ e }, { r });
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
  const hide = () => {
    return setShow("hide");
  };
  const _show = () => {
    return setShow("show");
  };
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
        <div className="container-fluid" style={{ marginTop: "300px" }}>
          <div className="row justify-content-center">
            <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mb-0">
              <div className="text-center">
                <h2 className="mb-3 header" style={{ fontSize: "100px" }}>
                  <i>Daftar kehadiran</i>
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
                  <div className="text-center">
                    <button className="btn btn-light btn-lg" onClick={_show}>
                      Show cam
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
                  <div className="text-center">
                    <h3
                      className="subheader mt-3"
                      style={{ fontWeight: "normal", fontSize: "30px" }}
                    >
                      SCAN DISINI
                    </h3>
                    <button className="btn btn-light btn-lg" onClick={hide}>
                      Hide
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
