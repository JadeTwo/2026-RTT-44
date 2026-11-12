import express from 'express';

import { apiClient } from '../api/apiClient.js';

// create the router which will take the place of the express app
const router = express.Router();

router.post("/posts", async (req, res) => {
    try {
        // data for this post request
        const newData = req.body;
        // Example of a POST request with axios
        // const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newData);
        const response = await apiClient.post('/posts', newData);
        res.status(201).json(response.data);
    } catch(e) {
        console.log(e.message);
        res.status(500).json({ error: 'Failed to create post' })
    }
});

// we can use it in index.js (or server.js)
export default router;