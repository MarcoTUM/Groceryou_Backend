const mongoose = require('mongoose')

const shoppingRequestSchema = new mongoose.Schema({
    client:{
        type: String,
        required: [true, 'Client name is required']
    }
    created: {
        type: Date,
        required: [true, 'Created date is required']
    }
})

module.exports = shoppingRequestSchema
