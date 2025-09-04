import React, { useContext, useMemo } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const Teachers = () => {
  const { allCourses, navigate } = useContext(AppContext)

  // Deduplicate by educator id or name
  const teachers = useMemo(() => {
    const byEducatorKey = new Map()
    for (const course of allCourses || []) {
      const educatorId = course.educator?._id || course.educator || course._id
      const educatorName = course.educator?.name || 'Instructor'
      if (!byEducatorKey.has(educatorId)) {
        byEducatorKey.set(educatorId, {
          educatorId,
          name: educatorName,
          // pick first course as primary
          primaryCourseId: course._id,
          primaryCourseTitle: course.courseTitle,
          image: course.educator?.profileImage || assets.profile_img_1,
          thumbnail: course.courseThumbnail,
          courses: [course],
        })
      } else {
        byEducatorKey.get(educatorId).courses.push(course)
      }
    }
    return Array.from(byEducatorKey.values())
  }, [allCourses])

  const onTeacherClick = (educatorId) => {
    if (!educatorId) return
    navigate('/teacher/' + educatorId)
    window.scrollTo(0, 0)
  }

  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>
        Teachers
      </h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Meet our instructors. Click a teacher to view their top course.
      </p>

      <div className='pl-6'>
        {teachers.map((t) => (
          <div
            key={t.educatorId}
            className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden mt-6 hover:shadow-md transition cursor-pointer'
            onClick={() => onTeacherClick(t.educatorId)}
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img
                className='h-12 w-12 rounded-full'
                src={t.image}
                alt={t.name}
              />
              <div className='flex-1'>
                <h1 className='text-lg font-medium text-gray-800'>{t.name}</h1>
                <p className='text-gray-800/80 truncate'>{t.primaryCourseTitle}</p>
              </div>
              <img
                className='h-10 w-16 object-cover rounded'
                src={t.thumbnail}
                alt={t.primaryCourseTitle}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teachers


