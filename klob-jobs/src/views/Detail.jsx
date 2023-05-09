import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail, formatCurrency, formatDate, updateJobApplication } from "../store/actionCreator";
import { RenderHtml } from "../components/RenderHtml";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { jobVacancyCode } = useParams();
  const detail = useSelector((state) => {
    return state?.detail;
  });

  const handleApply = () => {
    dispatch(updateJobApplication(detail.jobVacancyCode));
    navigate(`/detail-lowongan-perkerjaan/${detail.jobVacancyCode}`);
  };

  useEffect(() => {
    dispatch(fetchDetail(jobVacancyCode));
  }, []);

  return (
    <>
      <div className="main-div">
        <h1 className="lowongan">Detail Lowongan Perkerjaan:</h1>
        <div className="card rounded shadow-sm border-0 detail-div">
          <div>
            <img
              src={detail.corporateLogo}
              alt="Logo"
              className="img-fluid d-block mx-auto mb-3"
              style={{ objectFit: "cover", height: "auto", maxWidth: "20%" }}
            />
          </div>
          <div>
            <h1>{detail.corporateName}</h1>
            <RenderHtml htmlContent={detail.descriptions} />
            <p>{detail.positionName}</p>
            <p className="font-italic ">
              Status : 
              <span className="bg-secondary rounded small text-white p-1">
                {detail.status}
              </span>
            </p>
            <p className="font-italic">
              Gaji : 
              <span className="bg-secondary rounded text-white p-1 small">
                {formatCurrency(detail.salaryFrom)} -
                {formatCurrency(detail.salaryTo)}
              </span>
            </p>
            <p className="small text-muted font-italic text-right" style={{textAlign: "right"}}>
                {formatDate(detail.postedDate)}
                </p>
            {/* <button className="btn btn-success w-100 mt-3">
          Kirim Lamaran
        </button> */}
          {detail.applied ? (
               (
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
    </>
  );
}
