import React from 'react';

const CoachingBanner = () => {
  return (
    <div className="bg-slate-800 text-white rounded-xl p-14 shadow-lg max-w-6xl mx-auto my-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Online coaching lessons for remote learning.
      </h2>
      <p className="text-gray-300 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
      <button className="bg-teal-400 text-white font-semibold py-2 px-6 rounded-md hover:bg-teal-600 transition">
        Start learning now
      </button>
    </div>
  );
};

export default CoachingBanner;
