import React from 'react'
import Bag from '@/public/images/bag.png'
import Book from '@/public/images/book.png'
import Cards from '@/public/images/cards.png'
import ServiceCard from './shared/ServiceCard'

const Services = () => {
    return (
        <div className='py-6'>

            {/* title */}
            <h4 className='text-[#F411CF] text-xl font-semibold tracking-widest'>SERVICES</h4>
            <h2 className='text-4xl font-semibold mt-4'>Why book using Travelo</h2>

            {/* service cards section */}
            <div className='mt-10 flex flex-wrap justify-center gap-12 md:gap-20'>

                <ServiceCard title={'All You Need'} discreption={'From flights, stays, to sights, just count on our complete products.'} logoImage={Bag} />
                <ServiceCard title={'Flexible Booking'} discreption={'From flights, stays, to sights, just count on our complete products.'} logoImage={Book} />
                <ServiceCard title={'Secure Paymen'} discreption={'From flights, stays, to sights, just count on our complete products.'} logoImage={Cards} />

            </div>

        </div>
    )
}

export default Services