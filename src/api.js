"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const middlewares = require('./middlewares');

const auth = require('./routes/auth');
const shopReq = require('./routes/shopReq');
const customerRequest = require('./routes/customerRequestRoutes');

const api = express();

// Basic middleware addition
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: false}));
api.use(middlewares.allowCrossDomain);

//Basic route
api.get('/', (req,res) => {
    res.json({
        name: 'SEBA Groceryou Backend'
    });
});

//API routes
api.use('/auth', auth);
api.use('/shopReq', shopReq);
api.use('/customerRequest', customerRequest);

module.exports = api;
