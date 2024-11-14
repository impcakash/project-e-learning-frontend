import React from 'react'
import Sidebar from '../Course_Calender/components/sidebar';
import VideoPlayerMock from './components/VideoPlayerMock';
import CourseInfo from './components/CourseInfo';
import TestimonialCard from './components/TestimonialCard';
import StudentAlsoBought from './components/StudentAlsoBought';

const CourseDtl = () => {
  return (
    <div className=" scroll-smooth">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar component on the left */}
        <div className="md:w-1/3">
          <Sidebar />
        </div>

        {/* Other components on the right */}
        <div className="md:w-2/3">
          <VideoPlayerMock />
          <CourseInfo />
          <TestimonialCard />
          <StudentAlsoBought />
        </div>
      </div>
    </div>
  )
}

export default CourseDtl
