/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";


const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
       
    },[])
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-20">
           {jobs.map(job=> <HotJobCard key={job._id} job={job}></HotJobCard>)}
            
        </div>
    );
};

export default HotJobs;