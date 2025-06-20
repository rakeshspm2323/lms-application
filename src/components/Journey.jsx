import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Journey = () => {

  return (
    <div className="bg-gradient-to-r from-indigo-200 to-purple-200 py-12">
        <div className="flex flex-col justify-center items-center md:px-5 px-3">
            <h2 className="md:text-[36px] text-3xl font-semibold mb-3 text-black/80 text-center">Learn Something New Every Day</h2>
            <p className="md:text-lg text-md font-medium text-gray-700 text-center w-full md:max-w-2xl md:leading-7 leading-6 mb-5">
                Explore practical courses that help you build skills and achieve your goals at your own pace.
            </p>
            <Link
                to="/courses"
                className="group relative overflow-hidden w-auto bg-white text-black/80 border px-5 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out shadow-md hover:shadow-lg mb-5 flex justify-center items-center gap-2"
            >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Get Started
                </span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    <FaArrowRight className="text-md" />
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] transition-all duration-1000 ease-in-out group-hover:w-full z-0"></span>
            </Link>
        </div>
    </div>
  );
};

export default Journey;
