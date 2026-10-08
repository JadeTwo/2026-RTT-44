// makes a request and returns a promise that resolves into a Response object
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     // we handle the Response object
//     .then(response => response.json())
//     // handles the formatted data (json)
//     .then(json => console.log(json))
//     // catch any errors in this chain
//     .catch(error => console.error(error))


async function fetchData() {
    try {
        // wait for the promise to resolve and give us the Response object
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        console.log(response);

        // check if the response is not okay (something went wrong)
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // wait for the response data to be formatted to JSON
        const data = await response.json();

        // log the data
        console.log(data);

    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// fetchData();


// POST REQUEST

// for (let i = 0; i < 5; i++) {

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         title: "New Post",
//         body: "This is a new post",
//         userId: 1
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log("Created post:", data))
//     .catch(error => console.error("Error:", error));

// }


// PUT REQUEST

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         id: 1,
//         title: "Updated Post",
//         body: "This post has been updated",
//         userId: 1
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log("Updated post:", data))
//     .catch(error => console.error("Error:", error));



// PATCH REQUEST

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         title: "Partially Updated Post"
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log("Patched post:", data))
//     .catch(error => console.error("Error:", error));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
method: "DELETE"
})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error("Error:", error))



