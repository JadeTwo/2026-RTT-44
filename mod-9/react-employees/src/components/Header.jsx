export default function Header() {

    // for inline styles, start with an object
    const style = {
        textAlign: "center",
        border: "3px solid skyblue"
    }

    return (
        <h1 style={style} id="header">Employee Directory</h1>
    )
}

