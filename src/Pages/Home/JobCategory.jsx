import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const jobCategories = [
  { title: "Marketing", jobs: 1526, icon: "📢" },
  { title: "Web Development", jobs: 185, icon: "🎧" },
  { title: "G.Designer", jobs: 168, icon: "🏦" },
  { title: "Software Engineer", jobs: 1856, icon: "💡" },
  { title: "Human Resource", jobs: 165, icon: "👤" },
];

const JobCategory = () => {
  return (
    <div className="relative w-full my-10 max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={4}
        className="flex flex-nowrap"
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {jobCategories.map((job, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-64 p-2 bg-white border rounded-lg shadow-md text-center">
                    <div className="flex  justify-center items-center">
                    <div className="text-4xl">{job.icon}</div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
              </div>
              <p className="text-gray-500">{job.jobs} Jobs Available</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-button absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
        <FaChevronLeft />
      </button>
      <button className="next-button absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default JobCategory;
