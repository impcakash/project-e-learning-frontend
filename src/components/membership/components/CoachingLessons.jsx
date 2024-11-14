import React, { useState } from 'react';

const CoachingLessons = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const features = [
    {
      title: "Lorem ipsum dolor sit amet",
      details: "This is some additional information about Lorem ipsum dolor sit amet."
    },
    {
      title: "Consectetur adipiscing elit, sed do",
      details: "Details about Consectetur adipiscing elit, sed do go here."
    },
    {
      title: "Eiusmod tempor Lorem ipsum",
      details: "More details about Eiusmod tempor Lorem ipsum."
    },
    {
      title: "Lorem ipsum dolor sit amet",
      details: "Additional information on Lorem ipsum dolor sit amet."
    },
    {
      title: "Lorem ipsum dolor sit amet",
      details: "Further details on Lorem ipsum dolor sit amet."
    }
  ];

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">
        Online coaching lessons for remote learning
      </h2>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="bg-white shadow-sm rounded-lg p-4">
            <div
              className="flex items-center justify-between text-gray-800 cursor-pointer"
              onClick={() => toggleFeature(index)}
            >
              <div className="flex items-center">
                <span className="text-teal-500 mr-3">
                  <i className="fas fa-circle"></i>
                </span>
                <span className='text-left'>{feature.title}</span>
              </div>
              <span className="text-gray-600">
                <i className={`fas ${expandedFeature === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </span>
            </div>
            {expandedFeature === index && (
              <div className="mt-4 text-left text-gray-600">
                {feature.details}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoachingLessons;
