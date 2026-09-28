"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// an array of user objects
let users = [];
// loop to push 10 user objects into the users array
for (let i = 0; i < 10; i++) {
    // create the object
    const user = { name: "Alice", age: 25 };
    // push it to the array
    users.push(user);
}
console.log(users);
