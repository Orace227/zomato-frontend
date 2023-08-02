import { createContext, useState } from "react";

export const UserContext = createContext({});


export const UserContextProvider = ({ children }) => {

    const [username, setusername] = useState();
    const [id, setId] = useState();
    return (
        <UserContext.Provider value={{ id, setId, username, setusername }}>
            {children}
        </UserContext.Provider>
    )
}
