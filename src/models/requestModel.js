"use strict";

const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    userID: mongoose.Types.ObjectId,
    courierID: mongoose.Types.ObjectId,
    commission: Number,
    desiredDeliveryTimeStart: Date,
    desiredDeliveryTimeEnd: Date,
    itemList: Array
});

module.exports = mongoose.model('requests', requestSchema);