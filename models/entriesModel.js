const mongoose = require('mongoose');

const entriesSchema = {
    user: String,
    content: String
}

const Entry = mongoose.model("Entry", entriesSchema);

module.exports = Entry;