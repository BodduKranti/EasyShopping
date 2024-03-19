import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import React, { useState } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { formatPrice } from '@/app/utility/formatPrice';

interface productDetailsInterface {
    _id: number,
    prodTitle: string,
    prodBrand: string,
    prodCat: string,
    prodPrice: number,
    prodQty: number,
    prodDiscount: number,
    prodStock: number,
    prodBaseprice: number,
    prodWishlist: number,
    prodSub: [
        {
            prodThumb: string,
            prodColor: string,
            prodInnerThumb: [
                {
                    prodGall: string
                }
            ]
        }
    ]
}
interface productDetailsProps {
    prodDetails: productDetailsInterface
}
const ProductDetails: React.FC<productDetailsProps> = ({ prodDetails }) => {
    const [colorThumb, setColorThumb] = useState<any>(prodDetails.prodSub[0].prodThumb)
    const [colorProd, setColorProd] = useState<any>(prodDetails.prodSub[0].prodColor)
    return (
        <>
            <div className='w-full block md:flex gap-4 divide-y space-y md:divide-y-0 md:space-y-0 md:border-0' key={prodDetails._id}>
                <div className='w-full md:w-1/3 pb-4'>
                    <figure className='w-full h-[300px]'>
                        <Image
                            width={100}
                            height={100}
                            className='w-full h-full object-contain'
                            alt=''
                            src={`${colorThumb}`}
                        />
                    </figure>
                    <div className='gallery flex gap-3 mt-3'>
                        {prodDetails.prodSub && prodDetails.prodSub.filter((list: any) => list.prodColor === colorProd).map((data: any) => (
                            <>
                                {data.prodInnerThumb.length > 0 ?
                                    <>
                                        {
                                            data.prodInnerThumb.map((data: any) => (
                                                <>
                                                    <div className={`${data.prodGall === colorThumb ? ' border-blue-700 border-2' : 'border-gray-500'} imgThumb w-[40px] border h-[40px] p-1 cursor-pointer`} style={{ borderColor: `${colorProd}` }}>
                                                        <figure className='w-full h-full'
                                                            onClick={() => setColorThumb(data.prodGall)}
                                                        >
                                                            <Image
                                                                width={100}
                                                                height={100}
                                                                alt=''
                                                                src={`${data.prodGall}`}
                                                                className='w-full h-full object-contain'
                                                            />
                                                        </figure>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </>
                                    :
                                    <>

                                    </>
                                }
                            </>
                        ))}

                    </div>
                </div>
                <div className='w-full md:w-2/3 pt-4'>
                    <h2 className=' text-lg md:text-xl'>{prodDetails.prodTitle}</h2>
                    <div className='w-full flex gap-4 my-2'>
                        <span>Category: {prodDetails.prodCat}</span>
                        <span>Brand: {prodDetails.prodBrand}</span>
                    </div>
                    {prodDetails.prodSub[0].prodColor !== '' ? <>
                        <div className='w-full flex gap-2 my-2'>
                            <span>color:</span>
                            {prodDetails.prodSub.map((list: any) => (
                                <>
                                    <div className={`${list.prodColor === colorProd ? 'border p-1' : ''} w-[25px] h-[25px] rounded-full cursor-pointer`} style={{ borderColor: `${colorProd}` }}>
                                        <div className='w-full h-full rounded-full'
                                            onClick={() => {
                                                setColorProd(list.prodColor)
                                                // let prodThumbimg = list
                                                console.log(list.prodInnerThumb[0].prodGall)
                                                // let prodThumimg = prodDetails.prodSub.filter((data: any) => data.prodColor === colorProd).map((items: any) => items.prodInnerThumb)
                                                setColorThumb(list.prodInnerThumb[0].prodGall)
                                            }}
                                            style={{ background: `${list.prodColor}` }}>
                                        </div>
                                    </div>

                                </>
                            ))}

                        </div>
                    </> : <></>}

                    <div className='w-full flex justify-between items-end my-2'>
                        <div className=''>
                            <div className='text-xl font-bold'>
                                {formatPrice(prodDetails.prodPrice)}
                                {/* $ {prodDetails.prodPrice} */}
                            </div>
                            <div className='flex gap-4'>
                                <span className=' line-through'>{formatPrice(prodDetails.prodBaseprice)}</span>
                                <span className=' text-red-500'>Save: {`${formatPrice(prodDetails.prodBaseprice - prodDetails.prodPrice)}`}</span>
                            </div>
                        </div>

                        <div className={`${prodDetails.prodStock < 5 ? 'text-red-500' : 'text-green-500'}`}>
                            {`${prodDetails.prodStock < 5 ? `Only ${prodDetails.prodStock} items left hurry` : 'Available in stock'}`}
                        </div>

                    </div>
                    <div className='w-full my-5'>
                        <div className='w-[150px]'>
                            <div className='flex'>
                                <button
                                    className='text-sm rounded-md rounded-r-none bg-orange-600 hover:bg-orange-700 text-white px-1 py-1 flex items-center justify-center'>
                                    <MinusIcon className='w-[30px] h-[30px]' />
                                </button>
                                <input
                                    type='text'
                                    value={prodDetails.prodQty}
                                    name='prodQty'
                                    className='py-1 border-l-0 border-r-0 text-center px-3 border border-gray-200 w-full text-sm'
                                />
                                <button
                                    className='text-sm rounded-md rounded-l-none bg-orange-600 hover:bg-orange-700 text-white px-1 py-1 flex items-center justify-center'>
                                    <PlusIcon className='w-[30px] h-[30px]' />
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* <h3 className='text-md md:text-lg'>{prodDetails.prodBrand}</h3> */}
                    <div className='flex gap-4'>
                        <button className='btnPrimary w-[150px]  !py-2 inline-block'>
                            <ShoppingCartIcon
                                className='w-5 h-5 float-start me-2'
                            />
                            <span className='hidden md:block'> Add to Cart</span>
                        </button>
                        <button className='btnSecondary !py-2 flex gap-4 hover:bg-[#3faede]'>Buy Know</button>
                        <button className='!py-2 flex gap-4'>
                            {prodDetails.prodWishlist === 0 ? <>
                                <FaRegHeart className='w-7 h-7 text-[#29abe2]' />
                                <span className='hidden md:block'>Add to Wishlist</span>
                            </> : <>
                                <FaHeart className='w-7 h-7 text-[#29abe2]' />
                                <span className='hidden md:block'>Added to Wishlist</span>
                            </>}

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
