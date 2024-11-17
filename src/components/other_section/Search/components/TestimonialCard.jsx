import React from 'react';
import studentImage from '../assets/Ellipse119.png';
import profileImage1 from '../assets/Ellipse126.png';
import profileImage2 from '../assets/Ellipse124.png';
import profileImage3 from '../assets/Ellipse125.png';
import profileImage4 from '../assets/Ellipse123.png';

const TestimonialCard = () => {
    return (
        <div className="bg-blue-50 py-10">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-10">
                    What our students have to say
                </h2>
                <div className="bg-white rounded-xl flex flex-wrap md:flex-nowrap items-center p-8">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={studentImage}
                            alt="Student"
                            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-md"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-2/3 md:pl-10 text-center md:text-left mt-12 md:mt-0">
                        <h3 className="text-xl md:text-2xl font-bold">Savannah Nguyen</h3>
                        <p className="text-lg md:text-base">
                            tanya.hill@example.com
                        </p>
                        <p className="text-sm text-gray-600 mt-4 leading-relaxed ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                            corrupti.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                            corrupti.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                            corrupti.
                        </p>
                        <div className="flex justify-center  md:justify-start mt-6 space-x-4">
                            <a
                                href="#"
                                className="text-teal-500 hover:text-teal-600 text-2xl"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="text-teal-500 hover:text-teal-600 text-2xl"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="#"
                                className="text-teal-500 hover:text-teal-600 text-2xl"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    {/* Small Circular Profile Images */}
                    <div className="flex md:flex-col w-1/3 justify-end items-center mx-auto mt-6 gap-4">
                        <img
                            src={profileImage4}
                            alt="Profile 4"
                            className="w-12 h-12"
                        />
                        <img
                            src={profileImage2}
                            alt="Profile 2"
                            className="w-12 h-12"
                        />
                        <img
                            src={profileImage3}
                            alt="Profile 3"
                            className="w-12 h-12"
                        />
                        <img
                            src={profileImage1}
                            alt="Profile 1"
                            className="w-12 h-12"
                        />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;
