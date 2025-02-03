import { useContext, useState } from "react";

import AuthContext from "../context/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required!";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long.";
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
        <div className="card-body w-2/3 mx-auto">
          <h2
            className="card-title text-center mx-auto
          7"
          >
            Join Now!
          </h2>

          <form onSubmit={handleSubmit}>
           
              <div>
                <div >
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    className="input input-bordered w-full"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  {errors.username && (
                    <span className="text-red-500 text-sm">
                      {errors.username}
                    </span>
                  )}
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
