import './Meeting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faMicrophone, faPhone, faDesktop, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faCalendar, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import img1 from '../Meeting/assets/img1.png';
import img2 from '../Meeting/assets/img2.png';
import img3 from '../Meeting/assets/img3.png';
import img4 from '../Meeting/assets/img4.png';
import img5 from '../Meeting/assets/img5.png';
import img6 from '../Meeting/assets/img6.png';


const Meeting = () => {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };
    return (
        <>
         <div className="bdy_u" >
             <header className=" bdy_u2">

              <h1 className="text-2xl font-semibold ">UX/UI Design Conference Meeting</h1>

            <div className="text-sm text-gray-500">9 Lessons, 6h 30min</div>

           <img className='image2_u' src="https://tse1.mm.bing.net/th?id=OIP.ZiTW0_Bt-77kKvRweb7hLAHaHa&pid=Api&P=0&h=180" alt="" />

            </header>

          <div className='image3_u'>
            <img src={img1} />
          </div>

           <div className='imggg_u'>
         <div className='absolute top-40 ml-[770px] gap-x-3 rounded-sm '>
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />  
         </div>
         </div>
                     
                <div className='icons_u'>
                    <div className=" absolute flex justify-center bg-gray-100 rounded-full p-2 space-x-5 shadow-lg w-2/5  mr-64 my-80 ">
                        <button className="bg-red-500 p-3 rounded-full text-white">
                            <FontAwesomeIcon icon={faVideo} className="h-6 w-6" />
                        </button>
                        <button className="bg-blue-500 p-3 rounded-full text-white">
                            <FontAwesomeIcon icon={faMicrophone} className="h-6 w-6" />
                        </button>
                        <button className="bg-gray-500 p-3 rounded-full text-white">
                            <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
                        </button>
                        <button className="bg-green-500 p-3 rounded-full text-white">
                            <FontAwesomeIcon icon={faDesktop} className="h-6 w-6" />
                        </button>
                        <button className="bg-gray-500 p-3 rounded-full text-white">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-6 w-6" />
                        </button>
                    </div>
                </div>
{/* ..course contents.. */}
                <div className='ml-[1020px]  '>
                    <div className="sidebar_u ">
                        <div className="w-full max-w-md bg-red rounded-lg shadow-lg p-8 ">
                        
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold">Course Contents</h2>

                                <button className="p-2 ronded-full bg-teal-50 hover:bg-teal-100">
                                    <span className="material-icons w- text-teal-600"> <button>
                                        <FontAwesomeIcon icon={faCalendar} />
                                    </button></span>
                                </button>
                            </div>

                            
                            <p className="text-gray-500 mb-2">2/5 completed</p>
                            <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                                <div className="bg-teal-500 h-full rounded-full" style={{ width: '40%' }}></div>
                            </div>

                           
                            <div className="space-y-2">
                                {/* Tab 1 */}
                                <div>
                                    <div
                                        onClick={() => toggleTab(1)}
                                        className="flex justify-between items-center bg-gray-100 p-3 rounded-lg cursor-pointer"
                                    >
                                        <span className="text-teal-600 font-semibold">Get Started</span>
                                        <span className="text-gray-600">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </div>
                                    {activeTab === 1 && (
                                        <div className="mt-2 ml-4 text-gray-700">
                                            <p>1 Hour | 5 Lessons</p>
                                        </div>
                                    )}
                                </div>

                                {/* Tab 2 */}
                                <div>
                                    <div
                                        onClick={() => toggleTab(2)}
                                        className="flex justify-between items-center bg-gray-100 p-3 rounded-lg cursor-pointer"
                                    >
                                        <span className="text-teal-600 font-semibold">Illustrator Structures</span>
                                        <span className="text-gray-600">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </div>
                                    {activeTab === 2 && (
                                        <div className="mt-2 ml-4 text-gray-700">
                                            <p>1. Lorem ipsum dolor sit amet <span className="float-right">65:00</span></p>
                                            <p>2. Lorem ipsum dolor sit amet <span className="float-right">25:00</span></p>
                                            <p>3. Lorem ipsum dolor sit amet <span className="float-right">30:00</span></p>
                                        </div>
                                    )}
                                </div>

                                {/* Tab 3 */}
                                <div>
                                    <div
                                        onClick={() => toggleTab(3)}
                                        className="flex justify-between items-center bg-gray-100 p-3 rounded-lg cursor-pointer"
                                    >
                                        <span className="text-teal-600 font-semibold">Using Illustrator</span>
                                        <span className="text-gray-600">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </div>
                                    {activeTab === 3 && (
                                        <div className="mt-2 ml-4 text-gray-700">
                                            <p>1 Hour | 4 Lessons</p>
                                        </div>
                                    )}
                                </div>

                                {/* Tab 4 */}
                                <div>
                                    <div
                                        onClick={() => toggleTab(4)}
                                        className="flex justify-between items-center bg-gray-100 p-3 rounded-lg cursor-pointer"
                                    >

                                        <span className="text-teal-600 font-semibold">What is Pandas?</span>
                                        <span className="text-gray-600">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </div>
                                    {activeTab === 4 && (
                                        <div className="mt-2 ml-4 text-gray-700">
                                            <p>12:54 - 5 Lessons</p>

                                        </div>
                                    )}
                                </div>

                                {/* Tab 5 */}
                                <div>
                                    <div
                                        onClick={() => toggleTab(5)}
                                        className="flex justify-between items-center bg-gray-100 p-3 rounded-lg cursor-pointer"
                                    >
                                        <span className="text-teal-600 font-semibold">Work with Numpy</span>
                                        <span className="text-gray-600">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </div>
                                    {activeTab === 5 && (
                                        <div className="mt-2 ml-4 text-gray-700">
                                            <p>59:00 - 3 Lessons</p>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sidebar2_u'>
                    <div className="max-w-md mx-auto mt-6 bg-white rounded-lg shadow-md p-7 ">
                        <h2 className="text-xl font-semibold mb-5">Book for you</h2>
                        <div className="grid grid-cols-2 gap-4  ">
    
              <div className="benefit_u">
                            <div className="bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                                <img className='m' src={img5} alt="" />
                                <p className="text-gray-700 font-semibold">All Benefits of PLUS</p>
                                <p className="text-teal-500 font-bold">$24</p>
                            </div>
                            </div>
                            <div className='benefit2_u'>
                            <div className="bg-gray-50 rounded-lg shadow-sm p-1 flex flex-col items-center">
                                <img src={img6} alt="" />
                                <p className="text-gray-700 font-semibold">All Benefits of PLUS</p>
                                <p className="text-teal-500 font-bold">$24</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Meeting;
