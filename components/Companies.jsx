import React from 'react'
import Image from 'next/image'
import Airbnb from '@/public/images/Airbnb.png'
import Tripadvisor from '@/public/images/Tripadvisor.png'
import Ticket from '@/public/images/tiket.com.png'

const Companies = () => {
    return (
        <div className="py-16 overflow-hidden w-full h-fit">

            <div className='scroll-left-infinite'>
                {/* Duplicate everything for seamless scroll */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-16 items-center px-8">
                        <Image src={Airbnb} alt="Airbnb image" className='h-10 w-fit' />
                        <Image src={Tripadvisor} alt="Tripadvisor image" className='h-10 w-fit' />
                        <Image src={Ticket} alt="Ticket image" className='h-10 w-fit' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Companies