import React from "react";

const NEWDROP1 = "/image/new_drops_img1.png";

function NewDrops() {
  const products = [
    {
      id: 1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      isNew: true,
      image: NEWDROP1, // ✅ FIXED
    },
    {
      id: 2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      isNew: true,
      image: NEWDROP1,
    },
    {
      id: 3,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      isNew: true,
      image: NEWDROP1,
    },
    {
      id: 4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      isNew: true,
      image: NEWDROP1,
    },
  ];

  return (
    <div className="mt-12 pl-16 mb-16">
      {/* HEADER */}
      {/* <div className="flex items-center justify-between">
        <div className="ml-5">
          <h1 className="text-6xl font-bold h-36 uppercase">
            Don’t miss out <br /> new drops
          </h1>
        </div>

        <div className="mr-26">
          <button className="px-8 py-2 bg-blue-600 rounded-md text-white font-medium">
            Shop New Drops
          </button>
        </div>
      </div> */}

      <div className="flex items-center justify-between mb-5">
        <div className="ml-2 sm:ml-3 md:ml-4 lg:ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold h-12 sm:h-16 md:h-20 lg:h-28 xl:h-36 uppercase">
            Don’t miss out <br /> new drops
          </h1>
        </div>

        <div className="mr-15 sm:mr-4 md:mr-8 lg:mr-16 xl:mr-26">
          <button className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-2 sm:py-1.5 md:py-2 bg-blue-600 rounded-md text-white font-medium text-xs sm:text-sm md:text-base">
            Shop New Drops
          </button>
        </div>
      </div>

      {/* GRID */}
      
     

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center mr-18 sm:mr-12 md:mr-16 lg:mr-18">
  {products.map((product) => (
    <div
      key={product.id}
      className="bg-white border-4 sm:border-6 md:border-8 border-white rounded-xl sm:rounded-2xl w-50 sm:w-52 md:w-64 lg:w-75 p-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
          className="w-50 sm:w-44 md:w-56 lg:w-80 h-32 sm:h-40 md:h-52 lg:h-70 object-cover rounded-t-xl sm:rounded-t-2xl"
        />
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 mt-2 uppercase leading-tight break-words">
          {product.name}
        </h3>

        <button className="w-full h-8 sm:h-10 md:h-12 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 sm:gap-2">
          <span className="text-[10px] sm:text-xs md:text-sm">VIEW PRODUCT</span>
          <span className="text-orange-400 text-[10px] sm:text-xs md:text-sm">
            - ${product.price}
          </span>
        </button>
      </div>
    </div>
  ))}
</div>

      
    </div>
  );
}

export default NewDrops;
