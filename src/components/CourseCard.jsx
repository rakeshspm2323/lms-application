import { Link } from "react-router-dom";
import { FaArrowRight, FaStar} from "react-icons/fa";

const CourseCard = ({ course }) => {
  console.log("course",course);
  const discPrice = Math.floor(course?.price - (course?.price * 0.1));
  
  return (
  <div className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-lg flex flex-col h-auto border border-gray-100 hover:scale-105 transition duration-300 ease-in-out md:mb-0 mb-5">
    <div className="mb-3 relative">
      <Link to={`/course/${course.id}`} >
        <img src={course?.image} alt="" className=" w-full h-52 rounded-xl object-cover " />
        <div className="absolute top-3 right-3 bg-white text-black/70 px-3 py-0.5 rounded-full flex justify-center items-center gap-1 text-sm font-medium">
          {course?.rating} 
          <FaStar className="text-md text-orange-500" />
        </div>
      </Link>
    </div>
    <div className="">
      <h2 className="text-lg font-semibold mb-2 text-start text-black/80">{course.title}</h2>
      <p className="text-sm text-gray-500 mb-4 text-start">{course.description}</p>
      <div className="flex justify-between items-center">
        <div>
          <h5>
            <span className="font-semibold bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] bg-clip-text text-transparent text-lg mr-2">
              {`₹${discPrice?.toLocaleString("en-IN")}`}
              </span>
            <span className="font-medium text-sm line-through text-gray-500 mt-1">{`₹${course?.price?.toLocaleString("en-IN")}`}</span>
          </h5>
        </div>
        {/* <Link
          to={`/course/${course.id}`}
          className="px-5 py-2 bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] text-white rounded-full shadow-lg hover:bg-brightness-110 text-center transition duration-300 ease-in-out flex justify-center items-center gap-2"
        >
          View Course
          <FaArrowRight className="text-md" />
        </Link> */}
        <Link
          to={`/course/${course.id}`}
          className="group relative overflow-hidden w-auto bg-white text-black/70 border px-5 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out shadow-md hover:shadow-lg flex justify-center items-center gap-2"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            View Course
          </span>
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            <FaArrowRight className="text-md" />
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] transition-all duration-1000 ease-in-out group-hover:w-full z-0"></span>
        </Link>
      </div>
    </div>
  </div>
  )
};

export default CourseCard;