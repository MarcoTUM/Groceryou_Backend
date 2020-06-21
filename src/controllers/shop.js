"use strict";
const shops = require('../testdata/shops'); 

const shopModel = require('../models/shopModel');

// list all shops and their data
const list = async(req, res)=>{
    // for test purpose, read from ../testdata instead of DB <w
    res.status(200).json(shops);
}

module.exports ={
    list
}