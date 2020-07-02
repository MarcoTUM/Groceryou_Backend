"use strict";

const mongoose = require('mongoose');

const customerRequestSchema = new mongoose.Schema({
    customerID: mongoose.Types.ObjectId,
    courierID: mongoose.Types.ObjectId,
    commission: Number,
    amountOfItems: Number,
    desiredDeliveryTimeStart: Date,
    desiredDeliveryTimeEnd: Date,
    itemList: Array
});

module.exports = mongoose.model('customerRequestModel',customerRequestSchema);