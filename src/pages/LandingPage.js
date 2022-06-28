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
            <a
              href="/register"
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
            </a>
          </div>
        </div>

        <div className="col-5">
          <div className="text-center d-grid">
            <a
              href="/login"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
