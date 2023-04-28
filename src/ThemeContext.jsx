import { createContext, useState } from "react";

export const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("")
    return (
        <UserContext.Provider value={{ theme, setTheme }}>
            {children}
        </UserContext.Provider>
    )
}