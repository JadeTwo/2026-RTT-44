// nested objects
let person = {
    name: "Bob",
    friends: [
        {
            name: "Billy"
        },
        {
            name: "Sally"
        },
        {
            name: "Jimmy"
        }
    ],
    "my super secret nickname": "Billy Bob"
}

// variable that holds the name of the property
let key = "name";

// accessing properties
console.log(person.name); // dot notation
console.log(person['name']); // square brackets
console.log(person[key]); // square brackets with a variable
console.log(person["my super secret nickname"]);

// access a nested object's property
// console.log(person.friend.name);
// console.log(person['friend']['name']);
// console.log(person["my super secret nickname"]);

// access nested objects in an array
console.log(person.friends[2].name)
let ourFriendsName = person.friends[2]["name"]
console.log(ourFriendsName);



// nested arrays (two dimensional)
let arr = [[[1]]];

// access a nested array
console.log(arr[0][0][0]);

let numbers = [
    [1, 2, 3],
    [5, 4, 2], 
    [1, 0, 1],
    [5, 2, 0]
];

// how do we access the number four of the nested array?
console.log(numbers[1][1]);


// scopes
if (true) {}
for ( ; false; ) {}
let obj = {}
function func() {}

// global scope
let example = "i am in the global scope";

// block scope
if (true) {
    // let example = "i am in the block scope";
    
    // nested block scope
    if (true) {
        console.log(example);
        let whatever;
    }
}

// neighborhood
let box;

{   // house

    {   // room

    }
}

// block scoped variable
let number = 6;

// global scoped and function scoped
// var num;

function add(number) {
    number + 1;
}

function subtract() {
    number - 1;
}

function multiply() {
    number * 1;
}