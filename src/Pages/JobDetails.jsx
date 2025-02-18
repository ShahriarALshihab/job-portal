/* eslint-disable no-unused-vars */
import { FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaBuilding } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  
  const {
    _id,
    company,
    company_logo,
    title,
    jobType,
    applicationDeadline,
    location,
    description,
    requirements,
    salaryRange,
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
     
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center">
          <img src={company_logo} alt={company} className="w-16 h-16 object-cover rounded-full mr-4" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-500 mt-1 flex items-center">
              <FaBuilding className="mr-2 text-blue-500" />
              {company}
            </p>
            <p className="text-gray-500 mt-1 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              {location}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-green-600 flex items-center">
            <FaMoneyBillWave className="mr-2" />
             
            {salaryRange.min} - {salaryRange.max}
            {salaryRange.currency.toUpperCase()}
          </p>
          <p className="text-gray-500 flex items-center">
            <FaClock className="mr-2" />
            {jobType} • Deadline: {applicationDeadline}
          </p>
        </div>
      </div>

 
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Job Description</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

     
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Requirements</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 text-center">
        <button className="px-6 py-3 bg-[#704597] text-white rounded-lg text-lg font-semibold hover:bg-[#42295a] transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
