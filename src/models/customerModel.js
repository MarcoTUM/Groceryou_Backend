"use strict";

const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    userID: mongoose.Types.ObjectId,
    name: String,
    surname: String,
    gender: String,
    street: String,
    PLZ: Number,
    city: String
});

module.exports = mongoose.model('customerModel', customerSchema);