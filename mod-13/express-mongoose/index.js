import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';

// bring in our model (a class)
import User from './models/User.js';

const uri = process.env.MONGO_URI

// this will run after we connect to MongoDB
async function init() {
    // create a document (temporary - in memory)
    const newUser = new User({
        email: "bob@gmail.com",
        username: "Bob",
        age: 50
    })
    // save that document to the database (permanently)
    await newUser.save();
}

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB!')
        init();
    })
    .catch((err) => console.log('Connection Error', err))

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})