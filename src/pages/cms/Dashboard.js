import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { Master, Users } from "../../services";
import { showToast, validate } from "../utils/helper";
import { AGES } from "./../utils/constants";
import LoadingScreen from "react-loading-screen";
import { useNavigate } from "react-router";
import axios from "axios";
import fileDownload from "js-file-download";
export default function Dashboard() {
  const navigate = useNavigate();
  const customStyles = {
    rows: {
      style: {
        minHeight: "50px", // override the row height
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
      },
    },
  };
  const [datatable, setDatatable] = useState({
    columns: [
      {
        name: "No",
        selector: (row) => row.no,
        sortable: true,
        width: "80px",
      },
      {
        name: "Nama",
        selector: (row) => row.name,
        sortable: true,
        width: "200px",
      },
      {
        name: "No Telepon",
        selector: (row) => row.phone_number,
        sortable: false,
        width: "150px",
      },
      {
        name: "Departemen",
        selector: (row) => row.department_name,
        sortable: false,
        width: "150px",
      },
      {
        name: "Lokasi",
        selector: (row) => row.branch_name,
        sortable: false,
        width: "180px",
      },
      {
        name: "Kendaraan",
        selector: (row) => row.transportation_name,
        sortable: false,
        width: "200px",
      },
      {
        name: "QR Link",
        selector: (row) => row.qr_code_url,
        sortable: false,
        width: "250px",
      },
      {
        name: "Option",
        selector: (row) => row.option,
        sortable: false,
        width: "80px",
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
    level: 1,
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

  const [originalData, setOriginalData] = useState(null);
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
    };
    fetchDataMaster();
    fetchUser();
  }, []);

  const fetchUserList = async () => {
    try {
      setLoading(true);
      const resp = await user_service.list();
      let rows = [];
      for (let [i, row] of resp.results.entries()) {
        row.no = i + 1;
        if (row.qr_code_url) {
          const qrCodeURL = row.qr_code_url;
          row.qr_code_url = (
            <button
              onClick={() => {
                window.open(qrCodeURL, '_blank');
              }}
            >
              Lihat QR
            </button>
          );
        }
        row.option = (
          <>
            <i
              onClick={() => _handleModalEdit(row)}
              className="fa fa-edit px-1"
            ></i>
            {/* <i className="fa fa-whatsapp text-success"></i> */}
          </>
        );

        rows = [...rows, row];
      }
      setDatatable({ ...datatable, rows });
      setOriginalData({ ...datatable, rows });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      navigate("/helpdesk");
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
    p.family_list = p.family_list
      .map((item, i) => {
        if (i === 0) return { ...item };
        if (item.name !== "") return { ...item };
      })
      .filter((item) => item);

    setLoading(true);
    try {
      const resp = await user_service.register(payload);
      if (resp.code === 201) {
        showToast("success", "Data berhasil ditambahkan");
        setLoading(false);
        await fetchUserList();
        resetPayload();
        document.getElementById("closeAddModal").click();
        return;
      }
      showToast("error", JSON.stringify(resp));
      setLoading(false);
    } catch (err) {
      console.log(err);
      showToast("error", JSON.stringify(err));

      setLoading(false);
    }
  };

  const _handleEditData = async (e) => {
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

    setLoading(true);
    try {
      const resp = await user_service.update(payload);
      if (resp.code === 201) {
        showToast("success", "Data berhasil diubah");
        setLoading(false);
        await fetchUserList();
        resetPayload();
        document.getElementById("closeEditModal").click();
        return;
      }
      showToast("error", JSON.stringify(resp));
      setLoading(false);
    } catch (err) {
      console.log(err);
      showToast("error", JSON.stringify(err));

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

  const _handleModalEdit = (user) => {
    let {
      id,
      name,
      phone_number,
      department_id,
      branch_id,
      transportation_id,
      family,
    } = user;

    // add 5 value for family
    for (let i = 0; i < 6; i++) {
      if (i > family.length - 1) {
        family = [...family, { name: "", age: 0 }];
      }
    }

    setPayload({
      id,
      name,
      phone_number,
      confirm_phone_number: phone_number,
      department: department_id,
      branches: branch_id,
      transportation: transportation_id,
      level: 1,
      family_list: [...family],
    });

    document.getElementById("editModalButton").click();
    // setPayload(user);
  };

  const resetPayload = () => {
    setPayload({
      name: "",
      phone_number: "",
      confirm_phone_number: "",
      department: "",
      branches: "",
      transportation: "",
      level: 1,
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
  };

  const doSearch = (val) => {
    const data = { ...originalData };
    val = val.toLowerCase();

    data.rows = data.rows.filter(item => item.name.toLowerCase().indexOf(val) >= 0);
    setDatatable({ ...data });
  };

  return (
    <>
      <div
        className="container"
        style={{
          maxHeight: "900px",
          height: "900px",
          paddingBottom: "300px",
          overflowY: "scroll",
        }}
      >
        <LoadingScreen
          loading={loading}
          bgColor="rgba(0,0,0,0.5)"
          spinnerColor="#9ee5f8"
          textColor="#FFF"
          text={<>Data sedang diproses...</>}
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
            <div className="row">
              <div className="col-8"></div>
              <div className="col-3 mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    onChange={e => doSearch(e.target.value)}
                    className="form-control"
                    placeholder="Cari .."
                    style={{ float: "left" }}
                  />
                </div>
              </div>
              <div className="col">
                <button className="btn btn-success btn-sm">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <DataTable
                columns={datatable.columns}
                data={datatable.rows}
                customStyles={customStyles}
                pagination
                defaultSortFieldID={1}
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
                onClick={resetPayload}
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
                  <div className="col-6 mb-3">
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
                          <label className="text-muted mb-2">
                            Transportasi
                          </label>
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
                        value={
                          payload.family_list?.length > 0
                            ? payload.family_list[0].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(0, e)}
                      />
                    </div>
                  </div>
                  <div className="col-8 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak pertama
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Pertama"
                        name="name"
                        value={
                          payload.family_list?.length > 1
                            ? payload.family_list[1].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(1, e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Pilih Umur</label>
                      <select
                        required={payload.family_list[1].name !== ""}
                        name={"age"}
                        onChange={(e) => _handleChangeFamily(1, e)}
                        className="form-control"
                      >
                        <option selected disabled value="">
                          {" "}
                          Pilih umur
                        </option>
                        {AGES.map((age) => (
                          <option value={age}>
                            {age === 0 ? "0-1" : age} tahun
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-8 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Nama Anak Kedua</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Kedua"
                        name="name"
                        value={
                          payload.family_list?.length > 2
                            ? payload.family_list[2].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(2, e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Pilih Umur</label>
                      <select
                        required={payload.family_list[2].name !== ""}
                        name={"age"}
                        onChange={(e) => _handleChangeFamily(2, e)}
                        className="form-control"
                      >
                        <option selected disabled value="">
                          {" "}
                          Pilih umur
                        </option>
                        {AGES.map((age) => (
                          <option value={age}>
                            {age === 0 ? "0-1" : age} tahun
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-8 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Ketiga
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Ketiga"
                        name="name"
                        value={
                          payload.family_list?.length > 3
                            ? payload.family_list[3].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(3, e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Pilih Umur</label>
                      <select
                        required={payload.family_list[3].name !== ""}
                        name={"age"}
                        onChange={(e) => _handleChangeFamily(3, e)}
                        className="form-control"
                      >
                        <option selected disabled value="">
                          {" "}
                          Pilih umur
                        </option>
                        {AGES.map((age) => (
                          <option value={age}>
                            {age === 0 ? "0-1" : age} tahun
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-8 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Keempat
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Keempat"
                        name="name"
                        value={
                          payload.family_list?.length > 4
                            ? payload.family_list[4].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(4, e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Pilih Umur</label>
                      <select
                        required={payload.family_list[4].name !== ""}
                        name={"age"}
                        onChange={(e) => _handleChange(4, e)}
                        className="form-control"
                      >
                        <option selected disabled value="">
                          {" "}
                          Pilih umur
                        </option>
                        {AGES.map((age) => (
                          <option value={age}>
                            {age === 0 ? "0-1" : age} tahun
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-8 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Kelima
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Kelima"
                        name="name"
                        value={
                          payload.family_list?.length > 5
                            ? payload.family_list[5].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(5, e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Pilih Umur</label>
                      <select
                        required={payload.family_list[5].name !== ""}
                        name={"age"}
                        onChange={(e) => _handleChange(5, e)}
                        className="form-control"
                      >
                        <option selected disabled value="">
                          {" "}
                          Pilih umur
                        </option>
                        {AGES.map((age) => (
                          <option value={age}>
                            {age === 0 ? "0-1" : age} tahun
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={resetPayload}
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
      <button
        style={{ position: "absolute", bottom: -100 }}
        id="editModalButton"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
      />
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
                onClick={resetPayload}
                id="closeEditModal"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={_handleEditData}>
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
                  <div className="col-6 mb-3">
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
                          <label className="text-muted mb-2">
                            Transportasi
                          </label>
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
                        value={
                          payload.family_list?.length > 0
                            ? payload.family_list[0].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(0, e)}
                      />
                    </div>
                  </div>
                  <div className="col-8 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak pertama
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Pertama"
                        name="name"
                        value={
                          payload.family_list?.length > 1
                            ? payload.family_list[1].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(1, e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Pilih Umur</label>
                      <select
                        required={payload.family_list[1].name !== ""}
                        name={"age"}
                        onChange={(e) => _handleChangeFamily(1, e)}
                        className="form-control"
                      >
                        <option selected disabled value="">
                          {" "}
                          Pilih umur
                        </option>
                        {AGES.map((age) => (
                          <option
                            value={age}
                            selected={
                              payload.family_list?.length > 0 &&
                              payload.family_list[1].age === age
                            }
                          >
                            {age === 0 ? "0-1" : age} tahun
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-8 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Nama Anak Kedua</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Kedua"
                        name="name"
                        value={
                          payload.family_list?.length > 2
                            ? payload.family_list[2].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(2, e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Pilih Umur</label>
                      <select
                        required={payload.family_list[2].name !== ""}
                        name={"age"}
                        onChange={(e) => _handleChangeFamily(2, e)}
                        className="form-control"
                      >
                        <option selected disabled value="">
                          {" "}
                          Pilih umur
                        </option>
                        {AGES.map((age) => (
                          <option
                            value={age}
                            selected={
                              payload.family_list?.length > 2 &&
                              payload.family_list[2].age === age
                            }
                          >
                            {age === 0 ? "0-1" : age} tahun
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-8 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Ketiga
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Ketiga"
                        name="name"
                        value={
                          payload.family_list?.length > 3
                            ? payload.family_list[3].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(3, e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Pilih Umur</label>
                      <select
                        required={payload.family_list[3].name !== ""}
                        name={"age"}
                        onChange={(e) => _handleChangeFamily(3, e)}
                        className="form-control"
                      >
                        <option selected disabled value="">
                          {" "}
                          Pilih umur
                        </option>
                        {AGES.map((age) => (
                          <option
                            value={age}
                            selected={
                              payload.family_list?.length > 3 &&
                              payload.family_list[3].age === age
                            }
                          >
                            {age === 0 ? "0-1" : age} tahun
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-8 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Keempat
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Keempat"
                        name="name"
                        value={
                          payload.family_list?.length > 4
                            ? payload.family_list[4].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(4, e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Pilih Umur</label>
                      <select
                        required={payload.family_list[4].name !== ""}
                        name={"age"}
                        onChange={(e) => _handleChange(4, e)}
                        className="form-control"
                      >
                        <option selected disabled value="">
                          {" "}
                          Pilih umur
                        </option>
                        {AGES.map((age) => (
                          <option
                            value={age}
                            selected={
                              payload.family_list?.length > 4 &&
                              payload.family_list[4].age === age
                            }
                          >
                            {age === 0 ? "0-1" : age} tahun
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-8 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">
                        Nama Anak Kelima
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Anak Kelima"
                        name="name"
                        value={
                          payload.family_list?.length > 5
                            ? payload.family_list[5].name
                            : ""
                        }
                        onChange={(e) => _handleChangeFamily(5, e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="form-group">
                      <label className="text-muted mb-2">Pilih Umur</label>
                      <select
                        required={payload.family_list[5].name !== ""}
                        name={"age"}
                        onChange={(e) => _handleChange(5, e)}
                        className="form-control"
                      >
                        <option selected disabled value="">
                          {" "}
                          Pilih umur
                        </option>
                        {AGES.map((age) => (
                          <option
                            value={age}
                            selected={
                              payload.family_list?.length > 5 &&
                              payload.family_list[5] === age
                            }
                          >
                            {age === 0 ? "0-1" : age} tahun
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={resetPayload}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
