import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [load, setLoad] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div>
           <div className="space-y-5 text-center">
            <h1 className="text-3xl font-extrabold">Featured Jobs</h1>
            <p className="text-[#757575] text-1xl font-medium">
            Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            </div> 
            <div className="grid grid-cols-2 gap-4 my-12"> 
                {
                    jobs.slice(0, load).map(job => <FeatureJob job={job} key={job.id}></FeatureJob>)
                }
            </div>
            <div className="mb-6 text-center">
                <button  onClick={()=> setLoad(jobs.length)} className="btn btn-primary font-extrabold text-[20px]">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
