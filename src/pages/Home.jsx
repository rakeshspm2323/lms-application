import CourseCard from "../components/CourseCard";
import FeaturedCourses from "../components/FeaturedCourses";
import Footer from "../components/Footer";
import StatusSection from "../components/StatusSection";
// import { courses } from "../data/MockCourses";
import "../styles/global.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Journey from "../components/Journey";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="w-full h-[550px] flex relative">
          <div className="relative w-full h-full flex">
            {/* <div className="absolute w-full h-full bg-gradient-to-r from-[#00416A] to-[#20BDFF]"></div> */}
            <div className="absolute w-full h-full bg-[linear-gradient(120deg,_#e0c3fc_0%,_#8ec5fc_100%)]"></div>
          </div>
          <div className="w-full h-full absolute">
            <div className="w-full h-full flex items-center justify-center p-5">
              <div className="w-full flex flex-col justify-center items-center">
                <h2 className="md:text-[70px] text-[55px] leading-tight capitalize font-bold text-black/70 text-center w-full md:w-2xl">
                  <span className="bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] bg-clip-text text-transparent">Smarter </span> Learning for a Brighter Future
                </h2>
                <p className="my-5 md:text-xl text-lg font-medium text-gray-600 text-center w-full md:max-w-xl md:leading-8 leading-7">
                  Engage with interactive lessons, real-world projects, and a supportive community. 
                  Our platform makes it easy to learn, grow, and succeed—on your terms.
                </p>
                {/* <Link
                  to="/courses"
                  className="bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] text-white px-5 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:brightness-110 hover:shadow-lg mb-5 flex justify-center items-center gap-2"
                >
                  Explore Courses 
                  <FaArrowRight className="text-md" />
                </Link> */}
                <Link
                  to="/courses"
                  className="group relative overflow-hidden w-auto bg-transparent text-black/70 border px-5 py-2 rounded-full text-base font-medium transition duration-300 ease-in-out shadow-md hover:shadow-lg mb-5 flex justify-center items-center gap-2"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Explore All Courses
                  </span>
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      <FaArrowRight className="text-md" />
                  </span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] transition-all duration-1000 ease-in-out group-hover:w-full z-0"></span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero section end */}
      <StatusSection />
      {/* <div className="container-wrapper">
        <div className="mx-auto p-4 my-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="md:text-2xl text-xl font-bold">Available Courses</h1>
            <Link
              to="/courses"
              className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white md:px-4 px-2 md:py-2 py-1.5 rounded-md text-sm md:text-base font-medium transition duration-300 ease-in-out hover:brightness-110 hover:shadow-lg"
            >
              All Courses
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div> */}
      <FeaturedCourses />
      <Journey />
      <Faq />
    </>
  );
};
export default Home;
