"use client"
import React, { Dispatch, SetStateAction, createContext, useContext, useRef, useState } from "react";

interface contextInterface {
    store: any,
    setStore: Dispatch<SetStateAction<any>>,
    headerCartPosition: any,
    setHeaderCartPosition: Dispatch<SetStateAction<any>>,
    showaddtoCrtImg: any
}

const ContextApiStore = createContext<contextInterface>({
    store: {},
    setStore: () => { },
    headerCartPosition: {},
    setHeaderCartPosition: () => { },
    showaddtoCrtImg: {}
})


const ContextAuth = ({ children }: { children: React.ReactNode }) => {
    const [store, setStore] = useState<any>({})
    const [headerCartPosition, setHeaderCartPosition] = useState<any>({
        hderCartPostion: 0,
        hdrPosition: 0
    })
    const showaddtoCrtImg = useRef<HTMLDivElement>(null)

    console.log(headerCartPosition)
    return (
        <>
            <ContextApiStore.Provider value={{
                store,
                setStore,
                setHeaderCartPosition,
                headerCartPosition,
                showaddtoCrtImg
            }}>
                {children}
            </ContextApiStore.Provider>
        </>
    )
}

const UseContextAuth = () => useContext(ContextApiStore)
export { UseContextAuth, ContextAuth }