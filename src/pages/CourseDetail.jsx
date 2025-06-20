import { useParams } from "react-router-dom";
import { useEnrollment } from "../context/EnrollmentContext";
import LessonItem from "../components/LessonItem";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useState } from "react";
import { courses } from "../data/MockCourses";
import Faq from "../components/Faq";
import Journey from "./../components/Journey";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const { enrolledCourses, enroll } = useEnrollment();
  const [completedLessons, setCompletedLessons] = useState([]);

  const handleComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`progress-${id}`)) || [];
    setCompletedLessons(saved);
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`progress-${id}`, JSON.stringify(completedLessons));
  }, [completedLessons, id]);

  const isEnrolled = enrolledCourses.includes(id);
  const percentage = Math.round(
    (completedLessons.length / course.lessons.length) * 100
  );

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
                  Level Up
                </span>{" "}
                Your Learning Experience
              </h2>
              <p className="my-5 text-md font-medium text-gray-100 text-center w-full md:max-w-xl leading-7">
                Explore in-depth, expertly crafted courses designed to boost
                your skills and confidence. Whether you are diving into a new
                topic or sharpening your expertise, each course is built to help
                you succeed in the real world.
              </p>
              <div className="group relative overflow-hidden w-auto bg-transparent text-gray-100 border px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg mb-5 flex justify-center items-center gap-2">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Get Started Today
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
        <div className="w-full mx-auto p-4 mb-7">
          <div className="flex flex-col justify-center items-center md:px-5 px-3 mt-7 ">
            <h2 className="md:text-[36px] text-2xl font-semibold mb-3 bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] bg-clip-text text-transparent text-center">
              {course.title}
            </h2>
            <p className="md:text-md text-base font-medium text-gray-800 text-center  w-full md:max-w-2xl md:leading-7 leading-6 mb-5">
              {course.description}
            </p>
            {!isEnrolled ? (
              <div onClick={() => enroll(id)} className="cursor-pointer group relative overflow-hidden w-auto bg-transparent text-black/80 border px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg mb-5 flex justify-center items-center gap-2">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Enroll Now
                </span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  <FaArrowRight className="text-md" />
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] transition-all duration-1000 ease-in-out group-hover:w-full z-0"></span>
              </div>
            ) : (
              <div className="cursor-pointer group relative overflow-hidden w-auto bg-transparent text-black/80 border px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg mb-5 flex justify-center items-center gap-2">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Continue Learning
                </span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  <FaArrowDown className="text-md mt-1" />
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] transition-all duration-1000 ease-in-out group-hover:w-full z-0"></span>
              </div>
            )}
          </div>
          {isEnrolled && (
            <>
              <ProgressBar percentage={percentage} />
              <div className="mt-4 space-y-2">
                {course.lessons.map((lesson) => (
                  <LessonItem
                    key={lesson.id}
                    lesson={lesson}
                    completed={completedLessons.includes(lesson.id)}
                    onComplete={() => handleComplete(lesson.id)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Journey />
      <Faq />
    </>
  );
};

export default CourseDetail;
