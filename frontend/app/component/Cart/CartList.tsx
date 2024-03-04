import React from 'react'
import { CartData } from './CartListData'
import Cartitems from './Cartitems'

const CartList = () => {
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
