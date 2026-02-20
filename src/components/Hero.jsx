import React from "react";

const HeroIMG1 = "/image/hero_img1.png";
const HeroIMG2 = "/image/hero_img2.png";
const HeroIMG3 = "/image/hero_img3.png";

function Hero() {
  return (
    <div className="mt-36 pl-14">
      <div className="flex items-center justify-center gap-1.5">
        <h1 className="sm:text-9xl text-7xl font-extrabold">DO IT</h1>
        <span className="sm:text-9xl text-7xl font-extrabold text-blue-500">
          RIGHT
        </span>
      </div>

     <div className="mt-10 relative w-330 h-auto sm:h-187 ml-7 sm:w-[500px] md:w-[700px] lg:w-330">
        {/* HERO IMAGE */}
        <img
          src={HeroIMG1}
          alt="hero"
          className="sm:w-330 sm:h-187.5 w-150 sm:pr-0 pr-40 object-cover rounded-3xl"
        />

        {/* LEFT BADGE */}
        <div className="absolute left-4 top-40 xs:left-4 xs:top-50 sm:left-8.5 sm:top-76 md:left-8.5 md:top-76 lg:left-8.5 lg:top-76">
          <div className="bg-black sm:w-59.5 sm:h-16.75 w-35 h-8 flex items-center justify-center rounded-b-2xl rotate-[-90deg] origin-left">
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg">
              Nike Product of The Year
            </p>
          </div>
        </div>

        {/* RIGHT THUMBNAILS */}
        <div className="top-1/5 -translate-y-45 translate-x-85  sm:-translate-y-90 sm:translate-x-5/6 flex flex-col gap-2 sm:gap-4">
          <img
            src={HeroIMG2}
            alt="hero2"
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-xl object-cover"
          />
          <img
            src={HeroIMG3}
            alt="hero3"
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-xl object-cover"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="absolute left-10 bottom-3/6 sm:left-8 sm:bottom-6 md:left-12 md:bottom-8 lg:left-16 lg:bottom-10 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            NIKE AIR MAX
          </h2>

          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl mt-1 sm:mt-1.5 md:mt-2">
            Nike introducing the new air max for <br /> everyone's comfort
          </h4>

          <button className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 px-4 sm:px-5 md:px-6 lg:px-8 py-1 sm:py-1.5 md:py-2 bg-blue-500 rounded-md w-24 sm:w-28 md:w-32 lg:w-38 text-xs sm:text-sm md:text-base">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
