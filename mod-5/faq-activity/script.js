// select the element by id
const container = document.querySelector('#faq-container');

// add an event listener to the element
container.addEventListener('click', handleDisplay);

// event handler (function we use for the listener)
function handleDisplay(event) {  // event object (all the info about the event)

    // rename the target to "element"
    let element = event.target;

    // make sure the target is actually a question (it could be an answer)
    if (element.classList.contains('question') === false) {
        console.log('this is not a question... abort!')
        return; // stop the function!
    }
 
    // renaming the sibling div next to the question
    let answer = element.nextElementSibling;

    // check if the answer is set to display: none
    if (answer.style.display === "none") {
        // make the answer appear (changing the display attribute)
        answer.style.display = "block";
    } else {
        // make the answer disappear (changing the display attribute)
        answer.style.display = "none";
    }

    console.log(answer);
}
