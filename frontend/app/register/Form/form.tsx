"use client"

import { Input } from '@/app/component'
import React, { ChangeEvent, MutableRefObject, RefObject, useRef, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
const FormRegister = () => {
    const router = useRouter()
    const errMessageref = useRef<HTMLInputElement>(null)
    const [loading, setLoading] = useState<any>(false)
    const [fields, setFields] = useState<any>({
        userPassword: '',
        userEmail: '',
        userName: '',
        userCnfPassword: ''
    })
    const inputFormFields = (e: ChangeEvent<HTMLInputElement>) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const registerSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        // console.log(process.env.NEXT_PUBLIC_HOST_URL)
        if (
            fields.userPassword !== '' &&
            fields.userName !== '' &&
            fields.userEmail !== '' &&
            fields.userCnfPassword !== ''
        ) {
            if (fields.userPassword === fields.userCnfPassword) {
                await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}auth/register`, fields)
                    .then((res: any) => {
                        setTimeout(() => {
                            toast.success('Successfully Registered');
                            router.push('/signin')
                            setLoading(false)
                        }, 2000)
                    })
                    .catch((err: any) => {
                        setTimeout(() => {
                            setLoading(false)
                            toast.error('Something went wrong...')
                        }, 2000)

                    })
            }
            else {
                setTimeout(() => {
                    setLoading(false)
                    toast.error('Password should be same..')
                }, 2000)

            }
        }

        else {
            setTimeout(() => {
                setLoading(false)
                toast.error("Please do not leave blank")
            }, 2000)

        }


    }

    return (
        <>
            <form className="space-y-4 mt-4">
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

                </div>

                <div>
                    <button
                        type="submit"
                        onClick={registerSubmit}
                        className="flex w-full justify-center rounded-md bg-[#EE6909] border-0 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[rgb(238,105,9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {loading ?
                            <>
                                <div className='innerBtnloader'></div>
                            </> : 'Register'}

                    </button>
                </div>
            </form>
        </>
    )
}

export default FormRegister
