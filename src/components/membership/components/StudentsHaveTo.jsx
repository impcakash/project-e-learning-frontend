import React, { useState, useEffect } from 'react';
import Image from '../assests/image12.png';

const testimonials = [
  {
    name: "Bulkin Simons",
    image: Image,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod."
  },
  {
    name: "John Doe",
    image: Image,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    name: "Alice Smith",
    image: Image,
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Jane Roe",
    image: Image,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

const StudentsHaveTo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - (isSmallScreen ? 1 : 4) : prevIndex - (isSmallScreen ? 1 : 4)
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - (isSmallScreen ? 1 : 4) ? 0 : prevIndex + (isSmallScreen ? 1 : 4)
    );
  };

  return (
    <div className="bg-blue-50 py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What our students have to say
      </h2>
      <div className="relative max-w-6xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          className="absolute left-0 p-3 bg-blue-300 rounded-full text-white focus:outline-none  sm:flex"
          onClick={prevSlide}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className={`grid gap-4 px-8 py-3 ${isSmallScreen ? 'grid-cols-1' : 'grid-cols-4'}`}>
          {testimonials.slice(currentIndex, currentIndex + (isSmallScreen ? 1 : 4)).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto bg-gray-300 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-md text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 p-3 bg-blue-300 rounded-full text-white focus:outline-none sm:flex"
          onClick={nextSlide}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default StudentsHaveTo;
