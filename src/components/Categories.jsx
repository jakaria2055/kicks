import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const CATEGORIESIMG1 = "/image/categories_img1.png";
const CATEGORIESIMG2 = "/image/categories_img2.png";

const Categories = () => {
  return (
    <section className="bg-[#232321] px-4 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-10 md:pt-12 lg:pt-14">
      {/* HEADER */}
      <div className="flex items-end justify-between mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase Rubik">
          Categories
        </h2>

        {/* NAV BUTTONS */}
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center justify-center">
            <ChevronLeft size={14} className="text-white sm:size-16 md:size-18" />
          </button>

          <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white hover:bg-gray-200 rounded-md flex items-center justify-center">
            <ChevronRight size={14} className="text-black sm:size-16 md:size-18" />
          </button>
        </div>
      </div>

      {/* CATEGORY CONTAINER */}
      <div className="bg-white rounded-tl-2xl lg:rounded-tl-3xl overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          {/* CARD 1 */}
          <div className="relative">
            <img
              src={CATEGORIESIMG1}
              alt="Lifestyle Shoes"
              className="w-full lg:w-172 h-150 object-cover"
            />

            <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-4 sm:left-5 md:left-6 lg:left-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase leading-tight">
                Lifestyle <br /> Shoes
              </h3>
            </div>

            <button className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 right-4 sm:right-5 md:right-6 lg:right-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-black rounded-md flex items-center justify-center">
              <ArrowUpRight size={14} className="text-white sm:size-16 md:size-18" />
            </button>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-white">
            <img
              src={CATEGORIESIMG2}
              alt="Basketball Shoes"
              className="w-full lg:w-172 h-150 object-cover"
            />

            <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-4 sm:left-5 md:left-6 lg:left-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase leading-tight">
                Basketball <br /> Shoes
              </h3>
            </div>

            <button className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 right-4 sm:right-5 md:right-6 lg:right-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-black rounded-md flex items-center justify-center">
              <ArrowUpRight size={14} className="text-white sm:size-16 md:size-18" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;