import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext.jsx";

export function ThemeProvider({ children }) {
    // Retrieve theme
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "dark";

        const savedTheme = window.localStorage.getItem("theme");
        if (savedTheme === "dark" || savedTheme === "light") {
            return savedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    });

    // Change theme
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle theme
    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}