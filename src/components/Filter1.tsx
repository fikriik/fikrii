import React from 'react'
import Image from 'next/image'

const Filter1 = () => {
  return (
    <div className='mt-10'>
        <div className='grid grid-cols-2 gap-5'>
            <div className='p-7 bg-black rounded-lg'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='w-full col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-center sm:justify-self-center justify-center hidden sm:block'>
                        <div className='flex items-center'>
                            <Image 
                                src="/images/dish_06.png" 
                                alt='Rental Cars' 
                                width={200} 
                                height={200} 
                                className='rounded-md square-image'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='col-span-3 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-start sm:justify-self-center w-full'>
                        <p className='text-white text-[28px] font-bebas_neue'>
                            EXPLORER
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                            Tomatoes Beef, Eggs, poached Beef, Eggs, poached, with bacon, Bacon, chorizo, roasted roma
                        </p>
                        <p className='text-[28px] text-[#fd7f28] font-bebas_neue'>
                            Rp.100.000
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-7 bg-black rounded-lg'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='w-full col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-center sm:justify-self-center justify-center hidden sm:block'>
                        <div className='flex items-center'>
                            <Image 
                                src="/images/dish_07.png" 
                                alt='Rental Cars' 
                                width={200} 
                                height={200} 
                                className='rounded-md square-image'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='col-span-3 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-start sm:justify-self-center w-full'>
                        <p className='text-white text-[28px] font-bebas_neue'>
                            Tommy’s Margarita
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                            Tomatoes Beef, Eggs, poached Beef, Eggs, poached, with bacon, Bacon, chorizo, roasted roma
                        </p>
                        <p className='text-[28px] text-[#fd7f28] font-bebas_neue'>
                            Rp.100.000
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-7 bg-black rounded-lg'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='w-full col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-center sm:justify-self-center justify-center hidden sm:block'>
                        <div className='flex items-center'>
                            <Image 
                                src="/images/dish_08.png" 
                                alt='Rental Cars' 
                                width={200} 
                                height={200} 
                                className='rounded-md square-image'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='col-span-3 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-start sm:justify-self-center w-full'>
                        <p className='text-white text-[28px] font-bebas_neue'>
                            Tommy’s Margarita
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                            Tomatoes Beef, Eggs, poached Beef, Eggs, poached, with bacon, Bacon, chorizo, roasted roma
                        </p>
                        <p className='text-[28px] text-[#fd7f28] font-bebas_neue'>
                            Rp.100.000
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-7 bg-black rounded-lg'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='w-full col-span-3 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-center sm:justify-self-center justify-center hidden sm:block'>
                        <div className='flex items-center'>
                            <Image 
                                src="/images/dish_06.png" 
                                alt='Rental Cars' 
                                width={200} 
                                height={200} 
                                className='rounded-md square-image'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='col-span-3 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 justify-self-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-self-start sm:justify-self-center w-full'>
                        <p className='text-white text-[28px] font-bebas_neue'>
                            Tommy’s Margarita
                        </p>
                        <p className='text-[16px] text-[#9a9a9a] mb-2'>
                            Tomatoes Beef, Eggs, poached Beef, Eggs, poached, with bacon, Bacon, chorizo, roasted roma
                        </p>
                        <p className='text-[28px] text-[#fd7f28] font-bebas_neue'>
                            Rp.100.000
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter1