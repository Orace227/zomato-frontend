import { createContext, useState } from "react";

export const DropdownItemContext = createContext({});


export const DropdownItemContextProvider = ({ children }) => {

    const [Title, setTitle] = useState("India");
    const [language, setlanguage] = useState("English");
    return (
        <DropdownItemContext.Provider value={{ Title, setTitle, language, setlanguage }}>
            {children}
        </DropdownItemContext.Provider>
    )
}
