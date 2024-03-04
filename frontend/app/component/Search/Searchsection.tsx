import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const Searchsection = () => {
    const [selectCat, setSelectCat] = useState<any>("All Categories");
    const [categoryPop, setCategoryPop] = useState<any>(false);

    return (
        <>
            <div className='w-full relative'>
                <div className='border relative border-gray-300 items-center rounded-xl flex justify-between divide-x'>
                    <div className='w-auto flex items-center gap-2 px-3 text-center text-sm border-r-1 cursor-pointer'
                        onClick={() => {
                            setCategoryPop(true)
                        }}
                    >
                        {selectCat}
                        <MdKeyboardArrowDown className='w-4 h-4' />
                    </div>
                    <input type='search' className='w-full 
                        border-0 
                        focus:outline-none 
                        focus:shadow-none
                         focus:ring-0
                        '
                    />
                    <div className='w-[50px] text-center'>
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 inline cursor-pointer" aria-hidden="true" />
                    </div>


                </div>
                {/* select categories */}
                <div className={`${categoryPop ? 'block' : "hidden"} w-full relative left-0 -mt-12 bg-white shadow-md`}>
                    <div className='w-full border-b border-gray-300 py-2 px-4 flex justify-between'>
                        <h3>Select Categories</h3>
                        <XMarkIcon
                            onClick={() => {
                                setCategoryPop(false)
                            }}
                            className="h-6 w-6 cursor-pointer" aria-hidden="true" />
                    </div>
                    <div className='w-full p-3'>
                        <ul>
                            <li className='cursor-pointer' onClick={() => {
                                setSelectCat('Electronics')
                                setCategoryPop(false)
                            }}>Electronics</li>
                            <li className='cursor-pointer' onClick={() => {
                                setSelectCat('Home Appliances')
                                setCategoryPop(false)
                            }

                            }>Home Appliances</li>
                            <li className='cursor-pointer' onClick={() => {
                                setCategoryPop(false)
                                setSelectCat('Furniture')
                            }}>Furniture</li>
                            <li className='cursor-pointer' onClick={() => {
                                setSelectCat('Fashion')
                                setCategoryPop(false)
                            }}>Fashion</li>
                            <li className='cursor-pointer' onClick={() => {
                                setCategoryPop(false)
                                setSelectCat('Accesseries')
                            }}>Accesseries</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchsection
