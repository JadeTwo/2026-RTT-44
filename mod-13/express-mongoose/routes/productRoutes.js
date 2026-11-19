import { Router } from "express";
import Product from "../models/Product.js";

const routes = Router();

// http://localhost:port/api/products

/*
    ========== Get Routes ==========
*/

routes.get("/", async (req, res) => {
  // We want to be able to return different Pages of products, like a webstore!
  // First, we look to see if there is a value in req.query.page
  // and use that if it exists. Otherwise, we use Page 1
  const page = Number(req.query.page) || 1;
  
  // We could probably also get the Limit from the user as well, in a similar manner
  // const limit = Number(req.query.limit) || 20;
  const limit = 20;

  // Lets try to find some data:
  try {
    // Lets get ALL of our products:
    const results = await Product.find({})
      // Only show the Name and Price field (and exclude the _id)
      .select({ name: 1, price: 1, _id: 0 }) // .select() is an alias for projection
      // Sort them in Descending Order
      .sort({ price: -1 })
      // and skip pages that you have already looked at. Page 1 - 1 = 0, * limit = 0, so skip 0 items for Page 1
      .skip((page - 1) * limit)
      // And finally, limit the amount of documents that we return.
      .limit(limit);
    console.log("Final paginated, sorted, and projected results:", results);
    res.json(results);
  } catch (err) {
    res.send("Error: " + err);
  }
});

// On our price route, we are looking to get ONLY items that are less that $50
routes.get("/price", async (req, res) => {
  //Price less than 50 and greater than 10
  // const results = await Product.find({$and: [{price: {$lt: 50}}, {price: {$gt: 10}}]})

  // so we use our Query object to match price, where the value is less than 50
  const results = await Product.find({ price: { $lt: 50 } })
    .select({ name: 1, price: 1, _id: 0 }) // Project just the name and price fields, and exclude _id
    // .select({name: 1, price: 1}) // Does not remove the _id field, we have to do that manually
    .sort({ price: -1 }); // before sorting the values in descending order.
  res.json(results);
});

/*
    ========== Post Routes ==========
*/

routes.post("/", async (req, res) => {
  const response = await Product.create(req.body);
  res.send(response);
});

export default routes;
