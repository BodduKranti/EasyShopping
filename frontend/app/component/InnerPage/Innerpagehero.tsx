import React from 'react'
interface innerPagetitle {
    pageTitle: string,
}
const Innerpagehero: React.FC<innerPagetitle> = ({ pageTitle }) => {
    var decodedText = decodeURIComponent(pageTitle);
    return (
        <>
            <div className='w-full bg-[#faeade] h-[80px] md:h-[100px] flex items-center'>
                <div className='container'>
                    <h1 className='text-[#b56123] text-2xl font-semibold'>{decodedText}</h1>
                </div>
            </div>
        </>
    )
}

export default Innerpagehero
