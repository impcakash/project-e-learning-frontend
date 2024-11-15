import { useState } from 'react';

function Nav2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center text-teal-400 text-2xl font-bold">
              <div className="border-2 border-teal-400 rounded-full p-2">
                <span className="text-teal-400">TOTC</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-10">
            <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#courses" className="text-gray-600 hover:text-gray-800">Courses</a>
            <a href="#membership" className="text-gray-600 hover:text-gray-800">Membership</a>
            <a href="#blog" className="text-gray-600 hover:text-gray-800">Blog</a>
            <a href="#literature" className="text-gray-600 hover:text-gray-800">Literature</a>
          </div>


          {/* Profile Section */}
          <div className="hidden md:flex items-center space-x-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {/* Profile Image */}
            <img
              src="http://127.0.0.1:5500/E-learning-Team2-/assest/media/image%2012.png" // Placeholder image URL; replace with actual profile image URL
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            
            {/* Profile Name and Dropdown */}
            <span className="text-gray-600 font-medium">Lina</span>
            <svg
              className="w-4 h-4 text-teal-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
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
        <div className="md:hidden bg-white shadow-md">
          <a href="#home" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
          <a href="#courses" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Courses</a>
          <a href="#membership" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Membership</a>
          <a href="#blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Blog</a>
          <a href="#literature" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Literature</a>
          <a href="#literature" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Search</a>
          <a href="#literature" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Meeting</a>
          <a href="#literature" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Course Details</a>
          <a href="#literature" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Blog Details</a>
          <a href="#literature" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Checkout</a>
          <a href="#literature" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Calendar 01</a>
          <a href="#literature" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Calendar 02</a>
          <a href="#literature" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Course Calendar</a>
          <a href="#literature" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Full View Calendar</a>
        </div>
      )}
    </nav>
  );
}

export default Nav2;
