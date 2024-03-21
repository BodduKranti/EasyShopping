"use client"

import { Input } from '@/app/component'
import React, { ChangeEvent, MutableRefObject, RefObject, useRef, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
const FormRegister = () => {
    const router = useRouter()
    const errMessageref = useRef<HTMLInputElement>(null)
    const [fields, setFields] = useState<any>({})
    const inputFormFields = (e: ChangeEvent<HTMLInputElement>) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const registerSubmit = async (e: any) => {
        e.preventDefault();
        // console.log(process.env.NEXT_PUBLIC_HOST_URL)
        if (fields.userPassword === fields.userCnfPassword) {
            await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}auth/register`, fields)
                .then((res: any) => {
                    setTimeout(() => {
                        toast.success('Successfully Registered');
                        router.push('/signin')
                    }, 2000)
                })
                .catch((err: any) => {
                    toast.error('Something went wrong...')
                })
        }
        else {
            toast.error('Password should be same..')
        }

    }

    return (
        <>
            {errMessageref.current?.value}
            <form className="space-y-6">
                <div >
                    <Input
                        name='userName'
                        value={fields.userName}
                        required={false}
                        onchange={inputFormFields}
                        type='text'
                        placeholder='Enter Your Name'
                        ref={errMessageref}
                    />
                </div>

                <div >
                    <Input
                        name='userEmail'
                        value={fields.userEmail}
                        required={false}
                        onchange={inputFormFields}
                        type='email'
                        placeholder='Enter Your Email...'
                        ref={errMessageref}
                    />
                </div>

                <div className="flex flex-col">
                    <Input
                        name='userPassword'
                        value={fields.userPassword}
                        required={false}
                        onchange={inputFormFields}
                        type='password'
                        placeholder='Enter Your Password...'
                    />
                </div>
                <div className="flex flex-col">
                    <Input
                        name='userCnfPassword'
                        value={fields.userCnfPassword}
                        required={false}
                        onchange={inputFormFields}
                        type='password'
                        placeholder='Enter Your Confirm Password...'
                    />
                    <div className="text-sm text-end mt-3">
                        <div className="font-semibold text-white hover:text-white">
                            Forgot password?
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        onClick={registerSubmit}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </>
    )
}

export default FormRegister
