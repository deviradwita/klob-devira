import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail, formatCurrency, formatDate } from "../store/actionCreator";
import { RenderHtml } from "../components/RenderHtml";


export default function Detail() {
  const dispatch = useDispatch();
  const { jobVacancyCode } = useParams();
  const detail = useSelector((state) => {
    console.log(state.detail, "detail");
    return state.detail;
  });

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
              src={detail[0].corporateLogo}
              alt="Logo"
              className="img-fluid d-block mx-auto mb-3"
              style={{ objectFit: "cover", height: "auto", maxWidth: "20%" }}
            />
          </div>
          <div>
            <h1>{detail[0].corporateName}</h1>
            <RenderHtml htmlContent={detail[0].descriptions} />
            <p>{detail[0].positionName}</p>
            <p className="font-italic ">
              Status : 
              <span className="bg-secondary rounded small text-white p-1">
                {detail[0].status}
              </span>
            </p>
            <p className="font-italic">
              Gaji : 
              <span className="bg-secondary rounded text-white p-1 small">
                {formatCurrency(detail[0].salaryFrom)} -
                {formatCurrency(detail[0].salaryTo)}
              </span>
            </p>
            <p className="small text-muted font-italic text-right" style={{textAlign: "right"}}>{formatDate(detail[0].postedDate)}</p>
            <button className="btn btn-success w-100 mt-3">
          Kirim Lamaran
        </button>
          </div>
        </div>
      </div>
    </>
  );
}
