let firstName: string = "Bob";
let lastName: string = "Bobberton";

console.log(`Hello! my name is ${firstName} ${lastName}`);

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

let item: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    inStock: true,
};

let item2: Product = {
    id: 2,
    name: "TV",
    price: 500,
    inStock: false
}

console.log(item);


interface User {
    username: string;
    email: string;
}

// adding a type to the parameter
function welcomeUser(user: User): string {
    return `Welcome, ${user.username}! Your email is ${user.email}.`;
}

// TypeScript infers (figures out) that this of type User
let newUser = { username: "john_doe", email: "john@example.com" };

console.log(welcomeUser(newUser));



interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

let myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
};

console.log(myDog);


// TYPE ALIAS       UNION
type ProductID = string | number;

let id1: ProductID = "ABC123";
let id2: ProductID = 456;

console.log(`Product IDs: ${id1}, ${id2}`);

// Using a union type for the parameter
function printId(id: ProductID): void {
    if (typeof id === "string") {
        console.log("The ID is a string: " + id.toUpperCase()); // toUpperCase is a string method
    } else {
        console.log("The ID is a number: " + id.toFixed(2)); // toFixed is a number method "123.45"
    }
}

printId("xyz"); // call printId with a string argument
printId(123.456); // call printId with a number argument