import "../styles/Home_box1.css";
import img1 from "../assests/home_box1_pic.png";

export const Home_box1 = () => {
  return (
    <div className="hb1_box_main">
      <div className="hb1_box mx-auto grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="m-auto ">
          <div className="hb1_box_heading mt-4">
            <span className="hb1_box_heading2">Studying</span> Online is now
            much easier
          </div>
          <p className="hb1_box_details lg:w-8/12 sm:w-10/12 mt-4">
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="mt-4 mb-4 hb1_box_all_btn">
            <div>
              <button className="hb1_btn1 mr-4">Join for free</button>
            </div>
            &nbsp;&nbsp;
            <div className="flex flex-row gap-4">
              <div className="w-10">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/482/482059.png"
                  alt=""
                />
              </div>
              <span className="mt-1 hb1_box_btn_work">Watch how it works</span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="hb1_pic">
            <img src={img1} alt="student-pic" />
            {/* <img
              src="https://e-learning-scintillating-melba-a79beb.netlify.app/assest/media/082c2e2832481561feec93a5e5c5e8d6.png"
              alt="student-pic"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
