import React from 'react';
import calendar from '../assests/calender-full-view-img.jpeg';

const ClassroomScene = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-[50vh] bg-blue-50 relative">
      <img src={calendar} alt="Classroom" className="w-full" />
      
      {/* Overlay controls */}
      <div className="absolute bg-black opacity-5 bottom-14 w-full px-5 py-8 max-h-fit">
        
      </div> 
    </div>
  );
};

export default ClassroomScene;
