import  { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-bold flex items-start">
              <div className="bg-white p-1 rounded-full">
                <span className="text-teal-400 m-90">TOTC</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-gray-200">Home</a>
            <a href="#courses" className="text-white hover:text-gray-200">Courses</a>
            <a href="#membership" className="text-white hover:text-gray-200">Membership</a>
            <a href="#blog" className="text-white hover:text-gray-200">Blog</a>
            <a href="#literature" className="text-white hover:text-gray-200">Literature</a>
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                Others
              </button>
              {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2  ">
                  <a href="#option1" className="block px-4 py-2 text-gray-700 hover:bg-teal-100">Search</a>
                  <a href="#option2" className="block px-4 py-2 text-gray-700 hover:bg-teal-100">Meeting 2</a>
                  <a href="#option3" className="block px-4 py-2 text-gray-700 hover:bg-teal-100">Course Details</a>
                  <a href="#option4" className="block px-4 py-2 text-gray-700 hover:bg-teal-100">Blog Details</a>
                  <a href="#option5" className="block px-4 py-2 text-gray-700 hover:bg-teal-100">Checkout</a>
                  <a href="#option6" className="block px-4 py-2 text-gray-700 hover:bg-teal-100">Calender 01</a>
                  <a href="#option7" className="block px-4 py-2 text-gray-700 hover:bg-teal-100">Calender 02</a>
                  <a href="#option8" className="block px-4 py-2 text-gray-700 hover:bg-teal-100">Course Calender</a>
                  <a href="#option9" className="block px-4 py-2 text-gray-700 hover:bg-teal-100">Full View Calender</a>
                </div>
              )}
            </div>
          </div>

          {/* Login and Sign Up Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-white text-black font-medium px-4 py-1 rounded-full hover:bg-gray-100"> Login 
            {/* <a href='./'>  Login  </a> */}
            </button>
            <button className="bg-teal-200 text-teal-700 font-medium px-4 py-1 rounded-full hover:bg-teal-300">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-400">
          <a href="#home" className="block px-4 py-2 text-white">Home</a>
          <a href="#courses" className="block px-4 py-2 text-white">Courses</a>
          <a href="#membership" className="block px-4 py-2 text-white">Membership</a>
          <a href="#blog" className="block px-4 py-2 text-white">Blog</a>
          <a href="#literature" className="block px-4 py-2 text-white">Literature</a>
          <a href="#others" className="block px-4 py-2 text-white">Search</a>
          <a href="#others" className="block px-4 py-2 text-white">Meeting</a>
          <a href="#others" className="block px-4 py-2 text-white">Course Details</a>
          <a href="#others" className="block px-4 py-2 text-white">Blog Details</a>
          <a href="#others" className="block px-4 py-2 text-white">Checkout</a>
          <a href="#others" className="block px-4 py-2 text-white">Calender 01</a>
          <a href="#others" className="block px-4 py-2 text-white">Calender 02</a>
          <a href="#others" className="block px-4 py-2 text-white">Course Details</a>
          <a href="#others" className="block px-4 py-2 text-white">Full View Calender</a>
          <div className="flex justify-around py-4">
            <button className="bg-white text-black font-medium px-4 py-1 rounded-full hover:bg-gray-100">
              Login
            </button>
            <button className="bg-teal-200 text-teal-700 font-medium px-4 py-1 rounded-full hover:bg-teal-300">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
