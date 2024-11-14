import React, { useState } from 'react';
import calendar from '../assests/calender-full-view-img.jpeg';

const VideoPlayerMock = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='bg-blue-50 p-3 md:p-10 '>
      <div className="relative max-w-full bg-gray-200 rounded-lg overflow-hidden">
      {/* Image as Video Placeholder */}
      <img src={calendar} alt="Classroom" className="w-full h-auto" />

      {/* Overlay for controls */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between">
        {/* Top Bar (optional, can be omitted if not needed) */}
        <div className="p-4 text-white text-sm font-semibold">Classroom Session</div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute inset-0 flex items-center justify-center text-white text-3xl"
        >
          {isPlaying ? (
            <i className="fas fa-pause-circle"></i>
          ) : (
            <i className="fas fa-play-circle"></i>
          )}
        </button>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between px-4 py-2 bg-black bg-opacity-60 text-white">
          {/* Time Stamp */}
          <span className="text-xs">00:05 / 03:28</span>

          {/* Progress Bar */}
          <div className="flex-grow mx-4 bg-gray-400 h-1 rounded-full">
            <div className="bg-teal-500 h-full w-1/5 rounded-full"></div>
          </div>

          {/* Full-Screen Button */}
          <button className="text-xl">
            <i className="fas fa-expand"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VideoPlayerMock;

