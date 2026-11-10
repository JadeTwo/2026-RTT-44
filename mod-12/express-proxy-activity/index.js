import express from 'express'

const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/api/comments', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')

        const comments = await response.json()

        res.send(comments)

        // transform the data into an array of strings, where each string is in the format "<email> commented: <name>".

    } catch(e) {

        res.send(e);
    }
})


app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})


// Activity 1: Build a Data Transformer
// X Create an Express route GET /api/comments.
// X Fetch the list of all comments from https://jsonplaceholder.typicode.com/comments.
// Instead of sending the full objects, transform the data into an array of strings, where each string is in the format "<email> commented: <name>".
// Implement try...catch for error handling.

// Activity 2: Robust Error Proxy
// Create another route: GET /api/users/:id.
// Fetch a single user from https://jsonplaceholder.typicode.com/users/:id.
// If the external API responds with a 404, your server should respond with a 404 and a JSON object { "error": "User not found" }.
// If the external API responds with any other error (e.g., 500), your server should respond with a 502 Bad Gateway status and a message.
// If the request is successful, send the user data back to the client.