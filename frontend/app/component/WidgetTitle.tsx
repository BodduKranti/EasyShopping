import React from 'react'
interface WidgtTitle {
    title: string
}

const WidgetTitle: React.FC<WidgtTitle> = ({ title }) => {
    return (
        <>
            <h3 className='text-xl font-medium mb-3'>{title}</h3>
        </>
    )
}

export default WidgetTitle
