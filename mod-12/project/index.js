// bring in express
import express from 'express'

// create the express app
const app = express();

// OPTIONAL: setup a variable for our port
const port = 3000

// setup a GET request
// app.get("/", (req, res) => {

//     console.log(req.url, req.method);

//     // always respond to the request
//     res.send("Goodbye");
// });

// Tell Express to use the 'express.static' middleware
// to serve all files from the 'public' directory.
app.use(express.static('./public'));

// listen for incoming requests
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
