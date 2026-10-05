// Asynchronous Code Example with setTimeout
console.log("Start");

// run this callback function after a second
setTimeout(() => {
  console.log("This happens asynchronously");
}, 1000);

// in the meantime, continue running code synchronously as normal
console.log("End");


// PROMISE

// How to create a promise:

// Use the Promise class 
const promise = new Promise((resolve, reject) => {
    if (false) {
        // it is either resolved after 250 milliseconds 
        setTimeout(() => resolve("Success!"), 250);
    } else {
        // or it is rejected after 250 milliseconds 
        setTimeout(() => reject("Failure"), 250);
    }
})

// the "promise" variable now holds a special object that acts as a placeholder for an incoming value (or data)
// (it is an object with three states: pending, fulfilled, rejected)
// the actual value is not available at the moment, so the rest of the code will run synchronously

// How to handle a promise 

// when the promise is fulfilled, the value is ready to be extracted 
// we can handle the state of our promise changing with the .then() method

promise 
// Handle the promise if it is resolved (fulfilled)
    .then((value) => {
        console.log(value);
    })
// Handle the promise if it is rejected
    .catch((value) => {
        console.log(value);
    })

console.log(promise);

