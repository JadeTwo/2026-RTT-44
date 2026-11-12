import express from 'express';
import axios from 'axios';

const app = express();

const port = 3000;

// middleware (important for POST, PUT, and PATCH requests)
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World!")
})

// GET all users
app.get("/users", async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.send(response.data);
    } catch(e) {
        // Froms docs: Not every error has a response - network errors, timeouts, and cancellations have no error.response
        if (e.response) {
            console.error('API Error:', e.message);
            res.status(e.response.status).json({ error: 'Error fetching data' });
        } else {
            console.error('Network Error:', e.message);
            res.status(500).json({ message: 'A network error occurred.' });
        }
    }
})

/*

    Example of a POST request with fetch...

    fetch(url, {
        method: "POST",
        body: JSON.stringify(newData),
        'Content-Type': application/json
    })

*/

// POST create a post
app.post("/posts", async (req, res) => {
    try {
        // data for this post request
        const newData = req.body;
        // Example of a POST request with axios
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newData);
        res.json(response.data);
    } catch(e) {
        console.log(e);
    }
});

app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})