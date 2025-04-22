import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { IoMenu } from "react-icons/io5"; //menu icon

const Navbar = () => {
    return (
        <nav className='px-4 md:px-24 py-4 md:py-6 w-full flex justify-between items-center'>

            {/* logo */}
            <div className='flex gap-2 items-center'>
                <Image src={Logo} height={30} width={30} alt="travelo logo" />
                <h2 className='text-2xl capitalize font-semibold'>Travelo</h2>
            </div>

            {/* nav links */}
            <ul className='hidden md:flex gap-14'>
                <li className='font-semibold capitalize'>Home</li>
                <li className='font-semibold capitalize'>Discover</li>
                <li className='font-semibold capitalize'>Special Deals</li>
                <li className='font-semibold capitalize'>Support</li>
            </ul>

            {/* login, signup button */}
            <div className='hidden md:flex gap-4'>

                {/* login btn */}
                <button className='font-semibold capitalize cursor-pointer'>
                    Login
                </button>

                {/* sign up btn */}
                <button className='px-4 py-2 font-semibold capitalize text-white bg-[#872BFF] hover:bg-[#872bffe0] rounded-3xl transition-all duration-200 cursor-pointer'>
                    Sign Up
                </button>
            </div>

            <button className='text-3xl block md:hidden'>
                <IoMenu />
            </button>

        </nav>
    )
}

export default Navbar