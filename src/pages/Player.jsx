import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getCourseById } from '../data/courses';

const Player = () => {
  const { id } = useParams();
  const course = getCourseById(id);
  const chapters = useMemo(
    () => [
      {
        id: 'ch1',
        title: 'البدء',
        subTitle: 'تعريف بالمحتوى',
        lessons: [
          { title: 'ماهو رياكت', videoId: 'NU_1StN5Tkk' },
          { title: 'لماذا رياكت وليس جافا', videoId: 'Ke90Tje7VS0' },
          { title: 'اساسيات رياكت', videoId: 'bMknfKXIFA8' },
          { title: 'جزئيات في الرياكت', videoId: 'w7ejDZ8SWv8' },
        ],
      },
      {
        id: 'ch2',
        title: 'المشاريع',
        subTitle: 'تطبيقات عملية',
        lessons: [
          { title: 'اول مشاريع رياكت', videoId: 'SqcY0GlETPk' },
          { title: 'مشروع رياكت متكامل', videoId: 'rhPSo4_TGiI' },
        ],
      },
    ],
    []
  );
  const [openChapters, setOpenChapters] = useState(() => new Set([chapters[0]?.id]));
  const [selectedLesson, setSelectedLesson] = useState(() => chapters[0]?.lessons?.[0] || null);
  const toggleChapter = (chapterId) => {
    setOpenChapters((prev) => {
      const next = new Set(prev);
      if (next.has(chapterId)) next.delete(chapterId); else next.add(chapterId);
      return next;
    });
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#0E2A46] mb-4">غير موجود</h1>
            <Link className="text-[#54C5F8] font-semibold" to="/my-courses">
              العودة إلى دروسي
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

      {/* Hero/Header */}
      <section className="w-full bg-[linear-gradient(180deg,rgba(84,197,248,0.12)_0%,rgba(84,197,248,0)_60%)]">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 pt-8 pb-4 text-right">
          <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#7BA4FF] px-3 py-1 rounded-full text-[12px] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BA4FF]" />
            {course.category}
          </div>
          <h1 className="text-[22px] md:text-[26px] lg:text-[30px] font-extrabold text-[#0E2A46] leading-[1.6]">
            {course.title}
          </h1>
          {course.subtitle && (
            <p className="text-[#8CA0B3] text-[13px] md:text-sm mt-1">{course.subtitle}</p>
          )}
        </div>
      </section>

      {/* Player + Sidebar */}
      <section className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,340px] gap-6 items-start">
          {/* Video Player */}
          <div className="rounded-[16px] overflow-hidden shadow-md bg-white border border-gray-100">
            <div className="w-full aspect-[16/9] bg-black">
              <iframe
                className="w-full h-full"
                src={selectedLesson?.videoId ? `https://www.youtube.com/embed/${selectedLesson.videoId}` : 'about:blank'}
                title="Course player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 text-right">
              <h2 className="text-[#101828] text-[16px] md:text-[18px] font-bold">{course.title}</h2>
              {course.author && (
                <p className="text-[#667085] text-sm mt-1">بإشراف الأستاذ {course.author}</p>
              )}
            </div>
          </div>

          {/* Playlist */}
          <aside className="rounded-[16px] border border-[#D6E5F2] bg-[#EAF5FF] shadow-sm p-0 text-right overflow-hidden">
            {/* header */}
            <div className="px-5 py-4 border-b border-[#D6E5F2]">
              <h3 className="text-[#0E2A46] font-extrabold text-[18px]">محتوى الدروس</h3>
            </div>

            {/* Chapters  */}
            <div className="py-2">
              {chapters.map((chapter) => {
                const isOpen = openChapters.has(chapter.id);
                return (
                  <div key={chapter.id} className="px-3">
                    {/* Chapter header */}
                    <button
                      type="button"
                      onClick={() => toggleChapter(chapter.id)}
                      className="w-full flex items-center gap-2 px-3 py-3 rounded-md border border-[#D6E5F2] bg-white/60 hover:bg-white transition-colors"
                    >
                      {/* arrow */}
                      <span className={`text-[#0E2A46] transition-transform ${isOpen ? '' : '-rotate-90'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12 14.5a.75.75 0 0 1-.53-.22l-3-3a.75.75 0 1 1 1.06-1.06L12 12.69l2.47-2.47a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-.53.22Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div className="flex-1 text-right">
                        <div className="text-[#0E2A46] text-[15px] font-bold">{chapter.title}</div>
                        <div className="text-[#2E73B7] text-[13px] font-semibold">{chapter.subTitle}</div>
                      </div>
                    </button>

                    {/* Lessons */}
                    
                    {isOpen && (
                      <ul className="mt-2 mb-3 space-y-2">
                        {chapter.lessons.map((lesson, index) => {
                          const isActive = selectedLesson?.videoId === lesson.videoId;
                          return (
                          <li
                            key={index}
                            onClick={() => setSelectedLesson(lesson)}
                            className={`flex items-center gap-2 rounded-lg border px-3 py-3 transition-colors cursor-pointer ${isActive ? 'bg-white border-[#54C5F8]' : 'bg-white/50 hover:bg-white border-[#D6E5F2]'}`}
                          >
                            <span className="text-[#0E6AA6] shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                                <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
                                <path d="M10.5 8.75 15 12l-4.5 3.25V8.75Z" fill="currentColor" />
                              </svg>
                            </span>
                            <p className="flex-1 text-[#0E2A46] text-[15px] font-semibold text-right pr-1">{lesson.title}</p>
                            <span className="text-[#0E6AA6] rotate-180 shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </li>
                        );})}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Player;


