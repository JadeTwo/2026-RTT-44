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

        // transform the data into an array of strings, where each string is in the format "<email> commented: <name>".
        const transformedData = comments.map(({ email, name }) => `${email} commented: ${name}`);

        res.send(transformedData)

    } catch(e) {

        res.send(e);
    }
})

app.get("/api/users/:id", async (req, res) => {
    try {

        const id = req.params.id

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if (response.status === 404) {
            return res.status(404).json({ "error": "User not found" })
        }

        const user = response.json()

        res.status(200).json(user);

    } catch (e) {
        // 502 Bad Gateway
        res.status(502).json({ message: 'Failed to get a valid response from the API.' })
    }
})


app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})


// Activity 1: Build a Data Transformer
// X Create an Express route GET /api/comments.
// X Fetch the list of all comments from https://jsonplaceholder.typicode.com/comments.
// X Instead of sending the full objects, transform the data into an array of strings, where each string is in the format "<email> commented: <name>".
// X Implement try...catch for error handling.

// Activity 2: Robust Error Proxy
// X Create another route: GET /api/users/:id.
// X Fetch a single user from https://jsonplaceholder.typicode.com/users/:id.
// X If the external API responds with a 404, your server should respond with a 404 and a JSON object { "error": "User not found" }.
// X If the external API responds with any other error (e.g., 500), your server should respond with a 502 Bad Gateway status and a message.
// If the request is successful, send the user data back to the client.