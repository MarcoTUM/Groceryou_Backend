"use strict";

const mongoose = require('mongoose')

const customerRequestSchema = new mongoose.Schema({
    customerID: Number,
    courierID: Number,
    name: String,
    surname: String,
    gender: String,
    street: String,
    PLZ: Number,
    city: String,
    commission: Number,
    amountOfItems: Number,
    //desiredDeliveryTimeStart: Date,
    //desiredDeliveryTimeEnd: Date
});

module.exports = mongoose.model('customerRequestModel',customerRequestSchema);