import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

// Teacher chip component
const CategoryChip = ({ label, onClick, active }) => (
  <div
    onClick={() => onClick(label)}
    className={`px-6 h-12 flex items-center justify-center rounded-md shadow-sm cursor-pointer transition ${
      active ? "bg-[#3FC89E] text-white" : "bg-[#54C5F8] text-[#0E2A46]"
    }`}
  >
    <span className="font-bold text-lg">{label}</span>
  </div>
);

// Search bar
const SearchBar = ({ value, onChange }) => (
  <div className="flex items-center bg-white shadow-md rounded-full w-[260px] md:w-[320px] h-[50px] px-4 border border-gray-200">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
      />
    </svg>
    <input
      type="text"
      placeholder="ابحث"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 ml-3 bg-transparent outline-none text-gray-500 placeholder-gray-400"
    />
  </div>
);

// Course card
const CourseCard = ({ course }) => (
  <Link to={`/courses/${course.id}`} className="w-[320px] shadow-md bg-white rounded-lg overflow-hidden block hover:shadow-lg transition">
    {/* Image */}
    <div
      className="w-full h-[180px] bg-center bg-cover relative"
      style={{ backgroundImage: `url(${course.image})` }}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-600 font-medium flex items-center gap-1">
        ⏱ {course.duration}
      </div>
    </div>

    {/* Info */}
    <div className="p-4 flex flex-col gap-3">
      <span className="text-sm font-semibold text-green-600">
        {course.category}
      </span>
      <h3 className="text-lg font-semibold text-[#101828] leading-snug">
        {course.title}
      </h3>
      {course.subtitle && (
        <p className="text-sm text-gray-500">{course.subtitle}</p>
      )}

      {/* Bottom */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <img
            src={course.teacherPhoto || "/images/avatar-figma.png"}
            alt="author"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-800">{course.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-lg font-bold ${
              course.tag ? "text-[#54C5F8] line-through" : "text-[#3FC89E]"
            }`}
          >
            {course.price}
          </span>
          {course.tag && (
            <span className="text-red-500 font-bold text-sm">{course.tag}</span>
          )}
        </div>
      </div>
    </div>
  </Link>
);

// Main section
const CoursesSection = () => {
  const [search, setSearch] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");

  
  const normalize = (value) => {
    const s = (value ?? "").toString().toLocaleLowerCase("ar").trim();
    return s
      .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, "") // diacritics
      .replace(/\u0640/g, ""); // tatweel
  };

  // Filter courses 
  const filteredCourses = courses.filter((course) => {
    const q = normalize(search);

    if (q) {
      const haystack = normalize(
        [course.title, course.subtitle, course.category, course.author]
          .filter(Boolean)
          .join(" ")
      );
      return haystack.includes(q);
    }

    if (selectedTeacher) {
      return normalize(course.author) === normalize(selectedTeacher);
    }

    return true;
  });

  const teachers = ["بالحاج", "شيروف", "بوخميس", "برابح", "حربي", "مزار"];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 py-12">
      {/* Search + Teachers card */}
      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mb-12 max-w-[1100px] mx-auto">
        {/* Left - Search */}
        <div className="flex justify-center">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Right - Teacher names */}
        <div className="grid grid-cols-3 gap-4">
          {teachers.map((t) => (
            <CategoryChip
              key={t}
              label={t}
              active={normalize(selectedTeacher) === normalize(t)}
              onClick={(label) =>
                setSelectedTeacher(
                  normalize(selectedTeacher) === normalize(label) ? "" : label
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((c) => <CourseCard key={c.id} course={c} />)
        ) : (
          <p className="text-gray-500 text-lg col-span-full">لا توجد نتائج</p>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
