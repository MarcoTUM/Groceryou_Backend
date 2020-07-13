"use strict";

const express = require('express');
const router = express.Router();

const smsController = require('../controllers/sms');

router.post('/', smsController.send);

module.exports = router;
