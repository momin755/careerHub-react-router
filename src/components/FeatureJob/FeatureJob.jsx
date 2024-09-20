import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

const FeatureJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
  } = job;
  return (
    <div className="p-5 space-y-3 rounded-sm shadow-xl">
        <img src={logo} alt="" />
        <h2 className="text-2xl font-extrabold">{job_title}</h2>
        <p className="text-[#757575] text-[20px] fontsem">{company_name}</p>
        <div>
          <button className="text-[16px] text-[#9873FF] font-extrabold px-5 py-2 rounded border-[#9873FF] border mr-4">{remote_or_onsite}</button>
          <button className="text-[16px] text-[#9873FF] font-extrabold px-5 py-2 rounded border-[#9873FF] border mr-4">{job_type}</button>
        </div>

        <div className="flex items-center gap-4">
          <h2 className="flex font-semibold text-[20px]  items-center gap-2 text-[#757575]"><IoLocationOutline /> {location} </h2>
          <h2 className="flex font-semibold text-[20px] items-center gap-2 text-[#757575]"><CiDollar/> Salary: {salary} </h2>
        </div>

        <button className='font-semibold py-3 px-5 rounded text-white text-[20px] bg-[#9873FF]'>View Details</button>
        
        
    </div>
  );
};

export default FeatureJob;
