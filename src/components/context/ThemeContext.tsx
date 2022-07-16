import { createContext } from "react";
import { theme } from "./Thems";
// step 1 : create a context 
// step 2: initialize context
// step 3: create provider

// step 4: useContext 


type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
     return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

