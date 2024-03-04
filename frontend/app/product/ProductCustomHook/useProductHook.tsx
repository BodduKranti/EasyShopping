"use client"
import { Products } from '@/app/component/ProductJson'
import { useState } from 'react'


const useProductHook = () => {

    const [getResult, setGetResult] = useState<any>([])

    const getprodCatList = (prodcat: any, key: any) => {
        var decodedText = decodeURIComponent(prodcat);
        let getPrdData: any = Products.filter((list: any) => list[`${key}`] === decodedText)
        setGetResult(getPrdData)
    }
    return { getprodCatList, getResult }
}

export default useProductHook
