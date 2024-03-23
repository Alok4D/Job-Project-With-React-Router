import { useLoaderData, useParams } from "react-router-dom";

// toast react
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";


const  JobDetails = () => {
    const Jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = Jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJobs = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }

    return (
        <div>
            <h2>Job Details of : {job.job_title}</h2>
            <div className="md:grid grid-cols-4 gap-4">
            <div className="border md:col-span-3">
                <h2>Details Coming Here!</h2>
            </div>
            <div className="border">
                <h2>side Things</h2>
                <button onClick={handleApplyJobs} className="btn btn-primary w-full">Apply Now</button>
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;