import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser } = useContext(AuthContext); 
  const navigate = useNavigate(); 


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

        if(!formData.password.trim()) {
            newErrors.password = "Password is required.";
          } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long.";
        }
        setErrors(newErrors); 
        return Object.keys(newErrors).length === 0; 

    }
    
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
          console.log("Login data submitted.", formData); 
          const { email, password } = formData; 
          signInUser(email, password).then(result => {
            console.log("sing in", result.user);
            navigate("/"); 
          setFormData({
            email: "",
            password:"",
          })
            })
            .catch(error => {
            console.log(error.message);
            })
          
        }
    }
  return (
  <>
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-1/2">
        <small className="text-blue-600 flex justify-center items-center mb-5 ">Welcome back!</small>
       
        <div className="flex items-center justify-center mb-8">
         
          <button className="btn-outline border w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2"><span className="text-2xl"><FcGoogle/></span>Sign in with Google</button>
    
              </div>
              <div className="divider">OR</div> 
              <form action="" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="" className="label">
                          <span>Username or Email address</span>
                      </label>
                      <input type="email" name="email" className="input input-bordered w-full" value={formData.email}  onChange={handleChange} required />
                      {errors.email && (
                          <span className="text-red-500 text-sm">{errors.email}</span>
                      )}
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
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>
          <div className="flex justify-between items-end mt-4">
            <div className="flex"> <p className="checkbox"></p> <p>Remember me</p></div>
                      <a href="#" className="text-sm text-blue-500">Forgot password</a>
                  </div>
                  <div className="form-control mt-6">
                      <button className="btn-outlined border bg-gray-800 text-white w-full rounded-md font-bold p-2 ">Sign in</button>
          </div>
          <div className="flex justify-center items-center mt-4">
                      <a href="#" className="text-sm text-gray-400">Do not have an account?<Link to="/register" className="underline text-blue-500"> Sign up</Link></a>
                  </div>
              </form>     
      </div>
   
    </div>
    <div className="flex items-center justify-center">
       <img src="../../../public/login-img.svg" alt="" />
       </div> 
  </>
      
  );

 }
export default Login;
