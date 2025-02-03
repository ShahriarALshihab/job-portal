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
      
      <NavLink to="/">Jobs</NavLink>
    <NavLink to="/">My Applications</NavLink>
    <NavLink to="/">Blog</NavLink>
    <NavLink to="/">contact</NavLink>
      
    </>
  );
  return (
    <div className=" flex items-center justify-between">
         <div className="hidden lg:flex">
      <Link to="/" className="flex items-center justify-center ">
          <img src={logo} className="w-12" alt="" />
          <a className="text-2xl text-gray-700 font-bold">Hire<span className="text-purple-600 italic">Co</span></a>
        </Link>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
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

      <div className="lg:hidden">
      <Link to="/" className="flex items-center justify-center ">
          <img src={logo} className="w-12" alt="" />
          <a className="text-2xl text-gray-700 font-bold">Hire<span className="text-purple-600 italic">Co</span></a>
        </Link>
        </div>
      
      <div className=" hidden lg:flex gap-3 font-semibold">
        {navLinks}
      </div>
      <div className=" gap-3 mr-5">
        {user ? (
          <>
            <p>userProfile</p>
            <Link to="/" onClick={handleSignOut}>
              Sign out
            </Link>
          </>
        ) : (
          <>
            <div>
              <Link to="/sign-in" className="btn border border-gray-300">Sign in </Link>

            </div>
          </>
        )}
            

      </div>
    
     
    </div>
  );
};

export default Navbar;
