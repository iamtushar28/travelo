import React from 'react'
import Hills from '@/public/images/hills.jpg'
import { IoIosArrowBack } from "react-icons/io"; //back icon
import { GrFormNext } from "react-icons/gr"; //next icon
import DestinationCard from './shared/DestinationCard';

const Destinations = () => {
    return (
        <div className='py-12'>

            {/* title section */}
            <div className='flex justify-between items-center'>

                {/* title */}
                <div>
                    <h4 className='text-[#F411CF] text-xl font-semibold tracking-widest'>TOP DESTINATIONS</h4>
                    <h2 className='text-4xl font-semibold mt-4'>Explore top destinations</h2>
                </div>

                {/* forword, backword buttons */}
                <div className='mt-8 md:flex gap-4 items-center hidden'>

                    {/* back btn */}
                    <button className='h-12 w-12 border text-xl text-[#872BFF] hover:text-white hover:bg-[#872BFF] border-[#872BFF] rounded-full flex justify-center items-center cursor-pointer transition-all duration-200'>
                        <IoIosArrowBack />
                    </button>
                    {/* next btn */}
                    <button className='h-12 w-12 border text-xl text-[#872BFF] hover:text-white hover:bg-[#872BFF] border-[#872BFF] rounded-full flex justify-center items-center cursor-pointer transition-all duration-200'>
                        <GrFormNext />
                    </button>

                </div>

            </div>

            {/* cards section */}
            <div className='mt-10 flex flex-wrap justify-center gap-12 md:gap-20'>

                <DestinationCard coverImage={Hills} name={"Indonesia"} title={"Pandawa Beach, Bali Island"} price={"90,000"} rating={"4.9"} />
                <DestinationCard coverImage={Hills} name={"Indonesia"} title={"Pandawa Beach, Bali Island"} price={"90,000"} rating={"4.9"} />
                <DestinationCard coverImage={Hills} name={"Indonesia"} title={"Pandawa Beach, Bali Island"} price={"90,000"} rating={"4.9"} />

            </div>

            {/* see all destination button */}
            <div className='w-full mt-6 flex justify-center'>
                <button className='px-4 py-2 text-sm font-semibold capitalize text-[#872BFF] bg-[#F9F4FF] hover:bg-[#f0eaf8] rounded-3xl flex gap-1 items-center cursor-pointer transition-all duration-200'>
                    see all
                    <GrFormNext className='text-xl' />
                </button>
            </div>

        </div>
    )
}

export default Destinations