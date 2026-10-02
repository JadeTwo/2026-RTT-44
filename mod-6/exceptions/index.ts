function divideNumbers(a: number, b: number): number {
    // check if b is 0 because we don't want to divide by 0
    if (b === 0) {
        // create an error object with an error message and throw it (so we can handle it... catch it)
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

// try {
//     // call the function which throws an error
//     console.log(divideNumbers(10, 0));
// } catch (error) { // <-- our error object is here
//     // that error is caught and handled here
//     console.error("An error occurred:", error.message);
// } finally {
//     console.log("Operation complete.");
// }