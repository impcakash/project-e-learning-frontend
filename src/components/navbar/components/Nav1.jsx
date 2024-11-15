import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white text-2xl font-bold flex items-start">
              <div className="bg-white p-1 rounded-full">
                <span className="text-teal-400 m-90">TOTC</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-6">
            <div className="text-white hover:text-gray-200">Home</div>
            <div className="text-white hover:text-gray-200">Courses</div>
            <div className="text-white hover:text-gray-200">Membership</div>
            <div className="text-white hover:text-gray-200">Blog</div>
            <div className="text-white hover:text-gray-200">Literature</div>

            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                Others
              </button>
              {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10  ">
                  <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                    Search
                  </div>
                  <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                    Meeting 2
                  </div>
                  <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                    Course Details
                  </div>
                  <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                    Blog Details
                  </div>
                  <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                    Checkout
                  </div>
                  <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                    Calender 01
                  </div>
                  <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                    Calender 02
                  </div>
                  <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                    Course Calender
                  </div>
                  <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                    Full View Calender
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Login and Sign Up Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-white text-black font-medium px-4 py-1 rounded-full hover:bg-gray-100">
              {" "}
              Login
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
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-400">
          <div className="block px-4 py-2 text-white">Home</div>
          <div className="block px-4 py-2 text-white">Courses</div>
          <div className="block px-4 py-2 text-white">Membership</div>
          <div className="block px-4 py-2 text-white">Blog</div>
          <div className="block px-4 py-2 text-white">Literature</div>
          <div className="block px-4 py-2 text-white">Search</div>
          <div className="block px-4 py-2 text-white">Meeting</div>
          <div className="block px-4 py-2 text-white">Course Details</div>
          <div className="block px-4 py-2 text-white">Blog Details</div>
          <div className="block px-4 py-2 text-white">Checkout</div>
          <div className="block px-4 py-2 text-white">Calender 01</div>
          <div className="block px-4 py-2 text-white">Calender 02</div>
          <div className="block px-4 py-2 text-white">Course Details</div>
          <div className="block px-4 py-2 text-white">Full View Calender</div>
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
