// X It should use useState to manage a color state variable (initially, say, “white”).
// X It should define a handler function handleColorChange(newColor: string) that updates the color state.
// X It should render the ColorInput component, passing handleColorChange as the onColorChange prop.
// It should also display the current color state visually, perhaps by setting the background color of a div.

import { useState } from "react"

import ColorInput from "./ColorInput";


export default function ColorPicker() {

    const [color, setColor] = useState("white");

    function handleColorChange(newColor) {
        setColor(newColor);
    }

    const style = {
        backgroundColor: color,
        border: '1px solid black'
    }

    return (
        <div>
            <h1>Color Picker</h1>
            <ColorInput onColorChange={handleColorChange} />
            <div style={style}>Current color: {color}</div>
        </div>
    )
}