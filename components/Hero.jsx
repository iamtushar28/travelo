import React from 'react'
import Image from 'next/image'
import Rectangle1 from '@/public/rectangel1.png'
import Rectangle2 from '@/public/rectangle2.png'
import Rectangle4 from '@/public/rectangle4.png'
import Rectangle5 from '@/public/rectangle5.png'
import Vector1 from '@/public/vector1.png'
import Vector2 from '@/public/vector2.png'
import Aeroplane1 from '@/public/aeroplane1.png'
import Aeroplane2 from '@/public/aeroplane2.png'
import { FaCompass } from "react-icons/fa6"; //compass icon
import { IoIosPlayCircle } from "react-icons/io"; //play icon

const Hero = () => {
  return (
    <section className='h-auto pb-6 w-full px-4 md:px-24 mt-16 md:mt-32 flex flex-col gap-36 md:gap-0 md:flex-row md:justify-between overflow-hidden md:overflow-visible'>

      {/* circle colour element */}
      <div className='h-80 w-80 absolute -top-36 -left-32 md:-top-20 md:-left-28 -z-10 bg-pink-200 rounded-full blur-2xl'></div>

      {/* hero section 1 - title */}
      <div className='flex flex-col gap-6'>

        {/* explore world button */}
        <button className='px-6 py-2 w-fit bg-white text-[#F411CF] text-sm font-semibold shadow rounded-3xl flex gap-3 items-center'>
          Explore World!
          <FaCompass />
        </button>

        {/* heading */}
        <h2 className='text-5xl md:text-6xl font-bold'>
          From <br />
          Southeast Asia <br />
          <span className='text-[#F411CF]'>to the World.</span>
        </h2>

        {/* discreption */}
        <p className='text-zinc-400 text-sm'>Stay updated with travel tips, recommendations, and latest <br className='hidden md:block' /> promos.</p>

        {/* get start, watch video btn */}
        <div className='flex gap-4'>

          {/* get startbtn */}
          <button className='px-4 py-2 font-semibold capitalize text-white bg-[#872BFF] hover:bg-[#872bffe0] rounded-3xl transition-all duration-200 cursor-pointer'>
            Get Started
          </button>

          {/* watch video btn */}
          <button className='px-4 py-2 font-semibold capitalize text-black border border-[#872BFF] rounded-3xl transition-all duration-200 cursor-pointer flex gap-2 items-center'>
            Watch video
            <IoIosPlayCircle className='text-[#872BFF] text-2xl' />
          </button>
        </div>

      </div>

      {/* hero section 2 - visual images */}
      <div className='flex justify-center gap-6 md:gap-8'>

        <div className='flex flex-col gap-8 relative'>
          {/* sea beach image */}
          <Image src={Rectangle1} alt="sea beach" />
          {/* hills image */}
          <Image src={Rectangle2} width={240} alt="hills" />
          {/* vector 1 */}
          <Image src={Vector1} alt='Vector1' height={200} className='absolute -top-16 -left-12 -z-10' />
          <Image src={Aeroplane1} alt='Aeroplane1' height={40} className='absolute -top-[5.4rem] md:-top-22 left-16 md:left-28' />
        </div>

        <div className='flex flex-col gap-8 -mt-12 relative'>
          {/* sea beach image */}
          <Image src={Rectangle5} height={180} alt="sea beach" />
          {/* hills image */}
          <Image src={Rectangle4} width={240} alt="hills" />
          {/* vector 1 */}
          <Image src={Vector2} alt='Vector2' height={200} className='hidden md:block absolute top-56 -right-12 -z-10' />
          <Image src={Aeroplane2} alt='Aeroplane2' height={40} className='hidden md:block absolute top-48 -right-6' />
        </div>

      </div>

    </section>
  )
}

export default Hero