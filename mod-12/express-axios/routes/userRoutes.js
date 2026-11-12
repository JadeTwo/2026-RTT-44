import express from 'express';

import { apiClient } from '../api/apiClient.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const response = await apiClient.get("/users");
        console.log('Sending back data...')
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

export default router;