import express from 'express';
const app = express();

import mongoose from 'mongoose';
const path = require('path');


//connect to mongoose
const MONGO_URI = 'mongodb+srv://theDrewery:&useHim22@cluster0.ep39u.mongodb.net/JournalDB'
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch((err) => console.log(err));
    
//middleware to show us request bodies
app.use(express.json());
app.use(express.urlencoded());


// app.use('/', require('./routes/entriesRoute'));
app.use('/api', routes);

app.listen(3001, function () {
    console.log("express server is running on port 3001");
})

module.exports = app;