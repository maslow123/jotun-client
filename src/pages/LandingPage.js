import React from "react";
export default function LandingPage() {
  return (
    <div>
      <img
        src="assets/img/landing_page/landing_page.svg"
        className="img-fluid"
        style={{ backgroundRepeat: "no-repeat", marginTop: "-38px" }}
        alt=""
      />
      <div
        className="row justify-content-center"
        style={{ marginTop: "-75px" }}
      >
        <div className="col-5">
          <div className="text-center d-grid">
            <button
              className="btn btn-warning btn-lg btn-block"
              style={{
                paddingTop: "11px",
                paddingBottom: "11px",
                background: "#f9af02",
                textTransform: "uppercase",
                fontSize: "13px",
                fontWeight: "800",
              }}
            >
              Daftar
            </button>
          </div>
        </div>

        <div className="col-5">
          <div className="text-center d-grid">
            <button
              className="btn btn-warning btn-lg btn-block"
              style={{
                paddingTop: "11px",
                paddingBottom: "11px",
                background: "#f9af02",
                textTransform: "uppercase",
                fontSize: "13px",
                fontWeight: "800",
              }}
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
