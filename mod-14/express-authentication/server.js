//Configure our .env file
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
import jwt from "jsonwebtoken";

// Windows code snippet so we can connect to MongoDB...
import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Define our App
const app = express();

// bring in our auth middleware
import { authMiddleware } from "./utils/auth.js";

app.use(express.json());

// and the PORT we will use to connect to it
const PORT = process.env.PORT || 3000;

// setup our JWT Token secret & expiration time
const secret = process.env.JWT_SECRET;
const expiration = "2h";

// and connect to our database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.log("Not connected to Database");
    console.error(error);
  });

// Welcome Base route
app.get("/", (req, res) => {
  res.send("Welcome to our Authentication API!");
});

app.post("/api/users", async (req, res) => {
  // NOT going to use req.params
  // NOT going to use req.query
  try {
    const response = await User.create(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).send("Something went wrong: " + err.message);
  }
});

// Generating a token with our login route
app.post("/api/users/login", async (req, res) => {
  // Example usage in a login route
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("Incomplete Data from request.");
    }
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const correctPw = await user.isCorrectPassword(req.body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    // The payload should contain non-sensitive user data
    const payload = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };

    // jwt.sign is what we use to CREATE / SIGN the token for the user!
    const token = jwt.sign({ data: payload }, secret, {
      expiresIn: expiration,
    });

    // console.log(token)
    res.json({ token, user: payload });
    // res.send(`You have logged in successfully. Welcome ${user.username}!`);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
  // If both are true, the user is authenticated!
});

// protected route (for user's profile)
app.get("/api/profile", authMiddleware, async (req, res) => {

  // access the token payload (we have access to this user property thanks to the middleware)
  console.log(req.user)

  // send back some user information
  const user = await User.findById(req.user._id)
    .select({ password: 0 })

  console.log(user);


  res.status(200).json(user);
})

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
