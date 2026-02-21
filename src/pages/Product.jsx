import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import SuggestProduct from "../components/SuggestProduct";
import ProductStore from "../store/ProductStore";
import { useParams } from "react-router-dom";

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

const Product = () => {
  const { id } = useParams();
  const { ProductDetails, ProductDetailsRequest } = ProductStore();

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState("");

  // FETCH PRODUCTS DETAILS BY ID
  useEffect(() => {
    (async () => {
      await ProductDetailsRequest(id);
    })();
  }, [id]);

  // Set first image as selected when ProductDetails loads
  useEffect(() => {
    if (ProductDetails?.images?.length > 0) {
      setSelectedImage(ProductDetails.images[0]);
    }
  }, [ProductDetails]);

  // console.log("Product Details: ", ProductDetails);

  // Show loading state if no product details yet
  if (!ProductDetails) {
    return (
      <div className="mt-30 px-6 md:px-16 py-10 bg-gray-100 flex items-center justify-center min-h-screen">
        <p className="text-xl animate-pulse">Loading...</p>
      </div>
    );
  }

  const { title, images = [], price, description } = ProductDetails;

  return (
    <div className="mt-30 px-6 md:px-16 py-10 bg-gray-100">
      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-10 animate-fadeIn">
        {/* ================= IMAGES ================= */}

        <div className="lg:w-4/6">
          {/* LARGE SCREEN GRID */}
          <div className="hidden lg:grid grid-cols-2 gap-5">
            {images.map((img, index) => (
              <div
                key={index}
                className="rounded-2xl cursor-pointer overflow-hidden group"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`${title} - Image ${index + 1}`} 
                  className="w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://placeimg.com/640/480/any';
                  }}
                />
              </div>
            ))}
          </div>

          {/* SMALL SCREEN SLIDER */}
          <div className="lg:hidden">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={selectedImage || images[0]} 
                alt={title} 
                className="w-full rounded-2xl object-cover transition-all duration-500"
                onError={(e) => {
                  e.target.src = 'https://placeimg.com/640/480/any';
                }}
              />
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-3">
              {images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                    selectedImage === img ? "bg-blue-600 scale-125" : "bg-gray-400 hover:scale-110"
                  }`}
                />
              ))}
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${title} thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-xl cursor-pointer border-2 transition-all duration-300 hover:scale-105 ${
                    selectedImage === img
                      ? "border-blue-600 scale-105"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  onError={(e) => {
                    e.target.src = 'https://placeimg.com/640/480/any';
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= DETAILS ================= */}

        <div className="lg:w-2/6 animate-slideRight">
          <span className="bg-blue-600 text-white text-xs px-4 py-3 rounded-md inline-block animate-pulse">
            New Release
          </span>

          <h1 className="text-2xl md:text-3xl font-bold mt-3 uppercase w-96 hover:text-blue-600 transition-colors duration-300">
            {title}
          </h1>

          <p className="text-blue-600 w-24 h-7 text-xl font-bold mt-3 hover:scale-105 transition-transform duration-300">
            ${price}
          </p>

          {/* COLOR */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex gap-3">
              <div
                onClick={() => setSelectedColor("black")}
                className={`w-10 h-10 rounded-full bg-[#1c2b39] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 ${
                  selectedColor == "black" ? "ring-2 ring-offset-3 ring-black scale-110" : ""
                }`}
              />
              <div
                onClick={() => setSelectedColor("white")}
                className={`w-10 h-10 rounded-full bg-[#7d8b7a] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 ${
                  selectedColor == "white" ? "ring-2 ring-offset-3 ring-black scale-110" : ""
                }`}
              />
            </div>
          </div>

          {/* SIZE */}
          <div className="mt-6">
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold">Size</h3>
              <button className="text-sm underline hover:text-blue-600 transition-colors duration-300">
                Size Chart
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    selectedSize === size
                      ? "bg-black text-white scale-105"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-8">
            <button className="flex-1 bg-black text-white h-12 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300">
              ADD TO CART
            </button>

            <button className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all duration-300">
              <Heart className="text-white" size={18} />
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white h-12 rounded-lg font-semibold mt-3 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            BUY IT NOW
          </button>

          {/* DESCRIPTION */}
          <div className="mt-8">
            <h3 className="font-bold uppercase mb-2 hover:text-blue-600 transition-colors duration-300">
              About The Product
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>

            <ul className="text-gray-600 text-sm mt-4 space-y-2 w-76">
              <li className="hover:translate-x-2 transition-transform duration-300">
                • Pay over time in interest-free installments with Affirm,
                Klarna or Afterpay.
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                • Join adiClub to get unlimited free standard shipping, returns,
                & exchanges.
              </li>
            </ul>
          </div>
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
        
        .animate-slideRight {
          animation: slideRight 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Product;