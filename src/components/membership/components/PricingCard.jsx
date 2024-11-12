import React from 'react';

const PricingCard = ({ title, price, duration, features, buttonText, buttonColor, isBest, iconColor }) => {
  return (
    <div className="bg-white border-gray-300 border-r border-b drop-shadow-lg rounded-lg p-8 w-full max-w-xs mx-auto transform transition-transform duration-300 ease-in hover:scale-105 hover:shadow-2xl flex flex-col items-start md:items-center min-h-[500px] relative">
      <div className="flex justify-between w-full items-center mb-4">
        <h3 className="text-teal-600 text-lg font-semibold">{title}</h3>
        {isBest && (
          <span className="bg-gray-50 border-black border text-gray-700 rounded-full px-4 py-1 text-sm font-semibold">
            BEST!
          </span>
        )}
      </div>
      <div className="flex items-baseline mb-4">
        <div className="text-4xl font-bold">{price}</div>
        <div className="text-gray-700 font-bold text-sm ml-1">/ {duration}</div>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            <i className={`fas fa-check-circle mr-2 ${iconColor}`}></i>
            {feature}
          </li>
        ))}
      </ul>
          <button className={`border-gray-500 border w-full rounded-lg font-bold py-3 transition mt-auto ${buttonColor}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
