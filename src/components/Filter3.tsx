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
                                src="/images/image3.png" 
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
                            EIGER
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                        A geographic explorer focuses on discovering and mapping unknown areas. mountains, deserts, or polar regions.
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
                                src="/images/DJI.jpg" 
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
                            DJI
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                        Mountains have always been a symbol of challenge and adventure for many people. dventure and appreciation for nature.
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
                                src="/images/image5.png" 
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
                        SKINCARE
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                        The sky has always been a source of inspiration and awe for mankind since ancient times. science.
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
                                src="/images/canon.jpg" 
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
                        CANON
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                        Waterfalls are one of the most stunning and awe-inspiring natural wonders in the world.
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