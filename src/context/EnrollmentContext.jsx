import { createContext, useContext, useState, useEffect } from "react";

const EnrollmentContext = createContext();
export const useEnrollment = () => useContext(EnrollmentContext);

export const EnrollmentProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    return JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  });
  const [login, setLogin] = useState(false)
  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const enroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  return (
    <EnrollmentContext.Provider value={{ enrolledCourses, enroll, login, setLogin }}>
      {children}
    </EnrollmentContext.Provider>
  );
};