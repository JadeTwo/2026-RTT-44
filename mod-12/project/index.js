// bring in express
import express from 'express'

// create the express app
const app = express();

// OPTIONAL: setup a variable for our port
const port = 3000

// setup a GET request
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// listen for incoming requests
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
