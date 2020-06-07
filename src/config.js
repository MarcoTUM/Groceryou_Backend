"use strict";

require('dotenv').config();

//Config Vars
const port = process.env.PORT;
const JwtSecret = process.env.JWT_SECRET;
const mongoUser = process.env.MDB_USR;
const mongoPwd = process.env.MDB_PWD;

let mongoString = 'mongodb+srv://';
mongoString += mongoUser + ':' + mongoPwd;
mongoString += '@cluster0-21g8j.mongodb.net/test?retryWrites=true&w=majority';

require('dotenv').config();


module.exports = {
    port,
    JwtSecret,
    mongoString
}