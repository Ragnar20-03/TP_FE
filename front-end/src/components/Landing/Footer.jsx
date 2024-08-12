import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Blog
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Pricing
            </a>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.04c-5.49 0-9.96 4.47-9.96 9.96 0 4.99 3.66 9.1 8.43 9.86v-6.99H8.77v-2.72h2.7v-2.07c0-2.67 1.63-4.13 4.01-4.13 1.13 0 2.1.08 2.38.12v2.77h-1.64c-1.29 0-1.55.61-1.55 1.51v1.98h3.1l-.4 2.72h-2.7V21.9c4.77-.77 8.43-4.87 8.43-9.86 0-5.49-4.47-9.96-9.96-9.96z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 19c-1.66 0-3.21-.5-4.5-1.38.25 0 .5.03.75.03 1.37 0 2.63-.47 3.63-1.28-.97-.02-1.8-.66-2.08-1.53.14.02.27.03.41.03.2 0 .4-.02.59-.06C6.1 13.64 5.1 12.16 5.1 10.46v-.03c.34.19.73.31 1.14.33-.67-.44-1.11-1.19-1.11-2.04 0-.45.12-.86.32-1.21a4.632 4.632 0 003.29 1.67c-.04-.18-.06-.37-.06-.56 0-1.35 1.09-2.44 2.44-2.44.7 0 1.34.3 1.78.78a4.839 4.839 0 001.55-.59 2.44 2.44 0 01-1.07 1.35c.46-.05.89-.18 1.3-.36a5.3 5.3 0 01-1.2 1.24c.02.2.03.4.03.6 0 1.37-.47 2.63-1.28 3.63a6.11 6.11 0 01-4.63 2.08c-.3 0-.6-.02-.9-.06A8.577 8.577 0 008 19z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2024 Simple, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
