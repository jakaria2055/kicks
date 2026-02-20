import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const CATEGORIESIMG1 = "/image/categories_img1.png";
const CATEGORIESIMG2 = "/image/categories_img2.png";

const Categories = () => {
  return (
    <section className="bg-[#232321] px-16 pt-14">
      {/* HEADER */}
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-white text-6xl font-bold uppercase Rubik">Categories</h2>

        {/* NAV BUTTONS */}
        <div className="flex gap-4">
          <button className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center justify-center">
            <ChevronLeft size={18} className="text-white" />
          </button>

          <button className="w-8 h-8 bg-white hover:bg-gray-200 rounded-md flex items-center justify-center">
            <ChevronRight size={18} className="text-black" />
          </button>
        </div>
      </div>

      {/* CATEGORY CONTAINER */}
      <div className="bg-white h-150  rounded-tl-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* CARD 1 */}
          <div className="relative">
            <img
              src={CATEGORIESIMG1}
              alt="Lifestyle Shoes"
              className="w-172 h-150 object-cover"
            />

            <div className="absolute bottom-8 left-10">
              <h3 className="text-2xl font-bold uppercase leading-tight">
                Lifestyle <br /> Shoes
              </h3>
            </div>

            <button className="absolute bottom-8 right-10 w-10 h-10 bg-black rounded-md flex items-center justify-center">
              <ArrowUpRight size={18} className="text-white" />
            </button>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-white">
            <img
              src={CATEGORIESIMG2}
              alt="Basketball Shoes"
              className="w-172 h-150 object-cover"
            />

            <div className="absolute bottom-8 left-10">
              <h3 className="text-2xl font-bold uppercase leading-tight">
                Basketball <br /> Shoes
              </h3>
            </div>

            <button className="absolute bottom-8 right-10 w-10 h-10 bg-black rounded-md flex items-center justify-center">
              <ArrowUpRight size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
