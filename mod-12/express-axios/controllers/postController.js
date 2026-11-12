import { apiClient } from '../api/apiClient.js'

// the callback function for the route
export const createPost = async (req, res) => {
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
}