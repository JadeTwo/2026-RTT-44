// configure our environment variables 
import 'dotenv/config';

// bring in mongoose
import mongoose from 'mongoose';

import express from 'express';

// bring in our model
import Book from './models/Book.js';

// establish a connection to our db
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB!'))
    .catch((e) => console.log(e));


// setting dns so node doesn't yell at me
// import dns from 'node:dns';
// dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => console.log('Server running on port: ' + port))