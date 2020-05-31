const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 8080;

// db setup
const db = require("./db");
const dbName = "data";
const collectionName = "shopping_requests";

// db init
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });

    // CRUD
    // create
    server.post("/items", (request, response) => {
        const item = request.body;
        dbCollection.insertOne(item, (error, result) => {  // callback of insertOne
            if(error) throw error;
            // return updated collection
            dbCollection.find().toArray((_error, _result) => {
                if (_error) throw _error;
                response.json(_result);
            });
        });
    })

    // read by id
    server.get("/items/:id", (request,response) => {
        const itemId = request.params.id;

        dbCollection.findOne({ id: itemId}, (error, result) => {
            if (error) throw error;

            // return item
            response.json(result);
        })
    })

    // read all
    server.get("/items", (request, response) => {
        // return updated list
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json(result);
        });
    });

    // update by id
    server.put("/items/:id", (request, response) => {
        const itemId = request.params.id;
        const item = request.body;
        console.log("Update item: ", itemId, " to be ", item);

        dbCollection.updateOne({ id: itemId}, {$set: item}, (error, result) => {
            if(error) throw error;
            // // send back updated collection
            dbCollection.find().toArray((_error, _result) => {
                if(_error) throw _error;
                response.json(_result);
            });
        });
    })

    // delete by id
    server.delete("/items/:id", (request, response) => {
        const itemId = request.params.id;
        console.log("Delete item with id: ", itemId);

        dbCollection.deleteOne({ id: itemId}, (error, result) => {
            if (error) throw error;
            // send back updated collection
            dbCollection.find().toArray((_error, _result) => {
                if (_error) throw _error;
                response.json(_result);
            });
        });
    });


}, function(err) { // failureCallback
    throw (err);
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});





// 
