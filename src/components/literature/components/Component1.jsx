
import './Component1.css';

const Component1 = () => {

  return (
    <div className="relative max-w-5=7xl mx-auto p-6 max-h-[350px]">

      <div className="relative max-w-7xl mx-auto p-6 max-h-[390px] overflow-hidden rounded-lg w-full">
        <img src="http://127.0.0.1:5500/E-learning-Team2-/assest/media/Rectangle%20193.png" className="relative  top-50 left-0 w-full h-full object-cover opacity-70" />

        {/* Profile Circle with Avatar */}
        <div className="absolute -top-20 left-16">
          <img
            src="http://127.0.0.1:5500/E-learning-Team2-/assest/media/Ellipse%20128.png"
            alt="Profile"
            className="w-56 h-56 rounded-full border-4 border-white my-36 "
          />
          </div>

          <div className="absolute max-w[63%] max-h-full rounded-[15px] bg-white/80 px-96 py-36 top-[22%] right-[-55%] my-7 left-80 ">

            {/* Content */}
            <div  className="relative ">
              {/* Header Section */}
              <div className="flex justify-between items-start">
                <div className='container_u'>
                  <h2 className="text-lg font-semibold">Jhon Anderson</h2>
                  <p className="text-sm text-gray-500">Assistant Professor at McMaster University</p>
                </div>
                <button className="button_u">
                  Enroll Now
                </button>
              </div>

              
               {/* Description */}
               <p  id='description_u' className="mt-0 text-gray-600 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque delectus molestiae
              mollitia natus beatae sit eos amet reiciendis! Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </p>

       {/* Statistics Section */}
          
       <div className="flex items-center justify-between mt-0 text-sm text-gray-500">
           <div className="flex items-center space-x-1">
              <div className='icons_u'>
                <img src="http://127.0.0.1:5500/E-learning-Team2-/assest/media/star.png" alt="Rating" className="w-5 h-5" />
                <span>4.9 Instructor Rating</span>
              </div>
              <div className="icons_u">
                <img src="http://127.0.0.1:5500/E-learning-Team2-/assest/media/eye.png" alt="Students" className="w-5 h-5" />
                <span>1,592 Students</span>
              </div>
              <div className="icons_u">
                <img src="http://127.0.0.1:5500/E-learning-Team2-/assest/media/play.png" alt="Courses" className="w-5 h-5" />
                <span>Courses</span>
                {/* </div> */}
              </div>
            </div>
    </div>
    <div className='eyecon_u'>
              <img src="http://127.0.0.1:5500/E-learning-Team2-/assest/media/twitter.png" alt="" />
              <img src="http://127.0.0.1:5500/E-learning-Team2-/assest/media/facebook.png" alt=""  />
              <img src="http://127.0.0.1:5500/E-learning-Team2-/assest/media/instagram.png" alt="" />
            </div> 

          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
