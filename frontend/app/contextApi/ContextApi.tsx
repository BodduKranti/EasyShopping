"use client"
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface contextInterface {
    store: any,
    setStore: Dispatch<SetStateAction<any>>
}

const ContextApiStore = createContext<contextInterface>({
    store: {},
    setStore: () => { }
})


const ContextAuth = ({ children }: { children: React.ReactNode }) => {
    const [store, setStore] = useState<any>({})
    return (
        <>
            <ContextApiStore.Provider value={{ store, setStore }}>
                {children}
            </ContextApiStore.Provider>
        </>
    )
}

const UseContextAuth = () => useContext(ContextApiStore)
export { UseContextAuth, ContextAuth }