import React, { useState } from 'react';

const testimonials = [
  {
    name: "Bulkin Simons",
    image: "/image 12.png", 
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod."
  },
  {
    name: "Bulkin Simons",
    image: "/image 12.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod."
  },
  {
    name: "Bulkin Simons",
    image: "/image 12.png", 
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod."
  },
  {
    name: "Bulkin Simons",
    image: "/image 12.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod."
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-blue-50 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What our students have to say
      </h2>
      <div className="relative max-w-5xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          className="absolute left-0 p-2 bg-blue-300 rounded-full text-white focus:outline-none"
          onClick={prevSlide}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-8">
          {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 px-2 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto bg-gray-300 rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 p-2 bg-blue-300 rounded-full text-white focus:outline-none"
          onClick={nextSlide}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
