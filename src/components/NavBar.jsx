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
        <div className="fixed inset-0 z-50 flex">
          <div className="w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-white text-black p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h1 className="font-extrabold text-xl md:text-2xl">User Panel</h1>
              <button onClick={() => setMenuOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                <User className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              <div>
                <h2 className="text-base md:text-lg font-semibold">{"User Name"}</h2>
                <p className="text-xs text-blue-500 capitalize">{"User"}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <a className="flex items-center gap-3 p-3 rounded-lg bg-white/10 text-sm md:text-base">
                <PlusCircle className="w-4 h-4 md:w-5 md:h-5" />
                New Drops🔥
              </a>

              <a className="flex items-center gap-3 p-3 rounded-lg bg-white/10 text-sm md:text-base">
                <Mars className="w-4 h-4 md:w-5 md:h-5" />
                Men
              </a>

              <a className="flex items-center gap-3 p-3 rounded-lg bg-white/10 text-sm md:text-base">
                <Venus className="w-4 h-4 md:w-5 md:h-5" />
                Woman
              </a>
            </div>

            <div className="mt-auto pt-10">
              <button className="flex items-center gap-2 text-red-300 text-sm md:text-base">
                <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                Logout
              </button>
            </div>
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}

      {/* Navbar */}
      <div className="sm:w-125 md:w-175 lg:w-330 w-[90%] h-20 md:h-24 fixed top-4 left-1/2 -translate-x-1/2 bg-white text-black rounded-2xl shadow-lg flex justify-between items-center px-3 md:px-6 lg:px-8 z-40">
        {/* Mobile Menu Icon → Only small screen */}
        <div
          className="md:hidden bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-4 h-4 md:w-5 md:h-5" />
        </div>

        {/* Menu Items → Only md & lg */}
        <div className="hidden md:flex items-center gap-4 lg:gap-10">
          <div className="cursor-pointer text-sm lg:text-base">New Drops🔥</div>

          <div className="flex items-center gap-1 cursor-pointer text-sm lg:text-base">
            Men
            <img src={upArrow} alt="arrow" className="w-2 h-2" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer text-sm lg:text-base">
            Women
            <img src={upArrow} alt="arrow" className="w-2 h-2" />
          </div>
        </div>

        <Link to={"/"}>
          <img className="w-24 md:w-28 lg:w-32 h-6 md:h-7 lg:h-8" src={Logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 relative">
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6 relative">
            {/* Search → Hidden on small, visible on md+ */}
            <button className="hidden md:flex bg-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full items-center gap-2">
              <Search className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* User → Always visible */}
            <button className="bg-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full flex items-center gap-2">
              <img src={UserIcon} alt="User Icon" className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Cart → Always visible */}
            <Link to={"/cart"} className="bg-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full flex items-center gap-2">
              <div className="bg-yellow-500 rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs lg:text-sm">
                0
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;