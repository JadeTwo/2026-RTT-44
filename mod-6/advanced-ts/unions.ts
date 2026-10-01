// we want the function to take strings OR numbers as an input (using a union type)
function formatInput(input: string | number): string {
    if (typeof input === "number") {
        return `Number: ${input.toFixed(2)}`; // toFixed is a number method (42.789 -> '42.78')
    } else {
        return `String: ${input.toUpperCase()}`; // toUpperCase is a string method ("hello" -> "HELLO")
    }
}

console.log(formatInput(42.789)); // Outputs "Number: 42.79"
console.log(formatInput("hello")); // Outputs "String: HELLO"