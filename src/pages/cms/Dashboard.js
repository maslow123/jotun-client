import React, { useEffect } from "react";
// import { MDBDataTableV5 } from "mdbreact";
export default function Dashboard() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "No",
        field: "no",
        width: 100,
        sort: "asc",
      },
      {
        label: "Nama",
        field: "name",
        width: 270,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
        sort: "disabled",
      },
      {
        label: "Whatsapp",
        field: "whatsapp",
        sort: "disabled",
        width: 270,
      },
      {
        label: "Departemen",
        field: "departemen",
        sort: "disabled",
        width: 200,
      },
      {
        label: "Lokasi",
        field: "lokasi",
        sort: "disabled",
        width: 200,
      },
      {
        label: "Kendaraan",
        field: "kendaraan",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Istri",
        field: "istri",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Anak I",
        field: "anak1",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Anak II",
        field: "anak2",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Anak III",
        field: "anak3",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Anak VI",
        field: "anak4",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Anak V",
        field: "anak5",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Option",
        field: "option",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: [
      {
        no: 1,
        name: "Ujang samaja",
        whatsapp: "0821723823",
        departemen: "Finance & IT",
        lokasi: "Jakarta",
        kendaraan: "Motor",
        istri: "Juleha",
        anak1: "Fuad islah",
        anak2: "Audeta sandi",
        anak3: "-",
        anak4: "-",
        anak5: "-",
        option: (
          <>
            <i
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              className="fa fa-edit px-1"
            ></i>
          </>
        ),
      },
      {
        no: 2,
        name: "Dandi",
        whatsapp: "0821723823",
        departemen: "Finance & IT",
        lokasi: "Bandung",
        kendaraan: "Mobil",
        istri: "Denis",
        anak1: "-",
        anak2: "-",
        anak3: "-",
        anak4: "-",
        anak5: "-",
        option: (
          <>
            <i
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              className="fa fa-edit px-1"
            ></i>
          </>
        ),
      },
    ],
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button
              className="btn btn-primary mt-5"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              Create
            </button>
            <div className="table-responsive">
              {/* <MDBDataTableV5
                hover
                entriesOptions={[5, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={datatable}
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* Modal add */}
      <div
        className="modal fade"
        id="addModal"
        tabindex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" style={{ top: "0px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addModalLabel">
                Create data
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Nama Karyawan</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="contoh : Ahmad Taufik"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        No Whatsapp anda
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="contoh : 0827283823"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Konfirmasi No Whatsapp
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="contoh : 0827283823"
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Departemen</label>
                      <select className="form-control">
                        <option selected>Pilih Departemen anda</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Lokasi</label>
                      <select className="form-control">
                        <option selected>Pilih Lokasi anda</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Transportasi</label>
                      <select className="form-control">
                        <option selected>Pilih Transportasi anda</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Nama Istri</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nama istri"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak pertama
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Pertama"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Nama Anak Kedua</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Kedua"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Ketiga
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Ketiga"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Keempat
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Keempat"
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Kelima
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Kelima"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal edit */}
      <div
        className="modal fade"
        id="editModal"
        tabindex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" style={{ top: "0px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">
                Edit data
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Nama Karyawan</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="contoh : Ahmad Taufik"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        No Whatsapp anda
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="contoh : 0827283823"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Konfirmasi No Whatsapp
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="contoh : 0827283823"
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Departemen</label>
                      <select className="form-control">
                        <option selected>Pilih Departemen anda</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Lokasi</label>
                      <select className="form-control">
                        <option selected>Pilih Lokasi anda</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Transportasi</label>
                      <select className="form-control">
                        <option selected>Pilih Transportasi anda</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Nama Istri</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nama istri"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak pertama
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Pertama"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Nama Anak Kedua</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Kedua"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Ketiga
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Ketiga"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Keempat
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Keempat"
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Kelima
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Kelima"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
