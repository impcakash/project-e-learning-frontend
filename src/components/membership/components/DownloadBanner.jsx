import React from 'react';

const DownloadBanner = () => {
  return (
    <div className="bg-[#252547] text-white p-8 rounded-lg flex flex-col md:flex-row items-center mt-12 mb-6 justify-between max-w-6xl mx-auto shadow-lg">
      <span className="text-lg font-medium mb-5 md:mb-0">APP is available for free</span>
      <div className="flex space-x-4">
        <button className="bg-[#33abe2]  text-white font-semibold py-2 px-3 md:px-4 rounded flex items-center">
          <i className="fab fa-android mr-2"></i>
          Android APP
        </button>
        <button className="bg-[#2fbabc] text-white font-semibold py-2 px-3 md:px-4 rounded flex items-center">
          <i className="fab fa-apple mr-2"></i>
          iOS APP
        </button>
      </div>
    </div>
  );
};

export default DownloadBanner;
