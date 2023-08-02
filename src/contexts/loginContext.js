import { createContext, useState } from "react";

export const loginContext = createContext({});


export const LoginContextProvider = ({ children }) => {

    const [clickLogin, setclickLogin] = useState(false);
    const [clickSignup, setclickSignup] = useState(false);
    return (
        <loginContext.Provider value={{ clickLogin, setclickLogin, clickSignup, setclickSignup }}>
            {children}
        </loginContext.Provider>
    )
}
