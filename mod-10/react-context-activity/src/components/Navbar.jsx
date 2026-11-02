import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"


// Step 3: Use the context!

export default function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={'nav-' + theme}>
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>About</li>
            </ul>
            <button onClick={toggleTheme}>{theme === 'light' ? 'Dark' : 'Light'}</button>
        </nav>
    )
}