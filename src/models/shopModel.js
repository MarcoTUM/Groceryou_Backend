"use strict";

const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    name: String,
    adress: String,
    products: Array
});

module.exports = mongoose.model('shop',shopSchema);