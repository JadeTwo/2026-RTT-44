import express from 'express';

import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

const port = 3000;

// middleware (important for POST, PUT, and PATCH requests)
app.use(express.json())

// use our post routes like middleware
app.use(postRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})