import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-semibold text-gray-800">
              Simple
            </a>
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Services
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-100 p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
