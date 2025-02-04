import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat rounded-2xl z-1 "
      style={{ backgroundImage: "url('/bg-banner.svg')" }}
    >
      <div className="md:grid grid-cols-2 ">
        <div className="flex flex-col items-start ml-4 md:ml-6 lg:ml-10 justify-center mt-10 md:mt-20 lg:mt-[100px]">
      <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-700">  The <span className="text-[#704597]">Easiest Way </span><br />
            to Get Your New Job</h3>
          <p className="text-gray-500 mt-3 md:mt-5">Each month, more than 3 million job seekers turn to <br />
website in their search for work, making over 140,000 <br />
            applications every single day</p>
          <div>
          <SearchBar></SearchBar>
          </div>
          <div className="flex gap-2 mt-5 lg:mt-10">
            <p className="font-semibold text-gray-500">Popular Searches: </p>
            <ul className="text-blue-400 underline flex gap-2">
              <li><Link to="">Developer</Link></li>
              <li><Link to="">Designer</Link></li>
              <li><Link to="">IOS</Link></li>
              <li><Link to="">Marketing</Link></li>
              
            </ul>
          </div>
        </div>
        <div>
          Pictures
        </div>
      </div>
    </div>
  );
};

export default Home;
