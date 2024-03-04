import Image from 'next/image'
import React from 'react'

const RightBanner = () => {
    return (
        <>
            <div className="bannerBg text-center">
                <div className='w-full text-sm text-[#313574] font-semibold'>
                    NEW ARRIVAL
                </div>
                <div className='w-full bannerTitle text-2xl font-bold'>
                    Galaxy Tab S7+
                </div>
                <p className='w-full mb-0 pb-0'>Meet the Galaxy Tab</p>
                <figure className='w-full  h-[200px] inline-block'>
                    <Image width={100} height={100} className='w-full h-full object-contain' src={`/images/newarrival.jpg`} alt="" />
                </figure>
                <div className='w-full'>
                    <button className='btnPrimary py-2'>Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default RightBanner
