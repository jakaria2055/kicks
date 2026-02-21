import React from "react";
import { Star } from "lucide-react";

const REVIEWIMG1 = "/image/review_img1.png";
const REVIEWIMG2 = "/image/review_img2.png";
const REVIEWIMG3 = "/image/review_img3.png";
const REVIEWER1 = "/image/reviewr1.png";
const REVIEWER2 = "/image/reviewr2.png";
const REVIEWER3 = "/image/reviewr3.png";
const REVIEWER4 = "/image/reviewr1.png";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Good Quality",
      text: "I highly recommend shopping from kicks",
      rating: 5.0,
      avatar: REVIEWER1,
      image: REVIEWIMG1,
    },
    {
      id: 2,
      name: "Good Quality",
      text: "I highly recommend shopping from kicks",
      rating: 5.0,
      avatar: REVIEWER2,
      image: REVIEWIMG2,
    },
    {
      id: 3,
      name: "Good Quality",
      text: "I highly recommend shopping from kicks",
      rating: 5.0,
      avatar: REVIEWER3,
      image: REVIEWIMG3,
    },
  ];

  return (
    <section className="px-16 py-14 bg-gray-100">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10 animate-slideDown">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold uppercase w-auto lg:w-147 h-auto lg:h-17 Rubik">
          Reviews
        </h2>

        <button className="px-4 sm:px-6 lg:px-8 py-1 sm:py-1.5 lg:py-2 bg-blue-600 text-white rounded-md text-xs sm:text-sm lg:text-sm hover:bg-blue-700 hover:scale-105 transform transition-all duration-300">
          SEE ALL
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className="bg-white w-full rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-slideUp"
            style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
          >
            {/* TOP CONTENT */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-lg hover:text-blue-600 transition-colors duration-300">
                    {review.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{review.text}</p>
                </div>

                <img
                  src={review.avatar}
                  alt="reviewer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-transparent hover:border-blue-600 transition-all duration-300 hover:scale-110"
                />
              </div>

              {/* RATING */}
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-orange-400 text-orange-400 hover:scale-110 transition-transform duration-200"
                  />
                ))}
                <span className="text-sm font-medium ml-2">
                  {review.rating}
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <div className="bg-gray-200 overflow-hidden">
              <img
                src={review.image}
                alt="product"
                className="w-107 h-48 sm:h-64 md:h-72 lg:h-81 object-cover rounded-b-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
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
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Reviews;