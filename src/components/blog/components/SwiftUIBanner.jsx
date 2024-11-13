import React from 'react';
import grp from "../assests/group.png";

function SwiftUIBanner() {
  return (
    <div className="bg-[#e0f0ff] w-full px-5 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 py-10 space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Text Section */}
        <div className="text-content md:w-1/2">
          <p className="text-top text-xl md:text-2xl text-black mb-4">
            By <span className="font-semibold">Thermadbrains</span> in <span className="text-[#49bbbd]">inspiration</span>
          </p>
          <h1 className="text-2xl md:text-4xl font-semibold text-[#2F327D] mb-4">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h1>
          <p className="text-base md:text-lg text-[#696984] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#49BBBD] text-white py-3 md:py-4 px-6 md:px-8 rounded-lg font-bold text-base md:text-lg">
            Start learning now
          </button>
        </div>

        {/* Image Section */}
        <div className="image-content md:w-1/2 flex justify-center items-center">
          <img
            src={grp}
            alt="Swift UI Presentation"
            className="w-full max-w-[500px] md:max-w-[600px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default SwiftUIBanner;
