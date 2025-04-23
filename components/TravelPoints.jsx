import React from 'react'
import Image from 'next/image'
import GirlImage from '@/public/images/women.png'
import TicketStar from '@/public/images/ticketstar.png'

const TravelPoints = () => {
    return (
        <div className='pt-44 pb-10 w-full flex flex-col md:flex-row items-center gap-16 lg:gap-20'>

            {/* visuals section */}
            <div className='h-80 w-full lg:w-[40%] bg-[#FACD49] rounded-r-full relative'>

                <Image src={GirlImage} alt="girl image" className='h-[28rem] w-auto absolute bottom-0 right-4' />

                {/* circles visuals */}
                <div className='h-14 w-14 bg-[#872BFF] rounded-full absolute right-12 -top-28 blur-xs'></div>
                <div className='h-8 w-8 bg-[#2FD9B9] rounded-full absolute top-0 right-4 lg:left-12 lg:-top-10 blur-xs'></div>
                <div className='h-9 w-9 bg-[#E74C3C] rounded-full absolute right-6 top-28 blur-xs'></div>
                <div className='h-5 w-5 bg-[#E74C3C] rounded-full absolute right-16 top-16 blur-xs'></div>

                {/* video visual element */}
            <button className='lg:hidden h-16 w-16 -mt-36 text-white bg-[#FACD49] rounded-full flex justify-center items-center absolute -bottom-14 right-4'>
                <Image src={TicketStar} alt="TicketStar icon" className='h-10 w-10' />
            </button>

            </div>

            {/* titles */}
            <div className='lg:-mt-32 px-4'>

                {/* title */}
                <h4 className='text-[#F411CF] text-xl font-semibold tracking-widest'>TRAVEL POINTS</h4>
                <h2 className='text-4xl font-semibold mt-4'>We help you find your <br /> dream destination</h2>
                <p className='lg:w-96 text-sm text-[#A8A8A8] mt-2'>Hay! Travelo there to help you find your dream holiday. Easy you just find where you want to go and buy the ticket.</p>

                {/* cards 1 */}
                <div className='mt-8 flex justify-center gap-6'>

                    {/* card 1 */}
                    <div className='w-36 h-28 lg:w-48 lg:h-28 border border-zinc-200 rounded-3xl flex flex-col justify-center items-center'>
                        <h2 className='text-3xl font-semibold text-[#872BFF]'>200+</h2>
                        <p className='text-[#A8A8A8] mt-1'>Holidy Package</p>
                    </div>

                    {/* card 2 */}
                    <div className='w-36 h-28 lg:w-48 lg:h-28 border border-zinc-200 rounded-3xl flex flex-col justify-center items-center'>
                        <h2 className='text-3xl font-semibold text-[#872BFF]'>450</h2>
                        <p className='text-[#A8A8A8] mt-1'>RedDoorz</p>
                    </div>

                </div>

                {/* cards 2 */}
                <div className='mt-4 flex justify-center gap-6'>

                    {/* card 1 */}
                    <div className='w-36 h-28 lg:w-48 lg:h-28 border border-zinc-200 rounded-3xl flex flex-col justify-center items-center'>
                        <h2 className='text-3xl font-semibold text-[#872BFF]'>10</h2>
                        <p className='text-[#A8A8A8] mt-1'>Premium Airlines</p>
                    </div>

                    {/* card 2 */}
                    <div className='w-36 h-28 lg:w-48 lg:h-28 border border-zinc-200 rounded-3xl flex flex-col justify-center items-center'>
                        <h2 className='text-3xl font-semibold text-[#872BFF]'>28K</h2>
                        <p className='text-[#A8A8A8] mt-1'>Happy Customer</p>
                    </div>

                </div>

            </div>

            {/* video visual element */}
            <button className='hidden h-16 w-16 -mt-36 text-white bg-[#FACD49] rounded-full lg:flex justify-center items-center'>
                <Image src={TicketStar} alt="TicketStar icon" className='h-10 w-10' />
            </button>

        </div>
    )
}

export default TravelPoints