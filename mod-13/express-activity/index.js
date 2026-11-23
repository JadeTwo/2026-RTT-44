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


// setting dns so node doesn't yell at us (for Windows users)
// import dns from 'node:dns';
// dns.setServers(['1.1.1.1', '8.8.8.8']);

// creates our express app
const app = express();

// apply our middelware (for POST and PUT/PATCH requests that expect a body)
app.use(express.json());

const port = 3000;

// handle a POST request to create a new document
app.post("/api/books", async (req, res) => {
    // create a new document for the books collection (temporary)
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        publicationYear: req.body.publicationYear
    });

    // alternative
    // const newBook2 = Book.create({
    //     title: req.body.title,
    //     author: req.body.author,
    //     publicationYear: req.body.publicationYear
    // })

    // save the document to our database (permanently)
    await newBook.save();

    // always respond
    res.status(201).json(newBook);
})

// Route Parameter of "id"
app.get("/api/books/:id", async (req, res) => {

    // defining an id that we know exists (hardcoding)
    let id = req.params.id;

    // use that id to find the document with that id
    const foundBook = await Book.findById(id)

    // send back that document
    res.status(200).json(foundBook);
})

// Route for deleting a book by "id"
app.delete("/api/books/:id", async (req, res) => {
    
    // grab the id from the Route Parameter ("id")
    let id = req.params.id;

    // use that id to find the document and delete it
    await Book.findByIdAndDelete(id);

    // send back a response
    res.status(200).json({ message: `book with id ${id} deleted` })
})


app.listen(port, () => console.log('Server running on port: ' + port))