"use strict";

const accountSid = require('../config').twiliowAccountSid;
const authToken = require('../config').twilowAuthToken;
const twilioTargetNr = require('../config').twiliowTargetNr

const client = require('twilio')(accountSid, authToken);

const send = async(req,res) => {

    if(!Object.prototype.hasOwnProperty.call(req.body, 'body')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a message body'
    });

    if(!Object.prototype.hasOwnProperty.call(req.body, 'number')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a recipient number'
    });

    client.messages.create({
        body: req.body.body,
        from: '+12017343131',
        // to: req.body.number, <- what should actually happen
        to: twilioTargetNr
    }).then(
        (message) => {
            res.status(200);
    }).catch((e) => {
        console.log(e);
    });

};

module.exports = {
    send
};
