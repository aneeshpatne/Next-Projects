'use client';
import { createContext, useContext, useState } from "react";

export const Context = createContext();

export default function AppProvider ({children}){
    const [state, setState] = useState(0);
    function f1(){
        setState((prev) => (prev+1));
    }
    return(<Context.Provider value={{state, f1}} >
        {children}
    </Context.Provider>);
}
export const ThemeContext = () =>{ 
    return useContext(Context);}