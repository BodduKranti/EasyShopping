import React from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Navigation from './Navigation';
const Header = () => {
    return (
        <>
            <header className=' sticky'>
                <TopBar />
            </header>

            <div id="sticky-banner" className="sticky bg-white top-0 start-0 z-20  w-full ">
                <div className='container'>
                    <div className='w-full flex justify-between py-1'>
                        <Navbar />
                    </div>
                </div>
                <div className='w-full  bg-[#29abe2] '>
                    <Navigation />
                </div>
            </div>



        </>
    )
}

export default Header
