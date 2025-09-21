import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';
import { courses as sharedCourses } from '../data/courses';

const FeaturesSection = () => {
  // Use first two courses for the landing page feature
  const courses = sharedCourses.slice(0, 2).map(c => ({
    id: c.id,
    category: c.category,
    title: c.title,
    description: c.subtitle || c.description,
    instructor: c.author,
    price: c.price,
    duration: c.duration,
    image: c.image,
    categoryColor: "text-[#20B486]",
  }));

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          
          {/* Left side - Image and Title */}
          <div className="w-full lg:w-1/3">
            {/* Image */}
            <div className="mb-6">
              <ImageWithFallback
                src="/images/FeaturesSeaction.png"
                alt="Featured courses"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#101828] leading-tight text-center lg:text-right">
              دورات <span className="text-[#54C5F8]">مميزة</span>
              <br />
              مع <span className="text-[#54C5F8]">أفضل</span> الأساتذة
            </h2>
          </div>
          
          {/* Course cards section */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {courses.map((course) => (
                <Link to={`/courses/${course.id}`} key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 block">
                  
                  {/* Course image */}
                  <div className="relative h-48 sm:h-40 md:h-48 overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Duration badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{course.duration}</span>
                    </div>
                  </div>
                  
                  {/* Course content */}
                  <div className="p-5">
                    {/* Category */}
                    <div className="mb-2">
                      <span className={`text-sm font-medium ${course.categoryColor}`}>
                        {course.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#101828] mb-2 leading-tight">
                      {course.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    
                    {/* teachers and price */}
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2">
                         <img
                           src={(sharedCourses.find(c=>c.id===course.id)?.teacherPhoto) || "/images/avatar-figma.png"}
                           alt={course.instructor}
                           className="w-8 h-8 rounded-full object-cover"
                         />
                         <span className="text-sm text-gray-600">{course.instructor}</span>
                       </div>
                      
                      <div className="text-right">
                        <span className="text-xl font-bold text-[#20B486]">
                          {course.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* View All button */}
              <div className="sm:col-span-2 flex justify-center items-center mt-8">
                <button onClick={() => window.location.assign('/courses')} className="bg-gradient-to-br from-[#54C5F8] to-[#54C5F8] rounded-2xl px-8 py-4 text-white font-bold text-xl hover:shadow-lg transition-shadow duration-300 flex items-center gap-3">
                  <span>الكل</span>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;