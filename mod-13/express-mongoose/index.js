// Import and Configure our .env variables
import 'dotenv/config';

// Windows code snippet so we can connect to MongoDB...
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

import express from 'express';
import mongoose from 'mongoose';

// importing our External Routes to clean up the index.js file a bit
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

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

// Adding the User routes to the app, so I can move the logic over
app.use("/users", userRouter)

// Add the Product routes to the current app
app.use("/products", productRouter)


app.listen(port, () => {
    console.log('Server running on port: http://localhost:' + port)
})