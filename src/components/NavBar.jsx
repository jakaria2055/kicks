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
          <div className="w-[75%] sm:w-[60%] bg-white text-black p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h1 className="font-extrabold text-2xl">User Panel</h1>
              <button onClick={() => setMenuOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                <User />
              </div>

              <div>
                <h2 className="text-lg font-semibold">{"User Name"}</h2>
                <p className="text-xs text-blue-500 capitalize">{"User"}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <a className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                <PlusCircle className="w-5 h-5" />
                New Drops🔥
              </a>

              <a className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                <Mars className="w-5 h-5" />
                Men
              </a>

              <a className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                <Venus className="w-5 h-5" />
                Woman
              </a>
            </div>

            <div className="mt-auto pt-10">
              <button className="flex items-center gap-2 text-red-300">
                <LogOut className="w-5 h-5" />
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
      <div className="sm:w-330 w-[358px] h-24 fixed top-4 left-1/2 -translate-x-1/2 bg-white text-black rounded-2xl shadow-lg flex justify-between items-center px-4 md:px-8 z-40">
        {/* Mobile Menu Icon → Only small screen */}
        <div
          className="md:hidden bg-white rounded-full w-10 h-10 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </div>

        {/* Menu Items → Only md & lg */}
        <div className="hidden md:flex items-center gap-10">
          <div className="cursor-pointer">New Drops🔥</div>

          <div className="flex items-center gap-1 cursor-pointer">
            Men
            <img src={upArrow} alt="arrow" className="w-2 h-2" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            Women
            <img src={upArrow} alt="arrow" className="w-2 h-2" />
          </div>
        </div>

        <div>
          <img className="w-32 h-8" src={Logo} alt="logo" />
        </div>

        <div className="flex items-center gap-3 md:gap-6 relative">
          <div className="flex items-center gap-3 md:gap-6 relative">
            {/* Search → Hidden on small, visible on md+ */}
            <button className="hidden md:flex bg-white px-4 py-2 rounded-full items-center gap-2">
              <Search className="w-6 h-6" />
            </button>

            {/* User → Always visible */}
            <button className="bg-white px-4 py-2 rounded-full flex items-center gap-2">
              <img src={UserIcon} alt="User Icon" className="w-6 h-6" />
            </button>

            {/* Cart → Always visible */}
            <button className="bg-white px-4 py-2 rounded-full flex items-center gap-2">
              <div className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                0
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
