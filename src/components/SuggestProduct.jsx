import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SHOES1 = "/image/new_drops_img1.png";
const SHOES2 = "/image/shoes2.png";
const SHOES3 = "/image/shoes3.png";
const SHOES4 = "/image/shoes4.png";

function SuggestProduct() {
  const [selectedPage, setSelectedPage] = useState(1);

  const products = [
    {
      id: 1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      isNew: true,
      image: SHOES1,
    },
    {
      id: 2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      isNew: true,
      image: SHOES2,
    },
    {
      id: 3,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      isNew: true,
      image: SHOES3,
    },
    {
      id: 4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      isNew: true,
      image: SHOES4,
    },
  ];

  return (
    <div className="mt-20 px-6 mb-16">
      {/* HEADER */}

      <div className="flex justify-between">
        <div className="ml-2 sm:ml-3 md:ml-4 lg:ml-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold h-12 sm:h-16 md:h-20 lg:h-28 xl:h-36 uppercase">
            You may also like
          </h1>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <button 
            onClick={() => setSelectedPage(prev => prev > 1 ? prev - 1 : products.length)} 
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center justify-center"
          >
            <ChevronLeft
              size={14}
              className="text-white sm:size-16 md:size-18"
            />
          </button>

          <button 
            onClick={() => setSelectedPage(prev => prev < products.length ? prev + 1 : 1)} 
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white hover:bg-gray-200 rounded-md flex items-center justify-center"
          >
            <ChevronRight
              size={14}
              className="text-black sm:size-16 md:size-18"
            />
          </button>
        </div>
      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center  gap-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border-4 sm:border-6 md:border-8 border-white rounded-xl sm:rounded-2xl w-55 sm:w-52 md:w-64 lg:w-75 p-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative bg-gray-100 rounded-xl sm:rounded-2xl">
              {product.isNew && (
                <span className="absolute top-1 -left-0 bg-blue-600 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-br-xl sm:rounded-br-2xl rounded-tl-xl sm:rounded-tl-2xl">
                  New
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-55 sm:w-44 md:w-56 lg:w-80 h-32 sm:h-40 md:h-52 lg:h-70 object-cover rounded-t-xl sm:rounded-t-2xl"
              />
            </div>

            {/* Product Info */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 mt-2 uppercase leading-tight break-words">
                {product.name}
              </h3>

              <Link
                to={`/products/${product.id}`}
                className="w-full h-8 sm:h-10 md:h-12 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 sm:gap-2"
              >
                <span className="text-[10px] sm:text-xs md:text-sm">
                  VIEW PRODUCT
                </span>
                <span className="text-orange-400 text-[10px] sm:text-xs md:text-sm">
                  - ${product.price}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-5">
        {products.map((product, index) => (
          <div
            key={product.id}
            onClick={() => setSelectedPage(index + 1)}
            className={`w-10 h-1.5 rounded-full cursor-pointer ${
              selectedPage === index + 1 ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default SuggestProduct;