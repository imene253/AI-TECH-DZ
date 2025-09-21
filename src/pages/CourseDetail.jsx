import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getCourseById } from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams();
  const course = getCourseById(id);

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#0E2A46] mb-4">غير موجود</h1>
            <Link className="text-[#54C5F8] font-semibold" to="/courses">
              العودة إلى جميع الدورات
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Background */}
      <div className="bg-[linear-gradient(180deg,rgba(84,197,248,0.12)_0%,rgba(84,197,248,0)_40%)]">
        
        {/* Hero */}
        <section className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 pt-12 pb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#7BA4FF] px-3 py-1 rounded-full text-[12px] font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BA4FF]" />
            {course.category}
          </div>
          <h1 className="text-[26px] md:text-[30px] lg:text-[32px] font-extrabold text-[#0E2A46] leading-[1.4] mb-2">
            {course.title}
          </h1>
          <p className="text-[#8CA0B3] text-[13px] md:text-sm mb-5">
            {course.subtitle}
          </p>
          <Link
            to={`/payment/${course.id}`}
            className="inline-flex items-center justify-center bg-[#54C5F8] hover:bg-[#46b1e1] text-white h-10 px-6 rounded-md text-[14px] font-bold"
          >
            قم بالتسجيل الآن
          </Link>
        </section>

        {/* Video */}
        <section
          id="video"
          className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 pb-6"
        >
          <div className="rounded-[16px] overflow-hidden shadow-md bg-white">
            <div className="w-full aspect-[16/9]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/NU_1StN5Tkk"
                title="Course video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>

     {/* Instructor section */}
<section className="relative w-full py-12">
  {/* Side images  */}
  <img
    src="/images/CourseDetail-boy.png"
    alt="boy"
    className="hidden md:block absolute left-0 top-[-40px] h-[460px] object-cover rounded-[36px]"
  />
  <img
    src="/images/CourseDetail-girl.png"
    alt="girl"
    className="hidden md:block absolute right-0 top-[-40px] h-[460px] object-cover rounded-[36px]"
  />

 

 
<div className="relative max-w-[1280px] mx-auto w-[92%] md:w-[82%] bg-gradient-to-r from-[#F0F9FF] to-white rounded-[20px] shadow-[0_8px_24px_rgba(16,24,40,0.08)] px-6 sm:px-10 py-8 grid grid-cols-1 md:grid-cols-[360px,1fr] items-center gap-6 md:gap-10">

    {/* Teacher image */}
    <div className="flex justify-center md:justify-start">
      <div className="relative w-[300px] h-[300px]">
        <div className="absolute inset-0 rounded-[28px] bg-[#54C5F8]/25" />
        <div className="absolute inset-4 rounded-[24px] overflow-hidden">
          <img
            src={course.teacherPhoto || "/images/TeacherTestimonial.png"}
            alt="instructor"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* Text */}
    <div className="text-right pr-0 md:pr-6">
      <h2 className="text-[28px] md:text-[36px] font-extrabold leading-[1.6]">
        <span className="text-[#54C5F8]">دورة مميزة</span> مع{' '}
        <span className="text-[#0E2A46]">الأستاذ {course.author}</span>
      </h2>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default CourseDetail;
