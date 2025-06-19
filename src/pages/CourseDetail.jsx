import { useParams } from "react-router-dom";
import { useEnrollment } from "../context/EnrollmentContext";
import LessonItem from "../components/LessonItem";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useState } from "react";
import { courses } from "../data/MockCourses";
import Faq from "../components/Faq";
import Journey from './../components/Journey';

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
  const percentage = Math.round((completedLessons.length / course.lessons.length) * 100);

  return (
    <>
    <div className="container-wrapper">
      <div className="w-full mx-auto p-4 mt-3 mb-5">
        <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-600 mb-4">{course.description}</p>
        {!isEnrolled ? (
          <button
            onClick={() => enroll(id)}
            className="px-4 py-2 bg-blue-950 text-white rounded cursor-pointer transition duration-300 hover:bg-blue-900"
          >
            Enroll Now
          </button>
        ) : (
          <button className="px-4 py-2 bg-blue-950 text-white rounded cursor-default">
            Continue Learning
          </button>
        )}
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
      <Journey/>
      <Faq/>
    </>
  );
};

export default CourseDetail;