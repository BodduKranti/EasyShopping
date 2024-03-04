import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "S-Shopping - Register",
    description: "Very Best site"
}

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}

export default layout
