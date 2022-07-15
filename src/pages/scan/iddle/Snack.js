import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../../../bgscan/background/snack.png";
import { QrReader } from "react-qr-reader";

export default function Snack() {
  const [data, setData] = useState("No result");
  const navigate = useNavigate();
  useEffect(() => {
    if (data !== "No result") {
      return navigate("/venue/snack/success");
    }
  });
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
                <h2 className="mb-3 header2" style={{ fontSize: "100px" }}>
                  <i>
                    Pengambilan <br />
                    <span style={{ fontSize: "80px", fontWeight: "normal" }}>
                      {" "}
                      Snack Anak <br /> Umur 1 - 12 tahun
                    </span>
                  </i>
                </h2>
              </div>
            </div>
            <div className="col-3">
              <div className="bgqr">
                <QrReader
                  className="qr"
                  onResult={(result, error) => {
                    if (!!result) {
                      setData(result?.text);
                    }

                    if (!!error) {
                      console.info(error);
                    }
                  }}
                  style={{ width: "100%" }}
                />
              </div>
              {/* <div className="text-center">
                <h3
                  className="subheader mt-3"
                  style={{ fontWeight: "normal", fontSize: "30px" }}
                >
                  SCAN DISINI
                </h3>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
