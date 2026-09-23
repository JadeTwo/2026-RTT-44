const simpleForm = document.querySelector('#simple-form');
const longForm = document.querySelector('#long-form');

simpleForm.addEventListener('submit', function (event) {
    event.preventDefault();
})

longForm.addEventListener('submit', function (event) {
    event.preventDefault();
})

longForm.addEventListener('change', function (event) {
    let input = event.target;
    // console.log('is the input valid: ', input.checkValidity());
    // input.reportValidity();

    // check if the input passes validation
    // if (!input.validity.valid) {
    //   alert('Please enter your name.');
    //   input.focus();
    //   return; // Stop further processing if invalid
    // }

    // // turns the form element into a form object
    // const data = new FormData(longForm);

    // // access the input value using the name attribute
    // console.log(data.get('username'));
    // console.log(data.get('password'));
    // // reset the form 
    // longForm.reset();

    // check to see if it is a email input
    if (input.id === "email") {
        console.log('email input found.')
        // check if the email input matches the correct format
        if (input.validity.typeMismatch) {
            input.setCustomValidity('Something went wrong.');
            console.log('testing');
        } else if (input.validity.valueMissing) {
            input.setCustomValidity('We need your email address to contact you!');
        }
        else {
            input.setCustomValidity(''); // Clear custom error if valid
        }

        // make the built-in HTML tooltip/bubble for the error appear
        input.reportValidity();

        // Display the custom message or clear it
        // customEmailError.textContent = input.validationMessage;
    }
})