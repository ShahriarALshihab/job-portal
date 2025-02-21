/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../components/CustomHooks/userAuth';

const JobApply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null, 
    coverLetter: '',
  });
  const { id } = useParams(); 
  const { user } = useAuth(); 


  const handleChange = (e) => {
      const { name, value, type } = e.target;
     
    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, resume, coverLetter } = formData; 

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      phone,
      resume,
      coverLetter,
      name,

    }
      
      setFormData(prev => ({
          ...prev, name:'', email:'', phone:'', resume:null, coverLetter:"", 
      }))
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Job Application
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="resume"
              className="block text-gray-700 font-medium mb-1"
            >
              Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".pdf, .doc, .docx" // Specify accepted file types
              required
            />
          </div>
          <div>
            <label
              htmlFor="coverLetter"
              className="block text-gray-700 font-medium mb-1"
            >
              Cover Letter (Optional)
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="text-center"> {/* Center the button */}
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 w-full sm:w-auto" // Responsive width
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;