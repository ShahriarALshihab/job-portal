import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";
import HotJobs from "./HotJobs";
import JobCategory from "./JobCategory";

const Home = () => {
  return (
    <div>
      <div
        className="max-h-screen bg-cover bg-no-repeat rounded-2xl z-1 "
        style={{ backgroundImage: "url('/bg-banner.svg')" }}
      >
        <div className="md:grid grid-cols-2 ">
          <div className="flex flex-col items-start ml-4 md:ml-6 lg:ml-10 justify-center mt-10 md:mt-20 lg:mt-[100px]">
            <motion.h3
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
            >
              {" "}
              The <span className="text-[#704597] italic">Easiest Way </span>
              <br />
              to Get Your Job
            </motion.h3>
            <motion.p
              className="text-gray-500 mt-3 md:mt-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
            >
              Each month, more than 3 million job seekers turn to <br />
              website in their search for work, making over 140,000 <br />
              applications every single day
            </motion.p>
            <div>
              <SearchBar></SearchBar>
            </div>
            <div className="flex gap-2 mt-5 lg:mt-10">
              <p className="font-semibold text-gray-500">Popular Searches: </p>
              <ul className="text-blue-400 underline flex gap-2">
                <li>
                  <Link to="">Developer</Link>
                </li>
                <li>
                  <Link to="">Designer</Link>
                </li>
                <li>
                  <Link to="">IOS</Link>
                </li>
                <li>
                  <Link to="">Marketing</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:block lg:mt-16">
            <div>
              <motion.img
                className="max-w-sm  rounded-t-[80px] rounded-br-[80px] border-l-8 border-b-8 border-[#704597] shadow-xl"
                animate={{ y: [50, 100, 50] }}
                transition={{ duration: 8, repeat: Infinity }}
                src={team1}
                alt=""
              />
            </div>
            <div>
              <motion.img
                className="max-w-sm rounded-t-[80px] rounded-br-[80px]  border-l-8 border-b-8 border-[#704597] shadow-xl"
                animate={{ x: [100, 150, 100] }}
                transition={{ duration: 8, delay: 4, repeat: Infinity }}
                src={team2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <h3 className="text-gray-800 text-3xl lg:text-5xl font-bold my-2">
          Browse by category
        </h3>
        <p className="text-gray-400 md:text-lg my-4 lg:text-xl lg:font-semibold">
          Find the job that’s perfect for you. about 800+ new jobs everyday
        </p>
      </div>

      <JobCategory></JobCategory>

      <HotJobs></HotJobs>
    </div>
  );
};

export default Home;
