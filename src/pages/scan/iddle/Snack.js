import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./../../../bgscan/background/snack.png";
import { QrReader } from "react-qr-reader";
import { Scan } from "../../../services";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function Snack() {
  const [data, setData] = useState("No result");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // const doScan = async () => {
    //   const payload = {
    //     code: 'SNACK',
    //     key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiI2MjgxNjgzNDYzMSIsIm5hbWUiOiJaZW5pdGhhIGZpdHJpYXRpIiwiaWF0IjoxNjU3MzMyNDI2LCJleHAiOjE2NTc0MTg4MjZ9.lTlrw7eyj5URWqOwU5pFYjAoPhcv5K9kp4evfnwqMGM'
    //   };
      
    //   try {
    //     if (!loading) {
    //       setLoading(true);
    //       const scan = new Scan();
    //       const resp = await scan.doScan(payload);
          
    //       console.log({ resp });
    //       if (resp.status === 200) {
    //         // save user data to localstorage
    //         localStorage.setItem('user-scan', JSON.stringify(resp.data))
    //         if (resp.state === 'new') {
    //           return navigate('/venue/snack/success');            
    //         }       
            
    //         localStorage.setItem('state', resp.state);   
    //         return navigate('/venue/snack/error');                 
    //       }
    //       setLoading(false);
    //     }
    //   } catch(e) {        
    //     console.log({ e });
    //     localStorage.setItem('error', e.message)
    //     if (e.status === 422) {          
    //       localStorage.setItem('user-scan', JSON.stringify(e.data.user))
    //     }
    //     setLoading(false);
    //     return navigate('/venue/snack/error');    
    //   }
    // };

    // doScan();
    localStorage.clear();

    
  }, [])

  const _onResult = async (e, r) => {
    if (!!r) {
      const payload = {
        code: 'SNACK',
        key: r.text
      };
      
      try {
        if (!loading) {
          setLoading(true);
          const scan = new Scan();
          const resp = await scan.doScan(payload);
          
          console.log({ resp });
          if (resp.status === 200) {
            // save user data to localstorage
            localStorage.setItem('user-scan', JSON.stringify(resp.data))
            if (resp.state === 'new') {
              return navigate('/venue/snack/success');            
            }       
            
            localStorage.setItem('state', resp.state);   
            return navigate('/venue/snack/error');                 
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
        return navigate('/venue/snack/error');    
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
                <BarcodeScannerComponent
                  className="qr"
                  onUpdate={_onResult}
                  // onResult={_onResult}
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
