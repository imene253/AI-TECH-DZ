import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube';
import Footer from '../../components/educator/Footer';
const Player = () => {
  const {enrolledCourses , CalculateChapterTime} = useContext(AppContext)
  const {courseId} = useParams()
  const [courseData , setCourseData] = useState(null)
  const [openSections , setOpenSections] = useState({})
  const [playerData , setPlayerData] = useState(null)

  const getCourseData = ()=>{
    enrolledCourses.map((course)=> {
      if(course._id === courseId){
        setCourseData(course)
      }
    })
  }

  useEffect( ()=> {
    getCourseData()
  } , [enrolledCourses] )


  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
    
    <div className='p-4 sm:p-10 flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
      {/* left column */}
      <div className='text-gray-800'>
        <h2>Course Structure</h2>
             <div className="space-y-2">
                        {courseData &&
                          courseData.courseContent.map((chapter, index) => (
                            <div
                              key={index}
                              className="border border-gray-300 bg-white rounded-lg overflow-hidden"
                            >
                              <div
                                className="flex items-center justify-between px-4 py-3 cursor-pointer select-none hover:bg-gray-50 transition-colors duration-150"
                                onClick={() => toggleSection(index)}
                              >
                                <div className="flex items-center gap-2">
                                  <img
                                    src={assets.down_arrow_icon}
                                    alt="arrow icon"
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                      openSections[index] ? "rotate-180" : "rotate-0"
                                    }`}
                                  />
                                  <p className="font-medium md:text-base text-sm">
                                    {chapter.chapterTitle}
                                  </p>
                                </div>
                                <p className="text-sm md:text-base text-gray-600">
                                  {chapter.chapterContent?.length || 0} lectures –{" "}
                                  {CalculateChapterTime
                                    ? CalculateChapterTime(chapter)
                                    : "N/A"}
                                </p>
                              </div>
        
                              {openSections[index] && (
                                <div className="border-t border-gray-300 bg-gray-50">
                                  <ul className="list-none px-4 py-2 space-y-2 text-gray-600">
                                    {chapter.chapterContent &&
                                      chapter.chapterContent.map((lecture, i) => (
                                        <li
                                          key={i}
                                          className="flex items-center gap-2"
                                        >
                                          <img
                                            src={false ? assets.blue_tick_icon : assets.play_icon}
                                            alt="play icon"
                                            className="w-4 h-4 flex-shrink-0"
                                          />
                                          <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-sm">
                                            <p className="flex-1">
                                              {lecture.lectureTitle}
                                            </p>
                                            <div className="flex items-center gap-3 ml-2">
                                              {lecture.lectureUrl && (
                                                <div
                                                  className="preview-button-container text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors duration-150"
                                                  onClick={() => setPlayerData({
                                                    ...lecture , chapter: index + 1 , lecture: i + 1 
                                                  }) }
                                                  data-testid={`preview-${index}-${i}`}
                                                >
                                                 Watch
                                                </div>
                                              )}
                                              <span className="whitespace-nowrap text-xs md:text-sm text-gray-600">
                                                {lecture.lectureDuration
                                                  ? humanizeDuration(
                                                      lecture.lectureDuration *
                                                        60 *
                                                        1000,
                                                      { units: ["h", "m"] }
                                                    )
                                                  : "N/A"}
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
      </div>
      {/* right column */}
      <div className='md:mt-10'>
        {playerData ? (
        <div>
           <YouTube videoId={playerData.lectureUrl.split('/').pop()} 
            iframeClassName="w-full aspect-video"/>
            <div className='flex justify-between items-center mt-1'>
              <p>
                {playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
              </p>
              <button className='text-blue-600'>
               {false ? 'Complted' : 'Mark Complete'}
              </button>
            </div>
        </div>
        ) 
       : <img src={courseData ? courseData.courseThumbnail : ''} alt="" />
      }
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default Player