import React from 'react';
import visa from '../assets/visa.png';
import paypal from '../assets/paypal.png';
import amex from '../assets/amex.png';
import mastercard from '../assets/mastercard.png';

const Checkout = () => {
    return (
        <div className="card p-4 rounded-lg shadow-lg bg-white w-full">
            <h2 className="text-4xl font-semibold mb-4">Checkout</h2>
            <form>

               {/* Card Type */}
               <div className="mb-4">
                <label className="form-label font-bold text-sm">Card Type</label>
                <div className="flex flex-wrap justify-center gap-5 w-full">
                    <img src={paypal} alt="PayPal" className="h-40 w-40 object-contain flex-shrink-0 md:w-32 lg:w-40" />
                    <img src={amex} alt="American Express" className="h-40 w-40 object-contain flex-shrink-0 md:w-32 lg:w-40" />
                    <img src={visa} alt="Visa" className="h-40 w-40 object-contain flex-shrink-0 md:w-32 lg:w-40" />
                    <img src={mastercard} alt="MasterCard" className="h-40 w-40 object-contain flex-shrink-0 md:w-32 lg:w-40" />
                </div>
                </div>


                {/* Name on Card */}
                <div className="mb-4">
                    <label className="form-label font-semibold text-sm">Name on Card</label>
                    <input type="text" className="form-control block w-full border border-gray-300 p-2 rounded" placeholder="Enter name on Card" />
                </div>

                {/* Card Number */}
                <div className="mb-4">
                    <label className="form-label font-semibold text-sm">Card Number</label>
                    <input type="text" className="form-control block w-full border border-gray-300 p-2 rounded" placeholder="Enter Card Number" />
                </div>

                {/* Expiration Date and CVC */}
                <div className="flex gap-4">
                    <div className="w-full sm:w-1/2">
                        <label className="form-label font-semibold text-sm">Expiration Date (MM/YY)</label>
                        <input type="text" className="form-control block w-full border border-gray-300 p-2 rounded" placeholder="Enter Expiration Date" />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <label className="form-label font-semibold text-sm">CVC</label>
                        <input type="text" className="form-control block w-full border border-gray-300 p-2 rounded" placeholder="Enter CVC" />
                    </div>
                </div>

                {/* Save Info Checkbox */}
                <div className="form-check my-4">
                    <input type="checkbox" className="form-check-input" id="saveInfo" />
                    <label className="form-check-label font-semibold text-sm" htmlFor="saveInfo">Save my information for faster checkout</label>
                </div>

                {/* Confirm Button */}
                <button
                type="submit"
                className="w-full py-3 mt-4 rounded-lg bg-[#49BBBD] text-white font-bold text-lg border-2 border-[#49BBBD] hover:bg-transparent hover:text-[#49BBBD] hover:border-[#49BBBD]"
                >
                Confirm Payment
                </button>
            </form>
        </div>
    );
};

export default Checkout;
