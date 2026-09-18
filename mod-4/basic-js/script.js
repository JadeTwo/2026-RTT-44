// console.log('hello world!');

let name = "John";
let age = 30;

// template literal
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

// concatenation
let greeting2 = "Hello, my name is " + name + " and I am " + age + " years old.";

console.log(greeting);

console.log(greeting2);

let a = 10;
let b = 20;

// mathematical operators 
console.log(a + b); // 30
console.log(a * b); // 200


let count = 0;

// increment 
count++;
console.log(count); // 1

// decrement 
count--;
console.log(count); // 0


// function declaration
function greet() {
    console.log("Hello, World!");
}

// run (call, invoke, execute) the function!
greet();
greet();
greet();
greet();
greet();

// using parameters and arguments with our function
function greetUser(username) { // username is the parameter
  console.log("Hello, " + username);
}
greetUser("John"); // "John" is the argument
greetUser() // no arguments
greetUser("Bob") // "Bob" is the argument

// multiple parameters and arguments and uses the return keyword
function add(a, b) {
  let sum = a + b;
  return sum;
}

let sum = add(5, 10); // ??

console.log(sum);

sum++

console.log(sum);

let random = Math.random();

console.log(random);