let item: string = "Apple"; // TypeScript enforces this variable to be a string
item = "Orange";

let age: number = 30;
let height: number = 1.75; // Floating point

// let isLoggedIn: boolean = true;

let fruits: string[] = ["apple", "banana", "cherry", "40"];

let numbers: number[] = [20, 15, 30, 50];

// tuple
let userInfo: [number, string, string, number, boolean] = [30, "Alice", "Bob", 50, true];

// enum
enum Role {
  Admin,
  User,
  Guest,
}
 
let userRole: Role = Role.Admin;

if (userRole === Role.Admin) {

}
 
console.log(userRole); // Output: 0 (the index of Admin in the enum)

// type annotations
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(2, 3));


function greet(name: string): string {
    return "Hello, " + name;
}

let message: string = greet("Alice");
console.log(message);

let isLoggedIn = true; // TypeScript infers that isLoggedIn is a boolean

// interface 
interface User {
  name: string;
  age: number;
}
 
const user: User = { name: "Alice", age: 25 };

// using optional parameters (level)
function logMessage(message: string, level?: string): void {
  const logLevel = level || "info";
  console.log(`[${logLevel.toUpperCase()}] ${message}`);
}

logMessage("System started"); // Defaults to "info"
logMessage("System error", "error"); // Uses "error"


// default parameters (greeting defaults to the value "Hello")
function greetUser(name: string, greeting: string = "Hello"): string { // function signature
  return `${greeting}, ${name}!`;
}

console.log(greetUser("Alice")); // Outputs: "Hello, Alice!"
console.log(greetUser("Bob", "Hi")); // Outputs: "Hi, Bob!"


// Define function signatures (overloads)
function formatInput(input: string): string;
function formatInput(input: string[]): string;

// Implement the function to handle both signatures
function formatInput(input: string | string[]): string {
  // type guard (check if it's a string)
  if (typeof input === "string") {
    return input.toUpperCase(); // toUpperCase is a string method
  } else {
    return input.join(", ").toUpperCase(); // join is a array method 
  }
}

console.log(formatInput("hello")); // Outputs: "HELLO"
console.log(formatInput(["apple", "banana"])); // Outputs: "APPLE, BANANA"




interface Button {
  label: string;
  onClick: () => void; // must have a onClick method
}

const button: Button = {
  label: "Click me",
  onClick: () => { // the onClick method
    console.log("Button clicked!");
  },
};

button.onClick(); // Outputs: "Button clicked!"
