// X It should render a text input field (<input type="text">).
// X It should accept a prop onColorChange which is a function (color: string) => void.
// X When the input value changes (onChange), it should call the onColorChange prop 
// X with the input’s current value (event.target.value).

export default function ColorInput({ onColorChange }) {
    return (
        <div>
            <input 
                type="text" 
                onChange={(e) => onColorChange(e.target.value)}
            />
        </div>
    )
}







    // Option 1:
    // const onColorChange = props.onColorChange
    // const text = props.text
    // const color = props.color

    // Option 2 (object destructuring):
    // const { onColorChange, text, color } = props;



    // Option 1: 
    // let result = useState()

    // const value = result[0];
    // const setValue = result[1];

    // Option 2 (array destructuring): 
    // const [value, setValue] = useState()