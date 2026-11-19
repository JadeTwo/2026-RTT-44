import { Router } from "express";
import Product from "../models/Product.js";

const routes = Router();

routes.get("/", async (req, res) => {
  const page = 1;
  const limit = 5;
  try{

      const results = await Product.find({
          category: "Electronics",
          price: { $gt: 600 },
        })
        .select({ name: 1, price: 1, stock: 1, _id: 0 }) // .select() is an alias for projection
        .sort({ price: -1 })
        .skip((page - 1) * limit)
        .limit(limit);
        console.log("Final paginated, sorted, and projected results:", results);
        res.json(results);
    } catch(err){
        res.send("Error: "+ err)
    }
});

routes.post("/", async (req, res) => {
  const response = await Product.create(req.body);
  res.send(response);
});

export default routes;
