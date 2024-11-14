import React, { useState, useEffect } from 'react';
import course1 from '../assests/course-card.png';
import course2 from '../assests/courseimg-01.png';
import Image from '../assests/image12.png';

const CourseCard = ({ image, title, duration, author, originalPrice, discountedPrice }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg h-auto w-80 p-3 transform ease-in hover:scale-105 hover:translate-y-[-10px] transition-transform duration-300 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <div className="p-4">
        <div className="flex justify-between text-gray-500 text-sm mb-2">
          <span className="font-medium"><i className="fa-regular fa-border-all mr-1"></i>Design</span>
          <span><i className="fa-regular fa-clock mr-1"></i>{duration}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={Image}
              alt={author}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-medium text-gray-700">{author}</span>
          </div>
          <div className="text-right">
            <span className="text-gray-400 line-through mr-2">${originalPrice}</span>
            <span className="font-bold text-gray-800">${discountedPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentAlsoBought = () => {
  const courses = [
    // Course data here
    {
      image: course2,
      title: "AWS Certified Solutions Architect",
      duration: "3 Month",
      author: "Lina",
      originalPrice: "100",
      discountedPrice: "80",
    },
    {
      image: course1,
      title: "AWS Certified Solutions Architect",
      duration: "3 Month",
      author: "Lina",
      originalPrice: "100",
      discountedPrice: "80",
    },
    {
      image: course2,
      title: "AWS Certified Solutions Architect",
      duration: "3 Month",
      author: "Lina",
      originalPrice: "100",
      discountedPrice: "80",
    },
    {
      image: course1,
      title: "AWS Certified Solutions Architect",
      duration: "3 Month",
      author: "Lina",
      originalPrice: "100",
      discountedPrice: "80",
    },
    {
      image: course2,
      title: "AWS Certified Solutions Architect",
      duration: "3 Month",
      author: "Lina",
      originalPrice: "100",
      discountedPrice: "80",
    },
    {
      image: course1,
      title: "AWS Certified Solutions Architect",
      duration: "3 Month",
      author: "Lina",
      originalPrice: "100",
      discountedPrice: "80",
    },
    {
      image: course2,
      title: "AWS Certified Solutions Architect",
      duration: "3 Month",
      author: "Lina",
      originalPrice: "100",
      discountedPrice: "80",
    },
    {
      image: course1,
      title: "AWS Certified Solutions Architect",
      duration: "3 Month",
      author: "Lina",
      originalPrice: "100",
      discountedPrice: "80",
    },
    {
      image: course2,
      title: "AWS Certified Solutions Architect",
      duration: "3 Month",
      author: "Lina",
      originalPrice: "100",
      discountedPrice: "80",
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
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            duration={course.duration}
            author={course.author}
            originalPrice={course.originalPrice}
            discountedPrice={course.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentAlsoBought;
