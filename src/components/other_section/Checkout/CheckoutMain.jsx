import React from 'react'
import Checkout from './components/Checkout';
import Summary from './components/Summary';
import Offers from './components/Offers';


export const CheckoutMain = () => {
  return (
    <div>
         <main className="container mx-auto my-4">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* * Checkout Section * */}
                <div className="w-full lg:w-7/12">
                    <Checkout />
                </div>

                {/* * Summary Section * */}
                <div className="w-full lg:w-5/12">
                    <Summary />
                </div>
            </div>
              <br />
              <br />
              <Offers/>
        </main>
    </div>
  )
}
