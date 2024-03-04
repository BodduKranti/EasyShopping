import React from 'react'
import WidgetTitle from '../WidgetTitle'
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SocialLinks = () => {
    return (
        <>
            <WidgetTitle
                title={'Stay Connected'}
            />
            <div className='social flex gap-4'>
                <Link href={"https://www.facebook.com"} target='_blank'>
                    <FaFacebook
                        className='w-5 h-5 text-[#7c818b]'
                    />
                </Link>
                <Link href={"https://www.twitter.com"}>
                    <FaTwitter
                        className='w-5 h-5 text-[#7c818b]'
                    />
                </Link>
                <Link href={"https://www.facebook.com"}>
                    <FaLinkedin
                        className='w-5 h-5 text-[#7c818b]'
                    />
                </Link>
            </div>
        </>
    )
}

export default SocialLinks
