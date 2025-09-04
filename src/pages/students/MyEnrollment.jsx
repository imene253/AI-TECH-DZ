import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import {Line} from 'rc-progress'
import Footer from '../../components/educator/Footer'
const MyEnrollment = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } =
    useContext(AppContext);

  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 6, totalLectures: 7 },
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 12, totalLectures: 14 },
    { lectureCompleted: 9, totalLectures: 9 },
    { lectureCompleted: 2, totalLectures: 4 },
  ]);

  return (
    <>
      <div className="md:px-36 px-4 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="text-gray-900 border-b border-gray-200 text-sm text-left hidden md:table-header-group">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Course</th>
                <th className="px-4 py-3 font-semibold truncate">Duration</th>
                <th className="px-4 py-3 font-semibold truncate">Completed</th>
                <th className="px-4 py-3 font-semibold truncate">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {enrolledCourses.map((course, index) => {
                const progress = progressArray[index];
                const isCompleted =
                  progress &&
                  progress.lectureCompleted >= progress.totalLectures;

                return (
                  <tr
                    key={index}
                    className="border-b border-gray-200 flex flex-col md:table-row md:flex-none"
                  >
                    {/* Course Info */}
                    <td className="flex items-center gap-3 px-4 py-3">
                      <img
                        src={course.courseThumbnail}
                        alt={course.courseTitle}
                        className="w-16 sm:w-20 md:w-28 rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm md:text-base">
                          {course.courseTitle}
                        </p>
                        <Line
  percent={
    progressArray[index]
      ? (progressArray[index].lectureCompleted * 100) /
        progressArray[index].totalLectures
      : 0
  }
  strokeWidth={2}
  strokeColor="#3b82f6"   
  trailColor="#d1d5db"    
/>
                        <p className="text-gray-500 text-xs md:hidden">
                          {calculateCourseDuration(course)}
                        </p>
                      </div>
                    </td>

                    {/* Duration */}
                    <td className="px-4 py-3 hidden md:table-cell">
                      {calculateCourseDuration(course)}
                    </td>

                    {/* Completed */}
                    <td className="px-4 py-3 hidden md:table-cell">
                      {progress &&
                        `${progress.lectureCompleted} / ${progress.totalLectures}`}{" "}
                      <span className="text-gray-500">Lectures</span>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3">
                      <button
                        onClick={() => navigate("/player/" + course._id)}
                        className={`px-3 py-1 rounded-lg text-sm ${
                          isCompleted
                            ? "bg-green-500 text-white"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {isCompleted ? "Completed" : "On Going"}
                      </button>
                    </td>

                    {/* Mobile extra info */}
                    <div className="flex justify-between items-center px-4 pb-3 text-sm text-gray-600 md:hidden">
                      <span>{calculateCourseDuration(course)}</span>
                      <span>
                        {progress &&
                          `${progress.lectureCompleted} / ${progress.totalLectures}`}{" "}
                        Lectures
                      </span>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MyEnrollment;
