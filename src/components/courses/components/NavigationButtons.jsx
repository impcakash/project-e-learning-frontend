import React from 'react';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import './NavigationButtons.css';

const NavigationButtons = ({ scrollContainerRef }) => {
  const scrollLeft = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="navigation-buttons">
      <button onClick={scrollLeft} aria-label="Scroll left" className="nav-btn">
        <img src={leftArrow} alt="Scroll left" />
      </button>
      <button onClick={scrollRight} aria-label="Scroll right" className="nav-btn">
        <img src={rightArrow} alt="Scroll right" />
      </button>
    </div>
  );
};

export default NavigationButtons;