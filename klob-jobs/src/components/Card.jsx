import { formatCurrency, formatDate } from "../store/actionCreator";


export default function Card({jobs}) {

  return (
    
  <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 card-job">
    <div className="card rounded shadow-sm border-0">
      <div className="card-body p-4">
        <div>
        <img
          src={jobs.corporateLogo}
          alt=""
          className="img-fluid d-block mx-auto mb-3" style={{objectFit:"cover", height: "100px"}}
        />
        </div>
      
        <h5>{jobs.corporateName}</h5>
        <p className="small text-muted ">{jobs.positionName}</p>
        <p className="small text-muted font-italic ">
          Status : <span className="bg-secondary rounded small text-white p-1">{jobs.status}</span>
        </p>
        <p className="small text-muted font-italic">
          Gaji : <span className="bg-secondary rounded text-white p-1 small">
          {formatCurrency(jobs.salaryFrom)} - {formatCurrency(jobs.salaryTo)}
          </span>
        </p>
        <p className="small text-muted font-italic text-right" style={{textAlign: "right"}}>{formatDate(jobs.postedDate)}</p>
        <button className="btn btn-outline-primary w-100">
          Baca Detail
        </button>
        <button className="btn btn-success w-100 mt-3">
          Kirim Lamaran
        </button>
      </div>
    </div>
  </div>


  );
}
