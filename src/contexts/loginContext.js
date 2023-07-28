import { createContext, useState } from "react";

export const loginContext = createContext({});


export const LoginContextProvider = ({ children }) => {

    const [clickLogin, setclickLogin] = useState(false);
    return (
        <loginContext.Provider value={{ clickLogin, setclickLogin }}>
            {children}
        </loginContext.Provider>
    )
}
