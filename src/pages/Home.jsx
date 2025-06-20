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
        <div className="w-full h-[500px] max-h-[550px] flex relative">
          <div className="relative w-full h-full flex">
            <div className="absolute w-full h-full bg-[linear-gradient(120deg,_#e0c3fc_0%,_#8ec5fc_100%)]"></div>
          </div>
          <div className="w-full h-full absolute">
            <div className="w-full h-full flex items-center justify-center p-5">
              <div className="w-full flex flex-col justify-center items-center">
                <h2 className="md:text-[55px] text-[38px] leading-tight capitalize font-bold text-black/80 text-center w-full md:w-2xl">
                  <span className="bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] bg-clip-text text-transparent">Smarter </span> Learning for a Brighter Future
                </h2>
                <p className="my-5 text-md font-medium text-gray-800 text-center w-full md:max-w-xl leading-7">
                  Engage with interactive lessons, real-world projects, and a supportive community. 
                  Our platform makes it easy to learn, grow, and succeed—on your terms.
                </p>
                <Link
                  to="/courses"
                  className="group relative overflow-hidden w-auto bg-transparent text-black/80 border px-5 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out shadow-md hover:shadow-lg mb-5 flex justify-center items-center gap-2"
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
        {/* <HeroSection /> */}
        <StatusSection />
        <FeaturedCourses />
        <Journey />
        <Faq />
    </>
  );
};
export default Home;
