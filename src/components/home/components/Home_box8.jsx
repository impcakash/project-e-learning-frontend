import "../styles/Home_box8.css";
import img_z6 from "../assests/z-pic_6.jpeg";
import img_x1 from "../assests/course-card.png";
import img_x2 from "../assests/blog-02.png";
import img_x3 from "../assests/blog-03.png";
import img_x4 from "../assests/blog-04.png";

export const Home_box8 = () => {
  return (
    <>
      <div>
        <div className="p-4 m-auto mt-8 mb-8 lg:w-9/12 sm:w-full grid gap-12 lg:gap-36 lg:grid-cols-2 sm:grid-cols-1">
          <div className="mt-4 lg:mt-24">
            <div className="hb8_heading_4 text-center lg:text-left">
              <span className="hb8_heading_2">Class Management</span>
              <br /> Tools for Educators
            </div>
            <div className="hb8_content_2 mt-6 text-center lg:text-left">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </div>
          </div>
          <div>
            <img src={img_z6} alt="image-6" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="mx-auto w-4/5">
          <div className="text-center hb8_heading_8">
            Lastest News and Resources
          </div>
          <p className="mt-2 text-center hb8_content_8">
            See the developments that have occurred to TOTC in the world
          </p>
        </div>
      </div>
      <div className="p-4 m-auto mt-16 mb-12 lg:w-9/12 sm:w-full grid gap-12 lg:grid-cols-2 sm:grid-cols-1">
        <div>
          <div>
            <img className="hb8_img" src={img_x1} alt="image-6" />
          </div>
          <div>
            <button className="hb8_btn">NEWS</button>
          </div>
          <div>
            <div className="hb8_box_news_heading">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </div>
            <p className="mt-2 hb8_box_news_content">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <div className="mt-2 hb8_box_news_a">
              <a>Read more</a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-4">
            <div className="w-2/5 m-auto">
              <img className="hb8_img" src={img_x2} alt="" />
            </div>
            <div className="w-3/5 mt-4">
              <div className="hb8_box_news_heading">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </div>
              <p className="mt-2 hb8_box_news_content">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-row gap-4">
            <div className="w-2/5 m-auto">
              <img className="hb8_img" src={img_x3} alt="" />
            </div>
            <div className="w-3/5 mt-4">
              <div className="hb8_box_news_heading">
                Zoom’s earliest investors are betting millions on a better Zoom
                for schools
              </div>
              <p className="mt-2 hb8_box_news_content">
                Zoom’s earliest investors are betting millions on a better Zoom
                for schools
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-row gap-4">
            <div className="w-2/5 m-auto">
              <img className="hb8_img" src={img_x4} alt="" />
            </div>
            <div className="w-3/5 mt-4">
              <div className="hb8_box_news_heading">
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom
                Classrooms
              </div>
              <p className="mt-2 hb8_box_news_content">
                This year, investors have reaped big financial returns from
                betting on Zoom...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
