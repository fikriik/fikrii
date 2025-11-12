import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div
        className="inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/images/pp.svg')` }}
      >
        <div className="bg-opacity-70 w-full h-full">
          <div className="container mx-auto max-w-[1140px] py-10 md:py-28 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 md:mt-28">
              <div className="mt-0 md:mt-0">
                <p className="text-[36px] font-medium- italic font-dancing_script mb-5 text-[#52ad89]">
                  Good Morning
                </p>
                <h1 className="text-white text-3xl md:text-[50px] font-semibold leading-tight">
                    {`I’m Fikrii, Videographer, Social Media Specialist, and WebDev.`}
                </h1>
                <p className="mt-8 text-white text-[20px]">
                 A storyteller behind the lens, a strategist behind social media, and a builder behind the website.
                </p>
                <div className="flex gap-x-4 md:gap-x-4 items-center mt-10">
                  <button className="hover:bg-[#20493a71] border-2 border-[#132b22] text-[#52ad89] font-medium px-6 py-3 md:px-12 rounded-full">
                    Hire Me
                  </button>
                </div>
              </div>
              <div className="mt-[-100px] hidden md:flex md:col-span-1 xl:flex lg:flex justify-end items-center">
                <div className="">
                  <div className="relative">
                    <Image
                      src="/images/gambar1.jpg"
                      alt="profil"
                      width={400}
                      height={400}
                      className="border-2 border-[#1a1a1a] rounded-tl-[50px]"
                    />
                    {/*
                    <Image
                      src="/images/imagee.JPG"
                      width={350}
                      height={150}
                      alt="mail"
                      className="border-2 border-[#1a1a1a] absolute bottom-0 -left-[8%] lg:w-60 lg:-left-[30%] top-[63%] rounded-tr-[50px]"
                    />
                    */}
                  </div>
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
