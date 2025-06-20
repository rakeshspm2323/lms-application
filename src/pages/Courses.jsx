import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import Faq from "../components/Faq";
import { courses } from "../data/MockCourses";
import "../styles/global.css";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Calculate indexes
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="w-full h-[500px] flex relative">
        <div className="relative w-full h-full flex">
          <div className="absolute w-full h-full bg-gradient-to-r from-[#3b8dc0] to-[#91873a]"></div>
        </div>
        <div className="w-full h-full absolute">
          <div className="w-full h-full flex items-center justify-center p-5">
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="md:text-[55px] text-[38px] leading-tight capitalize font-bold text-gray-100 text-center w-full md:w-2xl">
                <span className="bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] bg-clip-text text-transparent">
                  Explore All Courses{" "}
                </span>{" "}
                Learn Anything, Anytime
              </h2>
              <p className="my-5 text-md font-medium text-gray-100 text-center w-full md:max-w-xl leading-7">
                Unlock your potential with our full catalog of expertly designed
                courses. Whether you are looking to upskill, switch careers, or
                explore a new passion, we have something for everyone. Start
                learning today and move one step closer to your goals.
              </p>
              <div className="group relative overflow-hidden w-auto bg-transparent text-gray-100 border px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg mb-5 flex justify-center items-center gap-2">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Begin Your Journey
                </span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  <FaArrowRight className="text-md" />
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] transition-all duration-1000 ease-in-out group-hover:w-full z-0"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="flex flex-col justify-center items-center md:px-5 px-3 md:my-10 my-7">
          <h2 className="md:text-[36px] text-2xl font-semibold mb-3 bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] bg-clip-text text-transparent md:text-center text-start">
            Browse Our Course Collection
          </h2>
          <p className="md:text-md text-base font-medium text-gray-700 md:text-center text-start w-full md:max-w-2xl md:leading-7 leading-6">
            Find the course that's right for you. From tech and business to
            design and personal development, our diverse range of courses is
            curated to help you grow at your own pace. Explore the options below
            and begin your learning journey today.
          </p>
        </div>
        <div className="mx-auto p-4 mt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-6 md:px-6">
            {currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center md:mt-10 mt-5">
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded-full border cursor-pointer ${
                    currentPage === index + 1
                      ? "bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] text-white"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100 transform-all duration-300 ease-in-out"
                  } transition duration-300`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
        <Faq />
      </div>
    </>
  );
};
export default Courses;
