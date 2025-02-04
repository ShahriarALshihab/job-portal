import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
    return (
        <div className="flex items-center bg-white  rounded-lg p-2 mt-5 md:mt-10 lg:mt-16 w-full mx-auto">
            <select className="select  w-30 rounded-lg ">
                <option value="" disabled selected>Industry</option>
                <option value="">Software</option>
                <option value="">Finance</option>
                <option value="">Management</option>
                <option value="">Marketing</option>
            </select>
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