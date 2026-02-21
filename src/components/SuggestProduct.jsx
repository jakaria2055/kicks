import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductStore from "../store/ProductStore";

function SuggestProduct() {
  const { ProductList, ProductListRequest } = ProductStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // FETCH ALL PRODUCTS
  useEffect(() => {
    (async () => {
      await ProductListRequest();
    })();
  }, [ProductListRequest]);

  console.log("Suggested Product List: ", ProductList);

  // Return early if no products
  if (!ProductList || ProductList.length === 0) {
    return null;
  }

  // Items to show per page
  const itemsPerPage = 4;
  
  // Calculate total pages
  const totalPages = Math.ceil(ProductList.length / itemsPerPage);
  
  // Get current products to display
  const getCurrentProducts = () => {
    const start = currentIndex * itemsPerPage;
    return ProductList.slice(start, start + itemsPerPage);
  };

  // Navigation handlers with animation
  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentProducts = getCurrentProducts();

  return (
    <div className="mt-20 px-6 mb-16 animate-fadeIn">
      {/* HEADER */}
      <div className="flex justify-between animate-slideDown">
        <div className="ml-2 sm:ml-3 md:ml-4 lg:ml-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold h-12 sm:h-16 md:h-20 lg:h-28 xl:h-36 uppercase hover:text-blue-600 transition-colors duration-300">
            You may also like
          </h1>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <button
            onClick={handlePrevious}
            disabled={isAnimating}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous products"
          >
            <ChevronLeft
              size={14}
              className="text-white sm:size-16 md:size-18"
            />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white hover:bg-gray-200 rounded-md flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next products"
          >
            <ChevronRight
              size={14}
              className="text-black sm:size-16 md:size-18"
            />
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
        {currentProducts.map((product, index) => (
          <div
            key={product.id}
            className="bg-white border-4 sm:border-6 md:border-8 border-white rounded-xl sm:rounded-2xl w-55 sm:w-52 md:w-64 lg:w-75 p-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-slideUp"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
          >
            {/* Image Container */}
            <div className="relative bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden group">
              {/* Show "New" badge for products (you can add logic to determine if new) */}
              <span className="absolute top-0 -left-0 bg-blue-600 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-br-xl sm:rounded-br-2xl rounded-tl-xl sm:rounded-tl-2xl z-10 animate-pulse">
                New
              </span>

              <img
                src={product.images?.[0] || 'https://placeimg.com/640/480/any'}
                alt={product.title}
                className="w-55 sm:w-44 md:w-56 lg:w-80 h-32 sm:h-40 md:h-52 lg:h-70 object-cover rounded-t-xl sm:rounded-t-2xl group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = 'https://placeimg.com/640/480/any';
                }}
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

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-5">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => !isAnimating && setCurrentIndex(index)}
            className={`w-10 h-1.5 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 ${
              currentIndex === index ? "bg-blue-600 w-12" : "bg-gray-400 hover:bg-gray-500"
            } ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        ))}
      </div>

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
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default SuggestProduct;