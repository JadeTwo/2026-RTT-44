import {Router} from "express"
import User from "../models/User.js"

const routes = Router()

/*
    ========== Get Routes ==========
*/

// find our documents (That match the request object) and send them back
routes.get('/', async (req, res) => {
    // adding additional code using Query Parameters
    console.log(req.query)
    // If we have an Age AND a username in the req.query
    if(req.query.age && req.query.username){
        // we are going to search by that age!
        // OR that username
        const result = await User.find({ $or: [
            {age: req.query.age},
            {username: req.query.username}
        ]})
        // and return it to the user
        res.json(result)
        // otherwise
    } 
    // If we have an Age in the req.query
    else if(req.query.age){
        // we are going to search by that age!
        const result = await User.find({age: req.query.age})
        // and return it to the user
        res.json(result)
        // otherwise
    } else {
        // we are just returning Bob again
        // use the model to interact with the database (find documents)
        const result = await User.find({ username: "Bob" });
        console.log(result);
        res.json(result);
    }
})

// A request to find ALL of our users on the Database
// Adding additional information to add Pagination to the Get All Users request!
routes.get("/all", async (req, res) =>{
    // Send "skip" and "limit" as optional query params
    // declaring a variable skip. if req.query.skip exists
    // save it in skip otherwise, save 0 in skip
    const skip = req.query.skip || 0

    // same deal for Limit
    const limit = req.query.limit || 3
    
    // We find EVERY document that matches the query object:
    // Which, with an empty query object, is Every document
    const result = await User.find({}).skip(skip).limit(limit);
    // Sending back all users (in an Array)
    res.json(result)
})

// Here, we are looking for a Specific User, using the Route Params:
// In this case req.params.username, specified by the ':username' in the path
routes.get("/name/:username", async (req, res) =>{
    // Find the first user in the Users collection that matches this username
    // We only find the FIRST user, as the usernames should all be unique 
    const result = await User.findOne({ username: req.params.username });
    console.log(result);
    // and returning that One User that we found
    res.json(result);
})

// Here, we are looking for a Specific User, using the Route Params:
// In this case req.params.username, specified by the ':username' in the path
routes.get("/:id", async (req, res) =>{
    const result = await User.findOne({ _id: mongoose.types.ObjectId(req.params.username) });
    // const result = await User.findById(req.params.id);
    console.log(result);
    // and returning that One User that we found
    res.json(result);
})

// =============== Module 5! Adding more Complex Queries! ===============

// We are trying to find all users greater than the age we put in the URL
routes.get("/minAge/:age", async (req, res) =>{
    // res.send("We have connected to this MinAge endpoint!")
    // $gt means that we will find ALL values Greater Than the one listed!
    // const response = await User.find({age: { $gt: req.params.age}})
    
    //  ===== Projection =====
    // But now, we want to return Less information.
    // Maybe, all they want is the Username, and the Age.
    // User.find({query_object}, {projection_object})
    
    // Explicitly telling the object what TO include: 1
    // const response = await User.find({age: { $gt: req.params.age}}, {username: 1, age: 1})
    
    // Explicitly telling the object what NOT to include: 0
    // const response = await User.find({age: { $gt: req.params.age}}, {email: 0, _id: 0})

    // You cannot mix and match 0 and 1, it will not work properly
    // Except for _id. There is always an exception.

    // ===== Sorting! =====
    // If our value of req.query.sort is 1 or -1, we want to use that value to sort the returned objects
    if(req.query.sort == "1" || req.query.sort == "-1"){
        // We will use that value at the very end to do sort in the indicated direction
        // -1 Sort Descending (Biggest to Smallest)
        //  1 Sort Ascending (Smallest to Biggest)
        const response = await User.find({age: { $gt: req.params.age}}, {username: 1, age: 1, _id: 0}).sort({age: Number(req.query.sort)})
        // the return makes sure that the async function ends, so we only send One Response.
        return res.json(response)
    }

    // If we aren't sorting, Respond with the unsorted array of Users.
    const response = await User.find({age: { $gt: req.params.age}}, {username: 1, age: 1, _id: 0})
    res.json(response)
})

/*
    ========== Put Routes ==========
*/

// Lets add an endpoint to Edit a single document by ID:
routes.put("/:id", async (req, res) => {
    const {id} = req.params
    console.log(req.body)
    const updateDoc = await User.findByIdAndUpdate(id, req.body, {returnDocument: "after"})
    // const updateDoc = await User.findByIdAndUpdate(id, req.body, {new: true}) // This will have Mongoose throw an error
    // but it will still Technically work
    res.json(updateDoc)
    // res.send("Success in sending Put request!")
})


/*
    ========== Post Routes ==========
*/

// Adding a request to ADD users to the collection
routes.post("/", async (req, res) =>{
    // using the req.body
    console.log(req.body)
    // because req.body is already an Object, we dont need to destructure it!
    // as long as it has the required information, we should be good!
    const newDoc = await User.create(req.body)
    
    // And we will send back the Newly Created document to the user.
    res.json(newDoc)
})

/*
    ========== Delete Routes ==========
*/

// This is where they would be, if I added them!
export default routes