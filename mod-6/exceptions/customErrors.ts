// create a custom error by extending (inheriting) the built-in Error class 
class ValidationError extends Error {

    // our custom Error will pass the error message to the parent class (Error)
    constructor(message: string) {
        super(message);
        // so we cant identify the error later
        this.name = "ValidationError";
    }

}

function validateUsername(username: string) {
    if (username.length < 5) {
        // throw our own custom error with a custom message
        throw new ValidationError("Username must be at least 5 characters long.");
    }
}

try {
    // attempting to run this function... but if something goes wrong (error is thrown) then we go to the catch
    validateUsername("Tom");

} catch (error) { // the error object is available as a param

    // was the error object created by the ValidationError class? (is it an instance of the class)
    if (error instanceof ValidationError) {
        console.error("Validation Error:", error.message);
    } else {
        console.error("Unknown Error:", error.message);
    }
}

// new ValidationError(); // object (instance)