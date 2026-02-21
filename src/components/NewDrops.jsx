import React from "react";
import { Link } from "react-router-dom";

function NewDrops({product}) {
  
  // console.log(product)

  return (
    <div className="mt-12 pl-16 mb-16">
      {/* HEADER */}

      <div className="flex items-center justify-between mb-5">
        <div className="ml-2 sm:ml-3 md:ml-4 lg:ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold h-12 sm:h-16 md:h-20 lg:h-28 xl:h-36 uppercase animate-fadeIn">
            Don’t miss out <br /> new drops
          </h1>
        </div>

        <div className="mr-15 sm:mr-4 md:mr-8 lg:mr-16 xl:mr-26">
          <button className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-2 sm:py-1.5 md:py-2 bg-blue-600 rounded-md text-white font-medium text-xs sm:text-sm md:text-base hover:bg-blue-700 hover:scale-105 transform transition-all duration-300">
            Shop New Drops
          </button>
        </div>
      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center mr-18 sm:mr-12 md:mr-16 lg:mr-18">
        {product.slice(0, 4).map((product, index) => (
          <div
            key={product.id}
            className="bg-white border-4 sm:border-6 md:border-8 border-white rounded-xl sm:rounded-2xl w-50 sm:w-52 md:w-64 lg:w-75 p-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-slideUp"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
          >
            {/* Image Container */}
            <div className="relative bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden group">
              
                <span className="absolute top-0 -left-0 bg-blue-600 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-br-xl sm:rounded-br-2xl rounded-tl-xl sm:rounded-tl-2xl z-10 animate-pulse">
                  New
                </span>
             
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-50 sm:w-44 md:w-56 lg:w-80 h-32 sm:h-40 md:h-52 lg:h-70 object-cover rounded-t-xl sm:rounded-t-2xl group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Product Info */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 mt-2 uppercase leading-tight break-words hover:text-blue-600 transition-colors duration-300">
                {product.title}
              </h3>

              <Link
                to={`/products/${product.id}`}
                className="w-full h-8 sm:h-10 md:h-12 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group"
              >
                <span className="text-[10px] sm:text-xs md:text-sm group-hover:tracking-wider transition-all duration-300">
                  VIEW PRODUCT
                </span>
                <span className="text-orange-400 text-[10px] sm:text-xs md:text-sm group-hover:scale-110 transition-transform duration-300">
                  - ${product.price}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default NewDrops;