import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import  logo  from "../../assets/logoIcon.png"; 
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successfully sign out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Jobs</NavLink>
    <NavLink to="/">My Applications</NavLink>
      
    </>
  );
  return (
    <div className=" flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <div className="flex flex-col  gap-2 font-semibold  ">
            {navLinks}
            </div>
            
          </ul>
        </div>

        <Link to="/" className="flex items-center justify-center">
          <img src={logo} className="w-12" alt="" />
          <a className="text-2xl text-gray-700 font-bold">Hire<span className="text-purple-600 italic">Co</span></a>
        </Link>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className=" gap-3 mr-5">
        {user ? (
          <>
            <Link to="/" onClick={handleSignOut}>
              Sign out
            </Link>
          </>
        ) : (
          <>
            <div className="underline text-blue-500">
              <Link to="/sign-in">Sign in </Link>

              <Link to="/register">/ Sign up</Link>
            </div>
          </>
        )}
            

      </div>
    
     
    </div>
  );
};

export default Navbar;
