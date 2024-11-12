import React from 'react';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';

const Offers = () => {
  return (
    <div className="my-5">
      <h2 className="text-center mb-6 text-4xl font-semibold">Top Education offers and deals are listed here</h2>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Offer 1 */}
        <div className="card offer-card relative overflow-hidden">
          <a href="https://example.com/offer1" target="_blank" rel="noopener noreferrer">
            <img src={Img1} className="card-img-top w-full h-auto" alt="Offer 1" />
          </a>
          <div className="card-body absolute inset-0 bg-black bg-opacity-20 p-5 text-white">
            <span className="badge bg-teal-500 text-3xl font-bold py-8 px-10 mb-4 inline-block rounded-lg">50%</span>
            <h5 className="card-title text-2xl font-bold mb-4">Lorem ipsum dolor</h5>
            <p className="card-text text-1xl opacity-90">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do eiusmod tempor.  <br />Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,sed do eiusmod tempor.</p>
          </div>
        </div>

        {/* Offer 2 */}
        <div className="card offer-card relative overflow-hidden">
          <a href="https://example.com/offer2" target="_blank" rel="noopener noreferrer">
            <img src={Img2} className="card-img-top w-full h-auto" alt="Offer 2" />
          </a>
          <div className="card-body absolute inset-0 bg-black bg-opacity-20 p-5 text-white">
            <span className="badge bg-teal-500 text-3xl font-bold py-8 px-10 mb-4 inline-block rounded-lg">10%</span>
            <h5 className="card-title text-2xl font-bold mb-4">Lorem ipsum dolor</h5>
            <p className="card-text text-1xl opacity-90">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do eiusmod tempor.  <br />Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,sed do eiusmod tempor.</p>
          </div>
        </div>

        {/* Offer 3 */}
        <div className="card offer-card relative overflow-hidden">
          <a href="https://example.com/offer3" target="_blank" rel="noopener noreferrer">
            <img src={Img3} className="card-img-top w-full h-auto" alt="Offer 3" />
          </a>
          <div className="card-body absolute inset-0 bg-black bg-opacity-20 p-5 text-white">
            <span className="badge bg-teal-500 text-3xl font-bold py-8 px-10 mb-4 inline-block rounded-lg">50%</span>
            <h5 className="card-title text-2xl font-bold mb-4">Lorem ipsum dolor</h5>
            <p className="card-text text-1xl opacity-90">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do eiusmod tempor.  <br />Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
