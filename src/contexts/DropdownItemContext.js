import { createContext, useState } from "react";

export const DropdownItemContext = createContext({});

export const DropdownItemContextProvider = ({ children }) => {
  const [Title, setTitle] = useState("India");
  const [language, setlanguage] = useState("English");
  const [hamburgur, setHamBurgur] = useState(false);

  return (
    <DropdownItemContext.Provider
      value={{
        Title,
        setTitle,
        language,
        setlanguage,
        hamburgur,
        setHamBurgur,
      }}
    >
      {children}
    </DropdownItemContext.Provider>
  );
};
