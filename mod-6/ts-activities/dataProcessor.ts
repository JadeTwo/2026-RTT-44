// X Create a file called dataProcessor.ts.
// X Implement a function that takes a union type of string[] or number[] and returns a formatted string.
// If the input is string[], return a comma-separated list of uppercase strings.
// If the input is number[], return a comma-separated list of numbers rounded to two decimal places.
// X Use type guards to distinguish between string[] and number[].
// Add a type alias for the union type to keep the code concise.
// Critical Thinking: How do union types and type guards make your code safer and more maintainable? What risks do they mitigate when dealing with complex data?

function formatData(data: string[] | number[]): string {
    let str = "";

    // it's an array we're dealing with so a loop can help!
    for (let i = 0; i < data.length; i++) {

        // access the item using the index
        let item = data[i];

        // we want to add the comma, unless it's the first item
        if (str !== "") {
            str += ', '
        }

        // type guard (to check if it's string or number inside the array)
        if (typeof item === 'string') {
            // uppercase it
            str += item.toUpperCase(); // the toUpperCase method only works on strings
        } else {
            // otherwise it's a number, so round it to two decimal places
            str += item.toFixed(2); // 6 -> "6.00" the toFixed method only works on numbers
        }
    }

    return str;
}

// call the function
let formattedStrings = formatData(["bob", "billy", "sally"]);
let formattedNumbers = formatData([6, 10, 15]);
console.log(formattedStrings);
console.log(formattedNumbers);