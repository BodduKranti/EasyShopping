"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdRemoveRedEye } from 'react-icons/md'
import Slider from 'react-slick'
import Quickpopup from '../QuickViewPop/Quickpopup'
import ProductDetails from './ProductDetails'
import { Truncate } from '@/app/utility/Truncate'
import { formatPrice } from '@/app/utility/formatPrice'
import ProductReviewRating from './ProductReviewRating'
import { ShoppingBagIcon } from '@heroicons/react/20/solid'
import { addToCartItem } from '@/app/ReduxStore/ReduxSlices/ProductSlice'
import { useAppDispatch, useAppSelector } from '@/app/ReduxStore/ReduxHook/ReduxHooks'
import { UseContextAuth } from '@/app/contextApi/ContextApi'
import { gsap, CSSPlugin } from 'gsap';

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
    ],
    reviews: []
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

    const currDivPos = useRef<HTMLDivElement>(null)

    const { headerCartPosition, showaddtoCrtImg } = UseContextAuth()
    const { cartProdImg } = useAppSelector((state) => state.product)
    const dispatch = useAppDispatch();

    const [quickpopOpen, setQuickpopOpen] = useState(false)
    const [getData, setGetData] = useState<any>({})

    const addToCart = (data: any) => {

        // // let item=$(this).closest(".item");
        // if (currDivPos.current) {
        //     let currPos = currDivPos.current.offsetLeft
        //     let itemX = currPos - headerCartPosition.hdrPosition;
        //     let itemY = currDivPos.current.offsetTop;
        //     console.log(currPos)
        //     showaddtoCrtImg.current.style.opacity = '1';
        //     showaddtoCrtImg.current.style.width = '100px';
        //     showaddtoCrtImg.current.style.left = `${itemX}px`;
        //     showaddtoCrtImg.current.style.top = `${itemY}px`;

        //     gsap.killTweensOf(showaddtoCrtImg.current);

        //     gsap.to(showaddtoCrtImg.current, 0.8, {
        //         left: currPos + headerCartPosition.hdrPosition,
        //         top: 10, width: 20
        //     });
        //     gsap.to(showaddtoCrtImg.current, 0.3, { css: { opacity: 0 }, delay: 0.5 });

        //     console.log('itemX', itemX)
        //     console.log('itemY', itemY)
        // }
        dispatch(addToCartItem({ ...data, prodThumb: data.prodSub[0].prodThumb }))
    }



    return (
        <>



            <div className='product-inner w-full group flex  ' ref={currDivPos}>
                <div className='w-full justify-center p-3 text-center md:text-start group-hover:shadow-xl rounded-lg transition-all relative overflow-hidden'>

                    <Slider {...settings}>
                        {
                            prodItems.prodSub && prodItems.prodSub.map((list: any) => (
                                <>
                                    <figure className='w-full h-[150px] text-center mb-0 pb-0'>
                                        <Image
                                            height={200}
                                            width={200}
                                            src={list.prodThumb}
                                            alt=''
                                            className='inline w-full h-full object-contain  '
                                        />
                                    </figure>
                                </>
                            ))
                        }
                    </Slider>

                    <div className='text-sm text-center text-gray-500 my-2 group-hover:my-1 transition-all delay-700'>{prodItems.prodBrand}</div>
                    <div className='w-full text-center'>
                        <Link href={`/product/${prodItems._id}`} className='text-black w-full text-center text-sm my-2 transition-all group-hover:my-1 '>
                            {/* {prodItems.prodTitle.slice(0, 20)}... */}
                            {Truncate(prodItems.prodTitle)}
                        </Link>
                    </div>


                    {/* reviews */}
                    <div className='w-full text-center'>
                        <ProductReviewRating
                            prodReviews={prodItems.reviews}
                        />
                    </div>

                    <div className='w-full flex gap-3 md:justify-center items-center justify-center'>
                        <div className=' text-red-600 text-sm'>{formatPrice(prodItems.prodPrice)}</div>
                        <div className='text-gray-600 text-sm line-through'>
                            {/* ${prodItems.prodBaseprice} */}
                            {formatPrice(prodItems.prodBaseprice)}
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

                        <div
                            onClick={() => {
                                addToCart(prodItems)
                            }}
                            className='text-[#29abe2] transition-all delay-1000 w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center cursor-pointer'>
                            <ShoppingBagIcon />
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
