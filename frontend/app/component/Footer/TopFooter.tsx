import React from 'react'
import FooterCard from '../FooterCard'
import { BsGlobe, BsGlobe2 } from 'react-icons/bs'
import { PiContactlessPayment } from 'react-icons/pi'
import { IoReturnUpBackOutline } from 'react-icons/io5'

const TopFooter = () => {
    const footerCardData = [
        {
            cardTitle: "Worldwide Delivery",
            cardDesc: "200 countries and regions worldwide",
            cardSvg: <BsGlobe />
        },
        {
            cardTitle: "Secure Payment",
            cardDesc: "Pay with popular and secure payment methods",
            cardSvg: <PiContactlessPayment />
        },
        {
            cardTitle: "60-day Return Policy",
            cardDesc: "Merchandise must be returned within 60 days.",
            cardSvg: <IoReturnUpBackOutline />
        }
    ]
    return (
        <>
            <div className='container'>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                    {footerCardData.map((list: any) => (
                        <>
                            <FooterCard
                                cardDetials={list}
                            />
                        </>
                    ))}
                </div>
            </div>

        </>
    )
}

export default TopFooter
