import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const MyCourses = () => {
  const { myCourses } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 pt-10 pb-6">
        <h1 className="text-[26px] md:text-[30px] font-extrabold text-[#0E2A46] text-right">دروسي</h1>
        {myCourses.length === 0 ? (
          <p className="text-[#667085] text-right mt-4">لم يتم إضافة أي دورات بعد.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {myCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-lg shadow-[0_4px_6px_-2px_rgba(16,24,40,0.03),0_12px_16px_-4px_rgba(16,24,40,0.08)] overflow-hidden border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(course.type === 'devoir' ? `/devoir/${course.id}` : `/player/${course.id}`)}
              >
                <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }} />
                <div className="p-5 text-right">
                  <span className="text-[#1A906B] text-sm font-semibold">{course.category}</span>
                  <h2 className="text-[#101828] text-lg font-bold mt-1">{course.title}</h2>
                  {course.subtitle && <p className="text-[#667085] text-sm mt-1">{course.subtitle}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default MyCourses;



