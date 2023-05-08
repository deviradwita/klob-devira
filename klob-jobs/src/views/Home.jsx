import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardJobs from "../components/Card";
import { fetchJobs } from "../store/actionCreator";


export default function Home() {
  const jobs = useSelector((state) => {
    console.log(state, "home");
    return state?.Jobs;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);
  return (
    <>
      <div className="main-div">
        <h1 className="lowongan">Lowongan Perkerjaan:</h1>
        <div>
        <div className="row pb-5 mb-4">
          {jobs?.map(el => {
            return <CardJobs key={el.id} jobs={el}  />;
          })}
          </div>
        </div>
      </div>
    </>
  );
}
