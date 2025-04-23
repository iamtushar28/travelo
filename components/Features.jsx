import React from 'react'
import Image from 'next/image';
import BuildingImage from '@/public/images/building.png'
import DubaiImage from '@/public/images/dubai.png'
import Pattern from '@/public/images/pattern.png'
import { FaLocationDot } from "react-icons/fa6"; //compass, location, plane icon
import { FiCalendar } from "react-icons/fi"; //calender icon
import { BiSolidOffer } from "react-icons/bi"; //discount icon

const Features = () => {
    return (
        <div className='px-4 lg:px-24 lg:pt-20 pt-8 pb-20 flex flex-col md:flex-row md:justify-between'>
            {/* title */}
            <div>
                <h4 className='text-[#F411CF] text-xl font-semibold tracking-widest'>KEY FEATURES</h4>
                <h2 className='text-4xl font-semibold mt-4'>We offer best services</h2>
                <p className='text-[#A8A8A8] text-sm lg:w-96 mt-5'>Hay! Travelo there to help you find your dream holiday. Easy you just find where you want to go and buy the ticket.</p>

                {/* features section */}
                <div className='mt-10 flex flex-col gap-8'>

                    {/* feature 1 */}
                    <div className='flex gap-4 items-center'>
                        <div className='h-14 w-14 text-white text-xl bg-[#872BFF] rounded-2xl flex justify-center items-center'>
                            <FaLocationDot />
                        </div>
                        {/* title */}
                        <div className='flex flex-col gap-1'>
                            <h4 className='text-lg font-semibold'>Select many location</h4>
                            <p className='text-sm text-[#A8A8A8]'>Chooce your favorite location</p>
                        </div>
                    </div>
                    {/* feature 2 */}
                    <div className='flex gap-4 items-center'>
                        <div className='h-14 w-14 text-white text-xl bg-orange-400 rounded-2xl flex justify-center items-center'>
                            <FiCalendar />
                        </div>
                        {/* title */}
                        <div className='flex flex-col gap-1'>
                            <h4 className='text-lg font-semibold'>Schedule your trip</h4>
                            <p className='text-sm text-[#A8A8A8]'>Set the date you want</p>
                        </div>
                    </div>
                    {/* feature 3 */}
                    <div className='flex gap-4 items-center'>
                        <div className='h-14 w-14 text-white text-xl bg-[#F411CF] rounded-2xl flex justify-center items-center'>
                            <BiSolidOffer />
                        </div>
                        {/* title */}
                        <div className='flex flex-col gap-1'>
                            <h4 className='text-lg font-semibold'>Big discount</h4>
                            <p className='text-sm text-[#A8A8A8]'>Get discount for every services</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* visuals section */}
            <div className='mt-12 lg:mt-0 overflow-x-hidden lg:overflow-visible'>

                <Image src={Pattern} alt='Pattern image' className='h-64 w-fit ml-20 lg:ml-0 -mb-48' />
                <Image src={BuildingImage} alt='building image' className='h-72 w-64 lg:-ml-28' />
                <Image src={DubaiImage} alt='Dubai image' className='h-72 w-64 -mt-28 ml-20 lg:ml-0' />

            </div>

        </div>
    )
}

export default Features