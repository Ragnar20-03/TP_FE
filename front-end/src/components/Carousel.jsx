import React, { useEffect, useState, useRef } from "react";

const Carousel = ({ slides, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(handleNext, autoPlayInterval);

    return () => clearInterval(slideInterval);
  }, [autoPlayInterval]);

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        ref={slideRef}
        style={{ width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center"
            style={{ flexBasis: `${100 / slides.length}%` }}
          >
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full shadow"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full shadow"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
