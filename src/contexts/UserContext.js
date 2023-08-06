import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { loginContext } from "./loginContext";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [username, setusername] = useState("");
  const [id, setId] = useState();
  const { setclickSignup } = useContext(loginContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await axios.get("/profile");
        setId(userData.data.id);
        setusername(userData.data.username);
      } catch (err) {
        if (err) {
          setclickSignup(true);
        }
        // console.log(err.message);
      }
    };

    fetchUserData();
  }, []);
  return (
    <UserContext.Provider value={{ id, setId, username, setusername }}>
      {children}
    </UserContext.Provider>
  );
};
