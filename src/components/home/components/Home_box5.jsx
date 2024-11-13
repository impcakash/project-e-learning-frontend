import "../styles/Home_box5.css";
import img_classroom from "../assests/classroom.jpeg";

export const Home_box5 = () => {
  return (
    <>
      <div className="m-auto mt-20 mb-12 p-4 lg:w-9/12 sm:w-full grid gap-16 lg:grid-cols-2 sm:grid-cols-1">
        <div>
          <div className="hb5_box_head lg:mt-16 sm:mt-1">
            Everything you can do in a physical classroom,{" "}
            <span className="hb5_box_head_1">you can do with TOTC</span>
          </div>
          <p className="hb5_box_details mt-6">
            TOTC’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud- based system.
          </p>
          <div className="mt-6 hb5_box_link">
            <a href="">Learn More</a>
          </div>
        </div>
        <div>
          <div className="hb5_box_img">
            <img className="hb5_pic" src={img_classroom} alt="classroom" />
          </div>
        </div>
      </div>
    </>
  );
};
