import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../../../bgscan/background/photo.png";
import { QrReader } from "react-qr-reader";
import { Scan } from "../../../services";

export default function Photo() {
  const [data, setData] = useState("No result");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, [])

  const _onResult = async (r, e) => {
    if (!!r) {
      const payload = {
        code: 'FOTO',
        key: r.text
      };
      
      try {
        if (!loading) {
          setLoading(true);
          const scan = new Scan();
          const resp = await scan.doScan(payload);
  
          if (resp.status === 200) {
            // save user data to localstorage
            localStorage.setItem('user-scan', JSON.stringify(resp.data.user))
            if (resp.state === 'new') {
              return navigate('/venue/photo/success');            
            }          
            return navigate('/venue/photo/error');                 
          }
          setLoading(false);
        }
      } catch(e) {        
        console.log({ e });
        localStorage.setItem('error', e.message)
        if (e.status === 422) {          
          localStorage.setItem('user-scan', JSON.stringify(e.data.user))
        }
        setLoading(false);
        return navigate('/venue/photo/error');    
      }
    }
  }
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
                  <i>
                    Pengambilan <br />
                    <span style={{ fontSize: "90px", fontWeight: "normal" }}>
                      {" "}
                      Voucher photo booth 180
                    </span>
                  </i>
                </h2>
              </div>
            </div>
            <div className="col-3">
              <div className="bgqr">
                <QrReader
                  className="qr"
                  onResult={_onResult}
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