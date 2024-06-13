"use client"

import { useState } from "react"
import Link from "next/link"
import { HiBars3 } from "react-icons/hi2"
import { IoMdClose } from "react-icons/io"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { usePathname } from "next/navigation"
import clsxm from "@/lib/clsxm"
import { FaAngleDoubleDown } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const scrollPosition = useScrollPosition()
  const pathName = usePathname()

  return (
    <div
      className={clsxm(
        "bg-transparent flex justify-center items-center w-full h-20 px-4 bg-none fixed z-50 transparation-shadow transition-colors",
        scrollPosition > 10
          ? "bg-white backdrop-filter shadow"
          : ""
      )}
    >
      <div className="lg:mx-auto lg:flex lg:justify-between lg:w-[1200px] container mx-auto max-w-[1200px]">
        <div className="flex items-center">
        <Link href={"/"} className="flex gap-x-2 items-center mr-[100px]">
          {/* <Image src="/images/nlp-logo.png" alt="logo" width={50} height={40} /> */}
          <h3 className="font-semibold text-black hidden lg:block">pakfikrii</h3>
        </Link>
        <ul className="hidden lg:flex lg:items-center lg:gap-x-8 text-black mr-10">
          <div className="col-span-1 justify-self-left relative group">
          <p className="flex items-center text-[14px] text-[#5d7287] hover:text-black cursor-pointer">
            PROJECT <FaAngleDoubleDown size={15} className="ml-2" />
          </p>
          <ul className="px-4 py-4 hidden absolute space-y-2 bg-white shadow rounded-lg group-hover:block min-w-[220px] top-full">
            {/* Tambahkan pilihan menu di sini */}
            <div className="grid grid-cols-1 gap-0">
              <li className="text-black hover:bg-[#F6FAFF] font-normal hover:rounded-xl py-2 px-4">
                <Link href="/" >
                  <div className="flex items-center gap-3">
                  <div>
                    <p className="text-[14px] font-semibold">
                     CANON EOS R8
                    </p>
                  </div>
                  </div>
                </Link>
              </li>

              <li className="text-black hover:bg-[#F6FAFF] font-normal hover:rounded-xl py-2 px-4">
                <Link href="/" >
                  <div className="flex items-center gap-3">
                  <div>
                    <p className="text-[14px] font-semibold">
                      PUNCAK PANGGANG
                    </p>
                  </div>
                  </div>
                </Link>
              </li>

              <li className="text-black hover:bg-[#F6FAFF] font-normal hover:rounded-xl py-2 px-4">
                <Link href="/" >
                  <div className="flex items-center gap-3">
                  <div>
                    <p className="text-[14px] font-semibold">
                      BROMEN
                    </p>
                  </div>
                  </div>
                </Link>
              </li>

              <li className="text-black hover:bg-[#F6FAFF] font-normal hover:rounded-xl py-2 px-4">
                <Link href="/" >
                  <div className="flex items-center gap-3">
                  <div>
                    <p className="text-[14px] font-semibold">
                     TRYPOD BEIKE
                    </p>
                  </div>
                  </div>
                </Link>
              </li>
            </div>
          </ul>
        </div>
        </ul>
          <p className="flex items-center text-[14px] text-[#5d7287] hover:text-black cursor-pointer mr-10">
            CONTACT
          </p>
          <p className="flex items-center text-[14px] text-[#5d7287] hover:text-black cursor-pointer mr-10">
            CAREER
          </p>
          <p className="flex items-center text-[14px] text-[#5d7287] hover:text-black cursor-pointer">
            ARTICLE
          </p>
        </div>

        <ul className="hidden lg:flex lg:items-center lg:gap-x-8 text-black">
          <button className="hover:bg-black bg-[#1e3650] text-white font-medium text-[14px] font-roboto px-6 py-2 md:px-4 rounded-md">
              Sign In / Register
          </button>
        </ul>
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
          <Link
            href="/"
            target="_blank"
            onClick={() => setNav(!nav)}
          >
            <div className="bg-indigo-700 text-white rounded-2xl w-full py-4 mb-4">
              <p className="font-semibold text-center">Request Demo</p>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar