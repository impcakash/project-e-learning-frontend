import React from 'react';

const AdobePrototype = () => {
    return (
        <div className="py-6 max-w-auto bg-white">
            {/* Header Section */}
            <div className="bg-teal-500 p-6 py-2 text-white">
                <h1 className="text-3xl mt-6">Learn about Adobe XD & Prototyping</h1>
                <p className="text-md mt-3">Introduction about XD</p>
                <div className="flex justify-end items-center">
                    <span className="text-md"><i class="fa-regular fa-clock mr-3"></i>1 hour</span>
                </div>
            </div>

            {/* Description Section */}
            <div className="bg-blue-50 p-6">
                <h3 className="text-2xl">Share and refer</h3>
                <p className="text-gray-600 text-xs mt-5 mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem earum voluptatibus aliquam non ad quasi molestias fugiat voluptatum beatae praesentium quibusdam tempore, adipisci vel commodi. Nostrum iure laboriosam officiis provident sunt? Temporibus enim, fugiat ipsum, eos itaque non nobis libero sequi inventore quis quae nesciunt expedita delectus iste, saepe nihil adipisci sapiente atque dignissimos amet!
                </p>


                {/* Calendar and Schedule Section */}
                <div className="bg-white py-10 px-3 rounded-xl flex flex-col md:flex-row items-start mt-4">
                    {/* Calendar */}
                    <div className="w-full md:w-1/2 p-4 border-black md:border-r">
                        <div className="flex items-center justify-between mb-2">
                            <button className="text-2xl">&lt;</button>
                            <h4 className="font-semibold">September</h4>
                            <button className="text-2xl">&gt;</button>
                        </div>
                        <div className="grid grid-cols-7 text-center gap-y-4">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                                <div key={idx} className="text-gray-500 font-semibold">{day}</div>
                            ))}
                            {[...Array(30).keys()].map((day) => (
                                <div key={day + 1} className="p-2">
                                    {day + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Schedule */}
                    <div className="w-full md:w-1/2 p-4">
                        <h4 className="font-semibold text-center mb-4">Sep 12, Monday</h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-2 bg-red-50 rounded-lg shadow-md">
                                <span>2 PM</span>
                                <span className="bg-red-200 text-red-500 px-3 py-1 rounded-full">Adobe XD Live Class</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
                                <span>3 PM</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
                                <span>4 PM</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
                                <span>5 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdobePrototype;
