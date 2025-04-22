import React from 'react'
import Image from 'next/image'

const ServiceCard = ({ title, discreption, logoImage }) => {
    return (
        <div className='w-72 h-fit py-16 px-6 bg-white rounded-3xl flex gap-8 flex-col justify-center items-center cursor-pointer hover:shadow transition-all border border-slate-100 duration-200'>

            {/* bag image */}
            <div className='h-16 w-16 bg-zinc-100 rounded-full flex justify-center items-center'>
                <Image src={logoImage} alt="Bag icon" className='h-16 w-10 -mt-4' />
            </div>

            {/* title */}
            <h4 className='text-2xl font-semibold capitalize'>{title}</h4>

            {/* discreption */}
            <p className='text-[#A8A8A8]'>{discreption}</p>

        </div>
    )
}

export default ServiceCard