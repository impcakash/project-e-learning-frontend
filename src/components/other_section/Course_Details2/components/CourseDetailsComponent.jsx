import React from 'react';
import person from '../assets/personimg-01.png';

const CourseDetailsComponent = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-8 space-y-12 min-h-[750px]"> {/* Increased width and height */}
      {/* Main Container */}
      <div className="md:flex md:space-x-12 flex-col-reverse md:flex-row">
        {/* Review Section */}
        <div className="bg-blue-50 p-10 rounded-lg shadow-lg md:w-[100%] min-h-[700px]"> {/* Adjusted section width and height */}
          <div className="flex flex-col space-y-8">
            <div className="flex justify-between items-center">
              {/* Left side: Rating */}
              <div className="text-left">
                <div className="text-4xl font-semibold">4 out of 5</div>
                <div className="flex justify-start space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">★</span>
                  ))}
                </div>
                <div className="text-gray-600">Top Rating</div>
              </div>

              {/* Right side: Star rating bars */}
              <div className="space-y-3 w-full md:w-2/3">
                {['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'].map((label, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="w-1/4 text-lg">{label}</span>
                    <div className="w-3/4 h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: `${80 - index * 10}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Reviews */}
          <div className="mt-12 space-y-10"> {/* Further increased space between reviews */}
            {[1, 2].map((_, i) => (
              <div key={i} className="flex space-x-8 flex-col md:flex-row"> {/* Increased space between reviews */}
                <div className="flex-shrink-0">
                  <img
                    src={person} /* Increased image size */
                    alt="User"
                    className="w-16 h-16 rounded-full text-2xl" /* Adjusted size */
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4"> {/* Increased space between name and stars */}
                      <span className="text-2xl font-semibold">Lina</span> {/* Increased font size for name */}
                    </div>
                    <div className="text-lg text-gray-500 flex items-center space-x-1">
                      {/* Replace with FontAwesome icon or ensure Material icons are available */}
                      <span className="text-lg text-gray-500">⏰</span> {/* You can use any icon here */}
                      <span>3 Months</span>
                    </div>
                  </div>
                  {/* Stars should be below Lina */}
                  <div className="flex space-x-1 mt-2">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-500 text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mt-4 text-xl md:text-2xl">
                    Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsComponent;
