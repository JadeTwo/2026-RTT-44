import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category:{
        type: String
    }
})

const Product = mongoose.model("Product", productSchema)

export default Product