import React from 'react';
import './Demo.css';
import CourseCard from './components/CourseCard';
import NavigationButtons from './components/NavigationButtons';
import course1 from './assets/course1.png';
import course2 from './assets/course2.png';
import course3 from './assets/course3.png';
import avatar from './assets/avatar.png';

function Demo() {
  const courses = [
    { image: course1, title: 'AWS Certified Solutions Architect', instructor: 'Lina', lesson: '5 of 7' },
    { image: course2, title: 'Web Developer Certified', instructor: 'Lina', lesson: '5 of 7' },
    { image: course3, title: 'Data Science Certified', instructor: 'Lina', lesson: '5 of 7' },
    { image: course1, title: 'Node.js Certified', instructor: 'Lina', lesson: '5 of 7' },
    { image: course2, title: 'React.js Certified', instructor: 'Lina', lesson: '5 of 7' },
    { image: course3, title: 'MongoDB Certified', instructor: 'Lina', lesson: '5 of 7' },
    { image: course1, title: 'Data Analyst Certified', instructor: 'Lina', lesson: '5 of 7' },
    { image: course2, title: 'System Design Certified', instructor: 'Lina', lesson: '5 of 7' },
    { image: course3, title: 'AWS Devops Certified', instructor: 'Lina', lesson: '5 of 7' },
  ];
  return (
    <div className="app">
      <h1 className='app1'>Welcome back, ready for your next lesson?</h1>
      <div className="flex justify-end">
      <button className="text-[#3c9] hover:text-[#2b8] transition-colors">
          View history
        </button>
        </div>
        <div class="grid-container">
      <div className="courses-container">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            instructor={course.instructor}
            avatar={avatar}
            lesson={course.lesson}
          />
        ))}
      </div>
      </div>
      <NavigationButtons />
    </div>
  );
}

export default Demo;