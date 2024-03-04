import React from 'react'
import TopFooter from './TopFooter'
import MidFooter from './MidFooter'
import BottomFooter from './BottomFooter'

const Footer = () => {
    return (
        <>
            <footer className=' border-[#ecf0f4] border-t py-7'>
                <TopFooter />
                <MidFooter />
                <BottomFooter />
            </footer>

        </>
    )
}

export default Footer
