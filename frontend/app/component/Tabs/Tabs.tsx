"use client"

import React, { useState } from 'react'
import { TabsContentData } from './TabsContent'

const Tabs = () => {
    const [tabOpen, setTabOpen] = useState<any>('title 1')
    return (
        <>
            {TabsContentData.map((list: any) => (
                <>
                    <div className='w-full mt-2 border border-gray-400 rounded-md overflow-hidden'>
                        <div className='w-full px-4 py-1' onClick={() => {
                            setTabOpen(list.tabTitle)
                        }}>{list.tabTitle}</div>
                        <div className={`${tabOpen === list.tabTitle ? 'block' : 'hidden'} w-full px-4 py-1 bg-gray-100 `}>{list.tabDesc}</div>
                    </div>
                </>
            ))}
        </>
    )
}

export default Tabs
