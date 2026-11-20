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

// endpoint where we will check our token
app.post("/api/users/token", (req, res) => {
  let token = req.headers.authorization;
  console.log(token);

  if (token) {
    // Split the token string on the space between Bearer and the actual token
    token = token.split(" ");
    // return JSUT the last value in that split array (the token)
    token = token.pop();
    // and remove any additional whitespace from the token
    token = token.trim();

    // This can also be done in one line:
    // token = token.split(" ").pop().trim()
  }
  if (!token) {
    return res.status(401).json({ message: "No token found!" });
  }
  try {
    // The decoded object will contain the original payload ({ data: { _id, ... } })
    // jwt.verify is what we use to CHECK the Signed token
    const { data } = jwt.verify(token, secret, { maxAge: "2h" });
    req.user = data; // Attach user data to the request object
    res.status(200).send("Token Verified! You are allowed in the Park!")
  } catch {
    return res.status(401).json({ message: "Invalid token!" });
  }
//   res.send("Here is where we will verify the token");
});

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
