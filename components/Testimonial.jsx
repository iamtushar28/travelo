import React from 'react'
import Image from 'next/image';
import { FaStar } from "react-icons/fa6"; //star icon
import { IoIosArrowBack } from "react-icons/io"; //back icon
import { GrFormNext } from "react-icons/gr"; //next icon
import { GoDotFill } from "react-icons/go"; //dot icon
import UserImage from "@/public/images/user.jpg"
import DotPattern from "@/public/images/dotpattern.png"

const Testimonial = () => {
    return (
        <div className='px-4 lg:px-24 py-6 w-full flex flex-col justify-center items-center'>

            {/* title */}
            <div className='w-full flex flex-col justify-center items-center'>
                <h4 className='text-[#F411CF] text-xl font-semibold tracking-widest'>TESTIMONIALS</h4>
                <h2 className='text-4xl font-semibold mt-1'>Trust our clients</h2>
            </div>

            {/* testimonials section */}
            <div className='mt-16 flex items-center relative'>

                <Image src={DotPattern} alt='Dot Pattern' className='w-fit h-24 absolute -top-6 -left-3' />


                {/* back btn */}
                <button className='hidden md:flex h-12 w-12 -mr-6 border text-xl text-[#872BFF] hover:text-white hover:bg-[#872BFF] border-[#872BFF] rounded-full justify-center items-center cursor-pointer transition-all duration-200'>
                    <IoIosArrowBack />
                </button>

                {/* testimonial card */}
                <div className='-z-10 w-full md:w-[44rem] h-72 px-5 md:px-24 rounded-3xl shadow-sm flex flex-col justify-center items-center'>

                    {/* profile image */}
                    <div className='h-14 w-14 bg-zinc-100 rounded-full border border-purple-200 overflow-hidden'>
                        <Image src={UserImage} alt='user image' />
                    </div>

                    {/* name */}
                    <h4 className='md:text-xl font-semibold capitalize mt-4'>Tushar</h4>

                    {/* profession */}
                    <h6 className='text-[#A8A8A8] text-xs md:text-sm'>Travel Enthusiast</h6>

                    {/* rating */}
                    <div className='text-yellow-400 mt-4 flex items-center gap-2'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                    {/* review */}
                    <p className='text-[#A8A8A8] text-center mt-4 text-sm'>I love Travelo, this is the best place to buy ticket and help you find your dream holiday.</p>

                </div>

                {/* next btn */}
                <button className='hidden md:flex h-12 w-12 -ml-6 border text-xl text-[#872BFF] hover:text-white hover:bg-[#872BFF] border-[#872BFF] rounded-full justify-center items-center cursor-pointer transition-all duration-200'>
                    <GrFormNext />
                </button>

            </div>

            {/* testimonial indicator */}
            <div className='text-3xl mt-5 flex gap-2'>
                <GoDotFill className='text-zinc-200' />
                <GoDotFill className='text-[#872BFF]' />
                <GoDotFill className='text-zinc-200' />
            </div>

        </div>
    )
}

export default Testimonial