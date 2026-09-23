// selecting elements
let btn = document.querySelector('button');
let div = document.querySelector('div');
let body = document.querySelector('body');

// event handler
function handleBubble(event) {
    console.log(
        'Phase: Bubble, Clicked: ', // uses the "bubble" phase by default
        event.target.tagName, 
        'Listener for: ', 
        event.currentTarget.tagName
    );
    // use stopPropogation (end the phase)
    // event.stopPropagation();
}

// attaching event handlers to elements and listening for a "click" event
btn.addEventListener('click', handleBubble)
div.addEventListener('click', handleBubble)
body.addEventListener('click', handleBubble)

function handleCapture(event) {
    console.log(
        'Phase: Capture, Clicked: ', // uses the "bubble" phase by default
        event.target.tagName, 
        'Listener for: ', 
        event.currentTarget.tagName
    );
}

// attaching event handlers (for capture phase)
btn.addEventListener('click', handleCapture, { capture: true })
div.addEventListener('click', handleCapture, { capture: true })
body.addEventListener('click', handleCapture, { capture: true })