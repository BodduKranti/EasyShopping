"use client"

import React, { Fragment, useState } from 'react'

import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { NavLinksData } from '../NavigationLinksdata'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Navigation = () => {

    return (
        <>
            <div className='container'>
                {/* Flyout menus */}
                <Popover.Group className="hidden lg:block lg:self-stretch">

                    <div className="flex h-full space-x-8">
                        {NavLinksData.map((list: any) => (
                            <>
                                {list.subPages && list.subPages.length > 0 ?
                                    <>
                                        <Popover className="relative">
                                            <Popover.Button className="flex py-3 text-white focus:outline-none  items-center gap-x-1 text-sm font-semibold leading-6">
                                                {list.pageName}
                                                <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-0 top-full  z-10 mt-3 py-3 w-[250px] max-w-md overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5">
                                                    {list.subPages && list.subPages.map((innerList: any) => (
                                                        <>
                                                            <div className='w-full px-2 py-1'>
                                                                <Link
                                                                    className='relative  
                                                             text-black                    
                                                            after:absolute
                                                            after:right-0
                                                            after:-bottom-[2px]
                                                            after:w-0
                                                            after:transition-[width]
                                                            after:duration-[.3s]
                                                            after:border-b-2
                                                            after:border-[#ec6a0a]
                                                            hover:after:left-0
                                                            hover:after:w-full  
                                                            w-full
                                                        '
                                                                    href={`${innerList.href}`}>{innerList.pageName}</Link>
                                                            </div>

                                                        </>
                                                    ))}
                                                </Popover.Panel>

                                            </Transition>
                                        </Popover>

                                    </> :
                                    <>
                                        <Link
                                            className='relative    
                                        text-white  
                                        py-3                
                                        after:absolute
                                        after:right-0
                                        after:-bottom-[2px]
                                        after:w-0
                                        after:transition-[width]
                                        after:duration-[.3s]
                                        after:border-b-2
                                        after:border-[#ec6a0a]
                                        hover:after:left-0
                                        hover:after:w-full                    
                                    '
                                            href={`${list.href}`}>{list.pageName}</Link>
                                    </>}


                            </>
                        ))}
                    </div>
                </Popover.Group>
            </div>
        </>
    )
}

export default Navigation
