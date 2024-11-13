import React from 'react';

const RoleCard = ({ title, description, buttonText }) => {
    return (
        <div className="bg-white drop-shadow-lg rounded-lg p-6 max-w-md ">
            <img
                src="/course-card.png"
                alt="Role Image"
                className="w-full h- object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">
                {description}
            </p>
            <div className='flex justify-end'>
                <button className="bg-[#22C1C3] hover:bg-[#1ba4a5] text-white font-semibold py-3 px-4 rounded-lg">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="flex space-x-8 justify-center p-8">
            <RoleCard
                title="Become a Teacher"
                description="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
                buttonText="Apply as a Teacher"
            />
            <RoleCard
                title="Become a Coursector"
                description="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
                buttonText="Apply as a Coursector"
            />
        </div>
    );
};

export default App;
