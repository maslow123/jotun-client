import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { Master, Users } from "../../services";
import { showToast, validate } from "../utils/helper";
import LoadingScreen from 'react-loading-screen';
// import { MDBDataTableV5 } from "mdbreact";
export default function Dashboard() {
  
  const [datatable, setDatatable] = useState({
    columns: [
      {
        name: "No",
        selector: row => row.id,
        width: 100,
        sortable: true
      },
      {
        name: "Nama",
        selector: row => row.name,
        width: 270,        
        sortable: false,
      },
      {
        name: "No Telepon",
        selector: row => row.phone_number,
        sortable: false,
        width: 270,
      },
      {
        name: "Departemen",
        selector: row => row.department_name,
        sortable: false,
        width: 200,
      },
      {
        name: "Lokasi",
        selector: row => row.branch_name,
        sortable: false,
        width: 200,
      },
      {
        name: "Kendaraan",
        selector: row => row.transportation_name,
        sortable: false,
        width: 150,
      },
      {
        name: "QR Link",
        selector: row => row.qr_code_url,
        sortable: false,
        width: 150,
      },      
      {
        name: "Option",
        selector: row => row.option,
        sortable: false,
        width: 100,
      },
    ],
    rows: [],
  });
  const [payload, setPayload] = useState({
    name: "",
    phone_number: "",
    confirm_phone_number: "",
    department: "",
    branches: "",
    transportation: "",
    level: 0,
    family_list: [
      {
        name: "",
        age: 0,
      },
      {
        name: "",
        age: 0,
      },
      {
        name: "",
        age: 0,
      },
      {
        name: "",
        age: 0,
      },
      {
        name: "",
        age: 0,
      },
      {
        name: "",
        age: 0,
      },
    ],
  });

  const [userList, setUserList] = useState(null);
  const [master, setMaster] = useState(null);
  const [loading, setLoading] = useState(false);
  const master_service = new Master();
  const user_service = new Users();

  useEffect(() => {
    const fetchDataMaster = async () => {
      const resp = await master_service.list();
      if (resp.code !== 200) {
        return showToast("error", resp.message);
      }

      const masterData = resp.results;
      setMaster({ ...masterData });
    };

    const fetchUser = async () => {
      await fetchUserList();
    }
    fetchDataMaster();    
    fetchUser();
  }, []);

  const fetchUserList = async () => {
    try {
      setLoading(true);
      const resp = await user_service.list();
      let rows = [];
      for (let row of resp.results) {
        row.option = (
          <>
            <i
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              className="fa fa-edit px-1"
            ></i>
          </>
        );

        rows = [...rows, row];
      }      

      setDatatable({ ...datatable, rows })
      setLoading(false);
    } catch(err) {
      console.error(err);
      setLoading(false);
    }
  };
  const _handleAddData = async (e) => {
    e.preventDefault();
    if (Number(payload.branches) !== 1) {
      delete payload.transportation;
    }
    const errors = validate(payload);
    if (errors.length > 0) {
      const phoneNumberNotMatch = errors.find(
        (err) => err === "phone-number-not-match"
      );
      if (phoneNumberNotMatch) {
        return showToast(
          "error",
          "Nomor whatsapp tidak sama, harap periksa kembali"
        );
      }
      return showToast("error", JSON.stringify(errors));
    }

    const p = { ...payload };
    p.family_list = p.family_list.map((item, i) => {
      if (i === 0) return { ...item}
      if (item.name !== '') return { ...item }
    }).filter(item => item);
    
    setLoading(true);
    try {
      const resp = await user_service.register(payload);
      console.log(typeof resp.code);
      if (resp.code === 201) {        
        showToast('success', 'Data berhasil ditambahkan');
        setLoading(false);
        document.getElementById('closeAddModal').click();
        return
      }
      showToast('error', JSON.stringify(resp));
      setLoading(false);


    } catch(err) {
      console.log(err);
      showToast('error', JSON.stringify(err));

      setLoading(false);
    }


  };

  const _handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    setPayload({ ...payload, [name]: value });
  };

  const _handleChangeFamily = (index, evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    let p = [...payload.family_list];
    p[index][name] = value;

    setPayload({ ...payload, family_list: [...p] });
  };

  return (
    <>
      <div className="container">
        <LoadingScreen
          loading={loading}
          bgColor="rgba(0,0,0,0.5)"
          spinnerColor="#9ee5f8"
          textColor="#FFF"
          text={
            <>
              Data sedang diproses...              
            </>
          }
        />
        <div className="row">
          <div className="col-12" id="clickAddModal">
            <button
              className="btn btn-primary mt-5"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              Create
            </button>
            <div className="table-responsive">             
              <DataTable
                  columns={datatable.columns}
                  data={datatable.rows}
                  pagination
              />
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
                id="closeAddModal"
              ></button>
            </div>
            <form onSubmit={_handleAddData}>
              <div className="modal-body">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="form-group">
                        <label className="text-muted mb-2">Nama Karyawan</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="contoh : Ahmad Taufik"
                          name="name"
                          value={payload.name}
                          onChange={_handleChange}
                          required
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
                          name="phone_number"
                          value={payload.phone_number}
                          onChange={_handleChange}
                          required
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
                          name="confirm_phone_number"
                          value={payload.confirm_phone_number}
                          onChange={_handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="form-group">
                        <label className="text-muted mb-2">Departemen</label>
                        <select                         
                          required
                          name="department"
                          onChange={_handleChange}
                          className="form-control" 
                        >
                          <option selected disabled value="">
                            Pilih Departemen anda saat ini
                          </option>
                          {master?.master_departments?.length &&
                            master.master_departments.map((item) => (
                              <option
                                selected={payload.department === item.id}
                                value={item.id}
                              >
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="form-group">
                        <label className="text-muted mb-2">Lokasi</label>
                        <select 
                          className="form-control"                          
                          name="branches"
                          onChange={_handleChange}
                          required
                        >
                          <option selected disabled value="">
                            Pilih Lokasi anda
                          </option>
                          {master?.master_branches?.length &&
                            master.master_branches.map((item) => (
                              <option
                                selected={payload.branches === item.id}
                                value={item.id}
                              >
                                {item.name}
                              </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {Number(payload.branches) === 1 && (
                      <>
                        <div className="col-6 mb-3">
                          <div className="form-group">
                            <label className="text-muted mb-2">Transportasi</label>
                            <select 
                              className="form-control"
                              name="transportation"
                              onChange={_handleChange}
                              required
                            >
                              <option selected disabled value="">
                                Pilih transportasi anda
                              </option>
                              {master?.master_transportations?.length &&
                                master.master_transportations.map((item) => (
                                  <option
                                    selected={payload.transportation === item.id}
                                    value={item.id}
                                  >
                                    {item.name}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="col-12 mb-3">
                      <div className="form-group">
                        <label className="text-muted mb-2">Nama Istri</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nama istri"
                          name="name"
                          value={payload.family_list[0].name}
                          onChange={e => _handleChangeFamily(0, e)}
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
                          name="name"
                          value={payload.family_list[1].name}
                          onChange={e => _handleChangeFamily(1, e)}
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
                          name="name"
                          value={payload.family_list[2].name}
                          onChange={e => _handleChangeFamily(2, e)}
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
                          name="name"
                          value={payload.family_list[3].name}
                          onChange={e => _handleChangeFamily(3, e)}
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
                          name="name"
                          value={payload.family_list[4].name}
                          onChange={e => _handleChangeFamily(4, e)}
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
                          name="name"
                          value={payload.family_list[5].name}
                          onChange={e => _handleChangeFamily(5, e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
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
