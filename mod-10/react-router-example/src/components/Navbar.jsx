import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul>
                {/* clicking on the link changes the path */}
                <li>
                    <NavLink 
                        to="/" 
                        // turning the link a different color if it is the current page
                        style={({ isActive }) => ({ color: isActive ? 'black' : 'blue' })}
                    >
                        Home
                    </NavLink>
                </li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}