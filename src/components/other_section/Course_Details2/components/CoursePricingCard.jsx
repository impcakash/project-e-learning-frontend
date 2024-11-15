import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import icons

const CoursePricingCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-6 md:max-w-4xl">

      {/* Pricing and Discount Section */}
      <div className="text-center space-y-2 md:w-[100%]">
        <div className="text-4xl font-semibold flex items-center justify-center space-x-4">
          <span>$49.65</span>
          <span className="line-through text-gray-500 text-4xl">$99.99</span>
          <span className="text-green-600 text-4xl">50% Off</span>
        </div>
        <div className="text-teal-600 text-xl">11 hours left at this price</div>
        <br />
        <button className="bg-teal-500 text-white font-semibold py-3 px-5 rounded-lg w-full md:w-auto">
          Buy Now
        </button>
        <br />
      </div>

      {/* Course Includes Section */}
      <div className="pt-4 border-t border-gray-300">
        <h3 className="font-semibold text-3xl">This Course Includes</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex space-x-2">
            <span className="text-teal-500 text-2xl">💵</span>
            <span>Money-back guarantee</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-teal-500 text-2xl">📱</span>
            <span>Access on mobile</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-teal-500 text-2xl">🎓</span>
            <span>Certification of completion</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-teal-500 text-2xl">⏱️</span>
            <span>12 hours video</span>
          </li>
        </ul>
      </div>

      {/* Training Information Section */}
      <div className="pt-4 border-t border-gray-300">
        <h3 className="font-semibold text-3xl">Training 5 or more people</h3>
        <p className="text-gray-700 mt-2 text-base md:text-lg">
          Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
        </p>
      </div>

      {/* Share this Course Section */}
      <div className="pt-4 border-t border-gray-300">
        <h3 className="font-semibold text-3xl">Share this course</h3>
        <div className="flex justify-center space-x-4 mt-4 text-2xl">
          {[ 
            { icon: faTwitter, link: "#" }, 
            { icon: faFacebook, link: "#" }, 
            { icon: faYoutube, link: "#" }, 
            { icon: faInstagram, link: "#" }, 
            { icon: faTelegram, link: "#" }, 
            { icon: faWhatsapp, link: "#" }
          ].map((social, index) => (
            <a href={social.link} key={index} className="text-gray-500 hover:text-teal-500 transition-all duration-300">
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePricingCard;
