// bring in mongoose
import mongoose from "mongoose";

// extract/destructure the Schema class
import { Schema } from "mongoose";

// creating our Schema which defines our documents in our books collection
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publicationYear: Number,
    genres: [String],
    inStock: {
        type: Boolean,
        default: true
    }
})

// use the Schema to generate the model, which we use to interact with the database
const Book = mongoose.model("Book", bookSchema);

// make this model available throughout our application
export default Book;