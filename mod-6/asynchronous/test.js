// Asynchronous Code Example with setTimeout
// console.log("Start");

// setTimeout(() => {
//   console.log("This happens asynchronously");
// }, 0);

// console.log("End");


// PROMISE

// Create a promise here 
const promise = new Promise((resolve, reject) => {
    if (false) {
        // it is either resolved after 250 milliseconds 
        setTimeout(() => resolve("Success!"), 250);
    } else {
        // or it is rejected after 250 milliseconds 
        setTimeout(() => reject("Failure"), 250);
    }
})



promise 
// Handle the promise if it is resolved
    .then((value) => {
        console.log(value);
    })
// Handle the promise if it is rejected
    .catch((value) => {
        console.log(value);
    })

console.log(promise);

// arrow function 
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
 
wait(10 * 1000) 
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);