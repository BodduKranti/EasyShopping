import React from 'react'
interface CommonTitlePage {
    mainTitle: string
}
const CommonTitle: React.FC<CommonTitlePage> = ({ mainTitle }) => {
    return (
        <>
            <h2 className='text-2xl font-medium'>{mainTitle}</h2>
        </>
    )
}

export default CommonTitle
