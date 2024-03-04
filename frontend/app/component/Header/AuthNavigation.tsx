"use client"
import React, { useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import CartSlide from '../Cart/CartSlide'
import Quickpopup from '../QuickViewPop/Quickpopup'
import Searchsection from '../Search/Searchsection'
import Image from 'next/image'

const AuthNavigation = () => {
    const authLinks = [
        { linkName: "Sign In", href: "/signin" },
        { linkName: "Create account", href: "/register" }
    ]

    const [open, setOpen] = useState<any>(false)
    const [quickpopOpen, setQuickpopOpen] = useState<any>(false)
    return (
        <>
            <div className="ml-auto flex items-center">
                <div className="hidden md:flex md:items-center md:justify-between md:gap-4
                 divide-x-2 mx-2
                ">

                    {authLinks.map((list: any) => (
                        <>
                            <Link
                                href={`${list.href}`}
                                className='text-base last:ps-4 font-medium text-gray-700 hover:text-gray-800'
                            >
                                {list.linkName}
                            </Link>
                        </>
                    ))}

                </div>

                <div className="hidden lg:ml-8 lg:flex">
                    <div className="flex items-center text-gray-700 hover:text-gray-800">
                        <Image
                            width={100}
                            height={100}
                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                            alt=""
                            className="block h-auto w-5 flex-shrink-0"
                        />
                        <span className="ml-3 block text-sm font-medium">CAD</span>
                        <span className="sr-only">, change currency</span>
                    </div>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                    <div className="p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                        onClick={() => setQuickpopOpen(true)}
                    >
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                    <div
                        onClick={() => setOpen(true)}
                        className="group -m-2 flex items-center p-2 cursor-pointer">
                        <ShoppingBagIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                    </div>
                </div>
            </div>


            <CartSlide
                open={open}
                setOpen={setOpen}
            />

            {/* Quick Popup */}
            <Quickpopup
                quickpopOpen={quickpopOpen}
                setQuickpopOpen={setQuickpopOpen}
                content={<Searchsection />}
            />
        </>
    )
}

export default AuthNavigation
