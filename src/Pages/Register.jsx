import { useContext, useState } from "react";

import AuthContext from "../context/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname = "Username is required!";
    } else if (formData.firstname.length < 3) {
      newErrors.firstname = "Username must be at least 3 characters long.";
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = "name is required!"; 
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data Submitted:", formData);
      const { email, password } = formData;
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
   
      <div className="card w-2/3  shadow-xl bg-base-100">
        <div className="card-body w-3/3 mx-auto">
          <h2
            className="card-title text-center mx-auto
          7"
          >
            Join Now!
          </h2>
          <div className="flex items-center justify-center mb-8">
                   
                    <button className="btn-outline border w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2"><span className="text-2xl"><FcGoogle/></span>Sign up with Google</button>
              
                        </div>
                        <div className="divider">OR</div> 

          <form onSubmit={handleSubmit}>
           
              
              <div >
                <div className="flex gap-3">
                  <div>
                  <label className="label">
                    <span className="label-text">First name</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                
                    className="input input-bordered"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                   {errors.firstname && (
                    <span className="text-red-500 text-sm">
                      {errors.firstname}
                    </span>
                  )}
                  </div>
                  <div>
                  <label className="label">
                    <span className="label-text">Last name</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    
                    className="input input-bordered"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                   {errors.lastname && (
                    <span className="text-red-500 text-sm">
                      {errors.lastname}
                    </span>
                  )}
                  </div>
                </div>
                  
                 
                
                <div>
                  <label htmlFor="" className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="input input-bordered w-full"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password}
                    </span>
                  )}
                </div>
              </div>
            

            <div className="form-control mt-5">
              <button type="submit" className="btn bg-gray-900 text-white hover:text-black">
                Sign up
              </button>
            </div>
            <div className="flex justify-center items-center mt-4">
              <a href="#" className="text-sm text-gray-400">
                Already have an account?
                <Link to="/sign-in" className="underline text-blue-500">
                  {" "}
                  Sign in
                </Link>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
