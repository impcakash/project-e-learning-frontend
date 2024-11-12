import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Rectangle1 from '../assests/Rectangle1.png';
import Logo1 from '../assests/logo1.png';



const RelatedBlogs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slides = [...Array(5)];

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="main-container bg-[#e0f0ff] p-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="header flex justify-between items-center mb-6">
          <h3 className="text-3xl font-semibold">Related Blog</h3>
          <a href="#" className="see-all text-[#49BBBD] font-bold text-2xl">See all</a>
        </div>

        <div className="slider-container relative">
          <div
            ref={sliderRef}
            className="slider flex space-x-6 overflow-hidden scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {slides.map((_, index) => (
              <div
                key={index}
                className="slide flex-none w-1/2 px-4"
              >
                <div className="card flex flex-col w-[600px] h-[700px] bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:translate-y-2">
                  <div className="image-container mb-4 h-1/2">
                    <img
                      src={Rectangle1}
                      alt="Card Image"
                      className="w-full h-full p-4"
                    />
                  </div>
                  <div className="content p-4 flex flex-col justify-between">
                    <h3 className="text-2xl font-semibold text-[#365268] mb-4">
                      Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                    </h3>
                    <div className="author-info flex items-center gap-2 mb-4">
                      <img src={Logo1} alt="Author" className="w-10 h-10 rounded-full bg-[#696984]" />
                      <span className="text-[#696984] font-semibold">Lina</span>
                    </div>
                    <p className="text-sm text-[#6b7c93] mb-4">
                      Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                    </p>
                    <div className="card-view flex justify-between items-center">
                      <a href="#" className="text-[#2F327D]">Read More</a>
                      <div className="views flex items-center gap-2">
                        <i className="material-icons text-[#49BBBD]">visibility</i>
                        <span>251,232</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons below the entire card row */}
          <div className="controls flex justify-end mt-4">
            <button
              onClick={handlePrev}
              className="nav-button bg-[#49BBBD80] text-white p-4 rounded-md shadow-md hover:bg-[#49BBBD] text-xl mt-4 ml-4"
              style={{ minWidth: '50px' }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="nav-button bg-[#49BBBD80] text-white p-4 rounded-md shadow-md hover:bg-[#49BBBD] text-xl mt-4 ml-2"
              style={{ minWidth: '50px' }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
