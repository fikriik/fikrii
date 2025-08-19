"use client";

import React, { useState } from "react";
import Filter1 from "./Filter1";
import Filter2 from "./Filter2";
import Filter3 from "./Filter3";

const Banner = () => {
  const [activeFilter, setActiveFilter] = useState("filter1");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div
      className="w-full bg-[#090909] bg-no-repeat bg-center"
      style={{ backgroundImage: `url('/images/dark_bg.png')` }}
    >
      <div className="container mx-auto max-w-[1140px] py-10 md:py-28 md:px-0">
        {/* Title */}
        <p className="font-medium text-[25px] font-bebas_neue text-center text-white mb-6">
          CREATE PROFESSIONAL PROJECTS
        </p>

        {/* Subtitle */}
        <p className="font-medium text-[12px] text-center text-white mb-6 uppercase">
          Travel documentation plays an important role in immortalizing the
          experiences and learning gained during a trip. Whether it&apos;s a
          personal trip, tourist trip, or business trip, documenting every step
          and moment that occurs provides many benefits, both for the individual
          himself and for other people who can learn from the experience.
        </p>

        {/* Tabs */}
        <div className="mb-10">
          <div className="flex justify-center">
            <div className="flex gap-10 md:gap-20 p-3 rounded-md">
              {/* Tab 1 */}
              <div
                className={`cursor-pointer ${
                  activeFilter === "filter1"
                    ? "text-white font-medium border-b-2 border-white"
                    : "text-gray-400 font-medium hover:border-b-2 hover:border-gray-500"
                }`}
                onClick={() => handleFilterClick("filter1")}
              >
                <p className="text-[15px] font-bebas_neue">VIDEOGRAPHY</p>
              </div>

              {/* Tab 2 */}
              <div
                className={`cursor-pointer ${
                  activeFilter === "calender2"
                    ? "text-white font-medium border-b-2 border-white"
                    : "text-gray-400 font-medium hover:border-b-2 hover:border-gray-500"
                }`}
                onClick={() => handleFilterClick("calender2")}
              >
                <p className="text-[15px] font-bebas_neue">PROFESSIONAL</p>
              </div>

              {/* Tab 3 */}
              <div
                className={`cursor-pointer ${
                  activeFilter === "modern"
                    ? "text-white font-medium border-b-2 border-white"
                    : "text-gray-400 font-medium hover:border-b-2 hover:border-gray-500"
                }`}
                onClick={() => handleFilterClick("modern")}
              >
                <p className="text-[15px] font-bebas_neue">PHOTOGRAPHY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Content */}
        <div className="w-full">
          {activeFilter === "filter1" && <Filter1 />}
          {activeFilter === "calender2" && <Filter2 />}
          {activeFilter === "modern" && <Filter3 />}
        </div>
      </div>
    </div>
  );
};

export default Banner;
