import React from 'react';
import CardImg from '../assests/082c2e2832481561feec93a5e5c5e8d6.png'

const TestimonialCard = () => {
  return (
    <div className="bg-blue-50 p-2 md:p-10 flex justify-center">
      <div className="bg-orange-200 rounded-lg p-6 py-12 w-full max-w-full flex items-start">
        {/* Avatar */}
        <img
          src={CardImg} // Replace with actual image URL
          alt="User avatar"
          className="w-16 h-12 rounded-full mr-4"
        />

        {/* Content */}
        <div>
          {/* Name and Rating */}
          <div className="flex flex-col items-start mb-2">
            <h2 className="text-lg font-semibold mr-2">Bulkin Simons</h2>
            <div className="flex text-yellow-500">
              {/* Star Rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-xs mt-7 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe natus earum error architecto. Aliquam ut perferendis, expedita aut laudantium et necessitatibus ab natus! Quod, dolorem minima esse repellat dolorum dolor nihil hic voluptates ullam deleniti suscipit officiis maxime quaerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
