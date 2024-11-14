import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const menuRef = useRef(null);

  const handleNav = () => setNav(!nav);

  const menuElements = ["Home", "Analytics", "News Letter", "Cards", "Footer"];

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center h-24 fixed top-0 left-1/2 transform -translate-x-1/2 w-full bg-[#000300] z-10">
        <div className="container flex justify-between items-center h-24 text-white">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
          {/* Desktop Menu */}
          <ul className="hidden md:flex">
            {menuElements.map((item, index) => (
              <li
                key={index}
                className="p-4 cursor-pointer hover:text-primary transition-colors duration-200"
              >
                <Link
                  to={`/${item.toLowerCase().replaceAll(" ", "")}`}
                  className="focus:outline-none"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <button
            onClick={handleNav}
            aria-label={nav ? "Close menu" : "Open menu"}
            className="block md:hidden text-white focus:outline-none transition-transform duration-300"
            style={{ transform: nav ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            {!nav ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
          </button>

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={`${
              !nav ? "left-[-100%]" : "left-0"
            } fixed overflow-auto scrollbar-hide top-0 w-[60%] ease-in-out duration-500 bg-[#000300] h-screen border-r border-r-gray-900 md:hidden`}
          >
            <h1 className="p-5 text-3xl font-bold text-[#00df9a]">REACT.</h1>
            <ul className="pt-4 uppercase">
              {menuElements.map((item, index) => (
                <li
                  key={index}
                  className="p-4 border-b border-gray-600 cursor-pointer hover:text-primary transition-colors duration-200"
                >
                  <Link
                    to={`/${item.toLowerCase().replaceAll(" ", "")}`}
                    className="focus:outline-none"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
