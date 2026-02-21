import { ChevronDown } from "lucide-react";
import React from "react";
import SuggestProduct from "../components/SuggestProduct";

const SHOES = "/image/new_drops_img1.png";
const HEART = "/icon/heart.png";
const BIN = "/icon/Bin.png";

const Cart = () => {
  return (
    <div className="px-10 lg:px-25 py-8 bg-gray-100 min-h-screen mt-30 animate-fadeIn">
      {/* TOP TEXT */}
      <div className="mb-6 space-y-2 animate-slideDown">
        <h1 className="text-xl lg:text-3xl font-bold hover:text-blue-600 transition-colors duration-300">
          Saving to celebrate
        </h1>
        <p className="text-sm text-gray-600">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while supplies last. No code needed
        </p>
        <p className="text-sm text-gray-600 hover:underline cursor-pointer transition-all duration-300">
          Join us or Sign-in
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* YOUR BAG */}
        <div className="bg-white rounded-2xl p-4 lg:p-6 w-full lg:w-2/3 shadow-sm hover:shadow-lg transition-all duration-500">
          <h2 className="text-lg lg:text-2xl font-bold mb-2 hover:text-blue-600 transition-colors duration-300">
            Your Bag
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Items in your bag not reserved- check out now to make them yours.
          </p>

          {/* PRODUCT */}
          <div className="flex gap-4 mt-10 group">
            {/* IMAGE */}
            <div className="rounded-xl flex justify-center overflow-hidden">
              <img
                src={SHOES}
                alt="shoe"
                className="w-40 lg:w-48 object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* DETAILS */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm lg:text-2xl uppercase hover:text-blue-600 transition-colors duration-300">
                  DROPSET TRAINER SHOES
                </h3>
                <h5 className="hidden lg:block text-blue-500 font-bold text-2xl mt-2 animate-pulse">
                  $130.00
                </h5>
              </div>

              <p className="text-sm font-semibold text-gray-700">Men’s Road Running Shoes</p>

              <p className="text-sm font-semibold text-gray-700">
                Enamel Blue/University White
              </p>

              {/* SIZE / QTY */}
              <div className="flex gap-6 mt-2 text-sm font-semibold text-gray-700">
                <span className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors duration-300 group/size">
                  Size 10 
                  <ChevronDown size={18} className="group-hover/size:translate-y-1 transition-transform duration-300" />
                </span>
                <span className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors duration-300 group/qty">
                  Quantity 1 
                  <ChevronDown size={18} className="group-hover/qty:translate-y-1 transition-transform duration-300" />
                </span>
              </div>

              <div className="sm:hidden text-blue-600 font-bold text-lg mt-2 animate-pulse">
                $130.00
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 sm:mt-8">
                <img 
                  src={HEART} 
                  alt="Add to wishlist" 
                  className="text-black w-8 h-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                />
                <img 
                  src={BIN} 
                  alt="Remove item" 
                  className="text-black w-8 h-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg hover:brightness-75"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-6 w-full lg:w-1/3 lg:bg-transparent lg:rounded-none lg:shadow-none animate-slideRight">
          <h2 className="text-lg lg:text-2xl font-bold mb-4 h-9 Rubik text-gray-800 hover:text-blue-600 transition-colors duration-300">
            Order Summary
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between group/item">
              <span className="font-semibold text-gray-800 group-hover/item:translate-x-1 transition-transform duration-300">1 Item</span>
              <span className="text-gray-700 font-semibold">$130.00</span>
            </div>

            <div className="flex justify-between group/item">
              <span className="font-semibold text-gray-800 group-hover/item:translate-x-1 transition-transform duration-300">Delivery</span>
              <span className="text-gray-700 font-semibold">$6.99</span>
            </div>

            <div className="flex justify-between group/item">
              <span className="font-semibold text-gray-800 group-hover/item:translate-x-1 transition-transform duration-300">Sales Tax</span>
              <span className="text-gray-700 font-semibold">-</span>
            </div>
          </div>

          {/* TOTAL */}
          <div className="flex justify-between font-bold text-lg mt-4 text-gray-700 border-t pt-4">
            <span className="hover:text-blue-600 transition-colors duration-300">Total</span>
            <span className="text-blue-600 text-xl hover:scale-105 transition-transform duration-300">$136.99</span>
          </div>

          {/* BUTTON */}
          <button className="w-full bg-gray-900 text-white py-2 rounded-md mt-4 hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-semibold tracking-wide hover:tracking-wider">
            CHECKOUT
          </button>

          <p className="text-sm underline mt-5 cursor-pointer font-semibold text-gray-800 hover:text-blue-600 hover:scale-105 transition-all duration-300 inline-block">
            Use a promo code
          </p>
        </div>
      </div>

      <SuggestProduct />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-slideRight {
          animation: slideRight 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Cart;