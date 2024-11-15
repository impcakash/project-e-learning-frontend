import React, { useState, useEffect } from 'react';
import CourseCard from '../../Search/components/CourseCard';
import course1 from '../assests/course-card.png';
import course2 from '../assests/courseimg-01.png';
import instructorImage from '../assests/image12.png';

const StudentAlsoBought = () => {
  const courses = [
    {
      image: course2,
      category: 'Design',
      duration: '3 Months',
      title: 'AWS Certified Solutions Architect',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsum.',
      instructorImage: instructorImage,
      instructorName: 'Lina',
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      image: course1,
      category: 'Design',
      duration: '3 Months',
      title: 'AWS Certified Solutions Architect',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsum.',
      instructorImage: instructorImage,
      instructorName: 'Lina',
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      image: course2,
      category: 'Design',
      duration: '3 Months',
      title: 'AWS Certified Solutions Architect',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsum.',
      instructorImage: instructorImage,
      instructorName: 'Lina',
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      image: course1,
      category: 'Design',
      duration: '3 Months',
      title: 'AWS Certified Solutions Architect',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsum.',
      instructorImage: instructorImage,
      instructorName: 'Lina',
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      image: course2,
      category: 'Design',
      duration: '3 Months',
      title: 'AWS Certified Solutions Architect',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsum.',
      instructorImage: instructorImage,
      instructorName: 'Lina',
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      image: course1,
      category: 'Design',
      duration: '3 Months',
      title: 'AWS Certified Solutions Architect',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsum.',
      instructorImage: instructorImage,
      instructorName: 'Lina',
      originalPrice: 100,
      discountedPrice: 80,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Update screen size state on window resize
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerView = isSmallScreen ? 1 : 3; // Show 1 item on small screens, 3 on larger screens

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - itemsPerView : prevIndex - itemsPerView
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= courses.length - itemsPerView ? 0 : prevIndex + itemsPerView
    );
  };

  return (
    <div className="bg-blue-50 p-8 max-w-full relative">
      <div className="flex justify-between items-center mb-14">
        <h2 className="text-2xl font-semibold">Student also bought</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="bg-teal-500 p-3 px-4 rounded-lg text-white"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="bg-teal-500 p-3 px-4 rounded-lg text-white"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Course cards */}
      <div className="flex gap-5 overflow-hidden">
        {courses.slice(currentIndex, currentIndex + itemsPerView).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default StudentAlsoBought;
