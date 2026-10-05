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
    .then(((value) => {
        console.log(value);
        return value // this is returning a new promise
    }))
    // method chaining
    .then(() => { })
    // Handle the promise if it is rejected
    .catch((value) => {
        console.log(value);
    })

console.log(promise);


let arr = [1, 2, 3]

// method chaining with an array
// arr.filter().map().join() -> filter and map return an array

// promise.then().then().then() // -> then and catch return promises

// a function that would request user data and in the meantime return a promise
const fetchUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("User data"), 1000);
    });
};

fetchUser() // -> promise

// a function that would request order data 
const fetchOrders = (userData) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Order1", "Order2", "Order3"]), 1000);
    });
};

fetchOrders() // -> promise

// handle the promise 
fetchUser()
    .then((user) => {
        console.log("Fetched user:", user);

        //  fetchOrders()
        //     .then()
        //     .catch()

        return fetchOrders(user); // make another request for orders made by that user
    })
    .then((orders) => {
        console.log("Fetched orders:", orders);
        // return fetchOrderDetails(orders[0])
    })
// .then((details) => {
//     console.log('Order details:', details)
// })



let promise4 = new Promise((resolve, reject) => {
    console.log("Initial");
    resolve();
})

promise4
    .then(() => {
        throw new Error("Something failed");
        console.log("Do this")
    })
    .catch(() => {
        console.error("Do that");
    })
    .then(() => {
        console.log("Do this, no matter what happened before");
    });





const promise6 = Promise.reject(0);
const promise7 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise8 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise6, promise7, promise8];

// "Composition Tools" (static method "any")
// when any of the three promises fulfill, then run the function
Promise.any(promises).then((value) => console.log(value));