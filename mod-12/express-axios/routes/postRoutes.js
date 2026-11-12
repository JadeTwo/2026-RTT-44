import express from 'express';

import { createPost } from '../controllers/postController.js';

// create the router which will take the place of the express app
const router = express.Router();

// localhost:3000/api/posts
router.post("/", createPost);

// router.get("/")
// router.put("/:id")

// we can use it in index.js (or server.js)
export default router;