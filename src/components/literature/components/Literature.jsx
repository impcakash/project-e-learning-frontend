import './Component1.css';
import image1 from './../assests/image1.png';
import image2 from './../assests/image2.png';
import { useState } from "react";
import Component2Book from './Component2Book';
import img3 from '../assests/image3.png';
import img4 from '../assests/image4.png';
import img5 from '../assests/image5.png';
import img6 from '../assests/image6.png';
import img7 from '../assests/image7.png';
import img8 from '../assests/img8.png';
import img9 from '../assests/img9.png';
import img10 from '../assests/img10.png';
import img11 from '../assests/img11.png';
import img12 from '../assests/img12.png';
import start from '../assests/star.png';
import play from '../assests/play.png';
import eye from '../assests/eye.png';
import twitter from '../assests/twitter.png';
import facebook from '../assests/facebook.png';
import instagram from '../assests/instagram.png';


const images = {
    About: img3,
    Course: img8,
    Notes: img9,
    Project: img10,
    Podcast: img11,
    Book: img3,
    Review: img12,
};

const books = [
    {
        title: "Build Your Dream Network",
        price: "$24",
        image: img3,
    },
    {
        title: "Visible Learning for Literacy",
        price: "$24",
        image: img4,
    },
    {
        title: "The New Rules of Work",
        price: "$24",
        image: img5,
    },
    {
        title: "Pivot",
        price: "$24",
        image: img6,
    },
    {
        title: "Learning & Development",
        price: "$24",
        image: img7,
    },
    {
        title: "Learning & Development",
        price: "$24",
        image: img3,
    },
];
const Component1 = () => {
    const [firstCardImage, setFirstCardImage] = useState(images["About"]);

    const handleButtonClick = (button) => {
        setFirstCardImage(images[button]);
    };


  return (
    <>
    <div className="relative max-w-5=7xl mx-auto p-6 max-h-[350px]">

      <div className="relative max-w-7xl mx-auto p-6 max-h-[390px] overflow-hidden rounded-lg w-full">
        <img src={image2} className="relative  top-50 left-0 w-full h-full object-cover opacity-70" />

    
        <div className="absolute -top-20 left-16">
          <img
            src={image1}
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
                <img src={start} alt="Rating" className="w-5 h-5" />
                <span>4.9 Instructor Rating</span>
              </div>
              <div className="icons_u">
                <img src={eye} alt="Students" className="w-5 h-5" />
                <span>1,592 Students</span>
              </div>
              <div className="icons_u">
                <img src={play} alt="Courses" className="w-5 h-5" />
                <span>Courses</span>
                {/* </div> */}
              </div>
            </div>
    </div>
    <div className='eyecon_u'>
              <img src={twitter} alt="" />
              <img src={facebook} alt=""  />
              <img src={instagram} alt="" />
            </div> 

          </div>
        </div>
      </div>
     
    </div>
    
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
    <div className="flex flex-wrap space-x-2 md:space-x-6 mb-8 ml-10 sm:ml-20 md:ml-40">
        {Object.keys(images).map((button) => (
            <button
                key={button}
                onClick={() => handleButtonClick(button)}
                className="px-4 sm:px-6 md:px-8 py-2 bg-gray-300 text-gray-700 rounded hover:bg-green-300 mb-2"
            >
                {button}
            </button>
        ))}
    </div>


    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 ml-10 sm:ml-20 md:ml-40">
        Literature Course
    </h1>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ml-5 sm:ml-10 md:ml-40 mr-5 sm:mr-10 md:mr-40">

        <Component2Book
            book={{
                ...books[0],
                image: firstCardImage,
            }}
        />

        {books.slice(1).map((book, index) => (
            <Component2Book key={index} book={book} />
        ))}
    </div>
</div>

<div className="flex items-center justify-center space-x-3 mt-4 mb-4">
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">&lt;</span>
        
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">1</span>
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">2</span>
        <span className="p-3 rounded bg-teal-500 text-white cursor-pointer">3</span> 
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">4</span>
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">5</span>
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">&gt;</span>
      </div>
</>
  );
};

export default Component1;