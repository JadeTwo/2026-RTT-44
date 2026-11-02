// X Create a MainContent component that consumes both ThemeContext (for styling) and UserContext (to display user-specific content).

import { useContext } from "react"
import { ThemeContext } from "../context/themeContext";
import { UserContext } from "../context/userContext";

export default function MainContent() {

    const { theme } = useContext(ThemeContext);
    const { currentUser } = useContext(UserContext);

    return (
        <div className={theme}>
            Here is all of {currentUser.name}'s content:
            <ul>
            {currentUser.content.map(candy => 
                <li key={candy}>{candy}</li>
            )}
            </ul>
        </div>
    )
}