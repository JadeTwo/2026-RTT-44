import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';

const uri = process.env.MONGO_URI

mongoose.connect(uri)
    .then(() => console.log('Successfully connected to MongoDB!'))
    .catch((err) => console.log('Connection Error', err))

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})