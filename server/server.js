const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect('mongodb+srv://theDrewery:&useHim22@cluster0.ep39u.mongodb.net/JournalDB');
//require route

app.use('/', require('./routes/entriesRoute'));


app.listen(3001, function () {
    console.log("express server is running on port 3001");
})

module.exports = app;