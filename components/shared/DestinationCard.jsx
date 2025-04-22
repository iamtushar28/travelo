import React from 'react'
import Image from 'next/image'
import { FaIndianRupeeSign, FaStar } from "react-icons/fa6"; //rupee, star icon

const DestinationCard = ({coverImage, name, title, price, rating}) => {
    return (
        <div className='w-72 h-fit pb-5 shadow-sm rounded-3xl overflow-hidden relative'>

            {/* image */}
            <Image src={coverImage} alt={name} className='w-full h-64' />

            {/* destination name */}
            <button className='px-4 py-2 text-sm text-white bg-[#F411CF] rounded-br-3xl rounded-tl-3xl absolute top-0 left-0'>
                {name}
            </button>

            {/* title */}
            <h4 className='text-xl font-semibold px-6 mt-4'>{title}</h4>

            {/* price */}
            <h4 className='text-xl text-[#872BFF] font-semibold px-6 mt-2 flex gap-2 items-center'>
                <FaIndianRupeeSign />
                {price}
            </h4>

            {/* rating */}
            <button className='px-6 mt-4 text-xl font-semibold text-[#FACD49] flex gap-2 items-center'>
                {rating} <FaStar />
            </button>

        </div>
    )
}

export default DestinationCard