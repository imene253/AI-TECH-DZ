import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const MyEnrollment = () => {
  const { enrolledCourses, calculateCourseDuration } = useContext(AppContext)

  return (
    <>
      <div className="md:px-36 px-8 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max:sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className='text-gray-700' >
            {enrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-500/20">
                <td className="flex items-center gap-3 md:px-4 py-3 pl-2 md:pl-4 space-x-3">
                  <img
                    src={course.courseThumbnail}
                    alt={course.courseTitle}
                    className="w-14 sm:w-24 md:w-28 rounded"
                  />
                  <p className="font-medium">{course.courseTitle}</p>
                </td>
                {console.log(course) || calculateCourseDuration(course)}
                <td className="px-4 py-3">
                  4/10 <span className="text-gray-500">Lectures</span>
                </td>
                <td className="px-4 py-3">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
                    On Going
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default MyEnrollment
