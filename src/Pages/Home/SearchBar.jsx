import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";


const SearchBar = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white  rounded-lg p-2 mt-5 md:mt-10 lg:mt-16 w-full mx-auto"><LiaIndustrySolid></LiaIndustrySolid>
            <select className="select  w-30 rounded-lg ">
                <option value="" disabled selected>Industry</option>
                <option value="">Software</option>
                <option value="">Finance</option>
                <option value="">Management</option>
                <option value="">Marketing</option>
            </select>
            <IoLocationOutline></IoLocationOutline>
            <select className="select w-30  rounded-lg " >
                <option disabled selected>Location</option>
                <option value="">Dhaka</option>
                <option value="">New York</option>
                <option value="">Remote</option>
            </select>

            <input type="text" placeholder="Keyword..." className="input rounded-lg " />
            
            <button className="btn bg-[#704597] text-white hover:text-gray-800"><FaSearch className="mr-2"></FaSearch> Search</button>
        </div>
    );
};

export default SearchBar;