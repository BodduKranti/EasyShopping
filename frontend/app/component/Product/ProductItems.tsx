"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsEyeSlash } from 'react-icons/bs'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdRemoveRedEye } from 'react-icons/md'

import Slider from 'react-slick'
import Quickpopup from '../QuickViewPop/Quickpopup'
import ProductDetails from './ProductDetails'
import { Truncate } from '@/app/utility/Truncate'

interface productItemDetails {
    _id: number,
    prodTitle: string,
    prodBrand: string,
    prodCat: string,
    prodPrice: number,
    prodQty: number,
    prodDiscount: number,
    prodStock: number,
    prodBaseprice: number,
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

interface productItemDetailsProps {
    prodItems: productItemDetails
}

const settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <MdKeyboardArrowRight />,
    prevArrow: <MdKeyboardArrowLeft />
}

const ProductItems: React.FC<productItemDetailsProps> = ({ prodItems }) => {
    const [quickpopOpen, setQuickpopOpen] = useState(false)
    const [getData, setGetData] = useState<any>({})
    return (
        <>
            <div className='product-inner w-full group flex  '>
                <div className='w-full p-3 text-center md:text-start group-hover:shadow-xl rounded-lg transition-all relative overflow-hidden'>

                    <Slider {...settings}>
                        {
                            prodItems.prodSub && prodItems.prodSub.map((list: any) => (
                                <>
                                    <figure className='w-full h-[150px] text-center mb-0 pb-0'>
                                        <Image
                                            width={100}
                                            height={100}
                                            src={list.prodThumb}
                                            alt=''
                                            className='inline w-full h-full object-contain  '
                                        />
                                    </figure>
                                </>
                            ))
                        }
                    </Slider>

                    <div className='text-sm text-gray-500 my-2 group-hover:my-1 transition-all delay-700'>{prodItems.prodBrand}</div>
                    <Link href={`/product/${prodItems._id}`} className='text-black text-sm my-2 transition-all group-hover:my-1 '>
                        {/* {prodItems.prodTitle.slice(0, 20)}... */}
                        {Truncate(prodItems.prodTitle)}
                    </Link>
                    <div className='w-full flex gap-3 md:justify-start md:mt-4 mt-2 justify-center'>
                        <div className=' text-red-600 text-sm'>${prodItems.prodPrice}</div>
                        <div className='text-gray-600 text-sm line-through'>
                            ${prodItems.prodBaseprice}
                        </div>
                    </div>

                    <div className=' absolute flex items-center py-1 justify-center  transition-all delay-500 -bottom-[100%] left-0 w-full h-auto group-hover:bottom-0 bg-[#ec680a76] z-10'>
                        <div
                            onClick={() => {
                                setQuickpopOpen(true)
                                setGetData(prodItems)
                            }}
                            className='text-[#29abe2] transition-all delay-1000 w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center cursor-pointer'>
                            <MdRemoveRedEye />
                        </div>
                    </div>
                </div>

            </div>

            <Quickpopup
                quickpopOpen={quickpopOpen}
                setQuickpopOpen={setQuickpopOpen}
                content={
                    <ProductDetails
                        prodDetails={getData}
                    />
                }
            />
        </>
    )
}

export default ProductItems
