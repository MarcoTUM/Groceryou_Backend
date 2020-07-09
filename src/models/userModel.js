"use strict";

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    isCourier:{
      type: Boolean,
      default: false
    },
    userData: {
        name: String,
        surname: String,
        phoneNumber: Number,
        address: {
            street: String,
            PLZ: Number,
            city: String,
            houseNr: Number
        }    
    }
});

module.exports = mongoose.model('users', UserSchema);