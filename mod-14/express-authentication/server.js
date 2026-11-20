//Configure our .env file
import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import User from "./models/User.js";

// Windows code snippet so we can connect to MongoDB...
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

// Define our App
const app = express()

app.use(express.json())

// and the PORT we will use to connect to it
const PORT = process.env.PORT || 3000

// and connect to our database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB!")
})
.catch((error) =>{
    console.log("Not connected to Database")
    console.error(error)
}
)

// Welcome Base route
app.get("/", (req, res) =>{
    res.send("Welcome to our Authentication API!")
})

app.post("/api/users", async (req, res) =>{
    // NOT going to use req.params
    // NOT going to use req.query
    try{
        const response = await User.create(req.body)
        res.json(response)
    }
    catch (err) {
        res.status(500).send("Something went wrong: "+err.message)
    }
})

app.post("/api/users/login", async (req, res) =>{
    // Example usage in a login route
    try{
        if(!req.body.email || !req.body.password){
            throw new Error("Incomplete Data from request.")
        }
        const user = await User.findOne({ email: req.body.email });
        
        if (!user) {
            return res.status(400).json({ message: "Incorrect email or password" });
        }
        
        const correctPw = await user.isCorrectPassword(req.body.password);
        
        if (!correctPw) {
            return res.status(400).json({ message: "Incorrect email or password" });
        }
        res.send(`You have logged in successfully. Welcome ${user.username}!`)
    }
    catch(err){
        res.status(500).send("Error: "+ err.message)
    }
// If both are true, the user is authenticated!
})

app.listen(PORT, () =>{
    console.log("Server running at http://localhost:"+PORT)
})