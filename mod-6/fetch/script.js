// makes a request and returns a promise that resolves into a Response object
fetch('https://jsonplaceholder.typicode.com/posts/1')
    // we handle the Response object
    .then(response => response.json())
    // handles the formatted data (json)
    .then(json => console.log(json))
    // catch any errors in this chain
    .catch(error => console.error(error))


async function fetchData() {
    try {
        // wait for the promise to resolve and give us the Response object
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        // basically if the response is not okay (something went wrong)
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

fetchData();