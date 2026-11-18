// Import and Configure our .env variables
import 'dotenv/config';

// Windows code snippet so we can connect to MongoDB...
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

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
/*\
// An example of the previous function using Create instead.
async function init() {
    // create a document and Immediately adding to the Collection
    const newUser = await User.create({
        email: "bob@gmail.com",
        username: "Billy",
        age: 50
    })
        // And we do not need to save it! It's already on the database.
}
*/


// try to connect to our database
mongoose.connect(uri)
    .then(() => { // If it works...
        // we tell the user we connected
        console.log('Successfully connected to MongoDB!')
        // init();
    })
    .catch((err) => console.log('Connection Error', err)) // Otherwise, we tell the user there was an error, and the error that happened.

    // Initializing our Express App
const app = express();
// and adding a port to connect on!
const port = 3000;

//We need the express.json() middleware to run so we have access
// to req.body and we can use it with CRUD operations!
app.use(express.json())

// find our documents (That match the request object) and send them back
app.get('/', async (req, res) => {
    // use the model to interact with the database (find documents)
    const result = await User.find({ username: "Bob" });
    console.log(result);
    res.json(result);
})

// A request to find ALL of our users on the Database
app.get("/allUsers", async (req, res) =>{
    // We find EVERY document that matches the query object:
    // Which, with an empty query object, is Every document
    const result = await User.find({});
    // Sending back all users (in an Array)
    res.json(result)
})

// Here, we are looking for a Specific User, using the Route Params:
// In this case req.params.username, specified by the ':username' in the path
app.get("/findByName/:username", async (req, res) =>{
    const result = await User.find({ username: req.params.username });
    console.log(result);
    // and returning that One User that we found
    res.json(result);
})


// Adding a request to ADD users to the collection
app.post("/", async (req, res) =>{
    // using the req.body
    console.log(req.body)
    // because req.body is already an Object, we dont need to destructure it!
    // as long as it has the required information, we should be good!
    const newDoc = await User.create(req.body)

    // And we will send back the Newly Created document to the user.
    res.json(newDoc)
})

app.listen(port, () => {
    console.log('Server running on port: http://localhost:' + port)
})