import {
  applyJob,
  formatCurrency,
  formatDate,
  updateJobApplication, cancelJobApplication
} from "../store/actionCreator";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import defaultImage from '../assets/no-pictures.png';


export default function Card({ jobs }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  

  // const appliedJobs = useSelector((state) => state.applyJobs);

  const handleApply = () => {
    dispatch(updateJobApplication(jobs.jobVacancyCode));
    navigate("/");
  };

  const handleCancel = () => {
    dispatch(cancelJobApplication(jobs.jobVacancyCode));
    navigate("/lamaran-terkirim");
  };

  return (
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 card-job ">
      <div className="card rounded shadow-sm border-0 h-100">
        <div className="card-body p-4">
          <div className="d-flex flex-column h-25">
            <img
              src={jobs.corporateLogo}
              alt=""
              onError={(e) => { e.target.src = defaultImage }} 
              className="img-fluid d-block mx-auto mb-3"
              style={{ objectFit: "cover", height: "auto", maxWidth: "50%" }}
            />
          </div>

          <div className="mt-3">
            <h5>{jobs.corporateName}</h5>
            <p className="small text-muted ">{jobs.positionName}</p>
            <p className="small text-muted font-italic ">
              Status :{" "}
              <span className="bg-secondary rounded small text-white p-1">
                {jobs.status}
              </span>
            </p>
            <p className="small text-muted font-italic">
              Gaji :{" "}
              <span className="bg-secondary rounded text-white p-1 small">
                {formatCurrency(jobs.salaryFrom)} -{" "}
                {formatCurrency(jobs.salaryTo)}
              </span>
            </p>
            <p
              className="small text-muted font-italic text-right"
              style={{ textAlign: "right" }}
            >
              {formatDate(jobs.postedDate)}
            </p>
            <Link to={`/detail-lowongan-perkerjaan/${jobs.jobVacancyCode}`}>
              <button className="btn btn-outline-primary w-100">
                Baca Detail
              </button>
            </Link>

            {/* <button  className="btn btn-success w-100 mt-3">
          Kirim Lamaran
        </button> */}
            {jobs.applied ? (
              location.pathname === "/lamaran-terkirim" ? (
                <button onClick={handleCancel} className="btn btn-warning w-100 mt-3">
                  Batalkan Lamaran
                </button>
              ) : (
                <button className="btn btn-secondary w-100 mt-3" disabled>
                  Kirim Lamaran
                </button>
              )
            ) : (
              <button
                className="btn btn-success w-100 mt-3"
                onClick={handleApply}
              >
                Kirim Lamaran
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
