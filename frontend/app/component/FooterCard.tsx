import React from 'react'
interface cardDetails {
    cardTitle: string,
    cardDesc: string,
    cardSvg: string
}
interface cardDetailsProps {
    cardDetials: cardDetails
}
const FooterCard: React.FC<cardDetailsProps> = ({ cardDetials }) => {
    return (
        <>
            <div className='w-full flex'>
                <div className='w-[100px] text-[47px] text-[#7C818B]'>{cardDetials.cardSvg}</div>
                <div className='w-full'>
                    <h3 className='text-xl font-medium'>{cardDetials.cardTitle}</h3>
                    <p className='text-base text-gray-500'>{cardDetials.cardDesc}</p>
                </div>
            </div>
        </>
    )
}

export default FooterCard
