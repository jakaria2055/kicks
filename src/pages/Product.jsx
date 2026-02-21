import React, { useState } from "react";
import { Heart } from "lucide-react";
import SuggestProduct from "../components/SuggestProduct";

const images = [
  "/image/productDetails_img1.png",
  "/image/productDetails_img2.png",
  "/image/productDetails_img3.png",
  "/image/productDetails_img4.png",
];

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState("");


  return (
    <div className="mt-30 px-6 md:px-16 py-10 bg-gray-100">
      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* ================= IMAGES ================= */}

        <div className="lg:w-4/6">
          {/* LARGE SCREEN GRID */}
          <div className="hidden lg:grid grid-cols-2 gap-5">
            {images.map((img) => (
              <div
                key={img}
                className=" rounded-2xl  cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt="details images" className="w-full" />
              </div>
            ))}
          </div>

          {/* SMALL SCREEN SLIDER */}
          <div className="lg:hidden">
            <div className="rounded-2xl">
              <img src={selectedImage} alt="" className="w-full" />
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-3">
              {images.map((img) => (
                <div
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                    selectedImage === img ? "bg-blue-600" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {images.map((img) => (
                <img
                  key={img}
                  src={img}
                  alt="details images"
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-xl cursor-pointer border ${
                    selectedImage === img
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= DETAILS ================= */}

        <div className="lg:w-2/6">
          <span className="bg-blue-600 text-white text-xs px-4 py-3 rounded-md">
            New Release
          </span>

          <h1 className="text-2xl md:text-3xl font-bold mt-3 uppercase w-96">
            Adidas 4DFWD X Parley Running Shoes
          </h1>

          <p className="text-blue-600 w-24 h-7 text-xl font-bold mt-3">$125.00</p>

          {/* COLOR */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex gap-3">
              <div onClick={()=>setSelectedColor("black")} className={`w-10 h-10 rounded-full bg-[#1c2b39] overflow-hidden cursor-pointer ${selectedColor == "black" ? "ring-2 ring-offset-3 ring-black" : ""}`} />
              <div onClick={()=>setSelectedColor("white")} className={`w-10 h-10 rounded-full bg-[#7d8b7a] overflow-hidden cursor-pointer ${selectedColor == "white" ? "ring-2 ring-offset-3 ring-black" : ""}`} />
            </div>
          </div>


          {/* SIZE */}
          <div className="mt-6">
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold">Size</h3>
              <button className="text-sm underline">Size Chart</button>
            </div>

            <div className="grid grid-cols-8 space-y-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium  ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-8">
            <button className="flex-1 bg-black text-white h-12 rounded-lg font-semibold">
              ADD TO CART
            </button>

            <button className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
              <Heart className="text-white" size={18} />
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white h-12 rounded-lg font-semibold mt-3">
            BUY IT NOW
          </button>

          {/* DESCRIPTION */}
          <div className="mt-8">
            <h3 className="font-bold uppercase mb-2">About The Product</h3>

            <p className="text-gray-600 text-sm mb-4">
              Shadow Navy / Army Green
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              This product is excluded from all promotional discounts and
              offers.
            </p>

            <ul className="text-gray-600 text-sm mt-4 space-y-2 w-76">
              <li>• Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
              <li>• Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
            </ul>
          </div>
        </div>
      </div>

      <SuggestProduct />
    </div>
  );
};

export default Product;
