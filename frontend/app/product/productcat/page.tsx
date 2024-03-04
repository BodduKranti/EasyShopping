import Innerpagehero from '@/app/component/InnerPage/Innerpagehero'
import ProductCategoryList from '@/app/component/Product/ProductCategoryList'
import React from 'react'

const page = () => {
    return (
        <>
            <Innerpagehero
                pageTitle={"Product Category"}
            />

            <ProductCategoryList />
        </>
    )
}

export default page
