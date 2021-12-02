const express = require('express');
const router = express.Router();
const Entry = require('../models/entriesModel');

//configure route
router.route('/Journal').post((req, res) => {
    const user = req.body.user;
    const content = req.body.content;
    const newEntry = new Entry({
        user,
        content
    });
    newEntry.save();
})

module.exports = router;