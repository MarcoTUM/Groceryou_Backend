const express = require("express");
const server = express();
const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://user1:user1Pass@cluster0-21g8j.mongodb.net/test?retryWrites=true&w=majority';

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 8080;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    var shopReqModel = require('./models/shoppingRequest');

    //optional code puts a new order request in DB and gets all requests

    //
    // console.log(Date.now())
    //
    // dummy = new shopReqModel({
    //     name: 'test',
    //     time: Date.now()
    // });
    //
    // console.log("dummy:");
    // console.log(dummy.time);
    //
    // await dummy.save();
    //
    // var query = shopReqModel.find();
    // var promise = await query.exec();
    // console.log(promise);

    server.listen(port, () => {
        console.log(`Server listening at ${port}`);
    });

    server.get('/',async (req,res) => {
        console.log('hello get!');
        var query = shopReqModel.find();
        var promise = await query.exec();
        console.log(promise);
        res.json(promise);
    });

});




