"use client";

import React, { useState } from "react";
import Filter1 from "./Filter1";
import Filter2 from "./Filter2";
import Filter3 from "./Filter3";

const Banner = () => {

    const [activeFilter, setActiveFilter] = useState("filter1");

  const handleFilterClick = (filter : any) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <div
        className="inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/images/dark_bg.png')` }}
      >
        <div className="">
          <div className="container mx-auto max-w-[1140px] py-10 md:py-28 md:px-0">
            <p className='font-medium text-[25px] font-bebas_neue text-center text-black mb-6'>
            CREATE PROFESSIONAL PROJECTS
            </p>
            <p className='font-medium text-[12px] text-center text-black mb-6 uppercase'>
            Travel documentation plays an important role in immortalizing the experiences and learning gained during a trip. Whether it&apos;s a personal trip, tourist trip, or business trip, documenting every step and moment that occurs provides many benefits, both for the individual himself and for other people who can learn from the experience.
            </p>
            <div className="mb-10">
                <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="">
                    <div className="p- md:p-">
                        <div className="bg-transparent p-3 gap-20 md:flex justify-center items-center rounded-md">
                        <div
                            className={` ${
                            activeFilter === "filter1"
                                ? "text-[#000] font-medium border-b-[2px] border-[#000]"
                                : " text-[#9a9a9a] font-medium hover:border-b-[2px] border-[#000]"
                            }`}
                            onClick={() => handleFilterClick("filter1")}
                        >
                            <p className="text-[15px] font-bebas_neue md:text-md">VIDEOGRAPHY</p>
                        </div>
                        <div
                            className={` ${
                            activeFilter === "calender2"
                                ? "text-[#000] font-medium border-b-[2px] border-[#000]"
                                : " text-[#9a9a9a] font-medium hover:border-b-[2px] border-[#000]"
                            }`}
                            onClick={() => handleFilterClick("calender2")}
                        >
                            <p className="text-[15px] font-bebas_neue md:text-md">PROFESSIONAL</p>
                        </div>
                        <div
                            className={` ${
                            activeFilter === "modern"
                                ? "text-[#000] font-medium border-b-[2px] border-[#000]"
                                : " text-[#9a9a9a] font-medium hover:border-b-[2px] border-[#000]"
                            }`}
                            onClick={() => handleFilterClick("modern")}
                        >
                            <p className="text-[15px] font-bebas_neue md:text-md">PHOTOGRAPHY</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="bg-transparent w-full">
                <div className="">
                    {/* Content based on active filter */}
                    {activeFilter === "filter1" && <Filter1 />}
                    {activeFilter === "calender2" && (
                    <div className="">
                        {" "}
                        <Filter2 />{" "}
                    </div>
                    )}
                    {activeFilter === "modern" && (
                    <div className="">
                        {" "}
                        <Filter3 />{" "}
                    </div>
                    )}
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;