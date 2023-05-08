import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewJob, generateJobVacancyCode } from "../store/actionCreator";
import { useDispatch } from "react-redux";


export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let newCode = generateJobVacancyCode()
  

  const [submitJob, setSubmitJob] = useState({
    jobVacancyCode: newCode,
    corporateLogo: "",
    corporateName: "",
    positionName: "",
    status: "",
    salaryFrom: "",
    salaryTo: "",
    postedDate: "",
    applied: false,
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    console.log(value, name);
    setSubmitJob({
      ...submitJob,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

    dispatch(addNewJob(submitJob));
    navigate("/");
  };

  return (
    <>
      <div className="main-form">
        <h1 className="lowongan">Buat Lowongan:</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3 mt-3">
              <label>Logo Perusahaan</label>
              <input
                type="text"
                className="form-control "
                value={submitJob.corporateLogo}
                name="corporateLogo"
                onChange={handleChange}
                placeholder="Ketikan Logo Perusahaan"
              />
              <small className="form-text text-muted">
                Dalam bentuk link url
              </small>
            </div>
            <div className="form-group mb-3">
              <label>Nama Perusahaan</label>
              <input
                type="text"
                value={submitJob.corporateName}
                onChange={handleChange}
                name="corporateName"
                className="form-control "
                placeholder="Ketikan Nama Perusahaan"
              />
            </div>
            <div className="form-group mb-3">
              <label>Nama Lowongan</label>
              <input
                type="text"
                value={submitJob.positionName}
                onChange={handleChange}
                name="positionName"
                className="form-control "
                placeholder="Ketikan Nama Lowongan"
              />
            </div>

            <div className="form-group mb-3">
              <label>Status Karyawan</label>
              <input
                type="text"
                value={submitJob.status}
                onChange={handleChange}
                name="status"
                className="form-control "
                placeholder="Ketikan Status Karyawan"
              />
            </div>

            <div className="form-group mb-3">
              <label>Kisaran Gaji Karyawan</label>
              <div className="row mt-1 justify-content-between">
                <input
                  type="number"
                  value={submitJob.salaryFrom}
                  onChange={handleChange}
                  name="salaryFrom"
                  className="form-control w-25"
                  placeholder="1.000.000"
                />
                sampai dengan
                <input
                  type="number"
                  value={submitJob.salaryTo}
                  name="salaryTo"
                  onChange={handleChange}
                  className="form-control w-25"
                  placeholder="10.000.000"
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <label>Tanggal Posting</label>
              <input
                value={submitJob.postedDate}
                onChange={handleChange}
                name="postedDate"
                type="date"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
