import React from 'react';

import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";


function BlogList() {
  return (
    <div className="bg-white rounded-lg max-w-screen-xl mx-auto p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Reading Blog List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Blog Item 1 */}
        <div className="relative text-center">
          <div className="w-full h-56 overflow-hidden rounded-lg">
            <img
              src={img1}
              alt="UX/UI"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-60 text-gray-800 px-8 py-3 rounded-md font-semibold text-lg">
            UX/UI
          </button>
        </div>

        {/* Blog Item 2 */}
        <div className="relative text-center">
          <div className="w-full h-56 overflow-hidden rounded-lg">
            <img
              src={img2}
              alt="React"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-60 text-gray-800 px-8 py-3 rounded-md font-semibold text-lg">
            React
          </button>
        </div>

        {/* Blog Item 3 */}
        <div className="relative text-center">
          <div className="w-full h-56 overflow-hidden rounded-lg">
            <img
              src={img3}
              alt="PHP"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-60 text-gray-800 px-8 py-3 rounded-md font-semibold text-lg">
            PHP
          </button>
        </div>

        {/* Blog Item 4 */}
        <div className="relative text-center">
          <div className="w-full h-56 overflow-hidden rounded-lg">
            <img
              src={img4}
              alt="JavaScript"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-60 text-gray-800 px-8 py-3 rounded-md font-semibold text-lg">
            JavaScript
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
