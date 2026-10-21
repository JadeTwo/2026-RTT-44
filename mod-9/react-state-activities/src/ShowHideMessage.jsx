import { useState } from "react"

export default function ShowHideMessage() {

    const [showMessage, setShowMessage] = useState(false);

    // let message;
    // let buttonTitle = 'Show Message';

    // // conditional rendering
    // if (showMessage) {
    //     message = <p>Secret message revealed! 🎉</p>;
    //     buttonTitle = 'Hide Message';
    // }

    // ternary operator
    // condition ? value_if_true : value_if_false

    return (
        <section>
            <h2>Toggle Visibility Example</h2>
            {/* conditional rendering with ternary operator */}
            <button onClick={() => setShowMessage(!showMessage)}>{showMessage ? 'Hide' : 'Show'} Message</button>
            
            {/* conditional rendering with short circuit evaluation */}
            {/* {showMessage && <p>Secret message revealed! 🎉</p>} */}

            {/* adding the fade in and out */}
            {showMessage ? <p className="fade">Secret message revealed! 🎉</p> : <p>Secret message revealed! 🎉</p>}
        </section>
    )
}