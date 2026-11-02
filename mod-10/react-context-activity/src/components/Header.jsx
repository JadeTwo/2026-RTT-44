// X Create a Header component that consumes UserContext to display user info/login button.

import { useContext } from "react"
import { UserContext } from "../context/userContext";

export default function Header() {

    const { currentUser, login } = useContext(UserContext);

    console.log(currentUser.name);

    return (
        <div>
            Welcome {currentUser.name}! <button onClick={login}>Login</button>
        </div>
    )
}