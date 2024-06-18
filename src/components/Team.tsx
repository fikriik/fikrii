import React from "react";
import { PiCaretRightBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";

function Team() {
  return (
    <>
      <p className=" font-bold text-center text-3xl mb-2 text-[#3c3c3c]">
        Meet The Team
      </p>
      <p className="font-normal text-center text-md mb-14 text-[#3c3c3c] px-2">
        Here are our dedicated team, ready to create with you!
      </p>

      <div className="grid grid-cols-5 gap-2 mt-10 mx-5 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-5 sm:mx-5">
        <div className="col-span-5 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-4">
          <div className="hover:bg-white border-[#EEEEEE] rounded-xl px-7 py-8">
            <div className="col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 flex items-center">
              {/* Gambar di sini */}
              <Image
                src="/images/fikrii.jpeg"
                alt="profil"
                width={140}
                height={100} // Lebih responsif untuk perangkat seluler
                className="rounded-[70px] mb-4 ml-auto mr-auto border-[4px] border-[#368AB2]"
              />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-center text-lg font-semibold text-[#3c3c3c] flex items-center mb-2">
                M. Aldi Nur Fikry
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-[#545454] text-sm font-normal flex items-center mb-6">
                Videographer
              </p>
            </div>

            <div className="mb-0 flex items-center justify-center">
              <Link
                href="/aufal-marom"
                target="_blank"
                className="flex items-center text-md bg-transparent border-[2px] rounded-[28px] text-[#368AB2] py-2 px-6"
              >
                <span className="text-sm rounded-2xl font-semibold mr-3 text-white py-1 px-1 bg-[#368AB2]">
                <RiInstagramFill size={20} />
                </span>
                Lihat Profil 
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-5 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-4">
          <div className="hover:bg-white border-[#EEEEEE] rounded-xl px-7 py-8">
            <div className="col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 flex items-center">
              {/* Gambar di sini */}
              <Image
                src="/images/LUTPI.jpg"
                alt="profil"
                width={140}
                height={100} // Lebih responsif untuk perangkat seluler
                className="rounded-[70px] mb-4 ml-auto mr-auto border-[4px] border-[#368AB2]"
              />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-center text-lg font-semibold text-[#3c3c3c] flex items-center mb-2">
                AHMAD LUTHFI
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-[#545454] text-sm font-normal flex items-center mb-6">
                Videographer
              </p>
            </div>

            <div className="mb-0 flex items-center justify-center">
              <Link
                href="/aufal-marom"
                target="_blank"
                className="flex items-center text-md bg-transparent border-[2px] rounded-[28px] text-[#368AB2] py-2 px-6"
              >
                <span className="text-sm rounded-2xl font-semibold mr-3 text-white py-1 px-1 bg-[#368AB2]">
                <RiInstagramFill size={20} />
                </span>
                Lihat Profil 
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-5 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-4">
          <div className="hover:bg-white border-[#EEEEEE] rounded-xl px-7 py-8">
            <div className="col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 flex items-center">
              {/* Gambar di sini */}
              <Image
                src="/images/AIZUL.jpg"
                alt="profil"
                width={140}
                height={100} // Lebih responsif untuk perangkat seluler
                className="rounded-[70px] mb-4 ml-auto mr-auto border-[4px] border-[#368AB2]"
              />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-center text-lg font-semibold text-[#3c3c3c] flex items-center mb-2">
               AIZUL MAHASIN
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-[#545454] text-sm font-normal flex items-center mb-6">
                Photographer
              </p>
            </div>

            <div className="mb-0 flex items-center justify-center">
              <Link
                href="/aufal-marom"
                target="_blank"
                className="flex items-center text-md bg-transparent border-[2px] rounded-[28px] text-[#368AB2] py-2 px-6"
              >
                <span className="text-sm rounded-2xl font-semibold mr-3 text-white py-1 px-1 bg-[#368AB2]">
                <RiInstagramFill size={20} />
                </span>
                Lihat Profil 
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-5 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-4">
          <div className="hover:bg-white border-[#EEEEEE] rounded-xl px-7 py-8">
            <div className="col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 flex items-center">
              {/* Gambar di sini */}
              <Image
                src="/images/aji.jpg"
                alt="profil"
                width={140}
                height={100} // Lebih responsif untuk perangkat seluler
                className="rounded-[70px] mb-4 ml-auto mr-auto border-[4px] border-[#368AB2]"
              />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-center text-lg font-semibold text-[#3c3c3c] flex items-center mb-2">
               SURYA AJI
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-[#545454] text-sm font-normal flex items-center mb-6">
                Photography
              </p>
            </div>

            <div className="mb-0 flex items-center justify-center">
              <Link
                href="/aufal-marom"
                target="_blank"
                className="flex items-center text-md bg-transparent border-[2px] rounded-[28px] text-[#368AB2] py-2 px-6"
              >
                <span className="text-sm rounded-2xl font-semibold mr-3 text-white py-1 px-1 bg-[#368AB2]">
                <RiInstagramFill size={20} />
                </span>
                Lihat Profil 
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-5 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-4">
          <div className="hover:bg-white border-[#EEEEEE] rounded-xl px-7 py-8">
            <div className="col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 flex items-center">
              {/* Gambar di sini */}
              <Image
                src="/images/ninok.jpg"
                alt="profil"
                width={140}
                height={100} // Lebih responsif untuk perangkat seluler
                className="rounded-[70px] mb-4 ml-auto mr-auto border-[4px] border-[#368AB2]"
              />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-center text-lg font-semibold text-[#3c3c3c] flex items-center mb-2">
                NIKMATUL LAILIYAH
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-[#545454] text-sm font-normal flex items-center mb-6">
                Videographer
              </p>
            </div>

            <div className="mb-0 flex items-center justify-center">
              <Link
                href="/aufal-marom"
                target="_blank"
                className="flex items-center text-md bg-transparent border-[2px] rounded-[28px] text-[#368AB2] py-2 px-6"
              >
                <span className="text-sm rounded-2xl font-semibold mr-3 text-white py-1 px-1 bg-[#368AB2]">
                <RiInstagramFill size={20} />
                </span>
                Lihat Profil 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;