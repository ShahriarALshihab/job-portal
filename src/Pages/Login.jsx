import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./shared/SocialLogin";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

console.log(location);
  const from = location.state;  
  console.log(from);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const { email, password } = formData;
        const result = await signInUser(email, password);
        console.log("Signed in:", result.user);
        navigate(from);
        setFormData({
          email: "",
          password: "",
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-2/3 md:w-2/6 lg:w-2/6">
          <small className="text-blue-600 flex justify-center items-center mb-5">
            Welcome back!
          </small>
          <p className="text-lg font-semibold text-center my-2">Sign in With</p>

          <div className="flex items-center justify-center mb-8 w-full">
            <SocialLogin from={from}  />
          </div>

          <div className="divider">OR</div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span>Username or Email address</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>

            <div className="mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>

            <div className="flex justify-between items-end mt-4">
              <div className="flex">
                <p className="checkbox"></p> <p>Remember me</p>
              </div>
              <Link to="#" className="text-sm text-blue-500">
                Forgot password?
              </Link>
            </div>

            <div className="form-control mt-6">
              <button className="btn-outlined border bg-gray-800 text-white w-full rounded-md font-bold p-2">
                Sign in
              </button>
            </div>

            <div className="flex justify-center items-center mt-4">
              <p className="text-sm text-gray-400">
                Do not have an account?{" "}
                <Link to="/register" className="underline text-lg text-blue-500">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center md:mt-[-50px] lg:mt-[-100px]">
        <img src="/login-img.svg" alt="Login Image" />  
      </div>
    </>
  );
};

export default Login;
