import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Payment from './pages/Payment';
import MyCourses from './pages/MyCourses';
import Player from './pages/Player';
import Devoir from './pages/Devoir';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/devoir/:id" element={<Devoir />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
