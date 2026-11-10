import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
})

// custom middleware #1
function requestLogger(req, res, next) {
    // show the request method, path, and a timestamp
    console.log(`${req.method} ${req.path} ${new Date().toISOString()}`)
    // move on to the next route
    next();
}

// custom middleware #2
function checkApiKey(req, res, next) {
 // If req.headers['x-api-key'] is equal to 'supersecretkey', it should call next() to allow access.
 if (req.headers['x-api-key'] === 'supersecretkey') {
    next();

// If the key is missing or incorrect, it should end the request by sending a 401 Unauthorized status 
// and a JSON response: res.status(401).json({ error: 'Unauthorized: API Key required' }).
 } else {
    res.status(401).json({ error: 'Unauthorized: API Key required' })
 }
}

// Apply this middleware only to a new /api route path (router-level middleware)
app.use("/api", checkApiKey);

// use the middleware (application-level, so before every request)
app.use(requestLogger)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/api/test", (req, res) => {
    res.send("Testing...")
})


app.listen(3000, () => {
    console.log('Server is running on port: 3000')
})

// Activity 2: Simple Authentication Middleware
// X Building on the previous activity, create a new middleware function called checkApiKey.
// X This middleware should check for a special header in the request, x-api-key.
// X If req.headers['x-api-key'] is equal to 'supersecretkey', it should call next() to allow access.
// X If the key is missing or incorrect, it should end the request by sending a 401 Unauthorized status and a JSON response: res.status(401).json({ error: 'Unauthorized: API Key required' }).
// X Apply this middleware only to a new /api route path. Create a public route like / that does not require the key.
// X Test both the public route and the protected /api route, making sure to add the x-api-key header for the protected one.