import Link from 'next/link'
import React from 'react'
import { CgTrack } from 'react-icons/cg'
import { FaFacebook, FaLinkedin, FaRegQuestionCircle, FaTwitter } from 'react-icons/fa'

const TopBar = () => {
    return (
        <>
            <div className='w-full bg-primaryColor py-2'>
                <div className='container'>
                    <div className='w-full flex justify-between gap-4'>
                        <div className='social flex gap-4'>
                            <Link href={"https://www.facebook.com"} target='_blank'>
                                <FaFacebook
                                    className='w-5 h-5 text-white'
                                />
                            </Link>
                            <Link href={"https://www.twitter.com"}>
                                <FaTwitter
                                    className='w-5 h-5 text-white'
                                />
                            </Link>
                            <Link href={"https://www.facebook.com"}>
                                <FaLinkedin
                                    className='w-5 h-5 text-white'
                                />
                            </Link>
                        </div>

                        <div className='flex gap-4'>
                            <Link href={"/help_center"} className='text-white flex gap-1 items-center'>
                                <FaRegQuestionCircle />
                                Help Center</Link>
                            <Link href={"/track_order"} className='text-white flex gap-1 items-center'>
                                <CgTrack />
                                Track Order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar
