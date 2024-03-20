import { Rating } from '@mui/material'
import React from 'react'

interface RatingValue {
    ratingVal: number
}

const ProductRating: React.FC<RatingValue> = ({ ratingVal }) => {
    return (
        <>
            <div className=' text-gray-600 text-sm'>
                <Rating className='text-[16px]' name="read-only" value={ratingVal} readOnly />
            </div>
        </>
    )
}

export default ProductRating
