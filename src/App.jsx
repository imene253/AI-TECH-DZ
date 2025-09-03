import React from 'react';
import { Routes, Route, useLocation, useMatch } from 'react-router-dom';

// Student Pages
import Home from './pages/students/Home';
import CourseList from './pages/students/CourseList';
import CourseDetails from './pages/students/CourseDetails';
import MyEnrollment from './pages/students/MyEnrollment';
import Player from './pages/students/Player';
import Loading from './components/students/Loading';

// Educator Pages
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import { AddCourse } from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';

// Components
import Navbar from './components/students/Navbar';

const App = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/educator');
  
  const isEducatorRoute = useMatch('/educator/*');

  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && showNavbar && <Navbar />}
     

      <Routes>
        {/* Student Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollment />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* Educator Routes with nested Outlet */}
        <Route path="/educator" element={<Educator />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="students-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
