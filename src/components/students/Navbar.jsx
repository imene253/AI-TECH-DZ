import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const {navigate , isEducator} = useContext(AppContext);

  return (
    <nav
      className={`flex justify-between items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 border-b border-gray-300 ${
        isCourseListPage
          ? 'bg-white'
          : 'bg-gradient-to-b from-cyan-100/70'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="group">
        <img onClick={() => navigate('/')}
          src={assets.logo}
          alt="Logo"
          className="w-28 lg:w-32 cursor-pointer transition-transform duration-200 group-hover:scale-105"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="flex items-center gap-6">
       
        {user && (
          <Link to="/become-educator">
            <button onClick={()=> {navigate('/educator')}} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-1 relative group">
              {isEducator ? 'Educator Dashboard' : 'Become an Educator'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        )}
     
     <div className="w-px h-5 bg-gray-300"></div>
       
        {user && (
          <Link to="/my-enrollments">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-1 relative group">
              My Enrollments
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        )}
     
     
       
        <Link to="/create-account">
          {user ? (
            <UserButton />
          ) : (
            <button
            onClick={() => openSignIn({ redirectUrl: "/" })}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Create Account
            </button>
          )}
        </Link>
      </div>

      {/* Mobile Placeholder */}
      <div className="md:hidden"></div>
    </nav>
  );
};

export default Navbar;
