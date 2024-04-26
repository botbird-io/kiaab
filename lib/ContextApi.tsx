'use client'
import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
interface ContextType {
    state: { showModal: boolean };
    setState: Dispatch<SetStateAction<{ showModal: boolean; }>> | (() => void);
}
const Context = createContext<ContextType>({ state: { showModal: true }, setState : ()=>{} });

export function ContextProvider({children}:Readonly<{
    children: React.ReactNode;
  }>) {
    const [state,setState] = useState({showModal:true});
    return(
        <Context.Provider value={{state,setState}}>
            {children}
        </Context.Provider>
    )
}

export function useGlobalContext(){
    return useContext(Context);
}