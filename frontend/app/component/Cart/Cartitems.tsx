import { Truncate } from '@/app/utility/Truncate'
import { formatPrice } from '@/app/utility/formatPrice'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CartitemsInterface {
    _id: number,
    prodThumb: string,
    prodTitle: string,
    prodQty: number,
    prodPrice: number,
    prodTotal: number
}

interface CartitemsInterfaceProps {
    CartItemsProp: CartitemsInterface
}
const Cartitems: React.FC<CartitemsInterfaceProps> = ({ CartItemsProp }) => {
    return (
        <>
            <div className="flex py-3 w-full">
                <div className=" h-20  w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        width={100}
                        height={100}
                        src={CartItemsProp.prodThumb}
                        alt={CartItemsProp.prodTitle}
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <Link href={`/product/${CartItemsProp._id}`}>{Truncate(CartItemsProp.prodTitle)}</Link>
                            </h3>
                            <p className="ml-4">{formatPrice(CartItemsProp.prodPrice)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{formatPrice(CartItemsProp.prodTotal)}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {CartItemsProp.prodQty}</p>
                        <div className='flex w-[100px]'>
                            <button
                                className='text-sm rounded-md rounded-r-none bg-orange-600 hover:bg-orange-700 text-white px-1 py-1 flex items-center justify-center'>
                                <MinusIcon className='w-5 h-5' />
                            </button>
                            <input
                                type='text'
                                value={CartItemsProp.prodQty}
                                name='prodQty'
                                className='py-1 border-l-0 border-r-0 text-center px-3 border border-gray-500 w-full text-sm'
                            />
                            <button
                                className='text-sm rounded-md rounded-l-none bg-orange-600 hover:bg-orange-700 text-white px-1 py-1 flex items-center justify-center'>
                                <PlusIcon className='w-5 h-5' />
                            </button>
                        </div>
                        <div className="flex">
                            <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cartitems
