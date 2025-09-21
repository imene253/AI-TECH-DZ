import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { courses } from '../data/courses';

const AppContext = createContext({
  myCourses: [],
  addCourse: (_course) => {},
});

export const AppProvider = ({ children }) => {
  const [myCourses, setMyCourses] = useState(() => {
    try {
      const raw = localStorage.getItem('myCourses');
      const savedCourses = raw ? JSON.parse(raw) : [];
      // Add devoir course if not already present
      const devoirCourse = courses.find(c => c.type === 'devoir');
      if (devoirCourse && !savedCourses.find(c => c.id === devoirCourse.id)) {
        return [...savedCourses, devoirCourse];
      }
      return savedCourses;
    } catch {
      // Add devoir course as default
      const devoirCourse = courses.find(c => c.type === 'devoir');
      return devoirCourse ? [devoirCourse] : [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('myCourses', JSON.stringify(myCourses));
    } catch {}
  }, [myCourses]);

  const addCourse = (course) => {
    setMyCourses((prev) => {
      if (prev.find((c) => c.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  const value = useMemo(() => ({ myCourses, addCourse }), [myCourses]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);



