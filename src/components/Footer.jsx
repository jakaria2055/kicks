import React from "react";
import { Facebook, Instagram, Twitter, Music2 } from "lucide-react";

const FOOTERLOGO1 = "/image/footer_logo1.png";
const FOOTERLOGO2 = "/image/footer_logo2.png";
const FACEBOOK = "/icon/facebook.png"
const INSTAGRAM = "/icon/instagram.png"
const TWITTER = "/icon/twitter.png"
const TIKTOK = "/icon/tiktok.png"

const Footer = () => {
  return (
    <section className="px-10 py-10 bg-gray-100">
      <div className="bg-[#4A69E2] rounded-3xl overflow-hidden animate-fadeIn">
        {/* TOP BLUE AREA */}
        <div className="flex justify-between px-12 pt-10 pb-12 text-white">
          <div className="animate-slideRight">
            <h2 className="text-4xl w-125 h-28 font-bold uppercase leading-tight Rubik hover:text-gray-200 transition-colors duration-300">
              Join our KicksPlus <br /> Club & Get 15% Off
            </h2>
            <p className="font-semibold w-88 h-6 text-[#E7E7E3]">
              Sign up for free! Join the community.
            </p>

            {/* INPUT */}
            <div className="flex items-center gap-3 mt-6">
              <input
                type="text"
                placeholder="Email address"
                className="px-5 py-2 h-10 rounded-lg text-white w-72 outline-none border border-white bg-white/10 backdrop-blur-sm focus:bg-white/20 transition-all duration-300 focus:scale-105 placeholder:text-white/70"
              />
              <button className="px-6 py-3 bg-gray-900 rounded-lg text-xs hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-semibold tracking-wide hover:tracking-wider">
                SUBMIT
              </button>
            </div>
          </div>

          {/* LOGO */}
          <div className="flex items-start animate-slideLeft">
            <img 
              src={FOOTERLOGO1} 
              alt="footer logo" 
              className="hover:scale-105 transition-transform duration-300"
            />
            <span className="bg-orange-400 text-[#4A69E2] w-6 h-6 pb-1 rounded-full flex items-center justify-center text-xl font-bold -translate-y-5 hover:text-3xl hover:scale-110 hover:rotate-90 transform transition-all duration-300 cursor-pointer">
              +
            </span>
          </div>
        </div>

        {/* BLACK FOOTER AREA */}
        <div className="bg-gray-900 text-white px-12 py-10 rounded-t-3xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* ABOUT */}
            <div className="group">
              <h3 className="text-orange-400 w-40 h-10 text-3xl font-bold mb-3 Rubik group-hover:scale-105 transition-transform duration-300 origin-left">
                About us
              </h3>
              <p className="text-sm font-semibold text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* CATEGORIES */}
            <div>
              <h3 className="text-orange-400 font-bold mb-3 w-40 h-10 text-3xl hover:scale-105 transition-transform duration-300 origin-left">
                Categories
              </h3>
              <div className="flex flex-col gap-2 text-sm text-gray-300">
                {["Runners", "Sneakers", "Basketball", "Outdoor", "Golf", "Hiking"].map((item, index) => (
                  <span 
                    key={item}
                    className="text-sm font-semibold cursor-pointer hover:text-white hover:translate-x-2 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-orange-400 font-bold mb-3 w-40 h-10 text-3xl hover:scale-105 transition-transform duration-300 origin-left">
                Company
              </h3>
              <div className="flex flex-col gap-2 text-sm text-gray-300">
                {["About", "Contact", "Blogs"].map((item, index) => (
                  <span 
                    key={item}
                    className="text-sm font-semibold cursor-pointer hover:text-white hover:translate-x-2 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="text-orange-400 font-bold mb-3 w-40 h-10 text-3xl hover:scale-105 transition-transform duration-300 origin-left">
                Follow us
              </h3>
              <div className="flex gap-6">
                {[FACEBOOK, INSTAGRAM, TWITTER, TIKTOK].map((icon, index) => (
                  <img 
                    key={index}
                    src={icon} 
                    alt="social icon" 
                    className="w-5 h-5 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BIG BACKGROUND TEXT */}
        <div className="bg-gray-900 relative overflow-hidden">
          <img 
            src={FOOTERLOGO2} 
            alt="footer logo"  
            className="mx-auto w-100 sm:w-315 h-auto sm:h-60 object-contain sm:translate-y-4 -translate-y-0 hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
          />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-gray-500 mt-10">
        <p className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
          © All rights reserved
        </p>
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
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideLeft {
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
        
        .animate-slideLeft {
          animation: slideLeft 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Footer;