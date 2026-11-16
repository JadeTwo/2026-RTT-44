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
        username: "Billy",
        age: 50
    })
    // save that document to the database (permanently)
    await newUser.save();
}

// connect to database
mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB!')
        init();
    })
    .catch((err) => console.log('Connection Error', err))

const app = express();

const port = 3000;

// find our documents and send them back
app.get('/', async (req, res) => {
    // use the model to interact with the database (find documents)
    const result = await User.find({ username: "Bob" });
    console.log(result);
    res.json(result);
})

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})