import React from 'react'
import ProductRating from './ProductRating'

interface ProductReviews {
    prodReviews: []
}

const ProductReviewRating: React.FC<ProductReviews> = ({ prodReviews }) => {
    console.log(prodReviews)
    const ReviewStar = prodReviews.reduce((acc: any, item: any) => item.rating + acc, 0) / prodReviews.length
    console.log(ReviewStar)
    return (
        <>
            <div className='w-full flex gap-3 md:justify-start justify-center items-center'>
                {prodReviews.length > 0 ? <>
                    <ProductRating
                        ratingVal={ReviewStar}
                    />
                    <div className=' text-gray-600 text-sm'>{prodReviews.length} reviews</div>

                </> : <>
                    <ProductRating
                        ratingVal={0}
                    />
                    <div className=' text-gray-600 text-sm'>0 review</div>

                </>}
            </div>
        </>
    )
}

export default ProductReviewRating
