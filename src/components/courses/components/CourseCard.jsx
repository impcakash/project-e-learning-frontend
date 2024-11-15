import "../styles/CourseCard.css";

function CourseCard({ image, title, instructor, avatar, lesson }) {
  return (
    <div className="course-card">
      <img src={image} alt="Course" className="course-image" />
      <h2>{title}</h2>
      <div className="instructor-info">
        <img src={avatar} alt="Instructor" className="avatar" />
        <p>{instructor}</p>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: "70%" }}></div>
      </div>
      <p className="lesson-info">Lesson {lesson}</p>
    </div>
  );
}

export default CourseCard;
