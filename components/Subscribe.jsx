import React from 'react'
import { MdEmail } from "react-icons/md"; //email icon

const Subscribe = () => {
    return (
        <div className='lg:px-24 py-6 flex justify-center items-center'>

            {/* subscription card */}
            <div className='-z-10 w-full lg:w-[50rem] py-16 md:h-96 px-2 md:px-24 bg-[#F4F4F4] flex flex-col justify-center items-center lg:rounded-2xl'>

                {/* title */}
                <div className='w-full flex flex-col justify-center items-center text-center'>
                    <h4 className='text-[#F411CF] text-xl font-semibold tracking-widest'>SUBSCRIBE TO OUR NEWSLETTER</h4>
                    <h2 className='text-2xl md:text-4xl font-semibold mt-4'>Prepare you self and let’s explore the beautiful of the world</h2>
                </div>

                {/* email input box */}
                <div className='relative mt-10 px-2'>

                    {/* email icon */}
                    <div className='text-2xl h-16 w-16 bg-white text-[#BDC3C7] flex justify-center items-center rounded-l-2xl absolute left-3 md:left-0 top-0 bottom-0'>
                        <MdEmail />
                    </div>

                    {/* input box */}
                    <input type="text" placeholder='Your email' className='w-full md:w-[36rem] h-16 px-20 placeholder:text-[#BDC3C7] bg-white rounded-2xl outline-none' />

                    {/* subscribe btn */}
                    <button className='h-12 px-4 text-white rounded-2xl bg-[#872BFF] hover:bg-[#872bffe2] absolute z-10 right-4 top-2 cursor-pointer'>
                        Subscribe
                    </button>


                </div>

            </div>

        </div>
    )
}

export default Subscribe