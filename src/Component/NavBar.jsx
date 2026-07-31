import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/" className="text-3xl font-extrabold">
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              DevUI
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 font-medium text-gray-700 md:flex">
            <li>
              <a
                href="#"
                className="relative transition duration-300 hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative transition duration-300 hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Components
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative transition duration-300 hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative transition duration-300 hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Button */}
          <div className="hidden md:block">
            <button className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-2.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg
              className="h-7 w-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
