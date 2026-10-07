async function example() {
    return "Hello"; // will be wrapped in a promise object
}

function example2() {
    return Promise.resolve("Hello"); // this is what that would look like
}

// we can handle these two in the same way
// example()
//     .then((value) => console.log(value));

// example2()
//     .then((value) => console.log(value));



function resolveAfterSeconds(t) {
    const myPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve('Done!');
        }, t * 1000);
    });
    return myPromise;
}

async function testAwait() {
    console.log('Testing...');
    // the await keyword is only available inside of an async function
    const result = await resolveAfterSeconds(2); // wait for the promise to resolve here before continuing
    console.log(result);
}

// testAwait();



// EXAMPLE 1: Using then and catch methods to handle a promise

const fetchUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("User data"), 1000);
    });
};

// fetchUserData() // returns a promise
//     .then((data) => {
//         console.log("Fetched user:", data);
//         return "Additional data"; // wraps the value in a promise -> Promise.resolve("Additional data")
//     })
//     .then((extraData) => {
//         console.log("Fetched extra:", extraData);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });


// EXAMPLE 2: Using async/await to handle promises (alternative)

const fetchUserData2 = async () => { // arrow function syntax (async keyword goes after assignment operator "=")
    return new Promise((resolve) => {
        setTimeout(() => resolve("User data"), 1000);
    });
};

async function fetchAdditionalData() { // function declaration syntax (async goes before function keyword)
    return "Additional data"; // this is also returning a promise -> Promise.resolve("Additional data")
};

// here we use a async function to handle the promises that created by the functions above
async function displayData() {
    try {
        const userData = await fetchUserData2(); // await will wait 1 second in this case for the promise to resolve and then stores the value in "userData"
        console.log("Fetched user:", userData);

        const extraData = await fetchAdditionalData(); // use await again on our second promise 
        console.log("Fetched extra:", extraData);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// displayData();


// ANOTHER EXAMPLE: With async/await

const fetchDataWithError = async () => {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Failed to fetch data"), 1000);
    });
};

const handleData = async () => {
    try {
        const data = await fetchDataWithError();
        console.log("Data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
};

// handleData();

// Promise.resolve().then(() => console.log("One"));
// console.log("Two");


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 
 
wait(0).then(() => console.log("Cat")); // This initially gets passed to the "Task Queue"
 
Promise.resolve()
  .then(() => console.log("Dog")) // This goes to the "Micro-Task Queue" first
  .then(() => console.log("Cow")); // This goes to the "Micro-Task Queue" second
 
console.log("Bird"); // This goes to the "Call Stack"

// Call Stack > Micro-Task Queue > Task (Callback) Queue (Call Stack has priority over any Queues, and Micro-Task has priority over Task Queue)

// Web API (timer, fetching data)

// Bird
// Dog
// Cow
// Cat