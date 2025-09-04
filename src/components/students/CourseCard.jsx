import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  // compute once instead of multiple calls
  const rating = calculateRating ? calculateRating(course) : 0;
  const reviewCount = course?.reviews?.length || 22; // fallback to 22 if not provided
  const educatorName = typeof course?.educator === 'object' && course?.educator
    ? (course.educator.name || 'Instructor')
    : 'Instructor';

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg hover:shadow-md transition"
    >
      {/* Thumbnail */}
      <img
        className="w-full h-40 object-cover"
        src={course.courseThumbnail}
        alt={course.courseTitle}
      />

      {/* Content */}
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-sm text-gray-600">{educatorName}</p>

        {/* Rating */}
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-sm font-medium">{rating.toFixed(1)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(rating) ? assets.star : assets.star_blank}
                alt="star"
                className="w-3.5 h-3.5"
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm">{calculateRating(course)}</p>
        </div>

        {/* Price */}
        <p className="text-base font-semibold text-gray-800 mt-2">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
