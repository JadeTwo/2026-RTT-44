// let fruit1 = "apple";
// let fruit2 = "orange";
// let fruit3 = "banana";

// create an array
let fruits = ["apple", "orange", "banana"];

// console.log(fruits);

// add an orange to the end of our array
fruits.push("mango");

// console.log(fruits);

// access the cherry
// console.log(fruits[3]);

// remove the last fruit from the end of the array
fruits.pop();

// console.log(fruits);

// remove the first item in an array
fruits.shift();

// console.log(fruits);

// add an item to the beginning of an array
fruits.unshift("kiwi");

// console.log(fruits);

// change the first element of an array
fruits[0] = "pear";

// console.log(fruits.length);

// access the last item 
// console.log(fruits[fruits.length - 1]);

// an array with all different data types (including other arrays)
["hello", 10, true, null, function() {}, [], [], []]


"Hello"

["H", "e", "l", "l", "o"]





console.log(fruits);

// loops (for loop)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// while loop
let count = 5;
 
while (count > 0) {
  console.log(count);
  count--;
}

// for (let count = 5; count > 0; count--) {
//     console.log(count);
// }

do {
  // code to be executed
  console.log('do while')
} while (false);


let userNumber;
 
// always ask the user the question first
// if they put something invalid, ask again (loop)
// do {
//   userNumber = prompt("Please enter a number greater than 0:");
// } while (userNumber <= 0);
 
console.log(`You entered: ${userNumber}`);

// this is an infinite loop
for (let i = 0; i <= 10; i++) {

   if (i === 2) {
    continue;
  }

  console.log(i); // This will print increasing numbers forever

}
