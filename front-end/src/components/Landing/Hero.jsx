import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Welcome to Simple
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Build a simple and elegant website with ease.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get Started
            </a>
            <a
              href="#"
              className="ml-4 px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
