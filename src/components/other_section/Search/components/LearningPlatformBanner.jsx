import React from 'react';
import group from '../assets/Group71.png'

const LearningPlatformBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-blue-50 py-6 px-6 md:px-14 rounded-xl shadow my-16 md:mx-32">
      {/* Text Section */}
      <div className="max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Know about learning platform
        </h2>
        <ul className="text-sm space-y-2 text-gray-600">
          <li className="flex items-center">
            <span className="bg-teal-300 rounded-full w-3 h-3 mr-2"></span>
            Free E-book, video & consolation
          </li>
          <li className="flex items-center">
            <span className="bg-teal-300 rounded-full w-3 h-3 mr-2"></span>
            Top instructors from around world
          </li>
          <li className="flex items-center">
            <span className="bg-teal-300 rounded-full w-3 h-3 mr-2"></span>
            Top courses from your team
          </li>
        </ul>
        <button className="mt-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-200">
          Start learning now
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-7 md:mt-0 ml-32">
        <img
          src={group}
          alt="Learning platform showcase"
          className="w-full max-w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default LearningPlatformBanner;
