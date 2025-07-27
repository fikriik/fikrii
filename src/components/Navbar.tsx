"use client";

import { useState } from "react";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { usePathname } from "next/navigation";
import clsxm from "@/lib/clsxm";
import { FaAngleDoubleDown } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const scrollPosition = useScrollPosition();
  const pathName = usePathname();

  return (
    <div
      className={clsxm(
        "flex justify-center items-center w-full h-20 px-4 fixed z-50 transition-colors duration-300",
        scrollPosition > 10
          ? "bg-white/30 backdrop-blur-md shadow"
          : "bg-transparent"
      )}
    >
      {/* Konten Navbar */}

      <div className="lg:mx-auto lg:flex lg:justify-between lg:w-[1200px] container mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex gap-x-2 items-center mr-[100px]">
            {/* <Image src="/images/nlp-logo.png" alt="logo" width={50} height={40} /> */}
            <h3 className="font-semibold text-white hidden lg:block text-[24px]">
              hopehospital.
            </h3>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <p className="flex items-center text-[12px] text-[#ffffff] hover:text-black cursor-pointer mr-10">
            PORTFOLIO
          </p>
          <p className="flex items-center text-[12px] text-[#ffffff] hover:text-black cursor-pointer mr-10">
            PROFESSIONAL
          </p>
          <p className="flex items-center text-[12px] text-[#ffffff] hover:text-black cursor-pointer mr-10">
            VIDEOGRAPHY
          </p>
          <p className="flex items-center text-[12px] text-[#ffffff] hover:text-black cursor-pointer">
            CONTACT
          </p>
        </div>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-500 lg:hidden"
      >
        {nav ? (
          <IoMdClose size={26} color="#000" className="mr-4" />
        ) : (
          <HiBars3 size={26} color="#000" className="mr-4" />
        )}
      </div>

      <div
        className={clsxm(
          "block md:hidden absolute top-0 transition-all duration-300 left-[100%] md:left-0 w-[80%] bg-white h-screen transform md:transform-none",
          nav ? "left-[20%]" : ""
        )}
      >
        <div className="pt-16 px-6">
          <Link
            href="#offering"
            className="hover:bg-gray-200 w-full flex items-center justify-center py-2 rounded-lg mt-4"
          >
            <p onClick={() => setNav(!nav)} className="text-center">
              Our Product
            </p>
          </Link>
          <Link
            href="#partner"
            className="hover:bg-gray-200 w-full flex items-center justify-center py-2 rounded-lg mt-4"
          >
            <p onClick={() => setNav(!nav)} className="text-center">
              Our Partner
            </p>
          </Link>
          <div className="border border-1 border-gray-100 w-full my-8"></div>
          <Link href="/" target="_blank" onClick={() => setNav(!nav)}>
            <div className="bg-indigo-700 text-white rounded-2xl w-full py-4 mb-4">
              <p className="font-semibold text-center">Request Demo</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
