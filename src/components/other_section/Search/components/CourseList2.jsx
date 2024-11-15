import React from 'react';
import CourseCard from './CourseCard';
import image1 from '../assets/course-card.png';
import image2 from '../assets/Rectangle32.png';
import image3 from '../assets/Rectangle32(1).png';
import image4 from '../assets/Rectangle32(2).png';
import cardside from '../assets/image12.png';

const CourseList2 = () => {
    const courses = [
        {
            image: image1,
            category: 'Design',
            duration: '3 Months',
            title: 'AWS Certified Solutions Architect',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsum.',
            instructorImage: cardside,
            instructorName: 'Lina',
            originalPrice: 100,
            discountedPrice: 80,
        },
        {
            image: image2,
            category: 'Design',
            duration: '3 Months',
            title: 'AWS Certified Solutions Architect',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsum.',
            instructorImage: cardside,
            instructorName: 'Lina',
            originalPrice: 100,
            discountedPrice: 80,
        },
        {
            image: image3,
            category: 'Design',
            duration: '3 Months',
            title: 'AWS Certified Solutions Architect',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsum.',
            instructorImage: cardside,
            instructorName: 'Lina',
            originalPrice: 100,
            discountedPrice: 80,
        },
        {
            image: image4,
            category: 'Design',
            duration: '3 Months',
            title: 'AWS Certified Solutions Architect',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsum.',
            instructorImage: cardside,
            instructorName: 'Lina',
            originalPrice: 100,
            discountedPrice: 80,
        },
    ];
    return (
        <div className='bg-blue-50 p-6'>
            <div className='flex justify-between md:px-14'>
                <h1 className='text-2xl font-semibold'>Recommended for you</h1>
            <div>
                <p className='text-lg text-teal-500 font-semibold'>See all</p>
            </div>
            </div>
      <div className="grid grid-col-1  md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 my-8 md:mx-20 md:my-12">
            {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
            ))}
            </div>
            </div>
  )
}

export default CourseList2
