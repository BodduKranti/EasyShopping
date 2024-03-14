"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'

import AuthNavigation from './AuthNavigation';

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <nav aria-label="Top" className="w-full">
                <div className="flex h-16 items-center">


                    {/* Logo */}
                    <div className="ml-0 md:ml-4 flex lg:ml-0">
                        <Link href={"/"}>
                            <Image
                                className="h-12 md:h-14 w-auto"
                                alt=""
                                src={"/images/logo.png"}
                                width={120}
                                height={40}
                            />
                        </Link>
                    </div>


                    <AuthNavigation />

                    <button
                        type="button"
                        className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                        onClick={() => setOpen(true)}
                    >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open menu</span>
                        <FaBarsStaggered />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
