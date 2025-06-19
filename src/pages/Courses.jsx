import CourseCard from "../components/CourseCard";
import Faq from "../components/Faq";
import { courses } from "../data/MockCourses";
import "../styles/global.css";

const Courses = () => {
  return (
    <div className="container-wrapper">
      <div className="mx-auto p-4 mt-3">
        <h1 className="text-2xl font-bold mb-6 text-black/80 md:px-6">Available All Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-6 md:px-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <Faq/>
    </div>
  );
};
export default Courses;