const simpleForm = document.querySelector('#simple-form');
const longForm = document.querySelector('#long-form');

simpleForm.addEventListener('input', function(event) {
    const input = event.target;
    sessionStorage.setItem('name', input.value);
})

window.addEventListener('load', function() {
    const nameInput = document.querySelector('#name');
    // update the input for name to the current sessionStorage value for name
    nameInput.value = sessionStorage.getItem('name');
})

simpleForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('testing');
})

longForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('form submitted');
})

longForm.addEventListener('input', function (event) {
    // rename the target element to "input"
    let input = event.target;
    
    // check the validity of the input using the "Validity State Object"
    console.log(input.validity);

    // change the validation message (error message)
    input.setCustomValidity("Uh oh...");

    const span = document.getElementById("customEmailError");
    span.textContent = input.validationMessage

    // find out what the message is
    console.log(input.validationMessage)

    // clear your message and custom error
    // input.setCustomValidity("");

    // check validity of this input
    console.log(input.checkValidity());

    // checkValidity returns a boolean (true or false)
    if (input.checkValidity()) {
        // perform some logic here for when the input is valid
    }
})

