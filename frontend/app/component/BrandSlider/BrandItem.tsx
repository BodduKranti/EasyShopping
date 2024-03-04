import Image from 'next/image'
import React from 'react'
interface BrandLogo {
    brandTitle: string,
    brandThumb: string
}

interface BrandLogoProps {
    brandLogo: BrandLogo
}
const BrandItem: React.FC<BrandLogoProps> = ({ brandLogo }) => {
    return (
        <>
            <div className='w-full text-center'>
                <div className='inline-block'>
                    <figure className='w-[120px] h-[120px]  flex items-center justify-center bg-white shadow-sm rounded-full'>
                        <Image
                            width={100}
                            height={100}
                            src={brandLogo.brandThumb}
                            alt=''
                            className='w-full h-full object-contain'
                        />
                    </figure>
                </div>

                <h3 className='text-center'>{brandLogo.brandTitle}</h3>
            </div>
        </>
    )
}

export default BrandItem
