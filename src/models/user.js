"use strict";

const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    isCourier:{
      type: Boolean,
      default: false
    }
});

module.exports = mongoose.model('User', UserSchema);
