/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
    const { _id,
        company, 
        company_logo, 
        title, 
        jobType, 
        applicationDeadline, 
        location, 
        description, 
        requirements, 
        salaryRange 
    } = job; 

    return (
        <div>
           <div className="border rounded-sm shadow-md h-full w-full p-3 max-w-sm bg-slate-100">
     
              <div className="flex items-center gap-4">
                <img src={company_logo} alt={company} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-semibold text-lg">{company}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    📍 {location}
                  </p>
                </div>
              </div>
              
   
              <h2 className="text-xl font-bold mt-3">{title}</h2>
              
          
              <div className="flex items-center text-gray-500 text-sm gap-3 mt-1">
                <span>📌 {jobType}</span>
                <span>⏳ {applicationDeadline}</span>
              </div>
              
        
                <div className="flex-grow">
                <p className="text-gray-600 mt-3 text-sm">{description}</p>
              </div>
              
      
              <div className="flex flex-wrap gap-2 mt-3">
                {requirements.map((skill, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              

              <div className="flex justify-between items-center mt-5">
                <span className="text-blue-500 text-sm">
                  {salaryRange.currency.toUpperCase()} {salaryRange.min} - {salaryRange.max} 
                </span>
                    <Link to={`/job-details/${_id}`}> 
                    <button className="bg-[#8e5fbb] text-white text-sm px-3 py-1 rounded-lg hover:bg-[#211929]">
                  Apply Now
                </button></Link>
              </div>
            </div> 
        </div>
    );
};

export default HotJobCard;
