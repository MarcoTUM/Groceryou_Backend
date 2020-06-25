"use strict";

const mongoose = require('mongoose')

const shoppingRequestSchema = new mongoose.Schema({
    name: String,
    time: Date,
});

module.exports = mongoose.model('shopRequest',shoppingRequestSchema);