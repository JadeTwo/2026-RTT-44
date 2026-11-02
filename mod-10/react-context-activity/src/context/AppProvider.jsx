import { useState } from "react";

import { UserContext } from "./userContext";
import { ThemeContext } from "./themeContext";

export default function AppProvider({ children }) {

    const [theme, setTheme] = useState('dark');
    const [currentUser, setCurrentUser] = useState({ name: 'Bob', content: ['Sour Patch', 'Wachamacallits', 'Candy Corn'] })

    function login() { 
        alert('logged in')
    }

    function logout() { }

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <UserContext.Provider value={{ currentUser, login, logout }}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}