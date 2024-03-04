import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface prouctItemsInter {
    prodCatTitle: string,
    prodCatThumb: string
}
interface prodCatItmeProps {
    prodcatItmes: prouctItemsInter
}
const ProdCatitem: React.FC<prodCatItmeProps> = ({ prodcatItmes }) => {
    return (
        <>
            <div className='w-full text-center flex items-center justify-center group'>
                <div className='inline-block group-hover:shadow-md group-hover:bg-white transition-all p-2'>
                    <figure className='w-[120px] h-[120px] mb-2 group-hover:border-[rgb(49 53 116)] group-hover:border flex items-center justify-center rounded-full overflow-hidden'>
                        <Image
                            width={100}
                            height={100}
                            src={prodcatItmes.prodCatThumb}
                            alt=''
                            className='w-full h-full object-fill group-hover:rounded-full transition-all group-hover:scale-125 '
                        />
                    </figure>
                    <Link href={`/product/prodcat/${prodcatItmes.prodCatTitle}`} className='text-center'>{prodcatItmes.prodCatTitle}</Link>
                </div>
            </div>
        </>
    )
}

export default ProdCatitem
