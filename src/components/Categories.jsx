import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const Categories = ({ categories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate total pairs (2 categories per view)
  const totalPairs = Math.ceil(categories.length / 2);
  
  // Get current pair of categories to display
  const getCurrentCategories = () => {
    const start = currentIndex * 2;
    return categories.slice(start, start + 2);
  };
  
  // Navigation handlers
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPairs - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPairs - 1 ? prev + 1 : 0));
  };
  
  const currentCategories = getCurrentCategories();
  
  return (
    <section className="bg-[#232321] px-4 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-10 md:pt-12 lg:pt-14">
      {/* HEADER */}
      <div className="flex items-end justify-between mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase Rubik">
          Categories
        </h2>

        {/* NAV BUTTONS */}
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <button 
            onClick={handlePrevious}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center justify-center transition-colors"
            aria-label="Previous categories"
          >
            <ChevronLeft size={14} className="text-white sm:size-16 md:size-18" />
          </button>

          <button 
            onClick={handleNext}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white hover:bg-gray-200 rounded-md flex items-center justify-center transition-colors"
            aria-label="Next categories"
          >
            <ChevronRight size={14} className="text-black sm:size-16 md:size-18" />
          </button>
        </div>
      </div>

      {/* CATEGORY CONTAINER */}
      <div className="bg-white rounded-tl-2xl lg:rounded-tl-3xl overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          {currentCategories.map((category, index) => (
            <div key={category.id} className="relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full lg:w-172 h-150 object-cover"
                onError={(e) => {
                  e.target.src = 'https://placeimg.com/640/480/any';
                }}
              />

              <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-4 sm:left-5 md:left-6 lg:left-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase leading-tight">
                  {category.name}
                </h3>
              </div>

              <button 
                className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 right-4 sm:right-5 md:right-6 lg:right-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-black hover:bg-gray-800 rounded-md flex items-center justify-center transition-colors"
                aria-label={`View ${category.name}`}
              >
                <ArrowUpRight size={14} className="text-white sm:size-16 md:size-18" />
              </button>
            </div>
          ))}
          
          {/* Handle odd number of categories - show placeholder for second slot */}
          {currentCategories.length === 1 && (
            <div className="relative bg-gray-100 hidden lg:block">
              <div className="w-full h-150 flex items-center justify-center">
                <p className="text-gray-400 text-lg">No more categories</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Optional: Pagination dots */}
      <div className="flex justify-center gap-2 mt-4 pb-8">
        {Array.from({ length: totalPairs }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-gray-600'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;