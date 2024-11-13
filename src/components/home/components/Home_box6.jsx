import "../styles/Home_box6.css";
import img_z1 from "../assests/z-pic_1.jpeg";
import img_z2 from "../assests/z-pic_2.jpeg";
import img_z3 from "../assests/z-pic_3.jpeg";
import img_z4 from "../assests/z-pic_4.jpeg";
import img_z5 from "../assests/z-pic_5.jpeg";

export const Home_box6 = () => {
  return (
    <>
      <div className="m-auto mb-12 p-4 lg:w-9/12 sm:w-full">
        <div className="mt-8 hb6_heading_1 text-center">
          Our <span className="hb6_heading_2">Features</span>
        </div>
        <p className="hb6_content text-center mx-auto mt-4">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>

      {/* user interface */}
      <div className="p-4 m-auto mb-8 lg:w-9/12 sm:w-full grid gap-8 lg:grid-cols-2 sm:grid-cols-1">
        <div>
          <img className="hb6_img1" src={img_z1} alt="group_image" />
        </div>
        <div className="mx-auto mt-8 w-full sm:w-10/12 ">
          <div className="hb6_heading_3">
            A <span className="hb6_heading_2">user interface</span> designed for
            the classroom
          </div>
          <div className="flex flex-row mt-8">
            <div>
              <img
                className="w-8 mt-2"
                src="https://cdn-icons-png.flaticon.com/128/33/33308.png"
                alt="people group icons"
              />
            </div>
            <div className="pl-4 hb6_content">
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </div>
          </div>
          <div className="flex flex-row mt-8">
            <div>
              <img
                className="w-8 mt-2"
                src="https://cdn-icons-png.flaticon.com/128/33/33308.png"
                alt="people group icons"
              />
            </div>
            <div className="pl-4 hb6_content">
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </div>
          </div>
          <div className="flex flex-row mt-8">
            <div>
              <img
                className="w-8 mt-2"
                src="https://cdn-icons-png.flaticon.com/128/33/33308.png"
                alt="people group icons"
              />
            </div>
            <div className="pl-4 hb6_content">
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="p-4 m-auto mb-8 lg:w-9/12 sm:w-full grid gap-12 lg:gap-36 lg:grid-cols-2 sm:grid-cols-1">
        <div className="mt-4 lg:mt-24">
          <div className="hb6_heading_4">
            <span className="hb6_heading_2">Tools</span> For Teachers And
            Learners
          </div>
          <div className="hb6_content_2 mt-6">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </div>
        </div>
        <div className="">
          <img src={img_z2} alt="" />
        </div>
      </div>

      {/* Quizzes */}
      <div className="p-4 m-auto mb-8 lg:w-9/12 sm:w-full grid gap-12 lg:gap-36 lg:grid-cols-2 sm:grid-cols-1">
        <div className="">
          <img src={img_z3} alt="" />
        </div>
        <div className="mt-4 lg:mt-24">
          <div className="hb6_heading_4 text-center lg:text-left">
            Assessments, <br />
            <span className="hb6_heading_2">Quizzes, </span> Tests
          </div>
          <div className="hb6_content_2 mt-6 text-center lg:text-left">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </div>
        </div>
      </div>

      {/* Class Management */}
      <div className="p-4 m-auto mb-8 lg:w-9/12 sm:w-full grid gap-12 lg:gap-36 lg:grid-cols-2 sm:grid-cols-1">
        <div className="mt-4 lg:mt-24">
          <div className="hb6_heading_4 text-center lg:text-left">
            <span className="hb6_heading_2">Class Management</span>
            <br /> Tools for Educators
          </div>
          <div className="hb6_content_2 mt-6 text-center lg:text-left">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </div>
        </div>
        <div className="">
          <img src={img_z4} alt="" />
        </div>
      </div>

      {/* Discussions */}
      <div className="p-4 m-auto mb-4 lg:w-9/12 sm:w-full grid gap-12 lg:gap-36 lg:grid-cols-2 sm:grid-cols-1">
        <div className="">
          <img src={img_z5} alt="" />
        </div>
        <div className="mt-4 lg:mt-24">
          <div className="hb6_heading_4 text-center lg:text-left">
            One-on-One
            <br />
            <span className="hb6_heading_2">Discussions</span>
          </div>
          <div className="hb6_content_2 mt-6 text-center lg:text-left">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </div>
        </div>
      </div>

      {/* button (show more) */}
      <div className="mb-8 p-4 mx-auto w-2/3 text-center">
        <button className="hb6_btn">See more features</button>
      </div>
    </>
  );
};
