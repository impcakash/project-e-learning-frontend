// App.js
import React from 'react';
import CourseCard from '../assests/course-card.png';

const RoleCard = ({ title, description, buttonText }) => {
    return (
        <div className="bg-white drop-shadow-lg rounded-lg p-6 w-full sm:max-w-md">
            <img
                src={CourseCard}
                alt="Role Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">
                {description}
            </p>
            <div className="flex justify-end">
                <button className="bg-[#22C1C3] hover:bg-[#1ba4a5] text-white font-semibold py-2 px-4 rounded-lg">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

const App = () => {
    // Define roles data
    const roles = [
        {
            title: "Become a Teacher",
            description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
            buttonText: "Apply as a Teacher",
        },
        {
            title: "Become a Coursector",
            description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
            buttonText: "Apply as a Coursector",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center gap-5 p-8">
            {roles.map((role, index) => (
                <RoleCard
                    key={index}
                    title={role.title}
                    description={role.description}
                    buttonText={role.buttonText}
                />
            ))}
        </div>
    );
};

export default App;
