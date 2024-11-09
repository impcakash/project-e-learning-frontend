// src/Card.js
import React from 'react';

function Card() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 p-6">
      <img
        src="https://via.placeholder.com/400"
        alt="Card Image"
        className="w-full rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
        </h3>
        <div className="flex items-center mt-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="text-gray-800 font-medium">Lina</p>
            <p className="text-sm text-gray-500">
              Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
            </p>
          </div>
        </div>
        <a href="#" className="text-blue-500 font-medium mt-4 block">
          Read More
        </a>
        <div className="flex items-center justify-between mt-4 text-gray-500">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927C9.362 2.312 10.638 2.312 10.951 2.927l1.228 2.49 2.754.4c.608.088.851.835.412 1.253l-1.993 1.944.47 2.746c.104.607-.536 1.072-1.09.785L10 12.347l-2.468 1.297c-.554.287-1.194-.178-1.09-.785l.47-2.746-1.993-1.944c-.439-.418-.196-1.165.412-1.253l2.754-.4 1.228-2.49z" />
            </svg>
            <span className="ml-1">251,232</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
