import { Link } from "react-router-dom";

import {  MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Job = ({ job }) => {
  const {id, logo, job_title, company_name, remote_or_onsite, location,  job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, phone, email, address } = job;
    
  return (

    <div className="bg-base-100 shadow-xl mb-[24px] p-[40px]">
      <figure><img src={logo}/></figure>
      <div className="">
        <h2 className="">{job_title}</h2>
        <p>{company_name}</p>

        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
        </div>
        
    <div className="mt-4 flex gap-8">
        <h2 className="flex"><MdOutlineLocationOn className="text-2xl mr-2"></MdOutlineLocationOn>{location}</h2>
        <h2 className="flex"><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>{salary}</h2>
  
    </div>

        <div className="">
        <Link to={`/job/${id}`}>
        <button className="btn btn-primary">View details</button>
        </Link>
        </div>
      </div>
    </div>

  );
};

export default Job;
