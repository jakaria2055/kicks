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
      <div className="bg-[#4A69E2] rounded-3xl overflow-hidden">
        {/* TOP BLUE AREA */}
        <div className="flex justify-between px-12 pt-10 pb-12 text-white">
          <div>
            <h2 className="text-4xl w-125 h-28 font-bold uppercase leading-tight Rubik">
              Join our KicksPlus <br /> Club & Get 15% Off
            </h2>
            <p className="font-semibold w-88 h-6  text-[#E7E7E3]">
              Sign up for free! Join the community.
            </p>

            {/* INPUT */}
            <div className="flex items-center gap-3 mt-6">
              <input
                type="text"
                placeholder="Email address"
                className="px-5 py-2 h-10 rounded-lg text-white w-72 outline-none border border-white"
              />
              <button className="px-6 py-3 bg-gray-900 rounded-lg text-xs">
                SUBMIT
              </button>
            </div>
          </div>

          {/* LOGO */}
          <div className="flex items-start">
            <img src={FOOTERLOGO1} alt="footer logo" />
            <span className="bg-orange-400 text-[#4A69E2] w-6 h-6 pb-1 rounded-full flex items-center justify-center text-xl font-bold -translate-y-5 hover:text-3xl transform duration-300">
              +
            </span>
          </div>
        </div>

        {/* BLACK FOOTER AREA */}
        <div className="bg-gray-900 text-white px-12 py-10 rounded-t-3xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* ABOUT */}
            <div>
              <h3 className="text-orange-400 w-40 h-10 text-3xl font-bold mb-3 Rubik">About us</h3>
              <p className="text-sm font-semibold text-gray-300 leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* CATEGORIES */}
            <div>
              <h3 className="text-orange-400 font-bold mb-3 w-40 h-10 text-3xl">Categories</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-300">
                <span className="text-sm font-semibold">Runners</span>
                <span className="text-sm font-semibold">Sneakers</span>
                <span className="text-sm font-semibold">Basketball</span>
                <span className="text-sm font-semibold">Outdoor</span>
                <span className="text-sm font-semibold">Golf</span>
                <span className="text-sm font-semibold">Hiking</span>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-orange-400 font-bold mb-3 w-40 h-10 text-3xl">Company</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-300">
                <span className="text-sm font-semibold">About</span>
                <span className="text-sm font-semibold">Contact</span>
                <span className="text-sm font-semibold">Blogs</span>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="text-orange-400 font-bold mb-3 w-40 h-10 text-3xl">Follow us</h3>
              <div className="flex gap-6">
                <img src={FACEBOOK} alt="facebook" className="w-5 h-5"/>
                <img src={INSTAGRAM} alt="instagram" className="w-5 h-5"/>
                <img src={TWITTER} alt="twitter" className="w-5 h-5"/>
                <img src={TIKTOK} alt="tiktok" className="w-5 h-5"/>
              </div>
            </div>
          </div>
        </div>

        {/* BIG BACKGROUND TEXT */}
        <div className="bg-gray-900 relative">
          <img src={FOOTERLOGO2} alt="footer logo"  className="mx-auto w-100 sm:w-315 h-auto sm:h-60 object-contain sm:translate-y-4 -translate-y-0"  />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-gray-500 mt-10">
        <p className="text-gray-700">© All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
