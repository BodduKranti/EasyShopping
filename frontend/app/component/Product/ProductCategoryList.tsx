import React from 'react'
import { ProductCateogry } from '../ProductJson'
import ProdCatitem from './ProdCatitem'

const ProductCategoryList = () => {
    return (
        <>
            <div className='w-full py-8'>
                <div className='container grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8'>
                    {ProductCateogry.map((items: any) => (
                        <>
                            <ProdCatitem
                                prodcatItmes={items}
                            />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductCategoryList
