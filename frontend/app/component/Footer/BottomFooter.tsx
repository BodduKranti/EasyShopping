import React from 'react'
import Image from 'next/image'

const BottomFooter = () => {
    return (
        <>
            <div className='container'>
                <div className='w-full border-[#ecf0f4] border-t-2'></div>
            </div>
            <div className='container block md:flex justify-between mt-4'>
                <div className=''>
                    <p>Copyright © 2024 Motta, All rights reserved.</p>
                </div>
                <div className='w-auto flex items-center justify-center'>
                    <div className='flex gap-4'>
                        <Image width={39} height={12} src='/images/footer-visa.png' alt='' />
                        <Image width={58} height={14} src='/images/footer-paypal.png' alt='' />
                        <Image width={80} height={14} src='/images/footer-mastercard.png' alt='' />
                        <Image width={43} height={15} src='/images/footer-bank-transfer.png' alt='' />
                    </div>

                    {/* <img src='./images/footer-visa.png' alt='' />
                    <img src='./images/footer-visa.png' alt='' />
                    <img src='./images/footer-visa.png' alt='' /> */}
                </div>
            </div>
        </>
    )
}

export default BottomFooter
