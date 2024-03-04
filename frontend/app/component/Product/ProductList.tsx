import React from 'react'
import ProductItems from './ProductItems'

interface ProductListInterface {
    desktopView: number,
    mobileView: number,
    gapBetweenItems: number,
    mapData: []
}

const ProductList: React.FC<ProductListInterface> = ({
    desktopView,
    mobileView,
    gapBetweenItems,
    mapData
}) => {
    return (
        <>
            <div className={`w-full grid 
                grid-cols-${mobileView} 
                md:grid-cols-${desktopView} 
                gap-${gapBetweenItems}
                `}>
                {mapData.map((data: any) => (
                    <>
                        <ProductItems
                            prodItems={data}
                        />
                    </>
                ))}

            </div>
        </>
    )
}

export default ProductList
