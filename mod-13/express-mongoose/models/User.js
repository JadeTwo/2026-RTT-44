// bring in mongoose
import mongoose from 'mongoose';

// extracting/destructuring the Schema from mongoose
const { Schema } = mongoose

// to create a user schema 
const userSchema = new Schema({
    email: String,
    username: String,
    age: Number
})

// generate the model
const User = mongoose.model('User', userSchema);

// make it accessible throughout our application
export default User;




