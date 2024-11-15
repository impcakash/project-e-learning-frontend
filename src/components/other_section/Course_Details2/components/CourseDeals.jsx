import React from 'react';

// Import the image directly (if using webpack or a bundler)
import dealImage from '../assets/deal.png'; // Adjust the path if needed

const CourseDeals = () => {
    return (
        <section className="course-deals py-8 px-8 md:px-16">
            <div className="deals-top flex justify-between items-center mb-4">
                <h2 className="text-4xl font-semibold">Top Education offers and deals are listed here</h2>
                <h6 className="text-blue-600 cursor-pointer text-2xl">See all</h6>
            </div>
            <div className="deals-container flex flex-wrap justify-center gap-6 mt-8">
                {/* Deal Card 1 */}
                <div className="deal-card relative bg-cover bg-center bg-no-repeat w-full md:w-1/2 lg:w-1/4 h-80 p-6 border border-gray-300 rounded-xl shadow-md"
                     style={{ 
                        background: `url(${dealImage}) no-repeat center center/cover, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`
                     }}>
                    <div className="deal-offer absolute top-5 left-5 p-7 bg-red-600 text-white font-bold text-lg w-12 h-12 rounded-lg flex items-center justify-center">
                        50%
                    </div>
                    <br />
                    <br />
                    <div className="deal-head text-white font-semibold text-3xl mb-2 mt-10">
                        FOR INSTRUCTORS
                    </div>
                    <p className="deal-details text-white text-xl">
                        TOTC’s school management software helps traditional and online schools manage scheduling,
                    </p>
                </div>

                {/* Deal Card 2 */}
                <div className="deal-card relative bg-cover bg-center bg-no-repeat w-full md:w-1/2 lg:w-1/4 h-80 p-6 border border-gray-300 rounded-xl shadow-md"
                     style={{ 
                        background: `url(${dealImage}) no-repeat center center/cover, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`
                     }}>
                    <div className="deal-offer absolute top-5 left-5 p-7 bg-red-600 text-white font-bold text-lg w-12 h-12 rounded-lg flex items-center justify-center">
                        50%
                    </div>
                    <br />
                    <br />
                    <div className="deal-head text-white font-semibold text-3xl mb-2 mt-10">
                        FOR INSTRUCTORS
                    </div>
                    <p className="deal-details text-white text-xl">
                        TOTC’s school management software helps traditional and online schools manage scheduling,
                    </p>
                </div>

                {/* Deal Card 3 */}
                <div className="deal-card relative bg-cover bg-center bg-no-repeat w-full md:w-1/2 lg:w-1/4 h-80 p-6 border border-gray-300 rounded-xl shadow-md"
                     style={{ 
                        background: `url(${dealImage}) no-repeat center center/cover, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`
                     }}>
                    <div className="deal-offer absolute top-5 left-5 p-7 bg-red-600 text-white font-bold text-lg w-12 h-12 rounded-lg flex items-center justify-center">
                        50%
                    </div>
                    <br />
                    <br />
                    <div className="deal-head text-white font-semibold text-3xl mb-2 mt-10">
                        FOR INSTRUCTORS
                    </div>
                    <p className="deal-details text-white text-xl">
                        TOTC’s school management software helps traditional and online schools manage scheduling,
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CourseDeals;
