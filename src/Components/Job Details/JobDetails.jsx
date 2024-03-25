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
            {/* <h2>Job Details of : {job.job_title}</h2> */}
            <div className="flex gap-6">

            <div className="border md:col-span-3 w-[760px]">
                <h2 className="text-[#1A1919]">Job Description:<p>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p></h2>
                <p>Job Responsibility: Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                <h2>Educational Requirements:</h2>
                <p>Bachelor degree to complete any reputational university.</p>
                <h3>Experiences:</h3>
                <p>2-3 Years in this field.</p>
            </div>

            <div className="border">
                <h2>Job Details</h2>
                <hr />
                <div className="salary flex gap-2">
                    <img src="../../../public/assets/icons/money.png" alt="" />
                    <span>Salary : <p> 100K - 150K (Per Month)</p></span>
                </div>
                <button onClick={handleApplyJobs} className="btn btn-primary w-full">Apply Now</button>
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;