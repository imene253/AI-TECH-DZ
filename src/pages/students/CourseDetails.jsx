import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/students/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Footer from '../../components/educator/Footer'
import YouTube from "react-youtube";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const playerRef = useRef(null);
  const { allCourses, CalculateChapterTime , calculateCourseDuration , calculateNoOfLectures  } = useContext(AppContext);

  const featchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    featchCourseData();
  }, [allCourses]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePreviewClick = (lectureUrl, lectureTitle) => {
    setPlayerData({videoId : lectureUrl.split('/').pop()});
    
    setTimeout(() => {
      if (playerRef.current && window.innerWidth < 768) {
        playerRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  return courseData ? (
    <>
      <div className="pl-8 pr-8 md:pl-36 md:pr-36 pt-20 md:pt-30 relative">
        
        <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/35"></div>

        <div className="flex flex-col md:flex-row gap-10 relative items-start justify-between">
          
          <div className="w-full md:w-1/2 order-1 md:order-2" ref={playerRef}>
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">

              {
                  playerData ? (
                    <YouTube videoId={playerData.videoId} opts={{playerVars : {autoplay:1}  }} iframeClassName="w-full aspect-video"/>
                  )
              
            :  <img
                src={courseData.courseThumbnail}
                alt="Course thumbnail"
                className="w-full h-48 md:h-64 object-cover"
              />
            }
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    className="w-4 h-4"
                    src={assets.time_left_clock_icon}
                    alt="time_left_clock_icon"
                  />
                  <p className="text-red-500">
                    <span className="font-medium">5 days</span> left at this price!
                  </p>
                </div>

                <div className="flex gap-3 items-center mb-2">
                  <p className="text-gray-800 md:text-4xl text-3xl font-semibold">
                    ${(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}
                  </p>
                </div>
                <p className="md:text-lg text-base text-gray-500 line-through mb-1">
                  ${courseData.coursePrice}
                </p>
                <p className="md:text-lg text-base text-gray-500 mb-6">
                  {courseData.discount}% off
                </p>

                <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 mb-6">
                  {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
                </button>

                <div>
                  <p className="md:text-xl text-lg font-semibold text-gray-800 mb-3">
                    What's in the course?
                  </p>
                  <ul className="space-y-2 text-sm md:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Lifetime access with free updates
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Step-by-step, hands-on project guidance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Downloadable resources and source code
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Mobile-friendly lessons—learn anywhere
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Real-world projects and case studies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl text-gray-950 flex-1 order-2 md:order-1">
            <h1 className="md:text-course-deatails-heading-large text-course-deatails-heading-small font-semibold text-gray-800 mb-4">
              {courseData.courseTitle}
            </h1>

            <div
              className="pt-4 md:text-base text-sm mb-4"
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription.slice(0, 200),
              }}
            ></div>

            <p className="text-sm mb-8">
              Course by <span className="text-blue-600 underline">AI TEACH DZ</span>
            </p>

            <div className="text-gray-800 mb-12">
              <h2 className="text-xl font-semibold mb-5">Course Structure</h2>
              <div className="space-y-2">
                {courseData.courseContent &&
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
                                    src={assets.play_icon}
                                    alt="play icon"
                                    className="w-4 h-4 flex-shrink-0"
                                  />
                                  <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-sm">
                                    <p className="flex-1">
                                      {lecture.lectureTitle}
                                    </p>
                                    <div className="flex items-center gap-3 ml-2">
                                      {lecture.isPreviewFree && (
                                        <div
                                          className="preview-button-container text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors duration-150"
                                          onClick={(e) => {
                                            handlePreviewClick(lecture.lectureUrl, lecture.lectureTitle);
                                            e.stopPropagation();
                                            e.preventDefault();
                                          }}
                                          data-testid={`preview-${index}-${i}`}
                                        >
                                          Preview
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

            <div className="text-sm md:text-base">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Course Description
              </h3>
              <div
                className="rich-text text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: courseData.courseDescription,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
     <Footer/>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;