
const Footer = () => {
    return (
      <footer className=" bg-[#1E1E3F] text-white h-[400px] flex items-center justify-center">
        <div className="max-w-2xl w-full px-4 flex flex-col items-center text-center space-y-16">
          
          {/* Logo and Title Section */}
          <div className="flex items-center space-x-3 mt-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-teal-500">
              <span className="text-teal-500 font-bold text-lg">TOTC</span>
              
            </div>
            <span>|</span>
            <div className="flex flex-col">
              <p className="text-base font-semibold">Virtual Class</p>
              <p className="text-base">for Zoom</p>
            </div>
          </div>
  
          {/* Newsletter Section */}
          <div className="mt-6">
            <p className="text-base mb-4 ">Subscribe to get our Newsletter</p>
            <div className="flex items-center justify-center space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-full w-80 bg-gray-800 text-gray-300 placeholder focus:outline-none border-2 border-gray-500"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-7 py-2 rounded-full ">
                Subscribe
              </button>
            </div>
          </div>
  
          {/* Links and Copyright Section */}
          <div className="text-gray-400 text-sm mt-6">
            <div className="flex justify-center space-x-4 mb-2">
              <a href="#" className="hover:text-white text-base">Careers</a>
              <span>|</span>
              <a href="#" className="hover:text-white text-base">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white text-base">Terms & Conditions</a>
            </div>
            <p className="text-xs text-base">&copy; 2021 Class Technologies Inc.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  