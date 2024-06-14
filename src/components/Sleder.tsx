import React from "react";

const MarqueeWithImages = () => {
  return (
    <div className="bg-transparent border-t-2 border-b-2 border-[#f7f7f7] text-gray-800 p-4">
      <div className="marquee-container">
        <div className="marquee-images">
          <img
            src="/images/image1.png"
            alt="Image 1"
            className="w-30 h-14 transition-all duration-300 ease-in-out transform hover:scale-105 grayscale hover:grayscale-0"
          />
          <img
            src="/images/image2.png"
            alt="Image 2"
            className="w-30 h-14 transition-all duration-200 ease-in-out transform hover:scale-105 grayscale hover:grayscale-0"
          />
          <img
            src="/images/image3.png"
            alt="Image 3"
            className="w-30 h-14 transition-all duration-300 ease-in-out transform hover:scale-105 grayscale hover:grayscale-0"
          />
          <img
            src="/images/image4.png"
            alt="Image 4"
            className="w-30 h-14 transition-all duration-300 ease-in-out transform hover:scale-105 grayscale hover:grayscale-0"
          />
          <img
            src="/images/image5.png"
            alt="Image 5"
            className="w-30 h-14 transition-all duration-300 ease-in-out transform hover:scale-105 grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
};

export default MarqueeWithImages;