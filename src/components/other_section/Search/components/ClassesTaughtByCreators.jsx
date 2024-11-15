import React from 'react';
import image1 from '../assets/image10(1).png';
import image2 from '../assets/image10(3).png';

const instructors = [
  {
    name: 'Jane Cooper',
    image: image1, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatem',
  },
  {
    name: 'Adam',
    image: image2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatem',
  },
  {
    name: 'Tomara',
    image: image1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatem',
    },
    {
        name: 'Adam',
        image: image2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatem',
    },
    {
        name: 'Adam',
        image: image2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatem',
    },
    {
        name: 'Adam',
        image: image2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatem',
    },
];

const InstructorCard = ({ name, image, description }) => (
    <div className="relative bg-white drop-shadow-xl border p-5 mt-16 text-center">
      <div className="relative -top-20 mx-auto w-44 h-44 overflow-hidden">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="mt-[-72px]">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );

const ClassesTaughtByCreators = () => (
  <div className="max-w-5xl mx-auto py-10 px-5">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold">Classes taught by real creators</h2>
      <a href="#" className="text-md text-teal-500 font-semibold">See all</a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
      {instructors.map((instructor, index) => (
        <InstructorCard
          key={index}
          name={instructor.name}
          image={instructor.image}
          description={instructor.description}
        />
      ))}
    </div>
  </div>
);

export default ClassesTaughtByCreators;
