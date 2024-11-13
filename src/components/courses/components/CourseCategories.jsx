import React from 'react';

const CourseCategories = () => {
  const categories = [
    // First Row Categories
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />
        </svg>
      ),
      title: 'Design',
      color: 'bg-teal-50 text-teal-500',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Development',
      color: 'bg-blue-50 text-blue-500',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'Development',
      color: 'bg-sky-50 text-sky-500',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: 'Business',
      color: 'bg-teal-50 text-teal-500',
    },
    // Second Row Categories
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 14c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 8.2V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.8c0-1.71 1.39-3.1 3.1-3.1h4.8c1.71 0 3.1 1.39 3.1 3.1z" />
          <path d="M3 20v-2h18v2z" />
        </svg>
      ),
      title: 'Marketing',
      color: 'bg-orange-50 text-orange-500',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
          <path d="M7 2v20" />
          <path d="M17 2v20" />
          <path d="M2 12h20" />
          <path d="M2 7h5" />
          <path d="M2 17h5" />
          <path d="M17 17h5" />
          <path d="M17 7h5" />
        </svg>
      ),
      title: 'Photography',
      color: 'bg-pink-50 text-pink-500',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="8" cy="8" r="7" />
          <circle cx="16" cy="16" r="7" />
        </svg>
      ),
      title: 'Acting',
      color: 'bg-gray-200 text-gray-600',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: 'Business',
      color: 'bg-teal-50 text-teal-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Choice favourite course from top Category
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.slice(0, 4).map((category, index) => (
          <div
            key={`top-${index}`}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
              {category.icon}
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {category.title}
            </h2>
            
            <p className="text-gray-500 text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {categories.slice(4).map((category, index) => (
          <div
            key={`bottom-${index}`}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
              {category.icon}
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {category.title}
            </h2>
            
            <p className="text-gray-500 text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;