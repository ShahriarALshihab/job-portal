import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Register from "../Pages/Register";
import Footer from "../Pages/shared/Footer";
import Login from "../Pages/Login";

const Mainlayout = () => {
  return (
    <div className="max-w-7xl  mx-auto p-3">
      <Navbar></Navbar>
      <div className="min-h-screen">
      <Outlet>
          <Register></Register>
          <Login></Login>
      </Outlet>
         </div>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
