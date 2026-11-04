import { useNavigate } from 'react-router-dom';

export default function Header({ title, link = false }) {

    // we'll use this to send the user back to the home page
    const navigate = useNavigate();

    // for inline styles, start with an object
    const style = {
        textAlign: "center",
        border: "3px solid skyblue"
    }

    console.log(link)

    return (
        <header>
            {link && <div onClick={() => navigate(link)}>{"<"}</div>}
            <h1 style={style} id="header">
                {title}
            </h1>
        </header>
    )
}

