import { useState } from "react"

export default function ShowHideMessage() {

    const [showMessage, setShowMessage] = useState(false);

    let message;
    let buttonTitle = 'Show Message';

    // conditional rendering
    if (showMessage) {
        message = <p>Secret message revealed! 🎉</p>;
        buttonTitle = 'Hide Message';
    }

    return (
        <section>
            <h2>Toggle Visibility Example</h2>
            <button onClick={() => setShowMessage(!showMessage)}>{buttonTitle}</button>
            {message}
        </section>
    )
}