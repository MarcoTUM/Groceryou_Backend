// db.js

// mongodb driver
// const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://user1:user1Pass@cluster0-21g8j.mongodb.net/test?retryWrites=true&w=majority';

function initialize() {
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true});

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    return db
}

module.exports = {
    initialize
};
