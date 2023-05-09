import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CardJobs from "../components/Card";
import { fetchJobs } from "../store/actionCreator";



export default function Home() {
  const dispatch = useDispatch();

  const jobs = useSelector((state) => {
    let newData = state.Jobs.filter((el) => el.applied === true);
    return newData;
  });

  
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);
  return (
    <>
      <div className="main-div">
      {jobs.length > 0 ? (
        <>
          <h1 className="lowongan">Lamaran Terkirim:</h1>
          <div className="row pb-5 mb-4">
            {jobs.map((el, index) => {
              return <CardJobs key={index} jobs={el} />;
            })}
          </div>
        </>
      ) : (
        <>
          <h1 className="lowongan">Lamaran Terkirim:</h1>
          <div>
          <h3 className="text-center mt-4">Belum ada lamaran yang terkirim</h3>
        
          </div>
          <div className="back-home">
          <Link to="/" className="btn btn-primary mx-auto text-center">
            Kembali ke Home
          </Link>
          </div>
          
        </>
      )}
    </div>
    </>
  );
}


