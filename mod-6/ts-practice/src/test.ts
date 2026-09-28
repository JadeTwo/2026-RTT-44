// defining the structure of a user object
interface User {
  name: string;
  age: number;
}
 
// an array of user objects
let users: User[] = [];


// loop to push 10 user objects into the users array
for (let i = 0; i < 10; i++) {

  // create the object
  const user: User = { name: "Alice", age: 25 };

  // push it to the array
  users.push(user);
}

console.log(users);
