"use strict";

const mongoose = require('mongoose');
const { Double } = require('mongodb');

const shopSchema = new mongoose.Schema({
    name: String,
    icon: String,
    adress: String,
    minimumPrice: Number,
    products: Array
});

module.exports = mongoose.model('shop',shopSchema);