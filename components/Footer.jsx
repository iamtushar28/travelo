import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='px-4 lg:px-24 py-16 md:py-24 flex flex-wrap justify-between items-center'>

                {/* logo */}
                <div className='flex flex-col gap-8 mb-6 md:mb-0'>
                    <div className='flex gap-2 items-center'>
                        <Image src={Logo} height={30} width={30} alt="travelo logo" />
                        <h2 className='text-2xl capitalize font-semibold'>Travelo</h2>
                    </div>

                    {/* company discreption */}
                    <p className='text-[#A8A8A8] md:w-64'>Travelo is Southeast Asia’s travel and lifestyle app, we provide you with access to discover and purchase different type of travel needs.</p>
                </div>

                {/* about links */}
                <div>

                    <h4 className='font-semibold text-xl'>About</h4>

                    <ul className='flex flex-col gap-4 mt-6'>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>How to Book</li>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>Contact Us</li>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>Help Center</li>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>Career</li>
                    </ul>

                </div>

                {/* products links */}
                <div>

                    <h4 className='font-semibold text-xl'>Products</h4>

                    <ul className='flex flex-col gap-4 mt-6'>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>Flights</li>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>Hotels</li>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>Trains</li>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>Villas</li>
                    </ul>

                </div>

                {/* other links */}
                <div>

                    <h4 className='font-semibold text-xl'>Other</h4>

                    <ul className='flex flex-col gap-4 mt-6'>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>Blog</li>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>Privacy Policy</li>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>Terms</li>
                        <li className='text-[#A8A8A8] hover:underline cursor-pointer'>FAQ</li>
                    </ul>

                </div>

            </div>

            {/* social links  */}
            <div className='w-full px-4 lg:px-24 flex gap-6 justify-start items-center h-16 bg-[#F3F3F3]'>
                <button className='text-3xl text-[#872BFF] cursor-pointer hover:scale-95 transition-all duration-200'>
                    <FaFacebook />
                </button>
                <button className='text-3xl text-[#872BFF] cursor-pointer hover:scale-95 transition-all duration-200'>
                    <FaInstagram />
                </button>
                <button className='text-3xl text-[#872BFF] cursor-pointer hover:scale-95 transition-all duration-200'>
                    <FaLinkedin />
                </button>
            </div>
        </div>
    )
}

export default Footer