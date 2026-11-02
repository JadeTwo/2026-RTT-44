// X Create a Sidebar component that consumes ThemeContext to style itself.

import { useContext } from "react"
import { ThemeContext } from "../context/themeContext";

export default function Sidebar() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            Sidebar
        </div>
    )
}