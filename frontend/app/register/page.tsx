import Image from 'next/image'
import React from 'react'
import { Input } from '../component'
import FormRegister from './Form/form'

const RegisterPage = () => {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">




                <div className='w-full block md:flex gap-4'>
                    <div className='w-full md:w-1/2'>
                        <div className='w-full text-center aspect-10'>
                            <div className='inline-block w-36 '>
                                <Image
                                    fill
                                    className='!relative w-36 h-32'
                                    alt='logo'
                                    src={'/images/logo.png'}
                                />
                            </div>

                        </div>
                    </div>
                    <div className='w-full md:w-1/2 bg-[#29abe2] py-10 px-8'>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>


                        <FormRegister />

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?
                            <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Start a 14 day free trial
                            </span>
                        </p>

                    </div>
                </div>



            </div>

        </>
    )
}

export default RegisterPage
