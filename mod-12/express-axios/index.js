import express from 'express';
import axios from 'axios';

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!")
})

// GET all users
app.get("/users", async (req, res) => {
    try {
        const response = await axios.get('https://jsonplacehhhhhhhhhhhholder.typicode.com/users');
        res.send(response.data);
    } catch(e) {
        console.log(e.status);
        res.status(e.response.status).json({ error: 'Error fetching data' });
    }
})

app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})