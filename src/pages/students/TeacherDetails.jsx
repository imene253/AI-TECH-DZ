import React, { useContext, useMemo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/students/CourseCard'
import Footer from '../../components/educator/Footer'
import Loading from '../../components/students/Loading'

const TeacherDetails = () => {
  const { educatorId } = useParams()
  const { allCourses } = useContext(AppContext)

  const { teacherName, teacherCourses, isLoading } = useMemo(() => {
    // Normalize educator id: sometimes the link might carry a course id
    let normalizedEducatorId = educatorId
    const courseById = (allCourses || []).find((c) => String(c._id) === String(educatorId))
    if (courseById) {
      normalizedEducatorId = courseById.educator?._id || courseById.educator
    }

    const courses = (allCourses || []).filter((c) => {
      const id = c.educator?._id || c.educator
      return String(id) === String(normalizedEducatorId)
    })
    // Try to get name from first matching course; otherwise probe
    let name = courses[0]?.educator?.name
    if (!name) {
      const probe = (allCourses || []).find((c) =>
        typeof c.educator === 'object' && (String(c.educator?._id) === String(normalizedEducatorId))
      )
      name = probe?.educator?.name || 'Instructor'
    }
    return { teacherName: name, teacherCourses: courses, isLoading: !allCourses || allCourses.length === 0 }
  }, [allCourses, educatorId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [educatorId])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex items-center justify-between w-full'>
          <div>
            <h1 className='text-3xl font-semibold text-gray-800'>
              {teacherName}
            </h1>
            <p className='text-gray-500'>
              Teacher • {teacherCourses.length} course{teacherCourses.length === 1 ? '' : 's'}
            </p>
          </div>
        </div>

        {teacherCourses.length === 0 ? (
          <p className='text-gray-500 my-12'>No courses found for this teacher.</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-12 gap-3 px-2 md:p-0'>
            {teacherCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </>
  )
}

export default TeacherDetails


