import { useRef } from "react";
import "../styles/App1.css";
import CourseCard from "./CourseCard";
import NavigationButtons from "./NavigationButtons";
import course1 from "../assests/course1.png";
import course2 from "../assests/course2.png";
import course3 from "../assests/course3.png";
import avatar from "../assests/avatar.png";
import CourseCategories from "./CourseCategories";
import CourseRecommendations from "./CourseRecommendations";
import OnlineCoaching from "./OnlineCoaching";
import CourseDevelopment from "./CourseDevelopment";
import StudentsView from "./StudentsView";

function Courses_nav() {
  const courses = [
    {
      image: course1,
      title: "AWS Certified Solutions Architect",
      instructor: "Lina",
      lesson: "5 of 7",
    },
    {
      image: course2,
      title: "Web Developer Certified",
      instructor: "Lina",
      lesson: "5 of 7",
    },
    {
      image: course3,
      title: "Data Science Certified",
      instructor: "Lina",
      lesson: "5 of 7",
    },
    {
      image: course1,
      title: "Node.js Certified",
      instructor: "Lina",
      lesson: "5 of 7",
    },
    {
      image: course2,
      title: "React.js Certified",
      instructor: "Lina",
      lesson: "5 of 7",
    },
    {
      image: course3,
      title: "MongoDB Certified",
      instructor: "Lina",
      lesson: "5 of 7",
    },
    {
      image: course1,
      title: "Data Analyst Certified",
      instructor: "Lina",
      lesson: "5 of 7",
    },
    {
      image: course2,
      title: "System Design Certified",
      instructor: "Lina",
      lesson: "5 of 7",
    },
    {
      image: course3,
      title: "AWS Devops Certified",
      instructor: "Lina",
      lesson: "5 of 7",
    },
  ];

  // Create a ref for the scrollable container
  const scrollContainerRef = useRef(null);

  return (
    <div className="app">
      <h1 className="app1 text-3xl text-left font-semibold">
        Welcome back, ready for your next lesson?
      </h1>
      <div className="flex justify-end">
        <button className="text-[#3c9] hover:text-[#2b8] transition-colors">
          View history
        </button>
      </div>
      <div className="scrollable-wrapper" ref={scrollContainerRef}>
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
      <NavigationButtons scrollContainerRef={scrollContainerRef} />
      <CourseCategories />
      <CourseRecommendations />
      <OnlineCoaching />
      <CourseDevelopment />
      <StudentsView />
    </div>
  );
}

export default Courses_nav;
