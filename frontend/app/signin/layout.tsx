import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "S-Shopping - Sign In",
    description: "Very best ecommerce site"
}
const SignInLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}

export default SignInLayout
