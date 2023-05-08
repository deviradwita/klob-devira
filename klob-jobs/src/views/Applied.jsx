import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardJobs from "../components/Card";
import { fetchJobs } from "../store/actionCreator";



export default function Home() {
  const dispatch = useDispatch();

  const jobs = useSelector((state) => {
    console.log(state.Jobs, "home");
    let newData = state.Jobs.filter((el) => el.applied === true);
    return newData;
  });

  
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);
  return (
    <>
      <div className="main-div">
        <h1 className="lowongan">Lamaran Terkirim:</h1>
        <div>
        <div className="row pb-5 mb-4">
          {jobs?.map((el, index) => {
            return <CardJobs key={index} jobs={el}  />;
          })}
          </div>
        </div>
      </div>
    </>
  );
}
