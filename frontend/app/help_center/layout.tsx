import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "S-Shoppint - Help Center",
    description: "Very Best Site"
}

const HelpCenterLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}

export default HelpCenterLayout
