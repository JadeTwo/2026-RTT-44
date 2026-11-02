// Use the context!
// - We need the context object
import { ThemeContext } from "../context/themeContext"
// - We need a hook to use it
import { useContext } from "react"

export default function Content() {

    // combine the two to get the value
    const { theme } = useContext(ThemeContext);

    return (
        <div className={'content-' + theme}>
            Content
        </div>
    )
}