import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  console.log(appliedJobs);
  useEffect(() => {
    const storedJobId = getStoredJobApplication();

    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobId.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobs, storedJobId, jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl">Jobs i applied : {appliedJobs.length}</h2>
        <details className="dropdown">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>OnSide</a>
            </li>
          </ul>
        </details>
      </div>

      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              <div className="flex justify-between w-[1920] mx-auto">
                <div className="view-details-card">
                  <div className="flex gap-6 m-3">
                    <div className="h-[240px] w-[240px] bg-[#F4F4F4] flex justify-center items-center">
                      <img
                        src={job.logo}
                        alt=""
                        className="w-[145px] h-[50px]"
                      />
                    </div>

                    <div>
                      <h2>Technical Database Engineer</h2>
                      <span>{job.company_name}</span>

                      <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">
                          {job.remote_or_onsite}
                        </button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">
                          {job.job_type}
                        </button>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex gap-2">
                          <img
                            src="../../../public/assets/icons/Location.png"
                            alt=""
                          />
                          <span>{job.location}</span>
                        </div>

                        <div className="flex gap-2">
                          <img
                            src="../../../public/assets/icons/money.png"
                            alt=""
                          />
                          <span>{job.salary}</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="view-details">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
