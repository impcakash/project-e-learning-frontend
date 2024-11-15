import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#49bbbd" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <div className="flex-shrink-0">
              <div className="text-white text-2xl font-bold flex items-start">
                <div className="bg-white p-1 rounded-full">
                  <span className="text-teal-400 m-90">TOTC</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/">
              <div className="text-white hover:text-gray-200">Home</div>
            </Link>
            <Link to="/courses">
              <div className="text-white hover:text-gray-200">Courses</div>
            </Link>
            <Link to="/membership">
              <div className="text-white hover:text-gray-200">Membership</div>
            </Link>
            <Link to="/blog">
              <div className="text-white hover:text-gray-200">Blog</div>
            </Link>
            <Link to="/literature">
              <div className="text-white hover:text-gray-200">Literature</div>
            </Link>

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
                  <Link to="/search">
                    <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                      Search
                    </div>
                  </Link>
                  <Link to="/meeting">
                    <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                      Meeting
                    </div>
                  </Link>
                  <Link to="/courseDetails">
                    <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                      Course Details
                    </div>
                  </Link>
                  <Link to="/blogDetails">
                    <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                      Blog Details
                    </div>
                  </Link>
                  <Link to="/checkout">
                    <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                      Checkout
                    </div>
                  </Link>
                  <Link to="/calendar1">
                    <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                      Calendar 01
                    </div>
                  </Link>
                  <Link to="/calendar2">
                    <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                      Calendar 02
                    </div>
                  </Link>
                  <Link to="/courseCalendar">
                    <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                      Course Calendar
                    </div>
                  </Link>
                  <Link to="/fullViewCalendar">
                    <div className="block px-4 py-2 text-gray-700 hover:bg-teal-100">
                      Full View Calender
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Login and Sign Up Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button className="bg-white text-black font-medium px-4 py-1 rounded-full hover:bg-gray-100">
                {" "}
                Login
                {/* <a href='./'>  Login  </a> */}
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-teal-200 text-teal-700 font-medium px-4 py-1 rounded-full hover:bg-teal-300">
                Sign Up
              </button>
            </Link>
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
        <div style={{ backgroundColor: "#49bbbd" }} className="md:hidden">
          <Link to="/">
            <div className="block px-4 py-2 text-white">Home</div>
          </Link>
          <Link to="/courses">
            <div className="block px-4 py-2 text-white">Courses</div>
          </Link>
          <Link to="/membership">
            <div className="block px-4 py-2 text-white">Membership</div>
          </Link>
          <Link to="/blog">
            <div className="block px-4 py-2 text-white">Blog</div>
          </Link>
          <Link to="/literature">
            <div className="block px-4 py-2 text-white">Literature</div>
          </Link>
          <Link to="/search">
            <div className="block px-4 py-2 text-white">Search</div>
          </Link>
          <Link to="/meeting">
            <div className="block px-4 py-2 text-white">Meeting</div>
          </Link>
          <Link to="/courseDetails">
            <div className="block px-4 py-2 text-white">Course Details</div>
          </Link>
          <Link to="/blogDetails">
            <div className="block px-4 py-2 text-white">Blog Details</div>
          </Link>
          <Link to="/checkout">
            <div className="block px-4 py-2 text-white">Checkout</div>
          </Link>
          <Link to="/calendar1">
            <div className="block px-4 py-2 text-white">Calender 01</div>
          </Link>
          <Link to="/calendar2">
            <div className="block px-4 py-2 text-white">Calender 02</div>
          </Link>
          <Link to="/courseCalendar">
            <div className="block px-4 py-2 text-white">Course Calendar</div>
          </Link>
          <Link to="/fullViewCalendar">
            <div className="block px-4 py-2 text-white">Full View Calender</div>
          </Link>
          <div className="flex justify-around py-4">
            <Link to="/login">
              <button className="bg-white text-black font-medium px-4 py-1 rounded-full hover:bg-gray-100">
                Login
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-teal-200 text-teal-700 font-medium px-4 py-1 rounded-full hover:bg-teal-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
