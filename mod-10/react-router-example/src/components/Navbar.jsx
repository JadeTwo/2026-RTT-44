import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul>
                {/* clicking on the link changes the path */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}