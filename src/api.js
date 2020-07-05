"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const middlewares = require('./middlewares');

const auth = require('./routes/auth');
const users = require('./routes/userRoutes');
const requests = require('./routes/requestRoutes');
const shopsApi = require('./routes/shopsApi');
const sms = require('./routes/sms');
const { UserInstance } = require('twilio/lib/rest/chat/v1/service/user');

const api = express();

// Basic middleware addition
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: false}));
api.use(middlewares.allowCrossDomain);

// Enable public access to all files in public
api.use(express.static('public'))

//Basic route
api.get('/', (req,res) => {
    res.json({
        name: 'SEBA Groceryou Backend'
    });
});

//API routes
api.use('/auth', auth);
api.use('/users', users);
api.use('/requests', requests);
api.use('/shops', shopsApi);
api.use('/sms',sms)

module.exports = api;
