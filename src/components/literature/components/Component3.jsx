// Pagination.js
// import React from 'react';

const Pagination = () => {
    return (
      <div className="flex items-center justify-center space-x-3 mt-4 mb-4">
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">&lt;</span>
        
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">1</span>
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">2</span>
        <span className="p-3 rounded bg-teal-500 text-white cursor-pointer">3</span> 
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">4</span>
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">5</span>
        <span className="p-3 rounded hover:bg-gray-200 cursor-pointer">&gt;</span>
      </div>
    );
  };
  
  export default Pagination;