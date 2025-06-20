import { FaUsers, FaBookOpen, FaAward, FaChartLine } from "react-icons/fa";
import CourseCard from "./CourseCard";
import { courses } from "../data/MockCourses";

const FeaturedCourses = () => {

  return (
    <div className="bg-white pb-12">
    <div className="container-wrapper mx-auto">
        <div className="flex flex-col justify-center items-center md:px-5 px-3 md:mb-10 mb-7">
            <h2 className="md:text-[36px] text-3xl font-semibold mb-3 bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] bg-clip-text text-transparent text-center">Featured Learning Paths</h2>
            <p className="md:text-lg text-md font-medium text-gray-800 text-center w-full md:max-w-2xl md:leading-7 leading-6">
                Unlock your potential with expertly curated courses designed to build real-world skills, drive career growth, 
                and support lifelong learning.
            </p>
        </div>
        <div className=" mx-auto md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-6 text-center">
            {courses.slice(0, 6).map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    </div>
    </div>
  );
};

export default FeaturedCourses;
