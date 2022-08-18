import { createContext, useEffect, useState } from "react";

interface ContextProps {
    theme?: string;
    setTheme?: (theme: string) => void;
}

export const ThemeContext = createContext({} as ContextProps);

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState<string>("light");

    function writeLocalStorage(theme) {
        localStorage.setItem("theme", theme)
        return
    }

    function updateHTLMTag(theme) {
        if (theme === "dark") {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        // roda na primeira vez apenas  
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const localTheme = localStorage.getItem("theme");
        localTheme ? setTheme(localTheme) : systemTheme && setTheme("dark");
    }, [])


    useEffect(() => {
        // Atualiza na mudança do theme
        writeLocalStorage(theme); // Local storage
        updateHTLMTag(theme); // Classes
    }, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
