import React from 'react';
import teacher from '../assets/teacher.png';

const Summary = () => {
    return (
        <div className="card bg-blue-50 p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-3xl font-semibold mb-4">Summary</h2>

            {/* Product 1 */}
            <div className="flex items-center mb-4">
                <img src={teacher} alt="Product 1" className="h-40 w-50 rounded-lg" />
                <div className="ml-4">
                    <p className="mb-1 text-gray-600 text-2xl font-normal leading-[32.4px] tracking-[0.02em] text-[20px]">adipiscing elit, sed do eiusmod tempor</p>
                    <p className="font-bold text-[20px]">$24.69</p>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-2 border-gray-300" />

            {/* Product 2 */}
            <div className="flex items-center mb-4">
                <img src={teacher} alt="Product 2" className="h-40 w-50 rounded-lg" />
                <div className="ml-4">
                    <p className="mb-1 text-gray-600 font-normal leading-[32.4px] tracking-[0.02em] text-[20px]">sed do eiusmod tempor adipiscing elit</p>
                    <p className="font-bold text-[20px]">$24.69</p>
                </div>
            </div>

                {/* Divider */}
                <hr className="my-2 border-gray-300" />

            {/* Summary List */}
            <ul className="list-none mt-4">
                <li className="flex justify-between py-2 border-b border-gray-300 text-[22px]">
                    <span>Subtotal</span>
                    <strong>$51.38</strong>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300 text-[22px]">
                    <span>Coupon Discount</span>
                    <strong>0%</strong>
                </li>

                <li className="flex justify-between py-2 border-b border-gray-300 text-[22px]">
                    <span>TAX</span>
                    <strong>$5</strong>
                </li>

                <li className="flex justify-between py-2 text-[22px]">
                    <span>Total</span>
                    <strong>$56.38</strong>
                </li>

            </ul>
        </div>
    );
};

export default Summary;
