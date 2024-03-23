
import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJob = () => {

    const [jobs, setJobs] = useState([]);
    // load show all data
    const [dataLength, setDataLength] = useState(4);
    useEffect( ()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div className="featured-jobs-details text-center">
                <h2 className="text-[48px] text-[#1A1919]">Featured Jobs {jobs.length}</h2>
                <p className="text-[16px] text-[#757575] mt-1 mb-[32px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-2 gap-2 w-[80%] mx-auto">
                {
                  jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)  
                }
            </div>
            
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;