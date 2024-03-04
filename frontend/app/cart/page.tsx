"use client"
import React from 'react'
import CartList from '../component/Cart/CartList'
import Subtotal from '../component/Subtotal/Subtotal'

const CartPage = () => {
    return (
        <>
            <div className='container'>
                <div className='w-full flex gap-4'>
                    <div className='w-full md:w-3/4 lg:w-3/4'>
                        <CartList />
                    </div>
                    <div className='w-full md:1/4 lg:w-1/4'>
                        <Subtotal />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage
