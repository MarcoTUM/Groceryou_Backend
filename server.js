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
mdb = db.initialize();

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
