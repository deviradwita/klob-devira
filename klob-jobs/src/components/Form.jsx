import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewJob, generateJobVacancyCode } from "../store/actionCreator";
import { useDispatch } from "react-redux";
import Alert from "react-bootstrap/Alert";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let newCode = generateJobVacancyCode();

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

  const [error, setError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    setSubmitJob({
      ...submitJob,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!submitJob.corporateLogo) {
      setError("Logo Harus Di isi");
    } else if (!submitJob.corporateName) {
      setError("Perusahaan Harus Di isi ");
    } else if (!submitJob.positionName) {
      setError("Posisi Harus Di isi");
    } else if (!submitJob.status) {
      setError("Status Harus Di isi");
    } else if (!submitJob.salaryFrom) {
      setError("Min Gaji Harus Di isi");
    } else if (isNaN(submitJob.salaryFrom)) {
      setError("Min Gaji Harus Di isi oleh angka");
    } else if (!submitJob.salaryTo) {
      setError("Max Gaji Harus Di isi");
    } else if (isNaN(submitJob.salaryTo)) {
      setError("Max Gaji Harus Di isi oleh angka");
    } else if (!submitJob.postedDate) {
      setError("Tanggal Harus Di isi");
    } else {
      dispatch(addNewJob(submitJob));
      navigate("/");
    }
  };

  return (
    <>
      <div className="main-form">
        <h1 className="lowongan">Buat Lowongan:</h1>
        <div>
          {error ? (
            <Alert variant="danger">
              <p>{error}</p>
            </Alert>
          ) : null}
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
                  type="text"
                  value={submitJob.salaryFrom}
                  onChange={handleChange}
                  name="salaryFrom"
                  className="form-control w-25"
                  placeholder="1.000.000"
                />
                sampai dengan
                <input
                  type="text"
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
