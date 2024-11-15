import React from 'react';
import background from '../assets/Rectangle180.png'
const CourseSearch = () => {
  return (
    <div className="bg-cover bg-center h-64 flex flex-col justify-center items-center p-8"  style={{ backgroundImage: `url(${background})` }}>
      <div className="bg-white rounded-full shadow-lg p-4 flex items-center w-full max-w-lg">
        <input
          type="text"
          placeholder="Search your favourite course"
          className="w-full px-4 py-2 text-gray-600 focus:outline-none rounded-l-full"
        />
        <button className="bg-teal-500 text-white rounded-full px-6 py-2">
          Search
        </button>
      </div>

      <div className="md:flex hidden space-x-4 mt-4">
        <button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md">
          Subjects <i className="fas fa-chevron-down ml-1"></i>
        </button>
        <button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md">
          Partner <i className="fas fa-chevron-down ml-1"></i>
        </button>
        <button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md">
          Program <i className="fas fa-chevron-down ml-1"></i>
        </button>
        <button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md">
          Language <i className="fas fa-chevron-down ml-1"></i>
        </button>
        <button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md">
          Availability <i className="fas fa-chevron-down ml-1"></i>
        </button>
        <button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md">
          Learning Type <i className="fas fa-chevron-down ml-1"></i>
        </button>
      </div>
    </div>
  );
};

export default CourseSearch;
