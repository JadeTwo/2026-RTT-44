// sets up our environment variables 
import 'dotenv/config'

import express from 'express';

import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// use the environment variable OR default to 5000
const port = process.env.PORT || 5000;

// middleware (important for POST, PUT, and PATCH requests)
app.use(express.json())

// use our post routes like middleware
app.use("/api/posts", postRoutes);  //   /api/posts
app.use("/api/users", userRoutes); //    /api/users

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})