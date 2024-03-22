import React from 'react'

interface inputFields {
    name: string,
    value: string,
    required: boolean,
    onchange: (e: any) => void,
    type: string,
    placeholder?: string,
    ref?: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<inputFields> = ({
    name,
    value,
    required,
    onchange,
    type,
    placeholder,
    ref
}) => {
    return (
        <>
            <input
                placeholder={placeholder}
                name={name}
                type={type}
                required={required}
                onChange={onchange}
                ref={ref}
                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </>
    )
}

export default Input
