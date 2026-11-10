// bring in express
import express from 'express'

// create the express app
const app = express();

// OPTIONAL: setup a variable for our port
const port = 3000

// Custom logger middleware #1
const myLoggerMiddleware = (req, res, next) => {
  // 1. Do something, like log the request path
  console.log('Middleware 1: Logging');
  console.log('Request received for path:', req.path);
 
  // 2. We are done here. Pass control to the next middleware.
  next();
};

// apply/use our custom middleware
app.use(myLoggerMiddleware);

// Custom middleware #2
app.use("/api", (req, res, next) => {
  req.requestTime = Date.now(); // Add a new property to the request object
  console.log('Middleware 2: Time set');
  next();
});
 
// Custom middleware #3
app.use((req, res, next) => {
  console.log('Middleware 3: Just checking in!');
  next();
});

// Tell Express to use the 'express.static' middleware
// to serve all files from the 'public' directory.
app.use(express.static('./public'));

// This middleware 'translator' is essential for req.body to work
// so... if we're making a post/put request then we need this
app.use(express.json())

app.post('/api/users', (req, res) => {
  // req.body contains the JSON data sent by the client
  const newUser = req.body;
  console.log('Received new user from request body:', newUser);
 
  // A real app would save this to a database
  res.status(201).send(`User ${newUser.name} created successfully.`);
});

app.get('/users/:userId', (req, res) => {
  // Express captures the value and puts it in req.params
  const id = req.params.userId;
  console.log(req.params)
  res.send(`You requested user with the required ID: ${id}`);
});

// You can have multiple parameters
app.get('/books/:bookId/chapter/:chapterNum', (req, res) => {
    const { bookId, chapterNum } = req.params
    console.log(req.params)
    res.send(`You are viewing Chapter ${chapterNum} of Book ${bookId}.`);
});

// Example URL: /search?q=javascript&sort=popular
app.get('/search', (req, res) => {
  const searchTerm = req.query.q || 'nothing';
  const sortBy = req.query.sort || 'relevance';

  console.log(req.query)
 
  res.send(`You optionally searched for '${searchTerm}' and sorted by '${sortBy}'.`);
});
 

// listen for incoming requests
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})







function sayHello(name) {}

app.get("/greeting/:name")

sayHello('Bob');

// http://localhost:3000/greeting/Bob