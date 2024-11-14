const lessons = [
  {
    section: "Change Simplification",
    items: [
      {
        color: "bg-teal-500",
        textColor: "text-white",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-orange-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-red-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
    ],
  },
  {
    section: "Practice Quiz",
    items: [
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-orange-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-red-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-orange-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-red-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-orange-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-red-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
    ],
  },
  {
    section: "Practice Quiz",
    items: [
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-orange-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-red-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-orange-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-red-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-orange-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-blue-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
      {
        color: "bg-red-200",
        textColor: "text-black",
        title: "Lesson 01 : Introduction about XD",
        time: "30 mins",
      },
    ],
  },
];

const LessonCard = ({ color, textColor, title, time }) => {
  return (
    <>
      <div
        className={`${color} ${textColor} flex text-xs items-center px-2 py-4 rounded-md my-2 shadow-md`}
      >
        <i className="fas fa-book-open mr-4"></i>
        <div className="flex justify-between w-full">
          <span>{title}</span>
          <span>{time}</span>
        </div>
      </div>
    </>
  );
};

const Sidebar = () => (
  <div className="py-6 px-6 max-w-auto bg-white">
    <button className="p-2 px-4 bg-teal-500 text-white rounded-lg mb-4 hover:border-black hover:border">
      <i className="fas fa-arrow-left"></i>
    </button>
    {lessons.map((section, index) => (
      <div key={index}>
        <h3 className="text-xl mb-2 mt-4">{section.section}</h3>
        {section.items.map((lesson, lessonIndex) => (
          <LessonCard
            key={lessonIndex}
            color={lesson.color}
            textColor={lesson.textColor}
            title={lesson.title}
            time={lesson.time}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Sidebar;
