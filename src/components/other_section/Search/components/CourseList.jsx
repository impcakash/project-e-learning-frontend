import React from 'react';
import CourseCard from './CourseCard';
import image1 from '../assets/course-card.png';
import image2 from '../assets/Rectangle32.png';
import image3 from '../assets/Rectangle32(1).png';
import image4 from '../assets/Rectangle32(2).png';
import image5 from '../assets/Rectangle32(3).png';
import image6 from '../assets/Rectangle32(4).png';
import image7 from '../assets/Rectangle32(5).png';
import image8 from '../assets/Rectangle32(6).png';
import cardside from '../assets/image12.png';

const CourseList = () => {
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
        {
            image: image5,
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
            image: image6,
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
            image: image7,
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
            image: image8,
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
        <div className="grid grid-col-1  md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 my-8 md:mx-20 md:my-12">
            {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
            ))}
        </div>
    );
};

export default CourseList;
