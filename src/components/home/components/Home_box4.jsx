import "../styles/Home_box4.css";

export const Home_box4 = () => {
  return (
    <>
      <div className="m-auto p-4 lg:w-4/5 md:w-11/12 sm:w-full">
        <div className="mt-20 pt-4 hb4_heading_1 text-center">
          What is <span className="hb4_heading_2">TOTC?</span>
        </div>
        <p className="hb4_content text-center mx-auto mt-4 lg:w-1/2 sm:w-8/12 md:w-10/12">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </div>
      <div className="m-auto mt-12 mb-8 p-4 lg:w-9/12 sm:w-11/12">
        <div className="grid gap-16 lg:grid-cols-2 sm:grid-cols-1">
          <div className="hb4_bg1 items-center text-center">
            <div className="mt-24 hb4_bg_heading">FOR INSTRUCTORS</div>
            <button>Start a class today</button>
          </div>
          <div className="hb4_bg2 items-center text-center">
            <div className="mt-24 hb4_bg_heading">FOR INSTRUCTORS</div>
            <button>Start a class today</button>
          </div>
        </div>
      </div>
    </>
  );
};
