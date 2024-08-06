const mongoose = require('mongoose')

const Schema = mongoose.Schema

const addressSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    addressLine1 : {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    pincode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
} , {timestamps: true})

const Address = mongoose.model('Address', addressSchema)

module.exports = Address