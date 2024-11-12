import React from "react";
import PropTypes from "prop-types";

function Component2Book({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden ">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-48 object-cover "
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold">{book.title}</h2>
        <p className="mt-0 font-bold">{book.price}</p>  
     
        <p className="text-sm text-green-500 mt-0 mr-24 ">All Benefits of PLUS</p>
      </div>
    </div>
  );
}

Component2Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Component2Book;