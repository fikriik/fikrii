import React from 'react'
import Image from 'next/image'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Filter3 = () => {
  return (
    <div className='mt-10'>
        <div className='grid grid-cols-2 gap-5'>
            <div className='p-7 bg-white border hover:shadow-md rounded-lg'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='w-full col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-center sm:justify-self-center justify-center hidden sm:block'>
                        <div className='flex items-center'>
                            <Image 
                                src="/images/graduation.jpg" 
                                alt='Rental Cars' 
                                width={200} 
                                height={200} 
                                className='rounded-md square-image'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='col-span-3 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-start sm:justify-self-center w-full'>
                        <p className='text-black text-[28px] font-bebas_neue'>
                            GRADUATION
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                        Capture special moments of graduation and have fun with us and be ready to welcome the future.
                        </p>
                        <div className='flex items-center gap-2 mt-4'>
                            <p className='text-[14px] font-semibold  text-[#000]'> Read More </p> 
                            <MdKeyboardDoubleArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-7 bg-white border hover:shadow-md rounded-lg'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='w-full col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-center sm:justify-self-center justify-center hidden sm:block'>
                        <div className='flex items-center'>
                            <Image 
                                src="/images/wedding.jpg" 
                                alt='Rental Cars' 
                                width={200} 
                                height={200} 
                                className='rounded-md square-image border'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='col-span-3 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-start sm:justify-self-center w-full'>
                        <p className='text-black text-[28px] font-bebas_neue'>
                            WEDDING
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                        Capture happy moments with your partner and give memories of the first time you fell in love with someone.
                        </p>
                        <div className='flex items-center gap-2 mt-4'>
                            <p className='text-[14px] font-semibold  text-[#000]'> Read More </p> 
                            <MdKeyboardDoubleArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-7 bg-white border hover:shadow-md rounded-lg'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='w-full col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-center sm:justify-self-center justify-center hidden sm:block'>
                        <div className='flex items-center'>
                            <Image 
                                src="/images/bromen.JPG" 
                                alt='Rental Cars' 
                                width={200} 
                                height={200} 
                                className='rounded-md square-image'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='col-span-3 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-start sm:justify-self-center w-full'>
                        <p className='text-black text-[28px] font-bebas_neue'>
                        PRODUCT
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                        Take photos professionally so that the brand is more confident to compete in the international market.
                        </p>
                        <div className='flex items-center gap-2 mt-4'>
                            <p className='text-[14px] font-semibold  text-[#000]'> Read More </p> 
                            <MdKeyboardDoubleArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-7 bg-white border hover:shadow-md rounded-lg'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='w-full col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-center sm:justify-self-center justify-center hidden sm:block'>
                        <div className='flex items-center'>
                            <Image 
                                src="/images/lanscape.jpg" 
                                alt='Rental Cars' 
                                width={200} 
                                height={200} 
                                className='rounded-md square-image'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='col-span-3 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-start sm:justify-self-center w-full'>
                        <p className='text-black text-[28px] font-bebas_neue'>
                        LENDSCAPE
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                        Landscape photos are photos taken with a horizontal orientation or extending to the side.
                        </p>
                        <div className='flex items-center gap-2 mt-4'>
                            <p className='text-[14px] font-semibold  text-[#000]'> Read More </p> 
                            <MdKeyboardDoubleArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter3