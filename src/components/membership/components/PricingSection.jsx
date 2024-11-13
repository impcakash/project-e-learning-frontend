// PricingSection.js
import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
    return (
        <div className="flex flex-col items-center space-y-8 p-6 ">
            <h2 className="text-5xl font-semibold text-teal-500">Affordable Pricing</h2>
            <div className="flex flex-wrap justify-center gap-5 lg:flex-nowrap md:flex-nowrap sm:flex-nowrap">
                <PricingCard
                    title="Like a pussy"
                    price="Free"
                    duration="Forever"
                    features={[
                        "Components-driven system",
                        "Sales-boosting landing pages",
                        "Awesome Feather icons pack",
                    ]}
                    buttonColor="bg-gray-100 text-teal-500 hover:bg-teal-400 hover:text-white"
                    buttonText="Try for free"
                    iconColor="text-gray-300"
                />
                <PricingCard
                    title="👤 Individual"
                    price="$24"
                    duration="Month"
                    features={[
                        "Components-driven system",
                        "Sales-boosting landing pages",
                        "Awesome Feather icons pack",
                        "Themed into 3 different styles",
                        "Will help to learn Figma",
                    ]}
                    buttonColor="bg-teal-400 text-white"
                    buttonText="Regular license"
                    isBest
                    iconColor="text-yellow-500"
                />
                <PricingCard
                    title="👥 Corporate"
                    price="$12"
                    duration="Editor"
                    features={[
                        "Components-driven system",
                        "Sales-boosting landing pages",
                        "Awesome Feather icons pack",
                        "Themed into 3 different styles",
                    ]}
                    buttonColor="bg-gray-100 text-teal-500 hover:bg-teal-400 hover:text-white"
                    buttonText="Extended license"
                    iconColor="text-teal-300"
                />
            </div>
        </div>
    );
};

export default PricingSection;
