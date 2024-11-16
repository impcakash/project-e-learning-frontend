import React from 'react';

const BlogDetail = () => {
    return (
   
       <>
          <div>
          <img src='http://127.0.0.1:5501/assest/media/main.png' />
          </div>
      {/* </div> */}
      <div className="flex flex-col items-center p-6 md:p-10 min-h-screen">
        <div className="max-w-7xl  bg-white p-6 md:p-10 rounded-lg ">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 ">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h1>
          <p className="text-gray-500 leading-relaxed mb-4 text-lg">
            TOTC is a platform that allows educators to create online classes whereby they can store
            the course materials online; manage assignments, quizzes and exams; monitor due dates;
            grade results and provide students with feedback all in one place.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4 text-lg">
            TOTC is a platform that allows educators to create online classes whereby they can store
            the course materials online; manage assignments, quizzes and exams; monitor due dates;
            grade results and provide students with feedback all in one place.
          </p>
          <p className="text-gray-500 leading-relaxed mb-9 text-lg">
            TOTC is a platform that allows educators to create online classes whereby they can store
            the course materials online; manage assignments, quizzes and exams; monitor due dates;
            grade results and provide students with feedback all in one place.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-gray-200 rounded-full text-gray-600">affordable</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full text-gray-600">Stunning</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full text-gray-600">making</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full text-gray-600">madbrawns</span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="http://127.0.0.1:5501/assest/media/Group%20247.png"
              alt="Author"
              className="w-16 h-20 object-cover"
            />
            <div>
              <p className="text-gray-700">Written by</p>
              <p className="text-gray-800 ">Lina</p>
            </div>
            <button className="ml-auto px-28 py-2 border border-teal-400 rounded-lg text-teal-600 hover:bg-teal-300">
              Follow
            </button>
          </div>
        </div>
       
      </div>
      
       </>
      
    );
  };
  
  export default BlogDetail;