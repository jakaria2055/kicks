import React, { useEffect, useRef, useState } from "react";
import {
  LogOut,
  Mars,
  Menu,
  PlusCircle,
  Search,
  User,
  Venus,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const upArrow = "/public/icon/downArrow.png";
const Logo = "/public/image/Logo.png";
const UserIcon = "/public/icon/userIcon.png";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const profileDropDown = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileDropDown.current &&
        !profileDropDown.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* Sidebar (Mobile Admin Menu) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex animate-fadeIn">
          <div className="w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-white text-black p-6 shadow-lg animate-slideLeft">
            <div className="flex justify-between items-center mb-6">
              <h1 className="font-extrabold text-xl md:text-2xl">User Panel</h1>
              <button 
                onClick={() => setMenuOpen(false)}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X />
              </button>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-gray-100 transition-colors duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                <User className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              <div>
                <h2 className="text-base md:text-lg font-semibold">{"User Name"}</h2>
                <p className="text-xs text-blue-500 capitalize">{"User"}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <a className="flex items-center gap-3 p-3 rounded-lg bg-white/10 text-sm md:text-base hover:bg-gray-200 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <PlusCircle className="w-4 h-4 md:w-5 md:h-5" />
                New Drops🔥
              </a>

              <a className="flex items-center gap-3 p-3 rounded-lg bg-white/10 text-sm md:text-base hover:bg-gray-200 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <Mars className="w-4 h-4 md:w-5 md:h-5" />
                Men
              </a>

              <a className="flex items-center gap-3 p-3 rounded-lg bg-white/10 text-sm md:text-base hover:bg-gray-200 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <Venus className="w-4 h-4 md:w-5 md:h-5" />
                Woman
              </a>
            </div>

            <div className="mt-auto pt-10">
              <button className="flex items-center gap-2 text-red-300 text-sm md:text-base hover:text-red-500 hover:scale-105 transition-all duration-300">
                <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                Logout
              </button>
            </div>
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}

      {/* Navbar */}
      <div className="sm:w-125 md:w-175 lg:w-330 w-[90%] h-20 md:h-24 fixed top-4 left-1/2 -translate-x-1/2 bg-white text-black rounded-2xl shadow-lg flex justify-between items-center px-3 md:px-6 lg:px-8 z-40 animate-slideDown">
        {/* Mobile Menu Icon → Only small screen */}
        <div
          className="md:hidden bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-4 h-4 md:w-5 md:h-5" />
        </div>

        {/* Menu Items → Only md & lg */}
        <div className="hidden md:flex items-center gap-4 lg:gap-10">
          <div className="cursor-pointer text-sm lg:text-base hover:text-blue-600 transition-colors duration-300 relative group">
            New Drops🔥
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer text-sm lg:text-base hover:text-blue-600 transition-colors duration-300 group">
            Men
            <img 
              src={upArrow} 
              alt="arrow" 
              className="w-2 h-2 group-hover:translate-y-1 transition-transform duration-300" 
            />
          </div>

          <div className="flex items-center gap-1 cursor-pointer text-sm lg:text-base hover:text-blue-600 transition-colors duration-300 group">
            Women
            <img 
              src={upArrow} 
              alt="arrow" 
              className="w-2 h-2 group-hover:translate-y-1 transition-transform duration-300" 
            />
          </div>
        </div>

        <Link to={"/"} className="hover:scale-105 transition-transform duration-300">
          <img className="w-24 md:w-28 lg:w-32 h-6 md:h-7 lg:h-8" src={Logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 relative">
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6 relative">
            {/* Search → Hidden on small, visible on md+ */}
            <button className="hidden md:flex bg-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full items-center gap-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <Search className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* User → Always visible */}
            <button className="bg-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <img src={UserIcon} alt="User Icon" className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Cart → Always visible */}
            <Link to={"/cart"} className="bg-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105 relative group">
              <div className="bg-yellow-500 rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs lg:text-sm group-hover:scale-110 transition-transform duration-300">
                0
              </div>
              <span className="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            </Link>
          </div>
        </div>
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
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -100%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
        
        .animate-slideLeft {
          animation: slideLeft 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default NavBar;