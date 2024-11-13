import React from 'react';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import './NavigationButtons.css';

const NavigationButtons = ({ scrollContainerRef }) => {
  const scrollLeft = () => {
    if (scrollContainerRef && scrollContainerRef.current) {
      console.log('Scrolling left');
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef && scrollContainerRef.current) {
      console.log('Scrolling right');
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="navigation-buttons">
      <button onClick={scrollLeft}>
        <img src={leftArrow} alt="Scroll left" />
      </button>
      <button onClick={scrollRight}>
        <img src={rightArrow} alt="Scroll right" />
      </button>
    </div>
  );
};

export default NavigationButtons;

