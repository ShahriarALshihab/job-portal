import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logoIcon.png";
import defaultProfileImg from "../../assets/team/altProfile.jpg";
import { PiSignOut } from "react-icons/pi";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // ✅ Always get the latest scrollY

      if (scrollY > lastScrollTop.current) {
        setIsVisible(false); // ✅ Hide navbar when scrolling down
      } else if (scrollY < lastScrollTop.current) {
        setIsVisible(true); // ✅ Show navbar when scrolling up
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Successfully signed out"))
      .catch((error) => console.log(error.message));
  };

  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/myapplications">My Applications</NavLink>
      <NavLink to="/blogs">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );

  return (
    <div
      className={`fixed top-0  w-11/12 h-[72px] flex items-center justify-between py-2 md:py-5 z-[999] ease-in-out bg-gray-50 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0 backdrop-blur-lg bg-white/30" : "-translate-y-20"
      }`}
    >
      {/* Logo */}
      <div className="hidden lg:flex">
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} className="w-12" alt="Logo" />
          <h3 className="text-2xl lg:text-3xl text-gray-700 font-bold">
            Hire<span className="text-[#704597] italic">Co</span>
          </h3>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-slate-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <div className="flex flex-col gap-2 font-semibold">{navLinks}</div>
        </ul>
      </div>

      {/* Mobile Logo */}
      <div className="lg:hidden">
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} className="w-12" alt="Logo" />
          <h3 className="text-2xl text-gray-700 font-bold">
            Hire<span className="text-purple-600 italic">Co</span>
          </h3>
        </Link>
      </div>

      {/* Navbar Links */}
      <div className="hidden lg:flex gap-3 font-semibold">{navLinks}</div>

      {/* Profile & Sign Out */}
      <div className="gap-3 mr-5">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <img src={defaultProfileImg} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="#">{user.displayName || "User"}</Link>
              </li>
              <li>
                <button onClick={handleSignOut} className="flex items-center gap-2 text-red-500">
                  <PiSignOut className="text-lg" />
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/sign-in" className="btn border border-gray-200 bg-[#704597] text-white hover:text-black">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
