import React from 'react'
import WidgetTitle from '../WidgetTitle'
import SocialLinks from './SocialLinks'

const NewsLetter = () => {
    return (
        <>
            <WidgetTitle
                title='Let’s keep in touch'
            />
            <p className='text-[#7c818b]'>Get recommendations, tips, updates and more.</p>
            <form className='w-full my-4'>
                <div className='w-full flex'>
                    <input
                        type='text'
                        className='border-2 rounded-md border-r-0 rounded-r-none'
                        placeholder='Enter Your Email...' />
                    <button
                        className='btnPrimary border-l-0 rounded-l-none w-[120px]'
                    >
                        Send
                    </button>
                </div>
            </form>

            <SocialLinks />
        </>
    )
}

export default NewsLetter
