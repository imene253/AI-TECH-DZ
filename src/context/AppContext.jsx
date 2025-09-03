import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);

  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // FETCH ALL COURSES
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // Function to calculate the average rating of a course
  const calculateRating = (course) => {
    if (!course.ratings || course.ratings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.ratings.forEach((rating) => {
      totalRating += rating;
    });
    return (totalRating / course.ratings.length).toFixed(1);
  };


  // Function to Calculate Course Chapter Time
const CalculateChapterTime = (chapter) => {
  let time = 0;
  chapter.chapterContent.forEach((lecture) => {
    time += lecture.lectureDuration;
  });

  return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
};

// Function to Calculate  Course Duration
const calculateCourseDuration = (course) => {
  let time = 0;
  course.courseContent.forEach((chapter) => {
    chapter.chapterContent.forEach((lecture) => {
      time += lecture.lectureDuration;
    });
  });

  return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
};


// Function to Calculate Total Number of Lectures in a Course
const calculateNoOfLectures = (course) => {
  let totalLectures = 0;
  course.courseContent.forEach((chapter) => {
    if(Array.isArray(chapter.chapterContent)){
      totalLectures += chapter.chapterContent.length;
    }
  });
  return totalLectures;
};

// Fetch User Enrolled Courses 
const fetchUserEnrolledCourses = async ()=> {
  setEnrolledCourses(dummyCourses)
}

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator ,
    CalculateChapterTime ,
    calculateCourseDuration ,
    calculateNoOfLectures,
    enrolledCourses, 
    setEnrolledCourses , 
    fetchUserEnrolledCourses ,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
