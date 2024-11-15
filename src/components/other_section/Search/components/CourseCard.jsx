import React from 'react'

const CourseCard = ({ course }) => {
    return (
        <div className="max-w-xs bg-white rounded-lg shadow-md border overflow-hidden">
             <div className="p-5 rounded-lg overflow-hidden transition hover:scale-110 ease-in">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg"
                />
            </div>
            <div className="px-5 py-2">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="flex items-center space-x-1">
                        <i className="fas fa-palette"></i>
                        <span>{course.category}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <i className="far fa-clock"></i>
                        <span>{course.duration}</span>
                    </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src={course.instructorImage}
                            alt={course.instructorName}
                            className="w-8 h-8 rounded-full object-cover mr-2"
                        />
                        <span className="text-sm font-medium text-gray-800">
                            {course.instructorName}
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-gray-400 line-through mr-1">
                            ${course.originalPrice}
                        </span>
                        <span className="text-teal-500 font-semibold">
                            ${course.discountedPrice}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
