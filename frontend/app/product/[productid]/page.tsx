
"use client"
import ProductDetails from '@/app/component/Product/ProductDetails'
import { Products } from '@/app/component/ProductJson'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProductDetailsPage = () => {
    const { productid } = useParams();
    let getPrdbyid: any = Products.filter((list: any) => list._id === Number(productid))

    const [prodTab, setProdTab] = useState<any>('Description')
    const TabsName = [
        { tabTitle: 'Description', tabDesc: getPrdbyid[0].prodDesc },
        { tabTitle: 'Additional Information', tabDesc: getPrdbyid[0].prodAdditionalInfo },
        { tabTitle: 'Reviews', tabDesc: getPrdbyid[0].prodDesc }
    ]

    useEffect(() => {
    }, [productid])

    console.log(getPrdbyid[0].prodAdditionalInfo)
    return (
        <>
            <div className='w-full shadow-sm bg-black text-white py-1'>
                <div className='container'>
                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2 lg:max-w-7xl">
                            <li>
                                <div className="flex items-center text-sm">
                                    <Link href={`/product/prodcat/${getPrdbyid[0].prodCat}`}>
                                        {getPrdbyid[0].prodCat}
                                    </Link>

                                </div>
                            </li>
                            <svg
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-4 text-gray-300"
                            >
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                            <li>
                                <div className="flex items-center text-sm">
                                    <Link href={`/product/prodBrand/${getPrdbyid[0].prodBrand}`}>
                                        {getPrdbyid[0].prodBrand}
                                    </Link>
                                </div>
                            </li>
                            <svg
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-4 text-gray-300"
                            >
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                            <li>
                                <div className="flex items-center text-gray-500 text-sm">
                                    {getPrdbyid[0].prodTitle}

                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div className='w-full py-8'>
                <div className='container'>
                    <ProductDetails
                        prodDetails={getPrdbyid[0]}
                    />
                </div>
            </div>

            {/* Product details */}
            <div className='w-full my-5'>
                <div className='container'>
                    <div className='w-full flex overflow-y-hidden overflow-x-auto'>
                        {TabsName.map((tabs: any) => (
                            <>
                                <div
                                    onClick={() => setProdTab(tabs.tabTitle)}
                                    className={`${prodTab === tabs.tabTitle ? 'border-[#0f2031] border-b-2' : 'border-gray-500'} border-b cursor-pointer px-6 py-3 text-xl`}>{tabs.tabTitle}</div>
                            </>
                        ))}

                    </div>
                    {TabsName.map((tabs: any) => (
                        <>
                            {tabs.tabDesc &&
                                <div
                                    className={`${prodTab === tabs.tabTitle ? 'block' : 'hidden'} shadow-2xl p-4`}>
                                    {tabs.tabDesc}
                                </div>
                            }

                        </>
                    ))}

                </div>

            </div>
        </>
    )
}

export default ProductDetailsPage
