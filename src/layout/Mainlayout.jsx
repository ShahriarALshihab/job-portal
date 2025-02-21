import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Register from "../Pages/Register";
import Footer from "../Pages/shared/Footer";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import JobApply from "../Pages/JobApply/JobApply";



const Mainlayout = () => {
  return (
    <div className="w-full bg-gray-50">
       <div className="w-11/12 mx-auto py-3">
      <Navbar></Navbar>
      <div className="min-h-screen mt-10">
      <Outlet>
          <Register></Register>
            <Login></Login>
            <JobDetails></JobDetails>
            <JobApply></JobApply>
      </Outlet>
         </div>
      <Footer></Footer>
    </div>
    </div>
  );
};

export default Mainlayout;
