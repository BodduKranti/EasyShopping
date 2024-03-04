"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import useProductHook from '../../ProductCustomHook/useProductHook';
import Innerpagehero from '@/app/component/InnerPage/Innerpagehero';
import ProductList from '@/app/component/Product/ProductList';

const ProductBrand = () => {
    const { prodbrand } = useParams();
    const { getprodCatList, getResult } = useProductHook()

    useEffect(() => {
        getprodCatList(prodbrand, 'prodBrand')
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [prodbrand])
    return (
        <>
            <Innerpagehero
                pageTitle={`${prodbrand}`}
            />

            <div className='w-full py-8'>
                <div className='container'>
                    <ProductList
                        desktopView={6}
                        mobileView={2}
                        gapBetweenItems={3}
                        mapData={getResult}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductBrand
