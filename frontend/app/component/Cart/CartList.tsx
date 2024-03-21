import React from 'react'
// import { CartData } from './CartListData'
import Cartitems from './Cartitems'
import { useAppSelector } from '@/app/ReduxStore/ReduxHook/ReduxHooks'

const CartList = () => {
    const CartData = useAppSelector((state) => state.product.cartItems)
    return (
        <>
            <div className="flow-root">
                <div className=" divide-y divide-gray-200">
                    {CartData.map((list: any) => (
                        <>
                            <Cartitems
                                CartItemsProp={list}
                            />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CartList
