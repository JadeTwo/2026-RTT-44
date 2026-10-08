// Write a higher-order function called applyDiscount that takes a discount rate 
// and returns a function to calculate the discounted price of a product.

// TASK 1

function applyDiscount(discount) {
    // by returning a function here we create a closure
    // which gives us access to the discount from within the inner function
    return function(price) {
        // p - (p * .2)
        return price - (price * discount)
    }
}

// naming the inner function (the one with a price parameter)
const twentyPercentDiscount = applyDiscount(.2)

// call the inner function and pass the price as an argument
const finalPrice = twentyPercentDiscount(50);

console.log(finalPrice);

// we can create another inner function here for a fifteen percent
const fifteenPercentDiscount = applyDiscount(.15)

console.log(fifteenPercentDiscount(100))




// TASK 2



// createCounter is a Higher-Order function
function createCounter() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}

const counter = createCounter(); // returns the inner function and stores it in "counter"
const counter2 = createCounter(); // return a new inner function with a new count variable
const counter3 = createCounter(); //

console.log('counter: ', counter()); // 1
console.log('counter: ', counter()); // 2
console.log('counter: ', counter()); // 3
console.log('counter2: ', counter2()); // 3
console.log('counter2: ', counter2()); // 3
console.log('counter3: ', counter3()); // 3


// TASK 3

// Write a function called fetchUser that takes a username and a callback function. 
// After a 1-second delay, it should call the callback with a user object 
// containing the username and a generated ID.

const fetchUser = (username, callback) => {
    setTimeout(() => {
        const user = {
            username,
            id: 1
        }
        callback(user);
    }, 1000)
}

fetchUser("Alice", (user) => console.log("Fetched User:", user));